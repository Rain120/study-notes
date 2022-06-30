"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8466],{20821:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(13010),n=a(59496),l=a(51626),i=a(71746),o=a(5407),s=a(38597),m=a(83023),c="sidebar_EYZN",u="sidebarItemTitle_xfMS",d="sidebarItemList_Dalt",g="sidebarItem_LCFR",p="sidebarItemLink_Pbph",h="sidebarItemLinkActive_tT82";function v(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:h},e.title))})))))}var E=a(19400);function b(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function f(e){return n.createElement(E.Zo,{component:b,props:e})}function _(e){var t=e.sidebar,a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(f,{sidebar:t}):n.createElement(v,{sidebar:t}):null}var N=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,N),m=t&&t.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(_,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},19817:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(59496),n=a(83023),l=a(68364);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},10757:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(59496),n=a(51626),l=a(83023),i=a(38597),o=a(8619),s=a(31338),m=a(5097),c=a(23916),u=a(88607),d=a(80205);function g(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function p(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,o=t.email,s=l||o&&"mailto:"+o||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(g,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(g,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var h="authorCol_CBNW",v="imageOnlyAuthorRow_puvE",E="imageOnlyAuthorCol_IRR2";function b(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?v:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?E:h),key:t},r.createElement(p,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var f="blogPostTitle_ESgG",_="blogPostData_aQKm",N="blogPostDetailsFull_IO_p";function Z(e){var t,a,g=(a=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,o.C)().withBaseUrl,h=e.children,v=e.frontMatter,E=e.assets,Z=e.metadata,k=e.truncated,P=e.isBlogPostPage,T=void 0!==P&&P,w=Z.date,y=Z.formattedDate,I=Z.permalink,x=Z.tags,L=Z.readingTime,R=Z.title,C=Z.editUrl,F=Z.authors,M=null!=(t=E.image)?t:v.image,A=!T&&k,U=x.length>0,B=T?"h1":"h2";return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(B,{className:f,itemProp:"headline"},T?R:r.createElement(i.Z,{itemProp:"url",to:I},R)),r.createElement("div",{className:(0,n.Z)(_,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},y),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",g(L))),r.createElement(b,{authors:F,assets:E})),M&&r.createElement("meta",{itemProp:"image",content:p(M,{absolute:!0})}),r.createElement("div",{id:T?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,h)),(U||k)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",T&&N)},U&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":A})},r.createElement(d.Z,{tags:x})),T&&C&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:C})),A&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":U})},r.createElement(i.Z,{to:Z.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:R})},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},88607:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(59496),n=a(83023),l=a(8729),i=a(45443),o=a(13010),s=a(51626),m="iconEdit_y7Gm",c=["className"];function u(e){var t=e.className,a=(0,o.Z)(e,c);return r.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},r.createElement(u,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},68364:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(59496),n=a(51626),l=a(38597);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,o=e.isNext;return r.createElement(l.Z,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&r.createElement("div",{className:"pagination-nav__sublabel"},i),r.createElement("div",{className:"pagination-nav__label"},a))}},39546:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(59496),n=a(51626),l=a(38597),i="tag_nM3X",o="tagRegular_bdLo",s="tagWithCount_Ot1j";function m(e){var t=e.permalink,a=e.label,m=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(i,m?s:o)},a,m&&r.createElement("span",null,m))}},80205:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(59496),n=a(51626),l=a(83023),i=a(39546),o="tags_UCMx",s="tag_Nxvc";function m(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:s},r.createElement(i.Z,{label:t,permalink:a}))}))))}},31338:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(59496),n=a(46589),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function m(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}}}]);