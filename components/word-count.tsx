"use client";

import {
  XAxis,
  CartesianGrid,
  Line,
  LineChart,
  YAxis,
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
import { BackgroundGradient } from "./ui/background-gradient";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function WordCount() {
  const wordCountList = await AnalysisControllerService.getWordCountList();
  const data = wordCountList.map((count) => {
    return{
      count
    }
  })

  // const data = [
  //   { count: 1 },
  //   { count: 2 },
  //   { count: 10 },
  //   { count: 2 },
  //   { count: 3 },
  //   { count: 1 },
  //   { count: 3 },
  //   { count: 6 },
  //   { count: 2 },
  // ];

  const chartConfig = {
    count: {
      label: "Count",
    },
  } satisfies ChartConfig;

  return (
    <BackgroundGradient className="rounded-[22px] p-[2px] h-full">
    <Card className="bg-gray-950 text-white border-none h-full rounded-[22px]">
      <CardHeader>
        <CardTitle className="text-white">Word Count Distribution</CardTitle>
        <CardDescription className="text-gray-300">
          Number of words in thumbnails
        </CardDescription>
      </CardHeader>
      <CardContent>
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
              <YAxis 
                label={{ 
                  value: 'Value', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle'}
                }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="count"
                type="linear"
                stroke="#FFA500"
                strokeWidth={2}
                dot={false}
             />
            </LineChart>
          </ChartContainer>
      </CardContent>
    </Card>
    </BackgroundGradient>
  );
}
