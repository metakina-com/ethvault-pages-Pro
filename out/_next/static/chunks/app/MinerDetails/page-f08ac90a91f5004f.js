(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{96926:function(e,t,a){Promise.resolve().then(a.bind(a,46476))},93800:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(3827);a(64090);var s=a(20703),r=a(72338),i=a.n(r),l={src:"/_next/static/media/leftarraw.9fdb1a6b.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASUlEQVR42jXLwQmAMBBE0dFU5d3yPIseRcEUkPo+CRPmsrB/3wohFs+dgrw63DyINdeXOu1oiI8rcgTCrfNy0nDysDr4E6I2Cuoh1keRJVzFOwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},o=a(47907),c=e=>{let{title:t,backUrl:a}=e,r=(0,o.useRouter)(),c=()=>{r.push(a)};return(0,n.jsx)("div",{className:i().nativeBar,children:(0,n.jsxs)("div",{className:i().leftarraw,children:[(0,n.jsx)(s.default,{onClick:()=>c(),className:i().m1,src:l,alt:"coin",width:50,height:50}),(0,n.jsx)("div",{className:i().t1,children:t})]})})}},46476:function(e,t,a){"use strict";a.r(t);var n=a(3827),s=a(64090),r=a(88549),i=a(35573),l=a(31254),o=a(38302),c=a(28683),d=a(83012),u=a(86591),m=a(1073),h=a(54201),_=a(20383),p=a(13931),N=a(93800),g=a(23349),x=a(47907),v=a(70975),f=a(80219),E=a.n(f),C=a(52805);let{Option:D}=r.default,j=()=>{let e;let[t]=i.Z.useForm(),[a,f]=(0,s.useState)(!1),j=(0,x.useSearchParams)(),y=(null==j?void 0:j.get("MinerData"))||null,[A,b]=(0,s.useState)(),[S,w]=(0,s.useState)("EN"),[U,T]=(0,s.useState)(!1);try{e=y?JSON.parse(y):null}catch(t){console.error("解析 MinerData 时出错:",t),e=null}let M=()=>{f(!a)},P=()=>{if(!e||!e.id)return{min:1,max:1/0};switch(e.id){case 1:return{min:1,max:999};case 2:return{min:1e3,max:5999};case 3:return{min:6e3,max:14999};case 4:return{min:15e3,max:29999};case 5:return{min:3e4,max:59999};case 6:return{min:6e4,max:99999};case 7:return{min:1e5,max:1/0};default:return{min:1,max:1/0}}},R=async e=>{try{let a=C.vz(e.USDTnum.toString(),18),n=await (0,g.RA)(A.ETHAddress,v.B);T(!0);let s=await n.deposit(a);await s.wait(),T(!1),l.ZP.success("EN"==S?"Recharge successfully!":"充值成功！"),t.resetFields()}catch(e){T(!1),l.ZP.error("EN"==S?"Recharge failed, please try again later":"充值失败，请稍后再试")}};return(0,s.useEffect)(()=>{let e=localStorage.getItem("language");e&&w(e)},[]),(0,s.useEffect)(()=>{b(JSON.parse(localStorage.getItem("Nodestorage")||""))},[]),(0,n.jsxs)("div",{className:E().rewardcontainer,children:[(0,n.jsx)(N.Z,{title:"EN"==S?"Top up and reward":"充值与奖励",backUrl:"/Machine"}),(0,n.jsxs)("div",{className:E().conter,children:[(0,n.jsxs)("div",{style:{height:a?"700px":"300px",overflow:"hidden"},children:[(0,n.jsx)("div",{className:E().contertitle,children:null==e?void 0:e.name}),(0,n.jsxs)("div",{className:E().topup,children:[(0,n.jsx)("span",{children:"EN"==S?"top up":"充值"}),(0,n.jsx)("span",{children:null==e?void 0:e.topupNum})]}),(0,n.jsxs)("div",{className:E().topup,children:[(0,n.jsx)("span",{children:"EN"==S?"Interest":"利息"}),(0,n.jsx)("span",{children:null==e?void 0:e.interestname})]}),(0,n.jsx)("div",{children:[{title:"EN"==S?"Rated computing power":"额定算力",value:"180TH/s, -9%~+9%"},{title:"EN"==S?"Energy efficiency ratio":"能效比",value:"23.5J/TH, -7%~+7%"},{title:"EN"==S?"Power dissipation":"功耗",value:"3259W, -10%~+10%"},{title:"EN"==S?"Connection mode":"连接方式",value:"RJ45 1G Ethernet"},{title:"EN"==S?"fan":"风扇",value:"4 x 12050 FAN"},{title:"EN"==S?"Air volume, CFM":"风量，CFM",value:"420 MAX"},{title:"EN"==S?"Operating temperature":"运行温度",value:"-7\xb0C ~ 39\xb0C"},{title:"EN"==S?"Bare machine size":"裸机尺寸",value:"L271mm x W198mm x H290mm"},{title:"EN"==S?"Carton size":"外箱尺寸",value:"L420mm x W325mm x H430mm"},{title:"EN"==S?"Net weight":"净重",value:"14.5 kg"},{title:"EN"==S?"Gross weight":"毛重",value:"14.6 kg"},{title:"EN"==S?"Ac voltage input range, Volt":"交流电压输入范围，Volt",value:"200 ~ 300 V"},{title:"EN"==S?"Ac power input frequency range: Hz":"交流电源输入频率范围，Hz",value:"50 ~ 70 Hz"},{title:"EN"==S?"Ac current input range, Amp":"交流电流输入范围，Amp",value:"16 A"}].map((e,t)=>(0,n.jsxs)("div",{className:E().ComputingPower,children:[(0,n.jsx)("div",{children:e.title}),(0,n.jsx)("div",{children:e.value})]},t))})]}),(0,n.jsx)("div",{className:E().arrows,children:a?(0,n.jsx)(h.Z,{className:"".concat(E().lconstyle," ").concat(a?"rotate-up":""),onClick:M}):(0,n.jsx)(_.Z,{className:"".concat(E().lconstyle," ").concat(a?"":"rotate-down"),onClick:M})})]}),(0,n.jsx)("div",{className:E().Content,children:(0,n.jsxs)(i.Z,{name:"amount",form:t,onFinish:R,layout:"vertical",style:{color:"white"},children:[(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(c.Z,{span:24,children:(0,n.jsxs)("div",{className:E().Contentinterest,children:[(0,n.jsx)("span",{className:E().Contentlabel,children:"EN"==S?"top up(USDT)":"充值(USDT)"}),(0,n.jsx)("div",{className:"tikuan",children:(0,n.jsxs)(r.default,{defaultValue:"BEP20USDT",onChange:e=>{"BEP20USDT"===e?localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"0x75101A8aC197E3Ea3A9eAeA92Bb98aa17Da3aa41",BUSDaddress:"0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814",RPCURL:"https://data-seed-prebsc-1-s1.binance.org:8545/",id:1})):"ERC20USDT"===e?localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"",BUSDaddress:"",RPCURL:"https://sepolia.infura.io/v3/YOUR-PROJECT-ID",id:2})):"TRC20USDT"===e?localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"",BUSDaddress:"",RPCURL:"https://api.shasta.trongrid.io",id:3})):localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"0x75101A8aC197E3Ea3A9eAeA92Bb98aa17Da3aa41",BUSDaddress:"0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814",RPCURL:"https://data-seed-prebsc-1-s1.binance.org:8545/",id:1}))},suffixIcon:(0,n.jsx)(p.Z,{style:{color:"#E89E2C"}}),children:[(0,n.jsx)(D,{value:"BEP20USDT",children:"USDT-BEP20"}),(0,n.jsx)(D,{value:"ERC20USDT",children:"USDT-ERC20"}),(0,n.jsx)(D,{value:"TRC20USDT",children:"USDT-TRC20"})]})})]})}),(0,n.jsx)(c.Z,{span:24,style:{marginTop:12,marginBottom:12},children:(0,n.jsx)(i.Z.Item,{colon:!1,name:"USDTnum",rules:[{required:!0,message:"EN"==S?"Please enter quantity":"请输入数量"},{validator:(e,t)=>{if(null==t||""===t)return Promise.reject("EN"==S?"Please enter the amount of recharge":"请输入充值数量");let a=Number(t);if(isNaN(a)||a<=0)return Promise.reject("EN"==S?"Please enter a valid miner recharge quantity":"请输入有效的矿机充值数量");let{min:n,max:s}=P();return a<n||a>s?Promise.reject("".concat("EN"==S?"The miner recharge quantity should be in":"请输入有效的矿机充值数量"," ").concat(n," ").concat("EN"==S?"with":"与","  ").concat(s," ").concat("EN"==S?"among":"之间")):Promise.resolve()}}],children:(0,n.jsx)(d.Z,{placeholder:"EN"==S?"Please enter quantity":"请输入数量",className:E().inputstyle,style:{width:"100%"},step:1,parser:e=>Math.floor(Number(e||1/0)),formatter:e=>"".concat(e),stringMode:!0})})})]}),(0,n.jsx)(u.Z,{spinning:U,children:(0,n.jsx)(o.Z,{style:{marginTop:24},children:(0,n.jsx)(c.Z,{span:24,children:(0,n.jsx)(i.Z.Item,{children:(0,n.jsx)(m.ZP,{type:"primary",htmlType:"submit",className:E().buttonstyle,children:"EN"==S?"Top Up":"充值"})})})})})]})})]})};t.default=()=>(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)("div",{children:"Loading..."}),children:(0,n.jsx)(j,{})})},72338:function(e){e.exports={nativeBar:"NativeBar_nativeBar__KKFtY",leftarraw:"NativeBar_leftarraw__qCP0h",m1:"NativeBar_m1__tIBI3",t1:"NativeBar_t1__6IyQ1"}},80219:function(e){e.exports={rewardcontainer:"MinerDetails_rewardcontainer__hG_rC",arrows:"MinerDetails_arrows__0UTWa",lconstyle:"MinerDetails_lconstyle__UlNRM",Content:"MinerDetails_Content__z3NEj",inputstyle:"MinerDetails_inputstyle__B04gf",buttonstyle:"MinerDetails_buttonstyle__rRHDJ",buttonstyleflg:"MinerDetails_buttonstyleflg__ysWfU",buttonHelpFriendstyle:"MinerDetails_buttonHelpFriendstyle__Omda_",ContentText:"MinerDetails_ContentText__PqI0R",ContentInstructions:"MinerDetails_ContentInstructions__j9Pvq",Contentinterest:"MinerDetails_Contentinterest__09YZQ",Contentlabel:"MinerDetails_Contentlabel__naPNI",interest:"MinerDetails_interest__CAJbj",labelContainer:"MinerDetails_labelContainer__29WrK",labelLeft:"MinerDetails_labelLeft__vkfMF",labelRight:"MinerDetails_labelRight__bhhjI",CalculatedValue:"MinerDetails_CalculatedValue__1ezxI",Ustyle:"MinerDetails_Ustyle__hQ_sy",Colstyle:"MinerDetails_Colstyle__5cfVC",conter:"MinerDetails_conter__4rvP0",contertitle:"MinerDetails_contertitle__iLGuX",topup:"MinerDetails_topup__io55x",ComputingPower:"MinerDetails_ComputingPower__KqGTU"}}},function(e){e.O(0,[37867,45125,20703,32456,86114,86591,94759,73439,86147,69146,92971,8069,1744],function(){return e(e.s=96926)}),_N_E=e.O()}]);