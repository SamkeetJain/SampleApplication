"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesService = void 0;
var OpenAPI_1 = require("../core/OpenAPI");
var request_1 = require("../core/request");
var SeriesService = /** @class */ (function () {
    function SeriesService() {
    }
    /**
     * @param nameIn Multiple values may be separated by commas.
     * @returns Series
     * @throws ApiError
     */
    SeriesService.seriesList = function (nameIn) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/series',
            query: {
                'name__in': nameIn,
            },
        });
    };
    return SeriesService;
}());
exports.SeriesService = SeriesService;
