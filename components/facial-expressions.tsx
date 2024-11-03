"use client";

import {
  ResponsiveContainer,
  Tooltip,
  Bar,
  BarChart,
  XAxis,
  YAxis,
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
export default async function FacialExpressions() {
  const expressions =
    await AnalysisControllerService.getFacialExpressionsCategorized();

  const data = [];
  data.push({ expression: "anger", value: expressions.anger });
  data.push({ expression: "joy", value: expressions.joy });
  data.push({ expression: "sorrow", value: expressions.sorrow });
  data.push({ expression: "surprise", value: expressions.surprise });
  data.push({ expression: "head wear", value: expressions.headWear });
  data.push({ expression: "other", value: expressions.other });
  data.push({ expression: "no face", value: expressions.noFace });

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
          <BarChart data={data}>
            <XAxis dataKey="expression" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
