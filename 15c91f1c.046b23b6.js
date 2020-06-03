(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return c}));var n=r(1),a=(r(0),r(153));const i={title:"Entity-Relationship Model",sidebar_label:"Entity-Relationship Model"},s={id:"radgrad2/datamodel/entity-relationship-model",title:"Entity-Relationship Model",description:"The prior section illustrated the relationships between the data model entities in terms of class inheritance. That perspective reveals how code is shared.",source:"@site/docs/radgrad2/datamodel/entity-relationship-model.md",permalink:"/docs/radgrad2/datamodel/entity-relationship-model",sidebar_label:"Entity-Relationship Model",sidebar:"someSidebar",previous:{title:"Class Hierarchy",permalink:"/docs/radgrad2/datamodel/class-hierarchy"},next:{title:"User Management",permalink:"/docs/radgrad2/datamodel/user-management"}},o=[{value:"Users and Profiles",id:"users-and-profiles",children:[]},{value:"Courses",id:"courses",children:[]},{value:"Opportunities",id:"opportunities",children:[]},{value:"Interests",id:"interests",children:[]},{value:"Academic Plans",id:"academic-plans",children:[]},{value:"Slugs",id:"slugs",children:[]},{value:"Other entities",id:"other-entities",children:[]}],l={rightToc:o};function c({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The prior section illustrated the relationships between the data model entities in terms of class inheritance. That perspective reveals how code is shared."),Object(a.b)("p",null,'This section documents the direct relationships between data model entities.  Depending upon your perspective, you might think of these references as "pointers", "foreign keys", or "references".  For example, each document in the CourseInstance collection needs to refer to a specific Semester in which the course instance occurs, a specific student who has/is/will be taking the course, and a specific Course. These references are implemented via fields in the CourseInstance document that hold the docID to a document in the other entity\'s collection. So, each CourseInstance document has the following fields (among others): SemesterID, StudentID, and CourseID.'),Object(a.b)("h2",{id:"users-and-profiles"},"Users and Profiles"),Object(a.b)("p",null,"One of the more complicated representations in RadGrad is a user. (This is unfortunate, but the following complicated representation is the simplest one we could come up with that works effectively.)"),Object(a.b)("img",{src:"/img/radgrad2/datamodel/Profiles.png",width:"100%"}),Object(a.b)("p",null,"Each user in RadGrad is represented in two ways.  The first way is as a document in the Meteor Users collection.  Meteor provides a built-in accounts package which we use for authentication and authorization which provides this Users collection. So, in order for someone to be able to login to RadGrad, they must exist as an entry in the Users collection.   The Users collection has a very simple representation: each user has a username, which is their email address. In addition, each user has an email field, which is also their email address, and a roles field, which is managed by the standard Roles package. "),Object(a.b)("p",null,'RadGrad does not augment the documents in the User collection with all of the additional properties we need to know about users. Meteor does not recommend doing this, and after previous experience, we evolved to the current representation in which we keep a separate set of collections to manage the properties associated with users.  For this purpose, RadGrad provides a set of four "Profile" collections, each of which corresponds to a role in RadGrad: StudentProfile, FacultyProfile, MentorProfile, and StudentProfile.'),Object(a.b)("p",null,"Because there are nine properties that every user has (username, firstName, lastName, role, picture, website, interestIDs, careerGoalIDs, and userID), RadGrad provides a class called BaseProfileCollection to manage these properties. This class is not shown in the above diagram. Instead, the four Profiles have the same initial nine properties.  The MentorProfile and StudentProfile have some additional properties which are illustrated below the dotted line in their representation. "),Object(a.b)("p",null,'Each RadGrad user must fall into one of five roles: Student, Faculty, Mentor, Advisor, or Admin.  There is a "Profile" collection associated with each of the first four roles, but the Admin role has no profile associated with it.'),Object(a.b)("p",null,'The ERD in the illustration only shows the relationships for the common properties shared across all profiles, i.e. the "base" profile. As you can see, every profile has a link back to the corresponding document in the Users collection for this user, as well as references to their CareerGoals and Interests.  To find a profile given only the User document, you must search for the matching username in each of the four Profile collections. '),Object(a.b)("h2",{id:"courses"},"Courses"),Object(a.b)("p",null,"RadGrad represents courses through two entities: Course and CourseInstance."),Object(a.b)("img",{src:"/img/radgrad2/datamodel/Course.png",width:"100%"}),"Course represents semester and student-independent information about a course.",Object(a.b)("p",null,"CourseInstance represents the occurrence of a specific student taking a course for a specific semester, either in the past, present, or future. If the CourseInstance is in the past, then typically it was created as a result of uploading STAR data, in which case both the fromSTAR and verified booleans are set to true. A verified CourseInstance means that the student will earn ICE points. "),Object(a.b)("p",null,"CourseInstances in the present semester or future semester are typically created as a result of the student manipulating their degree plan. These CourseInstances have their fromSTAR and verified booleans set to false.  "),Object(a.b)("h2",{id:"opportunities"},"Opportunities"),Object(a.b)("p",null,'In RadGrad, extracurricular events and activities are called "Opportunities", and are represented by three entities: Opportunity, OpportunityType, and OpportunityInstance. '),Object(a.b)("img",{src:"/img/radgrad2/datamodel/Opportunity.png",width:"100%"}),"OpportunityType specifies the kind of Opportunity: club, event, online course, etc.",Object(a.b)("p",null,'Opportunity represents the opportunity "in the abstract", specifying its description, sponsor (i.e the faculty member responsible for managing the description and verifying student participation), the ICE points, the semesters it might be available, etc.'),Object(a.b)("p",null,'OpportunityInstance represents an "instantiation" of the Opportunity in a specific semester for a specific student. It also duplicates the ICE points and the sponsorID from the Opportunity. This enables an instance to depart from its parent Opportunity with respect to these values, and also speeds lookup.'),Object(a.b)("h2",{id:"interests"},"Interests"),Object(a.b)("p",null,'The primary "connective tissue" in RadGrad is Interests. These are topical areas in the discipline. For computer science, example Interests might be "blockchain", "bioinformatics", "Java", and so forth. Interests are grouped together through the InterestType entity. Example InterestTypes might be "Club", "Research Project", etc. '),Object(a.b)("img",{src:"/img/radgrad2/datamodel/Interest.png",width:"100%"}),Object(a.b)("p",null,"This diagram indicates that:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All Users (represented by their profiles) have at least one Interest associated with them."),Object(a.b)("li",{parentName:"ul"},"All Courses, Opportunities, Career Goals, and Teasers have at least one Interest associated with them."),Object(a.b)("li",{parentName:"ul"},"Each Interest is associated wiht one and only one InterestType.")),Object(a.b)("p",null,"This representation enables RadGrad to associate entities based on Interests: the system can find Users with similar Interests, recommend Courses to Users based upon matching Interests, and so forth. "),Object(a.b)("h2",{id:"academic-plans"},"Academic Plans"),Object(a.b)("p",null,'To understand RadGrad\'s Academic Plans, it\'s important to understand how degree programs work.  In general, departments establish degree programs such as "B.S. in Computer Science", "B.A. in Information and Computer Science", or "B.S. in Computer Science with a Security Science Specialization".  Each degree program has a set of requirements associated with it, such as the courses that must be taken, and/or the grades that must be achieved, and/or the total number of credit hours.  '),Object(a.b)("p",null,"In addition, degree programs evolve over time.  So, let's say a B.S. in CS is established in 2015 with a set of requirements.  Then, in 2017, the faculty votes to change those requirements to improve the quality or timeliness of the degree program. Students who have already declared their major as the B.S. in CS now have a choice: they can continue with the degree requirements in place at the time they started (i.e. the 2015 requirements) or they can switch to the new requirements (the 2017 requirements). "),Object(a.b)("p",null,"RadGrad's Academic Plans provide a way to represent the evolving nature of degree programs:"),Object(a.b)("img",{src:"/img/radgrad2/datamodel/AcademicPlans.png",width:"100%"}),Object(a.b)("p",null,'A "DesiredDegree" is an entity representing a degree plan such as "B.S. in Computer Science".  A set of "PlanChoices" represent the requirements for that desired degree.  The Semester indicates the time at which an Academic Plan comes into being.  The Slug just assigns the AcademicPlan a unique string identifier, such as "BS-Computer-Science-2017".'),Object(a.b)("h2",{id:"slugs"},"Slugs"),Object(a.b)("p",null,'"Slug" is a term commonly used in web application development to denote a unique string that can be used as part of a URL to identify a domain entity.  To facilitate their use in URLs, slugs are generally lower case, and consist only of letters, numbers, and hyphens or underscores. For example, in RadGrad, the slug for the "Software Engineering" Interest might be "software-engineering".'),Object(a.b)("p",null,"In RadGrad, both slugs and the 14 character MongoDB document IDs uniquely identify documents.  However, if you reset and reinitialize a RadGrad database, the document ID will be different, but its slug will stay the same."),Object(a.b)("p",null,"Slugs are used heavily in RadGrad when initializing the database from a fixture file in order to represent relationships between different entities without reference to their docID.  For example, here is an example invocation of the CareerGoals define method:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"CareerGoals.define({ name: 'Database Administrator',\n                     slug: 'database-administrator',\n                     description: 'Wrangler of SQL.',\n                     interests: ['application-development', 'software-engineering', 'databases'],\n                     moreInformation: 'http://www.bls.gov/ooh/database-administrators.htm' });\n")),Object(a.b)("p",null,'First, you can see that the slug "database-administrator" has been passed into the define method, so that this document can be referred to in future definitions by that string.'),Object(a.b)("p",null,'Second, the interests field contains an array of three slugs: "application-development", "software-engineering", "databases". Internally, the MongoDB document for this Database Administrator Career Goal will contain the 14 character document IDs for these interests, but we don\'t need to worry about that in the fixture file: we can just refer to the slugs. '),Object(a.b)("p",null,'RadGrad does not support forward referencing of Slugs. For example, when the above CareerGoal definition executes, if a Slug is referenced (such as "application-development") that is not defined, then an error is thrown. Thus, the order in which RadGrad data is loaded is important and there can be no circular dependencies among entity definitions.'),Object(a.b)("p",null,"Slugs form a unique namespace across all entities: you cannot use the same string to denote an Interest Slug and a CareerGoal slug, for example."),Object(a.b)("p",null,"Here is an ERD that illustrates which entities use Slugs:"),Object(a.b)("img",{src:"/img/radgrad2/datamodel/Slug.png",width:"100%"}),Object(a.b)("h2",{id:"other-entities"},"Other entities"),Object(a.b)("p",null,"There are a variety of other entities that are more peripheral in the data model or have a sufficiently simple structure to not warrant their own section.  Here are the remaining entities:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CareerGoal. Career goals enable RadGrad to identify appropriate combinations of curricular and extracurricular activities to prepare a student for their professional life after graduation. "),Object(a.b)("li",{parentName:"ul"},"Feed.  Feeds are a representation for recent events within RadGrad. It enables the user interface to display to all users the activities in the system: when courses and opportunities are defined, when new users join, when a user achieves a higher level, and so forth. "),Object(a.b)("li",{parentName:"ul"},"Help.  Help entities provide the text associated with the help dialog on each page."),Object(a.b)("li",{parentName:"ul"},"MentorQuestion, MentorAnswer.  These entities manage the questions and answers on the MentorSpace page."),Object(a.b)("li",{parentName:"ul"},"PublicStats.  Provides the publically available data shown on the landing page. "),Object(a.b)("li",{parentName:"ul"},"Review.  The review entities manage reviews of courses and opportunities."),Object(a.b)("li",{parentName:"ul"},"Teaser.  The teaser entities manage the YouTube videos shown in the system."),Object(a.b)("li",{parentName:"ul"},"VerificationRequest.  Manages the verification requests and responses in the system for opportunities. ")))}c.isMDXComponent=!0},153:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},h=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(r),p=n,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||i;return r?a.a.createElement(m,o({ref:t},c,{components:r})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);