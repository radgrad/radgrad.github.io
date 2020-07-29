(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var r=a(1),n=a(6),o=(a(0),a(173)),i={title:"RadGrad2 Evaluation",sidebar_label:"Evaluation"},d={id:"radgrad2/evaluation",title:"RadGrad2 Evaluation",description:'RadGrad2 is a reimplementation of the RadGrad system (which we\'ll refer to here as "RadGrad1"). It is intended to provide an improved design and implementation. Some of the goals are:',source:"@site/docs\\radgrad2\\evaluation.md",permalink:"/docs/radgrad2/evaluation",sidebar_label:"Evaluation",sidebar:"someSidebar",previous:{title:"RadGrad2 Goals",permalink:"/docs/radgrad2/goals"},next:{title:"Installation",permalink:"/docs/radgrad2/developer/installation"}},s=[{value:"1. The code is easier to understand.",id:"1-the-code-is-easier-to-understand",children:[]},{value:"2. The code is cleaner.",id:"2-the-code-is-cleaner",children:[]},{value:"3. Not all features of RadGrad1 are in RadGrad2.",id:"3-not-all-features-of-radgrad1-are-in-radgrad2",children:[]},{value:"4. RadGrad2 is more reliable.",id:"4-radgrad2-is-more-reliable",children:[]},{value:"5. The UI implementation is simpler.",id:"5-the-ui-implementation-is-simpler",children:[]},{value:"6. RadGrad2 is more performant.",id:"6-radgrad2-is-more-performant",children:[]},{value:"7. RadGrad2 is easy to tailor to the needs of other organizations.",id:"7-radgrad2-is-easy-to-tailor-to-the-needs-of-other-organizations",children:[]}],l={rightToc:s};function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'RadGrad2 is a reimplementation of the RadGrad system (which we\'ll refer to here as "RadGrad1"). It is intended to provide an improved design and implementation. Some of the goals are:'),Object(o.b)("h3",{id:"1-the-code-is-easier-to-understand"},"1. The code is easier to understand."),Object(o.b)("p",null,'RadGrad1 was a "spike solution" which we used to learn about the domain. As a result, we cut corners, cut-and-pasted code, and implemented other "quick and dirty" hacks.  RadGrad2 should build on the fact that we now have a better understanding of the application domain.  React and Typescript should help us to make the system easier to understand.  To assess this, we can compare the documentation associated with RadGrad2 to that associated with RadGrad1.   A big win would be to extract most system documentation automatically via a system like ESDoc that is both React and Typescript-aware.'),Object(o.b)("p",null,'We don\'t need to document every single method and function in order to make RadGrad2 easier to understand. It would be best if we could have "just enough" documentation---i.e. good high-level documentation that shows how the components work together and what design patterns we are using, along with low-level documentation in places where we want future developers to understand a subtle aspect of the implementation.'),Object(o.b)("h3",{id:"2-the-code-is-cleaner"},"2. The code is cleaner."),Object(o.b)("p",null,"In RadGrad1, there was a lot of duplicate code, and a significant number of functions with a complicated type signature."),Object(o.b)("p",null,"RadGrad2 should fix this. Duplicate code should be refactored away, and TypeScript can be used to simplify the type signature associated with functions."),Object(o.b)("h3",{id:"3-not-all-features-of-radgrad1-are-in-radgrad2"},"3. Not all features of RadGrad1 are in RadGrad2."),Object(o.b)("p",null,"Some features of RadGrad1 have become very complicated and difficult to understand and maintain, such as the Degree Planner. Other features of RadGrad1 have not been used, such as MentorSpace."),Object(o.b)("p",null,"RadGrad2 ",Object(o.b)("strong",{parentName:"p"},"should not")," reimplement everything in RadGrad1."),Object(o.b)("h3",{id:"4-radgrad2-is-more-reliable"},"4. RadGrad2 is more reliable."),Object(o.b)("p",null,"One way to assess reliability is through the absence of run-time errors in production. RadGrad1 produced thousands of run-time errors, with unknown impact on the user experience. With any luck, RadGrad2 will have little to no run-time errors."),Object(o.b)("p",null,"Another important way to improve reliability is through a carefully curated set of tests that can help developers understand how the system works and that fail when the developer violates a design pattern or otherwise implements a feature with an undesirable side-effect."),Object(o.b)("h3",{id:"5-the-ui-implementation-is-simpler"},"5. The UI implementation is simpler."),Object(o.b)("p",null,"One of the biggest design problems with RadGrad1 is the use of Blaze, which led to complicated (and sometimes duplicated) UI code."),Object(o.b)("p",null,"RadGrad2 uses React, which creates an opportunity to significantly reduce the UI code, simplify it, and make it easier to modify and extend."),Object(o.b)("h3",{id:"6-radgrad2-is-more-performant"},"6. RadGrad2 is more performant."),Object(o.b)("p",null,"RadGrad1 is slow.  Page loads for students can require 5 to 10 seconds, or potentially even more.  This does not make sense, given the relatively small amount of data required by students to display each page."),Object(o.b)("p",null,"RadGrad2 can be made more performant by the following process:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Implement a script that exercises a deployed version of the system with a realistic database. This script requires credentials to login as a student, and then performs a small set of common UI actions (displaying pages, searching for data, etc) and logs the number of seconds required.  Run the script with a single user (to assess the no-load condition), and then with (say) 50 users (to assess a moderate-load condition).  Acceptable performance is under two second page display times for both no-load and moderate-load conditions.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use Application Performance Monitoring (APM) tools such as are available with Galaxy to determine where time is spent and to determine what changes are required to the code base to provide acceptable performance. Another option is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://blog.bitsrc.io/measure-performance-with-the-new-react-profiler-component-14d3801d232d"}),"React Profiler"),"."))),Object(o.b)("h3",{id:"7-radgrad2-is-easy-to-tailor-to-the-needs-of-other-organizations"},"7. RadGrad2 is easy to tailor to the needs of other organizations."),Object(o.b)("p",null,"A major five year NSF grant now in submission proposes to use RadGrad. We can start now to structure RadGrad2 in such a way as to make it easier to tailor for this new application domain."),Object(o.b)("p",null,"In addition, we should identify places where RadGrad1 built in ICS-specific functionality (such as the Banner upload capability) and refactor the code to make it easier to replace for other organizations."))}c.isMDXComponent=!0},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),c=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d({},t,{},e)),a},u=function(e){var t=c(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(i,".").concat(h)]||u[h]||p[h]||o;return a?n.a.createElement(m,d({ref:t},l,{components:a})):n.a.createElement(m,d({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);