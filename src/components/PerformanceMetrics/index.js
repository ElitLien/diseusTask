import React from "react";
import "./style.css";
import { MoneyTarget2 } from "../../components/MoneyTarget2";

const PerformanceMetrics = () => {
  return (
    <div className="performance-metrics">
      <h3 className="performance-metrics-title">Performance Metrics</h3>
      <div className="performance-metrics-title-blocks">
        <div className="card performance-metrics-block">
          <div className="performance-metrics-block-top">
            <div className="performance-metrics-block-title">
              <div className="performance-metrics-block-title-text">
                Winnability
              </div>
              <div className="performance-metrics-block-title-dots">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
                    fill="#1E40AF"
                  />
                </svg>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
                    fill="#1E40AF"
                  />
                </svg>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
                    fill="#1E40AF"
                  />
                </svg>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
                    fill="#1E40AF"
                  />
                </svg>
              </div>
            </div>
            <div className="performance-metrics-block-large">Very Strong</div>
          </div>
          <div className="performance-metrics-block-bottom">
            <div className="performance-metrics-block-bottom-text">
              See all factors →
            </div>
          </div>
        </div>
        <div className="card performance-metrics-block">
          <div className="performance-metrics-block-top">
            <div className="performance-metrics-block-title-text">
              Loss Ratio
            </div>
            <div className="performance-metrics-block-top-first">
              <div className="performance-metrics-block-large">25%</div>
              <div className="performance-metrics-block-small">
                vs 42% target
              </div>
            </div>
          </div>
          <div className="performance-metrics-block-bottom">
            <div className="performance-metrics-block-bottom-text">
              View history →
            </div>
          </div>
        </div>
        <div className="card performance-metrics-block">
          <div className="performance-metrics-block-title-text">
            Premium Growth
          </div>
          <div className="performance-metrics-block-top-first">
            <div className="performance-metrics-block-large">12.4%</div>
            <div className="performance-metrics-block-small">YoY increase</div>
          </div>
          <div className="performance-metrics-block-small2">
            $123M vs $150M Target
          </div>
          <div className="performance-metrics-block-bottom-text">
            View trend →
          </div>
        </div>
        <div className="card performance-metrics-block last">
          <div className="performance-metrics-block-title-text">
            Exposure Distribution
          </div>
          <div className="performance-metrics-block-exposures">
            <MoneyTarget2 current={52} total={71.4} text="Marine Cargo" />
            <MoneyTarget2 current={11} total={20} text="General Liability" />
            <MoneyTarget2 current={3.5} total={8.6} text="Workers Comp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
