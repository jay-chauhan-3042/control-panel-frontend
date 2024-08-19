import{i as b,r as R,u as he,s as _e,j as p,b as o,L as be}from"./index-75be5ce1.js";import{C as ee}from"./Highlight-a6a3bd70.js";var ae={},Z={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.getListFiles=t.getImage=t.getBase64=t.getAcceptTypeString=t.openFileDialog=void 0,t.openFileDialog=function(n){n.current&&n.current.click()},t.getAcceptTypeString=function(n,i){return n!=null&&n.length?n.map(function(s){return"."+s}).join(", "):i?"":"image/*"},t.getBase64=function(n){var i=new FileReader;return new Promise(function(s){i.addEventListener("load",function(){return s(String(i.result))}),i.readAsDataURL(n)})},t.getImage=function(n){var i=new Image;return new Promise(function(s){i.addEventListener("load",function(){return s(i)}),i.src=URL.createObjectURL(n)})},t.getListFiles=function(n,i){for(var s=[],m=0;m<n.length;m+=1)s.push(t.getBase64(n[m]));return Promise.all(s).then(function(e){var c=e.map(function(l,f){var a;return a={},a[i]=l,a.file=n[f],a});return c})}})(Z);var ie={},U={};Object.defineProperty(U,"__esModule",{value:!0});U.DEFAULT_DATA_URL_KEY=U.INIT_MAX_NUMBER=U.DEFAULT_NULL_INDEX=void 0;U.DEFAULT_NULL_INDEX=-1;U.INIT_MAX_NUMBER=1e3;U.DEFAULT_DATA_URL_KEY="dataURL";(function(t){var n=b&&b.__awaiter||function(e,c,l,f){function a(r){return r instanceof l?r:new l(function(g){g(r)})}return new(l||(l=Promise))(function(r,g){function v(h){try{u(f.next(h))}catch(w){g(w)}}function N(h){try{u(f.throw(h))}catch(w){g(w)}}function u(h){h.done?r(h.value):a(h.value).then(v,N)}u((f=f.apply(e,c||[])).next())})},i=b&&b.__generator||function(e,c){var l={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},f,a,r,g;return g={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(g[Symbol.iterator]=function(){return this}),g;function v(u){return function(h){return N([u,h])}}function N(u){if(f)throw new TypeError("Generator is already executing.");for(;l;)try{if(f=1,a&&(r=u[0]&2?a.return:u[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,u[1])).done)return r;switch(a=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return l.label++,{value:u[1],done:!1};case 5:l.label++,a=u[1],u=[0];continue;case 7:u=l.ops.pop(),l.trys.pop();continue;default:if(r=l.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){l=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){l.label=u[1];break}if(u[0]===6&&l.label<r[1]){l.label=r[1],r=u;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(u);break}r[2]&&l.ops.pop(),l.trys.pop();continue}u=c.call(e,l)}catch(h){u=[6,h],a=0}finally{f=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorValidation=t.isMaxNumberValid=t.isAcceptTypeValid=t.isMaxFileSizeValid=t.isImageValid=t.isResolutionValid=void 0;var s=U,m=Z;t.isResolutionValid=function(e,c,l,f){if(l===void 0&&(l=0),f===void 0&&(f=1),!l||!f||!e.width||!e.height)return!0;switch(c){case"absolute":{if(e.width===l&&e.height===f)return!0;break}case"ratio":{var a=l/f;if(e.width/e.height===a)return!0;break}case"less":{if(e.width<=l&&e.height<=f)return!0;break}case"more":{if(e.width>=l&&e.height>=f)return!0;break}}return!1},t.isImageValid=function(e){return!!e.includes("image")},t.isMaxFileSizeValid=function(e,c){return c?e<=c:!0},t.isAcceptTypeValid=function(e,c){if(e&&e.length>0){var l=c.split(".").pop()||"";if(e.findIndex(function(f){return f.toLowerCase()===l.toLowerCase()})<0)return!1}return!0},t.isMaxNumberValid=function(e,c,l){if(c!==0&&!c)return!0;if(l===s.DEFAULT_NULL_INDEX){if(e<=c)return!0}else if(e<=c+1)return!0;return!1},t.getErrorValidation=function(e){var c=e.fileList,l=e.value,f=e.maxNumber,a=e.keyUpdate,r=e.acceptType,g=e.maxFileSize,v=e.resolutionType,N=e.resolutionWidth,u=e.resolutionHeight,h=e.allowNonImageType;return n(void 0,void 0,void 0,function(){var w,C,y,k,E;return i(this,function(I){switch(I.label){case 0:return w={},t.isMaxNumberValid(c.length+l.length,f,a)?[3,1]:(w.maxNumber=!0,[3,5]);case 1:C=0,I.label=2;case 2:return C<c.length?(y=c[C].file,y?!h&&!t.isImageValid(y.type)?(w.acceptType=!0,[3,5]):t.isAcceptTypeValid(r,y.name)?t.isMaxFileSizeValid(y.size,g)?v?[4,m.getImage(y)]:[3,4]:(w.maxFileSize=!0,[3,5]):(w.acceptType=!0,[3,5]):[3,4]):[3,5];case 3:if(k=I.sent(),E=t.isResolutionValid(k,v,N,u),!E)return w.resolution=!0,[3,5];I.label=4;case 4:return C+=1,[3,2];case 5:return Object.values(w).find(Boolean)?[2,w]:[2,null]}})})}})(ie);var K=b&&b.__assign||function(){return K=Object.assign||function(t){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var m in n)Object.prototype.hasOwnProperty.call(n,m)&&(t[m]=n[m])}return t},K.apply(this,arguments)},we=b&&b.__createBinding||(Object.create?function(t,n,i,s){s===void 0&&(s=i),Object.defineProperty(t,s,{enumerable:!0,get:function(){return n[i]}})}:function(t,n,i,s){s===void 0&&(s=i),t[s]=n[i]}),ye=b&&b.__setModuleDefault||(Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n}),Ne=b&&b.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var i in t)i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)&&we(n,t,i);return ye(n,t),n},X=b&&b.__awaiter||function(t,n,i,s){function m(e){return e instanceof i?e:new i(function(c){c(e)})}return new(i||(i=Promise))(function(e,c){function l(r){try{a(s.next(r))}catch(g){c(g)}}function f(r){try{a(s.throw(r))}catch(g){c(g)}}function a(r){r.done?e(r.value):m(r.value).then(l,f)}a((s=s.apply(t,n||[])).next())})},B=b&&b.__generator||function(t,n){var i={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},s,m,e,c;return c={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function l(a){return function(r){return f([a,r])}}function f(a){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,m&&(e=a[0]&2?m.return:a[0]?m.throw||((e=m.return)&&e.call(m),0):m.next)&&!(e=e.call(m,a[1])).done)return e;switch(m=0,e&&(a=[a[0]&2,e.value]),a[0]){case 0:case 1:e=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,m=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(e=i.trys,!(e=e.length>0&&e[e.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!e||a[1]>e[0]&&a[1]<e[3])){i.label=a[1];break}if(a[0]===6&&i.label<e[1]){i.label=e[1],e=a;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(a);break}e[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(t,i)}catch(r){a=[6,r],m=0}finally{s=e=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},z=b&&b.__spreadArrays||function(){for(var t=0,n=0,i=arguments.length;n<i;n++)t+=arguments[n].length;for(var s=Array(t),m=0,n=0;n<i;n++)for(var e=arguments[n],c=0,l=e.length;c<l;c++,m++)s[m]=e[c];return s};Object.defineProperty(ae,"__esModule",{value:!0});var L=Ne(R),W=Z,Ie=ie,x=U,Le=function(t){var n=t.value,i=n===void 0?[]:n,s=t.onChange,m=t.onError,e=t.children,c=t.dataURLKey,l=c===void 0?x.DEFAULT_DATA_URL_KEY:c,f=t.multiple,a=f===void 0?!1:f,r=t.maxNumber,g=r===void 0?x.INIT_MAX_NUMBER:r,v=t.acceptType,N=t.maxFileSize,u=t.resolutionWidth,h=t.resolutionHeight,w=t.resolutionType,C=t.inputProps,y=C===void 0?{}:C,k=t.allowNonImageType,E=k===void 0?!1:k,I=i||[],A=L.useRef(null),G=L.useState(x.DEFAULT_NULL_INDEX),T=G[0],j=G[1],Y=L.useState(null),q=Y[0],H=Y[1],J=L.useState(!1),ne=J[0],V=J[1],P=L.useCallback(function(){return W.openFileDialog(A)},[A]),re=L.useCallback(function(){j(x.DEFAULT_NULL_INDEX),P()},[P]),le=L.useCallback(function(){s==null||s([])},[s]),oe=function(d){var _=z(I);Array.isArray(d)?d.forEach(function(D){_.splice(D,1)}):_.splice(d,1),s==null||s(_)},se=function(d){j(d),P()},ce=function(d){return X(void 0,void 0,void 0,function(){var _;return B(this,function(D){switch(D.label){case 0:return[4,Ie.getErrorValidation({fileList:d,maxFileSize:N,maxNumber:g,acceptType:v,keyUpdate:T,resolutionType:w,resolutionWidth:u,resolutionHeight:h,value:I,allowNonImageType:E})];case 1:return _=D.sent(),_?(H(_),m==null||m(_,d),[2,!1]):(q&&H(null),[2,!0])}})})},Q=function(d){return X(void 0,void 0,void 0,function(){var _,D,F,S,$,M;return B(this,function(O){switch(O.label){case 0:return d?[4,W.getListFiles(d,l)]:[2];case 1:return _=O.sent(),_.length?[4,ce(_)]:[2];case 2:if(D=O.sent(),!D)return[2];if(S=[],T>x.DEFAULT_NULL_INDEX)$=_[0],F=z(I),F[T]=$,S.push(T);else if(a)for(F=z(I,_),M=I.length;M<F.length;M+=1)S.push(M);else F=[_[0]],S.push(0);return s==null||s(F,S),[2]}})})},ue=function(d){return X(void 0,void 0,void 0,function(){return B(this,function(_){switch(_.label){case 0:return[4,Q(d.target.files)];case 1:return _.sent(),T>x.DEFAULT_NULL_INDEX&&j(x.DEFAULT_NULL_INDEX),A.current&&(A.current.value=""),[2]}})})},de=L.useMemo(function(){return W.getAcceptTypeString(v,E)},[v,E]),me=function(d){d.preventDefault(),d.stopPropagation()},fe=function(d){d.preventDefault(),d.stopPropagation(),d.dataTransfer.items&&d.dataTransfer.items.length>0&&V(!0)},ge=function(d){d.preventDefault(),d.stopPropagation(),V(!1)},pe=function(d){d.preventDefault(),d.stopPropagation(),V(!1),d.dataTransfer.files&&d.dataTransfer.files.length>0&&Q(d.dataTransfer.files)},ve=function(d){d.preventDefault(),d.stopPropagation(),d.dataTransfer.clearData()};return L.default.createElement(L.default.Fragment,null,L.default.createElement("input",K({type:"file",accept:de,ref:A,multiple:a&&T===x.DEFAULT_NULL_INDEX,onChange:ue,style:{display:"none"}},y)),e==null?void 0:e({imageList:I,onImageUpload:re,onImageRemoveAll:le,onImageUpdate:se,onImageRemove:oe,errors:q,dragProps:{onDrop:pe,onDragEnter:fe,onDragLeave:ge,onDragOver:me,onDragStart:ve},isDragging:ne}))},te=ae.default=Le;const Ue=()=>{const t=he();R.useEffect(()=>{t(_e("File Upload Preview"))});const[n,i]=R.useState([]),s=g=>{n.includes(g)?i(v=>v.filter(N=>N!==g)):i([...n,g])},[m,e]=R.useState([]),[c,l]=R.useState([]),f=69,a=(g,v)=>{e(g)},r=(g,v)=>{l(g)};return p("div",{children:[p("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[o("li",{children:o(be,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),o("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:o("span",{children:"File Upload"})})]}),p("div",{className:"pt-5 space-y-8",children:[p("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[o("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:p("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),o("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),o("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),o("a",{href:"https://www.npmjs.com/package/react-images-uploading",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-images-uploading"})]}),p("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[p("div",{className:"panel",id:"single_file",children:[p("div",{className:"flex items-center justify-between mb-5",children:[o("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Single File Upload"}),o("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code1"),children:p("span",{className:"flex items-center",children:[p("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[o("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),o("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),o("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),o("div",{className:"mb-5",children:p("div",{className:"custom-file-container","data-upload-id":"myFirstImage",children:[p("div",{className:"label-container",children:[o("label",{children:"Upload "}),o("button",{type:"button",className:"custom-file-container__image-clear",title:"Clear Image",onClick:()=>{e([])},children:"×"})]}),o("label",{className:"custom-file-container__custom-file"}),o("input",{type:"file",className:"custom-file-container__custom-file__custom-file-input",accept:"image/*"}),o("input",{type:"hidden",name:"MAX_FILE_SIZE",value:"10485760"}),o(te,{value:m,onChange:a,maxNumber:f,children:({imageList:g,onImageUpload:v,onImageRemoveAll:N,onImageUpdate:u,onImageRemove:h,isDragging:w,dragProps:C})=>p("div",{className:"upload__image-wrapper",children:[o("button",{className:"custom-file-container__custom-file__custom-file-control",onClick:v,children:"Choose File..."})," ",g.map((y,k)=>o("div",{className:"custom-file-container__image-preview relative",children:o("img",{src:y.dataURL,alt:"img",className:"m-auto"})},k))]})}),m.length===0?o("img",{src:"/assets/images/file-preview.svg",className:"max-w-md w-full m-auto",alt:""}):""]})}),n.includes("code1")&&o(ee,{children:o("pre",{className:"language-typescript",children:`import { useEffect, useState } from 'react';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';

const [images, setImages] = useState<any>([]);
const maxNumber = 69;

const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    setImages(imageList as never[]);
};

<div className="custom-file-container" data-upload-id="myFirstImage">
    <div className="label-container">
        <label>Upload </label>
        <button
            type="button"
            className="custom-file-container__image-clear"
            title="Clear Image"
            onClick={() => {
                setImages([]);
            }}
        >
            ×
        </button>
    </div>
    <label className="custom-file-container__custom-file"></label>
    <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
    <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
            <div className="upload__image-wrapper">
                <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                    Choose File...
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                    <div key={index} className="custom-file-container__image-preview relative">
                        <img src={image.dataURL} alt="img" className="m-auto" />
                    </div>
                ))}
            </div>
        )}
    </ImageUploading>
    {images.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
</div>`})})]}),p("div",{className:"multiple-file-upload panel",children:[p("div",{className:"flex items-center justify-between mb-5",children:[o("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Multiple File"}),o("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code2"),children:p("span",{className:"flex items-center",children:[p("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[o("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),o("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),o("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),o("div",{className:"mb-5",children:p("div",{className:"custom-file-container","data-upload-id":"mySecondImage",children:[p("div",{className:"label-container",children:[o("label",{children:"Upload "}),o("button",{type:"button",className:"custom-file-container__image-clear",title:"Clear Image",onClick:()=>{l([])},children:"×"})]}),o("label",{className:"custom-file-container__custom-file"}),o("input",{type:"file",className:"custom-file-container__custom-file__custom-file-input",accept:"image/*"}),o("input",{type:"hidden",name:"MAX_FILE_SIZE",value:"10485760"}),o(te,{multiple:!0,value:c,onChange:r,maxNumber:f,children:({imageList:g,onImageUpload:v,onImageRemoveAll:N,onImageUpdate:u,onImageRemove:h,isDragging:w,dragProps:C})=>p("div",{className:"upload__image-wrapper",children:[o("button",{className:"custom-file-container__custom-file__custom-file-control",onClick:v,children:"Choose File..."})," ",o("div",{className:"grid gap-4 sm:grid-cols-3 grid-cols-1",children:g.map((y,k)=>p("div",{className:"custom-file-container__image-preview relative",children:[o("button",{type:"button",className:"custom-file-container__image-clear bg-dark-light dark:bg-dark dark:text-white-dark rounded-full block w-fit p-0.5 absolute top-0 left-0",title:"Clear Image",onClick:()=>h(k),children:p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),o("img",{src:y.dataURL,alt:"img",className:"object-cover shadow rounded w-full !max-h-48"})]},k))})]})}),c.length===0?o("img",{src:"/assets/images/file-preview.svg",className:"max-w-md w-full m-auto",alt:""}):""]})}),n.includes("code2")&&o(ee,{children:o("pre",{className:"language-typescript",children:`import { useEffect, useState } from 'react';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';

const [images2, setImages2] = useState<any>([]);
const maxNumber = 69;

const onChange2 = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    setImages2(imageList as never[]);
};

<div className="custom-file-container" data-upload-id="mySecondImage">
    <div className="label-container">
        <label>Upload </label>
        <button
            type="button"
            className="custom-file-container__image-clear"
            title="Clear Image"
            onClick={() => {
                setImages2([]);
            }}
        >
            ×
        </button>
    </div>
    <label className="custom-file-container__custom-file"></label>
    <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
    <ImageUploading multiple value={images2} onChange={onChange2} maxNumber={maxNumber}>
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
            <div className="upload__image-wrapper">
                <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                    Choose File...
                </button>
                &nbsp;
                <div className="grid gap-4 sm:grid-cols-3 grid-cols-1">
                    {imageList.map((image, index) => (
                        <div key={index} className="custom-file-container__image-preview relative">
                            <button
                                type="button"
                                className="custom-file-container__image-clear bg-dark-light dark:bg-dark dark:text-white-dark rounded-full block w-fit p-0.5 absolute top-0 left-0"
                                title="Clear Image"
                                onClick={() => onImageRemove(index)}
                            >
                                <svg>...</svg>
                            </button>
                            <img src={image.dataURL} alt="img" className="object-cover shadow rounded w-full !max-h-48" />
                        </div>
                    ))}
                </div>
            </div>
        )}
    </ImageUploading>
    {images2.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
</div>`})})]})]})]})]})};export{Ue as default};
