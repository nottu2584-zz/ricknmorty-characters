import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  pagination: {
    textAlign: "right"
  },
  pager: {
    borderRadius: "5px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    display: "inline-block",
    flex: "0 1 auto",
    listStyle: "none",
    margin: "10px",
    overflow: "hidden",
    padding: 0,
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
  },
  page: {
    cursor: "pointer",
    display: "inline-block",
    backgroundColor: "#fafafa",
    lineHeight: "2em",
    width: "2em",
    textAlign: "center",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    "&:last-child": {
      marginRight: 0,
    },
    "&.current": {
      backgroundColor: "#04afc9",
      color: "#ffffff",
      fontWeight: "bold",
    },
    "&:hover": {
      backgroundColor: "#82fa67"
    }
  },
});

const Pagination = (props) => {
  const [items, setItems] = useState(0);
  const { page, pages, setPage } = props;

  const classes = useStyles();

  useEffect(() => {
    if (pages) {
      let arr = [];
      for (let index = 0; index < pages; index++) {
        arr.push(
          <li
            key={index}
            className={`${classes.page} page-${index + 1}${
              page === index + 1 ? " current" : ""
            }`}
            onClick={
              page !== index + 1
                ? () => {
                    setPage(index + 1);
                  }
                : null
            }
          >
            {index + 1}
          </li>
        );
      }
      setItems(arr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pages]);

  return (
    <div className={classes.pagination}>
      <ul className={classes.pager}>{items}</ul>
    </div>
  );
};

export default Pagination;
