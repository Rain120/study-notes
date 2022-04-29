"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5264],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39280:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=t(62848),a=t(79213),o=(t(59496),t(49613)),s=["components"],i={},l="Slider",c={unversionedId:"react/better-scroll/slider",id:"react/better-scroll/slider",title:"Slider",description:"",source:"@site/fe/react/better-scroll/slider.md",sourceDirName:"react/better-scroll",slug:"/react/better-scroll/slider",permalink:"/study-notes/fe/react/better-scroll/slider",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"Scroll",permalink:"/study-notes/fe/react/better-scroll/scroll"},next:{title:"Sticky",permalink:"/study-notes/fe/react/better-scroll/sticky"}},p={},u=[],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slider"},"Slider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { Component } from "react";\nimport propTypes from "prop-types";\n\nimport BetterScroll from "./BetterScroll";\nimport classnames from "classnames";\nimport isEqual from "lodash.isequal";\n\nimport "./slider.scss";\n\nexport default class Slider extends Component {\n  static propTypes = {\n    className: propTypes.string,\n    data: propTypes.arrayOf(propTypes.any),\n    interval: propTypes.number\n  };\n\n  static defaultProps = {\n    className: "",\n    data: [],\n    interval: 4000\n  };\n\n  state = {\n    currentPageIndex: 0\n  };\n\n  slider = null;\n  sliderGroup = null;\n  playTimer = 0;\n\n  componentDidMount() {\n    this._init();\n  }\n\n  componentDidUpdate(nextProps, prevState) {\n    if (!isEqual(nextProps.data, this.props.data)) {\n      this._init();\n\n      window.addEventListener("resize", () => {\n        if (!this.slider) {\n          return;\n        }\n        this.slider.refresh();\n      });\n    }\n  }\n\n  componentWillUnmount() {\n    clearTimeout(this.playTimer);\n  }\n\n  _onScrollEnd() {\n    this.autoGoNext();\n  }\n\n  autoGoNext = () => {\n    clearTimeout(this.playTimer);\n    this.playTimer = setTimeout(() => {\n      this.slider.scroll.next();\n    }, this.props.interval);\n  };\n\n  _init = () => {\n    clearTimeout(this.playTimer);\n    setTimeout(() => {\n      this._initSliderHooks();\n      this.autoGoNext();\n    }, 20);\n  };\n\n  _initSliderHooks = () => {\n    this.slider &&\n      this.slider.on([\n        {\n          name: "beforeScrollStart",\n          handler: () => clearTimeout(this.playTimer)\n        },\n        {\n          name: "scrollEnd",\n          handler: () => this._onScrollEnd()\n        },\n        {\n          name: "slideWillChange",\n          handler: page => {\n            this.setState({\n              currentPageIndex: page.pageX\n            });\n          }\n        }\n      ]);\n  };\n\n  render() {\n    const { currentPageIndex } = this.state;\n\n    const { data } = this.props;\n    return (\n      <div className={classnames("slide-wrapper", this.props.className)}>\n        <BetterScroll\n          ref={elem => (this.slider = elem)}\n          data={data}\n          scrollX={true}\n          scrollY={false}\n          probeType={2}\n          useTransition={true}\n          momentum={false}\n          bounce={false}\n          stopPropagation={true}\n          slide={{\n            loop: true,\n            threshold: 100\n          }}\n        >\n          <div className="slider" ref={elem => (this.sliderGroup = elem)}>\n            {data.map((img, key) => (\n              <div className="slider-item" key={`img-${key}`}>\n                <a className="img-wrapper" href={img.href}>\n                  <img src={img.src} alt={img.alt} />\n                </a>\n              </div>\n            ))}\n          </div>\n          <div className="dots">\n            {data.map((img, key) => (\n              <span\n                className={classnames("dot", {\n                  active: currentPageIndex === key\n                })}\n                key={key}\n              />\n            ))}\n          </div>\n        </BetterScroll>\n      </div>\n    );\n  }\n}\n\n')))}m.isMDXComponent=!0}}]);