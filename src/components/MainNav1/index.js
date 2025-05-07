import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import navButtons from "../../const/Dashboard/navButtons.json";
import * as Lucide from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainNav1 = () => {
  const navigate = useNavigate();

  const toAccGeneral = (id) => {
    id === 0 && navigate("/account");
  };

  return (
    <nav className="main-nav">
      <div className="nav-items">
        {navButtons.data.map(({ text, icon, color }, idx) => {
          const Icon = Lucide[icon];
          return (
            <button
              key={idx}
              className={`nav-item ${idx === 0 ? "active" : ""}`}
              onClick={() => toAccGeneral(idx)}
            >
              <div className="nav-item-icon">
                <Icon size={20} color={color} />
              </div>
              <div className={`nav-item-text ${idx === 0 ? "active" : ""}`}>
                {text}
              </div>
            </button>
          );
        })}
      </div>
      <div className="nav-arrows">
        <button>
          <ArrowLeft strokeWidth={1} color="#313B54" />
        </button>
        <button>
          <ArrowRight strokeWidth={1} color="#313B54" />
        </button>
      </div>
    </nav>
  );
};

export default MainNav1;
