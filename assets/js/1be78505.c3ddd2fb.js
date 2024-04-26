"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[9514,7246],{26732:function(e,t,n){n.r(t),n.d(t,{default:function(){return Te}});var a=n(59496),r=n(45924),l=n(6896),o=n(83869),i=n(54027),c=n(93538),s=n(15449),d=n(62117),u=n(65343),m=n(66274),p=n(47415),b=n(57608);var f="backToTopButton_GvgC",h="backToTopButtonShow_dtbT";function v(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:l,cancelScroll:o}=(0,p.Ct)();return(0,p.RF)((({scrollY:t},a)=>{const l=null==a?void 0:a.scrollY;l&&(r.current?r.current=!1:t>=l?(o(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,b.S)((e=>{e.location.hash&&(r.current=!0,n(!1))})),{shown:t,scrollToTop:()=>l(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,f,e&&h),type:"button",onClick:t})}var g=n(43226),E=n(57759),y=n(47643),k=n(55581);function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function C(e){return a.createElement("svg",_({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var O="collapseSidebarButton_avXB",S="collapseSidebarButtonIcon_P1s_";function I({onClick:e}){return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",O),onClick:e},a.createElement(C,{className:S}))}var N=n(72676),x=n(97313);const w=Symbol("EmptyContext"),P=a.createContext(w);function T({children:e}){const[t,n]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return a.createElement(P.Provider,{value:r},e)}var Z=n(62458),j=n(16354),L=n(11596),F=n(65198);function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(this,arguments)}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function B({categoryLabel:e,onClick:t}){return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function H(e){var{item:t,onItemClick:n,activePath:l,level:c,index:s}=e,d=A(e,["item","onItemClick","activePath","level","index"]);const{items:u,label:m,collapsible:p,className:b,href:f}=t,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,y.L)(),v=function(e){const t=(0,F.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,l),E=(0,j.Mg)(f,l),{collapsed:k,setCollapsed:_}=(0,Z.u)({initialState:()=>!!p&&(!g&&t.collapsed)}),{expandedItem:C,setExpandedItem:O}=function(){const e=(0,a.useContext)(P);if(e===w)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),S=(e=!k)=>{O(e?null:s),_(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const r=(0,x.D9)(e);(0,a.useEffect)((()=>{e&&!r&&t&&n(!1)}),[e,r,t,n])}({isActive:g,collapsed:k,updateCollapsed:S}),(0,a.useEffect)((()=>{p&&C&&C!==s&&h&&_(!0)}),[p,C,s,_,h]),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},b)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":E})},a.createElement(L.Z,M({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!f&&p,"menu__link--active":g}),onClick:p?e=>{null==n||n(t),f?S(!1):(e.preventDefault(),S())}:()=>{null==n||n(t)},"aria-current":E?"page":void 0,"aria-expanded":p?!k:void 0,href:p?null!=v?v:"#":v},d),m),f&&p&&a.createElement(B,{categoryLabel:m,onClick:e=>{e.preventDefault(),S()}})),a.createElement(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(ee,{items:u,tabIndex:k?-1:0,onItemClick:n,activePath:l,level:c+1})))}var W=n(5345),D=n(18875),R="menuExternalLink_F93q";function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},z.apply(this,arguments)}function V(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Y(e){var{item:t,onItemClick:n,activePath:l,level:c,index:s}=e,d=V(e,["item","onItemClick","activePath","level","index"]);const{href:u,label:m,className:p}=t,b=(0,i._F)(t,l),f=(0,W.Z)(u);return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",p),key:m},a.createElement(L.Z,z({className:(0,r.Z)("menu__link",!f&&R,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:u},f&&{onClick:n?()=>n(t):void 0},d),m,!f&&a.createElement(D.Z,null)))}var q="menuHtmlItem_LBNT";function K({item:e,level:t,index:n}){const{value:l,defaultStyle:i,className:c}=e;return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(t),i&&[q,"menu__list-item"],c),key:n,dangerouslySetInnerHTML:{__html:l}})}function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},U.apply(this,arguments)}function X(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function G(e){var{item:t}=e,n=X(e,["item"]);switch(t.type){case"category":return a.createElement(H,U({item:t},n));case"html":return a.createElement(K,U({item:t},n));default:return a.createElement(Y,U({item:t},n))}}function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Q.apply(this,arguments)}function J(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function $(e){var{items:t}=e,n=J(e,["items"]);return a.createElement(T,null,t.map(((e,t)=>a.createElement(G,Q({key:t,item:e,index:t},n)))))}var ee=(0,a.memo)($),te="menu_XezY",ne="menuWithAnnouncementBar_PwQt";function ae({path:e,sidebar:t,className:n}){const l=function(){const{isActive:e}=(0,N.nT)(),[t,n]=(0,a.useState)(e);return(0,p.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",te,l&&ne,n)},a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(ee,{items:t,activePath:e,level:1})))}var re="sidebar_emt2",le="sidebarWithHideableNavbar_df40",oe="sidebarHidden_XrLw",ie="sidebarLogo_VIlD";function ce({path:e,sidebar:t,onCollapse:n,isHidden:l}){const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:i}}}=(0,y.L)();return a.createElement("div",{className:(0,r.Z)(re,o&&le,l&&oe)},o&&a.createElement(k.Z,{tabIndex:-1,className:ie}),a.createElement(ae,{path:e,sidebar:t}),i&&a.createElement(I,{onClick:n}))}var se=a.memo(ce),de=n(22656),ue=n(70263);const me=({sidebar:e,path:t})=>{const n=(0,ue.e)();return a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(ee,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function pe(e){return a.createElement(de.Zo,{component:me,props:e})}var be=a.memo(pe);function fe(){return fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},fe.apply(this,arguments)}function he(e){const t=(0,E.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(se,fe({},e)),r&&a.createElement(be,fe({},e)))}var ve="expandButton_SUWg",ge="expandButtonIcon_FS5i";function Ee({toggleSidebar:e}){return a.createElement("div",{className:ve,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},a.createElement(C,{className:ge}))}var ye="docSidebarContainer_j7Kr",ke="docSidebarContainerHidden_m9Sr";function _e({children:e}){const t=(0,d.V)();var n;return a.createElement(a.Fragment,{key:null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"noSidebar"},e)}function Ce({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:l}=(0,g.TH)(),[i,c]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{i&&c(!1),n((e=>!e))}),[n,i]);return a.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,ye,t&&ke),onTransitionEnd:e=>{e.currentTarget.classList.contains(ye)&&t&&c(!0)}},a.createElement(_e,null,a.createElement(he,{sidebar:e,path:l,onCollapse:s,isHidden:i})),i&&a.createElement(Ee,{toggleSidebar:s}))}var Oe={docMainContainer:"docMainContainer_Md9r",docMainContainerEnhanced:"docMainContainerEnhanced_lMoU",docItemWrapperEnhanced:"docItemWrapperEnhanced_mdKk"};function Se({hiddenSidebarContainer:e,children:t}){const n=(0,d.V)();return a.createElement("main",{className:(0,r.Z)(Oe.docMainContainer,(e||!n)&&Oe.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",Oe.docItemWrapper,e&&Oe.docItemWrapperEnhanced)},t))}var Ie="docPage_ZdCa",Ne="docsWrapper_FYTE";function xe({children:e}){const t=(0,d.V)(),[n,r]=(0,a.useState)(!1);return a.createElement(u.Z,{wrapperClassName:Ne},a.createElement(v,null),a.createElement("div",{className:Ie},t&&a.createElement(Ce,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}),a.createElement(Se,{hiddenSidebarContainer:n},e)))}var we=n(47246),Pe=n(39155);function Te(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(we.default,null);const{docElement:u,sidebarName:m,sidebarItems:p}=n;return a.createElement(a.Fragment,null,a.createElement(Pe.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:p},a.createElement(xe,null,u)))))}},47246:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(59496),r=n(66274),l=n(6896),o=n(65343);function i(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},15449:function(e,t,n){n.d(t,{E:function(){return i},q:function(){return o}});var a=n(59496),r=n(97313);const l=a.createContext(null);function o({children:e,version:t}){return a.createElement(l.Provider,{value:t},e)}function i(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);