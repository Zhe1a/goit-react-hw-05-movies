"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[790],{884:function(t,e,n){n.d(e,{Gv:function(){return u},Mj:function(){return o},OP:function(){return r},_k:function(){return i},cl:function(){return s}});var a=n(44);a.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var c="35dff1a8139e3844887023acb43de4ac",r=function(){return a.ZP.get("trending/movie/day?api_key=".concat(c)).then((function(t){return t.data}))},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.ZP.get("search/movie",{params:{api_key:c,language:"en-US",query:t,page:e,include_adult:"false"}}).then((function(t){return t.data}))},u=function(t){return a.ZP.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US")).then((function(t){return t.data}))},s=function(t){return a.ZP.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US")).then((function(t){return t.data}))},o=function(t){return a.ZP.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(t){return t.data}))}},790:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var a=n(885),c=n(884),r=n(791),i=n(689),u={castList:"MoviesCast_castList__RBE47",castItem:"MoviesCast_castItem__QbSvJ"},s=n(184),o=function(){var t=(0,i.UO)().movieId,e=(0,r.useState)([]),n=(0,a.Z)(e,2),o=n[0],f=n[1],d=(0,r.useState)(),l=(0,a.Z)(d,2),g=l[0],h=l[1],m=(0,r.useState)(!1),v=(0,a.Z)(m,2),_=v[0],p=v[1];return(0,r.useEffect)((function(){p(!0),(0,c.cl)(t).then((function(t){var e=t.cast;f(e)})).catch((function(t){return h(t.message)})).finally((function(){return p(!1)}))}),[t]),(0,s.jsxs)(s.Fragment,{children:[_&&"Loading...",g&&(0,s.jsx)("div",{children:g}),(0,s.jsx)("ul",{className:u.castList,children:o.map((function(t){return(0,s.jsxs)("li",{className:u.castItem,children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t.profile_path),alt:"".concat(t.name," portrait"),className:u.img}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["Name: ",t.name]}),(0,s.jsxs)("p",{children:["Character: ",t.character]})]})]},t.id)}))})]})}}}]);
//# sourceMappingURL=790.628262cf.chunk.js.map