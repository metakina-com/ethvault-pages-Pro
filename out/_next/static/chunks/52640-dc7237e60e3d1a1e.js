"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52640],{14749:function(e,t,n){n.d(t,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}},65612:function(e,t,n){n.d(t,{Gm:function(){return i},Qy:function(){return o},ZF:function(){return u}});var r=n(46063);function i(e){return{onFetch:(t,n)=>{let i=async()=>{var n,i,o,u,l,c;let d;let h=t.options,f=null===(o=t.fetchOptions)||void 0===o?void 0:null===(i=o.meta)||void 0===i?void 0:null===(n=i.fetchMore)||void 0===n?void 0:n.direction,p=(null===(u=t.state.data)||void 0===u?void 0:u.pages)||[],y=(null===(l=t.state.data)||void 0===l?void 0:l.pageParams)||[],m=!1,g=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?m=!0:t.signal.addEventListener("abort",()=>{m=!0}),t.signal)})},b=t.options.queryFn&&t.options.queryFn!==r.CN?t.options.queryFn:()=>Promise.reject(Error("Missing queryFn: '".concat(t.options.queryHash,"'"))),x=async(e,n,i)=>{if(m)return Promise.reject();if(null==n&&e.pages.length)return Promise.resolve(e);let a={queryKey:t.queryKey,pageParam:n,direction:i?"backward":"forward",meta:t.options.meta};g(a);let s=await b(a),{maxPages:o}=t.options,u=i?r.Ht:r.VX;return{pages:u(e.pages,s,o),pageParams:u(e.pageParams,n,o)}};if(f&&p.length){let e="backward"===f,t={pages:p,pageParams:y},n=(e?s:a)(h,t);d=await x(t,n,e)}else{d=await x({pages:[],pageParams:[]},null!==(c=y[0])&&void 0!==c?c:h.initialPageParam);let t=null!=e?e:p.length;for(let e=1;e<t;e++){let e=a(h,d);d=await x(d,e)}}return d};t.options.persister?t.fetchFn=()=>{var e,r;return null===(e=(r=t.options).persister)||void 0===e?void 0:e.call(r,i,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=i}}}function a(e,t){let{pages:n,pageParams:r}=t,i=n.length-1;return e.getNextPageParam(n[i],n,r[i],r)}function s(e,t){var n;let{pages:r,pageParams:i}=t;return null===(n=e.getPreviousPageParam)||void 0===n?void 0:n.call(e,r[0],r,i[0],i)}function o(e,t){return!!t&&null!=a(e,t)}function u(e,t){return!!t&&!!e.getPreviousPageParam&&null!=s(e,t)}},48861:function(e,t,n){n.d(t,{c:function(){return a}});var r=n(86968),i=n(65612),a=class extends r.z{bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:(0,i.Gm)()},t)}getOptimisticResult(e){return e.behavior=(0,i.Gm)(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var n,r,a,s;let{state:o}=e,u=super.createResult(e,t),{isFetching:l,isRefetching:c}=u,d=l&&(null===(r=o.fetchMeta)||void 0===r?void 0:null===(n=r.fetchMore)||void 0===n?void 0:n.direction)==="forward",h=l&&(null===(s=o.fetchMeta)||void 0===s?void 0:null===(a=s.fetchMore)||void 0===a?void 0:a.direction)==="backward";return{...u,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,i.Qy)(t,o.data),hasPreviousPage:(0,i.ZF)(t,o.data),isFetchingNextPage:d,isFetchingPreviousPage:h,isRefetching:c&&!d&&!h}}constructor(e,t){super(e,t)}}},15574:function(e,t,n){n.r(t),n.d(t,{HydrationBoundary:function(){return s}});var r=n(64090);function i(e,t,n){if("object"!=typeof t||null===t)return;let r=e.getMutationCache(),i=e.getQueryCache(),a=t.mutations||[],s=t.queries||[];a.forEach(t=>{var i;r.build(e,{...null==n?void 0:null===(i=n.defaultOptions)||void 0===i?void 0:i.mutations,mutationKey:t.mutationKey,meta:t.meta},t.state)}),s.forEach(t=>{var r;let{queryKey:a,state:s,queryHash:o,meta:u}=t,l=i.get(o);if(l){if(l.state.dataUpdatedAt<s.dataUpdatedAt){let{fetchStatus:e,...t}=s;l.setState(t)}return}i.build(e,{...null==n?void 0:null===(r=n.defaultOptions)||void 0===r?void 0:r.queries,queryKey:a,queryHash:o,meta:u},{...s,fetchStatus:"idle"})})}var a=n(47082),s=e=>{let{children:t,options:n={},state:s,queryClient:o}=e,u=(0,a.useQueryClient)(o),[l,c]=r.useState(),d=r.useRef(n);return d.current=n,r.useMemo(()=>{if(s){if("object"!=typeof s)return;let e=u.getQueryCache(),t=s.queries||[],n=[],r=[];for(let i of t){let t=e.get(i.queryHash);if(t){let e=i.state.dataUpdatedAt>t.state.dataUpdatedAt,n=null==l?void 0:l.find(e=>e.queryHash===i.queryHash);e&&(!n||i.state.dataUpdatedAt>n.state.dataUpdatedAt)&&r.push(i)}else n.push(i)}n.length>0&&i(u,{queries:n},d.current),r.length>0&&c(e=>e?[...e,...r]:r)}},[u,l,s]),r.useEffect(()=>{l&&(i(u,{queries:l},d.current),c(void 0))},[u,l]),t}},62696:function(e,t,n){n.r(t),n.d(t,{useInfiniteQuery:function(){return a}});var r=n(48861),i=n(99473);function a(e,t){return(0,i.r)(e,r.c,t)}},69939:function(e,t,n){n.r(t),n.d(t,{useIsFetching:function(){return s}});var r=n(64090),i=n(45139),a=n(47082);function s(e,t){let n=(0,a.useQueryClient)(t),s=n.getQueryCache();return r.useSyncExternalStore(r.useCallback(e=>s.subscribe(i.V.batchCalls(e)),[s]),()=>n.isFetching(e),()=>n.isFetching(e))}},53182:function(e,t,n){n.r(t),n.d(t,{useIsMutating:function(){return o},useMutationState:function(){return l}});var r=n(64090),i=n(46063),a=n(45139),s=n(47082);function o(e,t){let n=(0,s.useQueryClient)(t);return l({filters:{...e,status:"pending"}},n).length}function u(e,t){return e.findAll(t.filters).map(e=>t.select?t.select(e):e.state)}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=(0,s.useQueryClient)(t).getMutationCache(),o=r.useRef(e),l=r.useRef();return l.current||(l.current=u(n,e)),r.useEffect(()=>{o.current=e}),r.useSyncExternalStore(r.useCallback(e=>n.subscribe(()=>{let t=(0,i.Q$)(l.current,u(n,o.current));l.current!==t&&(l.current=t,a.V.schedule(e))}),[n]),()=>l.current,()=>l.current)}},83158:function(e,t,n){n.r(t),n.d(t,{useSuspenseInfiniteQuery:function(){return s}});var r=n(48861),i=n(99473),a=n(1244);function s(e,t){return(0,i.r)({...e,enabled:!0,suspense:!0,throwOnError:a.Ct},r.c,t)}},34239:function(e,t,n){n.r(t),n.d(t,{useSuspenseQueries:function(){return a}});var r=n(66906),i=n(1244);function a(e,t){return(0,r.useQueries)({...e,queries:e.queries.map(e=>({...e,suspense:!0,throwOnError:i.Ct,enabled:!0,placeholderData:void 0}))},t)}},96902:function(e,t,n){n.r(t),n.d(t,{useSuspenseQuery:function(){return s}});var r=n(86968),i=n(99473),a=n(1244);function s(e,t){return(0,i.r)({...e,enabled:!0,suspense:!0,throwOnError:a.Ct,placeholderData:void 0},r.z,t)}},81868:function(e,t,n){n.d(t,{Ab:function(){return s},Fr:function(){return o},G$:function(){return a},JM:function(){return d},K$:function(){return l},MS:function(){return r},h5:function(){return u},lK:function(){return c},uj:function(){return i}});var r="-ms-",i="-moz-",a="-webkit-",s="comm",o="rule",u="decl",l="@import",c="@keyframes",d="@layer"},48494:function(e,t,n){n.d(t,{MY:function(){return s}});var r=n(81868),i=n(68628),a=n(21501);function s(e){return(0,a.cE)(function e(t,n,s,l,c,d,h,f,p){for(var y,m=0,g=0,b=h,x=0,w=0,_=0,C=1,P=1,j=1,M=0,k="",S=c,T=d,O=l,E=k;P;)switch(_=M,M=(0,a.lp)()){case 40:if(108!=_&&58==(0,i.uO)(E,b-1)){-1!=(0,i.Cw)(E+=(0,i.gx)((0,a.iF)(M),"&","&\f"),"&\f")&&(j=-1);break}case 34:case 39:case 91:E+=(0,a.iF)(M);break;case 9:case 10:case 13:case 32:E+=(0,a.Qb)(_);break;case 92:E+=(0,a.kq)((0,a.Ud)()-1,7);continue;case 47:switch((0,a.fj)()){case 42:case 47:(0,i.R3)((y=(0,a.q6)((0,a.lp)(),(0,a.Ud)()),(0,a.dH)(y,n,s,r.Ab,(0,i.Dp)((0,a.Tb)()),(0,i.tb)(y,2,-2),0)),p);break;default:E+="/"}break;case 123*C:f[m++]=(0,i.to)(E)*j;case 125*C:case 59:case 0:switch(M){case 0:case 125:P=0;case 59+g:-1==j&&(E=(0,i.gx)(E,/\f/g,"")),w>0&&(0,i.to)(E)-b&&(0,i.R3)(w>32?u(E+";",l,s,b-1):u((0,i.gx)(E," ","")+";",l,s,b-2),p);break;case 59:E+=";";default:if((0,i.R3)(O=o(E,n,s,m,g,c,f,k,S=[],T=[],b),d),123===M){if(0===g)e(E,n,O,O,S,d,b,f,T);else switch(99===x&&110===(0,i.uO)(E,3)?100:x){case 100:case 108:case 109:case 115:e(t,O,O,l&&(0,i.R3)(o(t,O,O,0,0,c,f,k,c,S=[],b),T),c,T,b,f,l?S:T);break;default:e(E,O,O,O,[""],T,0,f,T)}}}m=g=w=0,C=j=1,k=E="",b=h;break;case 58:b=1+(0,i.to)(E),w=_;default:if(C<1){if(123==M)--C;else if(125==M&&0==C++&&125==(0,a.mp)())continue}switch(E+=(0,i.Dp)(M),M*C){case 38:j=g>0?1:(E+="\f",-1);break;case 44:f[m++]=((0,i.to)(E)-1)*j,j=1;break;case 64:45===(0,a.fj)()&&(E+=(0,a.iF)((0,a.lp)())),x=(0,a.fj)(),g=b=(0,i.to)(k=E+=(0,a.QU)((0,a.Ud)())),M++;break;case 45:45===_&&2==(0,i.to)(E)&&(C=0)}}return d}("",null,null,null,[""],e=(0,a.un)(e),0,[0],e))}function o(e,t,n,s,o,u,l,c,d,h,f){for(var p=o-1,y=0===o?u:[""],m=(0,i.Ei)(y),g=0,b=0,x=0;g<s;++g)for(var w=0,_=(0,i.tb)(e,p+1,p=(0,i.Wn)(b=l[g])),C=e;w<m;++w)(C=(0,i.fy)(b>0?y[w]+" "+_:(0,i.gx)(_,/&\f/g,y[w])))&&(d[x++]=C);return(0,a.dH)(e,t,n,0===o?r.Fr:c,d,h,f)}function u(e,t,n,s){return(0,a.dH)(e,t,n,r.h5,(0,i.tb)(e,0,s),(0,i.tb)(e,s+1,-1),s)}},95240:function(e,t,n){n.d(t,{P:function(){return s},q:function(){return a}});var r=n(81868),i=n(68628);function a(e,t){for(var n="",r=(0,i.Ei)(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function s(e,t,n,s){switch(e.type){case r.JM:if(e.children.length)break;case r.K$:case r.h5:return e.return=e.return||e.value;case r.Ab:return"";case r.lK:return e.return=e.value+"{"+a(e.children,s)+"}";case r.Fr:e.value=e.props.join(",")}return(0,i.to)(n=a(e.children,s))?e.return=e.value+"{"+n+"}":""}},21501:function(e,t,n){n.d(t,{FK:function(){return o},JG:function(){return d},QU:function(){return M},Qb:function(){return C},Tb:function(){return h},Ud:function(){return m},cE:function(){return w},dH:function(){return c},fj:function(){return y},iF:function(){return _},kq:function(){return P},lp:function(){return p},mp:function(){return f},q6:function(){return j},r:function(){return b},tP:function(){return g},un:function(){return x}});var r=n(68628),i=1,a=1,s=0,o=0,u=0,l="";function c(e,t,n,r,s,o,u){return{value:e,root:t,parent:n,type:r,props:s,children:o,line:i,column:a,length:u,return:""}}function d(e,t){return(0,r.f0)(c("",null,null,"",null,null,0),e,{length:-e.length},t)}function h(){return u}function f(){return u=o>0?(0,r.uO)(l,--o):0,a--,10===u&&(a=1,i--),u}function p(){return u=o<s?(0,r.uO)(l,o++):0,a++,10===u&&(a=1,i++),u}function y(){return(0,r.uO)(l,o)}function m(){return o}function g(e,t){return(0,r.tb)(l,e,t)}function b(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function x(e){return i=a=1,s=(0,r.to)(l=e),o=0,[]}function w(e){return l="",e}function _(e){return(0,r.fy)(g(o-1,function e(t){for(;p();)switch(u){case t:return o;case 34:case 39:34!==t&&39!==t&&e(u);break;case 40:41===t&&e(t);break;case 92:p()}return o}(91===e?e+2:40===e?e+1:e)))}function C(e){for(;u=y();)if(u<33)p();else break;return b(e)>2||b(u)>3?"":" "}function P(e,t){for(;--t&&p()&&!(u<48)&&!(u>102)&&(!(u>57)||!(u<65))&&(!(u>70)||!(u<97)););return g(e,o+(t<6&&32==y()&&32==p()))}function j(e,t){for(;p();)if(e+u===57)break;else if(e+u===84&&47===y())break;return"/*"+g(t,o-1)+"*"+(0,r.Dp)(47===e?e:p())}function M(e){for(;!b(y());)p();return g(e,o)}},68628:function(e,t,n){n.d(t,{$e:function(){return m},Cw:function(){return c},Dp:function(){return i},EQ:function(){return u},Ei:function(){return p},R3:function(){return y},Wn:function(){return r},f0:function(){return a},fy:function(){return o},gx:function(){return l},tb:function(){return h},to:function(){return f},uO:function(){return d},vp:function(){return s}});var r=Math.abs,i=String.fromCharCode,a=Object.assign;function s(e,t){return 45^d(e,0)?(((t<<2^d(e,0))<<2^d(e,1))<<2^d(e,2))<<2^d(e,3):0}function o(e){return e.trim()}function u(e,t){return(e=t.exec(e))?e[0]:e}function l(e,t,n){return e.replace(t,n)}function c(e,t){return e.indexOf(t)}function d(e,t){return 0|e.charCodeAt(t)}function h(e,t,n){return e.slice(t,n)}function f(e){return e.length}function p(e){return e.length}function y(e,t){return t.push(e),e}function m(e,t){return e.map(t).join("")}},95291:function(e,t,n){n.r(t),n.d(t,{ThirdwebProvider:function(){return B}});var r,i,a,s,o,u,l,c,d,h,f,p,y=n(3827),m=n(32731),g=n(48146),b=n(5577),x=n(67354);function w(e,t){var n=(0,x.J)(e,t,"update");return function(e,t){if(t.set){if(!t.get)throw TypeError("attempted to read set only private field");return"__destrWrapper"in t||(t.__destrWrapper={set value(v){t.set.call(e,v)},get value(){return t.get.call(e)}}),t.__destrWrapper}if(!t.writable)throw TypeError("attempted to set read only private field");return t}(e,n)}var _=n(46063),C=n(4668),P=n(45139),j=n(44614),M=(r=new WeakMap,class extends j.l{build(e,t,n){var r;let i=t.queryKey,a=null!==(r=t.queryHash)&&void 0!==r?r:(0,_.Rm)(i,t),s=this.get(a);return s||(s=new C.A({cache:this,queryKey:i,queryHash:a,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(i)}),this.add(s)),s}add(e){(0,m._)(this,r).has(e.queryHash)||((0,m._)(this,r).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=(0,m._)(this,r).get(e.queryHash);t&&(e.destroy(),t===e&&(0,m._)(this,r).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){P.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return(0,m._)(this,r).get(e)}getAll(){return[...(0,m._)(this,r).values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,_._x)(t,e))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,_._x)(e,t)):t}notify(e){P.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){P.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){P.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}constructor(e={}){super(),(0,g._)(this,r,{writable:!0,value:void 0}),this.config=e,(0,b._)(this,r,new Map)}}),k=n(65689),S=(i=new WeakMap,a=new WeakMap,s=new WeakMap,class extends j.l{build(e,t,n){let r=new k.m({mutationCache:this,mutationId:++w(this,a).value,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){(0,m._)(this,i).push(e),this.notify({type:"added",mutation:e})}remove(e){(0,b._)(this,i,(0,m._)(this,i).filter(t=>t!==e)),this.notify({type:"removed",mutation:e})}clear(){P.V.batch(()=>{(0,m._)(this,i).forEach(e=>{this.remove(e)})})}getAll(){return(0,m._)(this,i)}find(e){let t={exact:!0,...e};return(0,m._)(this,i).find(e=>(0,_.X7)(t,e))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,m._)(this,i).filter(t=>(0,_.X7)(e,t))}notify(e){P.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){var e;return(0,b._)(this,s,(null!==(e=(0,m._)(this,s))&&void 0!==e?e:Promise.resolve()).then(()=>{let e=(0,m._)(this,i).filter(e=>e.state.isPaused);return P.V.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(_.ZT)),Promise.resolve()))}).then(()=>{(0,b._)(this,s,void 0)})),(0,m._)(this,s)}constructor(e={}){super(),(0,g._)(this,i,{writable:!0,value:void 0}),(0,g._)(this,a,{writable:!0,value:void 0}),(0,g._)(this,s,{writable:!0,value:void 0}),this.config=e,(0,b._)(this,i,[]),(0,b._)(this,a,0)}}),T=n(79555),O=n(17211),E=n(65612),Q=(o=new WeakMap,u=new WeakMap,l=new WeakMap,c=new WeakMap,d=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,class{mount(){w(this,h).value++,1===(0,m._)(this,h)&&((0,b._)(this,f,T.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),(0,m._)(this,o).onFocus())})),(0,b._)(this,p,O.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),(0,m._)(this,o).onOnline())})))}unmount(){var e,t;w(this,h).value--,0===(0,m._)(this,h)&&(null===(e=(0,m._)(this,f))||void 0===e||e.call(this),(0,b._)(this,f,void 0),null===(t=(0,m._)(this,p))||void 0===t||t.call(this),(0,b._)(this,p,void 0))}isFetching(e){return(0,m._)(this,o).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return(0,m._)(this,u).findAll({...e,status:"pending"}).length}getQueryData(e){var t;let n=this.defaultQueryOptions({queryKey:e});return null===(t=(0,m._)(this,o).get(n.queryHash))||void 0===t?void 0:t.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let n=this.defaultQueryOptions(e),r=(0,m._)(this,o).build(this,n);return e.revalidateIfStale&&r.isStaleByTime(n.staleTime)&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return(0,m._)(this,o).findAll(e).map(e=>{let{queryKey:t,state:n}=e;return[t,n.data]})}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),i=(0,m._)(this,o).get(r.queryHash),a=null==i?void 0:i.state.data,s=(0,_.SE)(t,a);if(void 0!==s)return(0,m._)(this,o).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return P.V.batch(()=>(0,m._)(this,o).findAll(e).map(e=>{let{queryKey:r}=e;return[r,this.setQueryData(r,t,n)]}))}getQueryState(e){var t;let n=this.defaultQueryOptions({queryKey:e});return null===(t=(0,m._)(this,o).get(n.queryHash))||void 0===t?void 0:t.state}removeQueries(e){let t=(0,m._)(this,o);P.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=(0,m._)(this,o),r={type:"active",...e};return P.V.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(r,t)))}cancelQueries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={revert:!0,...t};return Promise.all(P.V.batch(()=>(0,m._)(this,o).findAll(e).map(e=>e.cancel(n)))).then(_.ZT).catch(_.ZT)}invalidateQueries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return P.V.batch(()=>{var n,r;if((0,m._)(this,o).findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let i={...e,type:null!==(r=null!==(n=e.refetchType)&&void 0!==n?n:e.type)&&void 0!==r?r:"active"};return this.refetchQueries(i,t)})}refetchQueries(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r={...n,cancelRefetch:null===(e=null==n?void 0:n.cancelRefetch)||void 0===e||e};return Promise.all(P.V.batch(()=>(0,m._)(this,o).findAll(t).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(_.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(_.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let n=(0,m._)(this,o).build(this,t);return n.isStaleByTime(t.staleTime)?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(_.ZT).catch(_.ZT)}fetchInfiniteQuery(e){return e.behavior=(0,E.Gm)(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(_.ZT).catch(_.ZT)}resumePausedMutations(){return O.N.isOnline()?(0,m._)(this,u).resumePausedMutations():Promise.resolve()}getQueryCache(){return(0,m._)(this,o)}getMutationCache(){return(0,m._)(this,u)}getDefaultOptions(){return(0,m._)(this,l)}setDefaultOptions(e){(0,b._)(this,l,e)}setQueryDefaults(e,t){(0,m._)(this,c).set((0,_.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...(0,m._)(this,c).values()],n={};return t.forEach(t=>{(0,_.to)(e,t.queryKey)&&(n={...n,...t.defaultOptions})}),n}setMutationDefaults(e,t){(0,m._)(this,d).set((0,_.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...(0,m._)(this,d).values()],n={};return t.forEach(t=>{(0,_.to)(e,t.mutationKey)&&(n={...n,...t.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...(0,m._)(this,l).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,_.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===_.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return(null==e?void 0:e._defaulted)?e:{...(0,m._)(this,l).mutations,...(null==e?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){(0,m._)(this,o).clear(),(0,m._)(this,u).clear()}constructor(e={}){(0,g._)(this,o,{writable:!0,value:void 0}),(0,g._)(this,u,{writable:!0,value:void 0}),(0,g._)(this,l,{writable:!0,value:void 0}),(0,g._)(this,c,{writable:!0,value:void 0}),(0,g._)(this,d,{writable:!0,value:void 0}),(0,g._)(this,h,{writable:!0,value:void 0}),(0,g._)(this,f,{writable:!0,value:void 0}),(0,g._)(this,p,{writable:!0,value:void 0}),(0,b._)(this,o,e.queryCache||new M),(0,b._)(this,u,e.mutationCache||new S),(0,b._)(this,l,e.defaultOptions||{}),(0,b._)(this,c,new Map),(0,b._)(this,d,new Map),(0,b._)(this,h,0)}}),A=n(47082),q=n(64090),W=n(46510),F=n(25520),H=n(57146),D=n(10194);function B(e){let[t,n]=(0,q.useState)(null),[r]=(0,q.useState)(()=>new Q({defaultOptions:{mutations:{onSettled:(e,t,n)=>{(0,F.L)(n,["__contract"])&&(0,F.L)(n.__contract,["address","chain"])&&"string"==typeof n.__contract.address&&(0,F.L)(e,["transactionHash"])&&(0,F.L)(n,["client","chain"])&&(0,W.h)({transactionHash:e.transactionHash,client:n.client,chain:n.chain}).catch(e=>{console.error("[Transaction Error]",e)}).then(()=>{var e,t,i;return Promise.all([r.invalidateQueries({queryKey:["readContract",null===(e=n.__contract)||void 0===e?void 0:e.chain.id,null===(t=n.__contract)||void 0===t?void 0:t.address]}),(0,D.K)(r,null===(i=n.__contract)||void 0===i?void 0:i.chain.id)])})}},queries:{staleTime:6e4}}}));return(0,y.jsxs)(A.QueryClientProvider,{client:r,children:[(0,y.jsx)(H.SetRootElementContext.Provider,{value:n,children:e.children}),t]})}},27549:function(e,t,n){n.r(t),n.d(t,{ConnectEmbed:function(){return P},EmbedContainer:function(){return M}});var r=n(3827),i=n(64090),a=n(4966),s=n(72568),o=n(53796),u=n(14297),l=n(86122),c=n(12441),d=n(93108),h=n(22932),f=n(59578),p=n(39479),y=n(48762),m=n(30312),g=n(94234),b=n(58852),x=n(31408),w=n(99263),_=n(8814),C=n(32271);function P(e){var t,n;let s=(0,l.r)(),c=(0,u.M)(),g=(0,o.c)(s,e.auth),b=!c||g.requiresAuth&&!g.isLoggedIn,x=(0,i.useMemo)(()=>e.wallets||(0,p.w)({appMetadata:e.appMetadata,chains:e.chains}),[e.wallets,e.appMetadata,e.chains]),_=e.locale||"en_US",C=(0,w.q)(_);(0,f.g)({wallets:x,client:e.client});let P=(0,i.useMemo)(()=>(0,h.w)()&&1!==x.length&&e.modalSize||"compact",[x.length,e.modalSize]),k=(0,i.useMemo)(()=>({privacyPolicyUrl:e.privacyPolicyUrl,showThirdwebBranding:!1!==e.showThirdwebBranding,termsOfServiceUrl:e.termsOfServiceUrl,title:void 0,titleIconUrl:void 0}),[e.privacyPolicyUrl,e.showThirdwebBranding,e.termsOfServiceUrl]),S=!1!==e.autoConnect&&(0,r.jsx)(m.AutoConnect,{appMetadata:e.appMetadata,client:e.client,wallets:x,accountAbstraction:e.accountAbstraction,timeout:"boolean"==typeof e.autoConnect?void 0:null===(t=e.autoConnect)||void 0===t?void 0:t.timeout,onConnect:e.onConnect});return b?C.data?(0,r.jsxs)(d.WalletUIStatesProvider,{theme:e.theme,isOpen:!0,children:[(0,r.jsx)(j,{auth:e.auth,accountAbstraction:e.accountAbstraction,chain:e.chain||(null===(n=e.accountAbstraction)||void 0===n?void 0:n.chain),chains:e.chains,client:e.client,connectLocale:C.data,size:P,meta:k,isEmbed:!0,localeId:e.locale||"en_US",onConnect:e.onConnect,recommendedWallets:e.recommendedWallets,showAllWallets:e.showAllWallets,walletConnect:e.walletConnect,wallets:x,className:e.className,modalSize:P,style:e.style}),S]}):(0,r.jsxs)(r.Fragment,{children:[S,(0,r.jsx)(a.CustomThemeProvider,{theme:e.theme,children:(0,r.jsx)(M,{modalSize:P,children:(0,r.jsx)(y.a,{})})})]}):(0,r.jsx)("div",{children:S})}let j=e=>{let t=(0,C.useSetupScreen)({size:e.size,welcomeScreen:void 0,wallets:e.wallets}),{setScreen:n,initialScreen:a}=t,s=(0,l.r)(),d=(0,o.c)(s,e.auth),f=(0,u.M)(),p=function(e){let t=e.isAutoConnecting;return(0,i.useSyncExternalStore)(t.subscribe,t.getValue,t.getValue)}(c.y),m=null;(0,i.useEffect)(()=>{d.requiresAuth&&!d.isLoggedIn&&f&&n(x.K8.signIn)},[d,n,f]);let b=(0,h.w)()&&e.modalSize||"compact";return m=p?(0,r.jsx)(y.a,{}):(0,r.jsx)(_.ConnectModalContent,{shouldSetActive:!0,screenSetup:t,isOpen:!0,onClose:()=>{n(a)},setModalVisibility:()=>{},accountAbstraction:e.accountAbstraction,auth:e.auth,chain:e.chain,chains:e.chains,client:e.client,connectLocale:e.connectLocale,meta:e.meta,size:e.size,welcomeScreen:void 0,isEmbed:e.isEmbed,onConnect:e.onConnect,recommendedWallets:e.recommendedWallets,showAllWallets:e.showAllWallets,walletConnect:e.walletConnect,wallets:e.wallets,modalHeader:void 0,walletIdsToHide:void 0}),(0,r.jsx)(M,{modalSize:b,className:e.className,style:e.style,children:"wide"===b?m:(0,r.jsxs)(g.H,{children:[" ",m," "]})})},M=(0,b.lx)(e=>{let{modalSize:t}=e,n=(0,a.useCustomTheme)();return{color:n.colors.primaryText,background:n.colors.modalBg,height:"compact"===t?"auto":x.g_,width:"compact"===t?x.Co:x.zv,boxSizing:"border-box",position:"relative",lineHeight:"normal",borderRadius:s.q0.xl,border:"1px solid ".concat(n.colors.borderColor),overflow:"hidden",fontFamily:n.fontFamily,"& *::selection":{backgroundColor:n.colors.primaryText,color:n.colors.modalBg},"& *":{boxSizing:"border-box"}}})},73659:function(e,t,n){n.r(t),n.d(t,{PayEmbed:function(){return h}});var r=n(3827),i=n(64090),a=n(4966),s=n(27549),o=n(99263),u=n(11010),l=n(97285),c=n(94234),d=n(53326);function h(e){let t=(0,o.q)(e.locale||"en_US"),[n,h]=(0,i.useState)("buy"),f=e.theme||"dark",p=null;return p=t.data?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{display:"tx-history"===n?"none":"inherit"},children:(0,r.jsx)(u.default,{isEmbed:!0,supportedTokens:e.supportedTokens,theme:f,client:e.client,connectLocale:t.data,onViewPendingTx:()=>{h("tx-history")},payOptions:e.payOptions||{},onDone:()=>{},connectOptions:e.connectOptions,buyForTx:void 0,onBack:void 0})}),"tx-history"===n&&(0,r.jsx)(l.BuyTxHistory,{client:e.client,onBack:()=>{h("buy")},onDone:()=>{},isBuyForTx:!1,isEmbed:!0})]}):(0,r.jsx)("div",{style:{minHeight:"350px",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)(d.Spinner,{size:"xl",color:"secondaryText"})}),(0,r.jsx)(a.CustomThemeProvider,{theme:f,children:(0,r.jsx)(s.EmbedContainer,{modalSize:"compact",children:(0,r.jsx)(c.H,{children:p})})})}},35634:function(e,t,n){n.r(t),n.d(t,{TransactionButton:function(){return A}});var r=n(3827),i=n(4966),a=n(20568),s=n(46510),o=n(49859);let u=(e,t)=>{let{transaction:n,onTransactionSent:r,onTransactionConfirmed:i,onError:u,onClick:l}=e;return(0,a.useMutation)({mutationFn:async()=>{l&&l();try{let e=await n(),a=await t(e);if(r&&r(a),i){let e=await (0,s.h)(a);if("reverted"===e.status)throw Error("Execution reverted: ".concat((0,o.P)(e,null,2)));i(e)}}catch(e){u&&u(e)}finally{}}})};var l=n(62177),c=n(64090),d=n(72568),h=n(51787),f=n(57146),p=n(37697),y=n(99263),m=n(89288),g=n(97285),b=n(4654),x=n(972),w=n(53326),_=n(31137),C=n(3702),P=n(32788),j=n(48762),M=n(86122),k=n(46226);function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,M.r)(),n=(0,k.l)(),i=(0,M.r)(),a=e.payModal,s=!0;if((!1===a||e.gasless)&&(s=!1),t&&"smart"===t.id){let e=t.getConfig();"sponsorGas"in e&&!0===e.sponsorGas&&(s=!1),"gasless"in e&&!0===e.gasless&&(s=!1)}let o=(0,c.useContext)(f.SetRootElementContext);return(0,h.t)({showPayModal:s&&!1!==a?e=>{o((0,r.jsx)(T,{tx:e.tx,onComplete:e.sendTx,onClose:()=>{o(null),e.rejectTx(Error("User rejected transaction by closing modal"))},onTxSent:e.resolveTx,client:e.tx.client,localeId:(null==a?void 0:a.locale)||"en_US",supportedTokens:null==a?void 0:a.supportedTokens,theme:(null==a?void 0:a.theme)||"dark",txCostWei:e.totalCostWei,walletBalanceWei:e.walletBalance.value,nativeTokenSymbol:e.walletBalance.symbol,payOptions:{buyWithCrypto:null==a?void 0:a.buyWithCrypto,buyWithFiat:null==a?void 0:a.buyWithFiat,purchaseData:null==a?void 0:a.purchaseData}}))}:void 0,gasless:e.gasless,switchChain:n,wallet:i})}function T(e){return(0,r.jsx)(i.CustomThemeProvider,{theme:e.theme,children:(0,r.jsx)(b.Modal,{open:!0,size:"compact",setOpen:t=>{t||e.onClose()},children:(0,r.jsx)(O,{...e})})})}function O(e){let t=(0,y.q)(e.localeId),[n,i]=(0,c.useState)("buy");return t.data?"execute-tx"===n?(0,r.jsx)(E,{tx:e.tx,closeModal:e.onClose,onTxSent:e.onTxSent}):"tx-history"===n?(0,r.jsx)(g.BuyTxHistory,{client:e.client,onBack:()=>{i("buy")},onDone:()=>{i("execute-tx")},isBuyForTx:!0,isEmbed:!1}):(0,r.jsx)(m.I,{isEmbed:!1,client:e.client,onViewPendingTx:()=>{i("tx-history")},supportedTokens:e.supportedTokens,connectLocale:t.data,buyForTx:{balance:e.walletBalanceWei,cost:e.txCostWei,tx:e.tx,tokenSymbol:e.nativeTokenSymbol},theme:"string"==typeof e.theme?e.theme:e.theme.type,payOptions:e.payOptions,onDone:()=>{i("execute-tx")},connectOptions:void 0,onBack:void 0}):(0,r.jsx)(j.a,{})}function E(e){let t=S({payModal:!1}),[n,i]=(0,c.useState)("loading"),a=(0,c.useCallback)(async()=>{i("loading");try{let n=await t.mutateAsync(e.tx);e.onTxSent(n),i("sent")}catch(e){console.error(e),i("failed")}},[t,e.tx,e.onTxSent]),s=(0,c.useRef)(!1);return(0,c.useEffect)(()=>{s.current||(s.current=!0,a())},[a]),(0,r.jsxs)(_.Container,{p:"lg",children:[(0,r.jsx)(_.ModalHeader,{title:"Transaction"}),(0,r.jsx)(x.L,{y:"xxl"}),(0,r.jsx)(x.L,{y:"xxl"}),(0,r.jsxs)(_.Container,{flex:"row",center:"x",children:["loading"===n&&(0,r.jsx)(w.Spinner,{size:"3xl",color:"accentText"}),"failed"===n&&(0,r.jsx)(p.E,{size:d.EA["3xl"]}),"sent"===n&&(0,r.jsx)(_.Container,{color:"success",flex:"row",center:"both",children:(0,r.jsx)(l.NhS,{width:d.EA["3xl"],height:d.EA["3xl"]})})]}),(0,r.jsx)(x.L,{y:"lg"}),(0,r.jsxs)(P.Text,{color:"primaryText",center:!0,size:"lg",children:["loading"===n&&"Sending transaction","failed"===n&&"Transaction failed","sent"===n&&"Transaction sent"]}),(0,r.jsx)(x.L,{y:"xxl"}),(0,r.jsx)(x.L,{y:"xxl"}),"failed"===n&&(0,r.jsx)(C.Button,{variant:"accent",fullWidth:!0,onClick:a,children:"Try Again"}),"sent"===n&&(0,r.jsx)(C.Button,{variant:"accent",fullWidth:!0,onClick:e.closeModal,children:"Done"})]})}var Q=n(14297);function A(e){let{children:t,transaction:n,onTransactionSent:a,onTransactionConfirmed:s,onError:o,onClick:l,gasless:c,payModal:d,disabled:h,unstyled:f,...p}=e,y=(0,Q.M)(),{mutate:m,isPending:g}=u(e,S({gasless:c,payModal:d}).mutateAsync);return(0,r.jsx)(i.CustomThemeProvider,{theme:e.theme,children:(0,r.jsxs)(C.Button,{gap:"xs",disabled:!y||h||g,variant:"primary",unstyled:f,"data-is-loading":g,onClick:()=>m(),...p,style:f?{position:"relative",...p.style}:{opacity:!y||h?.5:1,minWidth:"150px",position:"relative",...p.style},children:[(0,r.jsx)("span",{style:{visibility:g?"hidden":"visible"},children:t}),g&&(0,r.jsx)("div",{style:{position:"absolute",display:"flex",alignItems:"center",height:"100%",top:0,bottom:0,margin:"auto"},children:(0,r.jsx)(w.Spinner,{size:"md",color:"primaryButtonText"})})]})})}},25520:function(e,t,n){n.d(t,{L:function(){return r}});function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return"object"==typeof e&&null!==e&&t.every(t=>t in e)}}}]);