"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { AnalysisControllerService } from "@/open-api";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { BackgroundGradient } from "./ui/background-gradient";

const chartConfig = {
  anger: {
    label: "Anger",
  },
  joy: {
    label: "Joy",
  },
  sorrow: {
    label: "Sorrow",
  },
  surprise: {
    label: "Surprise",
  },
  headWear: {
    label: "Head Wear",
  },
  other: {
    label: "Other",
  },
  noFace: {
    label: "No Face",
  },
} satisfies ChartConfig;

// eslint-disable-next-line @next/next/no-async-client-component
export default async function FacialExpressions() {
  const expressions =
    await AnalysisControllerService.getFacialExpressionsCategorized();

  // const expressions = {
  //   anger: 10,
  //   joy: 20,
  //   sorrow: 30,
  //   surprise: 40,
  //   headWear: 10,
  //   other: 30,
  //   noFace: 20,
  // };

  const data = [];
  data.push({ expression: "anger", value: expressions.anger });
  data.push({ expression: "joy", value: expressions.joy });
  data.push({ expression: "sorrow", value: expressions.sorrow });
  data.push({ expression: "surprise", value: expressions.surprise });
  data.push({ expression: "headWear", value: expressions.headWear });
  data.push({ expression: "noFace", value: expressions.noFace });
  data.push({ expression: "other", value: expressions.other });

  return (
    <BackgroundGradient className="rounded-[22px] p-[2px] h-full">
      <Card className="bg-gray-950 text-white border-none rounded-[22px] h-full">
        <CardHeader>
          <CardTitle>Facial Expressions</CardTitle>
          <CardDescription>Common expressions in thumbnails</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={data}
              layout="vertical"
              margin={{
                left: 0,
              }}
            >
              <YAxis
                dataKey="expression"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
                fontSize={10}
              />
              <XAxis dataKey="value" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="value" layout="vertical" radius={5} fill="#2761D9">
                <LabelList position="right" offset={3} fontSize={8} />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </BackgroundGradient>
  );
}
