(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16238],{44373:function(e,t,n){Promise.resolve().then(n.bind(n,67891))},18286:function(e,t,n){"use strict";n.r(t),n.d(t,{MenuContext:function(){return a},MenuProvider:function(){return r}});var i=n(3827),s=n(64090);let a=(0,s.createContext)({isRightMenuVisible:!1,toggleRightMenu:()=>{},hideRightMenu:()=>{}}),r=e=>{let{children:t}=e,[n,r]=(0,s.useState)(!1);return(0,i.jsx)(a.Provider,{value:{isRightMenuVisible:n,toggleRightMenu:()=>{r(e=>!e)},hideRightMenu:()=>{r(!1)}},children:t})}},93800:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var i=n(3827);n(64090);var s=n(20703),a=n(72338),r=n.n(a),l={src:"/_next/static/media/leftarraw.9fdb1a6b.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXH////////////////////////+/v6xnI00AAAACHRSTlMAoZQCBDUGP+fyt9kAAAAJcEhZcwAACxMAAAsTAQCanBgAAAArSURBVHicRYpBDgAgCMMKTPn/j800xFObdQDsllFkmBDDpK5MsL3ln9ESBwjAADyD9g/8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},o=n(47907),d=e=>{let{title:t,backUrl:n}=e,a=(0,o.useRouter)(),d=()=>{a.push(n)};return(0,i.jsx)("div",{className:r().nativeBar,children:(0,i.jsxs)("div",{className:r().leftarraw,children:[(0,i.jsx)(s.default,{onClick:()=>d(),className:r().m1,src:l,alt:"coin",width:50,height:50}),(0,i.jsx)("div",{className:r().t1,children:t})]})})}},33052:function(e,t,n){"use strict";n.d(t,{v:function(){return a}});var i=n(31254);let s=()=>"clipboard"in navigator,a=async e=>{try{if(s()){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),i.ZP.success("复制成功")}else{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")?i.ZP.success("复制成功"):i.ZP.error("复制失败，请稍后重试")}catch(e){i.ZP.error("复制失败，请稍后重试")}finally{document.body.removeChild(t)}}}catch(n){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),i.ZP.error("复制失败，请稍后重试")}}},67891:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var i=n(3827),s=n(64090),a=n(18286),r=n(93800),l=n(32294),o=n.n(l),d=n(93487),c=n(28807),u=n(66228),m=n.n(u),h=n(23349),A=n(33052),_=e=>{let{Data:t}=e,n=t||[];return(0,i.jsx)("div",{className:m().Content,children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:m().ComputingPower,children:[(0,i.jsx)("div",{style:{width:"30%"},className:m().AmountReceived,children:"地址"}),(0,i.jsx)("div",{style:{width:"50%"},className:m().AmountReceived,children:"余额(USDT)"}),(0,i.jsx)("div",{style:{width:"20%"},className:m().AmountReceived,children:"时间"})]}),(0,i.jsx)("div",{className:m().CustomerInformation,children:n.length>0?(0,i.jsx)("div",{id:"scrollableDiv",style:{height:"100vh",overflow:"auto",padding:"0 5px",fontSize:"18px",color:"#FFFFFF"},children:(0,i.jsx)(d.Z,{dataSource:n,renderItem:(e,t)=>(0,i.jsx)(d.Z.Item,{children:(0,i.jsxs)("div",{className:m().ComputingPowercont,children:[(0,i.jsxs)("div",{style:{width:"30%",textDecorationLine:"underline",color:"#00ffaf"},onClick:()=>{(0,A.v)(e.walletAddress)},children:[e.walletAddress.slice(0,4),"...",e.walletAddress.slice(-4)]}),(0,i.jsx)("div",{style:{width:"50%"},children:Number(e.balance).toFixed(3)}),(0,i.jsx)("div",{style:{width:"20%"},children:(0,h.i$)(e.createTime/1e3)})]})},t)})}):(0,i.jsx)(c.Z,{description:(0,i.jsx)("span",{style:{color:"#FFFFFF",marginTop:"30px"},children:"暂无数据"})})})]})})},v=n(84855),x=n(73107),p=()=>{let[e,t]=(0,s.useState)("0"),[n,l]=(0,s.useState)([]),d=async()=>{x.Z.get("https://app.myoilfield.org/api/wallet/getWallet").then(e=>{l(e.data.result),console.log(e,"fasdasdad咋说的")}).catch(e=>{})};return(0,s.useEffect)(()=>{d()},[e]),(0,i.jsxs)(a.MenuProvider,{children:[(0,i.jsx)(r.default,{title:"管理员",backUrl:"/HomeLess"}),(0,i.jsx)(v.Z,{tabBarStyle:{padding:"0 24px",fontSize:"18px",border:"none",margin:0},className:o().Tabs,items:[{label:"授权",key:0}],onChange:e=>{t(e)}}),"0"==e?(0,i.jsx)(_,{Data:n}):""]})}},72338:function(e){e.exports={nativeBar:"NativeBar_nativeBar__KKFtY",leftarraw:"NativeBar_leftarraw__qCP0h",m1:"NativeBar_m1__tIBI3",t1:"NativeBar_t1__6IyQ1"}},66228:function(e){e.exports={Content:"ListItem_Content__Id0bZ",ContentText:"ListItem_ContentText__BZKAo",Tabsstyle:"ListItem_Tabsstyle__Gqej6",teamstyle:"ListItem_teamstyle__T09O8",ComputingPower:"ListItem_ComputingPower___Kzln",Contentlabel:"ListItem_Contentlabel__CtUZQ",power:"ListItem_power__pIIFJ",AmountReceived:"ListItem_AmountReceived__bQ3s7",ArrivalTime:"ListItem_ArrivalTime__xXON3",ComputingPowercont:"ListItem_ComputingPowercont__mDeeS","demo-loadmore-list":"ListItem_demo-loadmore-list__WEYlB"}},32294:function(){}},function(e){e.O(0,[86164,87520,23663,22202,73107,6624,16816,86591,84855,93487,6919,92971,8069,1744],function(){return e(e.s=44373)}),_N_E=e.O()}]);