import { atom } from "jotai";

interface SnackbarDataProps {
  open: boolean;
  message: string;
  variant?: "default" | "success" | "error" | "info" | "alert";
}

export const snackbarDataAtom = atom<SnackbarDataProps>({
  open: false,
  message: "",
  variant: "default",
});

export const snackbarClosedManuallyAtom = atom(false);
