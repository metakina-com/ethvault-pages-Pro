(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41931],{14242:function(e,t,n){Promise.resolve().then(n.bind(n,18286)),Promise.resolve().then(n.bind(n,19721)),Promise.resolve().then(n.bind(n,59826))},18286:function(e,t,n){"use strict";n.r(t),n.d(t,{MenuContext:function(){return s},MenuProvider:function(){return r}});var a=n(3827),i=n(64090);let s=(0,i.createContext)({isRightMenuVisible:!1,toggleRightMenu:()=>{},hideRightMenu:()=>{}}),r=e=>{let{children:t}=e,[n,r]=(0,i.useState)(!1);return(0,a.jsx)(s.Provider,{value:{isRightMenuVisible:n,toggleRightMenu:()=>{r(e=>!e)},hideRightMenu:()=>{r(!1)}},children:t})}},59826:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(3827),i=n(24232),s=n(64090),r=n(18286),u=n(30781),o=n.n(u),l=n(73107),c=n(86591),p=n(20703),d=n(87741),y=n(47275);n(8120);var m=n(37321);let f=(0,d.P)({clientId:"1283d713ed4b644af8c26898225cd1ca"});(0,y.u)({client:f,address:"0x70C93C72E928af4838D487183bCD63B28bb1753c",abi:[{inputs:[{internalType:"address",name:"zsdAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"uint256",name:"amountusdtToken",type:"uint256"},{internalType:"uint256",name:"amountzsdtToken",type:"uint256"}],name:"addLiquidity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"addToWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"addUSDT",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"zsdAmount",type:"uint256"}],name:"getAmountUSDTOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"getAmountZSDOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"projectUSDTPool",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"removeFromWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_usdtReserve",type:"uint256"}],name:"setUsdtReserve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_ZsdReserve",type:"uint256"}],name:"setZsdReserve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"usdtReserve",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountusdtToken",type:"uint256"}],name:"usdtTokenTozsdtTokenSwap",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"whitelist",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"zsdReserve",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"zsdtToken",outputs:[{internalType:"contract ZSD",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountzsdtToken",type:"uint256"}],name:"zsdtTokenTousdtTokenSwap",outputs:[],stateMutability:"nonpayable",type:"function"}],chain:m.d});var h=()=>{let[e,t]=(0,s.useState)([]),[n,i]=(0,s.useState)(!0),[r,u]=(0,s.useState)("EN");(0,s.useEffect)(()=>{let e=localStorage.getItem("language");e&&u(e)},[]),(0,s.useEffect)(()=>{let e=setInterval(()=>{t([]),d()},3e4);return()=>clearInterval(e)},[]),(0,s.useEffect)(()=>{d()},[]);let d=async()=>{try{i(!0);let e=await l.Z.get("https://api.coinranking.com/v2/coins?referenceCurrencyUuid=5k-_VTxqtCEI",{params:{category:"onekey-gainers",sparkline:!0,sparklinePoints:100,ids:"bitcoin,ethereum,binancecoin,ripple,solana,dogecoin"},headers:{"X-Onekey-Request-Currency":"usd"}});t(e.data.data.coins),i(!1)}catch(e){console.error("请求错误:",e),i(!1),t([])}};return(0,a.jsxs)("div",{className:o().container,children:[(0,a.jsx)("div",{className:o().marketstyle,children:"EN"===r?"Market":"行        情"}),(0,a.jsxs)("div",{className:o().titleContent,children:[(0,a.jsx)("div",{className:o().marketInfo,children:(0,a.jsx)("span",{children:"EN"===r?"MarketCap":"市值"})}),(0,a.jsx)("div",{className:o().priceInfo,children:(0,a.jsx)("span",{className:o().newtext,children:"EN"===r?"Last price":"最近价"})}),(0,a.jsx)("div",{className:o().fluctuateInfo,children:(0,a.jsx)("span",{className:o().newtext,children:"EN"===r?"24H change":"24H波动"})})]}),(0,a.jsx)(c.Z,{spinning:n,tip:"请稍等，数据实时刷新中...",children:e.slice(0,6).map((e,t)=>(0,a.jsxs)("div",{className:o().currencyItem,children:[(0,a.jsxs)("div",{className:o().currencyInfo,children:[(0,a.jsx)(p.default,{src:"Zsd"==e.name?"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/Zsd.png":e.iconUrl,alt:e.name,className:o().btnIcon,width:48,height:48}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:o().currencyName,children:e.symbol}),(0,a.jsxs)("div",{className:o().currencyMarketCap,children:["$",("Zsd"==e.name?504e4:e.marketCap/1e9).toFixed(2),"B"]})]})]}),(0,a.jsxs)("div",{className:o().currencyPrice,children:["$","Zsd"==e.name?e.price:Number(e.price).toFixed(2)]}),(0,a.jsxs)("div",{className:o().currencyChange,style:{marginTop:20,color:e.change>=0?"#52B05AFF":"#EF2517"},children:[e.change>=0?"+":" ","Zsd"==e.name?.05:e.change,"%"]})]},t))})]})};let b=(0,i.default)(()=>Promise.all([n.e(8310),n.e(27508),n.e(32456),n.e(86114),n.e(92792),n.e(14297),n.e(3003),n.e(69146),n.e(36530),n.e(58106)]).then(n.bind(n,88024)),{loadableGenerated:{webpack:()=>[88024]},ssr:!0}),_=(0,i.default)(()=>n.e(34393).then(n.bind(n,34393)),{loadableGenerated:{webpack:()=>[34393]},ssr:!1}),k={EN:{title:"ETHVault Pool",description:"\n      ETHVault Pool is a staking mining platform based on the Ethereum network, \n      designed to help miners achieve stable and global profits by staking funds. \n      Participants can join the pool by staking funds and share in the profits generated from the staked assets. \n      Our platform distributes rewards through transparent rules and automated smart contract mechanisms, \n      ensuring that miners receive fair returns.\n    "},CN:{title:"ETHVault矿池",description:"\n      ETHVault Pool是一个基于以太坊网络的质押挖矿平台，旨在通过质押资金帮助矿工获得稳定而全球的利润。 \n      参与者池可以通过质押资金参与矿池，并根据质押资金而产生的利润分配。 \n      我们的平台通过透明的规则和自动化的智能合约机制分配，确保矿工享受公平的收益。\n    "}};var v=()=>{let[e,t]=(0,s.useState)("EN");(0,s.useEffect)(()=>{let e=localStorage.getItem("language");e&&t(e)},[]);let n=k[e];return(0,a.jsxs)(r.MenuProvider,{children:[(0,a.jsx)(b,{}),(0,a.jsx)(_,{title:n.title,solt:(0,a.jsx)("div",{children:n.description})}),(0,a.jsx)(h,{})]})}},30781:function(e){e.exports={container:"Market_container__AKxV9",marketstyle:"Market_marketstyle__GP__s",titleContent:"Market_titleContent__vqwyy",marketInfo:"Market_marketInfo__orAV5",priceInfo:"Market_priceInfo__44uCX",fluctuateInfo:"Market_fluctuateInfo__uiAun",currencyItem:"Market_currencyItem__M6fhQ",currencyPrice:"Market_currencyPrice__QWC1f",currencyInfo:"Market_currencyInfo__4fYEE",btnIcon:"Market_btnIcon__NclTM",currencyName:"Market_currencyName__6f_bG",newtext:"Market_newtext__3FHtF",sortStyle:"Market_sortStyle__uPKNM",sortIcon:"Market_sortIcon__HBEv2"}}},function(e){e.O(0,[37867,45125,23663,20703,27583,73107,86591,99100,92971,8069,1744],function(){return e(e.s=14242)}),_N_E=e.O()}]);