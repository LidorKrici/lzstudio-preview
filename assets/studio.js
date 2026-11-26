(()=>{var h0=Object.defineProperty;var u0=(s,t,e)=>t in s?h0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Ut=(s,t,e)=>u0(s,typeof t!="symbol"?t+"":t,e);function is(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Qd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vo={duration:.5,overwrite:!1,delay:0},hu,fn,Pe,mi=1e8,ve=1/mi,nu=Math.PI*2,f0=nu/4,d0=0,jd=Math.sqrt,p0=Math.cos,m0=Math.sin,en=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},rs=function(t){return typeof t=="number"},gl=function(t){return typeof t>"u"},Hi=function(t){return typeof t=="object"},Zn=function(t){return t!==!1},uu=function(){return typeof window<"u"},rl=function(t){return ke(t)||en(t)},tp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,g0=/random\([^)]+\)/g,_0=/,\s*/g,Wd=/(?:-?\.?\d|\.)+/gi,fu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,du=/[+-]=-?[.\d]+/,x0=/[^,'"\[\]\s]+/gi,v0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Oe,Vi,iu,pu,ii={},cl={},ep,np=function(t){return(cl=Br(t,ii))&&bn},_l=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Go=function(t,e){return!e&&console.warn(t)},ip=function(t,e){return t&&(ii[t]=e)&&cl&&(cl[t]=e)||ii},Ho=function(){return 0},y0={suppressEvents:!0,isStart:!0,kill:!1},ol={suppressEvents:!0,kill:!1},S0={suppressEvents:!0},mu={},Es=[],su={},sp,qn={},$h={},Xd=30,al=[],gu="",_u=function(t){var e=t[0],n,i;if(Hi(e)||ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=al.length;i--&&!al[i].targetTest(e););n=al[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Su(t[i],n)))||t.splice(i,1);return t},As=function(t){return t._gsap||_u(gi(t))[0]._gsap},xu=function(t,e,n){return(n=t[e])&&ke(n)?t[e]():gl(n)&&t.getAttribute&&t.getAttribute(e)||n},Nn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ve=function(t){return Math.round(t*1e5)/1e5||0},Ne=function(t){return Math.round(t*1e7)/1e7||0},ar=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},M0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},hl=function(){var t=Es.length,e=Es.slice(0),n,i;for(su={},Es.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vu=function(t){return!!(t._initted||t._startAt||t.add)},rp=function(t,e,n,i){Es.length&&!fn&&hl(),t.render(e,n,i||!!(fn&&e<0&&vu(t))),Es.length&&!fn&&hl()},op=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(x0).length<2?e:en(t)?t.trim():t},ap=function(t){return t},si=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},b0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Br=function(t,e){for(var n in e)t[n]=e[n];return t},qd=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Hi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},ul=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Bo=function(t){var e=t.parent||Oe,n=t.keyframes?b0(Mn(t.keyframes)):si;if(Zn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},w0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},lp=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},xl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Cs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ir=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},T0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ru=function(t,e,n,i){return t._startAt&&(fn?t._startAt.revert(ol):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},E0=function s(t){return!t||t._ts&&s(t.parent)},Yd=function(t){return t._repeat?zr(t._tTime,t=t.duration()+t._rDelay)*t:0},zr=function(t,e){var n=Math.floor(t=Ne(t/e));return t&&n===t?n-1:n},fl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},vl=function(t){return t._end=Ne(t._start+(t._tDur/Math.abs(t._ts||t._rts||ve)||0))},yl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ne(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),vl(t),n._dirty||ir(n,t)),t},cp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=fl(t.rawTime(),e),(!e._dur||Yo(0,e.totalDuration(),n)-e._tTime>ve)&&e.render(n,!0)),ir(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ve}},Gi=function(t,e,n,i){return e.parent&&Cs(e),e._start=Ne((rs(n)?n:!n&&dl(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Oe?pi(t,n,e):t._time)+e._delay),e._end=Ne(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),lp(t,e,"_first","_last",t._sort?"_start":0),dl(e)||(t._recent=e),i||cp(t,e),t._ts<0&&yl(t,t._tTime),t},hp=function(t,e){return(ii.ScrollTrigger||_l("scrollTrigger",e))&&ii.ScrollTrigger.create(e,t)},up=function(t,e,n,i,r){if(wu(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!fn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&sp!==Yn.frame)return Es.push(t),t._lazy=[r,i],1},A0=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},dl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},C0=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&A0(t)&&!(!t._initted&&dl(t))||(t._ts<0||t._dp._ts<0)&&!dl(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Yo(0,t._tDur,e),h=zr(l,a),t._yoyo&&h&1&&(o=1-o),h!==zr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||fn||i||t._zTime===ve||!e&&t._zTime){if(!t._initted&&up(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?ve:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ru(t,e,n,!0),t._onUpdate&&!n&&ni(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ni(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Cs(t,1),!n&&!fn&&(ni(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},R0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},kr=function(t,e,n,i){var r=t._repeat,o=Ne(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ne(o*(r+1)+t._rDelay*r):o,a>0&&!i&&yl(t,t._tTime=t._tDur*a),t.parent&&vl(t),n||ir(t.parent,t),t},Zd=function(t){return t instanceof Sn?ir(t):kr(t,t._dur)},P0={_start:0,endTime:Ho,totalDuration:Ho},pi=function s(t,e,n){var i=t.labels,r=t._recent||P0,o=t.duration()>=mi?r.endTime(!1):t._dur,a,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Mn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},zo=function(t,e,n){var i=rs(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;o.immediateRender=Zn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new We(e[0],o,e[r+1])},Rs=function(t,e){return t||t===0?e(t):e},Yo=function(t,e,n){return n<t?t:n>e?e:n},dn=function(t,e){return!en(t)||!(e=v0.exec(t))?"":e[1]},I0=function(t,e,n){return Rs(n,function(i){return Yo(t,e,i)})},ou=[].slice,fp=function(t,e){return t&&Hi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Hi(t[0]))&&!t.nodeType&&t!==Vi},L0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return en(i)&&!e||fp(i,1)?(r=n).push.apply(r,gi(i)):n.push(i)})||n},gi=function(t,e,n){return Pe&&!e&&Pe.selector?Pe.selector(t):en(t)&&!n&&(iu||!Vr())?ou.call((e||pu).querySelectorAll(t),0):Mn(t)?L0(t,n):fp(t)?ou.call(t,0):t?[t]:[]},au=function(t){return t=gi(t)[0]||Go("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return gi(e,n.querySelectorAll?n:n===t?Go("Invalid scope")||pu.createElement("div"):t)}},dp=function(t){return t.sort(function(){return .5-Math.random()})},pp=function(t){if(ke(t))return t;var e=Hi(t)?t:{each:t},n=sr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return en(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,m){var _=(m||e).length,p=o[_],g,v,E,y,b,T,x,M,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,mi])[1],!P){for(x=-mi;x<(x=m[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=o[_]=[],g=l?Math.min(P,_)*h-.5:i%P,v=P===mi?0:l?_*d/P-.5:i/P|0,x=0,M=mi,T=0;T<_;T++)E=T%P-g,y=v-(T/P|0),p[T]=b=c?Math.abs(c==="y"?y:E):jd(E*E+y*y),b>x&&(x=b),b<M&&(M=b);i==="random"&&dp(p),p.max=x-M,p.min=M,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=dn(e.amount||e.each)||0,n=n&&_<0?X0(n):n}return _=(p[u]-p.min)/p.max||0,Ne(p.b+(n?n(_):_)*p.v)+p.u}},lu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ne(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(rs(n)?0:dn(n))}},mp=function(t,e){var n=Mn(t),i,r;return!n&&Hi(t)&&(i=n=t.radius||mi,t.values?(t=gi(t.values),(r=!rs(t[0]))&&(i*=i)):t=lu(t.increment)),Rs(e,n?ke(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=mi,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,r||h===o||rs(o)?h:h+dn(o)}:lu(t))},gp=function(t,e,n,i){return Rs(Mn(t)?!e:n===!0?!!(n=0):!i,function(){return Mn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},D0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},N0=function(t,e){return function(n){return t(parseFloat(n))+(e||dn(n))}},O0=function(t,e,n){return xp(t,e,0,1,n)},_p=function(t,e,n){return Rs(n,function(i){return t[~~e(i)]})},U0=function s(t,e,n){var i=e-t;return Mn(t)?_p(t,s(0,t.length),e):Rs(n,function(r){return(i+(r-t)%i)%i+t})},F0=function s(t,e,n){var i=e-t,r=i*2;return Mn(t)?_p(t,s(0,t.length-1),e):Rs(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Gr=function(t){return t.replace(g0,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(_0);return gp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},xp=function(t,e,n,i,r){var o=e-t,a=i-n;return Rs(r,function(l){return n+((l-t)/o*a||0)})},B0=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=en(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Mn(t)&&!Mn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(m){m*=d;var _=Math.min(u,~~m);return h[_](m-_)},n=e}else i||(t=Br(Mn(t)?[]:{},t));if(!h){for(l in e)Mu.call(a,t,l,"get",e[l]);r=function(m){return Au(m,a)||(o?t.p:t)}}}return Rs(n,r)},Jd=function(t,e,n){var i=t.labels,r=mi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ni=function(t,e,n){var i=t.vars,r=i[e],o=Pe,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Es.length&&hl(),a&&(Pe=a),h=l?r.apply(c,l):r.call(c),Pe=o,h},Uo=function(t){return Cs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!fn),t.progress()<1&&ni(t,"onInterrupt"),t},Fr,vp=[],yp=function(t){if(t)if(t=!t.name&&t.default||t,uu()||t.headless){var e=t.name,n=ke(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Ho,render:Au,add:Mu,kill:ex,modifier:tx,rawVars:0},o={targetTest:0,get:0,getSetter:Sl,aliases:{},register:0};if(Vr(),t!==i){if(qn[e])return;si(i,si(ul(t,r),o)),Br(i.prototype,Br(r,ul(t,o))),qn[i.prop=e]=i,t.targetTest&&(al.push(i),mu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ip(e,i),t.register&&t.register(bn,i,On)}else vp.push(t)},we=255,Fo={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},Kh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*we+.5|0},Sp=function(t,e,n){var i=t?rs(t)?[t>>16,t>>8&we,t&we]:0:Fo.black,r,o,a,l,c,h,d,u,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Fo[t])i=Fo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&we,i&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Wd),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Kh(l+1/3,r,o),i[1]=Kh(l,r,o),i[2]=Kh(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(fu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Wd)||Fo.transparent;i=i.map(Number)}return e&&!m&&(r=i[0]/we,o=i[1]/we,a=i[2]/we,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Mp=function(t){var e=[],n=[],i=-1;return t.split(ss).forEach(function(r){var o=r.match(or)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},$d=function(t,e,n){var i="",r=(t+i).match(ss),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=Sp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Mp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ss,"1").split(or),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ss),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},ss=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Fo)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),z0=/hsl[a]?\(/,yu=function(t){var e=t.join(" "),n;if(ss.lastIndex=0,ss.test(e))return n=z0.test(e),t[1]=$d(t[1],n),t[0]=$d(t[0],n,Mp(t[1])),!0},Wo,Yn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,u,f,m=function _(p){var g=s()-i,v=p===!0,E,y,b,T;if((g>t||g<0)&&(n+=g-e),i+=g,b=i-n,E=b-o,(E>0||v)&&(T=++d.frame,u=b-d.time*1e3,d.time=b=b/1e3,o+=E+(E>=r?0:r-E),y=1),v||(l=c(_)),y)for(f=0;f<a.length;f++)a[f](b,u,T,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){ep&&(!iu&&uu()&&(Vi=iu=window,pu=Vi.document||{},ii.gsap=bn,(Vi.gsapVersions||(Vi.gsapVersions=[])).push(bn.version),np(cl||Vi.GreenSockGlobals||!Vi.gsap&&Vi||{}),vp.forEach(yp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Wo=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Wo=0,c=Ho},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,g,v){var E=g?function(y,b,T,x){p(y,b,T,x),d.remove(E)}:p;return d.remove(p),a[v?"unshift":"push"](E),Vr(),E},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),Vr=function(){return!Wo&&Yn.wake()},oe={},k0=/^[\d.\-M][\d.\-,\s]/,V0=/["']/g,G0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(V0,"").trim():+c,i=l.substr(a+1).trim();return e},H0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},W0=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[G0(e[1])]:H0(t).split(",").map(op)):oe._CE&&k0.test(t)?oe._CE("",t):n},X0=function(t){return function(e){return 1-t(1-e)}},sr=function(t,e){return t&&(ke(t)?t:oe[t]||W0(t))||e},lr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Nn(t,function(a){oe[a]=ii[a]=r,oe[o=a.toLowerCase()]=n;for(var l in r)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=r[l]}),r},bp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Qh=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/nu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*m0((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:bp(a);return r=nu/r,l.config=function(c,h){return s(t,c,h)},l},jh=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:bp(n);return i.config=function(r){return s(t,r)},i};Nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;lr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;lr("Elastic",Qh("in"),Qh("out"),Qh());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};lr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);lr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});lr("Circ",function(s){return-(jd(1-s*s)-1)});lr("Sine",function(s){return s===1?1:-p0(s*f0)+1});lr("Back",jh("in"),jh("out"),jh());oe.SteppedEase=oe.steps=ii.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ve;return function(a){return((i*Yo(0,o,a)|0)+r)*n}}};Vo.ease=oe["quad.out"];Nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return gu+=s+","+s+"Params,"});var Su=function(t,e){this.id=d0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:xu,this.set=e?e.getSetter:Sl},Xo=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,kr(this,+e.duration,1,1),this.data=e.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),Wo||Yn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,kr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Vr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(yl(this,n),!r._dp||r.parent||cp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ve||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?zr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ve?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?fl(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ve?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Yo(-Math.abs(this._delay),a,r),i!==!1),vl(this),T0(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Vr(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==ve,o;if(r)for(this._tTime-=ve,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+ve){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Ne(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Gi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=S0);var i=fn;return fn=n,vu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(pi(this,n),Zn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zn(i)),this._dur||(this._zTime=-ve),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ve:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ve,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ve)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=ke(n)?n:ap,l=function(){var h=i.then;i.then=null,r&&r(),ke(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Uo(this)},s})();si(Xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ve,_prom:0,_ps:!1,_rts:1});var Sn=(function(s){Qd(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Zn(n.sortChildren),Oe&&Gi(n.parent||Oe,is(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&hp(is(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return zo(0,arguments,this),this},e.from=function(i,r,o){return zo(1,arguments,this),this},e.fromTo=function(i,r,o,a){return zo(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Bo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new We(i,r,pi(this,o),1),this},e.call=function(i,r,o){return Gi(this,We.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new We(i,o,pi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Bo(o).immediateRender=Zn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Bo(a).immediateRender=Zn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ne(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,m,_,p,g,v,E,y,b,T,x;if(this!==Oe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,y=this._start,E=this._ts,g=!E,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(u=Ne(h%p),h===l?(_=this._repeat,u=c):(b=Ne(h/p),_=~~b,_&&_===b&&(u=c,_--),u>c&&(u=c)),b=zr(this._tTime,p),!a&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),T&&_&1&&(u=c-u,x=1),_!==b&&!this._lock){var M=T&&b&1,P=M===(T&&_&1);if(_<b&&(M=!M),a=M?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Ne(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=R0(this,Ne(a),Ne(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!b&&(ni(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-ve);break}}f=m}else{f=this._last;for(var C=i<0?i:u;f;){if(m=f._prev,(f._act||C<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,r,o||fn&&vu(f)),u!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=C?-ve:ve);break}}f=m}}if(v&&!r&&(this.pause(),v.render(u>=a?0:-ve)._zTime=u>=a?1:-1,this._ts))return this._start=y,vl(this),this.render(i,r,o);this._onUpdate&&!r&&ni(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Cs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(ni(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(rs(r)||(r=pi(this,r,i)),!(i instanceof Xo)){if(Mn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(en(i))return this.addLabel(i,r);if(ke(i))i=We.delayedCall(0,i);else return this}return this!==i?Gi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof We?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return en(i)?this.removeLabel(i):ke(i)?this.killTweensOf(i):(i.parent===this&&xl(this,i),i===this._recent&&(this._recent=this._last),ir(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ne(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=pi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=We.delayedCall(0,r||Ho,o);return a.data="isPause",this._hasPause=1,Gi(this,a,pi(this,i))},e.removePause=function(i){var r=this._first;for(i=pi(this,i);r;)r._start===i&&r.data==="isPause"&&Cs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ts!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=gi(i),l=this._first,c=rs(r),h;l;)l instanceof We?M0(l._targets,a)&&(c?(!Ts||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=pi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=We.to(o,si({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ve,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&kr(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},r));return u?m.render(0):m},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,si({startAt:{time:pi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Jd(this,pi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Jd(this,pi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ve)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ne(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return ir(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ir(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=mi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Gi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ne(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;kr(o,o===Oe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Oe._ts&&(rp(Oe,fl(i,Oe)),sp=Yn.frame),Yn.frame>=Xd){Xd+=Jn.autoSleep||120;var r=Oe._first;if((!r||!r._ts)&&Jn.autoSleep&&Yn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Yn.sleep()}}},t})(Xo);si(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var q0=function(t,e,n,i,r,o,a){var l=new On(this._pt,t,e,0,1,Eu,null,r),c=0,h=0,d,u,f,m,_,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Gr(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),u=n.match(Jh)||[];d=Jh.exec(i);)m=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?ar(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=Jh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(du.test(i)||g)&&(l.e=0),this._pt=l,l},Mu=function(t,e,n,i,r,o,a,l,c,h){ke(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:ke(d)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=ke(d)?c?K0:Tp:Tu,m;if(en(i)&&(~i.indexOf("random(")&&(i=Gr(i)),i.charAt(1)==="="&&(m=ar(u,i)+(dn(u)||0),(m||m===0)&&(i=m))),!h||u!==i||cu)return!isNaN(u*i)&&i!==""?(m=new On(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?j0:Ep,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&_l(e,i),q0.call(this,t,e,u,i,f,l||Jn.stringFilter,c))},Y0=function(t,e,n,i,r){if(ke(t)&&(t=ko(t,r,e,n,i)),!Hi(t)||t.style&&t.nodeType||Mn(t)||tp(t))return en(t)?ko(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=ko(t[a],r,e,n,i);return o},bu=function(t,e,n,i,r,o){var a,l,c,h;if(qn[t]&&(a=new qn[t]).init(r,a.rawVars?e[t]:Y0(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new On(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Fr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ts,cu,wu=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:p,E=t._overwrite==="auto"&&!hu,y=t.timeline,b=i.easeReverse||d,T,x,M,P,C,N,L,V,I,k,z,U,q;if(y&&(!u||!r)&&(r="none"),t._ease=sr(r,Vo.ease),t._rEase=b&&(sr(b)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(V=p[0]?As(p[0]).harness:0,U=V&&i[V.prop],T=ul(i,mu),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&m?ol:y0),_._lazy=0),o){if(Cs(t._startAt=We.set(p,si({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Zn(l),startAt:null,delay:0,onUpdate:c&&function(){return ni(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(fn||!a&&!f)&&t._startAt.revert(ol),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),M=si({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Zn(l),immediateRender:a,stagger:0,parent:g},T),U&&(M[V.prop]=U),Cs(t._startAt=We.set(p,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(fn?t._startAt.revert(ol):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ve,ve);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Zn(l)||l&&!m,x=0;x<p.length;x++){if(C=p[x],L=C._gsap||_u(p)[x]._gsap,t._ptLookup[x]=k={},su[L.id]&&Es.length&&hl(),z=v===p?x:v.indexOf(C),V&&(I=new V).init(C,U||T,t,z,v)!==!1&&(t._pt=P=new On(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(F){k[F]=P}),I.priority&&(N=1)),!V||U)for(M in T)qn[M]&&(I=bu(M,T,t,z,C,v))?I.priority&&(N=1):k[M]=P=Mu.call(t,C,M,"get",T[M],z,v,0,i.stringFilter);t._op&&t._op[x]&&t.kill(C,t._op[x]),E&&t._pt&&(Ts=t,Oe.killTweensOf(C,k,t.globalTime(e)),q=!t.parent,Ts=0),t._pt&&l&&(su[L.id]=1)}N&&Cu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!q,u&&e<=0&&y.render(mi,!0,!0)},Z0=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return cu=1,t.vars[e]="+=0",wu(t,a),cu=0,l?Go(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ve(n)+dn(d.e)),d.b&&(d.b=h.s+dn(d.b))},J0=function(t,e){var n=t[0]?As(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Br({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},$0=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Mn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},ko=function(t,e,n,i,r){return ke(t)?t.call(e,n,i,r):en(t)&&~t.indexOf("random(")?Gr(t):t},pl=gu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",wp={};Nn(pl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return wp[s]=1});pl=pl.split(",");var We=(function(s){Qd(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Bo(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Oe,v=(Mn(n)||tp(n)?rs(n[0]):"length"in i)?[n]:gi(n),E,y,b,T,x,M,P,C;if(a._targets=v.length?_u(v):Go("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||u||rl(c)||rl(h)){i=a.vars;var N=i.easeReverse||i.yoyoEase;if(E=a.timeline=new Sn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),E.kill(),E.parent=E._dp=is(a),E._start=0,u||rl(c)||rl(h)){if(T=v.length,P=u&&pp(u),Hi(u))for(x in u)~pl.indexOf(x)&&(C||(C={}),C[x]=u[x]);for(y=0;y<T;y++)b=ul(i,wp),b.stagger=0,N&&(b.easeReverse=N),C&&Br(b,C),M=v[y],b.duration=+ko(c,is(a),y,M,v),b.delay=(+ko(h,is(a),y,M,v)||0)-a._delay,!u&&T===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),E.to(M,b,P?P(y,M,v):0),E._ease=oe.none;E.duration()?c=h=0:a.timeline=0}else if(m){Bo(si(E.vars.defaults,{ease:"none"})),E._ease=sr(m.ease||i.ease||"none");var L=0,V,I,k;if(Mn(m))m.forEach(function(z){return E.to(v,z,">")}),E.duration();else{b={};for(x in m)x==="ease"||x==="easeEach"||$0(x,m[x],b,m.easeEach);for(x in b)for(V=b[x].sort(function(z,U){return z.t-U.t}),L=0,y=0;y<V.length;y++)I=V[y],k={ease:I.e,duration:(I.t-(y?V[y-1].t:0))/100*c},k[x]=I.v,E.to(v,k,L),L+=k.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return f===!0&&!hu&&(Ts=is(a),Oe.killTweensOf(v),Ts=0),Gi(g,is(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===Ne(g._time)&&Zn(d)&&E0(is(a))&&g.data!=="nested")&&(a._tTime=-ve,a.render(Math.max(0,-h)||0)),p&&hp(is(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-ve&&!h?l:i<ve?0:i,u,f,m,_,p,g,v,E;if(!c)C0(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(u=Ne(d%_),d===l?(m=this._repeat,u=c):(p=Ne(d/_),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(u=c-u),p=zr(this._tTime,_),u===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Ne(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(up(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var b=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!p&&(ni(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;E&&E.render(i<0?i:E._dur*E._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ru(this,i,r,o),ni(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&ni(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&ru(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Cs(this,1),!r&&!(h&&!a)&&(d||a||g)&&(ni(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Wo||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||wu(this,c),h=this._ease(c/this._dur),Z0(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(yl(this,0),this.parent||lp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Uo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ts&&Ts.vars.overwrite!==!0)._first||Uo(this),this.parent&&o!==this.timeline.totalDuration()&&kr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gi(i):a,c=this._ptLookup,h=this._pt,d,u,f,m,_,p,g;if((!r||r==="all")&&w0(a,l))return r==="all"&&(this._pt=0),Uo(this);for(d=this._op=this._op||[],r!=="all"&&(en(r)&&(_={},Nn(r,function(v){return _[v]=1}),r=_),r=J0(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],r==="all"?(d[g]=r,m=u,f={}):(f=d[g]=d[g]||{},m=r);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&xl(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Uo(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return zo(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return zo(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Oe.killTweensOf(i,r,o)},t})(Xo);si(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Nn("staggerTo,staggerFrom,staggerFromTo",function(s){We[s]=function(){var t=new Sn,e=ou.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Tu=function(t,e,n){return t[e]=n},Tp=function(t,e,n){return t[e](n)},K0=function(t,e,n,i){return t[e](i.fp,n)},Q0=function(t,e,n){return t.setAttribute(e,n)},Sl=function(t,e){return ke(t[e])?Tp:gl(t[e])&&t.setAttribute?Q0:Tu},Ep=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},j0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Eu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Au=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},tx=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},ex=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?xl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},nx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Cu=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},On=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Ep,this.d=l||this,this.set=c||Tu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=nx,this.m=n,this.mt=r,this.tween=i},s})();Nn(gu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return mu[s]=1});ii.TweenMax=ii.TweenLite=We;ii.TimelineLite=ii.TimelineMax=Sn;Oe=new Sn({sortChildren:!1,defaults:Vo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=yu;var rr=[],ll={},ix=[],Kd=0,sx=0,tu=function(t){return(ll[t]||ix).map(function(e){return e()})},qo=function(){var t=Date.now(),e=[];t-Kd>2&&(tu("matchMediaInit"),rr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Vi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),tu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Kd=t,tu("matchMedia"))},Ap=(function(){function s(e,n){this.selector=n&&au(n),this.data=[],this._r=[],this.isReverted=!1,this.id=sx++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){ke(n)&&(r=i,i=n,n=ke);var o=this,a=function(){var c=Pe,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=au(r)),Pe=o,d=i.apply(o,arguments),ke(d)&&o._r.push(d),Pe=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===ke?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Pe;Pe=null,n(this),Pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof We&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof We)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=rr.length;o--;)rr[o].id===this.id&&rr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(qo):a.removeEventListener("change",qo)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),rx=(function(){function s(e){this.contexts=[],this.scope=e,Pe&&Pe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Hi(n)||(n={matches:n});var o=new Ap(0,r||this.scope),a=o.conditions={},l,c,h;Pe&&!o.selector&&(o.selector=Pe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Vi.matchMedia(n[c]),l&&(rr.indexOf(o)<0&&rr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(qo):l.addEventListener("change",qo),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),ml={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return yp(i)})},timeline:function(t){return new Sn(t)},getTweensOf:function(t,e){return Oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=gi(t)[0]);var r=As(t||{}).get,o=n?ap:op;return n==="native"&&(n=""),t&&(e?o((qn[e]&&qn[e].get||r)(t,e,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=gi(t),t.length>1){var i=t.map(function(h){return bn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=qn[e],a=As(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Fr._pt=0,d.init(t,n?h+n:h,Fr,0,[t]),d.render(1,d),Fr._pt&&Au(1,Fr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=bn.to(t,si((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=sr(t.ease,Vo.ease)),qd(Vo,t||{})},config:function(t){return qd(Jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!ii[a]&&Go(e+" effect requires "+a+" plugin.")}),$h[e]=function(a,l,c){return n(gi(a),si(l||{},r),c)},o&&(Sn.prototype[e]=function(a,l,c){return this.add($h[e](a,Hi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=sr(e)},parseEase:function(t,e){return arguments.length?sr(t,e):oe},getById:function(t){return Oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Sn(t),i,r;for(n.smoothChildTiming=Zn(t.smoothChildTiming),Oe.remove(n),n._dp=0,n._time=n._tTime=Oe._time,i=Oe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof We&&i.vars.onComplete===i._targets[0]))&&Gi(n,i,i._start-i._delay),i=r;return Gi(Oe,n,0),n},context:function(t,e){return t?new Ap(t,e):Pe},matchMedia:function(t){return new rx(t)},matchMediaRefresh:function(){return rr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||qo()},addEventListener:function(t,e){var n=ll[t]||(ll[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ll[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:U0,wrapYoyo:F0,distribute:pp,random:gp,snap:mp,normalize:O0,getUnit:dn,clamp:I0,splitColor:Sp,toArray:gi,selector:au,mapRange:xp,pipe:D0,unitize:N0,interpolate:B0,shuffle:dp},install:np,effects:$h,ticker:Yn,updateRoot:Sn.updateRoot,plugins:qn,globalTimeline:Oe,core:{PropTween:On,globals:ip,Tween:We,Timeline:Sn,Animation:Xo,getCache:As,_removeLinkedListItem:xl,reverting:function(){return fn},context:function(t){return t&&Pe&&(Pe.data.push(t),t._ctx=Pe),Pe},suppressOverwrites:function(t){return hu=t}}};Nn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ml[s]=We[s]});Yn.add(Sn.updateRoot);Fr=ml.to({},{duration:0});var ox=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},ax=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=ox(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},eu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(en(r)&&(l={},Nn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}ax(a,r)}}}},bn=ml.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},eu("roundProps",lu),eu("modifiers"),eu("snap",mp))||ml;We.version=Sn.version=bn.version="3.15.1";ep=1;uu()&&Vr();var lx=oe.Power0,cx=oe.Power1,hx=oe.Power2,ux=oe.Power3,fx=oe.Power4,dx=oe.Linear,px=oe.Quad,mx=oe.Cubic,gx=oe.Quart,_x=oe.Quint,xx=oe.Strong,vx=oe.Elastic,yx=oe.Back,Sx=oe.SteppedEase,Mx=oe.Bounce,bx=oe.Sine,wx=oe.Expo,Tx=oe.Circ;var Cp,Ps,Wr,Nu,fr,Ex,Rp,Ou,Ax=function(){return typeof window<"u"},as={},ur=180/Math.PI,Xr=Math.PI/180,Hr=Math.atan2,Pp=1e8,Uu=/([A-Z])/g,Cx=/(left|right|width|margin|padding|x)/i,Rx=/[\s,\(]\S/,Wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Px=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ix=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Lx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Dx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Bp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},zp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Nx=function(t,e,n){return t.style[e]=n},Ox=function(t,e,n){return t.style.setProperty(e,n)},Ux=function(t,e,n){return t._gsap[e]=n},Fx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Bx=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},zx=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Ue="transform",$n=Ue+"Origin",kx=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in as&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Wi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=os(i,a)}):this.tfm[t]=o.x?o[t]:os(i,t),t===$n&&(this.tfm.zOrigin=o.zOrigin);else return Wi.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Ue)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,e,"")),t=Ue}(r||e)&&this.props.push(t,e,r[t])},kp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Vx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Uu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Ou(),(!r||!r.isStart)&&!n[Ue]&&(kp(n),i.zOrigin&&n[$n]&&(n[$n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Vp=function(t,e){var n={target:t,props:[],revert:Vx,save:kx};return t._gsap||bn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Gp,Iu=function(t,e){var n=Ps.createElementNS?Ps.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ps.createElement(t);return n&&n.style?n:Ps.createElement(t)},ri=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Uu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,qr(e)||e,1)||""},Ip="O,Moz,ms,Ms,Webkit".split(","),qr=function(t,e,n){var i=e||fr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ip[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Ip[o]:"")+t},Lu=function(){Ax()&&window.document&&(Cp=window,Ps=Cp.document,Wr=Ps.documentElement,fr=Iu("div")||{style:{}},Ex=Iu("div"),Ue=qr(Ue),$n=Ue+"Origin",fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gp=!!qr("perspective"),Ou=bn.core.reverting,Nu=1)},Lp=function(t){var e=t.ownerSVGElement,n=Iu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Wr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Wr.removeChild(n),r},Dp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Hp=function(t){var e,n;try{e=t.getBBox()}catch{e=Lp(t),n=1}return e&&(e.width||e.height)||n||(e=Lp(t)),e&&!e.width&&!e.x&&!e.y?{x:+Dp(t,["x","cx","x1"])||0,y:+Dp(t,["y","cy","y1"])||0,width:0,height:0}:e},Wp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Hp(t))},Ls=function(t,e){if(e){var n=t.style,i;e in as&&e!==$n&&(e=Ue),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Uu,"-$1").toLowerCase())):n.removeAttribute(e)}},Is=function(t,e,n,i,r,o){var a=new On(t._pt,e,n,0,1,o?zp:Bp);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Np={deg:1,rad:1,turn:1},Gx={grid:1,flex:1},Ds=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=fr.style,l=Cx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",m,_,p,g;if(i===o||!r||Np[i]||Np[o])return r;if(o!=="px"&&!u&&(r=s(t,e,n,"px")),g=t.getCTM&&Wp(t),(f||o==="%")&&(as[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Ve(f?r/m*d:r/100*m);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ps||!_.appendChild)&&(_=Ps.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Yn.time&&!p.uncache)return Ve(r/p.width*d);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,m=t[h],v?t.style[e]=v:Ls(t,e)}else(f||o==="%")&&!Gx[ri(_,"display")]&&(a.position=ri(t,"position")),_===t&&(a.position="static"),_.appendChild(fr),m=fr[h],_.removeChild(fr),a.position="absolute";return l&&f&&(p=As(_),p.time=Yn.time,p.width=_[h]),Ve(u?m*r/d:m&&r?d/m*r:0)},os=function(t,e,n,i){var r;return Nu||Lu(),e in Wi&&e!=="transform"&&(e=Wi[e],~e.indexOf(",")&&(e=e.split(",")[0])),as[e]&&e!=="transform"?(r=$o(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:bl(ri(t,$n))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ml[e]&&Ml[e](t,e,n)||ri(t,e)||xu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ds(t,e,r,n)+n:r},Hx=function(t,e,n,i){if(!n||n==="none"){var r=qr(e,t,1),o=r&&ri(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=ri(t,"borderTopColor"))}var a=new On(this._pt,t.style,e,0,1,Eu),l=0,c=0,h,d,u,f,m,_,p,g,v,E,y,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ri(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ri(t,e)||i,_?t.style[e]=_:Ls(t,e)),h=[n,i],yu(h),n=h[0],i=h[1],u=n.match(or)||[],b=i.match(or)||[],b.length){for(;d=or.exec(i);)p=d[0],v=i.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=ar(f,p)+y),g=parseFloat(p),E=p.substr((g+"").length),l=or.lastIndex-E.length,E||(E=E||Jn.units[e]||y,l===i.length&&(i+=E,a.e+=E)),y!==E&&(f=Ds(t,e,_,E)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:g-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?zp:Bp;return du.test(i)&&(a.e=0),this._pt=a,a},Op={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Wx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Op[n]||n,e[1]=Op[i]||i,e.join(" ")},Xx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],as[a]&&(l=1,a=a==="transformOrigin"?$n:Ue),Ls(n,a);l&&(Ls(n,Ue),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",$o(n,1),o.uncache=1,kp(i)))}},Ml={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new On(t._pt,e,n,0,0,Xx);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Jo=[1,0,0,1,0,0],Xp={},qp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Up=function(t){var e=ri(t,Ue);return qp(e)?Jo:e.substr(7).match(fu).map(Ve)},Fu=function(t,e){var n=t._gsap||As(t),i=t.style,r=Up(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Jo:r):(r===Jo&&!t.offsetParent&&t!==Wr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Wr.appendChild(t)),r=Up(t),l?i.display=l:Ls(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Wr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Du=function(t,e,n,i,r,o){var a=t._gsap,l=r||Fu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],E=e.split(" "),y=parseFloat(E[0])||0,b=parseFloat(E[1])||0,T,x,M,P;n?l!==Jo&&(x=f*p-m*_)&&(M=y*(p/x)+b*(-_/x)+(_*v-p*g)/x,P=y*(-m/x)+b*(f/x)-(f*v-m*g)/x,y=M,b=P):(T=Hp(t),y=T.x+(~E[0].indexOf("%")?y/100*T.width:y),b=T.y+(~(E[1]||E[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&a.smooth?(g=y-c,v=b-h,a.xOffset=d+(g*f+v*_)-g,a.yOffset=u+(g*m+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[$n]="0px 0px",o&&(Is(o,a,"xOrigin",c,y),Is(o,a,"yOrigin",h,b),Is(o,a,"xOffset",d,a.xOffset),Is(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+b)},$o=function(t,e){var n=t._gsap||new Su(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ri(t,$n)||"0",h,d,u,f,m,_,p,g,v,E,y,b,T,x,M,P,C,N,L,V,I,k,z,U,q,F,A,Z,ut,Mt,W,rt;return h=d=u=_=p=g=v=E=y=0,f=m=1,n.svg=!!(t.getCTM&&Wp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ue]!=="none"?l[Ue]:"")),i.scale=i.rotate=i.translate="none"),x=Fu(t,n.svg),n.svg&&(n.uncache?(q=t.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),Du(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,x)),b=n.xOrigin||0,T=n.yOrigin||0,x!==Jo&&(N=x[0],L=x[1],V=x[2],I=x[3],h=k=x[4],d=z=x[5],x.length===6?(f=Math.sqrt(N*N+L*L),m=Math.sqrt(I*I+V*V),_=N||L?Hr(L,N)*ur:0,v=V||I?Hr(V,I)*ur+_:0,v&&(m*=Math.abs(Math.cos(v*Xr))),n.svg&&(h-=b-(b*N+T*V),d-=T-(b*L+T*I))):(rt=x[6],Mt=x[7],A=x[8],Z=x[9],ut=x[10],W=x[11],h=x[12],d=x[13],u=x[14],M=Hr(rt,ut),p=M*ur,M&&(P=Math.cos(-M),C=Math.sin(-M),U=k*P+A*C,q=z*P+Z*C,F=rt*P+ut*C,A=k*-C+A*P,Z=z*-C+Z*P,ut=rt*-C+ut*P,W=Mt*-C+W*P,k=U,z=q,rt=F),M=Hr(-V,ut),g=M*ur,M&&(P=Math.cos(-M),C=Math.sin(-M),U=N*P-A*C,q=L*P-Z*C,F=V*P-ut*C,W=I*C+W*P,N=U,L=q,V=F),M=Hr(L,N),_=M*ur,M&&(P=Math.cos(M),C=Math.sin(M),U=N*P+L*C,q=k*P+z*C,L=L*P-N*C,z=z*P-k*C,N=U,k=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=Ve(Math.sqrt(N*N+L*L+V*V)),m=Ve(Math.sqrt(z*z+rt*rt)),M=Hr(k,z),v=Math.abs(M)>2e-4?M*ur:0,y=W?1/(W<0?-W:W):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!qp(ri(t,Ue)),U&&t.setAttribute("transform",U))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ve(f),n.scaleY=Ve(m),n.rotation=Ve(_)+a,n.rotationX=Ve(p)+a,n.rotationY=Ve(g)+a,n.skewX=v+a,n.skewY=E+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[$n]=bl(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?Yx:Gp?Yp:qx,n.uncache=0,n},bl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ru=function(t,e,n){var i=dn(e);return Ve(parseFloat(e)+parseFloat(Ds(t,"x",n+"px",i)))+i},qx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Yp(t,e)},cr="0deg",Zo="0px",hr=") ",Yp=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,E=n.zOrigin,y="",b=g==="auto"&&t&&t!==1||g===!0;if(E&&(d!==cr||h!==cr)){var T=parseFloat(h)*Xr,x=Math.sin(T),M=Math.cos(T),P;T=parseFloat(d)*Xr,P=Math.cos(T),o=Ru(v,o,x*P*-E),a=Ru(v,a,-Math.sin(T)*-E),l=Ru(v,l,M*P*-E+E)}p!==Zo&&(y+="perspective("+p+hr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(b||o!==Zo||a!==Zo||l!==Zo)&&(y+=l!==Zo||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+hr),c!==cr&&(y+="rotate("+c+hr),h!==cr&&(y+="rotateY("+h+hr),d!==cr&&(y+="rotateX("+d+hr),(u!==cr||f!==cr)&&(y+="skew("+u+", "+f+hr),(m!==1||_!==1)&&(y+="scale("+m+", "+_+hr),v.style[Ue]=y||"translate(0, 0)"},Yx=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,E=parseFloat(o),y=parseFloat(a),b,T,x,M,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Xr,c*=Xr,b=Math.cos(l)*d,T=Math.sin(l)*d,x=Math.sin(l-c)*-u,M=Math.cos(l-c)*u,c&&(h*=Xr,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,M*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),b*=P,T*=P)),b=Ve(b),T=Ve(T),x=Ve(x),M=Ve(M)):(b=d,M=u,T=x=0),(E&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(E=Ds(f,"x",o,"px"),y=Ds(f,"y",a,"px")),(m||_||p||g)&&(E=Ve(E+m-(m*b+_*x)+p),y=Ve(y+_-(m*T+_*M)+g)),(i||r)&&(P=f.getBBox(),E=Ve(E+i/100*P.width),y=Ve(y+r/100*P.height)),P="matrix("+b+","+T+","+x+","+M+","+E+","+y+")",f.setAttribute("transform",P),v&&(f.style[Ue]=P)},Zx=function(t,e,n,i,r){var o=360,a=en(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?ur:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Pp)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Pp)%o-~~(c/o)*o)),t._pt=u=new On(t._pt,e,n,i,c,Px),u.e=h,u.u="deg",t._props.push(n),u},Fp=function(t,e){for(var n in e)t[n]=e[n];return t},Jx=function(t,e,n){var i=Fp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ue]=e,a=$o(n,1),Ls(n,Ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ue],o[Ue]=e,a=$o(n,1),o[Ue]=c);for(l in as)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=dn(c),m=dn(h),d=f!==m?Ds(n,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new On(t._pt,a,l,d,u-d,Pu),t._pt.u=m||0,t._props.push(l));Fp(a,i)};Nn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Ml[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(m){return os(a,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var Bu={name:"css",register:Lu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,m,_,p,g,v,E,y,b,T,x,M,P;Nu||Lu(),this.styles=this.styles||Vp(t),M=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(qn[_]&&bu(_,e,n,i,t,r)))){if(f=typeof h,m=Ml[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Gr(h)),m)m(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ss.lastIndex=0,ss.test(c)||(p=dn(c),g=dn(h),g?p!==g&&(c=Ds(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),M.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],en(c)&&~c.indexOf("random(")&&(c=Gr(c)),dn(c+"")||c==="auto"||(c+=Jn.units[_]||dn(os(t,_))||""),(c+"").charAt(1)==="="&&(c=os(t,_))):c=os(t,_),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in Wi&&(_==="autoAlpha"&&(u===1&&os(t,"visibility")==="hidden"&&d&&(u=0),M.push("visibility",0,a.visibility),Is(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Wi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in as,E){if(this.styles.save(_),P=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ri(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=ri(t,"perspective"),C?t.style.perspective=C:Ls(t,"perspective")}d=parseFloat(h)}if(y||(b=t._gsap,b.renderTransform&&!e.parseTransform||$o(t,e.parseTransform),T=e.smoothOrigin!==!1&&b.smooth,y=this._pt=new On(this._pt,a,Ue,0,1,b.renderTransform,b,0,-1),y.dep=1),_==="scale")this._pt=new On(this._pt,b,"scaleY",b.scaleY,(v?ar(b.scaleY,v+d):d)-b.scaleY||0,Pu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){M.push($n,0,a[$n]),h=Wx(h),b.svg?Du(t,h,0,T,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==b.zOrigin&&Is(this,b,"zOrigin",b.zOrigin,g),Is(this,a,_,bl(c),bl(h)));continue}else if(_==="svgOrigin"){Du(t,h,1,T,0,this);continue}else if(_ in Xp){Zx(this,b,_,u,v?ar(u,v+h):h);continue}else if(_==="smoothOrigin"){Is(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){Jx(this,h,t);continue}}else _ in a||(_=qr(_)||_);if(E||(d||d===0)&&(u||u===0)&&!Rx.test(h)&&_ in a)p=(c+"").substr((u+"").length),d||(d=0),g=dn(h)||(_ in Jn.units?Jn.units[_]:p),p!==g&&(u=Ds(t,_,c,g)),this._pt=new On(this._pt,E?b:a,_,u,(v?ar(u,v+d):d)-u,!E&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?Dx:Pu),this._pt.u=g||0,E&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=Lx):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Ix);else if(_ in a)Hx.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,r);else if(_!=="parseTransform"){_l(_,h);continue}E||(_ in a?M.push(_,0,a[_]):typeof t[_]=="function"?M.push(_,2,t[_]()):M.push(_,1,c||t[_])),o.push(_)}}x&&Cu(this)},render:function(t,e){if(e.tween._time||!Ou())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:os,aliases:Wi,getSetter:function(t,e,n){var i=Wi[e];return i&&i.indexOf(",")<0&&(e=i),e in as&&e!==$n&&(t._gsap.x||os(t,"x"))?n&&Rp===n?e==="scale"?Fx:Ux:(Rp=n||{})&&(e==="scale"?Bx:zx):t.style&&!gl(t.style[e])?Nx:~e.indexOf("-")?Ox:Sl(t,e)},core:{_removeProperty:Ls,_getMatrix:Fu}};bn.utils.checkPrefix=qr;bn.core.getStyleSaver=Vp;(function(s,t,e,n){var i=Nn(s+","+t+","+e,function(r){as[r]=1});Nn(t,function(r){Jn.units[r]="deg",Xp[r]=1}),Wi[i[13]]=s+","+t,Nn(n,function(r){var o=r.split(":");Wi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Jn.units[s]="px"});bn.registerPlugin(Bu);var Ee=bn.registerPlugin(Bu)||bn,vT=Ee.core.Tween;function Zp(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function $x(s,t,e){return t&&Zp(s.prototype,t),e&&Zp(s,e),s}var pn,El,Kx,Kn,Ns,Os,Zr,$p,dr,Jr,Kp,ls,Ai,Qp,jp=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},tm=1,Yr=[],Zt=[],Ci=[],Qo=Date.now,zu=function(t,e){return e},Qx=function(){var t=Jr.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Zt),i.push.apply(i,Ci),Zt=n,Ci=i,zu=function(o,a){return e[o](a)}},hs=function(t,e){return~Ci.indexOf(t)&&Ci[Ci.indexOf(t)+1][e]},jo=function(t){return!!~Kp.indexOf(t)},Fn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},Un=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},wl="scrollLeft",Tl="scrollTop",ku=function(){return ls&&ls.isPressed||Zt.cache++},Al=function(t,e){var n=function i(r){if(r||r===0){tm&&Kn.history.scrollRestoration!=="manual"&&(Kn.history.scrollRestoration="manual");var o=ls&&ls.isPressed;r=i.v=Math.round(r)||(ls&&ls.iOS?1:0),t(r),i.cacheID=Zt.cache,o&&zu("ss",r)}else(e||Zt.cache!==i.cacheID||zu("ref"))&&(i.cacheID=Zt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},wn={s:wl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Al(function(s){return arguments.length?Kn.scrollTo(s,Je.sc()):Kn.pageXOffset||Ns[wl]||Os[wl]||Zr[wl]||0})},Je={s:Tl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:Al(function(s){return arguments.length?Kn.scrollTo(wn.sc(),s):Kn.pageYOffset||Ns[Tl]||Os[Tl]||Zr[Tl]||0})},Bn=function(t,e){return(e&&e._ctx&&e._ctx.selector||pn.utils.toArray)(t)[0]||(typeof t=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},jx=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},cs=function(t,e){var n=e.s,i=e.sc;jo(t)&&(t=Ns.scrollingElement||Os);var r=Zt.indexOf(t),o=i===Je.sc?1:2;!~r&&(r=Zt.push(t)-1),Zt[r+o]||Fn(t,"scroll",ku);var a=Zt[r+o],l=a||(Zt[r+o]=Al(hs(t,n),!0)||(jo(t)?i:Al(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=pn.getProperty(t,"scrollBehavior")==="smooth"),l},Cl=function(t,e,n){var i=t,r=t,o=Qo(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=Qo();_||p-o>l?(r=i,i=m,a=o,o=p):n?i+=m:i=r+(m-r)/(p-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},u=function(m){var _=a,p=r,g=Qo();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Ko=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Jp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},em=function(){Jr=pn.core.globals().ScrollTrigger,Jr&&Jr.core&&Qx()},nm=function(t){return pn=t||jp(),!El&&pn&&typeof document<"u"&&document.body&&(Kn=window,Ns=document,Os=Ns.documentElement,Zr=Ns.body,Kp=[Kn,Ns,Os,Zr],Kx=pn.utils.clamp,Qp=pn.core.context||function(){},dr="onpointerenter"in Zr?"pointer":"mouse",$p=Ge.isTouch=Kn.matchMedia&&Kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ai=Ge.eventTypes=("ontouchstart"in Os?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Os?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return tm=0},500),El=1),Jr||em(),El};wn.op=Je;Zt.cache=0;var Ge=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){El||nm(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Jr||em();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,E=n.onPress,y=n.onRelease,b=n.onRight,T=n.onLeft,x=n.onUp,M=n.onDown,P=n.onChangeX,C=n.onChangeY,N=n.onChange,L=n.onToggleX,V=n.onToggleY,I=n.onHover,k=n.onHoverEnd,z=n.onMove,U=n.ignoreCheck,q=n.isNormalizer,F=n.onGestureStart,A=n.onGestureEnd,Z=n.onWheel,ut=n.onEnable,Mt=n.onDisable,W=n.onClick,rt=n.scrollSpeed,gt=n.capture,wt=n.allowClicks,_t=n.lockAxis,Nt=n.onLockAxis;this.target=a=Bn(a)||Os,this.vars=n,f&&(f=pn.utils.toArray(f)),i=i||1e-9,r=r||0,m=m||1,rt=rt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Kn.getComputedStyle(Zr).lineHeight)||22);var _e,At,Wt,Lt,Ft,he,ae,K=this,Qt=0,Xe=0,ye=n.passive||!h&&n.passive!==!1,re=cs(a,wn),Fe=cs(a,Je),He=re(),B=Fe(),fe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ai[0]==="pointerdown",le=jo(a),Gt=a.ownerDocument||Ns,ft=[0,0,0],ue=[0,0,0],Dt=0,Bt=function(){return Dt=Qo()},R=function(mt,st){return(K.event=mt)&&f&&jx(mt.target,f)||st&&fe&&mt.pointerType!=="touch"||U&&U(mt,st)},S=function(){K._vx.reset(),K._vy.reset(),At.pause(),d&&d(K)},H=function(){var mt=K.deltaX=Jp(ft),st=K.deltaY=Jp(ue),et=Math.abs(mt)>=i,vt=Math.abs(st)>=i;N&&(et||vt)&&N(K,mt,st,ft,ue),et&&(b&&K.deltaX>0&&b(K),T&&K.deltaX<0&&T(K),P&&P(K),L&&K.deltaX<0!=Qt<0&&L(K),Qt=K.deltaX,ft[0]=ft[1]=ft[2]=0),vt&&(M&&K.deltaY>0&&M(K),x&&K.deltaY<0&&x(K),C&&C(K),V&&K.deltaY<0!=Xe<0&&V(K),Xe=K.deltaY,ue[0]=ue[1]=ue[2]=0),(Lt||Wt)&&(z&&z(K),Wt&&(p&&Wt===1&&p(K),v&&v(K),Wt=0),Lt=!1),he&&!(he=!1)&&Nt&&Nt(K),Ft&&(Z(K),Ft=!1),_e=0},ot=function(mt,st,et){ft[et]+=mt,ue[et]+=st,K._vx.update(mt),K._vy.update(st),c?_e||(_e=requestAnimationFrame(H)):H()},it=function(mt,st){_t&&!ae&&(K.axis=ae=Math.abs(mt)>Math.abs(st)?"x":"y",he=!0),ae!=="y"&&(ft[2]+=mt,K._vx.update(mt,!0)),ae!=="x"&&(ue[2]+=st,K._vy.update(st,!0)),c?_e||(_e=requestAnimationFrame(H)):H()},ht=function(mt){if(!R(mt,1)){mt=Ko(mt,h);var st=mt.clientX,et=mt.clientY,vt=st-K.x,nt=et-K.y,Tt=K.isDragging;K.x=st,K.y=et,(Tt||(vt||nt)&&(Math.abs(K.startX-st)>=r||Math.abs(K.startY-et)>=r))&&(Wt||(Wt=Tt?2:1),Tt||(K.isDragging=!0),it(vt,nt))}},xt=K.onPress=function(at){R(at,1)||at&&at.button||(K.axis=ae=null,At.pause(),K.isPressed=!0,at=Ko(at),Qt=Xe=0,K.startX=K.x=at.clientX,K.startY=K.y=at.clientY,K._vx.reset(),K._vy.reset(),Fn(q?a:Gt,Ai[1],ht,ye,!0),K.deltaX=K.deltaY=0,E&&E(K))},X=K.onRelease=function(at){if(!R(at,1)){Un(q?a:Gt,Ai[1],ht,!0);var mt=!isNaN(K.y-K.startY),st=K.isDragging,et=st&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),vt=Ko(at);!et&&mt&&(K._vx.reset(),K._vy.reset(),h&&wt&&pn.delayedCall(.08,function(){if(Qo()-Dt>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Gt.createEvent){var nt=Gt.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,Kn,1,vt.screenX,vt.screenY,vt.clientX,vt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(nt)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,d&&st&&!q&&At.restart(!0),Wt&&H(),g&&st&&g(K),y&&y(K,et)}},tt=function(mt){return mt.touches&&mt.touches.length>1&&(K.isGesturing=!0)&&F(mt,K.isDragging)},ct=function(){return(K.isGesturing=!1)||A(K)},D=function(mt){if(!R(mt)){var st=re(),et=Fe();ot((st-He)*rt,(et-B)*rt,1),He=st,B=et,d&&At.restart(!0)}},j=function(mt){if(!R(mt)){mt=Ko(mt,h),Z&&(Ft=!0);var st=(mt.deltaMode===1?l:mt.deltaMode===2?Kn.innerHeight:1)*m;ot(mt.deltaX*st,mt.deltaY*st,0),d&&!q&&At.restart(!0)}},Q=function(mt){if(!R(mt)){var st=mt.clientX,et=mt.clientY,vt=st-K.x,nt=et-K.y;K.x=st,K.y=et,Lt=!0,d&&At.restart(!0),(vt||nt)&&it(vt,nt)}},dt=function(mt){K.event=mt,I(K)},lt=function(mt){K.event=mt,k(K)},pt=function(mt){return R(mt)||Ko(mt,h)&&W(K)};At=K._dc=pn.delayedCall(u||.25,S).pause(),K.deltaX=K.deltaY=0,K._vx=Cl(0,50,!0),K._vy=Cl(0,50,!0),K.scrollX=re,K.scrollY=Fe,K.isDragging=K.isGesturing=K.isPressed=!1,Qp(this),K.enable=function(at){return K.isEnabled||(Fn(le?Gt:a,"scroll",ku),o.indexOf("scroll")>=0&&Fn(le?Gt:a,"scroll",D,ye,gt),o.indexOf("wheel")>=0&&Fn(a,"wheel",j,ye,gt),(o.indexOf("touch")>=0&&$p||o.indexOf("pointer")>=0)&&(Fn(a,Ai[0],xt,ye,gt),Fn(Gt,Ai[2],X),Fn(Gt,Ai[3],X),wt&&Fn(a,"click",Bt,!0,!0),W&&Fn(a,"click",pt),F&&Fn(Gt,"gesturestart",tt),A&&Fn(Gt,"gestureend",ct),I&&Fn(a,dr+"enter",dt),k&&Fn(a,dr+"leave",lt),z&&Fn(a,dr+"move",Q)),K.isEnabled=!0,K.isDragging=K.isGesturing=K.isPressed=Lt=Wt=!1,K._vx.reset(),K._vy.reset(),He=re(),B=Fe(),at&&at.type&&xt(at),ut&&ut(K)),K},K.disable=function(){K.isEnabled&&(Yr.filter(function(at){return at!==K&&jo(at.target)}).length||Un(le?Gt:a,"scroll",ku),K.isPressed&&(K._vx.reset(),K._vy.reset(),Un(q?a:Gt,Ai[1],ht,!0)),Un(le?Gt:a,"scroll",D,gt),Un(a,"wheel",j,gt),Un(a,Ai[0],xt,gt),Un(Gt,Ai[2],X),Un(Gt,Ai[3],X),Un(a,"click",Bt,!0),Un(a,"click",pt),Un(Gt,"gesturestart",tt),Un(Gt,"gestureend",ct),Un(a,dr+"enter",dt),Un(a,dr+"leave",lt),Un(a,dr+"move",Q),K.isEnabled=K.isPressed=K.isDragging=!1,Mt&&Mt(K))},K.kill=K.revert=function(){K.disable();var at=Yr.indexOf(K);at>=0&&Yr.splice(at,1),ls===K&&(ls=0)},Yr.push(K),q&&jo(a)&&(ls=K),K.enable(_)},$x(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Ge.version="3.15.1";Ge.create=function(s){return new Ge(s)};Ge.register=nm;Ge.getAll=function(){return Yr.slice()};Ge.getById=function(s){return Yr.filter(function(t){return t.vars.id===s})[0]};jp()&&pn.registerPlugin(Ge);var Ct,jr,Kt,xe,li,me,tf,Wl,fa,oa,ea,Rl,Tn,Yl,Yu,kn,im,sm,to,ym,Vu,Sm,zn,Zu,Mm,bm,Us,Ju,ef,eo,nf,Fs,$u,Gu,Pl=1,En=Date.now,Hu=En(),vi=0,na=0,rm=function(t,e,n){var i=ai(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},om=function(t,e){return e&&(!ai(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},tv=function s(){return na&&requestAnimationFrame(s)},am=function(){return Yl=1},lm=function(){return Yl=0},Xi=function(t){return t},ia=function(t){return Math.round(t*1e5)/1e5||0},wm=function(){return typeof window<"u"},Tm=function(){return Ct||wm()&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},vr=function(t){return!!~tf.indexOf(t)},Em=function(t){return(t==="Height"?nf:Kt["inner"+t])||li["client"+t]||me["client"+t]},Am=function(t){return hs(t,"getBoundingClientRect")||(vr(t)?function(){return Hl.width=Kt.innerWidth,Hl.height=nf,Hl}:function(){return us(t)})},ev=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=hs(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Em(r):t["client"+r])||0}},nv=function(t,e){return!e||~Ci.indexOf(t)?Am(t):function(){return Hl}},qi=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=hs(t,n))?o()-Am(t)()[r]:vr(t)?(li[n]||me[n])-Em(i):t[n]-t["offset"+i])},Il=function(t,e){for(var n=0;n<to.length;n+=3)(!e||~e.indexOf(to[n+1]))&&t(to[n],to[n+1],to[n+2])},ai=function(t){return typeof t=="string"},An=function(t){return typeof t=="function"},sa=function(t){return typeof t=="number"},pr=function(t){return typeof t=="object"},ta=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},$r=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Kr=Math.abs,Cm="left",Rm="top",sf="right",rf="bottom",gr="width",_r="height",aa="Right",la="Left",ca="Top",ha="Bottom",$e="padding",_i="margin",io="Width",of="Height",nn="px",xi=function(t){return Kt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},iv=function(t){var e=xi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},cm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},us=function(t,e){var n=e&&xi(t)[Yu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ct.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Xl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Pm=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},sv=function(t){return function(e){return Ct.utils.snap(Pm(t),e)}},af=function(t){var e=Ct.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},rv=function(t){return function(e,n){return af(Pm(t))(e,n.direction)}},Ll=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},ln=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},an=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Dl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},hm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Nl={toggleActions:"play",anticipatePin:0},ql={top:0,left:0,center:.5,bottom:1,right:1},zl=function(t,e){if(ai(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in ql?ql[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ol=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,m=xe.createElement("div"),_=vr(n)||hs(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?me:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,E=v?c:h,y="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===Je?sf:rf)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],kl(m,0,i,v),m},kl=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+io]=1,r["border"+a+io]=0,r[n.p]=e+"px",Ct.set(t,r)},$t=[],Ku={},da,um=function(){return En()-vi>34&&(da||(da=requestAnimationFrame(fs)))},Qr=function(){(!zn||!zn.isPressed||zn.startX>me.clientWidth)&&(Zt.cache++,zn?da||(da=requestAnimationFrame(fs)):fs(),vi||Sr("scrollStart"),vi=En())},Wu=function(){bm=Kt.innerWidth,Mm=Kt.innerHeight},ra=function(t){Zt.cache++,(t===!0||!Tn&&!Sm&&!xe.fullscreenElement&&!xe.webkitFullscreenElement&&(!Zu||bm!==Kt.innerWidth||Math.abs(Kt.innerHeight-Mm)>Kt.innerHeight*.25))&&Wl.restart(!0)},yr={},ov=[],Im=function s(){return an(kt,"scrollEnd",s)||mr(!0)},Sr=function(t){return yr[t]&&yr[t].map(function(e){return e()})||ov},oi=[],Lm=function(t){for(var e=0;e<oi.length;e+=5)(!t||oi[e+4]&&oi[e+4].query===t)&&(oi[e].style.cssText=oi[e+1],oi[e].getBBox&&oi[e].setAttribute("transform",oi[e+2]||""),oi[e+3].uncache=1)},Dm=function(){Zt.cache++,Zt.forEach(function(t){return An(t)&&(t.rec=t())})},lf=function(t,e){var n;for(kn=0;kn<$t.length;kn++)n=$t[kn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Fs=!0,e&&Lm(e),e||Sr("revert")},Nm=function(t,e){Zt.cache++,(e||!Vn)&&Zt.forEach(function(n){return An(n)&&n.cacheID++&&(n.rec=0)}),ai(t)&&(ef=t,Kt.history.scrollRestoration!==t&&(Kt.history.scrollRestoration=t))},Vn,xr=0,fm,av=function(){if(fm!==xr){var t=fm=xr;requestAnimationFrame(function(){return t===xr&&mr(!0)})}},Om=function(){me.appendChild(eo),nf=!zn&&eo.offsetHeight||Kt.innerHeight,me.removeChild(eo)},dm=function(t){return fa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},mr=function(t,e){if(li=xe.documentElement,me=xe.body,tf=[Kt,xe,li,me],vi&&!t&&!Fs){ln(kt,"scrollEnd",Im);return}Om(),Vn=kt.isRefreshing=!0,Fs||Dm();var n=Sr("refreshInit");ym&&kt.sort(),e||lf(),Zt.forEach(function(i){An(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$t.slice(0).forEach(function(i){return i.refresh()}),Fs=!1,$t.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),$u=1,dm(!0),$t.forEach(function(i){var r=qi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),dm(!1),$u=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Zt.forEach(function(i){An(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Nm(ef,1),Wl.pause(),xr++,Vn=2,fs(2),$t.forEach(function(i){return An(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Vn=kt.isRefreshing=!1,Sr("refresh")},Qu=0,Vl=1,ua,fs=function(t){if(t===2||!Vn&&!Fs){kt.isUpdating=!0,ua&&ua.update(0);var e=$t.length,n=En(),i=n-Hu>=50,r=e&&$t[0].scroll();if(Vl=Qu>r?-1:1,Vn||(Qu=r),i&&(vi&&!Yl&&n-vi>200&&(vi=0,Sr("scrollEnd")),ea=Hu,Hu=n),Vl<0){for(kn=e;kn-- >0;)$t[kn]&&$t[kn].update(0,i);Vl=1}else for(kn=0;kn<e;kn++)$t[kn]&&$t[kn].update(0,i);kt.isUpdating=!1}da=0},ju=[Cm,Rm,rf,sf,_i+ha,_i+aa,_i+ca,_i+la,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Gl=ju.concat([gr,_r,"boxSizing","max"+io,"max"+of,"position",_i,$e,$e+ca,$e+aa,$e+ha,$e+la]),lv=function(t,e,n){no(n);var i=t._gsap;if(i.spacerIsNative)no(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Xu=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=ju.length,o=e.style,a=t.style,l;r--;)l=ju[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[rf]=a[sf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[gr]=Xl(t,wn)+nn,o[_r]=Xl(t,Je)+nn,o[$e]=a[_i]=a[Rm]=a[Cm]="0",no(i),a[gr]=a["max"+io]=n[gr],a[_r]=a["max"+of]=n[_r],a[$e]=n[$e],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},cv=/([A-Z])/g,no=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Ct.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(cv,"-$1").toLowerCase())}},Ul=function(t){for(var e=Gl.length,n=t.style,i=[],r=0;r<e;r++)i.push(Gl[r],n[Gl[r]]);return i.t=t,i},hv=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Hl={left:0,top:0},pm=function(t,e,n,i,r,o,a,l,c,h,d,u,f,m){An(t)&&(t=t(l)),ai(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?zl("0"+t.substr(3),n):0));var _=f?f.time():0,p,g,v;if(f&&f.seek(0),isNaN(t)||(t=+t),sa(t))f&&(t=Ct.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&kl(a,n,i,!0);else{An(e)&&(e=e(l));var E=(t||"0").split(" "),y,b,T,x;v=Bn(e,l)||me,y=us(v)||{},(!y||!y.left&&!y.top)&&xi(v).display==="none"&&(x=v.style.display,v.style.display="block",y=us(v),x?v.style.display=x:v.style.removeProperty("display")),b=zl(E[0],y[i.d]),T=zl(E[1]||"0",n),t=y[i.p]-c[i.p]-h+b+r-T,a&&kl(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var M=t+n,P=o._isStart;p="scroll"+i.d2,kl(o,M,i,P&&M>20||!P&&(d?Math.max(me[p],li[p]):o.parentNode[p])<=M+1),d&&(c=us(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return f&&v&&(p=us(v),f.seek(u),g=us(v),f._caScrollDist=p[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},uv=/(webkit|moz|length|cssText|inset)/i,mm=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===me){t._stOrig=r.cssText,a=xi(t);for(o in a)!+o&&!uv.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Ct.core.getCache(t).uncache=1,e.appendChild(t)}},Um=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Fl=function(t,e,n){var i={};i[e.p]="+="+n,Ct.set(t,i)},gm=function(t,e){var n=cs(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,m={};c=c||n();var _=Um(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){Zt.cache++,o.tween&&fs()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ct.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},ln(t,"wheel",n.wheelHandler),kt.isTouch&&ln(t,"touchmove",n.wheelHandler),r},kt=(function(){function s(e,n){jr||s.register(Ct)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ju(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!na){this.update=this.refresh=this.kill=Xi;return}n=cm(ai(n)||sa(n)||n.nodeType?{trigger:n}:n,Nl);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,E=r.once,y=r.snap,b=r.pinReparent,T=r.pinSpacer,x=r.containerAnimation,M=r.fastScrollEnd,P=r.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:Je,N=!d&&d!==0,L=Bn(n.scroller||Kt),V=Ct.core.getCache(L),I=vr(L),k=("pinType"in n?n.pinType:hs(L,"pinType")||I&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=N&&n.toggleActions.split(" "),q="markers"in n?n.markers:Nl.markers,F=I?0:parseFloat(xi(L)["border"+C.p2+io])||0,A=this,Z=n.onRefreshInit&&function(){return n.onRefreshInit(A)},ut=ev(L,I,C),Mt=nv(L,I),W=0,rt=0,gt=0,wt=cs(L,C),_t,Nt,_e,At,Wt,Lt,Ft,he,ae,K,Qt,Xe,ye,re,Fe,He,B,fe,le,Gt,ft,ue,Dt,Bt,R,S,H,ot,it,ht,xt,X,tt,ct,D,j,Q,dt,lt;if(A._startClamp=A._endClamp=!1,A._dir=C,p*=45,A.scroller=L,A.scroll=x?x.time.bind(x):wt,At=wt(),Fs&&wt.rec==null&&(wt.rec=At),A.vars=n,i=i||n.animation,"refreshPriority"in n&&(ym=1,n.refreshPriority===-9999&&(ua=A)),V.tweenScroll=V.tweenScroll||{top:gm(L,Je),left:gm(L,wn)},A.tweenTo=_t=V.tweenScroll[C.p],A.scrubDuration=function(et){tt=sa(et)&&et,tt?X?X.duration(et):X=Ct.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return g&&g(A)}}):(X&&X.progress(1).kill(),X=0)},i&&(i.vars.lazy=!1,i._initted&&!A.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),A.animation=i.pause(),i.scrollTrigger=A,A.scrubDuration(d),ht=0,l||(l=i.vars.id)),y&&((!pr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in me.style&&Ct.set(I?[me,li]:L,{scrollBehavior:"auto"}),Zt.forEach(function(et){return An(et)&&et.target===(I?xe.scrollingElement||li:L)&&(et.smooth=!1)}),_e=An(y.snapTo)?y.snapTo:y.snapTo==="labels"?sv(i):y.snapTo==="labelsDirectional"?rv(i):y.directional!==!1?function(et,vt){return af(y.snapTo)(et,En()-rt<500?0:vt.direction)}:Ct.utils.snap(y.snapTo),ct=y.duration||{min:.1,max:2},ct=pr(ct)?oa(ct.min,ct.max):oa(ct,ct),D=Ct.delayedCall(y.delay||tt/2||.1,function(){var et=wt(),vt=En()-rt<500,nt=_t.tween;if((vt||Math.abs(A.getVelocity())<10)&&!nt&&!Yl&&W!==et){var Tt=(et-Lt)/re,jt=i&&!N?i.totalProgress():Tt,Xt=vt?0:(jt-xt)/(En()-ea)*1e3||0,Ce=Ct.utils.clamp(-Tt,1-Tt,Kr(Xt/2)*Xt/.185),qe=Tt+(y.inertia===!1?0:Ce),Re,Se,pe=y,Qe=pe.onStart,Me=pe.onInterrupt,xn=pe.onComplete;if(Re=_e(qe,A),sa(Re)||(Re=qe),Se=Math.max(0,Math.round(Lt+Re*re)),et<=Ft&&et>=Lt&&Se!==et){if(nt&&!nt._initted&&nt.data<=Kr(Se-et))return;y.inertia===!1&&(Ce=Re-Tt),_t(Se,{duration:ct(Kr(Math.max(Kr(qe-jt),Kr(Re-jt))*.185/Xt/.05||0)),ease:y.ease||"power3",data:Kr(Se-et),onInterrupt:function(){return D.restart(!0)&&Me&&$r(A,Me)},onComplete:function(){A.update(),W=wt(),i&&!N&&(X?X.resetTo("totalProgress",Re,i._tTime/i._tDur):i.progress(Re)),ht=xt=i&&!N?i.totalProgress():A.progress,v&&v(A),xn&&$r(A,xn)}},et,Ce*re,Se-et-Ce*re),Qe&&$r(A,Qe,_t.tween)}}else A.isActive&&W!==et&&D.restart(!0)}).pause()),l&&(Ku[l]=A),u=A.trigger=Bn(u||f!==!0&&f),lt=u&&u._gsap&&u._gsap.stRevert,lt&&(lt=lt(A)),f=f===!0?u:Bn(f),ai(a)&&(a={targets:u,className:a}),f&&(m===!1||m===_i||(m=!m&&f.parentNode&&f.parentNode.style&&xi(f.parentNode).display==="flex"?!1:$e),A.pin=f,Nt=Ct.core.getCache(f),Nt.spacer?Fe=Nt.pinState:(T&&(T=Bn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Nt.spacerIsNative=!!T,T&&(Nt.spacerState=Ul(T))),Nt.spacer=fe=T||xe.createElement("div"),fe.classList.add("pin-spacer"),l&&fe.classList.add("pin-spacer-"+l),Nt.pinState=Fe=Ul(f)),n.force3D!==!1&&Ct.set(f,{force3D:!0}),A.spacer=fe=Nt.spacer,it=xi(f),Bt=it[m+C.os2],Gt=Ct.getProperty(f),ft=Ct.quickSetter(f,C.a,nn),Xu(f,fe,it),B=Ul(f)),q){Xe=pr(q)?cm(q,hm):hm,K=Ol("scroller-start",l,L,C,Xe,0),Qt=Ol("scroller-end",l,L,C,Xe,0,K),le=K["offset"+C.op.d2];var pt=Bn(hs(L,"content")||L);he=this.markerStart=Ol("start",l,pt,C,Xe,le,0,x),ae=this.markerEnd=Ol("end",l,pt,C,Xe,le,0,x),x&&(dt=Ct.quickSetter([he,ae],C.a,nn)),!k&&!(Ci.length&&hs(L,"fixedMarkers")===!0)&&(iv(I?me:L),Ct.set([K,Qt],{force3D:!0}),S=Ct.quickSetter(K,C.a,nn),ot=Ct.quickSetter(Qt,C.a,nn))}if(x){var at=x.vars.onUpdate,mt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){A.update(0,0,1),at&&at.apply(x,mt||[])})}if(A.previous=function(){return $t[$t.indexOf(A)-1]},A.next=function(){return $t[$t.indexOf(A)+1]},A.revert=function(et,vt){if(!vt)return A.kill(!0);var nt=et!==!1||!A.enabled,Tt=Tn;nt!==A.isReverted&&(nt&&(j=Math.max(wt(),A.scroll.rec||0),gt=A.progress,Q=i&&i.progress()),he&&[he,ae,K,Qt].forEach(function(jt){return jt.style.display=nt?"none":"block"}),nt&&(Tn=A,A.update(nt)),f&&(!b||!A.isActive)&&(nt?lv(f,fe,Fe):Xu(f,fe,xi(f),R)),nt||A.update(nt),Tn=Tt,A.isReverted=nt)},A.refresh=function(et,vt,nt,Tt){if(!((Tn||!A.enabled)&&!vt)){if(f&&et&&vi){ln(s,"scrollEnd",Im);return}!Vn&&Z&&Z(A),Tn=A,_t.tween&&!nt&&(_t.tween.kill(),_t.tween=0),X&&X.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(G){return G.vars.immediateRender&&G.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),A.isReverted||A.revert(!0,!0),A._subPinOffset=!1;var jt=ut(),Xt=Mt(),Ce=x?x.duration():qi(L,C),qe=re<=.01||!re,Re=0,Se=Tt||0,pe=pr(nt)?nt.end:n.end,Qe=n.endTrigger||u,Me=pr(nt)?nt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),xn=A.pinnedContainer=n.pinnedContainer&&Bn(n.pinnedContainer,A),ti=u&&Math.max(0,$t.indexOf(A))||0,Be=ti,Ye,je,ei,Ur,tn,ze,di,Oo,il,bs,w,O,$;for(q&&pr(nt)&&(O=Ct.getProperty(K,C.p),$=Ct.getProperty(Qt,C.p));Be-- >0;)ze=$t[Be],ze.end||ze.refresh(0,1)||(Tn=A),di=ze.pin,di&&(di===u||di===f||di===xn)&&!ze.isReverted&&(bs||(bs=[]),bs.unshift(ze),ze.revert(!0,!0)),ze!==$t[Be]&&(ti--,Be--);for(An(Me)&&(Me=Me(A)),Me=rm(Me,"start",A),Lt=pm(Me,u,jt,C,wt(),he,K,A,Xt,F,k,Ce,x,A._startClamp&&"_startClamp")||(f?-.001:0),An(pe)&&(pe=pe(A)),ai(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(ai(Me)?Me.split(" ")[0]:"")+pe:(Re=zl(pe.substr(2),jt),pe=ai(Me)?Me:(x?Ct.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Lt):Lt)+Re,Qe=u)),pe=rm(pe,"end",A),Ft=Math.max(Lt,pm(pe||(Qe?"100% 0":Ce),Qe,jt,C,wt()+Re,ae,Qt,A,Xt,F,k,Ce,x,A._endClamp&&"_endClamp"))||-.001,Re=0,Be=ti;Be--;)ze=$t[Be]||{},di=ze.pin,di&&ze.start-ze._pinPush<=Lt&&!x&&ze.end>0&&(Ye=ze.end-(A._startClamp?Math.max(0,ze.start):ze.start),(di===u&&ze.start-ze._pinPush<Lt||di===xn)&&isNaN(Me)&&(Re+=Ye*(1-ze.progress)),di===f&&(Se+=Ye));if(Lt+=Re,Ft+=Re,A._startClamp&&(A._startClamp+=Re),A._endClamp&&!Vn&&(A._endClamp=Ft||-.001,Ft=Math.min(Ft,qi(L,C))),re=Ft-Lt||(Lt-=.01)&&.001,qe&&(gt=Ct.utils.clamp(0,1,Ct.utils.normalize(Lt,Ft,j))),A._pinPush=Se,he&&Re&&(Ye={},Ye[C.a]="+="+Re,xn&&(Ye[C.p]="-="+wt()),Ct.set([he,ae],Ye)),f&&!($u&&A.end>=qi(L,C)))Ye=xi(f),Ur=C===Je,ei=wt(),ue=parseFloat(Gt(C.a))+Se,!Ce&&Ft>1&&(w=(I?xe.scrollingElement||li:L).style,w={style:w,value:w["overflow"+C.a.toUpperCase()]},I&&xi(me)["overflow"+C.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+C.a.toUpperCase()]="scroll")),Xu(f,fe,Ye),B=Ul(f),je=us(f,!0),Oo=k&&cs(L,Ur?wn:Je)(),m?(R=[m+C.os2,re+Se+nn],R.t=fe,Be=m===$e?Xl(f,C)+re+Se:0,Be&&(R.push(C.d,Be+nn),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=Be+nn)),no(R),xn&&$t.forEach(function(G){G.pin===xn&&G.vars.pinSpacing!==!1&&(G._subPinOffset=!0)}),k&&wt(j)):(Be=Xl(f,C),Be&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=Be+nn)),k&&(tn={top:je.top+(Ur?ei-Lt:Oo)+nn,left:je.left+(Ur?Oo:ei-Lt)+nn,boxSizing:"border-box",position:"fixed"},tn[gr]=tn["max"+io]=Math.ceil(je.width)+nn,tn[_r]=tn["max"+of]=Math.ceil(je.height)+nn,tn[_i]=tn[_i+ca]=tn[_i+aa]=tn[_i+ha]=tn[_i+la]="0",tn[$e]=Ye[$e],tn[$e+ca]=Ye[$e+ca],tn[$e+aa]=Ye[$e+aa],tn[$e+ha]=Ye[$e+ha],tn[$e+la]=Ye[$e+la],He=hv(Fe,tn,b),Vn&&wt(0)),i?(il=i._initted,Vu(1),i.render(i.duration(),!0,!0),Dt=Gt(C.a)-ue+re+Se,H=Math.abs(re-Dt)>1,k&&H&&He.splice(He.length-2,2),i.render(0,!0,!0),il||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vu(0)):Dt=re,w&&(w.value?w.style["overflow"+C.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+C.a));else if(u&&wt()&&!x)for(je=u.parentNode;je&&je!==me;)je._pinOffset&&(Lt-=je._pinOffset,Ft-=je._pinOffset),je=je.parentNode;bs&&bs.forEach(function(G){return G.revert(!1,!0)}),A.start=Lt,A.end=Ft,At=Wt=Vn?j:wt(),!x&&!Vn&&!Fs&&(At<j&&wt(j),A.scroll.rec=0),A.revert(!1,!0),rt=En(),D&&(W=-1,D.restart(!0)),Tn=0,i&&N&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(qe||gt!==A.progress||x||_||i&&!i._initted)&&(i&&!N&&(i._initted||gt||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Lt<-.001&&!gt?Ct.utils.normalize(Lt,Ft,0):gt,!0),A.progress=qe||(At-Lt)/re===gt?0:gt),f&&m&&(fe._pinOffset=Math.round(A.progress*Dt)),X&&X.invalidate(),isNaN(O)||(O-=Ct.getProperty(K,C.p),$-=Ct.getProperty(Qt,C.p),Fl(K,C,O),Fl(he,C,O-(Tt||0)),Fl(Qt,C,$),Fl(ae,C,$-(Tt||0))),qe&&!Vn&&A.update(),h&&!Vn&&!ye&&(ye=!0,h(A),ye=!1)}},A.getVelocity=function(){return(wt()-Wt)/(En()-ea)*1e3||0},A.endAnimation=function(){ta(A.callbackAnimation),i&&(X?X.progress(1):i.paused()?N||ta(i,A.direction<0,1):ta(i,i.reversed()))},A.labelToScroll=function(et){return i&&i.labels&&(Lt||A.refresh()||Lt)+i.labels[et]/i.duration()*re||0},A.getTrailing=function(et){var vt=$t.indexOf(A),nt=A.direction>0?$t.slice(0,vt).reverse():$t.slice(vt+1);return(ai(et)?nt.filter(function(Tt){return Tt.vars.preventOverlaps===et}):nt).filter(function(Tt){return A.direction>0?Tt.end<=Lt:Tt.start>=Ft})},A.update=function(et,vt,nt){if(!(x&&!nt&&!et)){var Tt=Vn===!0?j:A.scroll(),jt=et?0:(Tt-Lt)/re,Xt=jt<0?0:jt>1?1:jt||0,Ce=A.progress,qe,Re,Se,pe,Qe,Me,xn,ti;if(vt&&(Wt=At,At=x?wt():Tt,y&&(xt=ht,ht=i&&!N?i.totalProgress():Xt)),p&&f&&!Tn&&!Pl&&vi&&(!Xt&&Lt<Tt+(Tt-Wt)/(En()-ea)*p?Xt=1e-4:Xt===1&&Ft>Tt+(Tt-Wt)/(En()-ea)*p&&(Xt=.9999)),Xt!==Ce&&A.enabled){if(qe=A.isActive=!!Xt&&Xt<1,Re=!!Ce&&Ce<1,Me=qe!==Re,Qe=Me||!!Xt!=!!Ce,A.direction=Xt>Ce?1:-1,A.progress=Xt,Qe&&!Tn&&(Se=Xt&&!Ce?0:Xt===1?1:Ce===1?2:3,N&&(pe=!Me&&U[Se+1]!=="none"&&U[Se+1]||U[Se],ti=i&&(pe==="complete"||pe==="reset"||pe in i))),P&&(Me||ti)&&(ti||d||!i)&&(An(P)?P(A):A.getTrailing(P).forEach(function(ei){return ei.endAnimation()})),N||(X&&!Tn&&!Pl?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",Xt,i._tTime/i._tDur):(X.vars.totalProgress=Xt,X.invalidate().restart())):i&&i.totalProgress(Xt,!!(Tn&&(rt||et)))),f){if(et&&m&&(fe.style[m+C.os2]=Bt),!k)ft(ia(ue+Dt*Xt));else if(Qe){if(xn=!et&&Xt>Ce&&Ft+1>Tt&&Tt+1>=qi(L,C),b)if(!et&&(qe||xn)){var Be=us(f,!0),Ye=Tt-Lt;mm(f,me,Be.top+(C===Je?Ye:0)+nn,Be.left+(C===Je?0:Ye)+nn)}else mm(f,fe);no(qe||xn?He:B),H&&Xt<1&&qe||ft(ue+(Xt===1&&!xn?Dt:0))}}y&&!_t.tween&&!Tn&&!Pl&&D.restart(!0),a&&(Me||E&&Xt&&(Xt<1||!Gu))&&fa(a.targets).forEach(function(ei){return ei.classList[qe||E?"add":"remove"](a.className)}),o&&!N&&!et&&o(A),Qe&&!Tn?(N&&(ti&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),o&&o(A)),(Me||!Gu)&&(c&&Me&&$r(A,c),z[Se]&&$r(A,z[Se]),E&&(Xt===1?A.kill(!1,1):z[Se]=0),Me||(Se=Xt===1?1:3,z[Se]&&$r(A,z[Se]))),M&&!qe&&Math.abs(A.getVelocity())>(sa(M)?M:2500)&&(ta(A.callbackAnimation),X?X.progress(1):ta(i,pe==="reverse"?1:!Xt,1))):N&&o&&!Tn&&o(A)}if(ot){var je=x?Tt/x.duration()*(x._caScrollDist||0):Tt;S(je+(K._isFlipped?1:0)),ot(je)}dt&&dt(-Tt/x.duration()*(x._caScrollDist||0))}},A.enable=function(et,vt){A.enabled||(A.enabled=!0,ln(L,"resize",ra),I||ln(L,"scroll",Qr),Z&&ln(s,"refreshInit",Z),et!==!1&&(A.progress=gt=0,At=Wt=W=wt()),vt!==!1&&A.refresh())},A.getTween=function(et){return et&&_t?_t.tween:X},A.setPositions=function(et,vt,nt,Tt){if(x){var jt=x.scrollTrigger,Xt=x.duration(),Ce=jt.end-jt.start;et=jt.start+Ce*et/Xt,vt=jt.start+Ce*vt/Xt}A.refresh(!1,!1,{start:om(et,nt&&!!A._startClamp),end:om(vt,nt&&!!A._endClamp)},Tt),A.update()},A.adjustPinSpacing=function(et){if(R&&et){var vt=R.indexOf(C.d)+1;R[vt]=parseFloat(R[vt])+et+nn,R[1]=parseFloat(R[1])+et+nn,no(R)}},A.disable=function(et,vt){if(et!==!1&&A.revert(!0,!0),A.enabled&&(A.enabled=A.isActive=!1,vt||X&&X.pause(),j=0,Nt&&(Nt.uncache=1),Z&&an(s,"refreshInit",Z),D&&(D.pause(),_t.tween&&_t.tween.kill()&&(_t.tween=0)),!I)){for(var nt=$t.length;nt--;)if($t[nt].scroller===L&&$t[nt]!==A)return;an(L,"resize",ra),I||an(L,"scroll",Qr)}},A.kill=function(et,vt){A.disable(et,vt),X&&!vt&&X.kill(),l&&delete Ku[l];var nt=$t.indexOf(A);nt>=0&&$t.splice(nt,1),nt===kn&&Vl>0&&kn--,nt=0,$t.forEach(function(Tt){return Tt.scroller===A.scroller&&(nt=1)}),nt||Vn||Fs||(A.scroll.rec=0),i&&(i.scrollTrigger=null,et&&i.revert({kill:!1}),vt||i.kill()),he&&[he,ae,K,Qt].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),ua===A&&(ua=0),f&&(Nt&&(Nt.uncache=1),nt=0,$t.forEach(function(Tt){return Tt.pin===f&&nt++}),nt||(Nt.spacer=0)),n.onKill&&n.onKill(A)},$t.push(A),A.enable(!1,!1),lt&&lt(A),i&&i.add&&!re){var st=A.update;A.update=function(){A.update=st,Zt.cache++,Lt||Ft||A.refresh()},Ct.delayedCall(.01,A.update),re=.01,Lt=Ft=0}else A.refresh();f&&av()},s.register=function(n){return jr||(Ct=n||Tm(),wm()&&window.document&&s.enable(),jr=na),jr},s.defaults=function(n){if(n)for(var i in n)Nl[i]=n[i];return Nl},s.disable=function(n,i){na=0,$t.forEach(function(o){return o[i?"kill":"disable"](n)}),an(Kt,"wheel",Qr),an(xe,"scroll",Qr),clearInterval(Rl),an(xe,"touchcancel",Xi),an(me,"touchstart",Xi),Ll(an,xe,"pointerdown,touchstart,mousedown",am),Ll(an,xe,"pointerup,touchend,mouseup",lm),Wl.kill(),Il(an);for(var r=0;r<Zt.length;r+=3)Dl(an,Zt[r],Zt[r+1]),Dl(an,Zt[r],Zt[r+2])},s.enable=function(){if(Kt=window,xe=document,li=xe.documentElement,me=xe.body,Ct){if(fa=Ct.utils.toArray,oa=Ct.utils.clamp,Ju=Ct.core.context||Xi,Vu=Ct.core.suppressOverwrites||Xi,ef=Kt.history.scrollRestoration||"auto",Qu=Kt.pageYOffset||0,Ct.core.globals("ScrollTrigger",s),me){na=1,eo=document.createElement("div"),eo.style.height="100vh",eo.style.position="absolute",Om(),tv(),Ge.register(Ct),s.isTouch=Ge.isTouch,Us=Ge.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Zu=Ge.isTouch===1,ln(Kt,"wheel",Qr),tf=[Kt,xe,li,me],Ct.matchMedia?(s.matchMedia=function(h){var d=Ct.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ct.addEventListener("matchMediaInit",function(){Dm(),lf()}),Ct.addEventListener("matchMediaRevert",function(){return Lm()}),Ct.addEventListener("matchMedia",function(){mr(0,1),Sr("matchMedia")}),Ct.matchMedia().add("(orientation: portrait)",function(){return Wu(),Wu})):console.warn("Requires GSAP 3.11.0 or later"),Wu(),ln(xe,"scroll",Qr);var n=me.hasAttribute("style"),i=me.style,r=i.borderTopStyle,o=Ct.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=us(me),Je.m=Math.round(a.top+Je.sc())||0,wn.m=Math.round(a.left+wn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),Rl=setInterval(um,250),Ct.delayedCall(.5,function(){return Pl=0}),ln(xe,"touchcancel",Xi),ln(me,"touchstart",Xi),Ll(ln,xe,"pointerdown,touchstart,mousedown",am),Ll(ln,xe,"pointerup,touchend,mouseup",lm),Yu=Ct.utils.checkPrefix("transform"),Gl.push(Yu),jr=En(),Wl=Ct.delayedCall(.2,mr).pause(),to=[xe,"visibilitychange",function(){var h=Kt.innerWidth,d=Kt.innerHeight;xe.hidden?(im=h,sm=d):(im!==h||sm!==d)&&ra()},xe,"DOMContentLoaded",mr,Kt,"load",mr,Kt,"resize",ra],Il(ln),$t.forEach(function(h){return h.enable(0,1)}),l=0;l<Zt.length;l+=3)Dl(an,Zt[l],Zt[l+1]),Dl(an,Zt[l],Zt[l+2])}else if(xe){var c=function h(){s.enable(),xe.removeEventListener("DOMContentLoaded",h)};xe.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(Gu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Rl)||(Rl=i)&&setInterval(um,i),"ignoreMobileResize"in n&&(Zu=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Il(an)||Il(ln,n.autoRefreshEvents||"none"),Sm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Bn(n),o=Zt.indexOf(r),a=vr(r);~o&&Zt.splice(o,a?6:2),i&&(a?Ci.unshift(Kt,i,me,i,li,i):Ci.unshift(r,i))},s.clearMatchMedia=function(n){$t.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(ai(n)?Bn(n):n).getBoundingClientRect(),a=o[r?gr:_r]*i||0;return r?o.right-a>0&&o.left+a<Kt.innerWidth:o.bottom-a>0&&o.top+a<Kt.innerHeight},s.positionInViewport=function(n,i,r){ai(n)&&(n=Bn(n));var o=n.getBoundingClientRect(),a=o[r?gr:_r],l=i==null?a/2:i in ql?ql[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/Kt.innerWidth:(o.top+l)/Kt.innerHeight},s.killAll=function(n){if($t.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=yr.killAll||[];yr={},i.forEach(function(r){return r()})}},s})();kt.version="3.15.1";kt.saveStyles=function(s){return s?fa(s).forEach(function(t){if(t&&t.style){var e=oi.indexOf(t);e>=0&&oi.splice(e,5),oi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ct.core.getCache(t),Ju())}}):oi};kt.revert=function(s,t){return lf(!s,t)};kt.create=function(s,t){return new kt(s,t)};kt.refresh=function(s){return s?ra(!0):(jr||kt.register())&&mr(!0)};kt.update=function(s){return++Zt.cache&&fs(s===!0?2:0)};kt.clearScrollMemory=Nm;kt.maxScroll=function(s,t){return qi(s,t?wn:Je)};kt.getScrollFunc=function(s,t){return cs(Bn(s),t?wn:Je)};kt.getById=function(s){return Ku[s]};kt.getAll=function(){return $t.filter(function(s){return s.vars.id!=="ScrollSmoother"})};kt.isScrolling=function(){return!!vi};kt.snapDirectional=af;kt.addEventListener=function(s,t){var e=yr[s]||(yr[s]=[]);~e.indexOf(t)||e.push(t)};kt.removeEventListener=function(s,t){var e=yr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};kt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ct.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),u.push(m),r<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&An(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return An(r)&&(r=r(),ln(kt,"refresh",function(){return r=t.batchMax()})),fa(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(kt.create(c))}),e};var _m=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},qu=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ge.isTouch?" pinch-zoom":""):"none",t===li&&s(me,e)},Bl={auto:1,scroll:1},fv=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Ct.core.getCache(r),a=En(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==me&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Bl[(l=xi(r)).overflowY]||Bl[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!vr(r)&&(Bl[(l=xi(r)).overflowY]||Bl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Fm=function(t,e,n,i){return Ge.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&fv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ln(xe,Ge.eventTypes[0],vm,!1,!0)},onDisable:function(){return an(xe,Ge.eventTypes[0],vm,!0)}})},dv=/(input|label|select|textarea)/i,xm,vm=function(t){var e=dv.test(t.target.tagName);(e||xm)&&(t._gsapAllow=!0,xm=e)},pv=function(t){pr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Bn(t.target)||li,h=Ct.core.globals().ScrollSmoother,d=h&&h.get(),u=Us&&(t.content&&Bn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=cs(c,Je),m=cs(c,wn),_=1,p=(Ge.isTouch&&Kt.visualViewport?Kt.visualViewport.scale*Kt.visualViewport.width:Kt.outerWidth)/Kt.innerWidth,g=0,v=An(i)?function(){return i(a)}:function(){return i||2.8},E,y,b=Fm(c,t.type,!0,r),T=function(){return y=!1},x=Xi,M=Xi,P=function(){l=qi(c,Je),M=oa(Us?1:0,l),n&&(x=oa(0,qi(c,wn))),E=xr},C=function(){u._gsap.y=ia(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(y){requestAnimationFrame(T);var q=ia(a.deltaY/2),F=M(f.v-q);if(u&&F!==f.v+f.offset){f.offset=F-f.v;var A=ia((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+A+", 0, 1)",u._gsap.y=A+"px",f.cacheID=Zt.cache,fs()}return!0}f.offset&&C(),y=!0},L,V,I,k,z=function(){P(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return u&&Ct.set(u,{y:"+=0"}),t.ignoreCheck=function(U){return Us&&U.type==="touchmove"&&N(U)||_>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},t.onPress=function(){y=!1;var U=_;_=ia((Kt.visualViewport&&Kt.visualViewport.scale||1)/p),L.pause(),U!==_&&qu(c,_>1.01?!0:n?!1:"x"),V=m(),I=f(),P(),E=xr},t.onRelease=t.onGestureStart=function(U,q){if(f.offset&&C(),!q)k.restart(!0);else{Zt.cache++;var F=v(),A,Z;n&&(A=m(),Z=A+F*.05*-U.velocityX/.227,F*=_m(m,A,Z,qi(c,wn)),L.vars.scrollX=x(Z)),A=f(),Z=A+F*.05*-U.velocityY/.227,F*=_m(f,A,Z,qi(c,Je)),L.vars.scrollY=M(Z),L.invalidate().duration(F).play(.01),(Us&&L.vars.scrollY>=l||A>=l-1)&&Ct.to({},{onUpdate:z,duration:F})}o&&o(U)},t.onWheel=function(){L._ts&&L.pause(),En()-g>1e3&&(E=0,g=En())},t.onChange=function(U,q,F,A,Z){if(xr!==E&&P(),q&&n&&m(x(A[2]===q?V+(U.startX-U.x):m()+q-A[1])),F){f.offset&&C();var ut=Z[2]===F,Mt=ut?I+U.startY-U.y:f()+F-Z[1],W=M(Mt);ut&&Mt!==W&&(I+=W-Mt),f(W)}(F||q)&&fs()},t.onEnable=function(){qu(c,n?!1:"x"),kt.addEventListener("refresh",z),ln(Kt,"resize",z),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),b.enable()},t.onDisable=function(){qu(c,!0),an(Kt,"resize",z),kt.removeEventListener("refresh",z),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ge(t),a.iOS=Us,Us&&!f()&&f(1),Us&&Ct.ticker.add(Xi),k=a._dc,L=Ct.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Um(f,f(),function(){return L.pause()})},onUpdate:fs,onComplete:k.vars.onComplete}),a};kt.sort=function(s){if(An(s))return $t.sort(s);var t=Kt.pageYOffset||0;return kt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Kt.innerHeight}),$t.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};kt.observe=function(s){return new Ge(s)};kt.normalizeScroll=function(s){if(typeof s>"u")return zn;if(s===!0&&zn)return zn.enable();if(s===!1){zn&&zn.kill(),zn=s;return}var t=s instanceof Ge?s:pv(s);return zn&&zn.target===t.target&&zn.kill(),vr(t.target)&&(zn=t),t};kt.core={_getVelocityProp:Cl,_inputObserver:Fm,_scrollers:Zt,_proxies:Ci,bridge:{ss:function(){vi||Sr("scrollStart"),vi=En()},ref:function(){return Tn}}};Tm()&&Ct.registerPlugin(kt);var pa,ma,Bm=typeof Symbol=="function"?Symbol():"_split",hf,mv=()=>hf||$l.register(window.gsap),zm=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,ga=s=>s?typeof s=="string"?ga(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((t,e)=>(typeof e=="string"?t.push(...ga(e)):t.push(e),t),[]):[s]:[],km=s=>ga(s).filter(t=>t&&t.nodeType===1),Zl=[],cf=function(){},gv={add:s=>s()},_v=/\s+/g,Vm=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Jl={left:0,top:0,width:0,height:0},xv=(s,t)=>{for(;++t<s.length&&s[t]===Jl;);return s[t]||Jl},Gm=({element:s,html:t,ariaL:e,ariaH:n})=>{s.innerHTML=t,e?s.setAttribute("aria-label",e):s.removeAttribute("aria-label"),n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")},Hm=(s,t)=>{if(t){let e=new Set(s.join("").match(t)||Zl),n=s.length,i,r,o,a;if(e.size)for(;--n>-1;){r=s[n];for(o of e)if(o.startsWith(r)&&o.length>r.length){for(i=0,a=r;o.startsWith(a+=s[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){s[n]=o,s.splice(n+1,i);break}}}}return s},Wm=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),so=(s,t,e)=>t.insertBefore(typeof s=="string"?document.createTextNode(s):s,e),uf=(s,t,e)=>{let n=t[s+"sClass"]||"",{tag:i="div",aria:r="auto",propIndex:o=!1}=t,a=s==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let d=document.createElement(i),u=e.length+1;return n&&(d.className=n+(l?" "+n+u:"")),o&&d.style.setProperty("--"+s,u+""),r!=="none"&&d.setAttribute("aria-hidden","true"),i!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(n=n.replace("++","")),c.collection=e,c},vv=(s,t,e,n)=>{let i=uf("line",e,n),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=r,s.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},Xm=(s,t,e,n,i,r,o,a,l,c)=>{var h;let d=Array.from(s.childNodes),u=0,{wordDelimiter:f,reduceWhiteSpace:m=!0,prepareText:_}=t,p=s.getBoundingClientRect(),g=p,v=!m&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",E=r&&c&&window.getComputedStyle(s).direction==="rtl",y=0,b=e.collection,T,x,M,P,C,N,L,V,I,k,z,U,q,F,A,Z,ut,Mt;for(typeof f=="object"?(M=f.delimiter||f,x=f.replaceWith||""):x=f===""?"":f||" ",T=x!==" ";u<d.length;u++)if(P=d[u],P.nodeType===3){for(A=P.textContent||"",m?A=A.replace(_v," "):v&&(A=A.replace(/\n/g,x+`
`)),_&&(A=_(A,s)),P.textContent=A,C=x||M?A.split(M||x):A.match(a)||Zl,ut=C[C.length-1],V=T?ut.slice(-1)===" ":!ut,ut||C.pop(),g=p,L=T?C[0].charAt(0)===" ":!C[0],L&&so(" ",s,P),C[0]||C.shift(),Hm(C,l),r&&c||(P.textContent=""),I=1;I<=C.length;I++)if(Z=C[I-1],!m&&v&&Z.charAt(0)===`
`&&((h=P.previousSibling)==null||h.remove(),so(document.createElement("br"),s,P),Z=Z.slice(1)),!m&&Z==="")so(x,s,P);else if(Z===" ")s.insertBefore(document.createTextNode(" "),P);else{if(T&&Z.charAt(0)===" "&&so(" ",s,P),y&&I===1&&!L&&b.indexOf(y.parentNode)>-1?(N=b[b.length-1],N.appendChild(document.createTextNode(n?"":Z))):(N=e(n?"":Z),so(N,s,P),y&&I===1&&!L&&N.insertBefore(y,N.firstChild)),n){if(z=zm?Hm([...zm.segment(Z)].map(W=>W.segment),l):Z.match(a)||Zl,l){let W=Z.match(l);W&&W.some(rt=>z.indexOf(rt)<0)&&(z=Z.match(a)||Zl)}for(Mt=0;Mt<z.length;Mt++)N.appendChild(z[Mt]===" "?document.createTextNode(" "):n(z[Mt]))}if(r&&c){if(A=P.textContent=A.substring(Z.length+1,A.length),k=N.getBoundingClientRect(),k.top>g.top&&(E?k.left>=g.left:k.left<=g.left)){for(U=s.cloneNode(),q=s.childNodes[0];q&&q!==N;)F=q,q=q.nextSibling,U.appendChild(F);s.parentNode.insertBefore(U,s),i&&Wm(U)}g=k}(I<C.length||V)&&so(I>=C.length?" ":T&&Z.slice(-1)===" "?" "+x:x,s,P)}s.removeChild(P),y=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(b.indexOf(P.previousSibling)>-1&&b[b.length-1].appendChild(P),y=P):(Xm(P,t,e,n,i,r,o,a,l,!0),y=0),i&&Wm(P))},qm=class Ym{constructor(t,e){this.isSplit=!1,mv(),this.elements=km(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(r=>{var o;e.overwrite!==!1&&((o=r[Bm])==null||o._data.orig.filter(({element:a})=>a===r).forEach(Gm)),r[Bm]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let r=n.length,o;for(;r--;){o=n[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},cf(this),this.split(e)}split(t){return(this._ctx||gv).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,u=e.indexOf("words")>-1,f=d&&!u&&!h,m=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=m?new RegExp(m.source+"|"+Vm.source,"gu"):Vm,p=!!t.ignore&&km(t.ignore),{orig:g,animTime:v,obs:E}=this._data,y;(d||u||h)&&(this.elements.forEach((b,T)=>{g[T]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},n==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):n==="hidden"&&b.setAttribute("aria-hidden","true");let x=[],M=[],P=[],C=d?uf("char",t,x):null,N=uf("word",t,M),L,V,I,k;if(Xm(b,t,N,C,f,i&&(h||f),p,_,m,!1),h){let z=ga(b.childNodes),U=vv(b,z,t,P),q,F=[],A=0,Z=window.getComputedStyle(b).direction==="rtl",ut=z.map(rt=>rt.nodeType===1?rt.getBoundingClientRect():Jl),Mt=Jl,W;for(L=0;L<z.length;L++)q=z[L],q.nodeType===1&&(q.nodeName==="BR"?((!L||z[L-1].nodeName!=="BR")&&(F.push(q),U(A,L+1)),A=L+1,Mt=xv(ut,L)):(W=ut[L],L&&W.top>Mt.top&&(Z?W.left+W.width>Mt.left+1:W.left<Mt.left+Mt.width-1)&&(U(A,L),A=L),Mt=W));A<L&&U(A,L),F.forEach(rt=>{var gt;return(gt=rt.parentNode)==null?void 0:gt.removeChild(rt)})}if(!u){for(L=0;L<M.length;L++)if(V=M[L],d||!V.nextSibling||V.nextSibling.nodeType!==3)if(r&&!h){for(I=document.createElement("span"),I.style.whiteSpace="nowrap";V.firstChild;)I.appendChild(V.firstChild);V.replaceWith(I)}else V.replaceWith(...V.childNodes);else k=V.nextSibling,k&&k.nodeType===3&&(k.textContent=(V.textContent||"")+(k.textContent||""),V.remove());M.length=0,b.normalize()}this.lines.push(...P),this.words.push(...M),this.chars.push(...x)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let T=b.cloneNode();return b.replaceWith(T),T.appendChild(b),b.className&&(T.className=b.className.trim().split(" ").map(x=>x+"-mask").join(" ")),T.style.overflow="clip",T.style.verticalAlign="top",T}))),this.isSplit=!0,ma&&h&&a&&ma.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),h&&a&&this.elements.forEach((b,T)=>{g[T].width=b.offsetWidth,E&&E.observe(b)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),ma?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Gm),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new Ym(t,e)}static register(t){pa=pa||t||window.gsap,pa&&(ga=pa.utils.toArray,cf=pa.core.context||cf),!hf&&window.innerWidth>0&&(ma=document.fonts,hf=!0)}};qm.version="3.15.1";var $l=qm;var Zm="1.3.27";function Km(s,t,e){return Math.max(s,Math.min(t,e))}function yv(s,t,e){return(1-e)*s+e*t}function Sv(s,t,e,n){return yv(s,t,1-Math.exp(-e*n))}function Mv(s,t){return(s%t+t)%t}var bv=class{constructor(){Ut(this,"isRunning",!1);Ut(this,"value",0);Ut(this,"from",0);Ut(this,"to",0);Ut(this,"currentTime",0);Ut(this,"lerp");Ut(this,"duration");Ut(this,"easing");Ut(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=Km(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Sv(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function wv(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var Tv=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Ut(this,"width",0);Ut(this,"height",0);Ut(this,"scrollHeight",0);Ut(this,"scrollWidth",0);Ut(this,"debouncedResize");Ut(this,"wrapperResizeObserver");Ut(this,"contentResizeObserver");Ut(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ut(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ut(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=wv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Qm=class{constructor(){Ut(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},Ev=100/6,Bs={passive:!1};function Jm(s,t){return s===1?Ev:s===2?t:1}var Av=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Ut(this,"touchStart",{x:0,y:0});Ut(this,"lastDelta",{x:0,y:0});Ut(this,"window",{width:0,height:0});Ut(this,"emitter",new Qm);Ut(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Ut(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Ut(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Ut(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=Jm(n,this.window.width),r=Jm(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Ut(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Bs),this.element.addEventListener("touchstart",this.onTouchStart,Bs),this.element.addEventListener("touchmove",this.onTouchMove,Bs),this.element.addEventListener("touchend",this.onTouchEnd,Bs)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Bs),this.element.removeEventListener("touchstart",this.onTouchStart,Bs),this.element.removeEventListener("touchmove",this.onTouchMove,Bs),this.element.removeEventListener("touchend",this.onTouchEnd,Bs)}},$m=s=>Math.min(1,1.001-2**(-10*s)),jm=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:v=!0,autoRaf:E=!1,anchors:y=!1,autoToggle:b=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:M=x,stopInertiaOnNavigate:P=!1,respectReducedMotion:C=!0}={}){Ut(this,"_isScrolling",!1);Ut(this,"_isStopped",!1);Ut(this,"_isLocked",!1);Ut(this,"_preventNextNativeScrollEvent",!1);Ut(this,"_resetVelocityTimeout",null);Ut(this,"_rafId",null);Ut(this,"_isDraggingSelection",!1);Ut(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ut(this,"isTouching");Ut(this,"isIos");Ut(this,"time",0);Ut(this,"userData",{});Ut(this,"lastVelocity",0);Ut(this,"velocity",0);Ut(this,"direction",0);Ut(this,"options");Ut(this,"targetScroll");Ut(this,"animatedScroll");Ut(this,"animate",new bv);Ut(this,"emitter",new Qm);Ut(this,"dimensions");Ut(this,"virtualScroll");Ut(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Ut(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ut(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Ut(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Ut(this,"onPointerDown",s=>{s.button===1&&this.reset()});Ut(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||r&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ut(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ut(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Zm,window.lenis||(window.lenis={}),window.lenis.version=Zm,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=$m:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:v,autoRaf:E,anchors:y,autoToggle:b,allowNestedScroll:T,naiveDimensions:M,stopInertiaOnNavigate:P,respectReducedMotion:C},this.dimensions=new Tv(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Av(e,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(m=u),m){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),v=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(E)?0:E)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=Km(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=$m:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,u,f,m;if(n-(i.time??0)>2e3){i.time=Date.now();let T=window.getComputedStyle(s);if(i.computedStyle=T,r=["auto","overlay","scroll"].includes(T.overflowX),o=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,m=s.clientHeight,a=d>f,l=u>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,v,E,y,b;if(_==="horizontal")p=Math.round(s.scrollLeft),g=d-f,v=t,E=r,y=a,b=c;else if(_==="vertical")p=Math.round(s.scrollTop),g=u-m,v=e,E=o,y=l,b=h;else return!1;return!b&&(p>=g||p<=0)?!0:(v>0?p<g:p>0)&&E&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Mv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};Ee.registerPlugin(kt,$l);kt.config({ignoreMobileResize:!0});var mn=(s,t=document)=>t.querySelector(s),ds=(s,t=document)=>[...t.querySelectorAll(s)],ff=document.documentElement,Qn=ff.classList.contains("reduce"),df=ff.classList.contains("fine");function eg(){if(Qn)return null;let s=new jm({lerp:.1,anchors:!0});return s.on("scroll",kt.update),Ee.ticker.add(t=>s.raf(t*1e3)),Ee.ticker.lagSmoothing(0),s}function ng(){let s=mn("[data-nav]");s&&kt.create({start:0,end:"max",onUpdate:t=>s.classList.toggle("is-away",t.direction===1&&t.scroll()>140&&!s.contains(document.activeElement))})}function ig(s,t){let e=mn("[data-curtain]"),n=mn("[data-count]"),i=!0;try{i=!sessionStorage.getItem("theia-seen"),sessionStorage.setItem("theia-seen","1")}catch{}if(ff.classList.add("ready"),Qn){e.style.display="none",t();return}let r=Promise.race([Promise.all([document.fonts.ready,s]),new Promise(a=>setTimeout(a,3500))]),o=()=>{t(),Ee.timeline().to(n,{yPercent:-30,opacity:0,duration:.45,ease:"power3.in"},0).to(e,{yPercent:-100,duration:.95,ease:"expo.inOut"},.1).set(e,{display:"none"})};if(i){let a={v:0};Ee.to(a,{v:100,duration:1.4,ease:"power2.inOut",onUpdate(){n.textContent=Math.round(a.v),n.style.fontStretch=50+a.v+"%"},onComplete(){r.then(o)}})}else n.textContent="",r.then(o)}function sg(){let s=mn("[data-curtain]"),t=mn("[data-count]");document.addEventListener("click",e=>{let n=e.target.closest&&e.target.closest("a[href]");if(!n||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||n.target==="_blank"||Qn)return;let i=new URL(n.href,location.href);i.protocol!==location.protocol||i.host!==location.host||i.pathname===location.pathname||(e.preventDefault(),t.textContent="",Ee.killTweensOf(s),Ee.set(s,{display:"flex",yPercent:100}),Ee.to(s,{yPercent:0,duration:.6,ease:"expo.inOut",onComplete(){location.href=n.href}}))}),window.addEventListener("pageshow",e=>{e.persisted&&Ee.set(s,{display:"none"})})}function pf(s,t={}){Qn||!s||$l.create(s,{type:"lines",mask:"lines",autoSplit:!0,onSplit:e=>Ee.from(e.lines,{yPercent:108,duration:1.15,ease:"expo.out",stagger:.09,...t})})}var tg="http://www.w3.org/2000/svg";function rg(s){let t=s.parentElement,e=getComputedStyle(t),n=t.clientWidth,i=t.clientHeight;if(!n||!i)return;let r=parseFloat(e.paddingTop)/2,o=Math.max(4,parseFloat(e.borderTopLeftRadius)-r),a=r,l=r,c=n-r*2,h=i-r*2,d=`M${a+o} ${l}H${a+c-o}A${o} ${o} 0 0 1 ${a+c} ${l+o}V${l+h-o}A${o} ${o} 0 0 1 ${a+c-o} ${l+h}H${a+o}A${o} ${o} 0 0 1 ${a} ${l+h-o}V${l+o}A${o} ${o} 0 0 1 ${a+o} ${l}Z`,u=2*(c+h)-8*o+2*Math.PI*o,f=Math.min(10,r*.72),m=Math.max(6,Math.round(u/(f*2.5)/3)*3);s.setAttribute("viewBox",`0 0 ${n} ${i}`),s.replaceChildren(...[0,1,2].map(_=>{let p=document.createElementNS(tg,"g");return[["glass",f],["core",f*.45]].forEach(([g,v])=>{let E=document.createElementNS(tg,"path");E.setAttribute("class",g),E.setAttribute("d",d),E.setAttribute("pathLength",m),E.setAttribute("stroke-width",v.toFixed(1)),E.setAttribute("stroke-dasharray","0.001 2.999"),E.setAttribute("stroke-dashoffset",-_),p.append(E)}),p}))}var Rg=0,Wf=1,Pg=2;var ka=1,Ig=2,Ao=3,Qs=0,_n=1,bi=2,Ir=0,Co=1,Xf=2,qf=3,Yf=4,Lg=5;var Lr=100,Dg=101,Ng=102,Og=103,Ug=104,Fg=200,Bg=201,zg=202,kg=203,Zf=204,Jf=205,Vg=206,Gg=207,Hg=208,Wg=209,Xg=210,qg=211,Yg=212,Zg=213,Jg=214,vc=0,yc=1,Sc=2,yo=3,Mc=4,bc=5,wc=6,Tc=7,$f=0,$g=1,Kg=2,wi=0,Kf=1,Qf=2,jf=3,td=4,ed=5,nd=6,id=7;var sd=300,Dr=301,Ro=302,jc=303,th=304,Ec=1e3,Zi=1001,Ac=1002,hn=1003,Qg=1004;var Va=1005;var gn=1006,eh=1007;var Ni=1008;var jn=1009,rd=1010,od=1011,Po=1012,nh=1013,Oi=1014,Ui=1015,Fi=1016,ih=1017,sh=1018,Nr=1020,ad=35902,ld=35899,cd=1021,hd=1022,Bi=1023,ys=1026,Ms=1027,ud=1028,rh=1029,js=1030,oh=1031;var ah=1033,Ga=33776,Ha=33777,Wa=33778,Xa=33779,lh=35840,ch=35841,hh=35842,uh=35843,fh=36196,dh=37492,ph=37496,mh=37488,gh=37489,qa=37490,_h=37491,xh=37808,vh=37809,yh=37810,Sh=37811,Mh=37812,bh=37813,wh=37814,Th=37815,Eh=37816,Ah=37817,Ch=37818,Rh=37819,Ph=37820,Ih=37821,Lh=36492,Dh=36494,Nh=36495,Oh=36283,Uh=36284,Ya=36285,Fh=36286;var Sa=2300,Cc=2301,_c=2302,Ff=2303,Bf=2400,zf=2401,kf=2402;var jg=3200;var Bh=0,t_=1,zi="",Gn="srgb",Ma="srgb-linear",ba="linear",ge="srgb";var xc=7680;var e_=519,n_=512,i_=513,s_=514,fd=515,r_=516,o_=517,dd=518,pd=519,a_=35044;var md="300 es",Si=2e3,So=2001;function Cv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Rv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function wa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function l_(){let s=wa("canvas");return s.style.display="block",s}var og={},Mo=null;function gd(...s){let t="THREE."+s.shift();Mo?Mo("log",t,...s):console.log(t,...s)}function c_(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function zt(...s){s=c_(s);let t="THREE."+s.shift();if(Mo)Mo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Vt(...s){s=c_(s);let t="THREE."+s.shift();if(Mo)Mo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ar(...s){let t=s.join(" ");t in og||(og[t]=!0,zt(...s))}function h_(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var u_={[vc]:vc,[Sc]:wc,[Mc]:Mc,[yo]:bc,[yc]:yc,[wc]:Sc,[Tc]:Tc,[bc]:yo},$i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mf=Math.PI/180,Rc=180/Math.PI;function Za(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[e&63|128]+Cn[e>>8&255]+"-"+Cn[e>>16&255]+Cn[e>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function ie(s,t,e){return Math.max(t,Math.min(e,s))}function Pv(s,t){return(s%t+t)%t}function gf(s,t,e){return(1-e)*s+e*t}function f_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _d(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Iv(s,t){if(t.constructor===Float32Array)return s;let e=_d(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Lv(s,t){if(t.constructor===Float32Array)return s;let e=_d(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Md=class Md{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Md.prototype.isVector2=!0;var se=Md,Pn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),E=Math.sin(v);g=Math.sin(g*v)/E,a=Math.sin(a*v)/E,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},bd=class bd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ag.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ag.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _f.copy(this).projectOnVector(t),this.sub(_f)}reflect(t){return this.sub(_f.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bd.prototype.isVector3=!0;var J=bd,_f=new J,ag=new Pn,wd=class wd{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],v=i[1],E=i[4],y=i[7],b=i[2],T=i[5],x=i[8];return r[0]=o*_+a*v+l*b,r[3]=o*p+a*E+l*T,r[6]=o*g+a*y+l*x,r[1]=c*_+h*v+d*b,r[4]=c*p+h*E+d*T,r[7]=c*g+h*y+d*x,r[2]=u*_+f*v+m*b,r[5]=u*p+f*E+m*T,r[8]=u*g+f*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xf.makeScale(t,e)),this}rotate(t){return Ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xf.makeRotation(-t)),this}translate(t,e){return Ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wd.prototype.isMatrix3=!0;var Ht=wd,xf=new Ht,lg=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cg=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dv(){let s={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(i.r=vo(i.r),i.g=vo(i.g),i.b=vo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zi?ba:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ma]:{primaries:t,whitePoint:n,transfer:ba,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),s}var ne=Dv();function vs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ro,Pc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ro===void 0&&(ro=wa("canvas")),ro.width=t.width,ro.height=t.height;let i=ro.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ro}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=vs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vs(e[n]/255)*255):e[n]=vs(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nv=0,bo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Za(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(vf(i[o].image)):r.push(vf(i[o]))}else r=vf(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function vf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Pc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Ov=0,yf=new J,Wn=class s extends $i{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Zi,i=Zi,r=gn,o=Ni,a=Bi,l=jn,c=s.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Za(),this.name="",this.source=new bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(yf).x}get height(){return this.source.getSize(yf).y}get depth(){return this.source.getSize(yf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ec:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case Ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ec:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case Ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=sd;Wn.DEFAULT_ANISOTROPY=1;var Td=class Td{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(f+1)/2,b=(g+1)/2,T=(h+u)/4,x=(d+_)/4,M=(m+p)/4;return E>y&&E>b?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=T/n,r=x/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=M/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=x/r,i=M/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Td.prototype.isVector4=!0;var Le=Td,Ic=class extends $i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Wn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new bo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends Ic{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ta=class extends Wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lc=class extends Wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Qc=class Qc{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,p)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/oo.setFromMatrixColumn(t,0).length(),r=1/oo.setFromMatrixColumn(t,1).length(),o=1/oo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uv,t,Fv)}lookAt(t,e,n){let i=this.elements;return ci.subVectors(t,e),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),zs.crossVectors(n,ci),zs.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),zs.crossVectors(n,ci)),zs.normalize(),Kl.crossVectors(ci,zs),i[0]=zs.x,i[4]=Kl.x,i[8]=ci.x,i[1]=zs.y,i[5]=Kl.y,i[9]=ci.y,i[2]=zs.z,i[6]=Kl.z,i[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],E=n[7],y=n[11],b=n[15],T=i[0],x=i[4],M=i[8],P=i[12],C=i[1],N=i[5],L=i[9],V=i[13],I=i[2],k=i[6],z=i[10],U=i[14],q=i[3],F=i[7],A=i[11],Z=i[15];return r[0]=o*T+a*C+l*I+c*q,r[4]=o*x+a*N+l*k+c*F,r[8]=o*M+a*L+l*z+c*A,r[12]=o*P+a*V+l*U+c*Z,r[1]=h*T+d*C+u*I+f*q,r[5]=h*x+d*N+u*k+f*F,r[9]=h*M+d*L+u*z+f*A,r[13]=h*P+d*V+u*U+f*Z,r[2]=m*T+_*C+p*I+g*q,r[6]=m*x+_*N+p*k+g*F,r[10]=m*M+_*L+p*z+g*A,r[14]=m*P+_*V+p*U+g*Z,r[3]=v*T+E*C+y*I+b*q,r[7]=v*x+E*N+y*k+b*F,r[11]=v*M+E*L+y*z+b*A,r[15]=v*P+E*V+y*U+b*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],v=l*f-c*u,E=a*f-c*d,y=a*u-l*d,b=o*f-c*h,T=o*u-l*h,x=o*d-a*h;return e*(_*v-p*E+g*y)-n*(m*v-p*b+g*T)+i*(m*E-_*b+g*x)-r*(m*y-_*T+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],v=e*a-n*o,E=e*l-i*o,y=e*c-r*o,b=n*l-i*a,T=n*c-r*a,x=i*c-r*l,M=h*_-d*m,P=h*p-u*m,C=h*g-f*m,N=d*p-u*_,L=d*g-f*_,V=u*g-f*p,I=v*V-E*L+y*N+b*C-T*P+x*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return t[0]=(a*V-l*L+c*N)*k,t[1]=(i*L-n*V-r*N)*k,t[2]=(_*x-p*T+g*b)*k,t[3]=(u*T-d*x-f*b)*k,t[4]=(l*C-o*V-c*P)*k,t[5]=(e*V-i*C+r*P)*k,t[6]=(p*y-m*x-g*E)*k,t[7]=(h*x-u*y+f*E)*k,t[8]=(o*L-a*C+c*M)*k,t[9]=(n*C-e*L-r*M)*k,t[10]=(m*T-_*y+g*v)*k,t[11]=(d*y-h*T-f*v)*k,t[12]=(a*P-o*N-l*M)*k,t[13]=(e*N-n*P+i*M)*k,t[14]=(_*E-m*b-p*v)*k,t[15]=(h*b-d*E+u*v)*k,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,_=o*h,p=o*d,g=a*d,v=l*c,E=l*h,y=l*d,b=n.x,T=n.y,x=n.z;return i[0]=(1-(_+g))*b,i[1]=(f+y)*b,i[2]=(m-E)*b,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(u+g))*T,i[6]=(p+v)*T,i[7]=0,i[8]=(m+E)*x,i[9]=(p-v)*x,i[10]=(1-(u+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=oo.set(i[0],i[1],i[2]).length(),a=oo.set(i[4],i[5],i[6]).length(),l=oo.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ri.copy(this);let c=1/o,h=1/a,d=1/l;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=d,Ri.elements[9]*=d,Ri.elements[10]*=d,e.setFromRotationMatrix(Ri),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Si,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Si)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===So)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Si,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Si)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===So)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Qc.prototype.isMatrix4=!0;var Ie=Qc,oo=new J,Ri=new Ie,Uv=new J(0,0,0),Fv=new J(1,1,1),zs=new J,Kl=new J,ci=new J,hg=new Ie,ug=new Pn,Di=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ug.setFromEuler(this),this.setFromQuaternion(ug,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var Ea=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bv=0,fg=new J,ao=new Pn,ps=new Ie,Ql=new J,_a=new J,zv=new J,kv=new Pn,dg=new J(1,0,0),pg=new J(0,1,0),mg=new J(0,0,1),gg={type:"added"},Vv={type:"removed"},lo={type:"childadded",child:null},Sf={type:"childremoved",child:null},Xn=class s extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new J,e=new Di,n=new Pn,i=new J(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ht}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ao.setFromAxisAngle(t,e),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,e){return ao.setFromAxisAngle(t,e),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(dg,t)}rotateY(t){return this.rotateOnAxis(pg,t)}rotateZ(t){return this.rotateOnAxis(mg,t)}translateOnAxis(t,e){return fg.copy(t).applyQuaternion(this.quaternion),this.position.add(fg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dg,t)}translateY(t){return this.translateOnAxis(pg,t)}translateZ(t){return this.translateOnAxis(mg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ql.copy(t):Ql.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(_a,Ql,this.up):ps.lookAt(Ql,_a,this.up),this.quaternion.setFromRotationMatrix(ps),i&&(ps.extractRotation(i.matrixWorld),ao.setFromRotationMatrix(ps),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gg),lo.child=t,this.dispatchEvent(lo),lo.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vv),Sf.child=t,this.dispatchEvent(Sf),Sf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ps.multiply(t.parent.matrixWorld)),t.applyMatrix4(ps),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gg),lo.child=t,this.dispatchEvent(lo),lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,t,zv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,kv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xn.DEFAULT_UP=new J(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Er=class extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gv={type:"move"},wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Er;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},d_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ks={h:0,s:0,l:0},jl={h:0,s:0,l:0};function Mf(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=Pv(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Mf(o,r,t+1/3),this.g=Mf(o,r,t),this.b=Mf(o,r,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=Gn){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Gn){let n=d_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}copyLinearToSRGB(t){return this.r=vo(t.r),this.g=vo(t.g),this.b=vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gn){return ne.workingToColorSpace(Rn.copy(this),t),Math.round(ie(Rn.r*255,0,255))*65536+Math.round(ie(Rn.g*255,0,255))*256+Math.round(ie(Rn.b*255,0,255))}getHexString(t=Gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Rn.copy(this),e);let n=Rn.r,i=Rn.g,r=Rn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=Gn){ne.workingToColorSpace(Rn.copy(this),t);let e=Rn.r,n=Rn.g,i=Rn.b;return t!==Gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ks),this.setHSL(ks.h+t,ks.s+e,ks.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ks),t.getHSL(jl);let n=gf(ks.h,jl.h,e),i=gf(ks.s,jl.s,e),r=gf(ks.l,jl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new Yt;Yt.NAMES=d_;var Cr=class extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pi=new J,ms=new J,bf=new J,gs=new J,co=new J,ho=new J,_g=new J,wf=new J,Tf=new J,Ef=new J,Af=new Le,Cf=new Le,Rf=new Le,Ws=class s{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Pi.subVectors(t,e),i.cross(Pi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Pi.subVectors(i,e),ms.subVectors(n,e),bf.subVectors(t,e);let o=Pi.dot(Pi),a=Pi.dot(ms),l=Pi.dot(bf),c=ms.dot(ms),h=ms.dot(bf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gs.x),l.addScaledVector(o,gs.y),l.addScaledVector(a,gs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Af.setScalar(0),Cf.setScalar(0),Rf.setScalar(0),Af.fromBufferAttribute(t,e),Cf.fromBufferAttribute(t,n),Rf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Af,r.x),o.addScaledVector(Cf,r.y),o.addScaledVector(Rf,r.z),o}static isFrontFacing(t,e,n,i){return Pi.subVectors(n,e),ms.subVectors(t,e),Pi.cross(ms).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Pi.cross(ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;co.subVectors(i,n),ho.subVectors(r,n),wf.subVectors(t,n);let l=co.dot(wf),c=ho.dot(wf);if(l<=0&&c<=0)return e.copy(n);Tf.subVectors(t,i);let h=co.dot(Tf),d=ho.dot(Tf);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(co,o);Ef.subVectors(t,r);let f=co.dot(Ef),m=ho.dot(Ef);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ho,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return _g.subVectors(r,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(_g,a);let g=1/(p+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(co,o).addScaledVector(ho,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xs=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ii):Ii.fromBufferAttribute(r,o),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tc.copy(n.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xa),ec.subVectors(this.max,xa),uo.subVectors(t.a,xa),fo.subVectors(t.b,xa),po.subVectors(t.c,xa),Vs.subVectors(fo,uo),Gs.subVectors(po,fo),Mr.subVectors(uo,po);let e=[0,-Vs.z,Vs.y,0,-Gs.z,Gs.y,0,-Mr.z,Mr.y,Vs.z,0,-Vs.x,Gs.z,0,-Gs.x,Mr.z,0,-Mr.x,-Vs.y,Vs.x,0,-Gs.y,Gs.x,0,-Mr.y,Mr.x,0];return!Pf(e,uo,fo,po,ec)||(e=[1,0,0,0,1,0,0,0,1],!Pf(e,uo,fo,po,ec))?!1:(nc.crossVectors(Vs,Gs),e=[nc.x,nc.y,nc.z],Pf(e,uo,fo,po,ec))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_s),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_s=[new J,new J,new J,new J,new J,new J,new J,new J],Ii=new J,tc=new Xs,uo=new J,fo=new J,po=new J,Vs=new J,Gs=new J,Mr=new J,xa=new J,ec=new J,nc=new J,br=new J;function Pf(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){br.fromArray(s,r);let a=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),l=t.dot(br),c=e.dot(br),h=n.dot(br);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ke=new J,ic=new se,Hv=0,Ji=class extends $i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=a_,this.updateRanges=[],this.gpuType=Ui,this.version=0,this._normalizationScale=t!==void 0?_d(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ic.fromBufferAttribute(this,e),ic.applyMatrix3(t),this.setXY(e,ic.x,ic.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Iv(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Lv(t,this.array)}};var Aa=class extends Ji{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ca=class extends Ji{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Mi=class extends Ji{constructor(t,e,n){super(new Float32Array(t),e,n)}},Wv=new Xs,va=new J,If=new J,To=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wv.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;va.subVectors(t,this.center);let e=va.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(va,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(If.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(va.copy(t.center).add(If)),this.expandByPoint(va.copy(t.center).sub(If))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Xv=0,yi=new Ie,Lf=new Xn,mo=new J,hi=new Xs,ya=new Xs,cn=new J,qs=class s extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cv(t)?Ca:Aa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return Lf.lookAt(t),Lf.updateMatrix(),this.applyMatrix4(Lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];hi.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new To);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ya.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(hi.min,ya.min),hi.expandByPoint(cn),cn.addVectors(hi.max,ya.max),hi.expandByPoint(cn)):(hi.expandByPoint(ya.min),hi.expandByPoint(ya.max))}hi.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&(mo.fromBufferAttribute(t,c),cn.add(mo)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ji(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new J,l[P]=new J;let h=new J,d=new J,u=new J,f=new se,m=new se,_=new se,p=new J,g=new J;function v(P,C,N){c[P]=c[C]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,C),u.fromBufferAttribute(n,N),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,N),d.sub(h),u.sub(h),m.sub(f),_.sub(f);let L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(L),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(L),a[P].add(p),a[C].add(p),a[N].add(p),l[P].add(g),l[C].add(g),l[N].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,C=E.length;P<C;++P){let N=E[P],L=N.start,V=N.count;for(let I=L,k=L+V;I<k;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new J,b=new J,T=new J,x=new J;function M(P){T.fromBufferAttribute(i,P),x.copy(T);let C=a[P];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),b.crossVectors(x,C);let L=b.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,C=n.count;P<C;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ji(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new J,r=new J,o=new J,a=new J,l=new J,c=new J,h=new J,d=new J;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Ji(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Df=new J,qv=new J,Yv=new Ht,Li=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Df.subVectors(n,e).cross(qv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Df),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yv.getNormalMatrix(t),i=this.coplanarPoint(Df).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zv=0,Ys=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=Co,this.side=Qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zf,this.blendDst=Jf,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xc,this.stencilZFail=xc,this.stencilZPass=xc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new se().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var xs=new J,Nf=new J,sc=new J,rc=new J,Dc=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xs.copy(this.origin).addScaledVector(this.direction,e),xs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Nf.copy(t).add(e).multiplyScalar(.5),sc.copy(e).sub(t).normalize(),rc.copy(this.origin).sub(Nf);let r=t.distanceTo(e)*.5,o=-this.direction.dot(sc),a=rc.dot(this.direction),l=-rc.dot(sc),c=rc.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Nf).addScaledVector(sc,u),f}intersectSphere(t,e){if(t.radius<0)return null;xs.subVectors(t.center,this.origin);let n=xs.dot(this.direction),i=xs.dot(xs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,v=n.y-o.y,E=n.z-o.z,y=Math.abs(l),b=Math.abs(c),T=Math.abs(h),x,M,P,C,N,L,V,I,k,z,U,q;if(y>=b&&y>=T?(P=l,L=d,k=m,q=g,l>=0?(x=c,M=h,C=u,N=f,V=_,I=p,z=v,U=E):(x=h,M=c,C=f,N=u,V=p,I=_,z=E,U=v)):b>=T?(P=c,L=u,k=_,q=v,c>=0?(x=h,M=l,C=f,N=d,V=p,I=m,z=E,U=g):(x=l,M=h,C=d,N=f,V=m,I=p,z=g,U=E)):(P=h,L=f,k=p,q=E,h>=0?(x=l,M=c,C=d,N=u,V=m,I=_,z=g,U=v):(x=c,M=l,C=u,N=d,V=_,I=m,z=v,U=g)),P===0)return null;let F=x/P,A=M/P,Z=1/P,ut=C-F*L,Mt=N-A*L,W=V-F*k,rt=I-A*k,gt=z-F*q,wt=U-A*q,_t=gt*rt-wt*W,Nt=ut*wt-Mt*gt,_e=W*Mt-rt*ut;if(i){if(_t<0||Nt<0||_e<0)return null}else if((_t<0||Nt<0||_e<0)&&(_t>0||Nt>0||_e>0))return null;let At=_t+Nt+_e;if(At===0)return null;let Wt=Z*(_t*L+Nt*k+_e*q);return(At>0?Wt<0:Wt>0)?null:this.at(Wt/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rr=class extends Ys{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=$f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xg=new Ie,wr=new Dc,oc=new To,vg=new J,ac=new J,lc=new J,cc=new J,Of=new J,hc=new J,yg=new J,uc=new J,In=class extends Xn{constructor(t=new qs,e=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){hc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Of.fromBufferAttribute(d,t),o?hc.addScaledVector(Of,h):hc.addScaledVector(Of.sub(e),h))}e.add(hc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oc.copy(n.boundingSphere),oc.applyMatrix4(r),wr.copy(t.ray).recast(t.near),!(oc.containsPoint(wr.origin)===!1&&(wr.intersectSphere(oc,vg)===null||wr.origin.distanceToSquared(vg)>(t.far-t.near)**2))&&(xg.copy(r).invert(),wr.copy(t.ray).applyMatrix4(xg),!(n.boundingBox!==null&&wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,b=E;y<b;y+=3){let T=a.getX(y),x=a.getX(y+1),M=a.getX(y+2);i=fc(this,g,t,n,c,h,d,T,x,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let v=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);i=fc(this,o,t,n,c,h,d,v,E,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,b=E;y<b;y+=3){let T=y,x=y+1,M=y+2;i=fc(this,g,t,n,c,h,d,T,x,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let v=p,E=p+1,y=p+2;i=fc(this,o,t,n,c,h,d,v,E,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function Jv(s,t,e,n,i,r,o,a){let l;if(t.side===_n?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Qs,a),l===null)return null;uc.copy(a),uc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(uc);return c<e.near||c>e.far?null:{distance:c,point:uc.clone(),object:s}}function fc(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ac),s.getVertexPosition(l,lc),s.getVertexPosition(c,cc);let h=Jv(s,t,e,n,ac,lc,cc,yg);if(h){let d=new J;Ws.getBarycoord(yg,ac,lc,cc,d),i&&(h.uv=Ws.getInterpolatedAttribute(i,a,l,c,d,new se)),r&&(h.uv1=Ws.getInterpolatedAttribute(r,a,l,c,d,new se)),o&&(h.normal=Ws.getInterpolatedAttribute(o,a,l,c,d,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new J,materialIndex:0};Ws.getNormal(ac,lc,cc,u.normal),h.face=u,h.barycoord=d}return h}var Nc=class extends Wn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=hn,h=hn,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tr=new To,$v=new se(.5,.5),dc=new J,Zs=class{constructor(t=new Li,e=new Li,n=new Li,i=new Li,r=new Li,o=new Li){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],v=r[12],E=r[13],y=r[14],b=r[15];if(i[0].setComponents(c-o,f-h,g-m,b-v).normalize(),i[1].setComponents(c+o,f+h,g+m,b+v).normalize(),i[2].setComponents(c+a,f+d,g+_,b+E).normalize(),i[3].setComponents(c-a,f-d,g-_,b-E).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,f-u,g-p,b-y).normalize();else if(i[4].setComponents(c-l,f-u,g-p,b-y).normalize(),e===Si)i[5].setComponents(c+l,f+u,g+p,b+y).normalize();else if(e===So)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){Tr.center.set(0,0,0);let e=$v.distanceTo(t.center);return Tr.radius=.7071067811865476+e,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(dc.x=i.normal.x>0?t.max.x:t.min.x,dc.y=i.normal.y>0?t.max.y:t.min.y,dc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(dc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Sg=new Ie,Oc=class s{constructor(){this.coordinateSystem=Si,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Sg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Zs),n[i].setFromProjectionMatrix(Sg,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Zs),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Ra=class extends Wn{constructor(t=[],e=Dr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pa=class extends Wn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ss=class extends Wn{constructor(t,e,n=Oi,i,r,o,a=hn,l=hn,c,h=ys,d=1){if(h!==ys&&h!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ia=class extends Ss{constructor(t,e=Oi,n=Dr,i,r,o=hn,a=hn,l,c=ys){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},La=class extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ki=class s extends qs{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Mi(c,3)),this.setAttribute("normal",new Mi(h,3)),this.setAttribute("uv",new Mi(d,2));function m(_,p,g,v,E,y,b,T,x,M,P){let C=y/x,N=b/M,L=y/2,V=b/2,I=T/2,k=x+1,z=M+1,U=0,q=0,F=new J;for(let A=0;A<z;A++){let Z=A*N-V;for(let ut=0;ut<k;ut++){let Mt=ut*C-L;F[_]=Mt*v,F[p]=Z*E,F[g]=I,c.push(F.x,F.y,F.z),F[_]=0,F[p]=0,F[g]=T>0?1:-1,h.push(F.x,F.y,F.z),d.push(ut/x),d.push(1-A/M),U+=1}}for(let A=0;A<M;A++)for(let Z=0;Z<x;Z++){let ut=u+Z+k*A,Mt=u+Z+k*(A+1),W=u+(Z+1)+k*(A+1),rt=u+(Z+1)+k*A;l.push(ut,Mt,rt),l.push(Mt,W,rt),q+=6}a.addGroup(f,q,P),f+=q,u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Pr=class s extends qs{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*u-o;for(let E=0;E<c;E++){let y=E*d-r;m.push(y,-v,0),_.push(0,0,1),p.push(E/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let E=v+c*g,y=v+c*(g+1),b=v+1+c*(g+1),T=v+1+c*g;f.push(E,y,T),f.push(y,b,T)}this.setIndex(f),this.setAttribute("position",new Mi(m,3)),this.setAttribute("normal",new Mi(_,3)),this.setAttribute("uv",new Mi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};function Or(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Mg(i))i.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Mg(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Ln(s){let t={};for(let e=0;e<s.length;e++){let n=Or(s[e]);for(let i in n)t[i]=n[i]}return t}function Mg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Kv(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function xd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var p_={clone:Or,merge:Ln},Qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qi=class extends Ys{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qv,this.fragmentShader=jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=Kv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(i.value);break;case"v2":this.uniforms[n].value=new se().fromArray(i.value);break;case"v3":this.uniforms[n].value=new J().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ie().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Uc=class extends Qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fc=class extends Ys{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Da=class extends Fc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ar('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ar('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Bc=class extends Ys{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zc=class extends Ys{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function go(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function pc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Js=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kc=class extends Js{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bf,endingEnd:Bf}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zf:r=t,a=2*e-n;break;case kf:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zf:o=t,l=2*n-e;break;case kf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,v=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,E=(-1-f)*p+(1.5+f)*_+.5*m,y=f*p-f*_;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+v*o[c+b]+E*o[l+b]+y*o[d+b];return r}},Vc=class extends Js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Gc=class extends Js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Hc=class extends Js{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=f*u+m*2,v=d[g],E=d[g+1],y=t*u+m*2,b=h[y],T=h[y+1],x=ey(n,e,v,b,i);r[m]=m_(x,_,E,T,p)}return r}};function m_(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function ty(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function ey(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=m_(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=ty(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var fi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=go(e,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:go(t.times,Array),values:go(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),pc(t.settings)&&(n.settings={inTangents:go(t.settings.inTangents,Array),outTangents:go(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Hc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Sa:e=this.InterpolantFactoryMethodDiscrete;break;case Cc:e=this.InterpolantFactoryMethodLinear;break;case _c:e=this.InterpolantFactoryMethodSmooth;break;case Ff:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return Cc;case this.InterpolantFactoryMethodSmooth:return _c;case this.InterpolantFactoryMethodBezier:return Ff}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;pc(this.settings)&&(bg(this.settings.inTangents,t),bg(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;pc(this.settings)&&(wg(this.settings.inTangents,t),wg(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Vt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Rv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_c,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,pc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function bg(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function wg(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Cc;var $s=class extends fi{constructor(t,e,n){super(t,e,n)}};$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Sa;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var Wc=class extends fi{constructor(t,e,n,i){super(t,e,n,i)}};Wc.prototype.ValueTypeName="color";var Xc=class extends fi{constructor(t,e,n,i){super(t,e,n,i)}};Xc.prototype.ValueTypeName="number";var qc=class extends Js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Na=class extends fi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new qc(this.times,this.values,this.getValueSize(),t)}};Na.prototype.ValueTypeName="quaternion";Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Ks=class extends fi{constructor(t,e,n){super(t,e,n)}};Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Sa;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends fi{constructor(t,e,n,i){super(t,e,n,i)}};Yc.prototype.ValueTypeName="vector";var Zc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},g_=new Zc,Jc=class{constructor(t){this.manager=t!==void 0?t:g_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oa=class extends Xn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Uf=new Ie,Tg=new J,Eg=new J,$c=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Tg.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tg),Eg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eg),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Uf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Uf,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===So||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Uf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},mc=new J,gc=new Pn,Yi=new J,Ua=class extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mc,gc,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Yi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(mc,gc,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hs=new J,Ag=new se,Cg=new se,Hn=class extends Ua{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(mf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hs.x,Hs.y).multiplyScalar(-t/Hs.z),Hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hs.x,Hs.y).multiplyScalar(-t/Hs.z)}getViewSize(t,e){return this.getViewBounds(t,Ag,Cg),e.subVectors(Cg,Ag)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mf*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fa=class extends Ua{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vf=class extends $c{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ba=class extends Oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.target=new Xn,this.shadow=new Vf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},za=class extends Oa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var _o=-90,xo=1,Eo=class extends Xn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Hn(_o,xo,t,e);i.layers=this.layers,this.add(i);let r=new Hn(_o,xo,t,e);r.layers=this.layers,this.add(r);let o=new Hn(_o,xo,t,e);o.layers=this.layers,this.add(o);let a=new Hn(_o,xo,t,e);a.layers=this.layers,this.add(a);let l=new Hn(_o,xo,t,e);l.layers=this.layers,this.add(l);let c=new Hn(_o,xo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===So)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Kc=class extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var vd="\\[\\]\\.:\\/",ny=new RegExp("["+vd+"]","g"),yd="[^"+vd+"]",iy="[^"+vd.replace("\\.","")+"]",sy=/((?:WC+[\/:])*)/.source.replace("WC",yd),ry=/(WCOD+)?/.source.replace("WCOD",iy),oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yd),ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yd),ly=new RegExp("^"+sy+ry+oy+ay+"$"),cy=["material","materials","bones","map"],Gf=class{constructor(t,e,n){let i=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ny,"")}static parseTrackName(t){let e=ly.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);cy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Gf;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FT=new Float32Array(1);var Ed=class Ed{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Ed.prototype.isMatrix2=!0;var Hf=Ed;function Sd(s,t,e,n){let i=hy(n);switch(e){case cd:return s*t;case ud:return s*t/i.components*i.byteLength;case rh:return s*t/i.components*i.byteLength;case js:return s*t*2/i.components*i.byteLength;case oh:return s*t*2/i.components*i.byteLength;case hd:return s*t*3/i.components*i.byteLength;case Bi:return s*t*4/i.components*i.byteLength;case ah:return s*t*4/i.components*i.byteLength;case Ga:case Ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wa:case Xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ch:case uh:return Math.max(s,16)*Math.max(t,8)/4;case lh:case hh:return Math.max(s,8)*Math.max(t,8)/2;case fh:case dh:case mh:case gh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ph:case qa:case _h:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case yh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case bh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Th:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Rh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ph:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ih:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Lh:case Dh:case Nh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Oh:case Uh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ya:case Fh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hy(s){switch(s){case jn:case rd:return{byteLength:1,components:1};case Po:case od:case Fi:return{byteLength:2,components:1};case ih:case sh:return{byteLength:2,components:4};case Oi:case nh:case Ui:return{byteLength:4,components:1};case ad:case ld:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function B_(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function fy(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
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
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vy=`#ifdef USE_AOMAP
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
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy=`#ifdef USE_BATCHING
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
#endif`,My=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,by=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ty=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ey=`#ifdef USE_IRIDESCENCE
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
#endif`,Ay=`#ifdef USE_BUMPMAP
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Uy=`#define PI 3.141592653589793
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
} // validated`,Fy=`vec3 transformedNormal = objectNormal;
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
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ky=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
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
#endif`,Jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$y=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jy=`#ifdef USE_GRADIENTMAP
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
}`,tS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sS=`#ifdef USE_ENVMAP
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
#endif`,rS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cS=`PhysicalMaterial material;
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
#endif`,hS=`uniform sampler2D dfgLUT;
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
}`,uS=`
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
#endif`,fS=`#if defined( RE_IndirectDiffuse )
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
#endif`,dS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,mS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MS=`#if defined( USE_POINTS_UV )
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
#endif`,bS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ES=`#if defined( USE_MORPHCOLORS )
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
#endif`,AS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CS=`#ifdef USE_MORPHTARGETS
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
#endif`,RS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,OS=`#ifdef USE_NORMALMAP
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
#endif`,US=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$S=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KS=`float getShadowMask() {
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
}`,QS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jS=`#ifdef USE_SKINNING
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
#endif`,tM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eM=`#ifdef USE_SKINNING
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
#endif`,nM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oM=`#ifdef USE_TRANSMISSION
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
#endif`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dM=`uniform sampler2D t2D;
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`uniform float backgroundBlurriness;
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`#include <common>
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
}`,vM=`#if DEPTH_PACKING == 3200
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
}`,yM=`#define DISTANCE
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
}`,SM=`#define DISTANCE
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`uniform float scale;
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
}`,TM=`uniform vec3 diffuse;
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
}`,EM=`#include <common>
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
}`,AM=`uniform vec3 diffuse;
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
}`,CM=`#define LAMBERT
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
}`,RM=`#define LAMBERT
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
}`,PM=`#define MATCAP
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
}`,IM=`#define MATCAP
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
}`,LM=`#define NORMAL
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
}`,DM=`#define NORMAL
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
}`,NM=`#define PHONG
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
}`,OM=`#define PHONG
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
}`,UM=`#define STANDARD
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
}`,FM=`#define STANDARD
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
}`,BM=`#define TOON
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
}`,zM=`#define TOON
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
}`,kM=`uniform float size;
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
}`,VM=`uniform vec3 diffuse;
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
}`,GM=`#include <common>
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
}`,HM=`uniform vec3 color;
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
}`,WM=`uniform float rotation;
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
}`,XM=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:dy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:_y,alphatest_pars_fragment:xy,aomap_fragment:vy,aomap_pars_fragment:yy,batching_pars_vertex:Sy,batching_vertex:My,begin_vertex:by,beginnormal_vertex:wy,bsdfs:Ty,iridescence_fragment:Ey,bumpmap_pars_fragment:Ay,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:Ry,clipping_planes_pars_vertex:Py,clipping_planes_vertex:Iy,color_fragment:Ly,color_pars_fragment:Dy,color_pars_vertex:Ny,color_vertex:Oy,common:Uy,defaultnormal_vertex:Fy,displacementmap_pars_vertex:By,displacementmap_vertex:zy,emissivemap_fragment:ky,emissivemap_pars_fragment:Vy,colorspace_fragment:Gy,colorspace_pars_fragment:Hy,envmap_fragment:Wy,envmap_common_pars_fragment:Xy,envmap_pars_fragment:qy,envmap_pars_vertex:Yy,envmap_physical_pars_fragment:sS,envmap_vertex:Zy,fog_vertex:Jy,fog_pars_vertex:$y,fog_fragment:Ky,fog_pars_fragment:Qy,gradientmap_pars_fragment:jy,lightmap_pars_fragment:tS,lights_lambert_fragment:eS,lights_lambert_pars_fragment:nS,lights_pars_begin:iS,lights_toon_fragment:rS,lights_toon_pars_fragment:oS,lights_phong_fragment:aS,lights_phong_pars_fragment:lS,lights_physical_fragment:cS,lights_physical_pars_fragment:hS,lights_fragment_begin:uS,lights_fragment_maps:fS,lights_fragment_end:dS,lightprobes_pars_fragment:pS,logdepthbuf_fragment:mS,logdepthbuf_pars_fragment:gS,logdepthbuf_pars_vertex:_S,logdepthbuf_vertex:xS,map_fragment:vS,map_pars_fragment:yS,map_particle_fragment:SS,map_particle_pars_fragment:MS,metalnessmap_fragment:bS,metalnessmap_pars_fragment:wS,morphinstance_vertex:TS,morphcolor_vertex:ES,morphnormal_vertex:AS,morphtarget_pars_vertex:CS,morphtarget_vertex:RS,normal_fragment_begin:PS,normal_fragment_maps:IS,normal_pars_fragment:LS,normal_pars_vertex:DS,normal_vertex:NS,normalmap_pars_fragment:OS,clearcoat_normal_fragment_begin:US,clearcoat_normal_fragment_maps:FS,clearcoat_pars_fragment:BS,iridescence_pars_fragment:zS,opaque_fragment:kS,packing:VS,premultiplied_alpha_fragment:GS,project_vertex:HS,dithering_fragment:WS,dithering_pars_fragment:XS,roughnessmap_fragment:qS,roughnessmap_pars_fragment:YS,shadowmap_pars_fragment:ZS,shadowmap_pars_vertex:JS,shadowmap_vertex:$S,shadowmask_pars_fragment:KS,skinbase_vertex:QS,skinning_pars_vertex:jS,skinning_vertex:tM,skinnormal_vertex:eM,specularmap_fragment:nM,specularmap_pars_fragment:iM,tonemapping_fragment:sM,tonemapping_pars_fragment:rM,transmission_fragment:oM,transmission_pars_fragment:aM,uv_pars_fragment:lM,uv_pars_vertex:cM,uv_vertex:hM,worldpos_vertex:uM,background_vert:fM,background_frag:dM,backgroundCube_vert:pM,backgroundCube_frag:mM,cube_vert:gM,cube_frag:_M,depth_vert:xM,depth_frag:vM,distance_vert:yM,distance_frag:SM,equirect_vert:MM,equirect_frag:bM,linedashed_vert:wM,linedashed_frag:TM,meshbasic_vert:EM,meshbasic_frag:AM,meshlambert_vert:CM,meshlambert_frag:RM,meshmatcap_vert:PM,meshmatcap_frag:IM,meshnormal_vert:LM,meshnormal_frag:DM,meshphong_vert:NM,meshphong_frag:OM,meshphysical_vert:UM,meshphysical_frag:FM,meshtoon_vert:BM,meshtoon_frag:zM,points_vert:kM,points_frag:VM,shadow_vert:GM,shadow_frag:HM,sprite_vert:WM,sprite_frag:XM},bt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},ts={basic:{uniforms:Ln([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ln([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ln([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ln([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ln([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ln([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ln([bt.points,bt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ln([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ln([bt.common,bt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ln([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ln([bt.sprite,bt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Ln([bt.common,bt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Ln([bt.lights,bt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};ts.physical={uniforms:Ln([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var zh={r:0,b:0,g:0},qM=new Ie,z_=new Ht;z_.set(-1,0,0,0,1,0,0,0,1);function YM(s,t,e,n,i,r){let o=new Yt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let y=v.backgroundBlurriness>0;E=t.get(E,y)}return E}function m(v){let E=!1,y=f(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,E){let y=f(E);y&&y.isCubeTexture?(c===void 0&&(c=new In(new Ki(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Or(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qM.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(z_),c.material.toneMapped=ne.getTransfer(y.colorSpace)!==ge,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new In(new Pr(2,2),new Qi({name:"BackgroundMaterial",uniforms:Or(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:Qs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ne.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(zh,xd(s)),e.buffers.color.setClear(zh.r,zh.g,zh.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:_,dispose:g}}function ZM(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(N,L,V,I,k){let z=!1,U=d(N,I,V,L);r!==U&&(r=U,c(r.object)),z=f(N,I,V,k),z&&m(N,I,V,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(N,L,V,I),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,L,V,I){let k=I.wireframe===!0,z=n[L.id];z===void 0&&(z={},n[L.id]=z);let U=N.isInstancedMesh===!0?N.id:0,q=z[U];q===void 0&&(q={},z[U]=q);let F=q[V.id];F===void 0&&(F={},q[V.id]=F);let A=F[k];return A===void 0&&(A=u(l()),F[k]=A),A}function u(N){let L=[],V=[],I=[];for(let k=0;k<e;k++)L[k]=0,V[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,L,V,I){let k=r.attributes,z=L.attributes,U=0,q=V.getAttributes();for(let F in q)if(q[F].location>=0){let Z=k[F],ut=z[F];if(ut===void 0&&(F==="instanceMatrix"&&N.instanceMatrix&&(ut=N.instanceMatrix),F==="instanceColor"&&N.instanceColor&&(ut=N.instanceColor)),Z===void 0||Z.attribute!==ut||ut&&Z.data!==ut.data)return!0;U++}return r.attributesNum!==U||r.index!==I}function m(N,L,V,I){let k={},z=L.attributes,U=0,q=V.getAttributes();for(let F in q)if(q[F].location>=0){let Z=z[F];Z===void 0&&(F==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),F==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));let ut={};ut.attribute=Z,Z&&Z.data&&(ut.data=Z.data),k[F]=ut,U++}r.attributes=k,r.attributesNum=U,r.index=I}function _(){let N=r.newAttributes;for(let L=0,V=N.length;L<V;L++)N[L]=0}function p(N){g(N,0)}function g(N,L){let V=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;V[N]=1,I[N]===0&&(s.enableVertexAttribArray(N),I[N]=1),k[N]!==L&&(s.vertexAttribDivisor(N,L),k[N]=L)}function v(){let N=r.newAttributes,L=r.enabledAttributes;for(let V=0,I=L.length;V<I;V++)L[V]!==N[V]&&(s.disableVertexAttribArray(V),L[V]=0)}function E(N,L,V,I,k,z,U){U===!0?s.vertexAttribIPointer(N,L,V,k,z):s.vertexAttribPointer(N,L,V,I,k,z)}function y(N,L,V,I){_();let k=I.attributes,z=V.getAttributes(),U=L.defaultAttributeValues;for(let q in z){let F=z[q];if(F.location>=0){let A=k[q];if(A===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(A=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(A=N.instanceColor)),A!==void 0){let Z=A.normalized,ut=A.itemSize,Mt=t.get(A);if(Mt===void 0)continue;let W=Mt.buffer,rt=Mt.type,gt=Mt.bytesPerElement,wt=rt===s.INT||rt===s.UNSIGNED_INT||A.gpuType===nh;if(A.isInterleavedBufferAttribute){let _t=A.data,Nt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,_e=A.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let At=0;At<F.locationSize;At++)g(F.location+At,_t.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let At=0;At<F.locationSize;At++)p(F.location+At);s.bindBuffer(s.ARRAY_BUFFER,W);for(let At=0;At<F.locationSize;At++)E(F.location+At,ut/F.locationSize,rt,Z,Nt*gt,(_e+ut/F.locationSize*At)*gt,wt)}else{if(A.isInstancedBufferAttribute){for(let _t=0;_t<F.locationSize;_t++)g(F.location+_t,A.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let _t=0;_t<F.locationSize;_t++)p(F.location+_t);s.bindBuffer(s.ARRAY_BUFFER,W);for(let _t=0;_t<F.locationSize;_t++)E(F.location+_t,ut/F.locationSize,rt,Z,ut*gt,ut/F.locationSize*_t*gt,wt)}}else if(U!==void 0){let Z=U[q];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(F.location,Z);break;case 3:s.vertexAttrib3fv(F.location,Z);break;case 4:s.vertexAttrib4fv(F.location,Z);break;default:s.vertexAttrib1fv(F.location,Z)}}}}v()}function b(){P();for(let N in n){let L=n[N];for(let V in L){let I=L[V];for(let k in I){let z=I[k];for(let U in z)h(z[U].object),delete z[U];delete I[k]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let L=n[N.id];for(let V in L){let I=L[V];for(let k in I){let z=I[k];for(let U in z)h(z[U].object),delete z[U];delete I[k]}}delete n[N.id]}function x(N){for(let L in n){let V=n[L];for(let I in V){let k=V[I];if(k[N.id]===void 0)continue;let z=k[N.id];for(let U in z)h(z[U].object),delete z[U];delete k[N.id]}}}function M(N){for(let L in n){let V=n[L],I=N.isInstancedMesh===!0?N.id:0,k=V[I];if(k!==void 0){for(let z in k){let U=k[z];for(let q in U)h(U[q].object),delete U[q];delete k[z]}delete V[I],Object.keys(V).length===0&&delete n[L]}}}function P(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function JM(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function $M(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Bi&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==jn&&x!==Ui&&!M&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,maxSamples:b,samples:T}}function KM(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Li,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,E=v*4,y=g.clippingState||null;l.value=y,y=h(m,u,E,f);for(let b=0;b!==E;++b)y[b]=e[b];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,y=f;E!==_;++E,y+=4)o.copy(d[E]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Ka=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ra(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ki(5,5,5),r=new Qi({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Ir});r.uniforms.tEquirect.value=e;let o=new In(i,r),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=gn),new Eo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},__=256,QM=3,jM=20,k_=256,V_=16,tb=3,eb=new J,nb=new Yt,Lo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Eo(1,10,null),this._boxMesh=new In(new Ki(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=eb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(nb));let p=new Eo(n,i,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(__,f_(t))}_fromTexture(t,e){t.mapping===Dr||t.mapping===Ro?this._setSize(t.image.length===0?__:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=x_(t,!1,!1),n=Math.log2(t)-QM;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=x_(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Dr||t.mapping===Ro?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=v_()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ib(),this._integrationMaterial=sb());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/V_);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-tb)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(k_*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=rb());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function x_(s,t,e){return new Ka(s,{minFilter:Ni,generateMipmaps:t,type:Fi,colorSpace:Ma,depthBuffer:e})}function Qa(s,t,e){return new Qi({name:s,uniforms:t,vertexShader:Jt.cube_vert,fragmentShader:e,side:_n,blending:Ir,depthTest:!1,depthWrite:!1})}function ib(){return Qa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${k_}u

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
	`)}function sb(){return Qa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:V_}},`

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
	`)}function rb(){return Qa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${jM}
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
	`)}function v_(){return Qa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function y_(){return Qa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ob(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===jc||f===th)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Ka(m.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===jc||f===th,_=f===Dr||f===Ro;if(m||_){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Lo(s)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Lo(s)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===jc?u.mapping=Dr:f===th&&(u.mapping=Ro),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function ab(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ar("WebGLRenderer: "+n+" extension not supported."),i}}}function lb(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],s.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,E=p.count>=65535?Ca:Aa,y=new E(Math.ceil(v/3)*6,1),b=y.array;if(_!==null){let x=_.array;g=_.version;for(let M=0,P=0;M<v;M+=3){let C=x[M+0],N=x[M+1],L=x[M+2];b[P++]=C,b[P++]=N,b[P++]=N,b[P++]=L,b[P++]=L,b[P++]=C}}else{g=p.version;for(let x=0,M=0;x<v;x+=3){let P=x+0,C=x+1,N=x+2;b[M++]=P,b[M++]=C,b[M++]=C,b[M++]=N,b[M++]=N,b[M++]=P}}y.version=g;let T=r.get(m);T&&t.remove(T),r.set(m,y)}function u(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function cb(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function hb(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Vt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ub(s,t,e){let n=new WeakMap,i=new Le;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*b*4*d),x=new Ta(T,y,b,d);x.type=Ui,x.needsUpdate=!0;let M=E*4;for(let C=0;C<d;C++){let N=p[C],L=g[C],V=v[C],I=y*b*4*C;for(let k=0;k<N.count;k++){let z=k*M;f===!0&&(i.fromBufferAttribute(N,k),T[I+z+0]=i.x,T[I+z+1]=i.y,T[I+z+2]=i.z,T[I+z+3]=0),m===!0&&(i.fromBufferAttribute(L,k),T[I+z+4]=i.x,T[I+z+5]=i.y,T[I+z+6]=i.z,T[I+z+7]=0),_===!0&&(i.fromBufferAttribute(V,k),T[I+z+8]=i.x,T[I+z+9]=i.y,T[I+z+10]=i.z,T[I+z+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:x,size:new se(y,b)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function fb(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var db={[Kf]:"LINEAR_TONE_MAPPING",[Qf]:"REINHARD_TONE_MAPPING",[jf]:"CINEON_TONE_MAPPING",[td]:"ACES_FILMIC_TONE_MAPPING",[nd]:"AGX_TONE_MAPPING",[id]:"NEUTRAL_TONE_MAPPING",[ed]:"CUSTOM_TONE_MAPPING"};function pb(s,t,e,n,i,r){let o=new ui(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new qs;h.setAttribute("position",new Mi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Mi([0,2,0,0,2,0],2));let d=new Uc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new In(h,d),f=new Fa(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,E=[],y=!1;this.setSize=function(b,T){o.setSize(b,T),a!==null&&a.setSize(b,T),l!==null&&l.setSize(b,T);for(let x=0;x<E.length;x++){let M=E[x];M.setSize&&M.setSize(b,T)}},this.setEffects=function(b){E=b,y=E.length>0&&E[0].isRenderPass===!0;let T=o.width,x=o.height;E.length>0&&a===null&&(a=new ui(T,x,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new ui(T,x,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&E.some(P=>P.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new Ss(T,x),r===!0&&(c.format=Ms,c.type=Nr)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let P=0;P<E.length;P++){let C=E[P];C.setSize&&C.setSize(T,x),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(b,T){if(p||b.toneMapping===wi&&E.length===0)return!1;if(v=T,T!==null){let x=T.width,M=T.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return y===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=wi,!0},this.hasRenderPass=function(){return y},this.end=function(b,T){b.toneMapping=g,p=!0;let x=o,M=a;for(let P=0;P<E.length;P++){let C=E[P];C.enabled!==!1&&(C.render(b,M,x,T),C.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(m!==b.outputColorSpace||_!==b.toneMapping){m=b.outputColorSpace,_=b.toneMapping,d.defines={},ne.getTransfer(m)===ge&&(d.defines.SRGB_TRANSFER="");let P=db[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(v),b.render(u,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var G_=new Wn,H_=new Ss(1,1),W_=new Ia(1),X_=new Ta,q_=new Lc,Y_=new Ra,S_=[],M_=[],b_=new Float32Array(16),w_=new Float32Array(9),T_=new Float32Array(4);function Do(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=S_[i];if(r===void 0&&(r=new Float32Array(i),S_[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function sn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function rn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Gh(s,t){let e=M_[t];e===void 0&&(e=new Int32Array(t),M_[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function mb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function gb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2fv(this.addr,t),rn(e,t)}}function _b(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;s.uniform3fv(this.addr,t),rn(e,t)}}function xb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4fv(this.addr,t),rn(e,t)}}function vb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;T_.set(n),s.uniformMatrix2fv(this.addr,!1,T_),rn(e,n)}}function yb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;w_.set(n),s.uniformMatrix3fv(this.addr,!1,w_),rn(e,n)}}function Sb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;b_.set(n),s.uniformMatrix4fv(this.addr,!1,b_),rn(e,n)}}function Mb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function bb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2iv(this.addr,t),rn(e,t)}}function wb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3iv(this.addr,t),rn(e,t)}}function Tb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4iv(this.addr,t),rn(e,t)}}function Eb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ab(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2uiv(this.addr,t),rn(e,t)}}function Cb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3uiv(this.addr,t),rn(e,t)}}function Rb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4uiv(this.addr,t),rn(e,t)}}function Hh(s){return s.version===0&&(s.compareFunction=pd,s.needsUpdate=!0),s}function Pb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Hh(H_):r=G_,e.setTexture2D(t||r,i)}function Ib(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||q_,i)}function Lb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Hh(W_):r=Y_,e.setTextureCube(t||r,i)}function Db(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||X_,i)}function Nb(s){switch(s){case 5126:return mb;case 35664:return gb;case 35665:return _b;case 35666:return xb;case 35674:return vb;case 35675:return yb;case 35676:return Sb;case 5124:case 35670:return Mb;case 35667:case 35671:return bb;case 35668:case 35672:return wb;case 35669:case 35673:return Tb;case 5125:return Eb;case 36294:return Ab;case 36295:return Cb;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Db}}function Ob(s,t){s.uniform1fv(this.addr,t)}function Ub(s,t){let e=Do(t,this.size,2);s.uniform2fv(this.addr,e)}function Fb(s,t){let e=Do(t,this.size,3);s.uniform3fv(this.addr,e)}function Bb(s,t){let e=Do(t,this.size,4);s.uniform4fv(this.addr,e)}function zb(s,t){let e=Do(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function kb(s,t){let e=Do(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Vb(s,t){let e=Do(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gb(s,t){s.uniform1iv(this.addr,t)}function Hb(s,t){s.uniform2iv(this.addr,t)}function Wb(s,t){s.uniform3iv(this.addr,t)}function Xb(s,t){s.uniform4iv(this.addr,t)}function qb(s,t){s.uniform1uiv(this.addr,t)}function Yb(s,t){s.uniform2uiv(this.addr,t)}function Zb(s,t){s.uniform3uiv(this.addr,t)}function Jb(s,t){s.uniform4uiv(this.addr,t)}function $b(s,t,e){let n=this.cache,i=t.length,r=Gh(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Hh(H_):o=G_;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Kb(s,t,e){let n=this.cache,i=t.length,r=Gh(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||q_,r[o])}function Qb(s,t,e){let n=this.cache,i=t.length,r=Gh(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Hh(W_):o=Y_;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function jb(s,t,e){let n=this.cache,i=t.length,r=Gh(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||X_,r[o])}function tw(s){switch(s){case 5126:return Ob;case 35664:return Ub;case 35665:return Fb;case 35666:return Bb;case 35674:return zb;case 35675:return kb;case 35676:return Vb;case 5124:case 35670:return Gb;case 35667:case 35671:return Hb;case 35668:case 35672:return Wb;case 35669:case 35673:return Xb;case 5125:return qb;case 36294:return Yb;case 36295:return Zb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return jb}}var Rd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nb(e.type)}},Pd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tw(e.type)}},Id=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ad=/(\w+)(\])?(\[|\.)?/g;function E_(s,t){s.seq.push(t),s.map[t.id]=t}function ew(s,t,e){let n=s.name,i=n.length;for(Ad.lastIndex=0;;){let r=Ad.exec(n),o=Ad.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){E_(e,c===void 0?new Rd(a,s,t):new Pd(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Id(a),E_(e,d)),e=d}}}var Io=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);ew(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function A_(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var nw=37297,iw=0;function sw(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var C_=new Ht;function rw(s){ne._getMatrix(C_,ne.workingColorSpace,s);let t=`mat3( ${C_.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case ba:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function R_(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+sw(s.getShaderSource(t),a)}else return r}function ow(s,t){let e=rw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var aw={[Kf]:"Linear",[Qf]:"Reinhard",[jf]:"Cineon",[td]:"ACESFilmic",[nd]:"AgX",[id]:"Neutral",[ed]:"Custom"};function lw(s,t){let e=aw[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var kh=new J;function cw(){ne.getLuminanceCoefficients(kh);let s=kh.x.toFixed(4),t=kh.y.toFixed(4),e=kh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function uw(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fw(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function $a(s){return s!==""}function P_(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function I_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(s){return s.replace(dw,pw)}function pw(s,t){let e=Jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ld(e)}var mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(s){return s.replace(mw,gw)}function gw(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function D_(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var _w={[ka]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function xw(s){return _w[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vw={[Ro]:"ENVMAP_MODE_REFRACTION"};function yw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":vw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sw={[$f]:"ENVMAP_BLENDING_MULTIPLY",[$g]:"ENVMAP_BLENDING_MIX",[Kg]:"ENVMAP_BLENDING_ADD"};function Mw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Sw[s.combine]||"ENVMAP_BLENDING_NONE"}function bw(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=xw(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=yw(e),d=Mw(e),u=hw(e),f=uw(r),m=i.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter($a).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter($a).join(`
`),p.length>0&&(p+=`
`)):(_=[D_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),p=[D_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==wi?lw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,ow("linearToOutputTexel",e.outputColorSpace),cw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($a).join(`
`)),o=Ld(o),o=P_(o,e),o=I_(o,e),a=Ld(a),a=P_(a,e),a=I_(a,e),o=L_(o),a=L_(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===md?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+o,E=g+p+a,y=A_(i,i.VERTEX_SHADER,v),b=A_(i,i.FRAGMENT_SHADER,E);i.attachShader(m,y),i.attachShader(m,b),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function T(C){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",L=i.getShaderInfoLog(y)||"",V=i.getShaderInfoLog(b)||"",I=N.trim(),k=L.trim(),z=V.trim(),U=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,y,b);else{let F=R_(i,y,"vertex"),A=R_(i,b,"fragment");Vt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+F+`
`+A)}else I!==""?zt("WebGLProgram: Program Info Log:",I):(k===""||z==="")&&(q=!1);q&&(C.diagnostics={runnable:U,programLog:I,vertexShader:{log:k,prefix:_},fragmentShader:{log:z,prefix:p}})}i.deleteShader(y),i.deleteShader(b),x=new Io(i,m),M=fw(i,m)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,nw)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iw++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=b,this}var ww=0,Dd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Nd(t),e.set(t,n)),n}},Nd=class{constructor(t){this.id=ww++,this.code=t,this.usedTimes=0}};function Tw(s){return s===js||s===qa||s===Ya}function Ew(s,t,e,n,i,r){let o=new Ea,a=new Dd,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,C,N,L){let V=C.fog,I=N.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=t.get(x.envMap||k,z),q=u[x.type],F=n.precision;x.precision!==null&&(F=n.getMaxPrecision(x.precision),F!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",F,"instead."));let A=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=A!==void 0?A.length:0,ut=0;I.morphAttributes.position!==void 0&&(ut=1),I.morphAttributes.normal!==void 0&&(ut=2),I.morphAttributes.color!==void 0&&(ut=3);let Mt,W,rt,gt;if(q){let nt=ts[q];Mt=nt.vertexShader,W=nt.fragmentShader}else{Mt=x.vertexShader,W=x.fragmentShader;let nt=a.getVertexShaderStage(x),Tt=a.getFragmentShaderStage(x);a.update(x,nt,Tt),rt=nt.id,gt=Tt.id}let wt=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,_e=N.isBatchedMesh===!0,At=!!x.map,Wt=!!x.matcap,Lt=!!U,Ft=Lt&&U.isPMREMTexture===!0,he=!!x.aoMap,ae=!!x.lightMap,K=!!x.bumpMap&&x.wireframe===!1,Qt=!!x.normalMap,Xe=!!x.displacementMap,ye=!!x.emissiveMap,re=!!x.metalnessMap,Fe=!!x.roughnessMap,He=x.anisotropy>0,B=x.clearcoat>0,fe=x.diffuseRoughness>0,le=x.dispersion>0,Gt=x.retroreflectivity>0,ft=x.iridescence>0,ue=x.sheen>0,Dt=x.transmission>0,Bt=He&&!!x.anisotropyMap,R=B&&!!x.clearcoatMap,S=B&&!!x.clearcoatNormalMap,H=B&&!!x.clearcoatRoughnessMap,ot=fe&&!!x.diffuseRoughnessMap,it=ft&&!!x.iridescenceMap,ht=ft&&!!x.iridescenceThicknessMap,xt=ue&&!!x.sheenColorMap,X=ue&&!!x.sheenRoughnessMap,tt=!!x.specularMap,ct=!!x.specularColorMap,D=!!x.specularIntensityMap,j=Dt&&!!x.transmissionMap,Q=Dt&&!!x.thicknessMap,dt=!!x.gradientMap,lt=!!x.alphaMap,pt=x.alphaTest>0,at=!!x.alphaHash,mt=!!x.extensions,st=wi;x.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(st=s.toneMapping);let et=Ft?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,vt={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:Mt,fragmentShader:W,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:F,batching:_e,batchingColor:_e&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,outputColorSpace:wt===null?s.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:At,matcap:Wt,envMap:Lt,envMapMode:Lt&&U.mapping,envMapPMREM:Ft,envMapMaxLod:Ft?et.length-1:null,envMapSize:Ft?et[0].width:null,aoMap:he,lightMap:ae,bumpMap:K,normalMap:Qt,displacementMap:Xe,emissiveMap:ye,normalMapObjectSpace:Qt&&x.normalMapType===t_,normalMapTangentSpace:Qt&&x.normalMapType===Bh,packedNormalMap:Qt&&x.normalMapType===Bh&&Tw(x.normalMap.format),metalnessMap:re,roughnessMap:Fe,anisotropy:He,anisotropyMap:Bt,clearcoat:B,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:H,diffuseRoughness:fe,diffuseRoughnessMap:ot,dispersion:le,retroreflection:Gt,iridescence:ft,iridescenceMap:it,iridescenceThicknessMap:ht,sheen:ue,sheenColorMap:xt,sheenRoughnessMap:X,specularMap:tt,specularColorMap:ct,specularIntensityMap:D,transmission:Dt,transmissionMap:j,thicknessMap:Q,gradientMap:dt,opaque:x.transparent===!1&&x.blending===Co&&x.alphaToCoverage===!1,alphaMap:lt,alphaTest:pt,alphaHash:at,combine:x.combine,mapUv:At&&f(x.map.channel),aoMapUv:he&&f(x.aoMap.channel),lightMapUv:ae&&f(x.lightMap.channel),bumpMapUv:K&&f(x.bumpMap.channel),normalMapUv:Qt&&f(x.normalMap.channel),displacementMapUv:Xe&&f(x.displacementMap.channel),emissiveMapUv:ye&&f(x.emissiveMap.channel),metalnessMapUv:re&&f(x.metalnessMap.channel),roughnessMapUv:Fe&&f(x.roughnessMap.channel),anisotropyMapUv:Bt&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:X&&f(x.sheenRoughnessMap.channel),specularMapUv:tt&&f(x.specularMap.channel),specularColorMapUv:ct&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:j&&f(x.transmissionMap.channel),thicknessMapUv:Q&&f(x.thicknessMap.channel),alphaMapUv:lt&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Qt||He),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(At||lt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Qt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ut,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.filter(nt=>nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:At&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===ge,decodeVideoTextureEmissive:ye&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===ge,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bi,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:mt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&x.extensions.multiDraw===!0||_e)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(M,x),g(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let M=u[x.type],P;if(M){let C=ts[M];P=p_.clone(C.uniforms)}else P=x.uniforms;return P}function E(x,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new bw(s,M,x,i),c.push(P),h.set(M,P)),P}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function T(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:E,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:T}}function Aw(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Cw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function N_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function O_(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,p,g){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},s[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=o(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=p,v.group=g),t++,v}function l(u,f,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let E=a(u,f,m,_,p,g);m.transmission>0?n.push(E):m.transparent===!0?i.push(E):e.push(E)}function c(u,f,m,_,p,g){let v=a(u,f,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||Cw),n.length>1&&n.sort(f||N_),i.length>1&&i.sort(f||N_)}function d(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Rw(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new O_,s.set(n,[o])):i>=r.length?(o=new O_,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Pw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new Yt};break;case"SpotLight":e={position:new J,direction:new J,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[t.id]=e,e}}}function Iw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Lw=0;function Dw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Nw(s){let t=new Pw,e=Iw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);let i=new J,r=new Ie,o=new Ie;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,v=0,E=0,y=0,b=0,T=0,x=0,M=0,P=0,C=0;c.sort(Dw);for(let L=0,V=c.length;L<V;L++){let I=c[L],k=I.color,z=I.intensity,U=I.distance,q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===js?q=I.shadow.map.texture:q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*z,d+=k.g*z,u+=k.b*z;else if(I.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(I.sh.coefficients[F],z);C++}else if(I.isSunLight){let F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let A=I.shadow,Z=e.get(I);Z.shadowIntensity=A.intensity,Z.shadowBias=A.bias,Z.shadowNormalBias=A.normalBias,Z.shadowRadius=A.radius,Z.shadowMapSize.copy(A.mapSize).multiply(A.getFrameExtents()),n.sunShadow[m]=Z,n.sunShadowMap[m]=q;let ut=A.getViewportCount();for(let Mt=0;Mt<ut;Mt++)n.sunShadowMatrix[_+Mt]=A.getMatrix(Mt),n.sunShadowCascade[_+Mt]=A._cascadeData[Mt];_+=ut,m++}n.sun[f]=F,f++}else if(I.isDirectionalLight){let F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let A=I.shadow,Z=e.get(I);Z.shadowIntensity=A.intensity,Z.shadowBias=A.bias,Z.shadowNormalBias=A.normalBias,Z.shadowRadius=A.radius,Z.shadowMapSize=A.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=I.shadow.matrix,b++}n.directional[p]=F,p++}else if(I.isSpotLight){let F=t.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(k).multiplyScalar(z),F.distance=U,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,n.spot[v]=F;let A=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,A.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=A.matrix,I.castShadow){let Z=e.get(I);Z.shadowIntensity=A.intensity,Z.shadowBias=A.bias,Z.shadowNormalBias=A.normalBias,Z.shadowRadius=A.radius,Z.shadowMapSize=A.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=q,x++}v++}else if(I.isRectAreaLight){let F=t.get(I);F.color.copy(k).multiplyScalar(z),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=F,E++}else if(I.isPointLight){let F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){let A=I.shadow,Z=e.get(I);Z.shadowIntensity=A.intensity,Z.shadowBias=A.bias,Z.shadowNormalBias=A.normalBias,Z.shadowRadius=A.radius,Z.shadowMapSize=A.mapSize,Z.shadowCameraNear=A.camera.near,Z.shadowCameraFar=A.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=I.shadow.matrix,T++}n.point[g]=F,g++}else if(I.isHemisphereLight){let F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(z),F.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[y]=F,y++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==E||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==b||N.numPointShadows!==T||N.numSpotShadows!==x||N.numSpotMaps!==M||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=E,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.sunLength=f,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=E,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=b,N.numPointShadows=T,N.numSpotShadows=x,N.numSpotMaps=M,N.numLightProbes=C,n.version=Lw++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let y=c[v];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),u++}else if(y.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function U_(s){let t=new Nw(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ow(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new U_(s),t.set(i,[a])):r>=o.length?(a=new U_(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fw=`uniform sampler2D shadow_pass;
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
}`,Bw=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],zw=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],F_=new Ie,Ja=new J,Cd=new J;function kw(s,t,e){let n=new Zs,i=new se,r=new se,o=new Le,a=new Bc,l=new zc,c={},h=e.maxTextureSize,d={[Qs]:_n,[_n]:Qs,[bi]:bi},u=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Uw,fragmentShader:Fw}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new qs;m.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new In(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let g=this.type;this.render=function(T,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Ig&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ka);let P=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ir),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let V=g!==this.type;V&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=T.length;I<k;I++){let z=T[I],U=z.shadow;if(U===void 0){zt("WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let q=U.getFrameExtents();i.multiply(q),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,U.mapSize.y=r.y));let F=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=F,U.map===null||V===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ao){if(z.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ui(i.x,i.y,{format:js,type:Fi,minFilter:gn,magFilter:gn,generateMipmaps:!1}),U.map.texture.name=z.name+".shadowMap",U.map.depthTexture=new Ss(i.x,i.y,Ui),U.map.depthTexture.name=z.name+".shadowMapDepth",U.map.depthTexture.format=ys,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=hn,U.map.depthTexture.magFilter=hn}else z.isPointLight?(U.map=new Ka(i.x),U.map.depthTexture=new Ia(i.x,Oi)):(U.map=new ui(i.x,i.y),U.map.depthTexture=new Ss(i.x,i.y,Oi)),U.map.depthTexture.name=z.name+".shadowMap",U.map.depthTexture.format=ys,this.type===ka?(U.map.depthTexture.compareFunction=F?dd:fd,U.map.depthTexture.minFilter=gn,U.map.depthTexture.magFilter=gn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=hn,U.map.depthTexture.magFilter=hn);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let A=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();z.isPointLight!==!0&&U.updateMatrices(z,M);let Z=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:M.layers;for(let ut=0;ut<A;ut++){let Mt=U.getCamera(ut);if(z.isPointLight){let W=U.camera,rt=U.matrix,gt=z.distance||W.far;gt!==W.far&&(W.far=gt,W.updateProjectionMatrix()),Ja.setFromMatrixPosition(z.matrixWorld),W.position.copy(Ja),Cd.copy(W.position),Cd.add(Bw[ut]),W.up.copy(zw[ut]),W.lookAt(Cd),W.updateMatrixWorld(),rt.makeTranslation(-Ja.x,-Ja.y,-Ja.z),F_.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),U._frustum.setFromProjectionMatrix(F_,W.coordinateSystem,W.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,ut),s.clear();else{ut===0&&(s.setRenderTarget(U.map),s.clear());let W=U.getViewport(ut);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),L.viewport(o)}n=U.getFrustum(ut),y(x,M,Mt,z,Z,this.type)}U.isPointLightShadow!==!0&&this.type===Ao&&v(U,M),U.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(P,C,N)};function v(T,x){let M=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new ui(i.x,i.y,{format:js,type:Fi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(x,null,M,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(x,null,M,f,_,null)}function E(T,x,M,P){let C=null,N=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)C=N;else if(C=M.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=C.uuid,V=x.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let k=I[V];k===void 0&&(k=C.clone(),I[V]=k,x.addEventListener("dispose",b)),C=k}if(C.visible=x.visible,C.wireframe=x.wireframe,P===Ao?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=s.properties.get(C);L.light=M}return C}function y(T,x,M,P,C,N){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Ao)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let I=t.update(T),k=T.material;if(Array.isArray(k)){let z=I.groups;for(let U=0,q=z.length;U<q;U++){let F=z[U],A=k[F.materialIndex];if(A&&A.visible){let Z=E(T,A,P,N);T.onBeforeShadow(s,T,x,M,I,Z,F),s.renderBufferDirect(M,null,I,Z,T,F),T.onAfterShadow(s,T,x,M,I,Z,F)}}}else if(k.visible){let z=E(T,k,P,N);T.onBeforeShadow(s,T,x,M,I,z,null),s.renderBufferDirect(M,null,I,z,T,null),T.onAfterShadow(s,T,x,M,I,z,null)}}let V=T.children;for(let I=0,k=V.length;I<k;I++)y(V[I],x,M,P,C,N)}function b(T){T.target.removeEventListener("dispose",b);for(let M in c){let P=c[M],C=T.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function Vw(s,t){function e(){let D=!1,j=new Le,Q=null,dt=new Le(0,0,0,0);return{setMask:function(lt){Q!==lt&&!D&&(s.colorMask(lt,lt,lt,lt),Q=lt)},setLocked:function(lt){D=lt},setClear:function(lt,pt,at,mt,st){st===!0&&(lt*=mt,pt*=mt,at*=mt),j.set(lt,pt,at,mt),dt.equals(j)===!1&&(s.clearColor(lt,pt,at,mt),dt.copy(j))},reset:function(){D=!1,Q=null,dt.set(-1,0,0,0)}}}function n(){let D=!1,j=!1,Q=null,dt=null,lt=null;return{setReversed:function(pt){if(j!==pt){let at=t.get("EXT_clip_control");pt?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),j=pt;let mt=lt;lt=null,this.setClear(mt)}},getReversed:function(){return j},setTest:function(pt){pt?_t(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(pt){Q!==pt&&!D&&(s.depthMask(pt),Q=pt)},setFunc:function(pt){if(j&&(pt=u_[pt]),dt!==pt){switch(pt){case vc:s.depthFunc(s.NEVER);break;case yc:s.depthFunc(s.ALWAYS);break;case Sc:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case Mc:s.depthFunc(s.EQUAL);break;case bc:s.depthFunc(s.GEQUAL);break;case wc:s.depthFunc(s.GREATER);break;case Tc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=pt}},setLocked:function(pt){D=pt},setClear:function(pt){lt!==pt&&(lt=pt,j&&(pt=1-pt),s.clearDepth(pt))},reset:function(){D=!1,Q=null,dt=null,lt=null,j=!1}}}function i(){let D=!1,j=null,Q=null,dt=null,lt=null,pt=null,at=null,mt=null,st=null;return{setTest:function(et){D||(et?_t(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(et){j!==et&&!D&&(s.stencilMask(et),j=et)},setFunc:function(et,vt,nt){(Q!==et||dt!==vt||lt!==nt)&&(s.stencilFunc(et,vt,nt),Q=et,dt=vt,lt=nt)},setOp:function(et,vt,nt){(pt!==et||at!==vt||mt!==nt)&&(s.stencilOp(et,vt,nt),pt=et,at=vt,mt=nt)},setLocked:function(et){D=et},setClear:function(et){st!==et&&(s.clearStencil(et),st=et)},reset:function(){D=!1,j=null,Q=null,dt=null,lt=null,pt=null,at=null,mt=null,st=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,E=null,y=null,b=null,T=null,x=null,M=new Yt(0,0,0),P=0,C=!1,N=null,L=null,V=null,I=null,k=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,q=0,F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(F)[1]),U=q>=1):F.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),U=q>=2);let A=null,Z={},ut=s.getParameter(s.SCISSOR_BOX),Mt=s.getParameter(s.VIEWPORT),W=new Le().fromArray(ut),rt=new Le().fromArray(Mt);function gt(D,j,Q,dt){let lt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(D,pt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<Q;at++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(j+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return pt}let wt={};wt[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),wt[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),wt[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(s.DEPTH_TEST),o.setFunc(yo),K(!1),Qt(Wf),_t(s.CULL_FACE),he(Ir);function _t(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Nt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function _e(D,j){return u[D]!==j?(s.bindFramebuffer(D,j),u[D]=j,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=j),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=j),!0):!1}function At(D,j){let Q=m,dt=!1;if(D){Q=f.get(j),Q===void 0&&(Q=[],f.set(j,Q));let lt=D.textures;if(Q.length!==lt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,at=lt.length;pt<at;pt++)Q[pt]=s.COLOR_ATTACHMENT0+pt;Q.length=lt.length,dt=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,dt=!0);dt&&s.drawBuffers(Q)}function Wt(D){return _!==D?(s.useProgram(D),_=D,!0):!1}let Lt={[Lr]:s.FUNC_ADD,[Dg]:s.FUNC_SUBTRACT,[Ng]:s.FUNC_REVERSE_SUBTRACT};Lt[Og]=s.MIN,Lt[Ug]=s.MAX;let Ft={[Fg]:s.ZERO,[Bg]:s.ONE,[zg]:s.SRC_COLOR,[Zf]:s.SRC_ALPHA,[Xg]:s.SRC_ALPHA_SATURATE,[Hg]:s.DST_COLOR,[Vg]:s.DST_ALPHA,[kg]:s.ONE_MINUS_SRC_COLOR,[Jf]:s.ONE_MINUS_SRC_ALPHA,[Wg]:s.ONE_MINUS_DST_COLOR,[Gg]:s.ONE_MINUS_DST_ALPHA,[qg]:s.CONSTANT_COLOR,[Yg]:s.ONE_MINUS_CONSTANT_COLOR,[Zg]:s.CONSTANT_ALPHA,[Jg]:s.ONE_MINUS_CONSTANT_ALPHA};function he(D,j,Q,dt,lt,pt,at,mt,st,et){if(D===Ir){p===!0&&(Nt(s.BLEND),p=!1);return}if(p===!1&&(_t(s.BLEND),p=!0),D!==Lg){if(D!==g||et!==C){if((v!==Lr||b!==Lr)&&(s.blendEquation(s.FUNC_ADD),v=Lr,b=Lr),et)switch(D){case Co:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xf:s.blendFunc(s.ONE,s.ONE);break;case qf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Vt("WebGLState: Invalid blending: ",D);break}else switch(D){case Co:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case qf:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yf:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",D);break}E=null,y=null,T=null,x=null,M.set(0,0,0),P=0,g=D,C=et}return}lt=lt||j,pt=pt||Q,at=at||dt,(j!==v||lt!==b)&&(s.blendEquationSeparate(Lt[j],Lt[lt]),v=j,b=lt),(Q!==E||dt!==y||pt!==T||at!==x)&&(s.blendFuncSeparate(Ft[Q],Ft[dt],Ft[pt],Ft[at]),E=Q,y=dt,T=pt,x=at),(mt.equals(M)===!1||st!==P)&&(s.blendColor(mt.r,mt.g,mt.b,st),M.copy(mt),P=st),g=D,C=!1}function ae(D,j){D.side===bi?Nt(s.CULL_FACE):_t(s.CULL_FACE);let Q=D.side===_n;j&&(Q=!Q),K(Q),D.blending===Co&&D.transparent===!1?he(Ir):he(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let dt=D.stencilWrite;a.setTest(dt),dt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function K(D){N!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),N=D)}function Qt(D){D!==Rg?(_t(s.CULL_FACE),D!==L&&(D===Wf?s.cullFace(s.BACK):D===Pg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),L=D}function Xe(D){D!==V&&(U&&s.lineWidth(D),V=D)}function ye(D,j,Q){D?(_t(s.POLYGON_OFFSET_FILL),(I!==j||k!==Q)&&(I=j,k=Q,o.getReversed()&&(j=-j,Q=-Q),s.polygonOffset(j,Q))):Nt(s.POLYGON_OFFSET_FILL)}function re(D){D?_t(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function Fe(D){D===void 0&&(D=s.TEXTURE0+z-1),A!==D&&(s.activeTexture(D),A=D)}function He(D,j,Q){Q===void 0&&(A===null?Q=s.TEXTURE0+z-1:Q=A);let dt=Z[Q];dt===void 0&&(dt={type:void 0,texture:void 0},Z[Q]=dt),(dt.type!==D||dt.texture!==j)&&(A!==Q&&(s.activeTexture(Q),A=Q),s.bindTexture(D,j||wt[D]),dt.type=D,dt.texture=j)}function B(){let D=Z[A];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function fe(){try{s.compressedTexImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function le(){try{s.compressedTexImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function Gt(){try{s.texSubImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function ft(){try{s.texSubImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function Dt(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function Bt(){try{s.texStorage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function R(){try{s.texStorage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function S(){try{s.texImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function H(){try{s.texImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function ot(D){return d[D]!==void 0?d[D]:s.getParameter(D)}function it(D,j){d[D]!==j&&(s.pixelStorei(D,j),d[D]=j)}function ht(D){W.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),W.copy(D))}function xt(D){rt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),rt.copy(D))}function X(D,j){let Q=c.get(j);Q===void 0&&(Q=new WeakMap,c.set(j,Q));let dt=Q.get(D);dt===void 0&&(dt=s.getUniformBlockIndex(j,D.name),s.uniformBlockBinding(j,dt,dt),Q.set(D,dt))}function tt(D,j,Q){let lt=c.get(j).get(D);l[lt]!==Q&&(s.bindBufferBase(s.UNIFORM_BUFFER,lt,Q),l[lt]=Q)}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},A=null,Z={},u={},l={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,E=null,y=null,b=null,T=null,x=null,M=new Yt(0,0,0),P=0,C=!1,N=null,L=null,V=null,I=null,k=null,W.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:Nt,bindFramebuffer:_e,drawBuffers:At,useProgram:Wt,setBlending:he,setMaterial:ae,setFlipSided:K,setCullFace:Qt,setLineWidth:Xe,setPolygonOffset:ye,setScissorTest:re,activeTexture:Fe,bindTexture:He,unbindTexture:B,compressedTexImage2D:fe,compressedTexImage3D:le,texImage2D:S,texImage3D:H,pixelStorei:it,getParameter:ot,updateUBOMapping:X,uniformBlockBinding:tt,texStorage2D:Bt,texStorage3D:R,texSubImage2D:Gt,texSubImage3D:ft,compressedTexSubImage2D:ue,compressedTexSubImage3D:Dt,scissor:ht,viewport:xt,reset:ct}}function Gw(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,_=new FinalizationRegistry(R=>m.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):wa("canvas")}function v(R,S,H){let ot=1,it=Bt(R);if((it.width>H||it.height>H)&&(ot=H/Math.max(it.width,it.height)),ot<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ht=Math.floor(ot*it.width),xt=Math.floor(ot*it.height);u===void 0&&(u=g(ht,xt));let X=S?g(ht,xt):u;return X.width=ht,X.height=xt,X.getContext("2d").drawImage(R,0,0,ht,xt),zt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ht+"x"+xt+")."),X}else return"data"in R&&zt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function E(R){return R.generateMipmaps}function y(R){s.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(R,S,H,ot,it,ht=!1){if(R!==null){if(s[R]!==void 0)return s[R];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xt;ot&&(xt=t.get("EXT_texture_norm16"),xt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=S;if(S===s.RED&&(H===s.FLOAT&&(X=s.R32F),H===s.HALF_FLOAT&&(X=s.R16F),H===s.UNSIGNED_BYTE&&(X=s.R8),H===s.UNSIGNED_SHORT&&xt&&(X=xt.R16_EXT),H===s.SHORT&&xt&&(X=xt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(X=s.R8UI),H===s.UNSIGNED_SHORT&&(X=s.R16UI),H===s.UNSIGNED_INT&&(X=s.R32UI),H===s.BYTE&&(X=s.R8I),H===s.SHORT&&(X=s.R16I),H===s.INT&&(X=s.R32I)),S===s.RG&&(H===s.FLOAT&&(X=s.RG32F),H===s.HALF_FLOAT&&(X=s.RG16F),H===s.UNSIGNED_BYTE&&(X=s.RG8),H===s.UNSIGNED_SHORT&&xt&&(X=xt.RG16_EXT),H===s.SHORT&&xt&&(X=xt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(X=s.RG8UI),H===s.UNSIGNED_SHORT&&(X=s.RG16UI),H===s.UNSIGNED_INT&&(X=s.RG32UI),H===s.BYTE&&(X=s.RG8I),H===s.SHORT&&(X=s.RG16I),H===s.INT&&(X=s.RG32I)),S===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(X=s.RGB8UI),H===s.UNSIGNED_SHORT&&(X=s.RGB16UI),H===s.UNSIGNED_INT&&(X=s.RGB32UI),H===s.BYTE&&(X=s.RGB8I),H===s.SHORT&&(X=s.RGB16I),H===s.INT&&(X=s.RGB32I)),S===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),H===s.UNSIGNED_INT&&(X=s.RGBA32UI),H===s.BYTE&&(X=s.RGBA8I),H===s.SHORT&&(X=s.RGBA16I),H===s.INT&&(X=s.RGBA32I)),S===s.RGB&&(H===s.UNSIGNED_SHORT&&xt&&(X=xt.RGB16_EXT),H===s.SHORT&&xt&&(X=xt.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),S===s.RGBA){let tt=ht?ba:ne.getTransfer(it);H===s.FLOAT&&(X=s.RGBA32F),H===s.HALF_FLOAT&&(X=s.RGBA16F),H===s.UNSIGNED_BYTE&&(X=tt===ge?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&xt&&(X=xt.RGBA16_EXT),H===s.SHORT&&xt&&(X=xt.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(R,S){let H;return R?S===null||S===Oi||S===Nr?H=s.DEPTH24_STENCIL8:S===Ui?H=s.DEPTH32F_STENCIL8:S===Po&&(H=s.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Oi||S===Nr?H=s.DEPTH_COMPONENT24:S===Ui?H=s.DEPTH_COMPONENT32F:S===Po&&(H=s.DEPTH_COMPONENT16),H}function M(R,S){return E(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function P(R){let S=new WeakRef(R);n.get(R).__ref=S,m.add(S),_.register(R,S,S)}function C(R){let S=n.get(R).__ref;S!==void 0&&(m.delete(S),_.unregister(S))}function N(R){V(R.target)}function L(R){I(R.target)}function V(R){R.removeEventListener("dispose",N),C(R),z(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function I(R){R.removeEventListener("dispose",L),C(R),q(R)}function k(){for(let R of m){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):V(S))}m.clear(),d.clear()}function z(R){let S=n.get(R);if(S.__webglInit===void 0)return;let H=R.source,ot=f.get(H);if(ot){let it=ot[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&U(R),Object.keys(ot).length===0&&f.delete(H)}n.remove(R)}function U(R){let S=n.get(R);s.deleteTexture(S.__webglTexture);let H=R.source,ot=f.get(H);delete ot[S.__cacheKey],o.memory.textures--}function q(R){let S=n.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let H=R.depthTexture;if(H&&H.renderTarget===R&&V(H),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let ht=0;ht<S.__webglFramebuffer[it].length;ht++)s.deleteFramebuffer(S.__webglFramebuffer[it][ht]);else s.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)s.deleteFramebuffer(S.__webglFramebuffer[it]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ot=R.textures;for(let it=0,ht=ot.length;it<ht;it++){let xt=n.get(ot[it]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(ot[it])}n.remove(R)}let F=0;function A(){F=0}function Z(){return F}function ut(R){F=R}function Mt(){let R=F;return R>=i.maxTextures&&zt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,R}function W(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function rt(R,S){let H=n.get(R);if(R.isVideoTexture&&ue(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let ot=R.image;if(ot===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(H,R,S);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function gt(R,S){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ae(H,R,S);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function wt(R,S){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ae(H,R,S);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function _t(R,S){let H=n.get(R);if(R.version>0&&H.__version!==R.version){K(H,R,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}let Nt={[Ec]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[Ac]:s.MIRRORED_REPEAT},_e={[hn]:s.NEAREST,[Qg]:s.NEAREST_MIPMAP_NEAREST,[Va]:s.NEAREST_MIPMAP_LINEAR,[gn]:s.LINEAR,[eh]:s.LINEAR_MIPMAP_NEAREST,[Ni]:s.LINEAR_MIPMAP_LINEAR},At={[n_]:s.NEVER,[pd]:s.ALWAYS,[i_]:s.LESS,[fd]:s.LEQUAL,[s_]:s.EQUAL,[dd]:s.GEQUAL,[r_]:s.GREATER,[o_]:s.NOTEQUAL};function Wt(R,S){if(S.type===Ui&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===gn||S.magFilter===eh||S.magFilter===Va||S.magFilter===Ni||S.minFilter===gn||S.minFilter===eh||S.minFilter===Va||S.minFilter===Ni)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Nt[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Nt[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Nt[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,_e[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,_e[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,At[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==Va&&S.minFilter!==Ni||S.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Lt(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",N),P(S));let ot=S.source,it=f.get(ot);it===void 0&&(it={},f.set(ot,it));let ht=W(S);if(ht!==R.__cacheKey){it[ht]===void 0&&(it[ht]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),it[ht].usedTimes++;let xt=it[R.__cacheKey];xt!==void 0&&(it[R.__cacheKey].usedTimes--,xt.usedTimes===0&&U(S)),R.__cacheKey=ht,R.__webglTexture=it[ht].texture}return H}function Ft(R,S,H){return Math.floor(Math.floor(R/H)/S)}function he(R,S,H,ot){let ht=R.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,H,ot,S.data);else{ht.sort((D,j)=>D.start-j.start);let xt=0;for(let D=1;D<ht.length;D++){let j=ht[xt],Q=ht[D],dt=j.start+j.count,lt=Ft(Q.start,S.width,4),pt=Ft(j.start,S.width,4);Q.start<=dt+1&&lt===pt&&Ft(Q.start+Q.count-1,S.width,4)===lt?j.count=Math.max(j.count,Q.start+Q.count-j.start):(++xt,ht[xt]=Q)}ht.length=xt+1;let X=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let D=0,j=ht.length;D<j;D++){let Q=ht[D],dt=Math.floor(Q.start/4),lt=Math.ceil(Q.count/4),pt=dt%S.width,at=Math.floor(dt/S.width),mt=lt,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(s.UNPACK_SKIP_ROWS,at),e.texSubImage2D(s.TEXTURE_2D,0,pt,at,mt,st,H,ot,S.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,X),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function ae(R,S,H){let ot=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=s.TEXTURE_3D);let it=Lt(R,S),ht=S.source;e.bindTexture(ot,R.__webglTexture,s.TEXTURE0+H);let xt=n.get(ht);if(ht.version!==xt.__version||it===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let st=ne.getPrimaries(ne.workingColorSpace),et=S.colorSpace===zi?null:ne.getPrimaries(S.colorSpace),vt=S.colorSpace===zi||st===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=v(S.image,!1,i.maxTextureSize);tt=Dt(S,tt);let ct=r.convert(S.format,S.colorSpace),D=r.convert(S.type),j=T(S.internalFormat,ct,D,S.normalized,S.colorSpace,S.isVideoTexture);Wt(ot,S);let Q,dt=S.mipmaps,lt=S.isVideoTexture!==!0,pt=xt.__version===void 0||it===!0,at=ht.dataReady,mt=M(S,tt);if(S.isDepthTexture)j=x(S.format===Ms,S.type),pt&&(lt?e.texStorage2D(s.TEXTURE_2D,1,j,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,ct,D,null));else if(S.isDataTexture)if(dt.length>0){lt&&pt&&e.texStorage2D(s.TEXTURE_2D,mt,j,dt[0].width,dt[0].height);for(let st=0,et=dt.length;st<et;st++)Q=dt[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,Q.width,Q.height,ct,D,Q.data):e.texImage2D(s.TEXTURE_2D,st,j,Q.width,Q.height,0,ct,D,Q.data);S.generateMipmaps=!1}else lt?(pt&&e.texStorage2D(s.TEXTURE_2D,mt,j,tt.width,tt.height),at&&he(S,tt,ct,D)):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,ct,D,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){lt&&pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,j,dt[0].width,dt[0].height,tt.depth);for(let st=0,et=dt.length;st<et;st++)if(Q=dt[st],S.format!==Bi)if(ct!==null)if(lt){if(at)if(S.layerUpdates.size>0){let vt=Sd(Q.width,Q.height,S.format,S.type);for(let nt of S.layerUpdates){let Tt=Q.data.subarray(nt*vt/Q.data.BYTES_PER_ELEMENT,(nt+1)*vt/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,nt,Q.width,Q.height,1,ct,Tt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Q.width,Q.height,tt.depth,ct,Q.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,j,Q.width,Q.height,tt.depth,0,Q.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Q.width,Q.height,tt.depth,ct,D,Q.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,j,Q.width,Q.height,tt.depth,0,ct,D,Q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{lt&&pt&&e.texStorage2D(s.TEXTURE_2D,mt,j,dt[0].width,dt[0].height);for(let st=0,et=dt.length;st<et;st++)Q=dt[st],S.format!==Bi?ct!==null?lt?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,Q.width,Q.height,ct,Q.data):e.compressedTexImage2D(s.TEXTURE_2D,st,j,Q.width,Q.height,0,Q.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,Q.width,Q.height,ct,D,Q.data):e.texImage2D(s.TEXTURE_2D,st,j,Q.width,Q.height,0,ct,D,Q.data)}else if(S.isDataArrayTexture)if(lt){if(pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,j,tt.width,tt.height,tt.depth),at)if(S.layerUpdates.size>0){let st=Sd(tt.width,tt.height,S.format,S.type);for(let et of S.layerUpdates){let vt=tt.data.subarray(et*st/tt.data.BYTES_PER_ELEMENT,(et+1)*st/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,tt.width,tt.height,1,ct,D,vt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,D,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,j,tt.width,tt.height,tt.depth,0,ct,D,tt.data);else if(S.isData3DTexture)lt?(pt&&e.texStorage3D(s.TEXTURE_3D,mt,j,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,D,tt.data)):e.texImage3D(s.TEXTURE_3D,0,j,tt.width,tt.height,tt.depth,0,ct,D,tt.data);else if(S.isFramebufferTexture){if(pt)if(lt)e.texStorage2D(s.TEXTURE_2D,mt,j,tt.width,tt.height);else{let st=tt.width,et=tt.height;for(let vt=0;vt<mt;vt++)e.texImage2D(s.TEXTURE_2D,vt,j,st,et,0,ct,D,null),st>>=1,et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),tt.parentNode!==st){st.appendChild(tt),d.add(S),st.onpaint=et=>{let vt=et.changedElements;for(let nt of d)vt.includes(nt.image)&&(nt.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let vt=s.RGBA,nt=s.RGBA,Tt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,vt,nt,Tt,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(dt.length>0){if(lt&&pt){let st=Bt(dt[0]);e.texStorage2D(s.TEXTURE_2D,mt,j,st.width,st.height)}for(let st=0,et=dt.length;st<et;st++)Q=dt[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ct,D,Q):e.texImage2D(s.TEXTURE_2D,st,j,ct,D,Q);S.generateMipmaps=!1}else if(lt){if(pt){let st=Bt(tt);e.texStorage2D(s.TEXTURE_2D,mt,j,st.width,st.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,D,tt)}else e.texImage2D(s.TEXTURE_2D,0,j,ct,D,tt);E(S)&&S.mipmapsAutoUpdate===!0&&y(ot),xt.__version=ht.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function K(R,S,H){if(S.image.length!==6)return;let ot=Lt(R,S),it=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);let ht=n.get(it);if(it.version!==ht.__version||ot===!0){e.activeTexture(s.TEXTURE0+H);let xt=ne.getPrimaries(ne.workingColorSpace),X=S.colorSpace===zi?null:ne.getPrimaries(S.colorSpace),tt=S.colorSpace===zi||xt===X?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ct=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,j=[];for(let nt=0;nt<6;nt++)!ct&&!D?j[nt]=v(S.image[nt],!0,i.maxCubemapSize):j[nt]=D?S.image[nt].image:S.image[nt],j[nt]=Dt(S,j[nt]);let Q=j[0],dt=r.convert(S.format,S.colorSpace),lt=r.convert(S.type),pt=T(S.internalFormat,dt,lt,S.normalized,S.colorSpace),at=S.isVideoTexture!==!0,mt=ht.__version===void 0||ot===!0,st=it.dataReady,et=M(S,Q);Wt(s.TEXTURE_CUBE_MAP,S);let vt;if(S.isDepthTexture){if(pt=x(S.format===Ms,S.type),mt)if(at)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,pt,Q.width,Q.height);else for(let nt=0;nt<6;nt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,Q.width,Q.height,0,dt,lt,null)}else if(ct){at&&mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,pt,Q.width,Q.height);for(let nt=0;nt<6;nt++){vt=j[nt].mipmaps;for(let Tt=0;Tt<vt.length;Tt++){let jt=vt[Tt];S.format!==Bi?dt!==null?at?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,jt.width,jt.height,dt,jt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,pt,jt.width,jt.height,0,jt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,jt.width,jt.height,dt,lt,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,pt,jt.width,jt.height,0,dt,lt,jt.data)}}}else{if(vt=S.mipmaps,at&&mt){vt.length>0&&et++;let nt=Bt(j[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,pt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(D){at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,j[nt].width,j[nt].height,dt,lt,j[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,j[nt].width,j[nt].height,0,dt,lt,j[nt].data);for(let Tt=0;Tt<vt.length;Tt++){let Xt=vt[Tt].image[nt].image;at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,Xt.width,Xt.height,dt,lt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,pt,Xt.width,Xt.height,0,dt,lt,Xt.data)}}else{at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt,lt,j[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,dt,lt,j[nt]);for(let Tt=0;Tt<vt.length;Tt++){let jt=vt[Tt];at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,dt,lt,jt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,pt,dt,lt,jt.image[nt])}}}E(S)&&S.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ht.__version=it.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Qt(R,S,H,ot,it,ht){let xt=r.convert(H.format,H.colorSpace),X=r.convert(H.type),tt=T(H.internalFormat,xt,X,H.normalized,H.colorSpace),ct=n.get(S),D=n.get(H);if(D.__renderTarget=S,!ct.__hasExternalTextures){let j=Math.max(1,S.width>>ht),Q=Math.max(1,S.height>>ht);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,ht,tt,j,Q,S.depth,0,xt,X,null):e.texImage2D(it,ht,tt,j,Q,0,xt,X,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),ft(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,it,D.__webglTexture,0,Gt(S)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,it,D.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(R,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){let ot=S.depthTexture,it=ot&&ot.isDepthTexture?ot.type:null,ht=x(S.stencilBuffer,it),xt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ft(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(S),ht,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(S),ht,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ht,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,R)}else{let ot=S.textures;for(let it=0;it<ot.length;it++){let ht=ot[it],xt=r.convert(ht.format,ht.colorSpace),X=r.convert(ht.type),tt=T(ht.internalFormat,xt,X,ht.normalized,ht.colorSpace);ft(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(S),tt,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(S),tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,tt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(R,S,H){let ot=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(S.depthTexture);it.__renderTarget=S;let ht=ot?S.depthTexture.image[0]:S.depthTexture.image;(!it.__webglTexture||ht.width!==S.width||ht.height!==S.height)&&(ht.width=S.width,ht.height=S.height,S.depthTexture.needsUpdate=!0),ot?_t(S.depthTexture,0):rt(S.depthTexture,0);let xt=it.__webglTexture,X=Gt(S),tt=ot?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,ct=S.depthTexture.format===Ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ys)ft(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,tt,xt,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,ct,tt,xt,0);else if(S.depthTexture.format===Ms)ft(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,tt,xt,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,ct,tt,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(R){let S=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let ot=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ot){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ot.removeEventListener("dispose",it)};ot.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=ot}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let ot=0;ot<6;ot++)ye(S.__webglFramebuffer[ot],R,ot);else R.texture.mipmaps.length>0?ye(S.__webglFramebuffer[0],R,0):ye(S.__webglFramebuffer,R,0);else if(H){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]===void 0)S.__webglDepthbuffer[ot]=s.createRenderbuffer(),Xe(S.__webglDepthbuffer[ot],R,!1);else{let it=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer[ot];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ht)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Xe(S.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ht)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(R,S,H){let ot=n.get(R);S!==void 0&&Qt(ot.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&re(R)}function He(R){let S=R.texture,H=n.get(R),ot=n.get(S);R.addEventListener("dispose",L),P(R);let it=R.textures,ht=R.isWebGLCubeRenderTarget===!0,xt=it.length>1;if(xt||(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=S.version,o.memory.textures++),ht){H.__webglFramebuffer=[];for(let X=0;X<6;X++)if(S.mipmaps.length>0){H.__webglFramebuffer[X]=[];for(let tt=0;tt<S.mipmaps.length;tt++)H.__webglFramebuffer[X][tt]=s.createFramebuffer()}else H.__webglFramebuffer[X]=s.createFramebuffer()}else{if(S.mipmaps.length>0){H.__webglFramebuffer=[];for(let X=0;X<S.mipmaps.length;X++)H.__webglFramebuffer[X]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(xt)for(let X=0,tt=it.length;X<tt;X++){let ct=n.get(it[X]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&ft(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let X=0;X<it.length;X++){let tt=it[X];H.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[X]);let ct=r.convert(tt.format,tt.colorSpace),D=r.convert(tt.type),j=T(tt.internalFormat,ct,D,tt.normalized,tt.colorSpace,R.isXRRenderTarget===!0),Q=Gt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,j,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,H.__webglColorRenderbuffer[X])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,S);for(let X=0;X<6;X++)if(S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Qt(H.__webglFramebuffer[X][tt],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt);else Qt(H.__webglFramebuffer[X],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);E(S)?y(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(xt){for(let X=0,tt=it.length;X<tt;X++){let ct=it[X],D=n.get(ct),j=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,D.__webglTexture),Wt(j,ct),Qt(H.__webglFramebuffer,R,ct,s.COLOR_ATTACHMENT0+X,j,0),E(ct)&&y(j)}e.unbindTexture()}else{let X=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(X=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(X,ot.__webglTexture),Wt(X,S),S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Qt(H.__webglFramebuffer[tt],R,S,s.COLOR_ATTACHMENT0,X,tt);else Qt(H.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,X,0);E(S)?y(X):S.mipmaps.length>0&&s.texParameteri(X,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&re(R)}function B(R){let S=R.textures;for(let H=0,ot=S.length;H<ot;H++){let it=S[H];if(E(it)&&it.mipmapsAutoUpdate===!0){let ht=b(R),xt=n.get(it).__webglTexture;e.bindTexture(ht,xt),y(ht),e.unbindTexture()}}}let fe=[];function le(R){if(R.samples>0){if(ft(R)===!1){let S=R.textures,H=R.width,ot=R.height,it=s.COLOR_BUFFER_BIT,ht=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(R),X=S.length>1;if(X)for(let ct=0;ct<S.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),X){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ct]);let D=n.get(S[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,D,0)}s.blitFramebuffer(0,0,H,ot,0,0,H,ot,it,s.NEAREST),l===!0&&(fe.length=0,fe.push(s.COLOR_ATTACHMENT0+ct),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&fe.push(ht),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),X)for(let ct=0;ct<S.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ct]);let D=n.get(S[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,D,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Gt(R){return Math.min(i.maxSamples,R.samples)}function ft(R){let S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ue(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Dt(R,S){let H=R.colorSpace,ot=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Ma&&H!==zi&&(ne.getTransfer(H)===ge?(ot!==Bi||it!==jn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",H)),S}function Bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Mt,this.resetTextureUnits=A,this.getTextureUnits=Z,this.setTextureUnits=ut,this.setTexture2D=rt,this.setTexture2DArray=gt,this.setTexture3D=wt,this.setTextureCube=_t,this.rebindTextures=Fe,this.setupRenderTarget=He,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=ft,this.dispose=k}function Hw(s,t){function e(n,i=zi){let r,o=ne.getTransfer(i);if(n===jn)return s.UNSIGNED_BYTE;if(n===ih)return s.UNSIGNED_SHORT_4_4_4_4;if(n===sh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ad)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ld)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===rd)return s.BYTE;if(n===od)return s.SHORT;if(n===Po)return s.UNSIGNED_SHORT;if(n===nh)return s.INT;if(n===Oi)return s.UNSIGNED_INT;if(n===Ui)return s.FLOAT;if(n===Fi)return s.HALF_FLOAT;if(n===cd)return s.ALPHA;if(n===hd)return s.RGB;if(n===Bi)return s.RGBA;if(n===ys)return s.DEPTH_COMPONENT;if(n===Ms)return s.DEPTH_STENCIL;if(n===ud)return s.RED;if(n===rh)return s.RED_INTEGER;if(n===js)return s.RG;if(n===oh)return s.RG_INTEGER;if(n===ah)return s.RGBA_INTEGER;if(n===Ga||n===Ha||n===Wa||n===Xa)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lh||n===ch||n===hh||n===uh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ch)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fh||n===dh||n===ph||n===mh||n===gh||n===qa||n===_h)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fh||n===dh)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ph)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===mh)return r.COMPRESSED_R11_EAC;if(n===gh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qa)return r.COMPRESSED_RG11_EAC;if(n===_h)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xh||n===vh||n===yh||n===Sh||n===Mh||n===bh||n===wh||n===Th||n===Eh||n===Ah||n===Ch||n===Rh||n===Ph||n===Ih)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xh)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vh)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yh)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sh)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mh)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bh)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wh)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Th)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eh)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ah)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ch)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rh)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ph)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ih)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lh||n===Dh||n===Nh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lh)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oh||n===Uh||n===Ya||n===Fh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xw=`
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

}`,Od=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new La(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Qi({vertexShader:Ww,fragmentShader:Xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new In(new Pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ud=class extends $i{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new Od,g={},v=e.getContextAttributes(),E=null,y=null,b=[],T=[],x=new se,M=null,P=null,C=new Hn;C.viewport=new Le;let N=new Hn;N.viewport=new Le;let L=[C,N],V=new Kc,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let rt=b[W];return rt===void 0&&(rt=new wo,b[W]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(W){let rt=b[W];return rt===void 0&&(rt=new wo,b[W]=rt),rt.getGripSpace()},this.getHand=function(W){let rt=b[W];return rt===void 0&&(rt=new wo,b[W]=rt),rt.getHandSpace()};function z(W){let rt=T.indexOf(W.inputSource);if(rt===-1)return;let gt=b[rt];gt!==void 0&&(gt.update(W.inputSource,W.frame,c||o),gt.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",q);for(let W=0;W<b.length;W++){let rt=T[W];rt!==null&&(T[W]=null,b[W].disconnect(rt))}I=null,k=null,p.reset();for(let W in g)delete g[W];if(t.setRenderTarget(E),f=null,u=null,d=null,i=null,y=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),P!==null){let W=P.camera;W.fov=P.fov,W.zoom=P.zoom,W.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",U),i.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,wt=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=v.stencil?Ms:ys,wt=v.stencil?Nr:Oi);let Nt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Nt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ui(u.textureWidth,u.textureHeight,{format:Bi,type:jn,depthTexture:new Ss(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let gt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,gt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ui(f.framebufferWidth,f.framebufferHeight,{format:Bi,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Mt.setContext(i),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(W){for(let rt=0;rt<W.removed.length;rt++){let gt=W.removed[rt],wt=T.indexOf(gt);wt>=0&&(T[wt]=null,b[wt].disconnect(gt))}for(let rt=0;rt<W.added.length;rt++){let gt=W.added[rt],wt=T.indexOf(gt);if(wt===-1){for(let Nt=0;Nt<b.length;Nt++)if(Nt>=T.length){T.push(gt),wt=Nt;break}else if(T[Nt]===null){T[Nt]=gt,wt=Nt;break}if(wt===-1)break}let _t=b[wt];_t&&_t.connect(gt)}}function F(W,rt){rt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(rt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let rt=W.near,gt=W.far;p.texture!==null&&(p.depthNear>0&&(rt=p.depthNear),p.depthFar>0&&(gt=p.depthFar)),V.near=N.near=C.near=rt,V.far=N.far=C.far=gt,(I!==V.near||k!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,k=V.far),V.layers.mask=W.layers.mask|6,C.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let wt=W.parent,_t=V.cameras;F(V,wt);for(let Nt=0;Nt<_t.length;Nt++)F(_t[Nt],wt);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&W.isPerspectiveCamera&&(P={camera:W,fov:W.fov,zoom:W.zoom}),A(W,V,wt)};function A(W,rt,gt){gt===null?W.matrix.copy(rt.matrixWorld):(W.matrix.copy(gt.matrixWorld),W.matrix.invert(),W.matrix.multiply(rt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(rt.projectionMatrix),W.projectionMatrixInverse.copy(rt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Rc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(W){return g[W]};let Z=null;function ut(W,rt){if(h=rt.getViewerPose(c||o),m=rt,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let wt=!1;gt.length!==V.cameras.length&&(V.cameras.length=0,wt=!0);for(let At=0;At<gt.length;At++){let Wt=gt[At],Lt=null;if(f!==null)Lt=f.getViewport(Wt);else{let he=d.getViewSubImage(u,Wt);Lt=he.viewport,At===0&&(t.setRenderTargetTextures(y,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(y))}let Ft=L[At];Ft===void 0&&(Ft=new Hn,Ft.layers.enable(At),Ft.viewport=new Le,L[At]=Ft),Ft.matrix.fromArray(Wt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Wt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),At===0&&(V.matrix.copy(Ft.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),wt===!0&&V.cameras.push(Ft)}let _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let At=d.getDepthInformation(gt[0]);At&&At.isValid&&At.texture&&p.init(At,i.renderState)}if(_t&&_t.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let At=0;At<gt.length;At++){let Wt=gt[At].camera;if(Wt){let Lt=g[Wt];Lt||(Lt=new La,g[Wt]=Lt);let Ft=d.getCameraImage(Wt);Lt.sourceTexture=Ft}}}}for(let gt=0;gt<b.length;gt++){let wt=T[gt],_t=b[gt];wt!==null&&_t!==void 0&&_t.update(wt,rt,c||o)}Z&&Z(W,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let Mt=new B_;Mt.setAnimationLoop(ut),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}},qw=new Ie,Z_=new Ht;Z_.set(-1,0,0,0,1,0,0,0,1);function Yw(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,xd(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===_n&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===_n&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),E=v.envMap,y=v.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(qw.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Z_),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===_n&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zw(s,t,e,n){let i={},r={};function o(v,E){let y=E.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,E){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let b=E.program;n.updateUBOMapping(v,b);let T=t.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let E=s.createBuffer(),y=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,y,b),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(v){let E=i[v.id],y=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let T=0,x=y.length;T<x;T++){let M=y[T];if(Array.isArray(M))for(let P=0,C=M.length;P<C;P++)h(M[P],T,P,b);else h(M,T,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,E,y,b){if(u(v,E,y,b)===!0){let T=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let P=0;P<x.length;P++){let C=x[P],N=_(C,!0);d(C,v.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,v.__data)}}function d(v,E,y){typeof v=="number"||typeof v=="boolean"?E[y]=v:v.isMatrix3?(E[y]=v.elements[0],E[y+1]=v.elements[1],E[y+2]=v.elements[2],E[y+3]=0,E[y+4]=v.elements[3],E[y+5]=v.elements[4],E[y+6]=v.elements[5],E[y+7]=0,E[y+8]=v.elements[6],E[y+9]=v.elements[7],E[y+10]=v.elements[8],E[y+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-y),y):v.toArray(E,y)}function u(v,E,y,b){let T=v.value,x=E+"_"+y;if(Array.isArray(T)){b[x]===void 0&&(b[x]=[]);let M=b[x],P=!1;for(let C=0;C<T.length;C++)f(T[C],M,C)===!0&&(P=!0);return P}return f(T,b,x)}function f(v,E,y){if(E[y]===void 0)return typeof v=="number"||typeof v=="boolean"?E[y]=v:ArrayBuffer.isView(v)?E[y]=v.slice():E[y]=v.clone(),!0;{let b=E[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return E[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function m(v){let E=v.uniforms,y=0,b=16;for(let x=0,M=E.length;x<M;x++){let P=Array.isArray(E[x])?E[x]:[E[x]];for(let C=0,N=P.length;C<N;C++){let L=P[C],V=Array.isArray(L.value)?L.value:[L.value],I=Array.isArray(E[x])||Array.isArray(L.value),k=y;for(let U=0,q=V.length;U<q;U++){let F=V[U],A=_(F,I),Z=y%b,ut=Z%A.boundary,Mt=Z+ut;y+=ut,Mt!==0&&b-Mt<A.storage&&(y+=b-Mt),U===0&&(k=y),y+=A.storage}let z=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new z((y-k)/Float32Array.BYTES_PER_ELEMENT),L.__offset=k}}let T=y%b;return T>0&&(y+=b-T),v.__size=y,v.__cache={},this}function _(v,E){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let E=v.target;E.removeEventListener("dispose",p),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}var Jw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ji=null;function $w(){return ji===null&&(ji=new Nc(Jw,16,16,js,Fi),ji.name="DFG_LUT",ji.minFilter=gn,ji.magFilter=gn,ji.wrapS=Zi,ji.wrapT=Zi,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}var Vh=class{constructor(t={}){let{canvas:e=l_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=jn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,p=new Set([ah,oh,rh]),g=new Set([jn,Oi,Po,Nr,ih,sh]),v=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,T=null,x=[],M=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,L=null,V=null,I=null,k=null;this._outputColorSpace=Gn;let z=0,U=0,q=null,F=-1,A=null,Z=new Le,ut=new Le,Mt=null,W=new Yt(0),rt=0,gt=e.width,wt=e.height,_t=1,Nt=null,_e=null,At=new Le(0,0,gt,wt),Wt=new Le(0,0,gt,wt),Lt=!1,Ft=new Zs,he=new Oc,ae=!1,K=!1,Qt=new Ie,Xe=new J,ye=new Le,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function He(){return q===null?_t:1}let B=n;function fe(w,O){return e.getContext(w,O)}let le,Gt,ft,ue,Dt,Bt,R,S,H,ot,it,ht,xt,X,tt,ct,D,j,Q,dt,lt,pt,at;try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),B===null){let O="webgl2";if(B=fe(O,w),B===null)throw fe(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}mt()}catch(w){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),Vt("WebGLRenderer: "+w.message),w}function mt(){le=new ab(B),le.init(),lt=new Hw(B,le),Gt=new $M(B,le,t,lt),ft=new Vw(B,le),Gt.reversedDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),V=B.createFramebuffer(),I=B.createFramebuffer(),k=B.createFramebuffer(),ue=new hb(B),Dt=new Aw,Bt=new Gw(B,le,ft,Dt,Gt,lt,ue),R=new ob(C),S=new fy(B),pt=new ZM(B,S),H=new lb(B,S,ue,pt),ot=new fb(B,H,S,pt,ue),j=new ub(B,Gt,Bt),tt=new KM(Dt),it=new Ew(C,R,le,Gt,pt,tt),ht=new Yw(C,Dt),xt=new Rw,X=new Ow(le),D=new YM(C,R,ft,ot,m,l),ct=new kw(C,ot,Gt),at=new Zw(B,ue,Gt,ft),Q=new JM(B,le,ue),dt=new cb(B,le,ue),ue.programs=it.programs,C.capabilities=Gt,C.extensions=le,C.properties=Dt,C.renderLists=xt,C.shadowMap=ct,C.state=ft,C.info=ue}_!==jn&&(P=new pb(_,e.width,e.height,a,i,r));let st=new Ud(C,B);this.xr=st,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=le.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=le.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(gt,wt,!1))},this.getSize=function(w){return w.set(gt,wt)},this.setSize=function(w,O,$=!0){if(st.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=w,wt=O,e.width=Math.floor(w*_t),e.height=Math.floor(O*_t),$===!0&&(e.style.width=w+"px",e.style.height=O+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(gt*_t,wt*_t).floor()},this.setDrawingBufferSize=function(w,O,$){gt=w,wt=O,_t=$,e.width=Math.floor(w*$),e.height=Math.floor(O*$),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(_===jn){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Z)},this.getViewport=function(w){return w.copy(At)},this.setViewport=function(w,O,$,G){w.isVector4?At.set(w.x,w.y,w.z,w.w):At.set(w,O,$,G),ft.viewport(Z.copy(At).multiplyScalar(He()).round())},this.getScissor=function(w){return w.copy(Wt)},this.setScissor=function(w,O,$,G){w.isVector4?Wt.set(w.x,w.y,w.z,w.w):Wt.set(w,O,$,G),ft.scissor(ut.copy(Wt).multiplyScalar(He()).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(w){ft.setScissorTest(Lt=w)},this.setOpaqueSort=function(w){Nt=w},this.setTransparentSort=function(w){_e=w},this.getClearColor=function(w){return w.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,$=!0){let G=0;if(w){let Y=!1;if(q!==null){let St=q.texture.format;Y=p.has(St)}if(Y){let St=q.texture.type,Rt=g.has(St),yt=D.getClearColor(),Et=D.getClearAlpha(),Ot=yt.r,qt=yt.g,te=yt.b;Rt?(v[0]=Ot,v[1]=qt,v[2]=te,v[3]=Et,B.clearBufferuiv(B.COLOR,0,v)):(E[0]=Ot,E[1]=qt,E[2]=te,E[3]=Et,B.clearBufferiv(B.COLOR,0,E))}else G|=B.COLOR_BUFFER_BIT}O&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),D.dispose(),xt.dispose(),X.dispose(),Bt.dispose(),Dt.dispose(),R.dispose(),ot.dispose(),H.dispose(),pt.dispose(),at.dispose(),it.dispose(),st.dispose(),st.removeEventListener("sessionstart",Se),st.removeEventListener("sessionend",pe),Qe.stop()};function et(w){w.preventDefault(),gd("WebGLRenderer: Context Lost."),N=!0}function vt(){gd("WebGLRenderer: Context Restored."),N=!1;let w=ue.autoReset,O=ct.enabled,$=ct.autoUpdate,G=ct.needsUpdate,Y=ct.type;mt(),ue.autoReset=w,ct.enabled=O,ct.autoUpdate=$,ct.needsUpdate=G,ct.type=Y}function nt(w){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Tt(w){let O=w.target;O.removeEventListener("dispose",Tt),jt(O)}function jt(w){Xt(w),Dt.remove(w)}function Xt(w){let O=Dt.get(w).programs;O!==void 0&&(O.forEach(function($){it.releaseProgram($)}),w.isShaderMaterial&&it.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,$,G,Y,St){O===null&&(O=re);let Rt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,yt=di(w,O,$,G,Y);ft.setMaterial(G,Rt);let Et=$.index,Ot=1;if(G.wireframe===!0){if(Et=H.getWireframeAttribute($),Et===void 0)return;Ot=2}let qt=$.drawRange,te=$.attributes.position,Pt=qt.start*Ot,ee=(qt.start+qt.count)*Ot;St!==null&&(Pt=Math.max(Pt,St.start*Ot),ee=Math.min(ee,(St.start+St.count)*Ot)),Et!==null?(Pt=Math.max(Pt,0),ee=Math.min(ee,Et.count)):te!=null&&(Pt=Math.max(Pt,0),ee=Math.min(ee,te.count));let Ze=ee-Pt;if(Ze<0||Ze===1/0)return;pt.setup(Y,G,yt,$,Et);let Te,be=Q;if(Et!==null&&(Te=S.get(Et),be=dt,be.setIndex(Te)),Y.isMesh)G.wireframe===!0?(ft.setLineWidth(G.wireframeLinewidth*He()),be.setMode(B.LINES)):be.setMode(B.TRIANGLES);else if(Y.isLine){let vn=G.linewidth;vn===void 0&&(vn=1),ft.setLineWidth(vn*He()),Y.isLineSegments?be.setMode(B.LINES):Y.isLineLoop?be.setMode(B.LINE_LOOP):be.setMode(B.LINE_STRIP)}else Y.isPoints?be.setMode(B.POINTS):Y.isSprite&&be.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(le.get("WEBGL_multi_draw"))be.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let vn=Y._multiDrawStarts,It=Y._multiDrawCounts,Dn=Y._multiDrawCount,de=Et?S.get(Et).bytesPerElement:1,er=Dt.get(G).currentProgram.getUniforms();for(let yn=0;yn<Dn;yn++)er.setValue(B,"_gl_DrawID",yn),be.render(vn[yn]/de,It[yn])}else if(Y.isInstancedMesh)be.renderInstances(Pt,Ze,Y.count);else if($.isInstancedBufferGeometry){let vn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,It=Math.min($.instanceCount,vn);be.renderInstances(Pt,Ze,It)}else be.render(Pt,Ze)};function Ce(w,O,$,G){L!==null&&w.isNodeMaterial&&L.setObject(G,w),ae===!0&&tt.setState(w,$,!1),w.transparent===!0&&w.side===bi&&w.forceSinglePass===!1?(w.side=_n,w.needsUpdate=!0,ei(w,O,G),w.side=Qs,w.needsUpdate=!0,ei(w,O,G),w.side=bi):ei(w,O,G)}this.compile=function(w,O,$=null){$===null&&($=w),L!==null&&L.renderStart(w,O,$),T=X.get($),T.init(O),M.push(T),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),w!==$&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),K=this.localClippingEnabled,ae=tt.init(this.clippingPlanes,K),ae===!0&&tt.setGlobalState(this.clippingPlanes,O),L!==null&&ct.render(T.state.shadowsArray,$,O);let G=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let St=Y.material;if(St)if(Array.isArray(St))for(let Rt=0;Rt<St.length;Rt++){let yt=St[Rt];Ce(yt,$,O,Y),G.add(yt)}else Ce(St,$,O,Y),G.add(St)}),T=M.pop(),L!==null&&L.renderEnd(),G},this.compileAsync=function(w,O,$=null){let G=this.compile(w,O,$);return new Promise(Y=>{function St(){if(G.forEach(function(Rt){let Et=Dt.get(Rt).currentProgram;(Et===void 0||Et.isReady())&&G.delete(Rt)}),G.size===0){Y(w);return}setTimeout(St,10)}le.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let qe=null;function Re(w){qe&&qe(w)}function Se(){Qe.stop()}function pe(){Qe.start()}let Qe=new B_;Qe.setAnimationLoop(Re),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(w){qe=w,st.setAnimationLoop(w),w===null?Qe.stop():Qe.start()},st.addEventListener("sessionstart",Se),st.addEventListener("sessionend",pe),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(w,O);let $=st.enabled===!0&&st.isPresenting===!0,G=P!==null&&(q===null||$)&&P.begin(C,q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(O),O=st.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,O,q),T=X.get(w,M.length),T.init(O),T.state.textureUnits=Bt.getTextureUnits(),M.push(T),Qt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?he.setFromArrayCamera(O):Ft.setFromProjectionMatrix(Qt,Si,O.reversedDepth),K=this.localClippingEnabled,ae=tt.init(this.clippingPlanes,K),b=xt.get(w,x.length),b.init(),x.push(b),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Rt=C.xr.getDepthSensingMesh();Rt!==null&&Me(Rt,O,-1/0,C.sortObjects)}Me(w,O,0,C.sortObjects),b.finish(),L!==null&&L.updateLights(T.state.lightsArray),C.sortObjects===!0&&b.sort(Nt,_e),Fe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Fe&&D.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),ae===!0&&tt.beginShadows();let Y=T.state.shadowsArray;if(ct.render(Y,w,O),ae===!0&&tt.endShadows(),(G&&P.hasRenderPass())===!1){let Rt=b.opaque,yt=b.transmissive;if(T.setupLights(),O.isArrayCamera){let Et=O.cameras;if(yt.length>0)for(let Ot=0,qt=Et.length;Ot<qt;Ot++){let te=Et[Ot];ti(Rt,yt,w,te)}Fe&&D.render(w);for(let Ot=0,qt=Et.length;Ot<qt;Ot++){let te=Et[Ot];xn(b,w,te,te.viewport)}}else yt.length>0&&ti(Rt,yt,w,O),Fe&&D.render(w),xn(b,w,O)}q!==null&&U===0&&(Bt.updateMultisampleRenderTarget(q),Bt.updateRenderTargetMipmap(q)),G&&P.end(C),w.isScene===!0&&w.onAfterRender(C,w,O),pt.resetDefaultState(),F=-1,A=null,M.pop(),M.length>0?(T=M[M.length-1],Bt.setTextureUnits(T.state.textureUnits),ae===!0&&tt.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,L!==null&&L.renderEnd()};function Me(w,O,$,G){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){let Rt=O.isArrayCamera?he:Ft;if(!w.frustumCulled||w.intersectsFrustum(Rt)){G&&ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Qt);let yt=ot.update(w),Et=w.material;Et.visible&&b.push(w,yt,Et,$,ye.z,null,O)}}else if(w.isMesh||w.isLine||w.isPoints){let Rt=O.isArrayCamera?he:Ft;if(!w.frustumCulled||w.intersectsFrustum(Rt)){let yt=ot.update(w),Et=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ye.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),ye.copy(yt.boundingSphere.center)),ye.applyMatrix4(w.matrixWorld).applyMatrix4(Qt)),Array.isArray(Et)){let Ot=yt.groups;for(let qt=0,te=Ot.length;qt<te;qt++){let Pt=Ot[qt],ee=Et[Pt.materialIndex];ee&&ee.visible&&b.push(w,yt,ee,$,ye.z,Pt,O)}}else Et.visible&&b.push(w,yt,Et,$,ye.z,null,O)}}}let St=w.children;for(let Rt=0,yt=St.length;Rt<yt;Rt++)Me(St[Rt],O,$,G)}function xn(w,O,$,G){let{opaque:Y,transmissive:St,transparent:Rt}=w;T.setupLightsView($),ae===!0&&tt.setGlobalState(C.clippingPlanes,$),G&&ft.viewport(Z.copy(G)),Y.length>0&&Be(Y,O,$),St.length>0&&Be(St,O,$),Rt.length>0&&Be(Rt,O,$),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function ti(w,O,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Pt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new ui(1,1,{generateMipmaps:!0,type:Pt?Fi:jn,minFilter:Ni,samples:Math.max(4,Gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let St=T.state.transmissionRenderTarget[G.id],Rt=G.viewport||Z;St.setSize(Rt.z*C.transmissionResolutionScale,Rt.w*C.transmissionResolutionScale);let yt=C.getRenderTarget(),Et=C.getActiveCubeFace(),Ot=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(W),rt=C.getClearAlpha(),rt<1&&C.setClearColor(16777215,.5),C.clear(),Fe&&D.render($);let qt=C.toneMapping;C.toneMapping=wi;let te=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),ae===!0&&tt.setGlobalState(C.clippingPlanes,G),Be(w,$,G),Bt.updateMultisampleRenderTarget(St),Bt.updateRenderTargetMipmap(St),le.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ee=0,Ze=O.length;ee<Ze;ee++){let Te=O[ee],{object:be,geometry:vn,material:It,group:Dn}=Te;if(It.side===bi&&be.layers.test(G.layers)){let de=It.side;It.side=_n,It.needsUpdate=!0,Ye(be,$,G,vn,It,Dn),It.side=de,It.needsUpdate=!0,Pt=!0}}Pt===!0&&(Bt.updateMultisampleRenderTarget(St),Bt.updateRenderTargetMipmap(St))}C.setRenderTarget(yt,Et,Ot),C.setClearColor(W,rt),te!==void 0&&(G.viewport=te),C.toneMapping=qt}function Be(w,O,$){let G=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,St=w.length;Y<St;Y++){let Rt=w[Y],{object:yt,geometry:Et,group:Ot}=Rt,qt=Rt.material;qt.allowOverride===!0&&G!==null&&(qt=G),yt.layers.test($.layers)&&Ye(yt,O,$,Et,qt,Ot)}}function Ye(w,O,$,G,Y,St){L!==null&&Y.isNodeMaterial&&L.setObject(w,Y),w.onBeforeRender(C,O,$,G,Y,St),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(C,O,$,G,w,St),Y.transparent===!0&&Y.side===bi&&Y.forceSinglePass===!1?(Y.side=_n,Y.needsUpdate=!0,C.renderBufferDirect($,O,G,Y,w,St),Y.side=Qs,Y.needsUpdate=!0,C.renderBufferDirect($,O,G,Y,w,St),Y.side=bi):C.renderBufferDirect($,O,G,Y,w,St),w.onAfterRender(C,O,$,G,Y,St)}function je(w){let O=0;for(let $ of w)$.texture!==null&&O++;return O}function ei(w,O,$){O.isScene!==!0&&(O=re);let G=Dt.get(w),Y=T.state.lights,St=T.state.shadowsArray,Rt=Y.state.version,yt=it.getParameters(w,Y.state,St,O,$,T.state.lightProbeGridArray),Et=it.getProgramCacheKey(yt),Ot=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let qt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=R.get(w.envMap||G.environment,qt),G.envMapRotation=G.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ot===void 0&&(w.addEventListener("dispose",Tt),Ot=new Map,G.programs=Ot,G.programVariants=new Map);let te=Ot.get(Et);if(te!==void 0){if(G.currentProgram===te&&G.lightsStateVersion===Rt)return ze(w,yt),te}else yt.uniforms=it.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,$,yt),w.onBeforeCompile(yt,C),te=it.acquireProgram(yt,Et),Ot.set(Et,te),G.uniforms=yt.uniforms;let Pt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=tt.uniform),ze(w,yt),G.needsLights=il(w),G.lightsStateVersion=Rt,G.needsLights&&(Pt.ambientLightColor.value=Y.state.ambient,Pt.lightProbe.value=Y.state.probe,Pt.sunLights.value=Y.state.sun,Pt.sunLightShadows.value=Y.state.sunShadow,Pt.directionalLights.value=Y.state.directional,Pt.directionalLightShadows.value=Y.state.directionalShadow,Pt.spotLights.value=Y.state.spot,Pt.spotLightShadows.value=Y.state.spotShadow,Pt.rectAreaLights.value=Y.state.rectArea,Pt.ltc_1.value=Y.state.rectAreaLTC1,Pt.ltc_2.value=Y.state.rectAreaLTC2,Pt.pointLights.value=Y.state.point,Pt.pointLightShadows.value=Y.state.pointShadow,Pt.hemisphereLights.value=Y.state.hemi,Pt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Pt.sunShadowCascade.value=Y.state.sunShadowCascade,Pt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pt.spotLightMatrix.value=Y.state.spotLightMatrix,Pt.spotLightMap.value=Y.state.spotLightMap,Pt.pointShadowMatrix.value=Y.state.pointShadowMatrix),G.numLightProbeGrids=je(T.state.lightProbeGridArray),G.currentProgram=te,G.uniformsList=null,te}function Ur(w,O,$,G,Y){let St=Dt.get(w),Rt=St.currentProgram.id+","+G+","+Y,yt=St.programVariants.get(Rt);return yt===void 0?(yt=ei(w,O,$),St.programVariants.set(Rt,yt)):(St.currentProgram=yt,St.uniformsList=null,St.outputColorSpace=G,St.toneMapping=Y),yt}function tn(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Io.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function ze(w,O){let $=Dt.get(w);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function di(w,O,$,G,Y){O.isScene!==!0&&(O=re),Bt.resetTextureUnits();let St=O.fog,Rt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,yt=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ne.workingColorSpace,Et=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ot=R.get(G.envMap||Rt,Et),qt=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,te=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!$.morphAttributes.position,ee=!!$.morphAttributes.normal,Ze=!!$.morphAttributes.color,Te=wi;G.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Te=C.toneMapping);let be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,vn=be!==void 0?be.length:0,It=Dt.get(G),Dn=T.state.lights;if(ae===!0&&(K===!0||w!==A)){let De=w===A&&G.id===F;tt.setState(G,w,De)}let de=!1,er=!1;G.version===It.__version?It.needsLights&&It.lightsStateVersion!==Dn.state.version||Y.isBatchedMesh&&It.batching===!1||!Y.isBatchedMesh&&It.batching===!0||Y.isBatchedMesh&&It.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&It.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&It.instancing===!1||!Y.isInstancedMesh&&It.instancing===!0||Y.isSkinnedMesh&&It.skinning===!1||!Y.isSkinnedMesh&&It.skinning===!0||Y.isInstancedMesh&&It.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&It.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&It.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&It.instancingMorph===!1&&Y.morphTexture!==null||It.envMap!==Ot||G.fog===!0&&It.fog!==St||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==tt.numPlanes||It.numIntersection!==tt.numIntersection)||It.vertexAlphas!==qt||It.vertexTangents!==te||It.morphTargets!==Pt||It.morphNormals!==ee||It.morphColors!==Ze||It.morphTargetsCount!==vn||It.numLightProbeGrids!==je(T.state.lightProbeGridArray)?de=!0:(It.outputColorSpace!==yt||It.toneMapping!==Te)&&(er=!0):(de=!0,It.__version=G.version);let yn=It.currentProgram;(de===!0||er===!0)&&(yn=er===!0?Ur(G,O,Y,yt,Te):ei(G,O,Y),L&&G.isNodeMaterial&&L.onUpdateProgram(G,yn,It));let sl=!1,ws=!1,nr=!1,ce=yn.getUniforms(),un=It.uniforms;if(ft.useProgram(yn.program)&&(sl=!0,ws=!0,nr=!0),G.id!==F&&(F=G.id,ws=!0),sl||A!==w){ft.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ce.setValue(B,"projectionMatrix",w.projectionMatrix),ce.setValue(B,"viewMatrix",w.matrixWorldInverse);let on=ce.map.cameraPosition;on!==void 0&&on.setValue(B,Xe.setFromMatrixPosition(w.matrixWorld)),Gt.logarithmicDepthBuffer&&ce.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ce.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),A!==w&&(A=w,ws=!0,nr=!0)}if(It.needsLights&&(Dn.state.sunShadowMap.length>0&&ce.setValue(B,"sunShadowMap",Dn.state.sunShadowMap,Bt),Dn.state.directionalShadowMap.length>0&&ce.setValue(B,"directionalShadowMap",Dn.state.directionalShadowMap,Bt),Dn.state.spotShadowMap.length>0&&ce.setValue(B,"spotShadowMap",Dn.state.spotShadowMap,Bt),Dn.state.pointShadowMap.length>0&&ce.setValue(B,"pointShadowMap",Dn.state.pointShadowMap,Bt)),Y.isSkinnedMesh){ce.setOptional(B,Y,"bindMatrix"),ce.setOptional(B,Y,"bindMatrixInverse");let De=Y.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ce.setValue(B,"boneTexture",De.boneTexture,Bt))}Y.isBatchedMesh&&(ce.setOptional(B,Y,"batchingTexture"),ce.setValue(B,"batchingTexture",Y._matricesTexture,Bt),ce.setOptional(B,Y,"batchingIdTexture"),ce.setValue(B,"batchingIdTexture",Y._indirectTexture,Bt),ce.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ce.setValue(B,"batchingColorTexture",Y._colorsTexture,Bt));let Ei=$.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&j.update(Y,$,yn),(ws||It.receiveShadow!==Y.receiveShadow)&&(It.receiveShadow=Y.receiveShadow,ce.setValue(B,"receiveShadow",Y.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(un.envMapIntensity.value=O.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=$w()),ws){if(ce.setValue(B,"toneMappingExposure",C.toneMappingExposure),It.needsLights&&Oo(un,nr),St&&G.fog===!0&&ht.refreshFogUniforms(un,St),ht.refreshMaterialUniforms(un,G,_t,wt,T.state.transmissionRenderTarget[w.id]),It.needsLights&&It.numLightProbeGrids>0){let De=y,on=0;for(let ns of T.state.lightProbeGridArray)ns.texture!==null&&(De.textures[on]=ns.texture,De.min[on]=ns.boundingBox.min,De.max[on]=ns.boundingBox.max,De.resolution[on]=ns.resolution,on++);for(let ns in De)De[ns].length=on;un.probesSH.value=De.textures,un.probesMin.value=De.min,un.probesMax.value=De.max,un.probesResolution.value=De.resolution}Io.upload(B,tn(It),un,Bt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Io.upload(B,tn(It),un,Bt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ce.setValue(B,"center",Y.center),ce.setValue(B,"modelViewMatrix",Y.modelViewMatrix),ce.setValue(B,"normalMatrix",Y.normalMatrix),ce.setValue(B,"modelMatrix",Y.matrixWorld),G.uniformsGroups!==void 0){let De=G.uniformsGroups;for(let on=0,ns=De.length;on<ns;on++){let Hd=De[on];at.update(Hd,yn),at.bind(Hd,yn)}}return yn}function Oo(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function il(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,O,$){let G=Dt.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Dt.get(w.texture).__webglTexture=O,Dt.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let $=Dt.get(w);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,$=0){q=w,z=O,U=$;let G=null,Y=!1,St=!1;if(w){let yt=Dt.get(w);if(yt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(B.FRAMEBUFFER,yt.__webglFramebuffer),Z.copy(w.viewport),ut.copy(w.scissor),Mt=w.scissorTest,ft.viewport(Z),ft.scissor(ut),ft.setScissorTest(Mt),F=-1;return}else if(yt.__webglFramebuffer===void 0)Bt.setupRenderTarget(w);else if(yt.__hasExternalTextures)Bt.rebindTextures(w,Dt.get(w.texture).__webglTexture,Dt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let qt=w.depthTexture;if(yt.__boundDepthTexture!==qt){if(qt!==null&&Dt.has(qt)&&(w.width!==qt.image.width||w.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(w)}}let Et=w.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(St=!0);let Ot=Dt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ot[O])?G=Ot[O][$]:G=Ot[O],Y=!0):w.samples>0&&Bt.useMultisampledRTT(w)===!1?G=Dt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ot)?G=Ot[$]:G=Ot,Z.copy(w.viewport),ut.copy(w.scissor),Mt=w.scissorTest}else Z.copy(At).multiplyScalar(_t).floor(),ut.copy(Wt).multiplyScalar(_t).floor(),Mt=Lt;if($!==0&&(G=V),ft.bindFramebuffer(B.FRAMEBUFFER,G)&&ft.drawBuffers(w,G),ft.viewport(Z),ft.scissor(ut),ft.setScissorTest(Mt),Y){let yt=Dt.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,$)}else if(St){let yt=O;for(let Et=0;Et<w.textures.length;Et++){let Ot=Dt.get(w.textures[Et]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Et,Ot.__webglTexture,$,yt)}}else if(w!==null&&$!==0){let yt=Dt.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yt.__webglTexture,$)}F=-1};function bs(w){let O=Dt.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=Gt.textureFormatReadable(w.format),O.__typeReadable=Gt.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,$,G,Y,St,Rt,yt=0){if(!(w&&w.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt],Array.isArray(Et)&&(Et=Et[0])),Et){ft.bindFramebuffer(B.FRAMEBUFFER,Et);try{let Ot=w.textures[yt],qt=Ot.format,te=Ot.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+yt);let Pt=bs(Ot);if(Pt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-G&&$>=0&&$<=w.height-Y&&B.readPixels(O,$,G,Y,lt.convert(qt),lt.convert(te),St)}finally{let Ot=q!==null?Dt.get(q).__webglFramebuffer:null;ft.bindFramebuffer(B.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(w,O,$,G,Y,St,Rt,yt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt],Array.isArray(Et)&&(Et=Et[0])),Et)if(O>=0&&O<=w.width-G&&$>=0&&$<=w.height-Y){ft.bindFramebuffer(B.FRAMEBUFFER,Et);let Ot=w.textures[yt],qt=Ot.format,te=Ot.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+yt);let Pt=bs(Ot);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ee),B.bufferData(B.PIXEL_PACK_BUFFER,St.byteLength,B.STREAM_READ),B.readPixels(O,$,G,Y,lt.convert(qt),lt.convert(te),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ze=q!==null?Dt.get(q).__webglFramebuffer:null;ft.bindFramebuffer(B.FRAMEBUFFER,Ze);let Te=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await h_(B,Te,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ee),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,St),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ee),B.deleteSync(Te),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,$=0){let G=Math.pow(2,-$),Y=Math.floor(w.image.width*G),St=Math.floor(w.image.height*G),Rt=O!==null?O.x:0,yt=O!==null?O.y:0;Bt.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Rt,yt,Y,St),ft.unbindTexture()},this.copyTextureToTexture=function(w,O,$=null,G=null,Y=0,St=0){let Rt,yt,Et,Ot,qt,te,Pt,ee,Ze,Te=w.isCompressedTexture?w.mipmaps[St]:w.image;if($!==null)Rt=$.max.x-$.min.x,yt=$.max.y-$.min.y,Et=$.isBox3?$.max.z-$.min.z:1,Ot=$.min.x,qt=$.min.y,te=$.isBox3?$.min.z:0;else{let ce=Math.pow(2,-Y);Rt=Math.floor(Te.width*ce),yt=Math.floor(Te.height*ce),w.isDataArrayTexture?Et=Te.depth:w.isData3DTexture?Et=Math.floor(Te.depth*ce):Et=1,Ot=0,qt=0,te=0}G!==null?(Pt=G.x,ee=G.y,Ze=G.z):(Pt=0,ee=0,Ze=0);let be=lt.convert(O.format),vn=lt.convert(O.type),It;O.isData3DTexture?(Bt.setTexture3D(O,0),It=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Bt.setTexture2DArray(O,0),It=B.TEXTURE_2D_ARRAY):(Bt.setTexture2D(O,0),It=B.TEXTURE_2D),ft.activeTexture(B.TEXTURE0),ft.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),ft.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ft.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let Dn=ft.getParameter(B.UNPACK_ROW_LENGTH),de=ft.getParameter(B.UNPACK_IMAGE_HEIGHT),er=ft.getParameter(B.UNPACK_SKIP_PIXELS),yn=ft.getParameter(B.UNPACK_SKIP_ROWS),sl=ft.getParameter(B.UNPACK_SKIP_IMAGES);ft.pixelStorei(B.UNPACK_ROW_LENGTH,Te.width),ft.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Te.height),ft.pixelStorei(B.UNPACK_SKIP_PIXELS,Ot),ft.pixelStorei(B.UNPACK_SKIP_ROWS,qt),ft.pixelStorei(B.UNPACK_SKIP_IMAGES,te);let ws=w.isDataArrayTexture||w.isData3DTexture,nr=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let ce=Dt.get(w),un=Dt.get(O),Ei=Dt.get(ce.__renderTarget),De=Dt.get(un.__renderTarget);ft.bindFramebuffer(B.READ_FRAMEBUFFER,Ei.__webglFramebuffer),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let on=0;on<Et;on++)ws&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.get(w).__webglTexture,Y,te+on),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.get(O).__webglTexture,St,Ze+on)),B.blitFramebuffer(Ot,qt,Ot+Rt,qt+yt,Pt,ee,Pt+Rt,ee+yt,B.DEPTH_BUFFER_BIT,B.NEAREST);ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||Dt.has(w)){let ce=Dt.get(w),un=Dt.get(O);ft.bindFramebuffer(B.READ_FRAMEBUFFER,I),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,k);for(let Ei=0;Ei<Et;Ei++)ws?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ce.__webglTexture,Y,te+Ei):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ce.__webglTexture,Y),nr?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,un.__webglTexture,St,Ze+Ei):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,un.__webglTexture,St),Y!==0?B.blitFramebuffer(Ot,qt,Ot+Rt,qt+yt,Pt,ee,Pt+Rt,ee+yt,B.COLOR_BUFFER_BIT,B.NEAREST):nr?B.copyTexSubImage3D(It,St,Pt,ee,Ze+Ei,Ot,qt,Rt,yt):B.copyTexSubImage2D(It,St,Pt,ee,Ot,qt,Rt,yt);ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else nr?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(It,St,Pt,ee,Ze,Rt,yt,Et,be,vn,Te.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(It,St,Pt,ee,Ze,Rt,yt,Et,be,Te.data):B.texSubImage3D(It,St,Pt,ee,Ze,Rt,yt,Et,be,vn,Te):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,St,Pt,ee,Rt,yt,be,vn,Te.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,St,Pt,ee,Te.width,Te.height,be,Te.data):B.texSubImage2D(B.TEXTURE_2D,St,Pt,ee,Rt,yt,be,vn,Te);ft.pixelStorei(B.UNPACK_ROW_LENGTH,Dn),ft.pixelStorei(B.UNPACK_IMAGE_HEIGHT,de),ft.pixelStorei(B.UNPACK_SKIP_PIXELS,er),ft.pixelStorei(B.UNPACK_SKIP_ROWS,yn),ft.pixelStorei(B.UNPACK_SKIP_IMAGES,sl),St===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(It),ft.unbindTexture()},this.initRenderTarget=function(w){Dt.get(w).__webglFramebuffer===void 0&&Bt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Bt.setTextureCube(w,0):w.isData3DTexture?Bt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Bt.setTexture2DArray(w,0):Bt.setTexture2D(w,0),ft.unbindTexture()},this.resetState=function(){z=0,U=0,q=null,ft.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var ja=new J;function Ti(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;ja.copy(t),ja[n]=0,ja.normalize();let c=.5*o/(o+a),h=1-ja.angleTo(s)/l;return Math.sign(ja[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Wh=class s extends Ki{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new J,c=new J,h=new J(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,_=new J,p=.5/o;for(let g=0,v=0;g<d.length;g+=3,v+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/m)){case 0:_.set(1,0,0),f[v+0]=Ti(_,c,"z","y",r,n),f[v+1]=1-Ti(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[v+0]=1-Ti(_,c,"z","y",r,n),f[v+1]=1-Ti(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[v+0]=1-Ti(_,c,"x","z",r,t),f[v+1]=Ti(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[v+0]=1-Ti(_,c,"x","z",r,t),f[v+1]=1-Ti(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[v+0]=1-Ti(_,c,"x","y",r,t),f[v+1]=1-Ti(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[v+0]=Ti(_,c,"x","y",r,t),f[v+1]=1-Ti(_,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var Kw="THEIA",Qw=.34,J_=(s,t,e)=>s+(t-s)*e;function $_(s){let t=new Cr;t.add(new In(new Ki(60,60,60),new Rr({color:1710873,side:_n})));let e=(r,o,a,l,c)=>{let h=new In(new Pr(r,o),new Rr({color:new Yt(l).multiplyScalar(c),side:bi,toneMapped:!1}));h.position.set(...a),h.lookAt(0,0,0),t.add(h)};e(16,16,[0,18,3],"#ffffff",5),e(3,22,[-18,2,5],"#ffffff",9),e(9,12,[18,-2,-3],"#fff3e6",3.5),e(26,8,[0,-16,7],"#ffffff",1.4),e(6,6,[11,7,-17],"#ffffff",5),e(30,14,[0,3,22],"#ffffff",.5);let n=new Lo(s),i=n.fromScene(t,.03).texture;return n.dispose(),i}function K_(s){s.add(new za(16777215,1.9));let t=new Ba(16777215,1.1);t.position.set(-3,5,6),s.add(t)}var No=3,zd=2,jw=.13,Fd=null;function tT(s){if(Fd)return Fd;let t=new Wh(1,1,1,s?4:7,.13),e=t.attributes.position.array,n=t.attributes.normal.array,i=t.attributes.uv.array,r=e.length/3/6;for(let o=0;o<e.length/3;o++){let a=Math.floor(o/r),l=a%No,c=Math.floor(a/No);i[o*2]=(l+i[o*2])/No,i[o*2+1]=(zd-1-c+i[o*2+1])/zd;let h=a>>1;for(let u=0;u<3;u++)u!==h&&(n[o*3+u]+=e[o*3+u]*jw*2);let d=Math.hypot(n[o*3],n[o*3+1],n[o*3+2]);n[o*3]/=d,n[o*3+1]/=d,n[o*3+2]/=d}return t.clearGroups(),Fd=t}var eT={1:[[0,0]],2:[[-1,-1],[1,1]],3:[[-1,-1],[0,0],[1,1]],4:[[-1,-1],[1,-1],[-1,1],[1,1]],5:[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],6:[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]},nT=(s,t)=>t%2?[4,3,2,5,s,6]:[3,4,5,2,s,6];function Bd(s,t,e,n){let i=document.createElement("canvas"),r=i.getContext("2d");i.width=t*No,i.height=t*zd,r.fillStyle=e,r.fillRect(0,0,i.width,i.height),r.fillStyle=n,s.forEach((a,l)=>{let c=l%No*t,h=Math.floor(l/No)*t;if(typeof a=="number"){for(let[_,p]of eT[a])r.beginPath(),r.arc(c+t*(.5+_*.215),h+t*(.5+p*.215),t*(a===1?.125:.078),0,Math.PI*2),r.fill();return}let d=_=>{r.font=`900 ${_}px Anybody, "Arial Black", sans-serif`,"fontStretch"in r&&(r.fontStretch="expanded")};d(t);let u=r.measureText(a),f=t*(t*.5)/(u.actualBoundingBoxAscent||t*.7);d(f),u=r.measureText(a);let m=u.actualBoundingBoxLeft+u.actualBoundingBoxRight;m>t*.6&&(f*=t*.6/m,d(f),u=r.measureText(a)),r.textBaseline="alphabetic",r.fillText(a,c+t/2-(u.actualBoundingBoxRight-u.actualBoundingBoxLeft)/2,h+t/2+u.actualBoundingBoxAscent/2)});let o=new Pa(i);return o.minFilter=Ni,o.magFilter=gn,o}function Q_(s,t){s.transmission=Math.max(.001,1-t),s.roughness=J_(.05,.24,t),s.envMapIntensity=J_(1.15,.45,t)}function j_(s,{light:t=!1,aniso:e=1,accent:n="#ff4b1f",paper:i="#e8e9e4",face:r=Kw[s]}={}){let o=t?256:512,a=nT(r,s),l="#"+new Yt(n).multiplyScalar(Qw).getHexString(),c=Bd(a,o,n,"#000"),h=Bd(a,o,"#fff","#000"),d=Bd(a,o,l,i);c.colorSpace=d.colorSpace=Gn,h.colorSpace=zi,c.anisotropy=d.anisotropy=h.anisotropy=e;let u=new Da({map:c,metalness:0,roughness:.05,ior:1.5,thickness:.7,dispersion:4,transmission:1,transmissionMap:h,emissive:16777215,emissiveMap:d,emissiveIntensity:1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.15,specularIntensity:1});return{mesh:new In(tT(t),u),mat:u}}var t0=18,i0=6,e0=Math.PI*2,n0=1.44,kd=(s,t,e)=>Math.min(e,Math.max(t,s)),iT={1:[0,0],6:[0,Math.PI],3:[0,-Math.PI/2],4:[0,Math.PI/2],5:[Math.PI/2,0],2:[-Math.PI/2,0]},sT=[[.3,-.42,.02],[.27,.33,-.03],[.31,-.24,.02],[.28,.4,.03],[.3,-.36,-.02],[.29,.26,.02]],rT=s=>s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375;function oT(s,t=!1){if(s<1)return[];let e=kd(s<2?1:Math.max(2,Math.ceil(s/6)),1,i0),n=Math.min(s,e*6),i=Array.from({length:e},(r,o)=>Math.floor(n/e)+(o<n%e?1:0));if(t)for(let r=0;r<12;r++){let o=Math.floor(Math.random()*e),a=Math.floor(Math.random()*e);o!==a&&i[o]<6&&i[a]>1&&(i[o]++,i[a]--)}return i}function s0(s,{light:t=!1,still:e=!1}={}){if(!s)return null;let n=document.createElement("canvas"),i;try{i=new Vh({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return null}i.setClearColor(0,0),i.toneMapping=wi;let r=new Cr,o=new Hn(t0,1,.1,80);r.environment=$_(i),K_(r);let a=getComputedStyle(document.documentElement),l=j_(0,{light:t,face:1,aniso:i.capabilities.getMaxAnisotropy(),accent:a.getPropertyValue("--accent").trim(),paper:a.getPropertyValue("--paper").trim()});Q_(l.mat,1);let c=Array.from({length:i0},(z,U)=>{let q=U?new In(l.mesh.geometry,l.mat):l.mesh;return q.visible=!1,r.add(q),{mesh:q,to:new Pn,from:new Pn,axis:new J(1,0,0),x:0,y:0,t0:0,dur:0,kind:"",turns:0}}),h=document.createElement("button");h.type="button",h.className="bill-roll",h.hidden=!0,h.setAttribute("aria-label","Throw the dice again"),s.append(n,h);let d=0,u=0,f=60,m=1,_=0,p=[],g=0,v=0,E=!0,y=!0,b=!0,T=!1,x=new Di,M=new Pn,P=new Pn,C=new J,N=new Pn;function L(){let z=d/2/f-kd(d/f*.11,1.15,1.9),U=-m/2+.2;for(let q=0;q<_;q++){let F=c[q],[A,Z]=iT[p[q]],[ut,Mt,W]=sT[q];F.to.setFromEuler(x.set(ut,Mt,W)).multiply(M.setFromEuler(x.set(A,Z,0)));let rt=0;for(let gt=0;gt<8;gt++)rt=Math.min(rt,C.set(gt&1?.44:-.44,gt&2?.44:-.44,gt&4?.44:-.44).applyQuaternion(F.to).y);F.x=z-(_-1-q)*n0,F.y=U-rt}if(_){let q=(c[0].x+c[_-1].x)/2,F=d/2+q*f,A=2*Math.max(F,d-F);o.position.x=q,o.aspect=A/u,o.setViewOffset(A,u,A/2-F,0,d,u);let Z=(c[0].x-.8+d/2/f)*f;Object.assign(h.style,{left:Z+"px",width:((_-1)*n0+1.6)*f+"px",bottom:"0px",height:f*1.5+"px"})}h.hidden=!_||e}function V(){let z=Math.round(s.clientWidth),U=Math.round(s.clientHeight);!z||!U||(d=z,u=U,f=kd(d*.072,46,92),m=u/f,s.style.setProperty("--die",f.toFixed(1)+"px"),i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.setSize(d,u,!1),o.position.z=m/(2*Math.tan(t0*Math.PI/360)),L(),b=!0)}new IntersectionObserver(z=>{E=z[0].isIntersecting,b=!0}).observe(s);function I(z,U=!1){let q=oT(z,U),F=q.length!==_;for(let A=0;A<q.length;A++)c[A].from.copy(F?N:c[A].to);_=q.length,p=q,g=z,s.dataset.faces=q.join("+"),L(),c.forEach((A,Z)=>{if(A.mesh.visible=!1,Z>=_){A.kind="";return}A.kind=e?"":F?"drop":"hop",A.t0=v+Z*(F?.14:.07),A.dur=F?1.3:1,A.turns=F?1+Z%2*.5:1,A.axis.set(.8+Math.random()*.4,(Math.random()-.5)*.9,(Math.random()-.5)*.7).normalize()}),T=!e,b=!0}function k(z){if(!y||!d||(v+=z,!E||!T&&!b))return;b=!1;let U=!1;for(let q=0;q<_;q++){let F=c[q],A=F.mesh,Z=F.x,ut=F.y;if(A.quaternion.copy(F.to),F.kind){let Mt=(v-F.t0)/F.dur;if(Mt>=1)F.kind="";else{if(U=!0,Mt<0){A.visible=F.kind==="hop",A.visible&&A.quaternion.copy(F.from),A.position.set(Z,ut,0);continue}if(F.kind==="drop"){let W=rT(Mt),rt=1-Math.pow(1-Math.min(1,Mt/.72),3);ut+=(m/2+1.3-F.y)*(1-W),Z+=1.1*(1-rt),A.quaternion.multiply(P.setFromAxisAngle(F.axis,F.turns*e0*(1-rt)))}else{let W=Math.min(1,Mt/.62),rt=W*W*(3-2*W);ut+=W<1?Math.sin(Math.PI*W)*1.35:Math.sin(Math.PI*(Mt-.62)/.38)*.16,M.copy(F.to).invert().multiply(F.from).slerp(N,rt),A.quaternion.multiply(M).multiply(P.setFromAxisAngle(F.axis,F.turns*e0*(1-rt)))}}}A.visible=!0,A.position.set(Z,ut,0)}T=U,i.render(r,o)}return h.addEventListener("click",()=>{!T&&g&&I(g,!0)}),n.addEventListener("webglcontextlost",z=>{z.preventDefault(),y=!1,n.remove(),h.remove()}),{layout:V,frame:k,show:I,get faces(){return p.slice()},get busy(){return T}}}var r0=eg();sg();ng();var aT=ds("section[data-theme]");Ee.ticker.add(()=>{for(let s of aT){if(s.hidden)continue;let t=s.getBoundingClientRect();if(t.top<=36&&t.bottom>36){document.body.dataset.theme!==s.dataset.theme&&(document.body.dataset.theme=s.dataset.theme);return}}});var Xh=6,Zh=ds(".wall"),lT=Zh.map(s=>mn(".wall-grid",s)),tr=ds(".show"),qh=s=>String(s).padStart(2,"0"),cT=()=>{let s=tr.filter(e=>!e.hidden);Zh.forEach((e,n)=>{let i=s.slice(n*Xh,(n+1)*Xh);e.hidden=!i.length,i.length&&(lT[n].append(...i),e.dataset.theme=n%2?"paper":"ink",mn("[data-from]",e).textContent=qh(n*Xh+1),mn("[data-to]",e).textContent=qh(n*Xh+i.length))}),s.forEach((e,n)=>{mn("[data-no]",e).textContent=qh(n+1)}),ds("[data-of]").forEach(e=>{e.textContent=qh(s.length)});let t=mn("[data-shows]");t&&(t.textContent=s.length)},hT=()=>ds(".show-name").forEach(s=>{s.style.fontSize="",s.scrollWidth>s.clientWidth+1&&(s.style.fontSize=(parseFloat(getComputedStyle(s).fontSize)*s.clientWidth/s.scrollWidth*.98).toFixed(1)+"px")}),es=mn(".bill-sign"),nl=mn("[data-dice]"),ki=es&&nl?s0(nl,{light:!df,still:Qn}):null;!ki&&nl&&nl.remove();var Vd=()=>{if(!ki)return;let s=Math.max(14,es.offsetWidth*.022);Object.assign(nl.style,{left:es.offsetLeft+"px",width:es.offsetWidth+"px",top:"0px",height:es.offsetTop+s+"px"}),ki.layout()};ki&&Ee.ticker.add((s,t)=>ki.frame(Math.min(Math.max(t,1)/1e3,.05)));var Gd=()=>tr.filter(s=>!s.hidden).length,l0=()=>{hT(),ds("[data-bulbs]").forEach(rg),Vd()};l0();kt.addEventListener("refresh",l0);document.fonts.ready.then(()=>kt.refresh());window.addEventListener("load",()=>kt.refresh());var tl=null,el=!1,Yh=s=>{tl!==s&&(tl&&tl.classList.remove("is-lit"),tl=s,s&&s.classList.add("is-lit"))},c0=()=>{if(el||document.hidden)return;let s=tr.filter(t=>!t.hidden&&t.closest(".wall").classList.contains("is-on"));Yh(s.length?s[(s.indexOf(tl)+1)%s.length]:null)};Qn?tr.forEach(s=>s.classList.add("is-lit")):(setInterval(c0,2400),tr.forEach(s=>{let t=mn(".show-link",s);df&&(s.addEventListener("pointerenter",()=>{el=!0,Yh(s)}),s.addEventListener("pointerleave",()=>{el=!1})),t.addEventListener("focus",()=>{t.matches(":focus-visible")&&(el=!0,Yh(s))}),t.addEventListener("blur",()=>{el=!1})}));Zh.forEach(s=>{kt.create({trigger:s,start:"top 60%",end:"bottom 40%",toggleClass:{targets:s,className:"is-on"},onToggle:t=>{!Qn&&t.isActive&&Ee.delayedCall(.5,c0)}}),!Qn&&kt.create({trigger:s,start:"top 92%",once:!0,onEnter:()=>{Ee.from(ds(".show:not([hidden])",s),{y:64,opacity:0,duration:1.1,ease:"expo.out",stagger:.07,clearProps:"transform,opacity"}),Ee.from(mn(".wall-top",s),{opacity:0,duration:.8,delay:.2})}})});var o0=ds("[data-filter]");o0.forEach(s=>s.addEventListener("click",()=>{o0.forEach(r=>r.setAttribute("aria-pressed",String(r===s)));let[t,e]=s.dataset.filter.split(":");tr.forEach(r=>{r.hidden=!(t==="*"||(t==="cat"?r.dataset.cat:r.dataset.rel)===e)}),Qn||Yh(null),cT(),ki&&ki.show(Gd()),kt.refresh();let n=tr.filter(r=>!r.hidden);Qn||(Ee.killTweensOf(tr),Ee.fromTo(n,{y:26,opacity:0},{y:0,opacity:1,duration:.8,ease:"expo.out",stagger:.05,clearProps:"transform,opacity"})),s.scrollIntoView({block:"nearest",inline:"center",behavior:Qn?"auto":"smooth"});let i=Zh.find(r=>!r.hidden);i&&Ee.delayedCall(.25,()=>r0?r0.scrollTo(i,{duration:1.1}):i.scrollIntoView({behavior:Qn?"auto":"smooth"}))}));var a0=mn(".bill-end-line");pf(a0,{scrollTrigger:{trigger:a0,start:"top 88%"}});ig(document.fonts.load("900 100px Anybody").catch(()=>{}),()=>{if(Qn){es&&es.classList.add("is-lit"),ki&&(Vd(),ki.show(Gd()));return}ki&&Ee.delayedCall(1.15,()=>{Vd(),ki.show(Gd())}),es&&(Ee.from(es,{y:30,opacity:0,duration:1.1,ease:"expo.out",delay:.3,clearProps:"transform,opacity"}),Ee.delayedCall(.75,()=>es.classList.add("is-lit"))),pf(mn(".bill-line"),{delay:.7}),Ee.from(".bill-side > *",{y:22,opacity:0,duration:1,ease:"expo.out",stagger:.09,delay:1}),Ee.from(".nav > *",{y:-18,opacity:0,duration:.9,ease:"expo.out",stagger:.08,delay:.7,clearProps:"transform,opacity"})});})();
