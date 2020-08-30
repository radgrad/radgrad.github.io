(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),a=(n(0),n(176)),i={title:"Engineering Standards",sidebar_label:"Engineering Standards"},s={id:"overview/engineering-standards",title:"Engineering Standards",description:"During its 30 years of existence, [CSDL](https://csdl.ics.hawaii.edu) has worked with many programming languages (Lisp, C++, Python, Rust, Javascript, Typescript, etc), operating systems (Solaris, Windows/NT, Linux, MacOS), hardware platforms (Unix workstations, Windows/NT workstations, Solaris servers, MacOS laptops), and too many libraries and quality assurance tools to list.",source:"@site/docs/overview/engineering-standards.md",permalink:"/docs/overview/engineering-standards",sidebar_label:"Engineering Standards",sidebar:"someSidebar",previous:{title:"Managing this site",permalink:"/docs/overview/managing-this-site"},next:{title:"Remote Pair Programming",permalink:"/docs/overview/remote-pair-programming"}},l=[],c={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"During its 30 years of existence, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://csdl.ics.hawaii.edu"}),"CSDL")," has worked with many programming languages (Lisp, C++, Python, Rust, Javascript, Typescript, etc), operating systems (Solaris, Windows/NT, Linux, MacOS), hardware platforms (Unix workstations, Windows/NT workstations, Solaris servers, MacOS laptops), and too many libraries and quality assurance tools to list."),Object(a.b)("p",null,"One thing that is clear to me from this experience: the velocity of research benefits greatly from engineering standards, in other words, standardized development tools, languages, and procedures. While students often have personal preferences, and sometimes feel like they would be more productive personally with a given tool or process, I find that having everyone use a common set of engineering standards results in greater overall progress for the following reasons:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'The learning curve is "flattened".  When a tool or technique is used by just a single person, then any problems or questions have to be addressed by that single person.  When the entire group is using a single tool or technique, then problems or questions are addressed by the group, and this is generally results in a much faster resolution.'),Object(a.b)("li",{parentName:"ul"},"Computational communication is simplified.  When everyone is using common tools and techniques, then it is easier to communicate what you are doing to others. "),Object(a.b)("li",{parentName:"ul"},'One achieves fluency faster.  The final goal for any tool or technique is for it to fade into the background. You no longer think about it much, you focus all your attention on the actual computational problem.  This is "fluency" with the technology. When everyone in the group is using the same tools or techniques, it is easier to obtain fluency because you are able to see how others are using it, and learn more advanced usages from them.')),Object(a.b)("p",null,"With that in mind, here is an initial set of engineering standards for the RadGrad project."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Communication"),". Slack and Zoom. If there is the chance of a question or answer being relevant to more than one person, then please post it to Slack so that everyone can benefit. "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"IDE."),' IntelliJ IDEA.  For the technologies to be developed in this project, IntelliJ IDEA is as good as any other, and better than most.  Please do not "cheat" and use your personal preference, thinking that "no one is going to know".  Actually, eventually you\'ll be needing to code in Zoom with someone else, and then it will become obvious. If you\'re having problems with IntelliJ, post a question and let\'s see if we can help you.'),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Language.")," Javascript preferred, or Typescript.  "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ESLint.")," All code should pass ESLint. "))}u.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,h=p["".concat(i,".").concat(g)]||p[g]||d[g]||a;return n?o.a.createElement(h,s({ref:t},c,{components:n})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);