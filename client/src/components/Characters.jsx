import { default as React, useEffect, useState } from "react";
import { Grid, Loader, Pagination } from "./";
import { createUseStyles } from "react-jss";
import UserService from "../services/user.service";
import { useParams } from "react-router-dom";

const useStyles = createUseStyles({
  characters: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
  },
});

const Characters = () => {
  let { page } = useParams();

  const [content, setContent] = useState("");
  const [characters, setCharacters] = useState();
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    UserService.getCharacters(page)
      .then(
        (res) => {
          setCharacters(res.data.results);
          setPages(res.data.info.pages);
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
  }, [page]);

  return (
    <div className={classes.characters}>
      {!content ? (
        !loading ? (
          <>
            <Grid characters={characters}></Grid>
            <Pagination
              page={page}
              pages={pages}
            ></Pagination>
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

export default Characters;
