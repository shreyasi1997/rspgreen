import{W as p,j as e,a as f}from"./app-OWEBvdtC.js";import{H as g,N as v,I as _}from"./Nav-CmIRCLvo.js";import{N as b}from"./notyf.min-DLu_xjpT.js";import"./iconBase-hI8KM4xB.js";import"./index-CGRCqaVb.js";import"./index-BSTxKt_a.js";const d=new b,A=({employees:N,user_type:o,user:m,notif:c,clients:t})=>{const{data:s,setData:u,post:h,errors:a}=p({client_id:"",email_address:"",phone_number:"",source:"",lead_for:"",lead_stage:"",comment:""}),l=r=>{u(r.target.name,r.target.value)},x=r=>{r.preventDefault(),h("/lead",{onSuccess:()=>{d.success("Leads Created successfully")},onError:n=>{typeof n=="object"&&n!==null?Object.entries(n).forEach(([C,i])=>{Array.isArray(i)?i.forEach(j=>d.error(j)):d.error(i)}):d.error("An unexpected error occurred.")}})};return e.jsxs("div",{className:"w-[85.2%] ml-[11.5rem]",children:[e.jsx(g,{user:m,notif:c}),e.jsx(v,{user_type:o}),e.jsxs("div",{className:"px-[10rem] grid border-blue-950 rounded-b-md space-y-3",children:[e.jsx("div",{className:"flex justify-end ",children:e.jsx("div",{className:"flex",children:e.jsx("div",{className:"",children:e.jsxs(f,{href:"/lead",className:"flex p-1 px-4 space-x-2 text-white rounded-md bg-slate-600",children:[e.jsx("span",{className:"grid place-items-center",children:e.jsx(_,{})}),e.jsx("span",{children:"back"})]})})})}),e.jsxs("form",{onSubmit:x,className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Client's Name"}),e.jsxs("select",{className:"w-full rounded-lg",name:"client_id",value:s.client_id,onChange:l,id:"",children:[e.jsx("option",{value:"",children:"-- Select Client --"}),t&&t.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),a.name&&e.jsx("div",{children:a.name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email Address"}),e.jsx("input",{id:"email",className:"w-full rounded-lg",name:"email_address",type:"email",value:s.email_address,onChange:l,required:!0}),a.email&&e.jsx("div",{children:a.email})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone_no",children:"Phone Number"}),e.jsx("input",{id:"phone_no",className:"w-full rounded-lg",name:"phone_number",type:"tel",value:s.phone_number,onChange:l,required:!0}),a.phone_no&&e.jsx("div",{children:a.phone_no})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"source",children:"Source"}),e.jsx("input",{id:"source",className:"w-full rounded-lg",name:"source",type:"text",value:s.source,onChange:l,required:!0}),a.source&&e.jsx("div",{children:a.source})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"Lead_For",children:"Lead For"}),e.jsx("input",{id:"Lead_For",className:"w-full rounded-lg",name:"lead_for",type:"text",value:s.lead_for,onChange:l,required:!0}),a.Lead_For&&e.jsx("div",{children:a.Lead_For})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"Lead_Stage",children:"Lead Stage"}),e.jsx("input",{id:"Lead_Stage",className:"w-full rounded-lg",name:"lead_stage",type:"text",value:s.lead_stage,onChange:l,required:!0}),a.Lead_Stage&&e.jsx("div",{children:a.Lead_Stage})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"Comment",children:"Comment"}),e.jsx("textarea",{id:"Comment",className:"w-full rounded-lg",name:"comment",value:s.comment,onChange:l,required:!0}),a.Comment&&e.jsx("div",{children:a.Comment})]}),e.jsx("button",{type:"submit",className:"bg-[#0A1B3F] p-2 rounded-md text-white w-[20%]",children:"Create"})]})]})]})};export{A as default};
