import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const Capsule = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: 50,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 50,
    background:
      "linear-gradient(90deg,rgba(50, 60, 92, 1) 0%, rgba(53, 84, 145, 1) 50%, rgba(58, 122, 229, 1) 100%);",
  },
  background: "rgba(255,255,255,0.08)",
}));

export function MoneyTarget({ current, total }) {
  const percent = (current / total) * 100;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        position: "relative",
      }}
    >
      <span
        style={{
          color: "#fff",
          position: "absolute",
          zIndex: 2,
          left: "80px",
          fontSize: "14px",
          bottom: "4.3px",
          fontWeight: "500",
        }}
      >
        ${current}M
      </span>
      <Capsule
        variant="determinate"
        value={percent}
        sx={{ flex: 1, height: "25px" }}
      />
      <span
        style={{
          color: "#fff",
          fontSize: "14px",
          fontWeight: "500",
          paddingBottom: "3px",
        }}
      >
        ${total}M
      </span>
    </div>
  );
}
