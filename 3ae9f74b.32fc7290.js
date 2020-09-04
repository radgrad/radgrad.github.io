(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return c}));var a=n(1),o=n(6),l=(n(0),n(204)),r={title:"AWS",sidebar_label:"AWS"},s={id:"devops/deployment/aws",title:"AWS",description:"As stated on their website \u201cAWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.\u201d",source:"@site/docs\\devops\\deployment\\aws.md",permalink:"/docs/devops/deployment/aws",sidebar_label:"AWS",sidebar:"someSidebar",previous:{title:"UH ITS",permalink:"/docs/devops/deployment/uh-its"},next:{title:"Obtaining MONGO_URL with MongoDB Atlas",permalink:"/docs/devops/deployment/mongo-url"}},i=[{value:"Deployment Documentation",id:"deployment-documentation",children:[]},{value:"Install",id:"install",children:[]},{value:"Step 1: Initialize your project",id:"step-1-initialize-your-project",children:[]},{value:"Step 2: Customize your Mup Config.",id:"step-2-customize-your-mup-config",children:[]},{value:"This is my personal file.",id:"this-is-my-personal-file",children:[]},{value:"Step 3: Create AWS user",id:"step-3-create-aws-user",children:[]},{value:"Step 4: Deploy",id:"step-4-deploy",children:[]},{value:"Evaluation",id:"evaluation",children:[]}],p={rightToc:i};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"As stated on their website \u201cAWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.\u201d\n",Object(l.b)("strong",{parentName:"p"},"This allows one to simply upload their code and Elastic Beanstalk will handle the deployment and scaling as needed.")," AWS allows you full control over your application with access to their monitoring tools. One other benefit is AWS Beanstalk allows one to handle some spikes in traffic with its Auto Scaling option while minimizing costs. While AWS does by default handle everything related to infrastructure, they do allow the user to retain full control and management of it. "),Object(l.b)("p",null,"   I was not able to use Meteor Up and its plug in Mup-AWS-Beanstalk to successfully upload the RadGrad2 Project, but the AWS Beanstalk site does say that all that\u2019s needed is a Git repository or an IDE, such as Eclipse or Visual Studio to upload the application. They also provide tool and tutorials to help one get started with it. "),Object(l.b)("p",null,"The only charges are for the AWS resources needed to run and store your application. The MUP AWS Beanstalk plug in lists the charges as follows"),Object(l.b)("p",null,"AWS Elastic Beanstalk is free, but you do pay for the services it uses, including:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"EC2 Instances. $8.50/month ($0.012 / hour). "),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"While the Beanstalk environment is updating, or a new version is being deployed, 25% additional servers will be used. I assume a 25% increase in price but not certain."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Application Load Balancer. Cost Varies depending on region, new and active connections, processed bytes, and rules set. Minimum cost is ~$16/month.  ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/elasticloadbalancing/pricing/"}),"Link includes a calculator to estimate cost."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Simple Storage Services (AWS S3). AWS Free Usage Tier allows for free use of S3. Limitations apply. ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Graceful Shutdown. Shuts down instances under certain conditions. If installed, costs less than $3/month. "))),Object(l.b)("p",null,"Overall, hosting on AWS is a minimum of ",Object(l.b)("strong",{parentName:"p"},"$24.50 month")," using Mup AWS Beanstalk. "),Object(l.b)("h2",{id:"deployment-documentation"},"Deployment Documentation"),Object(l.b)("h4",{id:"this-is-straight-from-the-mup-aws-beanstalk-docs-with-some-personal-comments-thrown-in"},"This is straight from the ",Object(l.b)("a",Object(a.a)({parentName:"h4"},{href:"https://github.com/zodern/mup-aws-beanstalk/blob/master/docs/getting-started.md"}),"mup-aws-beanstalk docs"),", with some personal comments thrown in"),Object(l.b)("h2",{id:"install"},"Install"),Object(l.b)("p",null,"You can install ",Object(l.b)("inlineCode",{parentName:"p"},"mup")," and ",Object(l.b)("inlineCode",{parentName:"p"},"mup-aws-beanstalk")," by running"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g mup mup-aws-beanstalk\n")),Object(l.b)("p",null,"The AWS Beanstalk plugin requires Node 4 or newer and Meteor Up 1.3.5 or newer.\nYou can check your Node version with "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node -v\n")),Object(l.b)("h2",{id:"step-1-initialize-your-project"},"Step 1: Initialize your project"),Object(l.b)("p",null,"In the terminal, run"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"cd path/to/app\nmkdir .deploy && cd .deploy\nmup init\n")),Object(l.b)("p",null,"This will create a .deploy folder in your app, and ",Object(l.b)("inlineCode",{parentName:"p"},"mup init")," will add a Meteor settings file and mup config in it."),Object(l.b)("h2",{id:"step-2-customize-your-mup-config"},"Step 2: Customize your Mup Config."),Object(l.b)("p",null,"You can replace the mup config in ",Object(l.b)("inlineCode",{parentName:"p"},".deploy/mup.js")," with this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n    app: {\n        // Tells mup that the AWS Beanstalk plugin will manage the app\n        type: 'aws-beanstalk',\n        name: 'myApp',\n        path: '../',\n        env: {\n            ROOT_URL: 'http://app.com',\n            MONGO_URL: 'mongodb://user:pass@domain.com'\n        },\n        auth: {\n            id: '12345',\n            secret: '6789'\n        },\n        minInstances: 1\n    },\n    plugins: ['mup-aws-beanstalk']\n};\n")),Object(l.b)("p",null,"You will want to modify:\n1) The app name. It must be at least 4 characters\n2) ",Object(l.b)("inlineCode",{parentName:"p"},"app.env.ROOT_URL"),".\n3) ",Object(l.b)("inlineCode",{parentName:"p"},"app.env.MONGO_URL")," You will need to get a database from mLab, Compose, or another DBaaS provider"),Object(l.b)("p",null,"The next step will provide the values for the ",Object(l.b)("inlineCode",{parentName:"p"},"app.auth")," object."),Object(l.b)("h2",{id:"this-is-my-personal-file"},"This is my personal file."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n    app: {\n        // Tells mup that the AWS Beanstalk plugin will manage the app\n        type: 'aws-beanstalk',\n        name: 'radgrad2',\n        path: 'C:\\Users\\Arsla\\OneDrive\\Desktop\\Greg\\radgrad2\\app\\.deploy',\n        env: {\n            ROOT_URL: 'http://localhost:3200/', \n            MONGO_URL: 'mongodb://localhost:27017/radgrad2' //not sure about this, but localhost:27017 is the default local host for MongoDB\n        },\n        auth: {\n            id: '12345', // AWS will provide this for you in the next step.\n            secret: '6789' // AWS will provide this for you in the next step\n        },\n        minInstances: 1\n    },\n    plugins: ['mup-aws-beanstalk']\n};\n")),Object(l.b)("h2",{id:"step-3-create-aws-user"},"Step 3: Create AWS user"),Object(l.b)("p",null,"You will need to ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://portal.aws.amazon.com/billing/signup#/start"}),"create an Amazon account")," if you do not have one."),Object(l.b)("p",null,"Next, create an IAM user at ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.aws.amazon.com/iam/home?region=us-east-1#/users"}),"https://console.aws.amazon.com/iam/home?region=us-east-1#/users")),Object(l.b)("p",null,"The access type should be ",Object(l.b)("inlineCode",{parentName:"p"},"Programmatic access"),".\nYou can select ",Object(l.b)("inlineCode",{parentName:"p"},"Add user to group")," and create a new group. The group should have the following permissions:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"AWSElasticBeanstalkFullAccess")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"IAMFullAccess")," This is used to create the roles and Instance Profiles needed by Elastic Beanstalk. After the first deploy, you can replace it with ",Object(l.b)("inlineCode",{parentName:"li"},"IAMReadOnlyAccess")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"AWSCertificateManagerFullAccess")," Used to create and manage SSL certificates for the app")),Object(l.b)("p",null,"In your mup config, set ",Object(l.b)("inlineCode",{parentName:"p"},"app.auth.id")," to the Access Key ID, and ",Object(l.b)("inlineCode",{parentName:"p"},"app.auth.secret")," to the Secret access key AWS gives you after creating the user."),Object(l.b)("h2",{id:"step-4-deploy"},"Step 4: Deploy"),Object(l.b)("p",null,"Simply run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"mup deploy\n")),Object(l.b)("p",null,"It will setup and deploy your app."),Object(l.b)("h2",{id:"evaluation"},"Evaluation"),Object(l.b)("p",null,"This is where I got an error I haven\u2019t been able to resolve. It was troublesome googling error messages specifically related to this plug in. "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Unable to load plugin mup-aws-beanstalk\nReferenceError: regeneratorRuntime is not defined\n")),Object(l.b)("p",null,"I have tried running\nnpm i -g mup mup-aws-beanstalk\nagain but no luck. Also checked to make sure that everything is updated.\nFull console log is down below. "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"PS C:\\Users\\Arsla\\OneDrive\\Desktop\\Greg\\radgrad2\\app\\.deploy> mup deploy\nUnable to load plugin mup-aws-beanstalk\nReferenceError: regeneratorRuntime is not defined\n    at C:\\Users\\Arsla\\AppData\\Roaming\\npm\\node_modules\\mup-aws-beanstalk\\lib\\command-handlers.js:11:46\n    at Object.<anonymous> (C:\\Users\\Arsla\\AppData\\Roaming\\npm\\node_modules\\mup-aws-beanstalk\\lib\\command-handlers.js:220:2)\n    at Module._compile (internal/modules/cjs/loader.js:1158:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)\n    at Module.load (internal/modules/cjs/loader.js:1002:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:901:14)\n    at Module.require (internal/modules/cjs/loader.js:1044:19)\n    at require (internal/modules/cjs/helpers.js:77:18)\n    at Object.<anonymous> (C:\\Users\\Arsla\\AppData\\Roaming\\npm\\node_modules\\mup-aws-beanstalk\\lib\\commands.js:8:24)\n    at Module._compile (internal/modules/cjs/loader.js:1158:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)\n    at Module.load (internal/modules/cjs/loader.js:1002:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:901:14)\n    at Module.require (internal/modules/cjs/loader.js:1044:19)\n    at require (internal/modules/cjs/helpers.js:77:18)\n    at Object.<anonymous> (C:\\Users\\Arsla\\AppData\\Roaming\\npm\\node_modules\\mup-aws-beanstalk\\lib\\index.js:9:18)\nPS C:\\Users\\Arsla\\OneDrive\\Desktop\\Greg\\radgrad2\\app\\.deploy>\n")))}c.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,m=u["".concat(r,".").concat(b)]||u[b]||d[b]||l;return n?o.a.createElement(m,s({ref:t},p,{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<l;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);