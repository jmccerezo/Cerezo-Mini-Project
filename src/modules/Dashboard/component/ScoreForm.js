import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { onOpenModal, onSubmitScore } from "../../action";
import DisplayModal from "../../Modal/DisplayModal";

const ScoreForm = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [score, setScore] = useState("");
  const [scoreError, setScoreError] = useState("");
  const [modal] = useState({
    title: "Success",
    message:
      "Your score has been successfully submitted. Please go to Scores page.",
  });
  const scores = useSelector((state) => state.scores);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.id == "name") {
      setName(e.target.value);
      validateName(e.target.value);
    }
    if (e.target.id == "score") {
      setScore(e.target.value);
      validateScore(e.target.value);
    }
  };

  const handleSubmit = () => {
    let id = scores.slice(-1)[0].id + 1;
    if (validateName(name) && validateScore(score)) {
      setName("");
      setScore("");
      dispatch(onSubmitScore({ id, name, score }));
      dispatch(onOpenModal(true));
    }
  };

  const validateName = (name) => {
    let alphabetsRegex = /^[A-Za-z ]+$/;
    let isValid;

    if (name == "") {
      setNameError("This is required*");
      isValid = false;
    } else if (alphabetsRegex.test(name)) {
      if (name.length < 3) {
        setNameError("Please input 3 or more characters*");
        isValid = false;
      } else {
        setNameError("");
        isValid = true;
      }
    } else if (!alphabetsRegex.test(name)) {
      setNameError("Please enter alphabets only*");
      isValid = false;
    } else {
      setNameError("");
      isValid = true;
    }

    return isValid;
  };

  const validateScore = (score) => {
    let isValid;

    if (score == "") {
      setScoreError("This is required*");
      isValid = false;
    } else if (score > 100) {
      setScoreError("Score should not be greater than 100*");
      isValid = false;
    } else if (score < 0) {
      setScoreError("Score should not be a negative number*");
      isValid = false;
    } else {
      setScoreError("");
      isValid = true;
    }

    return isValid;
  };

  return (
    <React.Fragment>
      <div className="form-container">
        <CssBaseline />
        <Container maxWidth="sm">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "300px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "25px",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleChange}
              value={name}
              style={{ width: "300px" }}
            />
            <FormHelperText error>{nameError}</FormHelperText>
            <TextField
              id="score"
              label="Score"
              variant="outlined"
              type="number"
              onChange={handleChange}
              onBlur={handleChange}
              value={score}
              style={{ width: "300px" }}
            />
            <FormHelperText error>{scoreError}</FormHelperText>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Container>
      </div>
      <DisplayModal title={modal.title} message={modal.message} />
    </React.Fragment>
  );
};

export default ScoreForm;
