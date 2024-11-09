import { ColorDetails, ExpressionDetails, LastAnalyzedDateDTO } from "@/open-api";

export interface AnalysisType {
    dominantColors: ColorDetails[];
    facialExpressions: ExpressionDetails[];
    wordCountList: number[];
    lastAnalyzedDate: LastAnalyzedDateDTO;
  }