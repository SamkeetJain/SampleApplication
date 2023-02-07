/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Series } from '../models/Series';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SeriesService {

    /**
     * @param nameIn Multiple values may be separated by commas.
     * @returns Series
     * @throws ApiError
     */
    public static seriesList(
        nameIn?: Array<string>,
    ): CancelablePromise<Array<Series>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/series',
            query: {
                'name__in': nameIn,
            },
        });
    }

}
