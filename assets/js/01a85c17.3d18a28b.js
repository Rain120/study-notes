"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[4013],{20895:function(e,t,n){n.d(t,{dK:function(){return a},_k:function(){return r},vc:function(){return l},rx:function(){return c},qo:function(){return s},Hk:function(){return i},Iz:function(){return o}});n(31336);var a=["en"],r=!1,l=null,c="e38b6186",s=8,i=50,o={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},78665:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(63366),r=n(67294),l=n(86010),c=n(54814),s=n(39960),i="sidebar_q+wC",o="sidebarItemTitle_9G5K",u="sidebarItemList_6T4b",m="sidebarItem_cjdF",d="sidebarItemLink_zyXk",f="sidebarItemLinkActive_wcJs",g=n(95999);function _(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:u},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:m},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var b=["sidebar","toc","children"];var v=function(e){var t=e.sidebar,n=e.toc,s=e.children,i=(0,a.Z)(e,b),o=t&&t.items.length>0;return r.createElement(c.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(_,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),n&&r.createElement("div",{className:"col col--2"},n))))}},40497:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(67294),r=n(78665),l=n(7774),c=n(32822),s="tag_7kA+";function i(e){var t=e.letterEntry;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return a.createElement("li",{key:e.permalink,className:s},a.createElement(l.Z,e))}))),a.createElement("hr",null))}var o=function(e){var t=e.tags,n=(0,c.PZ)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return a.createElement(i,{key:e.letter,letterEntry:e})})))};var u=function(e){var t=e.tags,n=e.sidebar,l=(0,c.MA)();return a.createElement(r.Z,{title:l,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,l),a.createElement(o,{tags:Object.values(t)}))}},7774:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l=n(39960),c="tag_WK-t",s="tagRegular_LXbV",i="tagWithCount_S5Zl";var o=function(e){var t,n=e.permalink,o=e.name,u=e.count;return a.createElement(l.Z,{href:n,className:(0,r.Z)(c,(t={},t[s]=!u,t[i]=u,t))},o,u&&a.createElement("span",null,u))}}}]);