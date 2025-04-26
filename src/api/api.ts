import { HttpStatusCode } from "./httpStatusCode";
import { ENV } from "@/constants";
import axios from "axios";

const baseURL = `http://${ENV.apiHost}:${ENV.apiPort}/api`;

export const Api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL,
});

Api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

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
    const refreshToken = localStorage.getItem("refreshToken");

    if (
      refreshToken &&
      error.response.status === HttpStatusCode.UNAUTHORIZED &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
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
