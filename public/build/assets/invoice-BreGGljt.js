import{g as u,r as o,j as e,a as b}from"./app-DecQ0f_S.js";import{i as g}from"./index-BPKSu1J7.js";import"./iconBase-DWhxbjqT.js";var d={0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen"},j={2:"twenty",3:"thirty",4:"forty",5:"fifty",6:"sixty",7:"seventy",8:"eighty",9:"ninety"},N={1:"thousand",2:"million",3:"billion",4:"trillion",5:"quadrillion",6:"quintillion",7:"sextillion",8:"septillion",9:"octillion",10:"nonillion",11:"decillion",12:"undecillion",13:"duodecillion",14:"tredecillion",15:"quattuordecillion",16:"quindecillion",17:"sexdecillion",18:"septendecillion",19:"octodecillion",20:"novemdecillion",21:"vigintillion",22:"unvigintillion",23:"duovigintillion",24:"trevigintillion",25:"quattuorvigintillion",26:"quinvigintillion",27:"sexvigintillion",28:"septenvigintillion",29:"octovigintillion",30:"novemvigintillion",31:"trigintillion",32:"untrigintillion",33:"duotrigintillion",34:"tretrigintillion",35:"quattuortrigintillion",36:"quintrigintillion",37:"sextrigintillion",38:"septentrigintillion",39:"octotrigintillion",40:"novemtrigintillion",41:"quadragintillion",42:"unquadragintillion",43:"duoquadragintillion",44:"trequadragintillion",45:"quattuorquadragintillion",46:"quinquadragintillion",47:"sexquadragintillion",48:"septenquadragintillion",49:"octoquadragintillion",50:"novemquadragintillion",51:"quinquagintillion",52:"unquinquagintillion",53:"duoquinquagintillion",54:"trequinquagintillion",55:"quattuorquinquagintillion",56:"quinquinquagintillion",57:"sexquinquagintillion",58:"septenquinquagintillion",59:"octoquinquagintillion",60:"novemquinquagintillion",61:"sexagintillion",62:"unsexagintillion",63:"duosexagintillion",64:"tresexagintillion",65:"quattuorsexagintillion",66:"quinsexagintillion",67:"sexsexagintillion",68:"septensexagintillion",69:"octosexagintillion",70:"novemsexagintillion",71:"septuagintillion",72:"unseptuagintillion",73:"duoseptuagintillion",74:"treseptuagintillion",75:"quattuorseptuagintillion",76:"quinseptuagintillion",77:"sexseptuagintillion",78:"septenseptuagintillion",79:"octoseptuagintillion",80:"novemseptuagintillion",81:"octogintillion",82:"unoctogintillion",83:"duooctogintillion",84:"treoctogintillion",85:"quattuoroctogintillion",86:"quinoctogintillion",87:"sexoctogintillion",88:"septoctogintillion",89:"octooctogintillion",90:"novemoctogintillion",91:"nonagintillion",92:"unnonagintillion",93:"duononagintillion",94:"trenonagintillion",95:"quattuornonagintillion",96:"quinnonagintillion",97:"sexnonagintillion",98:"septennonagintillion",99:"octononagintillion",100:"novemnonagintillion",101:"centillion"},f=v;function v(i){if(i===""||typeof i!="number"&&typeof i!="string")throw Error("Must supply a number or non-empty string argument.");var t=q(i.toString()).replace(/,/g,""),s="",n=[],l="",r="";if(isNaN(t))throw Error(i+" is not a number.");if(t=E(t),n=t.split("."),l=n[0],r=n[1],typeof i=="number"&&parseInt(l,10)>=9007199254740991)return i+" is too large to be passed as a number. Pass number in as a string.";if(l.length>306)throw Error(i+" exceeds num2Word's maximum number conversion.");return r&&parseFloat("."+r,10)<=Number.MIN_VALUE&&(r="0"),l[0]==="-"?s="negative "+x(l.substring(1))+" "+p(r):s=x(l)+" "+p(r),s=s.replace(/\s$/,""),s}function x(i){if(i==="")return"zero";for(var t=[],s,n="";s=y(k(i)),t.push(s.largestNumber2Word),i=s.subNumber,!!i;);return t.length>1&&t[t.length-1]==="zero"&&t.pop(),n=t.join(" ").replace(/-\s/g,"-"),n}function y(i){var t=i.length,s="",n="";if(t===1)s=d[i];else if(t===2)i in d?s=d[i]:(s=j[i[0]]+m(i[1]),n=i.substring(1));else if(t===3)s=d[i[0]]+" hundred",n=i.substring(1);else{var l=t-1,r=Math.floor(l/3),a=l%3,c=i.substring(0,a+1);s=x(c)+" "+N[r],n=i.substring(a+1)}function m(h){return h==="0"?"":"-"}return{largestNumber2Word:s,subNumber:n}}function p(i){if(i===void 0||(i=i.replace(/0+$/,""),i===""))return"";var t,s=i.length,n="",l=["point"];for(t=0;t<s;t+=1)l.push(d[i[t]]);return n=l.join(" "),n}function q(i){return i=i.replace(/^-+/,function(t){return t.length%2===0?"":"-"}),i}function k(i){return i=i.replace(/^(0+)(\d?)/,function(t,s,n){return n||"0"}),i}function E(i){var t=i.split(/[eE]/);if(t.length===1)return i;var s=t[0],n=t[1],l="",r=0,a,c;if(/^[+-]/.test(n)?(l=n[0],n=n.substring(1)):l="+",r=parseInt(n,10),s.indexOf(".")===-1&&(s+="."),l==="+")s=s+new Array(r+1).join("0"),a=/(\.)(\d)/;else if(l==="-")s=new Array(r+1).join("0")+s,a=/(\d)(\.)/;else throw Error("Unexpected sign '"+l+"' occurred while parsingExponential.");for(c=0;c<r;c+=1)s=s.replace(a,"$2$1");return i=s.replace(/(^0+|0+$)/g,"").replace(/\.$/,""),i}const w=u(f),D=({sale:i,cst:t})=>{o.useRef();function s(n){n.preventDefault(),window.print()}return e.jsx("div",{className:"grid place-items-center",children:e.jsxs("div",{className:"p-8 w-[800px]",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center space-y-1",children:[e.jsx("h1",{className:"text-2xl pb-3 font-bold",children:i&&i.invoice_type==="pi"?"Profoma Invoice":i.invoice_type==="tax"?"Tax Invoice":"Cash Invoice"}),i.invoice_type!=="cash"&&e.jsxs(o.Fragment,{children:[e.jsx("p",{className:"text-sm text-gray-600 font-medium",children:"CIN NO. U74999WB2017PTC219565"}),e.jsx("p",{className:"text-sm text-zinc-800",children:"Service Bill"})]})]}),e.jsxs("div",{className:"border border-black",children:[e.jsxs("div",{className:"w-full flex",children:[i.invoice_type!=="cash"&&e.jsxs("div",{className:"w-1/3 p-3 space-y-2 border-r border-black",children:[e.jsx("p",{className:"text-sm font-semibold",children:"RSP GREEN DEVELOPMENT & LABORATORIES PVT. LTD."}),e.jsx("p",{className:"text-sm text-gray-600",children:"7F, Dinobondhu Mukherjee Lane, Howrah - 711102, West Bengal"}),e.jsx("p",{className:"text-sm text-blue-600",children:"Email - proyrsp@gmail.com"}),i&&i.invoice_type==="tax"&&e.jsxs(o.Fragment,{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"GST : 19AAICR1289D1Z7"}),e.jsx("p",{className:"text-sm text-gray-600",children:"SAC No : 999490"})]})]}),e.jsxs("div",{className:`${i.invoice_type!=="cash"?"w-1/3":"w-1/2"} flex flex-col`,children:[e.jsxs("div",{className:`${i.invoice_type!=="cash"?"h-1/3 p-1 px-2 border-b border-black":"h-full p-1 px-2"}`,children:[e.jsx("p",{className:"text-sm text-zinc-900 font-bold",children:"Invoice No."}),e.jsx("p",{className:"text-sm",children:i.bill_no})]}),i.invoice_type!=="cash"&&e.jsxs(o.Fragment,{children:[e.jsx("div",{className:"h-1/3 p-1 px-2 border-b border-black flex items-center",children:e.jsx("p",{className:"text-sm",children:"Delivery note : N/A"})}),e.jsx("div",{className:"h-1/3 p-1 px-2 flex items-center",children:e.jsx("p",{className:"text-sm",children:"Supplier Ref : N/A"})})]})]}),e.jsxs("div",{className:`${i.invoice_type!=="cash"?"w-1/3":"w-1/2"} flex flex-col border-l border-black`,children:[e.jsxs("div",{className:`${i.invoice_type!=="cash"?"h-1/3 p-1 px-2 border-b border-black":"h-full p-1 px-2"}`,children:[e.jsx("p",{className:"text-sm text-zinc-900 font-bold",children:"Invoice Date."}),e.jsx("p",{className:"text-sm",children:new Date(i.date).toLocaleDateString("en-GB")})]}),i.invoice_type!=="cash"&&e.jsxs(o.Fragment,{children:[e.jsxs("div",{className:"h-1/3 p-1 px-2 border-b border-black",children:[e.jsx("p",{className:"text-sm text-zinc-900 font-bold",children:"Mode/Term of payment"}),e.jsx("p",{className:"text-sm",children:"Ac. payee Chq./ Online"})]}),e.jsx("div",{className:"h-1/3 p-1 px-2 flex items-center",children:e.jsx("p",{className:"text-sm",children:"Others Referenec(S) : N/A"})})]})]})]}),e.jsxs("div",{className:"w-full flex border-t border-black",children:[e.jsx("div",{className:`${i.invoice_type!=="cash"?"w-1/3":"w-full"} p-3 space-y-2 border-r border-black`,children:e.jsxs("p",{className:"text-sm font-semibold text-gray-600",children:["Bill To.",e.jsx("br",{}),"The,",e.jsx("br",{}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("span",{className:"block pt-4 text-gray-800",children:["Name: ",t.name]}),e.jsxs("span",{className:"block text-gray-800",children:["Email: ",t.email]}),e.jsxs("span",{className:"block text-gray-800",children:["Billing Address: ",i.billing_address]})]})]})}),i.invoice_type!=="cash"&&e.jsxs(o.Fragment,{children:[e.jsxs("div",{className:"w-1/3 flex flex-col",children:[e.jsx("div",{className:"h-40 p-1 px-2 border-b border-black",children:e.jsx("p",{className:"text-sm text-zinc-900 font-bold",children:"Work Order No."})}),e.jsx("div",{className:"h-1/3 p-1 px-2 border-b border-black flex items-center",children:e.jsx("p",{className:"text-sm",children:"Dispatch Document No : N/A"})}),e.jsx("div",{className:"h-1/3 p-1 px-2 flex items-center",children:e.jsx("p",{className:"text-sm",children:"Terms of delivery: N/A"})})]}),e.jsxs("div",{className:"w-1/3 flex flex-col border-l border-black",children:[e.jsx("div",{className:"h-40 p-1 px-2 border-b border-black",children:e.jsx("p",{className:"text-sm text-zinc-900 font-bold",children:"Work Order Dt."})}),e.jsx("div",{className:"h-1/3 p-1 px-2 flex items-center border-b border-black ",children:e.jsx("p",{className:"text-sm",children:"Delivery Note Dt : N/A"})}),e.jsx("div",{className:"h-1/3 p-1 px-2 flex items-center",children:e.jsx("p",{className:"text-sm",children:"Designation : N/A"})})]})]})]}),e.jsxs("table",{className:"border-t w-full text-left border-black",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-2 border-r border-b border-black",children:"SL. No."}),e.jsx("th",{className:"py-2 px-2 border-r border-b border-black",children:"Description Of Service"}),e.jsx("th",{className:"py-2 px-2 border-r border-b border-black",children:"Qty"}),e.jsx("th",{className:"py-2 px-2 border-r border-b border-black",children:"Contract Value"}),i.invoice_type!=="cash"&&e.jsx("th",{className:"py-2 px-2 border-r border-b border-black",children:"Tax"}),e.jsx("th",{className:"py-2 px-2 border-b border-black",children:"Amount in Rs."})]})}),e.jsx("tbody",{children:i.sales_details.map((n,l)=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 px-2 border-b border-r border-black",children:l+1}),e.jsx("td",{className:"py-2 px-2 border-b border-r border-black",children:n.product}),e.jsx("td",{className:"py-2 px-2 border-b border-r border-black",children:n.quantity}),e.jsxs("td",{className:"py-2 px-2 border-b border-r border-black",children:["₹ ",n.amount]}),i.invoice_type!=="cash"&&e.jsx("td",{className:"py-2 px-2 border-b border-r border-black",children:n.selectedTaxes&&n.selectedTaxes.length!==0?n.selectedTaxes.map((r,a)=>e.jsx("span",{children:r.name})):"n/a"}),e.jsxs("td",{className:"py-2 px-2 border-b border-black",children:["₹ ",n.amountWithTax]})]}))}),e.jsxs("tfoot",{children:[e.jsxs("tr",{children:[e.jsx("td",{colSpan:i.invoice_type!=="cash"?5:4,className:"px-2 py-2 border-t border-black"}),e.jsx("td",{className:"px-2 py-2 border-t border-l border-black"})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:i.invoice_type!=="cash"?5:4,className:"px-2 py-2 border-t border-b border-black",children:e.jsxs("p",{className:"text-sm font-semibold",children:["Total Amount : ₹ ",i.sales_details.reduce((n,l)=>n+l.amountWithTax,0)]})}),e.jsx("td",{className:"px-2 py-2 border-t border-l border-black"})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:4,className:"px-2 py-2 border-black",children:e.jsxs("p",{className:"text-sm font-semibold capitalize",children:["Rs. (In Words) : ",w(i.sales_details.reduce((n,l)=>n+l.amountWithTax,0))]})}),e.jsx("td",{colSpan:2,className:"px-2 py-2 border-t border-l border-black",children:e.jsx("p",{className:"text-sm font-semibold text-gray-700",children:"FOR RSP GREEN DEVELOPMENT AND LABORATORIES PVT. LTD."})})]})]})]})]}),i.invoice_type!=="cash"&&e.jsx("table",{className:"w-full",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("td",{colSpan:3,children:[i&&i.invoice_type==="tax"&&e.jsx("div",{className:"text-[13px] font-semibold p-3 w-96 text-gray-600",children:e.jsxs("p",{children:["Note : Bill Not paid within due date of issued then 2% interest will be charged as per MSME Rules.",e.jsx("br",{})," All disputes subject to Jurisdiction only."]})}),e.jsxs("div",{className:"py-2 px-3 space-y-1",children:[e.jsx("p",{className:"text-sm font-semibold",children:"Company Bank Details"}),e.jsx("p",{className:"text-sm text-gray-600",children:"RSP GREEN DEVELOPMENT & LABORATORIES PVT. LTD."}),e.jsxs("p",{className:"text-sm space-x-1",children:[e.jsx("span",{className:"font-semibold",children:"Bank Name :"}),e.jsx("span",{children:"ICICI Bank"})]}),e.jsxs("p",{className:"text-sm space-x-1",children:[e.jsx("span",{className:"font-semibold",children:"A/c No :"}),e.jsx("span",{children:"416505000037"})]}),e.jsxs("p",{className:"text-sm space-x-1",children:[e.jsx("span",{className:"font-semibold",children:"IFSC Code :"}),e.jsx("span",{children:"ICIC0004165"})]}),e.jsxs("p",{className:"text-sm space-x-1",children:[e.jsx("span",{className:"font-semibold",children:"Branch :"}),e.jsx("span",{children:"Mandirtala"})]})]})]}),e.jsx("td",{colSpan:2,children:e.jsx("p",{className:"text-sm font-medium",children:"Authorized Signatory"})})]})})}),e.jsxs("div",{className:"py-8 flex justify-center items-center gap-2 print:hidden",children:[e.jsxs("button",{onClick:s,className:"flex gap-1 items-center bg-gray-600 px-5 py-1.5 rounded text-white",children:[e.jsx(g,{}),e.jsx("span",{children:"Print"})]}),e.jsx(b,{href:"/sales",className:"bg-red-500 text-white px-5 py-1.5 block rounded",children:"Back"})]})]})})};export{D as default};
