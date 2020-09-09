(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||a;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(160)),c={title:"End-to-End Testing",sidebar_label:"e2e Testing"},s={unversionedId:"radgrad2/developer/e2e-testing",id:"radgrad2/developer/e2e-testing",isDocsHomePage:!1,title:"End-to-End Testing",description:"In RadGrad2 we are using TestCafe a node.js tool to automate end-to-end web testing. We added testcafe as a dev dependency in the package.json file.",source:"@site/docs/radgrad2/developer/e2e-testing.md",slug:"/radgrad2/developer/e2e-testing",permalink:"/docs/radgrad2/developer/e2e-testing",version:"current",sidebar_label:"e2e Testing",sidebar:"someSidebar",previous:{title:"Testing",permalink:"/docs/radgrad2/developer/testing"},next:{title:"Testing With Different Roles",permalink:"/docs/radgrad2/developer/testing-with-different-roles"}},i=[{value:"Identifying UI &#39;components&#39;",id:"identifying-ui-components",children:[]},{value:"Writing TestCafe tests",id:"writing-testcafe-tests",children:[{value:"Adding a new UI &#39;component&#39; id",id:"adding-a-new-ui-component-id",children:[]}]},{value:"Run RadGrad2 with known database",id:"run-radgrad2-with-known-database",children:[]}],l={rightToc:i};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In RadGrad2 we are using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://devexpress.github.io/testcafe/"}),"TestCafe")," a node.js tool to automate end-to-end web testing. We added ",Object(a.b)("inlineCode",{parentName:"p"},"testcafe")," as a dev dependency in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/app/package.json#L114"}),"package.json")," file."),Object(a.b)("h2",{id:"identifying-ui-components"},"Identifying UI 'components'"),Object(a.b)("p",null,"To test the RadGrad2 app we need to be able to select the UI components. We've created ids for each of the components we want to test. We define and export the ids so there aren't typo errors. The exported ids are in a typescript file named ",Object(a.b)("inlineCode",{parentName:"p"},"e2e-names.ts"),". The directory structure will look like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"app/\n   ui/\n     components/\n               admin/\n                    e2e-names.ts\n                    e2e-selectors.ts\n               advisor/\n                      e2e-names.ts\n                      e2e-selectors.ts\n               faculty/\n                      e2e-names.ts\n                      e2e-selectors.ts\n               mentor/\n                     e2e-names.ts\n                     e2e-selectors.ts\n               shared/\n                     e2e-names.ts\n                     e2e-selectors.ts\n               student/\n                      e2e-names.ts\n                      e2e-selectors.ts\n     pages/\n          admin/\n               e2e-names.ts\n               e2e-selectors.ts\n          advisor/\n                 e2e-names.ts\n                 e2e-selectors.ts\n          faculty/\n                 e2e-names.ts\n                 e2e-selectors.ts\n          mentor/\n                e2e-names.ts\n                e2e-selectors.ts\n          shared/\n                e2e-names.ts\n                e2e-selectors.ts\n          student/\n                 e2e-names.ts\n                 e2e-selectors.ts\n")),Object(a.b)("p",null," For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// In ui/components/shared/e2e-names.ts\nexport const helpPanelWidget = 'helpPanelWidget';\n...\n\n// In HelpPanelWidget.tsx\n...\n  return (helpMessage) ? (\n    <Grid.Column id={`${helpPanelWidget}`}>\n...\n")),Object(a.b)("p",null,"Now we have a way of accessing the ",Object(a.b)("inlineCode",{parentName:"p"},"HelpPanelWidget")," using TestCafe selectors. For example, we defined two ",Object(a.b)("inlineCode",{parentName:"p"},"HelpPanelWidget")," selectors."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"One for the title, so we can check for correct titles."),Object(a.b)("li",{parentName:"ul"},"Two for the accordion, so we can open it and check for correct contents, then close it.")),Object(a.b)("p",null,"These selectors are exported from a file named ",Object(a.b)("inlineCode",{parentName:"p"},"e2e-selectors.ts"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// In ui/components/shared/e2e-selectors.ts\nimport { helpPanelWidget } from './e2e-names';\n...\nexport const helpTitleSelector = Selector(`#${helpPanelWidget} .ui.floating.info.message .title`);\nexport const helpAccordionSelector = Selector(`#${helpPanelWidget} .ui.floating.info.message`).child('.accordion');\n")),Object(a.b)("p",null,"Currently, we don't have end-to-end tests for all the pages, widgets, and components. Hopefully, we will continue to write the missing end-to-end tests."),Object(a.b)("h2",{id:"writing-testcafe-tests"},"Writing TestCafe tests"),Object(a.b)("h3",{id:"adding-a-new-ui-component-id"},"Adding a new UI 'component' id"),Object(a.b)("p",null,"When we want add a new test for a component, we need to do several things."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create an id for the component if it doesn't already have one. Ids are the camelcase names for the component. For example, the id for the FilterCourseWidget is ",Object(a.b)("inlineCode",{parentName:"li"},"filterCourseWidget"),". We export the id from the ",Object(a.b)("inlineCode",{parentName:"li"},"e2e-names.ts")," file in the directory of the component.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// In ui/components/shared/e2e-names.ts\nexport const courseFilterWidget = 'courseFilterWidget';\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Add the id to the component.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// In ui/components/shared/CourseFilterWidget.tsx\nimport { courseFilterWidget } from './e2e-names';\n...\n  return (\n    <div id={courseFilterWidget}>\n...\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Create one or more TestCafe selectors for the component. We export the selector from the ",Object(a.b)("inlineCode",{parentName:"li"},"e2e-selectors.ts")," file in the same directory as the component.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// In ui/components/shared/e2e-selectors.ts\nimport { courseFilterWidget } from './e2e-names';\n...\nexport const courseFilterWidgetChoicesSelector = Selector('.ui.radio.checkbox');\nexport const courseFilterWidgetAllChoiceSelector = courseFilterWidgetChoicesSelector.withText('All');\nexport const courseFilterWidget300PlusChoiceSelector = courseFilterWidgetChoicesSelector.withText('300+');\nexport const courseFilterWidget400PlusChoiceSelector = courseFilterWidgetChoicesSelector.withText('400+');\nexport const courseFilterWidget600PlusChoiceSelector = courseFilterWidgetChoicesSelector.withText('600+');\n\n")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Use the selectors in a test.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"test('Course Explorer Page Filter', async (browser: any) => {\n  await browser.click('#abi'); // choose student Abigail\n  await browser.click(student2ndMenuExplorerPageSelector); // go to the Explorer page\n  await browser.click(selectExplorerMenuSelector); // got to open the menu before selecting the choice\n  await browser.click(coursesExplorerSelector); // go to the Course Explorer\n  await browser.expect(cardExplorerWidgetTitleSelector.textContent).contains('COURSES');\n  await browser.click(courseFilterWidget300PlusChoiceSelector); // select the 300+ courses\n  await browser.expect(cardExplorerWidgetCardSelector.nth(1).child('.content').child('.header').textContent).contains('Machine-Level'); // ensure the second card is 312\n  await browser.click(courseFilterWidget400PlusChoiceSelector); // select the 400+\n  await browser.expect(cardExplorerWidgetCardSelector.nth(1).child('.content').child('.header').textContent).contains('ICS 419'); // check the correct class\n  await browser.click(courseFilterWidget600PlusChoiceSelector); // select 600+\n  await browser.expect(cardExplorerWidgetCardSelector.count).eql(0); // there are no 600+ courses for Abi\n  await browser.click(courseFilterWidgetAllChoiceSelector); // select All filter\n  await browser.expect(cardExplorerWidgetCardSelector.nth(1).child('.content').child('.header').textContent).contains('ICS 101'); // check the right course\n});\n")),Object(a.b)("h2",{id:"run-radgrad2-with-known-database"},"Run RadGrad2 with known database"))}d.isMDXComponent=!0}}]);