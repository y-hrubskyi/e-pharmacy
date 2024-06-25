import { createAsyncThunk } from "@reduxjs/toolkit";

import API, { clearAuthHeader, setAuthHeader } from "#services/axios";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/user/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/user/logout");
      clearAuthHeader();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/user-info",
  async (_, { getState, rejectWithValue }) => {
    try {
      const persistedAccessToken = getState().auth.tokens.accessToken;
      if (persistedAccessToken === null) {
        return rejectWithValue("Unable to fetch user info");
      }

      setAuthHeader(persistedAccessToken);
      const { data } = await API.get("/user/user-info");

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
