"use client";
import { FC } from "react";
import {
  SnackbarProvider as NSProvider,
  SnackbarKey,
  useSnackbar,
} from "notistack";

// icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const SnackbarProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NSProvider
      action={(snackbarKey) => (
        <SnackbarCloseButton snackbarKey={snackbarKey} />
      )}
      disableWindowBlurListener
    >
      {children}
    </NSProvider>
  );
};

export default SnackbarProvider;

const SnackbarCloseButton = (props: { snackbarKey: SnackbarKey }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <button onClick={() => closeSnackbar(props.snackbarKey)}>
      <CloseRoundedIcon fontSize="small" />
    </button>
  );
};
