import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { BackgroundGradient } from "../ui/background-gradient";
import SparklesText from "../ui/sparkles-text";
import { ResponsiveContainer } from "recharts";

export default function ObjectLabels() {
  // const objectLabelsData = [
  //   { name: "Person", value: 50 },
  //   { name: "Food", value: 30 },
  //   { name: "Vehicle", value: 25 },
  //   { name: "Electronics", value: 20 },
  //   { name: "Animal", value: 15 },
  //   { name: "Sports Equipment", value: 10 },
  //   { name: "Musical Instrument", value: 8 },
  //   { name: "Furniture", value: 7 },
  // ];

  return (
    <BackgroundGradient className="rounded-[22px] p-[2px] h-full">
      <Card className="bg-gray-900 text-white border-none rounded-[22px] h-full">
        <CardHeader>
          <CardTitle>Object Detection</CardTitle>
          <CardDescription>
            Common objects detected in thumbnails
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* ResponsiveContainer used instead of ChartContainer */}
          <ResponsiveContainer width="100%" height={300}>
            <div className="flex justify-center items-center h-full">
              <SparklesText
                text="Coming Soon..."
                className="md:text-2xl text-xl font-thin"
              />
            </div>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </BackgroundGradient>
  );
}
