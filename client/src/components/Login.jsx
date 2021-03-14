import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { FormMessage } from "./";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  login: {
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

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const classes = useStyles();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/characters");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) return <Redirect to="/characters" />;

  return (
    <div className={classes.login}>
      {message && (
        <>
          <FormMessage
            className="form-message danger"
            role="alert"
            title="Login failed"
          >
            {message}
          </FormMessage>
        </>
      )}
      <Form className={classes.form} onSubmit={handleLogin} ref={form}>
        <>
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            className={classes.input}
            name="username"
            value={username}
            onChange={onChangeUsername}
            validations={[required]}
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
            validations={[required]}
          />
        </>
        <>
          <button className={classes.button} disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Login</span>
          </button>
        </>
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default Login;
