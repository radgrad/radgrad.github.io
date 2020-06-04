(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r,s=n(1),o=n(6),i=(n(0),n(156)),a={title:"Testing",sidebar_label:"Testing"},d={id:"radgrad2/developer/testing",title:"Testing",description:'RadGrad provides "unit" and "integration" tests. Both are designed to be run from the command line and useful for continuous integration. ',source:"@site/docs/radgrad2/developer/testing.md",permalink:"/docs/radgrad2/developer/testing",sidebar_label:"Testing",sidebar:"someSidebar",previous:{title:"Coding Standards",permalink:"/docs/radgrad2/developer/coding-standards"},next:{title:"End-to-End Testing",permalink:"/docs/radgrad2/developer/e2e-testing"}},c=[{value:"Unit testing",id:"unit-testing",children:[{value:"Running the tests",id:"running-the-tests",children:[]},{value:"Structure for a Collection Unit Test",id:"structure-for-a-collection-unit-test",children:[]}]},{value:"Integration testing",id:"integration-testing",children:[]},{value:"Miscellaneous testing issues.",id:"miscellaneous-testing-issues",children:[]}],l=(r="Collection",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),u={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'RadGrad provides "unit" and "integration" tests. Both are designed to be run from the command line and useful for continuous integration. '),Object(i.b)("p",null,"Unit tests are tests that run only on the server side, and which focus on verifying that the RadGrad data model (i.e. the set of Collection classes) work as intended."),Object(i.b)("p",null,"Integration tests are initiated from the client side, and test to ensure that client-server interactions work as intended. Currently, integration tests only check that Meteor method implementations function correctly. We do not yet have UI tests, such as tests that would be implemented using Selenium or some other browser driver. "),Object(i.b)("p",null,"We use the ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://mochajs.org/"}),"Mocha")," test runner and  ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"http://chaijs.com/guide/styles/#expect"}),"Chai Expect Assertions"),". We follow recommendations from the ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"http://guide.meteor.com/testing.html#unit-testing"}),"Meteor Guide Unit Testing Chapter"),". "),Object(i.b)("p",null,'Each collection class contains its tests in a "sibling" file. For example, unit tests for CourseCollection.js are located in ',Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad/blob/master/app/imports/api/course/CourseCollection.test.js"}),"CourseCollection.test.js"),". Its integration tests that focus on its Meteor Methods are located in ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad/blob/master/app/imports/api/course/CourseInstanceCollection.methods.app-test.js"}),"CourseCollection.app-test.js"),". "),Object(i.b)("p",null,"The test file names are important: Meteor wants unit tests to be in files with the suffix ",Object(i.b)("inlineCode",{parentName:"p"},"test.js"),", and integration tests to be in files with the suffix ",Object(i.b)("inlineCode",{parentName:"p"},"app-test.js"),". "),Object(i.b)("p",null,'Many tests require the database to be initialized with test values.  RadGrad provides "database fixture" files for this purpose. See the ',Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"docs/radgrad2/developer/developer-guide-database-fixtures.mdide-database-fixtures.md"}),"DB fixture")," chapter for more details."),Object(i.b)("h2",{id:"unit-testing"},"Unit testing"),Object(i.b)("h3",{id:"running-the-tests"},"Running the tests"),Object(i.b)("p",null,"To invoke the unit tests, use this command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"app$ meteor npm run test\n")),Object(i.b)("p",null,"This will implicitly run ESLint over the code base first, then run the unit tests (i.e. those files with a ",Object(i.b)("inlineCode",{parentName:"p"},"test.js")," suffix). Here's a sample invocation with some lines elided for brevity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"$ meteor npm run test\n\n> radgrad@ pretest /Users/philipjohnson/github/radgrad/radgrad/app\n> npm run lint\n\n> radgrad@ lint /Users/philipjohnson/github/radgrad/radgrad/app\n> eslint --quiet ./imports\n\n> radgrad@ test /Users/philipjohnson/github/radgrad/radgrad/app\n> TEST_BROWSER_DRIVER=nightmare meteor test --once --driver-package dispatch:mocha --no-release-check --port 3100\n\n[[[[[ Tests ]]]]]                             \n\n=> Started proxy.                             \n=> Started MongoDB.                           \nI20170829-15:08:14.714(-10)?                  \nI20170829-15:08:14.796(-10)? --------------------------------\nI20170829-15:08:14.800(-10)? ----- RUNNING SERVER TESTS -----\nI20170829-15:08:14.801(-10)? --------------------------------\nI20170829-15:08:14.804(-10)? \nI20170829-15:08:14.805(-10)?   CareerGoalCollection\nI20170829-15:08:14.806(-10)? Kadira: completed instrumenting the app\n=> Started your app.\n=> App running at: http://localhost:3100/\nI20170829-15:08:15.354(-10)? \nI20170829-15:08:15.368(-10)?     \u2713 #define, #isDefined, #removeIt, #dumpOne, #restoreOne, #getSlug, #findNames (319ms)\nI20170829-15:08:15.521(-10)?   CourseCollection\nI20170829-15:08:15.734(-10)?     \u2713 #define, #isDefined, #removeIt, #dumpOne, #restoreOne (199ms)\nI20170829-15:08:15.810(-10)?     \u2713 course shortname (74ms)\nI20170829-15:08:15.886(-10)?   CourseInstanceCollection\nI20170829-15:08:16.371(-10)?     \u2713 #define, #isDefined, #removeIt, #dumpOne, #restoreOne (208ms)\nI20170829-15:08:16.391(-10)?     \u2713 #findCourseName, #toString\n                :                       :                  :\n                :                       :                  :\nI20170829-15:08:32.692(-10)?   StudentProfileCollection\nI20170829-15:08:32.831(-10)?     \u2713 #define, #isDefined, #update, #removeIt, #dumpOne, #restoreOne (93ms)\nI20170829-15:08:32.871(-10)?   VerificationRequestCollection\nI20170829-15:08:33.121(-10)?     \u2713 #define, #isDefined, #removeIt, #findOne, #toString, #dumpOne, #restoreOne (209ms)\nI20170829-15:08:33.266(-10)?     \u2713 #define using semester and opportunity (146ms)\nI20170829-15:08:33.342(-10)?   80 passing (19s)\nI20170829-15:08:33.342(-10)?   2 pending\nI20170829-15:08:33.344(-10)? --------------------------------\nI20170829-15:08:33.344(-10)? ----- RUNNING CLIENT TESTS -----\nI20170829-15:08:33.345(-10)? --------------------------------\nI20170829-15:08:36.031(-10)?   0 passing (1ms)\nI20170829-15:08:36.048(-10)? [ERROR] There is no route for the path: /\nI20170829-15:08:36.149(-10)? All tests finished!\nI20170829-15:08:36.150(-10)? --------------------------------\nI20170829-15:08:36.151(-10)? SERVER FAILURES: 0\nI20170829-15:08:36.151(-10)? CLIENT FAILURES: 0\nI20170829-15:08:36.152(-10)? --------------------------------\n")),Object(i.b)("p",null,"There should be no server or client failures listed. There will also be no client tests at all. In RadGrad, all unit tests occur on the server side."),Object(i.b)("h4",{id:"ubuntu-running-issue"},"Ubuntu running issue"),Object(i.b)("p",null,"On some linux installations, for example Ubuntu the tests might hang and never end. This is due to missing libraries that nightmare needs. To fix this issue run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"sudo apt-get install -y xvfb x11-xkb-utils xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic x11-apps clang libdbus-1-dev libgtk2.0-dev libnotify-dev libgnome-keyring-dev libgconf2-dev libasound2-dev libcap-dev libcups2-dev libxtst-dev libxss1 libnss3-dev gcc-multilib g++-multilib\n")),Object(i.b)("p",null,"This will install xvfb and all of its dependencies."),Object(i.b)("p",null,"To run a subset of the tests you can set the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"MOCHA_GREP"),". If ",Object(i.b)("inlineCode",{parentName:"p"},"MOCHA_GREP")," matches the name of the test as defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"describe")," statement those tests will run."),Object(i.b)("h4",{id:"setting-the-mocha_grep-environment-variable"},"Setting the MOCHA_GREP environment variable"),Object(i.b)("h5",{id:"fish-shell"},"Fish shell"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),'$ env MOCHA_GREP="CourseCollection" meteor npm run test\n\n> radgrad@ pretest /Users/philipjohnson/github/radgrad/radgrad/app\n> npm run lint\n\n> radgrad@ lint /Users/philipjohnson/github/radgrad/radgrad/app\n> eslint --quiet ./imports\n\n> radgrad@ test /Users/philipjohnson/github/radgrad/radgrad/app\n> TEST_BROWSER_DRIVER=nightmare meteor test --once --driver-package dispatch:mocha --no-release-check --port 3100\n\n[[[[[ Tests ]]]]]                             \n\n=> Started proxy.                             \n=> Started MongoDB.                           \nI20170829-15:08:14.714(-10)?                  \nI20170829-15:08:14.796(-10)? --------------------------------\nI20170829-15:08:14.800(-10)? ----- RUNNING SERVER TESTS -----\nI20170829-15:08:14.801(-10)? --------------------------------\nI20170829-15:08:14.804(-10)? \nI20170829-15:08:15.521(-10)?   CourseCollection\nI20170829-15:08:15.734(-10)?     \u2713 #define, #isDefined, #removeIt, #dumpOne, #restoreOne (199ms)\nI20170829-15:08:15.810(-10)?     \u2713 course shortname (74ms)\nI20170829-15:08:33.342(-10)?   2 passing (19s)\nI20170829-15:08:33.344(-10)? --------------------------------\nI20170829-15:08:33.344(-10)? ----- RUNNING CLIENT TESTS -----\nI20170829-15:08:33.345(-10)? --------------------------------\nI20170829-15:08:36.031(-10)?   0 passing (1ms)\nI20170829-15:08:36.048(-10)? [ERROR] There is no route for the path: /\nI20170829-15:08:36.149(-10)? All tests finished!\nI20170829-15:08:36.150(-10)? --------------------------------\nI20170829-15:08:36.151(-10)? SERVER FAILURES: 0\nI20170829-15:08:36.151(-10)? CLIENT FAILURES: 0\nI20170829-15:08:36.152(-10)? --------------------------------\n')),Object(i.b)("h5",{id:"bash-shell"},"Bash shell"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),'$ export MOCHA_GREP="CourseCollection" \n$ meteor npm run test\n\n> radgrad@ pretest /Users/philipjohnson/github/radgrad/radgrad/app\n> npm run lint\n\n> radgrad@ lint /Users/philipjohnson/github/radgrad/radgrad/app\n> eslint --quiet ./imports\n\n> radgrad@ test /Users/philipjohnson/github/radgrad/radgrad/app\n> TEST_BROWSER_DRIVER=nightmare meteor test --once --driver-package dispatch:mocha --no-release-check --port 3100\n\n[[[[[ Tests ]]]]]                             \n\n=> Started proxy.                             \n=> Started MongoDB.                           \nI20170829-15:08:14.714(-10)?                  \nI20170829-15:08:14.796(-10)? --------------------------------\nI20170829-15:08:14.800(-10)? ----- RUNNING SERVER TESTS -----\nI20170829-15:08:14.801(-10)? --------------------------------\nI20170829-15:08:14.804(-10)? \nI20170829-15:08:15.521(-10)?   CourseCollection\nI20170829-15:08:15.734(-10)?     \u2713 #define, #isDefined, #removeIt, #dumpOne, #restoreOne (199ms)\nI20170829-15:08:15.810(-10)?     \u2713 course shortname (74ms)\nI20170829-15:08:33.342(-10)?   2 passing (19s)\nI20170829-15:08:33.344(-10)? --------------------------------\nI20170829-15:08:33.344(-10)? ----- RUNNING CLIENT TESTS -----\nI20170829-15:08:33.345(-10)? --------------------------------\nI20170829-15:08:36.031(-10)?   0 passing (1ms)\nI20170829-15:08:36.048(-10)? [ERROR] There is no route for the path: /\nI20170829-15:08:36.149(-10)? All tests finished!\nI20170829-15:08:36.150(-10)? --------------------------------\nI20170829-15:08:36.151(-10)? SERVER FAILURES: 0\nI20170829-15:08:36.151(-10)? CLIENT FAILURES: 0\nI20170829-15:08:36.152(-10)? --------------------------------\n')),Object(i.b)("h5",{id:"windows-powershell"},"Windows PowerShell"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),'$ $Env:MOCHA_GREP="CourseCollection" \n$ meteor npm run test-win\n\n> radgrad@ pretest C:\\GitHub\\radgrad\\app\n> npm run lint\n\n> radgrad@ lint C:\\GitHub\\radgrad\\app\n> eslint --quiet ./imports\n\n> radgrad@ test C:\\GitHub\\radgrad\\app\n> meteor test --once --driver-package dispatch:mocha --no-release-check --port 3100\n\n[[[[[ Tests ]]]]]                             \n\n=> Started proxy.                             \n=> Started MongoDB.                           \nI20170829-15:08:14.714(-10)?                  \nI20170829-15:08:14.796(-10)? --------------------------------\nI20170829-15:08:14.800(-10)? ----- RUNNING SERVER TESTS -----\nI20170829-15:08:14.801(-10)? --------------------------------\nI20170829-15:08:14.804(-10)? \nI20170829-15:08:15.521(-10)?   CourseCollection\nI20170829-15:08:15.734(-10)?     \u2713 #define, #isDefined, #removeIt, #dumpOne, #restoreOne (199ms)\nI20170829-15:08:15.810(-10)?     \u2713 course shortname (74ms)\nI20170829-15:08:33.342(-10)?   2 passing (19s)\nI20170829-15:08:33.344(-10)? --------------------------------\nI20170829-15:08:33.344(-10)? ----- RUNNING CLIENT TESTS -----\nI20170829-15:08:33.345(-10)? --------------------------------\nI20170829-15:08:36.031(-10)?   0 passing (1ms)\nI20170829-15:08:36.048(-10)? [ERROR] There is no route for the path: /\nI20170829-15:08:36.149(-10)? All tests finished!\nI20170829-15:08:36.150(-10)? --------------------------------\nI20170829-15:08:36.151(-10)? SERVER FAILURES: 0\nI20170829-15:08:36.151(-10)? CLIENT FAILURES: 0\nI20170829-15:08:36.152(-10)? --------------------------------\n')),Object(i.b)("h3",{id:"structure-for-a-collection-unit-test"},"Structure for a Collection Unit Test"),Object(i.b)("p",null,"RadGrad collection have five required methods."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"define"),": Creates a new document in the collection. Returns the document's id."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"update"),": Updates a document in the collection."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"removeIt"),": Removes a document from the collection."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"dumpOne"),": Returns a JSON object suitable for defining the document."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"checkIntegrity"),": Checks each document in the collection for integrity. Returns an array of problems.")),Object(i.b)("p",null,"All of our unit test have a standard format. We ensure that, at a minimum, we test the five methods. "),Object(i.b)("p",null,"To help simplify the testing process, we create one or more functions to make a sample document for the collection. These functions are defined and exported in a file named Sample",Object(i.b)(l,{mdxType:"Collection"}),".ts. The SampleCourses.ts defines and exports three functions, ",Object(i.b)("inlineCode",{parentName:"p"},"makeSampleCourse"),", ",Object(i.b)("inlineCode",{parentName:"p"},"makeSampleCourseInstance"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"getRandomGrade"),". We use these functions in other tests."),Object(i.b)("p",null,"The standard format looks something like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-ts"}),"if (Meteor.isServer) {\n  describe('<Name of the Collection/>', function testSuite() {\n    before(function setup() {\n      removeAllEntities(); // Always start with an empty database.\n    });\n\n    after(function teardown() {\n      removeAllEntities(); // Clean up any residual documents.\n    });\n    it('Can define and removeIt', function test1(done) { // Test the define and removeIt methods\n      this.timeout(5000);\n      // Do the tests using fast check and or faker. \n      // Define a document in the collection. const docID = <Collection>.define({ definition object });\n      // Check to see if the document is defined. expect(<Collection>.isDefined(docID)).to.be.true\n      // Remove the document. <Collection>.removeIt(docID)\n      // Check to see that the document isn't defined. expect(<Collection>.isDefined(docID)).to.be.false\n      done();\n    });\n\n    it('Can define duplicates', function test2(done) { // Test if duplicate documents can be defined\n      // Try to define two documents with the same contents.\n      // If this is legal the the two document ids should be the same.\n      // If not then the second define should throw an Exception.\n      // This test should remove the document(s) it creates.\n      done();\n    });\n\n    it('Can update', function test3(done) { // Test updating documents\n      this.timeout(5000);\n      // Create a sample document in the collection. const docID = makeSample<Collection Name>();\n      // Use fast check assert and properties to create many updates.\n      // Call update <Collection>.update(docID, { update data });\n      // Get the updated document. <Collection>.findDoc(docID);\n      // Check the document against the update data using expect.\n      // Clean up the sample document. <Collection>.removeIt(docID);\n      done();\n    });\n\n    it('Can dumpOne, removeIt, and restoreOne', function test4() { // Tests dumpOne and restoreOne\n      // Create a sample document in the collection. let docID = makeSample<Collection Name>();\n      // Get the original document. const original = <Collection>.findDoc(docID);\n      // Create the dump object. const dumpObject = <Collection>.dumpOne(docID);\n      // Remove the document. <Collection>.removeIt(docID);\n      // Ensure it is not defined. expect(<Collection>.isDefined(docID)).to.be.false;\n      // Restore the dump object. docID = <Collection>.restoreOne(dumpObject);\n      // Ensure the document is defined. expect(<Collection>.isDefined(docID)).to.be.true;\n      // Get the restored document. const restored = <Collection>.findDoc(docID);\n      // Check the restored document verses the original document.\n      // Don't clean up. We want the document for the next test.\n    });\n\n    it('Can checkIntegrity no errors', function test5() { // Tests checkIntegrity\n      // Get the problems/errors. const errors = <Collection>.checkIntegrity();\n      // If creating the sample document creates all the supporting documents then \n      // expect(errors.length).to.equal(0);\n      // If not then \n      // When we call makeSampleCourse we don't create the courses for the prereqs\n      // expect(errors.length).to.equal(course.prerequisites.length);\n    });\n  });\n}\n")),Object(i.b)("p",null,"The above five tests ensure that our collection's basic functionality works. If you define other methods for your collection then you should create more tests after the base five. For example, the CourseCollection tests has additional tests."),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-ts"}),"    it('Can get slug for course', function test7() {\n      const course = Courses.findOne({});\n      const slug = Slugs.getNameFromID(course.slugID);\n      const badSlug = faker.lorem.word();\n      expect(Courses.findSlugByID(course._id)).to.equal(slug);\n      expect(Courses.findSlugByID(course._id)).to.not.equal(badSlug);\n    });\n\n    it('Can detect if has interest', function test8() {\n      const interestID = makeSampleInterest();\n      const badInterestID = makeSampleInterest();\n      const courseID = makeSampleCourse({ interestID });\n      expect(Courses.hasInterest(courseID, interestID)).to.be.true;\n      expect(Courses.hasInterest(courseID, badInterestID)).to.be.false;\n    });\n")),Object(i.b)("h2",{id:"integration-testing"},"Integration testing"),Object(i.b)("p",null,"Integration tests check that client-level code can interact with the server side appropriately.  To invoke the integration tests, run this command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"app$ meteor npm run test-app\n")),Object(i.b)("p",null,"This will run the integration tests (i.e. those files with a ",Object(i.b)("inlineCode",{parentName:"p"},"test-app.js")," suffix). Here's a sample invocation, again with some lines elided:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"meteor npm run test-app\n\n> radgrad@ test-app /Users/philipjohnson/github/radgrad/radgrad/app\n> METEOR_NO_RELEASE_CHECK=1 TEST_BROWSER_DRIVER=nightmare meteor test --full-app --once --driver-package dispatch:mocha --port 3100\n[[[[[ Tests ]]]]]                             \n=> Started proxy.                             \n=> Started MongoDB.                           \nI20170829-15:22:11.926(-10)? --------------------------------\nI20170829-15:22:11.934(-10)? ----- RUNNING SERVER TESTS -----\nI20170829-15:22:11.935(-10)? --------------------------------\nI20170829-15:22:11.937(-10)?   0 passing (0ms)\nI20170829-15:22:11.939(-10)? --------------------------------\nI20170829-15:22:11.939(-10)? ----- RUNNING CLIENT TESTS -----\nI20170829-15:22:11.940(-10)? --------------------------------\nI20170829-15:22:11.969(-10)? Kadira: completed instrumenting the app\nI20170829-15:22:11.970(-10)? Test mode. Database initialization disabled, current database cleared, rate limiting disabled.\n=> Started your app.\n=> App running at: http://localhost:3100/\nI20170829-15:22:14.691(-10)?   CareerGoalCollection Meteor Methods \nI20170829-15:22:14.773(-10)?     Loaded database/testing/minimal.fixture.json: Sample definitions for basic entities.\nI20170829-15:22:15.310(-10)?     Loaded database/testing/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.\nI20170829-15:22:15.379(-10)?     Loaded database/testing/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.\nI20170829-15:22:16.508(-10)?     Loaded database/testing/academicplan.fixture.json: Defines Academic Plans. Requires extended.courses.interests.\nI20170829-15:22:16.746(-10)?     Loaded database/testing/abi.courseinstances.fixture.json: Abi's course instances. Requires abi.user and extended.courses.interests.\nI20170829-15:22:17.793(-10)?     \u2713 Define Method (594ms)\nI20170829-15:22:17.817(-10)?     \u2713 Update Method\nI20170829-15:22:17.849(-10)?     \u2713 Remove Method\n          :                                :                     :\n          :                                :                     :\nI20170829-15:22:36.396(-10)?   VerificationRequestCollection Meteor Methods \nI20170829-15:22:36.466(-10)?     Loaded database/testing/minimal.fixture.json: Sample definitions for basic entities.\nI20170829-15:22:36.606(-10)?     Loaded database/testing/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.\nI20170829-15:22:36.626(-10)?     Loaded database/testing/opportunities.fixture.json: Sample opportunities. Requires admin.user.\nI20170829-15:22:37.443(-10)?     \u2713 ProcessVerificationEvent Method (693ms)\nI20170829-15:22:37.446(-10)?   60 passing (23s)\nI20170829-15:22:37.446(-10)?   3 pending\nI20170829-15:22:37.611(-10)? All tests finished!\nI20170829-15:22:37.612(-10)? --------------------------------\nI20170829-15:22:37.612(-10)? SERVER FAILURES: 0\nI20170829-15:22:37.613(-10)? CLIENT FAILURES: 0\nI20170829-15:22:37.614(-10)? --------------------------------\n")),Object(i.b)("p",null,"As you can see, in contrast to unit tests, no server-only tests were invoked. "),Object(i.b)("p",null,"You can reduce the number of tests that are run by using the ",Object(i.b)("inlineCode",{parentName:"p"},"MOCHA_GREP")," environment variable, as discussed above."),Object(i.b)("h2",{id:"miscellaneous-testing-issues"},"Miscellaneous testing issues."),Object(i.b)("p",null,"Here are a few issues regarding tests."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Arrow function use with Mocha is discouraged. See ",Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"http://mochajs.org/#arrow-functions"}),"http://mochajs.org/#arrow-functions"),".")))}p.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),s=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),l=function(e){var t=s.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},u=function(e){var t=l(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?s.a.createElement(b,a({ref:t},c,{components:n})):s.a.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);