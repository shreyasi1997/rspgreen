import{q as S,r,W as D,j as e,a as n}from"./app-OWEBvdtC.js";import{C as Q}from"./index-Bt0IZRbn.js";import{R as E}from"./index-R_jZdsaO.js";import{N as P}from"./notyf.min-DLu_xjpT.js";import{h as A}from"./index-CGRCqaVb.js";import{H as L,N as q}from"./Nav-CmIRCLvo.js";import"./iconBase-hI8KM4xB.js";import"./index-BSTxKt_a.js";const f=new P,M=({data:a})=>{const{props:o}=S(),[F,p]=r.useState([]);r.useEffect(()=>{Array.isArray(o.auth.permissions)&&p(o.auth.permissions)},[o]);const[d,j]=r.useState(""),[i,b]=r.useState(a),[c,x]=r.useState(1),[l]=r.useState(10);r.useEffect(()=>{const t=d.toLowerCase();b(a.filter(s=>s.name.toLowerCase().includes(t)||s.name.toLowerCase().includes(t)))},[d,a]);const N=t=>{j(t.target.value),x(1)},{delete:g}=D(),y=(t,s)=>{t.preventDefault(),confirm("Are you sure you want to delete this record?")&&g(`/Quotation/${s}`,{onSuccess:()=>{f.success("Quotation deleted successfully!")},onError:()=>f.error("Failed to delete data.")})},h=c*l,u=h-l,m=i.slice(u,h),w=Math.ceil(i.length/l),v=Array.from({length:w},(t,s)=>s+1);return e.jsxs("div",{children:[e.jsx(L,{}),e.jsx(q,{}),e.jsxs("div",{className:"w-[83.2%] ml-[11.5rem] absolute right-0 overflow-hidden px-3",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("input",{type:"text",value:d,onChange:N,placeholder:"Search data...",className:"w-[60%] p-2 border border-gray-300 rounded-md"}),e.jsx(n,{href:"Quotation/create",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Add Qoutation"})]}),e.jsxs("table",{className:"w-full border border-collapse table-auto",children:[e.jsx("thead",{className:"text-white bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left border",children:"SL No"}),e.jsx("th",{className:"p-3 text-left border",children:"Quotation No"}),e.jsx("th",{className:"p-3 text-left border",children:"Customer Name"}),e.jsx("th",{className:"p-3 text-left border",children:"Date"}),e.jsx("th",{className:"p-3 text-center border",children:"Email"}),e.jsx("th",{className:"p-3 text-left border",children:"Action"})]})}),e.jsx("tbody",{children:m.length>0?m.map((t,s)=>e.jsxs("tr",{className:"odd:bg-white even:bg-gray-100",children:[e.jsx("td",{className:"p-3 border",children:u+s+1}),e.jsx("td",{className:"p-3 border",children:t.quotation_no}),e.jsx("td",{className:"p-3 border",children:t.name}),e.jsx("td",{className:"p-3 border",children:t.quotation_date}),e.jsx("td",{className:"p-3 border",children:t.email}),e.jsx("td",{className:"p-3 text-center border",children:e.jsxs("div",{className:"flex justify-center space-x-3",children:[e.jsx(n,{className:"p-2 text-white bg-green-500 rounded",href:`Quotation/${t.id}/edit`,children:e.jsx(Q,{})}),e.jsx(n,{className:"p-2 text-white bg-red-500 rounded",href:`quotation-print/${t.id}`,children:e.jsx(A,{})}),e.jsx("button",{className:"p-2 text-white bg-red-500 rounded",onClick:C=>y(C,t.id),children:e.jsx(E,{})})]})})]},t.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"7",className:"p-3 text-center",children:"No data found"})})})]}),e.jsx("div",{className:"flex justify-center mt-4",children:v.map(t=>e.jsx("button",{onClick:()=>x(t),className:`px-4 py-2 mx-1 rounded ${c===t?"bg-blue-500 text-white":"bg-gray-200"}`,children:t},t))})]})]})};export{M as default};
