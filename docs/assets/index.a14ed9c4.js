import{o as i,c as d,a as l,t as m,b as x,r as u,d as h,e as _,f as y,F as v,g as w,h as $,i as b}from"./vendor.c6f98217.js";const C=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};C();var f=(o,s)=>{for(const[r,a]of s)o[r]=a;return o};const L={name:"Card",props:{post:Object}},P={class:"space-y-6 xl:space-y-10"},N=["src"],O={class:"space-y-2 xl:flex xl:items-center xl:justify-between"},k={class:"font-medium w-full flex flex-col items-center text-lg leading-6 space-y-1"},B={class:"text-white"},D={class:"text-indigo-400"};function E(o,s,r,a,e,t){return i(),d("div",P,[l("img",{class:"mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56",src:r.post.imageUrl,alt:"avatar-img"},null,8,N),l("div",O,[l("div",k,[l("h3",B,m(r.post.name),1),l("p",D,m(r.post.email),1)])])])}var M=f(L,[["render",E]]);const g=()=>x.get("https://randomuser.me/api/?results=12").then(o=>o.data.results.map(s=>({name:s.name.first+" "+s.name.last,email:s.email,imageUrl:s.picture.large}))).catch(o=>{console.log(o)}),j={components:{Card:M},setup(){const o=u([]),s=u([]),r=u(null);g().then(n=>n).then(n=>o.value=n);const a=async()=>{await g().then(c=>c).then(c=>s.value=c);let n=s.value;o.value=[...o.value,...n]},e=(n,c)=>{let p=Date.now();return function(){p+c-Date.now()<0&&(n(),p=Date.now())}},t=()=>{r.value.getBoundingClientRect().bottom-30<window.innerHeight&&a()};return h(()=>{window.addEventListener("scroll",e(t,100))}),_(()=>{window.removeEventListener("scroll",t)}),{posts:o,scrollComponent:r}}},A={class:"bg-gray-900"},F={class:"space-y-12 max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-18"},S=l("div",{class:"space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl"},[l("h2",{class:"text-3xl text-white font-extrabold tracking-tight sm:text-4xl"},"Meet our team")],-1),U={role:"list",ref:"scrollComponent",class:"space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"},V={class:"py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left"};function q(o,s,r,a,e,t){const n=y("Card");return i(),d("div",A,[l("div",F,[S,l("ul",U,[(i(!0),d(v,null,w(a.posts,c=>(i(),d("li",V,[$(n,{post:c},null,8,["post"])]))),256))],512)])])}var H=f(j,[["render",q]]);const I=b(H);I.mount("#app");