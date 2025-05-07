import React from "react";
import { NAV_BUTTONS } from "../../const/AccountGeneral";
import { useNavigate } from "react-router-dom";

const MainNav2 = () => {
  const navigate = useNavigate();

  const toAccGeneral = (id) => {
    id === 1 && navigate("/");
  };

  return (
    <nav className="main-nav">
      <div className="nav-items">
        {NAV_BUTTONS.map((item, idx) => (
          <button
            key={idx}
            className={`nav-item ${idx === 1 ? "active" : ""}`}
            onClick={() => toAccGeneral(idx)}
          >
            <div className="nav-item-icon">{item.icon}</div>
            <div className={`nav-item-text ${idx === 1 ? "active" : ""}`}>
              {item.text}
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MainNav2;
