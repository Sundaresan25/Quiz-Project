import PropTypes from "prop-types";
import * as React from "react";
import { makeStyles, styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Container } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import toast from "react-hot-toast";
import { Level1 } from "../Components/Level1";
import { Level3 } from "../Components/Level3";

import { Level2 } from "../Components/Level2";
import { Popuop } from "../Components/Popup";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(to left top, #167aee, #686ff1, #9b5feb, #c646dd, #eb12c6)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(to left top, #167aee, #686ff1, #9b5feb, #c646dd, #eb12c6)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient(to left top, #167aee, #686ff1, #9b5feb, #c646dd, #eb12c6)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient(to left top, #167aee, #686ff1, #9b5feb, #c646dd, #eb12c6)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-patch-question-fill"
        viewBox="0 0 16 16"
      >
        <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z" />
      </svg>
    ),
    2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-star-half"
        viewBox="0 0 16 16"
      >
        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
      </svg>
    ),
    3: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-stars"
        viewBox="0 0 16 16"
      >
        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
      </svg>
    ),
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["Level I", "Level II", "Submit"];

export const Quiz = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [modalState, setModalState] = React.useState(false);

  const [level2type, setLevel2type] = React.useState("");
  const [leftData, setLeftData] = React.useState({
    Question1: "",
    Question2: "",
    Question3: "",
    Question4: "",
    Question5: "",
    Question6: "",
    Question7: "",
    Question8: "",
    Question9: "",
    Question10: "",
    Question11: "",
    Question12: "",
  });
  const [rightData, setRightData] = React.useState({
    Question1: "",
    Question2: "",
    Question3: "",
    Question4: "",
    Question5: "",
    Question6: "",
    Question7: "",
    Question8: "",
    Question9: "",
    Question10: "",
    Question11: "",
    Question12: "",
  });
  const [popsValue, setPopupValue] = React.useState();

  function onChangeLeft(e) {
    setLeftData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  function onChangeRight(e) {
    setRightData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  function finalHandler(e) {
    if (level2type === "Left") {
      if (leftData.Question4 === "") {
        toast.error("Fill the All Question");
      } else if (leftData.Question4 === "Logical reasoning") {
        setPopupValue(
          "You have you own thinking and  determined to find the answer for your curious thought, and you will be a better researchers and innovator."
        );
        setModalState(true);
      } else if (leftData.Question4 === "Practical solution") {
        setPopupValue(
          "you are scientific evidence  oriented thicker and will reassure the solution for any problems, and have wide capacity to help the people in your own thoughts."
        );
        setModalState(true);
      } else {
        setPopupValue(
          "You are  dreamer of your own world and you prefer to make new things and if your creativity appreciated you will become a scientist. "
        );
        setModalState(true);
      }
    } else {
      if (rightData.Question1 === "") {
        toast.error("Fill the All Question");
      } else if (rightData.Question1 === "Athletics") {
        setPopupValue(
          "You are self driven person and you always targeted toward the goal and you are have inspiration and you will become inspirations to others"
        );
        setModalState(true);
      } else if (rightData.Question1 === "Drama") {
        setPopupValue(
          "you are great dreamer and you clearly understand the intentions of the others and you like to make the thing clear and perfect."
        );
        setModalState(true);
      } else if (rightData.Question1 === "Art work ") {
        setPopupValue(
          "you are great fans of the beautiful things and most frequently visualize the enjoyed images in your mind."
        );

        setModalState(true);
      } else if (rightData.Question1 === "Music") {
        setPopupValue(
          "you are a verysharp observer but aways try to be calm and you  appricate the good things of others and you would be good teacher."
        );
        setModalState(true);
      } else {
        setPopupValue(
          "You are good observer and discuss more with yourself and you share less but beautiful ad happing thing with others, everybody enjoy you accompany."
        );
        setModalState(true);
      }
    }
  }

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const [popup, setPopup] = React.useState(false);

  const handlePopup = () => {
    // Change state to the opposite (to ture) when checkbox changes
    setPopup(!popup);
  };

  return (
    <>
      {modalState && (
        <>
          <Popuop
            onClickHandler={() => setModalState(false)}
            popsValue={popsValue}
          />
        </>
      )}

      <Container className="mt-4 border-bottom">
        <Stack sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
                  {label}
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 ? (
                <Level1
                  submitHandler={(e, form) => {
                    e.preventDefault();
                    if (activeStep === 0) {
                      if (
                        form.Question1 === "" ||
                        form.Question2 === "" ||
                        form.Question3 === "" ||
                        form.Question4 === "" ||
                        form.Question5 === "" ||
                        form.Question6 === ""
                      ) {
                        toast.error("Answer all the Questions");
                      } else {
                        let optionData = Object.values(form);
                        let OptionA = optionData.filter(
                          (value) => value === "A"
                        ).length;
                        let OptionB = optionData.filter(
                          (value) => value === "B"
                        ).length;
                        let OptionC = optionData.filter(
                          (value) => value === "C"
                        ).length;
                        if (OptionA > OptionB && OptionA > OptionC) {
                          setLevel2type("Left");
                          console.log(OptionA, OptionB);
                          setActiveStep((prevActiveStep) => prevActiveStep + 1);
                        } else if (OptionB > OptionA && OptionB > OptionC) {
                          setLevel2type("Right");
                          setActiveStep((prevActiveStep) => prevActiveStep + 1);
                        } else if (OptionC > OptionA && OptionC > OptionB) {
                          setModalState(true);
                        } else if (OptionA === OptionB) {
                          setLevel2type("Middle");
                          setActiveStep((prevActiveStep) => prevActiveStep + 1);
                        }
                      }
                    }
                  }}
                />
              ) : activeStep === 1 ? (
                <Level2
                  type={level2type}
                  onChangeLeft={onChangeLeft}
                  onChangeRight={onChangeRight}
                  leftData={leftData}
                  rightData={rightData}
                  submitHandler={(e, type) => {
                    e.preventDefault();
                    setLevel2type(type);
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                  }}
                />
              ) : (
                <Level3
                  type={level2type}
                  onChangeLeft={onChangeLeft}
                  onChangeRight={onChangeRight}
                  leftData={leftData}
                  rightData={rightData}
                />
              )}

              {activeStep === 2 && (
                <div className="text-center">
                  <button
                    className="btn btn-primary m-2"
                    onClick={() =>
                      setActiveStep((prevActiveStep) => prevActiveStep - 1)
                    }
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-primary m-2"
                    onClick={finalHandler}
                  >
                    Submit
                  </button>
                </div>
              )}
            </React.Fragment>
          )}
        </Stack>
      </Container>
    </>
  );
};
