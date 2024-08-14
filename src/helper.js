"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyAllProperties = exports.isNotEmptyAllProperties = exports.excludeEmpty = exports.excludeMany = exports.excludesKeys = exports.excludeOne = exports.isEmptyObject = exports.isNotEmpty = exports.isEmpty = exports.isAnEmptyObjectArray = void 0;
exports.isValidObject = isValidObject;
const isAnEmptyObjectArray = (array) => {
    return array.length && Object.keys(array[0]).length;
};
exports.isAnEmptyObjectArray = isAnEmptyObjectArray;
const isEmpty = (value) => {
    return value == undefined || value == null || value == '';
};
exports.isEmpty = isEmpty;
const isNotEmpty = (value) => {
    return !(0, exports.isEmpty)(value);
};
exports.isNotEmpty = isNotEmpty;
const isEmptyObject = (obj) => {
    if (obj.constructor != Object)
        return (0, exports.isEmpty)(obj);
    return Object.keys(obj).length === 0 && typeof obj === "object";
};
exports.isEmptyObject = isEmptyObject;
function isValidObject(obj) {
    if (typeof obj !== 'object') {
        return (0, exports.isNotEmpty)(obj);
    }
    for (let key in obj) {
        if (obj[key] == null) {
            return false;
        }
    }
    return true;
}
const excludeOne = (entity, exclude) => {
    const _a = entity, _b = exclude, _ = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    return rest;
};
exports.excludeOne = excludeOne;
const excludesKeys = (entity, exclude) => {
    let result = Object.assign({}, entity);
    exclude.forEach((key) => {
        delete result[key];
    });
    return result;
};
exports.excludesKeys = excludesKeys;
const excludeMany = (entity, exclude) => {
    return entity.map((item) => {
        const _a = item, _b = exclude, _ = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        return rest;
    });
};
exports.excludeMany = excludeMany;
const excludeEmpty = (entity) => {
    const keys = Object.keys(entity);
    const filteredKeys = keys.filter((key) => { var _a; return (0, exports.isNotEmpty)(entity[key]) || ((_a = entity[key]) === null || _a === void 0 ? void 0 : _a.toString()) == 'false'; });
    let result = {};
    filteredKeys.forEach((key) => {
        result[key] = entity[key];
    });
    return Object.keys(result).length > 0 ? result : null;
};
exports.excludeEmpty = excludeEmpty;
const isNotEmptyAllProperties = (entity) => {
    const keys = Object.keys(entity);
    return keys.length > 0 && keys.every((key) => (0, exports.isNotEmpty)(entity[key]));
};
exports.isNotEmptyAllProperties = isNotEmptyAllProperties;
const isEmptyAllProperties = (entity) => {
    const keys = Object.keys(entity);
    return keys.length > 0 && keys.every((key) => (0, exports.isEmpty)(entity[key]));
};
exports.isEmptyAllProperties = isEmptyAllProperties;
