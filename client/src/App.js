import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { Characters, Login, Navigation, NotFound, Register } from "./components";
import { history } from "./helpers/history";

import "./App.css";

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
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    justifyContent: "center",
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
            <Route
              path="/characters/:id?"
              render={() => {
                return user ? (
                  <Characters></Characters>
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
