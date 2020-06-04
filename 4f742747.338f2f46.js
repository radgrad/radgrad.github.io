(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(6),o=(a(0),a(157)),i={title:"Data Model Overview",sidebar_label:"Overview"},s={id:"radgrad2/datamodel/overview",title:"Data Model Overview",description:'In RadGrad, we refer to the set of Javascript classes, each of which encapsulates a single MongoDB collection, as the "data model". \r',source:"@site/docs\\radgrad2\\datamodel\\overview.md",permalink:"/docs/radgrad2/datamodel/overview",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Organization of radgrad.org",permalink:"/docs/radgrad2/developer/radgrad.org"},next:{title:"Class Hierarchy",permalink:"/docs/radgrad2/datamodel/class-hierarchy"}},c=[],l={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'In RadGrad, we refer to the set of Javascript classes, each of which encapsulates a single MongoDB collection, as the "data model". '),Object(o.b)("p",null,"For example, RadGrad provides a class called ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/app/imports/api/career/CareerGoalCollection.ts"}),"CareerGoalCollection"),', which manages access to a MongoDB collection also called "CareerGoalCollection".  Upon startup, a singleton instance of the CareerGoalCollection class is instantiated and assigned to a variable called "CareerGoals". This variable is available for import into any files that need to access data from the MongoDB CareerGoalCollection collection.'),Object(o.b)("p",null,'We follow this design pattern for all the elements of the RadGrad data model: there is a Javascript class with the same name as the MongoDB collection, and we create a singleton instance of the class which is used by any clients who need to interact with that data. So, for example, the "Courses" variable is the singleton instance of the CourseCollection Javascript class which manages access to the CourseCollection MongoDB collection, the "Interests" variable is the singleton instance of the InterestCollection Javascript class which manages access to the InterestCollection MongoDB collection, and so on.'),Object(o.b)("p",null,"This may sound confusing, but it's quite straightforward in practice. Here's a sample line of code to illustrate:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"const interestType = InterestTypes.findSlugByID(doc.interestTypeID);\n")),Object(o.b)("p",null,"The variable ",Object(o.b)("inlineCode",{parentName:"p"},"InterestTypes")," is imported into this client module, and it refers to the singleton instance of the InterestTypeCollection class. (Because these singleton instances have no mutable state, there are no concurrency issues associated with them.) The method ",Object(o.b)("inlineCode",{parentName:"p"},"findSlugByID")," from this class is called with a string that (hopefully) holds the value of a document ID in the InterestTypeCollection."),Object(o.b)("p",null,"This method ends up accessing both the MongoDB InterestTypeCollection and SlugCollection collections in order to return the slug string associated with this InterestType. The point is that client code does not manipulate MongoDB collections directly; instead, they always invoke a method bound to the singleton instance of the corresponding Javascript class."),Object(o.b)("p",null,'The implementation of the data model is contained in the imports/api directory.  In some ways, it would have been more descriptive to name this directory "datamodel" rather than "api". We named it "api" in order to conform to ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://guide.meteor.com/structure.html#example-app-structure"}),"Meteor best practices for application structure"),"."),Object(o.b)("p",null,"Because every MongoDB collection is encapsulated by a Javascript class, there are two orthogonal ways to describe the structure of the data model. The Class Hierarchy structure describes the structure in terms of inheritance relationships between the Javascript classes.  The Entity-Relationship structure describes the data dependencies between the individual documents contained in MongoDB collections. The following sections in this chapter document both of these views of the data model structure."))}d.isMDXComponent=!0},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,b=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return a?r.a.createElement(b,s({ref:t},l,{components:a})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);