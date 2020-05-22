(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||a;return r?o.a.createElement(m,c({ref:t},p,{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(6),a=(r(0),r(148)),i={title:"IDE Setup",sidebar_label:"IDE Setup"},c={id:"radgrad2/developer/ide",title:"IDE Setup",description:"For RadGrad development, we recommend [IntelliJ IDEA](https://www.jetbrains.com/idea/).  IntelliJ IDEA has excellent support for Meteor application development. \r",source:"@site/docs\\radgrad2\\developer\\ide.md",permalink:"/docs/radgrad2/developer/ide",sidebar_label:"IDE Setup",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/radgrad2/developer/installation"},next:{title:"Source Code Organization",permalink:"/docs/radgrad2/developer/source-code-organization"}},l=[],p={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For RadGrad development, we recommend ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jetbrains.com/idea/"}),"IntelliJ IDEA"),".  IntelliJ IDEA has excellent support for Meteor application development. "),Object(a.b)("p",null,"To configure IntelliJ for RadGrad development, you may want to follow the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://courses.ics.hawaii.edu/ics314f19/morea/development-environments/experience-install-intellij-idea.html"}),"ICS 314 instructions"),"."),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://courses.ics.hawaii.edu/ics314f19/morea/development-environments/ics-se-code-style.xml"}),"ics-se-code-style")," file configures IntelliJ with the coding style checked by ESLint. "))}u.isMDXComponent=!0}}]);