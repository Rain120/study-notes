"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[7920],{4894:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(75386),r=n(29960),c=n.n(r),u=n(59496),l=n(85818),s=n(26935),o=n(26865),m=n(3356),i=n(37590),h=n(64104);var f=function(){var e=(0,i.k6)(),t=(0,i.TH)(),n=(0,l.Z)().siteConfig.baseUrl;return{searchValue:h.default.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},p=n(20680),d=n(37191),_=n(33047),E=n(92639),g=n(57006),v=n(93423),y=n(53726);function S(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var w="searchQueryInput_cr_Z",I="searchResultItem_Dlcu",k="searchResultItemPath_Uas7",b="searchResultItemSummary_mVMa",C=n(7714);function R(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,c=t.tokens,l=t.metadata,s=0===a,o=2===a,i=(s?n.b:r.b).slice(),h=o?n.s:n.t;return s||i.push(r.t),u.createElement("article",{className:I},u.createElement("h2",null,u.createElement(m.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:o?(0,_.C)(h,c):(0,E.o)(h,(0,g.m)(l,"t"),c,100)}})),i.length>0&&u.createElement("p",{className:k},(0,C.e)(i)),o&&u.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,E.o)(n.t,(0,g.m)(l,"t"),c,100)}}))}var Z=function(){var e=(0,l.Z)().siteConfig.baseUrl,t=f(),n=t.searchValue,r=t.updateSearchPath,m=(0,u.useState)(n),i=m[0],h=m[1],_=(0,u.useState)(),E=_[0],g=_[1],I=(0,u.useState)(),k=I[0],b=I[1],C=(0,u.useMemo)((function(){return i?S(y.Iz.search_results_for,{keyword:i}):y.Iz.search_the_documentation}),[i]);(0,u.useEffect)((function(){r(i),E&&(i?E(i,(function(e){b(e)})):b(void 0))}),[i,E]);var Z=(0,u.useCallback)((function(e){h(e.target.value)}),[]);return(0,u.useEffect)((function(){n&&n!==i&&h(n)}),[n]),(0,u.useEffect)((function(){function t(){return(t=(0,a.Z)(c().mark((function t(){var n,a,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.w)(e);case 2:n=t.sent,a=n.wrappedIndexes,r=n.zhDictionary,g((function(){return(0,d.v)(a,r,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),u.createElement(s.Z,null,u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"}),u.createElement("title",null,C)),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,C),u.createElement("input",{type:"search",name:"q",className:w,"aria-label":"Search",onChange:Z,value:i,autoComplete:"off",autoFocus:!0}),!E&&i&&u.createElement("div",null,u.createElement(v.Z,null)),k&&(k.length>0?u.createElement("p",null,S(1===k.length?y.Iz.count_documents_found:y.Iz.count_documents_found_plural,{count:k.length})):u.createElement("p",null,y.Iz.no_documents_were_found)),u.createElement("section",null,k&&k.map((function(e){return u.createElement(R,{key:e.document.i,searchResult:e})})))))}}}]);