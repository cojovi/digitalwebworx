import{d as p,r as a,b as _,c as f,e as s,g as v,n,I as r,W as h,au as g,l as y}from"./entry.i16b9l7x.js";import V from"./Icon.3nsBZB1C.js";import{r as l}from"./slot.zhmzu9PN.js";import"./index.0wqzsba0.js";import"./node.V6KjywBy.js";const C={class:"summary"},w={class:"content"},k=p({__name:"Callout",props:{type:{type:String,default:"info",validator(o){return["info","success","warning","danger","primary"].includes(o)}},modelValue:{required:!1,default:()=>a(!1)}},emits:["update:modelValue"],setup(o,{emit:c}){const i=o,u=c,e=a(i.modelValue),m=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(t,B)=>{const d=V;return _(),f("div",{class:n(["callout",[o.type]])},[s("span",{class:"preview",onClick:m},[s("span",C,[l(t.$slots,"summary",{},void 0,!0)]),v(d,{name:"heroicons-outline:chevron-right",class:n(["icon",[r(e)&&"rotate"]])},null,8,["class"])]),h(s("div",w,[l(t.$slots,"content",{},void 0,!0)],512),[[g,r(e)]])],2)}}}),b=y(k,[["__scopeId","data-v-94e80928"]]);export{b as default};