import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Quiz } from "./Pages/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Quiz />}></Route>
        {/* <Route path="/signup" element={<Signup />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
