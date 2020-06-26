(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),c=(a(0),a(167)),i={title:"Canonical Schema",sidebar_label:"Canonical Schema"},b={id:"internbit/canonical-schema",title:"Canonical Schema",description:'Each internship opportunity is represented as a JSON object. The following table provides a "canonical schema" defining the fields.',source:"@site/docs/internbit/canonical-schema.md",permalink:"/docs/internbit/canonical-schema",sidebar_label:"Canonical Schema",sidebar:"someSidebar",previous:{title:"InternBit Needs Assessment",permalink:"/docs/internbit/needs-assessment"},next:{title:"CSExplore Goals",permalink:"/docs/csexplore/goals"}},l=[],o={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,'Each internship opportunity is represented as a JSON object. The following table provides a "canonical schema" defining the fields.'),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"position"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Title of internship")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"company"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Company Name")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"location"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"{ city: String, state: String, country: String, zip: String }")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"posted"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When the internship was posted")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"due"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Due date for applying")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"start"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Start date of internship")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"end"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"End date of internship")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"compensation"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'"paid", "unpaid", "$20/hour", etc.')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"qualifications"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"What the applicant should have to apply.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"url"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Link to posting with full details")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"skills"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Strings. At some point, the set of skills should be canonicalized")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lastScraped"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Most recent discovery of this posting")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"description"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Textual description of internship")))),Object(c.b)("p",null,"All of the fields are optional. If you can't determine a value, then omit the field."),Object(c.b)("p",null,'The "Date" type indicates a string that can be passed to the Date constructor to return a Date object. Examples of possible Date strings include "2020-01-12", "December 17, 1995 03:24:00", and "1995-12-17T03:24:00".'),Object(c.b)("p",null,"Here is an example JSON object illustrating an internship opportunity using this representation:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n  "position": "Intern \u2013 Software Development/Computer Science",\n  "company": "CCAM",\n  "location": { "city": "Prince George", "state": "VA" },\n  "posted": "2020-05-01",\n  "due": "2020-08-09",\n  "url": "https://www.internships.com/app/job/sam_3487135465?context=search",\n  "qualifications": "Applicants must be U.S. citizens enrolled in an accredited school with a cumulative GPA of 3.0 or higher.",\n  "lastScraped": "2020-06-01T09:28:56.321-10:00",\n  "description": "The Software Development / Computer Science Intern will support CCAM\u2019s research programs, helping to ensure that they are delivered on time and on budget to a high standard of quality. In this position you may develop software for embedded systems, and industrial controllers, and create communication interfaces and adapters for machines and robots."\n}\n')),Object(c.b)("p",null,"Please store your JSON objects in a file following the naming convention ",Object(c.b)("inlineCode",{parentName:"p"},"[site name].canonical.data.json"),". The file contents must be in a format amenable to JSON.parse()."))}p.isMDXComponent=!0},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=p(a),O=n,m=s["".concat(i,".").concat(O)]||s[O]||d[O]||c;return a?r.a.createElement(m,b({ref:t},o,{components:a})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=O;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<c;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);