import { HeroParallax } from "@/components/ui/hero-parallax";
import { AnalysisControllerService } from "@/open-api";


export default async function Home() {

  const thumbnails = await AnalysisControllerService.getTrendingThumbnails();

  const data = thumbnails.map((thumbnail) => {
    return{
      thumbnail: thumbnail.thumbnailUrl,
      title: thumbnail.title,
      link: thumbnail.videoUrl
    }
  })

  // const data = [
  //   {thumbnail: "https://i.ytimg.com/vi/ILu4LcipWI0/hqdefault.jpg", title: "hi", link:""},
  //   {thumbnail: "https://i.ytimg.com/vi/ILu4LcipWI0/hqdefault.jpg", title: "hi", link:""},
  //   {thumbnail: "https://i.ytimg.com/vi/ILu4LcipWI0/hqdefault.jpg", title: "hi", link:""},
  //   {thumbnail: "https://i.ytimg.com/vi/ILu4LcipWI0/hqdefault.jpg", title: "hi", link:""},
  //   {thumbnail: "https://i.ytimg.com/vi/ILu4LcipWI0/hqdefault.jpg", title: "hi", link:""},
  //   {thumbnail: "https://i.ytimg.com/vi/ILu4LcipWI0/hqdefault.jpg", title: "hi", link:""},
  //   {thumbnail: "https://i.ytimg.com/vi/ILu4LcipWI0/hqdefault.jpg", title: "hi", link:""},
  //   {thumbnail: "https://i.ytimg.com/vi/ILu4LcipWI0/hqdefault.jpg", title: "hi", link:""},
  //   {thumbnail: "https://i.ytimg.com/vi/ILu4LcipWI0/hqdefault.jpg", title: "hi", link:""},
  //   {thumbnail: "https://i.ytimg.com/vi/ILu4LcipWI0/hqdefault.jpg", title: "hi", link:""},

  // ];

  return (
    <HeroParallax products={data}/>
  );
}
