import m from"./Icon.wZRCdXko.js";import{_ as i}from"./nuxt-link.j8nd6SSz.js";import{u as p}from"./useDocus.LscDmUiG.js";import{d as f,J as u,b as r,c as b,L as d,E as h,F as k,K as n,w as x,f as g,l as B}from"./entry.3XZWIF70.js";import"./index.0wqzsba0.js";const $=f({__name:"AppSocialIcons",setup(w){const s=["twitter","facebook","instagram","tiktok","youtube","github","medium"],{config:a}=p(),c=u(()=>Object.entries(a.value.socials||{}).map(([o,e])=>typeof e=="object"?e:typeof e=="string"&&e&&s.includes(o)?{href:/^https?:\/\//.test(e)?e:`https://${o}.com/${e}`,icon:`fa-brands:${o}`,label:e,rel:"noopener noreferrer"}:null).filter(Boolean));return(o,e)=>{const l=m,_=i;return r(!0),b(k,null,d(h(c),t=>(r(),n(_,{key:t.label,rel:t.rel,title:t.label,"aria-label":t.label,href:t.href,target:"_blank"},{default:x(()=>[t.icon?(r(),n(l,{key:0,name:t.icon},null,8,["name"])):g("",!0)]),_:2},1032,["rel","title","aria-label","href"]))),128)}}}),E=B($,[["__scopeId","data-v-5052fd9e"]]);export{E as default};
