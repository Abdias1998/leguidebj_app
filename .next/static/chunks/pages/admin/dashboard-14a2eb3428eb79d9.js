(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{1426:function(e,t,r){"use strict";r.d(t,{Z:function(){return D}});var s=r(7462),i=r(3366),n=r(7294),a=r(6010),o=r(8510),l=r(5463),c=r(3264),d=r(9628),u=r(6682),x=r(9707),h=r(6500);function p(e){return e.level>0&&e.container}function f(e){return function(t){return`var(--Grid-${t}Spacing${e.level||""})`}}function m(e){return function(t){return 0===e.level?`var(--Grid-${t}Spacing)`:`var(--Grid-${t}Spacing${e.level-1||""})`}}let g=(e,t)=>e.filter(e=>t.includes(e)),v=(e,t,r)=>{let s=e.keys[0];if(Array.isArray(t))t.forEach((t,s)=>{r((t,r)=>{s<=e.keys.length-1&&(0===s?Object.assign(t,r):t[e.up(e.keys[s])]=r)},t)});else if(t&&"object"==typeof t){let i=Object.keys(t).length>e.keys.length?e.keys:g(e.keys,Object.keys(t));i.forEach(i=>{if(-1!==e.keys.indexOf(i)){let n=t[i];void 0!==n&&r((t,r)=>{s===i?Object.assign(t,r):t[e.up(i)]=r},n)}})}else("number"==typeof t||"string"==typeof t)&&r((e,t)=>{Object.assign(e,t)},t)},j=({theme:e,ownerState:t})=>{let r=f(t),s={};return v(e.breakpoints,t.gridSize,(e,i)=>{let n={};!0===i&&(n={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===i&&(n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof i&&(n={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${i} / var(--Grid-columns)${p(t)?` + ${r("column")}`:""})`}),e(s,n)}),s},y=({theme:e,ownerState:t})=>{let r={};return v(e.breakpoints,t.gridOffset,(e,t)=>{let s={};"auto"===t&&(s={marginLeft:"auto"}),"number"==typeof t&&(s={marginLeft:0===t?"0px":`calc(100% * ${t} / var(--Grid-columns))`}),e(r,s)}),r},w=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={"--Grid-columns":12};return v(e.breakpoints,t.columns,(e,t)=>{e(r,{"--Grid-columns":t})}),r},b=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=m(t),s=p(t)?{[`--Grid-rowSpacing${t.level||""}`]:r("row")}:{};return v(e.breakpoints,t.rowSpacing,(r,i)=>{var n;r(s,{[`--Grid-rowSpacing${t.level||""}`]:"string"==typeof i?i:null==(n=e.spacing)?void 0:n.call(e,i)})}),s},Z=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=m(t),s=p(t)?{[`--Grid-columnSpacing${t.level||""}`]:r("column")}:{};return v(e.breakpoints,t.columnSpacing,(r,i)=>{var n;r(s,{[`--Grid-columnSpacing${t.level||""}`]:"string"==typeof i?i:null==(n=e.spacing)?void 0:n.call(e,i)})}),s},k=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return v(e.breakpoints,t.direction,(e,t)=>{e(r,{flexDirection:t})}),r},S=({ownerState:e})=>{let t=f(e),r=m(e);return(0,s.Z)({minWidth:0,boxSizing:"border-box"},e.container&&(0,s.Z)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:`calc(${t("row")} / -2) calc(${t("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${t("row")} * -1) 0px 0px calc(${t("column")} * -1)`}),(!e.container||p(e))&&(0,s.Z)({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},$=e=>{let t=[];return Object.entries(e).forEach(([e,r])=>{!1!==r&&void 0!==r&&t.push(`grid-${e}-${String(r)}`)}),t},O=(e,t="xs")=>{function r(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(r(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let t=[];return Object.entries(e).forEach(([e,s])=>{r(s)&&t.push(`spacing-${e}-${String(s)}`)}),t}return[]},E=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,t])=>`direction-${e}-${t}`):[`direction-xs-${String(e)}`];var G=r(5893);let A=["className","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow"],C=(0,h.Z)(),N=(0,c.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function _(e){return(0,d.Z)({props:e,name:"MuiGrid",defaultTheme:C})}var q=r(948),z=r(1657);let M=function(e={}){let{createStyledComponent:t=N,useThemeProps:r=_,componentName:c="MuiGrid"}=e,d=n.createContext(0),h=n.createContext(void 0),p=(e,t)=>{let{container:r,direction:s,spacing:i,wrap:n,gridSize:a}=e,d={root:["root",r&&"container","wrap"!==n&&`wrap-xs-${String(n)}`,...E(s),...$(a),...r?O(i,t.breakpoints.keys[0]):[]]};return(0,o.Z)(d,e=>(0,l.ZP)(c,e),{})},f=t(w,Z,b,j,k,S,y),m=n.forwardRef(function(e,t){var o,l,c,m,g,v,j,y;let w=(0,u.Z)(),b=r(e),Z=(0,x.Z)(b),k=n.useContext(d),S=n.useContext(h),{className:$,columns:O=12,container:E=!1,component:C="div",direction:N="row",wrap:_="wrap",spacing:q=0,rowSpacing:z=q,columnSpacing:M=q,disableEqualOverflow:D}=Z,L=(0,i.Z)(Z,A),I=D;k&&void 0!==D&&(I=e.disableEqualOverflow);let T={},W={},P={};Object.entries(L).forEach(([e,t])=>{void 0!==w.breakpoints.values[e]?T[e]=t:void 0!==w.breakpoints.values[e.replace("Offset","")]?W[e.replace("Offset","")]=t:P[e]=t});let B=null!=(o=e.columns)?o:k?void 0:O,J=null!=(l=e.spacing)?l:k?void 0:q,R=null!=(c=null!=(m=e.rowSpacing)?m:e.spacing)?c:k?void 0:z,F=null!=(g=null!=(v=e.columnSpacing)?v:e.spacing)?g:k?void 0:M,X=(0,s.Z)({},Z,{level:k,columns:B,container:E,direction:N,wrap:_,spacing:J,rowSpacing:R,columnSpacing:F,gridSize:T,gridOffset:W,disableEqualOverflow:null!=(j=null!=(y=I)?y:S)&&j,parentDisableEqualOverflow:S}),K=p(X,w),Y=(0,G.jsx)(f,(0,s.Z)({ref:t,as:C,ownerState:X,className:(0,a.Z)(K.root,$)},P));return E&&(Y=(0,G.jsx)(d.Provider,{value:k+1,children:Y})),void 0!==I&&I!==(null!=S&&S)&&(Y=(0,G.jsx)(h.Provider,{value:I,children:Y})),Y});return m}({createStyledComponent:(0,q.ZP)("div",{name:"MuiGrid2",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>(0,z.Z)({props:e,name:"MuiGrid2"})});var D=M},5504:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard",function(){return r(941)}])},941:function(e,t,r){"use strict";r.r(t);var s=r(5893),i=r(9008),n=r.n(i),a=r(7357),o=r(5582),l=r(1426),c=r(8334);r(3426),r(2087),r(9413);var d=r(3855),u=r(4474);r(1751),r(4911),r(3039);var x=r(5834);r(9083);var h=r(5866),p=r(1032),f=r(9505),m=r(1760);r(6302);var g=r(2921),v=r(5121),j=r(5357);r(249),r(2779);var y=r(4359);r(704),r(2484),v.Z.defaults.withCredentials=!0;let w=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n(),{children:(0,s.jsx)("title",{children:"Dashboard | LE GUIDE BJ"})}),(0,s.jsx)(a.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,s.jsx)(o.Z,{maxWidth:"xl",children:(0,s.jsxs)(l.Z,{container:!0,spacing:3,children:[(0,s.jsx)(l.Z,{xs:12,sm:6,lg:3,children:(0,s.jsx)(u.R,{sx:{height:"100%"}})}),(0,s.jsx)(l.Z,{xs:12,sm:6,lg:3,children:(0,s.jsx)(x.Q,{sx:{height:"100%"},value:"$15k"})}),(0,s.jsx)(l.Z,{xs:12,sm:6,lg:3,children:(0,s.jsx)(g.a,{sx:{height:"100%"},value:"$15k"})}),(0,s.jsx)(l.Z,{xs:12,sm:6,lg:3,children:(0,s.jsx)(h.O,{sx:{height:"100%"},value:"$15k"})}),(0,s.jsx)(l.Z,{xs:12,sm:6,lg:3,children:(0,s.jsx)(p.J,{sx:{height:"100%"},value:"$15k"})}),(0,s.jsx)(l.Z,{xs:12,sm:6,lg:3,children:(0,s.jsx)(f.m,{sx:{height:"100%"},value:"$15k"})}),(0,s.jsx)(l.Z,{xs:12,sm:6,lg:3,children:(0,s.jsx)(m.A,{sx:{height:"100%"},value:"$15k"})}),(0,s.jsx)(l.Z,{xs:12,sm:6,lg:3,children:(0,s.jsx)(j.m,{sx:{height:"100%"},value:"$15k"})}),(0,s.jsx)(l.Z,{xs:12,lg:6,children:(0,s.jsx)(d.h,{sx:{height:"100%"}})}),(0,s.jsx)(l.Z,{xs:12,lg:6,children:(0,s.jsx)(y.t,{sx:{height:"100%"}})})]})})})]});w.getLayout=e=>(0,s.jsx)(c.A,{children:e}),t.default=w},4359:function(e,t,r){"use strict";r.d(t,{t:function(){return w}});var s=r(5893),i=r(5697),n=r.n(i),a=r(6207),o=r(2743),l=r(6242),c=r(8445),d=r(3321),u=r(3219),x=r(4267),h=r(7720),p=r(2023),f=r(2734),m=r(1796),g=r(7309),v=r(7294),j=r(2779);let y=()=>{let e=(0,f.Z)();return{chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[e.palette.primary.main,(0,m.Fq)(e.palette.primary.main,.25)],dataLabels:{enabled:!1},fill:{opacity:1,type:"solid"},grid:{borderColor:e.palette.divider,strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"40px"}},stroke:{colors:["orange"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:e=>e>0?"".concat(e,"K"):"".concat(e),offsetX:-10,style:{colors:e.palette.text.secondary}}}}},w=e=>{let{chartSeries:t,sx:r}=e,i=y(),[n,f]=(0,v.useState)([]);return(0,v.useEffect)(()=>{let e=async()=>{try{let e=await fetch("".concat(j.uu.admin,"/get-users-by-year"));if(!e.ok)throw Error("Failed to fetch user statistics");let t=await e.json();f(t),console.log(t)}catch(e){console.error("Error fetching user statistics:",e)}};e()},[]),(0,s.jsxs)(l.Z,{sx:r,children:[(0,s.jsx)(c.Z,{action:(0,s.jsx)(d.Z,{color:"inherit",size:"small",startIcon:(0,s.jsx)(u.Z,{fontSize:"small",children:(0,s.jsx)(a.Z,{})}),children:"Sync"}),title:"Stats des utilisateurs enr\xe9gistr\xe9 par ann\xe9e"}),(0,s.jsx)(x.Z,{children:(0,s.jsx)(g.k,{height:350,options:i,series:[{name:"Utilisateurs enregistr\xe9s",data:null==n?void 0:n.map(e=>e.count)}],type:"bar",width:"100%"})}),(0,s.jsx)(h.Z,{}),(0,s.jsx)(p.Z,{sx:{justifyContent:"flex-end"},children:(0,s.jsx)(d.Z,{color:"inherit",endIcon:(0,s.jsx)(u.Z,{fontSize:"small",children:(0,s.jsx)(o.Z,{})}),size:"small",children:"Overview"})})]})};w.protoTypes={chartSeries:n().array.isRequired,sx:n().object}},5357:function(e,t,r){"use strict";r.d(t,{m:function(){return f}});var s=r(5893),i=r(5697),n=r.n(i),a=r(6242),o=r(4267),l=r(6447),c=r(5861),d=r(9661),u=r(3219),x=r(5121),h=r(7294),p=r(2779);let f=e=>{let[t,r]=(0,h.useState)(),{value:i,sx:n}=e,f=async()=>{let e=await x.Z.get("".concat(p.uu.admin,"/get_all_guides_active!"));return e};return(0,h.useEffect)(()=>{f().then(e=>{r(e.data)})},[]),(0,s.jsx)(a.Z,{sx:n,children:(0,s.jsx)(o.Z,{children:(0,s.jsxs)(l.Z,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[(0,s.jsxs)(l.Z,{spacing:1,children:[(0,s.jsx)(c.Z,{color:"text.secondary",variant:"overline",children:"Guide Active et D\xe9sactiver"}),(0,s.jsx)(c.Z,{variant:"h4",children:null==t?void 0:t.countIsActive}),(0,s.jsx)(c.Z,{variant:"h4",children:null==t?void 0:t.countIsDiseable})]}),(0,s.jsx)(d.Z,{sx:{backgroundColor:"primary.main",height:56,width:56},children:(0,s.jsxs)(u.Z,{children:[" ",(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"})})]})})]})})})};f.propTypes={value:n().string,sx:n().object}},2484:function(e,t,r){"use strict";var s=r(5893),i=r(5697),n=r.n(i),a=r(6207),o=r(2743),l=r(6242),c=r(8445),d=r(3321),u=r(3219),x=r(4267),h=r(7720),p=r(2023),f=r(2734),m=r(1796),g=r(7309);let v=()=>{let e=(0,f.Z)();return{chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[e.palette.primary.main,(0,m.Fq)(e.palette.primary.main,.25)],dataLabels:{enabled:!1},fill:{opacity:1,type:"solid"},grid:{borderColor:e.palette.divider,strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"40px"}},stroke:{colors:["green"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:e=>e>0?"".concat(e,"K"):"".concat(e),offsetX:-10,style:{colors:e.palette.text.secondary}}}}},j=e=>{let{chartSeries:t,sx:r}=e,i=v();return(0,s.jsxs)(l.Z,{sx:r,children:[(0,s.jsx)(c.Z,{action:(0,s.jsx)(d.Z,{color:"inherit",size:"small",startIcon:(0,s.jsx)(u.Z,{fontSize:"small",children:(0,s.jsx)(a.Z,{})}),children:"Sync"}),title:"Stats des partenaires enr\xe9gistr\xe9 par ann\xe9e"}),(0,s.jsx)(x.Z,{children:(0,s.jsx)(g.k,{height:350,options:i,series:t,type:"bar",width:"100%"})}),(0,s.jsx)(h.Z,{}),(0,s.jsx)(p.Z,{sx:{justifyContent:"flex-end"},children:(0,s.jsx)(d.Z,{color:"inherit",endIcon:(0,s.jsx)(u.Z,{fontSize:"small",children:(0,s.jsx)(o.Z,{})}),size:"small",children:"Overview"})})]})};j.protoTypes={chartSeries:n().array.isRequired,sx:n().object}},704:function(e,t,r){"use strict";var s=r(5893),i=r(5697),n=r.n(i),a=r(6207),o=r(2743),l=r(6242),c=r(8445),d=r(3321),u=r(3219),x=r(4267),h=r(7720),p=r(2023),f=r(2734),m=r(1796),g=r(7309);let v=()=>{let e=(0,f.Z)();return{chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[e.palette.primary.main,(0,m.Fq)(e.palette.primary.main,.25)],dataLabels:{enabled:!1},fill:{opacity:1,type:"solid"},grid:{borderColor:e.palette.divider,strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"40px"}},stroke:{colors:["orange"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:["Cot","Abomey","Dassa","Natti","Avrankou","Allada","Ouidah","Porto","S\xea","Plateau","Mala","Alobo"],labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:e=>e>0?"".concat(e,"K"):"".concat(e),offsetX:-10,style:{colors:e.palette.text.secondary}}}}},j=e=>{let{chartSeries:t,sx:r}=e,i=v();return(0,s.jsxs)(l.Z,{sx:r,children:[(0,s.jsx)(c.Z,{action:(0,s.jsx)(d.Z,{color:"inherit",size:"small",startIcon:(0,s.jsx)(u.Z,{fontSize:"small",children:(0,s.jsx)(a.Z,{})}),children:"Sync"}),title:"Stats des destinations par ann\xe9e"}),(0,s.jsx)(x.Z,{children:(0,s.jsx)(g.k,{height:350,options:i,series:t,type:"bar",width:"100%"})}),(0,s.jsx)(h.Z,{}),(0,s.jsx)(p.Z,{sx:{justifyContent:"flex-end"},children:(0,s.jsx)(d.Z,{color:"inherit",endIcon:(0,s.jsx)(u.Z,{fontSize:"small",children:(0,s.jsx)(o.Z,{})}),size:"small",children:"Overview"})})]})};j.protoTypes={chartSeries:n().array.isRequired,sx:n().object}}},function(e){e.O(0,[497,255,156,225,624,334,69,774,888,179],function(){return e(e.s=5504)}),_N_E=e.O()}]);