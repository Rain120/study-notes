"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5883],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return v}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),a=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=a(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=a(r),v=o,m=f["".concat(c,".").concat(v)]||f[v]||p[v]||s;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function v(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var a=2;a<s;a++)i[a]=r[a];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29600:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return u},default:function(){return f}});var t=r(87462),o=r(63366),s=(r(67294),r(3905)),i=["components"],l={},c="\u5b9e\u73b0Promise",a={unversionedId:"promise/implement",id:"promise/implement",title:"\u5b9e\u73b0Promise",description:"",source:"@site/fe/promise/implement.mdx",sourceDirName:"promise",slug:"/promise/implement",permalink:"/study-notes/fe/promise/implement",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1644721932,formattedLastUpdatedAt:"2/13/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u524d\u7aef\u5e94\u7528\u52a0\u8f7d\u901a\u5e38\u9700\u8981\u7ecf\u5386\u7684\u8fc7\u7a0b",permalink:"/study-notes/fe/optimize/first-reload"},next:{title:"\u4e00\u4e9b\u5c0f\u7684\u77e5\u8bc6\u70b9",permalink:"/study-notes/fe/promise/little-knowledge"}},u=[],p={toc:u};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u5b9e\u73b0promise"},"\u5b9e\u73b0Promise"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const STATUS = {\n    PENDING: 'PENDING',\n    FULFILLED: 'FULFILLED',\n    REJECTED: 'REJECTED',\n}\n\nclass Promise {\n    constructor(executor) {\n        this.status = STATUS.PENDING;\n        this.value = null;\n        this.reason = null;\n\n        this.onResolvedList = [];\n        this.onRejectList = [];\n\n        const resolve = (value) => {\n            if (value instanceof Promise) {\n                return value.then(resolve, reject);\n            }\n\n            this.status = STATUS.FULFILLED;\n            this.value = value;\n\n            this.onResolvedList.forEach(cb => {\n                cb && cb();\n            });\n        }\n\n        const reject = (reason) => {\n            this.status = STATUS.REJECTED;\n            this.reason = reason;\n\n            this.onRejectList.forEach(cb => {\n                cb && cb();\n            });\n        }\n\n        try {\n            executor && executor(resolve, reject);\n        } catch (error) {\n            reject(error);\n        }\n    }\n\n    static resolve (value) {\n        return new Promise((resolve, reject) => {\n            resolve(value);\n        });\n    }\n\n    static reject (value) {\n        return new Promise((resolve, reject) => {\n            reject(value);\n        });\n    }\n\n    // 1. x === promise(\u5b83\u672c\u8eab) => error\n    // 2. x => value => value\n    // 3. x \u662f promise =>\n    //    3.1 => x.then =>\n    //           3.1.1 => function => value or error => resolve(value) or reject(error)\n    //           3.1.2 => value => value\n    resolvePromise (promise, x, resolve, reject) {\n        if (x === promise) {\n            return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));\n        }\n\n        let called;\n\n        const beCalled = called => {\n            if (called) {\n                return;\n            }\n\n            called = true;\n        }\n\n        if ((typeof x === 'object' && x !== null) || (typeof x === 'function')) {\n            const then = x.then;\n\n            try {\n                if (typeof then === 'function') {\n                    then.call(\n                        x,\n                        y => {\n                            beCalled(called);\n                            resolvePromise(promise, y, resolve, reject);\n                        },\n                        e => {\n                            beCalled(called);\n                            reject(e);\n                        }\n                    );\n                } else {\n                    resolve(x);\n                }\n            } catch (error) {\n                beCalled(called);\n                reject(error);\n            }\n        } else {\n            resolve(x);\n        }\n    }\n\n    then (onFulfilled, onRejected) {\n        onFulfilled = typeof onFulfilled === 'function'\n            ? onFulfilled\n            : value => value;\n\n        onRejected = typeof onRejected === 'function'\n            ? onRejected\n            : error => {\n                throw error\n            };\n\n        const promise = new Promise((resolve, reject) => {\n            if (this.status === STATUS.FULFILLED) {\n                setTimeout(() => {\n                    try {\n                        const x = onFulfilled(this.value)\n                        this.resolvePromise(promise, x, resolve, reject);\n                    } catch (error) {\n                        reject(error);\n                    }\n                });\n            }\n\n            if (this.status === STATUS.REJECTED) {\n                try {\n                    setTimeout(() => {\n                        try {\n                            const x = onRejected(this.reason)\n                            this.resolvePromise(promise, x, resolve, reject);\n                        } catch (error) {\n                            reject(error);\n                        }\n                    });\n\n                } catch (error) {\n                    reject(error);\n                }\n            }\n\n            if (this.status === STATUS.PENDING) {\n                try {\n                    this.onResolvedList.push(() => {\n                        setTimeout(() => {\n                            try {\n                                const x = onFulfilled(this.value)\n                                this.resolvePromise(promise, x, resolve, reject);\n                            } catch (error) {\n                                reject(error);\n                            }\n                        });\n                    });\n\n                    this.onRejectList.push(() => {\n                        setTimeout(() => {\n                            try {\n                                const x = onRejected(this.reason)\n                                this.resolvePromise(promise, x, resolve, reject);\n                            } catch (error) {\n                                reject(error);\n                            }\n                        });\n                    });\n                } catch (error) {\n                    reject(error);\n                }\n            }\n        });\n\n        return promise;\n    }\n}\n\nPromise.prototype.catch = cb => {\n    if (typeof cb !== 'function') {\n        return Promise.reject(new TypeError(`${cb} is not a function`));\n    }\n\n    return this.then(null, cb);\n}\n\nPromise.prototype.finally = cb => {\n    if (typeof cb !== 'function') {\n        return Promise.reject(new TypeError(`${cb} is not a function`));\n    }\n\n    return this.then(\n        value => Promise.resolve(cb()).then(() => value),\n        reason => Promise.resolve(cb()).then(() => { throw reason; }),\n    );\n}\n\nPromise.race = values => {\n    if (!Array.isArray(values)) {\n        const type = typeof values;\n        return new TypeError(`TypeError: ${type} ${values} is not iterable`)\n    }\n\n    return new Promise((resolve, reject) => {\n        for (let i = 0; i < values.length; i++) {\n            const value = values[i];\n\n            if (typeof value === 'function') {\n                x.then(() => resolve(value), reject);\n            } else {\n                resolve(value);\n            }\n        }\n    });\n}\n\nPromise.all = values => {\n    if (!Array.isArray(values)) {\n        const type = typeof values;\n        return new TypeError(`TypeError: ${type} ${values} is not iterable`)\n    }\n\n    return new Promise((resolve, reject) => {\n        const res = [];\n        const order = 0;\n\n        const processed = (value, i) => {\n            res[i] = value;\n\n            if (++order === values.length) {\n                resolve(res);\n            }\n        }\n\n        for (let i = 0; i < values.length; i++) {\n            const value = values[i];\n\n            if (typeof value === 'function') {\n                value.then(value => processed(value, i), reject);\n            } else {\n                processed(value, i);\n            }\n        }\n    });\n}\n\n// \u4e2d\u65ad\nfunction wrapAbort (promise) {\n    let abort;\n\n    const abortPromise = new Promise((resolve, reject) => {\n        abort = reject;\n    });\n\n    let p = Promise.race([promise, abortPromise]);\n\n    return p;\n}\n\nfunction promisify (fn) {\n    return (...args) => {\n        return new Promise((resolve, reject) => {\n            fn(\n                ...args,\n                (reason, value) => {\n                    if (reason) {\n                        reject(reason);\n                    }\n\n                    resolve(value);\n                }\n            );\n        })\n    }\n}\n\nPromise.defer = Promise.deferred = function () {\n    let dfd = {};\n    dfd.promise = new Promise((resolve, reject) => {\n        dfd.resolve = resolve;\n        dfd.reject = reject;\n    })\n    return dfd;\n}\n\nconst promise = new Promise((resolve, reject) => {\n    reject('\u5931\u8d25');\n}).then().then().then(data => {\n    console.log(data);\n}, err => {\n    console.log('err', err);\n})\n")))}f.isMDXComponent=!0}}]);