(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(6),o=(n(0),n(145)),i={title:"Admin Data Model UI",sidebar_label:"Admin Data Model UI"},p={id:"radgrad2/developer/developer-guide-admin-datamodel-ui",title:"Admin Data Model UI",description:"There are several steps involved in adding a new DataModel item to the admin interface. These steps can be done in any order, but you may want to slowly build up the page and test it as you are adding the new DataModel item.",source:"@site/docs/radgrad2/developer/developer-guide-admin-datamodel-ui.md",permalink:"/docs/radgrad2/developer/developer-guide-admin-datamodel-ui",sidebar_label:"Admin Data Model UI"},l=[],d={rightToc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are several steps involved in adding a new DataModel item to the admin interface. These steps can be done in any order, but you may want to slowly build up the page and test it as you are adding the new DataModel item."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a new admin DataModel route in ",Object(o.b)("inlineCode",{parentName:"p"},"app/imports/startup/client/router.js")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Export the name of your new route. For this example we are adding the UI for MentorAnswers. "),Object(o.b)("p",{parentName:"li"},"   export const adminDataModelMentorAnswersPageRouteName = 'Admin_DataModel_Mentor_Answers_Page';")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add the route to the FlowRouter admin route group."),Object(o.b)("p",{parentName:"li"},"   adminRoutes.route('/datamodel/mentor-answers', {\nname: adminDataModelMentorAnswersPageRouteName,\naction() {\nBlazeLayout.render('Admin_Layout', { main: adminDataModelMentorAnswersPageRouteName });\n},\n});")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Update ",Object(o.b)("inlineCode",{parentName:"p"},"app/imports/ui/components/admin/admin-datamodel-menu.html")," to include a link to the DataModel Blaze Template page."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'   <a class="{{isActiveRoute mentorAnswerRouteName}} item" href="{{pathFor mentorAnswerRouteName username=routeUserName}}">Mentor Answers</a>\n')))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Update ",Object(o.b)("inlineCode",{parentName:"p"},"app/imports/ui/components/admin/admin-datamodel-menu.js")," helper to include a helper for the new route."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"   mentorAnswerRouteName() {\n     return RouteNames.adminDataModelMentorAnswersPageRouteName;\n   },\n")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create the DataModel Blaze Template page in ",Object(o.b)("inlineCode",{parentName:"p"},"app/inports/ui/pages/admin"),". The name of the page must be the same as the exported page route name. In this example, ",Object(o.b)("inlineCode",{parentName:"p"},"Admin_DataModel_Mentor_Answers_Page"),".  "),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"Admin_DataModel_Mentor_Answers_Page.html")," will look something like:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),' <template name="Admin_DataModel_Mentor_Answers_Page">\n \n   {{#if Template.subscriptionsReady}}\n     {{#Admin_DataModel_Layout}}\n       {{#if displayUpdateWidget}}\n         {{> Update_Mentor_Answer_Widget updateID=updateID}}\n       {{else}}\n         {{> Add_Mentor_Answer_Widget }}\n       {{/if}}\n       {{> List_Mentor_Answers_Widget updateID=updateID}}\n     {{/Admin_DataModel_Layout}}\n   {{else}}\n     {{> Loading message="Waiting for subscriptions."}}\n   {{/if}}\n \n </template>\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"Admin_DataModel_Mentor_Answers_Page.js")," will look something like:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{})," import { Template } from 'meteor/templating';\n import { ReactiveVar } from 'meteor/reactive-var';\n \n Template.Admin_DataModel_Mentor_Answers_Page.helpers({\n   updateID() {\n     return Template.instance().updateID;\n   },\n   displayUpdateWidget() {\n     return Template.instance().updateID.get();\n   },\n });\n \n Template.Admin_DataModel_Mentor_Answers_Page.onCreated(function adminDatamodelMentorAnswerPageOnCreated() {\n   this.updateID = new ReactiveVar('');\n });\n")))))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create the List_Mentor_Answer_Widget in ",Object(o.b)("inlineCode",{parentName:"p"},"app/imports/ui/components/admin"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create the Add_Mentor_Answer_Widget in ",Object(o.b)("inlineCode",{parentName:"p"},"app/imports/ui/components/admin"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create the Update_Mentor_Answer_Widget in ",Object(o.b)("inlineCode",{parentName:"p"},"app/imports/ui/components/admin"),"."))))}m.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),m=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},c=function(e){var t=m(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(n),s=a,b=c["".concat(i,".").concat(s)]||c[s]||u[s]||o;return n?r.a.createElement(b,p({ref:t},d,{components:n})):r.a.createElement(b,p({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);