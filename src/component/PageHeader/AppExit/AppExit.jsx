import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const AppExit = () => {
  return (
    <div className="app-exit">
      <div className="app-exit-1">
        <Link className="app-link">Hesab</Link>
        <Link className="app-link">Parametrlər</Link>
        <Link className="app-link">Çıxış</Link>
      </div>
    </div>
  );
};

export default AppExit;
