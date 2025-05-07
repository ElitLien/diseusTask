import React from "react";
import { EllipsisVertical } from "lucide-react";
import { ACCOUNTS_INFO } from "../../const/Dashboard";
import "./style.css";

const Accounts = () => {
  return (
    <section className="card accounts">
      <header className="accounts-head">
        <h2>My accounts</h2>

        <div className="accounts-controls">
          <input placeholder="Search" />
          <button>Filter</button>
          <button>Sort</button>
          <button>Group</button>
          <button className="primary">+ New</button>
        </div>
      </header>

      <table>
        <thead>
          <tr className="accounts-table-head">
            <th>ACCOUNT NAME / TYPE</th>
            <th>LINE</th>
            <th>BROKER</th>
            <th>RENEWAL DATE</th>
            <th
              style={{
                textAlign: "end",
                marginRight: "16px",
              }}
            >
              PREMIUM
            </th>
            <th
              style={{
                textAlign: "end",
                marginRight: "16px",
              }}
            >
              RATED PREMIUM
            </th>
            <th style={{ textAlign: "center" }}>LOSS RATIO</th>
            <th>APPETITE</th>
            <th>STATUS</th>
            <th>TRIAGE</th>
            <th>WINABILITY</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {ACCOUNTS_INFO.map(
            (
              [
                name,
                line,
                broker,
                date,
                prem,
                rPrem,
                loss,
                appetite,
                status,
                triage,
                win,
              ],
              i
            ) => (
              <>
                <tr
                  key={i}
                  className={`row-info ${i % 2 ? "pair" : "odd"}`}
                  style={{ height: "50px" }}
                >
                  <td>
                    <div>{name.accName}</div>
                    <div className="second-col-subtext">{name.type}</div>
                  </td>
                  <td>{line}</td>
                  <td>{broker}</td>
                  <td>{date}</td>
                  <td
                    style={{
                      color: "#3B82F6",
                      fontWeight: "500",
                      textAlign: "end",
                    }}
                  >
                    {prem}
                  </td>
                  <td
                    style={{
                      textAlign: "end",
                    }}
                  >
                    {rPrem}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span className={`pill ${loss.cls}`}>{loss.v}</span>
                  </td>
                  <td>
                    <div className="pill hollow">{appetite}</div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <div style={{ marginTop: "2px" }}>{status.statusDot}</div>
                      <div>{status.statusText}</div>
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        color: "#3B82F6",
                        border: "2px solid #3B82F6",
                        width: "32px",
                        justifyContent: "center",
                        borderRadius: "20px",
                        fontWeight: "500",
                      }}
                    >
                      {triage}
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        border: "2px solid #3B82F6",
                        width: "fit-content",
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
                      <div style={{ color: "#3B82F6" }}>{win}</div>
                    </div>
                  </td>
                  <td className="info-cell">
                    <EllipsisVertical
                      color="#fff"
                      strokeWidth={1}
                    ></EllipsisVertical>
                  </td>
                </tr>
              </>
            )
          )}
        </tbody>
      </table>
    </section>
  );
};

export default Accounts;
