"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[3085],{19017:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(59496),l=t(45924),a=t(19564),o=t(13777),c=t(782),i=t(18160),s=t(38212),u="mdxPageWrapper_DPAa";function m(e){const{content:n}=e,{metadata:{title:t,description:m,frontMatter:f}}=n,{wrapperClassName:d,hide_table_of_contents:v}=f;return r.createElement(a.FG,{className:(0,l.Z)(null!=d?d:o.k.wrapper.mdxPages,o.k.page.mdxPage)},r.createElement(a.d,{title:t,description:m}),r.createElement(c.Z,null,r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,l.Z)("row",u)},r.createElement("div",{className:(0,l.Z)("col",!v&&"col--8")},r.createElement("article",null,r.createElement(i.Z,null,r.createElement(n,null)))),!v&&n.toc.length>0&&r.createElement("div",{className:"col col--2"},r.createElement(s.Z,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level}))))))}},38212:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(59496),l=t(45924),a=t(61901),o="tableOfContents_rCjo";function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}function s(e){var{className:n}=e,t=i(e,["className"]);return r.createElement("div",{className:(0,l.Z)(o,"thin-scrollbar",n)},r.createElement(a.Z,c({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},61901:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(59496),l=t(76650);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}function c(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}function s(e){const n=e.map((e=>c(o({},e),{parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t}=e,l=i(e,["parentIndex"]);t>=0?n[t].children.push(l):r.push(l)})),r}function u({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return e.flatMap((e=>{const r=u({toc:e.children,minHeadingLevel:n,maxHeadingLevel:t});return function(e){return e.level>=n&&e.level<=t}(e)?[c(o({},e),{children:r})]:r}))}function m(e){const n=e.getBoundingClientRect();return n.top===n.bottom?m(e.parentNode):n}function f(e,{anchorTopOffset:n}){const t=e.find((e=>m(e).top>=n));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(t))?t:null!==(r=e[e.indexOf(t)-1])&&void 0!==r?r:null;var r}var l;return null!==(l=e[e.length-1])&&void 0!==l?l:null}function d(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function v(e){const n=(0,r.useRef)(void 0),t=d();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:l,minHeadingLevel:a,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function({minHeadingLevel:e,maxHeadingLevel:n}){const t=[];for(let r=e;r<=n;r+=1)t.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),i=f(c,{anchorTopOffset:t.current}),s=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function p({toc:e,className:n,linkClassName:t,isChild:l}){return e.length?r.createElement("ul",{className:l?void 0:n},e.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(p,{isChild:!0,toc:e.children,className:n,linkClassName:t}))))):null}var g=r.memo(p);function b(){return b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},b.apply(this,arguments)}function O(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}function y(e){var{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:i}=e,m=O(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const f=(0,l.L)(),d=null!=c?c:f.tableOfContents.minHeadingLevel,p=null!=i?i:f.tableOfContents.maxHeadingLevel,y=function({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,r.useMemo)((()=>u({toc:s(e),minHeadingLevel:n,maxHeadingLevel:t})),[e,n,t])}({toc:n,minHeadingLevel:d,maxHeadingLevel:p});return v((0,r.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:p}}),[a,o,d,p])),r.createElement(g,b({toc:y,className:t,linkClassName:a},m))}}}]);