import React from "react";
import "./style.css";
import { Paperclip } from "lucide-react";

const Communication = () => {
  return (
    <div>
      <h3 className="communication-title">Communication</h3>
      <div className="card">
        <div className="communication-controls">
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
        <div className="communication-blocks">
          <div className="communication-blocks-group">
            <div
              className="communication-blocks-group-block"
              style={{ border: "2px solid #1E40AF" }}
            >
              <div className="communication-blocks-group-block-title">
                <div className="communication-blocks-group-block-title-main">
                  NEW
                </div>
                <div className="communication-blocks-group-block-title-text">
                  Policy Renewal - Auto Insurance 5/15/25
                </div>
              </div>
              <div className="communication-blocks-group-block-author">
                Michael Roberts // Apr 5
              </div>
              <div className="communication-blocks-group-block-text">
                Hello Arthur, I'm reaching out regarding the upcoming auto
                policy renewal for Real Estate Group, LLC. The current policy
                expires on 6/30/2024. Would you like to review coverage options
                before proceeding with the renewal? I've attached the current
                policy details and premium breakdown for your reference.
              </div>
              <div className="communication-blocks-group-block-attachments">
                <Paperclip size={18} />
                <div className="communication-blocks-group-block-attachments-title">
                  3 attachments
                </div>
              </div>
              <button className="communication-blocks-group-block-button">
                Reply
              </button>
            </div>
            <div
              className="communication-blocks-group-block"
              style={{ border: "2px solid #3B82F6" }}
            >
              <div className="communication-blocks-group-block-title">
                <div className="communication-blocks-group-block-title-main">
                  NEW
                </div>
                <div className="communication-blocks-group-block-title-text">
                  New Quote Request - Workers Comp Insurance
                </div>
              </div>
              <div className="communication-blocks-group-block-author">
                Sarah Chen // Apr 5
              </div>
              <div className="communication-blocks-group-block-text">
                Hi Arthur. Real Estate Group has expressed interest in adding
                workers compensation coverage to their insurance portfolio. I've
                completed the initial risk assessment based
              </div>
              <div className="communication-blocks-group-block-attachments">
                <Paperclip size={18} />
                <div className="communication-blocks-group-block-attachments-title">
                  3 attachments
                </div>
              </div>
              <button className="communication-blocks-group-block-button">
                Reply
              </button>
            </div>
          </div>
          <div className="communication-blocks-group">
            <div className="communication-blocks-group-block">
              <div className="communication-blocks-group-block-title">
                <div className="communication-blocks-group-block-title-main">
                  Responded
                </div>
                <div className="communication-blocks-group-block-title-text">
                  Fwd: New Submission - BPM Real Estate - EFF 4/1/24
                </div>
              </div>
              <div className="communication-blocks-group-block-author">
                Joshua Dunmire / Mar 25
              </div>
              <div className="communication-blocks-group-block-text">
                Arthur, attached please find our submission for the above
                mentioned applicant. We have....
              </div>
            </div>
            <div className="communication-blocks-group-block">
              <div className="communication-blocks-group-block-title-text">
                New Business: BPM Real Estate Group, LLC
              </div>
              <div className="communication-blocks-group-block-author">
                Isabel Kreller // Feb 28
              </div>
              <div className="communication-blocks-group-block-text">
                Hello Arthur, lam pleased to present you with a submission on
                this client&#39;s upco...
              </div>
              <div className="communication-blocks-group-block-attachments">
                <Paperclip size={18} />
                <div className="communication-blocks-group-block-attachments-title">
                  5 attachments
                </div>
              </div>
              <button className="communication-blocks-group-block-button">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
