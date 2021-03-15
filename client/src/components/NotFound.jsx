import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  notFound: {
    "& h1": {
      fontFamily: "'Bungee', cursive",
      fontSize: "1.5rem",
      color: " #ff0033",
      lineHeight: "1em",
      marginBottom: ".75em",
    },
  },
  link: {
    color: "#04afc9",
    fontWeight: "bold",
    textTransform: "uppercase",
    textDecoration: "none",
  },
});

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.notFound}>
      <h1>404 - Not Found</h1>
      <Link className={classes.link} to="/">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
