import { HeroParallax } from "@/components/ui/hero-parallax";
import { AnalysisControllerService } from "@/open-api";

export default async function Home() {
  const {
    getTrendingThumbnails,
    getFacialExpressionDetails,
    getDominantColorDetails,
    getWordCountList,
    getLastAnalyzedDate
  } = AnalysisControllerService;
  const [dominantColors, facialExpressions, thumbnailData, wordCountList, lastAnalyzedDate] = await Promise.all([
    getDominantColorDetails(),
    getFacialExpressionDetails(),
    getTrendingThumbnails(),
    getWordCountList(),
    getLastAnalyzedDate()
  ]);

  const products = thumbnailData.map((thumbnail) => {
    return {
      thumbnail: thumbnail.thumbnailUrl,
      title: thumbnail.title,
      link: thumbnail.videoUrl,
    };
  });

  return(
      <HeroParallax products={products} data={{dominantColors, facialExpressions, wordCountList, lastAnalyzedDate}}/>
  )
}
