import{a as $}from"./asyncData.EdNrv73x.js";import{I as u,H as a,d as _,$ as I,b,c as v,n as w,p as P,i as C,e as x,l as f,a8 as D,r as E,a7 as i}from"./entry.x_Boa2dn.js";import j from"./ComponentPlaygroundData.-5pNt5tr.js";import"./TabsHeader._fFgilQ-.js";import"./ComponentPlaygroundProps.KN8PYoV9.js";import"./ProseH4.RspQnUte.js";import"./Icon.n3BE06eO.js";import"./index.0wqzsba0.js";import"./nuxt-link.4oorOFpZ.js";import"./ProseCodeInline.eBrHETnj.js";import"./Badge.0qAkEyF-.js";import"./slot.PC9zu-05.js";import"./node.V6KjywBy.js";import"./ProseP.QZI6yCUR.js";import"./index.2PbxMteL.js";import"./ComponentPlaygroundSlots.vue.O_ivJ-_D.js";import"./ComponentPlaygroundTokens.vue.FJ6Nv4lb.js";async function z(e){const o=u(e);{const{data:n}=await $(`nuxt-component-meta${o?`-${o}`:""}`,()=>$fetch(`/api/component-meta${o?`/${o}`:""}`));return a(()=>n.value)}}const B=e=>(P("data-v-7645a058"),e=e(),C(),e),N=B(()=>x("div",{class:"ellipsis-item"},null,-1)),V=[N],k=_({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const o=a(()=>((t=s)=>t.top)()),n=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),c=a(()=>((t=s)=>t.zIndex)()),l=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),h=a(()=>((t=s)=>`blur(${t.blur})`)()),y=a(()=>((t=s)=>{var p,m,d;return`linear-gradient(97.62deg, ${(p=t==null?void 0:t.colors)==null?void 0:p[0]} 2.27%, ${(m=t==null?void 0:t.colors)==null?void 0:m[1]} 50.88%, ${(d=t==null?void 0:t.colors)==null?void 0:d[2]} 98.48%)`})()),s=e,{$pinceau:S}=I(s,void 0,{_cCN_top:o,_eih_insetInlineStart:n,_IfB_insetInlineEnd:r,_SsE_zIndex:c,_wj8_maxWidth:l,_t33_height:g,_Jfd_filter:h,_yUj_background:y});return(t,p)=>(b(),v("div",{class:w(["ellipsis",[u(S)]])},V,2))}}),q=f(k,[["__scopeId","data-v-7645a058"]]),A=_({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const o=a(()=>D(e.component)),n=E({...e.props}),r=await z(e.component);return{as:o,formProps:n,componentData:r}},render(e){const o=Object.entries(this.$slots).reduce((n,[r,c])=>{if(r.startsWith("component-")){const l=r.replace("component-","");n[l]=c}return n},{});return i("div",{class:"component-playground"},[i("div",{class:"component-playground-wrapper"},[i(q,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),i(e.as,{...e.formProps,class:"component-playground-component"},{...o})]),i(j,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":n=>e.formProps=n})])}}),et=f(A,[["__scopeId","data-v-af8cd031"]]);export{et as default};