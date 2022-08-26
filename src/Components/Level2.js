import React from "react";
import { Container } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
export const Level2 = (props) => {
  const { type } = props;
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

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
              name="quiz"
              value={value}
              onChange={handleRadioChange}
              style={{ textAlign: "left" }}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A) Doing a little bit on one until you get bored, then move to next  "
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="B) Either of both A) & B) i won’t do  "
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
              2) You're given with a week holiday for going a trip, what would
              you choose
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A) Leave immediately "
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="B) Take some time to plan the trip  "
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
              name="quiz"
              value={value}
              onChange={handleRadioChange}
              style={{ textAlign: "left" }}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A) Review the choices and see a solid right answer "
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="B) Think too much and get confused every time"
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="C)	Either of both A) & B) i won’t do  "
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        </form>
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
              name="quiz"
              value={value}
              onChange={handleRadioChange}
              style={{ textAlign: "left" }}
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
            variant="standard"
            style={{ display: "flex" }}
          >
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              style={{ textAlign: "left" }}
            >
              2) Pick any of the 2 jobs that you will not prefer doing it
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
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
              name="quiz"
              value={value}
              onChange={handleRadioChange}
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
              name="quiz"
              value={value}
              onChange={handleRadioChange}
              style={{ textAlign: "left" }}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A) Logical reasoning "
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="B) Practical solution "
              />
              <FormControlLabel
                value="worst"
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
              name="quiz"
              value={value}
              onChange={handleRadioChange}
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
              name="quiz"
              value={value}
              onChange={handleRadioChange}
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
        </form>
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
              name="quiz"
              value={value}
              onChange={handleRadioChange}
              style={{ textAlign: "left" }}
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
            style={{ display: "flex" }}
          >
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              style={{ textAlign: "left" }}
            >
              2) Imagine there is an annual day performance in your school
              happening. Which of the below will you not be selecting to perform
              at an any cause : (pick any 2)
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="quiz"
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
              name="quiz"
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
              name="quiz"
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
              name="quiz"
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
            style={{ display: "flex" }}
          >
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              style={{ textAlign: "left" }}
            >
              3) What will you prefer in forms of music ?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
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
        </form>
      </div>
    </>
  );
};
