(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{9393:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/manager",function(){return s(816)}])},816:function(e,r,s){"use strict";s.r(r);var n=s(5893),i=s(7294),l=s(9008),a=s.n(l),t=s(8005),c=s(7357),o=s(5582),d=s(6447),u=s(5861),h=s(3321),x=s(3219),j=s(6886),m=s(1177),Z=s(4054),p=s(6703),g=s(431),f=s(657),v=s(7645),S=s(6580),w=s(1425),C=s(633),y=s(8334);s(1567);var _=s(5121),P=s(2779),E=s(7474);let b=()=>{let[e,r]=(0,i.useState)({email:"",password:"",tel:"",role:""}),[s,l]=(0,i.useState)(!1),[y,b]=(0,i.useState)(""),[k,R]=(0,i.useState)(!1),A=()=>{l(!1)},N=s=>{r({...e,[s.target.name]:s.target.value})},W=async s=>{s.preventDefault();try{let r=await _.Z.post("".concat(P.uu.admin,"/register_admin_role"),e);201===r.status&&(R(!0),b(r.data.message),console.log(r.data.message))}catch(e){R(!1),b(e.response.data.message)}finally{l(!0)}r({email:"",password:"",tel:"",role:""})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"Administrateurs | Le Guide BJ"})}),(0,n.jsx)(c.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,n.jsx)(o.Z,{maxWidth:"xl",children:(0,n.jsxs)(d.Z,{spacing:3,children:[(0,n.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",spacing:4,children:[(0,n.jsx)(d.Z,{spacing:1,children:(0,n.jsx)(u.Z,{variant:"h4",children:"Gestion des administrateurs"})}),(0,n.jsx)("div",{children:(0,n.jsx)(h.Z,{startIcon:(0,n.jsx)(x.Z,{fontSize:"small",children:(0,n.jsx)(t.Z,{})}),variant:"contained",children:"Add"})})]}),(0,n.jsxs)(c.Z,{mt:4,children:[(0,n.jsx)(u.Z,{variant:"h6",children:"Ajouter un admin"}),(0,n.jsxs)("form",{onSubmit:W,children:[(0,n.jsxs)(j.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(m.Z,{required:!0,fullWidth:!0,id:"email",name:"email",label:"Email",variant:"outlined",value:e.email,onChange:N})}),(0,n.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(m.Z,{required:!0,fullWidth:!0,id:"tel",name:"tel",label:"Telephone",variant:"outlined",value:e.tel,onChange:N})}),(0,n.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(Z.Z,{fullWidth:!0,variant:"outlined",children:(0,n.jsxs)(p.Z,{id:"role",name:"role",label:"Role",value:e.role,onChange:N,children:[(0,n.jsx)(g.Z,{value:"manager",children:"Manager"}),(0,n.jsx)(g.Z,{value:"manager_sup",children:"Super Manager"})]})})}),(0,n.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(m.Z,{required:!0,fullWidth:!0,id:"password",name:"password",label:"Password",variant:"outlined",value:e.password,onChange:N})})]}),(0,n.jsx)(h.Z,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]}),(0,n.jsx)(E.Z,{}),(0,n.jsxs)(f.Z,{open:s,onClose:A,children:[(0,n.jsx)(v.Z,{children:"R\xe9sultat"}),(0,n.jsx)(S.Z,{children:(0,n.jsx)(u.Z,{color:k?"success":"error",children:y})}),(0,n.jsx)(w.Z,{children:(0,n.jsx)(h.Z,{onClick:A,color:"primary",children:"Fermer"})})]})," "]}),(0,n.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,n.jsx)(C.Z,{count:3,size:"small"})})]})})})]})};b.getLayout=e=>(0,n.jsx)(y.A,{children:e}),r.default=b},7474:function(e,r,s){"use strict";var n=s(5893),i=s(7294),l=s(9396),a=s(6242),t=s(7709),c=s(7109),o=s(3219),d=s(3321),u=s(7906),h=s(3184),x=s(3816),j=s(8102),m=s(295),Z=s(1589),p=s(657),g=s(7645),f=s(6580),v=s(1425),S=s(5121),w=s(2779),C=s(2377);let y=[5,10,25,50,100,150,200,300],_=()=>{let[e,r]=(0,i.useState)(0),[s,_]=(0,i.useState)(10),[P,E]=(0,i.useState)([]),[b,k]=(0,i.useState)(""),[R,A]=(0,i.useState)([]),[N,W]=(0,i.useState)(!1),[q,L]=(0,i.useState)(null),[O,T]=(0,i.useState)(!1),[z,G]=(0,i.useState)(""),[X,F]=(0,i.useState)(!1),[I,M]=(0,i.useState)(!1),[B,D]=(0,i.useState)(null),[J,K]=(0,i.useState)(!1);(0,i.useEffect)(()=>{H()},[]);let H=async()=>{try{let e=await S.Z.get("".concat(w.uu.admin,"/retrieve_all_admin"));E(e.data),A(e.data),G("Requ\xeate r\xe9ussie !"),F(!0)}catch(e){console.error(e),G("Erreur lors de la requ\xeate."),F(!1)}finally{}},Q=(e,s)=>{r(s)},U=e=>{_(parseInt(e.target.value,10)),r(0)},V=e=>{let r=e.target.value;k(r);let s=P.filter(e=>!!e.name&&"string"==typeof e.name&&e.name.toLowerCase().includes(r.toLowerCase()));A(s)},Y=R.slice(e*s,(e+1)*s),$=e=>{L(e),W(!0)},ee=async()=>{if(q)try{let e=await S.Z.delete("".concat(w.uu.admin,"/delete_admin/").concat(q._id));200===e.status?(G("Suppression r\xe9ussie."),F(!0)):(G("Erreur lors de la suppression."),F(!1))}catch(e){console.error(e),G("Erreur lors de la suppression."),F(!1)}finally{T(!0),W(!1)}},er=()=>{W(!1)},es=()=>{T(!1)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.Z,{sx:{p:2},children:[(0,n.jsx)(t.Z,{fullWidth:!0,value:b,onChange:V,placeholder:"Rechercher Admin (Nom)",startAdornment:(0,n.jsx)(c.Z,{position:"start",children:(0,n.jsx)(o.Z,{color:"action",fontSize:"small",children:(0,n.jsx)(l.Z,{})})}),sx:{maxWidth:500,marginRight:2}}),(0,n.jsx)(d.Z,{variant:"contained",onClick:H,children:"Recherche"})]}),(0,n.jsx)(C.L,{children:(0,n.jsxs)(a.Z,{style:{overflowX:"auto"},children:[(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(h.Z,{children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(j.Z,{children:"Nom"}),(0,n.jsx)(j.Z,{children:"Email"}),(0,n.jsx)(j.Z,{children:"Tel"}),(0,n.jsx)(j.Z,{children:"Role"}),(0,n.jsx)(j.Z,{children:"Supprimer"})]})}),(0,n.jsx)(m.Z,{children:Y.map(e=>(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(j.Z,{children:e.name}),(0,n.jsx)(j.Z,{children:e.email}),(0,n.jsx)(j.Z,{children:e.tel}),(0,n.jsx)(j.Z,{children:e.role}),(0,n.jsx)(j.Z,{children:(0,n.jsx)(d.Z,{variant:"contained",onClick:()=>$(e),color:"error",children:"Supprimer"})})]},e._id))})]}),(0,n.jsx)(Z.Z,{component:"div",count:R.length,page:e,onPageChange:Q,rowsPerPage:s,onRowsPerPageChange:U,rowsPerPageOptions:y})]})}),(0,n.jsxs)(p.Z,{open:N,onClose:er,children:[(0,n.jsx)(g.Z,{children:"Confirmer la suppression"}),(0,n.jsx)(f.Z,{children:"\xcates-vous s\xfbr de vouloir supprimer cet administrateur ?"}),(0,n.jsxs)(v.Z,{children:[(0,n.jsx)(d.Z,{onClick:er,color:"primary",children:"Annuler"}),(0,n.jsx)(d.Z,{onClick:ee,color:"error",children:"Supprimer"})]})]}),(0,n.jsxs)(p.Z,{open:O,onClose:es,children:[(0,n.jsx)(g.Z,{children:X?"Succ\xe8s":"Erreur"}),(0,n.jsx)(f.Z,{children:z}),(0,n.jsx)(v.Z,{children:(0,n.jsx)(d.Z,{onClick:es,color:"primary",children:"OK"})})]})]})};r.Z=_},1567:function(e,r,s){"use strict";s(5893)}},function(e){e.O(0,[497,255,156,225,703,177,483,886,633,334,774,888,179],function(){return e(e.s=9393)}),_N_E=e.O()}]);