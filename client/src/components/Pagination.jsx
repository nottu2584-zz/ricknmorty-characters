import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const NEARBY = 2;

const useStyles = createUseStyles({
  pagination: {
    textAlign: "right",
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
      backgroundColor: "#82fa67",
    },
    "&.ellipsis": {
      cursor: "default"
    },
    "&.ellipsis:hover": {
      backgroundColor: "#fafafa"
    },
  },
});

const Pagination = (props) => {
  const [items, setItems] = useState();
  const { page, pages, setPage } = props;
  const classes = useStyles();

  useEffect(() => {
    if (pages) {
      let arr = [];
      for (let index = 0; index < pages; index++) {  
        arr.push({ page: index + 1 });
      }
      setItems(arr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages]);

  const nearby = (page, index) => {
    return page > index - NEARBY && page < index + NEARBY*NEARBY && page !== index + 1
  };

  const edging = (pages, index) => {
    return index <= NEARBY || index >= pages - NEARBY - 1
  };

  const neighbor = (page, pages, index) => {
    return page === index + 1 || nearby(page, index) || edging(pages, index);
  };

  return (
    <div className={classes.pagination}>
      <ul className={classes.pager}>
        {items ? 
          items.map((item, index) =>
            neighbor(page, pages, index) == true ?
              <li
                key={index}
                className={`${classes.page} page-${item.page}${page === item.page ? " current" : ""}`}
                onClick={page !== item.page ? () => { setPage(item.page); } : null}
              >
                {item.page}
              </li>
            : !neighbor(page, pages, index) && neighbor(page, pages, index + 1) ? <li key={index} className={`${classes.page} ellipsis`}>...</li> : null
          )
        : null}
      </ul>
    </div>
  );
}; 

export default Pagination;
