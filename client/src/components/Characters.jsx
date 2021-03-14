import axios from "axios";
import { default as React, useEffect, useState } from "react";
import { Grid, Loader, Pagination } from "./";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  characters: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%"
  },
});

const Characters = () => {
  const [characters, setCharacters] = useState();
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    if (!loading) setLoading(true);
    axios
      .get(`/api/character/${page}`)
      .then((res) => {
        if ("data" in res) {
          const data = res.data;
          if ("results" in data && data.results.length > 0)
            setCharacters(data.results);
          if ("info" in data) setPages(data.info.pages);
        }
      })
      .catch(function (error) {
        if (axios.isCancel(error)) {
          // Do something
        } else throw error;
      })
      .then(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className={classes.characters}>
        {!loading ? <Grid characters={characters}></Grid> : <Loader></Loader>}
        <Pagination page={page} pages={pages} setPage={setPage}></Pagination>
    </div>
  );
};

export default Characters;
