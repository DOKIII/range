var T=(m,u,n)=>new Promise((l,t)=>{var c=o=>{try{s(n.next(o))}catch(r){t(r)}},b=o=>{try{s(n.throw(o))}catch(r){t(r)}},s=o=>o.done?l(o.value):Promise.resolve(o.value).then(c,b);s((n=n.apply(m,u)).next())});import{u as w,c as x,$ as e,T as L,d as k,s as v}from"./bootstrap-CdsR1sev.js";import{a3 as B,T as N,J as $,a4 as V,a5 as S,x as f,ah as p,ak as _,at as h,au as g,aa as i,aK as P,b0 as y,P as A,ae as E}from"../jse/index-index-bN-KverB.js";const D={class:"text-muted-foreground"},F=B({name:"AuthenticationCodeLogin",__name:"code-login",props:{formSchema:{},loading:{type:Boolean,default:!1},loginPath:{default:"/auth/login"},title:{default:""},subTitle:{default:""},submitButtonText:{default:""}},emits:["submit"],setup(m,{expose:u,emit:n}){const l=m,t=n,c=w(),[b,s]=x(N({commonConfig:{hideLabel:!0,hideRequiredMark:!0},schema:$(()=>l.formSchema),showDefaultActions:!1}));function o(){return T(this,null,function*(){const{valid:a}=yield s.validate(),d=yield s.getValues();a&&t("submit",d)})}function r(){c.push(l.loginPath)}return u({getFormApi:()=>s}),(a,d)=>(S(),V("div",null,[f(L,null,{desc:p(()=>[P("span",D,[_(a.$slots,"subTitle",{},()=>[h(g(a.subTitle||i(e)("authentication.codeSubtitle")),1)])])]),default:p(()=>[_(a.$slots,"title",{},()=>[h(g(a.title||i(e)("authentication.welcomeBack"))+" 📲 ",1)])]),_:3}),f(i(b)),f(i(k),{class:y([{"cursor-wait":a.loading},"w-full"]),loading:a.loading,onClick:o},{default:p(()=>[_(a.$slots,"submitButtonText",{},()=>[h(g(a.submitButtonText||i(e)("common.login")),1)])]),_:3},8,["class","loading"]),f(i(k),{class:"mt-4 w-full",variant:"outline",onClick:d[0]||(d[0]=I=>r())},{default:p(()=>[h(g(i(e)("common.back")),1)]),_:1})]))}}),C=6,G=B({name:"CodeLogin",__name:"code-login",setup(m){const u=A(!1),n=$(()=>[{component:"VbenInput",componentProps:{placeholder:e("authentication.mobile")},fieldName:"phoneNumber",label:e("authentication.mobile"),rules:v().min(1,{message:e("authentication.mobileTip")}).refine(t=>/^\d{11}$/.test(t),{message:e("authentication.mobileErrortip")})},{component:"VbenPinInput",componentProps:{codeLength:C,createText:t=>t>0?e("authentication.sendText",[t]):e("authentication.sendCode"),placeholder:e("authentication.code")},fieldName:"code",label:e("authentication.code"),rules:v().length(C,{message:e("authentication.codeTip",[C])})}]);function l(t){return T(this,null,function*(){console.log(t)})}return(t,c)=>(S(),E(i(F),{"form-schema":n.value,loading:u.value,onSubmit:l},null,8,["form-schema","loading"]))}});export{G as default};
