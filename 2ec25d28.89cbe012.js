(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},199:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Mongo1-502965534594222f8e4ed1bbaa91af2a.png"},200:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Mongo2-6c58581c9dd8917cb0ae9d2ca345bf26.png"},201:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Mongo3-96e5538618ebe07d96b4bbf6ce945dd5.png"},202:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Mongo4-532626bdc0f1c22c5e5f0e26491d3312.png"},203:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Mongo5-e89ccd7db8aa63886cddc90065a1ea60.png"},204:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Mongo6-2ed86c6c93eca96b5438be2727935f5d.png"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(160)),i={title:"Obtaining MONGO_URL with MongoDB Atlas",sidebar_label:"Obtaining a MONGO_URL"},c={unversionedId:"subprojects/devops/deployment/mongo-url",id:"subprojects/devops/deployment/mongo-url",isDocsHomePage:!1,title:"Obtaining MONGO_URL with MongoDB Atlas",description:"Setting up a MongoDB instance.",source:"@site/docs/subprojects/devops/deployment/mongo-url.md",slug:"/subprojects/devops/deployment/mongo-url",permalink:"/docs/subprojects/devops/deployment/mongo-url",version:"current",sidebar_label:"Obtaining a MONGO_URL",sidebar:"someSidebar",previous:{title:"AWS",permalink:"/docs/subprojects/devops/deployment/aws"},next:{title:"Waves Hosting",permalink:"/docs/subprojects/devops/deployment/waves-hosting"}},s=[],l={rightToc:s};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"setting-up-a-mongodb-instance"},"Setting up a MongoDB instance."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.mongodb.com/cloud/atlas"}),"MongoDB Atlas")," will be used for this. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Sign up for a free account or log in. "),Object(a.b)("li",{parentName:"ul"},"Select 'Create a new cluster'"),Object(a.b)("li",{parentName:"ul"},"Select the free cluster option. Your first one will be free"),Object(a.b)("li",{parentName:"ul"},'You will be prompted to select your hosting provider and a few other settings. The default ones are fine for this. Click "Create Cluster" at the bottom of the page. It will take a few minutes to deploy'),Object(a.b)("li",{parentName:"ul"},"Your home page will display your new cluster. Click Connect"),Object(a.b)("li",{parentName:"ul"},'Select "Connect with app*'),Object(a.b)("li",{parentName:"ul"},"Copy the connection string and save it somewhere. This is the MONGO_URL. I personally have a notepad I paste it into. We will modify this string in the following way:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"replace the ",Object(a.b)("inlineCode",{parentName:"li"},"<password>")," with your password"),Object(a.b)("li",{parentName:"ul"},"give your database a name in the ",Object(a.b)("inlineCode",{parentName:"li"},"<dbname>")," section")))),Object(a.b)("p",null,Object(a.b)("img",{src:n(199).default}),"\n",Object(a.b)("img",{src:n(200).default}),"\n",Object(a.b)("img",{src:n(201).default}),"\n",Object(a.b)("img",{src:n(202).default}),"\n",Object(a.b)("img",{src:n(203).default}),"\n",Object(a.b)("img",{src:n(204).default})))}u.isMDXComponent=!0}}]);