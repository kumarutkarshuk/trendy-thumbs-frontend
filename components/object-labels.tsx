"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

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
    <Card className=" bg-black text-white">
      <CardHeader>
        <CardTitle className="text-white">Object Labels</CardTitle>
        <CardDescription className="text-gray-300">
          Common objects detected in thumbnails
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={objectLabelsData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {objectLabelsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />
          </PieChart>
        </ResponsiveContainer> */}
      </CardContent>
    </Card>
  );
}
