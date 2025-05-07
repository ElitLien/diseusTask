import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import styles from "./style.module.css";

const DATA = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 15 },
  { month: "Mar", value: 14 },
  { month: "Apr", value: 18 },
  { month: "Now", value: 20 },
];

export default function HistoricalTrend() {
  return (
    <section className={styles.trendCard}>
      <ResponsiveContainer width="100%" height={80}>
        <LineChart data={DATA}>
          {/* осі тільки для підписів місяців; шкалу Y ховаємо */}
          <XAxis
            dataKey="month"
            stroke="#8A8B98"
            tick={{ fontSize: 16 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide domain={["dataMin - 5", "dataMax + 5"]} />
          {/* тултіп прибираємо або залишаємо — на ваш смак */}
          <Tooltip
            contentStyle={{
              background: "#101522",
              border: "none",
              fontSize: 12,
            }}
            labelStyle={{ color: "#7b8bb9" }}
            itemStyle={{ color: "#fff" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82ff" /* яскраво‑синій */
            strokeWidth={3}
            dot={{ r: 0 }}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
