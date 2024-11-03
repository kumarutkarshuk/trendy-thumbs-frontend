/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ColorCategory } from '../models/ColorCategory';
import type { ExpressionCategory } from '../models/ExpressionCategory';
import type { ThumbnailAnalysis } from '../models/ThumbnailAnalysis';
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
     * @returns string OK
     * @throws ApiError
     */
    public static getTrendingThumbnails(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/analysis/thumbnails',
        });
    }
    /**
     * @returns ExpressionCategory OK
     * @throws ApiError
     */
    public static getFacialExpressionsCategorized(): CancelablePromise<ExpressionCategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/analysis/facialExpressionsCategorized',
        });
    }
    /**
     * @returns ColorCategory OK
     * @throws ApiError
     */
    public static getCategorizedColors(): CancelablePromise<ColorCategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/analysis/dominantColorsCategorized',
        });
    }
}
