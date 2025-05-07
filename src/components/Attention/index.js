import React from "react";
import "./style.css";
import { CircleAlert } from "lucide-react";

const Attention = () => {
  return (
    <div className="card attention">
      <div className="attention-main">
        <CircleAlert strokeWidth={1} color="#fdd261" />
        <div className="attention-main-title">Needs Attention</div>
      </div>
      <div className="attention-blocks">
        <div className="attention-block">
          <div className="attention-block-title">Marine Survey Required</div>
          <div className="second-col-subtext block-date">
            Scheduled for 06/12/2025
          </div>
          <div className="attention-block-ref">Review details link →</div>
        </div>
        <div className="attention-block">
          <div className="attention-block-title">Loss Control Complete</div>
          <div className="second-col-subtext block-date">
            Last inspection: 02/15/2025
          </div>
          <div className="attention-block-ref">View report →</div>
        </div>
        <div className="attention-block">
          <div className="attention-block-title">Claims Review Required</div>
          <div className="second-col-subtext block-date">
            3 open claims // $245,000 TTL
          </div>
          <div className="attention-block-ref">View claims →</div>
        </div>
      </div>
    </div>
  );
};

export default Attention;
