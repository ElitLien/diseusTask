import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const RED_MAX = 20;
const YELLOW_END = 55;
const GREEN_END = 70;

const barData = [
  {
    name: "retention",
    red: RED_MAX,
    yellow1: YELLOW_END - RED_MAX,
    green: GREEN_END - YELLOW_END,
    yellow2: 100 - GREEN_END,
  },
];

export default function RenewalRetentionGauge() {
  return (
    <ResponsiveContainer width="100%" height={28}>
      <BarChart
        data={barData}
        layout="vertical"
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        {/* приховуємо вісь X – вона лише задає діапазон 0‑100 */}
        <XAxis type="number" domain={[0, 100]} hide />
        <YAxis type="category" dataKey="name" hide />

        {/* сегменти прогрес‑бару */}
        <Bar dataKey="red" stackId="1" fill="#CC0101" radius={[30, 0, 0, 30]} />
        <Bar dataKey="yellow1" stackId="1" fill="#FDD261" />
        <Bar dataKey="green" stackId="1" fill="#3BB979" />
        <Bar
          dataKey="yellow2"
          stackId="1"
          fill="#FDD261"
          radius={[0, 30, 30, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
