import{W as _,R as x,r as p,b as i,j as e}from"./app-OWEBvdtC.js";import{N}from"./notyf.min-DLu_xjpT.js";import"./index-RggCMBTk.js";import{H as v,N as w}from"./Nav-CmIRCLvo.js";import"./iconBase-hI8KM4xB.js";import"./index-CGRCqaVb.js";import"./index-BSTxKt_a.js";const b=new N,D=({customer_dets:g,qt:o,qt_acc:c,qt_his:u})=>{new Date().toISOString().split("T")[0];const{data:a,setData:d,put:h,processing:m,errors:t}=_({quotation_no:o.quotation_no,quotation_date:o.quotation_date,quotation_amount:o.quotation_amount,customer_name:o.customer_name,customer_details:o.customer_id,report:o.report,ref_no:o.ref_no,mobile_no:"",email:o.email,status:o.status,Billing_address:o.address||"",message:o.message,product_details:u||[{product_id:"",p_qty:"",price:"",amount:""}],tax_details:c||[{tax_id:"",tax_value:"",tax_name:""}]}),[C,f]=x.useState(u||[]),[E,j]=x.useState(c||[]),r=s=>{d(s.target.name,s.target.value)};p.useEffect(()=>{const s=async()=>{try{const l=await i.get("/getproduct");f(l.data)}catch(l){console.error("Failed to fetch products",l)}},n=async()=>{try{const l=await i.get("/gettaxoptions");j(l.data)}catch(l){console.error("Failed to fetch tax options",l)}};s(),n()},[]),new Date().toISOString().split("T")[0];const y=s=>{s.preventDefault(),h(`/Quotation/${o.id}`,{onSuccess:()=>b.success("Quotation updated successfully!"),onError:n=>{b.error("Failed to updated Quotation. Please check your inputs.")}})};return p.useEffect(()=>{a.customer_details&&i.get(`/Get-Customer/${a.customer_details}`).then(s=>{const n=s.data;d(l=>({...l,customer_name:`${n.name}`,Billing_address:n.address,mobile_no:n.phone,email:n.email}))}).catch(s=>console.error("Failed to fetch service partner details",s))},[a.customer_details]),e.jsxs("div",{children:[e.jsx(v,{}),e.jsx(w,{}),e.jsxs("div",{className:"w-[83.2%] ml-[11.5rem] absolute right-0 overflow-hidden px-3",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold text-gray-800",children:"Edit Quotation"}),e.jsxs("form",{onSubmit:y,className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Quotation No"}),e.jsx("input",{type:"text",name:"quotation_no",readOnly:!0,value:a.quotation_no,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Client Id"}),t.quotation_no&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.quotation_no})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Quotation Date"}),e.jsx("input",{type:"date",name:"quotation_date",value:a.quotation_date,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Client Id"}),t.quotation_date&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.quotation_date})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Quotation Amount"}),e.jsx("input",{type:"text",name:"quotation_amount",value:a.quotation_amount,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Quotation Amount"}),t.quotation_amount&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.quotation_amount})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Report"}),e.jsx("input",{type:"text",name:"report",value:a.report,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Report"}),t.report&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.report})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Ref No."}),e.jsx("input",{type:"text",name:"ref_no",value:a.ref_no,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Ref No."}),t.ref_no&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.ref_no})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Service Partner"}),e.jsxs("select",{name:"customer_details",value:a.customer_details,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"",children:"---Select----"}),g.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),t.customer_details&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.customer_details})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Mobile No"}),e.jsx("input",{type:"text",name:"mobile_no",value:a.mobile_no,readOnly:!0,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Mobile No"}),t.mobile_no&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.mobile_no})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{type:"email",name:"email",readOnly:!0,value:a.email,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Mobile No"}),t.email&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Status"}),e.jsxs("select",{name:"status",value:a.status,onChange:r,className:"w-full border border-gray-300 rounded-lg",children:[e.jsx("option",{value:"",children:"Select Status"}),e.jsx("option",{value:"1",children:"Open"}),e.jsx("option",{value:"0",children:"Close"}),e.jsx("option",{value:"2",children:"Pending"})]}),t.status&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.status})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Billing Address"}),e.jsx("textarea",{name:"Billing_address",value:a.Billing_address,onChange:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Mobile No"}),t.Billing_address&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.Billing_address})]}),e.jsxs("div",{className:"col-span-1 md:col-span-2",children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Message"}),e.jsx("textarea",{name:"message",value:a.message,onChange:s=>d("message",s.target.value),id:"",rows:"6",className:"resize-none border border-gray-300 rounded-lg form-textarea w-full"}),t.message&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.message})]}),e.jsx("div",{className:"col-span-1 md:col-span-2",children:e.jsx("button",{type:"submit",disabled:m,className:"px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50",children:m?"Processing...":"Update Quotation"})})]})]})]})};export{D as default};
