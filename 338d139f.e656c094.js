(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(6),o=(a(0),a(167)),i={title:"Database Fixtures",sidebar_label:"Database Fixtures"},s={id:"radgrad2/developer/database-fixtures",title:"Database Fixtures",description:'In RadGrad, "database fixture" (or "DB fixture") refers to a json file that contains definitions for instances of the data model. ',source:"@site/docs/radgrad2/developer/database-fixtures.md",permalink:"/docs/radgrad2/developer/database-fixtures",sidebar_label:"Database Fixtures",sidebar:"someSidebar",previous:{title:"Understanding RadGrad Academic Plans",permalink:"/docs/radgrad2/developer/building-academic-plans"},next:{title:"Continuous Integration",permalink:"/docs/radgrad2/developer/continuous-integration"}},d=[{value:"Snapshot vs. modular DB fixture files",id:"snapshot-vs-modular-db-fixture-files",children:[]}],l={rightToc:d};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'In RadGrad, "database fixture" (or "DB fixture") refers to a json file that contains definitions for instances of the data model. '),Object(o.b)("p",null,"For example, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/config/settings.development.json"}),"settings.development.json"),' contains a field named "databaseRestoreFileName" that specifies a file in the ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/tree/master/app/private"}),"app/private/")," directory."),Object(o.b)("p",null,"An example of a DB fixture file is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/app/private/database/snapshot/2020-01-24-11-37-22.json"}),"2020-01-24-11-37-22.json"),".  We use this fixture file for development purposes.  DB fixtures used for development contain simulated data for users, and generally incomplete data about courses, opportunities, and so forth."),Object(o.b)("p",null,"DB fixtures also exist for production deployments of RadGrad.  However, such fixtures contain actual student data and so are not committed to GitHub. "),Object(o.b)("p",null,"RadGrad implements a database dump mechanism to generate DB fixture files based upon the current contents of the database in a running system. The dump command is available to those who login with the administrator account.  Those files are named with a timestamp indicating when they were generated. "),Object(o.b)("h2",{id:"snapshot-vs-modular-db-fixture-files"},"Snapshot vs. modular DB fixture files"),Object(o.b)("p",null,'DB fixture files generated by the admin database dump command are "snapshots" of an entire database, and one-and-only-one of them can be loaded into a RadGrad instance. This is because RadGrad throws an error if an attempt is made to define an entity with the same name twice, and virtually all snapshot DB fixtures will contain overlapping definitions. '),Object(o.b)("p",null,'To simplify testing, RadGrad developers have hand-rolled a set of DB fixture files designed to be loaded in combination with each other. We call these "modular" DB fixture files, and they are located in ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/tree/master/app/private/database/modular"}),"private/database/modular"),".  Unlike snapshot DB fixture files, the modular DB fixture files defined in this directory do not duplicate any definitions. These files exist in order to simplify testing by allowing a test to load whatever combination of modular DB fixture files are necessary to carry out the tests.  For example, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/app/imports/api/opportunity/OpportunityCollection.methods.app-test.ts#L24"}),"OpportunityCollection.methods.app-test.ts"),' loads two modular fixture files: "minimal" and "opportunities".'))}p.isMDXComponent=!0},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},c=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=p(a),f=r,b=c["".concat(i,".").concat(f)]||c[f]||u[f]||o;return a?n.a.createElement(b,s({ref:t},l,{components:a})):n.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);