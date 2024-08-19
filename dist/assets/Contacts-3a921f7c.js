import{u as S,r as i,s as W,j as l,b as e,S as j}from"./index-a10f6838.js";import{Y as f,y as k}from"./transition-404679c5.js";import"./keyboard-4a3fade5.js";import"./open-closed-c8a8280c.js";import"./hidden-8f261c06.js";const P=()=>{const C=S();i.useEffect(()=>{C(W("Contacts"))});const[w,d]=i.useState(!1),[h,v]=i.useState("list"),[b]=i.useState({id:null,name:"",email:"",phone:"",role:"",location:""}),[r,m]=i.useState(JSON.parse(JSON.stringify(b))),c=t=>{const{value:o,id:a}=t.target;m({...r,[a]:o})},[p,L]=i.useState(""),[u]=i.useState([{id:1,path:"profile-35.png",name:"Alan Green",role:"Web Developer",email:"alan@mail.com",location:"Boston, USA",phone:"+1 202 555 0197",posts:25,followers:"5K",following:500},{id:2,path:"profile-35.png",name:"Linda Nelson",role:"Web Designer",email:"linda@mail.com",location:"Sydney, Australia",phone:"+1 202 555 0170",posts:25,followers:"21.5K",following:350},{id:3,path:"profile-35.png",name:"Lila Perry",role:"UX/UI Designer",email:"lila@mail.com",location:"Miami, USA",phone:"+1 202 555 0105",posts:20,followers:"21.5K",following:350},{id:4,path:"profile-35.png",name:"Andy King",role:"Project Lead",email:"andy@mail.com",location:"Tokyo, Japan",phone:"+1 202 555 0194",posts:25,followers:"21.5K",following:300},{id:5,path:"profile-35.png",name:"Jesse Cory",role:"Web Developer",email:"jesse@mail.com",location:"Edinburgh, UK",phone:"+1 202 555 0161",posts:30,followers:"20K",following:350},{id:6,path:"profile-35.png",name:"Xavier",role:"UX/UI Designer",email:"xavier@mail.com",location:"New York, USA",phone:"+1 202 555 0155",posts:25,followers:"21.5K",following:350},{id:7,path:"profile-35.png",name:"Susan",role:"Project Manager",email:"susan@mail.com",location:"Miami, USA",phone:"+1 202 555 0118",posts:40,followers:"21.5K",following:350},{id:8,path:"profile-35.png",name:"Raci Lopez",role:"Web Developer",email:"traci@mail.com",location:"Edinburgh, UK",phone:"+1 202 555 0135",posts:25,followers:"21.5K",following:350},{id:9,path:"profile-35.png",name:"Steven Mendoza",role:"HR",email:"sokol@verizon.net",location:"Monrovia, US",phone:"+1 202 555 0100",posts:40,followers:"21.8K",following:300},{id:10,path:"profile-35.png",name:"James Cantrell",role:"Web Developer",email:"sravani@comcast.net",location:"Michigan, US",phone:"+1 202 555 0134",posts:100,followers:"28K",following:520},{id:11,path:"profile-35.png",name:"Reginald Brown",role:"Web Designer",email:"drhyde@gmail.com",location:"Entrimo, Spain",phone:"+1 202 555 0153",posts:35,followers:"25K",following:500},{id:12,path:"profile-35.png",name:"Stacey Smith",role:"Chief technology officer",email:"maikelnai@optonline.net",location:"Lublin, Poland",phone:"+1 202 555 0115",posts:21,followers:"5K",following:200}]),[n,x]=i.useState(u);i.useEffect(()=>{x(()=>u.filter(t=>t.name.toLowerCase().includes(p.toLowerCase())))},[p,u]);const M=()=>{if(!r.name)return s("Name is required.","error"),!0;if(!r.email)return s("Email is required.","error"),!0;if(!r.phone)return s("Phone is required.","error"),!0;if(!r.role)return s("Occupation is required.","error"),!0;if(r.id){let t=n.find(o=>o.id===r.id);t.name=r.name,t.email=r.email,t.phone=r.phone,t.role=r.role,t.location=r.location}else{let o={id:(n.length?n.reduce((a,N)=>N.id>a?N.id:a,n[0].id):0)+1,path:"profile-35.png",name:r.name,email:r.email,phone:r.phone,role:r.role,location:r.location,posts:20,followers:"5K",following:500};n.splice(0,0,o)}s("User has been saved successfully."),d(!1)},g=(t=null)=>{const o=JSON.parse(JSON.stringify(b));if(m(o),t){let a=JSON.parse(JSON.stringify(t));m(a)}d(!0)},y=(t=null)=>{x(n.filter(o=>o.id!==t.id)),s("User has been deleted successfully.")},s=(t="",o="success")=>{j.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:o,title:t,padding:"10px 20px"})};return l("div",{children:[l("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[e("h2",{className:"text-xl",children:"Contacts"}),l("div",{className:"flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto",children:[l("div",{className:"flex gap-3",children:[e("div",{children:l("button",{type:"button",className:"btn btn-primary",onClick:()=>g(),children:[l("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"10",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M18 17.5C18 19.9853 18 22 10 22C2 22 2 19.9853 2 17.5C2 15.0147 5.58172 13 10 13C14.4183 13 18 15.0147 18 17.5Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M21 10H19M19 10H17M19 10L19 8M19 10L19 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Add Contact"]})}),e("div",{children:e("button",{type:"button",className:`btn btn-outline-primary p-2 ${h==="list"&&"bg-primary text-white"}`,onClick:()=>v("list"),children:l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",children:[e("path",{d:"M2 5.5L3.21429 7L7.5 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{opacity:"0.5",d:"M2 12.5L3.21429 14L7.5 10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M2 19.5L3.21429 21L7.5 17",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M22 19L12 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M22 12L12 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M22 5L12 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})}),e("div",{children:e("button",{type:"button",className:`btn btn-outline-primary p-2 ${h==="grid"&&"bg-primary text-white"}`,onClick:()=>v("grid"),children:l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",children:[e("path",{opacity:"0.5",d:"M2.5 6.5C2.5 4.61438 2.5 3.67157 3.08579 3.08579C3.67157 2.5 4.61438 2.5 6.5 2.5C8.38562 2.5 9.32843 2.5 9.91421 3.08579C10.5 3.67157 10.5 4.61438 10.5 6.5C10.5 8.38562 10.5 9.32843 9.91421 9.91421C9.32843 10.5 8.38562 10.5 6.5 10.5C4.61438 10.5 3.67157 10.5 3.08579 9.91421C2.5 9.32843 2.5 8.38562 2.5 6.5Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M13.5 17.5C13.5 15.6144 13.5 14.6716 14.0858 14.0858C14.6716 13.5 15.6144 13.5 17.5 13.5C19.3856 13.5 20.3284 13.5 20.9142 14.0858C21.5 14.6716 21.5 15.6144 21.5 17.5C21.5 19.3856 21.5 20.3284 20.9142 20.9142C20.3284 21.5 19.3856 21.5 17.5 21.5C15.6144 21.5 14.6716 21.5 14.0858 20.9142C13.5 20.3284 13.5 19.3856 13.5 17.5Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M2.5 17.5C2.5 15.6144 2.5 14.6716 3.08579 14.0858C3.67157 13.5 4.61438 13.5 6.5 13.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5C10.5 19.3856 10.5 20.3284 9.91421 20.9142C9.32843 21.5 8.38562 21.5 6.5 21.5C4.61438 21.5 3.67157 21.5 3.08579 20.9142C2.5 20.3284 2.5 19.3856 2.5 17.5Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M13.5 6.5C13.5 4.61438 13.5 3.67157 14.0858 3.08579C14.6716 2.5 15.6144 2.5 17.5 2.5C19.3856 2.5 20.3284 2.5 20.9142 3.08579C21.5 3.67157 21.5 4.61438 21.5 6.5C21.5 8.38562 21.5 9.32843 20.9142 9.91421C20.3284 10.5 19.3856 10.5 17.5 10.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5Z",stroke:"currentColor",strokeWidth:"1.5"})]})})})]}),l("div",{className:"relative",children:[e("input",{type:"text",placeholder:"Search Contacts",className:"form-input py-2 ltr:pr-11 rtl:pl-11 peer",value:p,onChange:t=>L(t.target.value)}),e("button",{type:"button",className:"absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary",children:l("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"11.5",cy:"11.5",r:"9.5",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.5"}),e("path",{d:"M18.5 18.5L22 22",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})]})]}),h==="list"&&e("div",{className:"mt-5 panel p-0 border-0 overflow-hidden",children:e("div",{className:"table-responsive",children:l("table",{className:"table-striped table-hover",children:[e("thead",{children:l("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Email"}),e("th",{children:"Location"}),e("th",{children:"Phone"}),e("th",{className:"!text-center",children:"Actions"})]})}),e("tbody",{children:n.map(t=>l("tr",{children:[e("td",{children:l("div",{className:"flex items-center w-max",children:[t.path&&e("div",{className:"w-max",children:e("img",{src:`/assets/images/${t.path}`,className:"h-8 w-8 rounded-full object-cover ltr:mr-2 rtl:ml-2",alt:"avatar"})}),!t.path&&t.name&&e("div",{className:"grid place-content-center h-8 w-8 ltr:mr-2 rtl:ml-2 rounded-full bg-primary text-white text-sm font-semibold"}),!t.path&&!t.name&&e("div",{className:"border border-gray-300 dark:border-gray-800 rounded-full p-2 ltr:mr-2 rtl:ml-2",children:l("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]})}),e("div",{children:t.name})]})}),e("td",{children:t.email}),e("td",{className:"whitespace-nowrap",children:t.location}),e("td",{className:"whitespace-nowrap",children:t.phone}),e("td",{children:l("div",{className:"flex gap-4 items-center justify-center",children:[e("button",{type:"button",className:"btn btn-sm btn-outline-primary",onClick:()=>g(t),children:"Edit"}),e("button",{type:"button",className:"btn btn-sm btn-outline-danger",onClick:()=>y(t),children:"Delete"})]})})]},t.id))})]})})}),h==="grid"&&e("div",{className:"grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-5 w-full",children:n.map(t=>e("div",{className:"bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative",children:l("div",{className:"bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative",children:[e("div",{className:"bg-white/40 rounded-t-md bg-center bg-cover p-6 pb-0 bg-",style:{backgroundImage:"url('/assets/images/notification-bg.png')",backgroundRepeat:"no-repeat",width:"100%",height:"100%"},children:e("img",{className:"object-contain w-4/5 max-h-40 mx-auto",src:`/assets/images/${t.path}`,alt:"contact_image"})}),l("div",{className:"px-6 pb-24 -mt-10 relative",children:[l("div",{className:"shadow-md bg-white dark:bg-gray-900 rounded-md px-2 py-4",children:[e("div",{className:"text-xl",children:t.name}),e("div",{className:"text-white-dark",children:t.role}),l("div",{className:"flex items-center justify-between flex-wrap mt-6 gap-3",children:[l("div",{className:"flex-auto",children:[e("div",{className:"text-info",children:t.posts}),e("div",{children:"Posts"})]}),l("div",{className:"flex-auto",children:[e("div",{className:"text-info",children:t.following}),e("div",{children:"Following"})]}),l("div",{className:"flex-auto",children:[e("div",{className:"text-info",children:t.followers}),e("div",{children:"Followers"})]})]}),e("div",{className:"mt-4",children:l("ul",{className:"flex space-x-4 rtl:space-x-reverse items-center justify-center",children:[e("li",{children:e("button",{type:"button",className:"btn btn-outline-primary p-0 h-7 w-7 rounded-full",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:e("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})})}),e("li",{children:e("button",{type:"button",className:"btn btn-outline-primary p-0 h-7 w-7 rounded-full",children:l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[e("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),e("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),e("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})})}),e("li",{children:e("button",{type:"button",className:"btn btn-outline-primary p-0 h-7 w-7 rounded-full",children:l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[e("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),e("rect",{x:"2",y:"9",width:"4",height:"12"}),e("circle",{cx:"4",cy:"4",r:"2"})]})})}),e("li",{children:e("button",{type:"button",className:"btn btn-outline-primary p-0 h-7 w-7 rounded-full",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:e("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})})})})]})})]}),l("div",{className:"mt-6 grid grid-cols-1 gap-4 ltr:text-left rtl:text-right",children:[l("div",{className:"flex items-center",children:[e("div",{className:"flex-none ltr:mr-2 rtl:ml-2",children:"Email :"}),e("div",{className:"truncate text-white-dark",children:t.email})]}),l("div",{className:"flex items-center",children:[e("div",{className:"flex-none ltr:mr-2 rtl:ml-2",children:"Phone :"}),e("div",{className:"text-white-dark",children:t.phone})]}),l("div",{className:"flex items-center",children:[e("div",{className:"flex-none ltr:mr-2 rtl:ml-2",children:"Address :"}),e("div",{className:"text-white-dark",children:t.location})]})]})]}),l("div",{className:"mt-6 flex gap-4 absolute bottom-0 w-full ltr:left-0 rtl:right-0 p-6",children:[e("button",{type:"button",className:"btn btn-outline-primary w-1/2",onClick:()=>g(t),children:"Edit"}),e("button",{type:"button",className:"btn btn-outline-danger w-1/2",onClick:()=>y(t),children:"Delete"})]})]})},t.id))}),e(f,{appear:!0,show:w,as:i.Fragment,children:l(k,{as:"div",open:w,onClose:()=>d(!1),className:"relative z-[51]",children:[e(f.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-[black]/60"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex min-h-full items-center justify-center px-4 py-8",children:e(f.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:l(k.Panel,{className:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark",children:[e("button",{type:"button",onClick:()=>d(!1),className:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",children:l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),e("div",{className:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:r.id?"Edit Contact":"Add Contact"}),e("div",{className:"p-5",children:l("form",{children:[l("div",{className:"mb-5",children:[e("label",{htmlFor:"name",children:"Name"}),e("input",{id:"name",type:"text",placeholder:"Enter Name",className:"form-input",value:r.name,onChange:t=>c(t)})]}),l("div",{className:"mb-5",children:[e("label",{htmlFor:"email",children:"Email"}),e("input",{id:"email",type:"email",placeholder:"Enter Email",className:"form-input",value:r.email,onChange:t=>c(t)})]}),l("div",{className:"mb-5",children:[e("label",{htmlFor:"number",children:"Phone Number"}),e("input",{id:"phone",type:"text",placeholder:"Enter Phone Number",className:"form-input",value:r.phone,onChange:t=>c(t)})]}),l("div",{className:"mb-5",children:[e("label",{htmlFor:"occupation",children:"Occupation"}),e("input",{id:"role",type:"text",placeholder:"Enter Occupation",className:"form-input",value:r.role,onChange:t=>c(t)})]}),l("div",{className:"mb-5",children:[e("label",{htmlFor:"address",children:"Address"}),e("textarea",{id:"location",rows:3,placeholder:"Enter Address",className:"form-textarea resize-none min-h-[130px]",value:r.location,onChange:t=>c(t)})]}),l("div",{className:"flex justify-end items-center mt-8",children:[e("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>d(!1),children:"Cancel"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",onClick:M,children:r.id?"Update":"Add"})]})]})})]})})})})]})})]})};export{P as default};
