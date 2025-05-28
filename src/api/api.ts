import { ENV } from "@/constants";
import axios, { HttpStatusCode } from "axios";

const baseURL = `http://${ENV.apiHost}:${ENV.apiPort}/api`;

export const Api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL,
});

Api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken") || "";

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

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
      error?.response?.status === HttpStatusCode.Unauthorized &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/token/refresh/")
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken") || "";

        const response = await Api.post("/auth/token/refresh/", {
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
