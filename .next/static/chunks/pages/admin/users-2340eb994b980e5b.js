(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[840],{306:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(1713).A)("user-check",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]])},475:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var r=a(7876),s=a(4232),i=a(2577),n=a(1449),l=a(2671),o=a(5715),c=a(8230),d=a.n(c),p=a(1926),m=a(9099);function u(){let[e,t]=(0,s.useState)(!1),{logout:a}=(0,p.A)(),c=(0,m.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("nav",{className:"fixed top-0 left-0 right-0 h-16 bg-white border-b z-50 px-4 flex items-center justify-between",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(d(),{href:"/admin/dashboard",className:"flex items-center space-x-2",children:(0,r.jsx)("span",{className:"font-bold text-2xl text-primary ml-3",children:"MediPredict"})})}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(o.$,{variant:"ghost",size:"icon",className:"text-gray-600 hover:text-primary",children:(0,r.jsx)(i.A,{size:20})}),(0,r.jsx)(o.$,{variant:"ghost",size:"icon",className:"text-gray-600 hover:text-primary",children:(0,r.jsx)(n.A,{size:20})}),(0,r.jsx)("div",{className:"flex items-center ml-4 pl-4 border-l",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(o.$,{variant:"ghost",size:"icon",className:"text-gray-600 hover:text-primary",onClick:()=>{t(!e)},children:(0,r.jsx)("div",{className:"h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center",children:(0,r.jsx)(l.A,{size:20,className:"text-primary"})})}),e&&(0,r.jsx)("div",{className:"absolute right-0 mt-2 w-48 bg-white border rounded shadow-md",children:(0,r.jsxs)("ul",{className:"space-y-1",children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/admin/profile",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>t(!1),children:"Profil"})}),(0,r.jsx)("li",{children:(0,r.jsx)("div",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>{a(),c.push("/login"),t(!1)},children:"Logout"})})]})})]})})]})]})})}var h=a(8119),x=a(7396),g=a(395);function y(){let e=(0,m.useRouter)(),t=e.pathname,{logout:a}=(0,p.A)(),s=[{name:"Dashboard",path:"/admin/dashboard",icon:h.A},{name:"Data Users",path:"/admin/users",icon:x.A}];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("aside",{className:"fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r z-40 overflow-y-auto flex flex-col justify-between",children:[(0,r.jsx)("div",{className:"flex flex-col p-2 gap-1 flex-grow",children:s.map(e=>(0,r.jsxs)(d(),{href:e.path,className:"flex items-center gap-3 px-3 py-2 rounded-md transition-colors ".concat(t.startsWith(e.path)?"bg-primary/10 text-primary font-medium":"hover:bg-gray-100 text-gray-700"),children:[e.icon&&(0,r.jsx)(e.icon,{size:20}),(0,r.jsx)("span",{children:e.name})]},e.name))}),(0,r.jsx)("div",{className:"p-2 border-t0",children:(0,r.jsxs)("button",{onClick:()=>{a(),e.push("/login")},className:"w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ",children:[(0,r.jsx)(g.A,{size:20}),(0,r.jsx)("span",{className:"font-semibold",children:"Logout"})]})})]})})}function f(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,r.jsx)(u,{}),(0,r.jsx)(y,{}),(0,r.jsx)("main",{className:"pt-16 pl-64",children:(0,r.jsx)("div",{className:"p-6",children:t})})]})}},1449:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(1713).A)("settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},2577:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(1713).A)("bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]])},3397:(e,t,a)=>{"use strict";a.d(t,{p:()=>i});var r=a(7876);a(4232);var s=a(8928);function i(e){let{className:t,type:a,...i}=e;return(0,r.jsx)("input",{type:a,"data-slot":"input",className:(0,s.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t),...i})}},3974:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var r=a(7876),s=a(4232),i=a(3397),n=a(4023),l=a(7396),o=a(306),c=a(9516),d=a(7959),p=a(6739),m=a(1713);let u=(0,m.A)("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]),h=(0,m.A)("trash-2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);var x=a(7699),g=a(5761),y=a(6121),f=a(634),b=a(1859),w=a(2179),v=a(475),N=a(5715),k=a(4433),A=a(7685),z=a(8230),P=a.n(z);function C(e){let{collapsed:t}=e,[a,m]=(0,s.useState)([]),[z,C]=(0,s.useState)(""),[E,$]=(0,s.useState)([]),[I,_]=(0,s.useState)(1),[M,T]=(0,s.useState)(!0),[S,D]=(0,s.useState)(null),[L,F]=(0,s.useState)([]),[O,R]=(0,s.useState)(!1);(0,s.useEffect)(()=>{(async()=>{try{T(!0);let[e,t]=await Promise.all([(0,k.kh)(),(0,k.wP)()]);m(e),F(t)}catch(e){D("Failed to load user data"),console.error(e)}finally{T(!1)}})()},[]),(0,s.useEffect)(()=>{let e=a.filter(e=>"admin"!==e.role);$((O?e.filter(e=>0===e.isApproved):e).filter(e=>{var t,a,r,s;return(null==(t=e.username)?void 0:t.toLowerCase().includes(z.toLowerCase()))||(null==(a=e.nama_lengkap)?void 0:a.toLowerCase().includes(z.toLowerCase()))||(null==(r=e.instansi)?void 0:r.toLowerCase().includes(z.toLowerCase()))||(null==(s=e.jabatan)?void 0:s.toLowerCase().includes(z.toLowerCase()))})),_(1)},[z,a,O]);let q=Math.ceil(E.length/10),U=10*I,V=U-10,X=E.slice(V,U),B=V+1,G=Math.min(U,E.length),[J,W]=(0,s.useState)(null),Z=async e=>{if(window.confirm("Apakah Anda yakin ingin menghapus user berikut?\n\nNama: ".concat(e.nama_lengkap,"\nNIP: ").concat(e.NIP,"\nEmail: ").concat(e.email,"\n\nPerhatian: Tindakan ini tidak dapat dibatalkan!")))try{W(e.NIP),await (0,k.a1)(e.NIP),m(a.filter(t=>t.NIP!==e.NIP)),A.oR.success("User ".concat(e.nama_lengkap," berhasil dihapus"))}catch(e){console.error("Delete error:",e),A.oR.error(e.message||"Gagal menghapus user")}finally{W(null)}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(v.default,{children:[(0,r.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"Data Pengguna"}),(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[(0,r.jsx)(N.$,{className:"gap-2 ".concat(O?"bg-yellow-500 hover:bg-yellow-600":"bg-primary hover:bg-primary/90"," text-white"),onClick:()=>{R(!O)},children:O?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{size:18}),(0,r.jsx)("span",{children:"Tampilkan Semua User"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{size:18}),(0,r.jsx)("span",{children:"Tampilkan User Pending"})]})}),(0,r.jsxs)("div",{className:"relative w-full max-w-[345px]",children:[(0,r.jsx)(i.p,{id:"search",type:"input",placeholder:"Cari pengguna...",value:z,onChange:e=>{C(e.target.value)},className:"border-gray-300 pr-10"}),(0,r.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",children:(0,r.jsx)(c.A,{size:18,className:"text-gray-500"})})]})]}),M?(0,r.jsxs)("div",{className:"flex justify-center items-center h-64",children:[(0,r.jsx)(d.A,{className:"animate-spin h-8 w-8 text-primary"}),(0,r.jsx)("span",{className:"ml-2 text-primary",children:"Loading user data..."})]}):S?(0,r.jsx)("div",{className:"bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6",children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(p.A,{className:"h-5 w-5 mr-2"}),(0,r.jsx)("p",{children:S})]})}):0===E.length?(0,r.jsx)("div",{className:"bg-gray-100 p-8 text-center rounded-lg",children:(0,r.jsx)("p",{className:"text-gray-600",children:"No users found matching your criteria."})}):(0,r.jsx)("div",{className:"w-full border border-gray-300 rounded-lg overflow-x-auto",children:(0,r.jsxs)(x.X,{striped:!0,className:"w-full min-w-[1000px]",children:[(0,r.jsx)(g.n,{children:(0,r.jsxs)(y.H,{className:"bg-gray-100 border-b",children:[(0,r.jsx)(f.T,{className:"border-r whitespace-nowrap w-1",children:"No"}),(0,r.jsx)(f.T,{className:"border-r whitespace-nowrap",children:"Foto"}),(0,r.jsx)(f.T,{className:"border-r whitespace-nowrap",children:"Nama Lengkap"}),(0,r.jsx)(f.T,{className:"border-r whitespace-nowrap",children:"NIP"}),(0,r.jsx)(f.T,{className:"border-r whitespace-nowrap",children:"Instansi"}),(0,r.jsx)(f.T,{className:"border-r whitespace-nowrap",children:"Jabatan"}),(0,r.jsx)(f.T,{className:"border-r whitespace-nowrap",children:"Email"}),(0,r.jsx)(f.T,{className:"border-r whitespace-nowrap",children:"Username"}),(0,r.jsx)(f.T,{className:"border-r whitespace-nowrap",children:"Status"}),(0,r.jsx)(f.T,{className:"border-r whitespace-nowrap w-1",children:"Action"})]})}),(0,r.jsx)(b.B,{className:"divide-y",children:X.map((e,t)=>{var a;return(0,r.jsxs)(y.H,{className:"hover:bg-gray-50",children:[(0,r.jsx)(w.n,{className:"border-r whitespace-nowrap",children:B+t}),(0,r.jsx)(w.n,{className:"border-r",children:(0,r.jsx)("div",{className:"h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center",children:(0,r.jsx)("span",{className:"text-gray-500 font-medium",children:(null==(a=e.nama_lengkap)?void 0:a.charAt(0))||"?"})})}),(0,r.jsx)(w.n,{className:"border-r whitespace-nowrap font-medium",children:e.nama_lengkap}),(0,r.jsx)(w.n,{className:"border-r whitespace-nowrap",children:e.NIP}),(0,r.jsx)(w.n,{className:"border-r whitespace-nowrap",children:e.instansi}),(0,r.jsx)(w.n,{className:"border-r whitespace-nowrap",children:e.jabatan}),(0,r.jsx)(w.n,{className:"border-r whitespace-nowrap",children:e.email}),(0,r.jsx)(w.n,{className:"border-r whitespace-nowrap",children:e.username||"-"}),(0,r.jsx)(w.n,{className:"border-r whitespace-nowrap",children:1===e.isApproved?(0,r.jsx)("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs",children:"Aktif"}):(0,r.jsx)("span",{className:"px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs",children:"Pending"})}),(0,r.jsx)(w.n,{className:"border-r whitespace-nowrap",children:(0,r.jsx)("div",{className:"flex gap-2",children:0===e.isApproved?(0,r.jsx)(P(),{href:"/admin/users/edit/".concat(e.NIP),children:(0,r.jsx)("button",{className:"bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 transition duration-200",title:"Set username and password",children:(0,r.jsx)(u,{size:18})})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(P(),{href:"/admin/users/edit/".concat(e.NIP),children:(0,r.jsx)("button",{className:"bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 transition duration-200",title:"Edit user",children:(0,r.jsx)(u,{size:18})})}),(0,r.jsx)("button",{onClick:()=>Z(e),className:"bg-red-500 text-white p-1 rounded-md hover:bg-red-600 transition duration-200",title:"Delete user",disabled:J===e.NIP,children:J===e.NIP?(0,r.jsx)(d.A,{size:18,className:"animate-spin"}):(0,r.jsx)(h,{size:18})})]})})})]},e.NIP)})})]})}),E.length>0&&(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4",children:[(0,r.jsx)(n.d,{layout:"navigation",currentPage:I,totalPages:Math.max(1,q),onPageChange:e=>{_(e)},showIcons:!0,disabled:E.length<=10,className:E.length<=10?"pointer-events-none opacity-50":""}),(0,r.jsxs)("div",{className:"text-sm text-gray-700",children:["Showing ",(0,r.jsx)("span",{className:"font-medium",children:E.length>0?B:0})," to ",(0,r.jsx)("span",{className:"font-medium",children:G})," of ",(0,r.jsx)("span",{className:"font-medium",children:E.length})," entries"]})]})]})})}},4433:(e,t,a)=>{"use strict";a.d(t,{_u:()=>l,a1:()=>n,kh:()=>s,rT:()=>o,wP:()=>i});var r=a(3004);let s=async()=>{try{return(await r.A.get("/admin/users")).data}catch(t){var e;throw(null==(e=t.response)?void 0:e.data)||{message:"An error occurred while fetching users"}}},i=async()=>{try{return(await r.A.get("/admin/users/pending")).data}catch(t){var e;throw(null==(e=t.response)?void 0:e.data)||{message:"An error occurred while fetching pending users"}}},n=async e=>{try{return(await r.A.delete("/admin/users/".concat(e))).data}catch(e){var t;throw console.error("Error removing user:",e),e.response&&(console.error("Response status:",e.response.status),console.error("Response data:",e.response.data)),(null==(t=e.response)?void 0:t.data)||{message:"An error occurred while removing user"}}},l=async e=>{try{return(await r.A.get("/admin/users/".concat(e))).data}catch(e){var t;throw(null==(t=e.response)?void 0:t.data)||{message:"An error occurred while approving user"}}},o=async(e,t)=>{try{return(await r.A.put("/admin/users/".concat(e),t)).data}catch(e){var a;throw(null==(a=e.response)?void 0:a.data)||{message:"An error occurred while updating user"}}}},5799:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users",function(){return a(3974)}])},6739:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(1713).A)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},7685:(e,t,a)=>{"use strict";a.d(t,{oR:()=>T});var r,s=a(4232);let i={data:""},n=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,o=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(e,t)=>{let a="",r="",s="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+n+";":r+="f"==i[1]?d(n,i):i+"{"+d(n,"k"==i[1]?"":t)+"}":"object"==typeof n?r+=d(n,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=d.p?d.p(i,n):i+":"+n+";")}return a+(t&&s?t+"{"+s+"}":s)+r},p={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},u=(e,t,a,r,s)=>{let i=m(e),n=p[i]||(p[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!p[n]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=l.exec(e.replace(o,""));)t[4]?r.shift():t[3]?(a=t[3].replace(c," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(c," ").trim();return r[0]})(e);p[n]=d(s?{["@keyframes "+n]:t}:t,a?"":"."+n)}let u=a&&p.g?p.g:null;return a&&(p.g=p[n]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(p[n],t,r,u),n},h=(e,t,a)=>e.reduce((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function x(e){let t=this||{},a=e.call?e(t.p):e;return u(a.unshift?a.raw?h(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,n(t.target),t.g,t.o,t.k)}x.bind({g:1});let g,y,f,b=x.bind({k:1});function w(e,t){let a=this||{};return function(){let r=arguments;function s(i,n){let l=Object.assign({},i),o=l.className||s.className;a.p=Object.assign({theme:y&&y()},l),a.o=/ *go\d+/.test(o),l.className=x.apply(a,r)+(o?" "+o:""),t&&(l.ref=n);let c=e;return e[0]&&(c=l.as||e,delete l.as),f&&c[0]&&f(l),g(c,l)}return t?t(s):s}}var v=e=>"function"==typeof e,N=(e,t)=>v(e)?e(t):e,k=(()=>{let e=0;return()=>(++e).toString()})(),A=(()=>{let e;return()=>{if(void 0===e&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return z(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},P=[],C={toasts:[],pausedAt:void 0},E=e=>{C=z(C,e),P.forEach(e=>{e(C)})},$={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[t,a]=j(C),r=Q(C);H(()=>(r.current!==C&&a(C),P.push(a),()=>{let e=P.indexOf(a);e>-1&&P.splice(e,1)}),[]);let s=t.toasts.map(t=>{var a,r,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||$[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},_=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||k()}),M=e=>(t,a)=>{let r=_(t,e,a);return E({type:2,toast:r}),r.id},T=(e,t)=>M("blank")(e,t);T.error=M("error"),T.success=M("success"),T.loading=M("loading"),T.custom=M("custom"),T.dismiss=e=>{E({type:3,toastId:e})},T.remove=e=>E({type:4,toastId:e}),T.promise=(e,t,a)=>{let r=T.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?N(t.success,e):void 0;return s?T.success(s,{id:r,...a,...null==a?void 0:a.success}):T.dismiss(r),e}).catch(e=>{let s=t.error?N(t.error,e):void 0;s?T.error(s,{id:r,...a,...null==a?void 0:a.error}):T.dismiss(r)}),e};var S=(e,t)=>{E({type:1,toast:{id:e,height:t}})},D=()=>{E({type:5,time:Date.now()})},L=new Map,F=1e3,O=(e,t=F)=>{if(L.has(e))return;let a=setTimeout(()=>{L.delete(e),E({type:4,toastId:e})},t);L.set(e,a)},R=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,V=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,X=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${X} 1s linear infinite;
`,G=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,J=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,W=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${G} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${J} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z=w("div")`
  position: absolute;
`,K=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ee=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Y} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?s.createElement(ee,null,t):t:"blank"===a?null:s.createElement(K,null,s.createElement(B,{...r}),"loading"!==a&&s.createElement(Z,null,"error"===a?s.createElement(V,{...r}):s.createElement(W,{...r})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,er=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,es=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ei=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(a),er(a)];return{animation:t?`${b(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};s.memo(({toast:e,position:t,style:a,children:r})=>{let i=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},n=s.createElement(et,{toast:e}),l=s.createElement(ei,{...e.ariaProps},N(e.message,e));return s.createElement(es,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof r?r({icon:n,message:l}):s.createElement(s.Fragment,null,n,l))}),r=s.createElement,d.p=void 0,g=r,y=void 0,f=void 0,x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`},7959:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(1713).A)("loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]])},8119:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(1713).A)("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[308,522,636,593,792],()=>t(5799)),_N_E=e.O()}]);