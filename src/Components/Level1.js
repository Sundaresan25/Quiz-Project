import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";

export const Level1 = (props) => {
  const { onChangeHandler } = props;
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

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
            1) Imagine you’re given a writing assessment.Select any of them :
          </FormLabel>
          <RadioGroup
            style={{ textAlign: "left" }}
            aria-labelledby="demo-error-radios"
            name="Question1"
            value={value}
            onChange={onChangeHandler}
          >
            <FormControlLabel
              value="A"
              control={<Radio />}
              label="A)	Describe the planets in the solar system "
            />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label="B)	Write about your favorite fairy tale that you want to be.  "
            />
            <FormControlLabel
              value="C"
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
            2) How will you dressed up, based on
          </FormLabel>
          <RadioGroup
            style={{ textAlign: "left" }}
            aria-labelledby="demo-error-radios"
            name="Question2"
            // value={value}
            onChange={onChangeHandler}
          >
            <FormControlLabel
              value="A"
              control={<Radio />}
              label="A)	The outfit you planned"
            />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label="B)	Whatever is good to have "
            />
            <FormControlLabel
              value="C"
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
            name="Question3"
            // value={value}
            onChange={onChangeHandler}
          >
            <FormControlLabel
              value="A"
              control={<Radio />}
              label="A)	To be a director"
            />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label="B)	To be a lead actor"
            />
            <FormControlLabel
              value="C"
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
            name="Question4"
            // value={value}
            onChange={onChangeHandler}
          >
            <FormControlLabel
              value="A"
              control={<Radio />}
              label="A)	That's unfair"
            />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label="B)	Thinking of i really might be "
            />
            <FormControlLabel
              value="C"
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
            name="Question5"
            // value={value}
            onChange={onChangeHandler}
          >
            <FormControlLabel
              value="A"
              control={<Radio />}
              label="A)	 Control your emotions"
            />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label="B)	 Cry little"
            />
            <FormControlLabel
              value="C"
              control={<Radio />}
              label="C)	Either of both A) & B) i won’t do"
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>

        {/* quest 6 */}
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
            6) When you eat Gems chocolate , you tempted to:
          </FormLabel>
          <RadioGroup
            style={{ textAlign: "left" }}
            aria-labelledby="demo-error-radios"
            name="Question6"
            // value={value}
            onChange={onChangeHandler}
          >
            <FormControlLabel
              value="A"
              control={<Radio />}
              label="A)	Arrange them in colours and then eat in order"
            />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label="B)	Will hide in class and eat during my bored times"
            />
            <FormControlLabel
              value="C"
              control={<Radio />}
              label="C)	Either of both A) & B) i won’t do"
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </form>
    </>
  );
};
