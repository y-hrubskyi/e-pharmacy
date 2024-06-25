import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { login, logout, refreshUser } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  tokens: {
    accessToken: null,
    refreshToken: null,
  },
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const authPending = (state) => {
  state.isLoading = true;
};

const authRejected = (state) => {
  state.isLoading = false;
};

const authInFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.tokens = payload.tokens;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const authOutFulfilled = (state) => {
  state.user = { name: null, email: null };
  state.tokens = { accessToken: null, refreshToken: null };
  state.isLoggedIn = false;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, { payload }) => {
      state.tokens = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(login.fulfilled, authInFulfilled)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(login.pending, logout.pending), authPending)
      .addMatcher(isAnyOf(login.rejected, logout.rejected), authRejected)
      .addMatcher(isAnyOf(logout.fulfilled, logout.rejected), authOutFulfilled),
});

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["tokens"],
};

export const { setTokens } = authSlice.actions;

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
