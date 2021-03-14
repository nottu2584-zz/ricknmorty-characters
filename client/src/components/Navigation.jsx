import { Link } from "react-router-dom";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  navigation: {
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    boxSizing: "border-box",
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "stretch",
    padding: "0 30px",
    width: "100%",
  },
  navigationMenu: {
    alignItems: "center",
    justifyContent: "flex-end",
    display: "inline-flex",
    flex: "1 1 auto",
    listStyle: "none",
    margin: 0,
    padding: 0,
    "& li": {
      flex: "0 1 auto",
    },
  },
  brand: {
    alignSelf: "flex-start",
    flex: "1 1 auto",
    fontFamily: "'Bungee', cursive",
    fontSize: "1.5rem",
    padding: "0",
    textAlign: "left",
    background: "-webkit-linear-gradient(45deg, #04afc9, #82fa67 80%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  item: {
    padding: ".5rem 1.5rem",
  },
  link: {
    color: "#04afc9",
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase"
  },
});

const Navigation = (props) => {
  const { admin, user, logout } = props;

  const classes = useStyles();

  return (
    <header className={classes.navigation}>
      <div className={classes.brand}>
        <Link to={"/"} className={classes.link}>
          Rick & Morty Characters
        </Link>
      </div>
      <ul className={classes.navigationMenu}>
        {admin && (
          <li className={classes.item}>
            <Link to={"/admin"} className={classes.link}>
              Admin Board
            </Link>
          </li>
        )}
        {user && (
          <li className={classes.item}>
            <Link to={"/user"} className={classes.link}>
              User
            </Link>
          </li>
        )}
        {user ? (
          <>
            <li className={classes.item}>
              <Link to={"/characters"} className={classes.link}>
                Characters
              </Link>
            </li>
            <li className={classes.item}>
              <a href="/login" className={classes.link} onClick={logout}>
                Logout
              </a>
            </li>
          </>
        ) : (
          <>
            <li className={classes.item}>
              <Link to={"/login"} className={classes.link}>
                Login
              </Link>
            </li>
            <li className={classes.item}>
              <Link to={"/register"} className={classes.link}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Navigation;
