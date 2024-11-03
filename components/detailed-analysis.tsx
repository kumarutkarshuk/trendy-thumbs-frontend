import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function DetailedAnalysis() {
  return (
    <Card className="mt-6 bg-black text-white">
      <CardHeader>
        <CardTitle className="text-white">Detailed Analysis</CardTitle>
        <CardDescription className="text-gray-300">
          Explore trends in depth
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="wordCount" className="text-white">
          <TabsList className="bg-gray-800">
            <TabsTrigger
              value="wordCount"
              className="data-[state=active]:bg-gray-700 text-white"
            >
              Word Count
            </TabsTrigger>
            <TabsTrigger
              value="colors"
              className="data-[state=active]:bg-gray-700 text-white"
            >
              Colors
            </TabsTrigger>
            <TabsTrigger
              value="expressions"
              className="data-[state=active]:bg-gray-700 text-white"
            >
              Expressions
            </TabsTrigger>
            <TabsTrigger
              value="objects"
              className="data-[state=active]:bg-gray-700 text-white"
            >
              Objects
            </TabsTrigger>
          </TabsList>
          <TabsContent value="wordCount">
            <p>Detailed word count analysis content goes here.</p>
          </TabsContent>
          <TabsContent value="colors">
            <p>Detailed color analysis content goes here.</p>
          </TabsContent>
          <TabsContent value="expressions">
            <p>Detailed facial expression analysis content goes here.</p>
          </TabsContent>
          <TabsContent value="objects">
            <p>Detailed object detection analysis content goes here.</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
