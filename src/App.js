import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Quiz } from "./Pages/Quiz";
import { Quizindex } from "./Pages/Quizindex";
import { useContext } from "react";
import QuizContext from "./QuizContext";

function App() {
  const ctx = useContext(QuizContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/" element={<Quizindex />}></Route>
        <Route
          path="/"
          element={ctx.isLoggedIn ? <Navigate to={"/quiz"} /> : <Quizindex />}
        ></Route>
        <Route
          path="/quiz"
          element={ctx.isLoggedIn ? <Quiz /> : <Navigate to={"/"} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
