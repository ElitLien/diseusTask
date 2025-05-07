import React from "react";
import "./style.css";

const QuickActions = () => {
  return (
    <section className="card quick-actions">
      <h3>Quick actions</h3>
      <div className="qa-butns">
        {[
          "New Submission",
          "Quote Builder",
          "Risks Models",
          "Documents Upload",
        ].map((txt) => (
          <button key={txt} className="qa-btn">
            {txt}
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
