/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in self)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.5.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheFallbackPlugin": () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            response = await handler.fetch(new Request(request, {
                integrity: integrityInRequest || integrityInManifest,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            if (integrityInManifest && noIntegrityConflict) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/workbox-precaching/_types.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/_types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:6.5.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:6.5.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`(Useful for
 * unregistering).
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": () => (/* binding */ defaultMethod),
/* harmony export */   "validMethods": () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:6.5.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */



function parseSwParams() {
  const params = JSON.parse(
    new URLSearchParams(self.location.search).get('params'),
  );
  if (params.debug) {
    console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
  }
  return params;
}

// doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
  if (false) {}
}

/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 *
 * @param {string} url
 */
function getPossibleURLs(url) {
  const possibleURLs = [];
  const urlObject = new URL(url, self.location.href);

  if (urlObject.origin !== self.location.origin) {
    return possibleURLs;
  }

  // Ignore search params and hash
  urlObject.search = '';
  urlObject.hash = '';

  // /blog.html
  possibleURLs.push(urlObject.href);

  // /blog/ => /blog/index.html
  if (urlObject.pathname.endsWith('/')) {
    possibleURLs.push(`${urlObject.href}index.html`);
  } else {
    // /blog => /blog/index.html
    possibleURLs.push(`${urlObject.href}/index.html`);
  }

  return possibleURLs;
}

(async () => {
  const params = parseSwParams();

  // eslint-disable-next-line no-underscore-dangle
  const precacheManifest = [{"revision":"64f20804020ce23f5b3bec6403fef7bc","url":"404.html"},{"revision":"25b09ae30f67ffa26d7de49d2f39d7b6","url":"assets/css/styles.c49d4cc4.css"},{"revision":"a184c51eacdc13b941305bb7defc9772","url":"assets/js/0056ad73.d6ea123b.js"},{"revision":"4177b91fd2d28b13d7382639a37e4736","url":"assets/js/008dd57e.47d0dbac.js"},{"revision":"9fb3237b76c05f2dee6abab7ce4a402e","url":"assets/js/01a85c17.78233a1d.js"},{"revision":"89abcd22b5f3f5d07cc7140fc40817a5","url":"assets/js/021b617d.436f8a5b.js"},{"revision":"ac9115f35bbd2000c78993436f3d5a3d","url":"assets/js/022996b2.ba9945aa.js"},{"revision":"36bc36fd42f4d381ef51e3f53614c6e2","url":"assets/js/063a699f.0e90c898.js"},{"revision":"297b286c7083b995913c7a97f2c5d469","url":"assets/js/0b397269.8f52d4ba.js"},{"revision":"e3e118d10c6d8739b735768d8d7c2c4c","url":"assets/js/0bd79e8a.fa2d33cd.js"},{"revision":"5b0820998f6de700f36cf389424d8148","url":"assets/js/0e27b811.cfc30fb2.js"},{"revision":"cf010b06a65084d79cc348b55a392e28","url":"assets/js/0e82d976.25e89a92.js"},{"revision":"90f615ecfde9a78b0589e829dab6453d","url":"assets/js/100b3d4b.84e2628f.js"},{"revision":"0e4c043ec267eec596bc8d913ca5909a","url":"assets/js/101e5ff9.4db887da.js"},{"revision":"682d666c2e5c440f010af64d7a16d1e6","url":"assets/js/13686614.79a7704b.js"},{"revision":"8a5cd2cfbb8d01bab5fc8f56c8330d92","url":"assets/js/13f1ca6a.7f0fb713.js"},{"revision":"efb6df87093e6093353eded680dd6a65","url":"assets/js/13fd969e.03f433c8.js"},{"revision":"d9d460c73fb78966e3dde409877bdfa9","url":"assets/js/17896441.60acfc46.js"},{"revision":"969806f8af0d86830b90e37f5636fb2f","url":"assets/js/190b6e10.e1700eb9.js"},{"revision":"363146b98ab1601f6036bd4b49c2d418","url":"assets/js/192d363b.3a9d8ec5.js"},{"revision":"a49929bea7d36e1a6a8bc835be2579d3","url":"assets/js/1a4e3797.ff08c1b8.js"},{"revision":"ddf4efcea44716eca2c211fcbf5afc34","url":"assets/js/1a825d87.edd5cc8a.js"},{"revision":"16c5c93f55a1fb26e2e5c2c086a61480","url":"assets/js/1bd19118.3c5765b1.js"},{"revision":"60e5613d53ca2dcc3c4792d395cddae1","url":"assets/js/1be78505.2f8b7432.js"},{"revision":"b44b8f0a6f5d19eb537a3167da6afe9a","url":"assets/js/1f391b9e.87d9ebd4.js"},{"revision":"a3a5b081ba6ed93d737c1fe9c62b57b4","url":"assets/js/1fd4882b.7a2f2011.js"},{"revision":"6b518be4ae4440c2cb8cb1b62ecb0a35","url":"assets/js/2116379b.2ea8578d.js"},{"revision":"9c033b37577c4d13c6ab48487eae2eda","url":"assets/js/224b23e5.d77d017a.js"},{"revision":"ac44fab1b74cbf13c220e2ecdf7d7b1f","url":"assets/js/22f4a5b3.a974f8c3.js"},{"revision":"b5df62ac8aebb7263b66b5f09cf5597c","url":"assets/js/230.fd782fbf.js"},{"revision":"49ea0367a325acf47ddbe6598a91e778","url":"assets/js/24214ebd.db40cdff.js"},{"revision":"c120a02b3cc56236f3342dba6d0107e3","url":"assets/js/2554660f.3ae2f25e.js"},{"revision":"7b7107602f2b2a7974b9572970b02c64","url":"assets/js/261dd896.0dbc4c4b.js"},{"revision":"500a845ac5a88e882b480d33b5b67798","url":"assets/js/29b349f3.8a870fee.js"},{"revision":"9f78e3460411eb99015b4bed92feb0f8","url":"assets/js/2a598496.e4047cef.js"},{"revision":"9f87cb3769f066039878f908893de7a8","url":"assets/js/2adbec05.6b79bea8.js"},{"revision":"bd79004d374cbe1d4ef45811bd26564b","url":"assets/js/2c1c895e.351727c1.js"},{"revision":"3f464f05b12f4e283ab3735e02a35206","url":"assets/js/2d7d8729.d4182424.js"},{"revision":"0a68b6364e57c924a5f7036d9b09bc5e","url":"assets/js/2df1f51c.1c0af7bd.js"},{"revision":"af925b798ad1712d54e1d170b537da91","url":"assets/js/2df4419f.3f78fd81.js"},{"revision":"c0e97ffe4cb68f01cbf5176ca0af4b9a","url":"assets/js/2eeace23.b4a50ea3.js"},{"revision":"30fb70c4622556aa71724a03880596ac","url":"assets/js/2f8bb9b2.4b550f27.js"},{"revision":"355ce7af6bd14882cfa516273d30804b","url":"assets/js/3158c8cf.52c48f1f.js"},{"revision":"b33a5e5030791519e63fb36872b1f028","url":"assets/js/315c4c0c.696e8b93.js"},{"revision":"30dc229c8ec2e7b6d4dbd7e90815b139","url":"assets/js/31badd8f.459bcc4f.js"},{"revision":"cf7ec47d1a1586b42ff0156707b4ccb5","url":"assets/js/3291cb5f.1d903410.js"},{"revision":"69d5759ea24f09fce2df4b1ada8704e3","url":"assets/js/345aa186.dbc6cb66.js"},{"revision":"b7f6318ac25fd78b0e5ec64c55fccb85","url":"assets/js/3470666b.8e120935.js"},{"revision":"2049e9c64700c349712f9daed4c67f31","url":"assets/js/36a23f0d.fd397907.js"},{"revision":"1947b274e305534a596c52cc34f3c8b6","url":"assets/js/36d1dd85.a93e3db1.js"},{"revision":"b713f2c502da41e332431c9bd2edb82b","url":"assets/js/37dff405.5bfa5812.js"},{"revision":"763a5d2a7a0f3b25f11c02c8b7a74154","url":"assets/js/38929411.3167351e.js"},{"revision":"2bcbed1d4db494eccb2c9e797d0f73cf","url":"assets/js/393be207.64453da6.js"},{"revision":"6ec814984b2df2fc73764323e9183fb9","url":"assets/js/3974951a.25276a76.js"},{"revision":"077fdfc12da3c7bdaf3d052e662ce0d1","url":"assets/js/39f51c99.f4882a32.js"},{"revision":"1bf9289b34fa0c5256b4e96fb3115617","url":"assets/js/3a9e6485.4403a33c.js"},{"revision":"5ee2e9d552ec524e5363de4ef1bd9de7","url":"assets/js/3b242d5a.63730584.js"},{"revision":"bfc0cbe8126d477d5e237876ddfb7669","url":"assets/js/3c9f5e9a.67e2def3.js"},{"revision":"34962c6f4e42c36e07f8ec1ad091b177","url":"assets/js/3e7ba52d.70f4032f.js"},{"revision":"35a1d7b132478ab653f6e43e458d14c5","url":"assets/js/40e76773.03d21388.js"},{"revision":"8a3d14626b3e05a77b2765b77d412dee","url":"assets/js/40fff90f.379c80c0.js"},{"revision":"b145d1df44e8ef0d413fd31b99372c5b","url":"assets/js/44120e35.20677c8d.js"},{"revision":"1a88ad55cfeb662652b367b8d127f49e","url":"assets/js/451be466.7e00665b.js"},{"revision":"c8d97a7460c5fc2e911e503dfb9105b1","url":"assets/js/4608.72f4b8e5.js"},{"revision":"ab970b1594faab96005553be560eba39","url":"assets/js/462151e0.73388483.js"},{"revision":"b8b91b110a66fcf91b3f2cbdf5ae5467","url":"assets/js/46f2fb66.e9e86751.js"},{"revision":"b67f8e4ff8447e0563af65ad3ffe64f2","url":"assets/js/4728ac03.9fbde935.js"},{"revision":"9eb27c86e79897e808f1054815ea210e","url":"assets/js/473a59f4.9d4208a9.js"},{"revision":"cccbb3b0a49f9266205dd173ab68b66f","url":"assets/js/47478607.0b949292.js"},{"revision":"a20a61d8fd6505cc18dd971cb112fd28","url":"assets/js/490370d9.81ab2a32.js"},{"revision":"b2687e242ca18e9ce62181ee4ee41daa","url":"assets/js/496f9d11.e631c9d9.js"},{"revision":"67df30e5a3af481ca86373c0341d8d9e","url":"assets/js/4a3ebdcb.928b01e6.js"},{"revision":"f1a4598aeb41b0a8c9cc0d18d0262fa4","url":"assets/js/4c0f377f.b4cac544.js"},{"revision":"ee169e9eb776c86a8ddeb71c20909feb","url":"assets/js/4c2e05dc.5b77084e.js"},{"revision":"e9b481d379856b45aa10da14035fb343","url":"assets/js/4d476cbc.decb70ab.js"},{"revision":"4398c556d17041c419425ac832b65fbd","url":"assets/js/5131.6039e178.js"},{"revision":"92ff0f09529c348aeb8d2dbf93288238","url":"assets/js/518f70f3.e501646c.js"},{"revision":"94a63e6c9872fb17cbed69427a81efec","url":"assets/js/5283.5f89a890.js"},{"revision":"d65d24fadba6daaf59eb2698086dcbbd","url":"assets/js/54457b2e.e2c2d20c.js"},{"revision":"abba732797290a50fa81fa475281552f","url":"assets/js/54ea108c.ba80380a.js"},{"revision":"31feefa5bc715e6fe02dc52df0b13156","url":"assets/js/5525.c570d9be.js"},{"revision":"aa44a574ee4cc9bc5719f124d50b0072","url":"assets/js/55a72b1d.345177fb.js"},{"revision":"a9f871bdc942cbe55f678aa3ef905bed","url":"assets/js/56657ed3.18cee900.js"},{"revision":"2fda976b8381dd181ee27be4adac1e01","url":"assets/js/5743a361.8d3d8d90.js"},{"revision":"31edd965422962401a678e58888df709","url":"assets/js/5a956024.43b91f69.js"},{"revision":"5f25bed846499e3b4821f19236d61ff3","url":"assets/js/5ad7565d.f227e8b3.js"},{"revision":"c39d312ce39393ddf2df8f29811eee9f","url":"assets/js/5b1dd855.f4e4f8a6.js"},{"revision":"c5b07ffd19d09819fd85537d76704164","url":"assets/js/5b57840e.ca1ed912.js"},{"revision":"1fbf098d6172934dd66eb58f095f3d05","url":"assets/js/5b589ba2.f4570568.js"},{"revision":"d8bd794824a51aaf7df672de2a08615c","url":"assets/js/5c261f61.319bf30a.js"},{"revision":"d92139d0a0895382c4f8b91ef40f5f22","url":"assets/js/5f53f86a.e07c560c.js"},{"revision":"2d12af4a636dc663c08b6c48a7f4a96c","url":"assets/js/5f9bb678.9b9d5137.js"},{"revision":"709c587e026e2a9b8af33e3398062ea8","url":"assets/js/601a9efc.b3b06e4d.js"},{"revision":"2941469d05361ac54b56f97b5507ef1b","url":"assets/js/6066d41c.f555e5b5.js"},{"revision":"1ccd34c337c582f6e6703ba3e931dd84","url":"assets/js/6147a27d.b3868b2e.js"},{"revision":"099d2198f800a5a0db795c2776873875","url":"assets/js/61950f49.e57ee028.js"},{"revision":"cbfa4a2163792c99ffc7711d7d75b1d3","url":"assets/js/643e5a83.4209104b.js"},{"revision":"f04b36777795820a9c9612675fbbbeba","url":"assets/js/64e395f0.3fbb0c70.js"},{"revision":"33e9b07cd257fb26958c6e9c3c79a552","url":"assets/js/664aef99.d8d331f0.js"},{"revision":"d997c16142c2dede386b580e1a712836","url":"assets/js/66673b81.45bd295e.js"},{"revision":"9182a4c4cd48fb39983f0ec980fa96fb","url":"assets/js/674f95df.f316179a.js"},{"revision":"5fc218f5df17b5d851c8f7c5395827c6","url":"assets/js/67d23d65.fd21eb6c.js"},{"revision":"e2e721132b7dcf98d3805487fd17856c","url":"assets/js/6875c492.300ae373.js"},{"revision":"8c39faa835e9a922fb227696a946a209","url":"assets/js/6d49ca43.f506db2f.js"},{"revision":"8c0a5f1766f895bd4bda992e3909033d","url":"assets/js/6e084987.a8c987f4.js"},{"revision":"43c225ee3a256534d891810384f46c3f","url":"assets/js/6e7b674c.9d3234aa.js"},{"revision":"8ff78fe1b96440cebd40a42f5056de14","url":"assets/js/6fd4c7f2.e7610813.js"},{"revision":"6566d3e6490d052ffb18e633c576f9c8","url":"assets/js/6ffde1e5.3396e64e.js"},{"revision":"01ca36458c0917392432301f58c9adbb","url":"assets/js/7101.2df90bcd.js"},{"revision":"d9c5a24e547636ed907702cb6638b15b","url":"assets/js/7252f9f9.00b24da6.js"},{"revision":"274bf660d8c82e7cb85ba8d7c5f09559","url":"assets/js/73ea704d.5493cc6e.js"},{"revision":"9fe872d608142ffc5d7e900bb1342074","url":"assets/js/74325a1b.bea6c449.js"},{"revision":"950fb9409ff169bef2fb870a8bac582c","url":"assets/js/7579fd43.dfa52119.js"},{"revision":"5f2e744f79b45cd9969b14cd76c65f3a","url":"assets/js/76753446.d611c537.js"},{"revision":"c4a7b94c5f9034546d87fb9e07cdf628","url":"assets/js/7966d1ff.f34d4522.js"},{"revision":"cd88082e67724bd8a60a009956678679","url":"assets/js/7af103ec.1611698f.js"},{"revision":"6b117e214d611d93e766d614658e5962","url":"assets/js/7afe08fb.8d3d9374.js"},{"revision":"c226aff6b1661fcdb5024bb010448115","url":"assets/js/7bc4bc65.e962c33a.js"},{"revision":"80013868d444a3cfa56a5dc087a4120c","url":"assets/js/7e403c1d.929fe198.js"},{"revision":"196f166637d2d193497ed54e6a2f5361","url":"assets/js/7e563037.e0c7b69f.js"},{"revision":"624566b82b39d05c38f4952a446e4315","url":"assets/js/7f7b0be1.58291d9b.js"},{"revision":"c8e3f1cee442d3fd55e08e0feef69a08","url":"assets/js/814f3328.472ef876.js"},{"revision":"d976df4cbff751df2c1fb2a24524c0db","url":"assets/js/8186f4c6.be0fca7e.js"},{"revision":"3097ce2963e809a452022c4d30ebdd26","url":"assets/js/842e6ac7.5443f4f9.js"},{"revision":"d602fd2e5182624ba714c31309d54adb","url":"assets/js/8443.4cec7c8d.js"},{"revision":"154d12fc8a5b8cd65289c7651da06653","url":"assets/js/860479c4.029e93ac.js"},{"revision":"0e88026f1210e91e264e7d01e4a9c74d","url":"assets/js/870f7ab8.255786a8.js"},{"revision":"94a4f704d875a3f1ce0aaa042b7fafa0","url":"assets/js/88650b20.97d9b4ee.js"},{"revision":"988ede9d7e0fb7057d8a0607aba2027d","url":"assets/js/8bf79be1.81016673.js"},{"revision":"dca0f537d0a29057595e89dd621a4b3f","url":"assets/js/8cf2489a.33cadbea.js"},{"revision":"33f241efc83a70fcd403531422479fd6","url":"assets/js/8d46132c.b0767b44.js"},{"revision":"4c769d9887aa997a42d9e47689b7b637","url":"assets/js/8f3c442a.6467ad22.js"},{"revision":"88c28ff6d27fa7ad8d79083bae3ef5ce","url":"assets/js/8f82adeb.7324bde8.js"},{"revision":"d04f62a4c43394de4104df42fa8f836c","url":"assets/js/90388678.36e90100.js"},{"revision":"4777ca03435eded280cdde7f75129b7b","url":"assets/js/9163005b.fec628d7.js"},{"revision":"6346e314fb70a24d268e492da5c0ce1e","url":"assets/js/919a1ac8.f1bc1c7a.js"},{"revision":"b44a8f2b63401d43aa402fa2a838a6d3","url":"assets/js/91fc224a.1581002e.js"},{"revision":"c437683cf82eee3bac3f7754148dd933","url":"assets/js/935f2afb.381608ac.js"},{"revision":"7c5ec0367f74620575df8b2d80c64da1","url":"assets/js/93899ec3.71cb75ff.js"},{"revision":"69bf9ada76cdd9d479b8bcbf2927ff87","url":"assets/js/945a6e64.2e006edf.js"},{"revision":"95602385385b7244b862fca2575a940a","url":"assets/js/9496b7f8.d4128242.js"},{"revision":"f8641737cbd705e1e66d227d208b4a3f","url":"assets/js/963028a2.476acbeb.js"},{"revision":"3944802f145a9aacfc18a81f3ed663c2","url":"assets/js/9652a5a6.f6105cb7.js"},{"revision":"26de1461fcf2a20d61e39ba17112672e","url":"assets/js/97461432.f442dd03.js"},{"revision":"862bedd1f2e5c29285c71d0f514b64f3","url":"assets/js/9828d34f.e2d934ce.js"},{"revision":"e40a7764afd29a38bddcdfb2e95f8115","url":"assets/js/99126758.cede1046.js"},{"revision":"717b1aaabdf9cc49e7c5e6793b617941","url":"assets/js/993b470b.d506d544.js"},{"revision":"c8ad568bf23637aa341e0d851bfc14b4","url":"assets/js/9a224f2f.e1d8c4d3.js"},{"revision":"ef038ed6c35c05710f67fa7dd708ee57","url":"assets/js/9a871c16.a15fa43c.js"},{"revision":"60d10bd30c0d68d8f7a97f9ececa0e06","url":"assets/js/9b3bc8f5.12417844.js"},{"revision":"5019393d0667f13aa70726a75f52ed4f","url":"assets/js/9b4202c7.7a056a87.js"},{"revision":"6c8d3ac1a74b41c9b4504785a2606b77","url":"assets/js/9cb86af0.eecebf67.js"},{"revision":"833e38b4588272618226df231ceee28f","url":"assets/js/9d50f14f.0a310ba7.js"},{"revision":"deb623b25a01b80af91986add12bc6c8","url":"assets/js/9ddc05aa.9f41285e.js"},{"revision":"71ba9ee1011ced3d69e5374592406869","url":"assets/js/9e4087bc.6e4488b1.js"},{"revision":"4f09a609ca7219e6f90aac34e2dddc64","url":"assets/js/9ea0c4bc.7e8bb68d.js"},{"revision":"a65c85090f86a83021141528219f91a0","url":"assets/js/9f69f780.4265f3d9.js"},{"revision":"eecf4833d9d2b29112abf68379e1dc76","url":"assets/js/a1f4aea1.cea8f3d5.js"},{"revision":"f0331990485b4c242d1b46a2ea1c6351","url":"assets/js/a2e6a4dc.4300eb7c.js"},{"revision":"5142a779bc75a9067b13b7db0a47b0dd","url":"assets/js/a43e9d7a.6ff47d1c.js"},{"revision":"30f89e464e7ed0b57290f4c975035632","url":"assets/js/a4ded037.bc9af1ed.js"},{"revision":"1633c1902b7c7cb8e21ab4a66fb9da78","url":"assets/js/a4ded906.b9f2664f.js"},{"revision":"e736f3d358b09aa849071a078aaf6d1d","url":"assets/js/a4fc20d0.1909f679.js"},{"revision":"052325d38656571d187e845d898efc36","url":"assets/js/a54bbc3c.59b43f9e.js"},{"revision":"2736a204d580c35e68e7ac63530efc8e","url":"assets/js/a6aa9e1f.7740e455.js"},{"revision":"9a49aa3c96f9989112a34857f7b32ebe","url":"assets/js/a7dff566.1d5f032e.js"},{"revision":"64d775a61c29f5f85a716878269c49fc","url":"assets/js/a87a6512.7c0abeba.js"},{"revision":"ec1eaa5e7f50e7a275efbe9a21a5f4d1","url":"assets/js/a8bb5334.ff180ee5.js"},{"revision":"708a9988d2bebfa9322afb27bddfb15f","url":"assets/js/a959f067.c72f19e9.js"},{"revision":"4d0e466658d98a203cfe06c1bebc13ce","url":"assets/js/adcf965b.51eb1615.js"},{"revision":"e94b299cfd5aa74e37a13e8610f7ce95","url":"assets/js/ae6bf71d.cc3f12bb.js"},{"revision":"6fbdd83e4035375db2e5148dcb2c9b98","url":"assets/js/af7a7490.ca207897.js"},{"revision":"d9fdfad0352d775b9de49713fa5fbe8d","url":"assets/js/b0c3e977.73beee78.js"},{"revision":"8577df17e2e65c07005bfe8af7b7fa70","url":"assets/js/b1d70ce2.6d0184b0.js"},{"revision":"bbc3588ce9ebcf362bd60295f992c3b4","url":"assets/js/b2b1a3e3.a0e8f821.js"},{"revision":"8c5d6d4241fa1230453e15901437a45f","url":"assets/js/b38addbe.d6d840ea.js"},{"revision":"ed9327e93043813b0420e1103a74ec91","url":"assets/js/b4363cd3.65c6ed51.js"},{"revision":"d68f0ac8d4a67497b1b1ab22df1a1857","url":"assets/js/b50f1568.0bed4865.js"},{"revision":"37bc876b0e25597ae26c042312f6bc95","url":"assets/js/b541643a.b2b74344.js"},{"revision":"cc60ba7373e63864161824b67986da3e","url":"assets/js/b5eea456.27612526.js"},{"revision":"016d8311e142da92e68e0e423aa25b2d","url":"assets/js/b64fbe07.dfb2870c.js"},{"revision":"e2af9fe874c68e78d768324d7209db87","url":"assets/js/b7d2b224.e67f4821.js"},{"revision":"6f16649fbbf280c1f430d8e969a76a8a","url":"assets/js/ba7e0f91.1a40350d.js"},{"revision":"0c52aa5438745a6d04b34f7571bd04e8","url":"assets/js/bca2e2b3.4a11e217.js"},{"revision":"f147b329fab55b146623ddb99b7fdc27","url":"assets/js/bcb79a92.7fdde486.js"},{"revision":"d9d4d038c2fd64f9e3a93b31bb40707e","url":"assets/js/be559a55.e51642a3.js"},{"revision":"da3e1de9df32ae542a28b52d93467509","url":"assets/js/be7f3da9.d3a25e18.js"},{"revision":"ca141700362b72d7313ec0591b2113a6","url":"assets/js/bfa6ebb4.0910db67.js"},{"revision":"e4cbb4e796e520afed6001edd56ba14e","url":"assets/js/c265af1f.ad327fac.js"},{"revision":"6edd361825da6665a524df25f3c0658b","url":"assets/js/c267a0f1.f8155457.js"},{"revision":"16691e5d64f260657b70b527797affc0","url":"assets/js/c2a1396e.2b00f53a.js"},{"revision":"616752e9633a83e75c18796cbcb2eb03","url":"assets/js/c4f5d8e4.0e3f7a5c.js"},{"revision":"6bd9e3ed5521a2e4eb22846e49583518","url":"assets/js/c5538506.018f2aeb.js"},{"revision":"452cb9338f48d1cc69f020c65ebbe0ca","url":"assets/js/c58cf0a6.d771ec37.js"},{"revision":"c15e7aed039b15f7874faf70a0e503d4","url":"assets/js/c7d1068f.6b2e7d00.js"},{"revision":"a3bda19acc43e8a9bc265046b023eb01","url":"assets/js/c92ca946.57b9db55.js"},{"revision":"58654e37888d3b56b21df46ed865df10","url":"assets/js/ca1ec625.6e12f056.js"},{"revision":"72b9531afcc565f5f843274817135233","url":"assets/js/ccc49370.1bc08184.js"},{"revision":"d78634567cf9f72af2266afbd502b228","url":"assets/js/cef34aba.5df7b501.js"},{"revision":"56d7706a9fa56a995c34724aea8bf5cf","url":"assets/js/cefa4bec.4f3caa5d.js"},{"revision":"c4a01fbe5023e7bb01285a01d9e50e68","url":"assets/js/cfd6fcc6.7a3f186a.js"},{"revision":"a9fe9e77115b7637174594d81dcedacd","url":"assets/js/d0330794.005ca35f.js"},{"revision":"60c4ca51e5470cdb051116b9ed9541a4","url":"assets/js/d152179d.917d8bc7.js"},{"revision":"fce88e278471f3aac294eaede2f34ade","url":"assets/js/d27fe332.3851758f.js"},{"revision":"b7b75d8b6d203f681ab45aded4ed894d","url":"assets/js/d33e4f30.f1c11ebd.js"},{"revision":"b49086c8ecb78bc94fcc2f235e044103","url":"assets/js/d351831e.f7a5089e.js"},{"revision":"95191a1f9e7e91f46ff4c085dc52000c","url":"assets/js/d50c3c2d.95ceb8d9.js"},{"revision":"ca0ebd423d634c276019f9ec0900b294","url":"assets/js/d51a2a3a.d0c50c94.js"},{"revision":"326886ce9f0bbc84f0967e4610639f11","url":"assets/js/da5b770e.b6886985.js"},{"revision":"3d8ec5af380a53baea85dfe5c75bb0ea","url":"assets/js/db298118.6c2a9875.js"},{"revision":"591a598684f7dab1f83679b99c4eeb11","url":"assets/js/dbe402ea.1cdd6d46.js"},{"revision":"e4bb53a586771f5be14f2919b5225186","url":"assets/js/dc15164a.86281bda.js"},{"revision":"77d8c9582970ccec9f57e0181dc3b1fc","url":"assets/js/dc61e2a5.1bbe91c6.js"},{"revision":"a8061a1f3811e497505531f579b75ffa","url":"assets/js/dca53f1e.57b573b5.js"},{"revision":"6cd5cc1182b02800eb50f45aec6b74e1","url":"assets/js/e12a00b7.7d1d23df.js"},{"revision":"4db792452bdce4bc74de9796bc10f766","url":"assets/js/e1a247cc.896aba35.js"},{"revision":"d75027c7c55252c0a54a04394119b706","url":"assets/js/e1a40779.b692101a.js"},{"revision":"67753e94e0c36d18711227f8a1981653","url":"assets/js/e3987305.f5c3affa.js"},{"revision":"50cdc079668693cdf391637626ae69ee","url":"assets/js/e4ba58f0.fbf83604.js"},{"revision":"4cdc9d2a21a8fb88f1ef10d35f774aca","url":"assets/js/e6c64800.d5f93caa.js"},{"revision":"90e5d5f2074c40a28402a41f60e25a0a","url":"assets/js/e786c5e1.97b5cd22.js"},{"revision":"5f385bec133245135b2bb26cd4365897","url":"assets/js/e8354955.875ed8ab.js"},{"revision":"c2e5d840a5dcccd86c5ef7288151ca37","url":"assets/js/e91f96ae.ca7ec7f5.js"},{"revision":"ad34e433db7830962f5516f46bbb3496","url":"assets/js/e9443e12.ba41e2c2.js"},{"revision":"db510be7c592efbc3abb7a7cb0f64f9c","url":"assets/js/e9b932b3.7f645676.js"},{"revision":"f0030f5ce39267de52876cecb1c1572e","url":"assets/js/e9cf1827.084d98e8.js"},{"revision":"687437081a00af26529c7dc79781671f","url":"assets/js/eb2d0083.e36bbd1a.js"},{"revision":"b04a05ed3253e9a6d2440b44341b8845","url":"assets/js/eb61a129.fcdb0c68.js"},{"revision":"3e5af961c14c3547ad54d0d0a4780741","url":"assets/js/ebbe3f4f.cab3b1d1.js"},{"revision":"3e3296d44f9f24956bd4d19229185cfe","url":"assets/js/ebd19392.9c338a09.js"},{"revision":"84e6838ae5a523952bf222100f629165","url":"assets/js/ec99076d.19d7d93e.js"},{"revision":"ea4b43765c458de7cf329d777a2e2919","url":"assets/js/ee2ffb42.fdd02291.js"},{"revision":"c97f915eb1dea5f5f4dcb15ab28b8b35","url":"assets/js/f1138434.39cf198a.js"},{"revision":"7236dd32aa76b5b4709e8bb556c1f121","url":"assets/js/f1c1b6a1.067441a7.js"},{"revision":"97f0a0c904f4355969fe8d3f7e35751c","url":"assets/js/f1fb474c.36435bd9.js"},{"revision":"59f639318e71753910f546ffaf36bf00","url":"assets/js/f2455dc1.967cf1d9.js"},{"revision":"a44531203d2459a233b6dbf1f8f63e4f","url":"assets/js/f3272cef.fea7a872.js"},{"revision":"a264bf4e720a9c6cf1200e93cec8d3fa","url":"assets/js/f37d89f6.369ae12e.js"},{"revision":"37357235c478367c8c9180e3a4a6644f","url":"assets/js/f3b7b98e.273a2d2f.js"},{"revision":"fb4ebfc37000d26853275169373441b1","url":"assets/js/f3f64536.d8bac129.js"},{"revision":"9a48b7767ef667742d064780ff00dd5d","url":"assets/js/f5f88357.2d0ac3a7.js"},{"revision":"67614c0d99e170dcdc52e8395d079db2","url":"assets/js/f61c272a.d2741375.js"},{"revision":"b9737752ed9d55deb2caa30c9e3ee137","url":"assets/js/f6236864.6fba5ff1.js"},{"revision":"200649c8905de21622669667199a0bf7","url":"assets/js/f6238cf8.636794a7.js"},{"revision":"f46c980568e586e40b1e401d22c314c4","url":"assets/js/f6cbd956.d9c6342c.js"},{"revision":"8fa0f974b25ceb0564a5d55e921c0e8a","url":"assets/js/f7994445.e139da0a.js"},{"revision":"81e24e4afd10f8c15de998a7f48d73b7","url":"assets/js/f93a4a83.8916163d.js"},{"revision":"5af4bd3b44474ed9288d7811631ba5cb","url":"assets/js/f941825c.f0d6553c.js"},{"revision":"ab28f58cc1c6867b741dbb33dd32d71a","url":"assets/js/f961a554.5fd6758d.js"},{"revision":"9f4b9f1775d0d4cae797f4d8aade594d","url":"assets/js/fab1ea1e.82f71469.js"},{"revision":"e27e8b2ef00db2ed1b28baa2b4191041","url":"assets/js/fe3ec235.9747bc0b.js"},{"revision":"6af7e71282147cadbe2bedc07faba4e7","url":"assets/js/fe414e14.ca567f8d.js"},{"revision":"6ebe01e64bba4d7cdfeefda308eafa2f","url":"assets/js/ff9b4a52.39438c7d.js"},{"revision":"93648b8d5f588b7ed8a5460c4bd478e3","url":"assets/js/main.5c72608f.js"},{"revision":"f1ba0425a73fe725950b4d0bced8ce97","url":"assets/js/runtime~main.e26670f8.js"},{"revision":"7cdec276c4d24c8c849cca9a01511c3d","url":"blog/archive/index.html"},{"revision":"3ed09ff8d93c87b49d0aba4e75d403a0","url":"blog/index.html"},{"revision":"6486f127cc437daa54ce02132ee6b655","url":"blog/profile/index.html"},{"revision":"b5e50553ddd3426260943364911ecddc","url":"blog/tags/hello/index.html"},{"revision":"7f24bf04a847299c5f4860e6bbfbe9aa","url":"blog/tags/index.html"},{"revision":"494d92142216837fea96dbfeaf2385bf","url":"blog/tags/notes-2/index.html"},{"revision":"a2a5c9e9109fca4e3e0bd8aece66bc06","url":"blog/tags/notes/index.html"},{"revision":"f00bdef60c19d796f9b524e2280214c6","url":"blog/tags/个人简介/index.html"},{"revision":"c9ffb19cc0476c20435fe01c4cac9da7","url":"blog/v1/index.html"},{"revision":"90a16c370e6a097ec89bcb02a7725c23","url":"blog/v2/index.html"},{"revision":"46827018490828aa9dfde9d7b807d7a4","url":"docs/guide/index.html"},{"revision":"5d8431619e9058dd9394a854d7645ce6","url":"engineering/browser/every-frame-in-browser/index.html"},{"revision":"31db9fee4ee62cdf76f9cee8a8f47157","url":"engineering/coding/annotation/index.html"},{"revision":"0e83fd886d4b58193a0772ded4eb6cb5","url":"engineering/coding/style/index.html"},{"revision":"6a8ed1fa1eb6596064e513af7b474a65","url":"engineering/docker/centos-node-install/index.html"},{"revision":"f5eb4c3e5601ba24f3f6b8a5e1985ee5","url":"engineering/docker/command/container-fs/index.html"},{"revision":"5a17a1e65071dda110f6b1e7c12f4291","url":"engineering/docker/command/docker-command/index.html"},{"revision":"a73a464e65749e2a45055fc1d75e2d22","url":"engineering/docker/command/local-images-manage/index.html"},{"revision":"3679d7ef766cec5c3bb23f727adca7a8","url":"engineering/docker/docker-install/index.html"},{"revision":"b5c07e3fd8713b1008c8c81cd82daefd","url":"engineering/docker/quick-start/index.html"},{"revision":"92977bc82bae1ce9c3995cf3776556bd","url":"engineering/git-npm/git/git-base-analysis/index.html"},{"revision":"36443a095d8cd1da286714583a9f80bc","url":"engineering/git-npm/git/git-branch-opinion/index.html"},{"revision":"227b9baf444e4b29eacf6e8d05ee584b","url":"engineering/git-npm/git/git-config-multiple-ssh/index.html"},{"revision":"4e82e1d3e386fb7ddc1bd5c90e994491","url":"engineering/git-npm/git/git-objects/index.html"},{"revision":"3955b4d1d854c7116b3a3b3c4411da79","url":"engineering/git-npm/git/git-tips/index.html"},{"revision":"59e076c21c7ced642735015a3837edce","url":"engineering/git-npm/git/github-action-improve/index.html"},{"revision":"f6663db53efc775b2cbbe3eec2a4f2d9","url":"engineering/git-npm/git/github-action/index.html"},{"revision":"a1b876aae19381a80d0735150e3bf581","url":"engineering/git-npm/git/github-profile/index.html"},{"revision":"13a15164be3ae844b2e66761b02a9e68","url":"engineering/git-npm/git/version/index.html"},{"revision":"a397060c477cc04de9523b3de0fcfa06","url":"engineering/git-npm/git/you-must-know-git-commands/index.html"},{"revision":"8f6fa954fe5618d037f88855b172ea84","url":"engineering/git-npm/guide/index.html"},{"revision":"c72371d2c0293ee257850065ebba7a94","url":"engineering/git-npm/npm/how-npx-to-run/index.html"},{"revision":"88cf5cd479dccdab8f125d62e340cc07","url":"engineering/git-npm/npm/npm-install-vs-npm-ci/index.html"},{"revision":"0c9292446f4aeb95bd76ded8b1543404","url":"engineering/git-npm/npm/npm-knowledge-reserve/index.html"},{"revision":"1517aa8ff8c19b5aa11d3c6bac6ddb42","url":"engineering/git-npm/npm/npm-package-json/index.html"},{"revision":"24dfb4581895a1bfe59f84f820e40bdb","url":"engineering/git-npm/npm/npm-publish/index.html"},{"revision":"056a3aab658935fc7d3ebaae1af516f2","url":"engineering/git-npm/npm/npm-scripts/index.html"},{"revision":"bb01b4daa972c27bcc729048d3f81cea","url":"engineering/git-npm/npm/npm-short-commands/index.html"},{"revision":"1a71cfca21b50ee909c43b2c30f54ca9","url":"engineering/git-npm/npm/package-lock-vs-yarn-lock/index.html"},{"revision":"10dde6996a89486fb678aa010e9c98f9","url":"engineering/guide/index.html"},{"revision":"79c5c7947bcac15fe7e42686d9ee4551","url":"engineering/http/request-to-page/index.html"},{"revision":"9f9551970c32e65dcaa2fcbcddae1aca","url":"engineering/http/tcp/index.html"},{"revision":"55373ce83bd8fa3fd602e29a4241de4a","url":"engineering/http/version-compare/index.html"},{"revision":"e02e115cd9603b1a84cb9265137ccf4d","url":"engineering/lerna/base/index.html"},{"revision":"4e9eaa690265999c8d106502b412705c","url":"engineering/lerna/build-cli/1/index.html"},{"revision":"05b6482a67da07c06b23d90f6f26ace8","url":"engineering/lerna/build-cli/2/index.html"},{"revision":"d59339758262b48c9329b7a8f6c0069c","url":"engineering/lerna/build-cli/qa/index.html"},{"revision":"b6555dccb92e5d054f940a9ac90abbc7","url":"engineering/lerna/commands/index.html"},{"revision":"7a05943f8bfe6e4700464279eea5684c","url":"engineering/lerna/faq/index.html"},{"revision":"5b2df51430b11805a56e91281a1ea9d5","url":"engineering/lerna/quick-start/index.html"},{"revision":"83cbc25521c4c621db8bba148aa5fc01","url":"engineering/linux/command-shortcut/index.html"},{"revision":"9466697941095c55b0a5edc2f48c19ac","url":"engineering/linux/initial/index.html"},{"revision":"d4e2be23957f09ac505294fd0fce5dde","url":"engineering/nginx/note/index.html"},{"revision":"f6c124631075c980ce0a5d54d7f8bb87","url":"engineering/shell/common-git-commands/index.html"},{"revision":"798b4a2f94e7f6455ddd3730ca80b3ad","url":"engineering/shell/index.html"},{"revision":"21113ba60be9edefaf143a710bb0a307","url":"engineering/shell/resources/index.html"},{"revision":"f7cdfce53dad1a417e1ed8963e9d8255","url":"engineering/webpack/async-import/index.html"},{"revision":"525ea339d36148d72ded50acf35713d1","url":"engineering/webpack/build-tools/index.html"},{"revision":"d1d2d04255fd83c1bf21383d5a5940ef","url":"engineering/webpack/build/index.html"},{"revision":"354be76d8837182d898defa646c2fa8b","url":"engineering/webpack/hash-chunkhash-contenthash/index.html"},{"revision":"8ccfa37b3360e2214d2d6c05178ca117","url":"engineering/webpack/loader/base/index.html"},{"revision":"d8005023531f07f11da4c108e8a363e3","url":"engineering/webpack/loader/category/index.html"},{"revision":"80053dcb06d2cd014f92600917a0dd20","url":"engineering/webpack/loader/config/index.html"},{"revision":"5a41317360399afed441404c931eecc7","url":"engineering/webpack/loader/exec/index.html"},{"revision":"cd745ae8b80c7526108f1e7069436fba","url":"engineering/webpack/loader/implement/index.html"},{"revision":"f682a7f547c6011754bca766b70b6b24","url":"engineering/webpack/loader/match/index.html"},{"revision":"9fadff950edc3cb6ff74e4409994d095","url":"engineering/webpack/magic-comments/index.html"},{"revision":"3bce94d94e8b5da5344f52c91bf47353","url":"engineering/webpack/mini-webpack/index.html"},{"revision":"5db95e997feaba1351c3f02bc927ddc0","url":"engineering/webpack/module-chunk-bundle/index.html"},{"revision":"6cb7c0577b803ee68c5ab15fdba9e425","url":"engineering/webpack/plugins/index.html"},{"revision":"7eab354ba9a55edae06a251656160372","url":"engineering/webpack/tapable/index.html"},{"revision":"a7ef67e9b69f71ad57dace9c963d3d8b","url":"engineering/webpack/webpack-base/index.html"},{"revision":"ae1698a0fa0e647c1bcd8bb10c4bcd15","url":"engineering/webpack/webpack-optimize/index.html"},{"revision":"556dae5676f6776125f62cd6d80a0754","url":"fe/babel/ast/estree-spec/index.html"},{"revision":"93e68f71da9c8d46f94facd364851e24","url":"fe/babel/ast/index.html"},{"revision":"637cc8707b440f8f4a79e08be60c4994","url":"fe/babel/babel-handbook/index.html"},{"revision":"9cbd7f20949ca5138a4ccd18f23cca82","url":"fe/css/change-inputs-placeholder/index.html"},{"revision":"c2c944eb3d96f514d499a25f4e60091d","url":"fe/css/client-scroll-offset/index.html"},{"revision":"6a6422be4f70dfdde1d6ae9f08094484","url":"fe/css/css-selector/index.html"},{"revision":"cf74e2da3a060a34423aab630d9ec730","url":"fe/css/css3-masks/index.html"},{"revision":"69fab7f57836972217af5e1c93ecda7f","url":"fe/css/flex-item-properties/index.html"},{"revision":"c932ba28f2c265eae18f3ea40021de1a","url":"fe/css/flex/index.html"},{"revision":"573a875bc74f4b6523ef918845b059a6","url":"fe/css/resource/index.html"},{"revision":"927f2784cebe1784bba8786fe6fdcf19","url":"fe/css/width-height-properties/index.html"},{"revision":"9e2715a4fd8ae1a28f679881dcd14f9a","url":"fe/css/z-index/index.html"},{"revision":"43f956665cbac8ee706e00cb0e4bfcf4","url":"fe/debugger/browser-user-agent/index.html"},{"revision":"5b87d66240c72cde8cad7ce34fe49ff4","url":"fe/debugger/how-to-debug/a-few-debug-skills/index.html"},{"revision":"11cec7f90fe75b3d863d5a76e558b441","url":"fe/debugger/how-to-debug/browser/index.html"},{"revision":"8df380bf658a39faa2599125de7bce77","url":"fe/debugger/how-to-debug/console/index.html"},{"revision":"7e09e04167341ba687b7ea938f6ec47b","url":"fe/debugger/how-to-debug/index.html"},{"revision":"c3656598e989691f7d51d753c23d6b6a","url":"fe/debugger/mac-how-to-use-other-env-browsers/index.html"},{"revision":"b9ec6f2fbf6dba2888b35869e8a0bed2","url":"fe/guide/index.html"},{"revision":"bd7a6f44958959510fcd758817d85fc9","url":"fe/html/guide/index.html"},{"revision":"e0e250615bd1a4ed838270a7d14de190","url":"fe/javascript/es-study/decorator/index.html"},{"revision":"5cc2eeeb53baa379a6e0cc12108c582c","url":"fe/javascript/es-study/es-guide/index.html"},{"revision":"e3d0e74af12b02b44bf4b8cb814a98ad","url":"fe/javascript/es-study/import/import-async/index.html"},{"revision":"dfba6ffb20e1e870b5e89566b4ba0db1","url":"fe/javascript/es-study/import/import-full/index.html"},{"revision":"cacedd2bcb6b827cf18d55c4c44b4249","url":"fe/javascript/es-study/import/index.html"},{"revision":"2e0d690d732b23293b7d7ff877331d54","url":"fe/javascript/es-study/map-weakmap-set-weakset/index.html"},{"revision":"ac26216ee5b768889cd6be727b7db627","url":"fe/javascript/es-study/module/index.html"},{"revision":"b4025d0960b2e8471e987d19cf0f4af7","url":"fe/javascript/es-study/static/index.html"},{"revision":"d5db46e8b09fc4c3851a91b8ac20944a","url":"fe/javascript/key-concept/bubble-capture/index.html"},{"revision":"940325017834e94e8df40b83b31a93d7","url":"fe/javascript/key-concept/call-apply-bind/index.html"},{"revision":"e1e0572ef6679654fca4123c57a913b2","url":"fe/javascript/key-concept/closure/index.html"},{"revision":"b9d26bf203ac4aff638b0680ed265f57","url":"fe/javascript/key-concept/event-loop/index.html"},{"revision":"3d368b4f13f251febece8010dcc8af82","url":"fe/javascript/key-concept/execution-context/index.html"},{"revision":"5079d31949833d927aa6e84758db93c5","url":"fe/javascript/key-concept/extends/index.html"},{"revision":"d7b20d2d12b08b0bd45ffaa2358cb55a","url":"fe/javascript/key-concept/garbage-collection/index.html"},{"revision":"d685e2c349bb342d54082c64b3ac169a","url":"fe/javascript/key-concept/hoisting/index.html"},{"revision":"d9235a991ba1f8c997273825ba239568","url":"fe/javascript/key-concept/instanceof/index.html"},{"revision":"a963a0dcffad670bf2cc4c70c7734dd8","url":"fe/javascript/key-concept/js-float-accurate/index.html"},{"revision":"aab8f9b9cce9ac0baa20a4d1dc51de9a","url":"fe/javascript/key-concept/new/index.html"},{"revision":"40042ad4d97864fac2843515ddc1c0a5","url":"fe/javascript/key-concept/null-vs-undefined/index.html"},{"revision":"f0b828bff12c855c051a7fef94bf3676","url":"fe/javascript/key-concept/prototype-chain/index.html"},{"revision":"e3261ebb2d604624ff373d00e5bfc554","url":"fe/javascript/key-concept/router/index.html"},{"revision":"92a6996a435561bdb078819459f9963f","url":"fe/javascript/key-concept/scope-chain/index.html"},{"revision":"321cde644dfc5374ad348378a4f97ac0","url":"fe/javascript/key-concept/this/index.html"},{"revision":"c96b13263101171893ad9ab9ab125578","url":"fe/javascript/key-concept/url-to-page/index.html"},{"revision":"98f252ae6309d6c930facbf981227d6b","url":"fe/javascript/key-concept/values-vs-reference/index.html"},{"revision":"473a259830e1b7a2d4e0567e9ee043f0","url":"fe/javascript/key-concept/var-let-const-function-lifecycle/index.html"},{"revision":"db9275382f0c702d2c58f8963c60ea0d","url":"fe/javascript/notes/common-operator/index.html"},{"revision":"a387109d8cbbd56efc3fcffdfddd7456","url":"fe/javascript/notes/compose/index.html"},{"revision":"4b7f473d94c448fdb8d10dd8ce8d2109","url":"fe/javascript/notes/console/console-related-note/index.html"},{"revision":"98fcc27fd33247211664f8c101a89f83","url":"fe/javascript/notes/curring/index.html"},{"revision":"4482b38a80fd34b9e0cfceacd811acf4","url":"fe/javascript/notes/event-driven-vs-data-driven/index.html"},{"revision":"a02a7d52a4e80ce4952fc1e342aa9965","url":"fe/javascript/notes/get-dom-property/index.html"},{"revision":"43954401088012534bc88b6bbc7cf46e","url":"fe/javascript/regular-expression/common-reg-exps/index.html"},{"revision":"a47503629e201b7803e71f87dc8d7024","url":"fe/javascript/regular-expression/index.html"},{"revision":"ee11770a6b644b9f32e6c15819dd2496","url":"fe/javascript/resource/index.html"},{"revision":"1dc4396e51a5335ab8643c32541f5af1","url":"fe/mobile/charles-https-mobile-config/index.html"},{"revision":"28d9cd9592309bbd49bf77f6486798ee","url":"fe/mobile/mobile-tips/index.html"},{"revision":"14f2ede033584acad42d0bb92d86ad4f","url":"fe/node/concurrent/index.html"},{"revision":"d9aa91bf8282b0b28b6473bcff4b9c09","url":"fe/node/path/index.html"},{"revision":"f2dfc1920d045e859d5faeae060b48a7","url":"fe/node/require/index.html"},{"revision":"9a6ccc4b50a6b16d67fbbc9057248bce","url":"fe/optimize/first-reload/index.html"},{"revision":"5c33d9f78d00ff5c14f5366e81dbd122","url":"fe/optimize/performance/index.html"},{"revision":"d92070c7045434a8b352661e29391acd","url":"fe/promise/implement/index.html"},{"revision":"6a1c9186578227c296412d62c260a143","url":"fe/promise/little-knowledge/index.html"},{"revision":"60a65e60a189d4afe2b137d72090de27","url":"fe/react/better-scroll/base/index.html"},{"revision":"980b89ecd977e99542c1fc891f03d2e2","url":"fe/react/better-scroll/scroll/index.html"},{"revision":"fa7e65f724eb306e9d44fdcb03555fd8","url":"fe/react/better-scroll/slider/index.html"},{"revision":"23b5bda0af82ce7451ec6b182b11d557","url":"fe/react/better-scroll/sticky/index.html"},{"revision":"b0bd8af8df24e9975c1ad1b97c683af5","url":"fe/react/component-library/init/index.html"},{"revision":"680078a885b9c6248b109ebd9ed73a6a","url":"fe/react/crd-ts/index.html"},{"revision":"128c6350a56c8144dee7f4f85175f12d","url":"fe/react/events/index.html"},{"revision":"6f9b4bfbdb347fc0a74955b9e874d7dc","url":"fe/react/hooks/base/index.html"},{"revision":"781100f5311b267259cbc1a5afb347c2","url":"fe/react/hooks/forwardRef/index.html"},{"revision":"d45f9b91d6cdfa11dd959416554e4922","url":"fe/react/hooks/useCallback/index.html"},{"revision":"1e83e1a00ecce6356af0b4f968cde692","url":"fe/react/hooks/useContext/index.html"},{"revision":"de88941bd509d84568fd21d2b3415205","url":"fe/react/hooks/useCustom/index.html"},{"revision":"a3fa15c73fe10f0fc82206fd46f6635c","url":"fe/react/hooks/useEffect/index.html"},{"revision":"47dc9de5eca62df8dae1a0aefedf629c","url":"fe/react/hooks/useImperativeHandle/index.html"},{"revision":"80a5550839176cac4d5ba9d26467e0ec","url":"fe/react/hooks/useLayoutEffect/index.html"},{"revision":"15c8bd5530f6ce07b1b2f284f645aea5","url":"fe/react/hooks/useMemo/index.html"},{"revision":"6f797aafeba25df51a2374c589e8eb3e","url":"fe/react/hooks/useReducer/index.html"},{"revision":"8f1f1512c3495434f6e8d7d4712c0b45","url":"fe/react/hooks/useRef/index.html"},{"revision":"3ec939810a365416f51ef1ca43d0532f","url":"fe/react/hooks/useState/index.html"},{"revision":"64d8476a2d3d11f1817248d26f2ceb89","url":"fe/react/lifecycle/index.html"},{"revision":"45d368d49e71ab006b72d2f467d294a2","url":"fe/react/resource/index.html"},{"revision":"5046c7fb373376330ace887d037acba8","url":"fe/react/router/router-diff-with-browser-and-hash/index.html"},{"revision":"5b756a5756e54d5c283986e6336c350b","url":"fe/react/setState/index.html"},{"revision":"e34110ad4f3bfed1272c3071b05c8e1d","url":"fe/typescript/base/index.html"},{"revision":"df867ce44e5d2fe3bab76c4a5e501599","url":"fe/typescript/guide/index.html"},{"revision":"ebfe0a4720f6cc0a4c2c9bc397e49608","url":"fe/typescript/json-schema/index.html"},{"revision":"6bb33ef51a596e3978625a8b64c0c28d","url":"fe/typescript/qa/index.html"},{"revision":"22eca46de84dbc3d77466d9201b56220","url":"fe/typescript/quicktype/index.html"},{"revision":"02da777d70af4dd36233095f87142624","url":"fe/typescript/taptypes/index.html"},{"revision":"aba8edc3151490aad0c20e4711397889","url":"fe/typescript/tips/index.html"},{"revision":"91a44b71e7ac9eb811212081a826f932","url":"fe/typescript/ts-eslint-qa/index.html"},{"revision":"87e5c7d4873ca6fc992eecb9ed5be630","url":"fe/vue/cascade-menu/index.html"},{"revision":"bcc88baff9e2874583faee2ce122aba8","url":"fe/vue/lifecycle/vue2/index.html"},{"revision":"e694096954e3b3d266568ae0430dd6a0","url":"fe/vue/slide-menu/index.html"},{"revision":"90f6ef942e17b40df415461665cdda32","url":"index.html"},{"revision":"74dd5820d0d35647a439246b63680a53","url":"interview/browser/http/version-compare/index.html"},{"revision":"1e142cc6f1896390b3ff9faaae972ab3","url":"interview/browser/the-process-after-url-input/index.html"},{"revision":"775f30f271fcf3c8f0ef63a2a447c158","url":"interview/browser/v8/gc/index.html"},{"revision":"c0192b032aca95ccd224665d5c4e08e7","url":"interview/guide/index.html"},{"revision":"32333c680084b2a3645e7019384eed17","url":"interview/javascript/closure/index.html"},{"revision":"5da62cced148eb8f434762416567df17","url":"interview/javascript/scope-chain/index.html"},{"revision":"4d543c2132075d08ca0d491cea64fe7e","url":"interview/react/fiber/index.html"},{"revision":"bcd46baf4d0ce97c79490b8c6079ba4c","url":"interview/resource/index.html"},{"revision":"94ddf73e9d709bc5e27a8f2bf68045e2","url":"interview/security/csrf/index.html"},{"revision":"2413dbdbd9acfc7e53f308b1d8c4bd0c","url":"interview/security/xss/index.html"},{"revision":"22b5509e08556d857a62c96bb49f4b03","url":"life/guide/index.html"},{"revision":"5d6d2549f60ff1c565ccc1270df21ca6","url":"life/how-to-make-dried-flower/index.html"},{"revision":"ea4af92240db2dc0379a5b07e0b8f309","url":"markdown-page/index.html"},{"revision":"36da873f40230a5dd4af98bc739292f3","url":"resources/browser-plugins/index.html"},{"revision":"c240b6caab01d7b717502c7ecd980c44","url":"resources/crack-software-collection/index.html"},{"revision":"0d6343fa468e34e74b279c2c0a433ef9","url":"resources/guide/index.html"},{"revision":"b96ec2b64642f8766ff9ce47b3a25983","url":"resources/mac-software/index.html"},{"revision":"21553791d80b10aace194e8fec5511f7","url":"resources/music-download/index.html"},{"revision":"c3ca6efbce7230f2518afba632f46da0","url":"resources/others/index.html"},{"revision":"90398080eeaa1ed0d0330a08e222e760","url":"resources/shows/index.html"},{"revision":"6cae5007d9461a2e0fb05d1bb766c6d9","url":"resources/software/index.html"},{"revision":"1a0b2c30078580a2040c017f1157d64b","url":"resources/vlog/index.html"},{"revision":"c3b3f03d4f6f375e52c9de3b7c73ad37","url":"resources/website/char/index.html"},{"revision":"64b2a5eda9fc3cc3ff4ab4530111935a","url":"resources/website/code/index.html"},{"revision":"4288c947595f7b7debe67cbafff0f4fc","url":"resources/website/file/index.html"},{"revision":"75a3c7c1b8a2ff7d8dafc4ee22b2faa8","url":"resources/website/index.html"},{"revision":"461ddac1e0c1f396981550291f127bd5","url":"resources/website/learn/index.html"},{"revision":"aa1c57bbb606411da4f9d25af91ab30d","url":"resources/website/mind-graph/index.html"},{"revision":"3cd1ade1f123e942b8006292e8c04953","url":"resources/website/office/index.html"},{"revision":"8e7323f026e62e41f3a13091e55da712","url":"resources/website/others/index.html"},{"revision":"0d8cd5e794d4f98f30c88ff19a259a27","url":"resources/website/picture/index.html"},{"revision":"f40f5e69c34fe8828ae305c40ea3d956","url":"resources/website/tools/index.html"},{"revision":"4a8a2512b35b5b77ba2d5e09a9508106","url":"resources/website/video/index.html"},{"revision":"1aaadcc05506e417c0d0640c6230999d","url":"resources/website/voice/index.html"},{"revision":"a13c72ef2b756e1c14d64a6bdaa699d6","url":"resources/window-software/index.html"},{"revision":"8121b927980cc4f538276c50ca4b19fc","url":"resources/youtube-download/index.html"},{"revision":"354837312b44605f96cd9e8a603acded","url":"review/2021/annual/index.html"},{"revision":"898ae4e0c27d2681ad46b4bb2b3f028c","url":"review/2021/middle/index.html"},{"revision":"dadfdcee194954d4b86b8d46264bb43c","url":"review/guide/index.html"},{"revision":"052953107f17dcfcf855d617092e9ea0","url":"search/index.html"},{"revision":"4beb03802e0097c953837a1228f82d4a","url":"tools/guide/index.html"},{"revision":"329ea2a4c937b5875e5e7d3decea63e3","url":"tools/iterm2/iterm2+zsh/index.html"},{"revision":"890be7747944afd604d536831f23a5e9","url":"tools/vscode/alias/index.html"},{"revision":"e2d2c79ae62d5f4e61d6dfc9318e5640","url":"tools/vscode/extensions/index.html"},{"revision":"383845bac6b609f5fcd5ef5156af12a9","url":"tools/vscode/settings/index.html"},{"revision":"c938db6fa94aa1385ef8bbd8e358f675","url":"tools/vscode/tips/index.html"},{"revision":"fad6f43574acb48f4fd700878499a804","url":"tools/vscode/todo-tree/index.html"},{"revision":"37e794131c123e27429ec8e942bc453e","url":"assets/images/_git-068297d983e013e210f5d0e561c69e82.png"},{"revision":"ffba450e3a1cf678553d8534a6011afa","url":"assets/images/1-bcf83d072934fc129811f44b588fb703.png"},{"revision":"73d50de2ec7908340493f4941c45c550","url":"assets/images/1-e08eab2036a2c817ee4114814935a111.gif"},{"revision":"765b1273f59f90af5d629f7573c3056f","url":"assets/images/1ketang-4b2170858c7054b9c29767d64f873d16.png"},{"revision":"fd0e6d791984b60856df884cbb5652ff","url":"assets/images/2-4f8fa2725aba921021950af55c4cc486.jpeg"},{"revision":"1ebe1394779650bfe24a76967562a711","url":"assets/images/2-b4399e248c5bdf5e8ce9705b723cea62.png"},{"revision":"231d12837b74cccc609e12a119436f5e","url":"assets/images/2019_phone_numbers-b157a6777945ea65a7d8d3e5e4e4928f.png"},{"revision":"c0feaaa2a410298264d648b04527eef3","url":"assets/images/212-server-nginx-31a50b8f66f62ec228a4dfd40f2f5600.png"},{"revision":"ba771efcfcf1fd35b2cdbd24784f86e1","url":"assets/images/3-1463037d82d579da677da8dc5a43ab4e.png"},{"revision":"eff6297304841c28f62bed9ea40eb607","url":"assets/images/3-70ff035cafbeadd886261eed06fcf5e8.jpeg"},{"revision":"6ac94697777ef0dd014a1b706d9a435c","url":"assets/images/3-hand-4-unshake-status-041b730cb76cd748bd5897a9f73be133.png"},{"revision":"6c32ab2b56b843e1cac2869cb304caa4","url":"assets/images/3-hand-4372749e384a4ca55cf067f347e17965.png"},{"revision":"b543530a25ebcfc2a62b307632f7e411","url":"assets/images/4-9f793634be2d8008007cd717020ec23a.jpeg"},{"revision":"2c134a61be004682e7705fc9ea52d666","url":"assets/images/4-bc647eb1f758768e5cace87739e33f5e.png"},{"revision":"3f2d57fc6f2136dfa36e11d1fdabebfe","url":"assets/images/4-unshake-9b236210467147cc01530e0c27746ec0.png"},{"revision":"a529551459089d5637dde23e8eaa3589","url":"assets/images/5-446a8655bc3329bd2eef85e44e3ca560.gif"},{"revision":"483351ccd4213d4b9c76cdbef0397d2e","url":"assets/images/5-5dc2ba849f14f1680cf4579cb548be23.png"},{"revision":"ef0234ddd28353957b50b25fcbd45d24","url":"assets/images/500th-video-convert-5d0841005ef861fe5a2eb9c910ce2f50.jpg"},{"revision":"9971cca11879117fc6f2e933753e72cd","url":"assets/images/6-2ee0360db7b6766b359499a2736f6c06.jpeg"},{"revision":"b0da76bb220d0d00e5ab715c75a83464","url":"assets/images/6-d9e0be7964685df38a4ceab96c128df3.png"},{"revision":"a855a73b76c15fa818db77ebab3f0dba","url":"assets/images/7-59b3b8a40b84cbce83d32a3d392937e4.jpeg"},{"revision":"562ed617ab235edb0b053d87b89a721f","url":"assets/images/7-8d7ae5558f724b4d67de4162913a969a.png"},{"revision":"f442a9dfbde6c4e251c94190342eff92","url":"assets/images/8-8d924f01b41a779aa75311e15e92411a.png"},{"revision":"76aa014b98210288bc5a45bcf86dafef","url":"assets/images/8-9d74b7c739842bec8d23b17d335b1c83.jpeg"},{"revision":"703d5330fdee89dfd0355e624072c24b","url":"assets/images/9-d2f457e6d7acae577a8e861333a0596d.jpeg"},{"revision":"794581388e74ff619a18aab0eb59f25a","url":"assets/images/9-d334cec763470b5e763d7954516a0498.png"},{"revision":"a4f11fa543657c718f791b2acbf9b80b","url":"assets/images/accurate-0e1a599094a42ec1a927bb549a9d18af.png"},{"revision":"5fbc6e439cdcfdd46fb1f3f7583b17d9","url":"assets/images/add-certificate-06213798c60c21dd08eebcf1c651a2f1.png"},{"revision":"dd07fb75cf1e147213908b46eb3d585a","url":"assets/images/add-ssh-key-5724bc22fea74f3a80256aa621981ff8.png"},{"revision":"f14123645f4a18ace1adaf907f40dd44","url":"assets/images/addDocComments-51684a97448f2411fd0624cc5a960007.gif"},{"revision":"4f47f1c283d62e45c1e27c106fae2585","url":"assets/images/addjsdoc-7beeb9d3c8a471ccda629850ddb4246d.png"},{"revision":"b2beffdf3f9579d5c9f748121cfab3a0","url":"assets/images/addog-vip-165ce1a4aa203f3a27e3ac6150e44cff.png"},{"revision":"3ab960d3db6b9846d72c742e6e41b9e3","url":"assets/images/alfred-fc26a03ca007f1ad3aa6b6c0f7cd02c6.png"},{"revision":"6d286c82c06da2949643efbd5469160e","url":"assets/images/alias-01d98801b6b1533992ab277eccb5a50a.png"},{"revision":"08b942ba115ea0b74713735c67563942","url":"assets/images/appwatch-69a68792807f328d45c98024d12a0f10.gif"},{"revision":"bc3802372279f4e414c74f374e416668","url":"assets/images/arithmetic-operators1-4e9355d68dabf2a818ef7006f1e5cfc5.png"},{"revision":"2fcd4f8dd48df0a587dc1d7fbd12eca8","url":"assets/images/asklib-0c96b64d20952d73b25ab1b161acf7dd.png"},{"revision":"fc022b36bf8916397309e29e1dbd1266","url":"assets/images/autoimport-5c7b626c84e8075cbe09412447c1e042.gif"},{"revision":"0ecffd6882d1eaeebd8b6464d3da0994","url":"assets/images/axios-methods-a05e467ccdecba971faa69362f9764ad.png"},{"revision":"b456687747fef54904322adfab2e5c28","url":"assets/images/bad-assignment-44908c5978fb9d5dbe775229cb0b8322.png"},{"revision":"bff17a6493863a31b4c95abc82186595","url":"assets/images/bitwise-operators-2-ee0e20b9cf6c338f7f7d5506b24dcc86.png"},{"revision":"06ea5e280db4065456d59825b66fb4a7","url":"assets/images/bitwise-operators-4fcf677ed99bd9f1a92da688c19c54a9.png"},{"revision":"59eebf9ba52f28acef2cdae21b6a4ab7","url":"assets/images/bitwise-operators-positive-number-a954ba025589841f6e3ed489fc77c2c2.png"},{"revision":"27ff16cd3925dea68639980455fa5623","url":"assets/images/bitwise-positive-negative-convert-35db0ca6f1a82a84acf528cff5a42892.png"},{"revision":"34c535f207ad3444b73c0301e5459a0b","url":"assets/images/bitwise-show-2f6bcc542c2a1843cd78dd8172b2f7c7.png"},{"revision":"c1219126ba2069e0fefa357408ff2547","url":"assets/images/body-contentEditable-0af8e4076d42cc0b29844fc2020b815e.gif"},{"revision":"7171b722c904d39ab714696ebbfbde38","url":"assets/images/body-offsetParent-683dd022fd8daa873fb36ee300ccf789.png"},{"revision":"31cecfd757a49852fb8ab8df94690c22","url":"assets/images/bracket-pair-colorizer-b21fc07c6c143a16556212ca4f783f03.png"},{"revision":"77dd40417b48679bce308950554f8d71","url":"assets/images/browser-a-frame-5a8f2ec87d6f83e02c1504bbda44b55b.png"},{"revision":"7262e79b7b8abff2d193ec7e00c166e9","url":"assets/images/browser-certificate-16ceb3a24989af471765265ec8cac88e.png"},{"revision":"7c37302d548832b5423a69466410a399","url":"assets/images/browser-first-page-f898ed2a2ff3f0bfb4137c228e2a9f2a.png"},{"revision":"676743515e5aede9e97564aed8bebc3e","url":"assets/images/build-chunk-a27c6c28d38f10531ef155dfaa1edcf9.png"},{"revision":"1c202590dccde8ed0340ef0af6bc791e","url":"assets/images/call-stack-00e456877d8b641f895ab57e3da7f6cc.gif"},{"revision":"a00ec8969dca7cb8ad995c55a04a7e01","url":"assets/images/can-i-use-placeholder-e5f922b79404ff358f4251e51cd59d9a.png"},{"revision":"ad11e1fe3ef692066b0f6ac14ed0349e","url":"assets/images/caniuse-pattern-960ddc28d7e788333b0aa91bd7b63739.png"},{"revision":"5d31db45a4a6549db05cd9dbe0fc8e21","url":"assets/images/carbon-e4de34197951ed9b406d304e9bfaace0.png"},{"revision":"bc3037d0cda72a3df6a19432606efeaf","url":"assets/images/cd-nginx-c11a17c58f8226bc88f52444df599fe8.png"},{"revision":"284f4bb4465ae8f9a92b409c80b316b4","url":"assets/images/change-product-key-ab950e09e3856c1f2522b543bc3d8d27.png"},{"revision":"7f57998c493906db0894a17c64ba06bc","url":"assets/images/change-tab-b5ab153193cd42acfbec92205cf7790b.gif"},{"revision":"234fba69e5cbdb036f6e5f561d419f40","url":"assets/images/charles-proxy-ca-91ff997beec429fe41253b25c7e57212.png"},{"revision":"67063afc88c767c2d90411d2d73caecf","url":"assets/images/chrome-capture-d437d323c5fe8913e5dee63d32e2a513.png"},{"revision":"287e301c2f0d3a3ee38fc89a7ed4c464","url":"assets/images/chrome-set-user-agent-8043e29267b06245a8d044192c93db11.png"},{"revision":"140f99d856589f866e81d106f5fb3852","url":"assets/images/chrome-user-agent-setting-de94af2610498847cbce2dbc9ee3f5c3.png"},{"revision":"25732455ec810abf105948a13e11feca","url":"assets/images/cleanmymac-faf767e7ccf33985002e1780a61d3f86.png"},{"revision":"a30f70f53305592234f3b90c7b04ac47","url":"assets/images/client-position-1d2d1314b66500cd93973ec7894c7eca.png"},{"revision":"26f4591f7f906d2cf332fd3f36b2a3ea","url":"assets/images/code-name-style-2b431119d1c73cdf1aad04e5727bf9a0.png"},{"revision":"ded807cc35167a66dd074db6c96badba","url":"assets/images/code-spell-checker-46c38d9b3f9334f2229e791dbf1c2983.gif"},{"revision":"9dc1504cdb13feb0551dc7b836975132","url":"assets/images/code-spell-checker-suggest-4d78226f92342ea2c149628f4b74e2d6.gif"},{"revision":"3bfe4876dc036f16cf3ba1e7331dc3ff","url":"assets/images/codepen-a935988d3be611d50c72bfcd55286948.png"},{"revision":"28bd22c660be751c409b5b0acb2dbf10","url":"assets/images/codesanbox-82c0476c048ab33ebff8433a88e5d82b.png"},{"revision":"02bebdc7c683eb75f674e8ba4d0d84a7","url":"assets/images/command-not-found-3dac0d674b704b842b88980c4f03bfb9.png"},{"revision":"f719998304bb67bff6fa476d92174529","url":"assets/images/conditional-operator-c476179573394c9356a0c23beba58338.png"},{"revision":"66395638c84c5cd0221c3a923a4e764b","url":"assets/images/console-copy-ed1223692f0445fe7ceb346d154af051.gif"},{"revision":"a3775ef9afb2cd4a107273f8e657d81a","url":"assets/images/console-count-2d8daa4bb5ebfabeb540c6717d42d08e.png"},{"revision":"3913a226af72cd7db23cba5fdb94326f","url":"assets/images/console-debug-77cf49cc526a204d40a1f4615b89e765.gif"},{"revision":"bf64b966ac634c5b745585011af2ed0c","url":"assets/images/console-function-9758bb47758de6ee2dab4e5b3507a327.png"},{"revision":"231d78e6a47f2aa2922837592aae7654","url":"assets/images/console-getEventListeners-30046891b73da99effe07744f54d7922.gif"},{"revision":"e09dc460e1cfc67a8687d8bef7e28894","url":"assets/images/console-keys-fe181d8a51272381a564a7965879b9b0.png"},{"revision":"e4eb29dbe809d7390e165d53e95d39a5","url":"assets/images/console-monitor-2defb1bfa543e91a6c6c09f1e9d32f24.png"},{"revision":"bf45d2146b64561c46c5c71a708c53ff","url":"assets/images/console-problem-broswer-186f0f277bafeefef28ca098946554df.png"},{"revision":"d96a6167ef8146f24cde6b7c6c16552d","url":"assets/images/console-problem-broswer-stringify-038cd4b97ce4e075d816c1e5a036063b.png"},{"revision":"996b2926b88a82efc664f2cfa73d9e70","url":"assets/images/console-problem-node-stringify-7f8c74808991e6bd6815865c8235b160.png"},{"revision":"ce83b22a48e80d30e7676510ea1c731f","url":"assets/images/console-time-02cd9a14173c6a9fdcc70bc04f705771.png"},{"revision":"ca81187c1f122e6bee26c8d2c374dd0e","url":"assets/images/console-window-70ddd164baf22b6df62c61b5b038de98.png"},{"revision":"be858fe68a959f3b16966ba0ba29a737","url":"assets/images/console.assert-a062da2ff4b7788b28096246a9cccac7.png"},{"revision":"713bf6baf5a5f0c2828c370541d36bd9","url":"assets/images/console.count-f86e68a7b742e7a1192daa0229d59fef.png"},{"revision":"6c987bc2c59724d058718410f4e1281b","url":"assets/images/console.count-lable-298dd1e7a320e3fa3161683c0496fd74.png"},{"revision":"6466f047ceee1037a98330da8a3083ca","url":"assets/images/console.table-2dacabff01824ad723f425827755d3ee.png"},{"revision":"89e06c92423c1668be5d259b78bb35af","url":"assets/images/console.table.obj-baf2d5eaad4dee4da159315226f7f711.png"},{"revision":"50ea40d38ce04e2f890f4719da2c1c27","url":"assets/images/console.trace-7f98b4a3cdc589abb916e3b8cf665c22.png"},{"revision":"39ff65b1b43be7732a71f4fc83909783","url":"assets/images/console.trace-cc94aa782bbdb6fce301cf80d713a5d5.png"},{"revision":"5080f83bc7baa1c4a2aa73088b356269","url":"assets/images/const-variable-lifecycle-00b94b0a4fd9579b6dc67e11b2329127.png"},{"revision":"0f753bffe85a073b7b62fef16c0e9d37","url":"assets/images/const-variable-test-d904e68f24180cfaecfcf011c7324dc2.png"},{"revision":"8612981e1f2e1bb9094fd4e3e4ef5742","url":"assets/images/create+mounte-da9c45815adfc074da02014cc4ba226b.png"},{"revision":"409226a0f5dfbddced38ff2941e437a3","url":"assets/images/created-axios-37b237e23fbef89a6097840774f7ac4a.png"},{"revision":"d37c9c44294d6911dde2fe450ed47a9a","url":"assets/images/CrystalDiskInfo-2ed7662b63689d7e90f7323d28450acf.jpg"},{"revision":"b708ae189d6ae178a7586fabddbaef6c","url":"assets/images/CrystalDiskMark-4b1da5e696257359c994d7526b03f2bc.png"},{"revision":"247271ae745aaffee6497624e335b7b9","url":"assets/images/css-peek-c49e78ffda8d97840801a0cd100e63ed.gif"},{"revision":"7ac00e25e57c2b112816251aef1bf074","url":"assets/images/css-size-e3c2e27c6f364f1f376b2617a7d213f6.png"},{"revision":"ad8dab7e490eece7041c8e27f5c33b14","url":"assets/images/cui-git-init-d321922c1d83e79906d986d915090477.png"},{"revision":"dda9af99d81ee0d995f4beb006d05b16","url":"assets/images/cui-npm-init-55f1147b85c4dbe3746741324b446dbd.png"},{"revision":"1b4a832d3f1600d93c9ef2d490397600","url":"assets/images/cursor-op-46ff743191056b5d462707c8217bb268.gif"},{"revision":"9c1c716e99990fba898a79f86c0b5a0a","url":"assets/images/default-terminal-3b7494d6ef04a3a7192994383785797c.png"},{"revision":"ab46c20a437132f58cb14c5421fc54a3","url":"assets/images/delete-word-63f05960163816a3190e1bdf730d1ddf.gif"},{"revision":"237ede6fef48013cf06d47927fab1140","url":"assets/images/devtool-sources-c9df53a355dcc2d00ab5fbac390f2936.png"},{"revision":"5d93a030fb9e4515ace6011f524b300b","url":"assets/images/devtool-storage-a5286b919147d3999449c9d3f6ceb0ca.png"},{"revision":"9fae7134b47042b0b0e861146c1f9b1f","url":"assets/images/devtools-sources-efe7c20e9eb61ac055f7ee4c15abf683.png"},{"revision":"c83b7465963a766923c22d6007b9a50b","url":"assets/images/displacement-operator-bd25c120f0ed408f73a35ac5424f3eb9.png"},{"revision":"7886d806609cb703a0322d08606153aa","url":"assets/images/display-none-dom-be5978925d4411c1936f162add3ecf56.png"},{"revision":"47d0bf8664cb6aa65fc5d2ce91bd6a04","url":"assets/images/display-none-offsetParent-cea372c693c67377a9cfd13c7b453a35.png"},{"revision":"ff5bdc0ac7c51a04cd5deb9ae3cc92a7","url":"assets/images/docker-cp-8ae4d659f54c2cdb7b7d1b28c30796ab.png"},{"revision":"b4978ebd24d0167f425e582083ffb246","url":"assets/images/docker-cp-res-c9cf7a1e1dedb24ba4fb915f4a52bcd7.png"},{"revision":"bdc6b87be4a3a7348be47e34d69e0b0a","url":"assets/images/docker-event-state-0ecb35b10f47831cb26b991ae62b1035.png"},{"revision":"c7a1588e94af6d5bc5cb3daf947d4daa","url":"assets/images/docker-hub-push-8f70eb0765c048749e7784d6acada680.png"},{"revision":"4a4e660eccba82a32a913255285108f5","url":"assets/images/docker-images-c39e8d7463c7c5a551efa81455da8ef5.png"},{"revision":"65e23fad2a138896fbc0cef79bd03c3f","url":"assets/images/docker-search-6173200a6cc99751c795882d6f5e06d7.png"},{"revision":"6bacc3c53d068ada0aaa7cc1378c30cf","url":"assets/images/dom-break-on-5beb6676f5e39c711c0f25c64702e275.png"},{"revision":"e558f94217396deeaab8427bf2daf556","url":"assets/images/dom-debug-node-removal-61ede875bff75d4d528ea3db429f7e02.gif"},{"revision":"d9c2b39f7d3f62da3aaa15e74838f663","url":"assets/images/dom-debug-subtree-modifications-f5fa6df18fda5a29091efe375f81f9cf.gif"},{"revision":"73d6982704a28e5563c1e1a25372681b","url":"assets/images/dom-event-c5f3f7ee3433c83f0e555c70260abf73.png"},{"revision":"4aaddb68341b7b1a0a8027d60c90fbb1","url":"assets/images/dom-offset-d9db7b18faccaddca4b3d70f33b9e534.png"},{"revision":"1bb096ee621373f8206d89e7b72ae719","url":"assets/images/dom-size-position-33fc46e0aa8c0571984f50c3e8ecaa47.png"},{"revision":"0a5b117fb2cc1abb8989b2b9cbdf4a29","url":"assets/images/drawio-094ab80d7dbbd2e5131ff55e2b29b739.png"},{"revision":"a62a9e684a9f9eca8b01f60f03576fdf","url":"assets/images/echo-542360b1f94eb03d1c520c6598050201.png"},{"revision":"dc7108ef02a21bb229eced9f4771997b","url":"assets/images/edit-node-yml-131a69517c093bb5c1146bbaec34c101.png"},{"revision":"98472a13b3b26295c43017bacf0f8cc1","url":"assets/images/enabled-git-actions-bate-f92c0bf958987df165e699b402f62ae8.png"},{"revision":"12fec4e2bd3d3cfb67d12e611943eb5f","url":"assets/images/eslint-init-80ef0c0d8102e7ba905c70111a014b4d.png"},{"revision":"e9cf2849da65606eb4c8e19f0c7d0e21","url":"assets/images/events-use-2819be4ed0601639c1626fa485170893.png"},{"revision":"6cedf0b7b3c7da3ecc990962f70163a3","url":"assets/images/everything-search-window-fca0408526a486936f74be45bd373b69.png"},{"revision":"c8210590292475cd6866e511836b9992","url":"assets/images/execution-context-lifecycle-543da4b02a80464980f77fbd929f7d8a.png"},{"revision":"8fdf675a93110516d5922cdd38e3e8ca","url":"assets/images/extends-1-08646a5939f5cf910d392ea09f67d719.png"},{"revision":"93e2d888db7bcd53448124b91bbdcc2e","url":"assets/images/extends-2-07a0370dc8383020d1e89a36344fbae5.jpg"},{"revision":"df106b19f3c1e6bd0cf9e98d1253fc06","url":"assets/images/extends-3-b515e93f12e80d7d9a01ed7dac6abe10.png"},{"revision":"79b425b9957f7c02dded10ff89d0b6e7","url":"assets/images/extends-4-1-732af648e57833d4c45541e2bf04ef61.jpg"},{"revision":"2295ba112f361b7440760289c35030a3","url":"assets/images/extends-4-2-4396754d258e3dbab10e6f50d1165281.png"},{"revision":"307f75c7ccfacf6d10371537ebf08901","url":"assets/images/extends-5-fe6fb726692c06f95da6fa5f70c9ba3f.jpg"},{"revision":"8bd541f1fde2bb1f93816f2325bef20c","url":"assets/images/extensions-1537da14d65b9b743887bb22a99ace5e.png"},{"revision":"07fcec41ede14e308963a4a06ed2544d","url":"assets/images/fastcopy-52399d1d30fa2de41eeb51d3f68930ea.png"},{"revision":"35dd164baf914ccbf35c05fbb0ddeb77","url":"assets/images/fbi-wraning-87afc3e912134e4bba27b32f7587c5b6.png"},{"revision":"5cd30fd2d72b190fb29e55d77220831b","url":"assets/images/file-tree-4a7d0fe41de9f4e40c29780def9bd076.png"},{"revision":"4041f3b498f63da259e455b06df90dc4","url":"assets/images/fileheader-49d24b856a136e7f6bce2253b096f50b.gif"},{"revision":"f2757c4c3d8bcc2cb17ac7c1c8c21572","url":"assets/images/find-ip-e8659013918a98e097e2d4d2d49a17f5.png"},{"revision":"02ed253a10d96fb20f326eefb80a2936","url":"assets/images/firacode-font-e84b3742b671c29af1ecd3ea773bfa6a.svg"},{"revision":"c2e1e48a962385b4b68b8be9b04bb090","url":"assets/images/firefox-send-1e4cab8c3d905f0e97696009427503ad.png"},{"revision":"e6c427d677582f2aa3cb26e177155138","url":"assets/images/first-load-7eddb04767c60d774f945a61b1f1b12d.png"},{"revision":"f7a11b83c942476a6fdd47aaa859c639","url":"assets/images/fix-position-dom-fb41ba1f9a3cccf09457d7a9e2f751ab.png"},{"revision":"3cc6ec687a9539becf16827abac5c72f","url":"assets/images/forward-backward-499e859376c066a699b0c28720b3a4d2.gif"},{"revision":"ca0eb5a6c29baddae8a7ef58df87b7a6","url":"assets/images/function-declarations-lifecycle-a06b573c6d7d46db357144ff44479d4c.png"},{"revision":"579d4b3be835023440873afa22a33b55","url":"assets/images/getBoundingClientRect-trbl-115746273b5051d4a372e75d49ccccb4.png"},{"revision":"0d02edacd1ff4870e089d85bfe55eb12","url":"assets/images/git_commands-05fa6f34efa7f30f460c21463e9e4823.png"},{"revision":"3bc9d5f2c49a713c776e69676d7d56c5","url":"assets/images/git_infos_repo-cb4f2c30413803155b31edc98c3db926.png"},{"revision":"899c68235dcec0526207a227b9db72a7","url":"assets/images/git_infos-56bfe0f91bf7aa65c3c1d3e177e46928.jpg"},{"revision":"96e9a36315bacb3d16e81ea2f66299a9","url":"assets/images/git_operations-39196d8c5e07b54fa013f23a5f356643.png"},{"revision":"01b39b35584c7511c8f0f33bea5d3ebf","url":"assets/images/git-7514b17db9bbac81f836e7e67b4eaf68.png"},{"revision":"e4baef7937512c4f9da337b13423a551","url":"assets/images/git-actions-6d6b1bf75d8c0a70cc923ad723816fc6.png"},{"revision":"57c86fd84d02ba0a82b966e455547376","url":"assets/images/git-branch-opinion-branch-deploy-3c38d3e8aad83f98477b68493e2f83bd.png"},{"revision":"40787c5ad336d45d4a42448c7ec21607","url":"assets/images/git-branch-opinion-branch-setting-0c6b227e0205dbfb8cf7dc6d0e5879b9.png"},{"revision":"e97dcdeb5c43e14cba59ab150fac2668","url":"assets/images/git-cat-file-dfa7196e0cad4c55c1f294eb99b9e8e6.png"},{"revision":"1a315d6533d9e7334feb4a19658ef67d","url":"assets/images/git-cat-file-p-39ae90577fbfc10a9cb62a51710ace37.png"},{"revision":"838bd0eae0ffdaf8fb1572c1f527600d","url":"assets/images/git-cat-file-t-5256f50dd0ceafdc8595a0f43300fb42.png"},{"revision":"1dfb9e3b5cdcf0ea4fcef80e63a51225","url":"assets/images/git-cherry-pick-52ca0586c167a4406b5a99db7146fe4b.gif"},{"revision":"04d7192328d9a42bfafe71e622d4bb29","url":"assets/images/git-commit-merge-9779512e4a329c485b31f600b0c47afa.png"},{"revision":"4db26f81d6518378120402c1b4541ca8","url":"assets/images/git-dev-branch-79ac4526cc43d783f9f9e39874cece0d.png"},{"revision":"f9faaf37c3f8b1c705ddf1e4e327aca1","url":"assets/images/git-fetch-upstream-163b7fbb48cb43324f23075f3dd7e625.png"},{"revision":"a92cf37f4e9ffe665e882ab4ee3a64e9","url":"assets/images/git-fork-tips-5ac84750bada0ed654533007703ffab4.png"},{"revision":"3798c62bb2ffd0240a3fa8b6080e4955","url":"assets/images/git-graph-a09ca93e9d0e2b793e0439a4df2607d9.gif"},{"revision":"2909630f7e59e3b2acb4b4d01f4fcd1c","url":"assets/images/git-hash-object-93e04e9ee46bcfb2da49522cca07333f.png"},{"revision":"4871486f83ca170978059687d9b42251","url":"assets/images/git-HEAD-9c56b57d1dd145fb6684fb97064b96c0.png"},{"revision":"d049cd43f3918a1c60da770012009893","url":"assets/images/git-HEAD-sourcetree-68c59006e8a7cf150f35e9604aa40f9f.png"},{"revision":"b3fbf1aee49ec24365d440d495dc5ee6","url":"assets/images/git-hooks-640ee87012076789901a0fb5d882eff7.png"},{"revision":"0fc527cbddebdeca36cb9146f1ad1b15","url":"assets/images/git-log-b73f06657e0463fe04da50de4f2848f1.png"},{"revision":"f3ecc3cf5b3902dbb1ff2356fe65e67e","url":"assets/images/git-model-7c44416894d064af9c20c3bc56c643e5.png"},{"revision":"253f4858be0c8b1619149bb859735fcf","url":"assets/images/git-pr-fetch-origin-71b6d5e1f55860c5e593d0be6a0f1a65.png"},{"revision":"e1525811e9171603650b481eb0b6f96e","url":"assets/images/git-pr-github-7e93e164f1836083e9de26a803446e38.png"},{"revision":"5ed9c53e53c550e2babac3e617431c79","url":"assets/images/git-push-error-a2eba18a5b6a16cb9f2415bbc76e0289.png"},{"revision":"274c8c2d228e8faf7e44efd3c4dc9449","url":"assets/images/git-refs-099ed2df1965420831eb9f6fe750c6a8.png"},{"revision":"af01c09de13ac28d5034be675351b6e3","url":"assets/images/git-refs-heads-4adc70fe264f1d98fbe6203468faf5c6.png"},{"revision":"2af6e012b4b082860e9ecd53de60b6fc","url":"assets/images/git-refs-remotes-60550eb7d4b498c6c299ee50464a513e.png"},{"revision":"d99bb1f00c88cf98fc1d37fec8813277","url":"assets/images/git-refs-tags-e3300b88966393a50a0636374c649687.png"},{"revision":"2b1d320692df1319a7268b5d193538b6","url":"assets/images/git-tag-add-72f2951200679536ff7b4e0db8466c63.png"},{"revision":"97a3981d0f9666051eac71a2109a96a2","url":"assets/images/github-actions-2cd69780ec250d9837f0f9d98db5852e.jpg"},{"revision":"3287c8a7f5df9fb5e743858c98da5110","url":"assets/images/github-new-same-name-repo-8226b7e3ce1acfb957074682df3cf4ff.png"},{"revision":"2ad3ca5fba3d52a2c24db35453df7266","url":"assets/images/good-coder-lei-83bed55011d6f4fbd2f1e8b4032ac397.png"},{"revision":"eb81d83baa4bc5fcfaf34eaac957b4af","url":"assets/images/group-end-collapsed-6b4a5a0a3fc3e6a6886a92aa2ca7b890.png"},{"revision":"095cab56efbcfcd494d30f6c69773a6d","url":"assets/images/happypack-workflow-dbd7371dcc162ec20cb20aef9ccc814c.png"},{"revision":"a20e93484d29bdd46a6eeefdbc8a18f1","url":"assets/images/HEAD-diff-b984a29fbdf65831ee3e6cf3883b11ff.png"},{"revision":"c18ca433876d39daf92ba2f9e05e55c3","url":"assets/images/highlight-matching-tag-abb7abbf9adf29ee27acc737c4c05721.gif"},{"revision":"b387780a94bf4991f07a379d4b893500","url":"assets/images/highlight-matching-tag-e8be580a14d615f349302b0d92b88550.png"},{"revision":"d89574d8e6969c111ef6c39c48dae310","url":"assets/images/html-render-0c088d1ea099c48d77187812aadf8d8c.png"},{"revision":"6f93fd7a9123ea45da12df8ea25f71ec","url":"assets/images/https-request-658e20f8aa58a8b88fa1c6f5712aec36.png"},{"revision":"09151877184a797961778539000b1a73","url":"assets/images/id_rsa.pub-6260b9c4ffe688cdebb0cb368b5f215e.png"},{"revision":"db40158754691df23a36f1dd99b5b092","url":"assets/images/idata-cb9708b805739ca9cbbd2f04db7c35e5.png"},{"revision":"e4a3538d117c3a59461e88e86f404546","url":"assets/images/ide-debug-d2281b344aefe3a4796306e4b9ae374c.png"},{"revision":"07898de070ce3da686f62817e929c6e0","url":"assets/images/Ilovepdf-380fe5896dc566d95958ce1b1c0073e5.png"},{"revision":"c541f0868391f3e69a2546470098f8ab","url":"assets/images/image-preview-fc2e853e6d4f01699241ed2e00e703f4.png"},{"revision":"f5038e5e0259c4bc7d7060710b7b900a","url":"assets/images/indent-rainbow-3cc45ef15d4b5ecc40fc659fde24c2f4.png"},{"revision":"3c83da2a19d49a3290974f47f6cbf3bc","url":"assets/images/insert-top-or-bottom-f3c934114d90a6588f33446d8661167a.gif"},{"revision":"1005c950dcf132ac0b902f29787a434a","url":"assets/images/install-fonts-e761849a77e3923024c79ad154708125.png"},{"revision":"fa5c1d06fc820547c978b0a4d22573b0","url":"assets/images/install-mobile-certificate-744cdb1aa30d7f2fdaffa8e2ffee0651.png"},{"revision":"22c07bffd78744030fdc9d9abe568167","url":"assets/images/install-pc-certificate-d84a5e986a3bb5a3a4f5e21956fb0b8e.png"},{"revision":"5698d8e27ef491cceda898e45bd6c899","url":"assets/images/instanceof-5c7e0b902d29db790e12b34f2610990e.jpg"},{"revision":"3f966626c87afc0d1d5cce5b5316b9d0","url":"assets/images/jest-ae98ea5b2b9a547f20b92e20cda79d63.gif"},{"revision":"db989f6a07382279ae03615c1b1bbabd","url":"assets/images/jest-init-6c899dbf44a32e4bed3d1cefb03edad8.png"},{"revision":"8b7e7dd263549e6fac26bc3dda3f3747","url":"assets/images/jpeg-io-402149cd533ddfaaefdd830b83331fae.png"},{"revision":"8b36d3f22912921c3ec5dc9b75a58360","url":"assets/images/jsrun-ba58202d361981a0d312bd574872a8a6.png"},{"revision":"299ec70d075d7e7c4dbee336ec5ed25d","url":"assets/images/jump-match-brackets-4f63d61edd7f9fd932c0e54fc4ab50d5.gif"},{"revision":"90c2380dc1a90a0c40f6739da1c71e5a","url":"assets/images/karabiner-elements-aa889acb3ba3f88209adeaff5ded9bcf.png"},{"revision":"bd45f19577a36337270c5b6cf38f854f","url":"assets/images/karabiner-elements-f19-config-a3facd738c560ee102577340e5fe3693.png"},{"revision":"6b265d9dd36f035ddcb25d80a507bbf2","url":"assets/images/keta-48464b9f040acf2aa9b2d9bdc667c385.png"},{"revision":"87821027e7359b1f86baa678396d4a39","url":"assets/images/keycastr-04e248ba0b4debf64d1f013660591b93.png"},{"revision":"2da0d8e212e8810630d8bffeb1fea76a","url":"assets/images/keys-options-config-47793054cd1c795c4086655cb57dfe7c.png"},{"revision":"634a22bc79dc46ba1e47b18499b2c367","url":"assets/images/kill-l-3ea962d27f856a43622841b84dc777dc.png"},{"revision":"5c71f9f8c5f2a247ff6c213c7dac6361","url":"assets/images/label-annotation-cfe474454d2ddffa5fd26a660f9a4ba7.png"},{"revision":"7ac7962d523327a81576d9f62e6945ea","url":"assets/images/layout-paint-560aed612f195efd357500aa2c5690bc.png"},{"revision":"7ea507b35120b2d5dabd391b75ad3507","url":"assets/images/lei-code-0938ddd3af3045f537b4f26cf5690f9b.jpg"},{"revision":"68d5ef91bfb5c3d127abd090b0c8ca84","url":"assets/images/lerna-bootstrap-60dcadf0444e7de90329623acf93ab8f.png"},{"revision":"14500f254909e6847987686b6d364f47","url":"assets/images/lerna-create-98aca8d04b36f79c243a300372619b63.png"},{"revision":"7d20ae1b9116b66e14db2335cfde7f15","url":"assets/images/lerna-create-pkg-747bdcf0f0c7d567ebe9430af38ed0c7.png"},{"revision":"30f7bdfeb6abc20033a92fff12f913f9","url":"assets/images/lerna-init-i-df4ec790f7b68a20590c435dfe920baa.png"},{"revision":"e03ed1a502f840b4f5d14f5806747beb","url":"assets/images/let-variable-lifecycle-312accd76fe9310e1b1672398476b724.png"},{"revision":"e87b92aaa165eade2513b9571bd49011","url":"assets/images/listary-search-49f8da9ddfa3c21a813a3df75b9aec5e.png"},{"revision":"84d8da03241c71e0eca83ee25e7fe79c","url":"assets/images/loader-to-source-010501f2f8613dc13486688e3a6057b9.png"},{"revision":"626a24b5326de2d6ab39ea7670ea0601","url":"assets/images/log-broswer-ea0b26fdbd50937ecacf1fb7ab9d7d6c.png"},{"revision":"7d3741c693c7316ae73361a60f5fcaea","url":"assets/images/log-info-warn-error-debug-a154f653716104eb01d16a1beda0d5ad.png"},{"revision":"726d5a9635befebc3fc61b65ab7158a9","url":"assets/images/log-node-193821cc4081a13e2b767a9393854f40.png"},{"revision":"b0d88f27f8ff234fdc4605dbc922cfcf","url":"assets/images/logical-operators-c97b3d83dddeb5a6ade944f6cbb49678.png"},{"revision":"f77e57bdaffcc808e9bcadc61d972db8","url":"assets/images/mac-software-broken-56bb6c8d238f920337db10e4bf182089.png"},{"revision":"3a23ae504cf6347bfb00f2875eabb252","url":"assets/images/Map-value-acec2b8b47db0704607c71e72a3354b4.png"},{"revision":"a8b857c1f01766f2dc2d084ab3d76640","url":"assets/images/match-d5afb0dfc8c5d562abfd85f0ce0f406d.png"},{"revision":"139b394729ee14c46c54dd03a5d9b7ba","url":"assets/images/mindmeister-4d80078fd9466a84fcef2fc0051fd7da.png"},{"revision":"5890c33f8becf4d390429c35a6cc5ceb","url":"assets/images/module-chunk-bundle-6a43adbc4aac5b557e5e0ec5d56b36ee.png"},{"revision":"73384cce1e2d23a68745813be35c619e","url":"assets/images/module-component-77316ff0562c314b21a59edc7f0e9fba.png"},{"revision":"61453c0cf91bf27b54cdf270b938d520","url":"assets/images/mono-vs-mutil-df6236ac05f42e52123fd688ce9185fe.jpg"},{"revision":"4f16fd131e7cfecb54da44cbe7d08b9a","url":"assets/images/multiple-line-op-ca8f97a1e3c2802617424ce52b7f315b.gif"},{"revision":"a61dd7b3e7716454e07f183d33c7d4e2","url":"assets/images/mutil-line-select-a31ae42048e74ce2d29a965067d36a0d.gif"},{"revision":"f6c97b76d388a5d1278a6578b8b07906","url":"assets/images/new-repository-c095afbb9909a807a7d1819ab21328da.png"},{"revision":"afb5aa1018262843b8301b60f9d43d92","url":"assets/images/nginx-conf-70a8cafb9f0e61d85e600cb04ae9c2e2.png"},{"revision":"1b0effb9677c6e02d0984c184a717c9b","url":"assets/images/nginx-config-9f93bef261e489722949318a5465d174.png"},{"revision":"5f1a71b2e52f21025da9efb86ba8de1b","url":"assets/images/nginx-glossary-99aaa092ddad9ceeb9741d8a1eeed13c.png"},{"revision":"25338400eecabb71121042dcb9ca8ff5","url":"assets/images/nginx-reload-a978f092ae3116a1595e6a4df08201c8.png"},{"revision":"15deea6aecb3b32839cfce2b00a715aa","url":"assets/images/no-fonts-08739f2756872a12175d33bfeb777fe3.png"},{"revision":"87bb56ca01fa3ad9c3b753a3d2229fff","url":"assets/images/node-nohup-12f0de366c4a0d9164c33ac7eeb53016.png"},{"revision":"acab842683b3c89c0de719920c85ea1f","url":"assets/images/nodejs_yml-148590bca84c4369d2569771f03bbb87.png"},{"revision":"d92b01f092f740ef2e4567d5af0cd367","url":"assets/images/nohup-out-06a505c0b6265751267ef0bbbb2f8bb4.png"},{"revision":"51214c2c6cf35e8f4f04d462790f9dba","url":"assets/images/notion-27ac46fa6241ca48c4dfa005d46e5b8a.png"},{"revision":"e388ba210c84af55c91f8c11d7fb87ec","url":"assets/images/notion-e2ef4b25d0789deba3c6adcc925755b7.png"},{"revision":"ecfe2356ae55c5de759e895e798b4b01","url":"assets/images/npm-intellisense-2b68f1a9550b75be726ecd037826371e.gif"},{"revision":"a6d58dd4928653d3b11e015e1c398d54","url":"assets/images/npm-link-06528a1e790c3a002f709c4d56c11ec3.png"},{"revision":"ea5e7b35404d9bfee16310ee6f4837b1","url":"assets/images/npm-login-36e2e1d6e127add08d6352fd8045225f.png"},{"revision":"7b169e36f7071bb60e27c41020bdbe9b","url":"assets/images/npm-package.json-550ceb6f834fd85cb5feefa2a12ea248.png"},{"revision":"108216db186894a68e8687d453348d1b","url":"assets/images/npm-publish-29b3390ddecbf3ef74ecb7068a523a50.png"},{"revision":"2dc589271b460e41fce0b1353b4c9541","url":"assets/images/npx-581d2eb79069506d6563baffdc3e3c32.gif"},{"revision":"0deef5b9989c21c60dbede3c098da208","url":"assets/images/npx-cache-path-049b44545dc70d35027a8cb83669a7b9.png"},{"revision":"02cc31b29d5f8eec2595a62785ca4f71","url":"assets/images/oalib-cdf959f9d0b51834ad0b7d338e2289fc.png"},{"revision":"b137775a54c3cd3a8e4c08ccb676cc5f","url":"assets/images/objArray-703ae4d2713ee6d6029943226a57aa18.png"},{"revision":"61337b61ac0515cce462c31ec7324064","url":"assets/images/office-box-dad819fe949bd75b1ebc02d187542b33.png"},{"revision":"c11a5d9a3b3d5e6d7fdf486136871488","url":"assets/images/office-box-products-2f8505760996e87b9d5535a2f14f706a.png"},{"revision":"0afc6973f2c097eab0e59295ecd3c4dc","url":"assets/images/options-jump-804294e637b30752418f233204a9a0e8.gif"},{"revision":"ada5b2ca9f18a9e5676fff8fd50e9dec","url":"assets/images/package-name-find-99d286af790178737fcac2a890b944dd.png"},{"revision":"ff33314d7f315a557ca537273bab3fa5","url":"assets/images/parent-none-position-dom-b91c7981189602c8f9add497d6232dc9.png"},{"revision":"ee2b1213743fd437657037690b1949c9","url":"assets/images/parent-none-position-offsetParent-946928e608d647c7876d560f91b592ae.png"},{"revision":"9acb2a34e491790d7386cc69101c870e","url":"assets/images/parent-position-dom-d1ecbee683fee349395316fc54066891.png"},{"revision":"f53b0498e92240b03dc6f44a6da75c35","url":"assets/images/parent-position-offsetParent-a2c7c907cf4f8db62e84eae4c8d3db6e.png"},{"revision":"5f8022fa553604defc51b552b70611c7","url":"assets/images/paste-json-as-code-51ef1ff9a4769af3fa5babf3f41a04cf.gif"},{"revision":"d2ec4cf61439c6b585566e5bbb3797d1","url":"assets/images/paste-json-as-code2-2d5469573cefc6ba787da46031fc3f33.gif"},{"revision":"c0cc2dd169a6b1457a15a0e00a361d1a","url":"assets/images/pexels-27f6b9fc65005149405ce6ae567011fe.png"},{"revision":"10b3b79ff0751c283292bfa6a85a6571","url":"assets/images/plugin-run-09803cb63bb093d0187298ade7b6deeb.png"},{"revision":"def99349f8ff7a52b7c79f540e5ed97d","url":"assets/images/prototype-chain-5f0009495a458ab0365493b16c47956c.jpg"},{"revision":"4160356c306802842ec0921bc2c88e34","url":"assets/images/prototype-chain-all-46bed03fd0e11fe004c6fb7da68b8616.jpg"},{"revision":"a35a4c4380733a8d8c02be8428cb0238","url":"assets/images/proxy-setting-252eb8bdbe1a602e384ea5abccccfafb.png"},{"revision":"62ce5a5ba357928e2f9becb070862375","url":"assets/images/proxy-setting-port-82f5b6bda84ab0e1ff890afed1f5df82.png"},{"revision":"c38da2ebd292612ffac68f6b81d55263","url":"assets/images/pstree-986a2d7bb1fc8b7368071da1d0f37039.png"},{"revision":"e0c4679c5ed5538f51ff0bd170802449","url":"assets/images/push_node_build-5082afc574ac262a6de77989ff704cdb.png"},{"revision":"8221df44ae31bbbd8b55b1f2a337af59","url":"assets/images/quicktype-e5ce9f8c24de205705679e327944c70f.gif"},{"revision":"979595d22440fdf6a2d457e6b70fdfab","url":"assets/images/react-16-events-93b2ff7a734eecbc61e47d7452857366.png"},{"revision":"0f49d585dc8d030e3333837eff468184","url":"assets/images/react-17-events-69b569a9d92476a8740f13c9448d1fac.png"},{"revision":"1cc5b65cedc70f51be0eea5b3c4c5866","url":"assets/images/react-lifecycle-4895eb2642c52fc71cfd830a4e2ba2e5.png"},{"revision":"3a20520616112a3fc23a327f8eeae4a7","url":"assets/images/recompressor-975f3a5e7ccb39a50399b447b1e42f74.png"},{"revision":"c39a032b069558f1f7faa7bf27f073c4","url":"assets/images/refactor-21cb7aedc6132d0d4ef59dd25ef579da.gif"},{"revision":"6f737f116678fa30532572affed79bc8","url":"assets/images/refactor-batch-rename-f8fe1f787424db4c072b417975919e8c.gif"},{"revision":"cd1574086865e17b22215da32a500343","url":"assets/images/reference-assignment-5f18aa1d3d69fd466ae93c931f4fbad2.png"},{"revision":"120c2646da876dabf3915b7022ed4f65","url":"assets/images/reference-copy-9d6d52356e772bd48edc4de1ba16980f.png"},{"revision":"2262dea035a515f8bf05c173f2650c64","url":"assets/images/reg-date-msdn-b2e7488b6a97ceffcb2e911e9da3b46a.png"},{"revision":"d5f34e15d042e7cec89819a57a3ee17a","url":"assets/images/reg-date-unix-b16672924df069388eccd00383645423.png"},{"revision":"1796b46fd9e1de798c2bb7f6d352021a","url":"assets/images/reg-date-ymd-09748ae97ad3c62af9c170ef2a449e48.png"},{"revision":"f051b491f24b8caf6e598ec369c5ae6e","url":"assets/images/reg-email-aae8ceb9374d8c2370be4c18e8729e26.png"},{"revision":"d11c92e0fa025dcef4d12bbc50f65885","url":"assets/images/reg-hex-a9165d95157aeaf4aad82b76adee75b2.png"},{"revision":"42fdbb0de727caef051f19ae824846e1","url":"assets/images/reg-hsl-87be6b989fafe542a8de7bd92edc3d28.png"},{"revision":"6e4e516cd15c9193ce34694ab95b4890","url":"assets/images/reg-hsla-2e26f945d3e0c6d7734f7a219a43bebd.png"},{"revision":"9bfe89256facb75c283a7116f201e42e","url":"assets/images/reg-id-card-15-18-6f3c001fea1413fadf4d4e0cd9056a32.png"},{"revision":"3b27fbc13e536cd14d971ebe32e28830","url":"assets/images/reg-id-card-15-c822e011b6dc6abfc7374233f3665372.png"},{"revision":"24a0b90233ec1e1dc0b85572e61163b9","url":"assets/images/reg-id-card-18-aa6707cd439f7e56c4e9af95efe4c2bb.png"},{"revision":"7793fa5e447d8ada959deb6b46231142","url":"assets/images/reg-phone-number-90261431e69662d03dc2664569bc0633.png"},{"revision":"9a7f54f8c56054ff482ff789cf2db424","url":"assets/images/reg-phone-number-s-3451b760c224a5cb10b3b95dc2f847a1.png"},{"revision":"420acd799c0b870fc790f5365dde21f7","url":"assets/images/reg-rgb-a44a0fc52002bfc13aff56f6f3c23bcf.png"},{"revision":"f1c61b4bce2971e8f01dbaeb6ad877aa","url":"assets/images/reg-rgb-group-24e2578b883142806fa223af23a462a3.png"},{"revision":"e91792dee181dd5c6cf5fb3fd5bd2c0b","url":"assets/images/reg-rgba-cfda0c05c96872ccbc6bec152ef83ad1.png"},{"revision":"725fdda9fb25208d6698fd97bb96c420","url":"assets/images/reg-rgba-group-c15f6b9b1382bd388dbad87ebdf63e2f.png"},{"revision":"4a28e51d4a60954a330aaa746245a981","url":"assets/images/reg-special-symbol-us-82f4d6a51eeeb55c9dfd8c7789d009b3.png"},{"revision":"285c2b2142033314cbf7c41ce5f620f4","url":"assets/images/reg-special-symbol-zh-beacaccdc384e2343ee1bc093edcb66e.png"},{"revision":"590ac9cbcef3c35dd270285a12e8797d","url":"assets/images/reg-thousands-484d17eb5c7b50d74525f9d4f405ba90.png"},{"revision":"3376a60903c86acc302468602bcbdf97","url":"assets/images/reg-time-12-6a25df28e86774ade2d5cc4cd1852d15.png"},{"revision":"e57fcdf8e0a48956e0b99fc10d521703","url":"assets/images/reg-time-24-a51fc8635a114d51ec1924ec2fa48e61.png"},{"revision":"44bdd337fe635c0b47ac76e81f62e191","url":"assets/images/remove-bg-eb586e07c8cd68869c765dd3a4fc2018.png"},{"revision":"70227f27fdb3bf18e4f69fb23ebb6ad0","url":"assets/images/replace-8dbc53fd7cfcb0a1016b22963b287f6d.png"},{"revision":"b575be387df245d3654aa5e8899c7ecc","url":"assets/images/reposition-84fd38269cb0782fae48c9459e061bf1.gif"},{"revision":"ee5cc6ad9724a5059ce193cfb3d6b469","url":"assets/images/requestIdleCallback-polyfill-705060e196dea04833ae2bdedde37d14.png"},{"revision":"f823fa861ec1d507905434749779d25f","url":"assets/images/resources-0c0fec6d03a3cdfff400b56efbf0a072.png"},{"revision":"0caad2e8cb810991c6f583966437e279","url":"assets/images/revert-last-selected-b3d8894144396e47c2f87ae5b51b7b11.gif"},{"revision":"01dc9b8618f0a656437082c1fd57e69b","url":"assets/images/rewrite-a723387730e8039f01447b933cbd6749.png"},{"revision":"0940a889bec6e33251251d0c72aab67a","url":"assets/images/rewrite-setting-07aee78be0d9292704d3abda53a85759.png"},{"revision":"b0cf847dccc4f1c30557fdb1e76e5ef1","url":"assets/images/rolan2-ea860d165e270acf2dccef74cb4dcf53.gif"},{"revision":"5698f6681ad4232599be3739b714c2d3","url":"assets/images/run_yml-73f64a58f9423d0eb2d52c97ebd5e775.png"},{"revision":"73d9185289ed701eb13fc933352babea","url":"assets/images/run_yml1-4fd3edff3f15db2326abb091bbbec1e4.png"},{"revision":"a7877223ff0af8c7723c9ebf107dc7cc","url":"assets/images/safari-develop-e042f6ad4a0af7e59f0770f4048d05d0.png"},{"revision":"49927a7fef02704143edcad746d505f3","url":"assets/images/safari-user-agent-setting-2d77d2ece093194867e25d9ad864b3e1.png"},{"revision":"1f55bceff888f8eb742cc831ff97507b","url":"assets/images/scope-test-const-f0cb6d871aaa7357fbc2da5cc3b2d228.png"},{"revision":"2f40a8b222c6dbe959c856d7a6c3c610","url":"assets/images/scope-test-let-8f1a33dd54c35a5fbca4ed2f57927902.png"},{"revision":"bece70185e2a5634dbf7d8e26cc686d4","url":"assets/images/scope-test-var-4ccdbe362c0c98ebdaf707f200594ab3.png"},{"revision":"4a33a7c18df04f93087565e6b520685b","url":"assets/images/scroll-position-1-b15c3e4ef62e7b178c32d2fdd7e2722f.png"},{"revision":"fa9c379b7f983bcef4305a5a89905adb","url":"assets/images/scroll-position-2-afe996b7cab560ec6e8b965265213645.png"},{"revision":"d1ad16c92fa59779ae3b961c47aa19a6","url":"assets/images/search-e1e87e40071c34e319b2c8b96776e662.png"},{"revision":"ca3336a174e460c02bb3dd27082df51c","url":"assets/images/search-exclude-4e087d90b3b08c29aaadb8a53664c32d.png"},{"revision":"53d76bc086aa30c6f48e01b71667be8f","url":"assets/images/seeseed-2c853539657ad409bd29b779a867b9b5.png"},{"revision":"6ba8e46bd252eb5e268f6bb9c9426460","url":"assets/images/seeseed-color-a0d26c9978471582bba205e4fef9300f.png"},{"revision":"5e7689b208ab91cb1c89585a27cb8bd7","url":"assets/images/selected-mutil-line-1824094d1b5dc5b0b7b3165942ad2f66.gif"},{"revision":"d729ccdb2e021d7e557b75f746c6226b","url":"assets/images/selector-child-915313a7ae0876629576ee6135f4ed09.png"},{"revision":"483667bfc1cb382d5359e1515a52f7d2","url":"assets/images/selector-child-combine-4170bf25e9ce00ea40396a62c018275d.png"},{"revision":"107cfffc403f6498212285bb1383c3c8","url":"assets/images/selector-sibling-2d454f9586265c8e8ce9a714f0e3c336.png"},{"revision":"f362f84d45492c43edaf2d7f3dbde5e3","url":"assets/images/server-where-nginx-98600a3a2bcc9bdf55db4cd4e0978c0d.png"},{"revision":"1ab4b986820074cdd9b6a80cbdd934c8","url":"assets/images/set_node_yml-beeb594dfe969fb652aa0e1f7fc28db3.png"},{"revision":"e9adb36b94cdc62cd979a7f64d04812d","url":"assets/images/Set-value-402681d6a7426f1099495889fb76eb59.png"},{"revision":"e32f50b83613ff42e60cbb17333f1c38","url":"assets/images/sh-lerna-init-i-2d6a18069bd7e3ee40f242fed7025a07.png"},{"revision":"b495e0a5d9c075df23bca794c6d96def","url":"assets/images/sign-for-git-actions-bate-e3dcecf1350650c6ab085f22e8443dbb.png"},{"revision":"70d17ca415bac63ee97f4c435465052d","url":"assets/images/slide-menu-3eeaeb9d9deefa5a4a5b014959560ec5.gif"},{"revision":"e8cf496ab8e0f9146bd24ae6ec34b0be","url":"assets/images/slide-menu-dom-2ce8e486513d938ef59e426dc9e327a4.png"},{"revision":"4fb5c4f35a3853e4f01619b64f4f7b03","url":"assets/images/slides-e23e0885e089b6c94319d2c55e7abfa8.png"},{"revision":"9de3610d8270542e70fd1b8ec4b3f158","url":"assets/images/smallpdf-5100038710477d920bf2f96a39088a7a.png"},{"revision":"df4d4d00a5a05ad5e23f576c8cb0551b","url":"assets/images/snipaste-b9aff78036e9988f142fe4d7e95f8f8e.png"},{"revision":"295d88b579f831ff5c9a76f07ae31d63","url":"assets/images/software-version-bd633499c189afd4be5cf162b263dab7.png"},{"revision":"ce9bc13eac40e89938b58a6769ad20e3","url":"assets/images/sources-debug-d5fcd07613f3e07cea9b767e29974401.png"},{"revision":"6c0c13948adfcadecaff8dc46434a979","url":"assets/images/sources-watch-e29e775e0bef8e82bf9140dc9d4f7b0e.png"},{"revision":"7faf12dee14646274855866fee0bbcda","url":"assets/images/sourcetree-da3d822f1a911c799e5ca89215076d34.png"},{"revision":"629b0cc13b45fe075fc426e24ff3ca58","url":"assets/images/split-23aff398a7c4d04a92e51e11cfefac8d.png"},{"revision":"89a97574472d91ed752994b0c4bcee4d","url":"assets/images/ssh-github-test-6e2105ea7e22debf4b2ad313707fa668.png"},{"revision":"6f2dbcf6d89ed32ff6cd7f6cdac25a3d","url":"assets/images/ssh-pwd-fdbbd5088c2f06913dcdc9740c90ae68.png"},{"revision":"9cab963dac955d4a2492fb616d79ec9f","url":"assets/images/ssl-proxy-b07451f54cda901fa41937db55ba70c9.png"},{"revision":"5b70053066df24e57b7ec8977340486a","url":"assets/images/ssl-proxy-setting-8dede97d7b097feaa86d116c5d291841.png"},{"revision":"6bca0491bfd992e20faa04ab9569b271","url":"assets/images/static-func-property-eb0e31d8384e6bcc41fc0fb85e7253ed.png"},{"revision":"647024e2432edbe21083b9bd1a2fee6c","url":"assets/images/status-bar-config-7b389f578f8602d4375f687749016ae2.png"},{"revision":"18e8ad71ef9be29d530f37dd26d52e26","url":"assets/images/store-as-global-variable-0b1cfa92ea2bad1e6f0cdd94a7f8c08c.png"},{"revision":"6dc03f9dab69f351c1df63e1aa43228f","url":"assets/images/stylelint-79119a692eff3ffae93beacb9ff4de4e.png"},{"revision":"e238038817a66c185f919d44412face8","url":"assets/images/svg-viewer-5caa8b4d3a185243e9ff2363aae49eec.gif"},{"revision":"cbc8f115727122688655c8bbb179a269","url":"assets/images/table-8cb06d1c8a48bdfd6fd020b6533a3594.png"},{"revision":"df1341579aed58a6cf76200c6c7f68eb","url":"assets/images/table-columns-602e7acef83b160c3ac2676b27dcbd48.png"},{"revision":"ba38e5a7577f039f316792aa56d1de69","url":"assets/images/tabnine-java-d617afc82c553729ffed9304da9dd9db.gif"},{"revision":"0dd7a91934dd92788da1e7cc0f76c79a","url":"assets/images/tapable-c1d623e6c1e14a66f15c09488c8392c5.png"},{"revision":"3582d854951afdbf716d4a9c70cb47a9","url":"assets/images/taptypes-0fde7c94912ae70f9a914907f96fc5e8.png"},{"revision":"fdc95c9882694205ae2422a98b83f9c3","url":"assets/images/thanos--help-e69034fc513b1065bc6bc7488cdee43c.png"},{"revision":"235ea713d90d39499c3a16918f4e5fe5","url":"assets/images/thanos-255c727f4723143e4723a0c03b1ebaf4.png"},{"revision":"c4a45eb8d7ef902341caeb35c7b18791","url":"assets/images/this-832cea27755dc483e34fd469611807e4.png"},{"revision":"219d89b1373b552ce46406d88293edeb","url":"assets/images/thor-932a58d4fc8d63191aad998512686093.png"},{"revision":"82b64bedeb5db25090298c450ad99092","url":"assets/images/time-timeEnd-eca3bcead4671ec3d5c1e17d2fa612b1.png"},{"revision":"bc4759151d7f68b591b842d56b29c063","url":"assets/images/timeLog-fd55d117403688306c9231a6b860a75f.png"},{"revision":"179b34ebf12e5d6648836f356a328df6","url":"assets/images/todo-highlight-5b7280000385a200c511ec95f8d9cb4f.png"},{"revision":"92e4ae02110684ee63e102ee9c58d442","url":"assets/images/todo-icon-f8006509bf569800faa911b4a148ec9f.png"},{"revision":"4ce0bc0b32dcb38125ad15881b8b57a2","url":"assets/images/todo-tree-820ef55b12cac6e60850ce7b20731249.png"},{"revision":"22f82d6c2a09c7f0f892dd0ebc2d2d2b","url":"assets/images/traffic-monitor-97d211cdca16204ff243d3dcde2abbf4.png"},{"revision":"67318177b5195a50bff0ad80a8dc7c95","url":"assets/images/ts-eslint-parsing-error-3ffe8bd015208416bdcda409ec578c88.png"},{"revision":"26e35f59c67c0d54a6fb9a5d82e5c364","url":"assets/images/tslint-00f9e3d9532da4f491f90d4f8a553e66.png"},{"revision":"90dffc4c2c963d3edb908090998f54ad","url":"assets/images/tuhaokuai-630c2398de2eae46997db1a39ec9f725.png"},{"revision":"60b329b0bd049bb88b4d99a0ed8525f5","url":"assets/images/typro-a5013a5c9bfe44ec9b4f576a0d788dbf.png"},{"revision":"5ace4b3110da96ea2fed23baa0dd20f9","url":"assets/images/unary-operators-338c226a2b1a6783c55a190119355148.png"},{"revision":"ff3788f6999736518184a562133e29fe","url":"assets/images/undefined-vs-null-adcd99260cb93863daefc63a4ae85232.png"},{"revision":"71223a4203d741638c23cc28dc3491e5","url":"assets/images/unknown-b5615681ed9abf109e8d19097586388a.png"},{"revision":"649da01d249be0746478bc95aec68595","url":"assets/images/update+destory-95787aabcab014b55660e950b566be8b.png"},{"revision":"94b0a1f7a413c430d33b755d5362a65f","url":"assets/images/user-settings-1474a851b3c195794aed615be73c8a93.png"},{"revision":"29941c068a67ae7e6fe8512b999e3ed3","url":"assets/images/value-assignment-5cf82cbd5243e25d3118960472d02ccb.png"},{"revision":"ece6d1061568ca2d1469f3ec43465fc8","url":"assets/images/value-copy-a703cd7fe119738238812ec4e7a7e96b.png"},{"revision":"4e2d0043cd74274e551abc3ff1c12b68","url":"assets/images/var-variable-lifecycle-840a3a403a38ccd33a552e46f1a8bbe5.png"},{"revision":"f2103f3f734a3d6860f3df0c51df42a6","url":"assets/images/variable-lifecycle-954057e65bebaafd865fe47725e160bc.png"},{"revision":"847d73989e9360e4aeb3a25e7561171a","url":"assets/images/variable-status-f5c3c5ef4e7188ca7bd3e4c1146e20d5.jpg"},{"revision":"7b1b7fd5f135e4cd43f8fbe9cec0baac","url":"assets/images/vscode-draw-io-f586e207239cf056861d4f5218d307d2.png"},{"revision":"0167fb276b69100cbd2b8b97a8f6a5f4","url":"assets/images/vscode-settings-b5da01e61cadfc9f0e02ba759c1b9817.png"},{"revision":"31789e2d951b475ecb7819b14f2322c2","url":"assets/images/vue-build-5baf0b1524bb4e879f89eaf5c49880ae.png"},{"revision":"8f0f43e36b5573465f108ca4a0f59372","url":"assets/images/vue-create-ee0b5608c32ef89c157d36d08594e998.png"},{"revision":"703662ae168fa0ce193f8eacec1f2bba","url":"assets/images/vue-devtools-6a1183f3eb8092242cee2854711fe727.png"},{"revision":"18bc1cb51e185a78950a7cf311692370","url":"assets/images/webpack-build-1e6835a2eabdfc3c5a40b3a5a4483f74.jpg"},{"revision":"888ef75f3a081c84a06ab7d834141e5a","url":"assets/images/webpack-loader-e2b7832c899008c00b767829fd1bdf20.png"},{"revision":"64165b5be3b04a15d852556d4c7ff5c6","url":"assets/images/webpack-loader-pitch-c99b66274a1b287da507a7d3c37c4015.png"},{"revision":"06ddd6bd3a527f81b0efd42f19f495a9","url":"assets/images/webpack-loader-transform-93ec84cf0a4e45527b57a6878511b222.png"},{"revision":"b826da692879ab14e27c06c47c616cd0","url":"assets/images/webpack-process-886075bd21a3171e1c6aa935ed08545d.png"},{"revision":"cc019387322fad2d529e0ef1248761ed","url":"assets/images/wenzhu-e0ddefbaefad5334ce6de17604a18d6d.png"},{"revision":"b362d0de6ad233788085b4b92a99420f","url":"assets/images/width-height-properties-b0b9653d1cc5760f0515dec69bff3295.png"},{"revision":"b204fbc6e9a47efcc163810cb2fd01e5","url":"assets/images/win-10-pro-active-19b21c678c1f8feb25ffb138b924d7fb.png"},{"revision":"7819e59c7b8b4bd730a5c28273364a2a","url":"assets/images/win-10-pro-active-cmd-b2b9eaf98f53eaca2fb0c22be259bf42.png"},{"revision":"ec92c62acbae7357288f07b6d93fd1f8","url":"assets/images/window-scroll-31a1c3825eda81b6e9d70fb9fa73fe27.png"},{"revision":"17d0736342a9b3291b8738fd0637fff3","url":"assets/images/workflow-26fb9c3443997c648cd86edda32935fd.png"},{"revision":"8207bf8dbade48a2ccfc27088f3a7c81","url":"assets/images/wox_preview-25592bf82aaa5757bbcab3e5da27ea04.jpg"},{"revision":"54cb8f13f57b9d1e9e7df835449778f4","url":"assets/images/xmind-048bbec8a2646792fda3dbcae23a58f1.png"},{"revision":"4862ab2cb602387649b70f54472a6074","url":"assets/images/xmind-9b8a8aa9dbc808556790aa73c7bc0ccc.png"},{"revision":"bc9950b94116aa42d1be7301617e2341","url":"assets/images/xmind-key-1d125c1bba3c09d705f9bc8d23cd63a9.jpg"},{"revision":"f012a48960342a1fd03383c83849ed95","url":"assets/images/youtube-dl-F-8480f0e54e5d88e77ec8c39ed4e57860.png"},{"revision":"fb28ae66e9d13989309415ebaa649809","url":"assets/images/zhitu-69f59d1fde70bee4286c25374ceb299e.png"},{"revision":"f1c29a4bde070c8594a5d48cbf001995","url":"assets/images/zhuangbi-064b817b081043b64b99d9f958ca6934.png"},{"revision":"13bda69e5736681e2d1d7b4e3843237b","url":"assets/images/zsh-auth-tips-766ec1aad3b2e8853c15e37d78227f12.png"},{"revision":"da4ef03683cb8de0bec14e5f8f6722e6","url":"assets/images/zsh-autosuggestion1-849551cd99d6fbd46eb048dc710269d2.png"},{"revision":"5de8cd5e00e579c44150b9b65acb4cac","url":"assets/images/zsh-autosuggestion2-cb4eaddb4b6deb31575f9988f51ec33a.png"},{"revision":"417f7b51b74ff7a1dfe9210c2dc64d1a","url":"img/chao.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"66038f1a8de958fd5662e57d142c69e4","url":"img/loading.svg"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"}];
  const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
    fallbackToNetwork: true, // safer to turn this true?
  });

  if (params.offlineMode) {
    controller.addToCacheList(precacheManifest);
    if (params.debug) {
      console.log('[Docusaurus-PWA][SW]: addToCacheList', {
        precacheManifest,
      });
    }
  }

  await runSWCustomCode(params);

  self.addEventListener('install', (event) => {
    if (params.debug) {
      console.log('[Docusaurus-PWA][SW]: install event', {
        event,
      });
    }
    event.waitUntil(controller.install(event));
  });

  self.addEventListener('activate', (event) => {
    if (params.debug) {
      console.log('[Docusaurus-PWA][SW]: activate event', {
        event,
      });
    }
    event.waitUntil(controller.activate(event));
  });

  self.addEventListener('fetch', async (event) => {
    if (params.offlineMode) {
      const requestURL = event.request.url;
      const possibleURLs = getPossibleURLs(requestURL);
      for (let i = 0; i < possibleURLs.length; i += 1) {
        const possibleURL = possibleURLs[i];
        const cacheKey = controller.getCacheKeyForURL(possibleURL);
        if (cacheKey) {
          const cachedResponse = caches.match(cacheKey);
          if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: serving cached asset', {
              requestURL,
              possibleURL,
              possibleURLs,
              cacheKey,
              cachedResponse,
            });
          }
          event.respondWith(cachedResponse);
          break;
        }
      }
    }
  });

  self.addEventListener('message', async (event) => {
    if (params.debug) {
      console.log('[Docusaurus-PWA][SW]: message event', {
        event,
      });
    }

    const type = event.data && event.data.type;

    if (type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map