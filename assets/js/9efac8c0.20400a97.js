(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8097],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3834:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={id:"ent",title:"Ent \u6570\u636e\u5e93\u6846\u67b6\u4f7f\u7528",description:"Ent \u662f Facebook \u5f00\u6e90\u7684\u4e00\u4e2a\u7b80\u5355\u6613\u7528\u7684 Database \u5b9e\u4f53\u6846\u67b6",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l={unversionedId:"guide/ent",id:"guide/ent",isDocsHomePage:!1,title:"Ent \u6570\u636e\u5e93\u6846\u67b6\u4f7f\u7528",description:"Ent \u662f Facebook \u5f00\u6e90\u7684\u4e00\u4e2a\u7b80\u5355\u6613\u7528\u7684 Database \u5b9e\u4f53\u6846\u67b6",source:"@site/docs/guide/ent.md",sourceDirName:"guide",slug:"/guide/ent",permalink:"/docs/guide/ent",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/guide/ent.md",version:"current",frontMatter:{id:"ent",title:"Ent \u6570\u636e\u5e93\u6846\u67b6\u4f7f\u7528",description:"Ent \u662f Facebook \u5f00\u6e90\u7684\u4e00\u4e2a\u7b80\u5355\u6613\u7528\u7684 Database \u5b9e\u4f53\u6846\u67b6",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Wire \u4f9d\u8d56\u6ce8\u5165",permalink:"/docs/guide/wire"},next:{title:"\u4ee3\u7801/\u9879\u76ee\u793a\u4f8b",permalink:"/docs/example/overview"}},c=[{value:"\u5b89\u88c5\u5de5\u5177",id:"\u5b89\u88c5\u5de5\u5177",children:[]},{value:"\u521b\u5efa\u5b9e\u4f53 Schema",id:"\u521b\u5efa\u5b9e\u4f53-schema",children:[]},{value:"\u521b\u5efa\u6570\u636e\u5e93\u8fde\u63a5\u5ba2\u6237\u7aef",id:"\u521b\u5efa\u6570\u636e\u5e93\u8fde\u63a5\u5ba2\u6237\u7aef",children:[]},{value:"References",id:"references",children:[]}],s={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ent")," \u662f ",(0,o.kt)("em",{parentName:"p"},"Fackbook")," \u5f00\u6e90\u7684\u4e00\u4e2a\u7b80\u5355\u6613\u7528\u7684 Database \u5b9e\u4f53\u6846\u67b6\u3002"),(0,o.kt)("p",null,"\u5b83\u4f7f\u6784\u5efa\u548c\u7ef4\u62a4\u5177\u6709\u5927\u578b\u6570\u636e\u6a21\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\u53d8\u5f97\u5bb9\u6613\uff0c\u5e76\u575a\u6301\u4ee5\u4e0b\u539f\u5219:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8f7b\u677e\u5730\u5c06\u6570\u636e\u5e93\u6a21\u5f0f\u5efa\u6a21\u4e3a\u56fe\u5f62\u7ed3\u6784\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u6a21\u5f0f\u5b9a\u4e49\u4e3a\u53ef\u7f16\u7a0b\u7684Go\u4ee3\u7801\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4ee3\u7801\u751f\u6210\u7684\u9759\u6001\u7c7b\u578b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u67e5\u8be2\u548c\u56fe\u904d\u5386\u5f88\u5bb9\u6613\u7f16\u5199\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7b80\u5355\u5730\u6269\u5c55\u548c\u4f7f\u7528Go\u6a21\u677f\u81ea\u5b9a\u4e49\u3002")),(0,o.kt)("h3",{id:"\u5b89\u88c5\u5de5\u5177"},"\u5b89\u88c5\u5de5\u5177"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get entgo.io/ent/cmd/ent\n")),(0,o.kt)("h3",{id:"\u521b\u5efa\u5b9e\u4f53-schema"},"\u521b\u5efa\u5b9e\u4f53 Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ent init User\n")),(0,o.kt)("p",null,"\u5c06\u4f1a\u5728 ",(0,o.kt)("em",{parentName:"p"},"project/ent/schema/")," \u76ee\u5f55\u4e0b\u4e3a\u7528\u6237\u751f\u6210\u6a21\u5f0f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// <project>/ent/schema/user.go\n\npackage schema\n\nimport "entgo.io/ent"\n\n// User holds the schema definition for the User entity.\ntype User struct {\n    ent.Schema\n}\n\n// Fields of the User.\nfunc (User) Fields() []ent.Field {\n    return nil\n}\n\n// Edges of the User.\nfunc (User) Edges() []ent.Edge {\n    return nil\n}\n')),(0,o.kt)("p",null,"\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," \u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"name\u3001age")," \u4e24\u4e2a\u6570\u636e\u5e93\u5b57\u6bb5:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package schema\n\nimport (\n    "entgo.io/ent"\n    "entgo.io/ent/schema/field"\n)\n\n// Fields of the User.\nfunc (User) Fields() []ent.Field {\n    return []ent.Field{\n        field.Int("age").\n            Positive(),\n        field.String("name").\n            Default("unknown"),\n    }\n}\n')),(0,o.kt)("p",null,"\u4ece\u9879\u76ee\u7684ent\u76ee\u5f55\u8fd0\u884cgo generate\uff0c\u5982\u4e0b\u6240\u793a:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go generate ./ent\n")),(0,o.kt)("h3",{id:"\u521b\u5efa\u6570\u636e\u5e93\u8fde\u63a5\u5ba2\u6237\u7aef"},"\u521b\u5efa\u6570\u636e\u5e93\u8fde\u63a5\u5ba2\u6237\u7aef"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684ent.Client\u3002\u5bf9\u4e8e\u672c\u4f8b\uff0c\u6211\u4eec\u5c06\u4f7f\u7528SQLite3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "log"\n\n    "<project>/ent"\n\n    _ "github.com/mattn/go-sqlite3"\n)\n\nfunc main() {\n    client, err := ent.Open("sqlite3", "file:ent?mode=memory&cache=shared&_fk=1")\n    if err != nil {\n        log.Fatalf("failed opening connection to sqlite: %v", err)\n    }\n    defer client.Close()\n    // Run the auto migration tool.\n    if err := client.Schema.Create(context.Background()); err != nil {\n        log.Fatalf("failed creating schema resources: %v", err)\n    }\n}\n')),(0,o.kt)("p",null,"\u7136\u540e\u8fdb\u884c\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," \u5c06\u4f1a\u5199\u5165\u5230\u6570\u636e\u5e93\u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func CreateUser(ctx context.Context, client *ent.Client) (*ent.User, error) {\n    u, err := client.User.\n        Create().\n        SetAge(30).\n        SetName("a8m").\n        Save(ctx)\n    if err != nil {\n        return nil, fmt.Errorf("failed creating user: %v", err)\n    }\n    log.Println("user was created: ", u)\n    return u, nil\n}\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://entgo.io/docs/getting-started/"},"https://entgo.io/docs/getting-started/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/blog/internal/data"},"https://github.com/go-kratos/kratos/tree/main/examples/blog/internal/data"))))}u.isMDXComponent=!0}}]);