import{e as v,u as p,V as N,X as b}from"./keyboard-4a3fade5.js";function M(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let d=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var x=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(x||{}),E=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(E||{}),F=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(F||{});function w(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(d)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var A=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(A||{});function T(e,t=0){var r;return e===((r=v(e))==null?void 0:r.body)?!1:p(t,{[0](){return e.matches(d)},[1](){let n=e;for(;n!==null;){if(n.matches(d))return!0;n=n.parentElement}return!1}})}function L(e){e==null||e.focus({preventScroll:!0})}let S=["textarea","input"].join(",");function P(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,S))!=null?r:!1}function g(e,t=r=>r){return e.slice().sort((r,n)=>{let u=t(r),s=t(n);if(u===null||s===null)return 0;let o=u.compareDocumentPosition(s);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function _(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:u=[]}={}){let s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?r?g(e):e:w(e);u.length>0&&o.length>1&&(o=o.filter(l=>!u.includes(l))),n=n??s.activeElement;let f=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),h=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(n))-1;if(t&4)return Math.max(0,o.indexOf(n))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=t&32?{preventScroll:!0}:{},c=0,a=o.length,i;do{if(c>=a||c+a<=0)return 0;let l=h+c;if(t&16)l=(l+a)%a;else{if(l<0)return 3;if(l>=a)return 1}i=o[l],i==null||i.focus(m),c+=f}while(i!==s.activeElement);return t&6&&P(i)&&i.select(),i.hasAttribute("tabindex")||i.setAttribute("tabindex","0"),2}let O="div";var y=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(y||{});let D=N(function(e,t){let{features:r=1,...n}=e,u={ref:t,"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return b({ourProps:u,theirProps:n,slot:{},defaultTag:O,name:"Hidden"})});export{g as A,A as F,_ as I,x as L,E as N,L as S,T as a,D as h,y as s,M as t};
