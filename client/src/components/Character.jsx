import { default as React, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory, useParams } from "react-router-dom";
import UserService from "../services/user.service";
import { Loader } from "./";

const useStyles = createUseStyles({
  status: {
    textTransform: "capitalize",
    fontSize: "1rem",
    "&::before": {
      backgroundColor: "#c2c2c2",
      borderRadius: "50%",
      content: '""',
      display: "inline-block",
      marginRight: ".25rem",
      padding: ".25rem",
      verticalAlign: "baseline",
    },
    "&.dead::before": {
      backgroundColor: "#d84315",
    },
    "&.alive::before": {
      backgroundColor: "#8bc34a",
    },
  },
  character: {
    alignItems: "center",
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "row",
    justifyContent: "center",
    "& a": {
      color: "#04afc9",
      textDecoration: "none",
    },
  },
  characterData: {
    margin: ".5em 0",
    "& span": {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  },
  content: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    display: "flex",
    flex: "1 1 auto",
    flexWrap: "wrap",
    padding: 20,
    textAlign: "left",
  },
  avatar: {
    flex: "1 1 100%",
    lineHeight: 0,
    overflow: "hidden",
    "& img": {
      borderRadius: 5,
      height: "100%",
      width: "100%",
    },
  },
  details: {
    flex: "1 1 100%",
    marginTop: "1em",
    position: "relative",
    "& .name": {
      fontFamily: "'Bungee', cursive",
      fontSize: "2rem",
      lineHeight: 1.1,
    },
    "& button": {
      marginTop: "1em"
    },
  },
  "@media only screen and (min-width: 480px)": {
    details: {
      flex: "1 1 calc(50% - 20px)",
    },
  },
  "@media only screen and (min-width: 768px)": {
    content: {
      flexWrap: "nowrap",
    },
    avatar: {
      flex: "0 0 300px",
    },
    details: {
      marginLeft: 20,
      flex: "3 1 auto",
      "& button": {
        marginTop: 0,
        position: "absolute",
        right: 0,
        bottom: 0,
      },
    },
  },
});

const Character = () => {
  let { id } = useParams();
  let history = useHistory();

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    UserService.getCharacter(id)
      .then(
        (res) => {
          setCharacter(res.data);
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setContent(_content);
        }
      )
      .then(setLoading(false));
  }, [id]);

  return (
    <div className={classes.character}>
      {!content ? (
        !loading && character ? (
          <>
            <div className={classes.content}>
              <div className={classes.avatar}>
                <img src={character.image} alt={character.name}></img>
              </div>
              <div className={classes.details}>
                <div className="name">{character.name}</div>
                {character.status ? (
                  <div
                    className={`${
                      classes.status
                    } ${character.status.toLowerCase()}`}
                  >
                    {character.status} - {character.species}
                  </div>
                ) : (
                  ""
                )}
                {character.created ? (
                  <div className={classes.characterData}>
                    <span>Created:</span> {character.created}
                  </div>
                ) : (
                  ""
                )}
                {character.episode ? (
                  <div className={classes.characterData}>
                    <span>Episodes:</span>{" "}
                    {character.episode.map((item, index) => {
                      return (
                        <>
                          <a
                            className={classes.episode}
                            href={item}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {index + 1}
                          </a>
                          {index < character.episode.length - 1 ? ", " : ""}
                        </>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
                {character.gender ? (
                  <div className={classes.characterData}>
                    <span>Gender:</span> {character.gender}
                  </div>
                ) : (
                  ""
                )}
                {character.location ? (
                  <div className={classes.characterData}>
                    <span>Location:</span>{" "}
                    <a
                      href={character.location.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {character.location.name}
                    </a>
                  </div>
                ) : (
                  ""
                )}
                {character.origin ? (
                  <div className={classes.characterData}>
                    <span>Origin:</span>{" "}
                    <a
                      href={character.origin.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {character.origin.name}
                    </a>
                  </div>
                ) : (
                  ""
                )}
                <button onClick={() => history.goBack()}>Back</button>
              </div>
            </div>
          </>
        ) : (
          <Loader></Loader>
        )
      ) : (
        { content }
      )}
    </div>
  );
};

export default Character;
