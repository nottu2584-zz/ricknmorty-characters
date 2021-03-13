import { useEffect, useState } from "react";

import "./Pagination.css";

const Pagination = (props) => {
  const [items, setItems] = useState(0);
  const { page, pages, setPage } = props;

  useEffect(() => {
    if (pages) {
      let arr = [];
      for (let index = 0; index < pages; index++) {
        arr.push(
          <li
            key={index}
            className={`page page-${index + 1}${
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
    <div className="pagination">
      <ul className="pager">
        <li className={`page-item first-item ${page === 1 ? "disabled" : ""}`}>
            First
        </li>
        {items}
      </ul>
    </div>
  );
};

export default Pagination;
