import{g}from"./index-DCguInBf.js";function l(t,e){for(var o=0;o<e.length;o++){const n=e[o];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(n,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i,s;function p(){if(s)return i;s=1,i=t,t.displayName="gn",t.aliases=["gni"];function t(e){e.languages.gn={comment:{pattern:/#.*/,greedy:!0},"string-literal":{pattern:/(^|[^\\"])"(?:[^\r\n"\\]|\\.)*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\{[\s\S]*?\}|[a-zA-Z_]\w*|0x[a-fA-F0-9]{2})/,lookbehind:!0,inside:{number:/^\$0x[\s\S]{2}$/,variable:/^\$\w+$/,"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}},string:/[\s\S]+/}},keyword:/\b(?:else|if)\b/,boolean:/\b(?:false|true)\b/,"builtin-function":{pattern:/\b(?:assert|defined|foreach|import|pool|print|template|tool|toolchain)(?=\s*\()/i,alias:"keyword"},function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:current_cpu|current_os|current_toolchain|default_toolchain|host_cpu|host_os|root_build_dir|root_gen_dir|root_out_dir|target_cpu|target_gen_dir|target_os|target_out_dir)\b/,number:/-?\b\d+\b/,operator:/[-+!=<>]=?|&&|\|\|/,punctuation:/[(){}[\],.]/},e.languages.gn["string-literal"].inside.interpolation.inside.expression.inside=e.languages.gn,e.languages.gni=e.languages.gn}return i}var u=p();const c=g(u),_=l({__proto__:null,default:c},[u]);export{_ as g};
