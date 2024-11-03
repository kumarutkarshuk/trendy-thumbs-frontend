import ThumbnailGallery from "@/components/thumbnail-gallery";
import WordCount from "@/components/word-count";
import DominantColors from "@/components/dominant-colors";
import FacialExpressions from "@/components/facial-expressions";
import ObjectLabels from "@/components/object-labels";
import { Suspense } from "react";
import Image from "next/image";

// const categories = [
//   'All',
//   'Music',
//   'Gaming',
//   'Entertainment',
//   'Sports',
//   'News',
//   'Education',
//   'Technology',
//   'Fashion',
//   'Food',
// ]

export default function Dashboard() {
  // const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <div className="h-screen bg-black text-white overflow-auto">
      {/* Main Content */}
      <div className="p-8">
        <div className="justify-center items-center flex gap-4">
          <h1 className="text-3xl font-bold">TrendyThumbs</h1>
          <Image src="/youtube-logo.png" width={45} height={45} alt="youtube-logo"/>
        </div>

        <p className="text-md text-center mt-4">Analyze thumbnails of trending YouTube videos</p>

        {/* search & filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium mb-1">Search</label>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input id="search" placeholder="Search videos or channels" className="pl-8 bg-gray-800 border-gray-700 text-white" />
            </div>
          </div> */}
          {/* <div className="w-full md:w-64">
            <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger id="category" className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Suspense>
            <WordCount />
          </Suspense>

          <Suspense>
            <DominantColors />
          </Suspense>

          <Suspense>
            <FacialExpressions />
          </Suspense>

          <ObjectLabels />
        </div>

        <Suspense>
          <ThumbnailGallery />
        </Suspense>

        {/* <DetailedAnalysis/> */}
      </div>
    </div>
  );
}
