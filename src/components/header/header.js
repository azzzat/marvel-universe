import React from "react";

import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <h1>
      <Link className="page-header" to="/">
        Marvel Universe Characters
      </Link>
    </h1>
  );
};

export default Header;
