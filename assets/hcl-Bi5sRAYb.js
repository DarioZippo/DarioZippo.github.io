import{g as u}from"./index-tJbjxS97.js";function d(e,a){for(var o=0;o<a.length;o++){const r=a[o];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const i=Object.getOwnPropertyDescriptor(r,t);i&&Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,s;function p(){if(s)return n;s=1,n=e,e.displayName="hcl",e.aliases=[];function e(a){a.languages.hcl={comment:/(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,heredoc:{pattern:/<<-?(\w+\b)[\s\S]*?^[ \t]*\1/m,greedy:!0,alias:"string"},keyword:[{pattern:/(?:data|resource)\s+(?:"(?:\\[\s\S]|[^\\"])*")(?=\s+"[\w-]+"\s+\{)/i,inside:{type:{pattern:/(resource|data|\s+)(?:"(?:\\[\s\S]|[^\\"])*")/i,lookbehind:!0,alias:"variable"}}},{pattern:/(?:backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+(?=\{)/i,inside:{type:{pattern:/(backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+/i,lookbehind:!0,alias:"variable"}}},/[\w-]+(?=\s+\{)/],property:[/[-\w\.]+(?=\s*=(?!=))/,/"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/],string:{pattern:/"(?:[^\\$"]|\\[\s\S]|\$(?:(?=")|\$+(?!\$)|[^"${])|\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\})*"/,greedy:!0,inside:{interpolation:{pattern:/(^|[^$])\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\}/,lookbehind:!0,inside:{type:{pattern:/(\b(?:count|data|local|module|path|self|terraform|var)\b\.)[\w\*]+/i,lookbehind:!0,alias:"variable"},keyword:/\b(?:count|data|local|module|path|self|terraform|var)\b/i,function:/\w+(?=\()/,string:{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0},number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,punctuation:/[!\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~?:]/}}}},number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,boolean:/\b(?:false|true)\b/i,punctuation:/[=\[\]{}]/}}return n}var l=p();const c=u(l),f=d({__proto__:null,default:c},[l]);export{f as h};
