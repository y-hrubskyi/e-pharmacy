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
  isRefreshing: false,
};

const loginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.tokens = payload.tokens;
  state.isLoggedIn = true;
};

const logoutFulfilled = (state) => {
  state.user = { name: null, email: null };
  state.tokens = { accessToken: null, refreshToken: null };
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(login.fulfilled, loginFulfilled)
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
      .addMatcher(isAnyOf(logout.fulfilled, logout.rejected), logoutFulfilled),
});

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["tokens"],
};

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
