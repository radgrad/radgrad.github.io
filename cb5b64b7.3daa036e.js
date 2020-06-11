(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(6),a=(n(0),n(166)),s={title:"Class Hierarchy",sidebar_label:"Class Hierarchy"},c={id:"radgrad2/datamodel/class-hierarchy",title:"Class Hierarchy",description:"Recall that every MongoDB collection is encapsulated by a Javascript class with the same name. ",source:"@site/docs/radgrad2/datamodel/class-hierarchy.md",permalink:"/docs/radgrad2/datamodel/class-hierarchy",sidebar_label:"Class Hierarchy",sidebar:"someSidebar",previous:{title:"Data Model Overview",permalink:"/docs/radgrad2/datamodel/overview"},next:{title:"Entity-Relationship Model",permalink:"/docs/radgrad2/datamodel/entity-relationship-model"}},i=[],l={rightToc:i};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Recall that every MongoDB collection is encapsulated by a Javascript class with the same name. "),Object(a.b)("p",null,"As we implemented this encapsulation, we observed that there was common functionality that could be abstracted out into a set of four superclasses:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"BaseCollection"),".  All classes (with the single exception of the UserCollection class) inherit either directly or indirectly from BaseCollection. This class provides the methods and fields used to manage a MongoDB collection that are common across RadGrad."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"BaseTypeCollection"),'.  This class extends BaseCollection with methods to support MongoDB collections that specify "types" in RadGrad.  Currently, there are two such types: InterestTypes and OpportunityTypes.'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"BaseSlugCollection"),'.  This class extends BaseCollection with methods to support the MongoDB collections whose documents must include a "slug". For more details, see the section on ',Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"entity-relationship-model.html#slugs"}),"slugs"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"BaseProfileCollection"),".  This class extends BaseSlugCollection with the methods common to the implementation of the collections to support RadGrad roles: AdvisorProfileCollection, FacultyProfileCollection, MentorProfileCollection, and StudentProfileCollection.")),Object(a.b)("p",null,"Here is the resulting class hierarchy:"),Object(a.b)("img",{src:"/img/radgrad2/datamodel/ClassHierarchy.png",width:"100%"}),Object(a.b)("p",null,'There is one exceptional class: UserCollection, which does not inherit from any of the Base classes.  This is because the UserCollection class encapsulates a "special" MongoDB collection managed by the Meteor.Accounts package. The behavior of this collection is sufficiently different from regular user-defined collections that we did not feel it was appropriate to make it a subclass of any other class. '),Object(a.b)("p",null,"All collections that extend BaseCollection are required to implement five methods:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"define"),": The ",Object(a.b)("inlineCode",{parentName:"li"},"define")," method creates a document in the collection. It returns the ",Object(a.b)("inlineCode",{parentName:"li"},"_id")," of the resulting document. The ",Object(a.b)("inlineCode",{parentName:"li"},"define")," method takes and object as its one parameter. The values in the object that refer to other documents should use ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"entity-relationship-model.html#slugs"}),"slugs"),". This supports the loading from a database fixture. For example the ",Object(a.b)("inlineCode",{parentName:"li"},"CourseInstances")," define method looks like ")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"CourseInstances.define({ academicTerm: 'Spring-2016',\n                         course: 'ics_311',\n                         verified: false,\n                         fromRegistrar: false,\n                         grade: 'B',\n                         note: '',\n                         student: 'joesmith@hawaii.edu',\n                         creditHrs: 3 });\n")),Object(a.b)("p",null,"The course, academicTerm, and student are slugs that refer to a Course, AcademicTerm, and StudentProfile."),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"update"),": The ",Object(a.b)("inlineCode",{parentName:"p"},"update")," method supports changing certain fields of a document. Some fields are immutable by design. The ",Object(a.b)("inlineCode",{parentName:"p"},"update")," method takes two parameters, the docID or slug that identifies which document to update, and an object containing the fields to change. For example the ",Object(a.b)("inlineCode",{parentName:"p"},"CourseInstances")," update method allows you to change the academicTerm, verified, fromRegistrar, grade, creditHrs, note, ice and retired fields. Once you define a CourseInstance the student and course are fixed. All the fields are optional.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"removeIt"),": The ",Object(a.b)("inlineCode",{parentName:"p"},"removeIt")," method removes a single document from the collection. This may have side affects depending on the relationships between collections. The method takes one parameter, the docID or slug, that defines which document to remove. The ",Object(a.b)("inlineCode",{parentName:"p"},"removeIt")," method may throw a Meteor exception if there are other documents refering to it. For example the ",Object(a.b)("inlineCode",{parentName:"p"},"Courses.removeIt")," method checks for CourseInstances."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"  removeIt(instance) {\n    const docID = this.getID(instance);\n    // Check that this is not referenced by any Course Instance.\n    CourseInstances.find().map((courseInstance) => {\n      if (courseInstance.courseID === docID) {\n        throw new Meteor.Error(`Course ${instance} is referenced by a course instance ${courseInstance}.`);\n      }\n      return true;\n    });\n    // OK to delete. First remove any Feeds that reference this course.\n    Feeds.find({ courseID: docID }).map((feed) => Feeds.removeIt(feed._id));\n    // Now remove the Course.\n    return super.removeIt(docID);\n  }\n")),Object(a.b)("p",null,"Notice any ",Object(a.b)("inlineCode",{parentName:"p"},"Feeds")," that refer to the removed course are also removed."),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"dumpOne"),": The ",Object(a.b)("inlineCode",{parentName:"li"},"dumpOne")," method creates a JSON object representing the document. RadGrad uses the dump object to restore the document. Restoring an object is calling define using the dump object. This means that the dump object should have slugs not IDs. The ",Object(a.b)("inlineCode",{parentName:"li"},"dumpOne")," method has one parameter the docID to dump. For example the ",Object(a.b)("inlineCode",{parentName:"li"},"CourseInstances.dumpOne")," looks like:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"  dumpOne(docID) {\n    const doc = this.findDoc(docID);\n    const academicTerm = AcademicTerms.findSlugByID(doc.termID);\n    const course = Courses.findSlugByID(doc.courseID);\n    const note = doc.note;\n    const verified = doc.verified;\n    const creditHrs = doc.creditHrs;\n    const grade = doc.grade;\n    const fromRegistrar = doc.fromRegistrar;\n    const student = Users.getProfile(doc.studentID).username;\n    const retired = doc.retired;\n    return { academicTerm, course, note, verified, fromRegistrar, creditHrs, grade, student, retired };\n  }\n")),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"checkIntegrity"),": The ",Object(a.b)("inlineCode",{parentName:"li"},"checkIntegrity")," method checks all the collection's documents ensuring that any ids refer to documents in other collections. The method returns an array of any errors/problems. If the id doesn't refer to another document then a message is pushed onto the returned array. Here's the ",Object(a.b)("inlineCode",{parentName:"li"},"CourseInstances.checkIntegrity")," method:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"  checkIntegrity() {\n    const problems = [];\n    this.find().forEach((doc) => {\n      if (!AcademicTerms.isDefined(doc.termID)) {\n        problems.push(`Bad termID: ${doc.termID}`);\n      }\n      if (!Courses.isDefined(doc.courseID)) {\n        problems.push(`Bad courseID: ${doc.courseID}`);\n      }\n      if (!Users.isDefined(doc.studentID)) {\n        problems.push(`Bad studentID: ${doc.studentID}`);\n      }\n    });\n    return problems;\n  }\n")))}d.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return n?o.a.createElement(h,c({ref:t},l,{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);