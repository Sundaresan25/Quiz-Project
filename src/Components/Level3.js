import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";

export const Level3 = () => {
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
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="A"
              control={<Radio />}
              label="A)	By logical , apptitude, reasoning , problem solving ,analysis skills 
              "
            />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label="B)	By their experience and qualification"
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
            name="quiz"
            value={value}
            onChange={handleRadioChange}
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
            name="quiz"
            value={value}
            onChange={handleRadioChange}
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
            name="quiz"
            value={value}
            onChange={handleRadioChange}
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
            5) According to you , “ a scientist can be dreamy and unrealistic to
            be unique in findings and experiments ”
          </FormLabel>
          <RadioGroup
            style={{ textAlign: "left" }}
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="A"
              control={<Radio />}
              label="A)	strongly agree"
            />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label="B)	Agree"
            />
            <FormControlLabel
              value="C"
              control={<Radio />}
              label="C)	Partial"
            />
            <FormControlLabel
              value="D"
              control={<Radio />}
              label="D)	Disagree"
            />
            <FormControlLabel
              value="E"
              control={<Radio />}
              label="E)	Strongly disagree"
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
            name="quiz"
            value={value}
            onChange={handleRadioChange}
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
            name="quiz"
            value={value}
            onChange={handleRadioChange}
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
            2) Which will you enjoy the most ?
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
              label="A)	Going a art gallery museum "
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="B)	Going a painting class "
            />
            <FormControlLabel
              value="worst"
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
            3) Which will you enjoy the most ?
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
              label="A)	Singing in your house or concert"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="B)	Going to a concert to listen others performing "
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
            4) To be a successful Author / poem , what is necessary according to
            you
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
              label="A)	knowledged person "
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="B)	Logical person "
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="C)	Creative person"
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
            5) According to you , a person can be dreamy and unrealistic to be
            unique in some way”
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
              label="A)	strongly agreee"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="B)	Agree"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="C)	Partial"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="D)	Strongly disagree"
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>

        {/* quest 6 */}
      </form>
      
    </>
  );
};
