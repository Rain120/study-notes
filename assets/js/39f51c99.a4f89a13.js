"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[3265],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(a,".").concat(u)]||d[u]||p[u]||s;return n?r.createElement(h,l(l({ref:t},f),{},{components:n})):r.createElement(h,l({ref:t},f))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return f},default:function(){return d}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),l=["components"],o={},a="Sticky",c={unversionedId:"react/better-scroll/sticky",id:"react/better-scroll/sticky",title:"Sticky",description:"",source:"@site/fe/react/better-scroll/sticky.md",sourceDirName:"react/better-scroll",slug:"/react/better-scroll/sticky",permalink:"/study-notes/fe/react/better-scroll/sticky",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1641816162,formattedLastUpdatedAt:"1/10/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Slider",permalink:"/study-notes/fe/react/better-scroll/slider"},next:{title:"init",permalink:"/study-notes/fe/react/component-library/init"}},f=[],p={toc:f};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sticky"},"Sticky"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { Component } from "react";\nimport propTypes from "prop-types";\n\nimport BetterScroll from "./BetterScroll";\nimport classnames from "classnames";\nimport isEqual from "lodash.isequal";\n\nimport "./sticky.scss";\n\nexport default class Sticky extends Component {\n  static propTypes = {\n    className: propTypes.string,\n    data: propTypes.any\n  };\n\n  static defaultProps = {\n    className: "",\n    data: {}\n  };\n\n  state = {\n    listHeight: [],\n    scrollY: -1,\n    currentIndex: 0,\n    diff: -1,\n    fixedTop: 0\n  };\n\n  bsref = null;\n  fixTitleref = null;\n  listGroup = [];\n  TITLE_HEIGHT = 30;\n\n  componentDidMount() {\n    let { scrollY } = this.state;\n    setTimeout(() => {\n      this._calculateHeight();\n      this.setState({ scrollY });\n    }, 20);\n  }\n\n  componentDidUpdate(nextProps, prevState) {\n    if (!isEqual(nextProps.data, this.props.data)) {\n      setTimeout(() => {\n        this.bsref.refresh();\n        this._calculateHeight();\n      }, 20);\n    }\n  }\n\n  fixedTitle = () => {\n    if (this.state.scrollY > 0) {\n      return "";\n    }\n    let good = this.props.data[this.state.currentIndex];\n    return good ? good.name : null;\n  };\n\n  _scrollY(newY) {\n    let { currentIndex, listHeight, diff } = this.state;\n    let scrollY = newY;\n    if (newY > 0) {\n      currentIndex = 0;\n      return { currentIndex, diff, scrollY };\n    }\n    for (let i = 0; i < listHeight.length - 1; i++) {\n      let height1 = listHeight[i];\n      let height2 = listHeight[i + 1];\n      if (-newY >= height1 && -newY < height2) {\n        currentIndex = i;\n        diff = height2 + newY;\n        return { currentIndex, diff, scrollY };\n      }\n    }\n\n    currentIndex = listHeight.length - 2;\n\n    return { currentIndex, diff, scrollY };\n  }\n\n  _currentIndex() {\n    let { scrollY, listHeight } = this.state;\n    for (let i = 0; i < listHeight.length; i++) {\n      let heightStart = listHeight[i];\n      let heightEnd = listHeight[i + 1];\n      if (!heightEnd || (scrollY >= heightStart && scrollY < heightEnd)) {\n        return i;\n      }\n    }\n    return 0;\n  }\n\n  _calculateHeight() {\n    let listHeight = [];\n    if (this.listGroup) {\n      const lists = this.listGroup;\n      let height = 0;\n      listHeight.push(height);\n      for (let i = 0; i < lists.length; i++) {\n        if (lists[i]) {\n          let item = lists[i];\n          height += item.clientHeight;\n          listHeight.push(height);\n        }\n      }\n      this.setState({ listHeight });\n    }\n  }\n\n  _diff(newVal) {\n    let fixedTop =\n      newVal > 0 && newVal < this.TITLE_HEIGHT ? newVal - this.TITLE_HEIGHT : 0;\n    if (this.state.fixedTop === fixedTop) {\n      return;\n    }\n    this.setState({ fixedTop });\n    this.fixTitleref.style.transform = `translate3d(0, ${fixedTop}px, 0)`;\n  }\n\n  _scroll(posY) {\n    let { currentIndex, diff, scrollY } = this._scrollY(posY);\n    this.setState({ currentIndex, diff, scrollY }, () => {\n      this._diff(diff);\n      this.fixedTitle();\n    });\n  }\n\n  render() {\n    const { scrollY } = this.state;\n    const { data } = this.props;\n\n    return (\n      <div className={classnames("sticky-wrapper", this.props.className)}>\n        <BetterScroll\n          ref={elem => (this.bsref = elem)}\n          data={data}\n          scrollY={true}\n          scroll={pos => this._scroll(pos.y)}\n          listenScroll={true}\n        >\n          <ul className="goods">\n            {data.map((good, key) => (\n              <li\n                ref={elem => this.listGroup.push(elem)}\n                className="good-wrapper"\n                key={`good-${key}`}\n              >\n                <div className="good">\n                  <div className="good-name">\n                    <h3 className="title">{good.name}</h3>\n                  </div>\n                  <ul className="foods">\n                    {good.foods.map((food, k) => (\n                      <li className="food" key={`food-${k}`}>\n                        <div className="food-name">{food.name}</div>\n                      </li>\n                    ))}\n                  </ul>\n                </div>\n              </li>\n            ))}\n          </ul>\n          <div\n            className={classnames("fixed-title", {\n              "hide-title": scrollY > 0\n            })}\n            ref={elem => (this.fixTitleref = elem)}\n          >\n            <h3 className="title">{this.fixedTitle()}</h3>\n          </div>\n        </BetterScroll>\n      </div>\n    );\n  }\n}\n')))}d.isMDXComponent=!0}}]);