import { HttpStatusCode } from "./httpStatusCode";
import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_API_HOST || ""}/api`;

export const Api = axios.create({
  headers: {
    ContentType: "application/json",
  },
  baseURL,
});

Api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken") || "";

    config.headers["Authorization"] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === HttpStatusCode.UNAUTHORIZED &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken") || "";
        const response = await Api.post("/auth/token/refresh", {
          refresh: refreshToken,
        });

        const newAccessToken = response.data.access;
        localStorage.setItem("accessToken", newAccessToken);

        originalRequest.headers["Authorization"] =
          `Bearer ${newAccessToken}`;

        return Api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
