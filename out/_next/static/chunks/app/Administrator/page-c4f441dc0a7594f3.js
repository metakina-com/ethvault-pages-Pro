(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16238],{55061:function(e,t,a){Promise.resolve().then(a.bind(a,67891))},18286:function(e,t,a){"use strict";a.r(t),a.d(t,{MenuContext:function(){return i},MenuProvider:function(){return l}});var s=a(3827),r=a(64090);let i=(0,r.createContext)({isRightMenuVisible:!1,toggleRightMenu:()=>{},hideRightMenu:()=>{}}),l=e=>{let{children:t}=e,[a,l]=(0,r.useState)(!1);return(0,s.jsx)(i.Provider,{value:{isRightMenuVisible:a,toggleRightMenu:()=>{l(e=>!e)},hideRightMenu:()=>{l(!1)}},children:t})}},93800:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var s=a(3827);a(64090);var r=a(20703),i=a(72338),l=a.n(i),n={src:"/_next/static/media/leftarraw.9fdb1a6b.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASUlEQVR42jXLwQmAMBBE0dFU5d3yPIseRcEUkPo+CRPmsrB/3wohFs+dgrw63DyINdeXOu1oiI8rcgTCrfNy0nDysDr4E6I2Cuoh1keRJVzFOwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},d=a(47907),o=e=>{let{title:t,backUrl:a}=e,i=(0,d.useRouter)(),o=()=>{i.push(a)};return(0,s.jsx)("div",{className:l().nativeBar,children:(0,s.jsxs)("div",{className:l().leftarraw,children:[(0,s.jsx)(r.default,{onClick:()=>o(),className:l().m1,src:n,alt:"coin",width:50,height:50}),(0,s.jsx)("div",{className:l().t1,children:t})]})})}},33052:function(e,t,a){"use strict";a.d(t,{v:function(){return i}});var s=a(31254);let r=()=>"clipboard"in navigator,i=async e=>{try{if(r()){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),s.ZP.success("复制成功")}else{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")?s.ZP.success("复制成功"):s.ZP.error("复制失败，请稍后重试")}catch(e){s.ZP.error("复制失败，请稍后重试")}finally{document.body.removeChild(t)}}}catch(a){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),s.ZP.error("复制失败，请稍后重试")}}},67891:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return C}});var s=a(3827),r=a(64090),i=a(18286),l=a(93800),n=a(32294),d=a.n(n),o=a(31254),c=a(96477),m=a(28807),u=a(1073),h=a(38302),x=a(59601),v=a(28683),p=a(35573),g=a(66228),N=a.n(g),y=a(23349),w=a(33052),f=a(70975),_=a(14297),A=e=>{let{Data:t=[],switchItem:a,listexamine:i=[]}=e,[l,n]=(0,r.useState)();(0,_.M)();let[d,g]=(0,r.useState)(""),[A,j]=(0,r.useState)([]),[E,C]=(0,r.useState)("EN"),b=async e=>{let a=await (0,y.RA)(e.ETHAddress,f.B);for(let s=0;s<t.length;s++){let r=await a.getTokenBalance(e.BUSDaddress,t[s].walletAddress);t[s].realBalance=(0,y.rE)(r)}j(t)},I=async e=>{let t=await (0,y.RA)(l.ETHAddress,f.B);await t.approveWithdrawal(e)},F=async e=>{let t=await (0,y.RA)(l.ETHAddress,f.B);await t.rejectWithdrawal(e)},P=async()=>{if(!d){o.ZP.warning("EN"==E?"Please enter your wallet address":"请输入钱包地址");return}let e=await (0,y.RA)(l.ETHAddress,f.B);await e.adminWithdrawUser(d)};return(0,r.useEffect)(()=>{let e=localStorage.getItem("language");e&&C(e)},[]),(0,r.useEffect)(()=>{b(JSON.parse(localStorage.getItem("Nodestorage")||""))},[t]),(0,r.useEffect)(()=>{n(JSON.parse(localStorage.getItem("Nodestorage")||""))},[]),(0,s.jsx)("div",{className:N().Content,children:"0"==a?(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:N().ComputingPower,children:[(0,s.jsx)("div",{style:{width:"30%"},className:N().AmountReceived,children:"EN"==E?"address":"地址"}),(0,s.jsx)("div",{style:{width:"50%"},className:N().AmountReceived,children:"EN"==E?"balance(USDT)":"余额(USDT)"}),(0,s.jsx)("div",{style:{width:"20%"},className:N().AmountReceived,children:"EN"==E?"Time":"时间"})]}),(0,s.jsx)("div",{className:N().CustomerInformation,children:A.length>0?(0,s.jsx)("div",{id:"scrollableDiv",style:{height:"100vh",overflow:"auto",padding:"0 5px",fontSize:"18px",color:"#FFFFFF"},children:(0,s.jsx)(c.Z,{dataSource:A,renderItem:(e,t)=>(0,s.jsx)(c.Z.Item,{children:(0,s.jsxs)("div",{className:N().ComputingPowercont,children:[(0,s.jsxs)("div",{style:{width:"30%",textDecorationLine:"underline",color:"#00ffaf"},onClick:()=>(0,w.v)(e.walletAddress),children:[e.walletAddress.slice(0,4),"...",e.walletAddress.slice(-4)]}),(0,s.jsx)("div",{style:{width:"50%"},children:Number(e.realBalance).toFixed(3)}),(0,s.jsx)("div",{style:{width:"20%"},children:(0,y.i$)(e.createTime/1e3)})]})},t)})}):(0,s.jsx)(m.Z,{description:(0,s.jsx)("span",{style:{color:"#FFFFFF"},children:"EN"==E?"No data available":"暂无数据"})})}),(0,s.jsx)("div",{children:"EN"==E?"Slide load more":"下滑加载更多"})]}):"1"==a?(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:N().ComputingPower,children:[(0,s.jsx)("div",{style:{width:"45%"},className:N().AmountReceived,children:"EN"==E?"address":"地址"}),(0,s.jsx)("div",{style:{width:"40%"},className:N().AmountReceived,children:"EN"==E?"Withdrawal amount":"提现金额"}),(0,s.jsx)("div",{style:{width:"40%"},className:N().AmountReceived,children:"EN"==E?"Type":"类型"}),(0,s.jsx)("div",{style:{width:"20%"},className:N().AmountReceived,children:"EN"==E?"Controls":"操作"})]}),(0,s.jsx)("div",{className:N().CustomerInformation,children:i.length>0?(0,s.jsx)("div",{id:"scrollableDiv",style:{height:"100vh",overflow:"auto",padding:"0 5px",fontSize:"18px",color:"#FFFFFF"},children:(0,s.jsx)(c.Z,{dataSource:i,renderItem:(e,t)=>(0,s.jsx)(c.Z.Item,{children:(0,s.jsxs)("div",{className:N().ComputingPowercont,style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("div",{className:N().walletAddress,onClick:()=>(0,w.v)(e.walletAddress),children:e.user.replace(/^(.{4}).*(.{4})$/,"$1...$2")}),(0,s.jsx)("div",{className:N().amount,children:Number((0,y.rE)(e.amount)).toFixed(3)}),(0,s.jsx)("div",{className:N().principal,children:e.isPrincipal?"EN"==E?"principal":"本金":"EN"==E?"Interest":"利息"}),(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},className:N().buttonContainer,children:[(0,s.jsx)(u.ZP,{style:{marginBottom:"5px"},type:"primary",onClick:()=>I(e.id),children:"EN"==E?"pass":"放行"}),(0,s.jsx)(u.ZP,{type:"primary",onClick:()=>F(e.id),children:"EN"==E?"reject":"拒绝"})]})]})},t)})}):(0,s.jsx)(m.Z,{description:(0,s.jsx)("span",{style:{color:"#FFFFFF"},children:"EN"==E?"No data available":"暂无数据"})})})]}):(0,s.jsxs)(h.Z,{style:{marginTop:80},children:[(0,s.jsx)(x.Z,{placeholder:"EN"==E?"Please enter the address of the transferred wallet":"请输入划转的钱包地址",className:N().inputstyle,value:d,onChange:e=>{g(e.target.value)}}),(0,s.jsx)(v.Z,{span:24,children:(0,s.jsx)(p.Z.Item,{children:(0,s.jsx)(u.ZP,{type:"primary",htmlType:"submit",className:N().buttonstyle,onClick:P,children:"EN"==E?"transfer":"划转"})})})]})})},j=a(84855),E=a(73107),C=()=>{let[e,t]=(0,r.useState)("0"),[a,n]=(0,r.useState)([]),[o,c]=(0,r.useState)([]),[m,u]=(0,r.useState)("EN"),h=async e=>{try{let t=await (0,y.RA)(e.ETHAddress,f.B),a=(await t.getAllPendingWithdrawalRequests()).map(e=>{if(!e.rejected)return e}).filter(e=>e);c(a)}catch(e){console.error("Error fetching withdrawal requests:",e)}},x=async()=>{try{let e=await E.Z.get("https://app.myoilfield.org/api/wallet/getWallet");n(e.data.result)}catch(e){console.error("Error fetching wallet data:",e)}};return(0,r.useEffect)(()=>{let e=localStorage.getItem("language");e&&u(e)},[]),(0,r.useEffect)(()=>{x(),h(JSON.parse(localStorage.getItem("Nodestorage")||""))},[e]),(0,s.jsx)(i.MenuProvider,{children:(0,s.jsxs)("div",{className:d().Personal,children:[(0,s.jsx)(l.Z,{title:"EN"==m?"Administrator":"管理员",backUrl:"/HomeLess"}),(0,s.jsx)(j.Z,{tabBarStyle:{padding:"0 24px",fontSize:"18px",border:"none",margin:0},className:d().Tabs,items:[{label:"EN"==m?"Accredit":"授权",key:"0"},{label:"EN"==m?"Examine":"审核",key:"1"},{label:"EN"==m?"Withdraw":"提取",key:"2"}],onChange:e=>{t(e),"0"===e?x():"1"===e&&h(JSON.parse(localStorage.getItem("Nodestorage")||""))}}),(0,s.jsx)(A,{Data:a,switchItem:e,listexamine:o})]})})}},72338:function(e){e.exports={nativeBar:"NativeBar_nativeBar__KKFtY",leftarraw:"NativeBar_leftarraw__qCP0h",m1:"NativeBar_m1__tIBI3",t1:"NativeBar_t1__6IyQ1"}},66228:function(e){e.exports={Content:"ListItem_Content__Id0bZ",CustomerInformation:"ListItem_CustomerInformation__6pJB6",buttonstyle:"ListItem_buttonstyle__R7v6s",ContentText:"ListItem_ContentText__BZKAo",Tabsstyle:"ListItem_Tabsstyle__Gqej6",teamstyle:"ListItem_teamstyle__T09O8",ComputingPower:"ListItem_ComputingPower___Kzln",Contentlabel:"ListItem_Contentlabel__CtUZQ",power:"ListItem_power__pIIFJ",AmountReceived:"ListItem_AmountReceived__bQ3s7",ArrivalTime:"ListItem_ArrivalTime__xXON3",ComputingPowercont:"ListItem_ComputingPowercont__mDeeS","demo-loadmore-list":"ListItem_demo-loadmore-list__WEYlB"}},32294:function(e){e.exports={Personal:"Administrator_Personal__F_ota"}}},function(e){e.O(0,[37867,45125,23663,20703,27583,32456,86114,73107,14297,86591,94759,73439,81011,96477,59601,69146,92971,8069,1744],function(){return e(e.s=55061)}),_N_E=e.O()}]);