import{g as u}from"./index-CqwV5kBU.js";function f(e,n){for(var a=0;a<n.length;a++){const r=n[a];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const o=Object.getOwnPropertyDescriptor(r,t);o&&Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,s;function p(){if(s)return i;s=1,i=e,e.displayName="yang",e.aliases=[];function e(n){n.languages.yang={comment:/\/\*[\s\S]*?\*\/|\/\/.*/,string:{pattern:/"(?:[^\\"]|\\.)*"|'[^']*'/,greedy:!0},keyword:{pattern:/(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,lookbehind:!0},namespace:{pattern:/(\s)[a-z_][\w.-]*(?=:)/i,lookbehind:!0},boolean:/\b(?:false|true)\b/,operator:/\+/,punctuation:/[{};:]/}}return i}var g=p();const y=u(g),l=f({__proto__:null,default:y},[g]);export{l as y};
