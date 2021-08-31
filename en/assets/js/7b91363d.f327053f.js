(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3590],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return p},kt:function(){return g}});var o=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=o.createContext({}),c=function(e){var r=o.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=t,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?o.createElement(m,i(i({ref:r},p),{},{components:n})):o.createElement(m,i({ref:r},p))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4498:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var o=n(2122),t=n(9756),a=(n(7294),n(3905)),i={id:"errors",title:"Errors"},l=void 0,s={unversionedId:"component/errors",id:"component/errors",isDocsHomePage:!1,title:"Errors",description:"You can define errors in protos and generate enums with protoc-gen-go.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/errors.md",sourceDirName:"component",slug:"/component/errors",permalink:"/en/docs/component/errors",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/errors.md",tags:[],version:"current",frontMatter:{id:"errors",title:"Errors"},sidebar:"docs",previous:{title:"API",permalink:"/en/docs/component/api"},next:{title:"Config",permalink:"/en/docs/component/config"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Error Defination",id:"error-defination",children:[]},{value:"Error Generation",id:"error-generation",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:c};function u(e){var r=e.components,n=(0,t.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can define errors in protos and generate enums with protoc-gen-go."),(0,a.kt)("p",null,"Error in errors pacakge implements GRPCStatus() interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // Error code, this is consistent with grpc-status and will be convert to http-status in HTTP\n    "code": 3,\n    // Error message, is a human-readable message.\n    "message": "invalid argument error",\n    // Error details\n    "details": [\n        {\n            "@type": "type.googleapis.com/google.rpc.ErrorInfo",\n            // Error Reason, is the Error code in business logic.\n            "reason": "custom_error",\n            // Error domain, is the business domain.\n            "domain": "helloworld"\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install google.golang.org/protobuf/cmd/protoc-gen-go\n")),(0,a.kt)("h3",{id:"error-defination"},"Error Defination"),(0,a.kt)("p",null,"api/helloworld/v1/helloworld.proto"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage api.helloworld.v1;\n\n// language-specified package name\noption go_package = "api/helloworld/v1;v1";\noption java_multiple_files = true;\noption java_package = "helloworld.v1";\noption objc_class_prefix = "APIHelloworldV1";\n\nenum ErrorReason {\n  // Do not use this default value.\n  ERROR_REASON_UNSPECIFIED = 0;\n  // The request is calling a disabled service for a consumer.\n  SERVICE_DISABLED = 1;\n}\n')),(0,a.kt)("h3",{id:"error-generation"},"Error Generation"),(0,a.kt)("p",null,"To generate code with protoc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"protoc --go_out=. --go_opt=paths=source_relative api/helloworld/v1/error_reason.proto\n")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/errors"\nimport "<app>/api/helloworld/v1"\n\nfunc doSomething() error {\n    return errors.BadRequest("hellworld", v1.SERVICE_DISABLED.String(), "service has been disabled")\n}\n\nif err := doSomething(); errors.IsBadRequest(err) {\n    // TODO\n}\n\nif err := doSomething(); errors.Reason(err) == v1.SERVICE_DISABLED.String() {\n    // TODO\n}\n')))}u.isMDXComponent=!0}}]);