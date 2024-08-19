import{u as p,r as i,s as u,n as b,a as o,j as t,b as e,D as f,F as x,o as C,t as c}from"./index-75be5ce1.js";const w=()=>{const s=p();i.useEffect(()=>{s(u("Recover Id Box"))});const n=b(),d=o(a=>a.themeConfig.rtlClass)==="rtl",r=o(a=>a.themeConfig),m=a=>{g(a),a.toLowerCase()==="ae"?s(c("rtl")):s(c("ltr"))},[l,g]=i.useState(r.locale),h=()=>{n("/")};return t("div",{children:[e("div",{className:"absolute inset-0",children:e("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),t("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),e("div",{className:"relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]",children:t("div",{className:"relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20",children:[e("div",{className:"absolute top-6 end-6",children:e("div",{className:"dropdown",children:e(f,{offset:[0,8],placement:`${d?"bottom-start":"bottom-end"}`,btnClassName:"flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black",button:t(x,{children:[e("div",{children:e("img",{src:`/assets/images/flags/${l.toUpperCase()}.svg`,alt:"image",className:"h-5 w-5 rounded-full object-cover"})}),e("div",{className:"text-base font-bold uppercase",children:l}),e("span",{className:"shrink-0",children:e("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M6.99989 9.79988C6.59156 9.79988 6.18322 9.64238 5.87406 9.33321L2.07072 5.52988C1.90156 5.36071 1.90156 5.08071 2.07072 4.91154C2.23989 4.74238 2.51989 4.74238 2.68906 4.91154L6.49239 8.71488C6.77239 8.99488 7.22739 8.99488 7.50739 8.71488L11.3107 4.91154C11.4799 4.74238 11.7599 4.74238 11.9291 4.91154C12.0982 5.08071 12.0982 5.36071 11.9291 5.52988L8.12572 9.33321C7.81656 9.64238 7.40822 9.79988 6.99989 9.79988Z",fill:"currentColor"})})})]}),children:e("ul",{className:"!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]",children:r.languageList.map(a=>e("li",{children:t("button",{type:"button",className:`flex w-full hover:text-primary rounded-lg ${l===a.code?"bg-primary/10 text-primary":""}`,onClick:()=>{C.changeLanguage(a.code),m(a.code)},children:[e("img",{src:`/assets/images/flags/${a.code.toUpperCase()}.svg`,alt:"flag",className:"w-5 h-5 object-cover rounded-full"}),e("span",{className:"ltr:ml-3 rtl:mr-3",children:a.name})]})},a.code))})})})}),t("div",{className:"mx-auto w-full max-w-[440px]",children:[t("div",{className:"mb-7",children:[e("h1",{className:"mb-3 text-2xl font-bold !leading-snug dark:text-white",children:"Password Reset"}),e("p",{children:"Enter your email to recover your ID"})]}),t("form",{className:"space-y-5",onSubmit:h,children:[t("div",{children:[e("label",{htmlFor:"Email",className:"dark:text-white",children:"Email"}),t("div",{className:"relative text-white-dark",children:[e("input",{id:"Email",type:"email",placeholder:"Enter Email",className:"form-input ps-10 placeholder:text-white-dark"}),e("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:t("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[e("path",{opacity:"0.5",d:"M10.65 2.25H7.35C4.23873 2.25 2.6831 2.25 1.71655 3.23851C0.75 4.22703 0.75 5.81802 0.75 9C0.75 12.182 0.75 13.773 1.71655 14.7615C2.6831 15.75 4.23873 15.75 7.35 15.75H10.65C13.7613 15.75 15.3169 15.75 16.2835 14.7615C17.25 13.773 17.25 12.182 17.25 9C17.25 5.81802 17.25 4.22703 16.2835 3.23851C15.3169 2.25 13.7613 2.25 10.65 2.25Z",fill:"currentColor"}),e("path",{d:"M14.3465 6.02574C14.609 5.80698 14.6445 5.41681 14.4257 5.15429C14.207 4.89177 13.8168 4.8563 13.5543 5.07507L11.7732 6.55931C11.0035 7.20072 10.4691 7.6446 10.018 7.93476C9.58125 8.21564 9.28509 8.30993 9.00041 8.30993C8.71572 8.30993 8.41956 8.21564 7.98284 7.93476C7.53168 7.6446 6.9973 7.20072 6.22761 6.55931L4.44652 5.07507C4.184 4.8563 3.79384 4.89177 3.57507 5.15429C3.3563 5.41681 3.39177 5.80698 3.65429 6.02574L5.4664 7.53583C6.19764 8.14522 6.79033 8.63914 7.31343 8.97558C7.85834 9.32604 8.38902 9.54743 9.00041 9.54743C9.6118 9.54743 10.1425 9.32604 10.6874 8.97558C11.2105 8.63914 11.8032 8.14522 12.5344 7.53582L14.3465 6.02574Z",fill:"currentColor"})]})})]})]}),e("button",{type:"submit",className:"btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",children:"RECOVER"})]})]})]})})]})]})};export{w as default};
