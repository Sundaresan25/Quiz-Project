import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";

export const Level3 = (props) => {
  const { type, leftData, rightData, onChangeLeft, onChangeRight } = props;
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
      {type === "Left" ? (
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
              1) You are a HR in a company , a candidate should be hired for
              manager post , how will you hire a person through interview
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="Question7"
              value={leftData.Question7}
              onChange={onChangeLeft}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A)	By logical , apptitude, reasoning , problem solving ,analysis skills 
              "
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="B)	By their experience and qualification"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="C)	Either of both A) & B) i won’t do   "
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>

          {/* //quest 2 */}

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
              2) Which Color you want
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="Question8"
              value={leftData.Question8}
              onChange={onChangeLeft}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A)	Red"
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="B)	Green"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="C)	Either of both A) & B) i won’t do"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
          {/* quest 3 */}
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
              3) In a theatre production, what would you do?
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="Question9"
              value={leftData.Question9}
              onChange={onChangeLeft}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A)	To be a director"
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="B)	To be a lead actor"
              />
              <FormControlLabel
                value="r"
                control={<Radio />}
                label="C)	Either of both A) & B) i won’t do"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>

          {/* quest4 */}

          <FormControl
            sx={{ m: 3 }}
            error={error}
            variant="standard"
            style={{ display: "flex" }}
          >
            <FormLabel
              id="demo-controlled-radio-buttons-group "
              style={{ textAlign: "left" }}
            >
              4) Someone just told you you're mad. You think to yourself:
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="Question10"
              value={leftData.Question10}
              onChange={onChangeLeft}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A)	That's unfair"
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="B)	Thinking of i really might be "
              />
              <FormControlLabel
                value="t"
                control={<Radio />}
                label="C)	Either of both A) & B) i won’t do"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>

          {/* quest5 */}

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
              5) According to you , “ a scientist can be dreamy and unrealistic
              to be unique in findings and experiments ”
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="Question11"
              value={leftData.Question11}
              onChange={onChangeLeft}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A)	strongly agree"
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="B)	Agree"
              />
              <FormControlLabel
                value="woqst"
                control={<Radio />}
                label="C)	Partial"
              />
              <FormControlLabel
                value="dorst"
                control={<Radio />}
                label="D)	Disagree"
              />
              <FormControlLabel
                value="aorst"
                control={<Radio />}
                label="E)	Strongly disagree"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
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
              1) During your PT period , what sport will you prefer
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="Question7"
              value={rightData.Question7}
              onChange={onChangeRight}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A)	Team sport ( cricket ,footbal etc.,)"
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="B)	Individual sport ( Running , jumping etc,.)"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>

          {/* //quest 2 */}

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
              2) How will you dressed up, based on
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="Question8"
              value={rightData.Question8}
              onChange={onChangeRight}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A)	The outfit you planned"
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="B)	Whatever is good to have "
              />
              <FormControlLabel
                value="wlrst"
                control={<Radio />}
                label="C)	Either of both A) & B) i won’t do"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>

          {/* quest 3 */}
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
              3) In a theatre production, what would you do?
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="Question9"
              value={rightData.Question9}
              onChange={onChangeRight}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A)	To be a director"
              />
              <FormControlLabel
                value="rst"
                control={<Radio />}
                label="B)	To be a lead actor"
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="C)	Either of both A) & B) i won’t do"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>

          {/* quest4 */}

          <FormControl
            sx={{ m: 3 }}
            error={error}
            variant="standard"
            style={{ display: "flex" }}
          >
            <FormLabel
              id="demo-controlled-radio-buttons-group "
              style={{ textAlign: "left" }}
            >
              4) Someone just told you you're mad. You think to yourself:
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="Question10"
              value={rightData.Question10}
              onChange={onChangeRight}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A)	That's unfair"
              />
              <FormControlLabel
                value="wot"
                control={<Radio />}
                label="B)	Thinking of i really might be "
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="C)	Either of both A) & B) i won’t do"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>

          {/* quest5 */}

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
              5) If you watch a sad movie in your classroom, what would you do
            </FormLabel>
            <RadioGroup
              style={{ textAlign: "left" }}
              aria-labelledby="demo-error-radios"
              name="Question11"
              value={rightData.Question11}
              onChange={onChangeRight}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="A)	 Control your emotions"
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="B)	 Cry little"
              />
              <FormControlLabel
                value="s"
                control={<Radio />}
                label="C)	Either of both A) & B) i won’t do"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        </form>
      )}
    </>
  );
};
