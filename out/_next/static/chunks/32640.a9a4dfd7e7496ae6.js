"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32640,29400,58106],{47907:function(t,e,s){var n=s(15313);s.o(n,"useRouter")&&s.d(e,{useRouter:function(){return n.useRouter}}),s.o(n,"useSearchParams")&&s.d(e,{useSearchParams:function(){return n.useSearchParams}})},94248:function(t,e,s){s.d(e,{EP:function(){return h},SD:function(){return l},Vl:function(){return o},gm:function(){return u},mk:function(){return a}});let n=BigInt(4294967296-1),i=BigInt(32);function r(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?{h:Number(t&n),l:Number(t>>i&n)}:{h:0|Number(t>>i&n),l:0|Number(t&n)}}function o(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=new Uint32Array(t.length),n=new Uint32Array(t.length);for(let i=0;i<t.length;i++){let{h:o,l:h}=r(t[i],e);[s[i],n[i]]=[o,h]}return[s,n]}let h=(t,e,s)=>t<<s|e>>>32-s,u=(t,e,s)=>e<<s|t>>>32-s,l=(t,e,s)=>e<<s-32|t>>>64-s,a=(t,e,s)=>t<<s-32|e>>>64-s;e.ZP={fromBig:r,split:o,toBig:(t,e)=>BigInt(t>>>0)<<i|BigInt(e>>>0),shrSH:(t,e,s)=>t>>>s,shrSL:(t,e,s)=>t<<32-s|e>>>s,rotrSH:(t,e,s)=>t>>>s|e<<32-s,rotrSL:(t,e,s)=>t<<32-s|e>>>s,rotrBH:(t,e,s)=>t<<64-s|e>>>s-32,rotrBL:(t,e,s)=>t>>>s-32|e<<64-s,rotr32H:(t,e)=>e,rotr32L:(t,e)=>t,rotlSH:h,rotlSL:u,rotlBH:l,rotlBL:a,add:function(t,e,s,n){let i=(e>>>0)+(n>>>0);return{h:t+s+(i/4294967296|0)|0,l:0|i}},add3L:(t,e,s)=>(t>>>0)+(e>>>0)+(s>>>0),add3H:(t,e,s,n)=>e+s+n+(t/4294967296|0)|0,add4L:(t,e,s,n)=>(t>>>0)+(e>>>0)+(s>>>0)+(n>>>0),add4H:(t,e,s,n,i)=>e+s+n+i+(t/4294967296|0)|0,add5H:(t,e,s,n,i,r)=>e+s+n+i+r+(t/4294967296|0)|0,add5L:(t,e,s,n,i)=>(t>>>0)+(e>>>0)+(s>>>0)+(n>>>0)+(i>>>0)}},29400:function(t,e,s){s.d(e,{HY:function(){return O},R4:function(){return w},fr:function(){return y},x:function(){return L}});var n=s(34374),i=s(94248),r=s(57200);let o=[],h=[],u=[],l=BigInt(0),a=BigInt(1),f=BigInt(2),c=BigInt(7),d=BigInt(256),p=BigInt(113);for(let t=0,e=a,s=1,n=0;t<24;t++){[s,n]=[n,(2*s+3*n)%5],o.push(2*(5*n+s)),h.push((t+1)*(t+2)/2%64);let i=l;for(let t=0;t<7;t++)(e=(e<<a^(e>>c)*p)%d)&f&&(i^=a<<(a<<BigInt(t))-a);u.push(i)}let[g,k]=(0,i.Vl)(u,!0),m=(t,e,s)=>s>32?(0,i.SD)(t,e,s):(0,i.EP)(t,e,s),B=(t,e,s)=>s>32?(0,i.mk)(t,e,s):(0,i.gm)(t,e,s);class I extends r.kb{keccak(){r.iA||(0,r.l1)(this.state32),function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24,s=new Uint32Array(10);for(let n=24-e;n<24;n++){for(let e=0;e<10;e++)s[e]=t[e]^t[e+10]^t[e+20]^t[e+30]^t[e+40];for(let e=0;e<10;e+=2){let n=(e+8)%10,i=(e+2)%10,r=s[i],o=s[i+1],h=m(r,o,1)^s[n],u=B(r,o,1)^s[n+1];for(let s=0;s<50;s+=10)t[e+s]^=h,t[e+s+1]^=u}let e=t[2],i=t[3];for(let s=0;s<24;s++){let n=h[s],r=m(e,i,n),u=B(e,i,n),l=o[s];e=t[l],i=t[l+1],t[l]=r,t[l+1]=u}for(let e=0;e<50;e+=10){for(let n=0;n<10;n++)s[n]=t[e+n];for(let n=0;n<10;n++)t[e+n]^=~s[(n+2)%10]&s[(n+4)%10]}t[0]^=g[n],t[1]^=k[n]}s.fill(0)}(this.state32,this.rounds),r.iA||(0,r.l1)(this.state32),this.posOut=0,this.pos=0}update(t){(0,n.Gg)(this);let{blockLen:e,state:s}=this,i=(t=(0,r.O0)(t)).length;for(let n=0;n<i;){let r=Math.min(e-this.pos,i-n);for(let e=0;e<r;e++)s[this.pos++]^=t[n++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:e,pos:s,blockLen:n}=this;t[s]^=e,(128&e)!=0&&s===n-1&&this.keccak(),t[n-1]^=128,this.keccak()}writeInto(t){(0,n.Gg)(this,!1),(0,n.aI)(t),this.finish();let e=this.state,{blockLen:s}=this;for(let n=0,i=t.length;n<i;){this.posOut>=s&&this.keccak();let r=Math.min(s-this.posOut,i-n);t.set(e.subarray(this.posOut,this.posOut+r),n),this.posOut+=r,n+=r}return t}xofInto(t){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return(0,n.Rx)(t),this.xofInto(new Uint8Array(t))}digestInto(t){if((0,n.J8)(t,this),this.finished)throw Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:e,suffix:s,outputLen:n,rounds:i,enableXOF:r}=this;return t||(t=new I(e,s,n,r,i)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=i,t.suffix=s,t.outputLen=n,t.enableXOF=r,t.destroyed=this.destroyed,t}constructor(t,e,s,i=!1,o=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=s,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,n.Rx)(s),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,r.Jq)(this.state)}}let b=(t,e,s)=>(0,r.hE)(()=>new I(e,t,s)),w=b(1,144,28),y=b(1,136,32),O=b(1,104,48),L=b(1,72,64)},37321:function(t,e,s){s.d(e,{d:function(){return n}});let n=(0,s(85738).ax)({id:97,name:"BNB Smart Chain Testnet",nativeCurrency:{name:"BNB Chain Native Token",symbol:"tBNB",decimals:18},blockExplorers:[{name:"bscscan-testnet",url:"https://testnet.bscscan.com"}]})}}]);