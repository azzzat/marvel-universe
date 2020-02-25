import React from "react";
import { Link } from "react-router-dom";

import "./pagination-board.css";

const PaginationBoard = props => {
  const numberList = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50
  ];

  const activePage = number => {
    if (number === props.pageNumber) {
      return "active";
    } else {
      return null;
    }
  };

  return (
    <div>
      <ul className="pagination pagination-sm pagination-board" href="/">
        {numberList.map(number => {
          return (
            <li className={"page-item " + activePage(number)}>
              <Link className="page-link" to={"/" + number}>
                {number}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PaginationBoard;
