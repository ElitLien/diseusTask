import {
  Home,
  Database,
  UsersRound,
  Building2,
  KeyRound,
  Target,
  FileInput,
} from "lucide-react";

export const NAV_BUTTONS = [
  {
    text: "Dashboard",
    icon: <Home size={20} color="#3B82F6" />,
  },
  {
    text: "Accounts",
    icon: <Database size={20} color="#fff" />,
  },
  {
    text: "Brokers",
    icon: <UsersRound size={20} color="#3B82F6" />,
  },
  {
    text: "Submissions",
    icon: <FileInput size={20} color="#3B82F6" />,
  },
  {
    text: "Organizations",
    icon: <Building2 size={20} color="#3B82F6" />,
  },
  {
    text: "Goals & Rules",
    icon: <Target size={20} color="#3B82F6" />,
  },
  {
    text: "Admin",
    icon: <KeyRound size={20} color="#3B82F6" />,
  },
];

export const POLICIES = [
  [
    {
      line1: "",
      line2: "Marine Cargo",
      line3: 17030212,
    },
    "6/30/2026",
    "6/30/2027",
    {
      status1: (
        <svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 10.436C7.76142 10.436 10 8.25726 10 5.56963C10 2.882 7.76142 0.703247 5 0.703247C2.23858 0.703247 0 2.882 0 5.56963C0 8.25726 2.23858 10.436 5 10.436Z"
            fill="#3BB979"
          />
        </svg>
      ),
      status2: "Active",
    },
    "$587,500",
    "$605,000",
    "$610,000",
    "$620,000",
    "$625,000",
    "3.3%",
    { v: "22%", cls: "good" },
  ],
  [
    {
      line1: "",
      line2: "General Liability",
      line3: 4031092,
    },
    "6/30/2026",
    "6/30/2027",
    {
      status1: (
        <svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 10.436C7.76142 10.436 10 8.25726 10 5.56963C10 2.882 7.76142 0.703247 5 0.703247C2.23858 0.703247 0 2.882 0 5.56963C0 8.25726 2.23858 10.436 5 10.436Z"
            fill="#3BB979"
          />
        </svg>
      ),
      status2: "Active",
    },
    "$160,000",
    "$165,000",
    "$170,000",
    "$172,500",
    "$175,000",
    "6.1%",
    { v: "55%", cls: "warn" },
  ],
  [
    {
      line1: "",
      line2: "Workers Comp",
      line3: 9182371,
    },
    "Pending",
    "Pending",
    {
      status1: (
        <svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 10.436C7.76142 10.436 10 8.25726 10 5.56963C10 2.882 7.76142 0.703247 5 0.703247C2.23858 0.703247 0 2.882 0 5.56963C0 8.25726 2.23858 10.436 5 10.436Z"
            fill="#FDD261"
          />
        </svg>
      ),
      status2: "Pending",
    },
    "$0",
    "$0",
    "$73,500",
    "$75,000",
    "$75,000",
    "N/A",
    { v: "N/A", cls: "N/A" },
  ],
  [
    {
      line1: "",
      line2: "Umbrella",
      line3: 5274936,
    },
    "13/03/2026",
    "13/03/2027",
    {
      status1: (
        <svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 10.436C7.76142 10.436 10 8.25726 10 5.56963C10 2.882 7.76142 0.703247 5 0.703247C2.23858 0.703247 0 2.882 0 5.56963C0 8.25726 2.23858 10.436 5 10.436Z"
            fill="#3BB979"
          />
        </svg>
      ),
      status2: "Active",
    },
    "$245,000",
    "$250,000",
    "$267,500",
    "$270,000",
    "$275,000",
    "10.0%",
    { v: "78%", cls: "bad" },
  ],
  [
    {
      line1: "",
      line2: "",
      line3: "",
    },
    "",
    "",
    {
      status1: "",
      status2: "TOTAL (4)",
    },
    "$992,500",
    "$1,020,000",
    "$1,121,000",
    "$1,137,500",
    "$1,150,000",
    "6.9%",
    { v: "58.3%", cls: "warn" },
  ],
];
