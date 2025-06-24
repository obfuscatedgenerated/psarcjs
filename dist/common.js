"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_VALUES = exports.objectMap = exports.toTitleCase = void 0;
exports.toTitleCase = function (str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};
exports.objectMap = function (object, mapFn) {
    return Object.keys(object).reduce(function (result, key) {
        result[key] = mapFn(object[key]);
        return result;
    }, {});
};
exports.DEFAULT_VALUES = {
    SCROLL_SPEED: 13,
    VOLUME: -7.0,
    PREVIEW_VOLUME: -7.0,
};
