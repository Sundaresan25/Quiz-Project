import clsx from "clsx";
import React from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { XIcon } from "../../assets/icons";

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  modalWidth: {
    width: "35%",
  },
}));
export const Popuo = () => {
  const Gclasses = globalStyles();
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={Gclasses.backDrop}>
        <div
          className={clsx(
            Gclasses.modalBox,
            classes.modalWidth,
            "p-4 text-center shadow rounded "
          )}
        >
          <XIcon
            className="m-2"
            style={{
              width: "0.8rem",
              height: "0.8rem",
              fill: "#777",
              position: "absolute",
              right: "1.25rem",
              top: "1.25rem",
              cursor: "pointer",
            }}
            
          />
          <h5
            className="my-3 font-weight-bold"
            style={{ textAlign: "left" }}
          >Hello</h5>

          
        </div>
      </div>
    </ThemeProvider>
  );
};
