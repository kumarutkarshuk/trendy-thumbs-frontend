import { Suspense } from "react";
import FacialExpressions from "./facial-expressions";
import ObjectLabels from "./future/object-labels";
import WordCount from "./word-count";
import DominantColors from "./dominant-colors";
import { ColorDetails } from "@/open-api";
import { AnalysisType } from "@/lib/types";

export default function AnalysisGrid({data}:{data: AnalysisType}) {
  return (
    <div className="w-full px-6 z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DominantColors data={data.dominantColors}/>

          <WordCount data={data.wordCountList}/>

          <FacialExpressions data={data.facialExpressions}/>

          <ObjectLabels />
      </div>

      {/* <DetailedAnalysis/> */}
    </div>
  );
}
