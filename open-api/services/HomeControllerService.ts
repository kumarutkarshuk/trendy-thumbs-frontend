/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HomeControllerService {
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/home',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect3(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/home',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect2(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/home',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect5(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/home',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect6(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/home',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect1(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/home',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect4(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/home',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect7(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect10(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect9(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect12(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect13(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect8(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static redirect11(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/',
        });
    }
}
