import { snackbarDataAtom } from "@/store/snackbarAtoms";
import Button from "@lib/Button";
import { useSetAtom } from "jotai";
import { FC } from "react";

const HomePrimaryTab: FC = () => {
  const setSnackbar = useSetAtom(snackbarDataAtom);
  return (
    <div className="flex flex-col items-center">
      <span>This is *Primary* tab</span>
      <p className="mt-4">Testing the toast message:</p>
      <div className="flex gap-2 mt-4">
        <Button
          className="bg-gray-700 text-white"
          onClick={() =>
            setSnackbar({
              open: true,
              message: "This is a normal snackbar.",
            })
          }
        >
          Default message
        </Button>
        <Button
          className="bg-green-700 text-white"
          onClick={() =>
            setSnackbar({
              open: true,
              message: "This is a success snackbar.",
              variant: "success",
            })
          }
        >
          Success message
        </Button>
        <Button
          className="bg-red-500 text-white"
          onClick={() =>
            setSnackbar({
              open: true,
              message: "This is a error snackbar.",
              variant: "error",
            })
          }
        >
          Error message
        </Button>
        <Button
          className="bg-blue-500 text-white"
          onClick={() =>
            setSnackbar({
              open: true,
              message: "This is a info snackbar.",
              variant: "info",
            })
          }
        >
          Info message
        </Button>
        <Button
          className="bg-yellow-500 text-white"
          onClick={() =>
            setSnackbar({
              open: true,
              message: "This is a alert snackbar.",
              variant: "alert",
            })
          }
        >
          Alert message
        </Button>
      </div>
    </div>
  );
};

export default HomePrimaryTab;
