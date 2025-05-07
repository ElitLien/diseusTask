import React from "react";
import "./style.css";

const MarketInteligence = () => {
  return (
    <section className="card market">
      <h3>Market intelligence</h3>
      <div className="points">
        <div className="point">
          <div className="point-dot" />
          <div className="point-text">
            Rate hardening in Cyber market · +15% YoY
          </div>
        </div>
        <div className="point">
          <div className="point-dot" />
          <div className="point-text">New capacity entering Marine market</div>
        </div>
        <div className="point">
          <div className="point-dot" />
          <div className="point-text">
            Environmental regulatory changes in CA
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInteligence;
