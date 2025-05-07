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
  background: "#313853",
}));

export function MoneyTarget2({
  current,
  total,
  text = "",
  color = "linear-gradient(90deg,rgba(50, 60, 92, 1) 0%, rgba(53, 84, 145, 1) 50%, rgba(58, 122, 229, 1) 100%);",
}) {
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
      <Capsule
        variant="determinate"
        value={percent}
        sx={{
          flex: 1,
          height: "22px",
          [`& .MuiLinearProgress-bar`]: { background: color },
        }}
      />
      <span
        style={{
          color: "#fff",
          fontSize: "18px",
          fontWeight: "400",
          paddingBottom: "3px",
        }}
      >
        {text} {total}%
      </span>
    </div>
  );
}
