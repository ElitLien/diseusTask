import React from "react";
import { WORK_QUEUE_INFO } from "../../const/Dashboard";
import { EllipsisVertical } from "lucide-react";
import "./style.css";

const WorkQueue = () => {
  return (
    <section className="card work-queue">
      <h2 style={{ fontWeight: "400" }}>Work Queue</h2>

      <div className="tabs">
        <button className="tab active">Assigned&nbsp;to&nbsp;me (12)</button>
        <button className="tab">Pending&nbsp;Review (8)</button>
        <button className="tab">Referrals (3)</button>
      </div>

      <table>
        <thead>
          <tr className="table-titles">
            <th className="table-title">ORIGINATOR</th>
            <th className="table-title-pair">CLIENT/LINE</th>
            <th className="table-title">TYPE</th>
            <th className="table-title-pair">STATUS</th>
            <th className="table-title">CREATED</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {WORK_QUEUE_INFO.map((row, i) => (
            <tr key={i} className={`row-info ${i % 2 ? "pair" : "odd"}`}>
              {row.map((cell, i) => (
                <>
                  {i === 0 ? (
                    <td key={i} className="first-col">
                      <div className="col-avatar">{cell.orig1}</div>
                      <div>{cell.orig2}</div>
                    </td>
                  ) : i === 1 ? (
                    <td key={i}>
                      <div>{cell.client1}</div>
                      <div className="second-col-subtext">{cell.client2}</div>
                    </td>
                  ) : i === 3 ? (
                    <td className="forth-col" key={i}>
                      <div style={{ marginTop: "1px" }}>{cell.status1}</div>
                      <div>{cell.status2}</div>
                    </td>
                  ) : (
                    <td key={i}>{cell}</td>
                  )}
                </>
              ))}
              <td className="info-cell">
                <EllipsisVertical
                  color="#fff"
                  strokeWidth={1}
                ></EllipsisVertical>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default WorkQueue;
