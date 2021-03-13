import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  loader: {
    color: "#141414",
    fontSize: 20,
    margin: "100px auto",
    width: "1em",
    height: "1em",
    borderRadius: "50%",
    position: "relative",
    textIndent: "-9999em",
    webkitAnimation: "load4 1.3s infinite linear",
    animation: "load4 1.3s infinite linear",
    webkitTransform: "translateZ(0)",
    msTransform: "translateZ(0)",
    transform: "translateZ(0)",
  },
  "@keyframes load4": {
    "0%, 100%": {
      boxShadow:
        "0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0",
    },
    "12.5%": {
      boxShadow:
        "0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em",
    },
    "25%": {
      boxShadow:
        "0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em",
    },
    "37.5%": {
      boxShadow:
        "0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em",
    },
    "50%": {
      boxShadow:
        "0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em",
    },
    "62.5%": {
      boxShadow:
        "0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em",
    },
    "75%": {
      boxShadow:
        "0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0",
    },
    "87.5%": {
      boxShadow:
        "0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em",
    },
  }
});

const Loader = () => {
    const classes = useStyles();

    return (
        <div className={classes.loader}></div>
    );
}

export default Loader;