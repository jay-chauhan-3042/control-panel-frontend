import{r,R as U}from"./index-a10f6838.js";var X=globalThis&&globalThis.__rest||function(t,i){var f={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&i.indexOf(a)<0&&(f[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(t);c<a.length;c++)i.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(f[a[c]]=t[a[c]]);return f};function Y(t){const i=parseFloat(t);return!isNaN(i)&&isFinite(i)}function Z(t){return typeof t=="string"&&t[t.length-1]==="%"&&Y(t.substring(0,t.length-1))}function R(t,i){i===0&&(t!=null&&t.style)&&(t.style.display="none")}function tt(t,i){i===0&&(t!=null&&t.style)&&(t.style.display="")}const et={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function k(t,i){return[t.static,i===0&&t.staticHeightZero,i>0&&t.staticHeightSpecific,i==="auto"&&t.staticHeightAuto].filter(f=>f).join(" ")}const at=t=>{var{animateOpacity:i=!1,animationStateClasses:f={},applyInlineTransitions:a=!0,children:c,className:z="",contentClassName:F,delay:W=0,duration:B=500,easing:D="ease",height:e,onHeightAnimationEnd:h,onHeightAnimationStart:g,style:u}=t,T=X(t,["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style"]);const d=r.useRef(e),s=r.useRef(null),w=r.useRef(),v=r.useRef(),l=r.useRef(Object.assign(Object.assign({},et),f)),L=typeof window<"u",I=r.useRef(L&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),S=I.current?0:W,b=I.current?0:B;let p=e,A="visible";typeof p=="number"?(p=e<0?0:e,A="hidden"):Z(p)&&(p=e==="0%"?0:e,A="hidden");const[O,N]=r.useState(p),[q,C]=r.useState(A),[G,H]=r.useState(!1),[J,j]=r.useState(k(l.current,e));r.useEffect(()=>{R(s.current,O)},[]),r.useEffect(()=>{if(e!==d.current&&s.current){tt(s.current,d.current),s.current.style.overflow="hidden";const P=s.current.offsetHeight;s.current.style.overflow="";const _=b+S;let o,n,E="hidden",x;const $=d.current==="auto";typeof e=="number"?(o=e<0?0:e,n=o):Z(e)?(o=e==="0%"?0:e,n=o):(o=P,n="auto",E=void 0),$&&(n=o,o=P);const Q=[l.current.animating,(d.current==="auto"||e<d.current)&&l.current.animatingUp,(e==="auto"||e>d.current)&&l.current.animatingDown,n===0&&l.current.animatingToHeightZero,n==="auto"&&l.current.animatingToHeightAuto,n>0&&l.current.animatingToHeightSpecific].filter(V=>V).join(" "),M=k(l.current,n);N(o),C("hidden"),H(!$),j(Q),clearTimeout(v.current),clearTimeout(w.current),$?(x=!0,v.current=setTimeout(()=>{N(n),C(E),H(x),g==null||g(n)},50),w.current=setTimeout(()=>{H(!1),j(M),R(s.current,n),h==null||h(n)},_)):(g==null||g(o),v.current=setTimeout(()=>{N(n),C(E),H(!1),j(M),e!=="auto"&&R(s.current,o),h==null||h(o)},_))}return d.current=e,()=>{clearTimeout(v.current),clearTimeout(w.current)}},[e]);const m=Object.assign(Object.assign({},u),{height:O,overflow:q||(u==null?void 0:u.overflow)});G&&a&&(m.transition=`height ${b}ms ${D} ${S}ms`,u!=null&&u.transition&&(m.transition=`${u.transition}, ${m.transition}`),m.WebkitTransition=m.transition);const y={};i&&(y.transition=`opacity ${b}ms ${D} ${S}ms`,y.WebkitTransition=y.transition,O===0&&(y.opacity=0));const K=typeof T["aria-hidden"]<"u"?T["aria-hidden"]:e===0;return U.createElement("div",Object.assign({},T,{"aria-hidden":K,className:`${J} ${z}`,style:m}),U.createElement("div",{className:F,style:y,ref:s},c))};export{at as A};
