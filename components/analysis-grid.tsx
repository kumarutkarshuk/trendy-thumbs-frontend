import { Suspense } from "react";
import DominantColors from "./dominant-colors";
import FacialExpressions from "./facial-expressions";
import ObjectLabels from "./object-labels";
import WordCount from "./word-count";

export default function AnalysisGrid() {
  return (
    <div className="w-full px-6 z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        

        <Suspense fallback={<p>loading...</p>}>
          <DominantColors />
        </Suspense>

        <Suspense fallback={<p>loading...</p>}>
          <WordCount />
        </Suspense>

        <Suspense fallback={<p>loading...</p>}>
          <FacialExpressions />
        </Suspense>

        <Suspense fallback={<p>loading...</p>}>
          <ObjectLabels />
        </Suspense>
      </div>

      {/* <DetailedAnalysis/> */}
    </div>
  );
}
