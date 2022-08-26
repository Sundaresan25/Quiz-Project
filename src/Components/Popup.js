import clsx from "clsx";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
// import { XIcon } from "../../assets/icons";

export const Popuop = (props) => {
  const { onClickHandler, popsValue } = props;
  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        height: "100vh",
        width: "100%",
        background: " rgba(0, 0, 0, 0.5)",
        zIndex: "1218",
      }}
    >
      <div
        className={clsx("p-4 text-center shadow rounded popup")}
        style={{
          position: "fixed",
          height: "fit-content",
          background: "white",
          left: "0",
          top: "0",
          bottom: "0",
          right: "0",
          margin: "auto",
        }}
      >
        <CloseIcon
          className="m-2"
          style={{
            fontSize: "25px",
            fill: "#777",
            position: "absolute",
            right: "1.25rem",
            top: "1.25rem",
            cursor: "pointer",
          }}
          onClick={onClickHandler}
        />
        <h5 className="my-3 font-weight-bold" style={{ textAlign: "left" }}>
          Hello
        </h5>
        <p>{popsValue}</p>
      </div>
    </div>
  );
};
