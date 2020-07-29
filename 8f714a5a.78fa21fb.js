(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var o=n(1),a=n(6),r=(n(0),n(173)),i={title:"Testing With Different Roles",sidebar_label:"Testing With Different Roles"},s={id:"radgrad2/developer/testing-with-different-roles",title:"Testing With Different Roles",description:"----------------------------------------",source:"@site/docs\\radgrad2\\developer\\testing-with-different-roles.md",permalink:"/docs/radgrad2/developer/testing-with-different-roles",sidebar_label:"Testing With Different Roles",sidebar:"someSidebar",previous:{title:"End-to-End Testing",permalink:"/docs/radgrad2/developer/e2e-testing"},next:{title:"Understanding RadGrad Academic Plans",permalink:"/docs/radgrad2/developer/building-academic-plans"}},l=[{value:"RadGrad Roles",id:"radgrad-roles",children:[]},{value:"Admin Role",id:"admin-role",children:[]},{value:"CAS Login (Student, Faculty, and Advisor)",id:"cas-login-student-faculty-and-advisor",children:[{value:"Bypassing the CAS Login",id:"bypassing-the-cas-login",children:[]}]},{value:"Mentor Login",id:"mentor-login",children:[]},{value:"Alumni Login",id:"alumni-login",children:[]},{value:"Two Users at the same time",id:"two-users-at-the-same-time",children:[]}],d={rightToc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("h2",{id:"radgrad-roles"},"RadGrad Roles"),Object(r.b)("p",null,"There are six roles for accounts in the RadGrad system: Admin, Student, Faculty, Advisor, Mentor, and Alumni. Logging into RadGrad as any one of these roles will show you what RadGrad looks like and how it functions to users of that role. Certain methods of collections assert particular roles that are the only roles authorized to execute those methods (otherwise they throw an unauthorized error). Therefore, it is important while developing RadGrad that you are logged into the correct role to be able to manually test the functionality of your code behaves as expected to any role constraints."),Object(r.b)("h2",{id:"admin-role"},"Admin Role"),Object(r.b)("p",null,"The only exception to role constraints are Admin accounts. All collections are published to Admin accounts and they should be allowed to execute any method from any collection. Logging into an Admin account takes you to its home page. At the bottom of the home page is a widget that shows all the users for a corresponding role. Clicking on any one of these accounts allows you to see RadGrad from the perspective of those accounts."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE: When you click on these accounts although you may be viewing RadGrad as a student as an example based on the URL (i.e., ",Object(r.b)("inlineCode",{parentName:"strong"},"localhost:3200/#/student/samplestudent@hawaii.edu/home"),"), you are still LOGGED IN as an Admin account. In other words, functionality that was originally restricted to students is no longer restricted due to the fact that Admins can execute any method from all collections.")),Object(r.b)("p",null,"So if you want to test out Student pages, it's recommended that you actually log into a Student account and not through the Admin account."),Object(r.b)("h2",{id:"cas-login-student-faculty-and-advisor"},"CAS Login (Student, Faculty, and Advisor)"),Object(r.b)("p",null,"Students, Faculty, and Advisors users login through the CAS system; however, the local development of RadGrad2 uses the test version of the UH CAS system. Unlike the live and real UH CAS system that students and faculty normally use, you must be added to the test CAS system manually if you were not already in it (ask to be added). Once added, you can login to your normal Student/Faculty/Advisor account with your UH email and password (if you are a Student, Faculty, Advisor, respectively) like you normally would on the real CAS system."),Object(r.b)("h3",{id:"bypassing-the-cas-login"},"Bypassing the CAS Login"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},'IMPORTANT: DO NOT commit the changes you made in the two files for this section of "Bypassing the CAS Login", you must undo them')),Object(r.b)("p",null,"Clearly you can only login to your one UH account assigned to you using CAS, and you would not be able to test with the other two roles. An easy way to bypass this is modifying ",Object(r.b)("inlineCode",{parentName:"p"},"define")," method in ",Object(r.b)("inlineCode",{parentName:"p"},"UserCollection.ts")),Object(r.b)("p",null,"This can be done by commenting the entire ",Object(r.b)("inlineCode",{parentName:"p"},"IF")," code block (Line 68 - 79 in the image below) or just deleting the other two roles you cannot log into from the ",Object(r.b)("inlineCode",{parentName:"p"},"IF")," conditionals."),Object(r.b)("img",{src:"/img/radgrad2/developer/testing-with-different-roles/usercollection-code.png",alt:"usercollection-code.png"}),Object(r.b)("p",null,"This makes it such that the Student, Faculty, and Advisor accounts are now created with a randomly generated password and can be logged into with those passwords rather than through the test CAS system. In order to generate and find the generated passwords, you must start with a clean Meteor using ",Object(r.b)("inlineCode",{parentName:"p"},"meteor reset"),". The first ",Object(r.b)("inlineCode",{parentName:"p"},"meteor npm run start")," after the reset initializes the database and will print out messages in your terminal console that contains the usernames and passwords for all the accounts whose passwords were randomly generated. Simply save at least one account for each role to be able to log into it for subsequent sessions. Note that doing ",Object(r.b)("inlineCode",{parentName:"p"},"meteor reset")," again will re-generate new passwords for those accounts."),Object(r.b)("p",null,"Now modify the ",Object(r.b)("inlineCode",{parentName:"p"},"<Dropdown.Item>"),"'s in ",Object(r.b)("inlineCode",{parentName:"p"},"RadGradLoginButtons.tsx")," (Lines 60, 61, and 63 from the image below) such that we replace ",Object(r.b)("inlineCode",{parentName:"p"},"onClick={handleClick}")," to ",Object(r.b)("inlineCode",{parentName:"p"},'as={NavLink} to="/signin"')," for the ",Object(r.b)("inlineCode",{parentName:"p"},'id="student"'),", ",Object(r.b)("inlineCode",{parentName:"p"},'id="faculty"'),", and ",Object(r.b)("inlineCode",{parentName:"p"},'id="advisor"')," similar to the ",Object(r.b)("inlineCode",{parentName:"p"},'id="mentor"'),"."),Object(r.b)("img",{src:"/img/radgrad2/developer/testing-with-different-roles/radgradloginbuttons-original.png",alt:"radgradloginbuttons-original.png"}),Object(r.b)("h2",{id:"mentor-login"},"Mentor Login"),Object(r.b)("p",null,'We already generate random passwords when we create Mentor accounts in local RadGrad2 development. Similar to how you would find the generated passwords from the "Bypassing the CAS Login" section above, you need to start with a clean Meteor using ',Object(r.b)("inlineCode",{parentName:"p"},"meteor reset"),". The first ",Object(r.b)("inlineCode",{parentName:"p"},"meteor npm run start")," then initializes the database and prints out the generated passwords for Mentor profile accounts."),Object(r.b)("h2",{id:"alumni-login"},"Alumni Login"),Object(r.b)("p",null,"Currently RadGrad2 does expose any functionality to Alumni, so there isn't really a need to test and see RadGrad from the perspective of an Alumni."),Object(r.b)("h2",{id:"two-users-at-the-same-time"},"Two Users at the same time"),Object(r.b)("p",null,"If you want to be able to be logged into two different users, you can open up an incognito window and login the second user from that window. Note that browser extensions are disabled in incognito window, so you won't have access to React or Meteor extension tools in the incognito window."))}c.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),c=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=c(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,m=u["".concat(i,".").concat(p)]||u[p]||h[p]||r;return n?a.a.createElement(m,s({ref:t},d,{components:n})):a.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);