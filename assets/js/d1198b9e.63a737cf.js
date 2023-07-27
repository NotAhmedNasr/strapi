"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2177],{78:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const s={title:"Setup",tags:["testing","e2e","playwright","infrastructure"]},i=void 0,o={unversionedId:"guides/e2e/setup",id:"guides/e2e/setup",title:"Setup",description:"Overview",source:"@site/docs/guides/e2e/00-setup.md",sourceDirName:"guides/e2e",slug:"/guides/e2e/setup",permalink:"/guides/e2e/setup",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/guides/e2e/00-setup.md",tags:[{label:"testing",permalink:"/tags/testing"},{label:"e2e",permalink:"/tags/e-2-e"},{label:"playwright",permalink:"/tags/playwright"},{label:"infrastructure",permalink:"/tags/infrastructure"}],version:"current",sidebarPosition:0,frontMatter:{title:"Setup",tags:["testing","e2e","playwright","infrastructure"]},sidebar:"guides",previous:{title:"Typescript",permalink:"/guides/typescript"},next:{title:"App Template",permalink:"/guides/e2e/app-template"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Strapi Templates",id:"strapi-templates",level:2},{value:"What is Playwright?",id:"what-is-playwright",level:2},{value:"What makes a good end to end test?",id:"what-makes-a-good-end-to-end-test",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This document explains at a high level how we create our app instance, run the e2e tests and what technology we're using for e2e tests. As well as a small section on writing tests."),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("p",null,"To run the e2e tests, you must first install the playwright browsers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx playwright install\n")),(0,a.kt)("p",null,'Because we require a "fresh" instance to assert our e2e tests against this is included in the testing script so all you need to run is:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn test:e2e\n")),(0,a.kt)("p",null,"This will spawn by default a Strapi instance per testing domain (e.g. content-manager) in ",(0,a.kt)("inlineCode",{parentName:"p"},"test-apps")," where the an individual ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright.config")," will start the instance and run tests against. It will automatically link the dependencies from the instance to the monorepo because ",(0,a.kt)("inlineCode",{parentName:"p"},"test-apps")," are not considered part of the monorepo but we want to be using the most recent version of strapi (published or development) therefore meaning our most recent code changes can be tested against."),(0,a.kt)("p",null,"If you need to clean the test-apps folder because they are not working as expected, you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn test:e2e clean")," which will clean said directory."),(0,a.kt)("h2",{id:"strapi-templates"},"Strapi Templates"),(0,a.kt)("p",null,"The test-app you create uses a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/installation/templates.html"},"template")," found at ",(0,a.kt)("inlineCode",{parentName:"p"},"e2e/app-template")," in this folder we can store our premade content schemas & any customisations we may need such as other plugins / custom fields / endpoints etc."),(0,a.kt)("p",null,"If you add anything to the template, be sure to add this information to ",(0,a.kt)("a",{parentName:"p",href:"/testing/e2e/app-template"},"the docs"),"."),(0,a.kt)("h2",{id:"what-is-playwright"},"What is Playwright?"),(0,a.kt)("p",null,"Playwright enables reliable end-to-end testing for modern web apps. It's cross browser, cross platform and cross language. At Strapi we use it for Javascript automated testing."),(0,a.kt)("p",null,"For more information check out their ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro"},"docs"),". If you're struggling with their APIs, then check out their specific ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-playwright"},"API documentation"),"."),(0,a.kt)("h2",{id:"what-makes-a-good-end-to-end-test"},"What makes a good end to end test?"),(0,a.kt)("p",null,"This is the million dollar question. E2E tests typically test complete user flows that touch numerous points of the application it's testing, we're not interested in what happens during a process, only the user perspective and end results. Consider writing them with your story hat on. E.g. \"As a user I want to create a new entity,  publish that entity, and then be able to retrieve its data from the content API\"."),(0,a.kt)("p",null,"Our E2E test suite should ",(0,a.kt)("em",{parentName:"p"},"at minimum")," cover the core business flows of the product and this is lead by the QA defined set for this. Consult with your QA if you're not sure."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);