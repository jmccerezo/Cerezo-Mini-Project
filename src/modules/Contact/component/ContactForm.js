import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { onOpenModal } from "../../action";
import DisplayModal from "../../Modal/DisplayModal";

const ContactForm = () => {
  const [fullname, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [modal] = useState({
    title: "We'll be in touch",
    message: "Thank you for sending us a message.",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.id == "fullname") {
      setFullName(e.target.value);
      validateFullName(e.target.value);
    }
    if (e.target.id == "email") {
      setEmail(e.target.value);
      validateEmail(e.target.value);
    }
    if (e.target.id == "message") {
      setMessage(e.target.value);
      validateMessage(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (
      validateFullName(fullname) &&
      validateEmail(email) &&
      validateMessage(message)
    ) {
      setFullName("");
      setEmail("");
      setMessage("");
      dispatch(onOpenModal(true));
    }
  };

  const validateFullName = (fullname) => {
    let alphabetsRegex = /^[A-Za-z ]+$/;
    let isValid;

    if (fullname == "") {
      setFullNameError("This is required*");
      isValid = false;
    } else if (alphabetsRegex.test(fullname)) {
      if (fullname.length < 3) {
        setFullNameError("Please input 3 or more characters*");
        isValid = false;
      } else {
        setFullNameError("");
        isValid = true;
      }
    } else if (!alphabetsRegex.test(fullname)) {
      setFullNameError("Please enter alphabets only*");
      isValid = false;
    } else {
      setFullNameError("");
      isValid = true;
    }

    return isValid;
  };

  const validateEmail = (email) => {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid;

    if (email == "") {
      setEmailError("This is required*");
      isValid = false;
    } else if (!pattern.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
      isValid = true;
    }

    return isValid;
  };

  const validateMessage = (message) => {
    let isValid;

    if (message == "") {
      setMessageError("This is required*");
      isValid = false;
    } else {
      setMessageError("");
      isValid = true;
    }

    return isValid;
  };

  return (
    <>
      <div className="h-one-container">
        <h1>Send us a message</h1>
      </div>
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
              id="fullname"
              label="Full Name"
              variant="outlined"
              style={{ width: "300px" }}
              onChange={handleChange}
              onBlur={handleChange}
              value={fullname}
            />
            <FormHelperText error>{fullNameError}</FormHelperText>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              style={{ width: "300px" }}
              onChange={handleChange}
              onBlur={handleChange}
              value={email}
            />
            <FormHelperText error>{emailError}</FormHelperText>
            <TextareaAutosize
              id="message"
              aria-label="minimum height"
              minRows={3}
              placeholder="Your message"
              style={{
                width: 300,
                maxWidth: 300,
                padding: 10,
                backgroundColor: "whitesmoke",
              }}
              onChange={handleChange}
              onBlur={handleChange}
              value={message}
            />
            <FormHelperText error>{messageError}</FormHelperText>
            <Button variant="contained" onClick={handleSubmit}>
              <SendIcon />
            </Button>
          </Box>
        </Container>
      </div>
      <DisplayModal title={modal.title} message={modal.message} />
    </>
  );
};

export default ContactForm;
