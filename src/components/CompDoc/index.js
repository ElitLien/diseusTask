import React from "react";
import "./style.css";
import { CircleCheck } from "lucide-react";

const CompDoc = () => {
  return (
    <div className="comp-doc">
      <div className="comp-doc-first-block">
        <h3 className="comp-doc-first-block-title">
          Compiliance & Documentation
        </h3>
        <div className="comp-doc-first-block-ref">See history →</div>
      </div>
      <div className="comp-doc-card">
        <div className="comp-doc-card-item">
          <CircleCheck color="#3BB979" />
          <div>KYC verification</div>
        </div>
        <div className="comp-doc-card-item">
          <CircleCheck color="#3BB979" />
          <div>Required Documentation</div>
        </div>
        <div className="comp-doc-card-item">
          <CircleCheck color="#3BB979" />
          <div>Regulatory approval</div>
        </div>
        <div className="comp-doc-card-item">
          <CircleCheck color="#3BB979" />
          <div>Financial Verification</div>
        </div>
      </div>
    </div>
  );
};

export default CompDoc;
