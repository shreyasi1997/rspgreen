import{W as I,r as p,j as e}from"./app-DecQ0f_S.js";const v=[{maxIncome:5e5,rate:.05},{maxIncome:1e6,rate:.1},{maxIncome:1/0,rate:.15}],A=l=>{let d=0,r=0;for(const t of v)if(l>r){const n=Math.min(l,t.maxIncome)-r;d+=n*t.rate,r=t.maxIncome}else break;return d},F=({data:l,onClose:d,signatureName:r,deductionsss:t})=>{const{register:n,handleSubmit:N,setValue:D,reset:T}=I(),[i,f]=p.useState([]),[g,h]=p.useState(!1);console.log("jhg",t);const o=parseFloat(l.total_amount)||0,b=o*.2,m=o+b;A(m);const j=i.reduce((s,c)=>s+(parseFloat(c.amount)||0),0),a=s=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(s||0),y=s=>{const{value:c,checked:w}=s.target;f(u=>w?[...u,t==null?void 0:t.find(x=>x.id===parseInt(c))]:u.filter(x=>x.id!==parseInt(c)))},S=s=>{console.log("Form Data Submitted",s),h(!1)};return e.jsxs("div",{className:"max-w-4xl mx-auto border p-6 rounded shadow-lg bg-white",children:[e.jsxs("header",{className:"flex justify-between items-start mb-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-2xl font-bold",children:"RSP GREEN"})}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-bold",children:"Name: "}),l.employeeName||"pinaki Ray"]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold",children:"Salary Date: "}),l.generate_date||""]})]})]}),e.jsx("section",{className:"mb-6",children:e.jsxs("table",{className:"w-full border-collapse border text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-200",children:[e.jsx("th",{className:"border p-2",children:"Earning"}),e.jsx("th",{className:"border p-2",children:"Title"}),e.jsx("th",{className:"border p-2",children:"Type"}),e.jsx("th",{className:"border p-2",children:"Amount"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:"Basic Salary"}),e.jsx("td",{className:"border p-2",children:"-"}),e.jsx("td",{className:"border p-2",children:"Fixed"}),e.jsx("td",{className:"border p-2",children:a(o)})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:"Allowance"}),e.jsx("td",{className:"border p-2",children:"Education or Training Allowance"}),e.jsx("td",{className:"border p-2",children:"Fixed"}),e.jsx("td",{className:"border p-2",children:a(b)})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:"Total Earnings"}),e.jsx("td",{colSpan:"3",className:"border p-2 text-right",children:a(m)})]})]})]})}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"text-lg font-bold",children:"Deductions"}),e.jsx("div",{className:"mb-4",children:t==null?void 0:t.map(s=>e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("input",{type:"checkbox",id:`deduction-${s.id}`,value:s.id,onChange:y,className:"mr-2"}),e.jsx("label",{htmlFor:`deduction-${s.id}`,className:"text-sm",children:s.title})]},s.id))}),i.length>0&&e.jsxs("table",{className:"w-full border-collapse border text-left mt-4",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-200",children:[e.jsx("th",{className:"border p-2",children:"Deduction"}),e.jsx("th",{className:"border p-2",children:"Amount"})]})}),e.jsx("tbody",{children:i.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:s.title}),e.jsx("td",{className:"border p-2",children:a(s.amount)})]},s.id))})]})]}),e.jsxs("footer",{className:"text-right mt-4",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-bold",children:"Net Salary: "}),a(m-j)]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold",children:"Total Deductions: "}),a(j)]})]}),e.jsxs("div",{className:"mt-12 text-center",children:[e.jsx("p",{className:"italic",children:"Signature:"}),e.jsx("p",{className:"font-bold mt-4",children:r||"Authorized Signatory"})]}),g&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50",children:e.jsxs("div",{className:"bg-white p-6 rounded shadow-lg w-1/3",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Add Deduction"}),e.jsxs("form",{onSubmit:N(S),className:"space-y-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"deductionTitle",className:"block text-sm font-medium",children:"Deduction Title"}),e.jsx("input",{id:"deductionTitle",type:"text",className:"w-full p-2 border rounded",...n("title",{required:!0}),placeholder:"Enter deduction title"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"deductionAmount",className:"block text-sm font-medium",children:"Deduction Amount"}),e.jsx("input",{id:"deductionAmount",type:"number",className:"w-full p-2 border rounded",...n("amount",{required:!0}),placeholder:"Enter deduction amount"})]}),e.jsxs("div",{className:"flex justify-end",children:[e.jsx("button",{type:"submit",className:"bg-green-500 text-white py-2 px-4 rounded mr-2",children:"Add"}),e.jsx("button",{type:"button",onClick:()=>h(!1),className:"bg-red-500 text-white py-2 px-4 rounded",children:"Cancel"})]})]})]})})]})};export{F as default};