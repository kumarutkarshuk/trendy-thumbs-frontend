/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ColorDetails } from '../models/ColorDetails';
import type { ExpressionDetails } from '../models/ExpressionDetails';
import type { LastAnalyzedDateDTO } from '../models/LastAnalyzedDateDTO';
import type { ThumbnailAnalysis } from '../models/ThumbnailAnalysis';
import type { ThumbnailDTO } from '../models/ThumbnailDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AnalysisControllerService {
    /**
     * @returns ThumbnailAnalysis OK
     * @throws ApiError
     */
    public static analyzeTrendingThumbnails(): CancelablePromise<Array<ThumbnailAnalysis>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/analysis/analyze',
        });
    }
    /**
     * @returns number OK
     * @throws ApiError
     */
    public static getWordCountList(): CancelablePromise<Array<number>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/analysis/wordCountList',
        });
    }
    /**
     * @returns ThumbnailDTO OK
     * @throws ApiError
     */
    public static getTrendingThumbnails(): CancelablePromise<Array<ThumbnailDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/analysis/thumbnails',
        });
    }
    /**
     * @returns LastAnalyzedDateDTO OK
     * @throws ApiError
     */
    public static getLastAnalyzedDate(): CancelablePromise<LastAnalyzedDateDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/analysis/lastAnalyzedDate',
        });
    }
    /**
     * @returns ExpressionDetails OK
     * @throws ApiError
     */
    public static getFacialExpressionDetails(): CancelablePromise<Array<ExpressionDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/analysis/facialExpressionDetails',
        });
    }
    /**
     * @returns ColorDetails OK
     * @throws ApiError
     */
    public static getDominantColorDetails(): CancelablePromise<Array<ColorDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/analysis/dominantColorDetails',
        });
    }
}
