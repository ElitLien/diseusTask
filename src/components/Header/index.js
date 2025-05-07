import React from "react";
import "./style.css";

export default function Header() {
  return (
    <header className="top-bar">
      <h1 className="greeting">
        Hi&nbsp;Arthur, welcome! You have&nbsp;12&nbsp;open tasks.
      </h1>

      <div className="top-bar__right">
        <input className="search" placeholder="Search" />
        <div className="avatar">AR</div>
      </div>
    </header>
  );
}
