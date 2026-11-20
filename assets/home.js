(()=>{var __=Object.defineProperty;var x_=(s,t,e)=>t in s?__(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Gt=(s,t,e)=>x_(s,typeof t!="symbol"?t+"":t,e);function rs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function cp(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qo={duration:.5,overwrite:!1,delay:0},Mu,gn,Oe,vi=1e8,Te=1/vi,pu=Math.PI*2,v_=pu/4,y_=0,hp=Math.sqrt,S_=Math.cos,M_=Math.sin,rn=function(t){return typeof t=="string"},We=function(t){return typeof t=="function"},as=function(t){return typeof t=="number"},Al=function(t){return typeof t>"u"},Xi=function(t){return typeof t=="object"},Kn=function(t){return t!==!1},bu=function(){return typeof window<"u"},gl=function(t){return We(t)||rn(t)},up=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,b_=/random\([^)]+\)/g,w_=/,\s*/g,ep=/(?:-?\.?\d|\.)+/gi,wu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,cr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,au=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Tu=/[+-]=-?[.\d]+/,T_=/[^,'"\[\]\s]+/gi,E_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ze,Hi,mu,Eu,oi={},yl={},fp,dp=function(t){return(yl=Gr(t,oi))&&Cn},Cl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},jo=function(t,e){return!e&&console.warn(t)},pp=function(t,e){return t&&(oi[t]=e)&&yl&&(yl[t]=e)||oi},ta=function(){return 0},A_={suppressEvents:!0,isStart:!0,kill:!1},_l={suppressEvents:!0,kill:!1},C_={suppressEvents:!0},Au={},As=[],gu={},mp,Jn={},lu={},np=30,xl=[],Cu="",Ru=function(t){var e=t[0],n,i;if(Xi(e)||We(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=xl.length;i--&&!xl[i].targetTest(e););n=xl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Du(t[i],n)))||t.splice(i,1);return t},Cs=function(t){return t._gsap||Ru(yi(t))[0]._gsap},Pu=function(t,e,n){return(n=t[e])&&We(n)?t[e]():Al(n)&&t.getAttribute&&t.getAttribute(e)||n},Bn=function(t,e){return(t=t.split(",")).forEach(e)||t},Xe=function(t){return Math.round(t*1e5)/1e5||0},Be=function(t){return Math.round(t*1e7)/1e7||0},hr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},R_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Sl=function(){var t=As.length,e=As.slice(0),n,i;for(gu={},As.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Iu=function(t){return!!(t._initted||t._startAt||t.add)},gp=function(t,e,n,i){As.length&&!gn&&Sl(),t.render(e,n,i||!!(gn&&e<0&&Iu(t))),As.length&&!gn&&Sl()},_p=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(T_).length<2?e:rn(t)?t.trim():t},xp=function(t){return t},ai=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},P_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Gr=function(t,e){for(var n in e)t[n]=e[n];return t},ip=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Xi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Ml=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Jo=function(t){var e=t.parent||ze,n=t.keyframes?P_(An(t.keyframes)):ai;if(Kn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},I_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},vp=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Rl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Rs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},or=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},L_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},_u=function(t,e,n,i){return t._startAt&&(gn?t._startAt.revert(_l):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},D_=function s(t){return!t||t._ts&&s(t.parent)},sp=function(t){return t._repeat?Hr(t._tTime,t=t.duration()+t._rDelay)*t:0},Hr=function(t,e){var n=Math.floor(t=Be(t/e));return t&&n===t?n-1:n},bl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Pl=function(t){return t._end=Be(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},Il=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Pl(t),n._dirty||or(n,t)),t},yp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=bl(t.rawTime(),e),(!e._dur||sa(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),or(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},Wi=function(t,e,n,i){return e.parent&&Rs(e),e._start=Be((as(n)?n:!n&&wl(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==ze?xi(t,n,e):t._time)+e._delay),e._end=Be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),vp(t,e,"_first","_last",t._sort?"_start":0),wl(e)||(t._recent=e),i||yp(t,e),t._ts<0&&Il(t,t._tTime),t},Sp=function(t,e){return(oi.ScrollTrigger||Cl("scrollTrigger",e))&&oi.ScrollTrigger.create(e,t)},Mp=function(t,e,n,i,r){if(Uu(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!gn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&mp!==$n.frame)return As.push(t),t._lazy=[r,i],1},N_=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},wl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},O_=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&N_(t)&&!(!t._initted&&wl(t))||(t._ts<0||t._dp._ts<0)&&!wl(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=sa(0,t._tDur,e),h=Hr(l,a),t._yoyo&&h&1&&(o=1-o),h!==Hr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||gn||i||t._zTime===Te||!e&&t._zTime){if(!t._initted&&Mp(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&_u(t,e,n,!0),t._onUpdate&&!n&&ri(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ri(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Rs(t,1),!n&&!gn&&(ri(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},U_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Wr=function(t,e,n,i){var r=t._repeat,o=Be(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Be(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Il(t,t._tTime=t._tDur*a),t.parent&&Pl(t),n||or(t.parent,t),t},rp=function(t){return t instanceof En?or(t):Wr(t,t._dur)},F_={_start:0,endTime:ta,totalDuration:ta},xi=function s(t,e,n){var i=t.labels,r=t._recent||F_,o=t.duration()>=vi?r.endTime(!1):t._dur,a,l,c;return rn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},$o=function(t,e,n){var i=as(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;o.immediateRender=Kn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Ye(e[0],o,e[r+1])},Ps=function(t,e){return t||t===0?e(t):e},sa=function(t,e,n){return n<t?t:n>e?e:n},_n=function(t,e){return!rn(t)||!(e=E_.exec(t))?"":e[1]},B_=function(t,e,n){return Ps(n,function(i){return sa(t,e,i)})},xu=[].slice,bp=function(t,e){return t&&Xi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Xi(t[0]))&&!t.nodeType&&t!==Hi},z_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return rn(i)&&!e||bp(i,1)?(r=n).push.apply(r,yi(i)):n.push(i)})||n},yi=function(t,e,n){return Oe&&!e&&Oe.selector?Oe.selector(t):rn(t)&&!n&&(mu||!Xr())?xu.call((e||Eu).querySelectorAll(t),0):An(t)?z_(t,n):bp(t)?xu.call(t,0):t?[t]:[]},vu=function(t){return t=yi(t)[0]||jo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return yi(e,n.querySelectorAll?n:n===t?jo("Invalid scope")||Eu.createElement("div"):t)}},wp=function(t){return t.sort(function(){return .5-Math.random()})},Tp=function(t){if(We(t))return t;var e=Xi(t)?t:{each:t},n=ar(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return rn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,m){var _=(m||e).length,p=o[_],g,v,E,y,S,M,x,b,L;if(!p){if(L=e.grid==="auto"?0:(e.grid||[1,vi])[1],!L){for(x=-vi;x<(x=m[L++].getBoundingClientRect().left)&&L<_;);L<_&&L--}for(p=o[_]=[],g=l?Math.min(L,_)*h-.5:i%L,v=L===vi?0:l?_*d/L-.5:i/L|0,x=0,b=vi,M=0;M<_;M++)E=M%L-g,y=v-(M/L|0),p[M]=S=c?Math.abs(c==="y"?y:E):hp(E*E+y*y),S>x&&(x=S),S<b&&(b=S);i==="random"&&wp(p),p.max=x-b,p.min=b,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(L>_?_-1:c?c==="y"?_/L:L:Math.max(L,_/L))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=_n(e.amount||e.each)||0,n=n&&_<0?Q_(n):n}return _=(p[u]-p.min)/p.max||0,Be(p.b+(n?n(_):_)*p.v)+p.u}},yu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(as(n)?0:_n(n))}},Ep=function(t,e){var n=An(t),i,r;return!n&&Xi(t)&&(i=n=t.radius||vi,t.values?(t=yi(t.values),(r=!as(t[0]))&&(i*=i)):t=yu(t.increment)),Ps(e,n?We(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=vi,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,r||h===o||as(o)?h:h+_n(o)}:yu(t))},Ap=function(t,e,n,i){return Ps(An(t)?!e:n===!0?!!(n=0):!i,function(){return An(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},k_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},V_=function(t,e){return function(n){return t(parseFloat(n))+(e||_n(n))}},G_=function(t,e,n){return Rp(t,e,0,1,n)},Cp=function(t,e,n){return Ps(n,function(i){return t[~~e(i)]})},H_=function s(t,e,n){var i=e-t;return An(t)?Cp(t,s(0,t.length),e):Ps(n,function(r){return(i+(r-t)%i)%i+t})},W_=function s(t,e,n){var i=e-t,r=i*2;return An(t)?Cp(t,s(0,t.length-1),e):Ps(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},qr=function(t){return t.replace(b_,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(w_);return Ap(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Rp=function(t,e,n,i,r){var o=e-t,a=i-n;return Ps(r,function(l){return n+((l-t)/o*a||0)})},X_=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=rn(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(An(t)&&!An(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(m){m*=d;var _=Math.min(u,~~m);return h[_](m-_)},n=e}else i||(t=Gr(An(t)?[]:{},t));if(!h){for(l in e)Nu.call(a,t,l,"get",e[l]);r=function(m){return zu(m,a)||(o?t.p:t)}}}return Ps(n,r)},op=function(t,e,n){var i=t.labels,r=vi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ri=function(t,e,n){var i=t.vars,r=i[e],o=Oe,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&As.length&&Sl(),a&&(Oe=a),h=l?r.apply(c,l):r.call(c),Oe=o,h},Yo=function(t){return Rs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!gn),t.progress()<1&&ri(t,"onInterrupt"),t},Vr,Pp=[],Ip=function(t){if(t)if(t=!t.name&&t.default||t,bu()||t.headless){var e=t.name,n=We(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ta,render:zu,add:Nu,kill:lx,modifier:ax,rawVars:0},o={targetTest:0,get:0,getSetter:Ll,aliases:{},register:0};if(Xr(),t!==i){if(Jn[e])return;ai(i,ai(Ml(t,r),o)),Gr(i.prototype,Gr(r,Ml(t,o))),Jn[i.prop=e]=i,t.targetTest&&(xl.push(i),Au[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}pp(e,i),t.register&&t.register(Cn,i,zn)}else Pp.push(t)},Re=255,Zo={aqua:[0,Re,Re],lime:[0,Re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Re],navy:[0,0,128],white:[Re,Re,Re],olive:[128,128,0],yellow:[Re,Re,0],orange:[Re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Re,0,0],pink:[Re,192,203],cyan:[0,Re,Re],transparent:[Re,Re,Re,0]},cu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Re+.5|0},Lp=function(t,e,n){var i=t?as(t)?[t>>16,t>>8&Re,t&Re]:0:Zo.black,r,o,a,l,c,h,d,u,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Zo[t])i=Zo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Re,i&Re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Re,t&Re]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(ep),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=cu(l+1/3,r,o),i[1]=cu(l,r,o),i[2]=cu(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(wu),n&&i.length<4&&(i[3]=1),i}else i=t.match(ep)||Zo.transparent;i=i.map(Number)}return e&&!m&&(r=i[0]/Re,o=i[1]/Re,a=i[2]/Re,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Dp=function(t){var e=[],n=[],i=-1;return t.split(os).forEach(function(r){var o=r.match(cr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},ap=function(t,e,n){var i="",r=(t+i).match(os),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=Lp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Dp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(os,"1").split(cr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(os),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},os=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Zo)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),q_=/hsl[a]?\(/,Lu=function(t){var e=t.join(" "),n;if(os.lastIndex=0,os.test(e))return n=q_.test(e),t[1]=ap(t[1],n),t[0]=ap(t[0],n,Dp(t[1])),!0},ea,$n=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,u,f,m=function _(p){var g=s()-i,v=p===!0,E,y,S,M;if((g>t||g<0)&&(n+=g-e),i+=g,S=i-n,E=S-o,(E>0||v)&&(M=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,o+=E+(E>=r?0:r-E),y=1),v||(l=c(_)),y)for(f=0;f<a.length;f++)a[f](S,u,M,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){fp&&(!mu&&bu()&&(Hi=mu=window,Eu=Hi.document||{},oi.gsap=Cn,(Hi.gsapVersions||(Hi.gsapVersions=[])).push(Cn.version),dp(yl||Hi.GreenSockGlobals||!Hi.gsap&&Hi||{}),Pp.forEach(Ip)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},ea=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ea=0,c=ta},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,g,v){var E=g?function(y,S,M,x){p(y,S,M,x),d.remove(E)}:p;return d.remove(p),a[v?"unshift":"push"](E),Xr(),E},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),Xr=function(){return!ea&&$n.wake()},ge={},Y_=/^[\d.\-M][\d.\-,\s]/,Z_=/["']/g,J_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Z_,"").trim():+c,i=l.substr(a+1).trim();return e},$_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},K_=function(t){var e=(t+"").split("("),n=ge[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[J_(e[1])]:$_(t).split(",").map(_p)):ge._CE&&Y_.test(t)?ge._CE("",t):n},Q_=function(t){return function(e){return 1-t(1-e)}},ar=function(t,e){return t&&(We(t)?t:ge[t]||K_(t))||e},ur=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Bn(t,function(a){ge[a]=oi[a]=r,ge[o=a.toLowerCase()]=n;for(var l in r)ge[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ge[a+"."+l]=r[l]}),r},Np=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},hu=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/pu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*M_((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Np(a);return r=pu/r,l.config=function(c,h){return s(t,c,h)},l},uu=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Np(n);return i.config=function(r){return s(t,r)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;ur(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ge.Linear.easeNone=ge.none=ge.Linear.easeIn;ur("Elastic",hu("in"),hu("out"),hu());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};ur("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ur("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});ur("Circ",function(s){return-(hp(1-s*s)-1)});ur("Sine",function(s){return s===1?1:-S_(s*v_)+1});ur("Back",uu("in"),uu("out"),uu());ge.SteppedEase=ge.steps=oi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Te;return function(a){return((i*sa(0,o,a)|0)+r)*n}}};Qo.ease=ge["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Cu+=s+","+s+"Params,"});var Du=function(t,e){this.id=y_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Pu,this.set=e?e.getSetter:Ll},na=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Wr(this,+e.duration,1,1),this.data=e.data,Oe&&(this._ctx=Oe,Oe.data.push(this)),ea||$n.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Xr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Il(this,n),!r._dp||r.parent||yp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Hr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?bl(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(sa(-Math.abs(this._delay),a,r),i!==!1),Pl(this),L_(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Xr(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Te,o;if(r)for(this._tTime-=Te,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Te){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Be(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Wi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=C_);var i=gn;return gn=n,Iu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,rp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,rp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(xi(this,n),Kn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kn(i)),this._dur||(this._zTime=-Te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Te)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=We(n)?n:xp,l=function(){var h=i.then;i.then=null,r&&r(),We(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Yo(this)},s})();ai(na.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var En=(function(s){cp(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Kn(n.sortChildren),ze&&Wi(n.parent||ze,rs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Sp(rs(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return $o(0,arguments,this),this},e.from=function(i,r,o){return $o(1,arguments,this),this},e.fromTo=function(i,r,o,a){return $o(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Jo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ye(i,r,xi(this,o),1),this},e.call=function(i,r,o){return Wi(this,Ye.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ye(i,o,xi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Jo(o).immediateRender=Kn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Jo(a).immediateRender=Kn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Be(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,m,_,p,g,v,E,y,S,M,x;if(this!==ze&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,y=this._start,E=this._ts,g=!E,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(u=Be(h%p),h===l?(_=this._repeat,u=c):(S=Be(h/p),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=Hr(this._tTime,p),!a&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),M&&_&1&&(u=c-u,x=1),_!==S&&!this._lock){var b=M&&S&1,L=b===(M&&_&1);if(_<S&&(b=!b),a=b?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Be(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=U_(this,Be(a),Be(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!S&&(ri(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-Te);break}}f=m}else{f=this._last;for(var A=i<0?i:u;f;){if(m=f._prev,(f._act||A<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,r,o||gn&&Iu(f)),u!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=A?-Te:Te);break}}f=m}}if(v&&!r&&(this.pause(),v.render(u>=a?0:-Te)._zTime=u>=a?1:-1,this._ts))return this._start=y,Pl(this),this.render(i,r,o);this._onUpdate&&!r&&ri(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Rs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(ri(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(as(r)||(r=xi(this,r,i)),!(i instanceof na)){if(An(i))return i.forEach(function(a){return o.add(a,r)}),this;if(rn(i))return this.addLabel(i,r);if(We(i))i=Ye.delayedCall(0,i);else return this}return this!==i?Wi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ye?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return rn(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(i.parent===this&&Rl(this,i),i===this._recent&&(this._recent=this._last),or(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Be($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=xi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Ye.delayedCall(0,r||ta,o);return a.data="isPause",this._hasPause=1,Wi(this,a,xi(this,i))},e.removePause=function(i){var r=this._first;for(i=xi(this,i);r;)r._start===i&&r.data==="isPause"&&Rs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Es!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=yi(i),l=this._first,c=as(r),h;l;)l instanceof Ye?R_(l._targets,a)&&(c?(!Es||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=xi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=Ye.to(o,ai({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Wr(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},r));return u?m.render(0):m},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,ai({startAt:{time:xi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),op(this,xi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),op(this,xi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Be(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return or(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),or(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=vi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Wi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Be(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Wr(o,o===ze&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ze._ts&&(gp(ze,bl(i,ze)),mp=$n.frame),$n.frame>=np){np+=Qn.autoSleep||120;var r=ze._first;if((!r||!r._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||$n.sleep()}}},t})(na);ai(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var j_=function(t,e,n,i,r,o,a){var l=new zn(this._pt,t,e,0,1,Bu,null,r),c=0,h=0,d,u,f,m,_,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=qr(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),u=n.match(au)||[];d=au.exec(i);)m=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?hr(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=au.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Tu.test(i)||g)&&(l.e=0),this._pt=l,l},Nu=function(t,e,n,i,r,o,a,l,c,h){We(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:We(d)?c?t[e.indexOf("set")||!We(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=We(d)?c?sx:Up:Fu,m;if(rn(i)&&(~i.indexOf("random(")&&(i=qr(i)),i.charAt(1)==="="&&(m=hr(u,i)+(_n(u)||0),(m||m===0)&&(i=m))),!h||u!==i||Su)return!isNaN(u*i)&&i!==""?(m=new zn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?ox:Fp,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&Cl(e,i),j_.call(this,t,e,u,i,f,l||Qn.stringFilter,c))},tx=function(t,e,n,i,r){if(We(t)&&(t=Ko(t,r,e,n,i)),!Xi(t)||t.style&&t.nodeType||An(t)||up(t))return rn(t)?Ko(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Ko(t[a],r,e,n,i);return o},Ou=function(t,e,n,i,r,o){var a,l,c,h;if(Jn[t]&&(a=new Jn[t]).init(r,a.rawVars?e[t]:tx(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new zn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Vr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Es,Su,Uu=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:p,E=t._overwrite==="auto"&&!Mu,y=t.timeline,S=i.easeReverse||d,M,x,b,L,A,I,C,O,D,B,V,U,J;if(y&&(!u||!r)&&(r="none"),t._ease=ar(r,Qo.ease),t._rEase=S&&(ar(S)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(O=p[0]?Cs(p[0]).harness:0,U=O&&i[O.prop],M=Ml(i,Au),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&m?_l:A_),_._lazy=0),o){if(Rs(t._startAt=Ye.set(p,ai({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(gn||!a&&!f)&&t._startAt.revert(_l),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),b=ai({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Kn(l),immediateRender:a,stagger:0,parent:g},M),U&&(b[O.prop]=U),Rs(t._startAt=Ye.set(p,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(gn?t._startAt.revert(_l):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Kn(l)||l&&!m,x=0;x<p.length;x++){if(A=p[x],C=A._gsap||Ru(p)[x]._gsap,t._ptLookup[x]=B={},gu[C.id]&&As.length&&Sl(),V=v===p?x:v.indexOf(A),O&&(D=new O).init(A,U||M,t,V,v)!==!1&&(t._pt=L=new zn(t._pt,A,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(X){B[X]=L}),D.priority&&(I=1)),!O||U)for(b in M)Jn[b]&&(D=Ou(b,M,t,V,A,v))?D.priority&&(I=1):B[b]=L=Nu.call(t,A,b,"get",M[b],V,v,0,i.stringFilter);t._op&&t._op[x]&&t.kill(A,t._op[x]),E&&t._pt&&(Es=t,ze.killTweensOf(A,B,t.globalTime(e)),J=!t.parent,Es=0),t._pt&&l&&(gu[C.id]=1)}I&&ku(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!J,u&&e<=0&&y.render(vi,!0,!0)},ex=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Su=1,t.vars[e]="+=0",Uu(t,a),Su=0,l?jo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Xe(n)+_n(d.e)),d.b&&(d.b=h.s+_n(d.b))},nx=function(t,e){var n=t[0]?Cs(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Gr({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},ix=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(An(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Ko=function(t,e,n,i,r){return We(t)?t.call(e,n,i,r):rn(t)&&~t.indexOf("random(")?qr(t):t},Tl=Cu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Op={};Bn(Tl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Op[s]=1});Tl=Tl.split(",");var Ye=(function(s){cp(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Jo(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||ze,v=(An(n)||up(n)?as(n[0]):"length"in i)?[n]:yi(n),E,y,S,M,x,b,L,A;if(a._targets=v.length?Ru(v):jo("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||u||gl(c)||gl(h)){i=a.vars;var I=i.easeReverse||i.yoyoEase;if(E=a.timeline=new En({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),E.kill(),E.parent=E._dp=rs(a),E._start=0,u||gl(c)||gl(h)){if(M=v.length,L=u&&Tp(u),Xi(u))for(x in u)~Tl.indexOf(x)&&(A||(A={}),A[x]=u[x]);for(y=0;y<M;y++)S=Ml(i,Op),S.stagger=0,I&&(S.easeReverse=I),A&&Gr(S,A),b=v[y],S.duration=+Ko(c,rs(a),y,b,v),S.delay=(+Ko(h,rs(a),y,b,v)||0)-a._delay,!u&&M===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),E.to(b,S,L?L(y,b,v):0),E._ease=ge.none;E.duration()?c=h=0:a.timeline=0}else if(m){Jo(ai(E.vars.defaults,{ease:"none"})),E._ease=ar(m.ease||i.ease||"none");var C=0,O,D,B;if(An(m))m.forEach(function(V){return E.to(v,V,">")}),E.duration();else{S={};for(x in m)x==="ease"||x==="easeEach"||ix(x,m[x],S,m.easeEach);for(x in S)for(O=S[x].sort(function(V,U){return V.t-U.t}),C=0,y=0;y<O.length;y++)D=O[y],B={ease:D.e,duration:(D.t-(y?O[y-1].t:0))/100*c},B[x]=D.v,E.to(v,B,C),C+=B.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return f===!0&&!Mu&&(Es=rs(a),ze.killTweensOf(v),Es=0),Wi(g,rs(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===Be(g._time)&&Kn(d)&&D_(rs(a))&&g.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-h)||0)),p&&Sp(rs(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Te&&!h?l:i<Te?0:i,u,f,m,_,p,g,v,E;if(!c)O_(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(u=Be(d%_),d===l?(m=this._repeat,u=c):(p=Be(d/_),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(u=c-u),p=Hr(this._tTime,_),u===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Be(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Mp(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var S=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!p&&(ri(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;E&&E.render(i<0?i:E._dur*E._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&_u(this,i,r,o),ri(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&ri(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&_u(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Rs(this,1),!r&&!(h&&!a)&&(d||a||g)&&(ri(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){ea||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Uu(this,c),h=this._ease(c/this._dur),ex(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Il(this,0),this.parent||vp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Yo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Es&&Es.vars.overwrite!==!0)._first||Yo(this),this.parent&&o!==this.timeline.totalDuration()&&Wr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?yi(i):a,c=this._ptLookup,h=this._pt,d,u,f,m,_,p,g;if((!r||r==="all")&&I_(a,l))return r==="all"&&(this._pt=0),Yo(this);for(d=this._op=this._op||[],r!=="all"&&(rn(r)&&(_={},Bn(r,function(v){return _[v]=1}),r=_),r=nx(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],r==="all"?(d[g]=r,m=u,f={}):(f=d[g]=d[g]||{},m=r);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Rl(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Yo(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return $o(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return $o(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return ze.killTweensOf(i,r,o)},t})(na);ai(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(s){Ye[s]=function(){var t=new En,e=xu.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Fu=function(t,e,n){return t[e]=n},Up=function(t,e,n){return t[e](n)},sx=function(t,e,n,i){return t[e](i.fp,n)},rx=function(t,e,n){return t.setAttribute(e,n)},Ll=function(t,e){return We(t[e])?Up:Al(t[e])&&t.setAttribute?rx:Fu},Fp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ox=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Bu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},zu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},ax=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},lx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Rl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},cx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ku=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},zn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Fp,this.d=l||this,this.set=c||Fu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=cx,this.m=n,this.mt=r,this.tween=i},s})();Bn(Cu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Au[s]=1});oi.TweenMax=oi.TweenLite=Ye;oi.TimelineLite=oi.TimelineMax=En;ze=new En({sortChildren:!1,defaults:Qo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Lu;var lr=[],vl={},hx=[],lp=0,ux=0,fu=function(t){return(vl[t]||hx).map(function(e){return e()})},ia=function(){var t=Date.now(),e=[];t-lp>2&&(fu("matchMediaInit"),lr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Hi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),fu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),lp=t,fu("matchMedia"))},Bp=(function(){function s(e,n){this.selector=n&&vu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ux++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){We(n)&&(r=i,i=n,n=We);var o=this,a=function(){var c=Oe,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=vu(r)),Oe=o,d=i.apply(o,arguments),We(d)&&o._r.push(d),Oe=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===We?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Oe;Oe=null,n(this),Oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof En?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ye)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=lr.length;o--;)lr[o].id===this.id&&lr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(ia):a.removeEventListener("change",ia)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),fx=(function(){function s(e){this.contexts=[],this.scope=e,Oe&&Oe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Xi(n)||(n={matches:n});var o=new Bp(0,r||this.scope),a=o.conditions={},l,c,h;Oe&&!o.selector&&(o.selector=Oe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Hi.matchMedia(n[c]),l&&(lr.indexOf(o)<0&&lr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(ia):l.addEventListener("change",ia),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),El={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Ip(i)})},timeline:function(t){return new En(t)},getTweensOf:function(t,e){return ze.getTweensOf(t,e)},getProperty:function(t,e,n,i){rn(t)&&(t=yi(t)[0]);var r=Cs(t||{}).get,o=n?xp:_p;return n==="native"&&(n=""),t&&(e?o((Jn[e]&&Jn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Jn[a]&&Jn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=yi(t),t.length>1){var i=t.map(function(h){return Cn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=Jn[e],a=Cs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Vr._pt=0,d.init(t,n?h+n:h,Vr,0,[t]),d.render(1,d),Vr._pt&&zu(1,Vr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Cn.to(t,ai((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return ze.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ar(t.ease,Qo.ease)),ip(Qo,t||{})},config:function(t){return ip(Qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Jn[a]&&!oi[a]&&jo(e+" effect requires "+a+" plugin.")}),lu[e]=function(a,l,c){return n(yi(a),ai(l||{},r),c)},o&&(En.prototype[e]=function(a,l,c){return this.add(lu[e](a,Xi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ge[t]=ar(e)},parseEase:function(t,e){return arguments.length?ar(t,e):ge},getById:function(t){return ze.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new En(t),i,r;for(n.smoothChildTiming=Kn(t.smoothChildTiming),ze.remove(n),n._dp=0,n._time=n._tTime=ze._time,i=ze._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&Wi(n,i,i._start-i._delay),i=r;return Wi(ze,n,0),n},context:function(t,e){return t?new Bp(t,e):Oe},matchMedia:function(t){return new fx(t)},matchMediaRefresh:function(){return lr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ia()},addEventListener:function(t,e){var n=vl[t]||(vl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=vl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:H_,wrapYoyo:W_,distribute:Tp,random:Ap,snap:Ep,normalize:G_,getUnit:_n,clamp:B_,splitColor:Lp,toArray:yi,selector:vu,mapRange:Rp,pipe:k_,unitize:V_,interpolate:X_,shuffle:wp},install:dp,effects:lu,ticker:$n,updateRoot:En.updateRoot,plugins:Jn,globalTimeline:ze,core:{PropTween:zn,globals:pp,Tween:Ye,Timeline:En,Animation:na,getCache:Cs,_removeLinkedListItem:Rl,reverting:function(){return gn},context:function(t){return t&&Oe&&(Oe.data.push(t),t._ctx=Oe),Oe},suppressOverwrites:function(t){return Mu=t}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return El[s]=Ye[s]});$n.add(En.updateRoot);Vr=El.to({},{duration:0});var dx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},px=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=dx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},du=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(rn(r)&&(l={},Bn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}px(a,r)}}}},Cn=El.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},du("roundProps",yu),du("modifiers"),du("snap",Ep))||El;Ye.version=En.version=Cn.version="3.15.1";fp=1;bu()&&Xr();var mx=ge.Power0,gx=ge.Power1,_x=ge.Power2,xx=ge.Power3,vx=ge.Power4,yx=ge.Linear,Sx=ge.Quad,Mx=ge.Cubic,bx=ge.Quart,wx=ge.Quint,Tx=ge.Strong,Ex=ge.Elastic,Ax=ge.Back,Cx=ge.SteppedEase,Rx=ge.Bounce,Px=ge.Sine,Ix=ge.Expo,Lx=ge.Circ;var zp,Is,Zr,qu,mr,Dx,kp,Yu,Nx=function(){return typeof window<"u"},cs={},pr=180/Math.PI,Jr=Math.PI/180,Yr=Math.atan2,Vp=1e8,Zu=/([A-Z])/g,Ox=/(left|right|width|margin|padding|x)/i,Ux=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Fx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Bx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},zx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},kx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Jp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},$p=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Vx=function(t,e,n){return t.style[e]=n},Gx=function(t,e,n){return t.style.setProperty(e,n)},Hx=function(t,e,n){return t._gsap[e]=n},Wx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Xx=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},qx=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},ke="transform",jn=ke+"Origin",Yx=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in cs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=qi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ls(i,a)}):this.tfm[t]=o.x?o[t]:ls(i,t),t===jn&&(this.tfm.zOrigin=o.zOrigin);else return qi.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(ke)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,e,"")),t=ke}(r||e)&&this.props.push(t,e,r[t])},Kp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Zx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Zu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Yu(),(!r||!r.isStart)&&!n[ke]&&(Kp(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Qp=function(t,e){var n={target:t,props:[],revert:Zx,save:Yx};return t._gsap||Cn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},jp,Hu=function(t,e){var n=Is.createElementNS?Is.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Is.createElement(t);return n&&n.style?n:Is.createElement(t)},li=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Zu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,$r(e)||e,1)||""},Gp="O,Moz,ms,Ms,Webkit".split(","),$r=function(t,e,n){var i=e||mr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Gp[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Gp[o]:"")+t},Wu=function(){Nx()&&window.document&&(zp=window,Is=zp.document,Zr=Is.documentElement,mr=Hu("div")||{style:{}},Dx=Hu("div"),ke=$r(ke),jn=ke+"Origin",mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jp=!!$r("perspective"),Yu=Cn.core.reverting,qu=1)},Hp=function(t){var e=t.ownerSVGElement,n=Hu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Zr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Zr.removeChild(n),r},Wp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},tm=function(t){var e,n;try{e=t.getBBox()}catch{e=Hp(t),n=1}return e&&(e.width||e.height)||n||(e=Hp(t)),e&&!e.width&&!e.x&&!e.y?{x:+Wp(t,["x","cx","x1"])||0,y:+Wp(t,["y","cy","y1"])||0,width:0,height:0}:e},em=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&tm(t))},Ds=function(t,e){if(e){var n=t.style,i;e in cs&&e!==jn&&(e=ke),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Zu,"-$1").toLowerCase())):n.removeAttribute(e)}},Ls=function(t,e,n,i,r,o){var a=new zn(t._pt,e,n,0,1,o?$p:Jp);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Xp={deg:1,rad:1,turn:1},Jx={grid:1,flex:1},Ns=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=mr.style,l=Ox.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",m,_,p,g;if(i===o||!r||Xp[i]||Xp[o])return r;if(o!=="px"&&!u&&(r=s(t,e,n,"px")),g=t.getCTM&&em(t),(f||o==="%")&&(cs[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Xe(f?r/m*d:r/100*m);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Is||!_.appendChild)&&(_=Is.body),p=_._gsap,p&&f&&p.width&&l&&p.time===$n.time&&!p.uncache)return Xe(r/p.width*d);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,m=t[h],v?t.style[e]=v:Ds(t,e)}else(f||o==="%")&&!Jx[li(_,"display")]&&(a.position=li(t,"position")),_===t&&(a.position="static"),_.appendChild(mr),m=mr[h],_.removeChild(mr),a.position="absolute";return l&&f&&(p=Cs(_),p.time=$n.time,p.width=_[h]),Xe(u?m*r/d:m&&r?d/m*r:0)},ls=function(t,e,n,i){var r;return qu||Wu(),e in qi&&e!=="transform"&&(e=qi[e],~e.indexOf(",")&&(e=e.split(",")[0])),cs[e]&&e!=="transform"?(r=aa(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Nl(li(t,jn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Dl[e]&&Dl[e](t,e,n)||li(t,e)||Pu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ns(t,e,r,n)+n:r},$x=function(t,e,n,i){if(!n||n==="none"){var r=$r(e,t,1),o=r&&li(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=li(t,"borderTopColor"))}var a=new zn(this._pt,t.style,e,0,1,Bu),l=0,c=0,h,d,u,f,m,_,p,g,v,E,y,S;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=li(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=li(t,e)||i,_?t.style[e]=_:Ds(t,e)),h=[n,i],Lu(h),n=h[0],i=h[1],u=n.match(cr)||[],S=i.match(cr)||[],S.length){for(;d=cr.exec(i);)p=d[0],v=i.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=hr(f,p)+y),g=parseFloat(p),E=p.substr((g+"").length),l=cr.lastIndex-E.length,E||(E=E||Qn.units[e]||y,l===i.length&&(i+=E,a.e+=E)),y!==E&&(f=Ns(t,e,_,E)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:g-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?$p:Jp;return Tu.test(i)&&(a.e=0),this._pt=a,a},qp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Kx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=qp[n]||n,e[1]=qp[i]||i,e.join(" ")},Qx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],cs[a]&&(l=1,a=a==="transformOrigin"?jn:ke),Ds(n,a);l&&(Ds(n,ke),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",aa(n,1),o.uncache=1,Kp(i)))}},Dl={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new zn(t._pt,e,n,0,0,Qx);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},oa=[1,0,0,1,0,0],nm={},im=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Yp=function(t){var e=li(t,ke);return im(e)?oa:e.substr(7).match(wu).map(Xe)},Ju=function(t,e){var n=t._gsap||Cs(t),i=t.style,r=Yp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?oa:r):(r===oa&&!t.offsetParent&&t!==Zr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Zr.appendChild(t)),r=Yp(t),l?i.display=l:Ds(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Zr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Xu=function(t,e,n,i,r,o){var a=t._gsap,l=r||Ju(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],E=e.split(" "),y=parseFloat(E[0])||0,S=parseFloat(E[1])||0,M,x,b,L;n?l!==oa&&(x=f*p-m*_)&&(b=y*(p/x)+S*(-_/x)+(_*v-p*g)/x,L=y*(-m/x)+S*(f/x)-(f*v-m*g)/x,y=b,S=L):(M=tm(t),y=M.x+(~E[0].indexOf("%")?y/100*M.width:y),S=M.y+(~(E[1]||E[0]).indexOf("%")?S/100*M.height:S)),i||i!==!1&&a.smooth?(g=y-c,v=S-h,a.xOffset=d+(g*f+v*_)-g,a.yOffset=u+(g*m+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[jn]="0px 0px",o&&(Ls(o,a,"xOrigin",c,y),Ls(o,a,"yOrigin",h,S),Ls(o,a,"xOffset",d,a.xOffset),Ls(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+S)},aa=function(t,e){var n=t._gsap||new Du(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=li(t,jn)||"0",h,d,u,f,m,_,p,g,v,E,y,S,M,x,b,L,A,I,C,O,D,B,V,U,J,X,R,Q,St,Dt,k,ht;return h=d=u=_=p=g=v=E=y=0,f=m=1,n.svg=!!(t.getCTM&&em(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ke]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ke]!=="none"?l[ke]:"")),i.scale=i.rotate=i.translate="none"),x=Ju(t,n.svg),n.svg&&(n.uncache?(J=t.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),Xu(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,x)),S=n.xOrigin||0,M=n.yOrigin||0,x!==oa&&(I=x[0],C=x[1],O=x[2],D=x[3],h=B=x[4],d=V=x[5],x.length===6?(f=Math.sqrt(I*I+C*C),m=Math.sqrt(D*D+O*O),_=I||C?Yr(C,I)*pr:0,v=O||D?Yr(O,D)*pr+_:0,v&&(m*=Math.abs(Math.cos(v*Jr))),n.svg&&(h-=S-(S*I+M*O),d-=M-(S*C+M*D))):(ht=x[6],Dt=x[7],R=x[8],Q=x[9],St=x[10],k=x[11],h=x[12],d=x[13],u=x[14],b=Yr(ht,St),p=b*pr,b&&(L=Math.cos(-b),A=Math.sin(-b),U=B*L+R*A,J=V*L+Q*A,X=ht*L+St*A,R=B*-A+R*L,Q=V*-A+Q*L,St=ht*-A+St*L,k=Dt*-A+k*L,B=U,V=J,ht=X),b=Yr(-O,St),g=b*pr,b&&(L=Math.cos(-b),A=Math.sin(-b),U=I*L-R*A,J=C*L-Q*A,X=O*L-St*A,k=D*A+k*L,I=U,C=J,O=X),b=Yr(C,I),_=b*pr,b&&(L=Math.cos(b),A=Math.sin(b),U=I*L+C*A,J=B*L+V*A,C=C*L-I*A,V=V*L-B*A,I=U,B=J),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=Xe(Math.sqrt(I*I+C*C+O*O)),m=Xe(Math.sqrt(V*V+ht*ht)),b=Yr(B,V),v=Math.abs(b)>2e-4?b*pr:0,y=k?1/(k<0?-k:k):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!im(li(t,ke)),U&&t.setAttribute("transform",U))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Xe(f),n.scaleY=Xe(m),n.rotation=Xe(_)+a,n.rotationX=Xe(p)+a,n.rotationY=Xe(g)+a,n.skewX=v+a,n.skewY=E+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[jn]=Nl(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?tv:jp?sm:jx,n.uncache=0,n},Nl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Vu=function(t,e,n){var i=_n(e);return Xe(parseFloat(e)+parseFloat(Ns(t,"x",n+"px",i)))+i},jx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,sm(t,e)},fr="0deg",ra="0px",dr=") ",sm=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,E=n.zOrigin,y="",S=g==="auto"&&t&&t!==1||g===!0;if(E&&(d!==fr||h!==fr)){var M=parseFloat(h)*Jr,x=Math.sin(M),b=Math.cos(M),L;M=parseFloat(d)*Jr,L=Math.cos(M),o=Vu(v,o,x*L*-E),a=Vu(v,a,-Math.sin(M)*-E),l=Vu(v,l,b*L*-E+E)}p!==ra&&(y+="perspective("+p+dr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(S||o!==ra||a!==ra||l!==ra)&&(y+=l!==ra||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+dr),c!==fr&&(y+="rotate("+c+dr),h!==fr&&(y+="rotateY("+h+dr),d!==fr&&(y+="rotateX("+d+dr),(u!==fr||f!==fr)&&(y+="skew("+u+", "+f+dr),(m!==1||_!==1)&&(y+="scale("+m+", "+_+dr),v.style[ke]=y||"translate(0, 0)"},tv=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,E=parseFloat(o),y=parseFloat(a),S,M,x,b,L;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Jr,c*=Jr,S=Math.cos(l)*d,M=Math.sin(l)*d,x=Math.sin(l-c)*-u,b=Math.cos(l-c)*u,c&&(h*=Jr,L=Math.tan(c-h),L=Math.sqrt(1+L*L),x*=L,b*=L,h&&(L=Math.tan(h),L=Math.sqrt(1+L*L),S*=L,M*=L)),S=Xe(S),M=Xe(M),x=Xe(x),b=Xe(b)):(S=d,b=u,M=x=0),(E&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(E=Ns(f,"x",o,"px"),y=Ns(f,"y",a,"px")),(m||_||p||g)&&(E=Xe(E+m-(m*S+_*x)+p),y=Xe(y+_-(m*M+_*b)+g)),(i||r)&&(L=f.getBBox(),E=Xe(E+i/100*L.width),y=Xe(y+r/100*L.height)),L="matrix("+S+","+M+","+x+","+b+","+E+","+y+")",f.setAttribute("transform",L),v&&(f.style[ke]=L)},ev=function(t,e,n,i,r){var o=360,a=rn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?pr:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Vp)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Vp)%o-~~(c/o)*o)),t._pt=u=new zn(t._pt,e,n,i,c,Fx),u.e=h,u.u="deg",t._props.push(n),u},Zp=function(t,e){for(var n in e)t[n]=e[n];return t},nv=function(t,e,n){var i=Zp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ke]=e,a=aa(n,1),Ds(n,ke),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ke],o[ke]=e,a=aa(n,1),o[ke]=c);for(l in cs)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=_n(c),m=_n(h),d=f!==m?Ns(n,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new zn(t._pt,a,l,d,u-d,Gu),t._pt.u=m||0,t._props.push(l));Zp(a,i)};Bn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Dl[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(m){return ls(a,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var $u={name:"css",register:Wu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,m,_,p,g,v,E,y,S,M,x,b,L;qu||Wu(),this.styles=this.styles||Qp(t),b=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Jn[_]&&Ou(_,e,n,i,t,r)))){if(f=typeof h,m=Dl[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=qr(h)),m)m(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",os.lastIndex=0,os.test(c)||(p=_n(c),g=_n(h),g?p!==g&&(c=Ns(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),b.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],rn(c)&&~c.indexOf("random(")&&(c=qr(c)),_n(c+"")||c==="auto"||(c+=Qn.units[_]||_n(ls(t,_))||""),(c+"").charAt(1)==="="&&(c=ls(t,_))):c=ls(t,_),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in qi&&(_==="autoAlpha"&&(u===1&&ls(t,"visibility")==="hidden"&&d&&(u=0),b.push("visibility",0,a.visibility),Ls(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=qi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in cs,E){if(this.styles.save(_),L=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=li(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=li(t,"perspective"),A?t.style.perspective=A:Ds(t,"perspective")}d=parseFloat(h)}if(y||(S=t._gsap,S.renderTransform&&!e.parseTransform||aa(t,e.parseTransform),M=e.smoothOrigin!==!1&&S.smooth,y=this._pt=new zn(this._pt,a,ke,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new zn(this._pt,S,"scaleY",S.scaleY,(v?hr(S.scaleY,v+d):d)-S.scaleY||0,Gu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(jn,0,a[jn]),h=Kx(h),S.svg?Xu(t,h,0,M,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==S.zOrigin&&Ls(this,S,"zOrigin",S.zOrigin,g),Ls(this,a,_,Nl(c),Nl(h)));continue}else if(_==="svgOrigin"){Xu(t,h,1,M,0,this);continue}else if(_ in nm){ev(this,S,_,u,v?hr(u,v+h):h);continue}else if(_==="smoothOrigin"){Ls(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){nv(this,h,t);continue}}else _ in a||(_=$r(_)||_);if(E||(d||d===0)&&(u||u===0)&&!Ux.test(h)&&_ in a)p=(c+"").substr((u+"").length),d||(d=0),g=_n(h)||(_ in Qn.units?Qn.units[_]:p),p!==g&&(u=Ns(t,_,c,g)),this._pt=new zn(this._pt,E?S:a,_,u,(v?hr(u,v+d):d)-u,!E&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?kx:Gu),this._pt.u=g||0,E&&L!==h?(this._pt.b=c,this._pt.e=L,this._pt.r=zx):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Bx);else if(_ in a)$x.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,r);else if(_!=="parseTransform"){Cl(_,h);continue}E||(_ in a?b.push(_,0,a[_]):typeof t[_]=="function"?b.push(_,2,t[_]()):b.push(_,1,c||t[_])),o.push(_)}}x&&ku(this)},render:function(t,e){if(e.tween._time||!Yu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ls,aliases:qi,getSetter:function(t,e,n){var i=qi[e];return i&&i.indexOf(",")<0&&(e=i),e in cs&&e!==jn&&(t._gsap.x||ls(t,"x"))?n&&kp===n?e==="scale"?Wx:Hx:(kp=n||{})&&(e==="scale"?Xx:qx):t.style&&!Al(t.style[e])?Vx:~e.indexOf("-")?Gx:Ll(t,e)},core:{_removeProperty:Ds,_getMatrix:Ju}};Cn.utils.checkPrefix=$r;Cn.core.getStyleSaver=Qp;(function(s,t,e,n){var i=Bn(s+","+t+","+e,function(r){cs[r]=1});Bn(t,function(r){Qn.units[r]="deg",nm[r]=1}),qi[i[13]]=s+","+t,Bn(n,function(r){var o=r.split(":");qi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Qn.units[s]="px"});Cn.registerPlugin($u);var ie=Cn.registerPlugin($u)||Cn,I1=ie.core.Tween;function rm(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function iv(s,t,e){return t&&rm(s.prototype,t),e&&rm(s,e),s}var xn,Fl,sv,ti,Os,Us,Qr,am,gr,jr,lm,hs,Pi,cm,hm=function(){return xn||typeof window<"u"&&(xn=window.gsap)&&xn.registerPlugin&&xn},um=1,Kr=[],re=[],Ii=[],ca=Date.now,Ku=function(t,e){return e},rv=function(){var t=jr.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,Ii),re=n,Ii=i,Ku=function(o,a){return e[o](a)}},fs=function(t,e){return~Ii.indexOf(t)&&Ii[Ii.indexOf(t)+1][e]},ha=function(t){return!!~lm.indexOf(t)},Vn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},kn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ol="scrollLeft",Ul="scrollTop",Qu=function(){return hs&&hs.isPressed||re.cache++},Bl=function(t,e){var n=function i(r){if(r||r===0){um&&ti.history.scrollRestoration!=="manual"&&(ti.history.scrollRestoration="manual");var o=hs&&hs.isPressed;r=i.v=Math.round(r)||(hs&&hs.iOS?1:0),t(r),i.cacheID=re.cache,o&&Ku("ss",r)}else(e||re.cache!==i.cacheID||Ku("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Rn={s:Ol,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Bl(function(s){return arguments.length?ti.scrollTo(s,Ke.sc()):ti.pageXOffset||Os[Ol]||Us[Ol]||Qr[Ol]||0})},Ke={s:Ul,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:Bl(function(s){return arguments.length?ti.scrollTo(Rn.sc(),s):ti.pageYOffset||Os[Ul]||Us[Ul]||Qr[Ul]||0})},Gn=function(t,e){return(e&&e._ctx&&e._ctx.selector||xn.utils.toArray)(t)[0]||(typeof t=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ov=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},us=function(t,e){var n=e.s,i=e.sc;ha(t)&&(t=Os.scrollingElement||Us);var r=re.indexOf(t),o=i===Ke.sc?1:2;!~r&&(r=re.push(t)-1),re[r+o]||Vn(t,"scroll",Qu);var a=re[r+o],l=a||(re[r+o]=Bl(fs(t,n),!0)||(ha(t)?i:Bl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=xn.getProperty(t,"scrollBehavior")==="smooth"),l},zl=function(t,e,n){var i=t,r=t,o=ca(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=ca();_||p-o>l?(r=i,i=m,a=o,o=p):n?i+=m:i=r+(m-r)/(p-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},u=function(m){var _=a,p=r,g=ca();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},la=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},om=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},fm=function(){jr=xn.core.globals().ScrollTrigger,jr&&jr.core&&rv()},dm=function(t){return xn=t||hm(),!Fl&&xn&&typeof document<"u"&&document.body&&(ti=window,Os=document,Us=Os.documentElement,Qr=Os.body,lm=[ti,Os,Us,Qr],sv=xn.utils.clamp,cm=xn.core.context||function(){},gr="onpointerenter"in Qr?"pointer":"mouse",am=qe.isTouch=ti.matchMedia&&ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Pi=qe.eventTypes=("ontouchstart"in Us?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Us?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return um=0},500),Fl=1),jr||fm(),Fl};Rn.op=Ke;re.cache=0;var qe=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Fl||dm(xn)||console.warn("Please gsap.registerPlugin(Observer)"),jr||fm();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,E=n.onPress,y=n.onRelease,S=n.onRight,M=n.onLeft,x=n.onUp,b=n.onDown,L=n.onChangeX,A=n.onChangeY,I=n.onChange,C=n.onToggleX,O=n.onToggleY,D=n.onHover,B=n.onHoverEnd,V=n.onMove,U=n.ignoreCheck,J=n.isNormalizer,X=n.onGestureStart,R=n.onGestureEnd,Q=n.onWheel,St=n.onEnable,Dt=n.onDisable,k=n.onClick,ht=n.scrollSpeed,Et=n.capture,It=n.allowClicks,_t=n.lockAxis,W=n.onLockAxis;this.target=a=Gn(a)||Us,this.vars=n,f&&(f=xn.utils.toArray(f)),i=i||1e-9,r=r||0,m=m||1,ht=ht||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ti.getComputedStyle(Qr).lineHeight)||22);var lt,tt,ut,ct,H,ft,Mt,G=this,xt=0,Jt=0,Kt=n.passive||!h&&n.passive!==!1,qt=us(a,Rn),te=us(a,Ke),xe=qt(),z=te(),Xt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Pi[0]==="pointerdown",Yt=ha(a),Ht=a.ownerDocument||Os,vt=[0,0,0],he=[0,0,0],Ft=0,Wt=function(){return Ft=ca()},P=function(Tt,at){return(G.event=Tt)&&f&&ov(Tt.target,f)||at&&Xt&&Tt.pointerType!=="touch"||U&&U(Tt,at)},w=function(){G._vx.reset(),G._vy.reset(),tt.pause(),d&&d(G)},q=function(){var Tt=G.deltaX=om(vt),at=G.deltaY=om(he),st=Math.abs(Tt)>=i,Ct=Math.abs(at)>=i;I&&(st||Ct)&&I(G,Tt,at,vt,he),st&&(S&&G.deltaX>0&&S(G),M&&G.deltaX<0&&M(G),L&&L(G),C&&G.deltaX<0!=xt<0&&C(G),xt=G.deltaX,vt[0]=vt[1]=vt[2]=0),Ct&&(b&&G.deltaY>0&&b(G),x&&G.deltaY<0&&x(G),A&&A(G),O&&G.deltaY<0!=Jt<0&&O(G),Jt=G.deltaY,he[0]=he[1]=he[2]=0),(ct||ut)&&(V&&V(G),ut&&(p&&ut===1&&p(G),v&&v(G),ut=0),ct=!1),ft&&!(ft=!1)&&W&&W(G),H&&(Q(G),H=!1),lt=0},dt=function(Tt,at,st){vt[st]+=Tt,he[st]+=at,G._vx.update(Tt),G._vy.update(at),c?lt||(lt=requestAnimationFrame(q)):q()},ot=function(Tt,at){_t&&!Mt&&(G.axis=Mt=Math.abs(Tt)>Math.abs(at)?"x":"y",ft=!0),Mt!=="y"&&(vt[2]+=Tt,G._vx.update(Tt,!0)),Mt!=="x"&&(he[2]+=at,G._vy.update(at,!0)),c?lt||(lt=requestAnimationFrame(q)):q()},mt=function(Tt){if(!P(Tt,1)){Tt=la(Tt,h);var at=Tt.clientX,st=Tt.clientY,Ct=at-G.x,rt=st-G.y,Nt=G.isDragging;G.x=at,G.y=st,(Nt||(Ct||rt)&&(Math.abs(G.startX-at)>=r||Math.abs(G.startY-st)>=r))&&(ut||(ut=Nt?2:1),Nt||(G.isDragging=!0),ot(Ct,rt))}},At=G.onPress=function(pt){P(pt,1)||pt&&pt.button||(G.axis=Mt=null,tt.pause(),G.isPressed=!0,pt=la(pt),xt=Jt=0,G.startX=G.x=pt.clientX,G.startY=G.y=pt.clientY,G._vx.reset(),G._vy.reset(),Vn(J?a:Ht,Pi[1],mt,Kt,!0),G.deltaX=G.deltaY=0,E&&E(G))},Z=G.onRelease=function(pt){if(!P(pt,1)){kn(J?a:Ht,Pi[1],mt,!0);var Tt=!isNaN(G.y-G.startY),at=G.isDragging,st=at&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ct=la(pt);!st&&Tt&&(G._vx.reset(),G._vy.reset(),h&&It&&xn.delayedCall(.08,function(){if(ca()-Ft>300&&!pt.defaultPrevented){if(pt.target.click)pt.target.click();else if(Ht.createEvent){var rt=Ht.createEvent("MouseEvents");rt.initMouseEvent("click",!0,!0,ti,1,Ct.screenX,Ct.screenY,Ct.clientX,Ct.clientY,!1,!1,!1,!1,0,null),pt.target.dispatchEvent(rt)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,d&&at&&!J&&tt.restart(!0),ut&&q(),g&&at&&g(G),y&&y(G,st)}},it=function(Tt){return Tt.touches&&Tt.touches.length>1&&(G.isGesturing=!0)&&X(Tt,G.isDragging)},yt=function(){return(G.isGesturing=!1)||R(G)},N=function(Tt){if(!P(Tt)){var at=qt(),st=te();dt((at-xe)*ht,(st-z)*ht,1),xe=at,z=st,d&&tt.restart(!0)}},nt=function(Tt){if(!P(Tt)){Tt=la(Tt,h),Q&&(H=!0);var at=(Tt.deltaMode===1?l:Tt.deltaMode===2?ti.innerHeight:1)*m;dt(Tt.deltaX*at,Tt.deltaY*at,0),d&&!J&&tt.restart(!0)}},et=function(Tt){if(!P(Tt)){var at=Tt.clientX,st=Tt.clientY,Ct=at-G.x,rt=st-G.y;G.x=at,G.y=st,ct=!0,d&&tt.restart(!0),(Ct||rt)&&ot(Ct,rt)}},bt=function(Tt){G.event=Tt,D(G)},gt=function(Tt){G.event=Tt,B(G)},wt=function(Tt){return P(Tt)||la(Tt,h)&&k(G)};tt=G._dc=xn.delayedCall(u||.25,w).pause(),G.deltaX=G.deltaY=0,G._vx=zl(0,50,!0),G._vy=zl(0,50,!0),G.scrollX=qt,G.scrollY=te,G.isDragging=G.isGesturing=G.isPressed=!1,cm(this),G.enable=function(pt){return G.isEnabled||(Vn(Yt?Ht:a,"scroll",Qu),o.indexOf("scroll")>=0&&Vn(Yt?Ht:a,"scroll",N,Kt,Et),o.indexOf("wheel")>=0&&Vn(a,"wheel",nt,Kt,Et),(o.indexOf("touch")>=0&&am||o.indexOf("pointer")>=0)&&(Vn(a,Pi[0],At,Kt,Et),Vn(Ht,Pi[2],Z),Vn(Ht,Pi[3],Z),It&&Vn(a,"click",Wt,!0,!0),k&&Vn(a,"click",wt),X&&Vn(Ht,"gesturestart",it),R&&Vn(Ht,"gestureend",yt),D&&Vn(a,gr+"enter",bt),B&&Vn(a,gr+"leave",gt),V&&Vn(a,gr+"move",et)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=ct=ut=!1,G._vx.reset(),G._vy.reset(),xe=qt(),z=te(),pt&&pt.type&&At(pt),St&&St(G)),G},G.disable=function(){G.isEnabled&&(Kr.filter(function(pt){return pt!==G&&ha(pt.target)}).length||kn(Yt?Ht:a,"scroll",Qu),G.isPressed&&(G._vx.reset(),G._vy.reset(),kn(J?a:Ht,Pi[1],mt,!0)),kn(Yt?Ht:a,"scroll",N,Et),kn(a,"wheel",nt,Et),kn(a,Pi[0],At,Et),kn(Ht,Pi[2],Z),kn(Ht,Pi[3],Z),kn(a,"click",Wt,!0),kn(a,"click",wt),kn(Ht,"gesturestart",it),kn(Ht,"gestureend",yt),kn(a,gr+"enter",bt),kn(a,gr+"leave",gt),kn(a,gr+"move",et),G.isEnabled=G.isPressed=G.isDragging=!1,Dt&&Dt(G))},G.kill=G.revert=function(){G.disable();var pt=Kr.indexOf(G);pt>=0&&Kr.splice(pt,1),hs===G&&(hs=0)},Kr.push(G),J&&ha(a)&&(hs=G),G.enable(_)},iv(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();qe.version="3.15.1";qe.create=function(s){return new qe(s)};qe.register=dm;qe.getAll=function(){return Kr.slice()};qe.getById=function(s){return Kr.filter(function(t){return t.vars.id===s})[0]};hm()&&xn.registerPlugin(qe);var Ut,io,le,we,ui,Me,df,ec,ba,_a,fa,kl,Pn,sc,of,Wn,pm,mm,so,Im,ju,Lm,Hn,af,Dm,Nm,Fs,lf,pf,ro,mf,Bs,cf,tf,Vl=1,In=Date.now,ef=In(),bi=0,da=0,gm=function(t,e,n){var i=hi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},_m=function(t,e){return e&&(!hi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},av=function s(){return da&&requestAnimationFrame(s)},xm=function(){return sc=1},vm=function(){return sc=0},Yi=function(t){return t},pa=function(t){return Math.round(t*1e5)/1e5||0},Om=function(){return typeof window<"u"},Um=function(){return Ut||Om()&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},Mr=function(t){return!!~df.indexOf(t)},Fm=function(t){return(t==="Height"?mf:le["inner"+t])||ui["client"+t]||Me["client"+t]},Bm=function(t){return fs(t,"getBoundingClientRect")||(Mr(t)?function(){return tc.width=le.innerWidth,tc.height=mf,tc}:function(){return ds(t)})},lv=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=fs(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Fm(r):t["client"+r])||0}},cv=function(t,e){return!e||~Ii.indexOf(t)?Bm(t):function(){return tc}},Zi=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=fs(t,n))?o()-Bm(t)()[r]:Mr(t)?(ui[n]||Me[n])-Fm(i):t[n]-t["offset"+i])},Gl=function(t,e){for(var n=0;n<so.length;n+=3)(!e||~e.indexOf(so[n+1]))&&t(so[n],so[n+1],so[n+2])},hi=function(t){return typeof t=="string"},Ln=function(t){return typeof t=="function"},ma=function(t){return typeof t=="number"},_r=function(t){return typeof t=="object"},ua=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},to=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},eo=Math.abs,zm="left",km="top",gf="right",_f="bottom",vr="width",yr="height",xa="Right",va="Left",ya="Top",Sa="Bottom",Qe="padding",Si="margin",ao="Width",xf="Height",on="px",Mi=function(t){return le.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},hv=function(t){var e=Mi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},ym=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ds=function(t,e){var n=e&&Mi(t)[of]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ut.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},nc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Vm=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},uv=function(t){return function(e){return Ut.utils.snap(Vm(t),e)}},vf=function(t){var e=Ut.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},fv=function(t){return function(e,n){return vf(Vm(t))(e,n.direction)}},Hl=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},fn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},un=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Wl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Sm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xl={toggleActions:"play",anticipatePin:0},ic={top:0,left:0,center:.5,bottom:1,right:1},$l=function(t,e){if(hi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in ic?ic[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ql=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,m=we.createElement("div"),_=Mr(n)||fs(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?Me:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,E=v?c:h,y="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===Ke?gf:_f)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],Kl(m,0,i,v),m},Kl=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+ao]=1,r["border"+a+ao]=0,r[n.p]=e+"px",Ut.set(t,r)},ae=[],hf={},wa,Mm=function(){return In()-bi>34&&(wa||(wa=requestAnimationFrame(ps)))},no=function(){(!Hn||!Hn.isPressed||Hn.startX>Me.clientWidth)&&(re.cache++,Hn?wa||(wa=requestAnimationFrame(ps)):ps(),bi||wr("scrollStart"),bi=In())},nf=function(){Nm=le.innerWidth,Dm=le.innerHeight},ga=function(t){re.cache++,(t===!0||!Pn&&!Lm&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!af||Nm!==le.innerWidth||Math.abs(le.innerHeight-Dm)>le.innerHeight*.25))&&ec.restart(!0)},br={},dv=[],Gm=function s(){return un(Zt,"scrollEnd",s)||xr(!0)},wr=function(t){return br[t]&&br[t].map(function(e){return e()})||dv},ci=[],Hm=function(t){for(var e=0;e<ci.length;e+=5)(!t||ci[e+4]&&ci[e+4].query===t)&&(ci[e].style.cssText=ci[e+1],ci[e].getBBox&&ci[e].setAttribute("transform",ci[e+2]||""),ci[e+3].uncache=1)},Wm=function(){re.cache++,re.forEach(function(t){return Ln(t)&&(t.rec=t())})},yf=function(t,e){var n;for(Wn=0;Wn<ae.length;Wn++)n=ae[Wn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Bs=!0,e&&Hm(e),e||wr("revert")},Xm=function(t,e){re.cache++,(e||!Xn)&&re.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),hi(t)&&(pf=t,le.history.scrollRestoration!==t&&(le.history.scrollRestoration=t))},Xn,Sr=0,bm,pv=function(){if(bm!==Sr){var t=bm=Sr;requestAnimationFrame(function(){return t===Sr&&xr(!0)})}},qm=function(){Me.appendChild(ro),mf=!Hn&&ro.offsetHeight||le.innerHeight,Me.removeChild(ro)},wm=function(t){return ba(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},xr=function(t,e){if(ui=we.documentElement,Me=we.body,df=[le,we,ui,Me],bi&&!t&&!Bs){fn(Zt,"scrollEnd",Gm);return}qm(),Xn=Zt.isRefreshing=!0,Bs||Wm();var n=wr("refreshInit");Im&&Zt.sort(),e||yf(),re.forEach(function(i){Ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ae.slice(0).forEach(function(i){return i.refresh()}),Bs=!1,ae.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),cf=1,wm(!0),ae.forEach(function(i){var r=Zi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),wm(!1),cf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){Ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Xm(pf,1),ec.pause(),Sr++,Xn=2,ps(2),ae.forEach(function(i){return Ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Xn=Zt.isRefreshing=!1,wr("refresh")},uf=0,Ql=1,Ma,ps=function(t){if(t===2||!Xn&&!Bs){Zt.isUpdating=!0,Ma&&Ma.update(0);var e=ae.length,n=In(),i=n-ef>=50,r=e&&ae[0].scroll();if(Ql=uf>r?-1:1,Xn||(uf=r),i&&(bi&&!sc&&n-bi>200&&(bi=0,wr("scrollEnd")),fa=ef,ef=n),Ql<0){for(Wn=e;Wn-- >0;)ae[Wn]&&ae[Wn].update(0,i);Ql=1}else for(Wn=0;Wn<e;Wn++)ae[Wn]&&ae[Wn].update(0,i);Zt.isUpdating=!1}wa=0},ff=[zm,km,_f,gf,Si+Sa,Si+xa,Si+ya,Si+va,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],jl=ff.concat([vr,yr,"boxSizing","max"+ao,"max"+xf,"position",Si,Qe,Qe+ya,Qe+xa,Qe+Sa,Qe+va]),mv=function(t,e,n){oo(n);var i=t._gsap;if(i.spacerIsNative)oo(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},sf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=ff.length,o=e.style,a=t.style,l;r--;)l=ff[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[_f]=a[gf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[vr]=nc(t,Rn)+on,o[yr]=nc(t,Ke)+on,o[Qe]=a[Si]=a[km]=a[zm]="0",oo(i),a[vr]=a["max"+ao]=n[vr],a[yr]=a["max"+xf]=n[yr],a[Qe]=n[Qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},gv=/([A-Z])/g,oo=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Ut.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(gv,"-$1").toLowerCase())}},Yl=function(t){for(var e=jl.length,n=t.style,i=[],r=0;r<e;r++)i.push(jl[r],n[jl[r]]);return i.t=t,i},_v=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},tc={left:0,top:0},Tm=function(t,e,n,i,r,o,a,l,c,h,d,u,f,m){Ln(t)&&(t=t(l)),hi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?$l("0"+t.substr(3),n):0));var _=f?f.time():0,p,g,v;if(f&&f.seek(0),isNaN(t)||(t=+t),ma(t))f&&(t=Ut.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&Kl(a,n,i,!0);else{Ln(e)&&(e=e(l));var E=(t||"0").split(" "),y,S,M,x;v=Gn(e,l)||Me,y=ds(v)||{},(!y||!y.left&&!y.top)&&Mi(v).display==="none"&&(x=v.style.display,v.style.display="block",y=ds(v),x?v.style.display=x:v.style.removeProperty("display")),S=$l(E[0],y[i.d]),M=$l(E[1]||"0",n),t=y[i.p]-c[i.p]-h+S+r-M,a&&Kl(a,M,i,n-M<20||a._isStart&&M>20),n-=n-M}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var b=t+n,L=o._isStart;p="scroll"+i.d2,Kl(o,b,i,L&&b>20||!L&&(d?Math.max(Me[p],ui[p]):o.parentNode[p])<=b+1),d&&(c=ds(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+on))}return f&&v&&(p=ds(v),f.seek(u),g=ds(v),f._caScrollDist=p[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},xv=/(webkit|moz|length|cssText|inset)/i,Em=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===Me){t._stOrig=r.cssText,a=Mi(t);for(o in a)!+o&&!xv.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Ut.core.getCache(t).uncache=1,e.appendChild(t)}},Ym=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Zl=function(t,e,n){var i={};i[e.p]="+="+n,Ut.set(t,i)},Am=function(t,e){var n=us(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,m={};c=c||n();var _=Ym(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){re.cache++,o.tween&&ps()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ut.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},fn(t,"wheel",n.wheelHandler),Zt.isTouch&&fn(t,"touchmove",n.wheelHandler),r},Zt=(function(){function s(e,n){io||s.register(Ut)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),lf(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!da){this.update=this.refresh=this.kill=Yi;return}n=ym(hi(n)||ma(n)||n.nodeType?{trigger:n}:n,Xl);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,E=r.once,y=r.snap,S=r.pinReparent,M=r.pinSpacer,x=r.containerAnimation,b=r.fastScrollEnd,L=r.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:Ke,I=!d&&d!==0,C=Gn(n.scroller||le),O=Ut.core.getCache(C),D=Mr(C),B=("pinType"in n?n.pinType:fs(C,"pinType")||D&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=I&&n.toggleActions.split(" "),J="markers"in n?n.markers:Xl.markers,X=D?0:parseFloat(Mi(C)["border"+A.p2+ao])||0,R=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(R)},St=lv(C,D,A),Dt=cv(C,D),k=0,ht=0,Et=0,It=us(C,A),_t,W,lt,tt,ut,ct,H,ft,Mt,G,xt,Jt,Kt,qt,te,xe,z,Xt,Yt,Ht,vt,he,Ft,Wt,P,w,q,dt,ot,mt,At,Z,it,yt,N,nt,et,bt,gt;if(R._startClamp=R._endClamp=!1,R._dir=A,p*=45,R.scroller=C,R.scroll=x?x.time.bind(x):It,tt=It(),Bs&&It.rec==null&&(It.rec=tt),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Im=1,n.refreshPriority===-9999&&(Ma=R)),O.tweenScroll=O.tweenScroll||{top:Am(C,Ke),left:Am(C,Rn)},R.tweenTo=_t=O.tweenScroll[A.p],R.scrubDuration=function(st){it=ma(st)&&st,it?Z?Z.duration(st):Z=Ut.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:it,paused:!0,onComplete:function(){return g&&g(R)}}):(Z&&Z.progress(1).kill(),Z=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),mt=0,l||(l=i.vars.id)),y&&((!_r(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Me.style&&Ut.set(D?[Me,ui]:C,{scrollBehavior:"auto"}),re.forEach(function(st){return Ln(st)&&st.target===(D?we.scrollingElement||ui:C)&&(st.smooth=!1)}),lt=Ln(y.snapTo)?y.snapTo:y.snapTo==="labels"?uv(i):y.snapTo==="labelsDirectional"?fv(i):y.directional!==!1?function(st,Ct){return vf(y.snapTo)(st,In()-ht<500?0:Ct.direction)}:Ut.utils.snap(y.snapTo),yt=y.duration||{min:.1,max:2},yt=_r(yt)?_a(yt.min,yt.max):_a(yt,yt),N=Ut.delayedCall(y.delay||it/2||.1,function(){var st=It(),Ct=In()-ht<500,rt=_t.tween;if((Ct||Math.abs(R.getVelocity())<10)&&!rt&&!sc&&k!==st){var Nt=(st-ct)/qt,ue=i&&!I?i.totalProgress():Nt,ee=Ct?0:(ue-At)/(In()-fa)*1e3||0,De=Ut.utils.clamp(-Nt,1-Nt,eo(ee/2)*ee/.185),Ze=Nt+(y.inertia===!1?0:De),Ne,Ee,Se=y,en=Se.onStart,Ae=Se.onInterrupt,bn=Se.onComplete;if(Ne=lt(Ze,R),ma(Ne)||(Ne=Ze),Ee=Math.max(0,Math.round(ct+Ne*qt)),st<=H&&st>=ct&&Ee!==st){if(rt&&!rt._initted&&rt.data<=eo(Ee-st))return;y.inertia===!1&&(De=Ne-Nt),_t(Ee,{duration:yt(eo(Math.max(eo(Ze-ue),eo(Ne-ue))*.185/ee/.05||0)),ease:y.ease||"power3",data:eo(Ee-st),onInterrupt:function(){return N.restart(!0)&&Ae&&to(R,Ae)},onComplete:function(){R.update(),k=It(),i&&!I&&(Z?Z.resetTo("totalProgress",Ne,i._tTime/i._tDur):i.progress(Ne)),mt=At=i&&!I?i.totalProgress():R.progress,v&&v(R),bn&&to(R,bn)}},st,De*qt,Ee-st-De*qt),en&&to(R,en,_t.tween)}}else R.isActive&&k!==st&&N.restart(!0)}).pause()),l&&(hf[l]=R),u=R.trigger=Gn(u||f!==!0&&f),gt=u&&u._gsap&&u._gsap.stRevert,gt&&(gt=gt(R)),f=f===!0?u:Gn(f),hi(a)&&(a={targets:u,className:a}),f&&(m===!1||m===Si||(m=!m&&f.parentNode&&f.parentNode.style&&Mi(f.parentNode).display==="flex"?!1:Qe),R.pin=f,W=Ut.core.getCache(f),W.spacer?te=W.pinState:(M&&(M=Gn(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),W.spacerIsNative=!!M,M&&(W.spacerState=Yl(M))),W.spacer=Xt=M||we.createElement("div"),Xt.classList.add("pin-spacer"),l&&Xt.classList.add("pin-spacer-"+l),W.pinState=te=Yl(f)),n.force3D!==!1&&Ut.set(f,{force3D:!0}),R.spacer=Xt=W.spacer,ot=Mi(f),Wt=ot[m+A.os2],Ht=Ut.getProperty(f),vt=Ut.quickSetter(f,A.a,on),sf(f,Xt,ot),z=Yl(f)),J){Jt=_r(J)?ym(J,Sm):Sm,G=ql("scroller-start",l,C,A,Jt,0),xt=ql("scroller-end",l,C,A,Jt,0,G),Yt=G["offset"+A.op.d2];var wt=Gn(fs(C,"content")||C);ft=this.markerStart=ql("start",l,wt,A,Jt,Yt,0,x),Mt=this.markerEnd=ql("end",l,wt,A,Jt,Yt,0,x),x&&(bt=Ut.quickSetter([ft,Mt],A.a,on)),!B&&!(Ii.length&&fs(C,"fixedMarkers")===!0)&&(hv(D?Me:C),Ut.set([G,xt],{force3D:!0}),w=Ut.quickSetter(G,A.a,on),dt=Ut.quickSetter(xt,A.a,on))}if(x){var pt=x.vars.onUpdate,Tt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),pt&&pt.apply(x,Tt||[])})}if(R.previous=function(){return ae[ae.indexOf(R)-1]},R.next=function(){return ae[ae.indexOf(R)+1]},R.revert=function(st,Ct){if(!Ct)return R.kill(!0);var rt=st!==!1||!R.enabled,Nt=Pn;rt!==R.isReverted&&(rt&&(nt=Math.max(It(),R.scroll.rec||0),Et=R.progress,et=i&&i.progress()),ft&&[ft,Mt,G,xt].forEach(function(ue){return ue.style.display=rt?"none":"block"}),rt&&(Pn=R,R.update(rt)),f&&(!S||!R.isActive)&&(rt?mv(f,Xt,te):sf(f,Xt,Mi(f),P)),rt||R.update(rt),Pn=Nt,R.isReverted=rt)},R.refresh=function(st,Ct,rt,Nt){if(!((Pn||!R.enabled)&&!Ct)){if(f&&st&&bi){fn(s,"scrollEnd",Gm);return}!Xn&&Q&&Q(R),Pn=R,_t.tween&&!rt&&(_t.tween.kill(),_t.tween=0),Z&&Z.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Y){return Y.vars.immediateRender&&Y.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var ue=St(),ee=Dt(),De=x?x.duration():Zi(C,A),Ze=qt<=.01||!qt,Ne=0,Ee=Nt||0,Se=_r(rt)?rt.end:n.end,en=n.endTrigger||u,Ae=_r(rt)?rt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),bn=R.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,R),ii=u&&Math.max(0,ae.indexOf(R))||0,Ge=ii,Je,nn,si,kr,sn,He,_i,qo,pl,ws,T,F,j;for(J&&_r(rt)&&(F=Ut.getProperty(G,A.p),j=Ut.getProperty(xt,A.p));Ge-- >0;)He=ae[Ge],He.end||He.refresh(0,1)||(Pn=R),_i=He.pin,_i&&(_i===u||_i===f||_i===bn)&&!He.isReverted&&(ws||(ws=[]),ws.unshift(He),He.revert(!0,!0)),He!==ae[Ge]&&(ii--,Ge--);for(Ln(Ae)&&(Ae=Ae(R)),Ae=gm(Ae,"start",R),ct=Tm(Ae,u,ue,A,It(),ft,G,R,ee,X,B,De,x,R._startClamp&&"_startClamp")||(f?-.001:0),Ln(Se)&&(Se=Se(R)),hi(Se)&&!Se.indexOf("+=")&&(~Se.indexOf(" ")?Se=(hi(Ae)?Ae.split(" ")[0]:"")+Se:(Ne=$l(Se.substr(2),ue),Se=hi(Ae)?Ae:(x?Ut.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,ct):ct)+Ne,en=u)),Se=gm(Se,"end",R),H=Math.max(ct,Tm(Se||(en?"100% 0":De),en,ue,A,It()+Ne,Mt,xt,R,ee,X,B,De,x,R._endClamp&&"_endClamp"))||-.001,Ne=0,Ge=ii;Ge--;)He=ae[Ge]||{},_i=He.pin,_i&&He.start-He._pinPush<=ct&&!x&&He.end>0&&(Je=He.end-(R._startClamp?Math.max(0,He.start):He.start),(_i===u&&He.start-He._pinPush<ct||_i===bn)&&isNaN(Ae)&&(Ne+=Je*(1-He.progress)),_i===f&&(Ee+=Je));if(ct+=Ne,H+=Ne,R._startClamp&&(R._startClamp+=Ne),R._endClamp&&!Xn&&(R._endClamp=H||-.001,H=Math.min(H,Zi(C,A))),qt=H-ct||(ct-=.01)&&.001,Ze&&(Et=Ut.utils.clamp(0,1,Ut.utils.normalize(ct,H,nt))),R._pinPush=Ee,ft&&Ne&&(Je={},Je[A.a]="+="+Ne,bn&&(Je[A.p]="-="+It()),Ut.set([ft,Mt],Je)),f&&!(cf&&R.end>=Zi(C,A)))Je=Mi(f),kr=A===Ke,si=It(),he=parseFloat(Ht(A.a))+Ee,!De&&H>1&&(T=(D?we.scrollingElement||ui:C).style,T={style:T,value:T["overflow"+A.a.toUpperCase()]},D&&Mi(Me)["overflow"+A.a.toUpperCase()]!=="scroll"&&(T.style["overflow"+A.a.toUpperCase()]="scroll")),sf(f,Xt,Je),z=Yl(f),nn=ds(f,!0),qo=B&&us(C,kr?Rn:Ke)(),m?(P=[m+A.os2,qt+Ee+on],P.t=Xt,Ge=m===Qe?nc(f,A)+qt+Ee:0,Ge&&(P.push(A.d,Ge+on),Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Ge+on)),oo(P),bn&&ae.forEach(function(Y){Y.pin===bn&&Y.vars.pinSpacing!==!1&&(Y._subPinOffset=!0)}),B&&It(nt)):(Ge=nc(f,A),Ge&&Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Ge+on)),B&&(sn={top:nn.top+(kr?si-ct:qo)+on,left:nn.left+(kr?qo:si-ct)+on,boxSizing:"border-box",position:"fixed"},sn[vr]=sn["max"+ao]=Math.ceil(nn.width)+on,sn[yr]=sn["max"+xf]=Math.ceil(nn.height)+on,sn[Si]=sn[Si+ya]=sn[Si+xa]=sn[Si+Sa]=sn[Si+va]="0",sn[Qe]=Je[Qe],sn[Qe+ya]=Je[Qe+ya],sn[Qe+xa]=Je[Qe+xa],sn[Qe+Sa]=Je[Qe+Sa],sn[Qe+va]=Je[Qe+va],xe=_v(te,sn,S),Xn&&It(0)),i?(pl=i._initted,ju(1),i.render(i.duration(),!0,!0),Ft=Ht(A.a)-he+qt+Ee,q=Math.abs(qt-Ft)>1,B&&q&&xe.splice(xe.length-2,2),i.render(0,!0,!0),pl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ju(0)):Ft=qt,T&&(T.value?T.style["overflow"+A.a.toUpperCase()]=T.value:T.style.removeProperty("overflow-"+A.a));else if(u&&It()&&!x)for(nn=u.parentNode;nn&&nn!==Me;)nn._pinOffset&&(ct-=nn._pinOffset,H-=nn._pinOffset),nn=nn.parentNode;ws&&ws.forEach(function(Y){return Y.revert(!1,!0)}),R.start=ct,R.end=H,tt=ut=Xn?nt:It(),!x&&!Xn&&!Bs&&(tt<nt&&It(nt),R.scroll.rec=0),R.revert(!1,!0),ht=In(),N&&(k=-1,N.restart(!0)),Pn=0,i&&I&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(Ze||Et!==R.progress||x||_||i&&!i._initted)&&(i&&!I&&(i._initted||Et||i.vars.immediateRender!==!1)&&i.totalProgress(x&&ct<-.001&&!Et?Ut.utils.normalize(ct,H,0):Et,!0),R.progress=Ze||(tt-ct)/qt===Et?0:Et),f&&m&&(Xt._pinOffset=Math.round(R.progress*Ft)),Z&&Z.invalidate(),isNaN(F)||(F-=Ut.getProperty(G,A.p),j-=Ut.getProperty(xt,A.p),Zl(G,A,F),Zl(ft,A,F-(Nt||0)),Zl(xt,A,j),Zl(Mt,A,j-(Nt||0))),Ze&&!Xn&&R.update(),h&&!Xn&&!Kt&&(Kt=!0,h(R),Kt=!1)}},R.getVelocity=function(){return(It()-ut)/(In()-fa)*1e3||0},R.endAnimation=function(){ua(R.callbackAnimation),i&&(Z?Z.progress(1):i.paused()?I||ua(i,R.direction<0,1):ua(i,i.reversed()))},R.labelToScroll=function(st){return i&&i.labels&&(ct||R.refresh()||ct)+i.labels[st]/i.duration()*qt||0},R.getTrailing=function(st){var Ct=ae.indexOf(R),rt=R.direction>0?ae.slice(0,Ct).reverse():ae.slice(Ct+1);return(hi(st)?rt.filter(function(Nt){return Nt.vars.preventOverlaps===st}):rt).filter(function(Nt){return R.direction>0?Nt.end<=ct:Nt.start>=H})},R.update=function(st,Ct,rt){if(!(x&&!rt&&!st)){var Nt=Xn===!0?nt:R.scroll(),ue=st?0:(Nt-ct)/qt,ee=ue<0?0:ue>1?1:ue||0,De=R.progress,Ze,Ne,Ee,Se,en,Ae,bn,ii;if(Ct&&(ut=tt,tt=x?It():Nt,y&&(At=mt,mt=i&&!I?i.totalProgress():ee)),p&&f&&!Pn&&!Vl&&bi&&(!ee&&ct<Nt+(Nt-ut)/(In()-fa)*p?ee=1e-4:ee===1&&H>Nt+(Nt-ut)/(In()-fa)*p&&(ee=.9999)),ee!==De&&R.enabled){if(Ze=R.isActive=!!ee&&ee<1,Ne=!!De&&De<1,Ae=Ze!==Ne,en=Ae||!!ee!=!!De,R.direction=ee>De?1:-1,R.progress=ee,en&&!Pn&&(Ee=ee&&!De?0:ee===1?1:De===1?2:3,I&&(Se=!Ae&&U[Ee+1]!=="none"&&U[Ee+1]||U[Ee],ii=i&&(Se==="complete"||Se==="reset"||Se in i))),L&&(Ae||ii)&&(ii||d||!i)&&(Ln(L)?L(R):R.getTrailing(L).forEach(function(si){return si.endAnimation()})),I||(Z&&!Pn&&!Vl?(Z._dp._time-Z._start!==Z._time&&Z.render(Z._dp._time-Z._start),Z.resetTo?Z.resetTo("totalProgress",ee,i._tTime/i._tDur):(Z.vars.totalProgress=ee,Z.invalidate().restart())):i&&i.totalProgress(ee,!!(Pn&&(ht||st)))),f){if(st&&m&&(Xt.style[m+A.os2]=Wt),!B)vt(pa(he+Ft*ee));else if(en){if(bn=!st&&ee>De&&H+1>Nt&&Nt+1>=Zi(C,A),S)if(!st&&(Ze||bn)){var Ge=ds(f,!0),Je=Nt-ct;Em(f,Me,Ge.top+(A===Ke?Je:0)+on,Ge.left+(A===Ke?0:Je)+on)}else Em(f,Xt);oo(Ze||bn?xe:z),q&&ee<1&&Ze||vt(he+(ee===1&&!bn?Ft:0))}}y&&!_t.tween&&!Pn&&!Vl&&N.restart(!0),a&&(Ae||E&&ee&&(ee<1||!tf))&&ba(a.targets).forEach(function(si){return si.classList[Ze||E?"add":"remove"](a.className)}),o&&!I&&!st&&o(R),en&&!Pn?(I&&(ii&&(Se==="complete"?i.pause().totalProgress(1):Se==="reset"?i.restart(!0).pause():Se==="restart"?i.restart(!0):i[Se]()),o&&o(R)),(Ae||!tf)&&(c&&Ae&&to(R,c),V[Ee]&&to(R,V[Ee]),E&&(ee===1?R.kill(!1,1):V[Ee]=0),Ae||(Ee=ee===1?1:3,V[Ee]&&to(R,V[Ee]))),b&&!Ze&&Math.abs(R.getVelocity())>(ma(b)?b:2500)&&(ua(R.callbackAnimation),Z?Z.progress(1):ua(i,Se==="reverse"?1:!ee,1))):I&&o&&!Pn&&o(R)}if(dt){var nn=x?Nt/x.duration()*(x._caScrollDist||0):Nt;w(nn+(G._isFlipped?1:0)),dt(nn)}bt&&bt(-Nt/x.duration()*(x._caScrollDist||0))}},R.enable=function(st,Ct){R.enabled||(R.enabled=!0,fn(C,"resize",ga),D||fn(C,"scroll",no),Q&&fn(s,"refreshInit",Q),st!==!1&&(R.progress=Et=0,tt=ut=k=It()),Ct!==!1&&R.refresh())},R.getTween=function(st){return st&&_t?_t.tween:Z},R.setPositions=function(st,Ct,rt,Nt){if(x){var ue=x.scrollTrigger,ee=x.duration(),De=ue.end-ue.start;st=ue.start+De*st/ee,Ct=ue.start+De*Ct/ee}R.refresh(!1,!1,{start:_m(st,rt&&!!R._startClamp),end:_m(Ct,rt&&!!R._endClamp)},Nt),R.update()},R.adjustPinSpacing=function(st){if(P&&st){var Ct=P.indexOf(A.d)+1;P[Ct]=parseFloat(P[Ct])+st+on,P[1]=parseFloat(P[1])+st+on,oo(P)}},R.disable=function(st,Ct){if(st!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Ct||Z&&Z.pause(),nt=0,W&&(W.uncache=1),Q&&un(s,"refreshInit",Q),N&&(N.pause(),_t.tween&&_t.tween.kill()&&(_t.tween=0)),!D)){for(var rt=ae.length;rt--;)if(ae[rt].scroller===C&&ae[rt]!==R)return;un(C,"resize",ga),D||un(C,"scroll",no)}},R.kill=function(st,Ct){R.disable(st,Ct),Z&&!Ct&&Z.kill(),l&&delete hf[l];var rt=ae.indexOf(R);rt>=0&&ae.splice(rt,1),rt===Wn&&Ql>0&&Wn--,rt=0,ae.forEach(function(Nt){return Nt.scroller===R.scroller&&(rt=1)}),rt||Xn||Bs||(R.scroll.rec=0),i&&(i.scrollTrigger=null,st&&i.revert({kill:!1}),Ct||i.kill()),ft&&[ft,Mt,G,xt].forEach(function(Nt){return Nt.parentNode&&Nt.parentNode.removeChild(Nt)}),Ma===R&&(Ma=0),f&&(W&&(W.uncache=1),rt=0,ae.forEach(function(Nt){return Nt.pin===f&&rt++}),rt||(W.spacer=0)),n.onKill&&n.onKill(R)},ae.push(R),R.enable(!1,!1),gt&&gt(R),i&&i.add&&!qt){var at=R.update;R.update=function(){R.update=at,re.cache++,ct||H||R.refresh()},Ut.delayedCall(.01,R.update),qt=.01,ct=H=0}else R.refresh();f&&pv()},s.register=function(n){return io||(Ut=n||Um(),Om()&&window.document&&s.enable(),io=da),io},s.defaults=function(n){if(n)for(var i in n)Xl[i]=n[i];return Xl},s.disable=function(n,i){da=0,ae.forEach(function(o){return o[i?"kill":"disable"](n)}),un(le,"wheel",no),un(we,"scroll",no),clearInterval(kl),un(we,"touchcancel",Yi),un(Me,"touchstart",Yi),Hl(un,we,"pointerdown,touchstart,mousedown",xm),Hl(un,we,"pointerup,touchend,mouseup",vm),ec.kill(),Gl(un);for(var r=0;r<re.length;r+=3)Wl(un,re[r],re[r+1]),Wl(un,re[r],re[r+2])},s.enable=function(){if(le=window,we=document,ui=we.documentElement,Me=we.body,Ut){if(ba=Ut.utils.toArray,_a=Ut.utils.clamp,lf=Ut.core.context||Yi,ju=Ut.core.suppressOverwrites||Yi,pf=le.history.scrollRestoration||"auto",uf=le.pageYOffset||0,Ut.core.globals("ScrollTrigger",s),Me){da=1,ro=document.createElement("div"),ro.style.height="100vh",ro.style.position="absolute",qm(),av(),qe.register(Ut),s.isTouch=qe.isTouch,Fs=qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),af=qe.isTouch===1,fn(le,"wheel",no),df=[le,we,ui,Me],Ut.matchMedia?(s.matchMedia=function(h){var d=Ut.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ut.addEventListener("matchMediaInit",function(){Wm(),yf()}),Ut.addEventListener("matchMediaRevert",function(){return Hm()}),Ut.addEventListener("matchMedia",function(){xr(0,1),wr("matchMedia")}),Ut.matchMedia().add("(orientation: portrait)",function(){return nf(),nf})):console.warn("Requires GSAP 3.11.0 or later"),nf(),fn(we,"scroll",no);var n=Me.hasAttribute("style"),i=Me.style,r=i.borderTopStyle,o=Ut.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ds(Me),Ke.m=Math.round(a.top+Ke.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Me.setAttribute("style",""),Me.removeAttribute("style")),kl=setInterval(Mm,250),Ut.delayedCall(.5,function(){return Vl=0}),fn(we,"touchcancel",Yi),fn(Me,"touchstart",Yi),Hl(fn,we,"pointerdown,touchstart,mousedown",xm),Hl(fn,we,"pointerup,touchend,mouseup",vm),of=Ut.utils.checkPrefix("transform"),jl.push(of),io=In(),ec=Ut.delayedCall(.2,xr).pause(),so=[we,"visibilitychange",function(){var h=le.innerWidth,d=le.innerHeight;we.hidden?(pm=h,mm=d):(pm!==h||mm!==d)&&ga()},we,"DOMContentLoaded",xr,le,"load",xr,le,"resize",ga],Gl(fn),ae.forEach(function(h){return h.enable(0,1)}),l=0;l<re.length;l+=3)Wl(un,re[l],re[l+1]),Wl(un,re[l],re[l+2])}else if(we){var c=function h(){s.enable(),we.removeEventListener("DOMContentLoaded",h)};we.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(tf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(kl)||(kl=i)&&setInterval(Mm,i),"ignoreMobileResize"in n&&(af=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Gl(un)||Gl(fn,n.autoRefreshEvents||"none"),Lm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Gn(n),o=re.indexOf(r),a=Mr(r);~o&&re.splice(o,a?6:2),i&&(a?Ii.unshift(le,i,Me,i,ui,i):Ii.unshift(r,i))},s.clearMatchMedia=function(n){ae.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(hi(n)?Gn(n):n).getBoundingClientRect(),a=o[r?vr:yr]*i||0;return r?o.right-a>0&&o.left+a<le.innerWidth:o.bottom-a>0&&o.top+a<le.innerHeight},s.positionInViewport=function(n,i,r){hi(n)&&(n=Gn(n));var o=n.getBoundingClientRect(),a=o[r?vr:yr],l=i==null?a/2:i in ic?ic[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/le.innerWidth:(o.top+l)/le.innerHeight},s.killAll=function(n){if(ae.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=br.killAll||[];br={},i.forEach(function(r){return r()})}},s})();Zt.version="3.15.1";Zt.saveStyles=function(s){return s?ba(s).forEach(function(t){if(t&&t.style){var e=ci.indexOf(t);e>=0&&ci.splice(e,5),ci.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ut.core.getCache(t),lf())}}):ci};Zt.revert=function(s,t){return yf(!s,t)};Zt.create=function(s,t){return new Zt(s,t)};Zt.refresh=function(s){return s?ga(!0):(io||Zt.register())&&xr(!0)};Zt.update=function(s){return++re.cache&&ps(s===!0?2:0)};Zt.clearScrollMemory=Xm;Zt.maxScroll=function(s,t){return Zi(s,t?Rn:Ke)};Zt.getScrollFunc=function(s,t){return us(Gn(s),t?Rn:Ke)};Zt.getById=function(s){return hf[s]};Zt.getAll=function(){return ae.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Zt.isScrolling=function(){return!!bi};Zt.snapDirectional=vf;Zt.addEventListener=function(s,t){var e=br[s]||(br[s]=[]);~e.indexOf(t)||e.push(t)};Zt.removeEventListener=function(s,t){var e=br[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Zt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ut.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),u.push(m),r<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Ln(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Ln(r)&&(r=r(),fn(Zt,"refresh",function(){return r=t.batchMax()})),ba(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Zt.create(c))}),e};var Cm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},rf=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(qe.isTouch?" pinch-zoom":""):"none",t===ui&&s(Me,e)},Jl={auto:1,scroll:1},vv=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Ut.core.getCache(r),a=In(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Me&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Jl[(l=Mi(r)).overflowY]||Jl[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Mr(r)&&(Jl[(l=Mi(r)).overflowY]||Jl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Zm=function(t,e,n,i){return qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&vv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(we,qe.eventTypes[0],Pm,!1,!0)},onDisable:function(){return un(we,qe.eventTypes[0],Pm,!0)}})},yv=/(input|label|select|textarea)/i,Rm,Pm=function(t){var e=yv.test(t.target.tagName);(e||Rm)&&(t._gsapAllow=!0,Rm=e)},Sv=function(t){_r(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Gn(t.target)||ui,h=Ut.core.globals().ScrollSmoother,d=h&&h.get(),u=Fs&&(t.content&&Gn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=us(c,Ke),m=us(c,Rn),_=1,p=(qe.isTouch&&le.visualViewport?le.visualViewport.scale*le.visualViewport.width:le.outerWidth)/le.innerWidth,g=0,v=Ln(i)?function(){return i(a)}:function(){return i||2.8},E,y,S=Zm(c,t.type,!0,r),M=function(){return y=!1},x=Yi,b=Yi,L=function(){l=Zi(c,Ke),b=_a(Fs?1:0,l),n&&(x=_a(0,Zi(c,Rn))),E=Sr},A=function(){u._gsap.y=pa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},I=function(){if(y){requestAnimationFrame(M);var J=pa(a.deltaY/2),X=b(f.v-J);if(u&&X!==f.v+f.offset){f.offset=X-f.v;var R=pa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=re.cache,ps()}return!0}f.offset&&A(),y=!0},C,O,D,B,V=function(){L(),C.isActive()&&C.vars.scrollY>l&&(f()>l?C.progress(1)&&f(l):C.resetTo("scrollY",l))};return u&&Ut.set(u,{y:"+=0"}),t.ignoreCheck=function(U){return Fs&&U.type==="touchmove"&&I(U)||_>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},t.onPress=function(){y=!1;var U=_;_=pa((le.visualViewport&&le.visualViewport.scale||1)/p),C.pause(),U!==_&&rf(c,_>1.01?!0:n?!1:"x"),O=m(),D=f(),L(),E=Sr},t.onRelease=t.onGestureStart=function(U,J){if(f.offset&&A(),!J)B.restart(!0);else{re.cache++;var X=v(),R,Q;n&&(R=m(),Q=R+X*.05*-U.velocityX/.227,X*=Cm(m,R,Q,Zi(c,Rn)),C.vars.scrollX=x(Q)),R=f(),Q=R+X*.05*-U.velocityY/.227,X*=Cm(f,R,Q,Zi(c,Ke)),C.vars.scrollY=b(Q),C.invalidate().duration(X).play(.01),(Fs&&C.vars.scrollY>=l||R>=l-1)&&Ut.to({},{onUpdate:V,duration:X})}o&&o(U)},t.onWheel=function(){C._ts&&C.pause(),In()-g>1e3&&(E=0,g=In())},t.onChange=function(U,J,X,R,Q){if(Sr!==E&&L(),J&&n&&m(x(R[2]===J?O+(U.startX-U.x):m()+J-R[1])),X){f.offset&&A();var St=Q[2]===X,Dt=St?D+U.startY-U.y:f()+X-Q[1],k=b(Dt);St&&Dt!==k&&(D+=k-Dt),f(k)}(X||J)&&ps()},t.onEnable=function(){rf(c,n?!1:"x"),Zt.addEventListener("refresh",V),fn(le,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),S.enable()},t.onDisable=function(){rf(c,!0),un(le,"resize",V),Zt.removeEventListener("refresh",V),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new qe(t),a.iOS=Fs,Fs&&!f()&&f(1),Fs&&Ut.ticker.add(Yi),B=a._dc,C=Ut.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ym(f,f(),function(){return C.pause()})},onUpdate:ps,onComplete:B.vars.onComplete}),a};Zt.sort=function(s){if(Ln(s))return ae.sort(s);var t=le.pageYOffset||0;return Zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+le.innerHeight}),ae.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Zt.observe=function(s){return new qe(s)};Zt.normalizeScroll=function(s){if(typeof s>"u")return Hn;if(s===!0&&Hn)return Hn.enable();if(s===!1){Hn&&Hn.kill(),Hn=s;return}var t=s instanceof qe?s:Sv(s);return Hn&&Hn.target===t.target&&Hn.kill(),Mr(t.target)&&(Hn=t),t};Zt.core={_getVelocityProp:zl,_inputObserver:Zm,_scrollers:re,_proxies:Ii,bridge:{ss:function(){bi||wr("scrollStart"),bi=In()},ref:function(){return Pn}}};Um()&&Ut.registerPlugin(Zt);var Ta,Ea,Jm=typeof Symbol=="function"?Symbol():"_split",Mf,Mv=()=>Mf||co.register(window.gsap),$m=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Aa=s=>s?typeof s=="string"?Aa(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((t,e)=>(typeof e=="string"?t.push(...Aa(e)):t.push(e),t),[]):[s]:[],Km=s=>Aa(s).filter(t=>t&&t.nodeType===1),rc=[],Sf=function(){},bv={add:s=>s()},wv=/\s+/g,Qm=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),oc={left:0,top:0,width:0,height:0},Tv=(s,t)=>{for(;++t<s.length&&s[t]===oc;);return s[t]||oc},jm=({element:s,html:t,ariaL:e,ariaH:n})=>{s.innerHTML=t,e?s.setAttribute("aria-label",e):s.removeAttribute("aria-label"),n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")},tg=(s,t)=>{if(t){let e=new Set(s.join("").match(t)||rc),n=s.length,i,r,o,a;if(e.size)for(;--n>-1;){r=s[n];for(o of e)if(o.startsWith(r)&&o.length>r.length){for(i=0,a=r;o.startsWith(a+=s[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){s[n]=o,s.splice(n+1,i);break}}}}return s},eg=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),lo=(s,t,e)=>t.insertBefore(typeof s=="string"?document.createTextNode(s):s,e),bf=(s,t,e)=>{let n=t[s+"sClass"]||"",{tag:i="div",aria:r="auto",propIndex:o=!1}=t,a=s==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let d=document.createElement(i),u=e.length+1;return n&&(d.className=n+(l?" "+n+u:"")),o&&d.style.setProperty("--"+s,u+""),r!=="none"&&d.setAttribute("aria-hidden","true"),i!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(n=n.replace("++","")),c.collection=e,c},Ev=(s,t,e,n)=>{let i=bf("line",e,n),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=r,s.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},ng=(s,t,e,n,i,r,o,a,l,c)=>{var h;let d=Array.from(s.childNodes),u=0,{wordDelimiter:f,reduceWhiteSpace:m=!0,prepareText:_}=t,p=s.getBoundingClientRect(),g=p,v=!m&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",E=r&&c&&window.getComputedStyle(s).direction==="rtl",y=0,S=e.collection,M,x,b,L,A,I,C,O,D,B,V,U,J,X,R,Q,St,Dt;for(typeof f=="object"?(b=f.delimiter||f,x=f.replaceWith||""):x=f===""?"":f||" ",M=x!==" ";u<d.length;u++)if(L=d[u],L.nodeType===3){for(R=L.textContent||"",m?R=R.replace(wv," "):v&&(R=R.replace(/\n/g,x+`
`)),_&&(R=_(R,s)),L.textContent=R,A=x||b?R.split(b||x):R.match(a)||rc,St=A[A.length-1],O=M?St.slice(-1)===" ":!St,St||A.pop(),g=p,C=M?A[0].charAt(0)===" ":!A[0],C&&lo(" ",s,L),A[0]||A.shift(),tg(A,l),r&&c||(L.textContent=""),D=1;D<=A.length;D++)if(Q=A[D-1],!m&&v&&Q.charAt(0)===`
`&&((h=L.previousSibling)==null||h.remove(),lo(document.createElement("br"),s,L),Q=Q.slice(1)),!m&&Q==="")lo(x,s,L);else if(Q===" ")s.insertBefore(document.createTextNode(" "),L);else{if(M&&Q.charAt(0)===" "&&lo(" ",s,L),y&&D===1&&!C&&S.indexOf(y.parentNode)>-1?(I=S[S.length-1],I.appendChild(document.createTextNode(n?"":Q))):(I=e(n?"":Q),lo(I,s,L),y&&D===1&&!C&&I.insertBefore(y,I.firstChild)),n){if(V=$m?tg([...$m.segment(Q)].map(k=>k.segment),l):Q.match(a)||rc,l){let k=Q.match(l);k&&k.some(ht=>V.indexOf(ht)<0)&&(V=Q.match(a)||rc)}for(Dt=0;Dt<V.length;Dt++)I.appendChild(V[Dt]===" "?document.createTextNode(" "):n(V[Dt]))}if(r&&c){if(R=L.textContent=R.substring(Q.length+1,R.length),B=I.getBoundingClientRect(),B.top>g.top&&(E?B.left>=g.left:B.left<=g.left)){for(U=s.cloneNode(),J=s.childNodes[0];J&&J!==I;)X=J,J=J.nextSibling,U.appendChild(X);s.parentNode.insertBefore(U,s),i&&eg(U)}g=B}(D<A.length||O)&&lo(D>=A.length?" ":M&&Q.slice(-1)===" "?" "+x:x,s,L)}s.removeChild(L),y=0}else L.nodeType===1&&(o&&o.indexOf(L)>-1?(S.indexOf(L.previousSibling)>-1&&S[S.length-1].appendChild(L),y=L):(ng(L,t,e,n,i,r,o,a,l,!0),y=0),i&&eg(L))},ig=class sg{constructor(t,e){this.isSplit=!1,Mv(),this.elements=Km(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(r=>{var o;e.overwrite!==!1&&((o=r[Jm])==null||o._data.orig.filter(({element:a})=>a===r).forEach(jm)),r[Jm]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let r=n.length,o;for(;r--;){o=n[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},Sf(this),this.split(e)}split(t){return(this._ctx||bv).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,u=e.indexOf("words")>-1,f=d&&!u&&!h,m=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=m?new RegExp(m.source+"|"+Qm.source,"gu"):Qm,p=!!t.ignore&&Km(t.ignore),{orig:g,animTime:v,obs:E}=this._data,y;(d||u||h)&&(this.elements.forEach((S,M)=>{g[M]={element:S,html:S.innerHTML,ariaL:S.getAttribute("aria-label"),ariaH:S.getAttribute("aria-hidden")},n==="auto"?S.setAttribute("aria-label",(S.textContent||"").trim()):n==="hidden"&&S.setAttribute("aria-hidden","true");let x=[],b=[],L=[],A=d?bf("char",t,x):null,I=bf("word",t,b),C,O,D,B;if(ng(S,t,I,A,f,i&&(h||f),p,_,m,!1),h){let V=Aa(S.childNodes),U=Ev(S,V,t,L),J,X=[],R=0,Q=window.getComputedStyle(S).direction==="rtl",St=V.map(ht=>ht.nodeType===1?ht.getBoundingClientRect():oc),Dt=oc,k;for(C=0;C<V.length;C++)J=V[C],J.nodeType===1&&(J.nodeName==="BR"?((!C||V[C-1].nodeName!=="BR")&&(X.push(J),U(R,C+1)),R=C+1,Dt=Tv(St,C)):(k=St[C],C&&k.top>Dt.top&&(Q?k.left+k.width>Dt.left+1:k.left<Dt.left+Dt.width-1)&&(U(R,C),R=C),Dt=k));R<C&&U(R,C),X.forEach(ht=>{var Et;return(Et=ht.parentNode)==null?void 0:Et.removeChild(ht)})}if(!u){for(C=0;C<b.length;C++)if(O=b[C],d||!O.nextSibling||O.nextSibling.nodeType!==3)if(r&&!h){for(D=document.createElement("span"),D.style.whiteSpace="nowrap";O.firstChild;)D.appendChild(O.firstChild);O.replaceWith(D)}else O.replaceWith(...O.childNodes);else B=O.nextSibling,B&&B.nodeType===3&&(B.textContent=(O.textContent||"")+(B.textContent||""),O.remove());b.length=0,S.normalize()}this.lines.push(...L),this.words.push(...b),this.chars.push(...x)}),c&&this[c]&&this.masks.push(...this[c].map(S=>{let M=S.cloneNode();return S.replaceWith(M),M.appendChild(S),S.className&&(M.className=S.className.trim().split(" ").map(x=>x+"-mask").join(" ")),M.style.overflow="clip",M.style.verticalAlign="top",M}))),this.isSplit=!0,Ea&&h&&a&&Ea.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),h&&a&&this.elements.forEach((S,M)=>{g[M].width=S.offsetWidth,E&&E.observe(S)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),Ea?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(jm),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new sg(t,e)}static register(t){Ta=Ta||t||window.gsap,Ta&&(Aa=Ta.utils.toArray,Sf=Ta.core.context||Sf),!Mf&&window.innerWidth>0&&(Ea=document.fonts,Mf=!0)}};ig.version="3.15.1";var co=ig;var rg="1.3.27";function lg(s,t,e){return Math.max(s,Math.min(t,e))}function Av(s,t,e){return(1-e)*s+e*t}function Cv(s,t,e,n){return Av(s,t,1-Math.exp(-e*n))}function Rv(s,t){return(s%t+t)%t}var Pv=class{constructor(){Gt(this,"isRunning",!1);Gt(this,"value",0);Gt(this,"from",0);Gt(this,"to",0);Gt(this,"currentTime",0);Gt(this,"lerp");Gt(this,"duration");Gt(this,"easing");Gt(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=lg(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Cv(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function Iv(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var Lv=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Gt(this,"width",0);Gt(this,"height",0);Gt(this,"scrollHeight",0);Gt(this,"scrollWidth",0);Gt(this,"debouncedResize");Gt(this,"wrapperResizeObserver");Gt(this,"contentResizeObserver");Gt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Gt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Gt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=Iv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},cg=class{constructor(){Gt(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},Dv=100/6,zs={passive:!1};function og(s,t){return s===1?Dv:s===2?t:1}var Nv=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Gt(this,"touchStart",{x:0,y:0});Gt(this,"lastDelta",{x:0,y:0});Gt(this,"window",{width:0,height:0});Gt(this,"emitter",new cg);Gt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Gt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Gt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Gt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=og(n,this.window.width),r=og(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Gt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,zs),this.element.addEventListener("touchstart",this.onTouchStart,zs),this.element.addEventListener("touchmove",this.onTouchMove,zs),this.element.addEventListener("touchend",this.onTouchEnd,zs)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,zs),this.element.removeEventListener("touchstart",this.onTouchStart,zs),this.element.removeEventListener("touchmove",this.onTouchMove,zs),this.element.removeEventListener("touchend",this.onTouchEnd,zs)}},ag=s=>Math.min(1,1.001-2**(-10*s)),hg=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:v=!0,autoRaf:E=!1,anchors:y=!1,autoToggle:S=!1,allowNestedScroll:M=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:b=x,stopInertiaOnNavigate:L=!1,respectReducedMotion:A=!0}={}){Gt(this,"_isScrolling",!1);Gt(this,"_isStopped",!1);Gt(this,"_isLocked",!1);Gt(this,"_preventNextNativeScrollEvent",!1);Gt(this,"_resetVelocityTimeout",null);Gt(this,"_rafId",null);Gt(this,"_isDraggingSelection",!1);Gt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Gt(this,"isTouching");Gt(this,"isIos");Gt(this,"time",0);Gt(this,"userData",{});Gt(this,"lastVelocity",0);Gt(this,"velocity",0);Gt(this,"direction",0);Gt(this,"options");Gt(this,"targetScroll");Gt(this,"animatedScroll");Gt(this,"animate",new Pv);Gt(this,"emitter",new cg);Gt(this,"dimensions");Gt(this,"virtualScroll");Gt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Gt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Gt(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Gt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Gt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Gt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||r&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Gt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Gt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=rg,window.lenis||(window.lenis={}),window.lenis.version=rg,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=ag:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:v,autoRaf:E,anchors:y,autoToggle:S,allowNestedScroll:M,naiveDimensions:b,stopInertiaOnNavigate:L,respectReducedMotion:A},this.dimensions=new Lv(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Nv(e,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(m=u),m){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),v=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(E)?0:E)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=lg(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=ag:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,u,f,m;if(n-(i.time??0)>2e3){i.time=Date.now();let M=window.getComputedStyle(s);if(i.computedStyle=M,r=["auto","overlay","scroll"].includes(M.overflowX),o=["auto","overlay","scroll"].includes(M.overflowY),c=["auto"].includes(M.overscrollBehaviorX),h=["auto"].includes(M.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,m=s.clientHeight,a=d>f,l=u>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,v,E,y,S;if(_==="horizontal")p=Math.round(s.scrollLeft),g=d-f,v=t,E=r,y=a,S=c;else if(_==="vertical")p=Math.round(s.scrollTop),g=u-m,v=e,E=o,y=l,S=h;else return!1;return!S&&(p>=g||p<=0)?!0:(v>0?p<g:p>0)&&E&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Rv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};ie.registerPlugin(Zt,co);Zt.config({ignoreMobileResize:!0});var _e=(s,t=document)=>t.querySelector(s),ho=(s,t=document)=>[...t.querySelectorAll(s)],Tr=document.documentElement,Ve=Tr.classList.contains("reduce"),Ca=Tr.classList.contains("fine");function ug(){if(Ve)return null;let s=new hg({lerp:.1,anchors:!0});return s.on("scroll",Zt.update),ie.ticker.add(t=>s.raf(t*1e3)),ie.ticker.lagSmoothing(0),s}function fg(){let s=_e("[data-nav]");s&&Zt.create({start:0,end:"max",onUpdate:t=>s.classList.toggle("is-away",t.direction===1&&t.scroll()>140&&!s.contains(document.activeElement))})}function dg(s,t){let e=_e("[data-curtain]"),n=_e("[data-count]"),i=!0;try{i=!sessionStorage.getItem("theia-seen"),sessionStorage.setItem("theia-seen","1")}catch{}if(Tr.classList.add("ready"),Ve){e.style.display="none",t();return}let r=Promise.race([Promise.all([document.fonts.ready,s]),new Promise(a=>setTimeout(a,3500))]),o=()=>{t(),ie.timeline().to(n,{yPercent:-30,opacity:0,duration:.45,ease:"power3.in"},0).to(e,{yPercent:-100,duration:.95,ease:"expo.inOut"},.1).set(e,{display:"none"})};if(i){let a={v:0};ie.to(a,{v:100,duration:1.4,ease:"power2.inOut",onUpdate(){n.textContent=Math.round(a.v),n.style.fontStretch=50+a.v+"%"},onComplete(){r.then(o)}})}else n.textContent="",r.then(o)}function pg(){let s=_e("[data-curtain]"),t=_e("[data-count]");document.addEventListener("click",e=>{let n=e.target.closest&&e.target.closest("a[href]");if(!n||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||n.target==="_blank"||Ve)return;let i=new URL(n.href,location.href);i.protocol!==location.protocol||i.host!==location.host||i.pathname===location.pathname||(e.preventDefault(),t.textContent="",ie.killTweensOf(s),ie.set(s,{display:"flex",yPercent:100}),ie.to(s,{yPercent:0,duration:.6,ease:"expo.inOut",onComplete(){location.href=n.href}}))}),window.addEventListener("pageshow",e=>{e.persisted&&ie.set(s,{display:"none"})})}function wf(s,t={}){Ve||!s||co.create(s,{type:"lines",mask:"lines",autoSplit:!0,onSplit:e=>ie.from(e.lines,{yPercent:108,duration:1.15,ease:"expo.out",stagger:.09,...t})})}var Bg=0,td=1,zg=2;var Ka=1,kg=2,Do=3,js=0,Sn=1,Ai=2,Nr=0,No=1,ed=2,nd=3,id=4,Vg=5;var Or=100,Gg=101,Hg=102,Wg=103,Xg=104,qg=200,Yg=201,Zg=202,Jg=203,sd=204,rd=205,$g=206,Kg=207,Qg=208,jg=209,t0=210,e0=211,n0=212,i0=213,s0=214,Rc=0,Pc=1,Ic=2,Eo=3,Lc=4,Dc=5,Nc=6,Oc=7,od=0,r0=1,o0=2,On=0,ad=1,ld=2,cd=3,hd=4,ud=5,fd=6,dd=7;var pd=300,Ur=301,Oo=302,ch=303,hh=304,Uc=1e3,$i=1001,Fc=1002,pn=1003,a0=1004;var Qa=1005;var tn=1006,uh=1007;var Fi=1008;var ni=1009,md=1010,gd=1011,Uo=1012,fh=1013,Bi=1014,zi=1015,ki=1016,dh=1017,ph=1018,Fr=1020,_d=35902,xd=35899,vd=1021,yd=1022,Vi=1023,Ss=1026,bs=1027,Sd=1028,mh=1029,tr=1030,gh=1031;var _h=1033,ja=33776,tl=33777,el=33778,nl=33779,xh=35840,vh=35841,yh=35842,Sh=35843,Mh=36196,bh=37492,wh=37496,Th=37488,Eh=37489,il=37490,Ah=37491,Ch=37808,Rh=37809,Ph=37810,Ih=37811,Lh=37812,Dh=37813,Nh=37814,Oh=37815,Uh=37816,Fh=37817,Bh=37818,zh=37819,kh=37820,Vh=37821,Gh=36492,Hh=36494,Wh=36495,Xh=36283,qh=36284,sl=36285,Yh=36286;var Da=2300,Bc=2301,Ac=2302,Yf=2303,Zf=2400,Jf=2401,$f=2402;var l0=3200;var Zh=0,c0=1,Gi="",qn="srgb",Na="srgb-linear",Oa="linear",be="srgb";var Cc=7680;var h0=519,u0=512,f0=513,d0=514,Md=515,p0=516,m0=517,bd=518,wd=519,g0=35044;var Td="300 es",Ti=2e3,Ao=2001;function Ov(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Uv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ua(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _0(){let s=Ua("canvas");return s.style.display="block",s}var mg={},Co=null;function Ed(...s){let t="THREE."+s.shift();Co?Co("log",t,...s):console.log(t,...s)}function x0(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function $t(...s){s=x0(s);let t="THREE."+s.shift();if(Co)Co("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Qt(...s){s=x0(s);let t="THREE."+s.shift();if(Co)Co("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ir(...s){let t=s.join(" ");t in mg||(mg[t]=!0,$t(...s))}function v0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var y0={[Rc]:Rc,[Ic]:Nc,[Lc]:Lc,[Eo]:Dc,[Pc]:Pc,[Nc]:Ic,[Oc]:Oc,[Dc]:Eo},Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tf=Math.PI/180,zc=180/Math.PI;function rl(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[e&63|128]+Dn[e>>8&255]+"-"+Dn[e>>16&255]+Dn[e>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function me(s,t,e){return Math.max(t,Math.min(e,s))}function Fv(s,t){return(s%t+t)%t}function Ef(s,t,e){return(1-e)*s+e*t}function S0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ad(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bv(s,t){if(t.constructor===Float32Array)return s;let e=Ad(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function zv(s,t){if(t.constructor===Float32Array)return s;let e=Ad(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Ld=class Ld{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ld.prototype.isVector2=!0;var ce=Ld,vn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),E=Math.sin(v);g=Math.sin(g*v)/E,a=Math.sin(a*v)/E,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dd=class Dd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Af.copy(this).projectOnVector(t),this.sub(Af)}reflect(t){return this.sub(Af.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dd.prototype.isVector3=!0;var K=Dd,Af=new K,gg=new vn,Nd=class Nd{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],v=i[1],E=i[4],y=i[7],S=i[2],M=i[5],x=i[8];return r[0]=o*_+a*v+l*S,r[3]=o*p+a*E+l*M,r[6]=o*g+a*y+l*x,r[1]=c*_+h*v+d*S,r[4]=c*p+h*E+d*M,r[7]=c*g+h*y+d*x,r[2]=u*_+f*v+m*S,r[5]=u*p+f*E+m*M,r[8]=u*g+f*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cf.makeScale(t,e)),this}rotate(t){return Ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cf.makeRotation(-t)),this}translate(t,e){return Ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Nd.prototype.isMatrix3=!0;var jt=Nd,Cf=new jt,_g=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xg=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kv(){let s={enabled:!0,workingColorSpace:Na,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(i.r=To(i.r),i.g=To(i.g),i.b=To(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?Oa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Na]:{primaries:t,whitePoint:n,transfer:Oa,toXYZ:_g,fromXYZ:xg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:n,transfer:be,toXYZ:_g,fromXYZ:xg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),s}var pe=kv();function ys(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function To(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var uo,kc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{uo===void 0&&(uo=Ua("canvas")),uo.width=t.width,uo.height=t.height;let i=uo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=uo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ua("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ys(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vv=0,Ro=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=rl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Rf(i[o].image)):r.push(Rf(i[o]))}else r=Rf(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Rf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var Gv=0,Pf=new K,Yn=class s extends Qi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=$i,i=$i,r=tn,o=Fi,a=Vi,l=ni,c=s.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=rl(),this.name="",this.source=new Ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Pf).x}get height(){return this.source.getSize(Pf).y}get depth(){return this.source.getSize(Pf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uc:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case Fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uc:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case Fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=pd;Yn.DEFAULT_ANISOTROPY=1;var Od=class Od{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(f+1)/2,S=(g+1)/2,M=(h+u)/4,x=(d+_)/4,b=(m+p)/4;return E>y&&E>S?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=M/n,r=x/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=b/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=x/r,i=b/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Od.prototype.isVector4=!0;var Pe=Od,Vc=class extends Qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Yn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ro(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Vc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fa=class extends Yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gc=class extends Yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var lh=class lh{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,p)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lh().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/fo.setFromMatrixColumn(t,0).length(),r=1/fo.setFromMatrixColumn(t,1).length(),o=1/fo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hv,t,Wv)}lookAt(t,e,n){let i=this.elements;return fi.subVectors(t,e),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),ks.crossVectors(n,fi),ks.lengthSq()===0&&(Math.abs(n.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),ks.crossVectors(n,fi)),ks.normalize(),ac.crossVectors(fi,ks),i[0]=ks.x,i[4]=ac.x,i[8]=fi.x,i[1]=ks.y,i[5]=ac.y,i[9]=fi.y,i[2]=ks.z,i[6]=ac.z,i[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],E=n[7],y=n[11],S=n[15],M=i[0],x=i[4],b=i[8],L=i[12],A=i[1],I=i[5],C=i[9],O=i[13],D=i[2],B=i[6],V=i[10],U=i[14],J=i[3],X=i[7],R=i[11],Q=i[15];return r[0]=o*M+a*A+l*D+c*J,r[4]=o*x+a*I+l*B+c*X,r[8]=o*b+a*C+l*V+c*R,r[12]=o*L+a*O+l*U+c*Q,r[1]=h*M+d*A+u*D+f*J,r[5]=h*x+d*I+u*B+f*X,r[9]=h*b+d*C+u*V+f*R,r[13]=h*L+d*O+u*U+f*Q,r[2]=m*M+_*A+p*D+g*J,r[6]=m*x+_*I+p*B+g*X,r[10]=m*b+_*C+p*V+g*R,r[14]=m*L+_*O+p*U+g*Q,r[3]=v*M+E*A+y*D+S*J,r[7]=v*x+E*I+y*B+S*X,r[11]=v*b+E*C+y*V+S*R,r[15]=v*L+E*O+y*U+S*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],v=l*f-c*u,E=a*f-c*d,y=a*u-l*d,S=o*f-c*h,M=o*u-l*h,x=o*d-a*h;return e*(_*v-p*E+g*y)-n*(m*v-p*S+g*M)+i*(m*E-_*S+g*x)-r*(m*y-_*M+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],v=e*a-n*o,E=e*l-i*o,y=e*c-r*o,S=n*l-i*a,M=n*c-r*a,x=i*c-r*l,b=h*_-d*m,L=h*p-u*m,A=h*g-f*m,I=d*p-u*_,C=d*g-f*_,O=u*g-f*p,D=v*O-E*C+y*I+S*A-M*L+x*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return t[0]=(a*O-l*C+c*I)*B,t[1]=(i*C-n*O-r*I)*B,t[2]=(_*x-p*M+g*S)*B,t[3]=(u*M-d*x-f*S)*B,t[4]=(l*A-o*O-c*L)*B,t[5]=(e*O-i*A+r*L)*B,t[6]=(p*y-m*x-g*E)*B,t[7]=(h*x-u*y+f*E)*B,t[8]=(o*C-a*A+c*b)*B,t[9]=(n*A-e*C-r*b)*B,t[10]=(m*M-_*y+g*v)*B,t[11]=(d*y-h*M-f*v)*B,t[12]=(a*L-o*I-l*b)*B,t[13]=(e*I-n*L+i*b)*B,t[14]=(_*E-m*S-p*v)*B,t[15]=(h*S-d*E+u*v)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,_=o*h,p=o*d,g=a*d,v=l*c,E=l*h,y=l*d,S=n.x,M=n.y,x=n.z;return i[0]=(1-(_+g))*S,i[1]=(f+y)*S,i[2]=(m-E)*S,i[3]=0,i[4]=(f-y)*M,i[5]=(1-(u+g))*M,i[6]=(p+v)*M,i[7]=0,i[8]=(m+E)*x,i[9]=(p-v)*x,i[10]=(1-(u+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=fo.set(i[0],i[1],i[2]).length(),a=fo.set(i[4],i[5],i[6]).length(),l=fo.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Li.copy(this);let c=1/o,h=1/a,d=1/l;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=h,Li.elements[5]*=h,Li.elements[6]*=h,Li.elements[8]*=d,Li.elements[9]*=d,Li.elements[10]*=d,e.setFromRotationMatrix(Li),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Ti,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Ti)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ao)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ti,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Ti)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ao)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};lh.prototype.isMatrix4=!0;var Ue=lh,fo=new K,Li=new Ue,Hv=new K(0,0,0),Wv=new K(1,1,1),ks=new K,ac=new K,fi=new K,vg=new Ue,yg=new vn,ei=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yg.setFromEuler(this),this.setFromQuaternion(yg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var Ba=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xv=0,Sg=new K,po=new vn,ms=new Ue,lc=new K,Ra=new K,qv=new K,Yv=new vn,Mg=new K(1,0,0),bg=new K(0,1,0),wg=new K(0,0,1),Tg={type:"added"},Zv={type:"removed"},mo={type:"childadded",child:null},If={type:"childremoved",child:null},Zn=class s extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new K,e=new ei,n=new vn,i=new K(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new jt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return po.setFromAxisAngle(t,e),this.quaternion.multiply(po),this}rotateOnWorldAxis(t,e){return po.setFromAxisAngle(t,e),this.quaternion.premultiply(po),this}rotateX(t){return this.rotateOnAxis(Mg,t)}rotateY(t){return this.rotateOnAxis(bg,t)}rotateZ(t){return this.rotateOnAxis(wg,t)}translateOnAxis(t,e){return Sg.copy(t).applyQuaternion(this.quaternion),this.position.add(Sg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mg,t)}translateY(t){return this.translateOnAxis(bg,t)}translateZ(t){return this.translateOnAxis(wg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lc.copy(t):lc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(Ra,lc,this.up):ms.lookAt(lc,Ra,this.up),this.quaternion.setFromRotationMatrix(ms),i&&(ms.extractRotation(i.matrixWorld),po.setFromRotationMatrix(ms),this.quaternion.premultiply(po.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tg),mo.child=t,this.dispatchEvent(mo),mo.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zv),If.child=t,this.dispatchEvent(If),If.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tg),mo.child=t,this.dispatchEvent(mo),mo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,t,qv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,Yv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zn.DEFAULT_UP=new K(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pr=class extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jv={type:"move"},Po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vs={h:0,s:0,l:0},cc={h:0,s:0,l:0};function Lf(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=Fv(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Lf(o,r,t+1/3),this.g=Lf(o,r,t),this.b=Lf(o,r,t-1/3)}return pe.colorSpaceToWorking(this,i),this}setStyle(t,e=qn){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qn){let n=M0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=To(t.r),this.g=To(t.g),this.b=To(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return pe.workingToColorSpace(Nn.copy(this),t),Math.round(me(Nn.r*255,0,255))*65536+Math.round(me(Nn.g*255,0,255))*256+Math.round(me(Nn.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(Nn.copy(this),e);let n=Nn.r,i=Nn.g,r=Nn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(Nn.copy(this),e),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=qn){pe.workingToColorSpace(Nn.copy(this),t);let e=Nn.r,n=Nn.g,i=Nn.b;return t!==qn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Vs),this.setHSL(Vs.h+t,Vs.s+e,Vs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vs),t.getHSL(cc);let n=Ef(Vs.h,cc.h,e),i=Ef(Vs.s,cc.s,e),r=Ef(Vs.l,cc.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new se;se.NAMES=M0;var Ui=class extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Di=new K,gs=new K,Df=new K,_s=new K,go=new K,_o=new K,Eg=new K,Nf=new K,Of=new K,Uf=new K,Ff=new Pe,Bf=new Pe,zf=new Pe,Xs=class s{constructor(t=new K,e=new K,n=new K){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Di.subVectors(t,e),i.cross(Di);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Di.subVectors(i,e),gs.subVectors(n,e),Df.subVectors(t,e);let o=Di.dot(Di),a=Di.dot(gs),l=Di.dot(Df),c=gs.dot(gs),h=gs.dot(Df),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_s.x),l.addScaledVector(o,_s.y),l.addScaledVector(a,_s.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ff.setScalar(0),Bf.setScalar(0),zf.setScalar(0),Ff.fromBufferAttribute(t,e),Bf.fromBufferAttribute(t,n),zf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ff,r.x),o.addScaledVector(Bf,r.y),o.addScaledVector(zf,r.z),o}static isFrontFacing(t,e,n,i){return Di.subVectors(n,e),gs.subVectors(t,e),Di.cross(gs).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),Di.cross(gs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;go.subVectors(i,n),_o.subVectors(r,n),Nf.subVectors(t,n);let l=go.dot(Nf),c=_o.dot(Nf);if(l<=0&&c<=0)return e.copy(n);Of.subVectors(t,i);let h=go.dot(Of),d=_o.dot(Of);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(go,o);Uf.subVectors(t,r);let f=go.dot(Uf),m=_o.dot(Uf);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(_o,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Eg.subVectors(r,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Eg,a);let g=1/(p+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(go,o).addScaledVector(_o,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qs=class{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ni):Ni.fromBufferAttribute(r,o),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hc.copy(n.boundingBox)),hc.applyMatrix4(t.matrixWorld),this.union(hc)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pa),uc.subVectors(this.max,Pa),xo.subVectors(t.a,Pa),vo.subVectors(t.b,Pa),yo.subVectors(t.c,Pa),Gs.subVectors(vo,xo),Hs.subVectors(yo,vo),Er.subVectors(xo,yo);let e=[0,-Gs.z,Gs.y,0,-Hs.z,Hs.y,0,-Er.z,Er.y,Gs.z,0,-Gs.x,Hs.z,0,-Hs.x,Er.z,0,-Er.x,-Gs.y,Gs.x,0,-Hs.y,Hs.x,0,-Er.y,Er.x,0];return!kf(e,xo,vo,yo,uc)||(e=[1,0,0,0,1,0,0,0,1],!kf(e,xo,vo,yo,uc))?!1:(fc.crossVectors(Gs,Hs),e=[fc.x,fc.y,fc.z],kf(e,xo,vo,yo,uc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xs=[new K,new K,new K,new K,new K,new K,new K,new K],Ni=new K,hc=new qs,xo=new K,vo=new K,yo=new K,Gs=new K,Hs=new K,Er=new K,Pa=new K,uc=new K,fc=new K,Ar=new K;function kf(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ar.fromArray(s,r);let a=i.x*Math.abs(Ar.x)+i.y*Math.abs(Ar.y)+i.z*Math.abs(Ar.z),l=t.dot(Ar),c=e.dot(Ar),h=n.dot(Ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var je=new K,dc=new ce,$v=0,Ki=class extends Qi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$v++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=g0,this.updateRanges=[],this.gpuType=zi,this.version=0,this._normalizationScale=t!==void 0?Ad(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dc.fromBufferAttribute(this,e),dc.applyMatrix3(t),this.setXY(e,dc.x,dc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Bv(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):zv(t,this.array)}};var za=class extends Ki{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ka=class extends Ki{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ei=class extends Ki{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kv=new qs,Ia=new K,Vf=new K,Io=class{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kv.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ia.subVectors(t,this.center);let e=Ia.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ia,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ia.copy(t.center).add(Vf)),this.expandByPoint(Ia.copy(t.center).sub(Vf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qv=0,wi=new Ue,Gf=new Zn,So=new K,di=new qs,La=new qs,dn=new K,Ys=class s extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ov(t)?ka:za)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,e,n){return wi.makeTranslation(t,e,n),this.applyMatrix4(wi),this}scale(t,e,n){return wi.makeScale(t,e,n),this.applyMatrix4(wi),this}lookAt(t){return Gf.lookAt(t),Gf.updateMatrix(),this.applyMatrix4(Gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ei(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];di.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Io);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){let n=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];La.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(di.min,La.min),di.expandByPoint(dn),dn.addVectors(di.max,La.max),di.expandByPoint(dn)):(di.expandByPoint(La.min),di.expandByPoint(La.max))}di.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(So.fromBufferAttribute(t,c),dn.add(So)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ki(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new K,l[L]=new K;let h=new K,d=new K,u=new K,f=new ce,m=new ce,_=new ce,p=new K,g=new K;function v(L,A,I){c[L]=c[A]=c[I]=1,h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,L),m.fromBufferAttribute(r,A),_.fromBufferAttribute(r,I),d.sub(h),u.sub(h),m.sub(f),_.sub(f);let C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(C),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(C),a[L].add(p),a[A].add(p),a[I].add(p),l[L].add(g),l[A].add(g),l[I].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,A=E.length;L<A;++L){let I=E[L],C=I.start,O=I.count;for(let D=C,B=C+O;D<B;D+=3)v(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let y=new K,S=new K,M=new K,x=new K;function b(L){M.fromBufferAttribute(i,L),x.copy(M);let A=a[L];y.copy(A),y.sub(M.multiplyScalar(M.dot(A))).normalize(),S.crossVectors(x,A);let C=S.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,C)}for(let L=0,A=n.count;L<A;++L)c[L]&&b(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ki(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new K,r=new K,o=new K,a=new K,l=new K,c=new K,h=new K,d=new K;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Ki(u,h,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Hf=new K,jv=new K,ty=new jt,Oi=class{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Hf.subVectors(n,e).cross(jv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Hf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ty.getNormalMatrix(t),i=this.coplanarPoint(Hf).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ey=0,Zs=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=No,this.side=js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=rd,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cc,this.stencilZFail=Cc,this.stencilZPass=Cc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Oi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vs=new K,Wf=new K,pc=new K,mc=new K,Hc=class{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vs.copy(this.origin).addScaledVector(this.direction,e),vs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Wf.copy(t).add(e).multiplyScalar(.5),pc.copy(e).sub(t).normalize(),mc.copy(this.origin).sub(Wf);let r=t.distanceTo(e)*.5,o=-this.direction.dot(pc),a=mc.dot(this.direction),l=-mc.dot(pc),c=mc.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Wf).addScaledVector(pc,u),f}intersectSphere(t,e){if(t.radius<0)return null;vs.subVectors(t.center,this.origin);let n=vs.dot(this.direction),i=vs.dot(vs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,v=n.y-o.y,E=n.z-o.z,y=Math.abs(l),S=Math.abs(c),M=Math.abs(h),x,b,L,A,I,C,O,D,B,V,U,J;if(y>=S&&y>=M?(L=l,C=d,B=m,J=g,l>=0?(x=c,b=h,A=u,I=f,O=_,D=p,V=v,U=E):(x=h,b=c,A=f,I=u,O=p,D=_,V=E,U=v)):S>=M?(L=c,C=u,B=_,J=v,c>=0?(x=h,b=l,A=f,I=d,O=p,D=m,V=E,U=g):(x=l,b=h,A=d,I=f,O=m,D=p,V=g,U=E)):(L=h,C=f,B=p,J=E,h>=0?(x=l,b=c,A=d,I=u,O=m,D=_,V=g,U=v):(x=c,b=l,A=u,I=d,O=_,D=m,V=v,U=g)),L===0)return null;let X=x/L,R=b/L,Q=1/L,St=A-X*C,Dt=I-R*C,k=O-X*B,ht=D-R*B,Et=V-X*J,It=U-R*J,_t=Et*ht-It*k,W=St*It-Dt*Et,lt=k*Dt-ht*St;if(i){if(_t<0||W<0||lt<0)return null}else if((_t<0||W<0||lt<0)&&(_t>0||W>0||lt>0))return null;let tt=_t+W+lt;if(tt===0)return null;let ut=Q*(_t*C+W*B+lt*J);return(tt>0?ut<0:ut>0)?null:this.at(ut/tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lr=class extends Zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ag=new Ue,Cr=new Hc,gc=new Io,Cg=new K,_c=new K,xc=new K,vc=new K,Xf=new K,yc=new K,Rg=new K,Sc=new K,yn=class extends Zn{constructor(t=new Ys,e=new Lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){yc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Xf.fromBufferAttribute(d,t),o?yc.addScaledVector(Xf,h):yc.addScaledVector(Xf.sub(e),h))}e.add(yc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(r),Cr.copy(t.ray).recast(t.near),!(gc.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(gc,Cg)===null||Cr.origin.distanceToSquared(Cg)>(t.far-t.near)**2))&&(Ag.copy(r).invert(),Cr.copy(t.ray).applyMatrix4(Ag),!(n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,S=E;y<S;y+=3){let M=a.getX(y),x=a.getX(y+1),b=a.getX(y+2);i=Mc(this,g,t,n,c,h,d,M,x,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let v=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);i=Mc(this,o,t,n,c,h,d,v,E,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,S=E;y<S;y+=3){let M=y,x=y+1,b=y+2;i=Mc(this,g,t,n,c,h,d,M,x,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let v=p,E=p+1,y=p+2;i=Mc(this,o,t,n,c,h,d,v,E,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function ny(s,t,e,n,i,r,o,a){let l;if(t.side===Sn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===js,a),l===null)return null;Sc.copy(a),Sc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Sc);return c<e.near||c>e.far?null:{distance:c,point:Sc.clone(),object:s}}function Mc(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,_c),s.getVertexPosition(l,xc),s.getVertexPosition(c,vc);let h=ny(s,t,e,n,_c,xc,vc,Rg);if(h){let d=new K;Xs.getBarycoord(Rg,_c,xc,vc,d),i&&(h.uv=Xs.getInterpolatedAttribute(i,a,l,c,d,new ce)),r&&(h.uv1=Xs.getInterpolatedAttribute(r,a,l,c,d,new ce)),o&&(h.normal=Xs.getInterpolatedAttribute(o,a,l,c,d,new K),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new K,materialIndex:0};Xs.getNormal(_c,xc,vc,u.normal),h.face=u,h.barycoord=d}return h}var Wc=class extends Yn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=pn,h=pn,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=new Io,iy=new ce(.5,.5),bc=new K,Js=class{constructor(t=new Oi,e=new Oi,n=new Oi,i=new Oi,r=new Oi,o=new Oi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ti,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],v=r[12],E=r[13],y=r[14],S=r[15];if(i[0].setComponents(c-o,f-h,g-m,S-v).normalize(),i[1].setComponents(c+o,f+h,g+m,S+v).normalize(),i[2].setComponents(c+a,f+d,g+_,S+E).normalize(),i[3].setComponents(c-a,f-d,g-_,S-E).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,f-u,g-p,S-y).normalize();else if(i[4].setComponents(c-l,f-u,g-p,S-y).normalize(),e===Ti)i[5].setComponents(c+l,f+u,g+p,S+y).normalize();else if(e===Ao)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(t){Rr.center.set(0,0,0);let e=iy.distanceTo(t.center);return Rr.radius=.7071067811865476+e,Rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(bc.x=i.normal.x>0?t.max.x:t.min.x,bc.y=i.normal.y>0?t.max.y:t.min.y,bc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Pg=new Ue,Xc=class s{constructor(){this.coordinateSystem=Ti,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Pg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Js),n[i].setFromProjectionMatrix(Pg,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Js),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Va=class extends Yn{constructor(t=[],e=Ur,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dr=class extends Yn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ms=class extends Yn{constructor(t,e,n=Bi,i,r,o,a=pn,l=pn,c,h=Ss,d=1){if(h!==Ss&&h!==bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ro(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ga=class extends Ms{constructor(t,e=Bi,n=Ur,i,r,o=pn,a=pn,l,c=Ss){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ha=class extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ji=class s extends Ys{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ei(c,3)),this.setAttribute("normal",new Ei(h,3)),this.setAttribute("uv",new Ei(d,2));function m(_,p,g,v,E,y,S,M,x,b,L){let A=y/x,I=S/b,C=y/2,O=S/2,D=M/2,B=x+1,V=b+1,U=0,J=0,X=new K;for(let R=0;R<V;R++){let Q=R*I-O;for(let St=0;St<B;St++){let Dt=St*A-C;X[_]=Dt*v,X[p]=Q*E,X[g]=D,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[g]=M>0?1:-1,h.push(X.x,X.y,X.z),d.push(St/x),d.push(1-R/b),U+=1}}for(let R=0;R<b;R++)for(let Q=0;Q<x;Q++){let St=u+Q+B*R,Dt=u+Q+B*(R+1),k=u+(Q+1)+B*(R+1),ht=u+(Q+1)+B*R;l.push(St,Dt,ht),l.push(Dt,k,ht),J+=6}a.addGroup(f,J,L),f+=J,u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ts=class s extends Ys{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*u-o;for(let E=0;E<c;E++){let y=E*d-r;m.push(y,-v,0),_.push(0,0,1),p.push(E/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let E=v+c*g,y=v+c*(g+1),S=v+1+c*(g+1),M=v+1+c*g;f.push(E,y,M),f.push(y,S,M)}this.setIndex(f),this.setAttribute("position",new Ei(m,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};function Br(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Ig(i))i.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Ig(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Un(s){let t={};for(let e=0;e<s.length;e++){let n=Br(s[e]);for(let i in n)t[i]=n[i]}return t}function Ig(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function sy(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Cd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var b0={clone:Br,merge:Un},ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mi=class extends Zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ry,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=sy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(i.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(i.value);break;case"v3":this.uniforms[n].value=new K().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Pe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},qc=class extends mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yc=class extends Zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wa=class extends Yc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Zc=class extends Zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jc=class extends Zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Mo(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function wc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var $s=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$c=class extends $s{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zf,endingEnd:Zf}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jf:r=t,a=2*e-n;break;case $f:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jf:o=t,l=2*n-e;break;case $f:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,v=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,E=(-1-f)*p+(1.5+f)*_+.5*m,y=f*p-f*_;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+v*o[c+S]+E*o[l+S]+y*o[d+S];return r}},Kc=class extends $s{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Qc=class extends $s{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},jc=class extends $s{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=f*u+m*2,v=d[g],E=d[g+1],y=t*u+m*2,S=h[y],M=h[y+1],x=ly(n,e,v,S,i);r[m]=w0(x,_,E,M,p)}return r}};function w0(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function ay(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function ly(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=w0(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=ay(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var gi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mo(e,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mo(t.times,Array),values:Mo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),wc(t.settings)&&(n.settings={inTangents:Mo(t.settings.inTangents,Array),outTangents:Mo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new jc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Da:e=this.InterpolantFactoryMethodDiscrete;break;case Bc:e=this.InterpolantFactoryMethodLinear;break;case Ac:e=this.InterpolantFactoryMethodSmooth;break;case Yf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $t("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return Bc;case this.InterpolantFactoryMethodSmooth:return Ac;case this.InterpolantFactoryMethodBezier:return Yf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;wc(this.settings)&&(Lg(this.settings.inTangents,t),Lg(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;wc(this.settings)&&(Dg(this.settings.inTangents,t),Dg(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Uv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ac,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,wc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Lg(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Dg(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}gi.prototype.ValueTypeName="";gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Bc;var Ks=class extends gi{constructor(t,e,n){super(t,e,n)}};Ks.prototype.ValueTypeName="bool";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Da;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var th=class extends gi{constructor(t,e,n,i){super(t,e,n,i)}};th.prototype.ValueTypeName="color";var eh=class extends gi{constructor(t,e,n,i){super(t,e,n,i)}};eh.prototype.ValueTypeName="number";var nh=class extends $s{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)vn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xa=class extends gi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new nh(this.times,this.values,this.getValueSize(),t)}};Xa.prototype.ValueTypeName="quaternion";Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Qs=class extends gi{constructor(t,e,n){super(t,e,n)}};Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Da;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var ih=class extends gi{constructor(t,e,n,i){super(t,e,n,i)}};ih.prototype.ValueTypeName="vector";var sh=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},T0=new sh,rh=class{constructor(t){this.manager=t!==void 0?t:T0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};rh.DEFAULT_MATERIAL_NAME="__DEFAULT";var qa=class extends Zn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var qf=new Ue,Ng=new K,Og=new K,oh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ng.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ng),Og.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Og),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){qf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(qf,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Ao||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(qf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Tc=new K,Ec=new vn,Ji=new K,Ya=class extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Tc,Ec,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Ec,Ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Tc,Ec,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Ec,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ws=new K,Ug=new ce,Fg=new ce,an=class extends Ya{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Tf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zc*2*Math.atan(Math.tan(Tf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ws.x,Ws.y).multiplyScalar(-t/Ws.z),Ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ws.x,Ws.y).multiplyScalar(-t/Ws.z)}getViewSize(t,e){return this.getViewBounds(t,Ug,Fg),e.subVectors(Fg,Ug)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Tf*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Za=class extends Ya{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Kf=class extends oh{constructor(){super(new Za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ja=class extends qa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zn.DEFAULT_UP),this.updateMatrix(),this.target=new Zn,this.shadow=new Kf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},$a=class extends qa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var bo=-90,wo=1,Lo=class extends Zn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new an(bo,wo,t,e);i.layers=this.layers,this.add(i);let r=new an(bo,wo,t,e);r.layers=this.layers,this.add(r);let o=new an(bo,wo,t,e);o.layers=this.layers,this.add(o);let a=new an(bo,wo,t,e);a.layers=this.layers,this.add(a);let l=new an(bo,wo,t,e);l.layers=this.layers,this.add(l);let c=new an(bo,wo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ah=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Rd="\\[\\]\\.:\\/",cy=new RegExp("["+Rd+"]","g"),Pd="[^"+Rd+"]",hy="[^"+Rd.replace("\\.","")+"]",uy=/((?:WC+[\/:])*)/.source.replace("WC",Pd),fy=/(WCOD+)?/.source.replace("WCOD",hy),dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pd),py=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pd),my=new RegExp("^"+uy+fy+dy+py+"$"),gy=["material","materials","bones","map"],Qf=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cy,"")}static parseTrackName(t){let e=my.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);gy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Qf;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J1=new Float32Array(1);var Ud=class Ud{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Ud.prototype.isMatrix2=!0;var jf=Ud;function Id(s,t,e,n){let i=_y(n);switch(e){case vd:return s*t;case Sd:return s*t/i.components*i.byteLength;case mh:return s*t/i.components*i.byteLength;case tr:return s*t*2/i.components*i.byteLength;case gh:return s*t*2/i.components*i.byteLength;case yd:return s*t*3/i.components*i.byteLength;case Vi:return s*t*4/i.components*i.byteLength;case _h:return s*t*4/i.components*i.byteLength;case ja:case tl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case el:case nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vh:case Sh:return Math.max(s,16)*Math.max(t,8)/4;case xh:case yh:return Math.max(s,8)*Math.max(t,8)/2;case Mh:case bh:case Th:case Eh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wh:case il:case Ah:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ch:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Oh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case zh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case kh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Vh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Gh:case Hh:case Wh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Xh:case qh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case sl:case Yh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _y(s){switch(s){case ni:case md:return{byteLength:1,components:1};case Uo:case gd:case ki:return{byteLength:2,components:1};case dh:case ph:return{byteLength:2,components:4};case Bi:case fh:case zi:return{byteLength:4,components:1};case _d:case xd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Y0(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function vy(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,My=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ey=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ry=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ly=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ny=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",$y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,uS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,fS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_S=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SS=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,MS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ES=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,US=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,GS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,JS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,EM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:yy,alphahash_pars_fragment:Sy,alphamap_fragment:My,alphamap_pars_fragment:by,alphatest_fragment:wy,alphatest_pars_fragment:Ty,aomap_fragment:Ey,aomap_pars_fragment:Ay,batching_pars_vertex:Cy,batching_vertex:Ry,begin_vertex:Py,beginnormal_vertex:Iy,bsdfs:Ly,iridescence_fragment:Dy,bumpmap_pars_fragment:Ny,clipping_planes_fragment:Oy,clipping_planes_pars_fragment:Uy,clipping_planes_pars_vertex:Fy,clipping_planes_vertex:By,color_fragment:zy,color_pars_fragment:ky,color_pars_vertex:Vy,color_vertex:Gy,common:Hy,defaultnormal_vertex:Wy,displacementmap_pars_vertex:Xy,displacementmap_vertex:qy,emissivemap_fragment:Yy,emissivemap_pars_fragment:Zy,colorspace_fragment:Jy,colorspace_pars_fragment:$y,envmap_fragment:Ky,envmap_common_pars_fragment:Qy,envmap_pars_fragment:jy,envmap_pars_vertex:tS,envmap_physical_pars_fragment:uS,envmap_vertex:eS,fog_vertex:nS,fog_pars_vertex:iS,fog_fragment:sS,fog_pars_fragment:rS,gradientmap_pars_fragment:oS,lightmap_pars_fragment:aS,lights_lambert_fragment:lS,lights_lambert_pars_fragment:cS,lights_pars_begin:hS,lights_toon_fragment:fS,lights_toon_pars_fragment:dS,lights_phong_fragment:pS,lights_phong_pars_fragment:mS,lights_physical_fragment:gS,lights_physical_pars_fragment:_S,lights_fragment_begin:xS,lights_fragment_maps:vS,lights_fragment_end:yS,lightprobes_pars_fragment:SS,logdepthbuf_fragment:MS,logdepthbuf_pars_fragment:bS,logdepthbuf_pars_vertex:wS,logdepthbuf_vertex:TS,map_fragment:ES,map_pars_fragment:AS,map_particle_fragment:CS,map_particle_pars_fragment:RS,metalnessmap_fragment:PS,metalnessmap_pars_fragment:IS,morphinstance_vertex:LS,morphcolor_vertex:DS,morphnormal_vertex:NS,morphtarget_pars_vertex:OS,morphtarget_vertex:US,normal_fragment_begin:FS,normal_fragment_maps:BS,normal_pars_fragment:zS,normal_pars_vertex:kS,normal_vertex:VS,normalmap_pars_fragment:GS,clearcoat_normal_fragment_begin:HS,clearcoat_normal_fragment_maps:WS,clearcoat_pars_fragment:XS,iridescence_pars_fragment:qS,opaque_fragment:YS,packing:ZS,premultiplied_alpha_fragment:JS,project_vertex:$S,dithering_fragment:KS,dithering_pars_fragment:QS,roughnessmap_fragment:jS,roughnessmap_pars_fragment:tM,shadowmap_pars_fragment:eM,shadowmap_pars_vertex:nM,shadowmap_vertex:iM,shadowmask_pars_fragment:sM,skinbase_vertex:rM,skinning_pars_vertex:oM,skinning_vertex:aM,skinnormal_vertex:lM,specularmap_fragment:cM,specularmap_pars_fragment:hM,tonemapping_fragment:uM,tonemapping_pars_fragment:fM,transmission_fragment:dM,transmission_pars_fragment:pM,uv_pars_fragment:mM,uv_pars_vertex:gM,uv_vertex:_M,worldpos_vertex:xM,background_vert:vM,background_frag:yM,backgroundCube_vert:SM,backgroundCube_frag:MM,cube_vert:bM,cube_frag:wM,depth_vert:TM,depth_frag:EM,distance_vert:AM,distance_frag:CM,equirect_vert:RM,equirect_frag:PM,linedashed_vert:IM,linedashed_frag:LM,meshbasic_vert:DM,meshbasic_frag:NM,meshlambert_vert:OM,meshlambert_frag:UM,meshmatcap_vert:FM,meshmatcap_frag:BM,meshnormal_vert:zM,meshnormal_frag:kM,meshphong_vert:VM,meshphong_frag:GM,meshphysical_vert:HM,meshphysical_frag:WM,meshtoon_vert:XM,meshtoon_frag:qM,points_vert:YM,points_frag:ZM,shadow_vert:JM,shadow_frag:$M,sprite_vert:KM,sprite_frag:QM},Lt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ns={basic:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Un([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Un([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Un([Lt.points,Lt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Un([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Un([Lt.common,Lt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Un([Lt.sprite,Lt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:Un([Lt.common,Lt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:Un([Lt.lights,Lt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};ns.physical={uniforms:Un([ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Jh={r:0,b:0,g:0},jM=new Ue,Z0=new jt;Z0.set(-1,0,0,0,1,0,0,0,1);function tb(s,t,e,n,i,r){let o=new se(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let y=v.backgroundBlurriness>0;E=t.get(E,y)}return E}function m(v){let E=!1,y=f(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,E){let y=f(E);y&&y.isCubeTexture?(c===void 0&&(c=new yn(new ji(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Br(ns.backgroundCube.uniforms),vertexShader:ns.backgroundCube.vertexShader,fragmentShader:ns.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jM.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Z0),c.material.toneMapped=pe.getTransfer(y.colorSpace)!==be,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new yn(new ts(2,2),new mi({name:"BackgroundMaterial",uniforms:Br(ns.background.uniforms),vertexShader:ns.background.vertexShader,fragmentShader:ns.background.fragmentShader,side:js,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=pe.getTransfer(y.colorSpace)!==be,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(Jh,Cd(s)),e.buffers.color.setClear(Jh.r,Jh.g,Jh.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:_,dispose:g}}function eb(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(I,C,O,D,B){let V=!1,U=d(I,D,O,C);r!==U&&(r=U,c(r.object)),V=f(I,D,O,B),V&&m(I,D,O,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(I,C,O,D),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,C,O,D){let B=D.wireframe===!0,V=n[C.id];V===void 0&&(V={},n[C.id]=V);let U=I.isInstancedMesh===!0?I.id:0,J=V[U];J===void 0&&(J={},V[U]=J);let X=J[O.id];X===void 0&&(X={},J[O.id]=X);let R=X[B];return R===void 0&&(R=u(l()),X[B]=R),R}function u(I){let C=[],O=[],D=[];for(let B=0;B<e;B++)C[B]=0,O[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,C,O,D){let B=r.attributes,V=C.attributes,U=0,J=O.getAttributes();for(let X in J)if(J[X].location>=0){let Q=B[X],St=V[X];if(St===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(St=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(St=I.instanceColor)),Q===void 0||Q.attribute!==St||St&&Q.data!==St.data)return!0;U++}return r.attributesNum!==U||r.index!==D}function m(I,C,O,D){let B={},V=C.attributes,U=0,J=O.getAttributes();for(let X in J)if(J[X].location>=0){let Q=V[X];Q===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));let St={};St.attribute=Q,Q&&Q.data&&(St.data=Q.data),B[X]=St,U++}r.attributes=B,r.attributesNum=U,r.index=D}function _(){let I=r.newAttributes;for(let C=0,O=I.length;C<O;C++)I[C]=0}function p(I){g(I,0)}function g(I,C){let O=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;O[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),B[I]!==C&&(s.vertexAttribDivisor(I,C),B[I]=C)}function v(){let I=r.newAttributes,C=r.enabledAttributes;for(let O=0,D=C.length;O<D;O++)C[O]!==I[O]&&(s.disableVertexAttribArray(O),C[O]=0)}function E(I,C,O,D,B,V,U){U===!0?s.vertexAttribIPointer(I,C,O,B,V):s.vertexAttribPointer(I,C,O,D,B,V)}function y(I,C,O,D){_();let B=D.attributes,V=O.getAttributes(),U=C.defaultAttributeValues;for(let J in V){let X=V[J];if(X.location>=0){let R=B[J];if(R===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(R=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(R=I.instanceColor)),R!==void 0){let Q=R.normalized,St=R.itemSize,Dt=t.get(R);if(Dt===void 0)continue;let k=Dt.buffer,ht=Dt.type,Et=Dt.bytesPerElement,It=ht===s.INT||ht===s.UNSIGNED_INT||R.gpuType===fh;if(R.isInterleavedBufferAttribute){let _t=R.data,W=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,lt=R.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let tt=0;tt<X.locationSize;tt++)g(X.location+tt,_t.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let tt=0;tt<X.locationSize;tt++)p(X.location+tt);s.bindBuffer(s.ARRAY_BUFFER,k);for(let tt=0;tt<X.locationSize;tt++)E(X.location+tt,St/X.locationSize,ht,Q,W*Et,(lt+St/X.locationSize*tt)*Et,It)}else{if(R.isInstancedBufferAttribute){for(let _t=0;_t<X.locationSize;_t++)g(X.location+_t,R.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let _t=0;_t<X.locationSize;_t++)p(X.location+_t);s.bindBuffer(s.ARRAY_BUFFER,k);for(let _t=0;_t<X.locationSize;_t++)E(X.location+_t,St/X.locationSize,ht,Q,St*Et,St/X.locationSize*_t*Et,It)}}else if(U!==void 0){let Q=U[J];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(X.location,Q);break;case 3:s.vertexAttrib3fv(X.location,Q);break;case 4:s.vertexAttrib4fv(X.location,Q);break;default:s.vertexAttrib1fv(X.location,Q)}}}}v()}function S(){L();for(let I in n){let C=n[I];for(let O in C){let D=C[O];for(let B in D){let V=D[B];for(let U in V)h(V[U].object),delete V[U];delete D[B]}}delete n[I]}}function M(I){if(n[I.id]===void 0)return;let C=n[I.id];for(let O in C){let D=C[O];for(let B in D){let V=D[B];for(let U in V)h(V[U].object),delete V[U];delete D[B]}}delete n[I.id]}function x(I){for(let C in n){let O=n[C];for(let D in O){let B=O[D];if(B[I.id]===void 0)continue;let V=B[I.id];for(let U in V)h(V[U].object),delete V[U];delete B[I.id]}}}function b(I){for(let C in n){let O=n[C],D=I.isInstancedMesh===!0?I.id:0,B=O[D];if(B!==void 0){for(let V in B){let U=B[V];for(let J in U)h(U[J].object),delete U[J];delete B[V]}delete O[D],Object.keys(O).length===0&&delete n[C]}}}function L(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function nb(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ib(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Vi&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==ni&&x!==zi&&!b&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&$t("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,maxSamples:S,samples:M}}function sb(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Oi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,E=v*4,y=g.clippingState||null;l.value=y,y=h(m,u,E,f);for(let S=0;S!==E;++S)y[S]=e[S];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,y=f;E!==_;++E,y+=4)o.copy(d[E]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var ll=class extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Va(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ji(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Nr});r.uniforms.tEquirect.value=e;let o=new yn(i,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=tn),new Lo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},E0=256,rb=3,ob=20,J0=256,$0=16,ab=3,lb=new K,cb=new se,Bo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Lo(1,10,null),this._boxMesh=new yn(new ji(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=lb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(cb));let p=new Lo(n,i,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(E0,S0(t))}_fromTexture(t,e){t.mapping===Ur||t.mapping===Oo?this._setSize(t.image.length===0?E0:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=A0(t,!1,!1),n=Math.log2(t)-rb;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=A0(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ur||t.mapping===Oo?(this._cubemapMaterial===null&&(this._cubemapMaterial=R0()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=C0()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=hb(),this._integrationMaterial=ub());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/$0);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-ab)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(J0*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=fb());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function A0(s,t,e){return new ll(s,{minFilter:Fi,generateMipmaps:t,type:ki,colorSpace:Na,depthBuffer:e})}function cl(s,t,e){return new mi({name:s,uniforms:t,vertexShader:oe.cube_vert,fragmentShader:e,side:Sn,blending:Nr,depthTest:!1,depthWrite:!1})}function hb(){return cl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${J0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ub(){return cl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fb(){return cl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ob}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function C0(){return cl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function R0(){return cl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function db(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ch||f===hh)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new ll(m.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===ch||f===hh,_=f===Ur||f===Oo;if(m||_){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Bo(s)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Bo(s)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===ch?u.mapping=Ur:f===hh&&(u.mapping=Oo),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function pb(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ir("WebGLRenderer: "+n+" extension not supported."),i}}}function mb(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],s.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,E=p.count>=65535?ka:za,y=new E(Math.ceil(v/3)*6,1),S=y.array;if(_!==null){let x=_.array;g=_.version;for(let b=0,L=0;b<v;b+=3){let A=x[b+0],I=x[b+1],C=x[b+2];S[L++]=A,S[L++]=I,S[L++]=I,S[L++]=C,S[L++]=C,S[L++]=A}}else{g=p.version;for(let x=0,b=0;x<v;x+=3){let L=x+0,A=x+1,I=x+2;S[b++]=L,S[b++]=A,S[b++]=A,S[b++]=I,S[b++]=I,S[b++]=L}}y.version=g;let M=r.get(m);M&&t.remove(M),r.set(m,y)}function u(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function gb(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _b(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function xb(s,t,e){let n=new WeakMap,i=new Pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let L=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*S*4*d),x=new Fa(M,y,S,d);x.type=zi,x.needsUpdate=!0;let b=E*4;for(let A=0;A<d;A++){let I=p[A],C=g[A],O=v[A],D=y*S*4*A;for(let B=0;B<I.count;B++){let V=B*b;f===!0&&(i.fromBufferAttribute(I,B),M[D+V+0]=i.x,M[D+V+1]=i.y,M[D+V+2]=i.z,M[D+V+3]=0),m===!0&&(i.fromBufferAttribute(C,B),M[D+V+4]=i.x,M[D+V+5]=i.y,M[D+V+6]=i.z,M[D+V+7]=0),_===!0&&(i.fromBufferAttribute(O,B),M[D+V+8]=i.x,M[D+V+9]=i.y,M[D+V+10]=i.z,M[D+V+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:x,size:new ce(y,S)},n.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function vb(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var yb={[ad]:"LINEAR_TONE_MAPPING",[ld]:"REINHARD_TONE_MAPPING",[cd]:"CINEON_TONE_MAPPING",[hd]:"ACES_FILMIC_TONE_MAPPING",[fd]:"AGX_TONE_MAPPING",[dd]:"NEUTRAL_TONE_MAPPING",[ud]:"CUSTOM_TONE_MAPPING"};function Sb(s,t,e,n,i,r){let o=new pi(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ys;h.setAttribute("position",new Ei([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ei([0,2,0,0,2,0],2));let d=new qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new yn(h,d),f=new Za(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,E=[],y=!1;this.setSize=function(S,M){o.setSize(S,M),a!==null&&a.setSize(S,M),l!==null&&l.setSize(S,M);for(let x=0;x<E.length;x++){let b=E[x];b.setSize&&b.setSize(S,M)}},this.setEffects=function(S){E=S,y=E.length>0&&E[0].isRenderPass===!0;let M=o.width,x=o.height;E.length>0&&a===null&&(a=new pi(M,x,{type:ki,depthBuffer:!1,stencilBuffer:!1}),l=new pi(M,x,{type:ki,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&E.some(L=>L.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ms(M,x),r===!0&&(c.format=bs,c.type=Fr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let L=0;L<E.length;L++){let A=E[L];A.setSize&&A.setSize(M,x),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,M){if(p||S.toneMapping===On&&E.length===0)return!1;if(v=M,M!==null){let x=M.width,b=M.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return y===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=On,!0},this.hasRenderPass=function(){return y},this.end=function(S,M){S.toneMapping=g,p=!0;let x=o,b=a;for(let L=0;L<E.length;L++){let A=E[L];A.enabled!==!1&&(A.render(S,b,x,M),A.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(m!==S.outputColorSpace||_!==S.toneMapping){m=S.outputColorSpace,_=S.toneMapping,d.defines={},pe.getTransfer(m)===be&&(d.defines.SRGB_TRANSFER="");let L=yb[_];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(v),S.render(u,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var K0=new Yn,Q0=new Ms(1,1),j0=new Ga(1),t_=new Fa,e_=new Gc,n_=new Va,P0=[],I0=[],L0=new Float32Array(16),D0=new Float32Array(9),N0=new Float32Array(4);function zo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=P0[i];if(r===void 0&&(r=new Float32Array(i),P0[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ln(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function cn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Kh(s,t){let e=I0[t];e===void 0&&(e=new Int32Array(t),I0[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Mb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function bb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;s.uniform2fv(this.addr,t),cn(e,t)}}function wb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;s.uniform3fv(this.addr,t),cn(e,t)}}function Tb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;s.uniform4fv(this.addr,t),cn(e,t)}}function Eb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;N0.set(n),s.uniformMatrix2fv(this.addr,!1,N0),cn(e,n)}}function Ab(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;D0.set(n),s.uniformMatrix3fv(this.addr,!1,D0),cn(e,n)}}function Cb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;L0.set(n),s.uniformMatrix4fv(this.addr,!1,L0),cn(e,n)}}function Rb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Pb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;s.uniform2iv(this.addr,t),cn(e,t)}}function Ib(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;s.uniform3iv(this.addr,t),cn(e,t)}}function Lb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;s.uniform4iv(this.addr,t),cn(e,t)}}function Db(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Nb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;s.uniform2uiv(this.addr,t),cn(e,t)}}function Ob(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;s.uniform3uiv(this.addr,t),cn(e,t)}}function Ub(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;s.uniform4uiv(this.addr,t),cn(e,t)}}function Qh(s){return s.version===0&&(s.compareFunction=wd,s.needsUpdate=!0),s}function Fb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Qh(Q0):r=K0,e.setTexture2D(t||r,i)}function Bb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||e_,i)}function zb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Qh(j0):r=n_,e.setTextureCube(t||r,i)}function kb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||t_,i)}function Vb(s){switch(s){case 5126:return Mb;case 35664:return bb;case 35665:return wb;case 35666:return Tb;case 35674:return Eb;case 35675:return Ab;case 35676:return Cb;case 5124:case 35670:return Rb;case 35667:case 35671:return Pb;case 35668:case 35672:return Ib;case 35669:case 35673:return Lb;case 5125:return Db;case 36294:return Nb;case 36295:return Ob;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return zb;case 36289:case 36303:case 36311:case 36292:return kb}}function Gb(s,t){s.uniform1fv(this.addr,t)}function Hb(s,t){let e=zo(t,this.size,2);s.uniform2fv(this.addr,e)}function Wb(s,t){let e=zo(t,this.size,3);s.uniform3fv(this.addr,e)}function Xb(s,t){let e=zo(t,this.size,4);s.uniform4fv(this.addr,e)}function qb(s,t){let e=zo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Yb(s,t){let e=zo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Zb(s,t){let e=zo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Jb(s,t){s.uniform1iv(this.addr,t)}function $b(s,t){s.uniform2iv(this.addr,t)}function Kb(s,t){s.uniform3iv(this.addr,t)}function Qb(s,t){s.uniform4iv(this.addr,t)}function jb(s,t){s.uniform1uiv(this.addr,t)}function tw(s,t){s.uniform2uiv(this.addr,t)}function ew(s,t){s.uniform3uiv(this.addr,t)}function nw(s,t){s.uniform4uiv(this.addr,t)}function iw(s,t,e){let n=this.cache,i=t.length,r=Kh(e,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Qh(Q0):o=K0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function sw(s,t,e){let n=this.cache,i=t.length,r=Kh(e,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||e_,r[o])}function rw(s,t,e){let n=this.cache,i=t.length,r=Kh(e,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Qh(j0):o=n_;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function ow(s,t,e){let n=this.cache,i=t.length,r=Kh(e,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||t_,r[o])}function aw(s){switch(s){case 5126:return Gb;case 35664:return Hb;case 35665:return Wb;case 35666:return Xb;case 35674:return qb;case 35675:return Yb;case 35676:return Zb;case 5124:case 35670:return Jb;case 35667:case 35671:return $b;case 35668:case 35672:return Kb;case 35669:case 35673:return Qb;case 5125:return jb;case 36294:return tw;case 36295:return ew;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return ow}}var zd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vb(e.type)}},kd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=aw(e.type)}},Vd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Fd=/(\w+)(\])?(\[|\.)?/g;function O0(s,t){s.seq.push(t),s.map[t.id]=t}function lw(s,t,e){let n=s.name,i=n.length;for(Fd.lastIndex=0;;){let r=Fd.exec(n),o=Fd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){O0(e,c===void 0?new zd(a,s,t):new kd(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Vd(a),O0(e,d)),e=d}}}var Fo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);lw(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function U0(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var cw=37297,hw=0;function uw(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var F0=new jt;function fw(s){pe._getMatrix(F0,pe.workingColorSpace,s);let t=`mat3( ${F0.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(s)){case Oa:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function B0(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+uw(s.getShaderSource(t),a)}else return r}function dw(s,t){let e=fw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var pw={[ad]:"Linear",[ld]:"Reinhard",[cd]:"Cineon",[hd]:"ACESFilmic",[fd]:"AgX",[dd]:"Neutral",[ud]:"Custom"};function mw(s,t){let e=pw[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $h=new K;function gw(){pe.getLuminanceCoefficients($h);let s=$h.x.toFixed(4),t=$h.y.toFixed(4),e=$h.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _w(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function xw(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vw(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function al(s){return s!==""}function z0(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function k0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(s){return s.replace(yw,Sw)}function Sw(s,t){let e=oe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Gd(e)}var Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(s){return s.replace(Mw,bw)}function bw(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function G0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ww={[Ka]:"SHADOWMAP_TYPE_PCF",[Do]:"SHADOWMAP_TYPE_VSM"};function Tw(s){return ww[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ew={[Oo]:"ENVMAP_MODE_REFRACTION"};function Aw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ew[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cw={[od]:"ENVMAP_BLENDING_MULTIPLY",[r0]:"ENVMAP_BLENDING_MIX",[o0]:"ENVMAP_BLENDING_ADD"};function Rw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Cw[s.combine]||"ENVMAP_BLENDING_NONE"}function Pw(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Tw(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Aw(e),d=Rw(e),u=_w(e),f=xw(r),m=i.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(al).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(al).join(`
`),p.length>0&&(p+=`
`)):(_=[G0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),p=[G0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?oe.tonemapping_pars_fragment:"",e.toneMapping!==On?mw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,dw("linearToOutputTexel",e.outputColorSpace),gw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(al).join(`
`)),o=Gd(o),o=z0(o,e),o=k0(o,e),a=Gd(a),a=z0(a,e),a=k0(a,e),o=V0(o),a=V0(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Td?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+o,E=g+p+a,y=U0(i,i.VERTEX_SHADER,v),S=U0(i,i.FRAGMENT_SHADER,E);i.attachShader(m,y),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function M(A){if(s.debug.checkShaderErrors){let I=i.getProgramInfoLog(m)||"",C=i.getShaderInfoLog(y)||"",O=i.getShaderInfoLog(S)||"",D=I.trim(),B=C.trim(),V=O.trim(),U=!0,J=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,y,S);else{let X=B0(i,y,"vertex"),R=B0(i,S,"fragment");Qt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+X+`
`+R)}else D!==""?$t("WebGLProgram: Program Info Log:",D):(B===""||V==="")&&(J=!1);J&&(A.diagnostics={runnable:U,programLog:D,vertexShader:{log:B,prefix:_},fragmentShader:{log:V,prefix:p}})}i.deleteShader(y),i.deleteShader(S),x=new Fo(i,m),b=vw(i,m)}let x;this.getUniforms=function(){return x===void 0&&M(this),x};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(m,cw)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hw++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=S,this}var Iw=0,Hd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wd(t),e.set(t,n)),n}},Wd=class{constructor(t){this.id=Iw++,this.code=t,this.usedTimes=0}};function Lw(s){return s===tr||s===il||s===sl}function Dw(s,t,e,n,i,r){let o=new Ba,a=new Hd,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,L,A,I,C){let O=A.fog,D=I.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=t.get(x.envMap||B,V),J=u[x.type],X=n.precision;x.precision!==null&&(X=n.getMaxPrecision(x.precision),X!==x.precision&&$t("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let R=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=R!==void 0?R.length:0,St=0;D.morphAttributes.position!==void 0&&(St=1),D.morphAttributes.normal!==void 0&&(St=2),D.morphAttributes.color!==void 0&&(St=3);let Dt,k,ht,Et;if(J){let rt=ns[J];Dt=rt.vertexShader,k=rt.fragmentShader}else{Dt=x.vertexShader,k=x.fragmentShader;let rt=a.getVertexShaderStage(x),Nt=a.getFragmentShaderStage(x);a.update(x,rt,Nt),ht=rt.id,Et=Nt.id}let It=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),W=I.isInstancedMesh===!0,lt=I.isBatchedMesh===!0,tt=!!x.map,ut=!!x.matcap,ct=!!U,H=ct&&U.isPMREMTexture===!0,ft=!!x.aoMap,Mt=!!x.lightMap,G=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,Jt=!!x.displacementMap,Kt=!!x.emissiveMap,qt=!!x.metalnessMap,te=!!x.roughnessMap,xe=x.anisotropy>0,z=x.clearcoat>0,Xt=x.diffuseRoughness>0,Yt=x.dispersion>0,Ht=x.retroreflectivity>0,vt=x.iridescence>0,he=x.sheen>0,Ft=x.transmission>0,Wt=xe&&!!x.anisotropyMap,P=z&&!!x.clearcoatMap,w=z&&!!x.clearcoatNormalMap,q=z&&!!x.clearcoatRoughnessMap,dt=Xt&&!!x.diffuseRoughnessMap,ot=vt&&!!x.iridescenceMap,mt=vt&&!!x.iridescenceThicknessMap,At=he&&!!x.sheenColorMap,Z=he&&!!x.sheenRoughnessMap,it=!!x.specularMap,yt=!!x.specularColorMap,N=!!x.specularIntensityMap,nt=Ft&&!!x.transmissionMap,et=Ft&&!!x.thicknessMap,bt=!!x.gradientMap,gt=!!x.alphaMap,wt=x.alphaTest>0,pt=!!x.alphaHash,Tt=!!x.extensions,at=On;x.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(at=s.toneMapping);let st=H?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,Ct={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Dt,fragmentShader:k,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:Et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:lt,batchingColor:lt&&I._colorsTexture!==null,instancing:W,instancingColor:W&&I.instanceColor!==null,instancingMorph:W&&I.morphTexture!==null,outputColorSpace:It===null?s.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:tt,matcap:ut,envMap:ct,envMapMode:ct&&U.mapping,envMapPMREM:H,envMapMaxLod:H?st.length-1:null,envMapSize:H?st[0].width:null,aoMap:ft,lightMap:Mt,bumpMap:G,normalMap:xt,displacementMap:Jt,emissiveMap:Kt,normalMapObjectSpace:xt&&x.normalMapType===c0,normalMapTangentSpace:xt&&x.normalMapType===Zh,packedNormalMap:xt&&x.normalMapType===Zh&&Lw(x.normalMap.format),metalnessMap:qt,roughnessMap:te,anisotropy:xe,anisotropyMap:Wt,clearcoat:z,clearcoatMap:P,clearcoatNormalMap:w,clearcoatRoughnessMap:q,diffuseRoughness:Xt,diffuseRoughnessMap:dt,dispersion:Yt,retroreflection:Ht,iridescence:vt,iridescenceMap:ot,iridescenceThicknessMap:mt,sheen:he,sheenColorMap:At,sheenRoughnessMap:Z,specularMap:it,specularColorMap:yt,specularIntensityMap:N,transmission:Ft,transmissionMap:nt,thicknessMap:et,gradientMap:bt,opaque:x.transparent===!1&&x.blending===No&&x.alphaToCoverage===!1,alphaMap:gt,alphaTest:wt,alphaHash:pt,combine:x.combine,mapUv:tt&&f(x.map.channel),aoMapUv:ft&&f(x.aoMap.channel),lightMapUv:Mt&&f(x.lightMap.channel),bumpMapUv:G&&f(x.bumpMap.channel),normalMapUv:xt&&f(x.normalMap.channel),displacementMapUv:Jt&&f(x.displacementMap.channel),emissiveMapUv:Kt&&f(x.emissiveMap.channel),metalnessMapUv:qt&&f(x.metalnessMap.channel),roughnessMapUv:te&&f(x.roughnessMap.channel),anisotropyMapUv:Wt&&f(x.anisotropyMap.channel),clearcoatMapUv:P&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:dt&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:At&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(x.sheenRoughnessMap.channel),specularMapUv:it&&f(x.specularMap.channel),specularColorMapUv:yt&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:nt&&f(x.transmissionMap.channel),thicknessMapUv:et&&f(x.thicknessMap.channel),alphaMapUv:gt&&f(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(xt||xe),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(tt||gt),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:St,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:C.filter(rt=>rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:tt&&x.map.isVideoTexture===!0&&pe.getTransfer(x.map.colorSpace)===be,decodeVideoTextureEmissive:Kt&&x.emissiveMap.isVideoTexture===!0&&pe.getTransfer(x.emissiveMap.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ai,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Tt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&x.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(b,x),g(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let b=u[x.type],L;if(b){let A=ns[b];L=b0.clone(A.uniforms)}else L=x.uniforms;return L}function E(x,b){let L=h.get(b);return L!==void 0?++L.usedTimes:(L=new Pw(s,b,x,i),c.push(L),h.set(b,L)),L}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function M(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:E,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:M}}function Nw(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ow(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function H0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function W0(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,p,g){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},s[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=o(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=p,v.group=g),t++,v}function l(u,f,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let E=a(u,f,m,_,p,g);m.transmission>0?n.push(E):m.transparent===!0?i.push(E):e.push(E)}function c(u,f,m,_,p,g){let v=a(u,f,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||Ow),n.length>1&&n.sort(f||H0),i.length>1&&i.sort(f||H0)}function d(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Uw(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new W0,s.set(n,[o])):i>=r.length?(o=new W0,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Fw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new K,color:new se};break;case"SpotLight":e={position:new K,direction:new K,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new K,halfWidth:new K,halfHeight:new K};break}return s[t.id]=e,e}}}function Bw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var zw=0;function kw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Vw(s){let t=new Fw,e=Bw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);let i=new K,r=new Ue,o=new Ue;function a(c){let h=0,d=0,u=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,v=0,E=0,y=0,S=0,M=0,x=0,b=0,L=0,A=0;c.sort(kw);for(let C=0,O=c.length;C<O;C++){let D=c[C],B=D.color,V=D.intensity,U=D.distance,J=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===tr?J=D.shadow.map.texture:J=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*V,d+=B.g*V,u+=B.b*V;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],V);A++}else if(D.isSunLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let R=D.shadow,Q=e.get(D);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=J;let St=R.getViewportCount();for(let Dt=0;Dt<St;Dt++)n.sunShadowMatrix[_+Dt]=R.getMatrix(Dt),n.sunShadowCascade[_+Dt]=R._cascadeData[Dt];_+=St,m++}n.sun[f]=X,f++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let R=D.shadow,Q=e.get(D);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=D.shadow.matrix,S++}n.directional[p]=X,p++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(B).multiplyScalar(V),X.distance=U,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[v]=X;let R=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,R.updateMatrices(D),D.castShadow&&L++),n.spotLightMatrix[v]=R.matrix,D.castShadow){let Q=e.get(D);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=J,x++}v++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(B).multiplyScalar(V),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=X,E++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let R=D.shadow,Q=e.get(D);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,Q.shadowCameraNear=R.camera.near,Q.shadowCameraFar=R.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=X,g++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(V),X.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[y]=X,y++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==E||I.hemiLength!==y||I.numSunShadows!==m||I.numDirectionalShadows!==S||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==b||I.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=E,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-L,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=A,I.sunLength=f,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=E,I.hemiLength=y,I.numSunShadows=m,I.numDirectionalShadows=S,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=b,I.numLightProbes=A,n.version=zw++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let y=c[v];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),u++}else if(y.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function X0(s){let t=new Vw(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gw(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new X0(s),t.set(i,[a])):r>=o.length?(a=new X0(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ww=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xw=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],qw=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],q0=new Ue,ol=new K,Bd=new K;function Yw(s,t,e){let n=new Js,i=new ce,r=new ce,o=new Pe,a=new Zc,l=new Jc,c={},h=e.maxTextureSize,d={[js]:Sn,[Sn]:js,[Ai]:Ai},u=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Hw,fragmentShader:Ww}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ys;m.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new yn(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka;let g=this.type;this.render=function(M,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===kg&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ka);let L=s.getRenderTarget(),A=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),C=s.state;C.setBlending(Nr),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let O=g!==this.type;O&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=M.length;D<B;D++){let V=M[D],U=V.shadow;if(U===void 0){$t("WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let J=U.getFrameExtents();i.multiply(J),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,U.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=X,U.map===null||O===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Do){if(V.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new pi(i.x,i.y,{format:tr,type:ki,minFilter:tn,magFilter:tn,generateMipmaps:!1}),U.map.texture.name=V.name+".shadowMap",U.map.depthTexture=new Ms(i.x,i.y,zi),U.map.depthTexture.name=V.name+".shadowMapDepth",U.map.depthTexture.format=Ss,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=pn,U.map.depthTexture.magFilter=pn}else V.isPointLight?(U.map=new ll(i.x),U.map.depthTexture=new Ga(i.x,Bi)):(U.map=new pi(i.x,i.y),U.map.depthTexture=new Ms(i.x,i.y,Bi)),U.map.depthTexture.name=V.name+".shadowMap",U.map.depthTexture.format=Ss,this.type===Ka?(U.map.depthTexture.compareFunction=X?bd:Md,U.map.depthTexture.minFilter=tn,U.map.depthTexture.magFilter=tn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=pn,U.map.depthTexture.magFilter=pn);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let R=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();V.isPointLight!==!0&&U.updateMatrices(V,b);let Q=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:b.layers;for(let St=0;St<R;St++){let Dt=U.getCamera(St);if(V.isPointLight){let k=U.camera,ht=U.matrix,Et=V.distance||k.far;Et!==k.far&&(k.far=Et,k.updateProjectionMatrix()),ol.setFromMatrixPosition(V.matrixWorld),k.position.copy(ol),Bd.copy(k.position),Bd.add(Xw[St]),k.up.copy(qw[St]),k.lookAt(Bd),k.updateMatrixWorld(),ht.makeTranslation(-ol.x,-ol.y,-ol.z),q0.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),U._frustum.setFromProjectionMatrix(q0,k.coordinateSystem,k.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,St),s.clear();else{St===0&&(s.setRenderTarget(U.map),s.clear());let k=U.getViewport(St);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),C.viewport(o)}n=U.getFrustum(St),y(x,b,Dt,V,Q,this.type)}U.isPointLightShadow!==!0&&this.type===Do&&v(U,b),U.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(L,A,I)};function v(M,x){let b=t.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new pi(i.x,i.y,{format:tr,type:ki}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(x,null,b,u,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(x,null,b,f,_,null)}function E(M,x,b,L){let A=null,I=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)A=I;else if(A=b.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let C=A.uuid,O=x.uuid,D=c[C];D===void 0&&(D={},c[C]=D);let B=D[O];B===void 0&&(B=A.clone(),D[O]=B,x.addEventListener("dispose",S)),A=B}if(A.visible=x.visible,A.wireframe=x.wireframe,L===Do?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let C=s.properties.get(A);C.light=b}return A}function y(M,x,b,L,A,I){if(M.visible===!1)return;if(M.layers.test(A)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===Do)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);let D=t.update(M),B=M.material;if(Array.isArray(B)){let V=D.groups;for(let U=0,J=V.length;U<J;U++){let X=V[U],R=B[X.materialIndex];if(R&&R.visible){let Q=E(M,R,L,I);M.onBeforeShadow(s,M,x,b,D,Q,X),s.renderBufferDirect(b,null,D,Q,M,X),M.onAfterShadow(s,M,x,b,D,Q,X)}}}else if(B.visible){let V=E(M,B,L,I);M.onBeforeShadow(s,M,x,b,D,V,null),s.renderBufferDirect(b,null,D,V,M,null),M.onAfterShadow(s,M,x,b,D,V,null)}}let O=M.children;for(let D=0,B=O.length;D<B;D++)y(O[D],x,b,L,A,I)}function S(M){M.target.removeEventListener("dispose",S);for(let b in c){let L=c[b],A=M.target.uuid;A in L&&(L[A].dispose(),delete L[A])}}}function Zw(s,t){function e(){let N=!1,nt=new Pe,et=null,bt=new Pe(0,0,0,0);return{setMask:function(gt){et!==gt&&!N&&(s.colorMask(gt,gt,gt,gt),et=gt)},setLocked:function(gt){N=gt},setClear:function(gt,wt,pt,Tt,at){at===!0&&(gt*=Tt,wt*=Tt,pt*=Tt),nt.set(gt,wt,pt,Tt),bt.equals(nt)===!1&&(s.clearColor(gt,wt,pt,Tt),bt.copy(nt))},reset:function(){N=!1,et=null,bt.set(-1,0,0,0)}}}function n(){let N=!1,nt=!1,et=null,bt=null,gt=null;return{setReversed:function(wt){if(nt!==wt){let pt=t.get("EXT_clip_control");wt?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),nt=wt;let Tt=gt;gt=null,this.setClear(Tt)}},getReversed:function(){return nt},setTest:function(wt){wt?_t(s.DEPTH_TEST):W(s.DEPTH_TEST)},setMask:function(wt){et!==wt&&!N&&(s.depthMask(wt),et=wt)},setFunc:function(wt){if(nt&&(wt=y0[wt]),bt!==wt){switch(wt){case Rc:s.depthFunc(s.NEVER);break;case Pc:s.depthFunc(s.ALWAYS);break;case Ic:s.depthFunc(s.LESS);break;case Eo:s.depthFunc(s.LEQUAL);break;case Lc:s.depthFunc(s.EQUAL);break;case Dc:s.depthFunc(s.GEQUAL);break;case Nc:s.depthFunc(s.GREATER);break;case Oc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}bt=wt}},setLocked:function(wt){N=wt},setClear:function(wt){gt!==wt&&(gt=wt,nt&&(wt=1-wt),s.clearDepth(wt))},reset:function(){N=!1,et=null,bt=null,gt=null,nt=!1}}}function i(){let N=!1,nt=null,et=null,bt=null,gt=null,wt=null,pt=null,Tt=null,at=null;return{setTest:function(st){N||(st?_t(s.STENCIL_TEST):W(s.STENCIL_TEST))},setMask:function(st){nt!==st&&!N&&(s.stencilMask(st),nt=st)},setFunc:function(st,Ct,rt){(et!==st||bt!==Ct||gt!==rt)&&(s.stencilFunc(st,Ct,rt),et=st,bt=Ct,gt=rt)},setOp:function(st,Ct,rt){(wt!==st||pt!==Ct||Tt!==rt)&&(s.stencilOp(st,Ct,rt),wt=st,pt=Ct,Tt=rt)},setLocked:function(st){N=st},setClear:function(st){at!==st&&(s.clearStencil(st),at=st)},reset:function(){N=!1,nt=null,et=null,bt=null,gt=null,wt=null,pt=null,Tt=null,at=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,E=null,y=null,S=null,M=null,x=null,b=new se(0,0,0),L=0,A=!1,I=null,C=null,O=null,D=null,B=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,J=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),U=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),U=J>=2);let R=null,Q={},St=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),k=new Pe().fromArray(St),ht=new Pe().fromArray(Dt);function Et(N,nt,et,bt){let gt=new Uint8Array(4),wt=s.createTexture();s.bindTexture(N,wt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<et;pt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(nt+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return wt}let It={};It[s.TEXTURE_2D]=Et(s.TEXTURE_2D,s.TEXTURE_2D,1),It[s.TEXTURE_CUBE_MAP]=Et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[s.TEXTURE_2D_ARRAY]=Et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),It[s.TEXTURE_3D]=Et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(s.DEPTH_TEST),o.setFunc(Eo),G(!1),xt(td),_t(s.CULL_FACE),ft(Nr);function _t(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function W(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function lt(N,nt){return u[N]!==nt?(s.bindFramebuffer(N,nt),u[N]=nt,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=nt),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function tt(N,nt){let et=m,bt=!1;if(N){et=f.get(nt),et===void 0&&(et=[],f.set(nt,et));let gt=N.textures;if(et.length!==gt.length||et[0]!==s.COLOR_ATTACHMENT0){for(let wt=0,pt=gt.length;wt<pt;wt++)et[wt]=s.COLOR_ATTACHMENT0+wt;et.length=gt.length,bt=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,bt=!0);bt&&s.drawBuffers(et)}function ut(N){return _!==N?(s.useProgram(N),_=N,!0):!1}let ct={[Or]:s.FUNC_ADD,[Gg]:s.FUNC_SUBTRACT,[Hg]:s.FUNC_REVERSE_SUBTRACT};ct[Wg]=s.MIN,ct[Xg]=s.MAX;let H={[qg]:s.ZERO,[Yg]:s.ONE,[Zg]:s.SRC_COLOR,[sd]:s.SRC_ALPHA,[t0]:s.SRC_ALPHA_SATURATE,[Qg]:s.DST_COLOR,[$g]:s.DST_ALPHA,[Jg]:s.ONE_MINUS_SRC_COLOR,[rd]:s.ONE_MINUS_SRC_ALPHA,[jg]:s.ONE_MINUS_DST_COLOR,[Kg]:s.ONE_MINUS_DST_ALPHA,[e0]:s.CONSTANT_COLOR,[n0]:s.ONE_MINUS_CONSTANT_COLOR,[i0]:s.CONSTANT_ALPHA,[s0]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(N,nt,et,bt,gt,wt,pt,Tt,at,st){if(N===Nr){p===!0&&(W(s.BLEND),p=!1);return}if(p===!1&&(_t(s.BLEND),p=!0),N!==Vg){if(N!==g||st!==A){if((v!==Or||S!==Or)&&(s.blendEquation(s.FUNC_ADD),v=Or,S=Or),st)switch(N){case No:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ed:s.blendFunc(s.ONE,s.ONE);break;case nd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case id:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Qt("WebGLState: Invalid blending: ",N);break}else switch(N){case No:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ed:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case nd:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case id:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",N);break}E=null,y=null,M=null,x=null,b.set(0,0,0),L=0,g=N,A=st}return}gt=gt||nt,wt=wt||et,pt=pt||bt,(nt!==v||gt!==S)&&(s.blendEquationSeparate(ct[nt],ct[gt]),v=nt,S=gt),(et!==E||bt!==y||wt!==M||pt!==x)&&(s.blendFuncSeparate(H[et],H[bt],H[wt],H[pt]),E=et,y=bt,M=wt,x=pt),(Tt.equals(b)===!1||at!==L)&&(s.blendColor(Tt.r,Tt.g,Tt.b,at),b.copy(Tt),L=at),g=N,A=!1}function Mt(N,nt){N.side===Ai?W(s.CULL_FACE):_t(s.CULL_FACE);let et=N.side===Sn;nt&&(et=!et),G(et),N.blending===No&&N.transparent===!1?ft(Nr):ft(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let bt=N.stencilWrite;a.setTest(bt),bt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Kt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):W(s.SAMPLE_ALPHA_TO_COVERAGE)}function G(N){I!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),I=N)}function xt(N){N!==Bg?(_t(s.CULL_FACE),N!==C&&(N===td?s.cullFace(s.BACK):N===zg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):W(s.CULL_FACE),C=N}function Jt(N){N!==O&&(U&&s.lineWidth(N),O=N)}function Kt(N,nt,et){N?(_t(s.POLYGON_OFFSET_FILL),(D!==nt||B!==et)&&(D=nt,B=et,o.getReversed()&&(nt=-nt,et=-et),s.polygonOffset(nt,et))):W(s.POLYGON_OFFSET_FILL)}function qt(N){N?_t(s.SCISSOR_TEST):W(s.SCISSOR_TEST)}function te(N){N===void 0&&(N=s.TEXTURE0+V-1),R!==N&&(s.activeTexture(N),R=N)}function xe(N,nt,et){et===void 0&&(R===null?et=s.TEXTURE0+V-1:et=R);let bt=Q[et];bt===void 0&&(bt={type:void 0,texture:void 0},Q[et]=bt),(bt.type!==N||bt.texture!==nt)&&(R!==et&&(s.activeTexture(et),R=et),s.bindTexture(N,nt||It[N]),bt.type=N,bt.texture=nt)}function z(){let N=Q[R];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Xt(){try{s.compressedTexImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function Yt(){try{s.compressedTexImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function Ht(){try{s.texSubImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function vt(){try{s.texSubImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function Ft(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function Wt(){try{s.texStorage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function P(){try{s.texStorage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function w(){try{s.texImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function q(){try{s.texImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function dt(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function ot(N,nt){d[N]!==nt&&(s.pixelStorei(N,nt),d[N]=nt)}function mt(N){k.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),k.copy(N))}function At(N){ht.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ht.copy(N))}function Z(N,nt){let et=c.get(nt);et===void 0&&(et=new WeakMap,c.set(nt,et));let bt=et.get(N);bt===void 0&&(bt=s.getUniformBlockIndex(nt,N.name),s.uniformBlockBinding(nt,bt,bt),et.set(N,bt))}function it(N,nt,et){let gt=c.get(nt).get(N);l[gt]!==et&&(s.bindBufferBase(s.UNIFORM_BUFFER,gt,et),l[gt]=et)}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,Q={},u={},l={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,E=null,y=null,S=null,M=null,x=null,b=new se(0,0,0),L=0,A=!1,I=null,C=null,O=null,D=null,B=null,k.set(0,0,s.canvas.width,s.canvas.height),ht.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:W,bindFramebuffer:lt,drawBuffers:tt,useProgram:ut,setBlending:ft,setMaterial:Mt,setFlipSided:G,setCullFace:xt,setLineWidth:Jt,setPolygonOffset:Kt,setScissorTest:qt,activeTexture:te,bindTexture:xe,unbindTexture:z,compressedTexImage2D:Xt,compressedTexImage3D:Yt,texImage2D:w,texImage3D:q,pixelStorei:ot,getParameter:dt,updateUBOMapping:Z,uniformBlockBinding:it,texStorage2D:Wt,texStorage3D:P,texSubImage2D:Ht,texSubImage3D:vt,compressedTexSubImage2D:he,compressedTexSubImage3D:Ft,scissor:mt,viewport:At,reset:yt}}function Jw(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,_=new FinalizationRegistry(P=>m.delete(P)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):Ua("canvas")}function v(P,w,q){let dt=1,ot=Wt(P);if((ot.width>q||ot.height>q)&&(dt=q/Math.max(ot.width,ot.height)),dt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let mt=Math.floor(dt*ot.width),At=Math.floor(dt*ot.height);u===void 0&&(u=g(mt,At));let Z=w?g(mt,At):u;return Z.width=mt,Z.height=At,Z.getContext("2d").drawImage(P,0,0,mt,At),$t("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+mt+"x"+At+")."),Z}else return"data"in P&&$t("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),P;return P}function E(P){return P.generateMipmaps}function y(P){s.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(P,w,q,dt,ot,mt=!1){if(P!==null){if(s[P]!==void 0)return s[P];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let At;dt&&(At=t.get("EXT_texture_norm16"),At||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=w;if(w===s.RED&&(q===s.FLOAT&&(Z=s.R32F),q===s.HALF_FLOAT&&(Z=s.R16F),q===s.UNSIGNED_BYTE&&(Z=s.R8),q===s.UNSIGNED_SHORT&&At&&(Z=At.R16_EXT),q===s.SHORT&&At&&(Z=At.R16_SNORM_EXT)),w===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(Z=s.R8UI),q===s.UNSIGNED_SHORT&&(Z=s.R16UI),q===s.UNSIGNED_INT&&(Z=s.R32UI),q===s.BYTE&&(Z=s.R8I),q===s.SHORT&&(Z=s.R16I),q===s.INT&&(Z=s.R32I)),w===s.RG&&(q===s.FLOAT&&(Z=s.RG32F),q===s.HALF_FLOAT&&(Z=s.RG16F),q===s.UNSIGNED_BYTE&&(Z=s.RG8),q===s.UNSIGNED_SHORT&&At&&(Z=At.RG16_EXT),q===s.SHORT&&At&&(Z=At.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(Z=s.RG8UI),q===s.UNSIGNED_SHORT&&(Z=s.RG16UI),q===s.UNSIGNED_INT&&(Z=s.RG32UI),q===s.BYTE&&(Z=s.RG8I),q===s.SHORT&&(Z=s.RG16I),q===s.INT&&(Z=s.RG32I)),w===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),q===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),q===s.UNSIGNED_INT&&(Z=s.RGB32UI),q===s.BYTE&&(Z=s.RGB8I),q===s.SHORT&&(Z=s.RGB16I),q===s.INT&&(Z=s.RGB32I)),w===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),q===s.UNSIGNED_INT&&(Z=s.RGBA32UI),q===s.BYTE&&(Z=s.RGBA8I),q===s.SHORT&&(Z=s.RGBA16I),q===s.INT&&(Z=s.RGBA32I)),w===s.RGB&&(q===s.UNSIGNED_SHORT&&At&&(Z=At.RGB16_EXT),q===s.SHORT&&At&&(Z=At.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),w===s.RGBA){let it=mt?Oa:pe.getTransfer(ot);q===s.FLOAT&&(Z=s.RGBA32F),q===s.HALF_FLOAT&&(Z=s.RGBA16F),q===s.UNSIGNED_BYTE&&(Z=it===be?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&At&&(Z=At.RGBA16_EXT),q===s.SHORT&&At&&(Z=At.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(P,w){let q;return P?w===null||w===Bi||w===Fr?q=s.DEPTH24_STENCIL8:w===zi?q=s.DEPTH32F_STENCIL8:w===Uo&&(q=s.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Bi||w===Fr?q=s.DEPTH_COMPONENT24:w===zi?q=s.DEPTH_COMPONENT32F:w===Uo&&(q=s.DEPTH_COMPONENT16),q}function b(P,w){return E(P)===!0||P.isFramebufferTexture&&P.minFilter!==pn&&P.minFilter!==tn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function L(P){let w=new WeakRef(P);n.get(P).__ref=w,m.add(w),_.register(P,w,w)}function A(P){let w=n.get(P).__ref;w!==void 0&&(m.delete(w),_.unregister(w))}function I(P){O(P.target)}function C(P){D(P.target)}function O(P){P.removeEventListener("dispose",I),A(P),V(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&d.delete(P)}function D(P){P.removeEventListener("dispose",C),A(P),J(P)}function B(){for(let P of m){let w=P.deref();w!==void 0&&(w.isRenderTarget===!0?D(w):O(w))}m.clear(),d.clear()}function V(P){let w=n.get(P);if(w.__webglInit===void 0)return;let q=P.source,dt=f.get(q);if(dt){let ot=dt[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&U(P),Object.keys(dt).length===0&&f.delete(q)}n.remove(P)}function U(P){let w=n.get(P);s.deleteTexture(w.__webglTexture);let q=P.source,dt=f.get(q);delete dt[w.__cacheKey],o.memory.textures--}function J(P){let w=n.get(P);w.__depthDisposeCallback&&w.__depthDisposeCallback();let q=P.depthTexture;if(q&&q.renderTarget===P&&O(q),P.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(w.__webglFramebuffer[ot]))for(let mt=0;mt<w.__webglFramebuffer[ot].length;mt++)s.deleteFramebuffer(w.__webglFramebuffer[ot][mt]);else s.deleteFramebuffer(w.__webglFramebuffer[ot]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ot])}else{if(Array.isArray(w.__webglFramebuffer))for(let ot=0;ot<w.__webglFramebuffer.length;ot++)s.deleteFramebuffer(w.__webglFramebuffer[ot]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ot=0;ot<w.__webglColorRenderbuffer.length;ot++)w.__webglColorRenderbuffer[ot]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ot]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let dt=P.textures;for(let ot=0,mt=dt.length;ot<mt;ot++){let At=n.get(dt[ot]);At.__webglTexture&&(s.deleteTexture(At.__webglTexture),o.memory.textures--),n.remove(dt[ot])}n.remove(P)}let X=0;function R(){X=0}function Q(){return X}function St(P){X=P}function Dt(){let P=X;return P>=i.maxTextures&&$t("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,P}function k(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.mipmapsAutoUpdate),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function ht(P,w){let q=n.get(P);if(P.isVideoTexture&&he(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){let dt=P.image;if(dt===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(q,P,w);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+w)}function Et(P,w){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Mt(q,P,w);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+w)}function It(P,w){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Mt(q,P,w);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+w)}function _t(P,w){let q=n.get(P);if(P.version>0&&q.__version!==P.version){G(q,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+w)}let W={[Uc]:s.REPEAT,[$i]:s.CLAMP_TO_EDGE,[Fc]:s.MIRRORED_REPEAT},lt={[pn]:s.NEAREST,[a0]:s.NEAREST_MIPMAP_NEAREST,[Qa]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[uh]:s.LINEAR_MIPMAP_NEAREST,[Fi]:s.LINEAR_MIPMAP_LINEAR},tt={[u0]:s.NEVER,[wd]:s.ALWAYS,[f0]:s.LESS,[Md]:s.LEQUAL,[d0]:s.EQUAL,[bd]:s.GEQUAL,[p0]:s.GREATER,[m0]:s.NOTEQUAL};function ut(P,w){if(w.type===zi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===tn||w.magFilter===uh||w.magFilter===Qa||w.magFilter===Fi||w.minFilter===tn||w.minFilter===uh||w.minFilter===Qa||w.minFilter===Fi)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,W[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,W[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,W[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,lt[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,lt[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,tt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===pn||w.minFilter!==Qa&&w.minFilter!==Fi||w.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ct(P,w){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",I),L(w));let dt=w.source,ot=f.get(dt);ot===void 0&&(ot={},f.set(dt,ot));let mt=k(w);if(mt!==P.__cacheKey){ot[mt]===void 0&&(ot[mt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ot[mt].usedTimes++;let At=ot[P.__cacheKey];At!==void 0&&(ot[P.__cacheKey].usedTimes--,At.usedTimes===0&&U(w)),P.__cacheKey=mt,P.__webglTexture=ot[mt].texture}return q}function H(P,w,q){return Math.floor(Math.floor(P/q)/w)}function ft(P,w,q,dt){let mt=P.updateRanges;if(mt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,q,dt,w.data);else{mt.sort((N,nt)=>N.start-nt.start);let At=0;for(let N=1;N<mt.length;N++){let nt=mt[At],et=mt[N],bt=nt.start+nt.count,gt=H(et.start,w.width,4),wt=H(nt.start,w.width,4);et.start<=bt+1&&gt===wt&&H(et.start+et.count-1,w.width,4)===gt?nt.count=Math.max(nt.count,et.start+et.count-nt.start):(++At,mt[At]=et)}mt.length=At+1;let Z=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),yt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let N=0,nt=mt.length;N<nt;N++){let et=mt[N],bt=Math.floor(et.start/4),gt=Math.ceil(et.count/4),wt=bt%w.width,pt=Math.floor(bt/w.width),Tt=gt,at=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,wt),e.pixelStorei(s.UNPACK_SKIP_ROWS,pt),e.texSubImage2D(s.TEXTURE_2D,0,wt,pt,Tt,at,q,dt,w.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,yt)}}function Mt(P,w,q){let dt=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(dt=s.TEXTURE_3D);let ot=ct(P,w),mt=w.source;e.bindTexture(dt,P.__webglTexture,s.TEXTURE0+q);let At=n.get(mt);if(mt.version!==At.__version||ot===!0){if(e.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let at=pe.getPrimaries(pe.workingColorSpace),st=w.colorSpace===Gi?null:pe.getPrimaries(w.colorSpace),Ct=w.colorSpace===Gi||at===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let it=v(w.image,!1,i.maxTextureSize);it=Ft(w,it);let yt=r.convert(w.format,w.colorSpace),N=r.convert(w.type),nt=M(w.internalFormat,yt,N,w.normalized,w.colorSpace,w.isVideoTexture);ut(dt,w);let et,bt=w.mipmaps,gt=w.isVideoTexture!==!0,wt=At.__version===void 0||ot===!0,pt=mt.dataReady,Tt=b(w,it);if(w.isDepthTexture)nt=x(w.format===bs,w.type),wt&&(gt?e.texStorage2D(s.TEXTURE_2D,1,nt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,nt,it.width,it.height,0,yt,N,null));else if(w.isDataTexture)if(bt.length>0){gt&&wt&&e.texStorage2D(s.TEXTURE_2D,Tt,nt,bt[0].width,bt[0].height);for(let at=0,st=bt.length;at<st;at++)et=bt[at],gt?pt&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,et.width,et.height,yt,N,et.data):e.texImage2D(s.TEXTURE_2D,at,nt,et.width,et.height,0,yt,N,et.data);w.generateMipmaps=!1}else gt?(wt&&e.texStorage2D(s.TEXTURE_2D,Tt,nt,it.width,it.height),pt&&ft(w,it,yt,N)):e.texImage2D(s.TEXTURE_2D,0,nt,it.width,it.height,0,yt,N,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){gt&&wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,nt,bt[0].width,bt[0].height,it.depth);for(let at=0,st=bt.length;at<st;at++)if(et=bt[at],w.format!==Vi)if(yt!==null)if(gt){if(pt)if(w.layerUpdates.size>0){let Ct=Id(et.width,et.height,w.format,w.type);for(let rt of w.layerUpdates){let Nt=et.data.subarray(rt*Ct/et.data.BYTES_PER_ELEMENT,(rt+1)*Ct/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,rt,et.width,et.height,1,yt,Nt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,et.width,et.height,it.depth,yt,et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,nt,et.width,et.height,it.depth,0,et.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,et.width,et.height,it.depth,yt,N,et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,nt,et.width,et.height,it.depth,0,yt,N,et.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{gt&&wt&&e.texStorage2D(s.TEXTURE_2D,Tt,nt,bt[0].width,bt[0].height);for(let at=0,st=bt.length;at<st;at++)et=bt[at],w.format!==Vi?yt!==null?gt?pt&&e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,et.width,et.height,yt,et.data):e.compressedTexImage2D(s.TEXTURE_2D,at,nt,et.width,et.height,0,et.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?pt&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,et.width,et.height,yt,N,et.data):e.texImage2D(s.TEXTURE_2D,at,nt,et.width,et.height,0,yt,N,et.data)}else if(w.isDataArrayTexture)if(gt){if(wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,nt,it.width,it.height,it.depth),pt)if(w.layerUpdates.size>0){let at=Id(it.width,it.height,w.format,w.type);for(let st of w.layerUpdates){let Ct=it.data.subarray(st*at/it.data.BYTES_PER_ELEMENT,(st+1)*at/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,st,it.width,it.height,1,yt,N,Ct)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,N,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,it.width,it.height,it.depth,0,yt,N,it.data);else if(w.isData3DTexture)gt?(wt&&e.texStorage3D(s.TEXTURE_3D,Tt,nt,it.width,it.height,it.depth),pt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,N,it.data)):e.texImage3D(s.TEXTURE_3D,0,nt,it.width,it.height,it.depth,0,yt,N,it.data);else if(w.isFramebufferTexture){if(wt)if(gt)e.texStorage2D(s.TEXTURE_2D,Tt,nt,it.width,it.height);else{let at=it.width,st=it.height;for(let Ct=0;Ct<Tt;Ct++)e.texImage2D(s.TEXTURE_2D,Ct,nt,at,st,0,yt,N,null),at>>=1,st>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let at=s.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),it.parentNode!==at){at.appendChild(it),d.add(w),at.onpaint=st=>{let Ct=st.changedElements;for(let rt of d)Ct.includes(rt.image)&&(rt.needsUpdate=!0)},at.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let Ct=s.RGBA,rt=s.RGBA,Nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ct,rt,Nt,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(bt.length>0){if(gt&&wt){let at=Wt(bt[0]);e.texStorage2D(s.TEXTURE_2D,Tt,nt,at.width,at.height)}for(let at=0,st=bt.length;at<st;at++)et=bt[at],gt?pt&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,yt,N,et):e.texImage2D(s.TEXTURE_2D,at,nt,yt,N,et);w.generateMipmaps=!1}else if(gt){if(wt){let at=Wt(it);e.texStorage2D(s.TEXTURE_2D,Tt,nt,at.width,at.height)}pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,N,it)}else e.texImage2D(s.TEXTURE_2D,0,nt,yt,N,it);E(w)&&w.mipmapsAutoUpdate===!0&&y(dt),At.__version=mt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function G(P,w,q){if(w.image.length!==6)return;let dt=ct(P,w),ot=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+q);let mt=n.get(ot);if(ot.version!==mt.__version||dt===!0){e.activeTexture(s.TEXTURE0+q);let At=pe.getPrimaries(pe.workingColorSpace),Z=w.colorSpace===Gi?null:pe.getPrimaries(w.colorSpace),it=w.colorSpace===Gi||At===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let yt=w.isCompressedTexture||w.image[0].isCompressedTexture,N=w.image[0]&&w.image[0].isDataTexture,nt=[];for(let rt=0;rt<6;rt++)!yt&&!N?nt[rt]=v(w.image[rt],!0,i.maxCubemapSize):nt[rt]=N?w.image[rt].image:w.image[rt],nt[rt]=Ft(w,nt[rt]);let et=nt[0],bt=r.convert(w.format,w.colorSpace),gt=r.convert(w.type),wt=M(w.internalFormat,bt,gt,w.normalized,w.colorSpace),pt=w.isVideoTexture!==!0,Tt=mt.__version===void 0||dt===!0,at=ot.dataReady,st=b(w,et);ut(s.TEXTURE_CUBE_MAP,w);let Ct;if(w.isDepthTexture){if(wt=x(w.format===bs,w.type),Tt)if(pt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,wt,et.width,et.height);else for(let rt=0;rt<6;rt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,wt,et.width,et.height,0,bt,gt,null)}else if(yt){pt&&Tt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,wt,et.width,et.height);for(let rt=0;rt<6;rt++){Ct=nt[rt].mipmaps;for(let Nt=0;Nt<Ct.length;Nt++){let ue=Ct[Nt];w.format!==Vi?bt!==null?pt?at&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,0,0,ue.width,ue.height,bt,ue.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,wt,ue.width,ue.height,0,ue.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,0,0,ue.width,ue.height,bt,gt,ue.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,wt,ue.width,ue.height,0,bt,gt,ue.data)}}}else{if(Ct=w.mipmaps,pt&&Tt){Ct.length>0&&st++;let rt=Wt(nt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,wt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(N){pt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,nt[rt].width,nt[rt].height,bt,gt,nt[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,wt,nt[rt].width,nt[rt].height,0,bt,gt,nt[rt].data);for(let Nt=0;Nt<Ct.length;Nt++){let ee=Ct[Nt].image[rt].image;pt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,0,0,ee.width,ee.height,bt,gt,ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,wt,ee.width,ee.height,0,bt,gt,ee.data)}}else{pt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,bt,gt,nt[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,wt,bt,gt,nt[rt]);for(let Nt=0;Nt<Ct.length;Nt++){let ue=Ct[Nt];pt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,0,0,bt,gt,ue.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,wt,bt,gt,ue.image[rt])}}}E(w)&&w.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),mt.__version=ot.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function xt(P,w,q,dt,ot,mt){let At=r.convert(q.format,q.colorSpace),Z=r.convert(q.type),it=M(q.internalFormat,At,Z,q.normalized,q.colorSpace),yt=n.get(w),N=n.get(q);if(N.__renderTarget=w,!yt.__hasExternalTextures){let nt=Math.max(1,w.width>>mt),et=Math.max(1,w.height>>mt);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,mt,it,nt,et,w.depth,0,At,Z,null):e.texImage2D(ot,mt,it,nt,et,0,At,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),vt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,ot,N.__webglTexture,0,Ht(w)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,ot,N.__webglTexture,mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(P,w,q){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){let dt=w.depthTexture,ot=dt&&dt.isDepthTexture?dt.type:null,mt=x(w.stencilBuffer,ot),At=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;vt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(w),mt,w.width,w.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(w),mt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,mt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,P)}else{let dt=w.textures;for(let ot=0;ot<dt.length;ot++){let mt=dt[ot],At=r.convert(mt.format,mt.colorSpace),Z=r.convert(mt.type),it=M(mt.internalFormat,At,Z,mt.normalized,mt.colorSpace);vt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(w),it,w.width,w.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(w),it,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,it,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Kt(P,w,q){let dt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=n.get(w.depthTexture);ot.__renderTarget=w;let mt=dt?w.depthTexture.image[0]:w.depthTexture.image;(!ot.__webglTexture||mt.width!==w.width||mt.height!==w.height)&&(mt.width=w.width,mt.height=w.height,w.depthTexture.needsUpdate=!0),dt?_t(w.depthTexture,0):ht(w.depthTexture,0);let At=ot.__webglTexture,Z=Ht(w),it=dt?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,yt=w.depthTexture.format===bs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ss)vt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,it,At,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,yt,it,At,0);else if(w.depthTexture.format===bs)vt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,it,At,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,yt,it,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(P){let w=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let dt=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),dt){let ot=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,dt.removeEventListener("dispose",ot)};dt.addEventListener("dispose",ot),w.__depthDisposeCallback=ot}w.__boundDepthTexture=dt}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let dt=0;dt<6;dt++)Kt(w.__webglFramebuffer[dt],P,dt);else P.texture.mipmaps.length>0?Kt(w.__webglFramebuffer[0],P,0):Kt(w.__webglFramebuffer,P,0);else if(q){w.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[dt]),w.__webglDepthbuffer[dt]===void 0)w.__webglDepthbuffer[dt]=s.createRenderbuffer(),Jt(w.__webglDepthbuffer[dt],P,!1);else{let ot=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,mt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Jt(w.__webglDepthbuffer,P,!1);else{let ot=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,mt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function te(P,w,q){let dt=n.get(P);w!==void 0&&xt(dt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&qt(P)}function xe(P){let w=P.texture,q=n.get(P),dt=n.get(w);P.addEventListener("dispose",C),L(P);let ot=P.textures,mt=P.isWebGLCubeRenderTarget===!0,At=ot.length>1;if(At||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=w.version,o.memory.textures++),mt){q.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(w.mipmaps.length>0){q.__webglFramebuffer[Z]=[];for(let it=0;it<w.mipmaps.length;it++)q.__webglFramebuffer[Z][it]=s.createFramebuffer()}else q.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(w.mipmaps.length>0){q.__webglFramebuffer=[];for(let Z=0;Z<w.mipmaps.length;Z++)q.__webglFramebuffer[Z]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(At)for(let Z=0,it=ot.length;Z<it;Z++){let yt=n.get(ot[Z]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&vt(P)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Z=0;Z<ot.length;Z++){let it=ot[Z];q.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Z]);let yt=r.convert(it.format,it.colorSpace),N=r.convert(it.type),nt=M(it.internalFormat,yt,N,it.normalized,it.colorSpace,P.isXRRenderTarget===!0),et=Ht(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,nt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,q.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Jt(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){e.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),ut(s.TEXTURE_CUBE_MAP,w);for(let Z=0;Z<6;Z++)if(w.mipmaps.length>0)for(let it=0;it<w.mipmaps.length;it++)xt(q.__webglFramebuffer[Z][it],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,it);else xt(q.__webglFramebuffer[Z],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);E(w)?y(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(At){for(let Z=0,it=ot.length;Z<it;Z++){let yt=ot[Z],N=n.get(yt),nt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(nt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(nt,N.__webglTexture),ut(nt,yt),xt(q.__webglFramebuffer,P,yt,s.COLOR_ATTACHMENT0+Z,nt,0),E(yt)&&y(nt)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Z=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,dt.__webglTexture),ut(Z,w),w.mipmaps.length>0)for(let it=0;it<w.mipmaps.length;it++)xt(q.__webglFramebuffer[it],P,w,s.COLOR_ATTACHMENT0,Z,it);else xt(q.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,Z,0);E(w)?y(Z):w.mipmaps.length>0&&s.texParameteri(Z,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&qt(P)}function z(P){let w=P.textures;for(let q=0,dt=w.length;q<dt;q++){let ot=w[q];if(E(ot)&&ot.mipmapsAutoUpdate===!0){let mt=S(P),At=n.get(ot).__webglTexture;e.bindTexture(mt,At),y(mt),e.unbindTexture()}}}let Xt=[];function Yt(P){if(P.samples>0){if(vt(P)===!1){let w=P.textures,q=P.width,dt=P.height,ot=s.COLOR_BUFFER_BIT,mt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(P),Z=w.length>1;if(Z)for(let yt=0;yt<w.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let yt=0;yt<w.length;yt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);let N=n.get(w[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,q,dt,0,0,q,dt,ot,s.NEAREST),l===!0&&(Xt.length=0,Xt.push(s.COLOR_ATTACHMENT0+yt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Xt.push(mt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let yt=0;yt<w.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);let N=n.get(w[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,N,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ht(P){return Math.min(i.maxSamples,P.samples)}function vt(P){let w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function he(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Ft(P,w){let q=P.colorSpace,dt=P.format,ot=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Na&&q!==Gi&&(pe.getTransfer(q)===be?(dt!==Vi||ot!==ni)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",q)),w}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Dt,this.resetTextureUnits=R,this.getTextureUnits=Q,this.setTextureUnits=St,this.setTexture2D=ht,this.setTexture2DArray=Et,this.setTexture3D=It,this.setTextureCube=_t,this.rebindTextures=te,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=vt,this.dispose=B}function $w(s,t){function e(n,i=Gi){let r,o=pe.getTransfer(i);if(n===ni)return s.UNSIGNED_BYTE;if(n===dh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ph)return s.UNSIGNED_SHORT_5_5_5_1;if(n===_d)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===md)return s.BYTE;if(n===gd)return s.SHORT;if(n===Uo)return s.UNSIGNED_SHORT;if(n===fh)return s.INT;if(n===Bi)return s.UNSIGNED_INT;if(n===zi)return s.FLOAT;if(n===ki)return s.HALF_FLOAT;if(n===vd)return s.ALPHA;if(n===yd)return s.RGB;if(n===Vi)return s.RGBA;if(n===Ss)return s.DEPTH_COMPONENT;if(n===bs)return s.DEPTH_STENCIL;if(n===Sd)return s.RED;if(n===mh)return s.RED_INTEGER;if(n===tr)return s.RG;if(n===gh)return s.RG_INTEGER;if(n===_h)return s.RGBA_INTEGER;if(n===ja||n===tl||n===el||n===nl)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===el)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xh||n===vh||n===yh||n===Sh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mh||n===bh||n===wh||n===Th||n===Eh||n===il||n===Ah)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mh||n===bh)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Th)return r.COMPRESSED_R11_EAC;if(n===Eh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===il)return r.COMPRESSED_RG11_EAC;if(n===Ah)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ch||n===Rh||n===Ph||n===Ih||n===Lh||n===Dh||n===Nh||n===Oh||n===Uh||n===Fh||n===Bh||n===zh||n===kh||n===Vh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ch)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ph)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ih)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gh||n===Hh||n===Wh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gh)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xh||n===qh||n===sl||n===Yh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ha(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mi({vertexShader:Kw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yn(new ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qd=class extends Qi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new Xd,g={},v=e.getContextAttributes(),E=null,y=null,S=[],M=[],x=new ce,b=null,L=null,A=new an;A.viewport=new Pe;let I=new an;I.viewport=new Pe;let C=[A,I],O=new ah,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ht=S[k];return ht===void 0&&(ht=new Po,S[k]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(k){let ht=S[k];return ht===void 0&&(ht=new Po,S[k]=ht),ht.getGripSpace()},this.getHand=function(k){let ht=S[k];return ht===void 0&&(ht=new Po,S[k]=ht),ht.getHandSpace()};function V(k){let ht=M.indexOf(k.inputSource);if(ht===-1)return;let Et=S[ht];Et!==void 0&&(Et.update(k.inputSource,k.frame,c||o),Et.dispatchEvent({type:k.type,data:k.inputSource}))}function U(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",J);for(let k=0;k<S.length;k++){let ht=M[k];ht!==null&&(M[k]=null,S[k].disconnect(ht))}D=null,B=null,p.reset();for(let k in g)delete g[k];if(t.setRenderTarget(E),f=null,u=null,d=null,i=null,y=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),L!==null){let k=L.camera;k.fov=L.fov,k.zoom=L.zoom,k.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",U),i.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,It=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=v.stencil?bs:Ss,It=v.stencil?Fr:Bi);let W={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(W),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new pi(u.textureWidth,u.textureHeight,{format:Vi,type:ni,depthTexture:new Ms(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Et={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new pi(f.framebufferWidth,f.framebufferHeight,{format:Vi,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Dt.setContext(i),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(k){for(let ht=0;ht<k.removed.length;ht++){let Et=k.removed[ht],It=M.indexOf(Et);It>=0&&(M[It]=null,S[It].disconnect(Et))}for(let ht=0;ht<k.added.length;ht++){let Et=k.added[ht],It=M.indexOf(Et);if(It===-1){for(let W=0;W<S.length;W++)if(W>=M.length){M.push(Et),It=W;break}else if(M[W]===null){M[W]=Et,It=W;break}if(It===-1)break}let _t=S[It];_t&&_t.connect(Et)}}function X(k,ht){ht===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ht.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let ht=k.near,Et=k.far;p.texture!==null&&(p.depthNear>0&&(ht=p.depthNear),p.depthFar>0&&(Et=p.depthFar)),O.near=I.near=A.near=ht,O.far=I.far=A.far=Et,(D!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,B=O.far),O.layers.mask=k.layers.mask|6,A.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let It=k.parent,_t=O.cameras;X(O,It);for(let W=0;W<_t.length;W++)X(_t[W],It);O.projectionMatrix.copy(A.projectionMatrix),O.projectionMatrixInverse.copy(A.projectionMatrixInverse),L===null&&k.isPerspectiveCamera&&(L={camera:k,fov:k.fov,zoom:k.zoom}),R(k,O,It)};function R(k,ht,Et){Et===null?k.matrix.copy(ht.matrixWorld):(k.matrix.copy(Et.matrixWorld),k.matrix.invert(),k.matrix.multiply(ht.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ht.projectionMatrix),k.projectionMatrixInverse.copy(ht.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=zc*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(k){return g[k]};let Q=null;function St(k,ht){if(h=ht.getViewerPose(c||o),m=ht,h!==null){let Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let It=!1;Et.length!==O.cameras.length&&(O.cameras.length=0,It=!0);for(let tt=0;tt<Et.length;tt++){let ut=Et[tt],ct=null;if(f!==null)ct=f.getViewport(ut);else{let ft=d.getViewSubImage(u,ut);ct=ft.viewport,tt===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let H=C[tt];H===void 0&&(H=new an,H.layers.enable(tt),H.viewport=new Pe,C[tt]=H),H.matrix.fromArray(ut.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(ut.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(ct.x,ct.y,ct.width,ct.height),tt===0&&(O.matrix.copy(H.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),It===!0&&O.cameras.push(H)}let _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let tt=d.getDepthInformation(Et[0]);tt&&tt.isValid&&tt.texture&&p.init(tt,i.renderState)}if(_t&&_t.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let tt=0;tt<Et.length;tt++){let ut=Et[tt].camera;if(ut){let ct=g[ut];ct||(ct=new Ha,g[ut]=ct);let H=d.getCameraImage(ut);ct.sourceTexture=H}}}}for(let Et=0;Et<S.length;Et++){let It=M[Et],_t=S[Et];It!==null&&_t!==void 0&&_t.update(It,ht,c||o)}Q&&Q(k,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),m=null}let Dt=new Y0;Dt.setAnimationLoop(St),this.setAnimationLoop=function(k){Q=k},this.dispose=function(){}}},jw=new Ue,i_=new jt;i_.set(-1,0,0,0,1,0,0,0,1);function t1(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Cd(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Sn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Sn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),E=v.envMap,y=v.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(jw.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(i_),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Sn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function e1(s,t,e,n){let i={},r={};function o(v,E){let y=E.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,E){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let S=E.program;n.updateUBOMapping(v,S);let M=t.render.frame;r[v.id]!==M&&(c(v),r[v.id]=M)}function l(v){let E=s.createBuffer(),y=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,y,S),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(v){let E=i[v.id],y=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let M=0,x=y.length;M<x;M++){let b=y[M];if(Array.isArray(b))for(let L=0,A=b.length;L<A;L++)h(b[L],M,L,S);else h(b,M,0,S)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,E,y,S){if(u(v,E,y,S)===!0){let M=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let L=0;L<x.length;L++){let A=x[L],I=_(A,!0);d(A,v.__data,b),b+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,v.__data)}}function d(v,E,y){typeof v=="number"||typeof v=="boolean"?E[y]=v:v.isMatrix3?(E[y]=v.elements[0],E[y+1]=v.elements[1],E[y+2]=v.elements[2],E[y+3]=0,E[y+4]=v.elements[3],E[y+5]=v.elements[4],E[y+6]=v.elements[5],E[y+7]=0,E[y+8]=v.elements[6],E[y+9]=v.elements[7],E[y+10]=v.elements[8],E[y+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-y),y):v.toArray(E,y)}function u(v,E,y,S){let M=v.value,x=E+"_"+y;if(Array.isArray(M)){S[x]===void 0&&(S[x]=[]);let b=S[x],L=!1;for(let A=0;A<M.length;A++)f(M[A],b,A)===!0&&(L=!0);return L}return f(M,S,x)}function f(v,E,y){if(E[y]===void 0)return typeof v=="number"||typeof v=="boolean"?E[y]=v:ArrayBuffer.isView(v)?E[y]=v.slice():E[y]=v.clone(),!0;{let S=E[y];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return E[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function m(v){let E=v.uniforms,y=0,S=16;for(let x=0,b=E.length;x<b;x++){let L=Array.isArray(E[x])?E[x]:[E[x]];for(let A=0,I=L.length;A<I;A++){let C=L[A],O=Array.isArray(C.value)?C.value:[C.value],D=Array.isArray(E[x])||Array.isArray(C.value),B=y;for(let U=0,J=O.length;U<J;U++){let X=O[U],R=_(X,D),Q=y%S,St=Q%R.boundary,Dt=Q+St;y+=St,Dt!==0&&S-Dt<R.storage&&(y+=S-Dt),U===0&&(B=y),y+=R.storage}let V=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new V((y-B)/Float32Array.BYTES_PER_ELEMENT),C.__offset=B}}let M=y%S;return M>0&&(y+=S-M),v.__size=y,v.__cache={},this}function _(v,E){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let E=v.target;E.removeEventListener("dispose",p),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}var n1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),es=null;function i1(){return es===null&&(es=new Wc(n1,16,16,tr,ki),es.name="DFG_LUT",es.minFilter=tn,es.magFilter=tn,es.wrapS=$i,es.wrapT=$i,es.generateMipmaps=!1,es.needsUpdate=!0),es}var er=class{constructor(t={}){let{canvas:e=_0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ni}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,p=new Set([_h,gh,mh]),g=new Set([ni,Bi,Uo,Fr,dh,ph]),v=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,M=null,x=[],b=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,C=null,O=null,D=null,B=null;this._outputColorSpace=qn;let V=0,U=0,J=null,X=-1,R=null,Q=new Pe,St=new Pe,Dt=null,k=new se(0),ht=0,Et=e.width,It=e.height,_t=1,W=null,lt=null,tt=new Pe(0,0,Et,It),ut=new Pe(0,0,Et,It),ct=!1,H=new Js,ft=new Xc,Mt=!1,G=!1,xt=new Ue,Jt=new K,Kt=new Pe,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function xe(){return J===null?_t:1}let z=n;function Xt(T,F){return e.getContext(T,F)}let Yt,Ht,vt,he,Ft,Wt,P,w,q,dt,ot,mt,At,Z,it,yt,N,nt,et,bt,gt,wt,pt;try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",rt,!1),z===null){let F="webgl2";if(z=Xt(F,T),z===null)throw Xt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Tt()}catch(T){throw e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Qt("WebGLRenderer: "+T.message),T}function Tt(){Yt=new pb(z),Yt.init(),gt=new $w(z,Yt),Ht=new ib(z,Yt,t,gt),vt=new Zw(z,Yt),Ht.reversedDepthBuffer&&u&&vt.buffers.depth.setReversed(!0),O=z.createFramebuffer(),D=z.createFramebuffer(),B=z.createFramebuffer(),he=new _b(z),Ft=new Nw,Wt=new Jw(z,Yt,vt,Ft,Ht,gt,he),P=new db(A),w=new vy(z),wt=new eb(z,w),q=new mb(z,w,he,wt),dt=new vb(z,q,w,wt,he),nt=new xb(z,Ht,Wt),it=new sb(Ft),ot=new Dw(A,P,Yt,Ht,wt,it),mt=new t1(A,Ft),At=new Uw,Z=new Gw(Yt),N=new tb(A,P,vt,dt,m,l),yt=new Yw(A,dt,Ht),pt=new e1(z,he,Ht,vt),et=new nb(z,Yt,he),bt=new gb(z,Yt,he),he.programs=ot.programs,A.capabilities=Ht,A.extensions=Yt,A.properties=Ft,A.renderLists=At,A.shadowMap=yt,A.state=vt,A.info=he}_!==ni&&(L=new Sb(_,e.width,e.height,a,i,r));let at=new qd(A,z);this.xr=at,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=Yt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Yt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(T){T!==void 0&&(_t=T,this.setSize(Et,It,!1))},this.getSize=function(T){return T.set(Et,It)},this.setSize=function(T,F,j=!0){if(at.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=T,It=F,e.width=Math.floor(T*_t),e.height=Math.floor(F*_t),j===!0&&(e.style.width=T+"px",e.style.height=F+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Et*_t,It*_t).floor()},this.setDrawingBufferSize=function(T,F,j){Et=T,It=F,_t=j,e.width=Math.floor(T*j),e.height=Math.floor(F*j),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(_===ni){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Q)},this.getViewport=function(T){return T.copy(tt)},this.setViewport=function(T,F,j,Y){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,F,j,Y),vt.viewport(Q.copy(tt).multiplyScalar(xe()).round())},this.getScissor=function(T){return T.copy(ut)},this.setScissor=function(T,F,j,Y){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,F,j,Y),vt.scissor(St.copy(ut).multiplyScalar(xe()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(T){vt.setScissorTest(ct=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){lt=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,j=!0){let Y=0;if(T){let $=!1;if(J!==null){let Pt=J.texture.format;$=p.has(Pt)}if($){let Pt=J.texture.type,Bt=g.has(Pt),Rt=N.getClearColor(),Ot=N.getClearAlpha(),Vt=Rt.r,ne=Rt.g,fe=Rt.b;Bt?(v[0]=Vt,v[1]=ne,v[2]=fe,v[3]=Ot,z.clearBufferuiv(z.COLOR,0,v)):(E[0]=Vt,E[1]=ne,E[2]=fe,E[3]=Ot,z.clearBufferiv(z.COLOR,0,E))}else Y|=z.COLOR_BUFFER_BIT}F&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),C=T},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),N.dispose(),At.dispose(),Z.dispose(),Wt.dispose(),Ft.dispose(),P.dispose(),dt.dispose(),q.dispose(),wt.dispose(),pt.dispose(),ot.dispose(),at.dispose(),at.removeEventListener("sessionstart",Ee),at.removeEventListener("sessionend",Se),en.stop()};function st(T){T.preventDefault(),Ed("WebGLRenderer: Context Lost."),I=!0}function Ct(){Ed("WebGLRenderer: Context Restored."),I=!1;let T=he.autoReset,F=yt.enabled,j=yt.autoUpdate,Y=yt.needsUpdate,$=yt.type;Tt(),he.autoReset=T,yt.enabled=F,yt.autoUpdate=j,yt.needsUpdate=Y,yt.type=$}function rt(T){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nt(T){let F=T.target;F.removeEventListener("dispose",Nt),ue(F)}function ue(T){ee(T),Ft.remove(T)}function ee(T){let F=Ft.get(T).programs;F!==void 0&&(F.forEach(function(j){ot.releaseProgram(j)}),T.isShaderMaterial&&ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,j,Y,$,Pt){F===null&&(F=qt);let Bt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Rt=_i(T,F,j,Y,$);vt.setMaterial(Y,Bt);let Ot=j.index,Vt=1;if(Y.wireframe===!0){if(Ot=q.getWireframeAttribute(j),Ot===void 0)return;Vt=2}let ne=j.drawRange,fe=j.attributes.position,zt=ne.start*Vt,de=(ne.start+ne.count)*Vt;Pt!==null&&(zt=Math.max(zt,Pt.start*Vt),de=Math.min(de,(Pt.start+Pt.count)*Vt)),Ot!==null?(zt=Math.max(zt,0),de=Math.min(de,Ot.count)):fe!=null&&(zt=Math.max(zt,0),de=Math.min(de,fe.count));let $e=de-zt;if($e<0||$e===1/0)return;wt.setup($,Y,Rt,j,Ot);let Ie,Ce=et;if(Ot!==null&&(Ie=w.get(Ot),Ce=bt,Ce.setIndex(Ie)),$.isMesh)Y.wireframe===!0?(vt.setLineWidth(Y.wireframeLinewidth*xe()),Ce.setMode(z.LINES)):Ce.setMode(z.TRIANGLES);else if($.isLine){let wn=Y.linewidth;wn===void 0&&(wn=1),vt.setLineWidth(wn*xe()),$.isLineSegments?Ce.setMode(z.LINES):$.isLineLoop?Ce.setMode(z.LINE_LOOP):Ce.setMode(z.LINE_STRIP)}else $.isPoints?Ce.setMode(z.POINTS):$.isSprite&&Ce.setMode(z.TRIANGLES);if($.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))Ce.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let wn=$._multiDrawStarts,kt=$._multiDrawCounts,Fn=$._multiDrawCount,ye=Ot?w.get(Ot).bytesPerElement:1,sr=Ft.get(Y).currentProgram.getUniforms();for(let Tn=0;Tn<Fn;Tn++)sr.setValue(z,"_gl_DrawID",Tn),Ce.render(wn[Tn]/ye,kt[Tn])}else if($.isInstancedMesh)Ce.renderInstances(zt,$e,$.count);else if(j.isInstancedBufferGeometry){let wn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,kt=Math.min(j.instanceCount,wn);Ce.renderInstances(zt,$e,kt)}else Ce.render(zt,$e)};function De(T,F,j,Y){C!==null&&T.isNodeMaterial&&C.setObject(Y,T),Mt===!0&&it.setState(T,j,!1),T.transparent===!0&&T.side===Ai&&T.forceSinglePass===!1?(T.side=Sn,T.needsUpdate=!0,si(T,F,Y),T.side=js,T.needsUpdate=!0,si(T,F,Y),T.side=Ai):si(T,F,Y)}this.compile=function(T,F,j=null){j===null&&(j=T),C!==null&&C.renderStart(T,F,j),M=Z.get(j),M.init(F),b.push(M),j.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),T!==j&&T.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights(),C!==null&&C.updateLights(M.state.lightsArray),G=this.localClippingEnabled,Mt=it.init(this.clippingPlanes,G),Mt===!0&&it.setGlobalState(this.clippingPlanes,F),C!==null&&yt.render(M.state.shadowsArray,j,F);let Y=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Pt=$.material;if(Pt)if(Array.isArray(Pt))for(let Bt=0;Bt<Pt.length;Bt++){let Rt=Pt[Bt];De(Rt,j,F,$),Y.add(Rt)}else De(Pt,j,F,$),Y.add(Pt)}),M=b.pop(),C!==null&&C.renderEnd(),Y},this.compileAsync=function(T,F,j=null){let Y=this.compile(T,F,j);return new Promise($=>{function Pt(){if(Y.forEach(function(Bt){let Ot=Ft.get(Bt).currentProgram;(Ot===void 0||Ot.isReady())&&Y.delete(Bt)}),Y.size===0){$(T);return}setTimeout(Pt,10)}Yt.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Ze=null;function Ne(T){Ze&&Ze(T)}function Ee(){en.stop()}function Se(){en.start()}let en=new Y0;en.setAnimationLoop(Ne),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(T){Ze=T,at.setAnimationLoop(T),T===null?en.stop():en.start()},at.addEventListener("sessionstart",Ee),at.addEventListener("sessionend",Se),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;C!==null&&C.renderStart(T,F);let j=at.enabled===!0&&at.isPresenting===!0,Y=L!==null&&(J===null||j)&&L.begin(A,J);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(F),F=at.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,F,J),M=Z.get(T,b.length),M.init(F),M.state.textureUnits=Wt.getTextureUnits(),b.push(M),xt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ft.setFromArrayCamera(F):H.setFromProjectionMatrix(xt,Ti,F.reversedDepth),G=this.localClippingEnabled,Mt=it.init(this.clippingPlanes,G),S=At.get(T,x.length),S.init(),x.push(S),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let Bt=A.xr.getDepthSensingMesh();Bt!==null&&Ae(Bt,F,-1/0,A.sortObjects)}Ae(T,F,0,A.sortObjects),S.finish(),C!==null&&C.updateLights(M.state.lightsArray),A.sortObjects===!0&&S.sort(W,lt),te=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,te&&N.addToRenderList(S,T),this.info.autoReset===!0&&this.info.reset(),Mt===!0&&it.beginShadows();let $=M.state.shadowsArray;if(yt.render($,T,F),Mt===!0&&it.endShadows(),(Y&&L.hasRenderPass())===!1){let Bt=S.opaque,Rt=S.transmissive;if(M.setupLights(),F.isArrayCamera){let Ot=F.cameras;if(Rt.length>0)for(let Vt=0,ne=Ot.length;Vt<ne;Vt++){let fe=Ot[Vt];ii(Bt,Rt,T,fe)}te&&N.render(T);for(let Vt=0,ne=Ot.length;Vt<ne;Vt++){let fe=Ot[Vt];bn(S,T,fe,fe.viewport)}}else Rt.length>0&&ii(Bt,Rt,T,F),te&&N.render(T),bn(S,T,F)}J!==null&&U===0&&(Wt.updateMultisampleRenderTarget(J),Wt.updateRenderTargetMipmap(J)),Y&&L.end(A),T.isScene===!0&&T.onAfterRender(A,T,F),wt.resetDefaultState(),X=-1,R=null,b.pop(),b.length>0?(M=b[b.length-1],Wt.setTextureUnits(M.state.textureUnits),Mt===!0&&it.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,C!==null&&C.renderEnd()};function Ae(T,F,j,Y){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){let Bt=F.isArrayCamera?ft:H;if(!T.frustumCulled||T.intersectsFrustum(Bt)){Y&&Kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xt);let Rt=dt.update(T),Ot=T.material;Ot.visible&&S.push(T,Rt,Ot,j,Kt.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){let Bt=F.isArrayCamera?ft:H;if(!T.frustumCulled||T.intersectsFrustum(Bt)){let Rt=dt.update(T),Ot=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Kt.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Kt.copy(Rt.boundingSphere.center)),Kt.applyMatrix4(T.matrixWorld).applyMatrix4(xt)),Array.isArray(Ot)){let Vt=Rt.groups;for(let ne=0,fe=Vt.length;ne<fe;ne++){let zt=Vt[ne],de=Ot[zt.materialIndex];de&&de.visible&&S.push(T,Rt,de,j,Kt.z,zt,F)}}else Ot.visible&&S.push(T,Rt,Ot,j,Kt.z,null,F)}}}let Pt=T.children;for(let Bt=0,Rt=Pt.length;Bt<Rt;Bt++)Ae(Pt[Bt],F,j,Y)}function bn(T,F,j,Y){let{opaque:$,transmissive:Pt,transparent:Bt}=T;M.setupLightsView(j),Mt===!0&&it.setGlobalState(A.clippingPlanes,j),Y&&vt.viewport(Q.copy(Y)),$.length>0&&Ge($,F,j),Pt.length>0&&Ge(Pt,F,j),Bt.length>0&&Ge(Bt,F,j),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ii(T,F,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){let zt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new pi(1,1,{generateMipmaps:!0,type:zt?ki:ni,minFilter:Fi,samples:Math.max(4,Ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let Pt=M.state.transmissionRenderTarget[Y.id],Bt=Y.viewport||Q;Pt.setSize(Bt.z*A.transmissionResolutionScale,Bt.w*A.transmissionResolutionScale);let Rt=A.getRenderTarget(),Ot=A.getActiveCubeFace(),Vt=A.getActiveMipmapLevel();A.setRenderTarget(Pt),A.getClearColor(k),ht=A.getClearAlpha(),ht<1&&A.setClearColor(16777215,.5),A.clear(),te&&N.render(j);let ne=A.toneMapping;A.toneMapping=On;let fe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),Mt===!0&&it.setGlobalState(A.clippingPlanes,Y),Ge(T,j,Y),Wt.updateMultisampleRenderTarget(Pt),Wt.updateRenderTargetMipmap(Pt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let de=0,$e=F.length;de<$e;de++){let Ie=F[de],{object:Ce,geometry:wn,material:kt,group:Fn}=Ie;if(kt.side===Ai&&Ce.layers.test(Y.layers)){let ye=kt.side;kt.side=Sn,kt.needsUpdate=!0,Je(Ce,j,Y,wn,kt,Fn),kt.side=ye,kt.needsUpdate=!0,zt=!0}}zt===!0&&(Wt.updateMultisampleRenderTarget(Pt),Wt.updateRenderTargetMipmap(Pt))}A.setRenderTarget(Rt,Ot,Vt),A.setClearColor(k,ht),fe!==void 0&&(Y.viewport=fe),A.toneMapping=ne}function Ge(T,F,j){let Y=F.isScene===!0?F.overrideMaterial:null;for(let $=0,Pt=T.length;$<Pt;$++){let Bt=T[$],{object:Rt,geometry:Ot,group:Vt}=Bt,ne=Bt.material;ne.allowOverride===!0&&Y!==null&&(ne=Y),Rt.layers.test(j.layers)&&Je(Rt,F,j,Ot,ne,Vt)}}function Je(T,F,j,Y,$,Pt){C!==null&&$.isNodeMaterial&&C.setObject(T,$),T.onBeforeRender(A,F,j,Y,$,Pt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(A,F,j,Y,T,Pt),$.transparent===!0&&$.side===Ai&&$.forceSinglePass===!1?($.side=Sn,$.needsUpdate=!0,A.renderBufferDirect(j,F,Y,$,T,Pt),$.side=js,$.needsUpdate=!0,A.renderBufferDirect(j,F,Y,$,T,Pt),$.side=Ai):A.renderBufferDirect(j,F,Y,$,T,Pt),T.onAfterRender(A,F,j,Y,$,Pt)}function nn(T){let F=0;for(let j of T)j.texture!==null&&F++;return F}function si(T,F,j){F.isScene!==!0&&(F=qt);let Y=Ft.get(T),$=M.state.lights,Pt=M.state.shadowsArray,Bt=$.state.version,Rt=ot.getParameters(T,$.state,Pt,F,j,M.state.lightProbeGridArray),Ot=ot.getProgramCacheKey(Rt),Vt=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,Y.fog=F.fog;let ne=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=P.get(T.envMap||Y.environment,ne),Y.envMapRotation=Y.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Vt===void 0&&(T.addEventListener("dispose",Nt),Vt=new Map,Y.programs=Vt,Y.programVariants=new Map);let fe=Vt.get(Ot);if(fe!==void 0){if(Y.currentProgram===fe&&Y.lightsStateVersion===Bt)return He(T,Rt),fe}else Rt.uniforms=ot.getUniforms(T),C!==null&&T.isNodeMaterial&&C.build(T,j,Rt),T.onBeforeCompile(Rt,A),fe=ot.acquireProgram(Rt,Ot),Vt.set(Ot,fe),Y.uniforms=Rt.uniforms;let zt=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(zt.clippingPlanes=it.uniform),He(T,Rt),Y.needsLights=pl(T),Y.lightsStateVersion=Bt,Y.needsLights&&(zt.ambientLightColor.value=$.state.ambient,zt.lightProbe.value=$.state.probe,zt.sunLights.value=$.state.sun,zt.sunLightShadows.value=$.state.sunShadow,zt.directionalLights.value=$.state.directional,zt.directionalLightShadows.value=$.state.directionalShadow,zt.spotLights.value=$.state.spot,zt.spotLightShadows.value=$.state.spotShadow,zt.rectAreaLights.value=$.state.rectArea,zt.ltc_1.value=$.state.rectAreaLTC1,zt.ltc_2.value=$.state.rectAreaLTC2,zt.pointLights.value=$.state.point,zt.pointLightShadows.value=$.state.pointShadow,zt.hemisphereLights.value=$.state.hemi,zt.sunShadowMatrix.value=$.state.sunShadowMatrix,zt.sunShadowCascade.value=$.state.sunShadowCascade,zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,zt.spotLightMatrix.value=$.state.spotLightMatrix,zt.spotLightMap.value=$.state.spotLightMap,zt.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.numLightProbeGrids=nn(M.state.lightProbeGridArray),Y.currentProgram=fe,Y.uniformsList=null,fe}function kr(T,F,j,Y,$){let Pt=Ft.get(T),Bt=Pt.currentProgram.id+","+Y+","+$,Rt=Pt.programVariants.get(Bt);return Rt===void 0?(Rt=si(T,F,j),Pt.programVariants.set(Bt,Rt)):(Pt.currentProgram=Rt,Pt.uniformsList=null,Pt.outputColorSpace=Y,Pt.toneMapping=$),Rt}function sn(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=Fo.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function He(T,F){let j=Ft.get(T);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function _i(T,F,j,Y,$){F.isScene!==!0&&(F=qt),Wt.resetTextureUnits();let Pt=F.fog,Bt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?F.environment:null,Rt=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:pe.workingColorSpace,Ot=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Vt=P.get(Y.envMap||Bt,Ot),ne=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,fe=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),zt=!!j.morphAttributes.position,de=!!j.morphAttributes.normal,$e=!!j.morphAttributes.color,Ie=On;Y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ie=A.toneMapping);let Ce=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,wn=Ce!==void 0?Ce.length:0,kt=Ft.get(Y),Fn=M.state.lights;if(Mt===!0&&(G===!0||T!==R)){let Fe=T===R&&Y.id===X;it.setState(Y,T,Fe)}let ye=!1,sr=!1;Y.version===kt.__version?kt.needsLights&&kt.lightsStateVersion!==Fn.state.version||$.isBatchedMesh&&kt.batching===!1||!$.isBatchedMesh&&kt.batching===!0||$.isBatchedMesh&&kt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&kt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&kt.instancing===!1||!$.isInstancedMesh&&kt.instancing===!0||$.isSkinnedMesh&&kt.skinning===!1||!$.isSkinnedMesh&&kt.skinning===!0||$.isInstancedMesh&&kt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&kt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&kt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&kt.instancingMorph===!1&&$.morphTexture!==null||kt.envMap!==Vt||Y.fog===!0&&kt.fog!==Pt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==it.numPlanes||kt.numIntersection!==it.numIntersection)||kt.vertexAlphas!==ne||kt.vertexTangents!==fe||kt.morphTargets!==zt||kt.morphNormals!==de||kt.morphColors!==$e||kt.morphTargetsCount!==wn||kt.numLightProbeGrids!==nn(M.state.lightProbeGridArray)?ye=!0:(kt.outputColorSpace!==Rt||kt.toneMapping!==Ie)&&(sr=!0):(ye=!0,kt.__version=Y.version);let Tn=kt.currentProgram;(ye===!0||sr===!0)&&(Tn=sr===!0?kr(Y,F,$,Rt,Ie):si(Y,F,$),C&&Y.isNodeMaterial&&C.onUpdateProgram(Y,Tn,kt));let ml=!1,Ts=!1,rr=!1,ve=Tn.getUniforms(),mn=kt.uniforms;if(vt.useProgram(Tn.program)&&(ml=!0,Ts=!0,rr=!0),Y.id!==X&&(X=Y.id,Ts=!0),ml||R!==T){vt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ve.setValue(z,"projectionMatrix",T.projectionMatrix),ve.setValue(z,"viewMatrix",T.matrixWorldInverse);let hn=ve.map.cameraPosition;hn!==void 0&&hn.setValue(z,Jt.setFromMatrixPosition(T.matrixWorld)),Ht.logarithmicDepthBuffer&&ve.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ve.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,Ts=!0,rr=!0)}if(kt.needsLights&&(Fn.state.sunShadowMap.length>0&&ve.setValue(z,"sunShadowMap",Fn.state.sunShadowMap,Wt),Fn.state.directionalShadowMap.length>0&&ve.setValue(z,"directionalShadowMap",Fn.state.directionalShadowMap,Wt),Fn.state.spotShadowMap.length>0&&ve.setValue(z,"spotShadowMap",Fn.state.spotShadowMap,Wt),Fn.state.pointShadowMap.length>0&&ve.setValue(z,"pointShadowMap",Fn.state.pointShadowMap,Wt)),$.isSkinnedMesh){ve.setOptional(z,$,"bindMatrix"),ve.setOptional(z,$,"bindMatrixInverse");let Fe=$.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ve.setValue(z,"boneTexture",Fe.boneTexture,Wt))}$.isBatchedMesh&&(ve.setOptional(z,$,"batchingTexture"),ve.setValue(z,"batchingTexture",$._matricesTexture,Wt),ve.setOptional(z,$,"batchingIdTexture"),ve.setValue(z,"batchingIdTexture",$._indirectTexture,Wt),ve.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&ve.setValue(z,"batchingColorTexture",$._colorsTexture,Wt));let Ri=j.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&nt.update($,j,Tn),(Ts||kt.receiveShadow!==$.receiveShadow)&&(kt.receiveShadow=$.receiveShadow,ve.setValue(z,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&F.environment!==null&&(mn.envMapIntensity.value=F.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=i1()),Ts){if(ve.setValue(z,"toneMappingExposure",A.toneMappingExposure),kt.needsLights&&qo(mn,rr),Pt&&Y.fog===!0&&mt.refreshFogUniforms(mn,Pt),mt.refreshMaterialUniforms(mn,Y,_t,It,M.state.transmissionRenderTarget[T.id]),kt.needsLights&&kt.numLightProbeGrids>0){let Fe=y,hn=0;for(let ss of M.state.lightProbeGridArray)ss.texture!==null&&(Fe.textures[hn]=ss.texture,Fe.min[hn]=ss.boundingBox.min,Fe.max[hn]=ss.boundingBox.max,Fe.resolution[hn]=ss.resolution,hn++);for(let ss in Fe)Fe[ss].length=hn;mn.probesSH.value=Fe.textures,mn.probesMin.value=Fe.min,mn.probesMax.value=Fe.max,mn.probesResolution.value=Fe.resolution}Fo.upload(z,sn(kt),mn,Wt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Fo.upload(z,sn(kt),mn,Wt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ve.setValue(z,"center",$.center),ve.setValue(z,"modelViewMatrix",$.modelViewMatrix),ve.setValue(z,"normalMatrix",$.normalMatrix),ve.setValue(z,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let Fe=Y.uniformsGroups;for(let hn=0,ss=Fe.length;hn<ss;hn++){let tp=Fe[hn];pt.update(tp,Tn),pt.bind(tp,Tn)}}return Tn}function qo(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function pl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(T,F,j){let Y=Ft.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ft.get(T.texture).__webglTexture=F,Ft.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let j=Ft.get(T);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,j=0){J=T,V=F,U=j;let Y=null,$=!1,Pt=!1;if(T){let Rt=Ft.get(T);if(Rt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(z.FRAMEBUFFER,Rt.__webglFramebuffer),Q.copy(T.viewport),St.copy(T.scissor),Dt=T.scissorTest,vt.viewport(Q),vt.scissor(St),vt.setScissorTest(Dt),X=-1;return}else if(Rt.__webglFramebuffer===void 0)Wt.setupRenderTarget(T);else if(Rt.__hasExternalTextures)Wt.rebindTextures(T,Ft.get(T.texture).__webglTexture,Ft.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ne=T.depthTexture;if(Rt.__boundDepthTexture!==ne){if(ne!==null&&Ft.has(ne)&&(T.width!==ne.image.width||T.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(T)}}let Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Pt=!0);let Vt=Ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[F])?Y=Vt[F][j]:Y=Vt[F],$=!0):T.samples>0&&Wt.useMultisampledRTT(T)===!1?Y=Ft.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?Y=Vt[j]:Y=Vt,Q.copy(T.viewport),St.copy(T.scissor),Dt=T.scissorTest}else Q.copy(tt).multiplyScalar(_t).floor(),St.copy(ut).multiplyScalar(_t).floor(),Dt=ct;if(j!==0&&(Y=O),vt.bindFramebuffer(z.FRAMEBUFFER,Y)&&vt.drawBuffers(T,Y),vt.viewport(Q),vt.scissor(St),vt.setScissorTest(Dt),$){let Rt=Ft.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,Rt.__webglTexture,j)}else if(Pt){let Rt=F;for(let Ot=0;Ot<T.textures.length;Ot++){let Vt=Ft.get(T.textures[Ot]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ot,Vt.__webglTexture,j,Rt)}}else if(T!==null&&j!==0){let Rt=Ft.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Rt.__webglTexture,j)}X=-1};function ws(T){let F=Ft.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=Ht.textureFormatReadable(T.format),F.__typeReadable=Ht.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,j,Y,$,Pt,Bt,Rt=0){if(!(T&&T.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ot=Ot[Bt],Array.isArray(Ot)&&(Ot=Ot[0])),Ot){vt.bindFramebuffer(z.FRAMEBUFFER,Ot);try{let Vt=T.textures[Rt],ne=Vt.format,fe=Vt.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt);let zt=ws(Vt);if(zt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-Y&&j>=0&&j<=T.height-$&&z.readPixels(F,j,Y,$,gt.convert(ne),gt.convert(fe),Pt)}finally{let Vt=J!==null?Ft.get(J).__webglFramebuffer:null;vt.bindFramebuffer(z.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(T,F,j,Y,$,Pt,Bt,Rt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ot=Ot[Bt],Array.isArray(Ot)&&(Ot=Ot[0])),Ot)if(F>=0&&F<=T.width-Y&&j>=0&&j<=T.height-$){vt.bindFramebuffer(z.FRAMEBUFFER,Ot);let Vt=T.textures[Rt],ne=Vt.format,fe=Vt.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt);let zt=ws(Vt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,de),z.bufferData(z.PIXEL_PACK_BUFFER,Pt.byteLength,z.STREAM_READ),z.readPixels(F,j,Y,$,gt.convert(ne),gt.convert(fe),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let $e=J!==null?Ft.get(J).__webglFramebuffer:null;vt.bindFramebuffer(z.FRAMEBUFFER,$e);let Ie=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await v0(z,Ie,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,de),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(de),z.deleteSync(Ie),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,j=0){let Y=Math.pow(2,-j),$=Math.floor(T.image.width*Y),Pt=Math.floor(T.image.height*Y),Bt=F!==null?F.x:0,Rt=F!==null?F.y:0;Wt.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,Bt,Rt,$,Pt),vt.unbindTexture()},this.copyTextureToTexture=function(T,F,j=null,Y=null,$=0,Pt=0){let Bt,Rt,Ot,Vt,ne,fe,zt,de,$e,Ie=T.isCompressedTexture?T.mipmaps[Pt]:T.image;if(j!==null)Bt=j.max.x-j.min.x,Rt=j.max.y-j.min.y,Ot=j.isBox3?j.max.z-j.min.z:1,Vt=j.min.x,ne=j.min.y,fe=j.isBox3?j.min.z:0;else{let ve=Math.pow(2,-$);Bt=Math.floor(Ie.width*ve),Rt=Math.floor(Ie.height*ve),T.isDataArrayTexture?Ot=Ie.depth:T.isData3DTexture?Ot=Math.floor(Ie.depth*ve):Ot=1,Vt=0,ne=0,fe=0}Y!==null?(zt=Y.x,de=Y.y,$e=Y.z):(zt=0,de=0,$e=0);let Ce=gt.convert(F.format),wn=gt.convert(F.type),kt;F.isData3DTexture?(Wt.setTexture3D(F,0),kt=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Wt.setTexture2DArray(F,0),kt=z.TEXTURE_2D_ARRAY):(Wt.setTexture2D(F,0),kt=z.TEXTURE_2D),vt.activeTexture(z.TEXTURE0),vt.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),vt.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),vt.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let Fn=vt.getParameter(z.UNPACK_ROW_LENGTH),ye=vt.getParameter(z.UNPACK_IMAGE_HEIGHT),sr=vt.getParameter(z.UNPACK_SKIP_PIXELS),Tn=vt.getParameter(z.UNPACK_SKIP_ROWS),ml=vt.getParameter(z.UNPACK_SKIP_IMAGES);vt.pixelStorei(z.UNPACK_ROW_LENGTH,Ie.width),vt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ie.height),vt.pixelStorei(z.UNPACK_SKIP_PIXELS,Vt),vt.pixelStorei(z.UNPACK_SKIP_ROWS,ne),vt.pixelStorei(z.UNPACK_SKIP_IMAGES,fe);let Ts=T.isDataArrayTexture||T.isData3DTexture,rr=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let ve=Ft.get(T),mn=Ft.get(F),Ri=Ft.get(ve.__renderTarget),Fe=Ft.get(mn.__renderTarget);vt.bindFramebuffer(z.READ_FRAMEBUFFER,Ri.__webglFramebuffer),vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let hn=0;hn<Ot;hn++)Ts&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(T).__webglTexture,$,fe+hn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(F).__webglTexture,Pt,$e+hn)),z.blitFramebuffer(Vt,ne,Vt+Bt,ne+Rt,zt,de,zt+Bt,de+Rt,z.DEPTH_BUFFER_BIT,z.NEAREST);vt.bindFramebuffer(z.READ_FRAMEBUFFER,null),vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||Ft.has(T)){let ve=Ft.get(T),mn=Ft.get(F);vt.bindFramebuffer(z.READ_FRAMEBUFFER,D),vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,B);for(let Ri=0;Ri<Ot;Ri++)Ts?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ve.__webglTexture,$,fe+Ri):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ve.__webglTexture,$),rr?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,mn.__webglTexture,Pt,$e+Ri):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,mn.__webglTexture,Pt),$!==0?z.blitFramebuffer(Vt,ne,Vt+Bt,ne+Rt,zt,de,zt+Bt,de+Rt,z.COLOR_BUFFER_BIT,z.NEAREST):rr?z.copyTexSubImage3D(kt,Pt,zt,de,$e+Ri,Vt,ne,Bt,Rt):z.copyTexSubImage2D(kt,Pt,zt,de,Vt,ne,Bt,Rt);vt.bindFramebuffer(z.READ_FRAMEBUFFER,null),vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else rr?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(kt,Pt,zt,de,$e,Bt,Rt,Ot,Ce,wn,Ie.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(kt,Pt,zt,de,$e,Bt,Rt,Ot,Ce,Ie.data):z.texSubImage3D(kt,Pt,zt,de,$e,Bt,Rt,Ot,Ce,wn,Ie):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pt,zt,de,Bt,Rt,Ce,wn,Ie.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pt,zt,de,Ie.width,Ie.height,Ce,Ie.data):z.texSubImage2D(z.TEXTURE_2D,Pt,zt,de,Bt,Rt,Ce,wn,Ie);vt.pixelStorei(z.UNPACK_ROW_LENGTH,Fn),vt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye),vt.pixelStorei(z.UNPACK_SKIP_PIXELS,sr),vt.pixelStorei(z.UNPACK_SKIP_ROWS,Tn),vt.pixelStorei(z.UNPACK_SKIP_IMAGES,ml),Pt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&z.generateMipmap(kt),vt.unbindTexture()},this.initRenderTarget=function(T){Ft.get(T).__webglFramebuffer===void 0&&Wt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Wt.setTextureCube(T,0):T.isData3DTexture?Wt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Wt.setTexture2DArray(T,0):Wt.setTexture2D(T,0),vt.unbindTexture()},this.resetState=function(){V=0,U=0,J=null,vt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var s_=["4","5","SIX","8","NINE","10"],s1={6:[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]};function r_(s,t,e){let n=s.getContext("2d");s.width=t,s.height=e,n.fillStyle="#000",n.fillRect(0,0,t,e),n.fillStyle=n.strokeStyle="#fff",n.lineJoin="round",n.textBaseline="alphabetic";let i=t/e<1.25,r=Math.max(2,Math.round(e*(i?.004:.0052))),o=Math.max(1.5,r*.7),a="letterSpacing"in n,l=(I,C=0)=>{n.font=`900 ${I}px Anybody, "Arial Black", sans-serif`,"fontStretch"in n&&(n.fontStretch="extra-expanded"),a&&(n.letterSpacing=(C*I).toFixed(1)+"px")};l(200);let c=(n.measureText("H").actualBoundingBoxAscent||144)/200,h=(I,C,O,D,B,{outline:V=!1,space:U=0}={})=>{let J=D/c;l(J,U);let X=n.measureText(I).width-(a?U*J:0);X>B&&(J*=B/X,X=B,l(J,U));let R=C-X/2,Q=O+J*c/2;return V?(n.lineWidth=o,n.strokeText(I,R,Q)):n.fillText(I,R,Q),X},d=(I,C,O,D,B=r)=>{n.lineWidth=B,n.beginPath(),n.moveTo(I,C),n.lineTo(O,D),n.stroke()},u=(I,C,O)=>{n.lineWidth=o,n.beginPath(),n.roundRect?n.roundRect(I-O/2,C-O/2,O,O,O*.2):n.rect(I-O/2,C-O/2,O,O),n.stroke();for(let[D,B]of s1[6])n.beginPath(),n.arc(I+D*O*.22,C+B*O*.27,O*.075,0,7),n.fill()},[f,m,_,p,g,v,E]=(i?[.02,.165,.31,.635,.78,.855,.975]:[.035,.035,.25,.7,.815,.885,.968]).map(I=>Math.round(I*e));for(let I of new Set([f,m,_,p,g,v,E]))d(0,I,t,I);let y=(I,C,O,D,B)=>{let V=(D-O)*.16;d(I,O+V,C,O+V,o),d(I,D-V,C,D-V,o),h(B,(I+C)/2,(O+D)/2,(D-O)*(B.length>2?.26:.36),(C-I)*.74)};if(i)for(let I=0;I<6;I++){let C=I%3,O=C*t/3,D=I<3?f:m,B=I<3?m:_;C&&d(O,D,O,B),y(O,O+t/3,D,B,s_[I])}else{let I=t*.15,C=(t-I)/6,O=_-f,D=e*.027;h("DON'T COME",I/2,f+O*.34,D,I*.76,{space:.1});let B=h("BAR",I*.3,f+O*.66,D,I*.3,{space:.1}),V=O*.2;u(I*.3+B/2+V*1.1,f+O*.66,V),u(I*.3+B/2+V*2.3,f+O*.66,V);for(let U=0;U<6;U++){let J=I+U*C;d(J,f,J,_),y(J,J+C,f,_,s_[U])}}let S=g-p,M=(I,C,O,D,B)=>{h(I,C,O,D,D*(B?1.55:2.6),{outline:!0}),B&&(n.lineWidth=o,n.beginPath(),n.arc(C,O,D*1.12,0,7),n.stroke())};if(i)h("FIELD",t/2,p+S*.25,S*.17,t*.5,{space:.3}),["2","3","4","9","10","11","12"].forEach((I,C)=>M(I,(C+.5)*t/7,p+S*.66,S*.2,C===0||C===6));else{let I=p+S/2,C=S*.34;[["2",.065],["3",.175],["4",.285],["9",.69],["10",.785],["11",.875],["12",.955]].forEach(([O,D],B)=>M(O,D*t,I,C,B===0||B===6)),h("FIELD",t/2,I,S*.4,t*.24,{space:.12})}let x=i?[.5]:[.17,.5,.83],b=v-g,L=g+b/2,A=b*.5;for(let I of x){let C=I*t-A*1.3,O=h("DON'T PASS BAR",C,L,b*.3,t*(i?.62:.2),{space:.18});u(C+O/2+A*1.1,L,A),u(C+O/2+A*2.3,L,A)}for(let I of x)h("PASS LINE",I*t,(v+E)/2,(E-v)*.4,t*(i?.8:.24),{space:.28})}var hl=new K;function Ci(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;hl.copy(t),hl[n]=0,hl.normalize();let c=.5*o/(o+a),h=1-hl.angleTo(s)/l;return Math.sign(hl[e])===1?h*c:a/(o+a)+c+c*(1-h)}var jh=class s extends ji{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new K,c=new K,h=new K(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,_=new K,p=.5/o;for(let g=0,v=0;g<d.length;g+=3,v+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/m)){case 0:_.set(1,0,0),f[v+0]=Ci(_,c,"z","y",r,n),f[v+1]=1-Ci(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[v+0]=1-Ci(_,c,"z","y",r,n),f[v+1]=1-Ci(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[v+0]=1-Ci(_,c,"x","z",r,t),f[v+1]=Ci(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[v+0]=1-Ci(_,c,"x","z",r,t),f[v+1]=1-Ci(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[v+0]=1-Ci(_,c,"x","y",r,t),f[v+1]=1-Ci(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[v+0]=Ci(_,c,"x","y",r,t),f[v+1]=1-Ci(_,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var zr="THEIA",r1=.34,o_=(s,t,e)=>s+(t-s)*e;function Vo(s){let t=new Ui;t.add(new yn(new ji(60,60,60),new Lr({color:1710873,side:Sn})));let e=(r,o,a,l,c)=>{let h=new yn(new ts(r,o),new Lr({color:new se(l).multiplyScalar(c),side:Ai,toneMapped:!1}));h.position.set(...a),h.lookAt(0,0,0),t.add(h)};e(16,16,[0,18,3],"#ffffff",5),e(3,22,[-18,2,5],"#ffffff",9),e(9,12,[18,-2,-3],"#fff3e6",3.5),e(26,8,[0,-16,7],"#ffffff",1.4),e(6,6,[11,7,-17],"#ffffff",5),e(30,14,[0,3,22],"#ffffff",.5);let n=new Bo(s),i=n.fromScene(t,.03).texture;return n.dispose(),i}function Go(s){s.add(new $a(16777215,1.9));let t=new Ja(16777215,1.1);t.position.set(-3,5,6),s.add(t)}var ko=3,Jd=2,o1=.13,Yd=null;function a1(s){if(Yd)return Yd;let t=new jh(1,1,1,s?4:7,.13),e=t.attributes.position.array,n=t.attributes.normal.array,i=t.attributes.uv.array,r=e.length/3/6;for(let o=0;o<e.length/3;o++){let a=Math.floor(o/r),l=a%ko,c=Math.floor(a/ko);i[o*2]=(l+i[o*2])/ko,i[o*2+1]=(Jd-1-c+i[o*2+1])/Jd;let h=a>>1;for(let u=0;u<3;u++)u!==h&&(n[o*3+u]+=e[o*3+u]*o1*2);let d=Math.hypot(n[o*3],n[o*3+1],n[o*3+2]);n[o*3]/=d,n[o*3+1]/=d,n[o*3+2]/=d}return t.clearGroups(),Yd=t}var l1={1:[[0,0]],2:[[-1,-1],[1,1]],3:[[-1,-1],[0,0],[1,1]],4:[[-1,-1],[1,-1],[-1,1],[1,1]],5:[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],6:[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]},c1=(s,t)=>t%2?[4,3,2,5,s,6]:[3,4,5,2,s,6];function Zd(s,t,e,n){let i=document.createElement("canvas"),r=i.getContext("2d");i.width=t*ko,i.height=t*Jd,r.fillStyle=e,r.fillRect(0,0,i.width,i.height),r.fillStyle=n,s.forEach((a,l)=>{let c=l%ko*t,h=Math.floor(l/ko)*t;if(typeof a=="number"){for(let[_,p]of l1[a])r.beginPath(),r.arc(c+t*(.5+_*.215),h+t*(.5+p*.215),t*(a===1?.125:.078),0,Math.PI*2),r.fill();return}let d=_=>{r.font=`900 ${_}px Anybody, "Arial Black", sans-serif`,"fontStretch"in r&&(r.fontStretch="expanded")};d(t);let u=r.measureText(a),f=t*(t*.5)/(u.actualBoundingBoxAscent||t*.7);d(f),u=r.measureText(a);let m=u.actualBoundingBoxLeft+u.actualBoundingBoxRight;m>t*.6&&(f*=t*.6/m,d(f),u=r.measureText(a)),r.textBaseline="alphabetic",r.fillText(a,c+t/2-(u.actualBoundingBoxRight-u.actualBoundingBoxLeft)/2,h+t/2+u.actualBoundingBoxAscent/2)});let o=new Dr(i);return o.minFilter=Fi,o.magFilter=tn,o}function Ho(s,t){s.transmission=Math.max(.001,1-t),s.roughness=o_(.05,.24,t),s.envMapIntensity=o_(1.15,.45,t)}function Wo(s,{light:t=!1,aniso:e=1,accent:n="#ff4b1f",paper:i="#e8e9e4",face:r=zr[s]}={}){let o=t?256:512,a=c1(r,s),l="#"+new se(n).multiplyScalar(r1).getHexString(),c=Zd(a,o,n,"#000"),h=Zd(a,o,"#fff","#000"),d=Zd(a,o,l,i);c.colorSpace=d.colorSpace=qn,h.colorSpace=Gi,c.anisotropy=d.anisotropy=h.anisotropy=e;let u=new Wa({map:c,metalness:0,roughness:.05,ior:1.5,thickness:.7,dispersion:4,transmission:1,transmissionMap:h,emissive:16777215,emissiveMap:d,emissiveIntensity:1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.15,specularIntensity:1});return{mesh:new yn(a1(t),u),mat:u}}var nu=28,iu=12,a_=-2.6,tu=.62,su=30,h1=.62,$d=zr.length-1,l_=.0042,Kd=Math.PI*2,ul={shade:.55,reach:1.55,ember:.07,dark:.1,lit:.6},u1=.8,Qd=s=>s*s*(3-2*s),Xo=(s,t,e)=>Math.min(e,Math.max(t,s)),nr=(s,t,e)=>s+(t-s)*e,c_=[{rx:.42,ry:-.52,rz:-.05,dy:.14},{rx:.35,ry:.38,rz:.04,dy:-.2},{rx:.44,ry:-.3,rz:-.02,dy:.08},{rx:.36,ry:.46,rz:.05,dy:-.16},{rx:.41,ry:-.44,rz:-.04,dy:.18}],eu=new K(0,-4.6,6),f1=[[1,.6,.2],[.4,1,.3],[1,-.3,.5],[.2,1,-.6],[.8,.5,-.4]].map(s=>new K(...s).normalize()),jd=6.5,fl=8.5,h_=(Math.PI-Math.atan(fl/jd))/fl,d1=s=>1-Math.exp(-jd*s)*(Math.cos(fl*s)+jd/fl*Math.sin(fl*s)),u_=`
uniform vec3 uTop; uniform vec3 uBottom; uniform float uEdge;
uniform vec3 uTurnBg; uniform vec3 uTurnFg; uniform vec2 uTurn;
uniform vec3 uNight; uniform vec4 uDice[5]; uniform vec2 uRes; uniform vec3 uGlass; uniform vec4 uLook;
bool turned(float screenY) { return screenY > uEdge && abs(screenY - uTurn.x) < uTurn.y; }
vec4 pageColor(float screenY) { return turned(screenY) ? vec4(uTurnBg, uNight.z) : (screenY > uEdge ? vec4(uTop, uNight.x) : vec4(uBottom, uNight.y)); }
vec3 inkColor(vec3 ink, float screenY) { return turned(screenY) ? uTurnFg : ink; }
// x: how deep in the shadow of the dice this point of the wall is. y: how much of their light reaches it.
vec2 diceField(vec2 p) {
  float shade = 0.0, glow = 0.0;
  for (int i = 0; i < 5; i++) {
    vec4 d = uDice[i];
    if (d.z <= 0.0) continue;
    vec2 q = p - d.xy;
    // the light is up and to the left, so the shadow falls down and to the right; further from the wall it
    // falls further off, wider and fainter
    vec2 qs = abs(q - vec2(0.3, -0.42) * d.z * (0.55 + d.w * 2.6));
    float rs = d.z * (0.62 + d.w * 0.7), ms = pow(qs.x * qs.x * qs.x + qs.y * qs.y * qs.y, 1.0 / 3.0);
    shade += exp(-ms * ms / (rs * rs)) / (1.0 + d.w * 2.2);
    float rg = d.z * (uLook.y + d.w * 1.4);
    glow += exp(-dot(q, q) / (rg * rg)) / (1.0 + d.w * 0.7);
  }
  return vec2(min(shade, 1.0), glow);
}
// the colour of the wall at a point of the screen (s: 0 to 1 across and up); m: how much of it is print
vec3 wall(vec2 s, vec3 ink, float m) {
  vec4 pg = pageColor(s.y);
  vec2 f = diceField(s * uRes);
  vec3 day = mix(pg.rgb, ink, m) * mix(vec3(1.0), uGlass * 1.04 + 0.04, f.x * uLook.x);
  float reach = 1.0 - exp(-f.y * 1.15);
  vec3 night = mix(pg.rgb + uGlass * reach * reach * uLook.z, ink * mix(uLook.w, 1.0, smoothstep(0.0, 0.75, reach)), m);
  return mix(day, night, pg.a);
}
float grain(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453) - 0.5; }`;function p1(s){let t=new mi({uniforms:s,vertexShader:"varying vec2 vS; void main() { vS = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`${u_} varying vec2 vS;
      void main() {
        gl_FragColor = vec4(wall(vS, vec3(0.0), 0.0), 1.0);
        #include <colorspace_fragment>
        gl_FragColor.rgb += grain(gl_FragCoord.xy) / 255.0;      // (keeps the soft light from showing as steps)
      }`,depthTest:!1,depthWrite:!1}),e=new yn(new ts(2,2),t);return e.frustumCulled=!1,e.renderOrder=-10,e}function m1(s,t){let e=document.createElement("canvas"),n=new Dr(e);n.generateMipmaps=!1,n.minFilter=tn,n.magFilter=tn;let i=new mi({uniforms:{...s,uMap:{value:n},uInk:{value:t}},vertexShader:"varying vec2 vUv; varying vec4 vClip; void main() { vUv = uv; vClip = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = vClip; }",fragmentShader:`${u_}
      uniform sampler2D uMap; uniform vec3 uInk;
      varying vec2 vUv; varying vec4 vClip;
      void main() {
        float m = texture2D(uMap, vUv).r;
        vec2 s = vClip.xy / vClip.w * 0.5 + 0.5;
        gl_FragColor = vec4(wall(s, inkColor(uInk, s.y), m), 1.0);
        #include <colorspace_fragment>
        gl_FragColor.rgb += grain(gl_FragCoord.xy) / 255.0;
      }`}),r=new yn(new ts(1,1),i);r.renderOrder=-5,r.visible=!1;let o=0,a=0;return{mesh:r,mat:i,draw(l,c){l===o&&c===a||(o&&n.dispose(),o=l,a=c,r_(e,l,c),n.needsUpdate=!0)}}}function f_(s,{still:t=!1,coarse:e=!1}={}){let n;try{n=new er({canvas:s,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return null}if(!n.capabilities.isWebGL2)return n.dispose(),null;n.toneMapping=On;let i=getComputedStyle(document.documentElement),r=H=>i.getPropertyValue(H).trim(),o=H=>new se(r(H)),a=o("--paper"),l=o("--ink"),c=o("--accent"),h={paper:{bg:a,fg:l,night:0},ink:{bg:l,fg:a,night:1},accent:{bg:c,fg:l,night:0}},d=new Ui,u=new an(nu,1,.1,60);u.position.z=iu,d.environment=Vo(n),Go(d);let f={uTop:{value:a.clone()},uBottom:{value:a.clone()},uEdge:{value:-1},uTurnBg:{value:a},uTurnFg:{value:l},uTurn:{value:new ce(0,0)},uNight:{value:new K(0,0,0)},uDice:{value:zr.split("").map(()=>new Pe(0,0,0,0))},uRes:{value:new ce(1,1)},uGlass:{value:c},uLook:{value:new Pe(ul.shade,ul.reach,ul.ember,ul.dark)}};d.add(p1(f));let m=[...document.querySelectorAll("section[data-theme]")].map(H=>({el:H,theme:h[H.dataset.theme]||h.paper,band:H.querySelector(".hero-rows, .contact-rows"),top:0,opaque:!1,table:null})),_=m.filter(H=>H.band),p=(H,ft)=>{H.theme=h[ft],H.el.dataset.theme!==ft&&(H.el.dataset.theme=ft),H.table&&(H.table.mat.uniforms.uInk.value=H.theme.fg)},g=Math.min(4096,n.capabilities.maxTextureSize),v=n.capabilities.getMaxAnisotropy(),E=[],y=()=>{for(let H of _)H.table||(H.table=m1(f,H.theme.fg),d.add(H.table.mesh));if(!E.length)for(let H=0;H<zr.length;H++){let ft=Wo(H,{light:e,aniso:v,accent:r("--accent"),paper:r("--paper")});ft.mesh.visible=!1,ft.toss={t0:-1,dur:0,kind:"",axis:f1[H].clone(),turns:0,hit:!0,done:t},ft.at={cx:0,cy:0,r:0},d.add(ft.mesh),E.push(ft)}},S=1,M=1,x=H=>{let ft=2*(iu-H)*Math.tan(nu*Math.PI/360);return{h:ft,w:ft*(S/M)}};function b(){S=document.documentElement.clientWidth,M=window.innerHeight,n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.5:2)),n.setSize(S,M,!1),f.uRes.value.set(S,M),u.aspect=S/M,u.updateProjectionMatrix();let H=window.scrollY;for(let ft of m){let Mt=ft.el.parentElement.classList.contains("pin-spacer")?ft.el.parentElement:ft.el;ft.top=Mt.getBoundingClientRect().top+H,ft.opaque=!/rgba\([^)]*,\s*0\)$|transparent/.test(getComputedStyle(ft.el).backgroundColor)}}function L(H){let ft=Xo((H.width/Math.max(1,H.height)-1.1)/.7,0,1),Mt=nr(Math.min(S*.21,H.height*.24),Math.min(S*.122,H.height*.36),ft),G=nr(S*.168,Math.min(S*.172,Mt*1.42),ft),xt=nr(Math.min(H.height*.17,Mt*.92),0,ft),Jt=H.left+H.width/2,Kt=H.top+H.height/2;return{edge:Mt,at:c_.map((qt,te)=>({cx:Jt+(te-2)*G,cy:Kt+(te-2)*xt-qt.dy*Mt*ft}))}}let A={x:0,y:0,tx:0,ty:0},I={started:!1,kick:0,rolls:0},C={due:!1,on:!1,t:0,to:""},O=!0,D=0,B=1,V=null,U=null;window.addEventListener("pointermove",H=>{H.pointerType==="mouse"&&(A.tx=H.clientX/S-.5,A.ty=H.clientY/M-.5)},{passive:!0});function J(H,ft,Mt){let G=c_[H],xt=t?0:1,Jt=H*1.7;return{x:A.x*.1*Mt,y:-A.y*.07*Mt+xt*Math.sin(ft*.9+Jt)*.03*Mt,rx:G.rx+xt*Math.cos(ft*.55+Jt)*.04+A.y*.3*Mt,ry:G.ry+xt*Math.sin(ft*.42+Jt)*.065+A.x*.42*Mt,rz:G.rz+xt*Math.sin(ft*.31+Jt)*.018}}function X(H,ft,Mt){A.x=nr(A.x,A.tx,.06),A.y=nr(A.y,A.ty,.06);let G=Math.max(1,document.documentElement.scrollHeight-M),xt=M*.9,Jt=_[_.length-1],Kt=Qd(Xo(H.y/xt,0,1)),qt=_.length>1?Qd(Xo((G-H.y)/xt,0,1)):1,te=Mt?Math.max(1-Kt,1-qt):1,xe=_.length>1&&H.y>G/2,z=xe?Jt:_[0],Xt=z.band.getBoundingClientRect();H.atEnd===void 0&&(H.atEnd=xe),H.atEnd!==xe&&(H.spin+=(xe?1:-1)*G*l_,H.atEnd=xe);let Yt=(xe?H.y-G:H.y)*l_*(1-te),Ht=Math.round(H.spin/Kd)*Kd;H.spin+=(Ht-H.spin)*(1-Math.exp(-ft*8*te*te)),H.spin+=ft*.5*(1-te);let vt=H.rail||{x:S-Xo(S*.034,20,60)/2,top:M*.24,height:M*.52,px:su},he=L(Xt),Ft=he.at[$d],Wt=vt.px*h1,P=x(0),w=Wt*Math.pow(he.edge/Wt,te),q=vt.top+Xo(H.y/G,0,1)*vt.height,dt=nr(vt.x,Ft.cx,te),ot=nr(q,Ft.cy,te),mt=J($d,H.time,te);return B=te,V=z,U=he,{u:te,cx:dt,cy:ot,px:w,railY:q,overlay:Mt&&te<tu,box:Wt*Math.pow(he.edge/Wt,tu)*1.95,solid:1-Qd(Xo((te-tu)/(1-tu),0,1)),x:(dt/S-.5)*P.w+mt.x,y:(.5-ot/M)*P.h+mt.y,scale:w/M*P.h,rx:mt.rx+Yt+H.spin,ry:mt.ry,rz:mt.rz}}function R(H){let ft=x(a_),Mt=n.getPixelRatio();I.kick*=Math.exp(-H*5);for(let G of _){if(!G.table)continue;let xt=G.band.getBoundingClientRect(),Jt=xt.bottom>0&&xt.top<M&&xt.height>40&&xt.width>40;if(G.table.mesh.visible=Jt,!Jt)continue;let Kt=Math.min(Mt,g/xt.width,g/xt.height);G.table.draw(Math.round(xt.width*Kt),Math.round(xt.height*Kt));let qt=t?0:I.kick*7;G.table.mesh.scale.set(xt.width/S*ft.w,xt.height/M*ft.h,1),G.table.mesh.position.set(((xt.left+xt.width/2)/S-.5)*ft.w,(.5-(xt.top+xt.height/2+qt)/M)*ft.h,a_)}}function Q(H){let ft=0;for(let xt=0;xt<m.length;xt++)m[xt].top<=H+1&&(ft=xt);let Mt=m[ft],G=m[ft+1];return f.uTop.value=Mt.theme.bg,f.uNight.value.x=Mt.theme.night,G&&G.top-H<M?(f.uBottom.value=G.theme.bg,f.uNight.value.y=G.theme.night,f.uEdge.value=1-(G.top-H)/M):(f.uBottom.value=Mt.theme.bg,f.uNight.value.y=Mt.theme.night,f.uEdge.value=-1),!(Mt.opaque&&(!G||G.top-H>=M||G.opaque))}function St(){let H=_[0];t||C.on||V!==H||(C.on=!0,C.t=0,C.to=H.theme===h.ink?"paper":"ink",f.uTurnBg.value=h[C.to].bg,f.uTurnFg.value=h[C.to].fg,f.uNight.value.z=h[C.to].night)}function Dt(H){if(!C.on)return;let ft=_[0],Mt=ft.band.getBoundingClientRect();C.t=Math.min(1,C.t+H/u1);let G=1-(Mt.top+Mt.height/2)/M,Jt=(1-Math.pow(1-C.t,4))*(Math.max(G,1-G)+.02);f.uTurn.value.set(G,Jt),Jt*M>Mt.height/2+Math.min(60,M*.06)&&ft.el.dataset.theme!==C.to&&(ft.el.dataset.theme=C.to),C.t>=1&&(C.on=!1,p(ft,C.to),f.uTurn.value.set(0,0))}let k={dx:0,dy:0,dz:0,angle:0,hidden:!1};function ht(H,ft,Mt,G){let xt=H.toss;if(k.dx=k.dy=k.dz=k.angle=0,k.hidden=!1,xt.done)return k;if(xt.t0<0)return k.hidden=!0,k;let Jt=(D-xt.t0)/xt.dur;if(Jt<0)return k.hidden=xt.kind==="in",k;if(Jt>=1)return xt.done=!0,k;let Kt=xt.kind==="in"?h_:.3,qt=d1(xt.kind==="in"?Jt:Jt*(h_/Kt));if(!xt.hit&&Jt>=Kt&&(xt.hit=!0,I.kick=Math.min(1.4,I.kick+(xt.kind==="in"?.55:.4)),C.due&&(C.due=!1,St())),k.angle=xt.turns*Kd*(1-qt),xt.kind==="in")k.dx=(eu.x-ft)*(1-qt),k.dy=(eu.y-Mt)*(1-qt),k.dz=eu.z*(1-qt);else{let te=Math.sin(Math.PI*Math.min(1,Jt/Kt));k.dz=te*2.3*G,k.dy=te*.3*G}return k}function Et(H){C.due=!0,E.forEach((ft,Mt)=>{let G=ft.toss,xt=H==="in";G.kind=H,G.t0=D+Mt*(xt?.095:.055),G.dur=xt?1.9:1.55,G.turns=xt?1.5+Mt*3%4*.2:1+Mt%2,xt||G.axis.set(Math.random()-.5,Math.random()-.5,(Math.random()-.5)*.6).normalize(),G.hit=!1,G.done=!1})}let It=new ei,_t=new vn,W=new vn,lt={w:1,h:1};function tt(H,ft,Mt,G,xt,Jt,Kt,qt,te,xe,z){let Xt=E[H],Yt=ht(Xt,xt,Jt,Kt),Ht=f.uDice.value[H];if(Xt.at.cx=ft,Xt.at.cy=Mt,Xt.at.r=G*.78,Xt.mesh.visible=z&&!Yt.hidden,!Xt.mesh.visible){Ht.z=0;return}Ht.set(((xt+Yt.dx)/lt.w+.5)*S,((Jt+Yt.dy)/lt.h+.5)*M,Kt/lt.h*M,Math.max(0,Yt.dz)/eu.z),Xt.mesh.position.set(xt+Yt.dx,Jt+Yt.dy,Yt.dz),Xt.mesh.scale.setScalar(Kt),_t.setFromEuler(It.set(qt,te,xe)),Yt.angle&&_t.multiply(W.setFromAxisAngle(Xt.toss.axis,Yt.angle)),Xt.mesh.quaternion.copy(_t)}function ut(H,ft,Mt){if(!I.started||(D+=H,!Q(ft.y)&&!O))return;O=!1;let xt=lt=x(0),Jt=V.band.getBoundingClientRect(),Kt=U,qt=Kt.edge/M*xt.h,te=Jt.bottom>-Kt.edge&&Jt.top<M+Kt.edge,xe=V.theme.night,z=C.on&&V===_[0]?nr(xe,h[C.to].night,1-Math.pow(1-C.t,4)):xe;for(let Xt=0;Xt<E.length;Xt++)if(E[Xt].mat.emissiveIntensity=1+ul.lit*z,Xt===$d)Ho(E[Xt].mat,Mt.solid),tt(Xt,Mt.cx,Mt.cy,Mt.px,Mt.x,Mt.y,Mt.scale,Mt.rx,Mt.ry,Mt.rz,!Mt.overlay);else{let Yt=Kt.at[Xt],Ht=J(Xt,ft.time,1);tt(Xt,Yt.cx,Yt.cy,Kt.edge,(Yt.cx/S-.5)*xt.w+Ht.x,(.5-Yt.cy/M)*xt.h+Ht.y,qt,Ht.rx,Ht.ry,Ht.rz,te)}Dt(H),R(Math.min(H,.05)),n.render(d,u)}s.addEventListener("webglcontextlost",H=>{H.preventDefault(),document.documentElement.classList.remove("gl"),I.started=!1});let ct=()=>I.started&&B>.97&&E.length>0&&E.every(H=>H.toss.done);return{state:I,layout:b,pose:X,frame:ut,start(){t&&!I.started&&p(_[0],"ink"),y(),b(),I.started=!0,O=!0},throwIn(){t||Et("in")},over(H,ft){return ct()&&E.some(Mt=>Mt.mesh.visible&&Math.hypot(H-Mt.at.cx,ft-Mt.at.cy)<Mt.at.r)},roll(){return t||!ct()?!1:(Et("again"),I.rolls++,!0)}}}function d_(s=!1){let t=document.createElement("canvas");t.className="charm",t.setAttribute("aria-hidden","true");let e=document.createElement("div");e.className="rail",e.setAttribute("aria-hidden","true"),document.body.append(e,t);let n;try{n=new er({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return t.remove(),e.remove(),null}n.setClearColor(0,0),n.toneMapping=On;let i=new Ui,r=new an(nu,1,.1,60);r.position.z=iu,i.environment=Vo(n),Go(i);let o=null,a={x:0,top:0,height:0,px:su},l=0,c=0,h=0,d=!1,u=!0,f="";function m(){l=document.documentElement.clientWidth,c=window.innerHeight;let p=e.getBoundingClientRect();p.height?(a.x=p.left+p.width/2,a.top=p.top,a.height=p.height):(a.x=l-20,a.top=c*.24,a.height=c*.52),a.px=Math.min(su,Math.max(s?19:18,(l-a.x)*1.12)),e.style.setProperty("--gap",(a.px*.86).toFixed(1)+"px"),n.setPixelRatio(Math.min(window.devicePixelRatio||1,3)),r.aspect=l/c,h=0}function _(p){if(!u)return;d!==p.overlay&&(d=p.overlay,t.style.visibility=d?"visible":"hidden"),e.classList.toggle("is-on",p.u<.16);let g=(p.railY-a.top).toFixed(1)+"px";if(g!==f&&(f=g,e.style.setProperty("--y",g)),!d)return;if(!o){let S=getComputedStyle(document.documentElement);o=Wo(zr.length-1,{light:s,aniso:n.capabilities.getMaxAnisotropy(),accent:S.getPropertyValue("--accent").trim(),paper:S.getPropertyValue("--paper").trim()}),i.add(o.mesh)}let v=Math.ceil(p.box);Math.abs(v-h)>1&&(h=v,t.style.width=t.style.height=h+"px",n.setSize(h,h,!1));let E=Math.round(p.cx-h/2),y=Math.round(p.cy-h/2);t.style.transform=`translate3d(${E}px,${y}px,0)`,r.setViewOffset(l,c,E,y,h,h),Ho(o.mat,p.solid),o.mesh.position.set(p.x,p.y,0),o.mesh.scale.setScalar(p.scale),o.mesh.rotation.set(p.rx,p.ry,p.rz),n.render(i,r)}return t.addEventListener("webglcontextlost",p=>{p.preventDefault(),u=!1,t.remove(),e.remove()}),{layout:m,frame:_,line:a}}function p_(s,{light:t=!1,still:e=!1}={}){if(!s)return null;let n=document.createElement("canvas"),i;try{i=new er({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return null}i.setClearColor(0,0),i.toneMapping=On;let r=new Ui,o=new an(24,1,.1,30);o.position.z=5.5,r.environment=Vo(i),Go(r);let a=getComputedStyle(document.documentElement),l=Wo(0,{light:t,face:1,aniso:i.capabilities.getMaxAnisotropy(),accent:a.getPropertyValue("--accent").trim(),paper:a.getPropertyValue("--paper").trim()});Ho(l.mat,1),r.add(l.mesh),s.append(n),s.classList.add("has-gl");let c=0,h=!1,d=!0,u=!0,f=()=>{let C=Math.round(n.clientWidth);!C||C===c||(c=C,u=!0,i.setPixelRatio(Math.min(window.devicePixelRatio||1,2.5)),i.setSize(C,C,!1))};new ResizeObserver(f).observe(s),new IntersectionObserver(C=>{h=C[0].isIntersecting,u=!0},{rootMargin:"80px"}).observe(s);let m=new ei(.5,-.6,.05),_=new vn().setFromEuler(m),p=new vn,g=new vn,v=new ei,E=new K,y=0,S=!1,M=0,x=0,b=0,L=0,A=9;function I(C){if(!d||!h||!c||e&&!u)return;if(u=!1,y+=C,A+=C,x+=(b-x)*Math.min(1,C*9),L+=((S?1:0)-L)*Math.min(1,C*7),M+=((S?12:0)-M)*Math.min(1,C*(S?6:9)),(S||M>.4)&&(E.set(Math.sin(y*1.3)+.6,1,Math.cos(y*.9)*.7).normalize(),_.premultiply(g.setFromAxisAngle(E,M*C))),!S){let D=e?0:1;p.setFromEuler(v.set(m.x+D*Math.cos(y*.6)*.05-x*.16,m.y+D*Math.sin(y*.45)*.09+x*.3,m.z)),_.slerp(p,1-Math.exp(-C*(M>.4?5:9)))}let O=Math.exp(-A*7)*Math.sin(A*17)*.1;l.mesh.quaternion.copy(_),l.mesh.scale.setScalar(1+x*.07+L*.1-O),l.mesh.position.y=L*.12+(e?0:Math.sin(y*.9)*.025),i.render(r,o)}return n.addEventListener("webglcontextlost",C=>{C.preventDefault(),d=!1,n.remove(),s.classList.remove("has-gl")}),{frame:I,hover(C){b=C?1:0,u=!0},spin(C){S&&!C&&(A=0),S=C,u=!0}}}var m_=ug();pg();fg();var Mn=f_(_e("[data-gl]"),{still:Ve,coarse:!Ca});Mn&&Tr.classList.add("gl");var ir=_e(".hero-hint");if(Mn&&!Ve){let s=t=>!t.target.closest("a, button, input, textarea, select, [data-work]")&&Mn.over(t.clientX,t.clientY);window.addEventListener("pointermove",t=>{t.pointerType==="mouse"&&Tr.classList.toggle("on-dice",s(t))},{passive:!0}),window.addEventListener("click",t=>{!s(t)||!Mn.roll()||ir&&ir.dataset.after&&(ir.textContent=ir.dataset.after,delete ir.dataset.after,ie.fromTo(ir,{opacity:0,y:6},{opacity:.6,y:0,duration:.6,ease:"expo.out",delay:.55}))})}else ir&&(ir.hidden=!0);var g1=ho("section[data-theme]");function _1(){for(let s of g1){let t=s.parentElement.classList.contains("pin-spacer")?s.parentElement:s,e=t.getBoundingClientRect();if(e.top<=36&&e.bottom>36){document.body.dataset.theme!==s.dataset.theme&&(document.body.dataset.theme=s.dataset.theme);return}}}ie.ticker.add(_1);Ve||ho("[data-scrub-words]").forEach(s=>{co.create(s,{type:"words",autoSplit:!0,onSplit:t=>ie.fromTo(t.words,{opacity:.13},{opacity:1,ease:"none",stagger:.1,scrollTrigger:{trigger:s,start:"top 92%",end:"bottom 68%",scrub:!0}})})});var ru=_e("[data-work]");if(ru){let s=_e(".work"),t=_e(".work-window",s),e=_e("[data-now]",s),n=_e("[data-all]",s),i=_e("[data-prev]",s),r=_e("[data-next]",s),o=_e("[data-spin]",s),a=_e(".work-meta",s),l=_e(".work-tag",s),c=_e(".work-play",s),h=_e("[data-cursor]"),d=W=>String(W).padStart(2,"0"),u=ie.utils.clamp,f=(W,lt)=>(W%lt+lt)%lt,m=Math.PI/180,_=[{el:_e(".work-reel-art",s),step:44,gap:.97,dim:.42},{el:_e(".work-reel-name",s),step:17,gap:1.6,dim:.5},{el:_e(".work-reel-fig",s),step:21,gap:1.9,dim:.5}].map(W=>({...W,faces:[...W.el.children],slots:[],clones:[],pos:0,last:0,R:300,cut:2,tween:null,spin:null,blur:0})),p=_[0].faces,g=p.map((W,lt)=>lt),v=g.length,E=v,y=0,S=-1,M=!1,x=!0,b=!1,L=null,A=()=>{},I=Mn?p_(_e(".die",s),{light:!Ca,still:Ve}):null,C=()=>{v=g.length;let W=Math.ceil(8/v);E=v*W,_.forEach(lt=>{lt.clones.forEach(tt=>tt.remove()),lt.clones=[],lt.faces.forEach(tt=>{tt.classList.remove("is-on"),tt.style.visibility=""}),lt.slots=g.map(tt=>({el:lt.faces[tt],gi:tt}));for(let tt=1;tt<W;tt++)g.forEach(ut=>{let ct=lt.faces[ut].cloneNode(!0);ct.setAttribute("aria-hidden","true"),ct.classList.remove("work-item"),ct.removeAttribute("aria-current"),ct.querySelectorAll("a").forEach(H=>{H.tabIndex=-1}),lt.el.append(ct),lt.clones.push(ct),lt.slots.push({el:ct,gi:ut})})})},O=()=>{let W=_[1],lt=W.el.clientWidth-40;W.slots.forEach(tt=>{tt.el.style.fontSize=""}),g.forEach(tt=>{let ut=Math.min(1,lt/W.faces[tt].firstElementChild.offsetWidth);ut<1&&W.slots.forEach(ct=>{ct.gi===tt&&(ct.el.style.fontSize=ut.toFixed(3)+"em")})}),_.forEach((tt,ut)=>{let ct=ut===1?parseFloat(getComputedStyle(tt.el).fontSize):tt.faces[g[0]].offsetHeight;tt.R=ct*tt.gap/Math.sin(tt.step*m),tt.cut=Math.min(3.2,84/tt.step)}),x=!0},D=()=>{_.forEach(W=>{for(let lt=0;lt<E;lt++){let tt=W.slots[lt],ut=tt.el.style,ct=f(lt-W.pos,E);ct>E/2&&(ct-=E);let H=Math.abs(ct);if(H>W.cut){tt.off||(ut.visibility="hidden",tt.off=!0);continue}tt.off&&(ut.visibility="",tt.off=!1);let ft=ct*W.step*m;ut.transform=`translate(-50%,-50%) translate3d(0,${(W.R*Math.sin(ft)).toFixed(1)}px,${(W.R*(Math.cos(ft)-1)).toFixed(1)}px) rotateX(${(-ct*W.step).toFixed(2)}deg)`,ut.opacity=(H<1?1-H*(1-W.dim):W.dim*Math.pow(.45,H-1)).toFixed(3);let Mt=H<.5;tt.on!==Mt&&(tt.el.classList.toggle("is-on",Mt),tt.on=Mt)}})},B=()=>{if(b)for(let W=-2;W<=2;W++){let lt=_e("img",p[g[f(S+W,v)]]);lt&&(lt.loading="eager")}},V=W=>{S=W;let lt=p[g[W]];e&&(e.textContent=d(W+1)),a.replaceChildren(...lt.dataset.meta.split("|").map(tt=>{let ut=document.createElement("span");return ut.textContent=tt,ut})),l.textContent=lt.dataset.tag,c.hidden=!lt.dataset.demo,lt.dataset.demo&&(c.href=lt.dataset.demo),p.forEach(tt=>tt===lt?tt.setAttribute("aria-current","true"):tt.removeAttribute("aria-current")),Ve||ie.fromTo([a,l],{y:10,opacity:0},{y:0,opacity:1,duration:.5,ease:"expo.out",stagger:.05,overwrite:!0,clearProps:"transform,opacity"}),B(),A()},U=()=>{y=f(y,v),_.forEach(W=>{W.pos=W.last=f(W.pos,v)}),x=!0},J=W=>{M||(y=W,_.forEach((lt,tt)=>{if(lt.tween&&lt.tween.kill(),lt.tween=null,Ve){lt.pos=W;return}lt.tween=ie.to(lt,{pos:W,duration:.72+tt*.08,delay:tt*.07,ease:"back.out(1.5)",onComplete:tt===2?U:void 0})}),Ve&&U(),x=!0,f(W,v)!==S&&V(f(W,v)))},X=()=>{if(M||v<2)return;let W=f(Math.round(y)+1+Math.floor(Math.random()*(v-1)),v);if(Ve){J(W);return}M=!0,s.classList.add("is-spinning"),I&&I.spin(!0),v<=12&&p.forEach(tt=>{let ut=_e("img",tt);ut&&(ut.loading="eager")});let lt=u(16,45,v*1.3);_.forEach((tt,ut)=>{tt.tween&&tt.tween.kill(),tt.tween=null,tt.spin={v:0,V:lt,land:W,t:0,wait:ut?1/0:.7}})},R=(W,lt,tt)=>{let ut=W.spin;if(ut.t+=tt,ut.v+=(ut.V-ut.v)*Math.min(1,tt*5),W.pos+=ut.v*tt,ut.t<ut.wait)return;let ct=Math.ceil(W.pos+1.1);if(ct+=f(ut.land-ct,v),ct-W.pos>2.15)return;W.spin=null;let H=_[lt+1];H&&H.spin&&(H.spin.wait=H.spin.t+.3),W.tween=ie.to(W,{pos:ct,duration:4.7*(ct-W.pos)/ut.v,ease:"back.out(1.7)",onComplete:()=>{W.pos=W.last=f(W.pos,v),!(lt<2)&&(y=f(ct,v),M=!1,x=!0,s.classList.remove("is-spinning"),I&&I.spin(!1),V(ut.land))}})};ie.ticker.add((W,lt)=>{let tt=Math.min(Math.max(lt,1)/1e3,.05);_.forEach((ut,ct)=>{ut.spin&&R(ut,ct,tt)}),_.forEach(ut=>{let ct=Math.abs(ut.pos-ut.last)/tt;ut.last=ut.pos,ct>0&&(x=!0);let H=Ve?0:Math.round(Math.min(7,Math.max(0,ct-5)*.5));H!==ut.blur&&(ut.el.style.setProperty("--blur",H+"px"),ut.el.classList.toggle("is-blur",H>0),ut.blur=H)}),x&&(D(),x=!1)});let Q=W=>{let lt=_.find(ct=>ct.el===W.parentElement),tt=lt?lt.slots.findIndex(ct=>ct.el===W):-1;if(tt<0)return 0;let ut=f(tt-Math.round(y),E);return ut>E/2&&(ut-=E),ut};i&&(i.addEventListener("click",()=>J(Math.round(y)-1)),r.addEventListener("click",()=>J(Math.round(y)+1))),o.addEventListener("click",X),I&&(o.addEventListener("pointerenter",W=>{W.pointerType==="mouse"&&I.hover(!0)}),o.addEventListener("pointerleave",()=>I.hover(!1)),ie.ticker.add((W,lt)=>I.frame(Math.min(Math.max(lt,1)/1e3,.05)))),ru.addEventListener("keydown",W=>{let lt=W.key==="ArrowDown"||W.key==="ArrowRight"?1:W.key==="ArrowUp"||W.key==="ArrowLeft"?-1:0;!lt||W.target.closest("button")||(W.preventDefault(),J(Math.round(y)+lt))}),ru.addEventListener("focusin",W=>{let lt=W.target.closest(".work-face");if(lt&&W.target.matches(":focus-visible")){let tt=Q(lt);tt&&J(Math.round(y)+tt)}});let St=0,Dt=0;t.addEventListener("wheel",W=>{Math.abs(W.deltaX)<=Math.abs(W.deltaY)||(W.stopPropagation(),!(W.timeStamp-Dt<380)&&(St+=W.deltaX,Math.abs(St)>50&&(J(Math.round(y)+Math.sign(St)),St=0,Dt=W.timeStamp)))},{passive:!0});let k=null,ht=!1;t.addEventListener("pointerdown",W=>{!M&&!W.button&&(k={id:W.pointerId,x:W.clientX,y:W.clientY,mouse:W.pointerType==="mouse",axis:"",moved:!1,d:0,v:0,pt:W.timeStamp})}),window.addEventListener("pointermove",W=>{if(!k||W.pointerId!==k.id)return;let lt=W.clientX-k.x,tt=W.clientY-k.y;if(!k.moved){if(Math.hypot(lt,tt)<8)return;let H=Math.abs(tt)>Math.abs(lt);if(H&&!k.mouse){k=null;return}k.axis=H?"y":"x",k.moved=!0,_.forEach(ft=>{ft.tween&&ft.tween.kill(),ft.tween=null,ft.base=ft.pos}),t.classList.add("is-grab")}let ut=-(k.axis==="y"?tt:lt)/u(110,230,t.clientWidth*.42),ct=(W.timeStamp-k.pt)/1e3;ct>0&&(k.v+=((ut-k.d)/ct-k.v)*.5,k.pt=W.timeStamp),k.d=ut,_.forEach(H=>{H.pos=H.base+ut}),x=!0});let Et=W=>{if(!k||W.pointerId!==k.id)return;let lt=k;k=null,lt.moved&&(t.classList.remove("is-grab"),ht=!0,setTimeout(()=>{ht=!1},80),J(Math.round(_[0].pos+(W.timeStamp-lt.pt>90?0:u(-1.2,1.2,lt.v*.16)))))};window.addEventListener("pointerup",Et),window.addEventListener("pointercancel",Et),t.addEventListener("dragstart",W=>W.preventDefault()),t.addEventListener("click",W=>{if(ht||M){W.preventDefault(),W.stopPropagation();return}let lt=W.target.closest(".work-face"),tt=lt?Q(lt):0;tt&&(W.preventDefault(),J(Math.round(y)+tt))},!0);let It=()=>{let W=y=f(Math.round(y),v);_.forEach((lt,tt)=>{if(lt.tween&&lt.tween.kill(),lt.tween=null,Ve){lt.pos=lt.last=W;return}lt.pos=lt.last=W-(2+tt),lt.tween=ie.to(lt,{pos:W,duration:1.1+tt*.28,ease:"back.out(1.25)",onComplete:tt===2?U:void 0})}),x=!0};if(C(),O(),V(0),Ve||(_.forEach((W,lt)=>{W.pos=W.last=-(2+lt)}),Zt.create({trigger:ru,start:"top 84%",once:!0,onEnter:It})),Zt.create({trigger:s,start:"top 220%",once:!0,onEnter:()=>{b=!0,B()}}),Zt.addEventListener("refresh",O),document.fonts.ready.then(O),h&&Ca){let W=ie.quickTo(h,"x",{duration:.35,ease:"power3"}),lt=ie.quickTo(h,"y",{duration:.35,ease:"power3"}),tt=_[0].el,ut=!0;ie.set(h,{scale:0}),A=()=>{if(L){let H=Q(L);h.textContent=H?H>0?"Next":"Back":"Open"}};let ct=()=>{L=null,ut||(ut=!0,ie.to(h,{scale:0,duration:Ve?0:.3,ease:"power3.in",overwrite:"auto"}))};tt.addEventListener("pointermove",H=>{let ft=H.target.closest(".work-face");if(!ft){ct();return}ft!==L&&(L=ft,A()),ut&&(ut=!1,ie.set(h,{x:H.clientX,y:H.clientY,visibility:"visible"}),ie.to(h,{scale:1,duration:Ve?0:.45,ease:"expo.out",overwrite:"auto"})),W(H.clientX),lt(H.clientY)}),tt.addEventListener("pointerleave",ct)}let _t=ho("[data-filter]");_t.forEach(W=>W.addEventListener("click",()=>{if(M)return;_t.forEach(ct=>ct.setAttribute("aria-pressed",String(ct===W)));let[lt,tt]=W.dataset.filter.split(":"),ut=ct=>lt==="*"||(lt==="cat"?ct.dataset.cat:ct.dataset.rel)===tt;_.forEach(ct=>{ct.tween&&ct.tween.kill(),ct.tween=null,ct.faces.forEach((H,ft)=>{H.hidden=!ut(p[ft])})}),g=p.map((ct,H)=>H).filter(ct=>!p[ct].hidden),n&&(n.textContent=d(g.length)),y=0,C(),O(),V(0),It(),W.scrollIntoView({block:"nearest",inline:"center",behavior:Ve?"auto":"smooth"})}))}var dl=_e(".craft"),x1=_e("[data-craft]"),ou=ho(".craft-panel"),v1=ie.matchMedia();function y1(s){dl.classList.add("is-deal",s?"is-row":"is-pile");let t=ou.length,e=(t-1)/2,n=ou.map((S,M)=>({el:S,seat:S.parentElement,inner:_e(".card-in",S),i:M,state:""})),i=ho(".craft-index li"),r=_e(".craft-bar i"),o=_e(".craft-end"),a=[-3,2.2,-1.8,3.2],l=.5,c=l*(t-1.5)+.3,h=c+.45,d=0,u=!1,f=null,m=null,_=S=>({x:dl.clientWidth-S.seat.offsetLeft+S.seat.offsetWidth*.75,y:-(S.seat.offsetTop+S.seat.offsetHeight),r:46,s:1}),p=(S,M)=>{let x=S.seat.offsetWidth,b=S.i-e,L=a[S.i%a.length];return s?{x:0,y:M||u?-x*.04:0,r:L*(u?.45:1),s:M&&!u?1.03:1}:u?{x:b*x*.16,y:b*b*x*.045,r:b*10,s:.8}:{x:b*x*.045,y:-b*x*.03,r:L*1.7,s:1}},g=S=>{n.forEach(M=>{let x=M.i<d,b=M.i===d-1,L=x?u?"f":b?"t":"r":"u";if(L===M.state&&!S)return;let A=x&&(M.state==="u"||M.state==="");M.state=L,M.el.toggleAttribute("data-dealt",x),M.el.classList.toggle("is-down",x&&!b&&!u);let I=x?p(M,b):_(M);ie.to(M.el,{x:I.x,y:I.y,rotation:I.r,scale:I.s,duration:S?0:A?1:x?.7:.5,ease:A?"expo.out":x?"power3.out":"power2.in",overwrite:!0}),(S||A||!x)&&ie.to(M.inner,{rotationY:x?0:180,duration:S?0:x?.75:.35,delay:A&&!S?.08:0,ease:"power2.inOut",overwrite:!0})}),i.forEach((M,x)=>M.classList.toggle("is-on",u?x<d:x===d-1)),o&&ie.to(o,{autoAlpha:u?1:0,y:u?0:12,duration:S?0:.6,ease:"expo.out",overwrite:!0})},v=()=>{if(!f||!m)return!1;let S=f.progress*h,M=m.progress>0,x=M?1+Math.min(t-1,Math.floor(S/l+.5)):0,b=M&&S>=c;return r&&(r.style.transform=`scaleX(${f.progress.toFixed(4)})`),x===d&&b===u?!1:(d=x,u=b,!0)},E=()=>{v()&&g(!1)},y=()=>{v(),g(!0)};return g(!0),m=Zt.create({trigger:dl,start:"top 58%",onUpdate:E,onToggle:E}),f=Zt.create({trigger:dl,start:"top top",end:()=>"+="+Math.round(window.innerHeight*h),pin:!0,anticipatePin:1,invalidateOnRefresh:!0,onUpdate:E,onRefresh:y}),y(),()=>{f.kill(),m.kill(),n.forEach(S=>{ie.killTweensOf([S.el,S.inner]),ie.set([S.el,S.inner],{clearProps:"all"}),S.el.classList.remove("is-down"),S.el.removeAttribute("data-dealt")}),o&&(ie.killTweensOf(o),ie.set(o,{clearProps:"all"})),i.forEach(S=>S.classList.remove("is-on")),dl.classList.remove("is-deal","is-row","is-pile")}}function S1(){let s=ie.from(ou,{y:60,opacity:0,rotation:t=>[-5,4,-3,5][t%4],duration:1,ease:"expo.out",stagger:.09,scrollTrigger:{trigger:x1,start:"top 84%"}});return()=>{s.scrollTrigger&&s.scrollTrigger.kill(),s.kill(),ie.set(ou,{clearProps:"all"})}}v1.add({any:"all",row:"(min-width: 1100px) and (min-height: 580px)",pile:"(max-width: 1099px) and (min-height: 500px)"},s=>{if(Ve)return;let{row:t,pile:e}=s.conditions;return t||e?y1(t):S1()});var g_=_e(".contact-line");wf(g_,{scrollTrigger:{trigger:g_,start:"top 90%"}});Ve||ie.from(".contact-side > *",{y:22,opacity:0,duration:.9,ease:"expo.out",stagger:.08,scrollTrigger:{trigger:".contact-side",start:"top 92%"}});var is=Mn&&!Ve?d_(!Ca):null;is&&Tr.classList.add("companion");if(Mn){let s={time:0,y:window.scrollY,vel:0,spin:0,rail:is?is.line:null},t=s.y,e=()=>{Mn.layout(),is&&is.layout()};Zt.addEventListener("refresh",e),window.addEventListener("resize",e),ie.ticker.add((n,i)=>{if(!Mn.state.started)return;let r=Math.min(i/1e3,.05);s.time+=r,s.y=window.scrollY,s.vel+=((s.y-t)/Math.max(r,.001)-s.vel)*.2,t=s.y;let o=Mn.pose(s,r,!!is);Mn.frame(r,s,o),is&&is.frame(o)})}var M1=document.fonts.load("900 100px Anybody").catch(()=>{}).then(()=>{Mn&&Mn.start(),is&&is.layout()});dg(M1,()=>{Ve||(Mn&&ie.delayedCall(.5,()=>Mn.throwIn()),wf(_e(".hero-line"),{delay:Mn?1.05:.55}),ie.from(".hero-side > *",{y:22,opacity:0,duration:1,ease:"expo.out",stagger:.09,delay:Mn?1.35:.85}),ie.from(".nav > *",{y:-18,opacity:0,duration:.9,ease:"expo.out",stagger:.08,delay:.7,clearProps:"transform,opacity"}))});document.fonts.ready.then(()=>Zt.refresh());window.addEventListener("load",()=>Zt.refresh());m_&&location.hash&&requestAnimationFrame(()=>{let s=_e(location.hash);s&&m_.scrollTo(s,{immediate:!0})});})();
