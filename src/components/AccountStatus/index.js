import React from "react";
import "./style.css";
import { TbCircleDashedCheck, TbCircleCheck } from "react-icons/tb";

const AccountStatus = () => {
  return (
    <div className="account-status">
      <h3 className="account-status-title">Account Status</h3>
      <div className="account-status-card">
        <div className="account-status-card-point">
          <TbCircleCheck strokeWidth={1} />
          <div className="account-status-card-text">Submitted</div>
        </div>
        <div className="account-status-card-point">
          <TbCircleCheck strokeWidth={1} />
          <div className="account-status-card-text">Review</div>
        </div>
        <div className="account-status-card-point">
          <TbCircleCheck strokeWidth={1} />
          <div className="account-status-card-text">Quote</div>
        </div>
        <div className="account-status-card-point">
          <TbCircleCheck strokeWidth={1} />
          <div className="account-status-card-text">Bind</div>
        </div>
        <div className="account-status-card-point">
          <TbCircleCheck strokeWidth={1} />
          <div className="account-status-card-text">Issue</div>
        </div>
        <div className="account-status-card-point">
          {/* <div
            style={{
              width: "20px",
              height: "20px",
              border: "2px dashed #8A8B98",
              borderRadius: "20px",
            }}
          >
            <svg
              width="6"
              height="6"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5L4.33299 8.32996L11 1.67004"
                stroke="#8A8B98"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div> */}
          {/* <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 34.67C27.2 34.67 34.67 27.2 34.67 18C34.67 8.8 27.2 1.32996 18 1.32996C8.795 1.32996 1.33301 8.8 1.33301 18C1.33301 27.2 8.795 34.67 18 34.67Z"
                stroke="#8A8B98"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="4 4"
              />
            </svg>
            <Check size={16} />
          </div> */}
          <TbCircleDashedCheck color="#8A8B98" strokeWidth={1} />
          <div className="account-status-card-text">Renew</div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatus;
