import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { AnalysisControllerService, ExpressionDetails } from "@/open-api";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { BackgroundGradient } from "./ui/background-gradient";

const chartConfig = {
  ANGER: {
    label: "Anger",
  },
  JOY: {
    label: "Joy",
  },
  SORROW: {
    label: "Sorrow",
  },
  SURPRISE: {
    label: "Surprise",
  },
  HEADWEAR: {
    label: "Head Wear",
  },
  OTHER: {
    label: "Other",
  },
  NOFACE: {
    label: "No Face",
  },
} satisfies ChartConfig;

export default function FacialExpressions({data}: {data: ExpressionDetails[]}) {

  return (
    <BackgroundGradient className="rounded-[22px] p-[2px] h-full">
      <Card className="bg-gray-900 text-white border-none rounded-[22px] h-full">
        <CardHeader>
          <CardTitle>Facial Expressions</CardTitle>
          <CardDescription>Common facial expressions in thumbnails</CardDescription>
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
