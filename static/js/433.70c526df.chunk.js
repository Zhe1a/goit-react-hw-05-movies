"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[433],{884:function(e,t,n){n.d(t,{Gv:function(){return o},Mj:function(){return s},OP:function(){return a},_k:function(){return c},cl:function(){return u}});var r=n(44);r.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i="35dff1a8139e3844887023acb43de4ac",a=function(){return r.ZP.get("trending/movie/day?api_key=".concat(i)).then((function(e){return e.data}))},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.ZP.get("search/movie",{params:{api_key:i,language:"en-US",query:e,page:t,include_adult:"false"}}).then((function(e){return e.data}))},o=function(e){return r.ZP.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US")).then((function(e){return e.data}))},u=function(e){return r.ZP.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US")).then((function(e){return e.data}))},s=function(e){return r.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(e){return e.data}))}},433:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(885),i=n(884),a={box:"Home_box__FvYh+",title_trending:"Home_title_trending__it0Z5",title_error:"Home_title_error__AtN79"},c=n(839),o=n(791),u=n(184),s=function(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],l=(0,o.useState)(),d=(0,r.Z)(l,2),f=d[0],_=d[1];return(0,o.useEffect)((function(){(0,i.OP)().then((function(e){var t=e.results;s(t)})).catch((function(e){return _(e.message)}))}),[f]),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:a.box,children:(0,u.jsx)("h1",{className:a.title_trending,children:"Trending Today"})}),n.length>0?(0,u.jsx)("ul",{children:n.map((function(e){var t=e.title,n=e.id,r=e.backdrop_path,i=e.name;return(0,u.jsx)(c.Z,{id:n,title:t,posterPath:r,name:i},n)}))}):(0,u.jsx)("h1",{className:a.titel_error,children:f})]})}},839:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(689),i=n(731),a="ListMovies_list__wHv7e",c="ListMovies_link__6Po9j",o=n(184),u=function(e){var t=e.title,n=e.name,u=e.id,s=(0,r.s0)(),l=(0,r.TH)();return(0,o.jsx)("li",{className:a,children:(0,o.jsx)(i.rU,{to:"/movies/".concat(u),state:{from:l},onClick:function(){s(u)},children:(0,o.jsxs)("p",{className:c,children:[" ",null!==t&&void 0!==t?t:n]})})})}}}]);
//# sourceMappingURL=433.70c526df.chunk.js.map