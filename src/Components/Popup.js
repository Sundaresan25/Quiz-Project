import clsx from "clsx";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Player } from "@lottiefiles/react-lottie-player";
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
        <Player
          src="https://assets5.lottiefiles.com/packages/lf20_4chtroo0.json"
          background="transparent"
          speed={1}
          style={{ height: "200px", width: "200px" }}
          className="head-img"
          autoplay
        />
        <h5 className="my-3 font-weight-bold" style={{ textAlign: "center" }}>
        Yup!! You're done with your brain dominance testing
        </h5>
        <p>{popsValue}</p>
      </div>
    </div>
  );
};
