"use client";

import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  CartesianGrid,
  Line,
  LineChart,
  LabelList,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { AnalysisControllerService } from "@/open-api";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function WordCount() {
  const wordCountList = await AnalysisControllerService.getWordCountList();
  const data = wordCountList.map((count) => {
    return{
      count
    }
  })

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle className="text-white">Word Count Distribution</CardTitle>
        <CardDescription className="text-gray-300">
          Number of words in thumbnails
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={data}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="count"
                type="linear"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              >
               <LabelList
                position="top"
                offset={12}
                className="fill-white"
                fontSize={12}
              />
              </Line>
            </LineChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
