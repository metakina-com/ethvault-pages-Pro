"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14297],{52632:function(t,e,n){n.d(e,{B:function(){return i}});var r=n(23565);function i(t){let{client:e,walletType:n,walletAddress:i}=t;!function(t,e){(0,r.NX)(t)("https://c.thirdweb.com/event",{method:"POST",body:JSON.stringify(e,(t,e)=>"bigint"==typeof e?e.toString():e)})}(e,{source:"connectWallet",action:"connect",walletType:n,walletAddress:i})}},42713:function(t,e,n){async function r(t,e){return t({method:"eth_getCode",params:[e.address,e.blockTag||"latest"]})}n.d(e,{c:function(){return o}});var i=n(90874);let a=new WeakMap;function o(t){if(a.has(t))return a.get(t);let e=(async()=>{let e=(0,i.getRpcClient)(t),n=await r(e,{address:t.address,blockTag:"latest"});return"0x"===n&&a.delete(t),n})();return a.set(t,e),e}},4229:function(t,e,n){n.d(e,{l:function(){return r}});function r(t){let e=null==t?void 0:t.getConfig();return!!t&&("smart"===t.id||"inApp"===t.id&&!!e&&"smartAccount"in e)}},14297:function(t,e,n){n.d(e,{M:function(){return a}});var r=n(64090),i=n(12441);function a(){return function(t){let e=t.activeAccountStore;return(0,r.useSyncExternalStore)(e.subscribe,e.getValue,e.getValue)}(i.y)}},12441:function(t,e,n){let r;n.d(e,{y:function(){return c}});var i,a=n(1029),o=n(534);let c=(i=a.x,r||(0,o.fq)(i))},50221:function(t,e,n){n.d(e,{M:function(){return r}});function r(t){let e=new Set,n=t,r=()=>{for(let t of e)t()};return{getValue:()=>n,setValue(t){n=t,r()},subscribe:t=>(e.add(t),()=>{e.delete(t)})}}},90874:function(t,e,n){n.r(e),n.d(e,{getRpcClient:function(){return u}});var r=n(85738),i=n(23565),a=n(49859);async function o(t,e,n){var r,o,c,l,u,s,d,f,v,h,w,g;let p=await (0,i.NX)(e)(t,{headers:{...null===(c=e.config)||void 0===c?void 0:null===(o=c.rpc)||void 0===o?void 0:null===(r=o.fetch)||void 0===r?void 0:r.headers,"Content-Type":"application/json"},body:(0,a.P)(n.requests),method:"POST",requestTimeoutMs:null!==(w=n.requestTimeoutMs)&&void 0!==w?w:null===(s=e.config)||void 0===s?void 0:null===(u=s.rpc)||void 0===u?void 0:null===(l=u.fetch)||void 0===l?void 0:l.requestTimeoutMs,keepalive:null===(v=e.config)||void 0===v?void 0:null===(f=v.rpc)||void 0===f?void 0:null===(d=f.fetch)||void 0===d?void 0:d.keepalive});if(!p.ok)throw null===(g=p.body)||void 0===g||g.cancel(),Error("RPC request failed with status ".concat(p.status," - ").concat(p.statusText));if(null===(h=p.headers.get("Content-Type"))||void 0===h?void 0:h.startsWith("application/json"))return await p.json();let m=await p.text();try{return JSON.parse(m)}catch(t){throw console.error("Error parsing response",t,m),t}}async function c(t,e,n){var r,o,c,l,u,s,d,f,v,h,w,g;let p=await (0,i.NX)(e)(t,{headers:{...(null===(c=e.config)||void 0===c?void 0:null===(o=c.rpc)||void 0===o?void 0:null===(r=o.fetch)||void 0===r?void 0:r.headers)||{},"Content-Type":"application/json"},body:(0,a.P)(n.request),method:"POST",requestTimeoutMs:null!==(w=n.requestTimeoutMs)&&void 0!==w?w:null===(s=e.config)||void 0===s?void 0:null===(u=s.rpc)||void 0===u?void 0:null===(l=u.fetch)||void 0===l?void 0:l.requestTimeoutMs,keepalive:null===(v=e.config)||void 0===v?void 0:null===(f=v.rpc)||void 0===f?void 0:null===(d=f.fetch)||void 0===d?void 0:d.keepalive});if(!p.ok)throw null===(g=p.body)||void 0===g||g.cancel(),Error("RPC request failed with status ".concat(p.status));if(null===(h=p.headers.get("Content-Type"))||void 0===h?void 0:h.startsWith("application/json"))return await p.json();let m=await p.text();try{return JSON.parse(m)}catch(t){throw console.error("Error parsing response",t,m),t}}let l=new WeakMap;function u(t){let e=function(t){if(l.has(t))return l.get(t);let e=new Map;return l.set(t,e),e}(t.client),n=t.chain.id;if(e.has(t.chain.rpc))return e.get(t.chain.rpc);let i=(()=>{var e,n,i,a,l,u,s,d,f,v;let h=(0,r.GO)({client:t.client,chain:t.chain}),w=null!==(d=null!==(s=null===(e=t.config)||void 0===e?void 0:e.maxBatchSize)&&void 0!==s?s:null===(i=t.client.config)||void 0===i?void 0:null===(n=i.rpc)||void 0===n?void 0:n.maxBatchSize)&&void 0!==d?d:100,g=null!==(v=null!==(f=null===(a=t.config)||void 0===a?void 0:a.batchTimeoutMs)&&void 0!==f?f:null===(u=t.client.config)||void 0===u?void 0:null===(l=u.rpc)||void 0===l?void 0:l.batchTimeoutMs)&&void 0!==v?v:0,p=new Map,m=[],y=null;function b(){var e;y&&(clearTimeout(y),y=null);let n=Array(m.length),r=m.slice().map((t,e)=>(t.request.id=e,t.request.jsonrpc="2.0",n[e]=t.request,t));m=[],o(h,t.client,{requests:n,requestTimeoutMs:null===(e=t.config)||void 0===e?void 0:e.requestTimeoutMs}).then(t=>{r.forEach((e,n)=>{let r=t[n];if(!r){e.reject(Error("No response"));return}if(r instanceof Error){e.reject(r);return}if("string"==typeof r){e.reject(Error(r));return}if("error"in r)e.reject(r.error);else if("eth_subscription"===r.method)throw Error("Subscriptions not supported yet");else e.resolve(r.result);p.delete(e.requestKey)})}).catch(t=>{for(let e of r)e.reject(t),p.delete(e.requestKey)})}return 1===w?async e=>{var n;e.id=1,e.jsonrpc="2.0";let r=await c(h,t.client,{request:e,requestTimeoutMs:null===(n=t.config)||void 0===n?void 0:n.requestTimeoutMs});if(!r)throw Error("No response");if("error"in r)throw r.error;return r.result}:async t=>{let e,n;let r="".concat(t.method,":").concat(JSON.stringify(t.params));if(p.has(r))return p.get(r);let i=new Promise((t,r)=>{e=t,n=r});return p.set(r,i),m.push({request:t,resolve:e,reject:n,requestKey:r}),w>1?(y||(y=setTimeout(b,g)),m.length>=w&&b()):b(),i}})();return e.set(n,i),i}},88267:function(t,e,n){n.r(e),n.d(e,{isContractDeployed:function(){return a}});var r=n(42713);let i=new WeakSet;async function a(t){if(i.has(t))return!0;let e="0x"!==await (0,r.c)(t);return e&&i.add(t),e}},49859:function(t,e,n){n.d(e,{P:function(){return r}});let r=(t,e,n)=>JSON.stringify(t,(t,n)=>{let r="bigint"==typeof n?n.toString():n;return"function"==typeof e?e(t,r):r},n)},15168:function(t,e,n){n.d(e,{BN:function(){return a},Zx:function(){return o},j$:function(){return i}});let r="tw:connected-wallet-params";async function i(t,e,n){let i;if(!function(t){try{return JSON.stringify(t),!0}catch(t){return!1}}(n))throw Error("given params are not stringifiable");let a=await t.getItem(r);if(a){try{i=JSON.parse(a)}catch(t){i={}}i[e]=n}else i={[e]:n};t.setItem(r,JSON.stringify(i))}async function a(t,e){let n;let i=await t.getItem(r);if(i){try{n=JSON.parse(i)}catch(t){n={}}delete n[e],t.setItem(r,JSON.stringify(n))}}async function o(t,e){let n=await t.getItem(r);if(!n)return null;try{let t=JSON.parse(n);if(null==t?void 0:t[e])return t[e];return null}catch(t){return null}}},1029:function(t,e,n){n.d(e,{x:function(){return r}});let r={getItem:async t=>window.localStorage?localStorage.getItem(t):null,async setItem(t,e){window.localStorage&&localStorage.setItem(t,e)},async removeItem(t){window.localStorage&&localStorage.removeItem(t)}}},534:function(t,e,n){n.d(e,{fq:function(){return d},EB:function(){return h},Nh:function(){return v},JS:function(){return f}});var r=n(4229);function i(t,e){let n=!(arguments.length>2)||void 0===arguments[2]||arguments[2];n&&t();let r=e.map(e=>e.subscribe(()=>{t()}));return()=>{for(let t of r)t()}}var a=n(50221),o=n(15168),c=n(94388);let l="thirdweb:connected-wallet-ids",u="thirdweb:active-wallet-id",s="thirdweb:active-chain";function d(t){let e=(0,a.M)(void 0),n=(0,a.M)(void 0),d=(0,a.M)(void 0),f=(0,a.M)("disconnected"),h=(0,a.M)(new Map),w=(0,a.M)(!1),g=function(t,e){let n=new Set,r=t(),i=()=>{for(let t of n)t()},a=t=>{r=t,i()};for(let n of e)n.subscribe(()=>{a(t())});return{getValue:()=>r,subscribe:t=>(n.add(t),()=>{n.delete(t)})}}(()=>Array.from(h.getValue().values()),[h]),p=t=>{let e=h.getValue();if(e.has(t.id))return;let n=new Map(e);n.set(t.id,t),h.setValue(n)},m=t=>{let e=h.getValue(),n=new Map(e);n.delete(t.id),h.setValue(n)},y=r=>{(0,o.BN)(t,r.id),m(r),e.getValue()===r&&(t.removeItem(u),n.setValue(void 0),d.setValue(void 0),e.setValue(void 0),f.setValue("disconnected"))},b=async(e,n)=>{if(!e.getAccount())throw Error("Can not set a wallet without an account as active");let i=e,a=(0,r.l)(e);return(null==n?void 0:n.accountAbstraction)&&!a&&(i=(0,c.smartWallet)(n.accountAbstraction),await i.connect({personalAccount:e.getAccount(),client:n.client})),C(i),p(e),"smart"!==e.id&&await t.setItem(u,e.id),i},S=async(t,e)=>{var n;let r=await b(t,e);return null==e||null===(n=e.onConnect)||void 0===n||n.call(e,r),C(r),r},C=t=>{let r=t.getAccount();if(!r)throw Error("Can not set a wallet without an account as active");p(t),e.setValue(t),n.setValue(r),d.setValue(t.getChain()),f.setValue("connected");let i=t.subscribe("accountChanged",t=>{n.setValue(t)}),a=t.subscribe("chainChanged",t=>d.setValue(t)),o=t.subscribe("disconnect",()=>{c()}),c=()=>{y(t),i(),a(),o()}},M=async e=>{C(e),"smart"!==e.id&&await t.setItem(u,e.id)};i(()=>{let e=d.getValue();e?t.setItem(s,JSON.stringify(e)):t.removeItem(s)},[d],!1),i(()=>{let e=g.getValue().map(t=>null==t?void 0:t.id).filter(t=>!!t);t.setItem(l,JSON.stringify(e))},[g],!1);let V=async n=>{let r=e.getValue();if(!r)throw Error("no wallet found");if(!r.switchChain)throw Error("wallet does not support switching chains");if("smart"===r.id){let e=await v(t);if(e){let t=g.getValue().find(t=>t.id===e);t&&await t.switchChain(n)}await r.switchChain(n),C(r)}else await r.switchChain(n);d.setValue(r.getChain())};return{activeWalletStore:e,activeAccountStore:n,connectedWallets:g,addConnectedWallet:p,disconnectWallet:t=>{y(t),t.disconnect()},setActiveWallet:M,connect:S,handleConnection:b,activeWalletChainStore:d,switchActiveWalletChain:V,activeWalletConnectionStatusStore:f,isAutoConnecting:w,removeConnectedWallet:m}}async function f(t){try{let e=await t.getItem(l);if(e)return JSON.parse(e);return[]}catch(t){return[]}}async function v(t){try{let e=await t.getItem(u);if(e)return e;return null}catch(t){return null}}async function h(t){try{let e=await t.getItem(s);if(e)return JSON.parse(e);return null}catch(t){return null}}},36062:function(t,e,n){n.d(e,{Ex:function(){return c},K9:function(){return s},Ld:function(){return a},Rg:function(){return u},X_:function(){return l},eM:function(){return i},mV:function(){return o}});var r=n(18525);let i=!1,a="0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c",o="0x85e23b94e7F5E9cC1fF78BCe78cfb15B81f0DF00",c="0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",l=50000n,u=t=>{let e=(0,r.gc)().bundler;return"https://".concat(t.id,".").concat(e,"/")},s=t=>{let e=(0,r.gc)().bundler;return"https://".concat(t.id,".").concat(e,"/")}},94388:function(t,e,n){n.r(e),n.d(e,{smartWallet:function(){return l}});var r=n(52632),i=n(47275),a=n(88267),o=n(16579),c=n(36062);function l(t){let e,l,u;let s=(0,o.h)(),d={id:"smart",subscribe:s.subscribe,getChain:()=>u,getConfig:()=>t,getAccount:()=>l,autoConnect:async i=>{let{connectSmartWallet:a}=await Promise.all([n.e(92792),n.e(61563),n.e(29400)]).then(n.bind(n,61563)),[o,c]=await a(d,i,t);return e=i,l=o,u=c,(0,r.B)({client:i.client,walletType:"smart",walletAddress:l.address}),l},connect:async i=>{let{connectSmartWallet:a}=await Promise.all([n.e(92792),n.e(61563),n.e(29400)]).then(n.bind(n,61563)),[o,c]=await a(d,i,t);return e=i,l=o,u=c,(0,r.B)({client:i.client,walletType:"smart",walletAddress:l.address}),s.emit("accountChanged",l),l},disconnect:async()=>{l=void 0,u=void 0;let{disconnectSmartWallet:t}=await Promise.all([n.e(92792),n.e(61563),n.e(29400)]).then(n.bind(n,61563));await t(d),s.emit("disconnect",void 0)},switchChain:async r=>{if(!e)throw Error("Cannot switch chain without a previous connection");let o=(0,i.u)({address:t.factoryAddress||c.mV,chain:r,client:e.client});if(!await (0,a.isContractDeployed)(o))throw Error("Factory contract not deployed on chain: ".concat(r.id));let{connectSmartWallet:f}=await Promise.all([n.e(92792),n.e(61563),n.e(29400)]).then(n.bind(n,61563)),[v,h]=await f(d,{...e,chain:r},t);l=v,u=h,s.emit("chainChanged",r)}};return d}},16579:function(t,e,n){n.d(e,{h:function(){return r}});function r(){return function(){let t=new Map;return{subscribe(e,n){if(t.has(e)){var r;null===(r=t.get(e))||void 0===r||r.add(n)}else t.set(e,new Set([n]));return()=>{let r=t.get(e);r&&r.delete(n)}},emit(e,n){let r=t.get(e);if(r)for(let t of r)t(n)}}}()}}}]);