import L from"./DocsAside.PNNkSkR1.js";import O from"./ProseCodeInline.LinLyzHY.js";import R from"./Alert.hASpgLsy.js";import U from"./DocsPageBottom.CBQFYJ8c.js";import G from"./DocsPrevNext.JbJRXPyA.js";import Q from"./Icon.wZRCdXko.js";import W from"./DocsToc.utoIh6i4.js";import X from"./Container.3VZS54z7.js";import{d as Y,M as Z,v as ee,J as m,r as V,q as oe,o as te,S as ne,b as u,K as A,w as h,E as t,c as g,g as r,f as x,e as _,I as se,j as y,t as ae,F as ce,n as b,p as le,i as re,l as ie}from"./entry.3XZWIF70.js";import{u as pe}from"./useDocus.LscDmUiG.js";import"./DocsAsideTree.kKTMGcEw.js";import"./nuxt-link.j8nd6SSz.js";import"./index.0wqzsba0.js";import"./slot.Nc7QC6gA.js";import"./node.V6KjywBy.js";import"./ProseA.2m6Zp7fg.js";import"./EditOnLink.vue.co8h0nlK.js";import"./DocsTocLinks.uoTReCUu.js";const ue=d=>(le("data-v-c7bf006b"),d=d(),re(),d),_e={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>_("span",{class:"title"},"Table of Contents",-1)),ve=Y({__name:"DocsPageLayout",setup(d){const{page:s}=Z(),{config:f,tree:k}=pe(),M=ee(),j=(e,o=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[e])<"u"?s.value[e]:o},T=m(()=>{var e,o,n;return!s.value||((n=(o=(e=s.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:n.length)>0}),S=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.toc)!==!1&&((l=(c=(n=(o=s.value)==null?void 0:o.body)==null?void 0:n.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),C=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.aside)!==!1&&(((o=k.value)==null?void 0:o.length)>1||((l=(c=(n=k.value)==null?void 0:n[0])==null?void 0:c.children)==null?void 0:l.length))}),E=m(()=>j("bottom",!0)),i=V(!1),a=V(null),v=()=>M.path.split("/").slice(0,2).join("/"),p=oe("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function P(){a.value&&(a.value.scrollHeight===0&&setTimeout(P,0),a.value.scrollTop=p.value.scrollTop)}return te(()=>{p.value.parentPath!==v()?(p.value.parentPath=v(),p.value.scrollTop=0):P()}),ne(()=>{a.value&&(p.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var w,B,D,I,N,$;const n=L,c=O,l=R,F=U,H=G,q=Q,z=W,J=X;return u(),A(J,{fluid:(B=(w=t(f))==null?void 0:w.main)==null?void 0:B.fluid,padded:(I=(D=t(f))==null?void 0:D.main)==null?void 0:I.padded,class:b(["docs-page-content",{fluid:($=(N=t(f))==null?void 0:N.main)==null?void 0:$.fluid,"has-toc":t(S),"has-aside":t(C)}])},{default:h(()=>[t(C)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):x("",!0),_("article",_e,[t(T)?se(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[y(" Start writing in "),r(c,null,{default:h(()=>[y("content/"+ae(t(s)._file),1)]),_:1}),y(" to see this page taking shape. ")]),_:1})),t(T)&&t(s)&&t(E)?(u(),g(ce,{key:2},[r(F),r(H)],64)):x("",!0)]),t(S)?(u(),g("div",de,[_("div",me,[_("button",{onClick:o[0]||(o[0]=K=>i.value=!t(i))},[fe,r(q,{name:"heroicons-outline:chevron-right",class:b(["icon",[t(i)&&"rotate"]])},null,8,["class"])]),_("div",{class:b(["docs-toc-wrapper",[t(i)&&"opened"]])},[r(z,{onMove:o[1]||(o[1]=K=>i.value=!1)})],2)])])):x("",!0)]),_:3},8,["fluid","padded","class"])}}}),Me=ie(ve,[["__scopeId","data-v-c7bf006b"]]);export{Me as default};