import{W as x,j as e,a as j}from"./app-OWEBvdtC.js";import{H as _,N as v,I as f}from"./Nav-CmIRCLvo.js";import{N as y}from"./notyf.min-DLu_xjpT.js";import"./iconBase-hI8KM4xB.js";import"./index-CGRCqaVb.js";import"./index-BSTxKt_a.js";const s=new y,A=({employees:b,user_type:c,user:o,notif:i})=>{const{data:r,setData:u,post:m,errors:t}=x({contractor_name:"",email_address:"",phone_number:"",contractor_type:"",contract_value:"",start_date:"",end_date:"",description:""}),a=n=>{u(n.target.name,n.target.value)},h=n=>{n.preventDefault(),m("/contract",{onSuccess:()=>{s.success("Contract Created successfully")},onError:d=>{typeof d=="object"&&d!==null?Object.entries(d).forEach(([g,l])=>{Array.isArray(l)?l.forEach(p=>s.error(p)):s.error(l)}):s.error("An unexpected error occurred.")}})};return e.jsxs("div",{className:"w-[85.2%] ml-[11.5rem]",children:[e.jsx(_,{user:o,notif:i}),e.jsx(v,{user_type:c}),e.jsxs("div",{className:"px-[10rem] grid border-blue-950 rounded-b-md space-y-3",children:[e.jsx("div",{className:"flex justify-end",children:e.jsxs(j,{href:"/contract",className:"flex p-1 px-4 space-x-2 text-white rounded-md bg-slate-600",children:[e.jsx("span",{className:"grid place-items-center",children:e.jsx(f,{})}),e.jsx("span",{children:"back"})]})}),e.jsxs("form",{onSubmit:h,className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"contractor_name",children:"Contractor Name"}),e.jsx("input",{id:"contractor_name",className:"w-full rounded-lg",name:"contractor_name",type:"text",value:r.contractor_name,onChange:a,required:!0}),t.contractor_name&&e.jsx("div",{children:t.contractor_name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email Address"}),e.jsx("input",{id:"email",className:"w-full rounded-lg",name:"email_address",type:"email",value:r.email_address,onChange:a,required:!0}),t.email&&e.jsx("div",{children:t.email})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone_no",children:"Phone Number"}),e.jsx("input",{id:"phone_no",className:"w-full rounded-lg",name:"phone_number",type:"tel",value:r.phone_number,onChange:a,required:!0}),t.phone_no&&e.jsx("div",{children:t.phone_no})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"contractor_type",children:"Contractor Type"}),e.jsx("input",{id:"contractor_type",className:"w-full rounded-lg",name:"contractor_type",type:"text",value:r.contractor_type,onChange:a,required:!0}),t.contractor_type&&e.jsx("div",{children:t.contractor_type})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"contract_value",children:"Contract Value"}),e.jsx("input",{id:"contract_value",className:"w-full rounded-lg",name:"contract_value",type:"text",value:r.contract_value,onChange:a,required:!0}),t.contract_value&&e.jsx("div",{children:t.contract_value})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"start_date",children:"Start Date"}),e.jsx("input",{id:"start_date",className:"w-full rounded-lg",name:"start_date",type:"date",value:r.start_date,onChange:a,required:!0}),t.start_date&&e.jsx("div",{children:t.start_date})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"end_date",children:"End Date"}),e.jsx("input",{id:"end_date",className:"w-full rounded-lg",name:"end_date",type:"date",value:r.end_date,onChange:a,required:!0}),t.end_date&&e.jsx("div",{children:t.end_date})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"description",children:"Description"}),e.jsx("textarea",{id:"description",className:"w-full rounded-lg",name:"description",value:r.description,onChange:a,required:!0}),t.description&&e.jsx("div",{children:t.description})]}),e.jsx("button",{type:"submit",className:"bg-[#0A1B3F] p-2 rounded-md text-white w-[20%]",children:"Create"})]})]})]})};export{A as default};
