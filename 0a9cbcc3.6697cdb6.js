(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var o=r(1),n=r(6),a=(r(0),r(166)),c={title:"DevOps Resources",sidebar_label:"Resources"},i={id:"devops/resources",title:"DevOps Resources",description:"## GitHub",source:"@site/docs/devops/resources.md",permalink:"/docs/devops/resources",sidebar_label:"Resources",sidebar:"someSidebar",previous:{title:"DevOps Goals",permalink:"/docs/devops/goals"},next:{title:"Meteor Hero",permalink:"/docs/devops/deployment/meteor-hero"}},l=[{value:"GitHub",id:"github",children:[]},{value:"Readings",id:"readings",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"github"},"GitHub"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/radgrad/radgrad-docker"}),"radgrad-docker repository"),". Contains Docker scripts."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/radgrad/radgrad-docker/projects/1"}),"RadGrad-Docker project board"),". Manages tasks for RadGrad docker for Summer, 2020.")),Object(a.b)("h2",{id:"readings"},"Readings"),Object(a.b)("p",null,"Note that Windows-based Docker is not supported for OPQ, so it will not be supported for RadGrad. Mac or Unix only."),Object(a.b)("h4",{id:"docker"},"Docker"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://openpowerquality.org/docs/cloud-docker.html"}),"OPQ Docker Documentation"),'. The OPQ System contains a component called "OPQ View", which is a Meteor application.  Thus, understanding how OPQ implements its Docker system will (hopefully) get you close to everything you need to know to implement a Docker-based deployment of RadGrad.  You will be writing similar documentation in this site.'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/openpowerquality/opq-docker"}),"opq-docker"),". Scripts for installing OPQ via Docker."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.docker.com/get-docker/"}),"Docker"),". Official Docker documentation."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/"}),"Docker Compose"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop"),". Mac only."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://devopswithdocker.com/"}),"DevOps with Docker"),". Introductory course to docker and docker compose."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/banjerluke/meteor-dockerfile"}),"banjerluke/meteor-dockerfile"),". Self contained Meteor dockerfile. Could be useful contrast to the OPQ Meteor dockerfile."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.docker.com/docker-for-windows/wsl/"}),"Docker Desktop on Windows"),". Tutorial to install and use Docker Desktop on Windows through Windows Subsystem for Linux 2 (WSL 2)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://insider.windows.com/en-us/"}),"Windows Insider"),". Optional. May be necessary to obtain Windows 10 Home 19018(+) for Docker Desktop on Windows.")),Object(a.b)("h4",{id:"performance-monitoring"},"Performance Monitoring"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www2.logrocket.com/react-performance-monitoring"}),"React/Front End Performance Monitoring"))))}p.isMDXComponent=!0},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(r),u=o,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||a;return r?n.a.createElement(m,i({ref:t},s,{components:r})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);