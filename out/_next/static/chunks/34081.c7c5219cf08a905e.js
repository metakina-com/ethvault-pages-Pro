"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34081,29400],{65823:function(t,e,n){n.d(e,{M2:function(){return s},Tm:function(){return o}});var i=n(64090);function s(t){return t&&i.isValidElement(t)&&t.type===i.Fragment}let r=(t,e,n)=>i.isValidElement(t)?i.cloneElement(t,"function"==typeof n?n(t.props||{}):n):e;function o(t,e){return r(t,t,e)}},94248:function(t,e,n){n.d(e,{EP:function(){return h},SD:function(){return l},Vl:function(){return o},gm:function(){return u},mk:function(){return f}});let i=BigInt(4294967296-1),s=BigInt(32);function r(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?{h:Number(t&i),l:Number(t>>s&i)}:{h:0|Number(t>>s&i),l:0|Number(t&i)}}function o(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let s=0;s<t.length;s++){let{h:o,l:h}=r(t[s],e);[n[s],i[s]]=[o,h]}return[n,i]}let h=(t,e,n)=>t<<n|e>>>32-n,u=(t,e,n)=>e<<n|t>>>32-n,l=(t,e,n)=>e<<n-32|t>>>64-n,f=(t,e,n)=>t<<n-32|e>>>64-n;e.ZP={fromBig:r,split:o,toBig:(t,e)=>BigInt(t>>>0)<<s|BigInt(e>>>0),shrSH:(t,e,n)=>t>>>n,shrSL:(t,e,n)=>t<<32-n|e>>>n,rotrSH:(t,e,n)=>t>>>n|e<<32-n,rotrSL:(t,e,n)=>t<<32-n|e>>>n,rotrBH:(t,e,n)=>t<<64-n|e>>>n-32,rotrBL:(t,e,n)=>t>>>n-32|e<<64-n,rotr32H:(t,e)=>e,rotr32L:(t,e)=>t,rotlSH:h,rotlSL:u,rotlBH:l,rotlBL:f,add:function(t,e,n,i){let s=(e>>>0)+(i>>>0);return{h:t+n+(s/4294967296|0)|0,l:0|s}},add3L:(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),add3H:(t,e,n,i)=>e+n+i+(t/4294967296|0)|0,add4L:(t,e,n,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0),add4H:(t,e,n,i,s)=>e+n+i+s+(t/4294967296|0)|0,add5H:(t,e,n,i,s,r)=>e+n+i+s+r+(t/4294967296|0)|0,add5L:(t,e,n,i,s)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0)+(s>>>0)}},29400:function(t,e,n){n.d(e,{HY:function(){return O},R4:function(){return y},fr:function(){return w},x:function(){return L}});var i=n(34374),s=n(94248),r=n(57200);let o=[],h=[],u=[],l=BigInt(0),f=BigInt(1),a=BigInt(2),c=BigInt(7),d=BigInt(256),p=BigInt(113);for(let t=0,e=f,n=1,i=0;t<24;t++){[n,i]=[i,(2*n+3*i)%5],o.push(2*(5*i+n)),h.push((t+1)*(t+2)/2%64);let s=l;for(let t=0;t<7;t++)(e=(e<<f^(e>>c)*p)%d)&a&&(s^=f<<(f<<BigInt(t))-f);u.push(s)}let[g,k]=(0,s.Vl)(u,!0),m=(t,e,n)=>n>32?(0,s.SD)(t,e,n):(0,s.EP)(t,e,n),B=(t,e,n)=>n>32?(0,s.mk)(t,e,n):(0,s.gm)(t,e,n);class I extends r.kb{keccak(){r.iA||(0,r.l1)(this.state32),function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24,n=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let e=0;e<10;e++)n[e]=t[e]^t[e+10]^t[e+20]^t[e+30]^t[e+40];for(let e=0;e<10;e+=2){let i=(e+8)%10,s=(e+2)%10,r=n[s],o=n[s+1],h=m(r,o,1)^n[i],u=B(r,o,1)^n[i+1];for(let n=0;n<50;n+=10)t[e+n]^=h,t[e+n+1]^=u}let e=t[2],s=t[3];for(let n=0;n<24;n++){let i=h[n],r=m(e,s,i),u=B(e,s,i),l=o[n];e=t[l],s=t[l+1],t[l]=r,t[l+1]=u}for(let e=0;e<50;e+=10){for(let i=0;i<10;i++)n[i]=t[e+i];for(let i=0;i<10;i++)t[e+i]^=~n[(i+2)%10]&n[(i+4)%10]}t[0]^=g[i],t[1]^=k[i]}n.fill(0)}(this.state32,this.rounds),r.iA||(0,r.l1)(this.state32),this.posOut=0,this.pos=0}update(t){(0,i.Gg)(this);let{blockLen:e,state:n}=this,s=(t=(0,r.O0)(t)).length;for(let i=0;i<s;){let r=Math.min(e-this.pos,s-i);for(let e=0;e<r;e++)n[this.pos++]^=t[i++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:e,pos:n,blockLen:i}=this;t[n]^=e,(128&e)!=0&&n===i-1&&this.keccak(),t[i-1]^=128,this.keccak()}writeInto(t){(0,i.Gg)(this,!1),(0,i.aI)(t),this.finish();let e=this.state,{blockLen:n}=this;for(let i=0,s=t.length;i<s;){this.posOut>=n&&this.keccak();let r=Math.min(n-this.posOut,s-i);t.set(e.subarray(this.posOut,this.posOut+r),i),this.posOut+=r,i+=r}return t}xofInto(t){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return(0,i.Rx)(t),this.xofInto(new Uint8Array(t))}digestInto(t){if((0,i.J8)(t,this),this.finished)throw Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:e,suffix:n,outputLen:i,rounds:s,enableXOF:r}=this;return t||(t=new I(e,n,i,r,s)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=s,t.suffix=n,t.outputLen=i,t.enableXOF=r,t.destroyed=this.destroyed,t}constructor(t,e,n,s=!1,o=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=n,this.enableXOF=s,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,i.Rx)(n),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,r.Jq)(this.state)}}let b=(t,e,n)=>(0,r.hE)(()=>new I(e,t,n)),y=b(1,144,28),w=b(1,136,32),O=b(1,104,48),L=b(1,72,64)},37321:function(t,e,n){n.d(e,{d:function(){return i}});let i=(0,n(85738).ax)({id:97,name:"BNB Smart Chain Testnet",nativeCurrency:{name:"BNB Chain Native Token",symbol:"tBNB",decimals:18},blockExplorers:[{name:"bscscan-testnet",url:"https://testnet.bscscan.com"}]})}}]);