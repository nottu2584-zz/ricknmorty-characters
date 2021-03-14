import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  pagination: {
    display: "flex",
    flex: "0 1 0",
    justifyContent: "space-between",
  },
  pager: {
    display: "inline-block",
    flex: "1 1 auto",
    textAlign: "right",
    listStyle: "none",
    margin: "10px",
  },
  page: {
    borderRadius: "5px",
    display: "inline-block",
    backgroundColor: "#fafafa",
    lineHeight: "2em",
    margin: "0 0.25em",
    width: "2em",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    textAlign: "center",
    "&:last-child": {
      marginRight: 0,
    },
    "&:hover": {
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    },
    "&.current": {
      backgroundColor: "#424242",
      color: "#ffffff",
    },
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
