import axios from "axios";

import { store } from "#store/store";
import { setTokens } from "#store/auth/slice";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const hasForbiddenRoutes =
      error.request.responseURL.includes("login") ||
      error.request.responseURL.includes("refresh");

    if (error.response?.status === 401 && !hasForbiddenRoutes) {
      try {
        const refreshToken = store.getState().auth.tokens.refreshToken;
        setAuthHeader(refreshToken);

        const { data } = await instance.get("/user/refresh");

        setAuthHeader(data.accessToken);
        store.dispatch(setTokens(data));
        error.config.headers.authorization = `Bearer ${data.accessToken}`;

        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
