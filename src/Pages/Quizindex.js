import "./Quiz.css";
import React, { useContext } from "react";
import { db, storage } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import QuizContext from "../QuizContext";

import toast from "react-hot-toast";

export const Quizindex = () => {
  const [formState, setFormState] = React.useState(false);
  const navigate = useNavigate();
  const ctx = useContext(QuizContext);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phoneno: "",
    gender: "",
    age: "",
    work: "",
    id: "",
  });
  function onChangeHandler(e) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  }
  function submitHandler() {
    let d = new Date();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phoneno === "" ||
      formData.gender === "" ||
      formData.age === "" ||
      formData.work === ""
    ) {
      toast.error(" All Fields are Required");
    } else {
      let dataName = formData.name + d.getTime();
      setDoc(doc(db, "Quiz", dataName), {
        formData,
      }).then((res) => {
        setFormData({
          name: "",
          email: "",
          phoneno: "",
          gender: "",
          age: "",
          work: "",
          id: "",
        });
        toast.success("Register Successfully");
        ctx.setUser(dataName);
        ctx.setIsLoggedIn(true);
        navigate("/quiz");
      });
    }
  }
  return (
    <>
      <div
        class="d-flex align-items-center form-body justify-content-center"
        style={{ height: "120vh" }}
      >
        <form
          role="form"
          class="form  p-5  col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4"
        >
          <h4 className="text-weight-bold" style={{ color: "#b166a9" }}>
            Campuzone
          </h4>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              id="name"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Email"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              class="form-control"
              id="phoneno"
              placeholder="Phone"
              onChange={onChangeHandler}
            />

            <select
              class="form-select form-control"
              aria-label="Default select example"
              id="gender"
              onChange={onChangeHandler}
            >
              <option selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <input
              type="number"
              class="form-control"
              placeholder="Age"
              id="age"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Education/Work"
              id="work"
              onChange={onChangeHandler}
            />
          </div>

          <div class="form-group">
            <div
              class="btn btn-primary btn-create-account form-control "
              onClick={submitHandler}
            >
              Test Your Brain
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
