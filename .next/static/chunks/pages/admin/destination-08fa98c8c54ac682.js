(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{266:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/destination",function(){return s(8321)}])},8321:function(e,t,s){"use strict";s.r(t);var r=s(5893),i=s(9008),a=s.n(i),o=s(7357),n=s(5582),l=s(8334);s(3426),s(2087),s(9413),s(3855),s(4474),s(1751),s(4911),s(3039),s(5834),s(9083),s(5866),s(1032),s(9505),s(1760),s(6302),s(2921);var c=s(5121);s(5357),s(249),s(2779),s(4359),s(704),s(2484),c.Z.defaults.withCredentials=!0;let d=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"Dashboard | LE GUIDE BJ"})}),(0,r.jsx)(o.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,r.jsx)(n.Z,{maxWidth:"xl",children:(0,r.jsx)("h1",{children:"Page Destination"})})})]});d.getLayout=e=>(0,r.jsx)(l.A,{children:e}),t.default=d},4359:function(e,t,s){"use strict";s.d(t,{t:function(){return v}});var r=s(5893),i=s(5697),a=s.n(i),o=s(6207),n=s(2743),l=s(6242),c=s(8445),d=s(3321),h=s(3219),x=s(4267),p=s(7720),u=s(2023),j=s(2734),m=s(1796),y=s(7309),f=s(7294),w=s(2779);let Z=()=>{let e=(0,j.Z)();return{chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[e.palette.primary.main,(0,m.Fq)(e.palette.primary.main,.25)],dataLabels:{enabled:!1},fill:{opacity:1,type:"solid"},grid:{borderColor:e.palette.divider,strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"40px"}},stroke:{colors:["orange"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:e=>e>0?"".concat(e,"K"):"".concat(e),offsetX:-10,style:{colors:e.palette.text.secondary}}}}},v=e=>{let{chartSeries:t,sx:s}=e,i=Z(),[a,j]=(0,f.useState)([]);return(0,f.useEffect)(()=>{let e=async()=>{try{let e=await fetch("".concat(w.uu.admin,"/get-users-by-year"));if(!e.ok)throw Error("Failed to fetch user statistics");let t=await e.json();j(t),console.log(t)}catch(e){console.error("Error fetching user statistics:",e)}};e()},[]),(0,r.jsxs)(l.Z,{sx:s,children:[(0,r.jsx)(c.Z,{action:(0,r.jsx)(d.Z,{color:"inherit",size:"small",startIcon:(0,r.jsx)(h.Z,{fontSize:"small",children:(0,r.jsx)(o.Z,{})}),children:"Sync"}),title:"Stats des utilisateurs enr\xe9gistr\xe9 par ann\xe9e"}),(0,r.jsx)(x.Z,{children:(0,r.jsx)(y.k,{height:350,options:i,series:[{name:"Utilisateurs enregistr\xe9s",data:null==a?void 0:a.map(e=>e.count)}],type:"bar",width:"100%"})}),(0,r.jsx)(p.Z,{}),(0,r.jsx)(u.Z,{sx:{justifyContent:"flex-end"},children:(0,r.jsx)(d.Z,{color:"inherit",endIcon:(0,r.jsx)(h.Z,{fontSize:"small",children:(0,r.jsx)(n.Z,{})}),size:"small",children:"Overview"})})]})};v.protoTypes={chartSeries:a().array.isRequired,sx:a().object}},5357:function(e,t,s){"use strict";s.d(t,{m:function(){return j}});var r=s(5893),i=s(5697),a=s.n(i),o=s(6242),n=s(4267),l=s(6447),c=s(5861),d=s(9661),h=s(3219),x=s(5121),p=s(7294),u=s(2779);let j=e=>{let[t,s]=(0,p.useState)(),{value:i,sx:a}=e,j=async()=>{let e=await x.Z.get("".concat(u.uu.admin,"/get_all_guides_active!"));return e};return(0,p.useEffect)(()=>{j().then(e=>{s(e.data)})},[]),(0,r.jsx)(o.Z,{sx:a,children:(0,r.jsx)(n.Z,{children:(0,r.jsxs)(l.Z,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[(0,r.jsxs)(l.Z,{spacing:1,children:[(0,r.jsx)(c.Z,{color:"text.secondary",variant:"overline",children:"Guide Active et D\xe9sactiver"}),(0,r.jsx)(c.Z,{variant:"h4",children:null==t?void 0:t.countIsActive}),(0,r.jsx)(c.Z,{variant:"h4",children:null==t?void 0:t.countIsDiseable})]}),(0,r.jsx)(d.Z,{sx:{backgroundColor:"primary.main",height:56,width:56},children:(0,r.jsxs)(h.Z,{children:[" ",(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"})})]})})]})})})};j.propTypes={value:a().string,sx:a().object}},2484:function(e,t,s){"use strict";var r=s(5893),i=s(5697),a=s.n(i),o=s(6207),n=s(2743),l=s(6242),c=s(8445),d=s(3321),h=s(3219),x=s(4267),p=s(7720),u=s(2023),j=s(2734),m=s(1796),y=s(7309);let f=()=>{let e=(0,j.Z)();return{chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[e.palette.primary.main,(0,m.Fq)(e.palette.primary.main,.25)],dataLabels:{enabled:!1},fill:{opacity:1,type:"solid"},grid:{borderColor:e.palette.divider,strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"40px"}},stroke:{colors:["green"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:e=>e>0?"".concat(e,"K"):"".concat(e),offsetX:-10,style:{colors:e.palette.text.secondary}}}}},w=e=>{let{chartSeries:t,sx:s}=e,i=f();return(0,r.jsxs)(l.Z,{sx:s,children:[(0,r.jsx)(c.Z,{action:(0,r.jsx)(d.Z,{color:"inherit",size:"small",startIcon:(0,r.jsx)(h.Z,{fontSize:"small",children:(0,r.jsx)(o.Z,{})}),children:"Sync"}),title:"Stats des partenaires enr\xe9gistr\xe9 par ann\xe9e"}),(0,r.jsx)(x.Z,{children:(0,r.jsx)(y.k,{height:350,options:i,series:t,type:"bar",width:"100%"})}),(0,r.jsx)(p.Z,{}),(0,r.jsx)(u.Z,{sx:{justifyContent:"flex-end"},children:(0,r.jsx)(d.Z,{color:"inherit",endIcon:(0,r.jsx)(h.Z,{fontSize:"small",children:(0,r.jsx)(n.Z,{})}),size:"small",children:"Overview"})})]})};w.protoTypes={chartSeries:a().array.isRequired,sx:a().object}},704:function(e,t,s){"use strict";var r=s(5893),i=s(5697),a=s.n(i),o=s(6207),n=s(2743),l=s(6242),c=s(8445),d=s(3321),h=s(3219),x=s(4267),p=s(7720),u=s(2023),j=s(2734),m=s(1796),y=s(7309);let f=()=>{let e=(0,j.Z)();return{chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[e.palette.primary.main,(0,m.Fq)(e.palette.primary.main,.25)],dataLabels:{enabled:!1},fill:{opacity:1,type:"solid"},grid:{borderColor:e.palette.divider,strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"40px"}},stroke:{colors:["orange"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:["Cot","Abomey","Dassa","Natti","Avrankou","Allada","Ouidah","Porto","S\xea","Plateau","Mala","Alobo"],labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:e=>e>0?"".concat(e,"K"):"".concat(e),offsetX:-10,style:{colors:e.palette.text.secondary}}}}},w=e=>{let{chartSeries:t,sx:s}=e,i=f();return(0,r.jsxs)(l.Z,{sx:s,children:[(0,r.jsx)(c.Z,{action:(0,r.jsx)(d.Z,{color:"inherit",size:"small",startIcon:(0,r.jsx)(h.Z,{fontSize:"small",children:(0,r.jsx)(o.Z,{})}),children:"Sync"}),title:"Stats des destinations par ann\xe9e"}),(0,r.jsx)(x.Z,{children:(0,r.jsx)(y.k,{height:350,options:i,series:t,type:"bar",width:"100%"})}),(0,r.jsx)(p.Z,{}),(0,r.jsx)(u.Z,{sx:{justifyContent:"flex-end"},children:(0,r.jsx)(d.Z,{color:"inherit",endIcon:(0,r.jsx)(h.Z,{fontSize:"small",children:(0,r.jsx)(n.Z,{})}),size:"small",children:"Overview"})})]})};w.protoTypes={chartSeries:a().array.isRequired,sx:a().object}}},function(e){e.O(0,[497,255,156,225,624,334,69,774,888,179],function(){return e(e.s=266)}),_N_E=e.O()}]);