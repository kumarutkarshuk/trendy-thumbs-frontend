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
import { ColorDetails } from "@/open-api";

const chartConfig = {
  Black: {
    label: "Black",
  },
  Blue: {
    label: "Blue",
  },
  Gray: {
    label: "Gray",
  },
  Green: {
    label: "Green",
  },
  Red: {
    label: "Red",
  },
  White: {
    label: "White",
  },
  Yellow: {
    label: "Yellow",
  },
  Other: {
    label: "Other",
  },
} satisfies ChartConfig;

export default function DominantColors({data}:{data: ColorDetails[]}) {


  return (
    <BackgroundGradient className="rounded-[22px] p-[2px] h-full">
      <Card className="flex flex-col bg-gray-900 text-white rounded-[22px] border-none h-full">
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
                  fill="#ffffff"
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </BackgroundGradient>
  );
}
