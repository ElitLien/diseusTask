import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const GREEN_END = 40;
const YELLOW_END = 60;

const barData = [
  {
    name: "retention",
    green: GREEN_END,
    yellow: YELLOW_END - GREEN_END,
    red: 100 - YELLOW_END,
  },
];

export default function LossRatioGauge() {
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
        <Bar
          dataKey="green"
          stackId="1"
          fill="#3BB979"
          radius={[30, 0, 0, 30]}
        />
        <Bar dataKey="yellow" stackId="1" fill="#FDD261" />
        <Bar dataKey="red" stackId="1" fill="#CC0101" radius={[0, 30, 30, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
