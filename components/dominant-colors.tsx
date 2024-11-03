"use client";

import {
  ResponsiveContainer,
  Tooltip,
  Cell,
  Pie,
  PieChart,
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { AnalysisControllerService } from "@/open-api";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function DominantColors() {
  const colors = await AnalysisControllerService.getCategorizedColors();
  const data = [];
  data.push({ color: "black", value: colors.black, hex: "#000000" });
  data.push({ color: "blue", value: colors.blue, hex: "#0000FF" });
  data.push({ color: "gray", value: colors.gray, hex: "#808080" });
  data.push({ color: "green", value: colors.green, hex: "#008000" });
  data.push({ color: "red", value: colors.red, hex: "#FF0000" });
  data.push({ color: "white", value: colors.white, hex: "#FFFFFF" });
  data.push({ color: "yellow", value: colors.yellow, hex: "#FFFF00" });
  data.push({ color: "other", value: colors.other, hex: "" });

  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle className="text-white">Facial Expressions</CardTitle>
        <CardDescription className="text-gray-300">
          Common expressions in thumbnails
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.hex}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
