import { ColorDetails, ExpressionDetails } from "@/open-api";

export interface AnalysisType {
    dominantColors: ColorDetails[];
    facialExpressions: ExpressionDetails[];
    wordCountList: number[]
  }