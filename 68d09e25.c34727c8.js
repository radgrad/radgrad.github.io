(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{160:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),p=a,m=u["".concat(i,".").concat(p)]||u[p]||g[p]||n;return r?o.a.createElement(m,d(d({ref:t},c),{},{components:r})):o.a.createElement(m,d({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<n;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return d})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(2),o=r(6),n=(r(0),r(160)),i={title:"Organization of radgrad.org",sidebar_label:"radgrad.org"},d={unversionedId:"radgrad2/developer/radgrad.org",id:"radgrad2/developer/radgrad.org",isDocsHomePage:!1,title:"Organization of radgrad.org",description:"There are two primary functions of the radgrad.org domain:",source:"@site/docs/radgrad2/developer/radgrad.org.md",slug:"/radgrad2/developer/radgrad.org",permalink:"/docs/radgrad2/developer/radgrad.org",version:"current",sidebar_label:"radgrad.org",sidebar:"someSidebar",previous:{title:"Continuous Integration",permalink:"/docs/radgrad2/developer/continuous-integration"},next:{title:"RadGrad Patterns",permalink:"/docs/radgrad2/developer/radgrad-patterns"}},l=[{value:"github.com",id:"githubcom",children:[]},{value:"netlify.com",id:"netlifycom",children:[]},{value:"domains.google.com",id:"domainsgooglecom",children:[]},{value:"mailgun.com",id:"mailguncom",children:[]}],c={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"There are two primary functions of the radgrad.org domain:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Serve the radgrad.org website."),Object(n.b)("li",{parentName:"ol"},"Support the use of the ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:donotreply@mailgun.radgrad.org"}),"donotreply@mailgun.radgrad.org")," email address for newsletters.")),Object(n.b)("p",null,"The tech stack for accomplishing these two tasks is currently somewhat complicated.  The goal of this page is to document all the various pieces."),Object(n.b)("h3",{id:"githubcom"},"github.com"),Object(n.b)("p",null,"We need a place to hold the source code for the radgrad.org website.  The ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/docusaurus"}),"github.com docusaurus repository")," does this for us."),Object(n.b)("p",null,"You must be a member of the radgrad github organization with commit privileges to edit the documentation."),Object(n.b)("h3",{id:"netlifycom"},"netlify.com"),Object(n.b)("p",null,"We could use GitHub to build and publish the radgrad website as radgrad.github.io/docusaurus. But, this does not allow us to use a custom domain (i.e. radgrad.org) and get https encryption at the same time.  So, we use Netlify."),Object(n.b)("p",null,"The ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.netlify.com/sites/radgrad/"}),"netlify.com radgrad account")," performs multiple functions:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Builds and deploys the radgrad.org site whenever commits are made to the master branch of the github docusaurus repo."),Object(n.b)("li",{parentName:"ul"},"Provides https via Let's Encrypt."),Object(n.b)("li",{parentName:"ul"},"Netlify DNS servers are used to manage the radgrad.org domain and provide MX records for email. See the ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://app.netlify.com/account/dns/radgrad.org"}),"netlify radgrad DNS settings page"))),Object(n.b)("p",null,"You must have login to netlify using the philipmjohnson account. See Philip for details if you need access."),Object(n.b)("h3",{id:"domainsgooglecom"},"domains.google.com"),Object(n.b)("p",null,"We need a domain name service to define the radgrad.org domain.  We use Google Domains for this purpose. See ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://domains.google.com/m/registrar/radgrad.org"}),"radgrad.org domain name management"),"."),Object(n.b)("p",null,"Because we use Netlify to build and publish radgrad.org with https, we have to override the default hostname management provided by Google Domains. First, the default Google DNS servers are disabled; instead, we follow Netlify instructions to tell Google Domains that the Netlify DNS servers will be used. In addition, we set the @ and www resource records according to Netlify instructions."),Object(n.b)("p",null,"You must login to Google Domains using the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:radgradhosting@gmail.com"}),"radgradhosting@gmail.com")," account. See Philip for details if you need access."),Object(n.b)("h3",{id:"mailguncom"},"mailgun.com"),Object(n.b)("p",null,"We need a way to send emails to our users from the RadGrad application.  We use ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://mailgun.com"}),"MailGun")," to send emails."),Object(n.b)("p",null,'Currently, we appear to have the DKIM and SPF stuff set up for the "mailgun.radgrad.org" domain. So, emails should be sent with a "From" and "Sender" of that domain in order to prevent a mismatch.'),Object(n.b)("p",null,"Although we don't configure a way to receive emails, it appears that we can send emails with a from field of something like \"",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:donotreply@mailgun.radgrad.org"}),"donotreply@mailgun.radgrad.org"),'" and things might work fine.'),Object(n.b)("p",null,"If you need to login to the mailgun account, please see Philip for access."))}s.isMDXComponent=!0}}]);