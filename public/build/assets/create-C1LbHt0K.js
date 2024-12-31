import{W as y,R as i,r as c,b as u,j as e}from"./app-OWEBvdtC.js";import{N as _}from"./notyf.min-DLu_xjpT.js";import"./index-RggCMBTk.js";import{H as N,N as v}from"./Nav-CmIRCLvo.js";import"./iconBase-hI8KM4xB.js";import"./index-CGRCqaVb.js";import"./index-BSTxKt_a.js";const m=new _,Q=({client_idf2:x,customer_dets:p})=>{const b=new Date().toISOString().split("T")[0],{data:a,setData:n,post:g,processing:d,errors:t}=y({quotation_no:x.value,quotation_date:b,customer_name:"",customer_details:"",source_id:"",report:"",ref_no:"",quotation_amount:"",mobile_no:"",email:"",status:"",Billing_address:"",message:"",product_details:[{product_id:"",p_qty:"",price:"",amount:""}],tax_details:[{tax_id:"",tax_value:"",tax_name:""}]}),[w,h]=i.useState([]);i.useState([]);const o=r=>{n(r.target.name,r.target.value)};c.useEffect(()=>{(async()=>{try{const s=await u.get("/getproduct");h(s.data)}catch(s){console.error("Failed to fetch products",s)}})()},[]),new Date().toISOString().split("T")[0];const f=r=>{r.preventDefault(),g("/Quotation",{onSuccess:()=>m.success("Quotation added successfully!"),onError:s=>{console.log(s),m.error("Failed to add Quotation. Please check your inputs.")}})};return c.useEffect(()=>{a.customer_details&&u.get(`/Get-Customer/${a.customer_details}`).then(r=>{const s=r.data;typeof s.address=="string"&&s.address.trim()!==""?(()=>{try{const l=JSON.parse(s.address);return Array.isArray(l)?l.map(j=>j.address).join(", "):"Invalid Address Format"}catch{return"Invalid Address Format"}})():Array.isArray(s.address)&&s.address.map(l=>l.address).join(", "),n({...a,customer_name:`${s.first_name} ${s.last_name}`,Billing_address:s.address,mobile_no:s.phone,email:s.email})}).catch(r=>console.error("Failed to fetch service partner details",r))},[a.customer_details]),e.jsxs("div",{children:[e.jsx(N,{}),e.jsx(v,{}),e.jsxs("div",{className:"w-[80%] ml-[11.5rem] absolute right-0 overflow-hidden px-3",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold text-gray-800",children:"Add Quotation"}),e.jsxs("form",{onSubmit:f,className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Quotation No"}),e.jsx("input",{type:"text",name:"quotation_no",readOnly:!0,value:a.quotation_no,onChange:o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Client Id"}),t.quotation_no&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.quotation_no})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Quotation Date"}),e.jsx("input",{type:"date",name:"quotation_date",value:a.quotation_date,onChange:o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Client Id"}),t.quotation_date&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.quotation_date})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Quotation Amount"}),e.jsx("input",{type:"text",name:"quotation_amount",value:a.quotation_amount,onChange:o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Quotation Amount"}),t.quotation_amount&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.quotation_amount})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Report"}),e.jsx("input",{type:"text",name:"report",value:a.report,onChange:o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Report"}),t.report&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.report})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Ref No."}),e.jsx("input",{type:"text",name:"ref_no",value:a.ref_no,onChange:o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Ref No."}),t.ref_no&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.ref_no})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Customer "}),e.jsxs("select",{name:"customer_details",value:a.customer_details,onChange:o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"",children:"---Select----"}),p.map(r=>e.jsx("option",{value:r.user_id,children:r.name},r.user_id))]}),t.customer_details&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.customer_details})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Mobile No"}),e.jsx("input",{type:"text",name:"mobile_no",value:a.mobile_no,readOnly:!0,onChange:o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Mobile No"}),t.mobile_no&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.mobile_no})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{type:"email",name:"email",readOnly:!0,value:a.email,onChange:o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Mobile No"}),t.email&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Status"}),e.jsxs("select",{name:"status",value:a.status,onChange:o,className:"w-full border border-gray-300 rounded-lg",children:[e.jsx("option",{value:"",children:"Select Status"}),e.jsx("option",{value:"1",children:"Open"}),e.jsx("option",{value:"0",children:"Close"}),e.jsx("option",{value:"2",children:"Pending"})]}),t.status&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.status})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Billing Address"}),e.jsx("textarea",{name:"Billing_address",readOnly:!0,value:a.Billing_address,onChange:o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Billing Address"}),t.Billing_address&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.Billing_address})]}),e.jsxs("div",{className:"col-span-1 md:col-span-2",children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Scope Of Work"}),e.jsx("textarea",{name:"message",value:a.message,onChange:r=>n("message",r.target.value),id:"",rows:"6",className:"resize-none border border-gray-300 rounded-lg form-textarea w-full"}),t.message&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.message})]}),e.jsx("div",{className:"col-span-1 md:col-span-2",children:e.jsx("button",{type:"submit",disabled:d,className:"px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50",children:d?"Processing...":"Create Quotation"})})]})]})]})};export{Q as default};
