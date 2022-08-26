import React from "react";
import { toast } from "react-hot-toast";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
export const Level2 = (props) => {
  const { type, onChangeLeft, submitHandler, leftData, rightData } = props;
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const [questionType, setQuestionType] = React.useState(type);
  const [middleData, setMiddleData] = React.useState({
    Question1: "",
    Question2: "",
    Question3: "",
  });

  function onChangeHandler(e) {
    setMiddleData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  function middeleChanger() {
    if (
      middleData.Question1 === "" ||
      middleData.Question2 === "" ||
      middleData.Question3 === ""
    ) {
      toast.error("All Questions Are Required");
    } else {
      let optionData = Object.values(middleData);
      let OptionA = optionData.filter((value) => value === "A").length;
      let OptionB = optionData.filter((value) => value === "B").length;
      if (OptionA > OptionB) {
        setQuestionType("Left");
      } else {
        setQuestionType("Right");
      }
    }
  }

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };
  return (
    <>
      <div className="bg-white ">
        {questionType === "Middle" ? (
          <form onSubmit={handleSubmit}>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              variant="standard"
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                1) You have 2 projects at the same time, what would you do?
                Finishing one by one
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="Question1"
                value={middleData.Question1}
                onChange={onChangeHandler}
                style={{ textAlign: "left" }}
              >
                <FormControlLabel
                  value="A"
                  control={<Radio />}
                  label="A) Finishing one by one   "
                />
                <FormControlLabel
                  value="B"
                  control={<Radio />}
                  label="B) Doing a little bit on one until you get bored, then move to next  "
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              variant="standard"
              value={middleData.Question2}
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                2) You're given with a week holiday for going a trip, what would
                you choose
              </FormLabel>
              <RadioGroup
                style={{ textAlign: "left" }}
                aria-labelledby="demo-error-radios"
                name="Question2"
                value={middleData.Question2}
                onChange={onChangeHandler}
              >
                <FormControlLabel
                  value="A"
                  control={<Radio />}
                  label="A) Leave immediately "
                />
                <FormControlLabel
                  value="B"
                  control={<Radio />}
                  label="B) Take some time to plan the trip  "
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              variant="standard"
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                3) During multiple choice test,
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="Question3"
                value={middleData.Question3}
                onChange={onChangeHandler}
                style={{ textAlign: "left" }}
              >
                <FormControlLabel
                  value="A"
                  control={<Radio />}
                  label="A) Review the choices and see a solid right answer "
                />
                <FormControlLabel
                  value="B"
                  control={<Radio />}
                  label="B) Think too much and get confused every time"
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <button className="btn btn-primary m-2" onClick={middeleChanger}>
              {" "}
              Next{" "}
            </button>
          </form>
        ) : questionType === "Left" ? (
          <form onSubmit={handleSubmit}>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              variant="standard"
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                1)Imagine you are been providing a job what will you from the
                below (pick any2)Imagine you are been providing a job what will
                you from the below (pick any2)
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="Question1"
                value={leftData.Question1}
                onChange={onChangeLeft}
                style={{ textAlign: "left" }}
              >
                <FormControlLabel
                  value="A"
                  control={<Radio />}
                  label="A) Maths / Science teacher   "
                />
                <FormControlLabel
                  value="B"
                  control={<Radio />}
                  label="B) Crictal evaluater in a IT firm  "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="C) Researcher  "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="D) Travel guide  "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="E) Documenter"
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              variant="standard"
              value={leftData.Question2}
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                2) Which color you like
              </FormLabel>
              <RadioGroup
                style={{ textAlign: "left" }}
                aria-labelledby="demo-error-radios"
                name="Question2"
                value={value}
                onChange={onChangeLeft}
              >
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="A) Maths / Science teacher   "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="B) Crictal evaluater in a IT firm  "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="C) Researcher  "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="D) Travel guide  "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="E) Documenter"
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              value={leftData.Question3}
              variant="standard"
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                3) According to best science or maths teacher are trained from
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="Question3"
                value={value}
                onChange={onChangeLeft}
                style={{ textAlign: "left" }}
              >
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="A) Art"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="B) Science"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="C) Knowledge"
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              value={leftData.Question4}
              variant="standard"
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                4) To solve a problem in your company what is needed
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="Question4"
                value={value}
                onChange={onChangeLeft}
                style={{ textAlign: "left" }}
              >
                <FormControlLabel
                  value="Logical reasoning"
                  control={<Radio />}
                  label="A) Logical reasoning "
                />
                <FormControlLabel
                  value="Practical solution "
                  control={<Radio />}
                  label="B) Practical solution "
                />
                <FormControlLabel
                  value="Creative solution"
                  control={<Radio />}
                  label="C) Creative solution"
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              variant="standard"
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                5) To be a travel guide what is needed
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="Question5"
                value={value}
                onChange={onChangeLeft}
                style={{ textAlign: "left" }}
              >
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="A) Huge knowledge about the places "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="B) Maps and books "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="C) Neither A & B"
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              value={leftData.Question5}
              variant="standard"
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                6) You are a researcher in a company , what will the environment
                you would pick to work
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="Question6"
                value={leftData.Question6}
                onChange={onChangeLeft}
                style={{ textAlign: "left" }}
              >
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="A) Must be organised workspace "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="B) Can the workspace be messy too"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="C) Clean and natural environment "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="D) Discussion or conference halls"
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <button
              className="btn btn-primary m-2"
              onClick={(e) => submitHandler(e, type)}
            >
              {" "}
              Next{" "}
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              variant="standard"
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                1) Imagine there is an annual day performance in your school
                happening. Which of the below will you be selecting to perform :
                (pick any 2)
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="Question1"
                value={rightData.Question1}
                onChange={handleRadioChange}
                style={{ textAlign: "left" }}
              >
                <FormControlLabel
                  value="Athletics"
                  control={<Radio />}
                  label="A) Athletics "
                />
                <FormControlLabel
                  value=" Drama "
                  control={<Radio />}
                  label="B) Drama  "
                />
                <FormControlLabel
                  value="Art work "
                  control={<Radio />}
                  label="C) Art work  "
                />
                <FormControlLabel
                  value="Music"
                  control={<Radio />}
                  label="D) Music  "
                />
                <FormControlLabel
                  value="standup comedy"
                  control={<Radio />}
                  label="E) standup comedy "
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              value={rightData.Question2}
              variant="standard"
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                2) Imagine there is an annual day performance in your school
                happening. Which of the below will you not be selecting to
                perform at an any cause : (pick any 2)
              </FormLabel>
              <RadioGroup
                style={{ textAlign: "left" }}
                aria-labelledby="demo-error-radios"
                name="Question2"
                value={value}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="A) Athletics "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="B) Drama  "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="C) Art work  "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="D) Music  "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="E) standup comedy "
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              variant="standard"
              value={rightData.Question3}
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                3) According to you which is important in playing a sport
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="Question3"
                value={value}
                onChange={handleRadioChange}
                style={{ textAlign: "left" }}
              >
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="A) physical strength "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="B) Mental strength "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="C) Both A & B "
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              variant="standard"
              value={rightData.Question4}
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                4) What is the genre which you prefer to read or write a book
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="Question4"
                value={value}
                onChange={handleRadioChange}
                style={{ textAlign: "left" }}
              >
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="A) Fiction (mystry, science , romance, fairy tale etc.,)"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="B) Non fiction ( history , autobiography etc.,)"
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              variant="standard"
              value={rightData.Question5}
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                5) Which form of painting is more lively ?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="Question5"
                value={value}
                onChange={handleRadioChange}
                style={{ textAlign: "left" }}
              >
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="A) Modern paintings "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="B) Old paintings "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="C)	Either of both A) & B) i won’t do  "
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 3 }}
              error={error}
              variant="standard"
              value={rightData.Question6}
              style={{ display: "flex" }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ textAlign: "left" }}
              >
                6) What will you prefer in forms of music ?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="Question6"
                value={value}
                onChange={handleRadioChange}
                style={{ textAlign: "left" }}
              >
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="A) To play a musical instrument  "
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="B) To sing a song"
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <button
              className="btn btn-primary m-2"
              // onClick={(e) => submitHandler(e, form)}
            >
              {" "}
              Next{" "}
            </button>
          </form>
        )}
      </div>
    </>
  );
};
