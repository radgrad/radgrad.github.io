(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{134:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(1),r=a(6),o=(a(0),a(145)),i={title:"User Management",sidebar_label:"User Management"},s={id:"radgrad2/datamodel/user-management",title:"User Management",description:'RadGrad implements a user management scheme that combines two constructs: the Meteor User collection as well as a set of "Profile" collections that provide the specific information required for the role associated with a user. See the [Users and Profiles](entity-relationship-model.html#users) section for more information on the representation of users and profiles.',source:"@site/docs\\radgrad2\\datamodel\\user-management.md",permalink:"/docs/radgrad2/datamodel/user-management",sidebar_label:"User Management",sidebar:"someSidebar",previous:{title:"Entity-Relationship Model",permalink:"/docs/radgrad2/datamodel/entity-relationship-model"},next:{title:"ICE (Innovation, Competency, Experience)",permalink:"/docs/radgrad2/datamodel/ice"}},l=[{value:"Usernames",id:"usernames",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Passwords",id:"passwords",children:[]},{value:"Role Migration",id:"role-migration",children:[]},{value:"Email reassignment",id:"email-reassignment",children:[]},{value:"Referencing user and profile IDs in the code",id:"referencing-user-and-profile-ids-in-the-code",children:[]}],d={rightToc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'RadGrad implements a user management scheme that combines two constructs: the Meteor User collection as well as a set of "Profile" collections that provide the specific information required for the role associated with a user. See the ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"entity-relationship-model.html#users"}),"Users and Profiles")," section for more information on the representation of users and profiles."),Object(o.b)("h2",{id:"usernames"},"Usernames"),Object(o.b)("p",null,'In RadGrad, Meteor usernames are email addresses, such as "',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:radgrad@hawaii.edu"}),"radgrad@hawaii.edu"),'". This avoids situations such as creating a username like "foo" for a mentor and later finding that we need to support a student with email address ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:foo@hawaii.edu."}),"foo@hawaii.edu.")," "),Object(o.b)("p",null,'Slugs are created for each username (email address).  This is the way we guarantee that usernames are unique. Use of email addresses for users prevents certain types of collisions. For example, creating an opportunity named "java" and then later needing to define a student whose UH account is "java". '),Object(o.b)("p",null,"The username is embedded in URLs, for example: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://radgrad.ics.hawaii.edu/admin/radgrad@hawaii.edu/home"}),"http://radgrad.ics.hawaii.edu/admin/radgrad@hawaii.edu/home"),".   "),Object(o.b)("h2",{id:"authentication"},"Authentication"),Object(o.b)("p",null,"In the current instance of RadGrad (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://radgrad.ics.hawaii.edu"}),"http://radgrad.ics.hawaii.edu"),"), Students, Faculty, and Advisors must login through UH CAS with their @hawaii.edu account."),Object(o.b)("p",null,"Mentors login through Meteor accounts. They can use a hawaii.edu or non-hawaii.edu account. If it's a hawaii.edu account, it must not be defined in the Student, Faculty, or Advisor profiles."),Object(o.b)("p",null,"The single admin account logs in through Meteor Accounts, and the username and email associated with it are provided in the settings.json file.  "),Object(o.b)("p",null,"As noted above, the set of usernames must be globally unique. You can't have a student whose username is \"",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:joe@hawaii.edu"}),"joe@hawaii.edu"),'" who authenticates via CAS and a mentor whose username is also "',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:joe@hawaii.edu"}),"joe@hawaii.edu"),'" who authenticates via Meteor accounts. The SlugCollection will fail when trying to define the profile for the second ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:joe@hawaii.edu"}),"joe@hawaii.edu"),"."),Object(o.b)("h2",{id:"passwords"},"Passwords"),Object(o.b)("p",null,"No plain-text passwords are stored in JSON data or in ProfileCollections.   "),Object(o.b)("p",null,"Students, Faculty, and Advisors use CAS to login, so lack of password field is no problem. "),Object(o.b)("p",null,"Mentors and the admin account use the Meteor accounts password reset/email mechanism. This is a bummer since each time we reload/restore the database from scratch, all of these folks will need to reset their password. Later on, it might be possible to retrieve the bcrypted version of their password, save it in the JSON, and somehow restore that upon system reload. Or we could send an auto-generated email to these users each time with a random, newly generated password.  In either case, we will need to set up email for both development and production systems to support Meteor accounts with password set/reset/recovery."),Object(o.b)("p",null,"In the settings file, we provide a flag which sets the password to something simple for development purposes only."),Object(o.b)("h2",{id:"role-migration"},"Role Migration"),Object(o.b)("p",null,"There are two common forms of role migration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Student to Alumni.  The student profile collection will have an optional field called isAlumni. If present and truthy, then this student is an alumni and their role will be set to ROLE.ALUMNI.  For now, that means: (a) the user cannot login to RadGrad, and (b) that user will not appear in listings of students.  This just gives us a way to preserve their data while not cluttering up the social network with departed students.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Student/Alumni to Mentor.  If a student wants to become a mentor, then they need to have a different account (gmail?) which we will use to set up their profile. "))),Object(o.b)("h2",{id:"email-reassignment"},"Email reassignment"),Object(o.b)("p",null,"The approach documented in this page does not currently address email reassignment. If ITS reuses an email address owned by a prior UH student to a new student, then that person can see the old person's profile. Unless they have been made an alumni, and then they can't login.  This is hopefully rare enough that we can deal with it on a case-by-case basis."),Object(o.b)("h2",{id:"referencing-user-and-profile-ids-in-the-code"},"Referencing user and profile IDs in the code"),Object(o.b)("p",null,"In the data model as a whole, references within collection documents to users always refer to docIDs within the Meteor.users collection.  Note that the user's email address is defined as both the account name and the email in the Meteor.users collection."),Object(o.b)("p",null,'Profile docIDs are never stored as "foreign keys" in other collections.  '),Object(o.b)("p",null,"As a result, you might see fields or variables named userID, studentID, adminID, sponsorID, facultyID, etc.  None of these refer to the profile.  They always refer to either the Meteor.users docID or to the user's account name (a.k.a. email address)."))}c.isMDXComponent=!0},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},u=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,p=u["".concat(i,".").concat(m)]||u[m]||h[m]||o;return a?r.a.createElement(p,s({ref:t},d,{components:a})):r.a.createElement(p,s({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);