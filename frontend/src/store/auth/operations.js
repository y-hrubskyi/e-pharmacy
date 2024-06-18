import { createAsyncThunk } from "@reduxjs/toolkit";

import API, { clearAuthHeader, setAuthHeader } from "@/services/axios";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/user/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/user/logout");
      clearAuthHeader();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
