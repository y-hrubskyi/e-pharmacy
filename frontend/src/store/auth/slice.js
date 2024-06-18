import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { login, logout } from "./operations";

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
      .addMatcher(isAnyOf(logout.fulfilled, logout.rejected), logoutFulfilled),
});

export const authReducer = authSlice.reducer;
