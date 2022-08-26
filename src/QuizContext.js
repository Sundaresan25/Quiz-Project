import React, { useState, useEffect } from "react";
import { db } from "./Firebase/Firebase";
import {
  doc,
  getDoc,
  getDocs,
  updateDoc,
  collection,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const QuizContext = React.createContext({
  setUser: () => {},
  user: "",
  setIsLoggedIn: () => {},
  isLoggedIn: Boolean,
});

export const QuizContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(user === "" ? false : true);

  return (
    <QuizContext.Provider
      value={{
        setUser: setUser,
        user: user,
        setIsLoggedIn: setIsLoggedIn,
        isLoggedIn: isLoggedIn,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
