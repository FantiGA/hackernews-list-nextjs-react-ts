(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6807:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var i=t(9521),r=t(7294),c=t(9008),s=t.n(c),a=t(5893),o=(0,r.memo)(function(e){var n=e.title,t=e.keywords,i=e.description;return(0,a.jsxs)(s(),{children:[(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("title",{children:void 0===n?"HackerNews List NextJS/React TS":n}),(0,a.jsx)("meta",{name:"keywords",content:void 0===t?"NextJS, React, TypeScript, FantiGA":t}),(0,a.jsx)("meta",{name:"description",content:void 0===i?"Generated by create next app":i})]})}),u=t(6687),d=t(29),p=t(7794),l=t.n(p),f="https://hacker-news.firebaseio.com/v0/",h=function(e){return fetch(e).then(function(e){return e.json()})},m=(0,i.F4)(["0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}"]),x=i.ZP.div.withConfig({displayName:"Loading__LoadingUI",componentId:"sc-1u75kro-0"})(["animation:"," 2s linear infinite;"],m),w=function(){return(0,a.jsx)(x,{children:"Loading..."})},j=t(7650),_=i.ZP.a.withConfig({displayName:"List__Link",componentId:"sc-1prq63s-0"})(["display:flex;padding:0.5em;&:hover{background-color:#cccccc;}"]),g=function(){var e,n=(0,r.useState)([]),t=n[0],i=n[1],c=(0,r.useState)(0),s=c[0],o=c[1],p=(0,r.useState)(0),m=p[0],x=p[1],g=(0,r.useState)(!0),v=g[0],y=g[1],k=(0,j.YD)({threshold:0}),N=k.ref,S=k.inView,Z=(e=(0,d.Z)(l().mark(function e(){var n,t,i,r=arguments;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:0,t=r.length>1&&void 0!==r[1]?r[1]:100,e.next=4,h(f+"topstories.json?print=pretty");case 4:return x(Math.ceil((i=e.sent).length/t)),e.next=8,Promise.all(i.slice(t*n,t*n+t).map(function(){var e=(0,d.Z)(l().mark(function e(n){return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(f+"item/".concat(n,".json?print=pretty"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)});return(0,r.useEffect)(function(){S&&s<m&&o(s+1)},[S]),(0,r.useEffect)(function(){s<=m&&Z(s).then(function(e){if(y(!0),!e){y(!1);return}i([].concat((0,u.Z)(t),(0,u.Z)(e)))}),y(!1)},[s]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("ol",{children:t.map(function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(_,{href:e.url,target:"_blank",children:e.title})},e.id)})}),(0,a.jsx)("div",{ref:N,children:v?"":(0,a.jsx)(w,{})})]})},v=i.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-e7odc0-0"})(["display:flex;justify-content:center;align-items:center;"]),y=i.ZP.div.withConfig({displayName:"pages__Wrapper",componentId:"sc-e7odc0-1"})(["min-width:500px;max-width:1000px;"]),k=i.ZP.h1.withConfig({displayName:"pages__TitleUI",componentId:"sc-e7odc0-2"})(["line-height:4em;text-align:center;"]),N=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{}),(0,a.jsx)(v,{children:(0,a.jsxs)(y,{children:[(0,a.jsx)(k,{children:"HackerNews List React TS"}),(0,a.jsx)(g,{})]})})]})}},8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6807)}])}},function(e){e.O(0,[755,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);