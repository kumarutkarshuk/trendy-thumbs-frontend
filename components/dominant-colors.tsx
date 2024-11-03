"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { BackgroundGradient } from "./ui/background-gradient";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { AnalysisControllerService } from "@/open-api";

const chartConfig = {
  black: {
    label: "Black",
  },
  blue: {
    label: "Blue",
  },
  gray: {
    label: "Gray",
  },
  green: {
    label: "Green",
  },
  red: {
    label: "Red",
  },
  white: {
    label: "White",
  },
  yellow: {
    label: "Yellow",
  },
  other: {
    label: "Other",
  },
} satisfies ChartConfig;

// eslint-disable-next-line @next/next/no-async-client-component
export default async function DominantColors() {
  const colors = await AnalysisControllerService.getCategorizedColors();
  // const colors = {
  //   black: 16,
  //   blue: 15,
  //   gray: 5,
  //   green: 2,
  //   red: 1,
  //   white: 5,
  //   yellow: 22,
  //   other: 2,
  // };
  const data = [];
  data.push({ color: "black", value: colors.black, fill: "#505050" });
  data.push({ color: "blue", value: colors.blue, fill: "#0000FF" });
  data.push({ color: "gray", value: colors.gray, fill: "#808080" });
  data.push({ color: "green", value: colors.green, fill: "#008000" });
  data.push({ color: "red", value: colors.red, fill: "#FF0000" });
  data.push({ color: "white", value: colors.white, fill: "#FFFFFF" });
  data.push({ color: "yellow", value: colors.yellow, fill: "#FFFF00" });
  data.push({ color: "other", value: colors.other, fill: "#FFA500" });

  return (
    <BackgroundGradient className="rounded-[22px] p-[2px] h-full">
      <Card className="flex flex-col bg-gray-950 text-white rounded-[22px] border-none h-full">
        <CardHeader>
          <CardTitle>Dominant Colors</CardTitle>
          <CardDescription>Most common colors in thumbnails</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={data}
              margin={{
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="color"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="value" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </BackgroundGradient>
  );
}
