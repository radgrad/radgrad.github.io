(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{167:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||a;return t?r.a.createElement(b,l(l({ref:n},c),{},{components:t})):r.a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},293:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/CreateProject-8d092f3ebd4ce56f19ac83072894391d.png"},294:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/AppDirectoryFiles-be2128181a93ee3b6f1ebd246e503853.png"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var o=t(2),r=t(6),a=(t(0),t(167)),i={title:"Google Cloud",sidebar_label:"Google Cloud"},l={unversionedId:"archive/devops/deployment/google-cloud",id:"archive/devops/deployment/google-cloud",isDocsHomePage:!1,title:"Google Cloud",description:"Deployment Documentation",source:"@site/docs/archive/devops/deployment/google-cloud.md",slug:"/archive/devops/deployment/google-cloud",permalink:"/docs/archive/devops/deployment/google-cloud",version:"current",sidebar_label:"Google Cloud",sidebar:"someSidebar",previous:{title:"Digital Ocean",permalink:"/docs/archive/devops/deployment/digital-ocean"},next:{title:"Microsoft Azure",permalink:"/docs/archive/devops/deployment/microsoft-azure"}},s=[{value:"Deployment Documentation",id:"deployment-documentation",children:[]},{value:"Evaluation",id:"evaluation",children:[]}],c={rightToc:s};function p(e){var n=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,i,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"deployment-documentation"},"Deployment Documentation"),Object(a.b)("h1",{id:"deploying-a-meteor-application-to-the-google-cloud"},"Deploying a meteor application to the Google Cloud"),Object(a.b)("p",null,"Sign up for google cloud.\nFollow ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/EducationLink/meteor-google-cloud"}),"meteor-google-cloud")," documentation to deploy"),Object(a.b)("p",null,"I followed the meteor-google-cloud docs but they did not work for a windows machine. I looked at other guides and found one from 2017 ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://forums.meteor.com/t/deploy-meteor-to-google-app-engine-2017/36171"}),"here"),". At first I was weary of using an older guide but I read through it anyway. I noticed that it used a lot of similar code so I tried to follow the directions of the older (2017) guide while using the resourced of the new (2019) open source project meteor-google-cloud. With a few modifications to some files everything worked!"),Object(a.b)("p",null,"Download the meteor-template-react. Verify everything is running\nRun ",Object(a.b)("inlineCode",{parentName:"p"},"npm install meteor-google-cloud -g")," to install meteor-google-cloud"),Object(a.b)("p",null,"Following the SDK install instructions, first create a new project ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://console.cloud.google.com/projectselector2/home/dashboard"}),"in the google dashboard"),"\n",Object(a.b)("img",{src:t(293).default})),Object(a.b)("p",null,"Download the SDK following this ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/sdk/docs/downloads-interactive"}),"link"),".\nAfter installing, follow the instructions on screen. They will have you log into google and select your project."),Object(a.b)("h1",{id:"setting-up-your-app-for-deployment"},"Setting up your app for deployment."),Object(a.b)("p",null,"Insert ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/arslan-r/meteor-google-cloud-windows"}),"these")," files into your app directory."),Object(a.b)("p",null,Object(a.b)("img",{src:t(294).default})),Object(a.b)("p",null,"Edit the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"env_variables:\n  ROOT_URL: https://yourAppName.appspot.com\n  MONGO_URL:\n")),Object(a.b)("p",null,"You can obtain a MONGO_URL with MongoDB Atlas following ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://radgrad.github.io/docs/devops/deployment/mongo-url/"}),"these")," directions, or use a google provided database."),Object(a.b)("p",null,"You can also chose which zone you want your app deployed in by editing"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"zones:\n")),Object(a.b)("p",null,"Thats pretty much it."),Object(a.b)("h1",{id:"deploying"},"Deploying"),Object(a.b)("p",null,"To deploy, run these in PowerShell:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"meteor build ../ --directory --architecture os.linux.x86_64 --server-only\ncp app.yaml ../bundle/\ncp Dockerfile ../bundle/\ncd ../bundle\ngcloud app deploy --verbosity=info -q\n")),Object(a.b)("h1",{id:"output"},"Output"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'PS G:\\GitFolder\\meteor-application-template-react-3\\bundle> gcloud app deploy --verbosity=info -q\nINFO: Refreshing access_token\nINFO: Reading [<googlecloudsdk.api_lib.storage.storage_util.ObjectReference object at 0x000001B85EA21688>]\nServices to deploy:\n\ndescriptor:      [G:\\GitFolder\\meteor-application-template-react-3\\bundle\\app.yaml]\nsource:          [G:\\GitFolder\\meteor-application-template-react-3\\bundle]\ntarget project:  [meteor-template-deploy]\ntarget service:  [my-service-name]\ntarget version:  [20200726t232102]\ntarget url:      [https://my-service-name-dot-meteor-template-deploy.wl.r.appspot.com]\n\n\nBeginning deployment of service [my-service-name]...\nINFO: Using Dockerfile found in G:\\GitFolder\\meteor-application-template-react-3\\bundle\nBuilding and pushing image for service [my-service-name]\nINFO: Uploading [C:\\Users\\Arsla\\AppData\\Local\\Temp\\tmptzghr51w\\src.tgz] to [staging.meteor-template-deploy.appspot.com/us.gcr.io/meteor-template-deploy/appengine/my-service-name.20200726t232102:latest]\nStarted cloud build [43321cc5-423c-4784-8f4e-c720736aca14].\nTo see logs in the Cloud Console: https://console.cloud.google.com/cloud-build/builds/43321cc5-423c-4784-8f4e-c720736aca14?project=312167436583\n----------------------------------------------------------- REMOTE BUILD OUTPUT ------------------------------------------------------------\nstarting build "43321cc5-423c-4784-8f4e-c720736aca14"\n\nFETCHSOURCE\nFetching storage object: gs://staging.meteor-template-deploy.appspot.com/us.gcr.io/meteor-template-deploy/appengine/my-service-name.20200726t232102:latest#1595830904184311\nCopying gs://staging.meteor-template-deploy.appspot.com/us.gcr.io/meteor-template-deploy/appengine/my-service-name.20200726t232102:latest#1595830904184311...\n- [1 files][ 26.9 MiB/ 26.9 MiB]\nOperation completed over 1 objects/26.9 MiB.\nBUILD\nAlready have image (with digest): gcr.io/cloud-builders/docker\n\n                   ***** NOTICE *****\n\nAlternative official `docker` images, including multiple versions across\nmultiple platforms, are maintained by the Docker Team. For details, please\nvisit https://hub.docker.com/_/docker.\n\n                ***** END OF NOTICE *****\nSending build context to Docker daemon  147.1MB\nStep 1/8 : FROM gcr.io/google_appengine/nodejs\nlatest: Pulling from google_appengine/nodejs\nDigest: sha256:361fff782ea98545dee3909398bb1646f7972110af96436e93f0c66550cae911\nStatus: Downloaded newer image for gcr.io/google_appengine/nodejs:latest\n ---\x3e 34da1d97a5b6\nStep 2/8 : RUN install_node v12.18.1\n ---\x3e Running in 26273cbfddb7\nRemoving intermediate container 26273cbfddb7\n ---\x3e efa25052b592\nStep 3/8 : RUN npm install npm@latest -g\n ---\x3e Running in d86fa657fca8\n/nodejs/bin/npm -> /nodejs/lib/node_modules/npm/bin/npm-cli.js\n/nodejs/bin/npx -> /nodejs/lib/node_modules/npm/bin/npx-cli.js\n+ npm@6.14.7\nadded 16 packages from 2 contributors, removed 17 packages and updated 19 packages in 18.843s\nRemoving intermediate container d86fa657fca8\n ---\x3e f93a921293dc\nStep 4/8 : RUN node -v\n ---\x3e Running in 3653ecceb35d\nv12.18.1\nRemoving intermediate container 3653ecceb35d\n ---\x3e dd83bbb9d8db\nStep 5/8 : RUN npm -v\n ---\x3e Running in d223188737b5\n6.14.7\nRemoving intermediate container d223188737b5\n ---\x3e dc8f889de5c0\nStep 6/8 : COPY . /app/\n ---\x3e 2975ae15daa0\nStep 7/8 : RUN (cd programs/server && npm install --unsafe-perm)\n ---\x3e Running in bb24f6438aa2\n\u2190[91mnpm\u2190[0m\u2190[91m \u2190[0m\u2190[91mWARN\u2190[0m\u2190[91m \u2190[0m\u2190[91mdeprecated\u2190[0m\u2190[91m request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142\n\u2190[0m\n> fibers@4.0.3 install /app/programs/server/node_modules/fibers\n> node build.js || nodejs build.js\n\n`linux-x64-72-glibc` exists; testing\nBinary is fine; exiting\n\n> meteor-dev-bundle@ install /app/programs/server\n> node npm-rebuild.js\n\n> core-js@3.2.1 postinstall /app/programs/server/npm/node_modules/meteor/ecmascript-runtime-client/node_modules/core-js\n> node scripts/postinstall || echo "ignore"\n\n\u2190[96mThank you for using core-js (\u2190[94m https://github.com/zloirock/core-js \u2190[96m) for polyfilling JavaScript standard library!\u2190[0m\n\n\u2190[96mThe project needs your help! Please consider supporting of core-js on Open Collective or Patreon: \u2190[0m\n\u2190[96m>\u2190[94m https://opencollective.com/core-js \u2190[0m\n\u2190[96m>\u2190[94m https://www.patreon.com/zloirock \u2190[0m\n\n\u2190[96mAlso, the author of core-js (\u2190[94m https://github.com/zloirock \u2190[96m) is looking for a good job -)\u2190[0m\n\ncore-js@3.2.1 /app/programs/server/npm/node_modules/meteor/ecmascript-runtime-client/node_modules/core-js\n\n> core-js@3.2.1 postinstall /app/programs/server/npm/node_modules/meteor/ecmascript-runtime-server/node_modules/core-js\n> node scripts/postinstall || echo "ignore"\n\n\u2190[96mThank you for using core-js (\u2190[94m https://github.com/zloirock/core-js \u2190[96m) for polyfilling JavaScript standard library!\u2190[0m\n\n\u2190[96mThe project needs your help! Please consider supporting of core-js on Open Collective or Patreon: \u2190[0m\n\u2190[96m>\u2190[94m https://opencollective.com/core-js \u2190[0m\n\u2190[96m>\u2190[94m https://www.patreon.com/zloirock \u2190[0m\n\n\u2190[96mAlso, the author of core-js (\u2190[94m https://github.com/zloirock \u2190[96m) is looking for a good job -)\u2190[0m\n\ncore-js@3.2.1 /app/programs/server/npm/node_modules/meteor/ecmascript-runtime-server/node_modules/core-js\n@babel/code-frame@7.8.3 /app/programs/server/npm/node_modules/meteor/babel-compiler/node_modules/@babel/code-frame\n@babel/highlight@7.9.0 /app/programs/server/npm/node_modules/meteor/babel-compiler/node_modules/@babel/highlight\n@babel/helper-validator-identifier@7.9.0 /app/programs/server/npm/node_modules/meteor/babel-compiler/node_modules/@babel/helper-validator-identifier\nchalk@2.4.2 /app/programs/server/npm/node_modules/meteor/babel-compiler/node_modules/chalk\nansi-styles@3.2.1 /app/programs/server/npm/node_modules/meteor/babel-compiler/node_modules/ansi-styles\n...\n...\n...\nsweetalert@2.1.2 /app/programs/server/npm/node_modules/sweetalert\ntslib@1.10.0 /app/programs/server/npm/node_modules/tslib\nuniforms@2.6.5 /app/programs/server/npm/node_modules/uniforms\nuniforms-bridge-simple-schema-2@2.6.5 /app/programs/server/npm/node_modules/uniforms-bridge-simple-schema-2\nuniforms-semantic@2.6.5 /app/programs/server/npm/node_modules/uniforms-semantic\n{\n  "npm": "6.14.7",\n  "ares": "1.16.0",\n  "brotli": "1.0.7",\n  "cldr": "37.0",\n  "http_parser": "2.9.3",\n  "icu": "67.1",\n  "llhttp": "2.0.4",\n  "modules": "72",\n  "napi": "6",\n  "nghttp2": "1.41.0",\n  "node": "12.18.1",\n  "openssl": "1.1.1g",\n  "tz": "2019c",\n  "unicode": "13.0",\n  "uv": "1.38.0",\n  "v8": "7.8.279.23-node.38",\n  "zlib": "1.2.11"\n}\nadded 134 packages from 116 contributors and audited 147 packages in 9.391s\n\n2 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\nRemoving intermediate container bb24f6438aa2\n ---\x3e f2f628dd43d7\nStep 8/8 : CMD node main.js\n ---\x3e Running in 765ff49b3259\nRemoving intermediate container 765ff49b3259\n ---\x3e db8e02d2bbe0\nSuccessfully built db8e02d2bbe0\nSuccessfully tagged us.gcr.io/meteor-template-deploy/appengine/my-service-name.20200726t232102:latest\nPUSH\nPushing us.gcr.io/meteor-template-deploy/appengine/my-service-name.20200726t232102:latest\nThe push refers to repository [us.gcr.io/meteor-template-deploy/appengine/my-service-name.20200726t232102]\n46f37560cd31: Preparing\ne16f54a0fde1: Preparing\ne7ad4d2f32a1: Preparing\nf7544333f2d8: Preparing\nc2e0d2e36ab9: Preparing\n389b2d253da5: Preparing\n7828d5e93514: Preparing\n2a74ee5a65dd: Preparing\n56cebec68a1b: Preparing\n74e2773d48ad: Preparing\n84ff92691f90: Preparing\n89e14614ab6b: Preparing\n15942b628b0d: Preparing\n389b2d253da5: Waiting\n7828d5e93514: Waiting\n2a74ee5a65dd: Waiting\n56cebec68a1b: Waiting\n74e2773d48ad: Waiting\n84ff92691f90: Waiting\n89e14614ab6b: Waiting\n15942b628b0d: Waiting\nc2e0d2e36ab9: Layer already exists\nf7544333f2d8: Layer already exists\n7828d5e93514: Layer already exists\n389b2d253da5: Layer already exists\n2a74ee5a65dd: Layer already exists\n56cebec68a1b: Layer already exists\n84ff92691f90: Layer already exists\n74e2773d48ad: Layer already exists\n89e14614ab6b: Layer already exists\n15942b628b0d: Layer already exists\n46f37560cd31: Pushed\ne7ad4d2f32a1: Pushed\ne16f54a0fde1: Pushed\nlatest: digest: sha256:459eb237b1521e3774531acadfd4b9f566c168751f7a98834701145e7fec409a size: 3052\nDONE\n--------------------------------------------------------------------------------------------------------------------------------------------\n\nUpdating service [my-service-name] (this may take several minutes)...done.\nSetting traffic split for service [my-service-name]...done.\nDeployed service [my-service-name] to [https://my-service-name-dot-meteor-template-deploy.wl.r.appspot.com]\n\nYou can stream logs from the command line by running:\n  $ gcloud app logs tail -s my-service-name\n\nTo view your application in the web browser run:\n  $ gcloud app browse -s my-service-name\nINFO: Display format: "none"\n')),Object(a.b)("h6",{id:"note-this-was-done-on-a-windows-10-system-using-windows-subsystem-for-linux-2-wsl-2"},"Note: This was done on a Windows 10 System using Windows Subsystem for Linux 2 (WSL 2)"),Object(a.b)("h4",{id:"installation"},"Installation"),Object(a.b)("p",null,"Open up Windows Powershell as administrator and use ",Object(a.b)("inlineCode",{parentName:"p"},"npm install meteor-google-cloud -g"),"."),Object(a.b)("h4",{id:"google-cloud-cli"},"Google Cloud CLI"),Object(a.b)("p",null,"Login in to your google account. On the cloud console, go to the cloud selector page, and create a new project. Ensure billing is enabled."),Object(a.b)("p",null,"(Image to be added)"),Object(a.b)("p",null,"On your terminal (not Powershell), use ",Object(a.b)("inlineCode",{parentName:"p"},"sudo apt-get install apt-transport-https ca-certificates gnupg")," to install apt-transport-https. Use ",Object(a.b)("inlineCode",{parentName:"p"},'echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list')," to add the cloud SDK distribution."),Object(a.b)("p",null,"Import the public key with ",Object(a.b)("inlineCode",{parentName:"p"},"curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -")),Object(a.b)("p",null,"Update the SDK with ",Object(a.b)("inlineCode",{parentName:"p"},"sudo apt-get update")),Object(a.b)("p",null,"Install the SDK with ",Object(a.b)("inlineCode",{parentName:"p"},"sudo apt-get install google-cloud-sdk")),Object(a.b)("h4",{id:"deployment"},"Deployment"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"git clone https://github.com/ics-software-engineering/meteor-application-template.git")," to clone the Meteor Application Template from Github. Change into the app directory."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"gcloud init")," to create the deploy directory with the necessary files for deployment."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"gcloud app create")," to start the app and pick the region closest to you."),Object(a.b)("p",null,"Change into the deploy directory and edit the ",Object(a.b)("inlineCode",{parentName:"p"},"settings.json")," file. Change the project name to the project id of the project you created earlier on your cloud console. Edit the ",Object(a.b)("inlineCode",{parentName:"p"},"app.yml")," file and change the service to ",Object(a.b)("inlineCode",{parentName:"p"},"default"),"."),Object(a.b)("p",null,"(Image to be added)"),Object(a.b)("p",null,"Deploy using ",Object(a.b)("inlineCode",{parentName:"p"},"meteor-google-cloud --settings deploy/settings.json --app deploy/app.yml --docker deploy/Dockerfile")),Object(a.b)("h4",{id:"potential-problems"},"Potential Problems"),Object(a.b)("p",null,"During my personal attempt of deployment, it was lacking a few things. I used ",Object(a.b)("inlineCode",{parentName:"p"},"meteor npm install --save @babel/runtime simpl-schema uniforms-bridge-simple-schema-2 moment lodash faker react react-dom react-redux connected-react-router react-router-dom react-router semantic-ui-react react-scroll-up-button react-slick slick-carousel react-markdown uniforms-semantic classnames uniforms sweetalert2 react-datepicker highcharts highcharts-react-official react-beautiful-dnd redux react-content-loader history")," and ",Object(a.b)("inlineCode",{parentName:"p"},"meteor npm install --save simpl-schema moment lodash faker")," to obtain all the things I was missing. "),Object(a.b)("p",null,"During the final stages of deployment, I ran into a MongoNetworkError and the APP_CONTAINER_CRASHED. According to the official ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.meteor.com/api/collections.html#mongo_connection_options"}),"documentation"),", this is a known bug that is currently being fixed. I tried the bypasses suggested, though neither has worked for me. Currently searching for a solution."),Object(a.b)("h2",{id:"evaluation"},"Evaluation"),Object(a.b)("p",null,"Please provide information about problems that occurred. Costs of service. Performance. Quality of documentation. Anything else that would be of use in deciding whether or not to choose this service over others."))}p.isMDXComponent=!0}}]);