(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(160)),i={title:"Data Model Overview",sidebar_label:"Overview"},s={unversionedId:"radgrad2/datamodel/overview",id:"radgrad2/datamodel/overview",isDocsHomePage:!1,title:"Data Model Overview",description:'In RadGrad, we refer to the set of Typescript classes, each of which encapsulates a single MongoDB collection, as the "data model".',source:"@site/docs\\radgrad2\\datamodel\\overview.md",slug:"/radgrad2/datamodel/overview",permalink:"/docs/radgrad2/datamodel/overview",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"App State and Redux",permalink:"/docs/radgrad2/developer/redux"},next:{title:"Class Hierarchy",permalink:"/docs/radgrad2/datamodel/class-hierarchy"}},c=[],l={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'In RadGrad, we refer to the set of Typescript classes, each of which encapsulates a single MongoDB collection, as the "data model". '),Object(o.b)("p",null,"For example, RadGrad provides a class called ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/app/imports/api/career/CareerGoalCollection.ts"}),"CareerGoalCollection"),', which manages access to a MongoDB collection also called "CareerGoalCollection".  Upon startup, a singleton instance of the CareerGoalCollection class is instantiated and assigned to a variable called "CareerGoals". This variable is available for import into any files that need to access data from the MongoDB CareerGoalCollection collection.'),Object(o.b)("p",null,'We follow this design pattern for all the elements of the RadGrad data model: there is a Typescript class with the same name as the MongoDB collection, and we create a singleton instance of the class which is used by any clients who need to interact with that data. So, for example, the "Courses" variable is the singleton instance of the CourseCollection Typescript class which manages access to the CourseCollection MongoDB collection, the "Interests" variable is the singleton instance of the InterestCollection Typescript class which manages access to the InterestCollection MongoDB collection, and so on.'),Object(o.b)("p",null,"This may sound confusing, but it's quite straightforward in practice. Here's a sample line of code to illustrate:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"const interestType = InterestTypes.findSlugByID(doc.interestTypeID);\n")),Object(o.b)("p",null,"The variable ",Object(o.b)("inlineCode",{parentName:"p"},"InterestTypes")," is imported into this client module, and it refers to the singleton instance of the InterestTypeCollection class. (Because these singleton instances have no mutable state, there are no concurrency issues associated with them.) The method ",Object(o.b)("inlineCode",{parentName:"p"},"findSlugByID")," from this class is called with a string that (hopefully) holds the value of a document ID in the InterestTypeCollection."),Object(o.b)("p",null,"This method ends up accessing both the MongoDB InterestTypeCollection and SlugCollection collections in order to return the slug string associated with this InterestType. The point is that client code does not manipulate MongoDB collections directly; instead, they always invoke a method bound to the singleton instance of the corresponding Typescript class."),Object(o.b)("p",null,'The implementation of the data model is contained in the imports/api directory.  In some ways, it would have been more descriptive to name this directory "datamodel" rather than "api". We named it "api" in order to conform to ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://guide.meteor.com/structure.html#example-app-structure"}),"Meteor best practices for application structure"),"."),Object(o.b)("p",null,"Because every MongoDB collection is encapsulated by a Typescript class, there are two orthogonal ways to describe the structure of the data model. The Class Hierarchy structure describes the structure in terms of inheritance relationships between the Typescript classes.  The Entity-Relationship structure describes the data dependencies between the individual documents contained in MongoDB collections. The following sections in this chapter document both of these views of the data model structure."))}d.isMDXComponent=!0}}]);