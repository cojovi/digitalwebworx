import g from"./Icon.3nsBZB1C.js";import{_ as N}from"./nuxt-link.GRxPoQs3.js";import{d as C,v as B,L,H as n,I as a,b as o,c,e as y,F as I,K as V,f as i,g as w,w as H,J as P,j as A,t as D,n as F,P as b,l as j}from"./entry.i16b9l7x.js";import{u as k}from"./useDocus.yiLaMv7c.js";import"./index.0wqzsba0.js";const z={key:0},E=C({__name:"AppHeaderNavigation",setup(J){const r=B(),{navBottomLink:l}=b(),{navigation:p}=L(),{config:s}=k(),m=n(()=>{var e;return!!((e=s.value.aside)!=null&&e.level)}),d=n(()=>{var e;return((e=s.value.header)==null?void 0:e.exclude)||[]}),f=n(()=>(p.value||[]).filter(e=>!d.value.includes(e._path))),h=e=>e.exact?r.fullPath===e._path:r.fullPath.startsWith(e._path);return(e,K)=>{const v=g,x=N;return a(m)?(o(),c("nav",z,[y("ul",null,[(o(!0),c(I,null,V(a(f),t=>(o(),c("li",{key:t._path},[w(x,{class:F(["link",{active:h(t)}]),to:t.redirect?t.redirect:a(l)(t)},{default:H(()=>{var u,_;return[t.icon&&((_=(u=a(s))==null?void 0:u.header)!=null&&_.showLinkIcon)?(o(),P(v,{key:0,name:t.icon},null,8,["name"])):i("",!0),A(" "+D(t.title),1)]}),_:2},1032,["to","class"])]))),128))])])):i("",!0)}}}),q=j(E,[["__scopeId","data-v-0c398cc5"]]);export{q as default};