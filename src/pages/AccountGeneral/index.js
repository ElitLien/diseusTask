import React from "react";
import "./style.css";
import MainNav2 from "../../components/MainNav2";
import logo from "../../images/Vector.png";
import PerformanceMetrics from "../../components/PerformanceMetrics";
import Attention from "../../components/Attention";
import Policies from "../../components/Policies";
import AccountStatus from "../../components/AccountStatus";
import CompDoc from "../../components/CompDoc";
import AccountDetails from "../../components/AccountDetails";
import Communication from "../../components/Communication";
import PoliciesTable from "../../components/PoliciesTable";

const AccountGeneral = () => {
  return (
    <div>
      <MainNav2 />
      <div className="content">
        <div>
          Dashboard // Account //{" "}
          <span style={{ color: "#3B82F6" }}>Maritime Logistics Corp</span>
        </div>
        <div className="account-info">
          <div style={{ display: "flex" }}>
            <div className="account-in">
              <div className="account-info-left">
                <img src={logo} alt="" />
              </div>
              <div className="account-info-right">
                <div className="account-info-title">
                  Maritime Logistics Corp
                </div>
                <div className="account-info-right-bottom">
                  <div className="account-info-right-bottom-first">
                    <div>425 Harbor Boulevard, Suite 300</div>
                    <div>Seattle, WA 98104</div>
                  </div>
                  <div className="account-info-right-bottom-blocks">
                    <div className="account-info-right-bottom-block">
                      <div className="account-info-right-bottom-block-first">
                        EXISTING ACCOUNT
                      </div>
                      <div>54383</div>
                    </div>
                    <div className="account-info-right-bottom-block">
                      <div className="account-info-right-bottom-block-first">
                        BROKER
                      </div>
                      <div>Marsh McLennan</div>
                    </div>
                    <div className="account-info-right-bottom-block">
                      <div className="account-info-right-bottom-block-first">
                        UNDERWRITER
                      </div>
                      <div>Kate Johnson</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Attention />
        </div>
        <PerformanceMetrics />
        <Policies />
        <div style={{ display: "flex", gap: "20px", marginTop: "28px" }}>
          <AccountStatus />
          <CompDoc />
        </div>
        <AccountDetails />
        <Communication />
        <PoliciesTable />
      </div>
    </div>
  );
};

export default AccountGeneral;
