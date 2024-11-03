import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { AnalysisControllerService } from "@/open-api";
import Image from "next/image";

export default async function ThumbnailGallery() {
  const thumbnails = await AnalysisControllerService.getTrendingThumbnails();

  return (
    <Card className="mt-6 bg-black text-white">
      <CardHeader>
        <CardTitle className="text-white">Thumbnail Gallery</CardTitle>
        <CardDescription className="text-gray-300">
          Recent trending thumbnails
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {thumbnails.map((url) => (
            <div key={url}>
              <Image src={url} alt="thumbnail" width={200} height={200} className=""/>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
