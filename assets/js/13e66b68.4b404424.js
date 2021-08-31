(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8461],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return g}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,m=d["".concat(l,".").concat(g)]||d[g]||s[g]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9976:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i={id:"tracing",title:"\u94fe\u8def\u8ffd\u8e2a",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},c=void 0,l={unversionedId:"component/middleware/tracing",id:"component/middleware/tracing",isDocsHomePage:!1,title:"\u94fe\u8def\u8ffd\u8e2a",description:"Tracing \u4e2d\u95f4\u4ef6\u4f7f\u7528 OpenTelemetry \u5b9e\u73b0\u4e86\u94fe\u8def\u8ffd\u8e2a\u3002",source:"@site/docs/component/middleware/tracing.md",sourceDirName:"component/middleware",slug:"/component/middleware/tracing",permalink:"/docs/component/middleware/tracing",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/middleware/tracing.md",tags:[],version:"current",frontMatter:{id:"tracing",title:"\u94fe\u8def\u8ffd\u8e2a",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u5f02\u5e38\u6062\u590d",permalink:"/docs/component/middleware/recovery"},next:{title:"\u53c2\u6570\u6821\u9a8c",permalink:"/docs/component/middleware/validate"}},p=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[]},{value:"References",id:"references",children:[]}],u={toc:p};function s(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tracing \u4e2d\u95f4\u4ef6\u4f7f\u7528 OpenTelemetry \u5b9e\u73b0\u4e86\u94fe\u8def\u8ffd\u8e2a\u3002"),(0,a.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"Tracing \u4e2d\u95f4\u4ef6\u4e2d\u63d0\u4f9b\u4e86\u4e24\u4e2a\u914d\u7f6e\u65b9\u6cd5 ",(0,a.kt)("inlineCode",{parentName:"p"},"WithTracerProvider()"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"WithPropagator()"),"\u3002"),(0,a.kt)("h4",{id:"withtracerprovider"},(0,a.kt)("inlineCode",{parentName:"h4"},"WithTracerProvider")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithTracerProvider(provider trace.TracerProvider) Option {\n    return func(opts *options) {\n        opts.TracerProvider = provider\n    }\n}    \n")),(0,a.kt)("p",null,"WithTracerProvider \u7528\u4e8e\u8bbe\u7f6e tracing \u7684\u94fe\u8def\u8ffd\u8e2a\u7a0b\u5e8f\u7684\u63d0\u4f9b\u8005\uff0c\u8be5\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a trace.TracerProvider\u3002"),(0,a.kt)("h4",{id:"withpropagator"},(0,a.kt)("inlineCode",{parentName:"h4"},"WithPropagator")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithPropagator(propagator propagation.TextMapPropagator) Option {\n    return func(opts *options) {\n        opts.Propagator = propagator\n    }\n}\n")),(0,a.kt)("p",null,"WithPropagator \u7528\u4e8e\u8bbe\u7f6e tracing \u7684\u6587\u672c\u6620\u5c04\u7684\u4f20\u64ad\u5668\uff0c\u8be5\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a propagation.TextMapPropagator\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("h4",{id:"server-\u4e2d\u4f7f\u7528-tracing-\u91c7\u96c6\u6570\u636e"},"server \u4e2d\u4f7f\u7528 tracing \u91c7\u96c6\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package server\n\nfunc initTracer() func() {\n    // \u521b\u5efa\u4e00\u4e2a jaeger \u7684 pipeline,\u5176\u4ed6\u6536\u96c6\u65b9\u5f0f\u53ef\u4ee5\u67e5\u770b opentelemetry \u6587\u6863\n    flush, err := jaeger.InstallNewPipeline(\n        jaeger.WithCollectorEndpoint("http://localhost:14268/api/traces"),\n        jaeger.WithSDKOptions(\n            sdktrace.WithSampler(sdktrace.AlwaysSample()),\n            sdktrace.WithResource(resource.NewWithAttributes(\n                semconv.ServiceNameKey.String("kratos-trace"),\n                attribute.String("exporter", "jaeger"),\n                attribute.Float64("float", 312.23),\n            )),\n        ),\n    )\n    if err != nil {\n        log.Fatal(err)\n    }\n    return flush\n}\n// NewGRPCServer new a gRPC server.\nfunc NewGRPCServer(c *conf.Server, executor *service.ExecutorService) *grpc.Server {\n    flush := initTracer()\n    defer flush()\n    //tr := otel.Tracer("component-main")\n    var opts = []grpc.ServerOption{\n        grpc.Middleware(\n            middleware.Chain(\n                tracing.Server(tracing.WithTracerProvider(otel.GetTracerProvider())),\n            ),\n        ),\n    }\n   // ...\n}\n')),(0,a.kt)("h4",{id:"client-\u4e2d\u4f7f\u7528-tracing-\u91c7\u96c6\u6570\u636e"},"client \u4e2d\u4f7f\u7528 tracing \u91c7\u96c6\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'\nfunc initTracer() func() {\n    // \u521b\u5efa\u4e00\u4e2a jaeger \u7684 pipeline,\u5176\u4ed6\u6536\u96c6\u65b9\u5f0f\u53ef\u4ee5\u67e5\u770b opentelemetry \u6587\u6863\n    flush, err := jaeger.InstallNewPipeline(\n        jaeger.WithCollectorEndpoint("http://localhost:14268/api/traces"),\n        jaeger.WithSDKOptions(\n            sdktrace.WithSampler(sdktrace.AlwaysSample()),\n            sdktrace.WithResource(resource.NewWithAttributes(\n                semconv.ServiceNameKey.String("kratos-trace"),\n                attribute.String("exporter", "jaeger"),\n                attribute.Float64("float", 312.23),\n            )),\n        ),\n    )\n    if err != nil {\n        log.Fatal(err)\n    }\n    return flush\n}\nfunc grpcCli() (*grpc.ClientConn, error) {\n    return grpc.DialInsecure(\n        context.Background(),\n        grpc.WithMiddleware(\n            tracing.Client(\n                tracing.WithTracerProvider(\n                    otel.GetTracerProvider(),\n                ),\n            ),\n        ),\n    )\n}\n')),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://opentelemetry.io/"},"https://opentelemetry.io/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-go/tree/main/example"},"https://github.com/open-telemetry/opentelemetry-go/tree/main/example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/go.opentelemetry.io/otel"},"https://pkg.go.dev/go.opentelemetry.io/otel"))))}s.isMDXComponent=!0}}]);