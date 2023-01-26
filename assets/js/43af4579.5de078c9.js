"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[32328],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>l});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){return function(t){var r=u(t.components);return n.createElement(e,a({},t,{components:r}))}},u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,f=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={id:"network-layer",title:"Network Layer",original_id:"network-layer"},c=void 0,p={unversionedId:"network-layer",id:"version-v1.6.1/network-layer",title:"Network Layer",description:"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the NetworkLayer interface when creating an instance of a Relay Environment. The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application's network configuration.",source:"@site/versioned_docs/version-v1.6.1/Modern-NetworkLayer.md",sourceDirName:".",slug:"/network-layer",permalink:"/docs/v1.6.1/network-layer",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.1/Modern-NetworkLayer.md",tags:[],version:"v1.6.1",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1674756827,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{id:"network-layer",title:"Network Layer",original_id:"network-layer"},sidebar:"version-v1.6.1/docs",previous:{title:"Relay Environment",permalink:"/docs/v1.6.1/relay-environment"},next:{title:"QueryRenderer",permalink:"/docs/v1.6.1/query-renderer"}},l={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the ",(0,a.mdx)("inlineCode",{parentName:"p"},"NetworkLayer")," interface when creating an instance of a ",(0,a.mdx)("a",{parentName:"p",href:"/docs/v1.6.1/relay-environment"},"Relay Environment"),". The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application's network configuration."),(0,a.mdx)("p",null,"Currently the easiest way to create a network layer is via a helper from the ",(0,a.mdx)("inlineCode",{parentName:"p"},"relay-runtime")," package:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const {Environment, Network} = require('relay-runtime');\n\n// Define a function that fetches the results of an operation (query/mutation/etc)\n// and returns its results as a Promise:\nfunction fetchQuery(\n  operation,\n  variables,\n  cacheConfig,\n  uploadables,\n) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      // Add authentication and other headers here\n      'content-type': 'application/json'\n    },\n    body: JSON.stringify({\n      query: operation.text, // GraphQL text from input\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n\n// Create a network layer from the fetch function\nconst network = Network.create(fetchQuery);\n\n// Create an environment using this network:\nconst environment = new Environment({\n  ..., // other options\n  network,\n});\n")),(0,a.mdx)("p",null,"Note that this is a basic example to help you get started. This example could be extended with additional features such as request/response caching (enabled e.g. when ",(0,a.mdx)("inlineCode",{parentName:"p"},"cacheConfig.force")," is false) and uploading form data for mutations (the ",(0,a.mdx)("inlineCode",{parentName:"p"},"uploadables")," parameter)."))}m.isMDXComponent=!0}}]);