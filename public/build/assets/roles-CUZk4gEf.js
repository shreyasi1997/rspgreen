import{j as e,a as r}from"./app-OWEBvdtC.js";import{H as i,N as x}from"./Nav-CmIRCLvo.js";import"./iconBase-hI8KM4xB.js";import"./index-CGRCqaVb.js";import"./index-BSTxKt_a.js";const j=({user:t,user_type:l,roles:d,notif:a})=>e.jsxs("div",{className:"w-[85.2%] ml-[12rem]",children:[e.jsx(i,{user:t,notif:a}),e.jsx(x,{user_type:l}),e.jsx("div",{className:"flex justify-end px-[15rem]",children:e.jsx(r,{href:"/roles-permission",className:"p-2 text-black underline rounded-md ",children:"Add New"})}),e.jsx("div",{className:"px-[15rem]  ta",children:e.jsxs("table",{className:"w-full border ",children:[e.jsx("thead",{className:"bg-[#0A1B3F] text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-left border ",children:"Role"}),e.jsx("th",{className:"p-2 text-left border ",children:"Action"})]})}),e.jsx("tbody",{children:d.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-left border ",children:s.name}),e.jsx("td",{className:"p-2 text-left border ",children:e.jsx(r,{href:`/roles-permission-edit/${s.id}`,children:"edit"})})]}))})]})})]});export{j as default};
