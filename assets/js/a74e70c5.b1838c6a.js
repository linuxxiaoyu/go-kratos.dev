(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7552],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=p(r),m=o,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4535:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={id:"registry",title:"\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0",description:"Kratos Registry \u63a5\u53e3\u5206\u4e3a\u4e24\u4e2a\uff0cRegistrar\u4e3a\u5b9e\u4f8b\u6ce8\u518c\u548c\u53cd\u6ce8\u518c\uff0cDiscovery\u4e3a\u670d\u52a1\u5b9e\u4f8b\u5217\u8868\u83b7\u53d6",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},c=void 0,s={unversionedId:"component/registry",id:"component/registry",isDocsHomePage:!1,title:"\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0",description:"Kratos Registry \u63a5\u53e3\u5206\u4e3a\u4e24\u4e2a\uff0cRegistrar\u4e3a\u5b9e\u4f8b\u6ce8\u518c\u548c\u53cd\u6ce8\u518c\uff0cDiscovery\u4e3a\u670d\u52a1\u5b9e\u4f8b\u5217\u8868\u83b7\u53d6",source:"@site/docs/component/registry.md",sourceDirName:"component",slug:"/component/registry",permalink:"/docs/component/registry",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/registry.md",tags:[],version:"current",frontMatter:{id:"registry",title:"\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0",description:"Kratos Registry \u63a5\u53e3\u5206\u4e3a\u4e24\u4e2a\uff0cRegistrar\u4e3a\u5b9e\u4f8b\u6ce8\u518c\u548c\u53cd\u6ce8\u518c\uff0cDiscovery\u4e3a\u670d\u52a1\u5b9e\u4f8b\u5217\u8868\u83b7\u53d6",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u76d1\u63a7\u63a5\u53e3",permalink:"/docs/component/metrics"},next:{title:"\u5e8f\u5217\u5316",permalink:"/docs/component/encoding"}},p=[{value:"\u63a5\u53e3\u5b9e\u73b0",id:"\u63a5\u53e3\u5b9e\u73b0",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]}],l={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63a5\u53e3\u5b9e\u73b0"},"\u63a5\u53e3\u5b9e\u73b0"),(0,i.kt)("p",null,"Registry\u63a5\u53e3\u5206\u4e3a\u4e24\u4e2a\uff0cRegistrar\u4e3a\u5b9e\u4f8b\u6ce8\u518c\u548c\u53cd\u6ce8\u518c\uff0cDiscovery\u4e3a\u670d\u52a1\u5b9e\u4f8b\u5217\u8868\u83b7\u53d6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Registrar interface {\n    // \u6ce8\u518c\u5b9e\u4f8b\n    Register(ctx context.Context, service *ServiceInstance) error\n    // \u53cd\u6ce8\u518c\u5b9e\u4f8b\n    Deregister(ctx context.Context, service *ServiceInstance) error\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Discovery interface {\n    // \u6839\u636eserviceName\u76f4\u63a5\u62c9\u53d6\u5b9e\u4f8b\u5217\u8868\n    GetService(ctx context.Context, serviceName string) ([]*ServiceInstance, error)\n    // \u6839\u636eserviceName\u963b\u585e\u5f0f\u8ba2\u9605\u4e00\u4e2a\u670d\u52a1\u7684\u5b9e\u4f8b\u5217\u8868\u4fe1\u606f\n    Watch(ctx context.Context, serviceName string) (Watcher, error)\n}\n")),(0,i.kt)("p",null,"\u5df2\u652f\u6301\u7684\u5b9e\u73b0\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/consul"},"consul")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/etcd"},"etcd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kube"},"kube")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/nacos"},"nacos"))),(0,i.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("h4",{id:"\u6ce8\u518c\u670d\u52a1\u5b9e\u4f8b"},"\u6ce8\u518c\u670d\u52a1\u5b9e\u4f8b"),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2aRegistrar\uff08\u4ee5consul\u4e3a\u4f8b\uff09\uff0c\u5c06Registrar\u6ce8\u5165\u8fdbKratos\u5e94\u7528\u5b9e\u4f8b\u4e2d\uff0cKratos\u4f1a\u81ea\u52a8\u5b8c\u6210\u5b9e\u4f8b\u6ce8\u518c\u548c\u53cd\u6ce8\u518c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import consul "github.com/go-kratos/consul/registry"\nimport  "github.com/hashicorp/consul/api"\n\nclient, err := api.NewClient(api.DefaultConfig())\nif err != nil {\n    panic(err)\n}\n\napp := kratos.New(\n    kratos.Name(Name),\n    kratos.Version(Version),\n    kratos.Metadata(map[string]string{}),\n    kratos.Logger(logger),\n    kratos.Server(\n        hs,\n        gs,\n    ),\n    kratos.Registrar(consul.New(client)),\n)\n')),(0,i.kt)("h4",{id:"\u670d\u52a1\u53d1\u73b0\uff08grpc\uff09"},"\u670d\u52a1\u53d1\u73b0\uff08gRPC\uff09"),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2aDiscoverer\uff08\u4ee5consul\u4e3a\u4f8b\uff09,\u6839\u636eDial url\u683c\u5f0f",(0,i.kt)("inlineCode",{parentName:"p"},"<schema>://[namespace]/<service-name>"),"\u521b\u5efa\u4e00\u4e2aEndpoint\uff0c\u901a\u8fc7grpc.WithDiscoverer ,grpc.WithEndpoint\u521b\u5efa\u4e00\u4e2agrpc connection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/transport/http"\nimport "github.com/go-kratos/kratos/v2/transport/grpc"\n\nclient, err := api.NewClient(api.DefaultConfig())\nif err != nil {\n    panic(err)\n}\ndis := consul.New(client)\n\nendpoint := "discovery://default/provider"\nconn, err := grpc.Dial(context.Background(), grpc.WithEndpoint(endpoint), grpc.WithDiscovery(dis))\nif err != nil {\n    panic(err)\n}\n')))}u.isMDXComponent=!0}}]);