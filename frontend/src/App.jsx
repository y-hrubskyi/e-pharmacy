import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectAuthIsLoggedIn,
  selectAuthIsRefreshing,
} from "#store/auth/selectors";
import { refreshUser } from "#store/auth/operations";

import PrivateRoutes from "#routes/PrivateRoutes";
import RestrictedRoutes from "#routes/RestrictedRoutes";

export const App = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    setIsFirstRender(false);
  }, [dispatch]);

  if (isRefreshing || isFirstRender) return;

  if (isLoggedIn) return <PrivateRoutes />;

  return <RestrictedRoutes />;
};
