import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { Icons } from "#config/icons";
import { selectAuthIsLoading } from "#store/auth/selectors";
import { logout } from "#store/auth/operations";

import * as SC from "./LogOutBtn.styled";

export const LogOutBtn = () => {
  const isLoading = useSelector(selectAuthIsLoading);
  const dispatch = useDispatch();

  const handleLogOutClick = async () => {
    try {
      const logoutPromise = dispatch(logout()).unwrap();
      await toast.promise(logoutPromise, {
        loading: "Logging out...",
        success: "Logout successful!",
        error: (error) => error,
      });
    } catch (error) {
      // handled in toast.promise
    }
  };

  return (
    <SC.LogOutBtn
      type="button"
      onClick={handleLogOutClick}
      disabled={isLoading}
      aria-label="logout"
    >
      <SC.LogOutIcon>
        <use href={Icons.logout}></use>
      </SC.LogOutIcon>
    </SC.LogOutBtn>
  );
};
