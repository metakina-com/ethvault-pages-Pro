"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97251],{71548:function(e,t,a){a.d(t,{K8:function(){return n},je:function(){return r},qw:function(){return o}});let n="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";function o(e){return e.toLowerCase()===n}let r="0x0000000000000000000000000000000000000000"},97251:function(e,t,a){a.d(t,{relayBiconomyTransaction:function(){return l}});var n=a(8580),o=a(71548),r=a(47275),i=a(1793),s=a(70777),c=a(49859),d=a(94293);async function u(e){var t;let{account:a,serializableTransaction:i,transaction:c,gasless:u}=e,l=(0,r.u)({address:u.relayerForwarderAddress,chain:c.chain,client:c.client}),h=await (0,d.readContract)({contract:l,method:"function getNonce(address,uint256) view returns (uint256)",params:[a.address,0n]}),f=Math.floor(Date.now()/1e3)+(null!==(t=u.deadlineSeconds)&&void 0!==t?t:3600),p={from:a.address,to:i.to,token:o.je,txGas:i.gas,tokenGasPrice:0n,batchId:0n,batchNonce:h,deadline:f,data:i.data};if(!p.to)throw Error("Cannot send a transaction without a `to` address");if(!p.txGas)throw Error("Cannot send a transaction without a `gas` value");if(!p.data)throw Error("Cannot send a transaction without a `data` value");let w=(0,n.E)([{type:"address"},{type:"address"},{type:"address"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"bytes32"}],[p.from,p.to,p.token,p.txGas,p.tokenGasPrice,p.batchId,p.batchNonce,(0,s.w)(p.data)]);return[p,await a.signMessage({message:w})]}async function l(e){let[t,a]=await u(e),n=await fetch("https://api.biconomy.io/api/v2/meta-tx/native",{method:"POST",body:(0,c.P)({apiId:e.gasless.apiId,params:[t,a],from:t.from,to:t.to,gasLimit:t.txGas}),headers:{"x-api-key":e.gasless.apiKey,"Content-Type":"application/json;charset=utf-8"}});if(!n.ok){var o;throw null===(o=n.body)||void 0===o||o.cancel(),Error("Failed to send transaction: ".concat(await n.text()))}let r=await n.json(),s=r.txHash;if((0,i.v)(s))return{transactionHash:s,chain:e.transaction.chain,client:e.transaction.client};throw Error("Failed to send transaction: ".concat((0,c.P)(r)))}}}]);