(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(1),n=a(6),s=(a(0),a(171)),i={title:"Pub-Sub Caching",sidebar_label:"Pub-Sub Caching"},o={id:"radgrad2/datamodel/pub-sub",title:"Pub-Sub Caching",description:'The client and server in traditional web applications communicate using a "request-response" design pattern. RadGrad is implemented using Meteor, which uses a different communication design pattern called "publish-subscribe" (often abbreviated to "pub-sub").  The basic difference between the two patterns is that with request-response, the client must always make an explicit request to "pull" data from the server, while publish-subscribe enables the server to "push" data to the client. For details on the way Meteor implements pub-sub, please see the [Meteor Guide chapter on Publications and data loading](https://guide.meteor.com/data-loading.html).',source:"@site/docs/radgrad2/datamodel/pub-sub.md",permalink:"/docs/radgrad2/datamodel/pub-sub",sidebar_label:"Pub-Sub Caching",sidebar:"someSidebar",previous:{title:"Database Dump-Restore",permalink:"/docs/radgrad2/datamodel/dump-restore"},next:{title:"Integrity Checking",permalink:"/docs/radgrad2/datamodel/integrity-checking"}},c=[{value:"Update Summer 2019",id:"update-summer-2019",children:[]}],l={rightToc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,'The client and server in traditional web applications communicate using a "request-response" design pattern. RadGrad is implemented using Meteor, which uses a different communication design pattern called "publish-subscribe" (often abbreviated to "pub-sub").  The basic difference between the two patterns is that with request-response, the client must always make an explicit request to "pull" data from the server, while publish-subscribe enables the server to "push" data to the client. For details on the way Meteor implements pub-sub, please see the ',Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://guide.meteor.com/data-loading.html"}),"Meteor Guide chapter on Publications and data loading"),"."),Object(s.b)("p",null,"The point of this section is to note that the default approach to pub-sub in Meteor is on a page-by-page loading basis. In other words, each time a client visits a page, as part of the page loading process, the client creates one or more subscriptions representing all of the data needed for that page, which the server then sends to the client.  Each time the client leaves a page, all current subscriptions are terminated and the associated data is discarded from the client."),Object(s.b)("p",null,"The advantage of the default approach is simplicity and minimization of the data held by the client at any given time. The disadvantage is that if two pages involve the exact same set of subscriptions, and the client navigates from one of these pages to the other, then the default approach results in data being sent to the client for first page, then discarded when the client leaves that page, only to have the server resend the exact same data to the client when the second page is loaded."),Object(s.b)("p",null,"Upon deploying RadGrad for the first time, we discovered that page were loading slowly and that much of this latency was due to the overhead of subscribing and unsubscribing each time the client visited a new page.  To solve this problem, RadGrad leverages the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kadirahq/subs-manager"}),"MeteorHacks SubsManager")," package, which provides the ability to cache subscription data on the client side. "),Object(s.b)("p",null,"Our implementation of subscription caching is accomplished by three global templates:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"with-global-subscriptions (",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/radgrad/radgrad/blob/master/app/imports/ui/layouts/shared/with-global-subscriptions.html"}),"html"),", ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/radgrad/radgrad/blob/master/app/imports/ui/layouts/shared/with-global-subscriptions.js"}),"js"),") creates cached subscriptions to approximately 20 RadGrad collections. These are collections that are frequently used by most users on most pages, and so it makes sense to just subscribe to them as soon as any user logs in and cache those subscriptions across all pages. "),Object(s.b)("li",{parentName:"ul"},"with-instance-subscriptions (",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/radgrad/radgrad/blob/master/app/imports/ui/layouts/shared/with-instance-subscriptions.html"}),"html"),", ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/radgrad/radgrad/blob/master/app/imports/ui/layouts/shared/with-instance-subscriptions.js"}),"js"),") creates cached subscriptions to data specific to a given user which is used across multiple pages, such as their course or opportunity instances.  "),Object(s.b)("li",{parentName:"ul"},"with-advisor-subscriptions (",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/radgrad/radgrad/blob/master/app/imports/ui/layouts/shared/with-advisor-subscriptions.html"}),"html"),", ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/radgrad/radgrad/blob/master/app/imports/ui/layouts/shared/with-advisor-subscriptions.js"}),"js"),") creates cached subscriptions for data used only by the advisor (i.e. plan choices).")),Object(s.b)("h3",{id:"update-summer-2019"},"Update Summer 2019"),Object(s.b)("p",null,"To improve performance for the Students, Faculty, Mentors, and Advisors, we are going to change the ",Object(s.b)("inlineCode",{parentName:"p"},"with-instance-subscriptions"),". We want to only get the instances for the user as defined by the route. The following is an example of doing it the right way."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"instanceSubs.subscribe(AcademicYearInstances.getPublicationName(), getUserIdFromRoute());\ninstanceSubs.subscribe(CourseInstances.getPublicationName(), getUserIdFromRoute());\ninstanceSubs.subscribe(OpportunityInstances.getPublicationName(), getUserIdFromRoute());\n")),Object(s.b)("p",null,"We pass in the userID from the route. This allows the student to subscribe to only their instances, while the advisor will only get the instances for the pages they visit. Remember advisors can view student pages."))}u.isMDXComponent=!0},171:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||s;return a?n.a.createElement(h,o({ref:t},l,{components:a})):n.a.createElement(h,o({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);