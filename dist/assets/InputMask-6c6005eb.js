import{r as oe,i as de,f as ce,u as ue,s as me,j as r,b as e,L as he}from"./index-a10f6838.js";import{C as te}from"./Highlight-f284688a.js";var le={},pe={get exports(){return le},set exports(ae){le=ae}};(function(ae,q){(function(ne,p){ae.exports=p(oe)})(de,function(ne){return function(p){function o(u){if(d[u])return d[u].exports;var f=d[u]={exports:{},id:u,loaded:!1};return p[u].call(f.exports,f,f.exports,o),f.loaded=!0,f.exports}var d={};return o.m=p,o.c=d,o.p="",o(0)}([function(p,o,d){function u(l){return l&&l.__esModule?l:{default:l}}function f(l,t){var a={};for(var n in l)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(l,n)&&(a[n]=l[n]);return a}function _(l,t){if(!(l instanceof t))throw new TypeError("Cannot call a class as a function")}function g(l,t){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?l:t}function M(l,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);l.prototype=Object.create(t&&t.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(l,t):l.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0}),o.conformToMask=void 0;var y=Object.assign||function(l){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(l[n]=a[n])}return l},k=function(){function l(t,a){for(var n=0;n<a.length;n++){var h=a[n];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(t,h.key,h)}}return function(t,a,n){return a&&l(t.prototype,a),n&&l(t,n),t}}(),w=d(3);Object.defineProperty(o,"conformToMask",{enumerable:!0,get:function(){return u(w).default}});var b=d(11),i=u(b),v=d(9),s=u(v),C=d(5),U=u(C),O=d(2),D=function(l){function t(){var a;_(this,t);for(var n=arguments.length,h=Array(n),m=0;m<n;m++)h[m]=arguments[m];var c=g(this,(a=t.__proto__||Object.getPrototypeOf(t)).call.apply(a,[this].concat(h)));return c.setRef=c.setRef.bind(c),c.onBlur=c.onBlur.bind(c),c.onChange=c.onChange.bind(c),c}return M(t,l),k(t,[{key:"setRef",value:function(a){this.inputElement=a}},{key:"initTextMask",value:function(){var a=this.props,n=this.props.value;this.textMaskInputElement=(0,U.default)(y({inputElement:this.inputElement},a)),this.textMaskInputElement.update(n)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(a){var n=this.props,h=n.value,m=n.pipe,c=n.mask,J=n.guide,S=n.placeholderChar,B=n.showMask,N={guide:J,placeholderChar:S,showMask:B},z=typeof m=="function"&&typeof a.pipe=="function"?m.toString()!==a.pipe.toString():(0,O.isNil)(m)&&!(0,O.isNil)(a.pipe)||!(0,O.isNil)(m)&&(0,O.isNil)(a.pipe),I=c.toString()!==a.mask.toString(),W=Object.keys(N).some(function(L){return N[L]!==a[L]})||I||z,E=h!==this.inputElement.value;(E||W)&&this.initTextMask()}},{key:"render",value:function(){var n=this.props,h=n.render,m=f(n,["render"]);return delete m.mask,delete m.guide,delete m.pipe,delete m.placeholderChar,delete m.keepCharPositions,delete m.value,delete m.onBlur,delete m.onChange,delete m.showMask,h(this.setRef,y({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},m))}},{key:"onChange",value:function(a){this.textMaskInputElement.update(),typeof this.props.onChange=="function"&&this.props.onChange(a)}},{key:"onBlur",value:function(a){typeof this.props.onBlur=="function"&&this.props.onBlur(a)}}]),t}(i.default.PureComponent);o.default=D,D.propTypes={mask:s.default.oneOfType([s.default.array,s.default.func,s.default.bool,s.default.shape({mask:s.default.oneOfType([s.default.array,s.default.func]),pipe:s.default.func})]).isRequired,guide:s.default.bool,value:s.default.oneOfType([s.default.string,s.default.number]),pipe:s.default.func,placeholderChar:s.default.string,keepCharPositions:s.default.bool,showMask:s.default.bool},D.defaultProps={render:function(l,t){return i.default.createElement("input",y({ref:l},t))}}},function(p,o){Object.defineProperty(o,"__esModule",{value:!0}),o.placeholderChar="_",o.strFunction="function"},function(p,o,d){function u(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:w,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k.placeholderChar;if(!f(i))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(i.indexOf(v)!==-1)throw new Error(`Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.

`+("The placeholder character that was received is: "+JSON.stringify(v)+`

`)+("The mask that was received is: "+JSON.stringify(i)));return i.map(function(s){return s instanceof RegExp?v:s}).join("")}function f(i){return Array.isArray&&Array.isArray(i)||i instanceof Array}function _(i){return typeof i=="string"||i instanceof String}function g(i){return typeof i=="number"&&i.length===void 0&&!isNaN(i)}function M(i){return typeof i>"u"||i===null}function y(i){for(var v=[],s=void 0;s=i.indexOf(b),s!==-1;)v.push(s),i.splice(s,1);return{maskWithoutCaretTraps:i,indexes:v}}Object.defineProperty(o,"__esModule",{value:!0}),o.convertMaskToPlaceholder=u,o.isArray=f,o.isString=_,o.isNumber=g,o.isNil=M,o.processCaretTraps=y;var k=d(1),w=[],b="[]"},function(p,o,d){function u(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:y,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M,b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(0,_.isArray)(w)){if((typeof w>"u"?"undefined":f(w))!==g.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");w=w(k,b),w=(0,_.processCaretTraps)(w).maskWithoutCaretTraps}var i=b.guide,v=i===void 0||i,s=b.previousConformedValue,C=s===void 0?y:s,U=b.placeholderChar,O=U===void 0?g.placeholderChar:U,D=b.placeholder,l=D===void 0?(0,_.convertMaskToPlaceholder)(w,O):D,t=b.currentCaretPosition,a=b.keepCharPositions,n=v===!1&&C!==void 0,h=k.length,m=C.length,c=l.length,J=w.length,S=h-m,B=S>0,N=t+(B?-S:0),z=N+Math.abs(S);if(a===!0&&!B){for(var I=y,W=N;W<z;W++)l[W]===O&&(I+=O);k=k.slice(0,N)+I+k.slice(N,h)}for(var E=k.split(y).map(function(R,$){return{char:R,isNew:$>=N&&$<z}}),L=h-1;L>=0;L--){var x=E[L].char;if(x!==O){var K=L>=N&&m===J;x===l[K?L-S:L]&&E.splice(L,1)}}var j=y,Q=!1;e:for(var Z=0;Z<c;Z++){var Y=l[Z];if(Y===O){if(E.length>0)for(;E.length>0;){var ee=E.shift(),X=ee.char,se=ee.isNew;if(X===O&&n!==!0){j+=O;continue e}if(w[Z].test(X)){if(a===!0&&se!==!1&&C!==y&&v!==!1&&B){for(var re=E.length,H=null,V=0;V<re;V++){var G=E[V];if(G.char!==O&&G.isNew===!1)break;if(G.char===O){H=V;break}}H!==null?(j+=X,E.splice(H,1)):Z--}else j+=X;continue e}Q=!0}n===!1&&(j+=l.substr(Z,c));break}j+=Y}if(n&&B===!1){for(var A=null,T=0;T<j.length;T++)l[T]===O&&(A=T);j=A!==null?j.substr(0,A+1):y}return{conformedValue:j,meta:{someCharsRejected:Q}}}Object.defineProperty(o,"__esModule",{value:!0});var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k};o.default=u;var _=d(2),g=d(1),M=[],y=""},function(p,o){function d(_){var g=_.previousConformedValue,M=g===void 0?f:g,y=_.previousPlaceholder,k=y===void 0?f:y,w=_.currentCaretPosition,b=w===void 0?0:w,i=_.conformedValue,v=_.rawValue,s=_.placeholderChar,C=_.placeholder,U=_.indexesOfPipedChars,O=U===void 0?u:U,D=_.caretTrapIndexes,l=D===void 0?u:D;if(b===0||!v.length)return 0;var t=v.length,a=M.length,n=C.length,h=i.length,m=t-a,c=m>0,J=a===0,S=m>1&&!c&&!J;if(S)return b;var B=c&&(M===i||i===C),N=0,z=void 0,I=void 0;if(B)N=b-m;else{var W=i.toLowerCase(),E=v.toLowerCase(),L=E.substr(0,b).split(f),x=L.filter(function(P){return W.indexOf(P)!==-1});I=x[x.length-1];var K=k.substr(0,x.length).split(f).filter(function(P){return P!==s}).length,j=C.substr(0,x.length).split(f).filter(function(P){return P!==s}).length,Q=j!==K,Z=k[x.length-1]!==void 0&&C[x.length-2]!==void 0&&k[x.length-1]!==s&&k[x.length-1]!==C[x.length-1]&&k[x.length-1]===C[x.length-2];!c&&(Q||Z)&&K>0&&C.indexOf(I)>-1&&v[b]!==void 0&&(z=!0,I=v[b]);for(var Y=O.map(function(P){return W[P]}),ee=Y.filter(function(P){return P===I}).length,X=x.filter(function(P){return P===I}).length,se=C.substr(0,C.indexOf(s)).split(f).filter(function(P,ie){return P===I&&v[ie]!==P}).length,re=se+X+ee+(z?1:0),H=0,V=0;V<h;V++){var G=W[V];if(N=V+1,G===I&&H++,H>=re)break}}if(c){for(var A=N,T=N;T<=n;T++)if(C[T]===s&&(A=T),C[T]===s||l.indexOf(T)!==-1||T===n)return A}else if(z){for(var R=N-1;R>=0;R--)if(i[R]===I||l.indexOf(R)!==-1||R===0)return R}else for(var $=N;$>=0;$--)if(C[$-1]===s||l.indexOf($)!==-1||$===0)return $}Object.defineProperty(o,"__esModule",{value:!0}),o.default=d;var u=[],f=""},function(p,o,d){function u(t){return t&&t.__esModule?t:{default:t}}function f(t){var a={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:a,update:function(n){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,m=h.inputElement,c=h.mask,J=h.guide,S=h.pipe,B=h.placeholderChar,N=B===void 0?s.placeholderChar:B,z=h.keepCharPositions,I=z!==void 0&&z,W=h.showMask,E=W!==void 0&&W;if(typeof n>"u"&&(n=m.value),n!==a.previousConformedValue){(typeof c>"u"?"undefined":y(c))===O&&c.pipe!==void 0&&c.mask!==void 0&&(S=c.pipe,c=c.mask);var L=void 0,x=void 0;if(c instanceof Array&&(L=(0,v.convertMaskToPlaceholder)(c,N)),c!==!1){var K=g(n),j=m.selectionEnd,Q=a.previousConformedValue,Z=a.previousPlaceholder,Y=void 0;if((typeof c>"u"?"undefined":y(c))===s.strFunction){if(x=c(K,{currentCaretPosition:j,previousConformedValue:Q,placeholderChar:N}),x===!1)return;var ee=(0,v.processCaretTraps)(x),X=ee.maskWithoutCaretTraps,se=ee.indexes;x=X,Y=se,L=(0,v.convertMaskToPlaceholder)(x,N)}else x=c;var re={previousConformedValue:Q,guide:J,placeholderChar:N,pipe:S,placeholder:L,currentCaretPosition:j,keepCharPositions:I},H=(0,i.default)(K,x,re),V=H.conformedValue,G=(typeof S>"u"?"undefined":y(S))===s.strFunction,A={};G&&(A=S(V,M({rawValue:K},re)),A===!1?A={value:Q,rejected:!0}:(0,v.isString)(A)&&(A={value:A}));var T=G?A.value:V,R=(0,w.default)({previousConformedValue:Q,previousPlaceholder:Z,conformedValue:T,placeholder:L,rawValue:K,currentCaretPosition:j,placeholderChar:N,indexesOfPipedChars:A.indexesOfPipedChars,caretTrapIndexes:Y}),$=T===L&&R===0,P=E?L:C,ie=$?P:T;a.previousConformedValue=ie,a.previousPlaceholder=L,m.value!==ie&&(m.value=ie,_(m,R))}}}}}function _(t,a){document.activeElement===t&&(D?l(function(){return t.setSelectionRange(a,a,U)},0):t.setSelectionRange(a,a,U))}function g(t){if((0,v.isString)(t))return t;if((0,v.isNumber)(t))return String(t);if(t==null)return C;throw new Error(`The 'value' provided to Text Mask needs to be a string or a number. The value received was:

 `+JSON.stringify(t))}Object.defineProperty(o,"__esModule",{value:!0});var M=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var h in n)Object.prototype.hasOwnProperty.call(n,h)&&(t[h]=n[h])}return t},y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};o.default=f;var k=d(4),w=u(k),b=d(3),i=u(b),v=d(2),s=d(1),C="",U="none",O="object",D=typeof navigator<"u"&&/Android/i.test(navigator.userAgent),l=typeof requestAnimationFrame<"u"?requestAnimationFrame:setTimeout},function(p,o){function d(f){return function(){return f}}var u=function(){};u.thatReturns=d,u.thatReturnsFalse=d(!1),u.thatReturnsTrue=d(!0),u.thatReturnsNull=d(null),u.thatReturnsThis=function(){return this},u.thatReturnsArgument=function(f){return f},p.exports=u},function(p,o,d){function u(f,_,g,M,y,k,w,b){if(!f){var i;if(_===void 0)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var v=[g,M,y,k,w,b],s=0;i=new Error(_.replace(/%s/g,function(){return v[s++]})),i.name="Invariant Violation"}throw i.framesToPop=1,i}}p.exports=u},function(p,o,d){var u=d(6),f=d(7),_=d(10);p.exports=function(){function g(k,w,b,i,v,s){s!==_&&f(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function M(){return g}g.isRequired=g;var y={array:g,bool:g,func:g,number:g,object:g,string:g,symbol:g,any:g,arrayOf:M,element:g,instanceOf:M,node:g,objectOf:M,oneOf:M,oneOfType:M,shape:M,exact:M};return y.checkPropTypes=u,y.PropTypes=y,y}},function(p,o,d){p.exports=d(8)()},function(p,o){var d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";p.exports=d},function(p,o){p.exports=ne}])})})(pe);const F=ce(le),ve=()=>{const ae=ue();oe.useEffect(()=>{ae(me("Input Mask"))});const[q,ne]=oe.useState([]),p=o=>{q.includes(o)?ne(d=>d.filter(u=>u!==o)):ne([...q,o])};return r("div",{children:[r("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(he,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Input Mask"})})]}),r("div",{className:"pt-5 space-y-8 flex-1",id:"basic",children:[r("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e("a",{href:"https://www.npmjs.com/package/react-text-mask",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-text-mask"})]}),r("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-6",children:[r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Static Mask Basic"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code1"),children:r("span",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),r("div",{className:"mb-5",children:[r("p",{className:"text-white-dark mb-5",children:["Input mask are use with ",e("span",{className:"text-danger",children:"input"})," tags."]}),e("form",{children:r("fieldset",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r("div",{children:[e("label",{htmlFor:"staticMask1",className:"text-white-dark",children:`mask="'##-#######'" (99-9999999)`}),e(F,{id:"staticMask1",type:"text",placeholder:"__-_______",className:"form-input",mask:[/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),r("div",{children:[e("label",{htmlFor:"staticMask2",className:"text-white-dark",children:`mask="'AA-####'" (aa-9999)`}),e(F,{id:"staticMask2",type:"text",placeholder:"__-____",className:"form-input",mask:[/[a-z]/,/[a-z]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]})]})})]}),q.includes("code1")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="staticMask1" className="text-white-dark">
                mask="'##-#######'" (99-9999999)
            </label>
            <MaskedInput
                id="staticMask1"
                type="text"
                placeholder="__-_______"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="staticMask2" className="text-white-dark">
                mask="'AA-####'" (aa-9999)
            </label>
            <MaskedInput id="staticMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Alternate masks"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code2"),children:r("span",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("fieldset",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r("div",{children:[e("label",{htmlFor:"altnMask1",className:"text-white-dark",children:`mask="'##.#'" (99.9)`}),e(F,{id:"altnMask1",type:"text",placeholder:"__._",className:"form-input",mask:[/[0-9]/,/[0-9]/,".",/[0-9]/]})]}),r("div",{children:[e("label",{htmlFor:"altnMask2",className:"text-white-dark",children:`mask="'##.##'" (99.99)`}),e(F,{id:"altnMask2",type:"text",placeholder:"__.__",className:"form-input",mask:[/[0-9]/,/[0-9]/,".",/[0-9]/,/[0-9]/]})]})]})})}),q.includes("code2")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="altnMask1" className="text-white-dark">
                mask="'##.#'" (99.9)
            </label>
            <MaskedInput id="altnMask1" type="text" placeholder="__._" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/]} />
        </div>
        <div>
            <label htmlFor="altnMask2" className="text-white-dark">
                mask="'##.##'" (99.99)
            </label>
            <MaskedInput id="altnMask2" type="text" placeholder="__.__" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dynamic Syntax"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code3"),children:r("span",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("fieldset",{className:"grid grid-cols-1 md:grid-cols-3 items-end gap-4",children:[r("div",{children:[r("label",{htmlFor:"dynamicMask1",className:"text-white-dark",children:[`mask="'#-AAA###'" (9-a`,"{1,3}","9","{1,3}",")"]}),e(F,{id:"dynamicMask1",type:"text",placeholder:"_-__",className:"form-input",mask:[/[0-9]/,"-",/[a-z]/,/[a-z]/,/[a-z]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),r("div",{children:[r("label",{htmlFor:"dynamicMask2",className:"text-white-dark",children:[`mask="'AA-####'" (aa-9`,"{1,4}",")"]}),e(F,{id:"dynamicMask2",type:"text",placeholder:"__-____",className:"form-input",mask:[/[a-z]/,/[a-z]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),r("div",{children:[r("label",{htmlFor:"dynamicMask3",className:"text-white-dark",children:[`mask="'AA-##'" (aa-9`,"{1,2}",")"]}),e(F,{id:"dynamicMask3",type:"text",placeholder:"__-__",className:"form-input",mask:[/[a-z]/,/[a-z]/,"-",/[0-9]/,/[0-9]/]})]})]})})}),q.includes("code3")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-3 items-end gap-4">
        <div>
            <label htmlFor="dynamicMask1" className="text-white-dark">
                mask="'#-AAA###'" (9-a{'{1,3}'}9{'{1,3}'})
            </label>
            <MaskedInput
                id="dynamicMask1"
                type="text"
                placeholder="_-__"
                className="form-input"
                mask={[/[0-9]/, '-', /[a-z]/, /[a-z]/, /[a-z]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dynamicMask2" className="text-white-dark">
                mask="'AA-####'" (aa-9{'{1,4}'})
            </label>
            <MaskedInput id="dynamicMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
        </div>
        <div>
            <label htmlFor="dynamicMask3" className="text-white-dark">
                mask="'AA-##'" (aa-9{'{1,2}'})
            </label>
            <MaskedInput id="dynamicMask3" type="text" placeholder="__-__" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Date"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code4"),children:r("span",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("fieldset",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[r("div",{children:[e("label",{htmlFor:"dateMask1",className:"text-white-dark",children:`mask="'##/##/####'" (dd/mm/yyyy)`}),e(F,{id:"dateMask1",type:"text",placeholder:"__/__/____",className:"form-input",mask:[/[0-9]/,/[0-9]/,"/",/[0-9]/,/[0-9]/,"/",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),r("div",{children:[e("label",{htmlFor:"dateMask2",className:"text-white-dark",children:`mask="'##-##-####'" (99-99-9999)`}),e(F,{id:"dateMask2",type:"text",placeholder:"__-__-____",className:"form-input",mask:[/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),r("div",{children:[e("label",{htmlFor:"dateMask3",className:"text-white-dark",children:`mask="'## December, ####'" (99 December, 9999)`}),e(F,{id:"dateMask3",type:"text",placeholder:"__ December, ____",className:"form-input",mask:[/[0-9]/,/[0-9]/," ","D","e","c","e","m","b","e","r"," ",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]})]})})}),q.includes("code4")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
            <label htmlFor="dateMask1" className="text-white-dark">
                mask="'##/##/####'" (dd/mm/yyyy)
            </label>
            <MaskedInput
                id="dateMask1"
                type="text"
                placeholder="__/__/____"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dateMask2" className="text-white-dark">
                mask="'##-##-####'" (99-99-9999)
            </label>
            <MaskedInput
                id="dateMask2"
                type="text"
                placeholder="__-__-____"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dateMask3" className="text-white-dark">
                mask="'## December, ####'" (99 December, 9999)
            </label>
            <MaskedInput
                id="dateMask3"
                type="text"
                placeholder="__ December, ____"
                className="form-input"
                // mask={['99 December, 9999']}
                mask={[/[0-9]/, /[0-9]/, ' ', 'D', 'e', 'c', 'e', 'm', 'b', 'e', 'r', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
    </fieldset>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"IP"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code5"),children:r("span",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("fieldset",{children:[e("label",{htmlFor:"ipMask",className:"text-white-dark",children:`mask="'###.###.###.###'" (192.198.1.1)`}),e(F,{id:"ipMask",type:"text",placeholder:"___.___.___.___",className:"form-input",mask:[/[0-9]/,/[0-9]/,/[0-9]/,".",/[0-9]/,/[0-9]/,/[0-9]/,".",/[0-9]/,/[0-9]/,/[0-9]/]})]})})}),q.includes("code5")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="ipMask" className="text-white-dark">
            mask="'###.###.###.###'" (192.198.1.1)
        </label>
        <MaskedInput
            id="ipMask"
            type="text"
            placeholder="___.___.___.___"
            className="form-input"
            mask={[/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Phone"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code6"),children:r("span",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("fieldset",{children:[e("label",{htmlFor:"phoneMask",className:"text-white-dark",children:`mask="'(###) ###-####'" ((999) 999-9999)`}),e(F,{id:"phoneMask",type:"text",placeholder:"(___) ___-____",className:"form-input",mask:["(",/[0-9]/,/[0-9]/,/[0-9]/,")"," ",/[0-9]/,/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]})})}),q.includes("code6")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="phoneMask" className="text-white-dark">
            mask="'(###) ###-####'" ((999) 999-9999)
        </label>
        <MaskedInput
            id="phoneMask"
            type="text"
            placeholder="(___) ___-____"
            className="form-input"
            mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Currency"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code7"),children:r("span",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("fieldset",{children:[e("label",{htmlFor:"currencyMask",className:"text-white-dark",children:"$999,9999,999.99"}),e(F,{id:"currencyMask",type:"text",placeholder:"$___,____,___.__",className:"form-input",mask:["$",/[0-9]/,/[0-9]/,/[0-9]/,",",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,",",/[0-9]/,/[0-9]/,/[0-9]/,".",/[0-9]/,/[0-9]/]})]})})}),q.includes("code7")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="currencyMask" className="text-white-dark">
            $999,9999,999.99
        </label>
        <MaskedInput
            id="currencyMask"
            type="text"
            placeholder="$___,____,___.__"
            className="form-input"
            mask={['$', /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`})})]})]})]})]})};export{ve as default};
