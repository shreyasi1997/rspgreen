import{W as p,j as e,a as j}from"./app-OWEBvdtC.js";import{H as _,N as g,I as v}from"./Nav-CmIRCLvo.js";import{N as b}from"./notyf.min-DLu_xjpT.js";import"./iconBase-hI8KM4xB.js";import"./index-CGRCqaVb.js";import"./index-BSTxKt_a.js";const l=new b,A=({project:a,employees:f,user:m,user_type:o,notif:u})=>{const{data:i,setData:d,post:c,errors:s}=p({title:a.title||"",estimate_time:a.estimate_time||"",estimate_budget:a.estimate_budget||"",start_date:a.start_date||"",end_date:a.end_date||"",priority:a.priority||0,employee_ids:a.assignments.map(t=>t.employee_id)||[]}),x=t=>{t.preventDefault(),c(`/projects-update/${a.id}`,{onSuccess:()=>{l.success("Project updated successfully")},onError:r=>{typeof r=="object"&&r!==null?Object.entries(r).forEach(([y,n])=>{Array.isArray(n)?n.forEach(h=>l.error(h)):l.error(n)}):l.error("An unexpected error occurred.")}})};return e.jsxs("div",{className:"w-[85.2%] ml-[12rem]",children:[e.jsx(_,{user:m,notif:u}),e.jsx(g,{user_type:o}),e.jsxs("form",{onSubmit:x,className:"px-[10rem] grid  border-blue-950 rounded-b-md  space-y-3",children:[e.jsx("div",{className:"flex justify-end ",children:e.jsxs(j,{href:"/projects",className:"flex p-1 px-4 space-x-2 text-white rounded-md bg-slate-600",children:["  ",e.jsx("span",{className:"grid place-items-center",children:e.jsx(v,{})})," ",e.jsx("span",{children:"back"})," "]})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"title",children:"Title:"}),e.jsx("input",{className:"w-full rounded-lg",type:"text",id:"title",value:i.title,onChange:t=>d("title",t.target.value)}),s.title&&e.jsx("div",{children:s.title})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"estimate_time",children:"Estimate Time:"}),e.jsx("input",{className:"w-full rounded-lg",type:"text",id:"estimate_time",value:i.estimate_time,onChange:t=>d("estimate_time",t.target.value)}),s.estimate_time&&e.jsx("div",{children:s.estimate_time})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"estimate_budget",children:"Estimate Budget:"}),e.jsx("input",{className:"w-full rounded-lg",type:"number",id:"estimate_budget",value:i.estimate_budget,onChange:t=>d("estimate_budget",t.target.value)}),s.estimate_budget&&e.jsx("div",{children:s.estimate_budget})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"start_date",children:"Start Date:"}),e.jsx("input",{className:"w-full rounded-lg",type:"date",id:"start_date",value:i.start_date,onChange:t=>d("start_date",t.target.value)}),s.start_date&&e.jsx("div",{children:s.start_date})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"end_date",children:"End Date:"}),e.jsx("input",{className:"w-full rounded-lg",type:"date",id:"end_date",value:i.end_date,onChange:t=>d("end_date",t.target.value)}),s.end_date&&e.jsx("div",{children:s.end_date})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"address",children:"Priority"}),e.jsxs("select",{name:"priority",id:"",value:i.priority,onChange:t=>d("priority",t.target.value),className:"w-full rounded-lg",children:[e.jsx("option",{value:"",children:"-- Select Priority --"}),e.jsx("option",{value:"0",children:"Low"}),e.jsx("option",{value:"1",children:"Medium"}),e.jsx("option",{value:"2",children:"High"})]})]}),e.jsx("br",{}),e.jsx("button",{type:"submit",className:"bg-[#0A1B3F] p-2 rounded-md text-white w-[20%]",children:"Save"})]})]})};export{A as default};
