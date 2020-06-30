(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{128:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),o=a(6),r=(a(0),a(167)),i={title:"Microsoft Azure",sidebar_label:"Microsoft Azure"},l={id:"devops/deployment/microsoft-azure",title:"Microsoft Azure",description:"# Deployment Documentation",source:"@site/docs/devops/deployment/microsoft-azure.md",permalink:"/docs/devops/deployment/microsoft-azure",sidebar_label:"Microsoft Azure",sidebar:"someSidebar",previous:{title:"Google Cloud",permalink:"/docs/devops/deployment/google-cloud"},next:{title:"UH ITS",permalink:"/docs/devops/deployment/uh-its"}},c=[{value:"Install meteor-example-deploy-azure",id:"install-meteor-example-deploy-azure",children:[]},{value:"Create a new App Service",id:"create-a-new-app-service",children:[]},{value:"Configure a MongoDB database",id:"configure-a-mongodb-database",children:[]},{value:"Configure the application",id:"configure-the-application",children:[]},{value:"Configure settings.production.json",id:"configure-settingsproductionjson",children:[]},{value:"Deploy the meteor app to Azure",id:"deploy-the-meteor-app-to-azure",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Debug mode",id:"debug-mode",children:[]},{value:"Kudu",id:"kudu",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"deployment-documentation"},"Deployment Documentation"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Hi Arslan,"),Object(r.b)("p",{parentName:"div"},"Here are some things you'll need to do in order to make this revised documentation work:"),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"Create the meteor-example-deploy-azure repository."),Object(r.b)("li",{parentName:"ol"},"Add the file config/settings.production.sample.json."),Object(r.b)("li",{parentName:"ol"},"Install meteor-azure into meteor-example-deploy-azure using ",Object(r.b)("inlineCode",{parentName:"li"},"npm install meteor-azure --save-dev"),". Then, when people install the test system, they get the meteor-azure package installed automatically. That gets rid of a whole section of the documentation!"),Object(r.b)("li",{parentName:"ol"},'Update the scripts section of meteor-example-deploy-azure/app/package.json to include a script "deploy" that invokes "meteor-azure --settings config/settings.production.json --architecture 64".')))),Object(r.b)("p",null,"To best document how to deploy a Meteor application to Microsoft Azure, we provide the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/meteor-example-deploy-azure"}),"meteor-example-deploy-azure")," github repository.  This repository is a copy of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ics-software-engineering/meteor-application-template-react"}),"meteor-application-template-react"),", modified with one additional file (config/settings.production.sample.json) to support deployment to Azure. It will also install the meteor-azure library."),Object(r.b)("h2",{id:"install-meteor-example-deploy-azure"},"Install meteor-example-deploy-azure"),Object(r.b)("p",null,"First, make sure that you can install and run meteor-example-deploy-azure on your local computer.  Clone the repository, and follow the instructions in the README to install third party libraries (",Object(r.b)("inlineCode",{parentName:"p"},"meteor npm install"),") and run the system (",Object(r.b)("inlineCode",{parentName:"p"},"meteor npm run start"),")."),Object(r.b)("p",null,"You should be able to see your application running at http://localhost:3000 when this step is completed."),Object(r.b)("h1",{id:"create-a-microsoft-azure-account"},"Create a Microsoft Azure account"),Object(r.b)("p",null,"First, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://azure.microsoft.com/en-us/free/students/"}),"create a free Microsoft Azure account"),"."),Object(r.b)("p",null,"Sign up. Get the free trial/student trial. Go to the portal if you are not there already. Button should be in the top right corner. We will start a new App Service."),Object(r.b)("h2",{id:"create-a-new-app-service"},"Create a new App Service"),Object(r.b)("p",null,"Go to the Side bar > App Services, then click Add."),Object(r.b)("p",null,"Here's the page that results with appropriately filled fields:"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/devopsimages/AddApp.png",alt:null}))),Object(r.b)("p",null,"Here are some field settings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Name: Provide a name.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Resource Group: You will want to create a new resource group. This will hold a group of resources together (e.g. a database, or app services) for easier management. Note that you can reuse this group in the future.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Publish: Code")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Runtime Stack: Node 12 LTS")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Region: West US"))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Need a screen shot to document the following page."))),Object(r.b)("p",null,"For Windows Plan, Azure created a new one for me and I did not touch this."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sku and size: ",Object(r.b)("strong",{parentName:"li"},"IMPORTANT."),' Select the one you need. Default will be a production plan with a going rate of \\$75/month, but if you have the free trial it doesn\'t matter.  There is a free developer version, but I have found it inadequate in terms of space for the meteor template. If you wish to select it, click "Change size > Dev/Test tab > Select "F1".')),Object(r.b)("p",null,'Click "Review + Create" at the bottom of the page Verify your info. Click "Create". You should be rerouted to a page that says "Deployment is underway", and eventually will complete.'),Object(r.b)("p",null,"Go to Sidebar > Overview > Your URL will be in the right column in the form of yourappname.azurewebsites.net"),Object(r.b)("h2",{id:"configure-a-mongodb-database"},"Configure a MongoDB database"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://azure.microsoft.com/en-us/services/cosmos-db/#overview"}),"Azure Cosmo DB")," provides a version of MongoDB compatible with Meteor."),Object(r.b)("p",null,"First, set up a Azure Cosmos DB account ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/create-cosmosdb-resources-portal"}),"here"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Need a screen shot to illustrate the following settings."))),Object(r.b)("p",null,"To set up Cosmos DB:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Click "+ Add" button'),Object(r.b)("li",{parentName:"ul"},"Select your subscription and resource group",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Select the resource group you used to create your app"))),Object(r.b)("li",{parentName:"ul"},"Create an account name"),Object(r.b)("li",{parentName:"ul"},"Select the API.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"From the drop down menu, select Azure CosmoDB for MongoDP API"))),Object(r.b)("li",{parentName:"ul"},"Notebooks(Preview): Off"),Object(r.b)("li",{parentName:"ul"},"Location: US West"),Object(r.b)("li",{parentName:"ul"},"Apply Free Tier Discount: Apply if you are eligible for it. Should be eligible if it is your first time making an account"),Object(r.b)("li",{parentName:"ul"},"Account type: Non-Production."),Object(r.b)("li",{parentName:"ul"},"Version: 3.6"),Object(r.b)("li",{parentName:"ul"},"Geo-Redundancy: Disable"),Object(r.b)("li",{parentName:"ul"},"Multi-region Writes: Disable"),Object(r.b)("li",{parentName:"ul"},'Click "Review and Create" Review your information and create. Azure will take ~10 minutes to deploy.')),Object(r.b)("h2",{id:"configure-the-application"},"Configure the application"),Object(r.b)("p",null,"Here, we will get out App ready for deployment on the Azure portal. Through App Service, navigate to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Sidebar > Configuration > Application Settings (should take you here by default)."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Clear off any existing entries in the application settings. This can easily be done by selecting "Advanced edit" and clearing everything between these ',"[ ]"," top level brackets.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click on the General Settings tab. Ensure \u201cWeb sockets\u201d and \u201cARR affinity\u201d are enabled."))))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Need a screen shot"))),Object(r.b)("p",null,"Next, go to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Sidebar > Deployment Center > FTP and click the "Dashboard" button at the bottom > User Credentials'),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Make a username in the form of yourappname\\yourusername, along with a password (there are some password characters that are ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/62601319/microsoft-azure-cannot-satisfy-password-requirements-when-making-ftp-user-cred"}),"not accepted"),".)")))),Object(r.b)("h2",{id:"configure-settingsproductionjson"},"Configure settings.production.json"),Object(r.b)("p",null,"The config directory contains a file called settings.production.sample.json, which is a template you can use to create the settings.production.json file. The template looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'{\n  "meteor-azure": {\n    "siteName": "app name",\n    "resourceGroup": "resource group",\n    "subscriptionId": "subscription ID",\n    "tenantId": "tenant ID",\n    "deploymentCreds": {\n      "username": "username",\n      "password": "password"\n    },\n    "envVariables": {\n      "ROOT_URL": "https://<app name>.azurewebsites.net",\n      "MONGO_URL": "MongoDB URL"\n    }\n  }\n  // ... keys for Meteor.settings\n}\n')),Object(r.b)("p",null,"Make a copy of this file (or rename it) to settings.production.json. Then edit the fields as follows:"),Object(r.b)("p",null,"Sidebar > Overview. Record your app name, resource group and subscription ID"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/devopsimages/Overview.png",alt:null}))),Object(r.b)("p",null,'You can find your TenantID by searching for "Tenant properties" in the search bar at the top of the page'),Object(r.b)("p",null,"Enter your FTP user credentials."),Object(r.b)("p",null,"Edit your ROOT_URL with your app name."),Object(r.b)("p",null,"MONGO_URL:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click the Microsoft Azure button next to the hamburger in the top left to go to the Homepage"),Object(r.b)("li",{parentName:"ul"},"Select your Azure Cosmo DB account"),Object(r.b)("li",{parentName:"ul"},"Sidebar > Quickstart > Select Node.js tab",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'Scroll down to "Using the Node.js 3.0 driver, connect your existing MongoDB app"'),Object(r.b)("li",{parentName:"ul"},"Our MONGO_URL is the PRIMARY CONNECTION STRING.")))),Object(r.b)("h2",{id:"deploy-the-meteor-app-to-azure"},"Deploy the meteor app to Azure"),Object(r.b)("p",null,"Navigate to the project directory on your local machine and run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'meteor npm run deploy\n\ninfo:    Targetting 64-bit Node architecture\ninfo:    Validating settings file (G:\\GitFolder\\azure-deploy\\config\\settings.development.json)\ninfo:    Validating Kudu connection (G:\\GitFolder\\azure-deploy\\config\\settings.development.json)\ninfo:    meteortestdeploy: Authenticating with interactive login...\nTo sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code FM3DXB253 to authenticate.\ninfo:    meteortestdeploy: Updating Azure application settings\ninfo:    Compiling application bundle\n\nWARNING: The output directory is under your source tree.\n         Your generated files may get interpreted as source code!\n         Consider building into a different directory instead\n         meteor build ../output\n\napp/node_modules/semantic-ui-css/semantic.css: warn: There are some @import rules in the middle of a file. This might be a bug, as imports are only valid at the beginning of a file.\nBrowserslist: caniuse-lite is outdated. Please run next command `npm update`\n\nUnable to resolve some modules:\n\n  "@babel/runtime/helpers/createSuper" in\n/G/GitFolder/azure-deploy/app/imports/ui/layouts/App.jsx\n(web.browser.legacy)\n\nIf you notice problems related to these missing modules, consider running:\n\n  meteor npm install --save @babel/runtime\n\nwarn:    Using default web config\ninfo:    meteortestdeploy: Deploying bundle tarball\ninfo:    meteortestdeploy: Running server initialisation\ninfo:    meteortestdeploy: Polling server status...\ninfo:    meteortestdeploy: Finished successfully\n')),Object(r.b)("p",null,"Your project should now be live at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://yourappname.azurewebsites.net"}),"https://yourappname.azurewebsites.net")),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("h3",{id:"debug-mode"},"Debug mode"),Object(r.b)("p",null,"If you are having trouble, debug mode might be insightful. Turn it on with."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"meteor-azure -debug\n")),Object(r.b)("h3",{id:"kudu"},"Kudu"),Object(r.b)("p",null,'It is easy to troubleshoot with kudu. You can access the app\'s server anytime by adding ".scm" into the url.'),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"https://meteortestdeploy.scm.azurewebsites.net\n")))}p.isMDXComponent=!0},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return a?o.a.createElement(m,l({ref:t},s,{components:a})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);