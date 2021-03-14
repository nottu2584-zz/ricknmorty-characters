import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormMessage } from "./";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../actions/auth";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  register: {
    flex: "1 1 auto",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    textAlign: "left",
    "& input": {
      margin: ".5rem 0",
    },
    "& label": {
      display: "inline-block",
      marginTop: ".5rem",
    },
    "& button": {
      marginTop: "1.5rem",
      "& span": {
        display: "inline-block",
        lineHeight: "1em",
      },
    },
  },
});

const required = (value) => {
  if (!value) {
    return (
      <div className="input-message danger" role="alert">
        This field is required
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="input-message danger" role="alert">
        The email is not valid
      </div>
    );
  }
};

const validUsername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="input-message danger" role="alert">
        Username must be between 3 and 20 characters
      </div>
    );
  }
};

const validPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="input-message danger" role="alert">
        Password must be between 6 and 40 characters
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const classes = useStyles();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div className={classes.register}>
      {message && (
        <>
          <FormMessage
            className={
              successful ? "form-message success" : "form-message danger"
            }
            role="alert"
            title={
              successful ? "Registration succesful!" : "Registration failed"
            }
          >
            {message}
          </FormMessage>
        </>
      )}
      <Form className={classes.form} onSubmit={handleRegister} ref={form}>
        {!successful && (
          <>
            <>
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required, validUsername]}
              />
            </>
            <>
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
                validations={[required, validEmail]}
              />
            </>
            <>
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className={`${classes.input} ${classes.password}`}
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required, validPassword]}
              />
            </>
            <>
              <button className={classes.button}>Sign Up</button>
            </>
          </>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default Register;
