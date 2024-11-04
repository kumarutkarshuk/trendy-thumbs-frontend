import { XAxis, CartesianGrid, Line, LineChart, YAxis } from "recharts";
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
import { BackgroundGradient } from "./ui/background-gradient";

export default function WordCount({data}:{data: number[]}) {
  
  const dataForChart = data.map((count) => {
    return {
      count,
    };
  });

  const chartConfig = {
    count: {
      label: "Count",
    },
  } satisfies ChartConfig;

  return (
    <BackgroundGradient className="rounded-[22px] p-[2px] h-full">
      <Card className="bg-gray-900 text-white border-none h-full rounded-[22px]">
        <CardHeader>
          <CardTitle className="text-white">Word Count Distribution</CardTitle>
          <CardDescription>
            Number of words in thumbnails
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={dataForChart}
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
                  value: "Value",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle" },
                }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="count"
                type="linear"
                stroke="#7B77BB"
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
