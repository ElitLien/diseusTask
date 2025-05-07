import React from "react";
import "./style.css";
import HistoricalTrend from "../../components/HistoricalTrend";
import { MoneyTarget2 } from "../../components/MoneyTarget2";
import { CircleArrowDown, CircleArrowUp, Rocket } from "lucide-react";

const AccountDetails = () => {
  return (
    <div className="account-details">
      <h3 className="account-details-title">Account Details</h3>
      <div className="account-details-card">
        <div className="account-details-sidebar">
          <div className="account-details-sidebar-select-block">
            <div className="account-details-sidebar-select-block-first">
              <div className="account-details-sidebar-select-block-first-text">
                DESICION SUPPORT
              </div>
              <div className="account-details-sidebar-select-block-first-number">
                4
              </div>
            </div>
            <div
              className="account-details-sidebar-select-block-text"
              style={{ color: "#3B82F6" }}
            >
              Winnability
            </div>
            <div className="account-details-sidebar-select-block-text">
              Exposure Review & Suggested Coverage
            </div>
            <div className="account-details-sidebar-select-block-text">
              Portfolio Strategy Alignment
            </div>
            <div className="account-details-sidebar-select-block-text">
              Broker Analytics
            </div>
          </div>
          <div className="account-details-sidebar-block">
            <div className="account-details-sidebar-select-block-first-text">
              RISK ASSESSMENT
            </div>
            <div className="account-details-sidebar-block-first-number">6</div>
          </div>
          <div className="account-details-sidebar-block">
            <div className="account-details-sidebar-select-block-first-text">
              DOCUMENTS AND COMPLIANCE
            </div>
            <div className="account-details-sidebar-block-first-number">2</div>
          </div>
        </div>
        <div className="account-details-winnability">
          <h3 className="account-details-winnability-title">Winnability</h3>
          <div className="account-details-winnability-blocks">
            <div className="account-details-winnability-block">
              <div className="account-details-winnability-block-title">
                Overall Score
              </div>
              <div className="account-details-winnability-block-score">
                <div className="account-details-winnability-block-percent">
                  82%
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "1px solid #3B82F6",
                    width: "fit-content",
                    height: "36px",
                    borderRadius: "20px",
                    padding: "1px 10px",
                  }}
                >
                  <div style={{ display: "flex", gap: "4px" }}>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 9.94932C7.76142 9.94932 10 7.77057 10 5.08294C10 2.39531 7.76142 0.216553 5 0.216553C2.23858 0.216553 0 2.39531 0 5.08294C0 7.77057 2.23858 9.94932 5 9.94932Z"
                        fill="#3B82F6"
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
                        d="M5 9.94932C7.76142 9.94932 10 7.77057 10 5.08294C10 2.39531 7.76142 0.216553 5 0.216553C2.23858 0.216553 0 2.39531 0 5.08294C0 7.77057 2.23858 9.94932 5 9.94932Z"
                        fill="#3B82F6"
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
                        d="M5 9.94932C7.76142 9.94932 10 7.77057 10 5.08294C10 2.39531 7.76142 0.216553 5 0.216553C2.23858 0.216553 0 2.39531 0 5.08294C0 7.77057 2.23858 9.94932 5 9.94932Z"
                        fill="#3B82F6"
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
                        d="M5 9.94932C7.76142 9.94932 10 7.77057 10 5.08294C10 2.39531 7.76142 0.216553 5 0.216553C2.23858 0.216553 0 2.39531 0 5.08294C0 7.77057 2.23858 9.94932 5 9.94932Z"
                        fill="#3B82F6"
                      />
                    </svg>
                  </div>
                  <div style={{ color: "#3B82F6" }}>Very Strong</div>
                </div>
              </div>
            </div>
            <div className="account-details-winnability-block">
              <div className="account-details-winnability-block-title">
                Historical trend
              </div>
              <HistoricalTrend />
            </div>
            <div className="account-details-winnability-block">
              <div className="account-details-winnability-block-title">
                Position
              </div>
              <MoneyTarget2 current={72} total={82} text="Your score: " />
              <MoneyTarget2 current={44} total={68} text="Market Avg: " />
              <MoneyTarget2 current={80} total={88} text="Top competitor: " />
            </div>
          </div>
          <div className="account-details-winnability-block-second">
            <div className="account-details-winnability-block-second-increase">
              <div className="account-details-winnability-block-second-increase-title">
                <CircleArrowUp color="#3BB979" size={32} />
                <div className="account-details-winnability-block-second-increase-title-text">
                  Increasing Winnability
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <div className="account-details-winnability-block-second-increase-number">
                    1
                  </div>
                  <div>
                    <div className="account-details-winnability-block-second-increase-text">
                      Brokers relationship
                    </div>
                    <div style={{ display: "flex" }}>
                      <div
                        className="account-details-winnability-block-second-increase-progress"
                        style={{ width: "275px" }}
                      ></div>
                      <div className="account-details-winnability-block-second-percent">
                        +28%
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div className="account-details-winnability-block-second-increase-number">
                    2
                  </div>
                  <div>
                    <div className="account-details-winnability-block-second-increase-text">
                      Loss history
                    </div>
                    <div style={{ display: "flex" }}>
                      <div
                        className="account-details-winnability-block-second-increase-progress"
                        style={{ width: "225px" }}
                      ></div>
                      <div className="account-details-winnability-block-second-percent">
                        +22%
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div className="account-details-winnability-block-second-increase-number">
                    3
                  </div>
                  <div>
                    <div className="account-details-winnability-block-second-increase-text">
                      Industry growth
                    </div>
                    <div style={{ display: "flex" }}>
                      <div
                        className="account-details-winnability-block-second-increase-progress"
                        style={{ width: "175px" }}
                      ></div>
                      <div className="account-details-winnability-block-second-percent">
                        +16%
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div className="account-details-winnability-block-second-increase-number">
                    4
                  </div>
                  <div>
                    <div className="account-details-winnability-block-second-increase-text">
                      Muiltiline opportunity
                    </div>
                    <div style={{ display: "flex" }}>
                      <div
                        className="account-details-winnability-block-second-increase-progress"
                        style={{ width: "125px" }}
                      ></div>
                      <div className="account-details-winnability-block-second-percent">
                        +11%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="account-details-winnability-block-second-decrease">
              <div className="account-details-winnability-block-second-decrease-title">
                <CircleArrowDown color="#FDD261" size={28} />
                <div className="account-details-winnability-block-second-decrease-title-text">
                  Decreasing Winnability
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <div className="account-details-winnability-block-second-decrease-number">
                    1
                  </div>
                  <div>
                    <div className="account-details-winnability-block-second-increase-text">
                      Premium pricing
                    </div>
                    <div style={{ display: "flex" }}>
                      <div
                        className="account-details-winnability-block-second-decrease-progress"
                        style={{ width: "275px" }}
                      ></div>
                      <div className="account-details-winnability-block-second-percent">
                        -24%
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div className="account-details-winnability-block-second-decrease-number">
                    2
                  </div>
                  <div>
                    <div className="account-details-winnability-block-second-increase-text">
                      Total exposure
                    </div>
                    <div style={{ display: "flex" }}>
                      <div
                        className="account-details-winnability-block-second-decrease-progress"
                        style={{ width: "225px" }}
                      ></div>
                      <div className="account-details-winnability-block-second-percent">
                        -18%
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div className="account-details-winnability-block-second-decrease-number">
                    3
                  </div>
                  <div>
                    <div className="account-details-winnability-block-second-increase-text">
                      Loss ratio trend
                    </div>
                    <div style={{ display: "flex" }}>
                      <div
                        className="account-details-winnability-block-second-decrease-progress"
                        style={{ width: "175px" }}
                      ></div>
                      <div className="account-details-winnability-block-second-percent">
                        -13%
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div className="account-details-winnability-block-second-decrease-number">
                    4
                  </div>
                  <div>
                    <div className="account-details-winnability-block-second-increase-text">
                      Market competition
                    </div>
                    <div style={{ display: "flex" }}>
                      <div
                        className="account-details-winnability-block-second-decrease-progress"
                        style={{ width: "125px" }}
                      ></div>
                      <div className="account-details-winnability-block-second-percent">
                        -5%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="account-details-recommendations">
            <div className="account-details-recommendations-title">
              <Rocket size={28} color="#3BB979" strokeWidth={2} />
              <div className="account-details-recommendations-title-text">
                AI-Powered Recommendations
              </div>
            </div>
            <div className="account-details-recommendations-block">
              <div className="account-details-recommendations-block-text">
                <div>
                  Offer 5% premium discount in exchange for 3-year commitment
                </div>
                <div className="account-details-recommendations-block-text-subtext">
                  Historical win rate increases 24% with multi-year commitments.
                  Current pricing is 12% above market average. This approach
                  would strengthen retention while maintaining adequate
                  profitability.
                </div>
              </div>
              <button className="account-details-recommendations-block-button">
                Apply
              </button>
            </div>
            <div className="account-details-recommendations-block">
              <div className="account-details-recommendations-block-text">
                <div>
                  Propose risk control services for cargo handling procedures
                </div>
                <div className="account-details-recommendations-block-text-subtext">
                  Can potentially reduce loss ratio by 15-20% based on similar
                  maritime accounts in your portfolio. Specific focus on
                  loading/unloading operations would address the most frequent
                  claim scenarios.
                </div>
              </div>
              <button className="account-details-recommendations-block-button">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
