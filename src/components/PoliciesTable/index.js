import React from "react";
import { POLICIES } from "../../const/AccountGeneral";
import { EllipsisVertical } from "lucide-react";

const PoliciesTable = () => {
  return (
    <div>
      <h3 className="account-details-title" style={{ marginTop: "24px" }}>
        Policies
      </h3>
      <div className="card" style={{ marginBottom: "32px" }}>
        <div className="accounts-controls" style={{ marginBottom: "16px" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              background: "transparent",
              border: "1px solid #293245",
            }}
          />
          <button>Filter</button>
          <button>Group</button>
        </div>
        <table>
          <thead>
            <tr className="accounts-table-head">
              <th>LINE</th>
              <th>EFF.DATE</th>
              <th>EXP.DATE</th>
              <th>STATUS</th>
              <th>EXPIRING TECH</th>
              <th>EXPIRING PREMIUM</th>
              <th>RENEWAL TO TECH</th>
              <th>RENEWAL TECH</th>
              <th>RENEWAL PREMIUM</th>
              <th>RATE CHANGE</th>
              <th>LOSS RATIO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {POLICIES.map(
              (
                [
                  line,
                  effDate,
                  expDate,
                  status,
                  expTech,
                  expPremium,
                  renToTech,
                  renTech,
                  renPremium,
                  rateChange,
                  loss,
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
                      <div>{line.line1}</div>
                      <div>{line.line2}</div>
                      <div className="second-col-subtext">{line.line3}</div>
                    </td>
                    <td>{effDate}</td>
                    <td>{expDate}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <div style={{ marginTop: "2px" }}>{status.status1}</div>
                        <div>{status.status2}</div>
                      </div>
                    </td>
                    <td>{expTech}</td>
                    <td>{expPremium}</td>
                    <td>{renToTech}</td>
                    <td>{renTech}</td>
                    <td>{renPremium}</td>
                    <td>{rateChange}</td>
                    <td>
                      <span className={`pill ${loss.cls}`}>{loss.v}</span>
                    </td>
                    {i === 4 ? (
                      <td></td>
                    ) : (
                      <td className="info-cell">
                        <EllipsisVertical
                          color="#fff"
                          strokeWidth={1}
                        ></EllipsisVertical>
                      </td>
                    )}
                  </tr>
                </>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PoliciesTable;
