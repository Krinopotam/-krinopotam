import{m as p}from"./index-DGqZ_Opy.js";const y=t=>t instanceof Array,a=t=>!!t&&Object.prototype.toString.call(t)==="[object Promise]",O=t=>{if(!(!t||typeof t!="object"))return Object.keys(t)},b=t=>{const o=O(t);return o?o.length:0},j=(t,o)=>p(t,o),g=(t,o)=>{if(typeof t!="object")return t;const f=(n,e,c)=>{if(!n)return n;const i={};e++;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const r=n[s];typeof r!="object"||e>=c?i[s]=r:i[s]=y(r)?u(r,e,c):f(r,e,c)}return i},u=(n,e,c)=>{if(!n)return n;const i=[];e++;for(let s=0;s<n.length;s++){const r=n[s];typeof r!="object"||e>=c?i[s]=r:i[s]=y(r)?u(r,e,c):f(r,e,c)}return i};return y(t)?u(t,0,0):f(t,0,0)},d=(t,o)=>{const f={},u={};for(const n in t)o[n]?f[n]=t[n]:u[n]=t[n];return[f,u]};export{g as C,a as I,j as M,b as O,d as S,y as a};