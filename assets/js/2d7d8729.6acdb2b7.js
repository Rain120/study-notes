"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[1775],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17459:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={},l=void 0,p={unversionedId:"javascript/es-study/static",id:"javascript/es-study/static",title:"static",description:"\u5728JavaScript \u4e2d\uff0c\u751f\u6210\u5b9e\u4f8b\u5bf9\u8c61\u7684\u4f20\u7edf\u65b9\u6cd5\u662f\u901a\u8fc7\u6784\u9020\u51fd\u6570\uff0c \u5bf9\u719f\u6089OOP\u7684\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u8fd9\u5f88\u8ba9\u4eba\u56f0\u60d1\u3002",source:"@site/fe/javascript/es-study/static.md",sourceDirName:"javascript/es-study",slug:"/javascript/es-study/static",permalink:"/study-notes/fe/javascript/es-study/static",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1647177225,formattedLastUpdatedAt:"3/13/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u6a21\u5757\u5316\u65b9\u6848",permalink:"/study-notes/fe/javascript/es-study/module"},next:{title:"\u5e38\u7528\u57fa\u7840\u77e5\u8bc6",permalink:"/study-notes/fe/javascript/regular-expression/"}},c={},u=[{value:"\u9759\u6001\u65b9\u6cd5",id:"\u9759\u6001\u65b9\u6cd5",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],f={toc:u};function d(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u4e2d\uff0c\u751f\u6210\u5b9e\u4f8b\u5bf9\u8c61\u7684\u4f20\u7edf\u65b9\u6cd5\u662f\u901a\u8fc7\u6784\u9020\u51fd\u6570\uff0c \u5bf9\u719f\u6089",(0,a.kt)("inlineCode",{parentName:"p"},"OOP"),"\u7684\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u8fd9\u5f88\u8ba9\u4eba\u56f0\u60d1\u3002"),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"ES6"),"\u4e2d\u65b0\u589e\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"class"),"\u7684\u5b9a\u4e49\u65b9\u6cd5\u4ee5\u53ca\u9759\u6001\u65b9\u6cd5\uff0c\u4f7f\u5f97 JS \u5f00\u53d1\u8005\u7ec8\u4e8e\u544a\u522b\u4e86\u76f4\u63a5\u4f7f\u7528\u539f\u578b\u5bf9\u8c61\u6a21\u4eff\u9762\u5411\u5bf9\u8c61\u4e2d\u7684\u7c7b\u548c\u7c7b\u7ee7\u627f\u65f6\u4ee3\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"ES7"),"\u65b0\u589e\u4e86\u5b9a\u4e49\u9759\u6001\u5c5e\u6027\u3002"),(0,a.kt)("h2",{id:"\u9759\u6001\u65b9\u6cd5"},"\u9759\u6001\u65b9\u6cd5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7c7b\u76f8\u5f53\u4e8e\u5b9e\u4f8b\u7684\u539f\u578b\uff0c\u6240\u6709\u5728\u7c7b\u4e2d\u5b9a\u4e49\u7684\u65b9\u6cd5\uff0c\u90fd\u4f1a\u88ab\u5b9e\u4f8b\u7ee7\u627f\u3002\u5982\u679c\u5728\u4e00\u4e2a\u65b9\u6cd5\u524d\uff0c\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"static"),"\u5173\u952e\u5b57\uff0c\u5c31\u8868\u793a\u8be5\u65b9\u6cd5\u4e0d\u4f1a\u88ab\u5b9e\u4f8b\u7ee7\u627f\uff0c\u800c\u662f\u76f4\u63a5\u901a\u8fc7\u7c7b\u6765\u8c03\u7528\uff0c\u8fd9\u5c31\u79f0\u4e3a\u201c\u9759\u6001\u65b9\u6cd5\u201d\u3002")),(0,a.kt)("p",null,"\ud83d\udc47\u6211\u4eec\u6765\u770b\u4e00\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"ES6"),"\u5199\u6cd5\u4e0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"class"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"static"),"\u5c5e\u6027\u3001\u65b9\u6cd5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/repl"},"Babel \u8f6c\u6362"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"ES5"),"\u7684\u4ee3\u7801\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ES6 Class")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Foo {\n  static name;\n  static staticMethod() {\n    return 'static method';\n  }\n  classMethod() {\n    return 'class method';\n  }\n}\n\nclass Bar extends Foo {}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"babel -> presets: es2015 & stage-2 ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'"use strict";\n\nfunction _typeof(obj) {\n    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {\n        _typeof = function _typeof(obj) {\n            return typeof obj;\n        };\n    } else {\n        _typeof = function _typeof(obj) {\n            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?\n                "symbol" : typeof obj;\n        };\n    }\n    return _typeof(obj);\n}\n\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === "object" || typeof call === "function")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");\n    }\n    return self;\n}\n\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== "function" && superClass !== null) {\n        throw new TypeError("Super expression must either be null or a function");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\n\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {\n        return right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!_instanceof(instance, Constructor)) {\n        throw new TypeError("Cannot call a class as a function");\n    }\n}\n\nfunction _defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if ("value" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\n\nvar Foo =\n    /*#__PURE__*/\n    function () {\n        function Foo() {\n            _classCallCheck(this, Foo);\n        }\n\n        _createClass(Foo, [{\n            key: "classMethod",\n            value: function classMethod() {\n                return \'class method\';\n            }\n  }], [{\n            key: "staticMethod",\n            value: function staticMethod() {\n                return \'static method\';\n            }\n  }]);\n\n        return Foo;\n    }();\n\n_defineProperty(Foo, "name", void 0);\n\nvar Bar =\n    /*#__PURE__*/\n    function (_Foo) {\n        _inherits(Bar, _Foo);\n\n        function Bar() {\n            _classCallCheck(this, Bar);\n\n            return _possibleConstructorReturn(this, _getPrototypeOf(Bar).apply(this, arguments));\n        }\n\n        return Bar;\n    }(Foo);\n')),(0,a.kt)("p",null,"\u6211\u4eec\u53d1\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"static"),"\u5c5e\u6027\u662f\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"},(0,a.kt)("inlineCode",{parentName:"a"},"Object.defineProperty")),"\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u4e00\u4e2a\u65b0\u5c5e\u6027\uff0c\u6216\u8005\u4fee\u6539\u4e00\u4e2a\u5bf9\u8c61\u7684\u73b0\u6709\u5c5e\u6027\uff0c \u5e76\u8fd4\u56de\u8fd9\u4e2a\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes"),": \u8fd9\u4e2a\u5c5e\u6027\u503c\u9664\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"enumerable"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5176\u4ed6\u5c5e\u6027\u90fd\u53ef\u4ee5\uff0c\u4e5f\u5c31\u662f\u9759\u6001\u5c5e\u6027\u53ef\u4ee5\u8d4b\u503c\u3001\u4fee\u6539\u3001\u5220\u9664\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ES6")," \u548c",(0,a.kt)("inlineCode",{parentName:"p"},"ES7"),"\u5b9a\u4e49\u9759\u6001\u5c5e\u6027\u7684\u5dee\u5f02"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Foo {\n  static name; // es 7\n  static get gender() { // es 6\n    return gender;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"babel")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'"use strict";\n\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {\n        return right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!_instanceof(instance, Constructor)) {\n        throw new TypeError("Cannot call a class as a function");\n    }\n}\n\nfunction _defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if ("value" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\n\nvar Foo =\n    /*#__PURE__*/\n    function () {\n        function Foo() {\n            _classCallCheck(this, Foo);\n        }\n\n        _createClass(Foo, null, [{\n            key: "gender",\n            get: function get() {\n                return gender;\n            }\n  }]);\n\n        return Foo;\n    }();\n\n_defineProperty(Foo, "name", void 0);\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ES6"),"\u4f1a\u5224\u65ad\u5f53\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"props"),"\u662f\u539f\u578b\u94fe\u4e0a\u7684\u8fd8\u662f\u9759\u6001\u5c5e\u6027\uff0c\u901a\u8fc7\u4e0d\u540c\u5224\u65ad\u6761\u4ef6\u6765\u5c06\u5f53\u524d\u5c5e\u6027\u503c\u5b9a\u4e49\u5230\u672c\u8eab\u5bf9\u8c61\u8fd8\u662f\u5bf9\u8c61\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"constructor"),"\u4e0a\u3002"),(0,a.kt)("p",null,"\u8bf4\u5b8c\u4e86\u9759\u6001\u5c5e\u6027\uff0c\u6211\u4eec\u63a5\u7740\u4e86\u89e3\u4e00\u4e0b\u9759\u6001\u65b9\u6cd5\u5427\uff0cemm, \u8fd9\u662f\u4e0d\u662f\u6709\u70b9\u4e0d\u597d\u7406\u89e3\u5440\uff0cOK\uff0c\u90a3\u6211\u4eec\u6362\u4e00\u79cd\u65b9\u5f0f\u6765\u770b\u5427"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ES6 Class")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Foo {\n  // static name;\n  static staticMethod() {\n    return 'static method';\n  }\n  static staticMethod2() {\n    this.staticMethod();\n    return 'static method';\n  }\n  classMethod() {\n    return 'class method';\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"babel -> presets: es2015-loose")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\"use strict\";\n\nvar Foo =\n/*#__PURE__*/\nfunction () {\n  function Foo() {}\n\n  // static name;\n  Foo.staticMethod = function staticMethod() {\n    return 'static method';\n  };\n\n  Foo.staticMethod2 = function staticMethod2() {\n    this.staticMethod();\n    return 'static method';\n  };\n\n  var _proto = Foo.prototype;\n\n  _proto.classMethod = function classMethod() {\n    return 'class method';\n  };\n\n  return Foo;\n}();\n")),(0,a.kt)("p",null,"\u4ece\u4e0a\u8ff0\u4ee3\u7801\u6211\u4eec\u53d1\u73b0\uff0c\u9759\u6001\u65b9\u6cd5\u662f\u76f4\u63a5\u6ce8\u518c\u5728\u5f53\u524d\u7c7b\u4e0a\u7684\uff0c\u6240\u4ee5\u9759\u6001\u65b9\u6cd5\u5c06\u4e0d\u5728\u5b9e\u4f8b\u5316\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e2d\uff0c\u56e0\u6b64\u4e0d\u80fd\u5728\u9759\u6001\u65b9\u6cd5\u4e2d\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\u6765\u8c03\u7528\u9759\u6001\u65b9\u6cd5\u548c\u5c5e\u6027\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": \u5982\u679c\u9759\u6001\u65b9\u6cd5\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\u5173\u952e\u5b57\uff0c\u8fd9\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\u6307\u7684\u662f\u5f53\u524d\u8c03\u7528\u7684",(0,a.kt)("strong",{parentName:"p"},"\u7c7b(\u6ce8\u610f",(0,a.kt)("inlineCode",{parentName:"strong"},"this"),"\u7684\u6307\u5411)"),"\uff0c\u800c\u4e0d\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u4f8b"),"\u3002"),(0,a.kt)("p",null,"\u8bf4\u4e86\u8fd9\u4e48\u591a\uff0c\u90a3\u9759\u6001\u65b9\u6cd5\u548c\u5c5e\u6027\u7684\u4f5c\u7528\u662f\u4ec0\u4e48\u5462\uff1f"),(0,a.kt)("p",null,"\u4f5c\u7528:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9759\u6001\u65b9\u6cd5\u3001\u5c5e\u6027\u5c06\u88ab\u5171\u4eab\uff0c\u907f\u514d\u5168\u5c40\u53d8\u91cf\u6c61\u67d3\uff0c\u51cf\u5c11\u6240\u7528\u5185\u5b58\u3002")),(0,a.kt)("p",null,"\u4f7f\u7528\u573a\u666f:"),(0,a.kt)("blockquote",null,(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"\u5168\u5c40\u65b9\u6cd5\u3001\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u524d\u5c5e\u6027\u548c\u65b9\u6cd5\u4e0e\u5176\u5b9e\u4f8b\u65e0\u5173"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Foo {\n  static name;\n  static staticMethod() {\n    return 'static method';\n  }\n  static staticMethod2() {\n    this.staticMethod();\n    console.log('foo static staticMethod2');\n    return 'static method';\n  }\n  classMethod() {\n    return 'class method';\n  }\n}\n\nclass Bar extends Foo {\n  static staticMethod() {\n    console.log('bar static staticMethod2');\n  }\n}\n\nvar foo = new Foo();\nvar bar = new Bar();\nconsole.log(foo, bar);\nconsole.log(foo.constructor === Foo);\nconsole.log(Bar.staticMethod2()););\n")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"static-func-property",src:n(48409).Z,width:"585",height:"912"})),(0,a.kt)("p",null,"\u5982\u4e0a\u56fe\u793a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"staticMethod"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"staticMethod2"),"\u90fd\u662f\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Foo"),"\u8fd9\u4e2a\u7c7b\u4e0a\uff0c\u4e0d\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"prototype"),"\u4e0a\uff0c\u53ea\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"classMethod"),"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"prototype"),"\u4e0a\u3002\u8fd9\u5c31\u8bf4\u660e\u8bbf\u95ee\u9759\u6001\u53d8\u91cf\u548c\u5c5e\u6027\u53ea\u80fd\u901a\u8fc7\u7c7b\u6765\u8bbf\u95ee\uff0c\u4e0d\u80fd\u901a\u8fc7\u5b9e\u4f8b\u6765\u8bbf\u95ee\u3002"),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://es6.ruanyifeng.com/#docs/class#%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95"},"\u962e\u4e00\u5cf0: class#\u9759\u6001\u65b9\u6cd5")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/static"},"MDN - Static")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.tangshuang.net/3237.html"},"ES6 class \u9759\u6001\u5c5e\u6027\u548c\u79c1\u6709\u65b9\u6cd5")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/34640855"},"\u539f\u578b\u94fe\u95ee\u9898")))}d.isMDXComponent=!0},48409:function(e,t,n){t.Z=n.p+"assets/images/static-func-property-eb0e31d8384e6bcc41fc0fb85e7253ed.png"}}]);