(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(6),o=(n(0),n(173)),i={title:"Database Dump-Restore",sidebar_label:"Database Dump-Restore"},s={id:"radgrad2/datamodel/dump-restore",title:"Database Dump-Restore",description:"RadGrad implements a custom mechanism for database dumping (i.e. outputting the contents of the MongoDB database in a file in JSON format) and restoring a dumped database (i.e. loading the contents of the dump file).  We call this capability database dump-restore.",source:"@site/docs\\radgrad2\\datamodel\\dump-restore.md",permalink:"/docs/radgrad2/datamodel/dump-restore",sidebar_label:"Database Dump-Restore",sidebar:"someSidebar",previous:{title:"ICE (Innovation, Competency, Experience)",permalink:"/docs/radgrad2/datamodel/ice"},next:{title:"Pub-Sub Caching",permalink:"/docs/radgrad2/datamodel/pub-sub"}},c=[{value:"Dump",id:"dump",children:[]},{value:"Restore",id:"restore",children:[]}],d={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"RadGrad implements a custom mechanism for database dumping (i.e. outputting the contents of the MongoDB database in a file in JSON format) and restoring a dumped database (i.e. loading the contents of the dump file).  We call this capability database dump-restore."),Object(o.b)("p",null,"We are aware that MongoDB provides a built-in facility through ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/"}),"MongoDB Tools")," to dump the contents of a MongoDB database in a manner that allows reloading. We chose to develop our own custom method because we wanted a way to define database fixture files in a human-readable form, and because we were worried about database integrity problems with MongoDB as our schemas evolved and so we wanted a way to easily edit database fixture files to repair integrity violations by hand if they happened to occur. "),Object(o.b)("h2",{id:"dump"},"Dump"),Object(o.b)("p",null,"As noted previously, in RadGrad, all collections are managed through a set of Javascript classes.  The classes that wrap each collection inherit from the class BaseCollection, which defines a method called ",Object(o.b)("inlineCode",{parentName:"p"},"dumpOne()")," whose default implementation throws an error:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"})," /**\n   * Returns an object representing the definition of docID in a format appropriate to the restoreOne function.\n   * Must be overridden by each collection.\n   * @param docID A docID from this collection.\n   * @returns { Object } An object representing this document.\n   */\n  dumpOne(docID) { // eslint-disable-line\n    throw new Meteor.Error(`Default dumpOne method invoked by collection ${this._collectionName}`);\n  }\n")),Object(o.b)("p",null,"Each collection class must define a dumpOne method, which is generates an object representing the docID that it was passed. For example, here is the ",Object(o.b)("inlineCode",{parentName:"p"},"dumpOne()")," method for the CareerGoal collection:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"})," /**\n   * Returns an object representing the CareerGoal docID in a format acceptable to define().\n   * @param docID The docID of a CareerGoal.\n   * @returns { Object } An object representing the definition of docID.\n   */\n  dumpOne(docID) {\n    const doc = this.findDoc(docID);\n    const name = doc.name;\n    const slug = Slugs.getNameFromID(doc.slugID);\n    const description = doc.description;\n    const interests = _.map(doc.interestIDs, interestID => Interests.findSlugByID(interestID));\n    return { name, slug, interests, description };\n  }\n")),Object(o.b)("p",null,"You can see that this method returns an object with four fields: name, slug, interests, and description. Name, slug, and description are Strings, and Interests is an array of Strings (the Slugs corresponding to the InterestIDs in the document)."),Object(o.b)("p",null,"Now the question is, why is that the appropriate object to return from dumpOne?  To understand the answer, you need to also know that each Javascript class also defines a method called ",Object(o.b)("inlineCode",{parentName:"p"},"define()")," which accepts an object containing fields representing the initial values for a document in the underlying MongoDB collection. This is the standard way in RadGrad to create MongoDB documents in the data model.  Here, for example, is the define() method for the CareerGoal collection:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"})," /**\n   * Defines a new CareerGoal with its name, slug, and description.\n   * @example\n   * CareerGoals.define({ name: 'Database Administrator',\n   *                      slug: 'database-administrator',\n   *                      description: 'Wrangler of SQL.',\n   *                      interests: ['application-development', 'software-engineering', 'databases'],\n   *                    });\n   * @param { Object } description Object with keys name, slug, description, interests.\n   * Slug must be globally unique and previously undefined.\n   * Interests is a (possibly empty) array of defined interest slugs or interestIDs.\n   * Syllabus is optional. If supplied, should be a URL.\n   * @throws { Meteor.Error } If the slug already exists.\n   * @returns The newly created docID.\n   */\n  define({ name, slug, description, interests }) {\n    // Get Interests, throw error if any of them are not found.\n    const interestIDs = Interests.getIDs(interests);\n    // Get SlugID, throw error if found.\n    const slugID = Slugs.define({ name: slug, entityName: this.getType() });\n    const docID = this._collection.insert({ name, slugID, description, interestIDs });\n    // Connect the Slug to this Interest\n    Slugs.updateEntityID(slugID, docID);\n    return docID;\n  }\n")),Object(o.b)("p",null,"It's not necessary to understand the implementation of this define() method at this point: what is important to see is that the object returned by the dumpOne() method of the CareerGoalCollection class is in precisely the correct format required by the define() method of that same class in order to create a new CareerGoal document."),Object(o.b)("p",null,"This relationship between ",Object(o.b)("inlineCode",{parentName:"p"},"dumpOne()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"define()")," is the central idea behind RadGrad's dump mechanism. There is more code to implement the mechanics of dumping:  iterating through each docID in each collection,writing out the results as a json file, determining where to write the file, and so forth. But if you understand and can adhere to this relationship between ",Object(o.b)("inlineCode",{parentName:"p"},"dumpOne")," and ",Object(o.b)("inlineCode",{parentName:"p"},"define()"),", then you can create new classes and manage other ones successfully. "),Object(o.b)("p",null,"Note that whenever a change is made the parameters to a ",Object(o.b)("inlineCode",{parentName:"p"},"define()")," method, you must make sure to update the ",Object(o.b)("inlineCode",{parentName:"p"},"dumpOne()")," method as well!  "),Object(o.b)("h2",{id:"restore"},"Restore"),Object(o.b)("p",null,'"Restore" refers to the process of initializing the MongoDB database from scratch with the contents of a file created through the "Dump" mechanism. '),Object(o.b)("p",null,"The  process of database restoration involves the following sequence:"),Object(o.b)("p",null,'First, the developer specifies a field called "databaseRestoreFileName" in the JSON settings file passed to Meteor. For example:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'"databaseRestoreFileName": "database/snapshot/2017-08-02-14-12-04.json",\n')),Object(o.b)("p",null,"The value of this field is a path within the ",Object(o.b)("inlineCode",{parentName:"p"},"private")," directory of the RadGrad application. Here's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad/blob/master/app/private/database/snapshot/2017-08-02-14-12-04.json"}),"2017-08-14-12-04.json"),"."),Object(o.b)("p",null,"If and only if the database is empty when the system comes up, then the contents of this file will be used to initialize the database.    See the loadDatabase() function in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad/blob/master/app/imports/startup/server/initialize-db.js"}),"initialize-db.js")," to see the process."),Object(o.b)("p",null,"To ensure that the database being loaded is consistent with the system's data model, the loading process requires that two constraints are met:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The set of collections expected in the RadGrad application are all present in the database json file."),Object(o.b)("li",{parentName:"ol"},"There are no collections present in the database json file that are not expected by the application. ")),Object(o.b)("p",null,"In other words, the database json file contains exactly the set of collections required by RadGrad."),Object(o.b)("p",null,"There are other ways the loading process can fail.  As noted elsewhere, entities in the data model can link to each other. For example, a StudentProfile instance can contain a list of docIDs of the Interests associated with the student.  There can be no forward referencing in RadGrad, so any Interest associated with a StudentProfile must be defined prior to defining the profile instance. "))}l.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,b=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return n?r.a.createElement(b,s({ref:t},d,{components:n})):r.a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);