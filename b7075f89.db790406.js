(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(204)),i={title:"Coding Standards",sidebar_label:"Coding Standards"},c={id:"radgrad2/developer/coding-standards",title:"Coding Standards",description:"## ESLint",source:"@site/docs/radgrad2/developer/coding-standards.md",permalink:"/docs/radgrad2/developer/coding-standards",sidebar_label:"Coding Standards",sidebar:"someSidebar",previous:{title:"Source Code Organization",permalink:"/docs/radgrad2/developer/source-code-organization"},next:{title:"Testing",permalink:"/docs/radgrad2/developer/testing"}},l=[{value:"ESLint",id:"eslint",children:[]},{value:"Naming conventions",id:"naming-conventions",children:[]},{value:"JSDoc/TSDoc conventions",id:"jsdoctsdoc-conventions",children:[]},{value:"Testing conventions",id:"testing-conventions",children:[]},{value:"Import paths",id:"import-paths",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"eslint"},"ESLint"),Object(a.b)("p",null,"We aspire to conform to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://airbnb.io/javascript/"}),"AirBnB ES6 Javascript Style Guide"),", and use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://eslint.org/"}),"ESLint")," to enforce compliance as much as possible with these recommendations. "),Object(a.b)("p",null,"You can run ESLint configured for AirBnB and Meteor from the command line as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"app$ meteor npm run lint\n")),Object(a.b)("p",null,"During active development, however, a much better way to enforce ESLint guidelines is to install ESLint into your editor.\nThe ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://courses.ics.hawaii.edu/ics314f19/morea/coding-standards/experience-install-eslint.html"}),"ICS 314 instructions on ESLint in IntelliJ")," provides detailed instructions on run ESLint in IntelliJ."),Object(a.b)("h2",{id:"naming-conventions"},"Naming conventions"),Object(a.b)("p",null,"Directories are all lowercase, hyphens separate words. For example, ",Object(a.b)("inlineCode",{parentName:"p"},"degree-program"),"."),Object(a.b)("p",null,"Javascript classes are named in camel-case. For example, ",Object(a.b)("inlineCode",{parentName:"p"},"DegreeProgram"),"."),Object(a.b)("p",null,"Meteor methods should be placed in their own file, typically in a directory containing the definition of the Collection that they operate on.  They should be named with the extension ",Object(a.b)("inlineCode",{parentName:"p"},"methods.js"),"."),Object(a.b)("h2",{id:"jsdoctsdoc-conventions"},"JSDoc/TSDoc conventions"),Object(a.b)("p",null,"TBD."),Object(a.b)("h2",{id:"testing-conventions"},"Testing conventions"),Object(a.b)("p",null,"All complex functions should have an associated unit test. "),Object(a.b)("p",null,"Complex tests may need a DB fixture to be loaded in order to set up the DB state correctly."),Object(a.b)("p",null,"Methods should have integration tests to ensure that client-server communication works properly. "),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./developer-guide-testing"}),"Testing section")," for more details."),Object(a.b)("h2",{id:"import-paths"},"Import paths"),Object(a.b)("p",null,"There are two ways to specify import paths: absolute and relative."),Object(a.b)("p",null,"Absolute:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"import BaseInstanceCollection from '/imports/api/base/BaseInstanceCollection';\n")),Object(a.b)("p",null,"Relative:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"import BaseInstanceCollection from '../base/BaseInstanceCollection';\n")),Object(a.b)("p",null,"Please use relative paths, because IntelliJ can perform completion and refactoring on relative paths but not absolute paths."))}p.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);