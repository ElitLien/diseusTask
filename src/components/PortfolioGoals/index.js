import React from "react";
import LossRatioGauge from "../LossRatioGauge";
import RenewalRetentionGauge from "../RenewalRetentionGauge";
import { MoneyTarget } from "../MoneyTarget";
import "./style.css";

const PortfolioGoals = () => {
  return (
    <div className="left-section">
      <section className="card goals">
        <h3>Portfolio goals</h3>
        <div className="goal">
          <span>PORTFOLIO LOSS RATIO TARGET</span>
          <LossRatioGauge />
        </div>
        <div className="goal">
          <span>RENEWAL PETENTION</span>
          <RenewalRetentionGauge />
        </div>
        <div className="mini-goals">
          <div>
            <span>NEW BUSINESS TARGET</span>
            <MoneyTarget current={8.1} total={12} />
          </div>
          <div>
            <span>ANNUAL GWP TARGET</span>
            <MoneyTarget current={28.4} total={42} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioGoals;
