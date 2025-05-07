import React from "react";
import {
  Ship,
  ShieldCheck,
  ShieldUser,
  Building2,
  Umbrella,
} from "lucide-react";
import "./style.css";

const policyData = [
  {
    title: "Marine Cargo",
    premium: "$625,000",
    date: "6/30/2026",
    icon: <Ship color="#3B82F6" size={28} strokeWidth={1} />,
  },
  {
    title: "General Liability",
    premium: "$175,000",
    date: "6/30/2026",
    icon: <ShieldCheck color="#3BB979" size={28} strokeWidth={1} />,
  },
  {
    title: "Workers Comp",
    premium: "$75,000",
    date: "---",
    icon: <ShieldUser color="#6A3BF6" size={28} strokeWidth={1} />,
  },
  {
    title: "Prorerty",
    premium: "$64,829.83",
    date: "---",
    icon: <Building2 color="#FDD261" size={28} strokeWidth={1} />,
  },
  {
    title: "Umbrella",
    premium: "$275,000",
    date: "13/03/2026",
    icon: <Umbrella color="#B93B3B" size={28} strokeWidth={1} />,
  },
  {
    title: "Umbrella",
    premium: "$275,000",
    date: "13/03/2026",
    icon: <Umbrella color="#B93B3B" size={28} strokeWidth={1} />,
  },
  {
    title: "Umbrella",
    premium: "$275,000",
    date: "13/03/2026",
    icon: <Umbrella color="#B93B3B" size={28} strokeWidth={1} />,
  },
];

const Policies = () => {
  return (
    <div className="policies-wrapper">
      <h3 className="policies-title">Policies</h3>
      <div className="policies-container">
        {policyData.map((policy, idx) => (
          <div className="policy-card" key={idx}>
            <div className="policy-block">
              <div className="policy-icon">{policy.icon}</div>
              <div className="policy-title">{policy.title}</div>
            </div>
            <div className="policy-premium">Premium: {policy.premium}</div>
            <div className="policy-date">Eff.Date: {policy.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policies;
