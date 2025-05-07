import React from "react";
import MainNav1 from "../../components/MainNav1";
import PortfolioGoals from "../../components/PortfolioGoals";
import WorkQueue from "../../components/WorkQueue";
import QuickActions from "../../components/QuickActions";
import MarketInteligence from "../../components/MarketInteligence";
import Accounts from "../../components/Accounts";
import "./style.css";

const Dashboard = () => {
  return (
    <>
      {/* ─────────── Main navigation ─────────── */}
      <MainNav1 />

      {/* ─────────── Content ────────── */}
      <main className="content">
        <div className="work-side">
          {/* Work Queue */}
          <WorkQueue />

          {/* Sidebar */}
          <aside className="side-column">
            {/* Portfolio Goals */}
            <PortfolioGoals />

            <div className="right-section">
              {/* Quick Actions */}
              <QuickActions />

              {/* Market Intelligence */}
              <MarketInteligence />
            </div>
          </aside>
        </div>

        {/* My Accounts */}
        <Accounts />
      </main>
    </>
  );
};

export default Dashboard;
