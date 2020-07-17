(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),o=(n(0),n(171)),i={title:"Microsoft Azure",sidebar_label:"Microsoft Azure"},l={id:"devops/deployment/microsoft-azure",title:"Microsoft Azure",description:"# Deployment Documentation",source:"@site/docs\\devops\\deployment\\microsoft-azure.md",permalink:"/docs/devops/deployment/microsoft-azure",sidebar_label:"Microsoft Azure",sidebar:"someSidebar",previous:{title:"Google Cloud",permalink:"/docs/devops/deployment/google-cloud"},next:{title:"UH ITS",permalink:"/docs/devops/deployment/uh-its"}},p=[{value:"Install meteor-example-deploy-azure",id:"install-meteor-example-deploy-azure",children:[]},{value:"Create a new App Service",id:"create-a-new-app-service",children:[]},{value:"Configure a MongoDB database",id:"configure-a-mongodb-database",children:[]},{value:"Configure the application",id:"configure-the-application",children:[]},{value:"Configure settings.production.json",id:"configure-settingsproductionjson",children:[]},{value:"Deploy the meteor app to Azure",id:"deploy-the-meteor-app-to-azure",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Debug mode",id:"debug-mode",children:[]},{value:"error: Could not read settings file at &#39;your file here&#39;",id:"error-could-not-read-settings-file-at-your-file-here",children:[]},{value:"Kudu",id:"kudu",children:[]}]}],c={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"deployment-documentation"},"Deployment Documentation"),Object(o.b)("p",null,"To best document how to deploy a Meteor application to Microsoft Azure, we provide the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/meteor-example-deploy-azure"}),"meteor-example-deploy-azure")," github repository.  This repository is a copy of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ics-software-engineering/meteor-application-template-react"}),"meteor-application-template-react"),", modified with one additional file (config/settings.production.sample.json) to support deployment to Azure. It will also install the meteor-azure library."),Object(o.b)("h2",{id:"install-meteor-example-deploy-azure"},"Install meteor-example-deploy-azure"),Object(o.b)("p",null,"First, make sure that you can install and run meteor-example-deploy-azure on your local computer.  Clone the repository, and follow the instructions in the README to install third party libraries (",Object(o.b)("inlineCode",{parentName:"p"},"meteor npm install"),") and run the system (",Object(o.b)("inlineCode",{parentName:"p"},"meteor npm run start"),")."),Object(o.b)("p",null,"You should be able to see your application running at http://localhost:3000 when this step is completed."),Object(o.b)("h1",{id:"create-a-microsoft-azure-account"},"Create a Microsoft Azure account"),Object(o.b)("p",null,"First, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://azure.microsoft.com/en-us/free/students/"}),"create a free Microsoft Azure account"),"."),Object(o.b)("p",null,"Sign up. Get the free trial/student trial. Go to the portal if you are not there already. Button should be in the top right corner. We will start a new App Service."),Object(o.b)("h2",{id:"create-a-new-app-service"},"Create a new App Service"),Object(o.b)("p",null,"Go to the Side bar > App Services, then click Add."),Object(o.b)("p",null,"   ",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/WebAppStart.png",alt:null}))),Object(o.b)("p",null,"Here are some field settings:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Name: Provide a name.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Resource Group: You will want to create a new resource group. This will hold a group of resources together (e.g. a database, or app services) for easier management. Note that you can reuse this group in the future.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Publish: Code")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Runtime Stack: Node 12 LTS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Region: West US"))),Object(o.b)("p",null,'The App Service plan designates how much resources Azure makes available for you to use. This costs money. Change your cost by selecting "Create new" when selecting a plan, and then click "Change size" for your "Sku and size".'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Sku and size: ",Object(o.b)("strong",{parentName:"p"},"IMPORTANT."),' Select the one you need. Default will be a production plan with a going rate of \\$75/month, but if you have the free trial it doesn\'t matter.  There is a free developer version, but I have found it inadequate in terms of space for the meteor template. If you wish to select it, click "Change size > Dev/Test tab > Select "F1".'),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/AppServicePlan.png",alt:null}))))),Object(o.b)("p",null,'Click "Review + Create" at the bottom of the page Verify your info. Click "Create". You should be rerouted to a page that says "Deployment is underway", and eventually will complete.'),Object(o.b)("p",null,"  ",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/reviewAppService.png",alt:null}))),Object(o.b)("p",null,"Go to Sidebar > Overview > Your URL will be in the right column in the form of yourappname.azurewebsites.net"),Object(o.b)("h2",{id:"configure-a-mongodb-database"},"Configure a MongoDB database"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://azure.microsoft.com/en-us/services/cosmos-db/#overview"}),"Azure Cosmo DB")," provides a version of MongoDB compatible with Meteor."),Object(o.b)("p",null,"First, set up a Azure Cosmos DB account ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/create-cosmosdb-resources-portal"}),"here"),"."),Object(o.b)("p",null,"To set up Cosmos DB:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Click "+ Add" button')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select your subscription and resource group"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Select the resource group you used to create your app"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create an account name")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the API."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"From the drop down menu, select Azure CosmoDB for MongoDP API"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Notebooks(Preview): Off")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Location: US West")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Apply Free Tier Discount: Apply if you are eligible for it. Should be eligible if it is your first time making an account")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Account type: Non-Production.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Version: 3.6")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Geo-Redundancy: Disable")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Multi-region Writes: Disable")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Click "Review and Create" Review your information and create. Azure will take ~10 minutes to deploy.'),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/CreateCosmo1.png",alt:null})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/CreateCosmo2.png",alt:null})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/CosmoReview.png",alt:null}))))),Object(o.b)("h2",{id:"configure-the-application"},"Configure the application"),Object(o.b)("p",null,"Here, we will get out App ready for deployment on the Azure portal. Through App Service, navigate to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Sidebar > Configuration > Application Settings (should take you here by default).")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Clear off any existing entries in the application settings. This can easily be done by selecting "Advanced edit" and clearing everything between these ',"[ ]"," top level brackets.\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/AppSettings.png",alt:null})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click on the General Settings tab. Ensure \u201cWeb sockets\u201d and \u201cARR affinity\u201d are enabled."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/WebSockets.png",alt:null}))))),Object(o.b)("p",null,"Next, go to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Sidebar > Deployment Center > FTP and click the "Dashboard" button at the bottom > User Credentials'),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Make a username in the form of yourappname\\yourusername, along with a password (there are some password characters that are ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/62601319/microsoft-azure-cannot-satisfy-password-requirements-when-making-ftp-user-cred"}),"not accepted"),".)")),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/FTPcreds.png",alt:null}))))),Object(o.b)("h2",{id:"configure-settingsproductionjson"},"Configure settings.production.json"),Object(o.b)("p",null,"The config directory contains a file called settings.production.sample.json, which is a template you can use to create the settings.production.json file. The template looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'{\n  "meteor-azure": {\n    "siteName": "app name",\n    "resourceGroup": "resource group",\n    "subscriptionId": "subscription ID",\n    "tenantId": "tenant ID",\n    "deploymentCreds": {\n      "username": "username",\n      "password": "password"\n    },\n    "envVariables": {\n      "ROOT_URL": "https://<app name>.azurewebsites.net",\n      "MONGO_URL": "MongoDB URL"\n    }\n  }\n  // ... keys for Meteor.settings\n}\n')),Object(o.b)("p",null,"Copy the contents of ",Object(o.b)("inlineCode",{parentName:"p"},"settings.production.sample.json")," over ",Object(o.b)("inlineCode",{parentName:"p"},"settings.development.json"),". Rename ",Object(o.b)("inlineCode",{parentName:"p"},"settings.development.json")," to ",Object(o.b)("inlineCode",{parentName:"p"},"settings.production.json"),". Then edit the fields as follows:"),Object(o.b)("p",null,"Sidebar > Overview. Record your app name, resource group and subscription ID"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/gatherInfo.png",alt:null}))),Object(o.b)("p",null,'You can find your TenantID by searching for "Tenant properties" in the search bar at the top of the page'),Object(o.b)("p",null,"Enter your FTP user credentials."),Object(o.b)("p",null,"Edit your ROOT_URL with your app name."),Object(o.b)("p",null,"MONGO_URL:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click the Microsoft Azure button next to the hamburger in the top left to go to the Homepage"),Object(o.b)("li",{parentName:"ul"},"Select your Azure Cosmo DB account"),Object(o.b)("li",{parentName:"ul"},"Sidebar > Quickstart > Select Node.js tab",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'Scroll down to "Using the Node.js 3.0 driver, connect your existing MongoDB app"'),Object(o.b)("li",{parentName:"ul"},"Our MONGO_URL is the PRIMARY CONNECTION STRING.")))),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/connString.png",alt:null}))),Object(o.b)("h2",{id:"deploy-the-meteor-app-to-azure"},"Deploy the meteor app to Azure"),Object(o.b)("p",null,"Navigate to the project directory on your local machine and run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'meteor npm run deploy\n\ninfo:    Targetting 64-bit Node architecture\ninfo:    Validating settings file (G:\\GitFolder\\azure-deploy\\config\\settings.production.json)\ninfo:    Validating Kudu connection (G:\\GitFolder\\azure-deploy\\config\\settings.production.json)\ninfo:    meteortestdeploy: Authenticating with interactive login...\nTo sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code FM3DXB253 to authenticate.\ninfo:    meteortestdeploy: Updating Azure application settings\ninfo:    Compiling application bundle\n\nWARNING: The output directory is under your source tree.\n         Your generated files may get interpreted as source code!\n         Consider building into a different directory instead\n         meteor build ../output\n\napp/node_modules/semantic-ui-css/semantic.css: warn: There are some @import rules in the middle of a file. This might be a bug, as imports are only valid at the beginning of a file.\nBrowserslist: caniuse-lite is outdated. Please run next command `npm update`\n\nUnable to resolve some modules:\n\n  "@babel/runtime/helpers/createSuper" in\n/G/GitFolder/azure-deploy/app/imports/ui/layouts/App.jsx\n(web.browser.legacy)\n\nIf you notice problems related to these missing modules, consider running:\n\n  meteor npm install --save @babel/runtime\n\nwarn:    Using default web config\ninfo:    meteortestdeploy: Deploying bundle tarball\ninfo:    meteortestdeploy: Running server initialisation\ninfo:    meteortestdeploy: Polling server status...\ninfo:    meteortestdeploy: Finished successfully\n')),Object(o.b)("p",null,"Your project should now be live at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://yourappname.azurewebsites.net"}),"https://yourappname.azurewebsites.net")),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("h3",{id:"debug-mode"},"Debug mode"),Object(o.b)("p",null,"If you are having trouble, debug mode might be insightful. Turn it on with."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"meteor-azure -debug\n")),Object(o.b)("h3",{id:"error-could-not-read-settings-file-at-your-file-here"},"error: Could not read settings file at 'your file here'"),Object(o.b)("p",null,"In the package.json there is a script ",Object(o.b)("inlineCode",{parentName:"p"},'"deploy": "meteor-azure --settings config/settings.production.json --architecture 64"')," That deploys your application to Azure\nChanging the ",Object(o.b)("inlineCode",{parentName:"p"},"--settings config/settings.production.json")," to include the full path instead of the relative one might solve this problem. For example, the following may work."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--settings C:\\path\\to\\meteor-example-deploy-azure\\config\\settings.production.sample.json")," "),Object(o.b)("h3",{id:"kudu"},"Kudu"),Object(o.b)("p",null,'It is easy to troubleshoot with kudu. You can access the app\'s server anytime by adding ".scm" into the url.'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"https://meteortestdeploy.scm.azurewebsites.net\n")))}s.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,l({ref:t},c,{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);