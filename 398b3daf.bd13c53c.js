(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(1),n=r(6),i=(r(0),r(149)),c={title:"Understanding RadGrad Academic Plans",sidebar_label:"Academic Plans"},o={id:"radgrad2/developer/building-academic-plans",title:"Understanding RadGrad Academic Plans",description:"The University of Hawaii, Manoa's ICS Department has many different academic plans. Each year they are updated. Different academic plans have different number of courses per semester. Some of the choices students can make are complicated. For example, one of the choices is `Either ICS 312 or ICS 331 or Either ICS 313 or ICS 361 or ICS 355`.",source:"@site/docs/radgrad2/developer/building-academic-plans.md",permalink:"/docs/radgrad2/developer/building-academic-plans",sidebar_label:"Academic Plans",sidebar:"someSidebar",previous:{title:"End-to-End Testing",permalink:"/docs/radgrad2/developer/e2e-testing"},next:{title:"Database Fixtures",permalink:"/docs/radgrad2/developer/database-fixtures"}},s=[],l={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The University of Hawaii, Manoa's ICS Department has many different academic plans. Each year they are updated. Different academic plans have different number of courses per semester. Some of the choices students can make are complicated. For example, one of the choices is ",Object(i.b)("inlineCode",{parentName:"p"},"Either ICS 312 or ICS 331 or Either ICS 313 or ICS 361 or ICS 355"),"."),Object(i.b)("p",null,"To represent these and other academic plan choices we created a flexible and complicated mechanism for representing Academic Plans. The following image shows the Update Academic Plan widget in the Admin datamodel page."),Object(i.b)("img",{src:"/img/radgrad2/developer/update-academic-plan.png",width:"100%"}),Object(i.b)("p",null,"Academic plans have:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a name (the name of the academic plan),"),Object(i.b)("li",{parentName:"ul"},"a slug (a unique identifier),"),Object(i.b)("li",{parentName:"ul"},"an effective semester (the semester the plan went into affect),"),Object(i.b)("li",{parentName:"ul"},"an associated degree (the degree the plan satisfies, B.A. or B.S.),"),Object(i.b)("li",{parentName:"ul"},"a description (the description of the plan),"),Object(i.b)("li",{parentName:"ul"},"a courses per semester (a list of integers either 12 for a 4 year plan or 15 for a 5 year plan),"),Object(i.b)("li",{parentName:"ul"},"a course list (a list of the course choices),"),Object(i.b)("li",{parentName:"ul"},"and a retired flag.")),Object(i.b)("p",null,"The courses per semester list starts with the Fall semester, then Spring semester and lastly Summer semester. We support both the traditional 4 year plans and the Bachelors and Masters 5 year plan."),Object(i.b)("p",null,"The course list is where we define the course choices. Each choice ends with a dash then number (e.g.",Object(i.b)("inlineCode",{parentName:"p"},"-1"),"). The number indicates how many times the choice is in the plan. For some choices they appear multiple times in the plan. The number allows RadGrad it determine if the student has satisfied the plan. For example if the student needs to take four ICS 400+ course the choices would look like ",Object(i.b)("inlineCode",{parentName:"p"},"ics_400+-1, ics_400+-1, ics_400+-3, ics_400+-4"),"."),Object(i.b)("p",null,"There are three different types of course choices, single course, simple choice between single courses, and complex choices between simple choices."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Single Course Choice:")," The choice is just the slug for the course followed by the count ",Object(i.b)("inlineCode",{parentName:"li"},"ics_111-1"),". Take ICS 111."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Simple Choice Between Courses:")," The choice is slugs with commas between the choices ",Object(i.b)("inlineCode",{parentName:"li"},"ics_313,ics_361-1"),". Take ICS 313 or ICS 361."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Complex Choices:")," The choice wraps choices in parentheses separated by commas ",Object(i.b)("inlineCode",{parentName:"li"},"(ics_312,ics_331),(ics_313,ics_361),ics_355-1"),". Take either ICS 312 or ICS 331 or either ICS 313 or ICS 361 or take ICS 355.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Course slugs must be of the format ","<","dept",">","_","<","number",">"),Object(i.b)("p",null,"The number of choices in the choice list should be the total of all the courses per semester."))}p.isMDXComponent=!0},149:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.a.createElement(b,o({ref:t},l,{components:r})):n.a.createElement(b,o({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);