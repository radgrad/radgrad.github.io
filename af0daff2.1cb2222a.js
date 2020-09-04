(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var i=n(1),a=n(6),o=(n(0),n(204)),r={title:"Managing this site",sidebar_label:"Managing this site"},s={id:"overview/managing-this-site",title:"Managing this site",description:"This site is implemented using [Docusaurus 2](http://v2.docusaurus.io). Here is an abbreviated guide to writing documentation for this site.",source:"@site/docs\\overview\\managing-this-site.md",permalink:"/docs/overview/managing-this-site",sidebar_label:"Managing this site",sidebar:"someSidebar",previous:{title:"Motivation",permalink:"/docs/overview/motivation"},next:{title:"Engineering Standards",permalink:"/docs/overview/engineering-standards"}},u=[{value:"Installation and invocation",id:"installation-and-invocation",children:[]},{value:"Writing documentation",id:"writing-documentation",children:[]},{value:"Adding your new documentation to the sidebar",id:"adding-your-new-documentation-to-the-sidebar",children:[]},{value:"Adding images",id:"adding-images",children:[]},{value:"Publishing the site and committing changes",id:"publishing-the-site-and-committing-changes",children:[]},{value:"Advanced usage",id:"advanced-usage",children:[]}],c={rightToc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This site is implemented using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://v2.docusaurus.io"}),"Docusaurus 2"),". Here is an abbreviated guide to writing documentation for this site."),Object(o.b)("h2",{id:"installation-and-invocation"},"Installation and invocation"),Object(o.b)("p",null,"You will want to create a local installation of this site in order to develop your documentation."),Object(o.b)("p",null,"First, you must have commit/push privileges to radgrad/radgrad.github.io and radgrad/docusaurus2 repositories on GitHub.  You can obtain those privileges from Philip Johnson."),Object(o.b)("p",null,"Next, download the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/radgrad/docusaurus2"}),"RadGrad docusaurus2 repository"),"."),Object(o.b)("p",null,"Next, cd into the docusaurus2 directory and invoke ",Object(o.b)("inlineCode",{parentName:"p"},"npm install"),"."),Object(o.b)("p",null,"To bring up the site locally, invoke ",Object(o.b)("inlineCode",{parentName:"p"},"npm start"),"."),Object(o.b)("p",null,"You should see the site appear at http://localhost:3000."),Object(o.b)("h2",{id:"writing-documentation"},"Writing documentation"),Object(o.b)("p",null,"To write documentation, you should create or modify the files in the docs/ directory.  The docs/ directory contains a set of *.md files organized into subdirectories."),Object(o.b)("p",null,"The easiest way to get started is to copy an existing markdown file that seems to contain the kind of markdown you need to use, and then edit it to provide the needed documentation."),Object(o.b)("p",null,"Here are some issues to be aware of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Each entry in the sidebar corresponds to a single file name. If you want your documentation to appear as multiple entries in the sidebar, then you must create multiple documentation markdown files.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Docusaurus creates a "secondary sidebar" on the right side of the page that essentially provides a table of contents for that page.  This enables rather lengthy top-level documentation files.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The docusaurus runtime environment regenerates the documentation each time it notices a file change. So, you can save out your file and the browser page should be refreshed automatically. Note that changes to docusaurus.config.js or sidebars.js require you to exit and restart docusaurus to pick up the changes."))),Object(o.b)("h2",{id:"adding-your-new-documentation-to-the-sidebar"},"Adding your new documentation to the sidebar"),Object(o.b)("p",null,"As soon as you start writing your documentation, you'll want to add an entry to the sidebar so that you can easily navigate to it. To do this, edit the sidebars.js file. Just add the name of your file to the appropriate array of file name strings in the appropriate place."),Object(o.b)("h2",{id:"adding-images"},"Adding images"),Object(o.b)("p",null,"If you want to add images, you should first add the image file to the ",Object(o.b)("inlineCode",{parentName:"p"},"static/img")," directory.  Feel free to create a new subdirectory to hold your images if you feel that is appropriate. Then, you can insert your image using something like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'<img src="/img/Profiles.png"/>\n')),Object(o.b)("h2",{id:"publishing-the-site-and-committing-changes"},"Publishing the site and committing changes"),Object(o.b)("p",null,"Once your documentation is just exactly perfect, you'll want to publish your changes."),Object(o.b)("p",null,"First, make sure that GIT_USER is set to your GitHub user name."),Object(o.b)("p",null,"Next, run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run deploy"),"."),Object(o.b)("p",null,"This will build the site and push the HTML version to the master branch of the radgrad/radgrad.github.io repository."),Object(o.b)("p",null,"Note: you do not need to clone the radgrad.github.io repo to your laptop. In fact, you shouldn't."),Object(o.b)("p",null,"In addition to deploying the site, you also need to commit and push your changes to the radgrad/docusaurus2 repository."),Object(o.b)("h2",{id:"advanced-usage"},"Advanced usage"),Object(o.b)("p",null,"If you want to do more advanced changes to the website, you'll probably want to consult the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/introduction"}),"docusaurus2 documentation"),"."))}d.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},l=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=d(n),b=i,h=l["".concat(r,".").concat(b)]||l[b]||p[b]||o;return n?a.a.createElement(h,s({ref:t},c,{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);