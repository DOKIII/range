const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/icon-403-CBLIzrLr.js","js/bootstrap-CdsR1sev.js","jse/index-index-bN-KverB.js","css/bootstrap-kJX2p7Xz.css","js/icon-404-Cse6AV5s.js","js/icon-500-ow19CVEL.js","js/icon-coming-soon-CX0yyWvb.js","js/icon-offline-BU8ER-Qm.js"])))=>i.map(i=>d[i]);
import{a3 as A,J as r,bB as n,a4 as l,a5 as a,ae as f,aB as i,aK as C,aj as L,ak as d,au as u,aa as o,ah as p,x as h,at as g,$ as c}from"../jse/index-index-bN-KverB.js";import{g as P,$ as t,u as B,d as b}from"./bootstrap-CdsR1sev.js";import{R as z}from"./rotate-cw-CuvyyUK0.js";const N=P("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),O={class:"flex size-full flex-col items-center justify-center duration-300"},F=["src"],H={class:"flex-col-center"},S={key:1,class:"text-foreground mt-8 text-2xl md:text-3xl lg:text-4xl"},j={key:3,class:"text-muted-foreground md:text-md my-4 lg:text-lg"},G=A({name:"Fallback",__name:"fallback",props:{description:{default:""},homePath:{default:"/"},image:{default:""},status:{default:"coming-soon"},title:{default:""}},setup(v){const e=v,y=n(()=>c(()=>import("./icon-403-CBLIzrLr.js"),__vite__mapDeps([0,1,2,3]))),E=n(()=>c(()=>import("./icon-404-Cse6AV5s.js"),__vite__mapDeps([4,1,2,3]))),x=n(()=>c(()=>import("./icon-500-ow19CVEL.js"),__vite__mapDeps([5,1,2,3]))),w=n(()=>c(()=>import("./icon-coming-soon-CX0yyWvb.js"),__vite__mapDeps([6,1,2,3]))),I=n(()=>c(()=>import("./icon-offline-BU8ER-Qm.js"),__vite__mapDeps([7,1,2,3]))),m=r(()=>{if(e.title)return e.title;switch(e.status){case"403":return t("ui.fallback.forbidden");case"404":return t("ui.fallback.pageNotFound");case"500":return t("ui.fallback.internalError");case"coming-soon":return t("ui.fallback.comingSoon");case"offline":return t("ui.fallback.offlineError");default:return""}}),_=r(()=>{if(e.description)return e.description;switch(e.status){case"403":return t("ui.fallback.forbiddenDesc");case"404":return t("ui.fallback.pageNotFoundDesc");case"500":return t("ui.fallback.internalErrorDesc");case"offline":return t("ui.fallback.offlineErrorDesc");default:return""}}),k=r(()=>{switch(e.status){case"403":return y;case"404":return E;case"500":return x;case"coming-soon":return w;case"offline":return I;default:return null}}),D=r(()=>e.status==="403"||e.status==="404"),$=r(()=>e.status==="500"||e.status==="offline"),{push:R}=B();function T(){R(e.homePath)}function V(){location.reload()}return(s,J)=>(a(),l("div",O,[s.image?(a(),l("img",{key:0,src:s.image,class:"md:1/3 w-1/2 lg:w-1/4"},null,8,F)):k.value?(a(),f(L(k.value),{key:1,class:"md:1/3 h-1/3 w-1/2 lg:w-1/4"})):i("",!0),C("div",H,[s.$slots.title?d(s.$slots,"title",{key:0}):m.value?(a(),l("p",S,u(m.value),1)):i("",!0),s.$slots.describe?d(s.$slots,"describe",{key:2}):_.value?(a(),l("p",j,u(_.value),1)):i("",!0),s.$slots.action?d(s.$slots,"action",{key:4}):D.value?(a(),f(o(b),{key:5,size:"lg",onClick:T},{default:p(()=>[h(o(N),{class:"mr-2 size-4"}),g(" "+u(o(t)("common.backToHome")),1)]),_:1})):$.value?(a(),f(o(b),{key:6,size:"lg",onClick:V},{default:p(()=>[h(o(z),{class:"mr-2 size-4"}),g(" "+u(o(t)("common.refresh")),1)]),_:1})):i("",!0)])]))}});export{G as _};
