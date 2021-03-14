import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import { Characters, Navigation } from "./components";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  app: {
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    color: "#141414",
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    textAlign: "center"
  },
  content: {
    boxSizing: "border-box",
    flex: "1 1 auto",
    minWidth: "100%",
    padding: "30px",
  }
});

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const { user: user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (user)
      setIsAdmin(user.roles.includes("ROLE_ADMIN"));
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      <div className={classes.app}>
        <Navigation
          admin={isAdmin}
          user={user}
          logout={handleLogout}
        ></Navigation>
        <div className={classes.content}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return user ? (
                  <Redirect to="/characters" />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
            <Route path="/characters" component={Characters} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
