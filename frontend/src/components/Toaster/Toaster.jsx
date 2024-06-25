import { Toaster as HotToaster } from "react-hot-toast";
import { useTheme } from "styled-components";

export const Toaster = () => {
  const theme = useTheme();

  return (
    <HotToaster
      toastOptions={{
        style: {
          fontWeight: "bold",
          textAlign: "center",
          color: theme.colors.primaryText,
        },
      }}
    />
  );
};
