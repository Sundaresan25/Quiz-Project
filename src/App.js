import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Quiz } from "./Pages/Quiz";
import { Quizindex } from "./Pages/Quizindex";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/" element={<Quizindex />}></Route>
      </Routes>
    </div>
  );
}

export default App;
