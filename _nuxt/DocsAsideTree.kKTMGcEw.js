import E from"./Icon.wZRCdXko.js";import{_ as F}from"./nuxt-link.j8nd6SSz.js";import{d as I,v as T,q as j,J as q,b as s,c as p,F as z,L as J,n as B,E as $,e as r,K as m,f,t as L,g as K,w as M,W as O,ag as R,l as W}from"./entry.3XZWIF70.js";import{u as G}from"./useDocus.LscDmUiG.js";import"./index.0wqzsba0.js";const H={class:"docs-aside-tree"},P=["onClick"],Q={class:"content"},U={class:"content"},X=I({__name:"DocsAsideTree",props:{links:{type:Array,default:()=>[]},level:{type:Number,default:0},max:{type:Number,default:null},parent:{type:Object,default:null}},setup(a){var g;const n=a,S=T(),{config:u}=G(),h=j(`docus-docs-aside-collapse-map-${((g=n.parent)==null?void 0:g._path)||"/"}`,()=>n.level===0?{}:n.links.filter(t=>!!t.children).reduce((t,o)=>(t[o._path]=!0,t),{})),i=t=>S.path===t._path,v=t=>{var o,c,d,l;if(t.children){if(typeof h.value[t._path]<"u")return h.value[t._path];if([!0,!1].includes((o=t==null?void 0:t.aside)==null?void 0:o.collapsed))return t.aside.collapsed;if(t!=null&&t.collapsed)return t==null?void 0:t.collapsed;if((d=(c=u==null?void 0:u.value)==null?void 0:c.aside)!=null&&d.collapsed)return(l=u.value.aside)==null?void 0:l.collapsed}return!1},V=t=>h.value[t._path]=!v(t),x=q(()=>n.links.some(t=>t.children));return(t,o)=>{const c=E,d=F,l=Y;return s(),p("ul",H,[(s(!0),p(z,null,J(a.links,e=>{var y,b,C,N,w;return s(),p("li",{key:e._path,class:B({"has-parent-icon":(y=a.parent)==null?void 0:y.icon,"has-children":a.level>0&&e.children,bordered:a.level>0||!$(x),active:i(e)})},[e.children?(s(),p("button",{key:0,class:"title-collapsible-button",onClick:_=>V(e)},[r("span",Q,[(b=e==null?void 0:e.navigation)!=null&&b.icon||e.icon?(s(),m(c,{key:0,name:((C=e==null?void 0:e.navigation)==null?void 0:C.icon)||e.icon,class:"icon"},null,8,["name"])):f("",!0),r("span",null,L(((N=e==null?void 0:e.navigation)==null?void 0:N.title)||e.title||e._path),1)]),r("span",null,[K(c,{name:v(e)?"lucide:chevrons-up-down":"lucide:chevrons-down-up",class:"collapsible-icon"},null,8,["name"])])],8,P)):(s(),m(d,{key:1,to:e.redirect?e.redirect:e._path,class:B(["link",{padded:a.level>0||!$(x),active:i(e)}]),exact:e.exact},{default:M(()=>{var _,D,A;return[r("span",U,[(_=e==null?void 0:e.navigation)!=null&&_.icon||e.icon?(s(),m(c,{key:0,name:((D=e==null?void 0:e.navigation)==null?void 0:D.icon)||e.icon,class:"icon"},null,8,["name"])):f("",!0),r("span",null,L(((A=e==null?void 0:e.navigation)==null?void 0:A.title)||e.title||e._path),1)])]}),_:2},1032,["to","exact","class"])),(w=e.children)!=null&&w.length&&(a.max===null||a.level+1<a.max)?O((s(),m(l,{key:2,links:e.children,level:a.level+1,parent:e,max:a.max,class:"recursive"},null,8,["links","level","parent","max"])),[[R,!v(e)]]):f("",!0)],2)}),128))])}}}),Y=W(X,[["__scopeId","data-v-307f85cd"]]);export{Y as default};
