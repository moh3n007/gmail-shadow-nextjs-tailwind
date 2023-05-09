"use client";
import { FC, useMemo } from "react";

import { useAtom } from "jotai";
import { snackbarDataAtom } from "@/store/snackbarAtoms";
// icons
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";

const Snackbar: FC = () => {
  const [snackbarData, setSnackbarData] = useAtom(snackbarDataAtom);

  const Icon = useMemo(
    () => snackbarICon[snackbarData.variant ?? "default"],
    [snackbarData, snackbarICon]
  );

  if (snackbarData.open)
    return (
      <div
        id="toast-success"
        className="fixed animate-fade bottom-4 left-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        {!!Icon && (
          <div
            className={`inline-flex -m-2 mr-3 items-center justify-center flex-shrink-0 w-8 h-8 ${
              snackbarColorBase[snackbarData.variant ?? "success"]
            } ${
              snackbarColorLight[snackbarData.variant ?? "success"]
            } rounded-lg dark:bg-green-800 dark:text-green-200`}
          >
            <Icon fontSize="small" />
          </div>
        )}
        <div className=" text-sm font-normal">{snackbarData.message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={() =>
            setSnackbarData({
              open: false,
              message: "",
              variant: "default",
            })
          }
        >
          <CloseIcon fontSize="small" />
        </button>
      </div>
    );

  return <></>;
};

export default Snackbar;

const snackbarICon = {
  default: undefined,
  success: CheckIcon,
  error: CloseIcon,
  info: InfoRoundedIcon,
  alert: ReportProblemRoundedIcon,
};

const snackbarColorBase = {
  default: undefined,
  success: "text-green-500",
  error: "text-red-500",
  info: "text-blue-500",
  alert: "text-yellow-500",
};

const snackbarColorLight = {
  default: undefined,
  success: "bg-green-100",
  error: "bg-red-100",
  info: "bg-blue-100",
  alert: "bg-yellow-100",
};
