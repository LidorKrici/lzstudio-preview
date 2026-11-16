(()=>{var H0=Object.defineProperty;var W0=(s,t,e)=>t in s?H0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Xt=(s,t,e)=>W0(s,typeof t!="symbol"?t+"":t,e);function ss(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ap(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},na={duration:.5,overwrite:!1,delay:0},Ou,mn,Ne,xi=1e8,Te=1/xi,Cu=Math.PI*2,X0=Cu/4,q0=0,Cp=Math.sqrt,Y0=Math.cos,Z0=Math.sin,rn=function(t){return typeof t=="string"},We=function(t){return typeof t=="function"},os=function(t){return typeof t=="number"},Bl=function(t){return typeof t>"u"},Hi=function(t){return typeof t=="object"},Zn=function(t){return t!==!1},Fu=function(){return typeof window<"u"},Al=function(t){return We(t)||rn(t)},Rp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,J0=/random\([^)]+\)/g,$0=/,\s*/g,vp=/(?:-?\.?\d|\.)+/gi,Bu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,pr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Su=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zu=/[+-]=-?[.\d]+/,K0=/[^,'"\[\]\s]+/gi,Q0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Fe,Gi,Ru,ku,ni={},Il={},Pp,Ip=function(t){return(Il=Jr(t,ni))&&En},zl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ia=function(t,e){return!e&&console.warn(t)},Lp=function(t,e){return t&&(ni[t]=e)&&Il&&(Il[t]=e)||ni},sa=function(){return 0},j0={suppressEvents:!0,isStart:!0,kill:!1},Cl={suppressEvents:!0,kill:!1},tx={suppressEvents:!0},Gu={},Ps=[],Pu={},Dp,qn={},Mu={},yp=30,Rl=[],Vu="",Hu=function(t){var e=t[0],n,i;if(Hi(e)||We(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Rl.length;i--&&!Rl[i].targetTest(e););n=Rl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Yu(t[i],n)))||t.splice(i,1);return t},Is=function(t){return t._gsap||Hu(vi(t))[0]._gsap},Wu=function(t,e,n){return(n=t[e])&&We(n)?t[e]():Bl(n)&&t.getAttribute&&t.getAttribute(e)||n},On=function(t,e){return(t=t.split(",")).forEach(e)||t},Xe=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},mr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},ex=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ll=function(){var t=Ps.length,e=Ps.slice(0),n,i;for(Pu={},Ps.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Xu=function(t){return!!(t._initted||t._startAt||t.add)},Np=function(t,e,n,i){Ps.length&&!mn&&Ll(),t.render(e,n,i||!!(mn&&e<0&&Xu(t))),Ps.length&&!mn&&Ll()},Up=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(K0).length<2?e:rn(t)?t.trim():t},Op=function(t){return t},ii=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},nx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Jr=function(t,e){for(var n in e)t[n]=e[n];return t},Sp=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Hi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Dl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},jo=function(t){var e=t.parent||Fe,n=t.keyframes?nx(Tn(t.keyframes)):ii;if(Zn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},ix=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Fp=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},kl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ls=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ur=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},sx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Iu=function(t,e,n,i){return t._startAt&&(mn?t._startAt.revert(Cl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},rx=function s(t){return!t||t._ts&&s(t.parent)},Mp=function(t){return t._repeat?$r(t._tTime,t=t.duration()+t._rDelay)*t:0},$r=function(t,e){var n=Math.floor(t=Oe(t/e));return t&&n===t?n-1:n},Nl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Gl=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},Vl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Gl(t),n._dirty||ur(n,t)),t},Bp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Nl(t.rawTime(),e),(!e._dur||la(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),ur(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},Vi=function(t,e,n,i){return e.parent&&Ls(e),e._start=Oe((os(n)?n:!n&&Ul(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Fe?_i(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Fp(t,e,"_first","_last",t._sort?"_start":0),Ul(e)||(t._recent=e),i||Bp(t,e),t._ts<0&&Vl(t,t._tTime),t},zp=function(t,e){return(ni.ScrollTrigger||zl("scrollTrigger",e))&&ni.ScrollTrigger.create(e,t)},kp=function(t,e,n,i,r){if($u(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Dp!==Yn.frame)return Ps.push(t),t._lazy=[r,i],1},ox=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Ul=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},ax=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&ox(t)&&!(!t._initted&&Ul(t))||(t._ts<0||t._dp._ts<0)&&!Ul(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=la(0,t._tDur,e),h=$r(l,a),t._yoyo&&h&1&&(o=1-o),h!==$r(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||mn||i||t._zTime===Te||!e&&t._zTime){if(!t._initted&&kp(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Iu(t,e,n,!0),t._onUpdate&&!n&&ei(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ei(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ls(t,1),!n&&!mn&&(ei(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},lx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Kr=function(t,e,n,i){var r=t._repeat,o=Oe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Oe(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Vl(t,t._tTime=t._tDur*a),t.parent&&Gl(t),n||ur(t.parent,t),t},bp=function(t){return t instanceof wn?ur(t):Kr(t,t._dur)},cx={_start:0,endTime:sa,totalDuration:sa},_i=function s(t,e,n){var i=t.labels,r=t._recent||cx,o=t.duration()>=xi?r.endTime(!1):t._dur,a,l,c;return rn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ta=function(t,e,n){var i=os(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;o.immediateRender=Zn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Ze(e[0],o,e[r+1])},Ds=function(t,e){return t||t===0?e(t):e},la=function(t,e,n){return n<t?t:n>e?e:n},gn=function(t,e){return!rn(t)||!(e=Q0.exec(t))?"":e[1]},hx=function(t,e,n){return Ds(n,function(i){return la(t,e,i)})},Lu=[].slice,Gp=function(t,e){return t&&Hi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Hi(t[0]))&&!t.nodeType&&t!==Gi},ux=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return rn(i)&&!e||Gp(i,1)?(r=n).push.apply(r,vi(i)):n.push(i)})||n},vi=function(t,e,n){return Ne&&!e&&Ne.selector?Ne.selector(t):rn(t)&&!n&&(Ru||!Qr())?Lu.call((e||ku).querySelectorAll(t),0):Tn(t)?ux(t,n):Gp(t)?Lu.call(t,0):t?[t]:[]},Du=function(t){return t=vi(t)[0]||ia("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return vi(e,n.querySelectorAll?n:n===t?ia("Invalid scope")||ku.createElement("div"):t)}},Vp=function(t){return t.sort(function(){return .5-Math.random()})},Hp=function(t){if(We(t))return t;var e=Hi(t)?t:{each:t},n=fr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return rn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(f,u,m){var _=(m||e).length,p=o[_],g,y,b,v,S,E,x,M,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,xi])[1],!P){for(x=-xi;x<(x=m[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=o[_]=[],g=l?Math.min(P,_)*h-.5:i%P,y=P===xi?0:l?_*d/P-.5:i/P|0,x=0,M=xi,E=0;E<_;E++)b=E%P-g,v=y-(E/P|0),p[E]=S=c?Math.abs(c==="y"?v:b):Cp(b*b+v*v),S>x&&(x=S),S<M&&(M=S);i==="random"&&Vp(p),p.max=x-M,p.min=M,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=gn(e.amount||e.each)||0,n=n&&_<0?wx(n):n}return _=(p[f]-p.min)/p.max||0,Oe(p.b+(n?n(_):_)*p.v)+p.u}},Nu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(os(n)?0:gn(n))}},Wp=function(t,e){var n=Tn(t),i,r;return!n&&Hi(t)&&(i=n=t.radius||xi,t.values?(t=vi(t.values),(r=!os(t[0]))&&(i*=i)):t=Nu(t.increment)),Ds(e,n?We(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=xi,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:o,r||h===o||os(o)?h:h+gn(o)}:Nu(t))},Xp=function(t,e,n,i){return Ds(Tn(t)?!e:n===!0?!!(n=0):!i,function(){return Tn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},fx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},dx=function(t,e){return function(n){return t(parseFloat(n))+(e||gn(n))}},px=function(t,e,n){return Yp(t,e,0,1,n)},qp=function(t,e,n){return Ds(n,function(i){return t[~~e(i)]})},mx=function s(t,e,n){var i=e-t;return Tn(t)?qp(t,s(0,t.length),e):Ds(n,function(r){return(i+(r-t)%i)%i+t})},gx=function s(t,e,n){var i=e-t,r=i*2;return Tn(t)?qp(t,s(0,t.length-1),e):Ds(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},jr=function(t){return t.replace(J0,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split($0);return Xp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Yp=function(t,e,n,i,r){var o=e-t,a=i-n;return Ds(r,function(l){return n+((l-t)/o*a||0)})},_x=function s(t,e,n,i){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=rn(t),a={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Tn(t)&&!Tn(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(m){m*=d;var _=Math.min(f,~~m);return h[_](m-_)},n=e}else i||(t=Jr(Tn(t)?[]:{},t));if(!h){for(l in e)Zu.call(a,t,l,"get",e[l]);r=function(m){return ju(m,a)||(o?t.p:t)}}}return Ds(n,r)},wp=function(t,e,n){var i=t.labels,r=xi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ei=function(t,e,n){var i=t.vars,r=i[e],o=Ne,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ps.length&&Ll(),a&&(Ne=a),h=l?r.apply(c,l):r.call(c),Ne=o,h},Ko=function(t){return Ls(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mn),t.progress()<1&&ei(t,"onInterrupt"),t},Zr,Zp=[],Jp=function(t){if(t)if(t=!t.name&&t.default||t,Fu()||t.headless){var e=t.name,n=We(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:sa,render:ju,add:Zu,kill:Nx,modifier:Dx,rawVars:0},o={targetTest:0,get:0,getSetter:Hl,aliases:{},register:0};if(Qr(),t!==i){if(qn[e])return;ii(i,ii(Dl(t,r),o)),Jr(i.prototype,Jr(r,Dl(t,o))),qn[i.prop=e]=i,t.targetTest&&(Rl.push(i),Gu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Lp(e,i),t.register&&t.register(En,i,Fn)}else Zp.push(t)},Re=255,Qo={aqua:[0,Re,Re],lime:[0,Re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Re],navy:[0,0,128],white:[Re,Re,Re],olive:[128,128,0],yellow:[Re,Re,0],orange:[Re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Re,0,0],pink:[Re,192,203],cyan:[0,Re,Re],transparent:[Re,Re,Re,0]},bu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Re+.5|0},$p=function(t,e,n){var i=t?os(t)?[t>>16,t>>8&Re,t&Re]:0:Qo.black,r,o,a,l,c,h,d,f,u,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Qo[t])i=Qo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Re,i&Re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Re,t&Re]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(vp),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=bu(l+1/3,r,o),i[1]=bu(l,r,o),i[2]=bu(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Bu),n&&i.length<4&&(i[3]=1),i}else i=t.match(vp)||Qo.transparent;i=i.map(Number)}return e&&!m&&(r=i[0]/Re,o=i[1]/Re,a=i[2]/Re,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Kp=function(t){var e=[],n=[],i=-1;return t.split(rs).forEach(function(r){var o=r.match(pr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Tp=function(t,e,n){var i="",r=(t+i).match(rs),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=$p(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Kp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(rs,"1").split(pr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(rs),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},rs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Qo)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),xx=/hsl[a]?\(/,qu=function(t){var e=t.join(" "),n;if(rs.lastIndex=0,rs.test(e))return n=xx.test(e),t[1]=Tp(t[1],n),t[0]=Tp(t[0],n,Kp(t[1])),!0},ra,Yn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,f,u,m=function _(p){var g=s()-i,y=p===!0,b,v,S,E;if((g>t||g<0)&&(n+=g-e),i+=g,S=i-n,b=S-o,(b>0||y)&&(E=++d.frame,f=S-d.time*1e3,d.time=S=S/1e3,o+=b+(b>=r?0:r-b),v=1),y||(l=c(_)),v)for(u=0;u<a.length;u++)a[u](S,f,E,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Pp&&(!Ru&&Fu()&&(Gi=Ru=window,ku=Gi.document||{},ni.gsap=En,(Gi.gsapVersions||(Gi.gsapVersions=[])).push(En.version),Ip(Il||Gi.GreenSockGlobals||!Gi.gsap&&Gi||{}),Zp.forEach(Jp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},ra=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ra=0,c=sa},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,g,y){var b=g?function(v,S,E,x){p(v,S,E,x),d.remove(b)}:p;return d.remove(p),a[y?"unshift":"push"](b),Qr(),b},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},d})(),Qr=function(){return!ra&&Yn.wake()},_e={},vx=/^[\d.\-M][\d.\-,\s]/,yx=/["']/g,Sx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(yx,"").trim():+c,i=l.substr(a+1).trim();return e},Mx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},bx=function(t){var e=(t+"").split("("),n=_e[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Sx(e[1])]:Mx(t).split(",").map(Up)):_e._CE&&vx.test(t)?_e._CE("",t):n},wx=function(t){return function(e){return 1-t(1-e)}},fr=function(t,e){return t&&(We(t)?t:_e[t]||bx(t))||e},gr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return On(t,function(a){_e[a]=ni[a]=r,_e[o=a.toLowerCase()]=n;for(var l in r)_e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_e[a+"."+l]=r[l]}),r},Qp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},wu=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Cu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Z0((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Qp(a);return r=Cu/r,l.config=function(c,h){return s(t,c,h)},l},Tu=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Qp(n);return i.config=function(r){return s(t,r)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;gr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});_e.Linear.easeNone=_e.none=_e.Linear.easeIn;gr("Elastic",wu("in"),wu("out"),wu());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};gr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);gr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});gr("Circ",function(s){return-(Cp(1-s*s)-1)});gr("Sine",function(s){return s===1?1:-Y0(s*X0)+1});gr("Back",Tu("in"),Tu("out"),Tu());_e.SteppedEase=_e.steps=ni.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Te;return function(a){return((i*la(0,o,a)|0)+r)*n}}};na.ease=_e["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Vu+=s+","+s+"Params,"});var Yu=function(t,e){this.id=q0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Wu,this.set=e?e.getSetter:Hl},oa=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Kr(this,+e.duration,1,1),this.data=e.data,Ne&&(this._ctx=Ne,Ne.data.push(this)),ra||Yn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Kr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Qr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Vl(this,n),!r._dp||r.parent||Bp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Np(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?$r(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Nl(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(la(-Math.abs(this._delay),a,r),i!==!1),Gl(this),sx(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Qr(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Te,o;if(r)for(this._tTime-=Te,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Te){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Oe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Vi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=tx);var i=mn;return mn=n,Xu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(_i(this,n),Zn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zn(i)),this._dur||(this._zTime=-Te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Te)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=We(n)?n:Op,l=function(){var h=i.then;i.then=null,r&&r(),We(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ko(this)},s})();ii(oa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var wn=(function(s){Ap(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Zn(n.sortChildren),Fe&&Vi(n.parent||Fe,ss(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&zp(ss(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return ta(0,arguments,this),this},e.from=function(i,r,o){return ta(1,arguments,this),this},e.fromTo=function(i,r,o,a){return ta(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,jo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ze(i,r,_i(this,o),1),this},e.call=function(i,r,o){return Vi(this,Ze.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ze(i,o,_i(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,jo(o).immediateRender=Zn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,jo(a).immediateRender=Zn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Oe(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,m,_,p,g,y,b,v,S,E,x;if(this!==Fe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,v=this._start,b=this._ts,g=!b,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=Oe(h%p),h===l?(_=this._repeat,f=c):(S=Oe(h/p),_=~~S,_&&_===S&&(f=c,_--),f>c&&(f=c)),S=$r(this._tTime,p),!a&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),E&&_&1&&(f=c-f,x=1),_!==S&&!this._lock){var M=E&&S&1,P=M===(E&&_&1);if(_<S&&(M=!M),a=M?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Oe(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ei(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=lx(this,Oe(a),Oe(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!S&&(ei(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!g){y=0,m&&(h+=this._zTime=-Te);break}}u=m}else{u=this._last;for(var A=i<0?i:f;u;){if(m=u._prev,(u._act||A<=u._end)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(A-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(A-u._start)*u._ts,r,o||mn&&Xu(u)),f!==this._time||!this._ts&&!g){y=0,m&&(h+=this._zTime=A?-Te:Te);break}}u=m}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-Te)._zTime=f>=a?1:-1,this._ts))return this._start=v,Gl(this),this.render(i,r,o);this._onUpdate&&!r&&ei(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ls(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(ei(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(os(r)||(r=_i(this,r,i)),!(i instanceof oa)){if(Tn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(rn(i))return this.addLabel(i,r);if(We(i))i=Ze.delayedCall(0,i);else return this}return this!==i?Vi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-xi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ze?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return rn(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(i.parent===this&&kl(this,i),i===this._recent&&(this._recent=this._last),ur(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=_i(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Ze.delayedCall(0,r||sa,o);return a.data="isPause",this._hasPause=1,Vi(this,a,_i(this,i))},e.removePause=function(i){var r=this._first;for(i=_i(this,i);r;)r._start===i&&r.data==="isPause"&&Ls(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Rs!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=vi(i),l=this._first,c=os(r),h;l;)l instanceof Ze?ex(l._targets,a)&&(c?(!Rs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=_i(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,m=Ze.to(o,ii({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!u){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Kr(m,p,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,d||[])}},r));return f?m.render(0):m},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,ii({startAt:{time:_i(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),wp(this,_i(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),wp(this,_i(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Oe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return ur(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ur(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=xi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Vi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Oe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Kr(o,o===Fe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Fe._ts&&(Np(Fe,Nl(i,Fe)),Dp=Yn.frame),Yn.frame>=yp){yp+=Jn.autoSleep||120;var r=Fe._first;if((!r||!r._ts)&&Jn.autoSleep&&Yn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Yn.sleep()}}},t})(oa);ii(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Tx=function(t,e,n,i,r,o,a){var l=new Fn(this._pt,t,e,0,1,Qu,null,r),c=0,h=0,d,f,u,m,_,p,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=jr(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),f=n.match(Su)||[];d=Su.exec(i);)m=d[0],_=i.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),m!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?mr(p,m)-p:parseFloat(m)-p,m:u&&u<4?Math.round:0},c=Su.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(zu.test(i)||g)&&(l.e=0),this._pt=l,l},Zu=function(t,e,n,i,r,o,a,l,c,h){We(i)&&(i=i(r||0,t,o));var d=t[e],f=n!=="get"?n:We(d)?c?t[e.indexOf("set")||!We(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=We(d)?c?Px:tm:Ku,m;if(rn(i)&&(~i.indexOf("random(")&&(i=jr(i)),i.charAt(1)==="="&&(m=mr(f,i)+(gn(f)||0),(m||m===0)&&(i=m))),!h||f!==i||Uu)return!isNaN(f*i)&&i!==""?(m=new Fn(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?Lx:em,0,u),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&zl(e,i),Tx.call(this,t,e,f,i,u,l||Jn.stringFilter,c))},Ex=function(t,e,n,i,r){if(We(t)&&(t=ea(t,r,e,n,i)),!Hi(t)||t.style&&t.nodeType||Tn(t)||Rp(t))return rn(t)?ea(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=ea(t[a],r,e,n,i);return o},Ju=function(t,e,n,i,r,o){var a,l,c,h;if(qn[t]&&(a=new qn[t]).init(r,a.rawVars?e[t]:Ex(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Fn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Zr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Rs,Uu,$u=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:p,b=t._overwrite==="auto"&&!Ou,v=t.timeline,S=i.easeReverse||d,E,x,M,P,A,N,D,H,L,k,V,I,X;if(v&&(!f||!r)&&(r="none"),t._ease=fr(r,na.ease),t._rEase=S&&(fr(S)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||f&&!i.stagger){if(H=p[0]?Is(p[0]).harness:0,I=H&&i[H.prop],E=Dl(i,Gu),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&m?Cl:j0),_._lazy=0),o){if(Ls(t._startAt=Ze.set(p,ii({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Zn(l),startAt:null,delay:0,onUpdate:c&&function(){return ei(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn||!a&&!u)&&t._startAt.revert(Cl),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),M=ii({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Zn(l),immediateRender:a,stagger:0,parent:g},E),I&&(M[H.prop]=I),Ls(t._startAt=Ze.set(p,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn?t._startAt.revert(Cl):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Zn(l)||l&&!m,x=0;x<p.length;x++){if(A=p[x],D=A._gsap||Hu(p)[x]._gsap,t._ptLookup[x]=k={},Pu[D.id]&&Ps.length&&Ll(),V=y===p?x:y.indexOf(A),H&&(L=new H).init(A,I||E,t,V,y)!==!1&&(t._pt=P=new Fn(t._pt,A,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(B){k[B]=P}),L.priority&&(N=1)),!H||I)for(M in E)qn[M]&&(L=Ju(M,E,t,V,A,y))?L.priority&&(N=1):k[M]=P=Zu.call(t,A,M,"get",E[M],V,y,0,i.stringFilter);t._op&&t._op[x]&&t.kill(A,t._op[x]),b&&t._pt&&(Rs=t,Fe.killTweensOf(A,k,t.globalTime(e)),X=!t.parent,Rs=0),t._pt&&l&&(Pu[D.id]=1)}N&&tf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,f&&e<=0&&v.render(xi,!0,!0)},Ax=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Uu=1,t.vars[e]="+=0",$u(t,a),Uu=0,l?ia(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Xe(n)+gn(d.e)),d.b&&(d.b=h.s+gn(d.b))},Cx=function(t,e){var n=t[0]?Is(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Jr({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Rx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Tn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},ea=function(t,e,n,i,r){return We(t)?t.call(e,n,i,r):rn(t)&&~t.indexOf("random(")?jr(t):t},Ol=Vu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",jp={};On(Ol+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return jp[s]=1});Ol=Ol.split(",");var Ze=(function(s){Ap(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:jo(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Fe,y=(Tn(n)||Rp(n)?os(n[0]):"length"in i)?[n]:vi(n),b,v,S,E,x,M,P,A;if(a._targets=y.length?Hu(y):ia("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,m||f||Al(c)||Al(h)){i=a.vars;var N=i.easeReverse||i.yoyoEase;if(b=a.timeline=new wn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:y}),b.kill(),b.parent=b._dp=ss(a),b._start=0,f||Al(c)||Al(h)){if(E=y.length,P=f&&Hp(f),Hi(f))for(x in f)~Ol.indexOf(x)&&(A||(A={}),A[x]=f[x]);for(v=0;v<E;v++)S=Dl(i,jp),S.stagger=0,N&&(S.easeReverse=N),A&&Jr(S,A),M=y[v],S.duration=+ea(c,ss(a),v,M,y),S.delay=(+ea(h,ss(a),v,M,y)||0)-a._delay,!f&&E===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),b.to(M,S,P?P(v,M,y):0),b._ease=_e.none;b.duration()?c=h=0:a.timeline=0}else if(m){jo(ii(b.vars.defaults,{ease:"none"})),b._ease=fr(m.ease||i.ease||"none");var D=0,H,L,k;if(Tn(m))m.forEach(function(V){return b.to(y,V,">")}),b.duration();else{S={};for(x in m)x==="ease"||x==="easeEach"||Rx(x,m[x],S,m.easeEach);for(x in S)for(H=S[x].sort(function(V,I){return V.t-I.t}),D=0,v=0;v<H.length;v++)L=H[v],k={ease:L.e,duration:(L.t-(v?H[v-1].t:0))/100*c},k[x]=L.v,b.to(y,k,D),D+=k.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return u===!0&&!Ou&&(Rs=ss(a),Fe.killTweensOf(y),Rs=0),Vi(g,ss(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===Oe(g._time)&&Zn(d)&&rx(ss(a))&&g.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-h)||0)),p&&zp(ss(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Te&&!h?l:i<Te?0:i,f,u,m,_,p,g,y,b;if(!c)ax(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(f=Oe(d%_),d===l?(m=this._repeat,f=c):(p=Oe(d/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=$r(this._tTime,_),f===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Oe(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(kp(this,h?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var S=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!p&&(ei(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(y,u.d),u=u._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Iu(this,i,r,o),ei(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&ei(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Iu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ls(this,1),!r&&!(h&&!a)&&(d||a||g)&&(ei(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){ra||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||$u(this,c),h=this._ease(c/this._dur),Ax(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Vl(this,0),this.parent||Fp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ko(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Rs&&Rs.vars.overwrite!==!0)._first||Ko(this),this.parent&&o!==this.timeline.totalDuration()&&Kr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?vi(i):a,c=this._ptLookup,h=this._pt,d,f,u,m,_,p,g;if((!r||r==="all")&&ix(a,l))return r==="all"&&(this._pt=0),Ko(this);for(d=this._op=this._op||[],r!=="all"&&(rn(r)&&(_={},On(r,function(y){return _[y]=1}),r=_),r=Cx(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(d[g]=r,m=f,u={}):(u=d[g]=d[g]||{},m=r);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&kl(this,p,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Ko(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return ta(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return ta(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Fe.killTweensOf(i,r,o)},t})(oa);ii(Ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(s){Ze[s]=function(){var t=new wn,e=Lu.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Ku=function(t,e,n){return t[e]=n},tm=function(t,e,n){return t[e](n)},Px=function(t,e,n,i){return t[e](i.fp,n)},Ix=function(t,e,n){return t.setAttribute(e,n)},Hl=function(t,e){return We(t[e])?tm:Bl(t[e])&&t.setAttribute?Ix:Ku},em=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Lx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Qu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ju=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Dx=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Nx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?kl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Ux=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},tf=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Fn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||em,this.d=l||this,this.set=c||Ku,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ux,this.m=n,this.mt=r,this.tween=i},s})();On(Vu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Gu[s]=1});ni.TweenMax=ni.TweenLite=Ze;ni.TimelineLite=ni.TimelineMax=wn;Fe=new wn({sortChildren:!1,defaults:na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=qu;var dr=[],Pl={},Ox=[],Ep=0,Fx=0,Eu=function(t){return(Pl[t]||Ox).map(function(e){return e()})},aa=function(){var t=Date.now(),e=[];t-Ep>2&&(Eu("matchMediaInit"),dr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Gi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Eu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ep=t,Eu("matchMedia"))},nm=(function(){function s(e,n){this.selector=n&&Du(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Fx++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){We(n)&&(r=i,i=n,n=We);var o=this,a=function(){var c=Ne,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Du(r)),Ne=o,d=i.apply(o,arguments),We(d)&&o._r.push(d),Ne=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===We?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ne;Ne=null,n(this),Ne=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ze&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ze)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=dr.length;o--;)dr[o].id===this.id&&dr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(aa):a.removeEventListener("change",aa)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),Bx=(function(){function s(e){this.contexts=[],this.scope=e,Ne&&Ne.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Hi(n)||(n={matches:n});var o=new nm(0,r||this.scope),a=o.conditions={},l,c,h;Ne&&!o.selector&&(o.selector=Ne.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Gi.matchMedia(n[c]),l&&(dr.indexOf(o)<0&&dr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(aa):l.addEventListener("change",aa),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Fl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Jp(i)})},timeline:function(t){return new wn(t)},getTweensOf:function(t,e){return Fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){rn(t)&&(t=vi(t)[0]);var r=Is(t||{}).get,o=n?Op:Up;return n==="native"&&(n=""),t&&(e?o((qn[e]&&qn[e].get||r)(t,e,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=vi(t),t.length>1){var i=t.map(function(h){return En.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=qn[e],a=Is(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Zr._pt=0,d.init(t,n?h+n:h,Zr,0,[t]),d.render(1,d),Zr._pt&&ju(1,Zr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=En.to(t,ii((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=fr(t.ease,na.ease)),Sp(na,t||{})},config:function(t){return Sp(Jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!ni[a]&&ia(e+" effect requires "+a+" plugin.")}),Mu[e]=function(a,l,c){return n(vi(a),ii(l||{},r),c)},o&&(wn.prototype[e]=function(a,l,c){return this.add(Mu[e](a,Hi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){_e[t]=fr(e)},parseEase:function(t,e){return arguments.length?fr(t,e):_e},getById:function(t){return Fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new wn(t),i,r;for(n.smoothChildTiming=Zn(t.smoothChildTiming),Fe.remove(n),n._dp=0,n._time=n._tTime=Fe._time,i=Fe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ze&&i.vars.onComplete===i._targets[0]))&&Vi(n,i,i._start-i._delay),i=r;return Vi(Fe,n,0),n},context:function(t,e){return t?new nm(t,e):Ne},matchMedia:function(t){return new Bx(t)},matchMediaRefresh:function(){return dr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||aa()},addEventListener:function(t,e){var n=Pl[t]||(Pl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Pl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:mx,wrapYoyo:gx,distribute:Hp,random:Xp,snap:Wp,normalize:px,getUnit:gn,clamp:hx,splitColor:$p,toArray:vi,selector:Du,mapRange:Yp,pipe:fx,unitize:dx,interpolate:_x,shuffle:Vp},install:Ip,effects:Mu,ticker:Yn,updateRoot:wn.updateRoot,plugins:qn,globalTimeline:Fe,core:{PropTween:Fn,globals:Lp,Tween:Ze,Timeline:wn,Animation:oa,getCache:Is,_removeLinkedListItem:kl,reverting:function(){return mn},context:function(t){return t&&Ne&&(Ne.data.push(t),t._ctx=Ne),Ne},suppressOverwrites:function(t){return Ou=t}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Fl[s]=Ze[s]});Yn.add(wn.updateRoot);Zr=Fl.to({},{duration:0});var zx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},kx=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=zx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Au=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(rn(r)&&(l={},On(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}kx(a,r)}}}},En=Fl.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Au("roundProps",Nu),Au("modifiers"),Au("snap",Wp))||Fl;Ze.version=wn.version=En.version="3.15.1";Pp=1;Fu()&&Qr();var Gx=_e.Power0,Vx=_e.Power1,Hx=_e.Power2,Wx=_e.Power3,Xx=_e.Power4,qx=_e.Linear,Yx=_e.Quad,Zx=_e.Cubic,Jx=_e.Quart,$x=_e.Quint,Kx=_e.Strong,Qx=_e.Elastic,jx=_e.Back,tv=_e.SteppedEase,ev=_e.Bounce,nv=_e.Sine,iv=_e.Expo,sv=_e.Circ;var im,Ns,eo,af,yr,rv,sm,lf,ov=function(){return typeof window<"u"},ls={},vr=180/Math.PI,no=Math.PI/180,to=Math.atan2,rm=1e8,cf=/([A-Z])/g,av=/(left|right|width|margin|padding|x)/i,lv=/[\s,\(]\S/,Wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},cv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},hv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},uv=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},fv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},dm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},pm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},dv=function(t,e,n){return t.style[e]=n},pv=function(t,e,n){return t.style.setProperty(e,n)},mv=function(t,e,n){return t._gsap[e]=n},gv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},_v=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},xv=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Be="transform",$n=Be+"Origin",vv=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in ls&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Wi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=as(i,a)}):this.tfm[t]=o.x?o[t]:as(i,t),t===$n&&(this.tfm.zOrigin=o.zOrigin);else return Wi.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Be)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,e,"")),t=Be}(r||e)&&this.props.push(t,e,r[t])},mm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},yv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(cf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=lf(),(!r||!r.isStart)&&!n[Be]&&(mm(n),i.zOrigin&&n[$n]&&(n[$n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},gm=function(t,e){var n={target:t,props:[],revert:yv,save:vv};return t._gsap||En.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},_m,sf=function(t,e){var n=Ns.createElementNS?Ns.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ns.createElement(t);return n&&n.style?n:Ns.createElement(t)},si=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(cf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,io(e)||e,1)||""},om="O,Moz,ms,Ms,Webkit".split(","),io=function(t,e,n){var i=e||yr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(om[o]+t in r););return o<0?null:(o===3?"ms":o>=0?om[o]:"")+t},rf=function(){ov()&&window.document&&(im=window,Ns=im.document,eo=Ns.documentElement,yr=sf("div")||{style:{}},rv=sf("div"),Be=io(Be),$n=Be+"Origin",yr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_m=!!io("perspective"),lf=En.core.reverting,af=1)},am=function(t){var e=t.ownerSVGElement,n=sf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),eo.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),eo.removeChild(n),r},lm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},xm=function(t){var e,n;try{e=t.getBBox()}catch{e=am(t),n=1}return e&&(e.width||e.height)||n||(e=am(t)),e&&!e.width&&!e.x&&!e.y?{x:+lm(t,["x","cx","x1"])||0,y:+lm(t,["y","cy","y1"])||0,width:0,height:0}:e},vm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&xm(t))},Os=function(t,e){if(e){var n=t.style,i;e in ls&&e!==$n&&(e=Be),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(cf,"-$1").toLowerCase())):n.removeAttribute(e)}},Us=function(t,e,n,i,r,o){var a=new Fn(t._pt,e,n,0,1,o?pm:dm);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},cm={deg:1,rad:1,turn:1},Sv={grid:1,flex:1},Fs=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=yr.style,l=av.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",m,_,p,g;if(i===o||!r||cm[i]||cm[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),g=t.getCTM&&vm(t),(u||o==="%")&&(ls[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Xe(u?r/m*d:r/100*m);if(a[l?"width":"height"]=d+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ns||!_.appendChild)&&(_=Ns.body),p=_._gsap,p&&u&&p.width&&l&&p.time===Yn.time&&!p.uncache)return Xe(r/p.width*d);if(u&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=d+i,m=t[h],y?t.style[e]=y:Os(t,e)}else(u||o==="%")&&!Sv[si(_,"display")]&&(a.position=si(t,"position")),_===t&&(a.position="static"),_.appendChild(yr),m=yr[h],_.removeChild(yr),a.position="absolute";return l&&u&&(p=Is(_),p.time=Yn.time,p.width=_[h]),Xe(f?m*r/d:m&&r?d/m*r:0)},as=function(t,e,n,i){var r;return af||rf(),e in Wi&&e!=="transform"&&(e=Wi[e],~e.indexOf(",")&&(e=e.split(",")[0])),ls[e]&&e!=="transform"?(r=ua(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Xl(si(t,$n))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Wl[e]&&Wl[e](t,e,n)||si(t,e)||Wu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Fs(t,e,r,n)+n:r},Mv=function(t,e,n,i){if(!n||n==="none"){var r=io(e,t,1),o=r&&si(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=si(t,"borderTopColor"))}var a=new Fn(this._pt,t.style,e,0,1,Qu),l=0,c=0,h,d,f,u,m,_,p,g,y,b,v,S;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=si(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=si(t,e)||i,_?t.style[e]=_:Os(t,e)),h=[n,i],qu(h),n=h[0],i=h[1],f=n.match(pr)||[],S=i.match(pr)||[],S.length){for(;d=pr.exec(i);)p=d[0],y=i.substring(l,d.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(u=parseFloat(_)||0,v=_.substr((u+"").length),p.charAt(1)==="="&&(p=mr(u,p)+v),g=parseFloat(p),b=p.substr((g+"").length),l=pr.lastIndex-b.length,b||(b=b||Jn.units[e]||v,l===i.length&&(i+=b,a.e+=b)),v!==b&&(u=Fs(t,e,_,b)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:u,c:g-u,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?pm:dm;return zu.test(i)&&(a.e=0),this._pt=a,a},hm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},bv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=hm[n]||n,e[1]=hm[i]||i,e.join(" ")},wv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ls[a]&&(l=1,a=a==="transformOrigin"?$n:Be),Os(n,a);l&&(Os(n,Be),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ua(n,1),o.uncache=1,mm(i)))}},Wl={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Fn(t._pt,e,n,0,0,wv);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},ha=[1,0,0,1,0,0],ym={},Sm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},um=function(t){var e=si(t,Be);return Sm(e)?ha:e.substr(7).match(Bu).map(Xe)},hf=function(t,e){var n=t._gsap||Is(t),i=t.style,r=um(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ha:r):(r===ha&&!t.offsetParent&&t!==eo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,eo.appendChild(t)),r=um(t),l?i.display=l:Os(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):eo.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},of=function(t,e,n,i,r,o){var a=t._gsap,l=r||hf(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],m=l[1],_=l[2],p=l[3],g=l[4],y=l[5],b=e.split(" "),v=parseFloat(b[0])||0,S=parseFloat(b[1])||0,E,x,M,P;n?l!==ha&&(x=u*p-m*_)&&(M=v*(p/x)+S*(-_/x)+(_*y-p*g)/x,P=v*(-m/x)+S*(u/x)-(u*y-m*g)/x,v=M,S=P):(E=xm(t),v=E.x+(~b[0].indexOf("%")?v/100*E.width:v),S=E.y+(~(b[1]||b[0]).indexOf("%")?S/100*E.height:S)),i||i!==!1&&a.smooth?(g=v-c,y=S-h,a.xOffset=d+(g*u+y*_)-g,a.yOffset=f+(g*m+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[$n]="0px 0px",o&&(Us(o,a,"xOrigin",c,v),Us(o,a,"yOrigin",h,S),Us(o,a,"xOffset",d,a.xOffset),Us(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+S)},ua=function(t,e){var n=t._gsap||new Yu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=si(t,$n)||"0",h,d,f,u,m,_,p,g,y,b,v,S,E,x,M,P,A,N,D,H,L,k,V,I,X,B,C,W,xt,ft,q,nt;return h=d=f=_=p=g=y=b=v=0,u=m=1,n.svg=!!(t.getCTM&&vm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Be]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Be]!=="none"?l[Be]:"")),i.scale=i.rotate=i.translate="none"),x=hf(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",I=""):I=!e&&t.getAttribute("data-svg-origin"),of(t,I||c,!!I||n.originIsAbsolute,n.smooth!==!1,x)),S=n.xOrigin||0,E=n.yOrigin||0,x!==ha&&(N=x[0],D=x[1],H=x[2],L=x[3],h=k=x[4],d=V=x[5],x.length===6?(u=Math.sqrt(N*N+D*D),m=Math.sqrt(L*L+H*H),_=N||D?to(D,N)*vr:0,y=H||L?to(H,L)*vr+_:0,y&&(m*=Math.abs(Math.cos(y*no))),n.svg&&(h-=S-(S*N+E*H),d-=E-(S*D+E*L))):(nt=x[6],ft=x[7],C=x[8],W=x[9],xt=x[10],q=x[11],h=x[12],d=x[13],f=x[14],M=to(nt,xt),p=M*vr,M&&(P=Math.cos(-M),A=Math.sin(-M),I=k*P+C*A,X=V*P+W*A,B=nt*P+xt*A,C=k*-A+C*P,W=V*-A+W*P,xt=nt*-A+xt*P,q=ft*-A+q*P,k=I,V=X,nt=B),M=to(-H,xt),g=M*vr,M&&(P=Math.cos(-M),A=Math.sin(-M),I=N*P-C*A,X=D*P-W*A,B=H*P-xt*A,q=L*A+q*P,N=I,D=X,H=B),M=to(D,N),_=M*vr,M&&(P=Math.cos(M),A=Math.sin(M),I=N*P+D*A,X=k*P+V*A,D=D*P-N*A,V=V*P-k*A,N=I,k=X),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),u=Xe(Math.sqrt(N*N+D*D+H*H)),m=Xe(Math.sqrt(V*V+nt*nt)),M=to(k,V),y=Math.abs(M)>2e-4?M*vr:0,v=q?1/(q<0?-q:q):0),n.svg&&(I=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Sm(si(t,Be)),I&&t.setAttribute("transform",I))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(u*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Xe(u),n.scaleY=Xe(m),n.rotation=Xe(_)+a,n.rotationX=Xe(p)+a,n.rotationY=Xe(g)+a,n.skewX=y+a,n.skewY=b+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[$n]=Xl(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?Ev:_m?Mm:Tv,n.uncache=0,n},Xl=function(t){return(t=t.split(" "))[0]+" "+t[1]},ef=function(t,e,n){var i=gn(e);return Xe(parseFloat(e)+parseFloat(Fs(t,"x",n+"px",i)))+i},Tv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Mm(t,e)},_r="0deg",ca="0px",xr=") ",Mm=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,y=n.target,b=n.zOrigin,v="",S=g==="auto"&&t&&t!==1||g===!0;if(b&&(d!==_r||h!==_r)){var E=parseFloat(h)*no,x=Math.sin(E),M=Math.cos(E),P;E=parseFloat(d)*no,P=Math.cos(E),o=ef(y,o,x*P*-b),a=ef(y,a,-Math.sin(E)*-b),l=ef(y,l,M*P*-b+b)}p!==ca&&(v+="perspective("+p+xr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(S||o!==ca||a!==ca||l!==ca)&&(v+=l!==ca||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xr),c!==_r&&(v+="rotate("+c+xr),h!==_r&&(v+="rotateY("+h+xr),d!==_r&&(v+="rotateX("+d+xr),(f!==_r||u!==_r)&&(v+="skew("+f+", "+u+xr),(m!==1||_!==1)&&(v+="scale("+m+", "+_+xr),y.style[Be]=v||"translate(0, 0)"},Ev=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,y=n.forceCSS,b=parseFloat(o),v=parseFloat(a),S,E,x,M,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=no,c*=no,S=Math.cos(l)*d,E=Math.sin(l)*d,x=Math.sin(l-c)*-f,M=Math.cos(l-c)*f,c&&(h*=no,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,M*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),S*=P,E*=P)),S=Xe(S),E=Xe(E),x=Xe(x),M=Xe(M)):(S=d,M=f,E=x=0),(b&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=Fs(u,"x",o,"px"),v=Fs(u,"y",a,"px")),(m||_||p||g)&&(b=Xe(b+m-(m*S+_*x)+p),v=Xe(v+_-(m*E+_*M)+g)),(i||r)&&(P=u.getBBox(),b=Xe(b+i/100*P.width),v=Xe(v+r/100*P.height)),P="matrix("+S+","+E+","+x+","+M+","+b+","+v+")",u.setAttribute("transform",P),y&&(u.style[Be]=P)},Av=function(t,e,n,i,r){var o=360,a=rn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?vr:1),c=l-i,h=i+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*rm)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*rm)%o-~~(c/o)*o)),t._pt=f=new Fn(t._pt,e,n,i,c,cv),f.e=h,f.u="deg",t._props.push(n),f},fm=function(t,e){for(var n in e)t[n]=e[n];return t},Cv=function(t,e,n){var i=fm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,u,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Be]=e,a=ua(n,1),Os(n,Be),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Be],o[Be]=e,a=ua(n,1),o[Be]=c);for(l in ls)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=gn(c),m=gn(h),d=u!==m?Fs(n,l,c,m):parseFloat(c),f=parseFloat(h),t._pt=new Fn(t._pt,a,l,d,f-d,nf),t._pt.u=m||0,t._props.push(l));fm(a,i)};On("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Wl[t>1?"border"+s:s]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(m){return as(a,m,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(m,_){return u[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,u,d)}});var uf={name:"css",register:rf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,f,u,m,_,p,g,y,b,v,S,E,x,M,P;af||rf(),this.styles=this.styles||gm(t),M=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(qn[_]&&Ju(_,e,n,i,t,r)))){if(u=typeof h,m=Wl[_],u==="function"&&(h=h.call(n,i,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=jr(h)),m)m(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",rs.lastIndex=0,rs.test(c)||(p=gn(c),g=gn(h),g?p!==g&&(c=Fs(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),M.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],rn(c)&&~c.indexOf("random(")&&(c=jr(c)),gn(c+"")||c==="auto"||(c+=Jn.units[_]||gn(as(t,_))||""),(c+"").charAt(1)==="="&&(c=as(t,_))):c=as(t,_),f=parseFloat(c),y=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),_ in Wi&&(_==="autoAlpha"&&(f===1&&as(t,"visibility")==="hidden"&&d&&(f=0),M.push("visibility",0,a.visibility),Us(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Wi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in ls,b){if(this.styles.save(_),P=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=si(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=si(t,"perspective"),A?t.style.perspective=A:Os(t,"perspective")}d=parseFloat(h)}if(v||(S=t._gsap,S.renderTransform&&!e.parseTransform||ua(t,e.parseTransform),E=e.smoothOrigin!==!1&&S.smooth,v=this._pt=new Fn(this._pt,a,Be,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new Fn(this._pt,S,"scaleY",S.scaleY,(y?mr(S.scaleY,y+d):d)-S.scaleY||0,nf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){M.push($n,0,a[$n]),h=bv(h),S.svg?of(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==S.zOrigin&&Us(this,S,"zOrigin",S.zOrigin,g),Us(this,a,_,Xl(c),Xl(h)));continue}else if(_==="svgOrigin"){of(t,h,1,E,0,this);continue}else if(_ in ym){Av(this,S,_,f,y?mr(f,y+h):h);continue}else if(_==="smoothOrigin"){Us(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){Cv(this,h,t);continue}}else _ in a||(_=io(_)||_);if(b||(d||d===0)&&(f||f===0)&&!lv.test(h)&&_ in a)p=(c+"").substr((f+"").length),d||(d=0),g=gn(h)||(_ in Jn.units?Jn.units[_]:p),p!==g&&(f=Fs(t,_,c,g)),this._pt=new Fn(this._pt,b?S:a,_,f,(y?mr(f,y+d):d)-f,!b&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?fv:nf),this._pt.u=g||0,b&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=uv):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=hv);else if(_ in a)Mv.call(this,t,_,c,y?y+h:h);else if(_ in t)this.add(t,_,c||t[_],y?y+h:h,i,r);else if(_!=="parseTransform"){zl(_,h);continue}b||(_ in a?M.push(_,0,a[_]):typeof t[_]=="function"?M.push(_,2,t[_]()):M.push(_,1,c||t[_])),o.push(_)}}x&&tf(this)},render:function(t,e){if(e.tween._time||!lf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:as,aliases:Wi,getSetter:function(t,e,n){var i=Wi[e];return i&&i.indexOf(",")<0&&(e=i),e in ls&&e!==$n&&(t._gsap.x||as(t,"x"))?n&&sm===n?e==="scale"?gv:mv:(sm=n||{})&&(e==="scale"?_v:xv):t.style&&!Bl(t.style[e])?dv:~e.indexOf("-")?pv:Hl(t,e)},core:{_removeProperty:Os,_getMatrix:hf}};En.utils.checkPrefix=io;En.core.getStyleSaver=gm;(function(s,t,e,n){var i=On(s+","+t+","+e,function(r){ls[r]=1});On(t,function(r){Jn.units[r]="deg",ym[r]=1}),Wi[i[13]]=s+","+t,On(n,function(r){var o=r.split(":");Wi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Jn.units[s]="px"});En.registerPlugin(uf);var re=En.registerPlugin(uf)||En,P1=re.core.Tween;function bm(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Rv(s,t,e){return t&&bm(s.prototype,t),e&&bm(s,e),s}var _n,Zl,Pv,Kn,Bs,zs,ro,Tm,Sr,oo,Em,cs,Ri,Am,Cm=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},Rm=1,so=[],oe=[],Pi=[],da=Date.now,ff=function(t,e){return e},Iv=function(){var t=oo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,oe),i.push.apply(i,Pi),oe=n,Pi=i,ff=function(o,a){return e[o](a)}},us=function(t,e){return~Pi.indexOf(t)&&Pi[Pi.indexOf(t)+1][e]},pa=function(t){return!!~Em.indexOf(t)},zn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},Bn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ql="scrollLeft",Yl="scrollTop",df=function(){return cs&&cs.isPressed||oe.cache++},Jl=function(t,e){var n=function i(r){if(r||r===0){Rm&&Kn.history.scrollRestoration!=="manual"&&(Kn.history.scrollRestoration="manual");var o=cs&&cs.isPressed;r=i.v=Math.round(r)||(cs&&cs.iOS?1:0),t(r),i.cacheID=oe.cache,o&&ff("ss",r)}else(e||oe.cache!==i.cacheID||ff("ref"))&&(i.cacheID=oe.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},An={s:ql,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Jl(function(s){return arguments.length?Kn.scrollTo(s,Qe.sc()):Kn.pageXOffset||Bs[ql]||zs[ql]||ro[ql]||0})},Qe={s:Yl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:Jl(function(s){return arguments.length?Kn.scrollTo(An.sc(),s):Kn.pageYOffset||Bs[Yl]||zs[Yl]||ro[Yl]||0})},kn=function(t,e){return(e&&e._ctx&&e._ctx.selector||_n.utils.toArray)(t)[0]||(typeof t=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Lv=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},hs=function(t,e){var n=e.s,i=e.sc;pa(t)&&(t=Bs.scrollingElement||zs);var r=oe.indexOf(t),o=i===Qe.sc?1:2;!~r&&(r=oe.push(t)-1),oe[r+o]||zn(t,"scroll",df);var a=oe[r+o],l=a||(oe[r+o]=Jl(us(t,n),!0)||(pa(t)?i:Jl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=_n.getProperty(t,"scrollBehavior")==="smooth"),l},$l=function(t,e,n){var i=t,r=t,o=da(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=da();_||p-o>l?(r=i,i=m,a=o,o=p):n?i+=m:i=r+(m-r)/(p-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},f=function(m){var _=a,p=r,g=da();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:f}},fa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},wm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Pm=function(){oo=_n.core.globals().ScrollTrigger,oo&&oo.core&&Iv()},Im=function(t){return _n=t||Cm(),!Zl&&_n&&typeof document<"u"&&document.body&&(Kn=window,Bs=document,zs=Bs.documentElement,ro=Bs.body,Em=[Kn,Bs,zs,ro],Pv=_n.utils.clamp,Am=_n.core.context||function(){},Sr="onpointerenter"in ro?"pointer":"mouse",Tm=qe.isTouch=Kn.matchMedia&&Kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ri=qe.eventTypes=("ontouchstart"in zs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in zs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Rm=0},500),Zl=1),oo||Pm(),Zl};An.op=Qe;oe.cache=0;var qe=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Zl||Im(_n)||console.warn("Please gsap.registerPlugin(Observer)"),oo||Pm();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,y=n.onDrag,b=n.onPress,v=n.onRelease,S=n.onRight,E=n.onLeft,x=n.onUp,M=n.onDown,P=n.onChangeX,A=n.onChangeY,N=n.onChange,D=n.onToggleX,H=n.onToggleY,L=n.onHover,k=n.onHoverEnd,V=n.onMove,I=n.ignoreCheck,X=n.isNormalizer,B=n.onGestureStart,C=n.onGestureEnd,W=n.onWheel,xt=n.onEnable,ft=n.onDisable,q=n.onClick,nt=n.scrollSpeed,vt=n.capture,Rt=n.allowClicks,O=n.lockAxis,Q=n.onLockAxis;this.target=a=kn(a)||zs,this.vars=n,u&&(u=_n.utils.toArray(u)),i=i||1e-9,r=r||0,m=m||1,nt=nt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Kn.getComputedStyle(ro).lineHeight)||22);var ut,st,ht,dt,j,pt,gt,G=this,St=0,qt=0,Ft=n.passive||!h&&n.passive!==!1,Ht=hs(a,An),jt=hs(a,Qe),se=Ht(),z=jt(),le=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ri[0]==="pointerdown",Qt=pa(a),$t=a.ownerDocument||Bs,bt=[0,0,0],ge=[0,0,0],kt=0,Yt=function(){return kt=da()},R=function(At,ct){return(G.event=At)&&u&&Lv(At.target,u)||ct&&le&&At.pointerType!=="touch"||I&&I(At,ct)},w=function(){G._vx.reset(),G._vy.reset(),st.pause(),d&&d(G)},Z=function(){var At=G.deltaX=wm(bt),ct=G.deltaY=wm(ge),ot=Math.abs(At)>=i,Pt=Math.abs(ct)>=i;N&&(ot||Pt)&&N(G,At,ct,bt,ge),ot&&(S&&G.deltaX>0&&S(G),E&&G.deltaX<0&&E(G),P&&P(G),D&&G.deltaX<0!=St<0&&D(G),St=G.deltaX,bt[0]=bt[1]=bt[2]=0),Pt&&(M&&G.deltaY>0&&M(G),x&&G.deltaY<0&&x(G),A&&A(G),H&&G.deltaY<0!=qt<0&&H(G),qt=G.deltaY,ge[0]=ge[1]=ge[2]=0),(dt||ht)&&(V&&V(G),ht&&(p&&ht===1&&p(G),y&&y(G),ht=0),dt=!1),pt&&!(pt=!1)&&Q&&Q(G),j&&(W(G),j=!1),ut=0},mt=function(At,ct,ot){bt[ot]+=At,ge[ot]+=ct,G._vx.update(At),G._vy.update(ct),c?ut||(ut=requestAnimationFrame(Z)):Z()},lt=function(At,ct){O&&!gt&&(G.axis=gt=Math.abs(At)>Math.abs(ct)?"x":"y",pt=!0),gt!=="y"&&(bt[2]+=At,G._vx.update(At,!0)),gt!=="x"&&(ge[2]+=ct,G._vy.update(ct,!0)),c?ut||(ut=requestAnimationFrame(Z)):Z()},wt=function(At){if(!R(At,1)){At=fa(At,h);var ct=At.clientX,ot=At.clientY,Pt=ct-G.x,at=ot-G.y,Ut=G.isDragging;G.x=ct,G.y=ot,(Ut||(Pt||at)&&(Math.abs(G.startX-ct)>=r||Math.abs(G.startY-ot)>=r))&&(ht||(ht=Ut?2:1),Ut||(G.isDragging=!0),lt(Pt,at))}},Ct=G.onPress=function(_t){R(_t,1)||_t&&_t.button||(G.axis=gt=null,st.pause(),G.isPressed=!0,_t=fa(_t),St=qt=0,G.startX=G.x=_t.clientX,G.startY=G.y=_t.clientY,G._vx.reset(),G._vy.reset(),zn(X?a:$t,Ri[1],wt,Ft,!0),G.deltaX=G.deltaY=0,b&&b(G))},$=G.onRelease=function(_t){if(!R(_t,1)){Bn(X?a:$t,Ri[1],wt,!0);var At=!isNaN(G.y-G.startY),ct=G.isDragging,ot=ct&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Pt=fa(_t);!ot&&At&&(G._vx.reset(),G._vy.reset(),h&&Rt&&_n.delayedCall(.08,function(){if(da()-kt>300&&!_t.defaultPrevented){if(_t.target.click)_t.target.click();else if($t.createEvent){var at=$t.createEvent("MouseEvents");at.initMouseEvent("click",!0,!0,Kn,1,Pt.screenX,Pt.screenY,Pt.clientX,Pt.clientY,!1,!1,!1,!1,0,null),_t.target.dispatchEvent(at)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,d&&ct&&!X&&st.restart(!0),ht&&Z(),g&&ct&&g(G),v&&v(G,ot)}},rt=function(At){return At.touches&&At.touches.length>1&&(G.isGesturing=!0)&&B(At,G.isDragging)},Mt=function(){return(G.isGesturing=!1)||C(G)},U=function(At){if(!R(At)){var ct=Ht(),ot=jt();mt((ct-se)*nt,(ot-z)*nt,1),se=ct,z=ot,d&&st.restart(!0)}},it=function(At){if(!R(At)){At=fa(At,h),W&&(j=!0);var ct=(At.deltaMode===1?l:At.deltaMode===2?Kn.innerHeight:1)*m;mt(At.deltaX*ct,At.deltaY*ct,0),d&&!X&&st.restart(!0)}},et=function(At){if(!R(At)){var ct=At.clientX,ot=At.clientY,Pt=ct-G.x,at=ot-G.y;G.x=ct,G.y=ot,dt=!0,d&&st.restart(!0),(Pt||at)&&lt(Pt,at)}},Tt=function(At){G.event=At,L(G)},yt=function(At){G.event=At,k(G)},Et=function(At){return R(At)||fa(At,h)&&q(G)};st=G._dc=_n.delayedCall(f||.25,w).pause(),G.deltaX=G.deltaY=0,G._vx=$l(0,50,!0),G._vy=$l(0,50,!0),G.scrollX=Ht,G.scrollY=jt,G.isDragging=G.isGesturing=G.isPressed=!1,Am(this),G.enable=function(_t){return G.isEnabled||(zn(Qt?$t:a,"scroll",df),o.indexOf("scroll")>=0&&zn(Qt?$t:a,"scroll",U,Ft,vt),o.indexOf("wheel")>=0&&zn(a,"wheel",it,Ft,vt),(o.indexOf("touch")>=0&&Tm||o.indexOf("pointer")>=0)&&(zn(a,Ri[0],Ct,Ft,vt),zn($t,Ri[2],$),zn($t,Ri[3],$),Rt&&zn(a,"click",Yt,!0,!0),q&&zn(a,"click",Et),B&&zn($t,"gesturestart",rt),C&&zn($t,"gestureend",Mt),L&&zn(a,Sr+"enter",Tt),k&&zn(a,Sr+"leave",yt),V&&zn(a,Sr+"move",et)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=dt=ht=!1,G._vx.reset(),G._vy.reset(),se=Ht(),z=jt(),_t&&_t.type&&Ct(_t),xt&&xt(G)),G},G.disable=function(){G.isEnabled&&(so.filter(function(_t){return _t!==G&&pa(_t.target)}).length||Bn(Qt?$t:a,"scroll",df),G.isPressed&&(G._vx.reset(),G._vy.reset(),Bn(X?a:$t,Ri[1],wt,!0)),Bn(Qt?$t:a,"scroll",U,vt),Bn(a,"wheel",it,vt),Bn(a,Ri[0],Ct,vt),Bn($t,Ri[2],$),Bn($t,Ri[3],$),Bn(a,"click",Yt,!0),Bn(a,"click",Et),Bn($t,"gesturestart",rt),Bn($t,"gestureend",Mt),Bn(a,Sr+"enter",Tt),Bn(a,Sr+"leave",yt),Bn(a,Sr+"move",et),G.isEnabled=G.isPressed=G.isDragging=!1,ft&&ft(G))},G.kill=G.revert=function(){G.disable();var _t=so.indexOf(G);_t>=0&&so.splice(_t,1),cs===G&&(cs=0)},so.push(G),X&&pa(a)&&(cs=G),G.enable(_)},Rv(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();qe.version="3.15.1";qe.create=function(s){return new qe(s)};qe.register=Im;qe.getAll=function(){return so.slice()};qe.getById=function(s){return so.filter(function(t){return t.vars.id===s})[0]};Cm()&&_n.registerPlugin(qe);var Bt,ho,he,we,ai,Me,Af,fc,Aa,Sa,ga,Kl,Cn,mc,yf,Vn,Lm,Dm,uo,Jm,pf,$m,Gn,Sf,Km,Qm,ks,Mf,Cf,fo,Rf,Gs,bf,mf,Ql=1,Rn=Date.now,gf=Rn(),Mi=0,_a=0,Nm=function(t,e,n){var i=oi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Um=function(t,e){return e&&(!oi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Dv=function s(){return _a&&requestAnimationFrame(s)},Om=function(){return mc=1},Fm=function(){return mc=0},Xi=function(t){return t},xa=function(t){return Math.round(t*1e5)/1e5||0},jm=function(){return typeof window<"u"},tg=function(){return Bt||jm()&&(Bt=window.gsap)&&Bt.registerPlugin&&Bt},Ar=function(t){return!!~Af.indexOf(t)},eg=function(t){return(t==="Height"?Rf:he["inner"+t])||ai["client"+t]||Me["client"+t]},ng=function(t){return us(t,"getBoundingClientRect")||(Ar(t)?function(){return uc.width=he.innerWidth,uc.height=Rf,uc}:function(){return fs(t)})},Nv=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=us(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?eg(r):t["client"+r])||0}},Uv=function(t,e){return!e||~Pi.indexOf(t)?ng(t):function(){return uc}},qi=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=us(t,n))?o()-ng(t)()[r]:Ar(t)?(ai[n]||Me[n])-eg(i):t[n]-t["offset"+i])},jl=function(t,e){for(var n=0;n<uo.length;n+=3)(!e||~e.indexOf(uo[n+1]))&&t(uo[n],uo[n+1],uo[n+2])},oi=function(t){return typeof t=="string"},Pn=function(t){return typeof t=="function"},va=function(t){return typeof t=="number"},Mr=function(t){return typeof t=="object"},ma=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ao=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},lo=Math.abs,ig="left",sg="top",Pf="right",If="bottom",wr="width",Tr="height",Ma="Right",ba="Left",wa="Top",Ta="Bottom",je="padding",yi="margin",mo="Width",Lf="Height",on="px",Si=function(t){return he.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Ov=function(t){var e=Si(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Bm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},fs=function(t,e){var n=e&&Si(t)[yf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Bt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},dc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},rg=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},Fv=function(t){return function(e){return Bt.utils.snap(rg(t),e)}},Df=function(t){var e=Bt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},Bv=function(t){return function(e,n){return Df(rg(t))(e,n.direction)}},tc=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},un=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},hn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ec=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},zm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},nc={toggleActions:"play",anticipatePin:0},pc={top:0,left:0,center:.5,bottom:1,right:1},ac=function(t,e){if(oi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in pc?pc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ic=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,m=we.createElement("div"),_=Ar(n)||us(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?Me:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,b=y?c:h,v="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(v+=(i===Qe?Pf:If)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=v,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],lc(m,0,i,y),m},lc=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+mo]=1,r["border"+a+mo]=0,r[n.p]=e+"px",Bt.set(t,r)},ce=[],wf={},Ca,km=function(){return Rn()-Mi>34&&(Ca||(Ca=requestAnimationFrame(ds)))},co=function(){(!Gn||!Gn.isPressed||Gn.startX>Me.clientWidth)&&(oe.cache++,Gn?Ca||(Ca=requestAnimationFrame(ds)):ds(),Mi||Rr("scrollStart"),Mi=Rn())},_f=function(){Qm=he.innerWidth,Km=he.innerHeight},ya=function(t){oe.cache++,(t===!0||!Cn&&!$m&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!Sf||Qm!==he.innerWidth||Math.abs(he.innerHeight-Km)>he.innerHeight*.25))&&fc.restart(!0)},Cr={},zv=[],og=function s(){return hn(Zt,"scrollEnd",s)||br(!0)},Rr=function(t){return Cr[t]&&Cr[t].map(function(e){return e()})||zv},ri=[],ag=function(t){for(var e=0;e<ri.length;e+=5)(!t||ri[e+4]&&ri[e+4].query===t)&&(ri[e].style.cssText=ri[e+1],ri[e].getBBox&&ri[e].setAttribute("transform",ri[e+2]||""),ri[e+3].uncache=1)},lg=function(){oe.cache++,oe.forEach(function(t){return Pn(t)&&(t.rec=t())})},Nf=function(t,e){var n;for(Vn=0;Vn<ce.length;Vn++)n=ce[Vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Gs=!0,e&&ag(e),e||Rr("revert")},cg=function(t,e){oe.cache++,(e||!Hn)&&oe.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),oi(t)&&(Cf=t,he.history.scrollRestoration!==t&&(he.history.scrollRestoration=t))},Hn,Er=0,Gm,kv=function(){if(Gm!==Er){var t=Gm=Er;requestAnimationFrame(function(){return t===Er&&br(!0)})}},hg=function(){Me.appendChild(fo),Rf=!Gn&&fo.offsetHeight||he.innerHeight,Me.removeChild(fo)},Vm=function(t){return Aa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},br=function(t,e){if(ai=we.documentElement,Me=we.body,Af=[he,we,ai,Me],Mi&&!t&&!Gs){un(Zt,"scrollEnd",og);return}hg(),Hn=Zt.isRefreshing=!0,Gs||lg();var n=Rr("refreshInit");Jm&&Zt.sort(),e||Nf(),oe.forEach(function(i){Pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ce.slice(0).forEach(function(i){return i.refresh()}),Gs=!1,ce.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),bf=1,Vm(!0),ce.forEach(function(i){var r=qi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Vm(!1),bf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),oe.forEach(function(i){Pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),cg(Cf,1),fc.pause(),Er++,Hn=2,ds(2),ce.forEach(function(i){return Pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Hn=Zt.isRefreshing=!1,Rr("refresh")},Tf=0,cc=1,Ea,ds=function(t){if(t===2||!Hn&&!Gs){Zt.isUpdating=!0,Ea&&Ea.update(0);var e=ce.length,n=Rn(),i=n-gf>=50,r=e&&ce[0].scroll();if(cc=Tf>r?-1:1,Hn||(Tf=r),i&&(Mi&&!mc&&n-Mi>200&&(Mi=0,Rr("scrollEnd")),ga=gf,gf=n),cc<0){for(Vn=e;Vn-- >0;)ce[Vn]&&ce[Vn].update(0,i);cc=1}else for(Vn=0;Vn<e;Vn++)ce[Vn]&&ce[Vn].update(0,i);Zt.isUpdating=!1}Ca=0},Ef=[ig,sg,If,Pf,yi+Ta,yi+Ma,yi+wa,yi+ba,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],hc=Ef.concat([wr,Tr,"boxSizing","max"+mo,"max"+Lf,"position",yi,je,je+wa,je+Ma,je+Ta,je+ba]),Gv=function(t,e,n){po(n);var i=t._gsap;if(i.spacerIsNative)po(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},xf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Ef.length,o=e.style,a=t.style,l;r--;)l=Ef[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[If]=a[Pf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wr]=dc(t,An)+on,o[Tr]=dc(t,Qe)+on,o[je]=a[yi]=a[sg]=a[ig]="0",po(i),a[wr]=a["max"+mo]=n[wr],a[Tr]=a["max"+Lf]=n[Tr],a[je]=n[je],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Vv=/([A-Z])/g,po=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Bt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(Vv,"-$1").toLowerCase())}},sc=function(t){for(var e=hc.length,n=t.style,i=[],r=0;r<e;r++)i.push(hc[r],n[hc[r]]);return i.t=t,i},Hv=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},uc={left:0,top:0},Hm=function(t,e,n,i,r,o,a,l,c,h,d,f,u,m){Pn(t)&&(t=t(l)),oi(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?ac("0"+t.substr(3),n):0));var _=u?u.time():0,p,g,y;if(u&&u.seek(0),isNaN(t)||(t=+t),va(t))u&&(t=Bt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&lc(a,n,i,!0);else{Pn(e)&&(e=e(l));var b=(t||"0").split(" "),v,S,E,x;y=kn(e,l)||Me,v=fs(y)||{},(!v||!v.left&&!v.top)&&Si(y).display==="none"&&(x=y.style.display,y.style.display="block",v=fs(y),x?y.style.display=x:y.style.removeProperty("display")),S=ac(b[0],v[i.d]),E=ac(b[1]||"0",n),t=v[i.p]-c[i.p]-h+S+r-E,a&&lc(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var M=t+n,P=o._isStart;p="scroll"+i.d2,lc(o,M,i,P&&M>20||!P&&(d?Math.max(Me[p],ai[p]):o.parentNode[p])<=M+1),d&&(c=fs(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+on))}return u&&y&&(p=fs(y),u.seek(f),g=fs(y),u._caScrollDist=p[i.p]-g[i.p],t=t/u._caScrollDist*f),u&&u.seek(_),u?t:Math.round(t)},Wv=/(webkit|moz|length|cssText|inset)/i,Wm=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===Me){t._stOrig=r.cssText,a=Si(t);for(o in a)!+o&&!Wv.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Bt.core.getCache(t).uncache=1,e.appendChild(t)}},ug=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},rc=function(t,e,n){var i={};i[e.p]="+="+n,Bt.set(t,i)},Xm=function(t,e){var n=hs(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,m={};c=c||n();var _=ug(n,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){oe.cache++,o.tween&&ds()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=Bt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},un(t,"wheel",n.wheelHandler),Zt.isTouch&&un(t,"touchmove",n.wheelHandler),r},Zt=(function(){function s(e,n){ho||s.register(Bt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Mf(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_a){this.update=this.refresh=this.kill=Xi;return}n=Bm(oi(n)||va(n)||n.nodeType?{trigger:n}:n,nc);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,y=r.onSnapComplete,b=r.once,v=r.snap,S=r.pinReparent,E=r.pinSpacer,x=r.containerAnimation,M=r.fastScrollEnd,P=r.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:Qe,N=!d&&d!==0,D=kn(n.scroller||he),H=Bt.core.getCache(D),L=Ar(D),k=("pinType"in n?n.pinType:us(D,"pinType")||L&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],I=N&&n.toggleActions.split(" "),X="markers"in n?n.markers:nc.markers,B=L?0:parseFloat(Si(D)["border"+A.p2+mo])||0,C=this,W=n.onRefreshInit&&function(){return n.onRefreshInit(C)},xt=Nv(D,L,A),ft=Uv(D,L),q=0,nt=0,vt=0,Rt=hs(D,A),O,Q,ut,st,ht,dt,j,pt,gt,G,St,qt,Ft,Ht,jt,se,z,le,Qt,$t,bt,ge,kt,Yt,R,w,Z,mt,lt,wt,Ct,$,rt,Mt,U,it,et,Tt,yt;if(C._startClamp=C._endClamp=!1,C._dir=A,p*=45,C.scroller=D,C.scroll=x?x.time.bind(x):Rt,st=Rt(),Gs&&Rt.rec==null&&(Rt.rec=st),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Jm=1,n.refreshPriority===-9999&&(Ea=C)),H.tweenScroll=H.tweenScroll||{top:Xm(D,Qe),left:Xm(D,An)},C.tweenTo=O=H.tweenScroll[A.p],C.scrubDuration=function(ot){rt=va(ot)&&ot,rt?$?$.duration(ot):$=Bt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:rt,paused:!0,onComplete:function(){return g&&g(C)}}):($&&$.progress(1).kill(),$=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),wt=0,l||(l=i.vars.id)),v&&((!Mr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Me.style&&Bt.set(L?[Me,ai]:D,{scrollBehavior:"auto"}),oe.forEach(function(ot){return Pn(ot)&&ot.target===(L?we.scrollingElement||ai:D)&&(ot.smooth=!1)}),ut=Pn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Fv(i):v.snapTo==="labelsDirectional"?Bv(i):v.directional!==!1?function(ot,Pt){return Df(v.snapTo)(ot,Rn()-nt<500?0:Pt.direction)}:Bt.utils.snap(v.snapTo),Mt=v.duration||{min:.1,max:2},Mt=Mr(Mt)?Sa(Mt.min,Mt.max):Sa(Mt,Mt),U=Bt.delayedCall(v.delay||rt/2||.1,function(){var ot=Rt(),Pt=Rn()-nt<500,at=O.tween;if((Pt||Math.abs(C.getVelocity())<10)&&!at&&!mc&&q!==ot){var Ut=(ot-dt)/Ht,fe=i&&!N?i.totalProgress():Ut,ne=Pt?0:(fe-Ct)/(Rn()-ga)*1e3||0,Le=Bt.utils.clamp(-Ut,1-Ut,lo(ne/2)*ne/.185),Je=Ut+(v.inertia===!1?0:Le),De,Ee,Se=v,en=Se.onStart,Ae=Se.onInterrupt,Sn=Se.onComplete;if(De=ut(Je,C),va(De)||(De=Je),Ee=Math.max(0,Math.round(dt+De*Ht)),ot<=j&&ot>=dt&&Ee!==ot){if(at&&!at._initted&&at.data<=lo(Ee-ot))return;v.inertia===!1&&(Le=De-Ut),O(Ee,{duration:Mt(lo(Math.max(lo(Je-fe),lo(De-fe))*.185/ne/.05||0)),ease:v.ease||"power3",data:lo(Ee-ot),onInterrupt:function(){return U.restart(!0)&&Ae&&ao(C,Ae)},onComplete:function(){C.update(),q=Rt(),i&&!N&&($?$.resetTo("totalProgress",De,i._tTime/i._tDur):i.progress(De)),wt=Ct=i&&!N?i.totalProgress():C.progress,y&&y(C),Sn&&ao(C,Sn)}},ot,Le*Ht,Ee-ot-Le*Ht),en&&ao(C,en,O.tween)}}else C.isActive&&q!==ot&&U.restart(!0)}).pause()),l&&(wf[l]=C),f=C.trigger=kn(f||u!==!0&&u),yt=f&&f._gsap&&f._gsap.stRevert,yt&&(yt=yt(C)),u=u===!0?f:kn(u),oi(a)&&(a={targets:f,className:a}),u&&(m===!1||m===yi||(m=!m&&u.parentNode&&u.parentNode.style&&Si(u.parentNode).display==="flex"?!1:je),C.pin=u,Q=Bt.core.getCache(u),Q.spacer?jt=Q.pinState:(E&&(E=kn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Q.spacerIsNative=!!E,E&&(Q.spacerState=sc(E))),Q.spacer=le=E||we.createElement("div"),le.classList.add("pin-spacer"),l&&le.classList.add("pin-spacer-"+l),Q.pinState=jt=sc(u)),n.force3D!==!1&&Bt.set(u,{force3D:!0}),C.spacer=le=Q.spacer,lt=Si(u),Yt=lt[m+A.os2],$t=Bt.getProperty(u),bt=Bt.quickSetter(u,A.a,on),xf(u,le,lt),z=sc(u)),X){qt=Mr(X)?Bm(X,zm):zm,G=ic("scroller-start",l,D,A,qt,0),St=ic("scroller-end",l,D,A,qt,0,G),Qt=G["offset"+A.op.d2];var Et=kn(us(D,"content")||D);pt=this.markerStart=ic("start",l,Et,A,qt,Qt,0,x),gt=this.markerEnd=ic("end",l,Et,A,qt,Qt,0,x),x&&(Tt=Bt.quickSetter([pt,gt],A.a,on)),!k&&!(Pi.length&&us(D,"fixedMarkers")===!0)&&(Ov(L?Me:D),Bt.set([G,St],{force3D:!0}),w=Bt.quickSetter(G,A.a,on),mt=Bt.quickSetter(St,A.a,on))}if(x){var _t=x.vars.onUpdate,At=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){C.update(0,0,1),_t&&_t.apply(x,At||[])})}if(C.previous=function(){return ce[ce.indexOf(C)-1]},C.next=function(){return ce[ce.indexOf(C)+1]},C.revert=function(ot,Pt){if(!Pt)return C.kill(!0);var at=ot!==!1||!C.enabled,Ut=Cn;at!==C.isReverted&&(at&&(it=Math.max(Rt(),C.scroll.rec||0),vt=C.progress,et=i&&i.progress()),pt&&[pt,gt,G,St].forEach(function(fe){return fe.style.display=at?"none":"block"}),at&&(Cn=C,C.update(at)),u&&(!S||!C.isActive)&&(at?Gv(u,le,jt):xf(u,le,Si(u),R)),at||C.update(at),Cn=Ut,C.isReverted=at)},C.refresh=function(ot,Pt,at,Ut){if(!((Cn||!C.enabled)&&!Pt)){if(u&&ot&&Mi){un(s,"scrollEnd",og);return}!Hn&&W&&W(C),Cn=C,O.tween&&!at&&(O.tween.kill(),O.tween=0),$&&$.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Y){return Y.vars.immediateRender&&Y.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var fe=xt(),ne=ft(),Le=x?x.duration():qi(D,A),Je=Ht<=.01||!Ht,De=0,Ee=Ut||0,Se=Mr(at)?at.end:n.end,en=n.endTrigger||f,Ae=Mr(at)?at.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),Sn=C.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,C),jn=f&&Math.max(0,ce.indexOf(C))||0,Ve=jn,$e,nn,ti,Yr,sn,He,gi,$o,Tl,As,T,F,tt;for(X&&Mr(at)&&(F=Bt.getProperty(G,A.p),tt=Bt.getProperty(St,A.p));Ve-- >0;)He=ce[Ve],He.end||He.refresh(0,1)||(Cn=C),gi=He.pin,gi&&(gi===f||gi===u||gi===Sn)&&!He.isReverted&&(As||(As=[]),As.unshift(He),He.revert(!0,!0)),He!==ce[Ve]&&(jn--,Ve--);for(Pn(Ae)&&(Ae=Ae(C)),Ae=Nm(Ae,"start",C),dt=Hm(Ae,f,fe,A,Rt(),pt,G,C,ne,B,k,Le,x,C._startClamp&&"_startClamp")||(u?-.001:0),Pn(Se)&&(Se=Se(C)),oi(Se)&&!Se.indexOf("+=")&&(~Se.indexOf(" ")?Se=(oi(Ae)?Ae.split(" ")[0]:"")+Se:(De=ac(Se.substr(2),fe),Se=oi(Ae)?Ae:(x?Bt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,dt):dt)+De,en=f)),Se=Nm(Se,"end",C),j=Math.max(dt,Hm(Se||(en?"100% 0":Le),en,fe,A,Rt()+De,gt,St,C,ne,B,k,Le,x,C._endClamp&&"_endClamp"))||-.001,De=0,Ve=jn;Ve--;)He=ce[Ve]||{},gi=He.pin,gi&&He.start-He._pinPush<=dt&&!x&&He.end>0&&($e=He.end-(C._startClamp?Math.max(0,He.start):He.start),(gi===f&&He.start-He._pinPush<dt||gi===Sn)&&isNaN(Ae)&&(De+=$e*(1-He.progress)),gi===u&&(Ee+=$e));if(dt+=De,j+=De,C._startClamp&&(C._startClamp+=De),C._endClamp&&!Hn&&(C._endClamp=j||-.001,j=Math.min(j,qi(D,A))),Ht=j-dt||(dt-=.01)&&.001,Je&&(vt=Bt.utils.clamp(0,1,Bt.utils.normalize(dt,j,it))),C._pinPush=Ee,pt&&De&&($e={},$e[A.a]="+="+De,Sn&&($e[A.p]="-="+Rt()),Bt.set([pt,gt],$e)),u&&!(bf&&C.end>=qi(D,A)))$e=Si(u),Yr=A===Qe,ti=Rt(),ge=parseFloat($t(A.a))+Ee,!Le&&j>1&&(T=(L?we.scrollingElement||ai:D).style,T={style:T,value:T["overflow"+A.a.toUpperCase()]},L&&Si(Me)["overflow"+A.a.toUpperCase()]!=="scroll"&&(T.style["overflow"+A.a.toUpperCase()]="scroll")),xf(u,le,$e),z=sc(u),nn=fs(u,!0),$o=k&&hs(D,Yr?An:Qe)(),m?(R=[m+A.os2,Ht+Ee+on],R.t=le,Ve=m===je?dc(u,A)+Ht+Ee:0,Ve&&(R.push(A.d,Ve+on),le.style.flexBasis!=="auto"&&(le.style.flexBasis=Ve+on)),po(R),Sn&&ce.forEach(function(Y){Y.pin===Sn&&Y.vars.pinSpacing!==!1&&(Y._subPinOffset=!0)}),k&&Rt(it)):(Ve=dc(u,A),Ve&&le.style.flexBasis!=="auto"&&(le.style.flexBasis=Ve+on)),k&&(sn={top:nn.top+(Yr?ti-dt:$o)+on,left:nn.left+(Yr?$o:ti-dt)+on,boxSizing:"border-box",position:"fixed"},sn[wr]=sn["max"+mo]=Math.ceil(nn.width)+on,sn[Tr]=sn["max"+Lf]=Math.ceil(nn.height)+on,sn[yi]=sn[yi+wa]=sn[yi+Ma]=sn[yi+Ta]=sn[yi+ba]="0",sn[je]=$e[je],sn[je+wa]=$e[je+wa],sn[je+Ma]=$e[je+Ma],sn[je+Ta]=$e[je+Ta],sn[je+ba]=$e[je+ba],se=Hv(jt,sn,S),Hn&&Rt(0)),i?(Tl=i._initted,pf(1),i.render(i.duration(),!0,!0),kt=$t(A.a)-ge+Ht+Ee,Z=Math.abs(Ht-kt)>1,k&&Z&&se.splice(se.length-2,2),i.render(0,!0,!0),Tl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),pf(0)):kt=Ht,T&&(T.value?T.style["overflow"+A.a.toUpperCase()]=T.value:T.style.removeProperty("overflow-"+A.a));else if(f&&Rt()&&!x)for(nn=f.parentNode;nn&&nn!==Me;)nn._pinOffset&&(dt-=nn._pinOffset,j-=nn._pinOffset),nn=nn.parentNode;As&&As.forEach(function(Y){return Y.revert(!1,!0)}),C.start=dt,C.end=j,st=ht=Hn?it:Rt(),!x&&!Hn&&!Gs&&(st<it&&Rt(it),C.scroll.rec=0),C.revert(!1,!0),nt=Rn(),U&&(q=-1,U.restart(!0)),Cn=0,i&&N&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(Je||vt!==C.progress||x||_||i&&!i._initted)&&(i&&!N&&(i._initted||vt||i.vars.immediateRender!==!1)&&i.totalProgress(x&&dt<-.001&&!vt?Bt.utils.normalize(dt,j,0):vt,!0),C.progress=Je||(st-dt)/Ht===vt?0:vt),u&&m&&(le._pinOffset=Math.round(C.progress*kt)),$&&$.invalidate(),isNaN(F)||(F-=Bt.getProperty(G,A.p),tt-=Bt.getProperty(St,A.p),rc(G,A,F),rc(pt,A,F-(Ut||0)),rc(St,A,tt),rc(gt,A,tt-(Ut||0))),Je&&!Hn&&C.update(),h&&!Hn&&!Ft&&(Ft=!0,h(C),Ft=!1)}},C.getVelocity=function(){return(Rt()-ht)/(Rn()-ga)*1e3||0},C.endAnimation=function(){ma(C.callbackAnimation),i&&($?$.progress(1):i.paused()?N||ma(i,C.direction<0,1):ma(i,i.reversed()))},C.labelToScroll=function(ot){return i&&i.labels&&(dt||C.refresh()||dt)+i.labels[ot]/i.duration()*Ht||0},C.getTrailing=function(ot){var Pt=ce.indexOf(C),at=C.direction>0?ce.slice(0,Pt).reverse():ce.slice(Pt+1);return(oi(ot)?at.filter(function(Ut){return Ut.vars.preventOverlaps===ot}):at).filter(function(Ut){return C.direction>0?Ut.end<=dt:Ut.start>=j})},C.update=function(ot,Pt,at){if(!(x&&!at&&!ot)){var Ut=Hn===!0?it:C.scroll(),fe=ot?0:(Ut-dt)/Ht,ne=fe<0?0:fe>1?1:fe||0,Le=C.progress,Je,De,Ee,Se,en,Ae,Sn,jn;if(Pt&&(ht=st,st=x?Rt():Ut,v&&(Ct=wt,wt=i&&!N?i.totalProgress():ne)),p&&u&&!Cn&&!Ql&&Mi&&(!ne&&dt<Ut+(Ut-ht)/(Rn()-ga)*p?ne=1e-4:ne===1&&j>Ut+(Ut-ht)/(Rn()-ga)*p&&(ne=.9999)),ne!==Le&&C.enabled){if(Je=C.isActive=!!ne&&ne<1,De=!!Le&&Le<1,Ae=Je!==De,en=Ae||!!ne!=!!Le,C.direction=ne>Le?1:-1,C.progress=ne,en&&!Cn&&(Ee=ne&&!Le?0:ne===1?1:Le===1?2:3,N&&(Se=!Ae&&I[Ee+1]!=="none"&&I[Ee+1]||I[Ee],jn=i&&(Se==="complete"||Se==="reset"||Se in i))),P&&(Ae||jn)&&(jn||d||!i)&&(Pn(P)?P(C):C.getTrailing(P).forEach(function(ti){return ti.endAnimation()})),N||($&&!Cn&&!Ql?($._dp._time-$._start!==$._time&&$.render($._dp._time-$._start),$.resetTo?$.resetTo("totalProgress",ne,i._tTime/i._tDur):($.vars.totalProgress=ne,$.invalidate().restart())):i&&i.totalProgress(ne,!!(Cn&&(nt||ot)))),u){if(ot&&m&&(le.style[m+A.os2]=Yt),!k)bt(xa(ge+kt*ne));else if(en){if(Sn=!ot&&ne>Le&&j+1>Ut&&Ut+1>=qi(D,A),S)if(!ot&&(Je||Sn)){var Ve=fs(u,!0),$e=Ut-dt;Wm(u,Me,Ve.top+(A===Qe?$e:0)+on,Ve.left+(A===Qe?0:$e)+on)}else Wm(u,le);po(Je||Sn?se:z),Z&&ne<1&&Je||bt(ge+(ne===1&&!Sn?kt:0))}}v&&!O.tween&&!Cn&&!Ql&&U.restart(!0),a&&(Ae||b&&ne&&(ne<1||!mf))&&Aa(a.targets).forEach(function(ti){return ti.classList[Je||b?"add":"remove"](a.className)}),o&&!N&&!ot&&o(C),en&&!Cn?(N&&(jn&&(Se==="complete"?i.pause().totalProgress(1):Se==="reset"?i.restart(!0).pause():Se==="restart"?i.restart(!0):i[Se]()),o&&o(C)),(Ae||!mf)&&(c&&Ae&&ao(C,c),V[Ee]&&ao(C,V[Ee]),b&&(ne===1?C.kill(!1,1):V[Ee]=0),Ae||(Ee=ne===1?1:3,V[Ee]&&ao(C,V[Ee]))),M&&!Je&&Math.abs(C.getVelocity())>(va(M)?M:2500)&&(ma(C.callbackAnimation),$?$.progress(1):ma(i,Se==="reverse"?1:!ne,1))):N&&o&&!Cn&&o(C)}if(mt){var nn=x?Ut/x.duration()*(x._caScrollDist||0):Ut;w(nn+(G._isFlipped?1:0)),mt(nn)}Tt&&Tt(-Ut/x.duration()*(x._caScrollDist||0))}},C.enable=function(ot,Pt){C.enabled||(C.enabled=!0,un(D,"resize",ya),L||un(D,"scroll",co),W&&un(s,"refreshInit",W),ot!==!1&&(C.progress=vt=0,st=ht=q=Rt()),Pt!==!1&&C.refresh())},C.getTween=function(ot){return ot&&O?O.tween:$},C.setPositions=function(ot,Pt,at,Ut){if(x){var fe=x.scrollTrigger,ne=x.duration(),Le=fe.end-fe.start;ot=fe.start+Le*ot/ne,Pt=fe.start+Le*Pt/ne}C.refresh(!1,!1,{start:Um(ot,at&&!!C._startClamp),end:Um(Pt,at&&!!C._endClamp)},Ut),C.update()},C.adjustPinSpacing=function(ot){if(R&&ot){var Pt=R.indexOf(A.d)+1;R[Pt]=parseFloat(R[Pt])+ot+on,R[1]=parseFloat(R[1])+ot+on,po(R)}},C.disable=function(ot,Pt){if(ot!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Pt||$&&$.pause(),it=0,Q&&(Q.uncache=1),W&&hn(s,"refreshInit",W),U&&(U.pause(),O.tween&&O.tween.kill()&&(O.tween=0)),!L)){for(var at=ce.length;at--;)if(ce[at].scroller===D&&ce[at]!==C)return;hn(D,"resize",ya),L||hn(D,"scroll",co)}},C.kill=function(ot,Pt){C.disable(ot,Pt),$&&!Pt&&$.kill(),l&&delete wf[l];var at=ce.indexOf(C);at>=0&&ce.splice(at,1),at===Vn&&cc>0&&Vn--,at=0,ce.forEach(function(Ut){return Ut.scroller===C.scroller&&(at=1)}),at||Hn||Gs||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ot&&i.revert({kill:!1}),Pt||i.kill()),pt&&[pt,gt,G,St].forEach(function(Ut){return Ut.parentNode&&Ut.parentNode.removeChild(Ut)}),Ea===C&&(Ea=0),u&&(Q&&(Q.uncache=1),at=0,ce.forEach(function(Ut){return Ut.pin===u&&at++}),at||(Q.spacer=0)),n.onKill&&n.onKill(C)},ce.push(C),C.enable(!1,!1),yt&&yt(C),i&&i.add&&!Ht){var ct=C.update;C.update=function(){C.update=ct,oe.cache++,dt||j||C.refresh()},Bt.delayedCall(.01,C.update),Ht=.01,dt=j=0}else C.refresh();u&&kv()},s.register=function(n){return ho||(Bt=n||tg(),jm()&&window.document&&s.enable(),ho=_a),ho},s.defaults=function(n){if(n)for(var i in n)nc[i]=n[i];return nc},s.disable=function(n,i){_a=0,ce.forEach(function(o){return o[i?"kill":"disable"](n)}),hn(he,"wheel",co),hn(we,"scroll",co),clearInterval(Kl),hn(we,"touchcancel",Xi),hn(Me,"touchstart",Xi),tc(hn,we,"pointerdown,touchstart,mousedown",Om),tc(hn,we,"pointerup,touchend,mouseup",Fm),fc.kill(),jl(hn);for(var r=0;r<oe.length;r+=3)ec(hn,oe[r],oe[r+1]),ec(hn,oe[r],oe[r+2])},s.enable=function(){if(he=window,we=document,ai=we.documentElement,Me=we.body,Bt){if(Aa=Bt.utils.toArray,Sa=Bt.utils.clamp,Mf=Bt.core.context||Xi,pf=Bt.core.suppressOverwrites||Xi,Cf=he.history.scrollRestoration||"auto",Tf=he.pageYOffset||0,Bt.core.globals("ScrollTrigger",s),Me){_a=1,fo=document.createElement("div"),fo.style.height="100vh",fo.style.position="absolute",hg(),Dv(),qe.register(Bt),s.isTouch=qe.isTouch,ks=qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sf=qe.isTouch===1,un(he,"wheel",co),Af=[he,we,ai,Me],Bt.matchMedia?(s.matchMedia=function(h){var d=Bt.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Bt.addEventListener("matchMediaInit",function(){lg(),Nf()}),Bt.addEventListener("matchMediaRevert",function(){return ag()}),Bt.addEventListener("matchMedia",function(){br(0,1),Rr("matchMedia")}),Bt.matchMedia().add("(orientation: portrait)",function(){return _f(),_f})):console.warn("Requires GSAP 3.11.0 or later"),_f(),un(we,"scroll",co);var n=Me.hasAttribute("style"),i=Me.style,r=i.borderTopStyle,o=Bt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=fs(Me),Qe.m=Math.round(a.top+Qe.sc())||0,An.m=Math.round(a.left+An.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Me.setAttribute("style",""),Me.removeAttribute("style")),Kl=setInterval(km,250),Bt.delayedCall(.5,function(){return Ql=0}),un(we,"touchcancel",Xi),un(Me,"touchstart",Xi),tc(un,we,"pointerdown,touchstart,mousedown",Om),tc(un,we,"pointerup,touchend,mouseup",Fm),yf=Bt.utils.checkPrefix("transform"),hc.push(yf),ho=Rn(),fc=Bt.delayedCall(.2,br).pause(),uo=[we,"visibilitychange",function(){var h=he.innerWidth,d=he.innerHeight;we.hidden?(Lm=h,Dm=d):(Lm!==h||Dm!==d)&&ya()},we,"DOMContentLoaded",br,he,"load",br,he,"resize",ya],jl(un),ce.forEach(function(h){return h.enable(0,1)}),l=0;l<oe.length;l+=3)ec(hn,oe[l],oe[l+1]),ec(hn,oe[l],oe[l+2])}else if(we){var c=function h(){s.enable(),we.removeEventListener("DOMContentLoaded",h)};we.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(mf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Kl)||(Kl=i)&&setInterval(km,i),"ignoreMobileResize"in n&&(Sf=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(jl(hn)||jl(un,n.autoRefreshEvents||"none"),$m=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=kn(n),o=oe.indexOf(r),a=Ar(r);~o&&oe.splice(o,a?6:2),i&&(a?Pi.unshift(he,i,Me,i,ai,i):Pi.unshift(r,i))},s.clearMatchMedia=function(n){ce.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(oi(n)?kn(n):n).getBoundingClientRect(),a=o[r?wr:Tr]*i||0;return r?o.right-a>0&&o.left+a<he.innerWidth:o.bottom-a>0&&o.top+a<he.innerHeight},s.positionInViewport=function(n,i,r){oi(n)&&(n=kn(n));var o=n.getBoundingClientRect(),a=o[r?wr:Tr],l=i==null?a/2:i in pc?pc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/he.innerWidth:(o.top+l)/he.innerHeight},s.killAll=function(n){if(ce.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Cr.killAll||[];Cr={},i.forEach(function(r){return r()})}},s})();Zt.version="3.15.1";Zt.saveStyles=function(s){return s?Aa(s).forEach(function(t){if(t&&t.style){var e=ri.indexOf(t);e>=0&&ri.splice(e,5),ri.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Bt.core.getCache(t),Mf())}}):ri};Zt.revert=function(s,t){return Nf(!s,t)};Zt.create=function(s,t){return new Zt(s,t)};Zt.refresh=function(s){return s?ya(!0):(ho||Zt.register())&&br(!0)};Zt.update=function(s){return++oe.cache&&ds(s===!0?2:0)};Zt.clearScrollMemory=cg;Zt.maxScroll=function(s,t){return qi(s,t?An:Qe)};Zt.getScrollFunc=function(s,t){return hs(kn(s),t?An:Qe)};Zt.getById=function(s){return wf[s]};Zt.getAll=function(){return ce.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Zt.isScrolling=function(){return!!Mi};Zt.snapDirectional=Df;Zt.addEventListener=function(s,t){var e=Cr[s]||(Cr[s]=[]);~e.indexOf(t)||e.push(t)};Zt.removeEventListener=function(s,t){var e=Cr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Zt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=Bt.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(m){d.length||u.restart(!0),d.push(m.trigger),f.push(m),r<=d.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Pn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Pn(r)&&(r=r(),un(Zt,"refresh",function(){return r=t.batchMax()})),Aa(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Zt.create(c))}),e};var qm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},vf=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(qe.isTouch?" pinch-zoom":""):"none",t===ai&&s(Me,e)},oc={auto:1,scroll:1},Xv=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Bt.core.getCache(r),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Me&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(oc[(l=Si(r)).overflowY]||oc[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Ar(r)&&(oc[(l=Si(r)).overflowY]||oc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},fg=function(t,e,n,i){return qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Xv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(we,qe.eventTypes[0],Zm,!1,!0)},onDisable:function(){return hn(we,qe.eventTypes[0],Zm,!0)}})},qv=/(input|label|select|textarea)/i,Ym,Zm=function(t){var e=qv.test(t.target.tagName);(e||Ym)&&(t._gsapAllow=!0,Ym=e)},Yv=function(t){Mr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=kn(t.target)||ai,h=Bt.core.globals().ScrollSmoother,d=h&&h.get(),f=ks&&(t.content&&kn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=hs(c,Qe),m=hs(c,An),_=1,p=(qe.isTouch&&he.visualViewport?he.visualViewport.scale*he.visualViewport.width:he.outerWidth)/he.innerWidth,g=0,y=Pn(i)?function(){return i(a)}:function(){return i||2.8},b,v,S=fg(c,t.type,!0,r),E=function(){return v=!1},x=Xi,M=Xi,P=function(){l=qi(c,Qe),M=Sa(ks?1:0,l),n&&(x=Sa(0,qi(c,An))),b=Er},A=function(){f._gsap.y=xa(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},N=function(){if(v){requestAnimationFrame(E);var X=xa(a.deltaY/2),B=M(u.v-X);if(f&&B!==u.v+u.offset){u.offset=B-u.v;var C=xa((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",u.cacheID=oe.cache,ds()}return!0}u.offset&&A(),v=!0},D,H,L,k,V=function(){P(),D.isActive()&&D.vars.scrollY>l&&(u()>l?D.progress(1)&&u(l):D.resetTo("scrollY",l))};return f&&Bt.set(f,{y:"+=0"}),t.ignoreCheck=function(I){return ks&&I.type==="touchmove"&&N(I)||_>1.05&&I.type!=="touchstart"||a.isGesturing||I.touches&&I.touches.length>1},t.onPress=function(){v=!1;var I=_;_=xa((he.visualViewport&&he.visualViewport.scale||1)/p),D.pause(),I!==_&&vf(c,_>1.01?!0:n?!1:"x"),H=m(),L=u(),P(),b=Er},t.onRelease=t.onGestureStart=function(I,X){if(u.offset&&A(),!X)k.restart(!0);else{oe.cache++;var B=y(),C,W;n&&(C=m(),W=C+B*.05*-I.velocityX/.227,B*=qm(m,C,W,qi(c,An)),D.vars.scrollX=x(W)),C=u(),W=C+B*.05*-I.velocityY/.227,B*=qm(u,C,W,qi(c,Qe)),D.vars.scrollY=M(W),D.invalidate().duration(B).play(.01),(ks&&D.vars.scrollY>=l||C>=l-1)&&Bt.to({},{onUpdate:V,duration:B})}o&&o(I)},t.onWheel=function(){D._ts&&D.pause(),Rn()-g>1e3&&(b=0,g=Rn())},t.onChange=function(I,X,B,C,W){if(Er!==b&&P(),X&&n&&m(x(C[2]===X?H+(I.startX-I.x):m()+X-C[1])),B){u.offset&&A();var xt=W[2]===B,ft=xt?L+I.startY-I.y:u()+B-W[1],q=M(ft);xt&&ft!==q&&(L+=q-ft),u(q)}(B||X)&&ds()},t.onEnable=function(){vf(c,n?!1:"x"),Zt.addEventListener("refresh",V),un(he,"resize",V),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),S.enable()},t.onDisable=function(){vf(c,!0),hn(he,"resize",V),Zt.removeEventListener("refresh",V),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new qe(t),a.iOS=ks,ks&&!u()&&u(1),ks&&Bt.ticker.add(Xi),k=a._dc,D=Bt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ug(u,u(),function(){return D.pause()})},onUpdate:ds,onComplete:k.vars.onComplete}),a};Zt.sort=function(s){if(Pn(s))return ce.sort(s);var t=he.pageYOffset||0;return Zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+he.innerHeight}),ce.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Zt.observe=function(s){return new qe(s)};Zt.normalizeScroll=function(s){if(typeof s>"u")return Gn;if(s===!0&&Gn)return Gn.enable();if(s===!1){Gn&&Gn.kill(),Gn=s;return}var t=s instanceof qe?s:Yv(s);return Gn&&Gn.target===t.target&&Gn.kill(),Ar(t.target)&&(Gn=t),t};Zt.core={_getVelocityProp:$l,_inputObserver:fg,_scrollers:oe,_proxies:Pi,bridge:{ss:function(){Mi||Rr("scrollStart"),Mi=Rn()},ref:function(){return Cn}}};tg()&&Bt.registerPlugin(Zt);var Ra,Pa,dg=typeof Symbol=="function"?Symbol():"_split",Of,Zv=()=>Of||Vs.register(window.gsap),pg=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Ia=s=>s?typeof s=="string"?Ia(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((t,e)=>(typeof e=="string"?t.push(...Ia(e)):t.push(e),t),[]):[s]:[],mg=s=>Ia(s).filter(t=>t&&t.nodeType===1),gc=[],Uf=function(){},Jv={add:s=>s()},$v=/\s+/g,gg=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),_c={left:0,top:0,width:0,height:0},Kv=(s,t)=>{for(;++t<s.length&&s[t]===_c;);return s[t]||_c},_g=({element:s,html:t,ariaL:e,ariaH:n})=>{s.innerHTML=t,e?s.setAttribute("aria-label",e):s.removeAttribute("aria-label"),n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")},xg=(s,t)=>{if(t){let e=new Set(s.join("").match(t)||gc),n=s.length,i,r,o,a;if(e.size)for(;--n>-1;){r=s[n];for(o of e)if(o.startsWith(r)&&o.length>r.length){for(i=0,a=r;o.startsWith(a+=s[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){s[n]=o,s.splice(n+1,i);break}}}}return s},vg=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),go=(s,t,e)=>t.insertBefore(typeof s=="string"?document.createTextNode(s):s,e),Ff=(s,t,e)=>{let n=t[s+"sClass"]||"",{tag:i="div",aria:r="auto",propIndex:o=!1}=t,a=s==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let d=document.createElement(i),f=e.length+1;return n&&(d.className=n+(l?" "+n+f:"")),o&&d.style.setProperty("--"+s,f+""),r!=="none"&&d.setAttribute("aria-hidden","true"),i!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(n=n.replace("++","")),c.collection=e,c},Qv=(s,t,e,n)=>{let i=Ff("line",e,n),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=r,s.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},yg=(s,t,e,n,i,r,o,a,l,c)=>{var h;let d=Array.from(s.childNodes),f=0,{wordDelimiter:u,reduceWhiteSpace:m=!0,prepareText:_}=t,p=s.getBoundingClientRect(),g=p,y=!m&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",b=r&&c&&window.getComputedStyle(s).direction==="rtl",v=0,S=e.collection,E,x,M,P,A,N,D,H,L,k,V,I,X,B,C,W,xt,ft;for(typeof u=="object"?(M=u.delimiter||u,x=u.replaceWith||""):x=u===""?"":u||" ",E=x!==" ";f<d.length;f++)if(P=d[f],P.nodeType===3){for(C=P.textContent||"",m?C=C.replace($v," "):y&&(C=C.replace(/\n/g,x+`
`)),_&&(C=_(C,s)),P.textContent=C,A=x||M?C.split(M||x):C.match(a)||gc,xt=A[A.length-1],H=E?xt.slice(-1)===" ":!xt,xt||A.pop(),g=p,D=E?A[0].charAt(0)===" ":!A[0],D&&go(" ",s,P),A[0]||A.shift(),xg(A,l),r&&c||(P.textContent=""),L=1;L<=A.length;L++)if(W=A[L-1],!m&&y&&W.charAt(0)===`
`&&((h=P.previousSibling)==null||h.remove(),go(document.createElement("br"),s,P),W=W.slice(1)),!m&&W==="")go(x,s,P);else if(W===" ")s.insertBefore(document.createTextNode(" "),P);else{if(E&&W.charAt(0)===" "&&go(" ",s,P),v&&L===1&&!D&&S.indexOf(v.parentNode)>-1?(N=S[S.length-1],N.appendChild(document.createTextNode(n?"":W))):(N=e(n?"":W),go(N,s,P),v&&L===1&&!D&&N.insertBefore(v,N.firstChild)),n){if(V=pg?xg([...pg.segment(W)].map(q=>q.segment),l):W.match(a)||gc,l){let q=W.match(l);q&&q.some(nt=>V.indexOf(nt)<0)&&(V=W.match(a)||gc)}for(ft=0;ft<V.length;ft++)N.appendChild(V[ft]===" "?document.createTextNode(" "):n(V[ft]))}if(r&&c){if(C=P.textContent=C.substring(W.length+1,C.length),k=N.getBoundingClientRect(),k.top>g.top&&(b?k.left>=g.left:k.left<=g.left)){for(I=s.cloneNode(),X=s.childNodes[0];X&&X!==N;)B=X,X=X.nextSibling,I.appendChild(B);s.parentNode.insertBefore(I,s),i&&vg(I)}g=k}(L<A.length||H)&&go(L>=A.length?" ":E&&W.slice(-1)===" "?" "+x:x,s,P)}s.removeChild(P),v=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(S.indexOf(P.previousSibling)>-1&&S[S.length-1].appendChild(P),v=P):(yg(P,t,e,n,i,r,o,a,l,!0),v=0),i&&vg(P))},Sg=class Mg{constructor(t,e){this.isSplit=!1,Zv(),this.elements=mg(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(r=>{var o;e.overwrite!==!1&&((o=r[dg])==null||o._data.orig.filter(({element:a})=>a===r).forEach(_g)),r[dg]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let r=n.length,o;for(;r--;){o=n[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},Uf(this),this.split(e)}split(t){return(this._ctx||Jv).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,f=e.indexOf("words")>-1,u=d&&!f&&!h,m=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=m?new RegExp(m.source+"|"+gg.source,"gu"):gg,p=!!t.ignore&&mg(t.ignore),{orig:g,animTime:y,obs:b}=this._data,v;(d||f||h)&&(this.elements.forEach((S,E)=>{g[E]={element:S,html:S.innerHTML,ariaL:S.getAttribute("aria-label"),ariaH:S.getAttribute("aria-hidden")},n==="auto"?S.setAttribute("aria-label",(S.textContent||"").trim()):n==="hidden"&&S.setAttribute("aria-hidden","true");let x=[],M=[],P=[],A=d?Ff("char",t,x):null,N=Ff("word",t,M),D,H,L,k;if(yg(S,t,N,A,u,i&&(h||u),p,_,m,!1),h){let V=Ia(S.childNodes),I=Qv(S,V,t,P),X,B=[],C=0,W=window.getComputedStyle(S).direction==="rtl",xt=V.map(nt=>nt.nodeType===1?nt.getBoundingClientRect():_c),ft=_c,q;for(D=0;D<V.length;D++)X=V[D],X.nodeType===1&&(X.nodeName==="BR"?((!D||V[D-1].nodeName!=="BR")&&(B.push(X),I(C,D+1)),C=D+1,ft=Kv(xt,D)):(q=xt[D],D&&q.top>ft.top&&(W?q.left+q.width>ft.left+1:q.left<ft.left+ft.width-1)&&(I(C,D),C=D),ft=q));C<D&&I(C,D),B.forEach(nt=>{var vt;return(vt=nt.parentNode)==null?void 0:vt.removeChild(nt)})}if(!f){for(D=0;D<M.length;D++)if(H=M[D],d||!H.nextSibling||H.nextSibling.nodeType!==3)if(r&&!h){for(L=document.createElement("span"),L.style.whiteSpace="nowrap";H.firstChild;)L.appendChild(H.firstChild);H.replaceWith(L)}else H.replaceWith(...H.childNodes);else k=H.nextSibling,k&&k.nodeType===3&&(k.textContent=(H.textContent||"")+(k.textContent||""),H.remove());M.length=0,S.normalize()}this.lines.push(...P),this.words.push(...M),this.chars.push(...x)}),c&&this[c]&&this.masks.push(...this[c].map(S=>{let E=S.cloneNode();return S.replaceWith(E),E.appendChild(S),S.className&&(E.className=S.className.trim().split(" ").map(x=>x+"-mask").join(" ")),E.style.overflow="clip",E.style.verticalAlign="top",E}))),this.isSplit=!0,Pa&&h&&a&&Pa.addEventListener("loadingdone",this._split),(v=o&&o(this))&&v.totalTime&&(this._data.anim=y?v.totalTime(y):v),h&&a&&this.elements.forEach((S,E)=>{g[E].width=S.offsetWidth,b&&b.observe(S)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),Pa?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(_g),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new Mg(t,e)}static register(t){Ra=Ra||t||window.gsap,Ra&&(Ia=Ra.utils.toArray,Uf=Ra.core.context||Uf),!Of&&window.innerWidth>0&&(Pa=document.fonts,Of=!0)}};Sg.version="3.15.1";var Vs=Sg;var bg="1.3.27";function Eg(s,t,e){return Math.max(s,Math.min(t,e))}function jv(s,t,e){return(1-e)*s+e*t}function ty(s,t,e,n){return jv(s,t,1-Math.exp(-e*n))}function ey(s,t){return(s%t+t)%t}var ny=class{constructor(){Xt(this,"isRunning",!1);Xt(this,"value",0);Xt(this,"from",0);Xt(this,"to",0);Xt(this,"currentTime",0);Xt(this,"lerp");Xt(this,"duration");Xt(this,"easing");Xt(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=Eg(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=ty(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function iy(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var sy=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Xt(this,"width",0);Xt(this,"height",0);Xt(this,"scrollHeight",0);Xt(this,"scrollWidth",0);Xt(this,"debouncedResize");Xt(this,"wrapperResizeObserver");Xt(this,"contentResizeObserver");Xt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Xt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Xt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=iy(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ag=class{constructor(){Xt(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},ry=100/6,Hs={passive:!1};function wg(s,t){return s===1?ry:s===2?t:1}var oy=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Xt(this,"touchStart",{x:0,y:0});Xt(this,"lastDelta",{x:0,y:0});Xt(this,"window",{width:0,height:0});Xt(this,"emitter",new Ag);Xt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Xt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Xt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Xt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=wg(n,this.window.width),r=wg(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Xt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Hs),this.element.addEventListener("touchstart",this.onTouchStart,Hs),this.element.addEventListener("touchmove",this.onTouchMove,Hs),this.element.addEventListener("touchend",this.onTouchEnd,Hs)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Hs),this.element.removeEventListener("touchstart",this.onTouchStart,Hs),this.element.removeEventListener("touchmove",this.onTouchMove,Hs),this.element.removeEventListener("touchend",this.onTouchEnd,Hs)}},Tg=s=>Math.min(1,1.001-2**(-10*s)),Cg=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:y=!0,autoRaf:b=!1,anchors:v=!1,autoToggle:S=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:M=x,stopInertiaOnNavigate:P=!1,respectReducedMotion:A=!0}={}){Xt(this,"_isScrolling",!1);Xt(this,"_isStopped",!1);Xt(this,"_isLocked",!1);Xt(this,"_preventNextNativeScrollEvent",!1);Xt(this,"_resetVelocityTimeout",null);Xt(this,"_rafId",null);Xt(this,"_isDraggingSelection",!1);Xt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Xt(this,"isTouching");Xt(this,"isIos");Xt(this,"time",0);Xt(this,"userData",{});Xt(this,"lastVelocity",0);Xt(this,"velocity",0);Xt(this,"direction",0);Xt(this,"options");Xt(this,"targetScroll");Xt(this,"animatedScroll");Xt(this,"animate",new ny);Xt(this,"emitter",new Ag);Xt(this,"dimensions");Xt(this,"virtualScroll");Xt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Xt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Xt(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Xt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Xt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Xt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||r&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=i&&this.options.syncTouch,u=i&&n.type==="touchend";u&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Xt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Xt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=bg,window.lenis||(window.lenis={}),window.lenis.version=bg,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=Tg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:d,touchMultiplier:u,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:y,autoRaf:b,anchors:v,autoToggle:S,allowNestedScroll:E,naiveDimensions:M,stopInertiaOnNavigate:P,respectReducedMotion:A},this.dimensions=new sy(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new oy(e,{touchMultiplier:u,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=s,u=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(m=f),m){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?v.left:v.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),y=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(b)?0:b)}}if(typeof f=="number"){if(f+=u,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=Eg(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Tg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,f,u,m;if(n-(i.time??0)>2e3){i.time=Date.now();let E=window.getComputedStyle(s);if(i.computedStyle=E,r=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),h=["auto"].includes(E.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,f=s.scrollHeight,u=s.clientWidth,m=s.clientHeight,a=d>u,l=f>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=u,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,u=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,y,b,v,S;if(_==="horizontal")p=Math.round(s.scrollLeft),g=d-u,y=t,b=r,v=a,S=c;else if(_==="vertical")p=Math.round(s.scrollTop),g=f-m,y=e,b=o,v=l,S=h;else return!1;return!S&&(p>=g||p<=0)?!0:(y>0?p<g:p>0)&&b&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?ey(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};re.registerPlugin(Zt,Vs);Zt.config({ignoreMobileResize:!0});var xe=(s,t=document)=>t.querySelector(s),Pr=(s,t=document)=>[...t.querySelectorAll(s)],Ws=document.documentElement,Ye=Ws.classList.contains("reduce"),xc=Ws.classList.contains("fine");function Rg(){if(Ye)return null;let s=new Cg({lerp:.1,anchors:!0});return s.on("scroll",Zt.update),re.ticker.add(t=>s.raf(t*1e3)),re.ticker.lagSmoothing(0),s}function Pg(){let s=xe("[data-nav]");s&&Zt.create({start:0,end:"max",onUpdate:t=>s.classList.toggle("is-away",t.direction===1&&t.scroll()>140&&!s.contains(document.activeElement))})}function Ig(s,t){let e=xe("[data-curtain]"),n=xe("[data-count]"),i=!0;try{i=!sessionStorage.getItem("lz-seen"),sessionStorage.setItem("lz-seen","1")}catch{}if(Ws.classList.add("ready"),Ye){e.style.display="none",t();return}let r=Promise.race([Promise.all([document.fonts.ready,s]),new Promise(a=>setTimeout(a,3500))]),o=()=>{t(),re.timeline().to(n,{yPercent:-30,opacity:0,duration:.45,ease:"power3.in"},0).to(e,{yPercent:-100,duration:.95,ease:"expo.inOut"},.1).set(e,{display:"none"})};if(i){let a={v:0};re.to(a,{v:100,duration:1.4,ease:"power2.inOut",onUpdate(){n.textContent=Math.round(a.v),n.style.fontStretch=50+a.v+"%"},onComplete(){r.then(o)}})}else n.textContent="",r.then(o)}function Lg(){let s=xe("[data-curtain]"),t=xe("[data-count]");document.addEventListener("click",e=>{let n=e.target.closest&&e.target.closest("a[href]");if(!n||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||n.target==="_blank"||Ye)return;let i=new URL(n.href,location.href);i.protocol!==location.protocol||i.host!==location.host||i.pathname===location.pathname||(e.preventDefault(),t.textContent="",re.killTweensOf(s),re.set(s,{display:"flex",yPercent:100}),re.to(s,{yPercent:0,duration:.6,ease:"expo.inOut",onComplete(){location.href=n.href}}))}),window.addEventListener("pageshow",e=>{e.persisted&&re.set(s,{display:"none"})})}function Bf(s,t={}){Ye||!s||Vs.create(s,{type:"lines",mask:"lines",autoSplit:!0,onSplit:e=>re.from(e.lines,{yPercent:108,duration:1.15,ease:"expo.out",stagger:.09,...t})})}function Dg(s,t={}){if(Ye||!s)return null;let e=Vs.create(s,{type:"words,chars",wordsClass:"word",charsClass:"char"});return re.from(e.chars,{rotationX:-92,yPercent:38,opacity:0,transformOrigin:"50% 100% -0.35em",duration:1.1,ease:"expo.out",stagger:.045,...t})}var a_=0,vd=1,l_=2;var cl=1,c_=2,Go=3,sr=0,yn=1,Ai=2,Gr=0,Vo=1,yd=2,Sd=3,Md=4,h_=5;var Vr=100,u_=101,f_=102,d_=103,p_=104,m_=200,g_=201,__=202,x_=203,bd=204,wd=205,v_=206,y_=207,S_=208,M_=209,b_=210,w_=211,T_=212,E_=213,A_=214,Hc=0,Wc=1,Xc=2,Io=3,qc=4,Yc=5,Zc=6,Jc=7,Td=0,C_=1,R_=2,Qn=0,Ed=1,Ad=2,Cd=3,Rd=4,Pd=5,Id=6,Ld=7;var Dd=300,Hr=301,Ho=302,Ch=303,Rh=304,Lo=1e3,Zi=1001,$c=1002,dn=1003,P_=1004;var hl=1005;var vn=1006,Ph=1007;var Ui=1008;var mi=1009,Nd=1010,Ud=1011,Wo=1012,Ih=1013,Oi=1014,Fi=1015,Bi=1016,Lh=1017,Dh=1018,Wr=1020,Od=35902,Fd=35899,Bd=1021,zd=1022,zi=1023,ys=1026,ws=1027,kd=1028,Nh=1029,rr=1030,Uh=1031;var Oh=1033,ul=33776,fl=33777,dl=33778,pl=33779,Fh=35840,Bh=35841,zh=35842,kh=35843,Gh=36196,Vh=37492,Hh=37496,Wh=37488,Xh=37489,ml=37490,qh=37491,Yh=37808,Zh=37809,Jh=37810,$h=37811,Kh=37812,Qh=37813,jh=37814,tu=37815,eu=37816,nu=37817,iu=37818,su=37819,ru=37820,ou=37821,au=36492,lu=36494,cu=36495,hu=36283,uu=36284,gl=36285,fu=36286;var za=2300,Kc=2301,Gc=2302,cd=2303,hd=2400,ud=2401,fd=2402;var I_=3200;var du=0,L_=1,Ts="",hi="srgb",ka="srgb-linear",Ga="linear",be="srgb";var Vc=7680;var D_=519,N_=512,U_=513,O_=514,Gd=515,F_=516,B_=517,Vd=518,Hd=519,z_=35044;var Wd="300 es",wi=2e3,Va=2001;function ay(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ly(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ha(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function k_(){let s=Ha("canvas");return s.style.display="block",s}var Ng={},Do=null;function Xd(...s){let t="THREE."+s.shift();Do?Do("log",t,...s):console.log(t,...s)}function G_(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Jt(...s){s=G_(s);let t="THREE."+s.shift();if(Do)Do("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Kt(...s){s=G_(s);let t="THREE."+s.shift();if(Do)Do("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Or(...s){let t=s.join(" ");t in Ng||(Ng[t]=!0,Jt(...s))}function V_(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var H_={[Hc]:Hc,[Xc]:Zc,[qc]:qc,[Io]:Yc,[Wc]:Wc,[Zc]:Xc,[Jc]:Jc,[Yc]:Io},$i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zf=Math.PI/180,Qc=180/Math.PI;function Xo(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function ue(s,t,e){return Math.max(t,Math.min(e,s))}function cy(s,t){return(s%t+t)%t}function kf(s,t,e){return(1-e)*s+e*t}function W_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qd(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hy(s,t){if(t.constructor===Float32Array)return s;let e=qd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function uy(s,t){if(t.constructor===Float32Array)return s;let e=qd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Qd=class Qd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qd.prototype.isVector2=!0;var Dt=Qd,Ki=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+d*_;p<0&&(f=-f,u=-u,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let y=Math.acos(p),b=Math.sin(y);g=Math.sin(g*y)/b,a=Math.sin(a*y)/b,l=l*g+f*a,c=c*g+u*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+m*a,d=d*g+_*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*u-c*f,t[e+1]=l*m+h*f+c*d-a*u,t[e+2]=c*m+h*u+a*f-l*d,t[e+3]=h*m-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jd=class jd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ug.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ug.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gf.copy(this).projectOnVector(t),this.sub(Gf)}reflect(t){return this.sub(Gf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jd.prototype.isVector3=!0;var J=jd,Gf=new J,Ug=new Ki,tp=class tp{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],_=i[0],p=i[3],g=i[6],y=i[1],b=i[4],v=i[7],S=i[2],E=i[5],x=i[8];return r[0]=o*_+a*y+l*S,r[3]=o*p+a*b+l*E,r[6]=o*g+a*v+l*x,r[1]=c*_+h*y+d*S,r[4]=c*p+h*b+d*E,r[7]=c*g+h*v+d*x,r[2]=f*_+u*y+m*S,r[5]=f*p+u*b+m*E,r[8]=f*g+u*v+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,m=e*d+n*f+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vf.makeScale(t,e)),this}rotate(t){return Or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vf.makeRotation(-t)),this}translate(t,e){return Or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};tp.prototype.isMatrix3=!0;var ee=tp,Vf=new ee,Og=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fg=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fy(){let s={enabled:!0,workingColorSpace:ka,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(i.r=Po(i.r),i.g=Po(i.g),i.b=Po(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ts?Ga:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ka]:{primaries:t,whitePoint:n,transfer:Ga,toXYZ:Og,fromXYZ:Fg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:n,transfer:be,toXYZ:Og,fromXYZ:Fg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}var me=fy();function vs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Po(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var _o,jc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_o===void 0&&(_o=Ha("canvas")),_o.width=t.width,_o.height=t.height;let i=_o.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=_o}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ha("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=vs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vs(e[n]/255)*255):e[n]=vs(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dy=0,No=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hf(i[o].image)):r.push(Hf(i[o]))}else r=Hf(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Hf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var py=0,Wf=new J,Xn=class s extends $i{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Zi,i=Zi,r=vn,o=Ui,a=zi,l=mi,c=s.DEFAULT_ANISOTROPY,h=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Xo(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wf).x}get height(){return this.source.getSize(Wf).y}get depth(){return this.source.getSize(Wf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lo:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case $c:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lo:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case $c:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Dd;Xn.DEFAULT_ANISOTROPY=1;var ep=class ep{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,v=(u+1)/2,S=(g+1)/2,E=(h+f)/4,x=(d+_)/4,M=(m+p)/4;return b>v&&b>S?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=E/n,r=x/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=M/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=x/r,i=M/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(d-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ep.prototype.isVector4=!0;var Ge=ep,th=class extends $i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Xn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new No(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends th{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Wa=class extends Xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var eh=class extends Xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ah=class Ah{constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,m,_,p)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ah().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/xo.setFromMatrixColumn(t,0).length(),r=1/xo.setFromMatrixColumn(t,1).length(),o=1/xo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f+_*a,e[4]=m*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=m*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+m,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(my,t,gy)}lookAt(t,e,n){let i=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),Xs.crossVectors(n,li),Xs.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Xs.crossVectors(n,li)),Xs.normalize(),vc.crossVectors(li,Xs),i[0]=Xs.x,i[4]=vc.x,i[8]=li.x,i[1]=Xs.y,i[5]=vc.y,i[9]=li.y,i[2]=Xs.z,i[6]=vc.z,i[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],b=n[7],v=n[11],S=n[15],E=i[0],x=i[4],M=i[8],P=i[12],A=i[1],N=i[5],D=i[9],H=i[13],L=i[2],k=i[6],V=i[10],I=i[14],X=i[3],B=i[7],C=i[11],W=i[15];return r[0]=o*E+a*A+l*L+c*X,r[4]=o*x+a*N+l*k+c*B,r[8]=o*M+a*D+l*V+c*C,r[12]=o*P+a*H+l*I+c*W,r[1]=h*E+d*A+f*L+u*X,r[5]=h*x+d*N+f*k+u*B,r[9]=h*M+d*D+f*V+u*C,r[13]=h*P+d*H+f*I+u*W,r[2]=m*E+_*A+p*L+g*X,r[6]=m*x+_*N+p*k+g*B,r[10]=m*M+_*D+p*V+g*C,r[14]=m*P+_*H+p*I+g*W,r[3]=y*E+b*A+v*L+S*X,r[7]=y*x+b*N+v*k+S*B,r[11]=y*M+b*D+v*V+S*C,r[15]=y*P+b*H+v*I+S*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],_=t[7],p=t[11],g=t[15],y=l*u-c*f,b=a*u-c*d,v=a*f-l*d,S=o*u-c*h,E=o*f-l*h,x=o*d-a*h;return e*(_*y-p*b+g*v)-n*(m*y-p*S+g*E)+i*(m*b-_*S+g*x)-r*(m*v-_*E+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],_=t[13],p=t[14],g=t[15],y=e*a-n*o,b=e*l-i*o,v=e*c-r*o,S=n*l-i*a,E=n*c-r*a,x=i*c-r*l,M=h*_-d*m,P=h*p-f*m,A=h*g-u*m,N=d*p-f*_,D=d*g-u*_,H=f*g-u*p,L=y*H-b*D+v*N+S*A-E*P+x*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return t[0]=(a*H-l*D+c*N)*k,t[1]=(i*D-n*H-r*N)*k,t[2]=(_*x-p*E+g*S)*k,t[3]=(f*E-d*x-u*S)*k,t[4]=(l*A-o*H-c*P)*k,t[5]=(e*H-i*A+r*P)*k,t[6]=(p*v-m*x-g*b)*k,t[7]=(h*x-f*v+u*b)*k,t[8]=(o*D-a*A+c*M)*k,t[9]=(n*A-e*D-r*M)*k,t[10]=(m*E-_*v+g*y)*k,t[11]=(d*v-h*E-u*y)*k,t[12]=(a*P-o*N-l*M)*k,t[13]=(e*N-n*P+i*M)*k,t[14]=(_*b-m*S-p*y)*k,t[15]=(h*S-d*b+f*y)*k,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,m=r*d,_=o*h,p=o*d,g=a*d,y=l*c,b=l*h,v=l*d,S=n.x,E=n.y,x=n.z;return i[0]=(1-(_+g))*S,i[1]=(u+v)*S,i[2]=(m-b)*S,i[3]=0,i[4]=(u-v)*E,i[5]=(1-(f+g))*E,i[6]=(p+y)*E,i[7]=0,i[8]=(m+b)*x,i[9]=(p-y)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=xo.set(i[0],i[1],i[2]).length(),a=xo.set(i[4],i[5],i[6]).length(),l=xo.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ii.copy(this);let c=1/o,h=1/a,d=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=d,Ii.elements[9]*=d,Ii.elements[10]*=d,e.setFromRotationMatrix(Ii),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=wi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===wi)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Va)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=wi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===wi)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Va)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ah.prototype.isMatrix4=!0;var ke=Ah,xo=new J,Ii=new ke,my=new J(0,0,0),gy=new J(1,1,1),Xs=new J,vc=new J,li=new J,Bg=new ke,zg=new Ki,Ss=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zg.setFromEuler(this),this.setFromQuaternion(zg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ss.DEFAULT_ORDER="XYZ";var Xa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_y=0,kg=new J,vo=new Ki,ps=new ke,yc=new J,La=new J,xy=new J,vy=new Ki,Gg=new J(1,0,0),Vg=new J(0,1,0),Hg=new J(0,0,1),Wg={type:"added"},yy={type:"removed"},yo={type:"childadded",child:null},Xf={type:"childremoved",child:null},Ei=class s extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new J,e=new Ss,n=new Ki,i=new J(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new ee}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vo.setFromAxisAngle(t,e),this.quaternion.multiply(vo),this}rotateOnWorldAxis(t,e){return vo.setFromAxisAngle(t,e),this.quaternion.premultiply(vo),this}rotateX(t){return this.rotateOnAxis(Gg,t)}rotateY(t){return this.rotateOnAxis(Vg,t)}rotateZ(t){return this.rotateOnAxis(Hg,t)}translateOnAxis(t,e){return kg.copy(t).applyQuaternion(this.quaternion),this.position.add(kg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gg,t)}translateY(t){return this.translateOnAxis(Vg,t)}translateZ(t){return this.translateOnAxis(Hg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yc.copy(t):yc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(La,yc,this.up):ps.lookAt(yc,La,this.up),this.quaternion.setFromRotationMatrix(ps),i&&(ps.extractRotation(i.matrixWorld),vo.setFromRotationMatrix(ps),this.quaternion.premultiply(vo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wg),yo.child=t,this.dispatchEvent(yo),yo.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yy),Xf.child=t,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ps.multiply(t.parent.matrixWorld)),t.applyMatrix4(ps),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wg),yo.child=t,this.dispatchEvent(yo),yo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,t,xy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,vy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ei.DEFAULT_UP=new J(0,1,0);Ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ji=class extends Ei{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sy={type:"move"},Uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qs={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function qf(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=cy(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qf(o,r,t+1/3),this.g=qf(o,r,t),this.b=qf(o,r,t-1/3)}return me.colorSpaceToWorking(this,i),this}setStyle(t,e=hi){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hi){let n=X_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}copyLinearToSRGB(t){return this.r=Po(t.r),this.g=Po(t.g),this.b=Po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return me.workingToColorSpace(Ln.copy(this),t),Math.round(ue(Ln.r*255,0,255))*65536+Math.round(ue(Ln.g*255,0,255))*256+Math.round(ue(Ln.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,i=Ln.g,r=Ln.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=hi){me.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,i=Ln.b;return t!==hi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(qs),this.setHSL(qs.h+t,qs.s+e,qs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qs),t.getHSL(Sc);let n=kf(qs.h,Sc.h,e),i=kf(qs.s,Sc.s,e),r=kf(qs.l,Sc.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new te;te.NAMES=X_;var Ks=class extends Ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Li=new J,ms=new J,Yf=new J,gs=new J,So=new J,Mo=new J,Xg=new J,Zf=new J,Jf=new J,$f=new J,Kf=new Ge,Qf=new Ge,jf=new Ge,$s=class s{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Li.subVectors(t,e),i.cross(Li);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Li.subVectors(i,e),ms.subVectors(n,e),Yf.subVectors(t,e);let o=Li.dot(Li),a=Li.dot(ms),l=Li.dot(Yf),c=ms.dot(ms),h=ms.dot(Yf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gs.x),l.addScaledVector(o,gs.y),l.addScaledVector(a,gs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Kf.setScalar(0),Qf.setScalar(0),jf.setScalar(0),Kf.fromBufferAttribute(t,e),Qf.fromBufferAttribute(t,n),jf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Kf,r.x),o.addScaledVector(Qf,r.y),o.addScaledVector(jf,r.z),o}static isFrontFacing(t,e,n,i){return Li.subVectors(n,e),ms.subVectors(t,e),Li.cross(ms).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Li.cross(ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;So.subVectors(i,n),Mo.subVectors(r,n),Zf.subVectors(t,n);let l=So.dot(Zf),c=Mo.dot(Zf);if(l<=0&&c<=0)return e.copy(n);Jf.subVectors(t,i);let h=So.dot(Jf),d=Mo.dot(Jf);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(So,o);$f.subVectors(t,r);let u=So.dot($f),m=Mo.dot($f);if(m>=0&&u<=m)return e.copy(r);let _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Mo,a);let p=h*m-u*d;if(p<=0&&d-h>=0&&u-m>=0)return Xg.subVectors(r,i),a=(d-h)/(d-h+(u-m)),e.copy(i).addScaledVector(Xg,a);let g=1/(p+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(So,o).addScaledVector(Mo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qs=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Di):Di.fromBufferAttribute(r,o),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mc.copy(n.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Da),bc.subVectors(this.max,Da),bo.subVectors(t.a,Da),wo.subVectors(t.b,Da),To.subVectors(t.c,Da),Ys.subVectors(wo,bo),Zs.subVectors(To,wo),Ir.subVectors(bo,To);let e=[0,-Ys.z,Ys.y,0,-Zs.z,Zs.y,0,-Ir.z,Ir.y,Ys.z,0,-Ys.x,Zs.z,0,-Zs.x,Ir.z,0,-Ir.x,-Ys.y,Ys.x,0,-Zs.y,Zs.x,0,-Ir.y,Ir.x,0];return!td(e,bo,wo,To,bc)||(e=[1,0,0,0,1,0,0,0,1],!td(e,bo,wo,To,bc))?!1:(wc.crossVectors(Ys,Zs),e=[wc.x,wc.y,wc.z],td(e,bo,wo,To,bc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_s),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_s=[new J,new J,new J,new J,new J,new J,new J,new J],Di=new J,Mc=new Qs,bo=new J,wo=new J,To=new J,Ys=new J,Zs=new J,Ir=new J,Da=new J,bc=new J,wc=new J,Lr=new J;function td(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Lr.fromArray(s,r);let a=i.x*Math.abs(Lr.x)+i.y*Math.abs(Lr.y)+i.z*Math.abs(Lr.z),l=t.dot(Lr),c=e.dot(Lr),h=n.dot(Lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var tn=new J,Tc=new Dt,My=0,Ti=class extends $i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:My++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=z_,this.updateRanges=[],this.gpuType=Fi,this.version=0,this._normalizationScale=t!==void 0?qd(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tc.fromBufferAttribute(this,e),Tc.applyMatrix3(t),this.setXY(e,Tc.x,Tc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):hy(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):uy(t,this.array)}};var qa=class extends Ti{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ya=class extends Ti{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Wn=class extends Ti{constructor(t,e,n){super(new Float32Array(t),e,n)}},by=new Qs,Na=new J,ed=new J,Oo=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):by.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Na.subVectors(t,this.center);let e=Na.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Na,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Na.copy(t.center).add(ed)),this.expandByPoint(Na.copy(t.center).sub(ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},wy=0,bi=new ke,nd=new Ei,Eo=new J,ci=new Qs,Ua=new Qs,fn=new J,Qi=class s extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ay(t)?Ya:qa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,e,n){return bi.makeTranslation(t,e,n),this.applyMatrix4(bi),this}scale(t,e,n){return bi.makeScale(t,e,n),this.applyMatrix4(bi),this}lookAt(t){return nd.lookAt(t),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ua.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(ci.min,Ua.min),ci.expandByPoint(fn),fn.addVectors(ci.max,Ua.max),ci.expandByPoint(fn)):(ci.expandByPoint(Ua.min),ci.expandByPoint(Ua.max))}ci.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)fn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(fn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)fn.fromBufferAttribute(a,c),l&&(Eo.fromBufferAttribute(t,c),fn.add(Eo)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ti(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new J,l[P]=new J;let h=new J,d=new J,f=new J,u=new Dt,m=new Dt,_=new Dt,p=new J,g=new J;function y(P,A,N){c[P]=c[A]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,N),u.fromBufferAttribute(r,P),m.fromBufferAttribute(r,A),_.fromBufferAttribute(r,N),d.sub(h),f.sub(h),m.sub(u),_.sub(u);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(D),a[P].add(p),a[A].add(p),a[N].add(p),l[P].add(g),l[A].add(g),l[N].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,A=b.length;P<A;++P){let N=b[P],D=N.start,H=N.count;for(let L=D,k=D+H;L<k;L+=3)y(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let v=new J,S=new J,E=new J,x=new J;function M(P){E.fromBufferAttribute(i,P),x.copy(E);let A=a[P];v.copy(A),v.sub(E.multiplyScalar(E.dot(A))).normalize(),S.crossVectors(x,A);let D=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,D)}for(let P=0,A=n.count;P<A;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ti(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new J,r=new J,o=new J,a=new J,l=new J,c=new J,h=new J,d=new J;if(t)for(let f=0,u=t.count;f<u;f+=3){let m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[u++]}return new Ti(f,h,d)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var id=new J,Ty=new J,Ey=new ee,Ni=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=id.subVectors(n,e).cross(Ty.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(id),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ey.getNormalMatrix(t),i=this.coplanarPoint(id).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ay=0,js=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Vo,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=wd,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vc,this.stencilZFail=Vc,this.stencilZPass=Vc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var xs=new J,sd=new J,Ec=new J,Ac=new J,nh=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xs.copy(this.origin).addScaledVector(this.direction,e),xs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sd.copy(t).add(e).multiplyScalar(.5),Ec.copy(e).sub(t).normalize(),Ac.copy(this.origin).sub(sd);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ec),a=Ac.dot(this.direction),l=-Ac.dot(Ec),c=Ac.lengthSq(),h=Math.abs(1-o*o),d,f,u,m;if(h>0)if(d=o*l-a,f=o*a-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(sd).addScaledVector(Ec,f),u}intersectSphere(t,e){if(t.radius<0)return null;xs.subVectors(t.center,this.origin);let n=xs.dot(this.direction),i=xs.dot(xs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,y=n.y-o.y,b=n.z-o.z,v=Math.abs(l),S=Math.abs(c),E=Math.abs(h),x,M,P,A,N,D,H,L,k,V,I,X;if(v>=S&&v>=E?(P=l,D=d,k=m,X=g,l>=0?(x=c,M=h,A=f,N=u,H=_,L=p,V=y,I=b):(x=h,M=c,A=u,N=f,H=p,L=_,V=b,I=y)):S>=E?(P=c,D=f,k=_,X=y,c>=0?(x=h,M=l,A=u,N=d,H=p,L=m,V=b,I=g):(x=l,M=h,A=d,N=u,H=m,L=p,V=g,I=b)):(P=h,D=u,k=p,X=b,h>=0?(x=l,M=c,A=d,N=f,H=m,L=_,V=g,I=y):(x=c,M=l,A=f,N=d,H=_,L=m,V=y,I=g)),P===0)return null;let B=x/P,C=M/P,W=1/P,xt=A-B*D,ft=N-C*D,q=H-B*k,nt=L-C*k,vt=V-B*X,Rt=I-C*X,O=vt*nt-Rt*q,Q=xt*Rt-ft*vt,ut=q*ft-nt*xt;if(i){if(O<0||Q<0||ut<0)return null}else if((O<0||Q<0||ut<0)&&(O>0||Q>0||ut>0))return null;let st=O+Q+ut;if(st===0)return null;let ht=W*(O*D+Q*k+ut*X);return(st>0?ht<0:ht>0)?null:this.at(ht/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fr=class extends js{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qg=new ke,Dr=new nh,Cc=new Oo,Yg=new J,Rc=new J,Pc=new J,Ic=new J,rd=new J,Lc=new J,Zg=new J,Dc=new J,Dn=class extends Ei{constructor(t=new Qi,e=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Lc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(rd.fromBufferAttribute(d,t),o?Lc.addScaledVector(rd,h):Lc.addScaledVector(rd.sub(e),h))}e.add(Lc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cc.copy(n.boundingSphere),Cc.applyMatrix4(r),Dr.copy(t.ray).recast(t.near),!(Cc.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Cc,Yg)===null||Dr.origin.distanceToSquared(Yg)>(t.far-t.near)**2))&&(qg.copy(r).invert(),Dr.copy(t.ray).applyMatrix4(qg),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],y=Math.max(p.start,u.start),b=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let v=y,S=b;v<S;v+=3){let E=a.getX(v),x=a.getX(v+1),M=a.getX(v+2);i=Nc(this,g,t,n,c,h,d,E,x,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let y=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);i=Nc(this,o,t,n,c,h,d,y,b,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],y=Math.max(p.start,u.start),b=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let v=y,S=b;v<S;v+=3){let E=v,x=v+1,M=v+2;i=Nc(this,g,t,n,c,h,d,E,x,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let y=p,b=p+1,v=p+2;i=Nc(this,o,t,n,c,h,d,y,b,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function Cy(s,t,e,n,i,r,o,a){let l;if(t.side===yn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===sr,a),l===null)return null;Dc.copy(a),Dc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Dc);return c<e.near||c>e.far?null:{distance:c,point:Dc.clone(),object:s}}function Nc(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Rc),s.getVertexPosition(l,Pc),s.getVertexPosition(c,Ic);let h=Cy(s,t,e,n,Rc,Pc,Ic,Zg);if(h){let d=new J;$s.getBarycoord(Zg,Rc,Pc,Ic,d),i&&(h.uv=$s.getInterpolatedAttribute(i,a,l,c,d,new Dt)),r&&(h.uv1=$s.getInterpolatedAttribute(r,a,l,c,d,new Dt)),o&&(h.normal=$s.getInterpolatedAttribute(o,a,l,c,d,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new J,materialIndex:0};$s.getNormal(Rc,Pc,Ic,f.normal),h.face=f,h.barycoord=d}return h}var ih=class extends Xn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=dn,h=dn,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nr=new Oo,Ry=new Dt(.5,.5),Uc=new J,Br=class{constructor(t=new Ni,e=new Ni,n=new Ni,i=new Ni,r=new Ni,o=new Ni){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wi,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],_=r[9],p=r[10],g=r[11],y=r[12],b=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-o,u-h,g-m,S-y).normalize(),i[1].setComponents(c+o,u+h,g+m,S+y).normalize(),i[2].setComponents(c+a,u+d,g+_,S+b).normalize(),i[3].setComponents(c-a,u-d,g-_,S-b).normalize(),n)i[4].setComponents(l,f,p,v).normalize(),i[5].setComponents(c-l,u-f,g-p,S-v).normalize();else if(i[4].setComponents(c-l,u-f,g-p,S-v).normalize(),e===wi)i[5].setComponents(c+l,u+f,g+p,S+v).normalize();else if(e===Va)i[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(t){Nr.center.set(0,0,0);let e=Ry.distanceTo(t.center);return Nr.radius=.7071067811865476+e,Nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Uc.x=i.normal.x>0?t.max.x:t.min.x,Uc.y=i.normal.y>0?t.max.y:t.min.y,Uc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Jg=new ke,sh=class s{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Jg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Br),n[i].setFromProjectionMatrix(Jg,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Br),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Za=class extends Xn{constructor(t=[],e=Hr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ja=class extends Xn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ms=class extends Xn{constructor(t,e,n=Oi,i,r,o,a=dn,l=dn,c,h=ys,d=1){if(h!==ys&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new No(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},$a=class extends Ms{constructor(t,e=Oi,n=Hr,i,r,o=dn,a=dn,l,c=ys){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ka=class extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},tr=class s extends Qi{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(h,3)),this.setAttribute("uv",new Wn(d,2));function m(_,p,g,y,b,v,S,E,x,M,P){let A=v/x,N=S/M,D=v/2,H=S/2,L=E/2,k=x+1,V=M+1,I=0,X=0,B=new J;for(let C=0;C<V;C++){let W=C*N-H;for(let xt=0;xt<k;xt++){let ft=xt*A-D;B[_]=ft*y,B[p]=W*b,B[g]=L,c.push(B.x,B.y,B.z),B[_]=0,B[p]=0,B[g]=E>0?1:-1,h.push(B.x,B.y,B.z),d.push(xt/x),d.push(1-C/M),I+=1}}for(let C=0;C<M;C++)for(let W=0;W<x;W++){let xt=f+W+k*C,ft=f+W+k*(C+1),q=f+(W+1)+k*(C+1),nt=f+(W+1)+k*C;l.push(xt,ft,nt),l.push(ft,q,nt),X+=6}a.addGroup(u,X,P),u+=X,f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Dt:new J);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new J,i=[],r=[],o=[],a=new J,l=new ke;for(let u=0;u<=t;u++){let m=u/t;i[u]=this.getTangentAt(m,new J)}r[0]=new J,o[0]=new J;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ue(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,m))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(ue(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],u*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Fo=class extends fi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Dt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},rh=class extends Fo{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yd(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var $g=new J,Kg=new J,od=new Yd,ad=new Yd,ld=new Yd,oh=class extends fi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new J){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Kg.subVectors(i[0],i[1]).add(i[0]),c=Kg);let d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:($g.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=$g),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),od.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,_,p),ad.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,_,p),ld.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(od.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ad.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),ld.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(od.calc(l),ad.calc(l),ld.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new J().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Qg(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Py(s,t){let e=1-s;return e*e*t}function Iy(s,t){return 2*(1-s)*s*t}function Ly(s,t){return s*s*t}function Fa(s,t,e,n){return Py(s,t)+Iy(s,e)+Ly(s,n)}function Dy(s,t){let e=1-s;return e*e*e*t}function Ny(s,t){let e=1-s;return 3*e*e*s*t}function Uy(s,t){return 3*(1-s)*s*s*t}function Oy(s,t){return s*s*s*t}function Ba(s,t,e,n,i){return Dy(s,t)+Ny(s,e)+Uy(s,n)+Oy(s,i)}var Qa=class extends fi{constructor(t=new Dt,e=new Dt,n=new Dt,i=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Dt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ba(t,i.x,r.x,o.x,a.x),Ba(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ah=class extends fi{constructor(t=new J,e=new J,n=new J,i=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new J){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ba(t,i.x,r.x,o.x,a.x),Ba(t,i.y,r.y,o.y,a.y),Ba(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ja=class extends fi{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lh=class extends fi{constructor(t=new J,e=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new J){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends fi{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fa(t,i.x,r.x,o.x),Fa(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ch=class extends fi{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fa(t,i.x,r.x,o.x),Fa(t,i.y,r.y,o.y),Fa(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Qg(a,l.x,c.x,h.x,d.x),Qg(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Dt().fromArray(i))}return this}},dd=Object.freeze({__proto__:null,ArcCurve:rh,CatmullRomCurve3:oh,CubicBezierCurve:Qa,CubicBezierCurve3:ah,EllipseCurve:Fo,LineCurve:ja,LineCurve3:lh,QuadraticBezierCurve:tl,QuadraticBezierCurve3:ch,SplineCurve:el}),hh=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new dd[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},nl=class extends hh{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ja(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new tl(this.currentPoint.clone(),new Dt(t,e),new Dt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Qa(this.currentPoint.clone(),new Dt(t,e),new Dt(n,i),new Dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new el(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Fo(t,e,n,i,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Bo=class extends nl{constructor(t){super(t),this.uuid=Xo(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new nl().fromJSON(i))}return this}};function Fy(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=q_(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Vy(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let f=e;f<i;f+=e){let u=s[f],m=s[f+1];u<a&&(a=u),m<l&&(l=m),u>h&&(h=u),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return il(r,o,e,a,l,c,0),o}function q_(s,t,e,n,i){let r;if(i===jy(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=jg(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=jg(o/n|0,s[o],s[o+1],r);return r&&zo(r,r.next)&&(rl(r),r=r.next),r}function zr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(zo(e,e.next)||ze(e.prev,e,e.next)===0)){if(rl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function il(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Yy(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?zy(s,n,i,r):By(s)){t.push(l.i,s.i,c.i),rl(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=ky(zr(s),t),il(s,t,e,n,i,r,2)):o===2&&Gy(s,t,e,n,i,r):il(zr(s),t,e,n,i,r,1);break}}}function By(s){let t=s.prev,e=s,n=s.next;if(ze(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),f=Math.max(i,r,o),u=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=u&&Oa(i,a,r,l,o,c,m.x,m.y)&&ze(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function zy(s,t,e,n){let i=s.prev,r=s,o=s.next;if(ze(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(a,l,c),m=Math.min(h,d,f),_=Math.max(a,l,c),p=Math.max(h,d,f),g=pd(u,m,t,e,n),y=pd(_,p,t,e,n),b=s.prevZ,v=s.nextZ;for(;b&&b.z>=g&&v&&v.z<=y;){if(b.x>=u&&b.x<=_&&b.y>=m&&b.y<=p&&b!==i&&b!==o&&Oa(a,h,l,d,c,f,b.x,b.y)&&ze(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=u&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&Oa(a,h,l,d,c,f,v.x,v.y)&&ze(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=g;){if(b.x>=u&&b.x<=_&&b.y>=m&&b.y<=p&&b!==i&&b!==o&&Oa(a,h,l,d,c,f,b.x,b.y)&&ze(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=y;){if(v.x>=u&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&Oa(a,h,l,d,c,f,v.x,v.y)&&ze(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ky(s,t){let e=s;do{let n=e.prev,i=e.next.next;!zo(n,i)&&Z_(n,e,e.next,i)&&sl(n,i)&&sl(i,n)&&(t.push(n.i,e.i,i.i),rl(e),rl(e.next),e=s=i),e=e.next}while(e!==s);return zr(e)}function Gy(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$y(o,a)){let l=J_(o,a);o=zr(o,o.next),l=zr(l,l.next),il(o,t,e,n,i,r,0),il(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Vy(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=q_(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Jy(c))}i.sort(Hy);for(let r=0;r<i.length;r++)e=Wy(i[r],e);return e}function Hy(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Wy(s,t){let e=Xy(s,t);if(!e)return t;let n=J_(e,s);return zr(n,n.next),zr(e,e.next)}function Xy(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(zo(s,e))return e;do{if(zo(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Y_(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);sl(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&qy(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function qy(s,t){return ze(s.prev,s,t.prev)<0&&ze(t.next,s,s.next)<0}function Yy(s,t,e,n){let i=s;do i.z===0&&(i.z=pd(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Zy(i)}function Zy(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function pd(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Jy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Y_(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Oa(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Y_(s,t,e,n,i,r,o,a)}function $y(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Ky(s,t)&&(sl(s,t)&&sl(t,s)&&Qy(s,t)&&(ze(s.prev,s,t.prev)||ze(s,t.prev,t))||zo(s,t)&&ze(s.prev,s,s.next)>0&&ze(t.prev,t,t.next)>0)}function ze(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function zo(s,t){return s.x===t.x&&s.y===t.y}function Z_(s,t,e,n){let i=Fc(ze(s,t,e)),r=Fc(ze(s,t,n)),o=Fc(ze(e,n,s)),a=Fc(ze(e,n,t));return!!(i!==r&&o!==a||i===0&&Oc(s,e,t)||r===0&&Oc(s,n,t)||o===0&&Oc(e,s,n)||a===0&&Oc(e,t,n))}function Oc(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Fc(s){return s>0?1:s<0?-1:0}function Ky(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Z_(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function sl(s,t){return ze(s.prev,s,s.next)<0?ze(s,t,s.next)>=0&&ze(s,s.prev,t)>=0:ze(s,t,s.prev)<0||ze(s,s.next,t)<0}function Qy(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function J_(s,t){let e=md(s.i,s.x,s.y),n=md(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function jg(s,t,e,n){let i=md(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function rl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function md(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jy(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var gd=class{static triangulate(t,e,n=2){return Fy(t,e,n)}},Ur=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];t_(t),e_(n,t);let o=t.length;e.forEach(t_);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,e_(n,e[l]);let a=gd.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function t_(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function e_(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ol=class s extends Qi{constructor(t=new Bo([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Wn(i,3)),this.setAttribute("uv",new Wn(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:tS,b,v=!1,S,E,x,M;if(g){b=g.getSpacedPoints(h),v=!0,f=!1;let j=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,j),E=new J,x=new J,M=new J}f||(p=0,u=0,m=0,_=0);let P=a.extractPoints(c),A=P.shape,N=P.holes;if(!Ur.isClockWise(A)){A=A.reverse();for(let j=0,pt=N.length;j<pt;j++){let gt=N[j];Ur.isClockWise(gt)&&(N[j]=gt.reverse())}}function H(j){let gt=10000000000000001e-36,G=j[0];for(let St=1;St<=j.length;St++){let qt=St%j.length,Ft=j[qt],Ht=Ft.x-G.x,jt=Ft.y-G.y,se=Ht*Ht+jt*jt,z=Math.max(Math.abs(Ft.x),Math.abs(Ft.y),Math.abs(G.x),Math.abs(G.y)),le=gt*z*z;if(se<=le){j.splice(qt,1),St--;continue}G=Ft}}H(A),N.forEach(H);let L=N.length,k=A;for(let j=0;j<L;j++){let pt=N[j];A=A.concat(pt)}function V(j,pt,gt){return pt||Kt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(pt,gt)}let I=A.length;function X(j,pt,gt){let G,St,qt,Ft=j.x-pt.x,Ht=j.y-pt.y,jt=gt.x-j.x,se=gt.y-j.y,z=Ft*Ft+Ht*Ht,le=Ft*se-Ht*jt;if(Math.abs(le)>Number.EPSILON){let Qt=Math.sqrt(z),$t=Math.sqrt(jt*jt+se*se),bt=pt.x-Ht/Qt,ge=pt.y+Ft/Qt,kt=gt.x-se/$t,Yt=gt.y+jt/$t,R=((kt-bt)*se-(Yt-ge)*jt)/(Ft*se-Ht*jt);G=bt+Ft*R-j.x,St=ge+Ht*R-j.y;let w=G*G+St*St;if(w<=2)return new Dt(G,St);qt=Math.sqrt(w/2)}else{let Qt=!1;Ft>Number.EPSILON?jt>Number.EPSILON&&(Qt=!0):Ft<-Number.EPSILON?jt<-Number.EPSILON&&(Qt=!0):Math.sign(Ht)===Math.sign(se)&&(Qt=!0),Qt?(G=-Ht,St=Ft,qt=Math.sqrt(z)):(G=Ft,St=Ht,qt=Math.sqrt(z/2))}return new Dt(G/qt,St/qt)}let B=[];for(let j=0,pt=k.length,gt=pt-1,G=j+1;j<pt;j++,gt++,G++)gt===pt&&(gt=0),G===pt&&(G=0),B[j]=X(k[j],k[gt],k[G]);let C=[],W,xt=B.concat();for(let j=0,pt=L;j<pt;j++){let gt=N[j];W=[];for(let G=0,St=gt.length,qt=St-1,Ft=G+1;G<St;G++,qt++,Ft++)qt===St&&(qt=0),Ft===St&&(Ft=0),W[G]=X(gt[G],gt[qt],gt[Ft]);C.push(W),xt=xt.concat(W)}let ft;if(p===0)ft=Ur.triangulateShape(k,N);else{let j=[],pt=[];for(let gt=0;gt<p;gt++){let G=gt/p,St=u*Math.cos(G*Math.PI/2),qt=m*Math.sin(G*Math.PI/2)+_;for(let Ft=0,Ht=k.length;Ft<Ht;Ft++){let jt=V(k[Ft],B[Ft],qt);Q(jt.x,jt.y,-St),G===0&&j.push(jt)}for(let Ft=0,Ht=L;Ft<Ht;Ft++){let jt=N[Ft];W=C[Ft];let se=[];for(let z=0,le=jt.length;z<le;z++){let Qt=V(jt[z],W[z],qt);Q(Qt.x,Qt.y,-St),G===0&&se.push(Qt)}G===0&&pt.push(se)}}ft=Ur.triangulateShape(j,pt)}let q=ft.length,nt=m+_;for(let j=0;j<I;j++){let pt=f?V(A[j],xt[j],nt):A[j];v?(x.copy(S.normals[0]).multiplyScalar(pt.x),E.copy(S.binormals[0]).multiplyScalar(pt.y),M.copy(b[0]).add(x).add(E),Q(M.x,M.y,M.z)):Q(pt.x,pt.y,0)}for(let j=1;j<=h;j++)for(let pt=0;pt<I;pt++){let gt=f?V(A[pt],xt[pt],nt):A[pt];v?(x.copy(S.normals[j]).multiplyScalar(gt.x),E.copy(S.binormals[j]).multiplyScalar(gt.y),M.copy(b[j]).add(x).add(E),Q(M.x,M.y,M.z)):Q(gt.x,gt.y,d/h*j)}for(let j=p-1;j>=0;j--){let pt=j/p,gt=u*Math.cos(pt*Math.PI/2),G=m*Math.sin(pt*Math.PI/2)+_;for(let St=0,qt=k.length;St<qt;St++){let Ft=V(k[St],B[St],G);Q(Ft.x,Ft.y,d+gt)}for(let St=0,qt=N.length;St<qt;St++){let Ft=N[St];W=C[St];for(let Ht=0,jt=Ft.length;Ht<jt;Ht++){let se=V(Ft[Ht],W[Ht],G);v?Q(se.x,se.y+b[h-1].y,b[h-1].x+gt):Q(se.x,se.y,d+gt)}}}vt(),Rt();function vt(){let j=i.length/3;if(f){let pt=0,gt=I*pt;for(let G=0;G<q;G++){let St=ft[G];ut(St[2]+gt,St[1]+gt,St[0]+gt)}pt=h+p*2,gt=I*pt;for(let G=0;G<q;G++){let St=ft[G];ut(St[0]+gt,St[1]+gt,St[2]+gt)}}else{for(let pt=0;pt<q;pt++){let gt=ft[pt];ut(gt[2],gt[1],gt[0])}for(let pt=0;pt<q;pt++){let gt=ft[pt];ut(gt[0]+I*h,gt[1]+I*h,gt[2]+I*h)}}n.addGroup(j,i.length/3-j,0)}function Rt(){let j=i.length/3,pt=0;O(k,pt),pt+=k.length;for(let gt=0,G=N.length;gt<G;gt++){let St=N[gt];O(St,pt),pt+=St.length}n.addGroup(j,i.length/3-j,1)}function O(j,pt){let gt=j.length;for(;--gt>=0;){let G=gt,St=gt-1;St<0&&(St=j.length-1);for(let qt=0,Ft=h+p*2;qt<Ft;qt++){let Ht=I*qt,jt=I*(qt+1),se=pt+G+Ht,z=pt+St+Ht,le=pt+St+jt,Qt=pt+G+jt;st(se,z,le,Qt)}}}function Q(j,pt,gt){l.push(j),l.push(pt),l.push(gt)}function ut(j,pt,gt){ht(j),ht(pt),ht(gt);let G=i.length/3,St=y.generateTopUV(n,i,G-3,G-2,G-1);dt(St[0]),dt(St[1]),dt(St[2])}function st(j,pt,gt,G){ht(j),ht(pt),ht(G),ht(pt),ht(gt),ht(G);let St=i.length/3,qt=y.generateSideWallUV(n,i,St-6,St-3,St-2,St-1);dt(qt[0]),dt(qt[1]),dt(qt[3]),dt(qt[1]),dt(qt[2]),dt(qt[3])}function ht(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function dt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return eS(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new dd[i.type]().fromJSON(i)),new s(n,t.options)}},tS={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Dt(r,o),new Dt(a,l),new Dt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[i*3],u=t[i*3+1],m=t[i*3+2],_=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Dt(o,1-l),new Dt(c,1-d),new Dt(f,1-m),new Dt(_,1-g)]:[new Dt(a,1-l),new Dt(h,1-d),new Dt(u,1-m),new Dt(p,1-g)]}};function eS(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var bs=class s extends Qi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let y=g*f-o;for(let b=0;b<c;b++){let v=b*d-r;m.push(v,-y,0),_.push(0,0,1),p.push(b/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let b=y+c*g,v=y+c*(g+1),S=y+1+c*(g+1),E=y+1+c*g;u.push(b,v,E),u.push(v,S,E)}this.setIndex(u),this.setAttribute("position",new Wn(m,3)),this.setAttribute("normal",new Wn(_,3)),this.setAttribute("uv",new Wn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};function Xr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(n_(i))i.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(n_(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Nn(s){let t={};for(let e=0;e<s.length;e++){let n=Xr(s[e]);for(let i in n)t[i]=n[i]}return t}function n_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function nS(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var $_={clone:Xr,merge:Nn},iS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends js{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iS,this.fragmentShader=sS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xr(t.uniforms),this.uniformsGroups=nS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(i.value);break;case"v2":this.uniforms[n].value=new Dt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new J().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ge().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},uh=class extends di{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fh=class extends js{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},kr=class extends fh{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Or('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Or('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var dh=class extends js{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ph=class extends js{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ao(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Bc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var er=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mh=class extends er{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hd,endingEnd:hd}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ud:r=t,a=2*e-n;break;case fd:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ud:o=t,l=2*n-e;break;case fd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,y=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,b=(-1-u)*p+(1.5+u)*_+.5*m,v=u*p-u*_;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+y*o[c+S]+b*o[l+S]+v*o[d+S];return r}},gh=class extends er{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},_h=class extends er{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},xh=class extends er{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let f=a*2,u=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=u*f+m*2,y=d[g],b=d[g+1],v=t*f+m*2,S=h[v],E=h[v+1],x=oS(n,e,y,S,i);r[m]=K_(x,_,b,E,p)}return r}};function K_(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function rS(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function oS(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=K_(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=rS(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var pi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ao(e,this.TimeBufferType),this.values=Ao(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ao(t.times,Array),values:Ao(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Bc(t.settings)&&(n.settings={inTangents:Ao(t.settings.inTangents,Array),outTangents:Ao(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case za:e=this.InterpolantFactoryMethodDiscrete;break;case Kc:e=this.InterpolantFactoryMethodLinear;break;case Gc:e=this.InterpolantFactoryMethodSmooth;break;case cd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return za;case this.InterpolantFactoryMethodLinear:return Kc;case this.InterpolantFactoryMethodSmooth:return Gc;case this.InterpolantFactoryMethodBezier:return cd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Bc(this.settings)&&(i_(this.settings.inTangents,t),i_(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Bc(this.settings)&&(s_(this.settings.inTangents,t),s_(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&ly(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[f+m]||_!==e[u+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Bc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function i_(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function s_(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Kc;var nr=class extends pi{constructor(t,e,n){super(t,e,n)}};nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=za;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};vh.prototype.ValueTypeName="color";var yh=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};yh.prototype.ValueTypeName="number";var Sh=class extends er{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ki.slerpFlat(r,0,o,c-a,o,c,l);return r}},al=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Sh(this.times,this.values,this.getValueSize(),t)}};al.prototype.ValueTypeName="quaternion";al.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends pi{constructor(t,e,n){super(t,e,n)}};ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=za;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Mh=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};Mh.prototype.ValueTypeName="vector";var bh=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Q_=new bh,wh=class{constructor(t){this.manager=t!==void 0?t:Q_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};wh.DEFAULT_MATERIAL_NAME="__DEFAULT";var zc=new J,kc=new Ki,Yi=new J,ll=class extends Ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zc,kc,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,kc,Yi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(zc,kc,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,kc,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Js=new J,r_=new Dt,o_=new Dt,xn=class extends ll{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Js.x,Js.y).multiplyScalar(-t/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Js.x,Js.y).multiplyScalar(-t/Js.z)}getViewSize(t,e){return this.getViewBounds(t,r_,o_),e.subVectors(o_,r_)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zf*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Th=class extends ll{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Co=-90,Ro=1,ko=class extends Ei{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new xn(Co,Ro,t,e);i.layers=this.layers,this.add(i);let r=new xn(Co,Ro,t,e);r.layers=this.layers,this.add(r);let o=new xn(Co,Ro,t,e);o.layers=this.layers,this.add(o);let a=new xn(Co,Ro,t,e);a.layers=this.layers,this.add(a);let l=new xn(Co,Ro,t,e);l.layers=this.layers,this.add(l);let c=new xn(Co,Ro,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Va)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Eh=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Jd="\\[\\]\\.:\\/",aS=new RegExp("["+Jd+"]","g"),$d="[^"+Jd+"]",lS="[^"+Jd.replace("\\.","")+"]",cS=/((?:WC+[\/:])*)/.source.replace("WC",$d),hS=/(WCOD+)?/.source.replace("WCOD",lS),uS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$d),fS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$d),dS=new RegExp("^"+cS+hS+uS+fS+"$"),pS=["material","materials","bones","map"],_d=class{constructor(t,e,n){let i=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(aS,"")}static parseTrackName(t){let e=dS.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);pS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=_d;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z1=new Float32Array(1);var np=class np{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};np.prototype.isMatrix2=!0;var xd=np;function Kd(s,t,e,n){let i=mS(n);switch(e){case Bd:return s*t;case kd:return s*t/i.components*i.byteLength;case Nh:return s*t/i.components*i.byteLength;case rr:return s*t*2/i.components*i.byteLength;case Uh:return s*t*2/i.components*i.byteLength;case zd:return s*t*3/i.components*i.byteLength;case zi:return s*t*4/i.components*i.byteLength;case Oh:return s*t*4/i.components*i.byteLength;case ul:case fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case dl:case pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bh:case kh:return Math.max(s,16)*Math.max(t,8)/4;case Fh:case zh:return Math.max(s,8)*Math.max(t,8)/2;case Gh:case Vh:case Wh:case Xh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hh:case ml:case qh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case tu:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case eu:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case nu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case iu:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case su:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ru:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ou:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case au:case lu:case cu:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hu:case uu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case gl:case fu:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mS(s){switch(s){case mi:case Nd:return{byteLength:1,components:1};case Wo:case Ud:case Bi:return{byteLength:2,components:1};case Lh:case Dh:return{byteLength:2,components:4};case Oi:case Ih:case Fi:return{byteLength:4,components:1};case Od:case Fd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function y0(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function wS(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],_=d[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let _=d[u];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var TS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ES=`#ifdef USE_ALPHAHASH
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
#endif`,AS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IS=`#ifdef USE_AOMAP
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
#endif`,LS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DS=`#ifdef USE_BATCHING
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
#endif`,NS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,US=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BS=`#ifdef USE_IRIDESCENCE
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
#endif`,zS=`#ifdef USE_BUMPMAP
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
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,YS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ZS=`#define PI 3.141592653589793
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
} // validated`,JS=`vec3 transformedNormal = objectNormal;
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
#endif`,$S=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",eM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uM=`#ifdef USE_GRADIENTMAP
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
}`,fM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gM=`#ifdef USE_ENVMAP
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
#endif`,_M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SM=`PhysicalMaterial material;
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
#endif`,MM=`uniform sampler2D dfgLUT;
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
}`,bM=`
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
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
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,AM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NM=`#if defined( USE_POINTS_UV )
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
#endif`,UM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BM=`#if defined( USE_MORPHCOLORS )
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
#endif`,zM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`#ifdef USE_MORPHTARGETS
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
#endif`,GM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,YM=`#ifdef USE_NORMALMAP
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
#endif`,ZM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cb=`float getShadowMask() {
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
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,db=`#ifdef USE_SKINNING
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
#endif`,pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_b=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xb=`#ifdef USE_TRANSMISSION
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
#endif`,vb=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tb=`uniform sampler2D t2D;
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`uniform float backgroundBlurriness;
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
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
}`,Ib=`#if DEPTH_PACKING == 3200
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
}`,Lb=`#define DISTANCE
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
}`,Db=`#define DISTANCE
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,zb=`uniform vec3 diffuse;
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
}`,kb=`#define LAMBERT
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
}`,Gb=`#define LAMBERT
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
}`,Vb=`#define MATCAP
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
}`,Hb=`#define MATCAP
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
}`,Wb=`#define NORMAL
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
}`,Xb=`#define NORMAL
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
}`,qb=`#define PHONG
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
}`,Yb=`#define PHONG
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
}`,Zb=`#define STANDARD
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
}`,Jb=`#define STANDARD
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
}`,$b=`#define TOON
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
}`,Kb=`#define TOON
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
}`,Qb=`uniform float size;
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
}`,jb=`uniform vec3 diffuse;
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
}`,tw=`#include <common>
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
}`,ew=`uniform vec3 color;
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
}`,nw=`uniform float rotation;
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
}`,iw=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:TS,alphahash_pars_fragment:ES,alphamap_fragment:AS,alphamap_pars_fragment:CS,alphatest_fragment:RS,alphatest_pars_fragment:PS,aomap_fragment:IS,aomap_pars_fragment:LS,batching_pars_vertex:DS,batching_vertex:NS,begin_vertex:US,beginnormal_vertex:OS,bsdfs:FS,iridescence_fragment:BS,bumpmap_pars_fragment:zS,clipping_planes_fragment:kS,clipping_planes_pars_fragment:GS,clipping_planes_pars_vertex:VS,clipping_planes_vertex:HS,color_fragment:WS,color_pars_fragment:XS,color_pars_vertex:qS,color_vertex:YS,common:ZS,defaultnormal_vertex:JS,displacementmap_pars_vertex:$S,displacementmap_vertex:KS,emissivemap_fragment:QS,emissivemap_pars_fragment:jS,colorspace_fragment:tM,colorspace_pars_fragment:eM,envmap_fragment:nM,envmap_common_pars_fragment:iM,envmap_pars_fragment:sM,envmap_pars_vertex:rM,envmap_physical_pars_fragment:gM,envmap_vertex:oM,fog_vertex:aM,fog_pars_vertex:lM,fog_fragment:cM,fog_pars_fragment:hM,gradientmap_pars_fragment:uM,lightmap_pars_fragment:fM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:pM,lights_pars_begin:mM,lights_toon_fragment:_M,lights_toon_pars_fragment:xM,lights_phong_fragment:vM,lights_phong_pars_fragment:yM,lights_physical_fragment:SM,lights_physical_pars_fragment:MM,lights_fragment_begin:bM,lights_fragment_maps:wM,lights_fragment_end:TM,lightprobes_pars_fragment:EM,logdepthbuf_fragment:AM,logdepthbuf_pars_fragment:CM,logdepthbuf_pars_vertex:RM,logdepthbuf_vertex:PM,map_fragment:IM,map_pars_fragment:LM,map_particle_fragment:DM,map_particle_pars_fragment:NM,metalnessmap_fragment:UM,metalnessmap_pars_fragment:OM,morphinstance_vertex:FM,morphcolor_vertex:BM,morphnormal_vertex:zM,morphtarget_pars_vertex:kM,morphtarget_vertex:GM,normal_fragment_begin:VM,normal_fragment_maps:HM,normal_pars_fragment:WM,normal_pars_vertex:XM,normal_vertex:qM,normalmap_pars_fragment:YM,clearcoat_normal_fragment_begin:ZM,clearcoat_normal_fragment_maps:JM,clearcoat_pars_fragment:$M,iridescence_pars_fragment:KM,opaque_fragment:QM,packing:jM,premultiplied_alpha_fragment:tb,project_vertex:eb,dithering_fragment:nb,dithering_pars_fragment:ib,roughnessmap_fragment:sb,roughnessmap_pars_fragment:rb,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:ab,shadowmap_vertex:lb,shadowmask_pars_fragment:cb,skinbase_vertex:hb,skinning_pars_vertex:ub,skinning_vertex:fb,skinnormal_vertex:db,specularmap_fragment:pb,specularmap_pars_fragment:mb,tonemapping_fragment:gb,tonemapping_pars_fragment:_b,transmission_fragment:xb,transmission_pars_fragment:vb,uv_pars_fragment:yb,uv_pars_vertex:Sb,uv_vertex:Mb,worldpos_vertex:bb,background_vert:wb,background_frag:Tb,backgroundCube_vert:Eb,backgroundCube_frag:Ab,cube_vert:Cb,cube_frag:Rb,depth_vert:Pb,depth_frag:Ib,distance_vert:Lb,distance_frag:Db,equirect_vert:Nb,equirect_frag:Ub,linedashed_vert:Ob,linedashed_frag:Fb,meshbasic_vert:Bb,meshbasic_frag:zb,meshlambert_vert:kb,meshlambert_frag:Gb,meshmatcap_vert:Vb,meshmatcap_frag:Hb,meshnormal_vert:Wb,meshnormal_frag:Xb,meshphong_vert:qb,meshphong_frag:Yb,meshphysical_vert:Zb,meshphysical_frag:Jb,meshtoon_vert:$b,meshtoon_frag:Kb,points_vert:Qb,points_frag:jb,shadow_vert:tw,shadow_frag:ew,sprite_vert:nw,sprite_frag:iw},Nt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},ts={basic:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Nn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Nn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new te(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Nn([Nt.points,Nt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Nn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Nn([Nt.common,Nt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Nn([Nt.sprite,Nt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:Nn([Nt.common,Nt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:Nn([Nt.lights,Nt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};ts.physical={uniforms:Nn([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var pu={r:0,b:0,g:0},sw=new ke,S0=new ee;S0.set(-1,0,0,0,1,0,0,0,1);function rw(s,t,e,n,i,r){let o=new te(0),a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let v=y.backgroundBlurriness>0;b=t.get(b,v)}return b}function m(y){let b=!1,v=u(y);v===null?p(o,a):v&&v.isColor&&(p(v,1),b=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,b){let v=u(b);v&&v.isCubeTexture?(c===void 0&&(c=new Dn(new tr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Xr(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sw.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(S0),c.material.toneMapped=me.getTransfer(v.colorSpace)!==be,(h!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Dn(new bs(2,2),new di({name:"BackgroundMaterial",uniforms:Xr(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=me.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,b){y.getRGB(pu,Zd(s)),e.buffers.color.setClear(pu.r,pu.g,pu.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:_,dispose:g}}function ow(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(N,D,H,L,k){let V=!1,I=d(N,L,H,D);r!==I&&(r=I,c(r.object)),V=u(N,L,H,k),V&&m(N,L,H,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(N,D,H,L),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,D,H,L){let k=L.wireframe===!0,V=n[D.id];V===void 0&&(V={},n[D.id]=V);let I=N.isInstancedMesh===!0?N.id:0,X=V[I];X===void 0&&(X={},V[I]=X);let B=X[H.id];B===void 0&&(B={},X[H.id]=B);let C=B[k];return C===void 0&&(C=f(l()),B[k]=C),C}function f(N){let D=[],H=[],L=[];for(let k=0;k<e;k++)D[k]=0,H[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:L,object:N,attributes:{},index:null}}function u(N,D,H,L){let k=r.attributes,V=D.attributes,I=0,X=H.getAttributes();for(let B in X)if(X[B].location>=0){let W=k[B],xt=V[B];if(xt===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(xt=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(xt=N.instanceColor)),W===void 0||W.attribute!==xt||xt&&W.data!==xt.data)return!0;I++}return r.attributesNum!==I||r.index!==L}function m(N,D,H,L){let k={},V=D.attributes,I=0,X=H.getAttributes();for(let B in X)if(X[B].location>=0){let W=V[B];W===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(W=N.instanceColor));let xt={};xt.attribute=W,W&&W.data&&(xt.data=W.data),k[B]=xt,I++}r.attributes=k,r.attributesNum=I,r.index=L}function _(){let N=r.newAttributes;for(let D=0,H=N.length;D<H;D++)N[D]=0}function p(N){g(N,0)}function g(N,D){let H=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;H[N]=1,L[N]===0&&(s.enableVertexAttribArray(N),L[N]=1),k[N]!==D&&(s.vertexAttribDivisor(N,D),k[N]=D)}function y(){let N=r.newAttributes,D=r.enabledAttributes;for(let H=0,L=D.length;H<L;H++)D[H]!==N[H]&&(s.disableVertexAttribArray(H),D[H]=0)}function b(N,D,H,L,k,V,I){I===!0?s.vertexAttribIPointer(N,D,H,k,V):s.vertexAttribPointer(N,D,H,L,k,V)}function v(N,D,H,L){_();let k=L.attributes,V=H.getAttributes(),I=D.defaultAttributeValues;for(let X in V){let B=V[X];if(B.location>=0){let C=k[X];if(C===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(C=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(C=N.instanceColor)),C!==void 0){let W=C.normalized,xt=C.itemSize,ft=t.get(C);if(ft===void 0)continue;let q=ft.buffer,nt=ft.type,vt=ft.bytesPerElement,Rt=nt===s.INT||nt===s.UNSIGNED_INT||C.gpuType===Ih;if(C.isInterleavedBufferAttribute){let O=C.data,Q=O.isInterleavedBuffer===!0?O.stride:O.itemSize,ut=C.offset;if(O.isInstancedInterleavedBuffer||O.isInstancedBufferAttribute){for(let st=0;st<B.locationSize;st++)g(B.location+st,O.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let st=0;st<B.locationSize;st++)p(B.location+st);s.bindBuffer(s.ARRAY_BUFFER,q);for(let st=0;st<B.locationSize;st++)b(B.location+st,xt/B.locationSize,nt,W,Q*vt,(ut+xt/B.locationSize*st)*vt,Rt)}else{if(C.isInstancedBufferAttribute){for(let O=0;O<B.locationSize;O++)g(B.location+O,C.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let O=0;O<B.locationSize;O++)p(B.location+O);s.bindBuffer(s.ARRAY_BUFFER,q);for(let O=0;O<B.locationSize;O++)b(B.location+O,xt/B.locationSize,nt,W,xt*vt,xt/B.locationSize*O*vt,Rt)}}else if(I!==void 0){let W=I[X];if(W!==void 0)switch(W.length){case 2:s.vertexAttrib2fv(B.location,W);break;case 3:s.vertexAttrib3fv(B.location,W);break;case 4:s.vertexAttrib4fv(B.location,W);break;default:s.vertexAttrib1fv(B.location,W)}}}}y()}function S(){P();for(let N in n){let D=n[N];for(let H in D){let L=D[H];for(let k in L){let V=L[k];for(let I in V)h(V[I].object),delete V[I];delete L[k]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let H in D){let L=D[H];for(let k in L){let V=L[k];for(let I in V)h(V[I].object),delete V[I];delete L[k]}}delete n[N.id]}function x(N){for(let D in n){let H=n[D];for(let L in H){let k=H[L];if(k[N.id]===void 0)continue;let V=k[N.id];for(let I in V)h(V[I].object),delete V[I];delete k[N.id]}}}function M(N){for(let D in n){let H=n[D],L=N.isInstancedMesh===!0?N.id:0,k=H[L];if(k!==void 0){for(let V in k){let I=k[V];for(let X in I)h(I[X].object),delete I[X];delete k[V]}delete H[L],Object.keys(H).length===0&&delete n[D]}}}function P(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function aw(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function lw(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==zi&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==mi&&x!==Fi&&!M&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,maxSamples:S,samples:E}}function cw(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Ni,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,b=y*4,v=g.clippingState||null;l.value=v,v=h(m,f,b,u);for(let S=0;S!==b;++S)v[S]=e[S];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=u+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,v=u;b!==_;++b,v+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var vl=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Za(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new tr(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Gr});r.uniforms.tEquirect.value=e;let o=new Dn(i,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=vn),new ko(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},j_=256,hw=3,uw=20,M0=256,b0=16,fw=3,dw=new J,pw=new te,Yo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ko(1,10,null),this._boxMesh=new Dn(new tr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=dw}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(pw));let p=new ko(n,i,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(j_,W_(t))}_fromTexture(t,e){t.mapping===Hr||t.mapping===Ho?this._setSize(t.image.length===0?j_:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=t0(t,!1,!1),n=Math.log2(t)-hw;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=t0(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Hr||t.mapping===Ho?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=e0()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=mw(),this._integrationMaterial=gw());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/b0);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-fw)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(M0*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=_w());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function t0(s,t,e){return new vl(s,{minFilter:Ui,generateMipmaps:t,type:Bi,colorSpace:ka,depthBuffer:e})}function yl(s,t,e){return new di({name:s,uniforms:t,vertexShader:ae.cube_vert,fragmentShader:e,side:yn,blending:Gr,depthTest:!1,depthWrite:!1})}function mw(){return yl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${M0}u

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
	`)}function gw(){return yl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:b0}},`

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
	`)}function _w(){return yl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${uw}
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
	`)}function e0(){return yl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function n0(){return yl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xw(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Ch||u===Rh)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new vl(m.height);return _.fromEquirectangularTexture(s,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===Ch||u===Rh,_=u===Hr||u===Ho;if(m||_){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Yo(s)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let y=f.image;return m&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Yo(s)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,u){return u===Ch?f.mapping=Hr:u===Rh&&(f.mapping=Ho),f}function l(f){let u=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function vw(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Or("WebGLRenderer: "+n+" extension not supported."),i}}}function yw(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],s.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let y=_!==null?_.array.length:p.array.length/3-1,b=p.count>=65535?Ya:qa,v=new b(Math.ceil(y/3)*6,1),S=v.array;if(_!==null){let x=_.array;g=_.version;for(let M=0,P=0;M<y;M+=3){let A=x[M+0],N=x[M+1],D=x[M+2];S[P++]=A,S[P++]=N,S[P++]=N,S[P++]=D,S[P++]=D,S[P++]=A}}else{g=p.version;for(let x=0,M=0;x<y;x+=3){let P=x+0,A=x+1,N=x+2;S[M++]=P,S[M++]=A,S[M++]=A,S[M++]=N,S[M++]=N,S[M++]=P}}v.version=g;let E=r.get(m);E&&t.remove(E),r.set(m,v)}function f(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function u(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function Sw(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let _=0;for(let p=0;p<u;p++)_+=f[p];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Mw(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function bw(s,t,e){let n=new WeakMap,i=new Ge;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;u===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*S*4*d),x=new Wa(E,v,S,d);x.type=Fi,x.needsUpdate=!0;let M=b*4;for(let A=0;A<d;A++){let N=p[A],D=g[A],H=y[A],L=v*S*4*A;for(let k=0;k<N.count;k++){let V=k*M;u===!0&&(i.fromBufferAttribute(N,k),E[L+V+0]=i.x,E[L+V+1]=i.y,E[L+V+2]=i.z,E[L+V+3]=0),m===!0&&(i.fromBufferAttribute(D,k),E[L+V+4]=i.x,E[L+V+5]=i.y,E[L+V+6]=i.z,E[L+V+7]=0),_===!0&&(i.fromBufferAttribute(H,k),E[L+V+8]=i.x,E[L+V+9]=i.y,E[L+V+10]=i.z,E[L+V+11]=H.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new Dt(v,S)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function ww(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Tw={[Ed]:"LINEAR_TONE_MAPPING",[Ad]:"REINHARD_TONE_MAPPING",[Cd]:"CINEON_TONE_MAPPING",[Rd]:"ACES_FILMIC_TONE_MAPPING",[Id]:"AGX_TONE_MAPPING",[Ld]:"NEUTRAL_TONE_MAPPING",[Pd]:"CUSTOM_TONE_MAPPING"};function Ew(s,t,e,n,i,r){let o=new ui(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Qi;h.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Wn([0,2,0,0,2,0],2));let d=new uh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Dn(h,d),u=new Th(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,y=null,b=[],v=!1;this.setSize=function(S,E){o.setSize(S,E),a!==null&&a.setSize(S,E),l!==null&&l.setSize(S,E);for(let x=0;x<b.length;x++){let M=b[x];M.setSize&&M.setSize(S,E)}},this.setEffects=function(S){b=S,v=b.length>0&&b[0].isRenderPass===!0;let E=o.width,x=o.height;b.length>0&&a===null&&(a=new ui(E,x,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),l=new ui(E,x,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&b.some(P=>P.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new Ms(E,x),r===!0&&(c.format=ws,c.type=Wr)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let P=0;P<b.length;P++){let A=b[P];A.setSize&&A.setSize(E,x),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,E){if(p||S.toneMapping===Qn&&b.length===0)return!1;if(y=E,E!==null){let x=E.width,M=E.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return v===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=Qn,!0},this.hasRenderPass=function(){return v},this.end=function(S,E){S.toneMapping=g,p=!0;let x=o,M=a;for(let P=0;P<b.length;P++){let A=b[P];A.enabled!==!1&&(A.render(S,M,x,E),A.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(m!==S.outputColorSpace||_!==S.toneMapping){m=S.outputColorSpace,_=S.toneMapping,d.defines={},me.getTransfer(m)===be&&(d.defines.SRGB_TRANSFER="");let P=Tw[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(y),S.render(f,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var w0=new Xn,T0=new Ms(1,1),E0=new $a(1),A0=new Wa,C0=new eh,R0=new Za,i0=[],s0=[],r0=new Float32Array(16),o0=new Float32Array(9),a0=new Float32Array(4);function Jo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=i0[i];if(r===void 0&&(r=new Float32Array(i),i0[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function an(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ln(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function gu(s,t){let e=s0[t];e===void 0&&(e=new Int32Array(t),s0[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Aw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Cw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2fv(this.addr,t),ln(e,t)}}function Rw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;s.uniform3fv(this.addr,t),ln(e,t)}}function Pw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4fv(this.addr,t),ln(e,t)}}function Iw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;a0.set(n),s.uniformMatrix2fv(this.addr,!1,a0),ln(e,n)}}function Lw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;o0.set(n),s.uniformMatrix3fv(this.addr,!1,o0),ln(e,n)}}function Dw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;r0.set(n),s.uniformMatrix4fv(this.addr,!1,r0),ln(e,n)}}function Nw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Uw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2iv(this.addr,t),ln(e,t)}}function Ow(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;s.uniform3iv(this.addr,t),ln(e,t)}}function Fw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4iv(this.addr,t),ln(e,t)}}function Bw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function zw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2uiv(this.addr,t),ln(e,t)}}function kw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;s.uniform3uiv(this.addr,t),ln(e,t)}}function Gw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4uiv(this.addr,t),ln(e,t)}}function _u(s){return s.version===0&&(s.compareFunction=Hd,s.needsUpdate=!0),s}function Vw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=_u(T0):r=w0,e.setTexture2D(t||r,i)}function Hw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||C0,i)}function Ww(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=_u(E0):r=R0,e.setTextureCube(t||r,i)}function Xw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||A0,i)}function qw(s){switch(s){case 5126:return Aw;case 35664:return Cw;case 35665:return Rw;case 35666:return Pw;case 35674:return Iw;case 35675:return Lw;case 35676:return Dw;case 5124:case 35670:return Nw;case 35667:case 35671:return Uw;case 35668:case 35672:return Ow;case 35669:case 35673:return Fw;case 5125:return Bw;case 36294:return zw;case 36295:return kw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Vw;case 35679:case 36299:case 36307:return Hw;case 35680:case 36300:case 36308:case 36293:return Ww;case 36289:case 36303:case 36311:case 36292:return Xw}}function Yw(s,t){s.uniform1fv(this.addr,t)}function Zw(s,t){let e=Jo(t,this.size,2);s.uniform2fv(this.addr,e)}function Jw(s,t){let e=Jo(t,this.size,3);s.uniform3fv(this.addr,e)}function $w(s,t){let e=Jo(t,this.size,4);s.uniform4fv(this.addr,e)}function Kw(s,t){let e=Jo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Qw(s,t){let e=Jo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function jw(s,t){let e=Jo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function tT(s,t){s.uniform1iv(this.addr,t)}function eT(s,t){s.uniform2iv(this.addr,t)}function nT(s,t){s.uniform3iv(this.addr,t)}function iT(s,t){s.uniform4iv(this.addr,t)}function sT(s,t){s.uniform1uiv(this.addr,t)}function rT(s,t){s.uniform2uiv(this.addr,t)}function oT(s,t){s.uniform3uiv(this.addr,t)}function aT(s,t){s.uniform4uiv(this.addr,t)}function lT(s,t,e){let n=this.cache,i=t.length,r=gu(e,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=_u(T0):o=w0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function cT(s,t,e){let n=this.cache,i=t.length,r=gu(e,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||C0,r[o])}function hT(s,t,e){let n=this.cache,i=t.length,r=gu(e,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=_u(E0):o=R0;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function uT(s,t,e){let n=this.cache,i=t.length,r=gu(e,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||A0,r[o])}function fT(s){switch(s){case 5126:return Yw;case 35664:return Zw;case 35665:return Jw;case 35666:return $w;case 35674:return Kw;case 35675:return Qw;case 35676:return jw;case 5124:case 35670:return tT;case 35667:case 35671:return eT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return sT;case 36294:return rT;case 36295:return oT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return uT}}var rp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qw(e.type)}},op=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fT(e.type)}},ap=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ip=/(\w+)(\])?(\[|\.)?/g;function l0(s,t){s.seq.push(t),s.map[t.id]=t}function dT(s,t,e){let n=s.name,i=n.length;for(ip.lastIndex=0;;){let r=ip.exec(n),o=ip.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){l0(e,c===void 0?new rp(a,s,t):new op(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new ap(a),l0(e,d)),e=d}}}var qo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);dT(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function c0(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var pT=37297,mT=0;function gT(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var h0=new ee;function _T(s){me._getMatrix(h0,me.workingColorSpace,s);let t=`mat3( ${h0.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(s)){case Ga:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function u0(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+gT(s.getShaderSource(t),a)}else return r}function xT(s,t){let e=_T(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var vT={[Ed]:"Linear",[Ad]:"Reinhard",[Cd]:"Cineon",[Rd]:"ACESFilmic",[Id]:"AgX",[Ld]:"Neutral",[Pd]:"Custom"};function yT(s,t){let e=vT[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mu=new J;function ST(){me.getLuminanceCoefficients(mu);let s=mu.x.toFixed(4),t=mu.y.toFixed(4),e=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function bT(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wT(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function xl(s){return s!==""}function f0(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function d0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var TT=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(s){return s.replace(TT,ET)}function ET(s,t){let e=ae[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return lp(e)}var AT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p0(s){return s.replace(AT,CT)}function CT(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function m0(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var RT={[cl]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function PT(s){return RT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var IT={[Ho]:"ENVMAP_MODE_REFRACTION"};function LT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":IT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DT={[Td]:"ENVMAP_BLENDING_MULTIPLY",[C_]:"ENVMAP_BLENDING_MIX",[R_]:"ENVMAP_BLENDING_ADD"};function NT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":DT[s.combine]||"ENVMAP_BLENDING_NONE"}function UT(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=PT(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=LT(e),d=NT(e),f=MT(e),u=bT(r),m=i.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(xl).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(xl).join(`
`),p.length>0&&(p+=`
`)):(_=[m0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),p=[m0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Qn?yT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,xT("linearToOutputTexel",e.outputColorSpace),ST(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xl).join(`
`)),o=lp(o),o=f0(o,e),o=d0(o,e),a=lp(a),a=f0(a,e),a=d0(a,e),o=p0(o),a=p0(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+_+o,b=g+p+a,v=c0(i,i.VERTEX_SHADER,y),S=c0(i,i.FRAGMENT_SHADER,b);i.attachShader(m,v),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(A){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",D=i.getShaderInfoLog(v)||"",H=i.getShaderInfoLog(S)||"",L=N.trim(),k=D.trim(),V=H.trim(),I=!0,X=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,v,S);else{let B=u0(i,v,"vertex"),C=u0(i,S,"fragment");Kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+B+`
`+C)}else L!==""?Jt("WebGLProgram: Program Info Log:",L):(k===""||V==="")&&(X=!1);X&&(A.diagnostics={runnable:I,programLog:L,vertexShader:{log:k,prefix:_},fragmentShader:{log:V,prefix:p}})}i.deleteShader(v),i.deleteShader(S),x=new qo(i,m),M=wT(i,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,pT)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mT++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=S,this}var OT=0,cp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hp(t),e.set(t,n)),n}},hp=class{constructor(t){this.id=OT++,this.code=t,this.usedTimes=0}};function FT(s){return s===rr||s===ml||s===gl}function BT(s,t,e,n,i,r){let o=new Xa,a=new cp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,A,N,D){let H=A.fog,L=N.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,I=t.get(x.envMap||k,V),X=f[x.type],B=n.precision;x.precision!==null&&(B=n.getMaxPrecision(x.precision),B!==x.precision&&Jt("WebGLProgram.getParameters:",x.precision,"not supported, using",B,"instead."));let C=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,W=C!==void 0?C.length:0,xt=0;L.morphAttributes.position!==void 0&&(xt=1),L.morphAttributes.normal!==void 0&&(xt=2),L.morphAttributes.color!==void 0&&(xt=3);let ft,q,nt,vt;if(X){let at=ts[X];ft=at.vertexShader,q=at.fragmentShader}else{ft=x.vertexShader,q=x.fragmentShader;let at=a.getVertexShaderStage(x),Ut=a.getFragmentShaderStage(x);a.update(x,at,Ut),nt=at.id,vt=Ut.id}let Rt=s.getRenderTarget(),O=s.state.buffers.depth.getReversed(),Q=N.isInstancedMesh===!0,ut=N.isBatchedMesh===!0,st=!!x.map,ht=!!x.matcap,dt=!!I,j=dt&&I.isPMREMTexture===!0,pt=!!x.aoMap,gt=!!x.lightMap,G=!!x.bumpMap&&x.wireframe===!1,St=!!x.normalMap,qt=!!x.displacementMap,Ft=!!x.emissiveMap,Ht=!!x.metalnessMap,jt=!!x.roughnessMap,se=x.anisotropy>0,z=x.clearcoat>0,le=x.diffuseRoughness>0,Qt=x.dispersion>0,$t=x.retroreflectivity>0,bt=x.iridescence>0,ge=x.sheen>0,kt=x.transmission>0,Yt=se&&!!x.anisotropyMap,R=z&&!!x.clearcoatMap,w=z&&!!x.clearcoatNormalMap,Z=z&&!!x.clearcoatRoughnessMap,mt=le&&!!x.diffuseRoughnessMap,lt=bt&&!!x.iridescenceMap,wt=bt&&!!x.iridescenceThicknessMap,Ct=ge&&!!x.sheenColorMap,$=ge&&!!x.sheenRoughnessMap,rt=!!x.specularMap,Mt=!!x.specularColorMap,U=!!x.specularIntensityMap,it=kt&&!!x.transmissionMap,et=kt&&!!x.thicknessMap,Tt=!!x.gradientMap,yt=!!x.alphaMap,Et=x.alphaTest>0,_t=!!x.alphaHash,At=!!x.extensions,ct=Qn;x.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ct=s.toneMapping);let ot=j?I.isCompressedCubeTexture?I.image[0].mipmaps:I.mipmaps:null,Pt={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:ft,fragmentShader:q,defines:x.defines,customVertexShaderID:nt,customFragmentShaderID:vt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:B,batching:ut,batchingColor:ut&&N._colorsTexture!==null,instancing:Q,instancingColor:Q&&N.instanceColor!==null,instancingMorph:Q&&N.morphTexture!==null,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:st,matcap:ht,envMap:dt,envMapMode:dt&&I.mapping,envMapPMREM:j,envMapMaxLod:j?ot.length-1:null,envMapSize:j?ot[0].width:null,aoMap:pt,lightMap:gt,bumpMap:G,normalMap:St,displacementMap:qt,emissiveMap:Ft,normalMapObjectSpace:St&&x.normalMapType===L_,normalMapTangentSpace:St&&x.normalMapType===du,packedNormalMap:St&&x.normalMapType===du&&FT(x.normalMap.format),metalnessMap:Ht,roughnessMap:jt,anisotropy:se,anisotropyMap:Yt,clearcoat:z,clearcoatMap:R,clearcoatNormalMap:w,clearcoatRoughnessMap:Z,diffuseRoughness:le,diffuseRoughnessMap:mt,dispersion:Qt,retroreflection:$t,iridescence:bt,iridescenceMap:lt,iridescenceThicknessMap:wt,sheen:ge,sheenColorMap:Ct,sheenRoughnessMap:$,specularMap:rt,specularColorMap:Mt,specularIntensityMap:U,transmission:kt,transmissionMap:it,thicknessMap:et,gradientMap:Tt,opaque:x.transparent===!1&&x.blending===Vo&&x.alphaToCoverage===!1,alphaMap:yt,alphaTest:Et,alphaHash:_t,combine:x.combine,mapUv:st&&u(x.map.channel),aoMapUv:pt&&u(x.aoMap.channel),lightMapUv:gt&&u(x.lightMap.channel),bumpMapUv:G&&u(x.bumpMap.channel),normalMapUv:St&&u(x.normalMap.channel),displacementMapUv:qt&&u(x.displacementMap.channel),emissiveMapUv:Ft&&u(x.emissiveMap.channel),metalnessMapUv:Ht&&u(x.metalnessMap.channel),roughnessMapUv:jt&&u(x.roughnessMap.channel),anisotropyMapUv:Yt&&u(x.anisotropyMap.channel),clearcoatMapUv:R&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:mt&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:lt&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:$&&u(x.sheenRoughnessMap.channel),specularMapUv:rt&&u(x.specularMap.channel),specularColorMapUv:Mt&&u(x.specularColorMap.channel),specularIntensityMapUv:U&&u(x.specularIntensityMap.channel),transmissionMapUv:it&&u(x.transmissionMap.channel),thicknessMapUv:et&&u(x.thicknessMap.channel),alphaMapUv:yt&&u(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(St||se),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(st||yt),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:O,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:xt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(at=>at.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:st&&x.map.isVideoTexture===!0&&me.getTransfer(x.map.colorSpace)===be,decodeVideoTextureEmissive:Ft&&x.emissiveMap.isVideoTexture===!0&&me.getTransfer(x.emissiveMap.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ai,flipSided:x.side===yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:At&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&x.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(M,x),g(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let M=f[x.type],P;if(M){let A=ts[M];P=$_.clone(A.uniforms)}else P=x.uniforms;return P}function b(x,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new UT(s,M,x,i),c.push(P),h.set(M,P)),P}function v(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:y,acquireProgram:b,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:E}}function zT(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function kT(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function g0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function _0(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,m,_,p,g){let y=s[t];return y===void 0?(y={id:f.id,object:f,geometry:u,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},s[t]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=m,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=p,y.group=g),t++,y}function l(f,u,m,_,p,g,y){y.reversedDepth===!0&&(p=-p);let b=a(f,u,m,_,p,g);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):e.push(b)}function c(f,u,m,_,p,g){let y=a(f,u,m,_,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):e.unshift(y)}function h(f,u){e.length>1&&e.sort(f||kT),n.length>1&&n.sort(u||g0),i.length>1&&i.sort(u||g0)}function d(){for(let f=t,u=s.length;f<u;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function GT(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new _0,s.set(n,[o])):i>=r.length?(o=new _0,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function VT(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new te};break;case"SpotLight":e={position:new J,direction:new J,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new J,halfWidth:new J,halfHeight:new J};break}return s[t.id]=e,e}}}function HT(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var WT=0;function XT(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qT(s){let t=new VT,e=HT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);let i=new J,r=new ke,o=new ke;function a(c){let h=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,m=0,_=0,p=0,g=0,y=0,b=0,v=0,S=0,E=0,x=0,M=0,P=0,A=0;c.sort(XT);for(let D=0,H=c.length;D<H;D++){let L=c[D],k=L.color,V=L.intensity,I=L.distance,X=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===rr?X=L.shadow.map.texture:X=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=k.r*V,d+=k.g*V,f+=k.b*V;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],V);A++}else if(L.isSunLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let C=L.shadow,W=e.get(L);W.shadowIntensity=C.intensity,W.shadowBias=C.bias,W.shadowNormalBias=C.normalBias,W.shadowRadius=C.radius,W.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[m]=W,n.sunShadowMap[m]=X;let xt=C.getViewportCount();for(let ft=0;ft<xt;ft++)n.sunShadowMatrix[_+ft]=C.getMatrix(ft),n.sunShadowCascade[_+ft]=C._cascadeData[ft];_+=xt,m++}n.sun[u]=B,u++}else if(L.isDirectionalLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let C=L.shadow,W=e.get(L);W.shadowIntensity=C.intensity,W.shadowBias=C.bias,W.shadowNormalBias=C.normalBias,W.shadowRadius=C.radius,W.shadowMapSize=C.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=B,p++}else if(L.isSpotLight){let B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(k).multiplyScalar(V),B.distance=I,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[y]=B;let C=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,C.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[y]=C.matrix,L.castShadow){let W=e.get(L);W.shadowIntensity=C.intensity,W.shadowBias=C.bias,W.shadowNormalBias=C.normalBias,W.shadowRadius=C.radius,W.shadowMapSize=C.mapSize,n.spotShadow[y]=W,n.spotShadowMap[y]=X,x++}y++}else if(L.isRectAreaLight){let B=t.get(L);B.color.copy(k).multiplyScalar(V),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[b]=B,b++}else if(L.isPointLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){let C=L.shadow,W=e.get(L);W.shadowIntensity=C.intensity,W.shadowBias=C.bias,W.shadowNormalBias=C.normalBias,W.shadowRadius=C.radius,W.shadowMapSize=C.mapSize,W.shadowCameraNear=C.camera.near,W.shadowCameraFar=C.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=B,g++}else if(L.isHemisphereLight){let B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(V),B.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[v]=B,v++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.sunLength!==u||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==b||N.hemiLength!==v||N.numSunShadows!==m||N.numDirectionalShadows!==S||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==M||N.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=p,n.spot.length=y,n.rectArea.length=b,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,N.sunLength=u,N.directionalLength=p,N.pointLength=g,N.spotLength=y,N.rectAreaLength=b,N.hemiLength=v,N.numSunShadows=m,N.numDirectionalShadows=S,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=M,N.numLightProbes=A,n.version=WT++)}function l(c,h){let d=0,f=0,u=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let v=c[y];if(v.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),f++}else if(v.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let S=n.point[u];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function x0(s){let t=new qT(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function YT(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new x0(s),t.set(i,[a])):r>=o.length?(a=new x0(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ZT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JT=`uniform sampler2D shadow_pass;
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
}`,$T=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],KT=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],v0=new ke,_l=new J,sp=new J;function QT(s,t,e){let n=new Br,i=new Dt,r=new Dt,o=new Ge,a=new dh,l=new ph,c={},h=e.maxTextureSize,d={[sr]:yn,[yn]:sr,[Ai]:Ai},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:ZT,fragmentShader:JT}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new Qi;m.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Dn(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let g=this.type;this.render=function(E,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===c_&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cl);let P=s.getRenderTarget(),A=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Gr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=g!==this.type;H&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=E.length;L<k;L++){let V=E[L],I=V.shadow;if(I===void 0){Jt("WebGLShadowMap:",V,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);let X=I.getFrameExtents();i.multiply(X),r.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,I.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,I.mapSize.y=r.y));let B=s.state.buffers.depth.getReversed();if(I.camera._reversedDepth=B,I.map===null||H===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Go){if(V.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new ui(i.x,i.y,{format:rr,type:Bi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),I.map.texture.name=V.name+".shadowMap",I.map.depthTexture=new Ms(i.x,i.y,Fi),I.map.depthTexture.name=V.name+".shadowMapDepth",I.map.depthTexture.format=ys,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=dn,I.map.depthTexture.magFilter=dn}else V.isPointLight?(I.map=new vl(i.x),I.map.depthTexture=new $a(i.x,Oi)):(I.map=new ui(i.x,i.y),I.map.depthTexture=new Ms(i.x,i.y,Oi)),I.map.depthTexture.name=V.name+".shadowMap",I.map.depthTexture.format=ys,this.type===cl?(I.map.depthTexture.compareFunction=B?Vd:Gd,I.map.depthTexture.minFilter=vn,I.map.depthTexture.magFilter=vn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=dn,I.map.depthTexture.magFilter=dn);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==i.x||I.map.height!==i.y)&&I.map.setSize(i.x,i.y);let C=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();V.isPointLight!==!0&&I.updateMatrices(V,M);let W=(I.camera.layers.mask&4294967294)!==0?I.camera.layers:M.layers;for(let xt=0;xt<C;xt++){let ft=I.getCamera(xt);if(V.isPointLight){let q=I.camera,nt=I.matrix,vt=V.distance||q.far;vt!==q.far&&(q.far=vt,q.updateProjectionMatrix()),_l.setFromMatrixPosition(V.matrixWorld),q.position.copy(_l),sp.copy(q.position),sp.add($T[xt]),q.up.copy(KT[xt]),q.lookAt(sp),q.updateMatrixWorld(),nt.makeTranslation(-_l.x,-_l.y,-_l.z),v0.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),I._frustum.setFromProjectionMatrix(v0,q.coordinateSystem,q.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)s.setRenderTarget(I.map,xt),s.clear();else{xt===0&&(s.setRenderTarget(I.map),s.clear());let q=I.getViewport(xt);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),D.viewport(o)}n=I.getFrustum(xt),v(x,M,ft,V,W,this.type)}I.isPointLightShadow!==!0&&this.type===Go&&y(I,M),I.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(P,A,N)};function y(E,x){let M=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new ui(i.x,i.y,{format:rr,type:Bi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,M,f,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,M,u,_,null)}function b(E,x,M,P){let A=null,N=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)A=N;else if(A=M.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=A.uuid,H=x.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let k=L[H];k===void 0&&(k=A.clone(),L[H]=k,x.addEventListener("dispose",S)),A=k}if(A.visible=x.visible,A.wireframe=x.wireframe,P===Go?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=s.properties.get(A);D.light=M}return A}function v(E,x,M,P,A,N){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Go)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let L=t.update(E),k=E.material;if(Array.isArray(k)){let V=L.groups;for(let I=0,X=V.length;I<X;I++){let B=V[I],C=k[B.materialIndex];if(C&&C.visible){let W=b(E,C,P,N);E.onBeforeShadow(s,E,x,M,L,W,B),s.renderBufferDirect(M,null,L,W,E,B),E.onAfterShadow(s,E,x,M,L,W,B)}}}else if(k.visible){let V=b(E,k,P,N);E.onBeforeShadow(s,E,x,M,L,V,null),s.renderBufferDirect(M,null,L,V,E,null),E.onAfterShadow(s,E,x,M,L,V,null)}}let H=E.children;for(let L=0,k=H.length;L<k;L++)v(H[L],x,M,P,A,N)}function S(E){E.target.removeEventListener("dispose",S);for(let M in c){let P=c[M],A=E.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function jT(s,t){function e(){let U=!1,it=new Ge,et=null,Tt=new Ge(0,0,0,0);return{setMask:function(yt){et!==yt&&!U&&(s.colorMask(yt,yt,yt,yt),et=yt)},setLocked:function(yt){U=yt},setClear:function(yt,Et,_t,At,ct){ct===!0&&(yt*=At,Et*=At,_t*=At),it.set(yt,Et,_t,At),Tt.equals(it)===!1&&(s.clearColor(yt,Et,_t,At),Tt.copy(it))},reset:function(){U=!1,et=null,Tt.set(-1,0,0,0)}}}function n(){let U=!1,it=!1,et=null,Tt=null,yt=null;return{setReversed:function(Et){if(it!==Et){let _t=t.get("EXT_clip_control");Et?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),it=Et;let At=yt;yt=null,this.setClear(At)}},getReversed:function(){return it},setTest:function(Et){Et?O(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function(Et){et!==Et&&!U&&(s.depthMask(Et),et=Et)},setFunc:function(Et){if(it&&(Et=H_[Et]),Tt!==Et){switch(Et){case Hc:s.depthFunc(s.NEVER);break;case Wc:s.depthFunc(s.ALWAYS);break;case Xc:s.depthFunc(s.LESS);break;case Io:s.depthFunc(s.LEQUAL);break;case qc:s.depthFunc(s.EQUAL);break;case Yc:s.depthFunc(s.GEQUAL);break;case Zc:s.depthFunc(s.GREATER);break;case Jc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Tt=Et}},setLocked:function(Et){U=Et},setClear:function(Et){yt!==Et&&(yt=Et,it&&(Et=1-Et),s.clearDepth(Et))},reset:function(){U=!1,et=null,Tt=null,yt=null,it=!1}}}function i(){let U=!1,it=null,et=null,Tt=null,yt=null,Et=null,_t=null,At=null,ct=null;return{setTest:function(ot){U||(ot?O(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(ot){it!==ot&&!U&&(s.stencilMask(ot),it=ot)},setFunc:function(ot,Pt,at){(et!==ot||Tt!==Pt||yt!==at)&&(s.stencilFunc(ot,Pt,at),et=ot,Tt=Pt,yt=at)},setOp:function(ot,Pt,at){(Et!==ot||_t!==Pt||At!==at)&&(s.stencilOp(ot,Pt,at),Et=ot,_t=Pt,At=at)},setLocked:function(ot){U=ot},setClear:function(ot){ct!==ot&&(s.clearStencil(ot),ct=ot)},reset:function(){U=!1,it=null,et=null,Tt=null,yt=null,Et=null,_t=null,At=null,ct=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],_=null,p=!1,g=null,y=null,b=null,v=null,S=null,E=null,x=null,M=new te(0,0,0),P=0,A=!1,N=null,D=null,H=null,L=null,k=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,X=0,B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(B)[1]),I=X>=1):B.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),I=X>=2);let C=null,W={},xt=s.getParameter(s.SCISSOR_BOX),ft=s.getParameter(s.VIEWPORT),q=new Ge().fromArray(xt),nt=new Ge().fromArray(ft);function vt(U,it,et,Tt){let yt=new Uint8Array(4),Et=s.createTexture();s.bindTexture(U,Et),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _t=0;_t<et;_t++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,Tt,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(it+_t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return Et}let Rt={};Rt[s.TEXTURE_2D]=vt(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[s.TEXTURE_2D_ARRAY]=vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(s.DEPTH_TEST),o.setFunc(Io),G(!1),St(vd),O(s.CULL_FACE),pt(Gr);function O(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Q(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function ut(U,it){return f[U]!==it?(s.bindFramebuffer(U,it),f[U]=it,U===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=it),U===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=it),!0):!1}function st(U,it){let et=m,Tt=!1;if(U){et=u.get(it),et===void 0&&(et=[],u.set(it,et));let yt=U.textures;if(et.length!==yt.length||et[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,_t=yt.length;Et<_t;Et++)et[Et]=s.COLOR_ATTACHMENT0+Et;et.length=yt.length,Tt=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,Tt=!0);Tt&&s.drawBuffers(et)}function ht(U){return _!==U?(s.useProgram(U),_=U,!0):!1}let dt={[Vr]:s.FUNC_ADD,[u_]:s.FUNC_SUBTRACT,[f_]:s.FUNC_REVERSE_SUBTRACT};dt[d_]=s.MIN,dt[p_]=s.MAX;let j={[m_]:s.ZERO,[g_]:s.ONE,[__]:s.SRC_COLOR,[bd]:s.SRC_ALPHA,[b_]:s.SRC_ALPHA_SATURATE,[S_]:s.DST_COLOR,[v_]:s.DST_ALPHA,[x_]:s.ONE_MINUS_SRC_COLOR,[wd]:s.ONE_MINUS_SRC_ALPHA,[M_]:s.ONE_MINUS_DST_COLOR,[y_]:s.ONE_MINUS_DST_ALPHA,[w_]:s.CONSTANT_COLOR,[T_]:s.ONE_MINUS_CONSTANT_COLOR,[E_]:s.CONSTANT_ALPHA,[A_]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(U,it,et,Tt,yt,Et,_t,At,ct,ot){if(U===Gr){p===!0&&(Q(s.BLEND),p=!1);return}if(p===!1&&(O(s.BLEND),p=!0),U!==h_){if(U!==g||ot!==A){if((y!==Vr||S!==Vr)&&(s.blendEquation(s.FUNC_ADD),y=Vr,S=Vr),ot)switch(U){case Vo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yd:s.blendFunc(s.ONE,s.ONE);break;case Sd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Md:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Kt("WebGLState: Invalid blending: ",U);break}else switch(U){case Vo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sd:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Md:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",U);break}b=null,v=null,E=null,x=null,M.set(0,0,0),P=0,g=U,A=ot}return}yt=yt||it,Et=Et||et,_t=_t||Tt,(it!==y||yt!==S)&&(s.blendEquationSeparate(dt[it],dt[yt]),y=it,S=yt),(et!==b||Tt!==v||Et!==E||_t!==x)&&(s.blendFuncSeparate(j[et],j[Tt],j[Et],j[_t]),b=et,v=Tt,E=Et,x=_t),(At.equals(M)===!1||ct!==P)&&(s.blendColor(At.r,At.g,At.b,ct),M.copy(At),P=ct),g=U,A=!1}function gt(U,it){U.side===Ai?Q(s.CULL_FACE):O(s.CULL_FACE);let et=U.side===yn;it&&(et=!et),G(et),U.blending===Vo&&U.transparent===!1?pt(Gr):pt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Tt=U.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?O(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function G(U){N!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),N=U)}function St(U){U!==a_?(O(s.CULL_FACE),U!==D&&(U===vd?s.cullFace(s.BACK):U===l_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),D=U}function qt(U){U!==H&&(I&&s.lineWidth(U),H=U)}function Ft(U,it,et){U?(O(s.POLYGON_OFFSET_FILL),(L!==it||k!==et)&&(L=it,k=et,o.getReversed()&&(it=-it,et=-et),s.polygonOffset(it,et))):Q(s.POLYGON_OFFSET_FILL)}function Ht(U){U?O(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function jt(U){U===void 0&&(U=s.TEXTURE0+V-1),C!==U&&(s.activeTexture(U),C=U)}function se(U,it,et){et===void 0&&(C===null?et=s.TEXTURE0+V-1:et=C);let Tt=W[et];Tt===void 0&&(Tt={type:void 0,texture:void 0},W[et]=Tt),(Tt.type!==U||Tt.texture!==it)&&(C!==et&&(s.activeTexture(et),C=et),s.bindTexture(U,it||Rt[U]),Tt.type=U,Tt.texture=it)}function z(){let U=W[C];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function le(){try{s.compressedTexImage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function Qt(){try{s.compressedTexImage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function $t(){try{s.texSubImage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function bt(){try{s.texSubImage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function ge(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function kt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function Yt(){try{s.texStorage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function R(){try{s.texStorage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function w(){try{s.texImage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function Z(){try{s.texImage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function mt(U){return d[U]!==void 0?d[U]:s.getParameter(U)}function lt(U,it){d[U]!==it&&(s.pixelStorei(U,it),d[U]=it)}function wt(U){q.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),q.copy(U))}function Ct(U){nt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),nt.copy(U))}function $(U,it){let et=c.get(it);et===void 0&&(et=new WeakMap,c.set(it,et));let Tt=et.get(U);Tt===void 0&&(Tt=s.getUniformBlockIndex(it,U.name),s.uniformBlockBinding(it,Tt,Tt),et.set(U,Tt))}function rt(U,it,et){let yt=c.get(it).get(U);l[yt]!==et&&(s.bindBufferBase(s.UNIFORM_BUFFER,yt,et),l[yt]=et)}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},C=null,W={},f={},l={},u=new WeakMap,m=[],_=null,p=!1,g=null,y=null,b=null,v=null,S=null,E=null,x=null,M=new te(0,0,0),P=0,A=!1,N=null,D=null,H=null,L=null,k=null,q.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:O,disable:Q,bindFramebuffer:ut,drawBuffers:st,useProgram:ht,setBlending:pt,setMaterial:gt,setFlipSided:G,setCullFace:St,setLineWidth:qt,setPolygonOffset:Ft,setScissorTest:Ht,activeTexture:jt,bindTexture:se,unbindTexture:z,compressedTexImage2D:le,compressedTexImage3D:Qt,texImage2D:w,texImage3D:Z,pixelStorei:lt,getParameter:mt,updateUBOMapping:$,uniformBlockBinding:rt,texStorage2D:Yt,texStorage3D:R,texSubImage2D:$t,texSubImage3D:bt,compressedTexSubImage2D:ge,compressedTexSubImage3D:kt,scissor:wt,viewport:Ct,reset:Mt}}function t1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap,d=new Set,f,u=new WeakMap,m=new Set,_=new FinalizationRegistry(R=>m.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return p?new OffscreenCanvas(R,w):Ha("canvas")}function y(R,w,Z){let mt=1,lt=Yt(R);if((lt.width>Z||lt.height>Z)&&(mt=Z/Math.max(lt.width,lt.height)),mt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let wt=Math.floor(mt*lt.width),Ct=Math.floor(mt*lt.height);f===void 0&&(f=g(wt,Ct));let $=w?g(wt,Ct):f;return $.width=wt,$.height=Ct,$.getContext("2d").drawImage(R,0,0,wt,Ct),Jt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+wt+"x"+Ct+")."),$}else return"data"in R&&Jt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),R;return R}function b(R){return R.generateMipmaps}function v(R){s.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(R,w,Z,mt,lt,wt=!1){if(R!==null){if(s[R]!==void 0)return s[R];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ct;mt&&(Ct=t.get("EXT_texture_norm16"),Ct||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=w;if(w===s.RED&&(Z===s.FLOAT&&($=s.R32F),Z===s.HALF_FLOAT&&($=s.R16F),Z===s.UNSIGNED_BYTE&&($=s.R8),Z===s.UNSIGNED_SHORT&&Ct&&($=Ct.R16_EXT),Z===s.SHORT&&Ct&&($=Ct.R16_SNORM_EXT)),w===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&($=s.R8UI),Z===s.UNSIGNED_SHORT&&($=s.R16UI),Z===s.UNSIGNED_INT&&($=s.R32UI),Z===s.BYTE&&($=s.R8I),Z===s.SHORT&&($=s.R16I),Z===s.INT&&($=s.R32I)),w===s.RG&&(Z===s.FLOAT&&($=s.RG32F),Z===s.HALF_FLOAT&&($=s.RG16F),Z===s.UNSIGNED_BYTE&&($=s.RG8),Z===s.UNSIGNED_SHORT&&Ct&&($=Ct.RG16_EXT),Z===s.SHORT&&Ct&&($=Ct.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&($=s.RG8UI),Z===s.UNSIGNED_SHORT&&($=s.RG16UI),Z===s.UNSIGNED_INT&&($=s.RG32UI),Z===s.BYTE&&($=s.RG8I),Z===s.SHORT&&($=s.RG16I),Z===s.INT&&($=s.RG32I)),w===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&($=s.RGB8UI),Z===s.UNSIGNED_SHORT&&($=s.RGB16UI),Z===s.UNSIGNED_INT&&($=s.RGB32UI),Z===s.BYTE&&($=s.RGB8I),Z===s.SHORT&&($=s.RGB16I),Z===s.INT&&($=s.RGB32I)),w===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&($=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&($=s.RGBA16UI),Z===s.UNSIGNED_INT&&($=s.RGBA32UI),Z===s.BYTE&&($=s.RGBA8I),Z===s.SHORT&&($=s.RGBA16I),Z===s.INT&&($=s.RGBA32I)),w===s.RGB&&(Z===s.UNSIGNED_SHORT&&Ct&&($=Ct.RGB16_EXT),Z===s.SHORT&&Ct&&($=Ct.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),w===s.RGBA){let rt=wt?Ga:me.getTransfer(lt);Z===s.FLOAT&&($=s.RGBA32F),Z===s.HALF_FLOAT&&($=s.RGBA16F),Z===s.UNSIGNED_BYTE&&($=rt===be?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&Ct&&($=Ct.RGBA16_EXT),Z===s.SHORT&&Ct&&($=Ct.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(R,w){let Z;return R?w===null||w===Oi||w===Wr?Z=s.DEPTH24_STENCIL8:w===Fi?Z=s.DEPTH32F_STENCIL8:w===Wo&&(Z=s.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Oi||w===Wr?Z=s.DEPTH_COMPONENT24:w===Fi?Z=s.DEPTH_COMPONENT32F:w===Wo&&(Z=s.DEPTH_COMPONENT16),Z}function M(R,w){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==vn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function P(R){let w=new WeakRef(R);n.get(R).__ref=w,m.add(w),_.register(R,w,w)}function A(R){let w=n.get(R).__ref;w!==void 0&&(m.delete(w),_.unregister(w))}function N(R){H(R.target)}function D(R){L(R.target)}function H(R){R.removeEventListener("dispose",N),A(R),V(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function L(R){R.removeEventListener("dispose",D),A(R),X(R)}function k(){for(let R of m){let w=R.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):H(w))}m.clear(),d.clear()}function V(R){let w=n.get(R);if(w.__webglInit===void 0)return;let Z=R.source,mt=u.get(Z);if(mt){let lt=mt[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&I(R),Object.keys(mt).length===0&&u.delete(Z)}n.remove(R)}function I(R){let w=n.get(R);s.deleteTexture(w.__webglTexture);let Z=R.source,mt=u.get(Z);delete mt[w.__cacheKey],o.memory.textures--}function X(R){let w=n.get(R);w.__depthDisposeCallback&&w.__depthDisposeCallback();let Z=R.depthTexture;if(Z&&Z.renderTarget===R&&H(Z),R.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(w.__webglFramebuffer[lt]))for(let wt=0;wt<w.__webglFramebuffer[lt].length;wt++)s.deleteFramebuffer(w.__webglFramebuffer[lt][wt]);else s.deleteFramebuffer(w.__webglFramebuffer[lt]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[lt])}else{if(Array.isArray(w.__webglFramebuffer))for(let lt=0;lt<w.__webglFramebuffer.length;lt++)s.deleteFramebuffer(w.__webglFramebuffer[lt]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let lt=0;lt<w.__webglColorRenderbuffer.length;lt++)w.__webglColorRenderbuffer[lt]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[lt]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let mt=R.textures;for(let lt=0,wt=mt.length;lt<wt;lt++){let Ct=n.get(mt[lt]);Ct.__webglTexture&&(s.deleteTexture(Ct.__webglTexture),o.memory.textures--),n.remove(mt[lt])}n.remove(R)}let B=0;function C(){B=0}function W(){return B}function xt(R){B=R}function ft(){let R=B;return R>=i.maxTextures&&Jt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,R}function q(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.mipmapsAutoUpdate),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function nt(R,w){let Z=n.get(R);if(R.isVideoTexture&&ge(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Z.__version!==R.version){let mt=R.image;if(mt===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(Z,R,w);return}}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+w)}function vt(R,w){let Z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){gt(Z,R,w);return}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+w)}function Rt(R,w){let Z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){gt(Z,R,w);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+w)}function O(R,w){let Z=n.get(R);if(R.version>0&&Z.__version!==R.version){G(Z,R,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+w)}let Q={[Lo]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[$c]:s.MIRRORED_REPEAT},ut={[dn]:s.NEAREST,[P_]:s.NEAREST_MIPMAP_NEAREST,[hl]:s.NEAREST_MIPMAP_LINEAR,[vn]:s.LINEAR,[Ph]:s.LINEAR_MIPMAP_NEAREST,[Ui]:s.LINEAR_MIPMAP_LINEAR},st={[N_]:s.NEVER,[Hd]:s.ALWAYS,[U_]:s.LESS,[Gd]:s.LEQUAL,[O_]:s.EQUAL,[Vd]:s.GEQUAL,[F_]:s.GREATER,[B_]:s.NOTEQUAL};function ht(R,w){if(w.type===Fi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===vn||w.magFilter===Ph||w.magFilter===hl||w.magFilter===Ui||w.minFilter===vn||w.minFilter===Ph||w.minFilter===hl||w.minFilter===Ui)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Q[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Q[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Q[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ut[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ut[w.minFilter]),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,st[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===dn||w.minFilter!==hl&&w.minFilter!==Ui||w.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function dt(R,w){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",N),P(w));let mt=w.source,lt=u.get(mt);lt===void 0&&(lt={},u.set(mt,lt));let wt=q(w);if(wt!==R.__cacheKey){lt[wt]===void 0&&(lt[wt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),lt[wt].usedTimes++;let Ct=lt[R.__cacheKey];Ct!==void 0&&(lt[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&I(w)),R.__cacheKey=wt,R.__webglTexture=lt[wt].texture}return Z}function j(R,w,Z){return Math.floor(Math.floor(R/Z)/w)}function pt(R,w,Z,mt){let wt=R.updateRanges;if(wt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,Z,mt,w.data);else{wt.sort((U,it)=>U.start-it.start);let Ct=0;for(let U=1;U<wt.length;U++){let it=wt[Ct],et=wt[U],Tt=it.start+it.count,yt=j(et.start,w.width,4),Et=j(it.start,w.width,4);et.start<=Tt+1&&yt===Et&&j(et.start+et.count-1,w.width,4)===yt?it.count=Math.max(it.count,et.start+et.count-it.start):(++Ct,wt[Ct]=et)}wt.length=Ct+1;let $=e.getParameter(s.UNPACK_ROW_LENGTH),rt=e.getParameter(s.UNPACK_SKIP_PIXELS),Mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let U=0,it=wt.length;U<it;U++){let et=wt[U],Tt=Math.floor(et.start/4),yt=Math.ceil(et.count/4),Et=Tt%w.width,_t=Math.floor(Tt/w.width),At=yt,ct=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(s.UNPACK_SKIP_ROWS,_t),e.texSubImage2D(s.TEXTURE_2D,0,Et,_t,At,ct,Z,mt,w.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,$),e.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Mt)}}function gt(R,w,Z){let mt=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(mt=s.TEXTURE_3D);let lt=dt(R,w),wt=w.source;e.bindTexture(mt,R.__webglTexture,s.TEXTURE0+Z);let Ct=n.get(wt);if(wt.version!==Ct.__version||lt===!0){if(e.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ct=me.getPrimaries(me.workingColorSpace),ot=w.colorSpace===Ts?null:me.getPrimaries(w.colorSpace),Pt=w.colorSpace===Ts||ct===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let rt=y(w.image,!1,i.maxTextureSize);rt=kt(w,rt);let Mt=r.convert(w.format,w.colorSpace),U=r.convert(w.type),it=E(w.internalFormat,Mt,U,w.normalized,w.colorSpace,w.isVideoTexture);ht(mt,w);let et,Tt=w.mipmaps,yt=w.isVideoTexture!==!0,Et=Ct.__version===void 0||lt===!0,_t=wt.dataReady,At=M(w,rt);if(w.isDepthTexture)it=x(w.format===ws,w.type),Et&&(yt?e.texStorage2D(s.TEXTURE_2D,1,it,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,it,rt.width,rt.height,0,Mt,U,null));else if(w.isDataTexture)if(Tt.length>0){yt&&Et&&e.texStorage2D(s.TEXTURE_2D,At,it,Tt[0].width,Tt[0].height);for(let ct=0,ot=Tt.length;ct<ot;ct++)et=Tt[ct],yt?_t&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,et.width,et.height,Mt,U,et.data):e.texImage2D(s.TEXTURE_2D,ct,it,et.width,et.height,0,Mt,U,et.data);w.generateMipmaps=!1}else yt?(Et&&e.texStorage2D(s.TEXTURE_2D,At,it,rt.width,rt.height),_t&&pt(w,rt,Mt,U)):e.texImage2D(s.TEXTURE_2D,0,it,rt.width,rt.height,0,Mt,U,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){yt&&Et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,it,Tt[0].width,Tt[0].height,rt.depth);for(let ct=0,ot=Tt.length;ct<ot;ct++)if(et=Tt[ct],w.format!==zi)if(Mt!==null)if(yt){if(_t)if(w.layerUpdates.size>0){let Pt=Kd(et.width,et.height,w.format,w.type);for(let at of w.layerUpdates){let Ut=et.data.subarray(at*Pt/et.data.BYTES_PER_ELEMENT,(at+1)*Pt/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,at,et.width,et.height,1,Mt,Ut)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,et.width,et.height,rt.depth,Mt,et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,it,et.width,et.height,rt.depth,0,et.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?_t&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,et.width,et.height,rt.depth,Mt,U,et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,it,et.width,et.height,rt.depth,0,Mt,U,et.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{yt&&Et&&e.texStorage2D(s.TEXTURE_2D,At,it,Tt[0].width,Tt[0].height);for(let ct=0,ot=Tt.length;ct<ot;ct++)et=Tt[ct],w.format!==zi?Mt!==null?yt?_t&&e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,et.width,et.height,Mt,et.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,it,et.width,et.height,0,et.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?_t&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,et.width,et.height,Mt,U,et.data):e.texImage2D(s.TEXTURE_2D,ct,it,et.width,et.height,0,Mt,U,et.data)}else if(w.isDataArrayTexture)if(yt){if(Et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,it,rt.width,rt.height,rt.depth),_t)if(w.layerUpdates.size>0){let ct=Kd(rt.width,rt.height,w.format,w.type);for(let ot of w.layerUpdates){let Pt=rt.data.subarray(ot*ct/rt.data.BYTES_PER_ELEMENT,(ot+1)*ct/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ot,rt.width,rt.height,1,Mt,U,Pt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Mt,U,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,it,rt.width,rt.height,rt.depth,0,Mt,U,rt.data);else if(w.isData3DTexture)yt?(Et&&e.texStorage3D(s.TEXTURE_3D,At,it,rt.width,rt.height,rt.depth),_t&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Mt,U,rt.data)):e.texImage3D(s.TEXTURE_3D,0,it,rt.width,rt.height,rt.depth,0,Mt,U,rt.data);else if(w.isFramebufferTexture){if(Et)if(yt)e.texStorage2D(s.TEXTURE_2D,At,it,rt.width,rt.height);else{let ct=rt.width,ot=rt.height;for(let Pt=0;Pt<At;Pt++)e.texImage2D(s.TEXTURE_2D,Pt,it,ct,ot,0,Mt,U,null),ct>>=1,ot>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let ct=s.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),rt.parentNode!==ct){ct.appendChild(rt),d.add(w),ct.onpaint=ot=>{let Pt=ot.changedElements;for(let at of d)Pt.includes(at.image)&&(at.needsUpdate=!0)},ct.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,rt);else{let Pt=s.RGBA,at=s.RGBA,Ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Pt,at,Ut,rt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(yt&&Et){let ct=Yt(Tt[0]);e.texStorage2D(s.TEXTURE_2D,At,it,ct.width,ct.height)}for(let ct=0,ot=Tt.length;ct<ot;ct++)et=Tt[ct],yt?_t&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Mt,U,et):e.texImage2D(s.TEXTURE_2D,ct,it,Mt,U,et);w.generateMipmaps=!1}else if(yt){if(Et){let ct=Yt(rt);e.texStorage2D(s.TEXTURE_2D,At,it,ct.width,ct.height)}_t&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,U,rt)}else e.texImage2D(s.TEXTURE_2D,0,it,Mt,U,rt);b(w)&&w.mipmapsAutoUpdate===!0&&v(mt),Ct.__version=wt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function G(R,w,Z){if(w.image.length!==6)return;let mt=dt(R,w),lt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+Z);let wt=n.get(lt);if(lt.version!==wt.__version||mt===!0){e.activeTexture(s.TEXTURE0+Z);let Ct=me.getPrimaries(me.workingColorSpace),$=w.colorSpace===Ts?null:me.getPrimaries(w.colorSpace),rt=w.colorSpace===Ts||Ct===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Mt=w.isCompressedTexture||w.image[0].isCompressedTexture,U=w.image[0]&&w.image[0].isDataTexture,it=[];for(let at=0;at<6;at++)!Mt&&!U?it[at]=y(w.image[at],!0,i.maxCubemapSize):it[at]=U?w.image[at].image:w.image[at],it[at]=kt(w,it[at]);let et=it[0],Tt=r.convert(w.format,w.colorSpace),yt=r.convert(w.type),Et=E(w.internalFormat,Tt,yt,w.normalized,w.colorSpace),_t=w.isVideoTexture!==!0,At=wt.__version===void 0||mt===!0,ct=lt.dataReady,ot=M(w,et);ht(s.TEXTURE_CUBE_MAP,w);let Pt;if(w.isDepthTexture){if(Et=x(w.format===ws,w.type),At)if(_t)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,Et,et.width,et.height);else for(let at=0;at<6;at++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Et,et.width,et.height,0,Tt,yt,null)}else if(Mt){_t&&At&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Et,et.width,et.height);for(let at=0;at<6;at++){Pt=it[at].mipmaps;for(let Ut=0;Ut<Pt.length;Ut++){let fe=Pt[Ut];w.format!==zi?Tt!==null?_t?ct&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut,0,0,fe.width,fe.height,Tt,fe.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut,Et,fe.width,fe.height,0,fe.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut,0,0,fe.width,fe.height,Tt,yt,fe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut,Et,fe.width,fe.height,0,Tt,yt,fe.data)}}}else{if(Pt=w.mipmaps,_t&&At){Pt.length>0&&ot++;let at=Yt(it[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Et,at.width,at.height)}for(let at=0;at<6;at++)if(U){_t?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,it[at].width,it[at].height,Tt,yt,it[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Et,it[at].width,it[at].height,0,Tt,yt,it[at].data);for(let Ut=0;Ut<Pt.length;Ut++){let ne=Pt[Ut].image[at].image;_t?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut+1,0,0,ne.width,ne.height,Tt,yt,ne.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut+1,Et,ne.width,ne.height,0,Tt,yt,ne.data)}}else{_t?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Tt,yt,it[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Et,Tt,yt,it[at]);for(let Ut=0;Ut<Pt.length;Ut++){let fe=Pt[Ut];_t?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut+1,0,0,Tt,yt,fe.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut+1,Et,Tt,yt,fe.image[at])}}}b(w)&&w.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),wt.__version=lt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function St(R,w,Z,mt,lt,wt){let Ct=r.convert(Z.format,Z.colorSpace),$=r.convert(Z.type),rt=E(Z.internalFormat,Ct,$,Z.normalized,Z.colorSpace),Mt=n.get(w),U=n.get(Z);if(U.__renderTarget=w,!Mt.__hasExternalTextures){let it=Math.max(1,w.width>>wt),et=Math.max(1,w.height>>wt);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,wt,rt,it,et,w.depth,0,Ct,$,null):e.texImage2D(lt,wt,rt,it,et,0,Ct,$,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),bt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,lt,U.__webglTexture,0,$t(w)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,lt,U.__webglTexture,wt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(R,w,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer){let mt=w.depthTexture,lt=mt&&mt.isDepthTexture?mt.type:null,wt=x(w.stencilBuffer,lt),Ct=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;bt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(w),wt,w.width,w.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(w),wt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,wt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,R)}else{let mt=w.textures;for(let lt=0;lt<mt.length;lt++){let wt=mt[lt],Ct=r.convert(wt.format,wt.colorSpace),$=r.convert(wt.type),rt=E(wt.internalFormat,Ct,$,wt.normalized,wt.colorSpace);bt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(w),rt,w.width,w.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(w),rt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,rt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(R,w,Z){let mt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=n.get(w.depthTexture);lt.__renderTarget=w;let wt=mt?w.depthTexture.image[0]:w.depthTexture.image;(!lt.__webglTexture||wt.width!==w.width||wt.height!==w.height)&&(wt.width=w.width,wt.height=w.height,w.depthTexture.needsUpdate=!0),mt?O(w.depthTexture,0):nt(w.depthTexture,0);let Ct=lt.__webglTexture,$=$t(w),rt=mt?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,Mt=w.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===ys)bt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,rt,Ct,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,Mt,rt,Ct,0);else if(w.depthTexture.format===ws)bt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,rt,Ct,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,Mt,rt,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(R){let w=n.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let mt=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),mt){let lt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,mt.removeEventListener("dispose",lt)};mt.addEventListener("dispose",lt),w.__depthDisposeCallback=lt}w.__boundDepthTexture=mt}if(R.depthTexture&&!w.__autoAllocateDepthBuffer)if(Z)for(let mt=0;mt<6;mt++)Ft(w.__webglFramebuffer[mt],R,mt);else R.texture.mipmaps.length>0?Ft(w.__webglFramebuffer[0],R,0):Ft(w.__webglFramebuffer,R,0);else if(Z){w.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[mt]),w.__webglDepthbuffer[mt]===void 0)w.__webglDepthbuffer[mt]=s.createRenderbuffer(),qt(w.__webglDepthbuffer[mt],R,!1);else{let lt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=w.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,wt),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,wt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),qt(w.__webglDepthbuffer,R,!1);else{let lt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,wt),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,wt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(R,w,Z){let mt=n.get(R);w!==void 0&&St(mt.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ht(R)}function se(R){let w=R.texture,Z=n.get(R),mt=n.get(w);R.addEventListener("dispose",D),P(R);let lt=R.textures,wt=R.isWebGLCubeRenderTarget===!0,Ct=lt.length>1;if(Ct||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=w.version,o.memory.textures++),wt){Z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(w.mipmaps.length>0){Z.__webglFramebuffer[$]=[];for(let rt=0;rt<w.mipmaps.length;rt++)Z.__webglFramebuffer[$][rt]=s.createFramebuffer()}else Z.__webglFramebuffer[$]=s.createFramebuffer()}else{if(w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let $=0;$<w.mipmaps.length;$++)Z.__webglFramebuffer[$]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let $=0,rt=lt.length;$<rt;$++){let Mt=n.get(lt[$]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&bt(R)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let $=0;$<lt.length;$++){let rt=lt[$];Z.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[$]);let Mt=r.convert(rt.format,rt.colorSpace),U=r.convert(rt.type),it=E(rt.internalFormat,Mt,U,rt.normalized,rt.colorSpace,R.isXRRenderTarget===!0),et=$t(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,it,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,Z.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),qt(Z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(wt){e.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),ht(s.TEXTURE_CUBE_MAP,w);for(let $=0;$<6;$++)if(w.mipmaps.length>0)for(let rt=0;rt<w.mipmaps.length;rt++)St(Z.__webglFramebuffer[$][rt],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt);else St(Z.__webglFramebuffer[$],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);b(w)?v(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(Ct){for(let $=0,rt=lt.length;$<rt;$++){let Mt=lt[$],U=n.get(Mt),it=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(it=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(it,U.__webglTexture),ht(it,Mt),St(Z.__webglFramebuffer,R,Mt,s.COLOR_ATTACHMENT0+$,it,0),b(Mt)&&v(it)}e.unbindTexture()}else{let $=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture($,mt.__webglTexture),ht($,w),w.mipmaps.length>0)for(let rt=0;rt<w.mipmaps.length;rt++)St(Z.__webglFramebuffer[rt],R,w,s.COLOR_ATTACHMENT0,$,rt);else St(Z.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,$,0);b(w)?v($):w.mipmaps.length>0&&s.texParameteri($,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&Ht(R)}function z(R){let w=R.textures;for(let Z=0,mt=w.length;Z<mt;Z++){let lt=w[Z];if(b(lt)&&lt.mipmapsAutoUpdate===!0){let wt=S(R),Ct=n.get(lt).__webglTexture;e.bindTexture(wt,Ct),v(wt),e.unbindTexture()}}}let le=[];function Qt(R){if(R.samples>0){if(bt(R)===!1){let w=R.textures,Z=R.width,mt=R.height,lt=s.COLOR_BUFFER_BIT,wt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(R),$=w.length>1;if($)for(let Mt=0;Mt<w.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Mt=0;Mt<w.length;Mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);let U=n.get(w[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,Z,mt,0,0,Z,mt,lt,s.NEAREST),l===!0&&(le.length=0,le.push(s.COLOR_ATTACHMENT0+Mt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&le.push(wt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let Mt=0;Mt<w.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);let U=n.get(w[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let w=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function $t(R){return Math.min(i.maxSamples,R.samples)}function bt(R){let w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ge(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function kt(R,w){let Z=R.colorSpace,mt=R.format,lt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Z!==ka&&Z!==Ts&&(me.getTransfer(Z)===be?(mt!==zi||lt!==mi)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",Z)),w}function Yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ft,this.resetTextureUnits=C,this.getTextureUnits=W,this.setTextureUnits=xt,this.setTexture2D=nt,this.setTexture2DArray=vt,this.setTexture3D=Rt,this.setTextureCube=O,this.rebindTextures=jt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=St,this.useMultisampledRTT=bt,this.dispose=k}function e1(s,t){function e(n,i=Ts){let r,o=me.getTransfer(i);if(n===mi)return s.UNSIGNED_BYTE;if(n===Lh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Dh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Od)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nd)return s.BYTE;if(n===Ud)return s.SHORT;if(n===Wo)return s.UNSIGNED_SHORT;if(n===Ih)return s.INT;if(n===Oi)return s.UNSIGNED_INT;if(n===Fi)return s.FLOAT;if(n===Bi)return s.HALF_FLOAT;if(n===Bd)return s.ALPHA;if(n===zd)return s.RGB;if(n===zi)return s.RGBA;if(n===ys)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===kd)return s.RED;if(n===Nh)return s.RED_INTEGER;if(n===rr)return s.RG;if(n===Uh)return s.RG_INTEGER;if(n===Oh)return s.RGBA_INTEGER;if(n===ul||n===fl||n===dl||n===pl)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ul)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ul)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fh||n===Bh||n===zh||n===kh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gh||n===Vh||n===Hh||n===Wh||n===Xh||n===ml||n===qh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gh||n===Vh)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wh)return r.COMPRESSED_R11_EAC;if(n===Xh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ml)return r.COMPRESSED_RG11_EAC;if(n===qh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yh||n===Zh||n===Jh||n===$h||n===Kh||n===Qh||n===jh||n===tu||n===eu||n===nu||n===iu||n===su||n===ru||n===ou)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$h)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===iu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===su)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ru)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ou)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===au||n===lu||n===cu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===au)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hu||n===uu||n===gl||n===fu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var n1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i1=`
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

}`,up=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ka(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new di({vertexShader:n1,fragmentShader:i1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dn(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fp=class extends $i{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,_=typeof XRWebGLBinding<"u",p=new up,g={},y=e.getContextAttributes(),b=null,v=null,S=[],E=[],x=new Dt,M=null,P=null,A=new xn;A.viewport=new Ge;let N=new xn;N.viewport=new Ge;let D=[A,N],H=new Eh,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=S[q];return nt===void 0&&(nt=new Uo,S[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=S[q];return nt===void 0&&(nt=new Uo,S[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=S[q];return nt===void 0&&(nt=new Uo,S[q]=nt),nt.getHandSpace()};function V(q){let nt=E.indexOf(q.inputSource);if(nt===-1)return;let vt=S[nt];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||o),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function I(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",X);for(let q=0;q<S.length;q++){let nt=E[q];nt!==null&&(E[q]=null,S[q].disconnect(nt))}L=null,k=null,p.reset();for(let q in g)delete g[q];if(t.setRenderTarget(b),u=null,f=null,d=null,i=null,v=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),P!==null){let q=P.camera;q.fov=P.fov,q.zoom=P.zoom,q.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",I),i.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Rt=null,O=null;y.depth&&(O=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=y.stencil?ws:ys,Rt=y.stencil?Wr:Oi);let Q={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Q),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ui(f.textureWidth,f.textureHeight,{format:zi,type:mi,depthTexture:new Ms(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let vt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new ui(u.framebufferWidth,u.framebufferHeight,{format:zi,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ft.setContext(i),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(q){for(let nt=0;nt<q.removed.length;nt++){let vt=q.removed[nt],Rt=E.indexOf(vt);Rt>=0&&(E[Rt]=null,S[Rt].disconnect(vt))}for(let nt=0;nt<q.added.length;nt++){let vt=q.added[nt],Rt=E.indexOf(vt);if(Rt===-1){for(let Q=0;Q<S.length;Q++)if(Q>=E.length){E.push(vt),Rt=Q;break}else if(E[Q]===null){E[Q]=vt,Rt=Q;break}if(Rt===-1)break}let O=S[Rt];O&&O.connect(vt)}}function B(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let nt=q.near,vt=q.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),H.near=N.near=A.near=nt,H.far=N.far=A.far=vt,(L!==H.near||k!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,k=H.far),H.layers.mask=q.layers.mask|6,A.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let Rt=q.parent,O=H.cameras;B(H,Rt);for(let Q=0;Q<O.length;Q++)B(O[Q],Rt);H.projectionMatrix.copy(A.projectionMatrix),H.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&q.isPerspectiveCamera&&(P={camera:q,fov:q.fov,zoom:q.zoom}),C(q,H,Rt)};function C(q,nt,vt){vt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(q){return g[q]};let W=null;function xt(q,nt){if(h=nt.getViewerPose(c||o),m=nt,h!==null){let vt=h.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let Rt=!1;vt.length!==H.cameras.length&&(H.cameras.length=0,Rt=!0);for(let st=0;st<vt.length;st++){let ht=vt[st],dt=null;if(u!==null)dt=u.getViewport(ht);else{let pt=d.getViewSubImage(f,ht);dt=pt.viewport,st===0&&(t.setRenderTargetTextures(v,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(v))}let j=D[st];j===void 0&&(j=new xn,j.layers.enable(st),j.viewport=new Ge,D[st]=j),j.matrix.fromArray(ht.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ht.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(dt.x,dt.y,dt.width,dt.height),st===0&&(H.matrix.copy(j.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Rt===!0&&H.cameras.push(j)}let O=i.enabledFeatures;if(O&&O.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let st=d.getDepthInformation(vt[0]);st&&st.isValid&&st.texture&&p.init(st,i.renderState)}if(O&&O.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let st=0;st<vt.length;st++){let ht=vt[st].camera;if(ht){let dt=g[ht];dt||(dt=new Ka,g[ht]=dt);let j=d.getCameraImage(ht);dt.sourceTexture=j}}}}for(let vt=0;vt<S.length;vt++){let Rt=E[vt],O=S[vt];Rt!==null&&O!==void 0&&O.update(Rt,nt,c||o)}W&&W(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}let ft=new y0;ft.setAnimationLoop(xt),this.setAnimationLoop=function(q){W=q},this.dispose=function(){}}},s1=new ke,P0=new ee;P0.set(-1,0,0,0,1,0,0,0,1);function r1(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Zd(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,y,b,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===yn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===yn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=t.get(g),b=y.envMap,v=y.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(P0),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=b*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,y){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===yn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let y=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function o1(s,t,e,n){let i={},r={};function o(y,b){let v=b.program;n.uniformBlockBinding(y,v,i[y.id])}function a(y,b){let v=i[y.id];v===void 0&&(m(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",p));let S=b.program;n.updateUBOMapping(y,S);let E=t.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let b=s.createBuffer(),v=y.__size,S=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,v,S),s.bindBuffer(s.UNIFORM_BUFFER,null),b}function c(y){let b=i[y.id],v=y.uniforms,S=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let E=0,x=v.length;E<x;E++){let M=v[E];if(Array.isArray(M))for(let P=0,A=M.length;P<A;P++)h(M[P],E,P,S);else h(M,E,0,S)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,b,v,S){if(f(y,b,v,S)===!0){let E=y.__offset,x=y.value;if(Array.isArray(x)){let M=0;for(let P=0;P<x.length;P++){let A=x[P],N=_(A,!0);d(A,y.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,y.__data)}}function d(y,b,v){typeof y=="number"||typeof y=="boolean"?b[v]=y:y.isMatrix3?(b[v]=y.elements[0],b[v+1]=y.elements[1],b[v+2]=y.elements[2],b[v+3]=0,b[v+4]=y.elements[3],b[v+5]=y.elements[4],b[v+6]=y.elements[5],b[v+7]=0,b[v+8]=y.elements[6],b[v+9]=y.elements[7],b[v+10]=y.elements[8],b[v+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-v),v):y.toArray(b,v)}function f(y,b,v,S){let E=y.value,x=b+"_"+v;if(Array.isArray(E)){S[x]===void 0&&(S[x]=[]);let M=S[x],P=!1;for(let A=0;A<E.length;A++)u(E[A],M,A)===!0&&(P=!0);return P}return u(E,S,x)}function u(y,b,v){if(b[v]===void 0)return typeof y=="number"||typeof y=="boolean"?b[v]=y:ArrayBuffer.isView(y)?b[v]=y.slice():b[v]=y.clone(),!0;{let S=b[v];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return b[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function m(y){let b=y.uniforms,v=0,S=16;for(let x=0,M=b.length;x<M;x++){let P=Array.isArray(b[x])?b[x]:[b[x]];for(let A=0,N=P.length;A<N;A++){let D=P[A],H=Array.isArray(D.value)?D.value:[D.value],L=Array.isArray(b[x])||Array.isArray(D.value),k=v;for(let I=0,X=H.length;I<X;I++){let B=H[I],C=_(B,L),W=v%S,xt=W%C.boundary,ft=W+xt;v+=xt,ft!==0&&S-ft<C.storage&&(v+=S-ft),I===0&&(k=v),v+=C.storage}let V=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new V((v-k)/Float32Array.BYTES_PER_ELEMENT),D.__offset=k}}let E=v%S;return E>0&&(v+=S-E),y.__size=v,y.__cache={},this}function _(y,b){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(y){let b=y.target;b.removeEventListener("dispose",p),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function g(){for(let y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:a,dispose:g}}var a1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ji=null;function l1(){return ji===null&&(ji=new ih(a1,16,16,rr,Bi),ji.name="DFG_LUT",ji.minFilter=vn,ji.magFilter=vn,ji.wrapS=Zi,ji.wrapT=Zi,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}var Zo=class{constructor(t={}){let{canvas:e=k_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=mi}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=u,p=new Set([Oh,Uh,Nh]),g=new Set([mi,Oi,Wo,Wr,Lh,Dh]),y=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},S=null,E=null,x=[],M=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,N=!1,D=null,H=null,L=null,k=null;this._outputColorSpace=hi;let V=0,I=0,X=null,B=-1,C=null,W=new Ge,xt=new Ge,ft=null,q=new te(0),nt=0,vt=e.width,Rt=e.height,O=1,Q=null,ut=null,st=new Ge(0,0,vt,Rt),ht=new Ge(0,0,vt,Rt),dt=!1,j=new Br,pt=new sh,gt=!1,G=!1,St=new ke,qt=new J,Ft=new Ge,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function se(){return X===null?O:1}let z=n;function le(T,F){return e.getContext(T,F)}let Qt,$t,bt,ge,kt,Yt,R,w,Z,mt,lt,wt,Ct,$,rt,Mt,U,it,et,Tt,yt,Et,_t;try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",at,!1),z===null){let F="webgl2";if(z=le(F,T),z===null)throw le(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(T){throw e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Kt("WebGLRenderer: "+T.message),T}function At(){Qt=new vw(z),Qt.init(),yt=new e1(z,Qt),$t=new lw(z,Qt,t,yt),bt=new jT(z,Qt),$t.reversedDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),H=z.createFramebuffer(),L=z.createFramebuffer(),k=z.createFramebuffer(),ge=new Mw(z),kt=new zT,Yt=new t1(z,Qt,bt,kt,$t,yt,ge),R=new xw(A),w=new wS(z),Et=new ow(z,w),Z=new yw(z,w,ge,Et),mt=new ww(z,Z,w,Et,ge),it=new bw(z,$t,Yt),rt=new cw(kt),lt=new BT(A,R,Qt,$t,Et,rt),wt=new r1(A,kt),Ct=new GT,$=new YT(Qt),U=new rw(A,R,bt,mt,m,l),Mt=new QT(A,mt,$t),_t=new o1(z,ge,$t,bt),et=new aw(z,Qt,ge),Tt=new Sw(z,Qt,ge),ge.programs=lt.programs,A.capabilities=$t,A.extensions=Qt,A.properties=kt,A.renderLists=Ct,A.shadowMap=Mt,A.state=bt,A.info=ge}_!==mi&&(P=new Ew(_,e.width,e.height,a,i,r));let ct=new fp(A,z);this.xr=ct,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=Qt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Qt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(vt,Rt,!1))},this.getSize=function(T){return T.set(vt,Rt)},this.setSize=function(T,F,tt=!0){if(ct.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=T,Rt=F,e.width=Math.floor(T*O),e.height=Math.floor(F*O),tt===!0&&(e.style.width=T+"px",e.style.height=F+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(vt*O,Rt*O).floor()},this.setDrawingBufferSize=function(T,F,tt){vt=T,Rt=F,O=tt,e.width=Math.floor(T*tt),e.height=Math.floor(F*tt),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(_===mi){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(W)},this.getViewport=function(T){return T.copy(st)},this.setViewport=function(T,F,tt,Y){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,F,tt,Y),bt.viewport(W.copy(st).multiplyScalar(se()).round())},this.getScissor=function(T){return T.copy(ht)},this.setScissor=function(T,F,tt,Y){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,F,tt,Y),bt.scissor(xt.copy(ht).multiplyScalar(se()).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(T){bt.setScissorTest(dt=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){ut=T},this.getClearColor=function(T){return T.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,tt=!0){let Y=0;if(T){let K=!1;if(X!==null){let Lt=X.texture.format;K=p.has(Lt)}if(K){let Lt=X.texture.type,zt=g.has(Lt),It=U.getClearColor(),Ot=U.getClearAlpha(),Wt=It.r,ie=It.g,de=It.b;zt?(y[0]=Wt,y[1]=ie,y[2]=de,y[3]=Ot,z.clearBufferuiv(z.COLOR,0,y)):(b[0]=Wt,b[1]=ie,b[2]=de,b[3]=Ot,z.clearBufferiv(z.COLOR,0,b))}else Y|=z.COLOR_BUFFER_BIT}F&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),U.dispose(),Ct.dispose(),$.dispose(),Yt.dispose(),kt.dispose(),R.dispose(),mt.dispose(),Z.dispose(),Et.dispose(),_t.dispose(),lt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Ee),ct.removeEventListener("sessionend",Se),en.stop()};function ot(T){T.preventDefault(),Xd("WebGLRenderer: Context Lost."),N=!0}function Pt(){Xd("WebGLRenderer: Context Restored."),N=!1;let T=ge.autoReset,F=Mt.enabled,tt=Mt.autoUpdate,Y=Mt.needsUpdate,K=Mt.type;At(),ge.autoReset=T,Mt.enabled=F,Mt.autoUpdate=tt,Mt.needsUpdate=Y,Mt.type=K}function at(T){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ut(T){let F=T.target;F.removeEventListener("dispose",Ut),fe(F)}function fe(T){ne(T),kt.remove(T)}function ne(T){let F=kt.get(T).programs;F!==void 0&&(F.forEach(function(tt){lt.releaseProgram(tt)}),T.isShaderMaterial&&lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,tt,Y,K,Lt){F===null&&(F=Ht);let zt=K.isMesh&&K.matrixWorld.determinantAffine()<0,It=gi(T,F,tt,Y,K);bt.setMaterial(Y,zt);let Ot=tt.index,Wt=1;if(Y.wireframe===!0){if(Ot=Z.getWireframeAttribute(tt),Ot===void 0)return;Wt=2}let ie=tt.drawRange,de=tt.attributes.position,Gt=ie.start*Wt,pe=(ie.start+ie.count)*Wt;Lt!==null&&(Gt=Math.max(Gt,Lt.start*Wt),pe=Math.min(pe,(Lt.start+Lt.count)*Wt)),Ot!==null?(Gt=Math.max(Gt,0),pe=Math.min(pe,Ot.count)):de!=null&&(Gt=Math.max(Gt,0),pe=Math.min(pe,de.count));let Ke=pe-Gt;if(Ke<0||Ke===1/0)return;Et.setup(K,Y,It,tt,Ot);let Pe,Ce=et;if(Ot!==null&&(Pe=w.get(Ot),Ce=Tt,Ce.setIndex(Pe)),K.isMesh)Y.wireframe===!0?(bt.setLineWidth(Y.wireframeLinewidth*se()),Ce.setMode(z.LINES)):Ce.setMode(z.TRIANGLES);else if(K.isLine){let Mn=Y.linewidth;Mn===void 0&&(Mn=1),bt.setLineWidth(Mn*se()),K.isLineSegments?Ce.setMode(z.LINES):K.isLineLoop?Ce.setMode(z.LINE_LOOP):Ce.setMode(z.LINE_STRIP)}else K.isPoints?Ce.setMode(z.POINTS):K.isSprite&&Ce.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Mn=K._multiDrawStarts,Vt=K._multiDrawCounts,Un=K._multiDrawCount,ye=Ot?w.get(Ot).bytesPerElement:1,cr=kt.get(Y).currentProgram.getUniforms();for(let bn=0;bn<Un;bn++)cr.setValue(z,"_gl_DrawID",bn),Ce.render(Mn[bn]/ye,Vt[bn])}else if(K.isInstancedMesh)Ce.renderInstances(Gt,Ke,K.count);else if(tt.isInstancedBufferGeometry){let Mn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Vt=Math.min(tt.instanceCount,Mn);Ce.renderInstances(Gt,Ke,Vt)}else Ce.render(Gt,Ke)};function Le(T,F,tt,Y){D!==null&&T.isNodeMaterial&&D.setObject(Y,T),gt===!0&&rt.setState(T,tt,!1),T.transparent===!0&&T.side===Ai&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,ti(T,F,Y),T.side=sr,T.needsUpdate=!0,ti(T,F,Y),T.side=Ai):ti(T,F,Y)}this.compile=function(T,F,tt=null){tt===null&&(tt=T),D!==null&&D.renderStart(T,F,tt),E=$.get(tt),E.init(F),M.push(E),tt.traverseVisible(function(K){K.isLight&&K.layers.test(F.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),T!==tt&&T.traverseVisible(function(K){K.isLight&&K.layers.test(F.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),G=this.localClippingEnabled,gt=rt.init(this.clippingPlanes,G),gt===!0&&rt.setGlobalState(this.clippingPlanes,F),D!==null&&Mt.render(E.state.shadowsArray,tt,F);let Y=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Lt=K.material;if(Lt)if(Array.isArray(Lt))for(let zt=0;zt<Lt.length;zt++){let It=Lt[zt];Le(It,tt,F,K),Y.add(It)}else Le(Lt,tt,F,K),Y.add(Lt)}),E=M.pop(),D!==null&&D.renderEnd(),Y},this.compileAsync=function(T,F,tt=null){let Y=this.compile(T,F,tt);return new Promise(K=>{function Lt(){if(Y.forEach(function(zt){let Ot=kt.get(zt).currentProgram;(Ot===void 0||Ot.isReady())&&Y.delete(zt)}),Y.size===0){K(T);return}setTimeout(Lt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Je=null;function De(T){Je&&Je(T)}function Ee(){en.stop()}function Se(){en.start()}let en=new y0;en.setAnimationLoop(De),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(T){Je=T,ct.setAnimationLoop(T),T===null?en.stop():en.start()},ct.addEventListener("sessionstart",Ee),ct.addEventListener("sessionend",Se),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(T,F);let tt=ct.enabled===!0&&ct.isPresenting===!0,Y=P!==null&&(X===null||tt)&&P.begin(A,X);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(F),F=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,F,X),E=$.get(T,M.length),E.init(F),E.state.textureUnits=Yt.getTextureUnits(),M.push(E),St.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?pt.setFromArrayCamera(F):j.setFromProjectionMatrix(St,wi,F.reversedDepth),G=this.localClippingEnabled,gt=rt.init(this.clippingPlanes,G),S=Ct.get(T,x.length),S.init(),x.push(S),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let zt=A.xr.getDepthSensingMesh();zt!==null&&Ae(zt,F,-1/0,A.sortObjects)}Ae(T,F,0,A.sortObjects),S.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&S.sort(Q,ut),jt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,jt&&U.addToRenderList(S,T),this.info.autoReset===!0&&this.info.reset(),gt===!0&&rt.beginShadows();let K=E.state.shadowsArray;if(Mt.render(K,T,F),gt===!0&&rt.endShadows(),(Y&&P.hasRenderPass())===!1){let zt=S.opaque,It=S.transmissive;if(E.setupLights(),F.isArrayCamera){let Ot=F.cameras;if(It.length>0)for(let Wt=0,ie=Ot.length;Wt<ie;Wt++){let de=Ot[Wt];jn(zt,It,T,de)}jt&&U.render(T);for(let Wt=0,ie=Ot.length;Wt<ie;Wt++){let de=Ot[Wt];Sn(S,T,de,de.viewport)}}else It.length>0&&jn(zt,It,T,F),jt&&U.render(T),Sn(S,T,F)}X!==null&&I===0&&(Yt.updateMultisampleRenderTarget(X),Yt.updateRenderTargetMipmap(X)),Y&&P.end(A),T.isScene===!0&&T.onAfterRender(A,T,F),Et.resetDefaultState(),B=-1,C=null,M.pop(),M.length>0?(E=M[M.length-1],Yt.setTextureUnits(E.state.textureUnits),gt===!0&&rt.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,D!==null&&D.renderEnd()};function Ae(T,F,tt,Y){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)tt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){let zt=F.isArrayCamera?pt:j;if(!T.frustumCulled||T.intersectsFrustum(zt)){Y&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(St);let It=mt.update(T),Ot=T.material;Ot.visible&&S.push(T,It,Ot,tt,Ft.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){let zt=F.isArrayCamera?pt:j;if(!T.frustumCulled||T.intersectsFrustum(zt)){let It=mt.update(T),Ot=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Ft.copy(It.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(St)),Array.isArray(Ot)){let Wt=It.groups;for(let ie=0,de=Wt.length;ie<de;ie++){let Gt=Wt[ie],pe=Ot[Gt.materialIndex];pe&&pe.visible&&S.push(T,It,pe,tt,Ft.z,Gt,F)}}else Ot.visible&&S.push(T,It,Ot,tt,Ft.z,null,F)}}}let Lt=T.children;for(let zt=0,It=Lt.length;zt<It;zt++)Ae(Lt[zt],F,tt,Y)}function Sn(T,F,tt,Y){let{opaque:K,transmissive:Lt,transparent:zt}=T;E.setupLightsView(tt),gt===!0&&rt.setGlobalState(A.clippingPlanes,tt),Y&&bt.viewport(W.copy(Y)),K.length>0&&Ve(K,F,tt),Lt.length>0&&Ve(Lt,F,tt),zt.length>0&&Ve(zt,F,tt),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function jn(T,F,tt,Y){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){let Gt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new ui(1,1,{generateMipmaps:!0,type:Gt?Bi:mi,minFilter:Ui,samples:Math.max(4,$t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Lt=E.state.transmissionRenderTarget[Y.id],zt=Y.viewport||W;Lt.setSize(zt.z*A.transmissionResolutionScale,zt.w*A.transmissionResolutionScale);let It=A.getRenderTarget(),Ot=A.getActiveCubeFace(),Wt=A.getActiveMipmapLevel();A.setRenderTarget(Lt),A.getClearColor(q),nt=A.getClearAlpha(),nt<1&&A.setClearColor(16777215,.5),A.clear(),jt&&U.render(tt);let ie=A.toneMapping;A.toneMapping=Qn;let de=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),gt===!0&&rt.setGlobalState(A.clippingPlanes,Y),Ve(T,tt,Y),Yt.updateMultisampleRenderTarget(Lt),Yt.updateRenderTargetMipmap(Lt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let pe=0,Ke=F.length;pe<Ke;pe++){let Pe=F[pe],{object:Ce,geometry:Mn,material:Vt,group:Un}=Pe;if(Vt.side===Ai&&Ce.layers.test(Y.layers)){let ye=Vt.side;Vt.side=yn,Vt.needsUpdate=!0,$e(Ce,tt,Y,Mn,Vt,Un),Vt.side=ye,Vt.needsUpdate=!0,Gt=!0}}Gt===!0&&(Yt.updateMultisampleRenderTarget(Lt),Yt.updateRenderTargetMipmap(Lt))}A.setRenderTarget(It,Ot,Wt),A.setClearColor(q,nt),de!==void 0&&(Y.viewport=de),A.toneMapping=ie}function Ve(T,F,tt){let Y=F.isScene===!0?F.overrideMaterial:null;for(let K=0,Lt=T.length;K<Lt;K++){let zt=T[K],{object:It,geometry:Ot,group:Wt}=zt,ie=zt.material;ie.allowOverride===!0&&Y!==null&&(ie=Y),It.layers.test(tt.layers)&&$e(It,F,tt,Ot,ie,Wt)}}function $e(T,F,tt,Y,K,Lt){D!==null&&K.isNodeMaterial&&D.setObject(T,K),T.onBeforeRender(A,F,tt,Y,K,Lt),T.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(A,F,tt,Y,T,Lt),K.transparent===!0&&K.side===Ai&&K.forceSinglePass===!1?(K.side=yn,K.needsUpdate=!0,A.renderBufferDirect(tt,F,Y,K,T,Lt),K.side=sr,K.needsUpdate=!0,A.renderBufferDirect(tt,F,Y,K,T,Lt),K.side=Ai):A.renderBufferDirect(tt,F,Y,K,T,Lt),T.onAfterRender(A,F,tt,Y,K,Lt)}function nn(T){let F=0;for(let tt of T)tt.texture!==null&&F++;return F}function ti(T,F,tt){F.isScene!==!0&&(F=Ht);let Y=kt.get(T),K=E.state.lights,Lt=E.state.shadowsArray,zt=K.state.version,It=lt.getParameters(T,K.state,Lt,F,tt,E.state.lightProbeGridArray),Ot=lt.getProgramCacheKey(It),Wt=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,Y.fog=F.fog;let ie=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=R.get(T.envMap||Y.environment,ie),Y.envMapRotation=Y.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",Ut),Wt=new Map,Y.programs=Wt,Y.programVariants=new Map);let de=Wt.get(Ot);if(de!==void 0){if(Y.currentProgram===de&&Y.lightsStateVersion===zt)return He(T,It),de}else It.uniforms=lt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,tt,It),T.onBeforeCompile(It,A),de=lt.acquireProgram(It,Ot),Wt.set(Ot,de),Y.uniforms=It.uniforms;let Gt=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Gt.clippingPlanes=rt.uniform),He(T,It),Y.needsLights=Tl(T),Y.lightsStateVersion=zt,Y.needsLights&&(Gt.ambientLightColor.value=K.state.ambient,Gt.lightProbe.value=K.state.probe,Gt.sunLights.value=K.state.sun,Gt.sunLightShadows.value=K.state.sunShadow,Gt.directionalLights.value=K.state.directional,Gt.directionalLightShadows.value=K.state.directionalShadow,Gt.spotLights.value=K.state.spot,Gt.spotLightShadows.value=K.state.spotShadow,Gt.rectAreaLights.value=K.state.rectArea,Gt.ltc_1.value=K.state.rectAreaLTC1,Gt.ltc_2.value=K.state.rectAreaLTC2,Gt.pointLights.value=K.state.point,Gt.pointLightShadows.value=K.state.pointShadow,Gt.hemisphereLights.value=K.state.hemi,Gt.sunShadowMatrix.value=K.state.sunShadowMatrix,Gt.sunShadowCascade.value=K.state.sunShadowCascade,Gt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Gt.spotLightMatrix.value=K.state.spotLightMatrix,Gt.spotLightMap.value=K.state.spotLightMap,Gt.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.numLightProbeGrids=nn(E.state.lightProbeGridArray),Y.currentProgram=de,Y.uniformsList=null,de}function Yr(T,F,tt,Y,K){let Lt=kt.get(T),zt=Lt.currentProgram.id+","+Y+","+K,It=Lt.programVariants.get(zt);return It===void 0?(It=ti(T,F,tt),Lt.programVariants.set(zt,It)):(Lt.currentProgram=It,Lt.uniformsList=null,Lt.outputColorSpace=Y,Lt.toneMapping=K),It}function sn(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=qo.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function He(T,F){let tt=kt.get(T);tt.outputColorSpace=F.outputColorSpace,tt.batching=F.batching,tt.batchingColor=F.batchingColor,tt.instancing=F.instancing,tt.instancingColor=F.instancingColor,tt.instancingMorph=F.instancingMorph,tt.skinning=F.skinning,tt.morphTargets=F.morphTargets,tt.morphNormals=F.morphNormals,tt.morphColors=F.morphColors,tt.morphTargetsCount=F.morphTargetsCount,tt.numClippingPlanes=F.numClippingPlanes,tt.numIntersection=F.numClipIntersection,tt.vertexAlphas=F.vertexAlphas,tt.vertexTangents=F.vertexTangents,tt.toneMapping=F.toneMapping}function gi(T,F,tt,Y,K){F.isScene!==!0&&(F=Ht),Yt.resetTextureUnits();let Lt=F.fog,zt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?F.environment:null,It=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:me.workingColorSpace,Ot=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Wt=R.get(Y.envMap||zt,Ot),ie=Y.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,de=!!tt.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Gt=!!tt.morphAttributes.position,pe=!!tt.morphAttributes.normal,Ke=!!tt.morphAttributes.color,Pe=Qn;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Pe=A.toneMapping);let Ce=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Mn=Ce!==void 0?Ce.length:0,Vt=kt.get(Y),Un=E.state.lights;if(gt===!0&&(G===!0||T!==C)){let Ue=T===C&&Y.id===B;rt.setState(Y,T,Ue)}let ye=!1,cr=!1;Y.version===Vt.__version?Vt.needsLights&&Vt.lightsStateVersion!==Un.state.version||K.isBatchedMesh&&Vt.batching===!1||!K.isBatchedMesh&&Vt.batching===!0||K.isBatchedMesh&&Vt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Vt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Vt.instancing===!1||!K.isInstancedMesh&&Vt.instancing===!0||K.isSkinnedMesh&&Vt.skinning===!1||!K.isSkinnedMesh&&Vt.skinning===!0||K.isInstancedMesh&&Vt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Vt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Vt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Vt.instancingMorph===!1&&K.morphTexture!==null||Vt.envMap!==Wt||Y.fog===!0&&Vt.fog!==Lt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==rt.numPlanes||Vt.numIntersection!==rt.numIntersection)||Vt.vertexAlphas!==ie||Vt.vertexTangents!==de||Vt.morphTargets!==Gt||Vt.morphNormals!==pe||Vt.morphColors!==Ke||Vt.morphTargetsCount!==Mn||Vt.numLightProbeGrids!==nn(E.state.lightProbeGridArray)?ye=!0:(Vt.outputColorSpace!==It||Vt.toneMapping!==Pe)&&(cr=!0):(ye=!0,Vt.__version=Y.version);let bn=Vt.currentProgram;(ye===!0||cr===!0)&&(bn=cr===!0?Yr(Y,F,K,It,Pe):ti(Y,F,K),D&&Y.isNodeMaterial&&D.onUpdateProgram(Y,bn,Vt));let El=!1,Cs=!1,hr=!1,ve=bn.getUniforms(),pn=Vt.uniforms;if(bt.useProgram(bn.program)&&(El=!0,Cs=!0,hr=!0),Y.id!==B&&(B=Y.id,Cs=!0),El||C!==T){bt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ve.setValue(z,"projectionMatrix",T.projectionMatrix),ve.setValue(z,"viewMatrix",T.matrixWorldInverse);let cn=ve.map.cameraPosition;cn!==void 0&&cn.setValue(z,qt.setFromMatrixPosition(T.matrixWorld)),$t.logarithmicDepthBuffer&&ve.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ve.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),C!==T&&(C=T,Cs=!0,hr=!0)}if(Vt.needsLights&&(Un.state.sunShadowMap.length>0&&ve.setValue(z,"sunShadowMap",Un.state.sunShadowMap,Yt),Un.state.directionalShadowMap.length>0&&ve.setValue(z,"directionalShadowMap",Un.state.directionalShadowMap,Yt),Un.state.spotShadowMap.length>0&&ve.setValue(z,"spotShadowMap",Un.state.spotShadowMap,Yt),Un.state.pointShadowMap.length>0&&ve.setValue(z,"pointShadowMap",Un.state.pointShadowMap,Yt)),K.isSkinnedMesh){ve.setOptional(z,K,"bindMatrix"),ve.setOptional(z,K,"bindMatrixInverse");let Ue=K.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ve.setValue(z,"boneTexture",Ue.boneTexture,Yt))}K.isBatchedMesh&&(ve.setOptional(z,K,"batchingTexture"),ve.setValue(z,"batchingTexture",K._matricesTexture,Yt),ve.setOptional(z,K,"batchingIdTexture"),ve.setValue(z,"batchingIdTexture",K._indirectTexture,Yt),ve.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&ve.setValue(z,"batchingColorTexture",K._colorsTexture,Yt));let Ci=tt.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&it.update(K,tt,bn),(Cs||Vt.receiveShadow!==K.receiveShadow)&&(Vt.receiveShadow=K.receiveShadow,ve.setValue(z,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&F.environment!==null&&(pn.envMapIntensity.value=F.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=l1()),Cs){if(ve.setValue(z,"toneMappingExposure",A.toneMappingExposure),Vt.needsLights&&$o(pn,hr),Lt&&Y.fog===!0&&wt.refreshFogUniforms(pn,Lt),wt.refreshMaterialUniforms(pn,Y,O,Rt,E.state.transmissionRenderTarget[T.id]),Vt.needsLights&&Vt.numLightProbeGrids>0){let Ue=v,cn=0;for(let is of E.state.lightProbeGridArray)is.texture!==null&&(Ue.textures[cn]=is.texture,Ue.min[cn]=is.boundingBox.min,Ue.max[cn]=is.boundingBox.max,Ue.resolution[cn]=is.resolution,cn++);for(let is in Ue)Ue[is].length=cn;pn.probesSH.value=Ue.textures,pn.probesMin.value=Ue.min,pn.probesMax.value=Ue.max,pn.probesResolution.value=Ue.resolution}qo.upload(z,sn(Vt),pn,Yt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(qo.upload(z,sn(Vt),pn,Yt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ve.setValue(z,"center",K.center),ve.setValue(z,"modelViewMatrix",K.modelViewMatrix),ve.setValue(z,"normalMatrix",K.normalMatrix),ve.setValue(z,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){let Ue=Y.uniformsGroups;for(let cn=0,is=Ue.length;cn<is;cn++){let xp=Ue[cn];_t.update(xp,bn),_t.bind(xp,bn)}}return bn}function $o(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Tl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(T,F,tt){let Y=kt.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),kt.get(T.texture).__webglTexture=F,kt.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:tt,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let tt=kt.get(T);tt.__webglFramebuffer=F,tt.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,tt=0){X=T,V=F,I=tt;let Y=null,K=!1,Lt=!1;if(T){let It=kt.get(T);if(It.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(z.FRAMEBUFFER,It.__webglFramebuffer),W.copy(T.viewport),xt.copy(T.scissor),ft=T.scissorTest,bt.viewport(W),bt.scissor(xt),bt.setScissorTest(ft),B=-1;return}else if(It.__webglFramebuffer===void 0)Yt.setupRenderTarget(T);else if(It.__hasExternalTextures)Yt.rebindTextures(T,kt.get(T.texture).__webglTexture,kt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ie=T.depthTexture;if(It.__boundDepthTexture!==ie){if(ie!==null&&kt.has(ie)&&(T.width!==ie.image.width||T.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(T)}}let Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Lt=!0);let Wt=kt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?Y=Wt[F][tt]:Y=Wt[F],K=!0):T.samples>0&&Yt.useMultisampledRTT(T)===!1?Y=kt.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[tt]:Y=Wt,W.copy(T.viewport),xt.copy(T.scissor),ft=T.scissorTest}else W.copy(st).multiplyScalar(O).floor(),xt.copy(ht).multiplyScalar(O).floor(),ft=dt;if(tt!==0&&(Y=H),bt.bindFramebuffer(z.FRAMEBUFFER,Y)&&bt.drawBuffers(T,Y),bt.viewport(W),bt.scissor(xt),bt.setScissorTest(ft),K){let It=kt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,It.__webglTexture,tt)}else if(Lt){let It=F;for(let Ot=0;Ot<T.textures.length;Ot++){let Wt=kt.get(T.textures[Ot]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ot,Wt.__webglTexture,tt,It)}}else if(T!==null&&tt!==0){let It=kt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,It.__webglTexture,tt)}B=-1};function As(T){let F=kt.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=$t.textureFormatReadable(T.format),F.__typeReadable=$t.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,tt,Y,K,Lt,zt,It=0){if(!(T&&T.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=kt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&zt!==void 0&&(Ot=Ot[zt],Array.isArray(Ot)&&(Ot=Ot[0])),Ot){bt.bindFramebuffer(z.FRAMEBUFFER,Ot);try{let Wt=T.textures[It],ie=Wt.format,de=Wt.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It);let Gt=As(Wt);if(Gt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-Y&&tt>=0&&tt<=T.height-K&&z.readPixels(F,tt,Y,K,yt.convert(ie),yt.convert(de),Lt)}finally{let Wt=X!==null?kt.get(X).__webglFramebuffer:null;bt.bindFramebuffer(z.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(T,F,tt,Y,K,Lt,zt,It=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=kt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&zt!==void 0&&(Ot=Ot[zt],Array.isArray(Ot)&&(Ot=Ot[0])),Ot)if(F>=0&&F<=T.width-Y&&tt>=0&&tt<=T.height-K){bt.bindFramebuffer(z.FRAMEBUFFER,Ot);let Wt=T.textures[It],ie=Wt.format,de=Wt.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It);let Gt=As(Wt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,pe),z.bufferData(z.PIXEL_PACK_BUFFER,Lt.byteLength,z.STREAM_READ),z.readPixels(F,tt,Y,K,yt.convert(ie),yt.convert(de),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ke=X!==null?kt.get(X).__webglFramebuffer:null;bt.bindFramebuffer(z.FRAMEBUFFER,Ke);let Pe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await V_(z,Pe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,pe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Lt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(pe),z.deleteSync(Pe),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,tt=0){let Y=Math.pow(2,-tt),K=Math.floor(T.image.width*Y),Lt=Math.floor(T.image.height*Y),zt=F!==null?F.x:0,It=F!==null?F.y:0;Yt.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,tt,0,0,zt,It,K,Lt),bt.unbindTexture()},this.copyTextureToTexture=function(T,F,tt=null,Y=null,K=0,Lt=0){let zt,It,Ot,Wt,ie,de,Gt,pe,Ke,Pe=T.isCompressedTexture?T.mipmaps[Lt]:T.image;if(tt!==null)zt=tt.max.x-tt.min.x,It=tt.max.y-tt.min.y,Ot=tt.isBox3?tt.max.z-tt.min.z:1,Wt=tt.min.x,ie=tt.min.y,de=tt.isBox3?tt.min.z:0;else{let ve=Math.pow(2,-K);zt=Math.floor(Pe.width*ve),It=Math.floor(Pe.height*ve),T.isDataArrayTexture?Ot=Pe.depth:T.isData3DTexture?Ot=Math.floor(Pe.depth*ve):Ot=1,Wt=0,ie=0,de=0}Y!==null?(Gt=Y.x,pe=Y.y,Ke=Y.z):(Gt=0,pe=0,Ke=0);let Ce=yt.convert(F.format),Mn=yt.convert(F.type),Vt;F.isData3DTexture?(Yt.setTexture3D(F,0),Vt=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Yt.setTexture2DArray(F,0),Vt=z.TEXTURE_2D_ARRAY):(Yt.setTexture2D(F,0),Vt=z.TEXTURE_2D),bt.activeTexture(z.TEXTURE0),bt.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),bt.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),bt.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let Un=bt.getParameter(z.UNPACK_ROW_LENGTH),ye=bt.getParameter(z.UNPACK_IMAGE_HEIGHT),cr=bt.getParameter(z.UNPACK_SKIP_PIXELS),bn=bt.getParameter(z.UNPACK_SKIP_ROWS),El=bt.getParameter(z.UNPACK_SKIP_IMAGES);bt.pixelStorei(z.UNPACK_ROW_LENGTH,Pe.width),bt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe.height),bt.pixelStorei(z.UNPACK_SKIP_PIXELS,Wt),bt.pixelStorei(z.UNPACK_SKIP_ROWS,ie),bt.pixelStorei(z.UNPACK_SKIP_IMAGES,de);let Cs=T.isDataArrayTexture||T.isData3DTexture,hr=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let ve=kt.get(T),pn=kt.get(F),Ci=kt.get(ve.__renderTarget),Ue=kt.get(pn.__renderTarget);bt.bindFramebuffer(z.READ_FRAMEBUFFER,Ci.__webglFramebuffer),bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let cn=0;cn<Ot;cn++)Cs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,kt.get(T).__webglTexture,K,de+cn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,kt.get(F).__webglTexture,Lt,Ke+cn)),z.blitFramebuffer(Wt,ie,Wt+zt,ie+It,Gt,pe,Gt+zt,pe+It,z.DEPTH_BUFFER_BIT,z.NEAREST);bt.bindFramebuffer(z.READ_FRAMEBUFFER,null),bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||kt.has(T)){let ve=kt.get(T),pn=kt.get(F);bt.bindFramebuffer(z.READ_FRAMEBUFFER,L),bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,k);for(let Ci=0;Ci<Ot;Ci++)Cs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ve.__webglTexture,K,de+Ci):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ve.__webglTexture,K),hr?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,pn.__webglTexture,Lt,Ke+Ci):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pn.__webglTexture,Lt),K!==0?z.blitFramebuffer(Wt,ie,Wt+zt,ie+It,Gt,pe,Gt+zt,pe+It,z.COLOR_BUFFER_BIT,z.NEAREST):hr?z.copyTexSubImage3D(Vt,Lt,Gt,pe,Ke+Ci,Wt,ie,zt,It):z.copyTexSubImage2D(Vt,Lt,Gt,pe,Wt,ie,zt,It);bt.bindFramebuffer(z.READ_FRAMEBUFFER,null),bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else hr?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Vt,Lt,Gt,pe,Ke,zt,It,Ot,Ce,Mn,Pe.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Vt,Lt,Gt,pe,Ke,zt,It,Ot,Ce,Pe.data):z.texSubImage3D(Vt,Lt,Gt,pe,Ke,zt,It,Ot,Ce,Mn,Pe):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Lt,Gt,pe,zt,It,Ce,Mn,Pe.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Lt,Gt,pe,Pe.width,Pe.height,Ce,Pe.data):z.texSubImage2D(z.TEXTURE_2D,Lt,Gt,pe,zt,It,Ce,Mn,Pe);bt.pixelStorei(z.UNPACK_ROW_LENGTH,Un),bt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye),bt.pixelStorei(z.UNPACK_SKIP_PIXELS,cr),bt.pixelStorei(z.UNPACK_SKIP_ROWS,bn),bt.pixelStorei(z.UNPACK_SKIP_IMAGES,El),Lt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&z.generateMipmap(Vt),bt.unbindTexture()},this.initRenderTarget=function(T){kt.get(T).__webglFramebuffer===void 0&&Yt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Yt.setTextureCube(T,0):T.isData3DTexture?Yt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Yt.setTexture2DArray(T,0):Yt.setTexture2D(T,0),bt.unbindTexture()},this.resetState=function(){V=0,I=0,X=null,bt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};function I0(s,t=Math.PI/3){let e=s.index?s.toNonIndexed():s,n=e.attributes.position,i=n.count,r;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)r=n.array;else{r=new Float64Array(i*3);for(let v=0;v<i;v++)r[3*v+0]=n.getX(v),r[3*v+1]=n.getY(v),r[3*v+2]=n.getZ(v)}let o=Math.cos(t),a=(1+1e-10)*100,l=i/3,c=new Float64Array(l*3);for(let v=0;v<l;v++){let S=9*v,E=r[S+0],x=r[S+1],M=r[S+2],P=r[S+3],A=r[S+4],N=r[S+5],D=r[S+6],H=r[S+7],L=r[S+8],k=D-P,V=H-A,I=L-N,X=E-P,B=x-A,C=M-N,W=V*C-I*B,xt=I*X-k*C,ft=k*B-V*X,q=1/(Math.sqrt(W*W+xt*xt+ft*ft)||1);c[3*v+0]=W*q,c[3*v+1]=xt*q,c[3*v+2]=ft*q}let h=new Int32Array(i),d=new Float64Array(i*3),f=1;for(;f<i*2;)f<<=1;let u=f-1,m=new Int32Array(f),_=0;for(let v=0;v<i;v++){let S=3*v,E=Math.trunc(r[S+0]*a),x=Math.trunc(r[S+1]*a),M=Math.trunc(r[S+2]*a),P=(Math.imul(E,73856093)^Math.imul(x,19349663)^Math.imul(M,83492791))&u;for(;;){let A=m[P];if(A===0){let D=3*_;d[D+0]=E,d[D+1]=x,d[D+2]=M,m[P]=_+1,h[v]=_++;break}let N=3*(A-1);if(d[N+0]===E&&d[N+1]===x&&d[N+2]===M){h[v]=A-1;break}P=P+1&u}}let p=new Int32Array(_+1);for(let v=0;v<i;v++)p[h[v]+1]++;for(let v=0;v<_;v++)p[v+1]+=p[v];let g=new Int32Array(i),y=p.slice(0,_);for(let v=0;v<l;v++){let S=3*v;g[y[h[S+0]]++]=v,g[y[h[S+1]]++]=v,g[y[h[S+2]]++]=v}let b=new Float32Array(i*3);for(let v=0;v<l;v++){let S=3*v,E=c[S+0],x=c[S+1],M=c[S+2];for(let P=0;P<3;P++){let A=S+P,N=h[A],D=0,H=0,L=0;for(let V=p[N],I=p[N+1];V<I;V++){let X=3*g[V],B=c[X+0],C=c[X+1],W=c[X+2];E*B+x*C+M*W>o&&(D+=B,H+=C,L+=W)}let k=1/(Math.sqrt(D*D+H*H+L*L)||1);b[3*A+0]=D*k,b[3*A+1]=H*k,b[3*A+2]=L*k}}return e.setAttribute("normal",new Ti(b,3,!1)),e}var bl=28,wl=12,L0=-2.6,dp={s:.6,rx:0,ry:0},qr={color:"#c9ccc6",roughness:.16,env:1.35},Sl=.62,xu=32,D0=.0042,pp=s=>s*s*(3-2*s),or=(s,t,e)=>Math.min(e,Math.max(t,s)),Es=(s,t,e)=>s+(t-s)*e,c1=[[[20.5,15],[20.5,110.5],[56,110.5]],[[52,23.5],[112,23.5],[64,110.5],[120,110.5]]],h1=8.5,Ml=5.4,N0=4.5,mp=1/104;function u1(s){let t=s.map(([a,l])=>new Dt(a,-l)),e=(a,l)=>{let c=l.clone().sub(a).normalize();return new Dt(-c.y,c.x)},n=t.length-1;t[0].add(t[1].clone().sub(t[0]).normalize().multiplyScalar(Ml)),t[n].add(t[n-1].clone().sub(t[n]).normalize().multiplyScalar(Ml));let i=h1-Ml,r=[],o=[];for(let a=0;a<=n;a++){let l=a>0?e(t[a-1],t[a]):null,c=a<n?e(t[a],t[a+1]):null,h;if(l&&c){let d=l.clone().add(c).normalize();h=d.multiplyScalar(i/d.dot(l))}else h=(l||c).clone().multiplyScalar(i);r.push(t[a].clone().add(h)),o.push(t[a].clone().sub(h))}return new Bo([...r,...o.reverse()])}function gp(s,t){let e=new Ji,n=[];for(let i of c1){let r=new ol(u1(i),{depth:N0,bevelEnabled:!0,bevelThickness:Ml,bevelSize:Ml,bevelSegments:t?6:12,curveSegments:1,steps:1});r.translate(-70,67,-N0/2),r.scale(mp,mp,mp),r=I0(r,.7),r.computeBoundingBox();let o=r.boundingBox.getCenter(new J);r.translate(-o.x,-o.y,-o.z);let a=new Dn(r,s);a.position.copy(o),a.userData.home=o.clone(),e.add(a),n.push(a)}return{group:e,parts:n}}function _p(s){let t=new Ks;t.add(new Dn(new tr(60,60,60),new Fr({color:1710873,side:yn})));let e=(r,o,a,l,c)=>{let h=new Dn(new bs(r,o),new Fr({color:new te(l).multiplyScalar(c),side:Ai,toneMapped:!1}));h.position.set(...a),h.lookAt(0,0,0),t.add(h)};e(16,16,[0,18,3],"#ffffff",5),e(3,22,[-18,2,5],"#ffffff",9),e(9,12,[18,-2,-3],"#fff3e6",3.5),e(26,8,[0,-16,7],"#ffffff",1.4),e(6,6,[11,7,-17],"#ff4b1f",7),e(30,14,[0,3,22],"#ffffff",.5);let n=new Yo(s),i=n.fromScene(t,.03).texture;return n.dispose(),i}var U0=`
uniform vec3 uTop; uniform vec3 uBottom; uniform float uEdge;
vec3 pageColor(float screenY) { return screenY > uEdge ? uTop : uBottom; }`;function f1(s){let t=new di({uniforms:s,vertexShader:"varying float vY; void main() { vY = position.y * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`${U0} varying float vY;
      void main() {
        gl_FragColor = vec4(pageColor(vY), 1.0);
        #include <colorspace_fragment>
      }`,depthTest:!1,depthWrite:!1}),e=new Dn(new bs(2,2),t);return e.frustumCulled=!1,e.renderOrder=-10,e}function d1(s,t,e,n){let r=document.createElement("canvas"),o=r.getContext("2d"),a=m=>{o.font=`900 ${m}px Anybody, "Arial Black", sans-serif`,"fontStretch"in o&&(o.fontStretch="extra-expanded")};a(400);let l=o.measureText("H").actualBoundingBoxAscent||280,c=400*(512*.8)/l;a(c);let h=o.measureText(s).width+c*.42,d=512;if(h>e){let m=e/h;c*=m,h=e,d=Math.round(512*m)}r.width=Math.ceil(h),r.height=d,a(c),o.fillStyle="#000",o.fillRect(0,0,r.width,r.height);let f=o.measureText("H").actualBoundingBoxAscent;o.textBaseline="alphabetic",t?(o.strokeStyle="#fff",o.lineWidth=Math.max(2,c*.016),o.lineJoin="round",o.strokeText(s,c*.21,(d+f)/2)):(o.fillStyle="#fff",o.fillText(s,c*.21,(d+f)/2));let u=new Ja(r);return u.wrapS=Lo,u.minFilter=Ui,u.magFilter=vn,u.anisotropy=n,u.userData.aspect=r.width/r.height,u}var O0=7;function p1(s,t,e,n,i){let r=new Map,o=(h,d)=>{let f=h+"|"+d;return r.has(f)||r.set(f,d1(h,d,n,i)),r.get(f)},a=new bs(1,1),l=new Ji,c=[];for(let h=0;h<O0;h++){let d=o(s[h%s.length],h%2===0),f=new di({uniforms:{...t,uMap:{value:d},uInk:{value:e},uRepeat:{value:1},uOffset:{value:h*.37},uShear:{value:0}},vertexShader:"varying vec2 vUv; varying vec4 vClip; void main() { vUv = uv; vClip = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = vClip; }",fragmentShader:`${U0}
        uniform sampler2D uMap; uniform vec3 uInk; uniform float uRepeat; uniform float uOffset; uniform float uShear;
        varying vec2 vUv; varying vec4 vClip;
        void main() {
          float m = texture2D(uMap, vec2(vUv.x * uRepeat + uOffset + (vUv.y - 0.5) * uShear, vUv.y)).r;
          float sy = vClip.y / vClip.w * 0.5 + 0.5;
          gl_FragColor = vec4(mix(pageColor(sy), uInk, m), 1.0);
          #include <colorspace_fragment>
        }`}),u=new Dn(a,f);u.renderOrder=-5,u.visible=!1,l.add(u),c.push({mesh:u,mat:f,aspect:d.userData.aspect,dir:h%2?1:-1,speed:.75+h*7%5*.11})}return{group:l,rows:c}}function F0(s,{still:t=!1,coarse:e=!1}={}){let n;try{n=new Zo({canvas:s,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return null}if(!n.capabilities.isWebGL2)return n.dispose(),null;n.toneMapping=Qn;let i=getComputedStyle(document.documentElement),r=I=>new te(i.getPropertyValue(I).trim()),o=r("--paper"),a=r("--ink"),l=r("--accent"),c={paper:{bg:o,fg:a},ink:{bg:a,fg:o},accent:{bg:l,fg:a}},h=new Ks,d=new xn(bl,1,.1,60);d.position.z=wl,h.environment=_p(n);let f={uTop:{value:o.clone()},uBottom:{value:o.clone()},uEdge:{value:-1}};h.add(f1(f));let u=new kr({color:16777215,metalness:0,roughness:.055,transmission:1,thickness:.62,ior:1.52,dispersion:6,attenuationColor:new te("#dfe6e3"),attenuationDistance:1.9,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.15,specularIntensity:1}),{group:m}=gp(u,e);h.add(m);let _=[...document.querySelectorAll("section[data-theme]")].map(I=>({el:I,theme:c[I.dataset.theme]||c.paper,band:I.querySelector(".hero-rows, .contact-rows"),top:0,opaque:!1,rows:null})),p=_.filter(I=>I.band),g=Math.min(4096,n.capabilities.maxTextureSize),y=n.capabilities.getMaxAnisotropy(),b=()=>{for(let I of p){if(I.rows)continue;let X=[...I.band.querySelectorAll("p")].map(B=>B.textContent.trim().toUpperCase());I.rows=p1(X,f,I.theme.fg,g,y),h.add(I.rows.group)}},v=1,S=1,E=I=>{let X=2*(wl-I)*Math.tan(bl*Math.PI/360);return{h:X,w:X*(v/S)}};function x(){v=document.documentElement.clientWidth,S=window.innerHeight,n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.5:2)),n.setSize(v,S,!1),d.aspect=v/S,d.updateProjectionMatrix();let I=window.scrollY;for(let X of _){let B=X.el.parentElement.classList.contains("pin-spacer")?X.el.parentElement:X.el;X.top=B.getBoundingClientRect().top+I,X.opaque=!/rgba\([^)]*,\s*0\)$|transparent/.test(getComputedStyle(X.el).backgroundColor)}}let M={x:0,y:0,tx:0,ty:0},P={intro:t?1:0,started:!1},A=new te("#ffffff"),N=new te(qr.color),D=!0;window.addEventListener("pointermove",I=>{I.pointerType==="mouse"&&(M.tx=I.clientX/v-.5,M.ty=I.clientY/S-.5)},{passive:!0});function H(I,X,B){M.x=Es(M.x,M.tx,.06),M.y=Es(M.y,M.ty,.06);let C=Math.max(1,document.documentElement.scrollHeight-S),W=S*.9,xt=p[p.length-1],ft=pp(or(I.y/W,0,1)),q=p.length>1?pp(or((C-I.y)/W,0,1)):1,nt=B?Math.max(1-ft,1-q):1,vt=p.length>1&&I.y>C/2,Rt=vt?xt:p[0],O=Rt.band.getBoundingClientRect();I.atEnd===void 0&&(I.atEnd=vt),I.atEnd!==vt&&(I.spin+=(vt?1:-1)*C*D0,I.atEnd=vt);let Q=(vt?I.y-C:I.y)*D0,ut=Math.round(I.spin/(Math.PI*2))*Math.PI*2;I.spin+=(ut-I.spin)*(1-Math.exp(-X*8*nt*nt));let st=I.rail||{x:v-or(v*.034,20,60)/2,top:S*.24,height:S*.52,px:xu},ht=E(0),dt=dp.s*Math.min(ht.h,ht.w*.84)/ht.h*S,j=st.px*Math.pow(dt/st.px,nt),pt=st.x,gt=st.top+or(I.y/C,0,1)*st.height,G=Es(pt,v/2,nt),St=Es(gt,O.top+O.height/2,nt),qt=t?0:1;return I.spin+=X*.5*(1-nt),{u:nt,cx:G,cy:St,px:j,railY:gt,overlay:B&&nt<Sl,metal:1-pp(or((nt-Sl)/(1-Sl),0,1)),x:(G/v-.5)*ht.w+M.x*.12*nt,y:(.5-St/S)*ht.h-M.y*.08*nt+qt*Math.sin(I.time*.9)*.035*nt,scale:j/S*ht.h,rx:dp.rx+or(I.vel*3e-4,-.6,.6)*(1-nt)+qt*Math.cos(I.time*.55)*Es(.07,.03,nt)+M.y*.42*nt,ry:dp.ry+Q+I.spin+qt*Math.sin(I.time*.42)*Es(.16,.055,nt)+M.x*.6*nt,rz:qt*Math.sin(I.time*.31)*.025}}function L(I,X){let B=E(L0);for(let C of p){if(!C.rows)continue;let W=C.band.getBoundingClientRect(),ft=W.bottom>0&&W.top<S&&W.height>40?or(Math.round(W.height/(v*.17)),3,O0):0,q=ft?W.height/ft:0;C.rows.rows.forEach((nt,vt)=>{if(nt.mesh.visible=vt<ft,vt>=ft)return;let Rt=q/S*B.h,O=B.w*1.06;nt.mesh.scale.set(O,Rt,1),nt.mesh.position.set(0,(.5-(W.top+q*(vt+.5))/S)*B.h,L0),nt.mat.uniforms.uRepeat.value=O/(Rt*nt.aspect),t||(nt.mat.uniforms.uOffset.value+=nt.dir*I*(nt.speed*.05*B.w+X*.0016*B.w)/(Rt*nt.aspect)),nt.mat.uniforms.uShear.value=Es(nt.mat.uniforms.uShear.value,or(X*35e-5,-.06,.06)*nt.dir,.12)})}}function k(I){let X=0;for(let W=0;W<_.length;W++)_[W].top<=I+1&&(X=W);let B=_[X],C=_[X+1];return f.uTop.value=B.theme.bg,C&&C.top-I<S?(f.uBottom.value=C.theme.bg,f.uEdge.value=1-(C.top-I)/S):(f.uBottom.value=B.theme.bg,f.uEdge.value=-1),!(B.opaque&&(!C||C.top-I>=S||C.opaque))}function V(I,X,B){if(!P.started||!k(X.y)&&!D)return;D=!1;let W=P.intro;m.visible=!B.overlay,m.position.set(B.x,B.y,0),m.scale.setScalar(B.scale*(.72+.28*W)),m.rotation.set(B.rx,B.ry-(1-W)*1.9,B.rz),u.metalness=B.metal,u.transmission=Math.max(.001,1-B.metal),u.roughness=Es(.055,qr.roughness,B.metal),u.envMapIntensity=Es(1.15,qr.env,B.metal),u.color.lerpColors(A,N,B.metal),L(Math.min(I,.05),X.vel),n.render(h,d)}return s.addEventListener("webglcontextlost",I=>{I.preventDefault(),document.documentElement.classList.remove("gl"),P.started=!1}),{state:P,layout:x,pose:H,frame:V,start(){b(),x(),P.started=!0,D=!0}}}function B0(s=!1){let t=document.createElement("canvas");t.className="charm",t.setAttribute("aria-hidden","true");let e=document.createElement("div");e.className="rail",e.setAttribute("aria-hidden","true"),document.body.append(e,t);let n;try{n=new Zo({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return t.remove(),e.remove(),null}n.setClearColor(0,0),n.toneMapping=Qn;let i=new Ks,r=new xn(bl,1,.1,60);r.position.z=wl,i.environment=_p(n);let o=new kr({color:new te(qr.color),metalness:1,roughness:qr.roughness,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:qr.env}),{group:a}=gp(o,s);i.add(a);let l={x:0,top:0,height:0,px:xu},c=0,h=0,d=0,f=!1,u=!0,m="";function _(){c=document.documentElement.clientWidth,h=window.innerHeight;let g=e.getBoundingClientRect();g.height?(l.x=g.left+g.width/2,l.top=g.top,l.height=g.height):(l.x=c-20,l.top=h*.24,l.height=h*.52),l.px=Math.min(xu,Math.max(s?19:18,(c-l.x)*1.12)),e.style.setProperty("--gap",(l.px*.86).toFixed(1)+"px");let y=2*wl*Math.tan(bl*Math.PI/360),b=.6*Math.min(y,y*(c/h)*.84)/y*h;d=Math.ceil(l.px*Math.pow(b/l.px,Sl)*2.3),t.style.width=t.style.height=d+"px",n.setPixelRatio(Math.min(window.devicePixelRatio||1,3)),n.setSize(d,d,!1),r.aspect=c/h}function p(g){if(!u)return;f!==g.overlay&&(f=g.overlay,t.style.visibility=f?"visible":"hidden"),e.classList.toggle("is-on",g.u<.16);let y=(g.railY-l.top).toFixed(1)+"px";if(y!==m&&(m=y,e.style.setProperty("--y",y)),!f)return;let b=Math.round(g.cx-d/2),v=Math.round(g.cy-d/2);t.style.transform=`translate3d(${b}px,${v}px,0)`,r.setViewOffset(c,h,b,v,d,d),a.position.set(g.x,g.y,0),a.scale.setScalar(g.scale),a.rotation.set(g.rx,g.ry,g.rz),n.render(i,r)}return t.addEventListener("webglcontextlost",g=>{g.preventDefault(),u=!1,t.remove(),e.remove()}),{layout:_,frame:p,line:l}}var z0=Rg();Lg();Pg();var ki=F0(xe("[data-gl]"),{still:Ye,coarse:!xc});ki&&Ws.classList.add("gl");var m1=Pr("section[data-theme]");function g1(){for(let s of m1){let t=s.parentElement.classList.contains("pin-spacer")?s.parentElement:s,e=t.getBoundingClientRect();if(e.top<=36&&e.bottom>36){document.body.dataset.theme!==s.dataset.theme&&(document.body.dataset.theme=s.dataset.theme);return}}}re.ticker.add(g1);Ye||Pr("[data-scrub-words]").forEach(s=>{Vs.create(s,{type:"words",autoSplit:!0,onSplit:t=>re.fromTo(t.words,{opacity:.13},{opacity:1,ease:"none",stagger:.1,scrollTrigger:{trigger:s,start:"top 92%",end:"bottom 68%",scrub:!0}})})});var vu=xe("[data-work]");if(vu){let s=xe(".work"),t=xe(".work-window",s),e=xe("[data-now]",s),n=xe("[data-all]",s),i=xe("[data-prev]",s),r=xe("[data-next]",s),o=xe("[data-spin]",s),a=xe(".work-meta",s),l=xe(".work-tag",s),c=xe(".work-play",s),h=xe("[data-cursor]"),d=O=>String(O).padStart(2,"0"),f=re.utils.clamp,u=(O,Q)=>(O%Q+Q)%Q,m=Math.PI/180,_=[{el:xe(".work-reel-art",s),step:44,gap:.97,dim:.42},{el:xe(".work-reel-name",s),step:17,gap:1.6,dim:.5},{el:xe(".work-reel-fig",s),step:21,gap:1.9,dim:.5}].map(O=>({...O,faces:[...O.el.children],slots:[],clones:[],pos:0,last:0,R:300,cut:2,tween:null,spin:null,blur:0})),p=_[0].faces,g=p.map((O,Q)=>Q),y=g.length,b=y,v=0,S=-1,E=!1,x=!0,M=!1,P=null,A=()=>{},N=()=>{y=g.length;let O=Math.ceil(8/y);b=y*O,_.forEach(Q=>{Q.clones.forEach(ut=>ut.remove()),Q.clones=[],Q.faces.forEach(ut=>{ut.classList.remove("is-on"),ut.style.visibility=""}),Q.slots=g.map(ut=>({el:Q.faces[ut],gi:ut}));for(let ut=1;ut<O;ut++)g.forEach(st=>{let ht=Q.faces[st].cloneNode(!0);ht.setAttribute("aria-hidden","true"),ht.classList.remove("work-item"),ht.removeAttribute("aria-current"),ht.querySelectorAll("a").forEach(dt=>{dt.tabIndex=-1}),Q.el.append(ht),Q.clones.push(ht),Q.slots.push({el:ht,gi:st})})})},D=()=>{let O=_[1],Q=O.el.clientWidth-40;O.slots.forEach(ut=>{ut.el.style.fontSize=""}),g.forEach(ut=>{let st=Math.min(1,Q/O.faces[ut].firstElementChild.offsetWidth);st<1&&O.slots.forEach(ht=>{ht.gi===ut&&(ht.el.style.fontSize=st.toFixed(3)+"em")})}),_.forEach((ut,st)=>{let ht=st===1?parseFloat(getComputedStyle(ut.el).fontSize):ut.faces[g[0]].offsetHeight;ut.R=ht*ut.gap/Math.sin(ut.step*m),ut.cut=Math.min(3.2,84/ut.step)}),x=!0},H=()=>{_.forEach(O=>{for(let Q=0;Q<b;Q++){let ut=O.slots[Q],st=ut.el.style,ht=u(Q-O.pos,b);ht>b/2&&(ht-=b);let dt=Math.abs(ht);if(dt>O.cut){ut.off||(st.visibility="hidden",ut.off=!0);continue}ut.off&&(st.visibility="",ut.off=!1);let j=ht*O.step*m;st.transform=`translate(-50%,-50%) translate3d(0,${(O.R*Math.sin(j)).toFixed(1)}px,${(O.R*(Math.cos(j)-1)).toFixed(1)}px) rotateX(${(-ht*O.step).toFixed(2)}deg)`,st.opacity=(dt<1?1-dt*(1-O.dim):O.dim*Math.pow(.45,dt-1)).toFixed(3);let pt=dt<.5;ut.on!==pt&&(ut.el.classList.toggle("is-on",pt),ut.on=pt)}})},L=()=>{if(M)for(let O=-2;O<=2;O++){let Q=xe("img",p[g[u(S+O,y)]]);Q&&(Q.loading="eager")}},k=O=>{S=O;let Q=p[g[O]];s.style.setProperty("--accent",Q.style.getPropertyValue("--accent")),e&&(e.textContent=d(O+1)),a.replaceChildren(...Q.dataset.meta.split("|").map(ut=>{let st=document.createElement("span");return st.textContent=ut,st})),l.textContent=Q.dataset.tag,c.hidden=!Q.dataset.demo,Q.dataset.demo&&(c.href=Q.dataset.demo),p.forEach(ut=>ut===Q?ut.setAttribute("aria-current","true"):ut.removeAttribute("aria-current")),Ye||re.fromTo([a,l],{y:10,opacity:0},{y:0,opacity:1,duration:.5,ease:"expo.out",stagger:.05,overwrite:!0,clearProps:"transform,opacity"}),L(),A()},V=()=>{v=u(v,y),_.forEach(O=>{O.pos=O.last=u(O.pos,y)}),x=!0},I=O=>{E||(v=O,_.forEach((Q,ut)=>{if(Q.tween&&Q.tween.kill(),Q.tween=null,Ye){Q.pos=O;return}Q.tween=re.to(Q,{pos:O,duration:.72+ut*.08,delay:ut*.07,ease:"back.out(1.5)",onComplete:ut===2?V:void 0})}),Ye&&V(),x=!0,u(O,y)!==S&&k(u(O,y)))},X=()=>{if(E||y<2)return;let O=u(Math.round(v)+1+Math.floor(Math.random()*(y-1)),y);if(Ye){I(O);return}E=!0,s.classList.add("is-spinning"),y<=12&&p.forEach(ut=>{let st=xe("img",ut);st&&(st.loading="eager")});let Q=f(16,45,y*1.3);_.forEach((ut,st)=>{ut.tween&&ut.tween.kill(),ut.tween=null,ut.spin={v:0,V:Q,land:O,t:0,wait:st?1/0:.7}})},B=(O,Q,ut)=>{let st=O.spin;if(st.t+=ut,st.v+=(st.V-st.v)*Math.min(1,ut*5),O.pos+=st.v*ut,st.t<st.wait)return;let ht=Math.ceil(O.pos+1.1);if(ht+=u(st.land-ht,y),ht-O.pos>2.15)return;O.spin=null;let dt=_[Q+1];dt&&dt.spin&&(dt.spin.wait=dt.spin.t+.3),O.tween=re.to(O,{pos:ht,duration:4.7*(ht-O.pos)/st.v,ease:"back.out(1.7)",onComplete:()=>{O.pos=O.last=u(O.pos,y),!(Q<2)&&(v=u(ht,y),E=!1,x=!0,s.classList.remove("is-spinning"),k(st.land))}})};re.ticker.add((O,Q)=>{let ut=Math.min(Math.max(Q,1)/1e3,.05);_.forEach((st,ht)=>{st.spin&&B(st,ht,ut)}),_.forEach(st=>{let ht=Math.abs(st.pos-st.last)/ut;st.last=st.pos,ht>0&&(x=!0);let dt=Ye?0:Math.round(Math.min(7,Math.max(0,ht-5)*.5));dt!==st.blur&&(st.el.style.filter=dt?`blur(${dt}px)`:"",st.blur=dt)}),x&&(H(),x=!1)});let C=O=>{let Q=_.find(ht=>ht.el===O.parentElement),ut=Q?Q.slots.findIndex(ht=>ht.el===O):-1;if(ut<0)return 0;let st=u(ut-Math.round(v),b);return st>b/2&&(st-=b),st};i&&(i.addEventListener("click",()=>I(Math.round(v)-1)),r.addEventListener("click",()=>I(Math.round(v)+1))),o.addEventListener("click",X),vu.addEventListener("keydown",O=>{let Q=O.key==="ArrowDown"||O.key==="ArrowRight"?1:O.key==="ArrowUp"||O.key==="ArrowLeft"?-1:0;!Q||O.target.closest("button")||(O.preventDefault(),I(Math.round(v)+Q))}),vu.addEventListener("focusin",O=>{let Q=O.target.closest(".work-face");if(Q&&O.target.matches(":focus-visible")){let ut=C(Q);ut&&I(Math.round(v)+ut)}});let W=0,xt=0;t.addEventListener("wheel",O=>{Math.abs(O.deltaX)<=Math.abs(O.deltaY)||(O.stopPropagation(),!(O.timeStamp-xt<380)&&(W+=O.deltaX,Math.abs(W)>50&&(I(Math.round(v)+Math.sign(W)),W=0,xt=O.timeStamp)))},{passive:!0});let ft=null,q=!1;t.addEventListener("pointerdown",O=>{!E&&!O.button&&(ft={id:O.pointerId,x:O.clientX,y:O.clientY,mouse:O.pointerType==="mouse",axis:"",moved:!1,d:0,v:0,pt:O.timeStamp})}),window.addEventListener("pointermove",O=>{if(!ft||O.pointerId!==ft.id)return;let Q=O.clientX-ft.x,ut=O.clientY-ft.y;if(!ft.moved){if(Math.hypot(Q,ut)<8)return;let dt=Math.abs(ut)>Math.abs(Q);if(dt&&!ft.mouse){ft=null;return}ft.axis=dt?"y":"x",ft.moved=!0,_.forEach(j=>{j.tween&&j.tween.kill(),j.tween=null,j.base=j.pos}),t.classList.add("is-grab")}let st=-(ft.axis==="y"?ut:Q)/f(110,230,t.clientWidth*.42),ht=(O.timeStamp-ft.pt)/1e3;ht>0&&(ft.v+=((st-ft.d)/ht-ft.v)*.5,ft.pt=O.timeStamp),ft.d=st,_.forEach(dt=>{dt.pos=dt.base+st}),x=!0});let nt=O=>{if(!ft||O.pointerId!==ft.id)return;let Q=ft;ft=null,Q.moved&&(t.classList.remove("is-grab"),q=!0,setTimeout(()=>{q=!1},80),I(Math.round(_[0].pos+(O.timeStamp-Q.pt>90?0:f(-1.2,1.2,Q.v*.16)))))};window.addEventListener("pointerup",nt),window.addEventListener("pointercancel",nt),t.addEventListener("dragstart",O=>O.preventDefault()),t.addEventListener("click",O=>{if(q||E){O.preventDefault(),O.stopPropagation();return}let Q=O.target.closest(".work-face"),ut=Q?C(Q):0;ut&&(O.preventDefault(),I(Math.round(v)+ut))},!0);let vt=()=>{let O=v=u(Math.round(v),y);_.forEach((Q,ut)=>{if(Q.tween&&Q.tween.kill(),Q.tween=null,Ye){Q.pos=Q.last=O;return}Q.pos=Q.last=O-(2+ut),Q.tween=re.to(Q,{pos:O,duration:1.1+ut*.28,ease:"back.out(1.25)",onComplete:ut===2?V:void 0})}),x=!0};if(N(),D(),k(0),Ye||(_.forEach((O,Q)=>{O.pos=O.last=-(2+Q)}),Zt.create({trigger:vu,start:"top 84%",once:!0,onEnter:vt})),Zt.create({trigger:s,start:"top 220%",once:!0,onEnter:()=>{M=!0,L()}}),Zt.addEventListener("refresh",D),document.fonts.ready.then(D),h&&xc){let O=re.quickTo(h,"x",{duration:.35,ease:"power3"}),Q=re.quickTo(h,"y",{duration:.35,ease:"power3"}),ut=_[0].el,st=!0;re.set(h,{scale:0}),A=()=>{if(P){let dt=C(P);h.textContent=dt?dt>0?"Next":"Back":"Open"}};let ht=()=>{P=null,st||(st=!0,re.to(h,{scale:0,duration:Ye?0:.3,ease:"power3.in",overwrite:"auto"}))};ut.addEventListener("pointermove",dt=>{let j=dt.target.closest(".work-face");if(!j){ht();return}j!==P&&(P=j,A()),st&&(st=!1,re.set(h,{x:dt.clientX,y:dt.clientY,visibility:"visible"}),re.to(h,{scale:1,duration:Ye?0:.45,ease:"expo.out",overwrite:"auto"})),O(dt.clientX),Q(dt.clientY)}),ut.addEventListener("pointerleave",ht)}let Rt=Pr("[data-filter]");Rt.forEach(O=>O.addEventListener("click",()=>{if(E)return;Rt.forEach(ht=>ht.setAttribute("aria-pressed",String(ht===O)));let[Q,ut]=O.dataset.filter.split(":"),st=ht=>Q==="*"||(Q==="cat"?ht.dataset.cat:ht.dataset.rel)===ut;_.forEach(ht=>{ht.tween&&ht.tween.kill(),ht.tween=null,ht.faces.forEach((dt,j)=>{dt.hidden=!st(p[j])})}),g=p.map((ht,dt)=>dt).filter(ht=>!p[ht].hidden),n&&(n.textContent=d(g.length)),v=0,N(),D(),k(0),vt(),O.scrollIntoView({block:"nearest",inline:"center",behavior:Ye?"auto":"smooth"})}))}var lr=xe(".craft"),ar=xe("[data-craft]"),ns=Pr(".craft-panel"),_1=re.matchMedia(),yu=re.utils.clamp;function G0(){let s=Pr(".craft-captions p"),t=Pr(".craft-index li"),e=-1;return re.set(s,{opacity:0,y:14}),n=>{if(n===e)return;let i=e;e=n,ns.forEach((r,o)=>r.classList.toggle("is-on",o===n)),t.forEach((r,o)=>r.classList.toggle("is-on",o===n)),s.forEach((r,o)=>re.to(r,o===n?{opacity:1,y:0,duration:.6,ease:"expo.out",overwrite:!0}:{opacity:0,y:o===i&&n>i?-14:14,duration:.3,ease:"power2.out",overwrite:!0}))}}function V0(s){let t=ns.length,e=yu(0,t-1,s*(t-1)),n=Math.min(t-2,Math.floor(e)),i=yu(0,1,(e-n-.24)/.52);return{k:n,e:i*i*(3-2*i)}}function x1(){lr.classList.add("is-run");let s=ns.map(p=>Vs.create(xe(".craft-word",p),{type:"chars",charsClass:"char"})),t=s.flatMap(p=>p.chars),e=xe(".craft-bar i"),n=G0(),i=[],r=[],o=0,a=Ws.clientWidth,l=0,c=0,h=0,d=p=>{p.pointerType==="mouse"&&(h=(p.clientY/window.innerHeight-.5)*-10)};lr.addEventListener("pointermove",d);let f=()=>{a=Ws.clientWidth,i=t.map(p=>p.offsetLeft+p.offsetWidth/2),r=ns.map(p=>p.offsetLeft+p.offsetWidth/2),o=r[r.length-1]-r[0]},u=p=>{let{k:g,e:y}=V0(p),b=a/2-(r[g]+(r[g+1]-r[g])*y);ar.style.transform=`translate3d(${b.toFixed(1)}px,0,0) skewX(${l.toFixed(2)}deg)`;for(let v=0;v<t.length;v++){let S=yu(-1.3,1.3,(i[v]+b-a/2)/(a*.62)),E=S*S;t[v].style.transform=`perspective(1100px) rotateX(${c.toFixed(2)}deg) translateZ(${(-E*170).toFixed(1)}px) rotateY(${(S*40).toFixed(2)}deg)`,t[v].style.opacity=(1-Math.min(1,E)*.45).toFixed(3)}e&&(e.style.transform=`scaleX(${p.toFixed(4)})`),n(y<.5?g:g+1)};f();let m=Zt.create({trigger:lr,start:"top top",end:()=>(f(),"+="+Math.round(o*.75)),pin:!0,anticipatePin:1,invalidateOnRefresh:!0,onRefresh:p=>u(p.progress),onUpdate:p=>u(p.progress)}),_=()=>{let p=m.isActive?yu(-7,7,m.getVelocity()/-320):0,g=p-l,y=h-c;Math.abs(g)<.01&&Math.abs(y)<.01||(l+=g*.12,c+=y*.08,u(m.progress))};return re.ticker.add(_),u(0),()=>{re.ticker.remove(_),lr.removeEventListener("pointermove",d),m.kill(),s.forEach(p=>p.revert()),lr.classList.remove("is-run"),ns.forEach(p=>p.classList.remove("is-on")),ar.style.transform=""}}function v1(){lr.classList.add("is-reel");let s=xe(".craft-bar i"),t=G0(),e=ns.length,n=Math.PI*2/12,i=ns,r=0,o=()=>{ar.style.fontSize="";let c=getComputedStyle(ar),h=ar.clientWidth-parseFloat(c.paddingLeft)-parseFloat(c.paddingRight),d=Math.max(...ns.map(u=>u.offsetWidth)),f=Math.min(parseFloat(c.fontSize)*h/d,ar.clientHeight/5.8);ar.style.fontSize=f.toFixed(1)+"px",r=f*1.5/n},a=c=>{let{k:h,e:d}=V0(c),f=h+d;i.forEach((u,m)=>{let _=m-f,p=_*n,g=Math.abs(_);u.style.visibility=g>2.5?"hidden":"",!(g>2.5)&&(u.style.transform=`translate3d(0,${(r*Math.sin(p)).toFixed(1)}px,${(r*(Math.cos(p)-1)).toFixed(1)}px) rotateX(${(-p*57.2958).toFixed(2)}deg)`,u.style.opacity=(g<=1?1-g*.4:Math.max(0,.6-(g-1)*.36)).toFixed(3))}),s&&(s.style.transform=`scaleX(${c.toFixed(4)})`),t(Math.round(f))};o();let l=Zt.create({trigger:lr,start:"top top",end:()=>"+="+Math.round((e-1)*window.innerHeight*.62),pin:!0,anticipatePin:1,invalidateOnRefresh:!0,onRefresh:c=>{o(),a(c.progress)},onUpdate:c=>a(c.progress)});return a(0),()=>{l.kill(),lr.classList.remove("is-reel"),ns.forEach(c=>{c.classList.remove("is-on"),c.style.transform=c.style.opacity=c.style.visibility=""}),ar.style.fontSize=""}}function y1(){ns.forEach(s=>{Dg(xe(".craft-word",s),{scrollTrigger:{trigger:s,start:"top 84%"}}),re.from(xe("p",s),{y:24,opacity:0,duration:.9,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 70%"}})})}_1.add({any:"all",wide:"(min-width: 761px) and (min-height: 580px)",tall:"(max-width: 760px) and (min-height: 500px)"},s=>{if(Ye)return;let{wide:t,tall:e}=s.conditions;return t?x1():e?v1():y1()});var k0=xe(".contact-line");Bf(k0,{scrollTrigger:{trigger:k0,start:"top 90%"}});Ye||re.from(".contact-side > *",{y:22,opacity:0,duration:.9,ease:"expo.out",stagger:.08,scrollTrigger:{trigger:".contact-side",start:"top 92%"}});var es=ki&&!Ye?B0(!xc):null;es&&Ws.classList.add("companion");if(ki){let s={time:0,y:window.scrollY,vel:0,spin:0,rail:es?es.line:null},t=s.y,e=()=>{ki.layout(),es&&es.layout()};Zt.addEventListener("refresh",e),window.addEventListener("resize",e),re.ticker.add((n,i)=>{if(!ki.state.started)return;let r=Math.min(i/1e3,.05);s.time+=r,s.y=window.scrollY,s.vel+=((s.y-t)/Math.max(r,.001)-s.vel)*.2,t=s.y;let o=ki.pose(s,r,!!es);ki.frame(r,s,o),es&&es.frame(o)})}var S1=document.fonts.load("900 100px Anybody").catch(()=>{}).then(()=>{ki&&ki.start(),es&&es.layout()});Ig(S1,()=>{Ye||(ki&&re.to(ki.state,{intro:1,duration:2.2,ease:"expo.out",delay:.25}),Bf(xe(".hero-line"),{delay:.55}),re.from(".hero-side > *",{y:22,opacity:0,duration:1,ease:"expo.out",stagger:.09,delay:.85}),re.from(".nav > *",{y:-18,opacity:0,duration:.9,ease:"expo.out",stagger:.08,delay:.7,clearProps:"transform,opacity"}))});document.fonts.ready.then(()=>Zt.refresh());window.addEventListener("load",()=>Zt.refresh());z0&&location.hash&&requestAnimationFrame(()=>{let s=xe(location.hash);s&&z0.scrollTo(s,{immediate:!0})});})();
