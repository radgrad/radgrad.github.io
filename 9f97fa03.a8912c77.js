(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{166:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(1),a=r(9),o=(r(0),r(188)),c={title:"Installation",sidebar_label:"Installation"},i={id:"radgrad2/developer/installation",title:"Installation",description:"First, download and install [Meteor](https://www.meteor.com/). ",source:"@site/docs\\radgrad2\\developer\\installation.md",permalink:"/docs/radgrad2/developer/installation",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"RadGrad2 Goals",permalink:"/docs/radgrad2/goals"},next:{title:"IDE Setup",permalink:"/docs/radgrad2/developer/ide"}},l=[],p={rightToc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"First, download and install ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.meteor.com/"}),"Meteor"),". "),Object(o.b)("p",null,"Second, download the RadGrad source code from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2"}),"https://github.com/radgrad/radgrad2"),"."),Object(o.b)("p",null,"Next, cd to the radgrad2/app/ directory and invoke npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"app$ npm install\n")),Object(o.b)("p",null,"This will download and install the third-party libraries required to run this system."),Object(o.b)("p",null,"To make sure the database starts from an empty state, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"app$ meteor reset\n")),Object(o.b)("p",null,"To run the system, invoke this command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"app$ meteor npm run start\n")),Object(o.b)("p",null,'This will invoke the "start" script in ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/app/package.json"}),"package.json"),", which initializes the database (if empty) with sample data.  Go to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," to confirm that the system is running:"),Object(o.b)("img",{src:"/img/radgrad2/developer/home-page.png",width:"100%"}))}d.isMDXComponent=!0},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(r),u=n,m=s["".concat(c,".").concat(u)]||s[u]||b[u]||o;return r?a.a.createElement(m,i({ref:t},p,{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);