(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),o=(n(0),n(167)),i={title:"Microsoft Azure",sidebar_label:"Microsoft Azure"},l={id:"devops/deployment/microsoft-azure",title:"Microsoft Azure",description:"# Deployment Documentation\r",source:"@site/docs\\devops\\deployment\\microsoft-azure.md",permalink:"/docs/devops/deployment/microsoft-azure",sidebar_label:"Microsoft Azure",sidebar:"someSidebar",previous:{title:"Google Cloud",permalink:"/docs/devops/deployment/google-cloud"},next:{title:"UH ITS",permalink:"/docs/devops/deployment/uh-its"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Edit the above code with information found in...",id:"edit-the-above-code-with-information-found-in",children:[]},{value:"OUTPUT",id:"output",children:[]},{value:"Evaluation",id:"evaluation",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"deployment-documentation"},"Deployment Documentation"),Object(o.b)("p",null,"Download a fresh meteor template , make sure everything is running locally and off we go."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"PS G:\\GitFolder\\azure-deploy\\app> meteor npm install\n\n> core-js@3.6.4 postinstall G:\\GitFolder\\azure-deploy\\app\\node_modules\\core-js\n> node -e \"try{require('./postinstall')}catch(e){}\"\n\nadded 416 packages from 333 contributors and audited 416 packages in 59.489s\n\n21 packages are looking for funding\n  run `npm fund` for details\n\nfound 2 low severity vulnerabilities\n  run `npm audit fix` to fix them, or `npm audit` for details\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'PS G:\\GitFolder\\azure-deploy\\app> meteor npm run start\n\n> meteor-application-template-react@ start G:\\GitFolder\\azure-deploy\\app\n> meteor --no-release-check --settings ../config/settings.development.json\n\n[[[[[ ~\\G\\GitFolder\\azure-deploy\\app ]]]]]\n\n=> Started proxy.\n\nUnable to resolve some modules:\n\n  "@babel/runtime/helpers/createSuper" in /G/GitFolder/azure-deploy/app/imports/ui/layouts/App.jsx (web.browser.legacy)\n\nIf you notice problems related to these missing modules, consider running:\n\n  meteor npm install --save @babel/runtime\n\n=> Started MongoDB.\nW20200622-15:09:45.710(-7)? (STDERR) Note: you are using a pure-JavaScript implementation of bcrypt.\nW20200622-15:09:46.344(-7)? (STDERR) While this implementation will work correctly, it is known to be\nW20200622-15:09:46.345(-7)? (STDERR) approximately three times slower than the native implementation.\nW20200622-15:09:46.352(-7)? (STDERR) In order to use the native implementation instead, run\nW20200622-15:09:46.353(-7)? (STDERR)\nW20200622-15:09:46.354(-7)? (STDERR)   meteor npm install --save bcrypt\nW20200622-15:09:46.355(-7)? (STDERR)\nW20200622-15:09:46.355(-7)? (STDERR) in the root directory of your application.\nI20200622-15:09:48.176(-7)? Creating the default user(s)\nI20200622-15:09:48.180(-7)?   Creating user admin@foo.com.\nI20200622-15:09:48.458(-7)?   Creating user john@foo.com.\nI20200622-15:09:48.692(-7)? Creating default data.\nI20200622-15:09:48.696(-7)?   Adding: Basket (john@foo.com)\nI20200622-15:09:48.711(-7)?   Adding: Bicycle (john@foo.com)\nI20200622-15:09:48.717(-7)?   Adding: Banana (admin@foo.com)\nI20200622-15:09:48.721(-7)?   Adding: Boogie Board (admin@foo.com)\n=> Started your app.\n\n=> App running at: http://localhost:3000/\n   Type Control-C twice to stop.\n')),Object(o.b)("p",null,"Everything looks good. Lets continue."),Object(o.b)("h1",{id:"next-download-meteor-azure"},"NEXT: DOWNLOAD METEOR-AZURE"),Object(o.b)("p",null,"Lets open up meteor-azure docs."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://meteor-azure.readthedocs.io/en/latest/"}),"For more info/docs")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://meteor-azure.readthedocs.io/en/latest/installation.html"}),"Prerequisites")),Object(o.b)("p",null,"aaaand ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://meteor-azure.readthedocs.io/en/latest/getting-started.html"}),"the tutorial")),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Node >=4 is necessary to run the CLI\nMeteor >=1.4 is necessary to build your application"),Object(o.b)("p",null,"Check node version with"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"node -v\n")),Object(o.b)("p",null,"Check Meteor version with"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"cat .meteor/release\n")),Object(o.b)("p",null,"OR"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"meteor --version # this will automatically update it to latest version\n")),Object(o.b)("p",null,"If everything checks out, install meteor-azure. This is a global installation. Local installation is also possible and found in the docs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"npm install -g meteor-azure\n")),Object(o.b)("h1",{id:"next-microsoft-azure"},"NEXT: MICROSOFT AZURE"),Object(o.b)("p",null,"First, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://azure.microsoft.com/en-us/free/students/"}),"lets make our account")),Object(o.b)("p",null,"Sign up. Get the free trial/student trial. Go to the portal if you are not there already. Button should be in the top right corner. We will start a new App Service."),Object(o.b)("p",null,"Side bar > App Services\nClick Add"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/AddApp.png",alt:null}))),Object(o.b)("p",null,"Create a resource group. This will hold a group of resources together (e.g. a database, or app services) for easier management. You can reuse this group in the future"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Give your App a name")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Publish: Code")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Runtime Stack: Node 12 LTS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Region: West US")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Windows Plan: Azure created a new one for me and I did not touch this.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Sku and size: //IMPORTANT. Select the one you need. Default will be a production plan with a going rate of \\$75/month, but if you have the free trial it doesnt matter."))),Object(o.b)("p",null,'There is a free developer version, but I have found it inadequate in terms of space for the meteor template. If you wish to select it, click "Change size > Dev/Test tab > Select "F1".'),Object(o.b)("p",null,'Click "Review + Create" at the bottom of the page\nVerify your info.\nClick "Create". You should be rerouted to a page that says "Deployment is underway", and eventually will complete.'),Object(o.b)("p",null,"Go to Sidebar > Overview > Your URL will be in the right column in the form of yourappname.azurewebsites.net"),Object(o.b)("h1",{id:"next-create-an-azure-cosmo-db-account"},"NEXT: CREATE AN ",Object(o.b)("a",Object(a.a)({parentName:"h1"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/create-cosmosdb-resources-portal#:~:text=Go%20to%20the%20Azure%20portal,the%20new%20Azure%20Cosmos%20account."}),"AZURE COSMO DB")," ACCOUNT"),Object(o.b)("p",null,"What is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://azure.microsoft.com/en-us/services/cosmos-db/#overview"}),"Azure Cosmo DB"),"? Azure Cosmos DB is a fully managed NoSQL database service for modern app development. It supports Core (SQL) and MongoDB for document data, Gremlin for graph data, Azure Table, and Cassandra. "),Object(o.b)("p",null,"First we must set up a Azure Cosmos DB account. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/create-cosmosdb-resources-portal"}),"Click here")," to learn more about each of the following items"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Search for "Azure Cosmos DB" in the search bar'),Object(o.b)("li",{parentName:"ul"},'Click "+ Add" button'),Object(o.b)("li",{parentName:"ul"},"Select your subscription and resource group",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Select the resource group you used to create your app"))),Object(o.b)("li",{parentName:"ul"},"Create an account name"),Object(o.b)("li",{parentName:"ul"},"Select the API.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"From the drop down menu, select Azure CosmoDB for MongoDP API"))),Object(o.b)("li",{parentName:"ul"},"Notebooks(Preview): Off"),Object(o.b)("li",{parentName:"ul"},"Location: US West"),Object(o.b)("li",{parentName:"ul"},"Apply Free Tier Discount: Apply if you are eligible for it. Should be eligible if it is your first time making an account"),Object(o.b)("li",{parentName:"ul"},"Account type: Non-Production. "),Object(o.b)("li",{parentName:"ul"},"Version: 3.6"),Object(o.b)("li",{parentName:"ul"},"Geo-Redundancy: Disable"),Object(o.b)("li",{parentName:"ul"},"Multi-region Writes: Disable"),Object(o.b)("li",{parentName:"ul"},'Click "Review and Create" Review your information and create. Azure will take ~10 minutes to deploy.')),Object(o.b)("h1",{id:"next-meteor-azure-deployment"},"NEXT: METEOR-AZURE DEPLOYMENT"),Object(o.b)("p",null,"Here, we will get out App ready for deployment on the Azure portal. Through App Service, navigate to. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Sidebar > Configuration > Application Settings (should take you here by default)"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Clear off any existing entries in the application settings. This can easily be done by selecting "Advanced edit" and clearing everything between these ',"[ ]"," top level brackets.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click on the General Settings tab. Ensure \u201cWeb sockets\u201d and \u201cARR affinity\u201d are enabled."))))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Sidebar > Deployment Center > FTP and click the "Dashboard" button at the bottom > User Credentials'),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Make a username in the form of yourappname\\yourusername, along with a password")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Although the password requires you to input some characters, most characters are NOT accepted.")," Make sure you do not have any of these, or Azure isnt going to like it."))))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"_ (underscore)\n#\n^\n(  )\n{  }\n[  ]\n_ -\n+ =\n: ;\n\" '\n< >\n, .\n/\n| \\\n` ~\n")),Object(o.b)("p",null,"Add the following code to settings.development.json file in your local app/config directory"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'{\n  "meteor-azure": {\n    "siteName": "app name",\n    "resourceGroup": "resource group",\n    "subscriptionId": "subscription ID",\n    "tenantId": "tenant ID",\n    "deploymentCreds": {\n      "username": "username",\n      "password": "password"\n    },\n    "envVariables": {\n      "ROOT_URL": "https://<app name>.azurewebsites.net",\n      "MONGO_URL": "MongoDB URL"\n    }\n  }\n\n  // ... keys for Meteor.settings\n}\n')),Object(o.b)("h2",{id:"edit-the-above-code-with-information-found-in"},"Edit the above code with information found in..."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Sidebar > Overview",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Record your app name, resource group and subscription ID")))),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/Overview.png",alt:null}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'You can find your TenantID by searching for "Tenant properties" in the search bar at the top of the page')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Enter your FTP user credentials.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Edit your ROOT_URL with your app name.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"MONGO_URL"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the Microsoft Azure button next to the hamburger in the top left to go to the Homepage"),Object(o.b)("li",{parentName:"ul"},"Select your Azure Cosmo DB account"),Object(o.b)("li",{parentName:"ul"},"Sidebar > Quickstart > Select Node.js tab ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'Scroll down to "Using the Node.js 3.0 driver, connect your existing MongoDB app"'),Object(o.b)("li",{parentName:"ul"},"Our MONGO_URL is the PRIMARY CONNECTION STRING. ")))))),Object(o.b)("h1",{id:"next-lets-deploy"},"NEXT: Lets deploy!"),Object(o.b)("p",null,"Navigate to the project directory on your local machine and run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"meteor-azure --settings path-to-settings-development.json\n")),Object(o.b)("p",null,"Some problems related to architecture might occur during deployment. This is further explained in the TROUBLESHOOTING section. I have experience them and adjusted accordingly. This is the script I used to deploy successfully."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"PS G:\\GitFolder\\azure-deploy\\app> meteor-azure --settings G:\\GitFolder\\azure-deploy\\config\\settings.development.json --architecture 64\n")),Object(o.b)("h2",{id:"output"},"OUTPUT"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'info:    Targetting 64-bit Node architecture\ninfo:    Validating settings file (G:\\GitFolder\\azure-deploy\\config\\settings.development.json)\ninfo:    Validating Kudu connection (G:\\GitFolder\\azure-deploy\\config\\settings.development.json)\ninfo:    meteortestdeploy: Authenticating with interactive login...\nTo sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code FM3DXB253 to authenticate.\ninfo:    meteortestdeploy: Updating Azure application settings\ninfo:    Compiling application bundle\n\nWARNING: The output directory is under your source tree.\n         Your generated files may get interpreted as source code!\n         Consider building into a different directory instead\n         meteor build ../output\n\napp/node_modules/semantic-ui-css/semantic.css: warn: There are some @import rules in the middle of a file. This might be a bug, as imports are only valid at the beginning of a file.\nBrowserslist: caniuse-lite is outdated. Please run next command `npm update`\n\nUnable to resolve some modules:\n\n  "@babel/runtime/helpers/createSuper" in\n/G/GitFolder/azure-deploy/app/imports/ui/layouts/App.jsx\n(web.browser.legacy)\n\nIf you notice problems related to these missing modules, consider running:\n\n  meteor npm install --save @babel/runtime\n\nwarn:    Using default web config\ninfo:    meteortestdeploy: Deploying bundle tarball\ninfo:    meteortestdeploy: Running server initialisation\ninfo:    meteortestdeploy: Polling server status...\ninfo:    meteortestdeploy: Finished successfully\n')),Object(o.b)("p",null,"Your project should now be live at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://yourappname.azurewebsites.net"}),"https://yourappname.azurewebsites.net")),Object(o.b)("h1",{id:"troubleshooting-problems-i-encountered-and-how-i-solved-them"},"TROUBLESHOOTING. Problems I encountered and how I solved them."),Object(o.b)("p",null,"If you are having trouble, debug mode might be insightful. Turn it on with."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"meteor-azure -debug\n")),Object(o.b)("h4",{id:"settingsjson-file-is-not-being-read"},"settings.json file is not being read"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"PS G:\\GitFolder\\azure-deploy\\app> meteor-azure --settings G:\\GitFolder\\azure-deploy\\settings.json\ninfo:    Targetting 32-bit Node architecture\ninfo:    Validating settings file (G:\\GitFolder\\azure-deploy\\settings.json)\nerror:   Could not read settings file at 'G:\\GitFolder\\azure-deploy\\settings.json'\n")),Object(o.b)("p",null,"Your settings.json file might not be in the correct format. Try check if there is a proper about of brackets. Single quotations are not supported I believe. It is possible that your file contains hidden chars (like UTF byte order mark) possibly because of copy / paste."),Object(o.b)("h4",{id:"invalid-architecture"},"invalid architecture"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"PS G:\\GitFolder\\azure-deploy\\app> meteor-azure --settings settings.json\ninfo:    Targetting 32-bit Node architecture\ninfo:    Validating settings file (settings.json)\ninfo:    Validating Kudu connection (settings.json)\ninfo:    meteortestdeploy: Authenticating with interactive login...\nTo sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code FUPJ9NC98 to authenticate.\ninfo:    meteortestdeploy: Updating Azure application settings\ninfo:    Compiling application bundle\nInvalid architecture: os.windows.x86_32\nThe following are valid Meteor architectures:\n  os.osx.x86_64\n  os.linux.x86_64\n  os.windows.x86_64\nerror:   exec:\n")),Object(o.b)("p",null,"If you get this error, change the meteor architecture by running"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"meteor-azure --architecture 64\n")),Object(o.b)("p",null,'It is easy to troubleshoot with kudu.\nYou can access the app\'s server anytime by adding ".scm" into the url.'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"https://meteortestdeploy.scm.azurewebsites.net\n")),Object(o.b)("h2",{id:"evaluation"},"Evaluation"),Object(o.b)("p",null,"This is VERY beginner friendly, much more so than AWS. It was not hard to get around at all. One thing to note is that the Azure portal was recently redesigned, so a lot of documentation on open source programs may be slightly inaccurate in terms of where to find everything, but its still doable."),Object(o.b)("p",null,'Pricing varies. There are pay as you go plans, along with set "menus".'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/Pricing.png",alt:null})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/Pricing2.png",alt:null})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/Pricing4.png",alt:null}))),Object(o.b)("h1",{id:"pictures"},"PICTURES"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/WebsiteIsLive.png",alt:null})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/login.png",alt:null})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/ListBefore.png",alt:null})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/ItemAdded.png",alt:null})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/devopsimages/ListAfter2.png",alt:null}))))}p.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,l({ref:t},c,{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);