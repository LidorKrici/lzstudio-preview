(()=>{var c0=Object.defineProperty;var h0=(s,t,e)=>t in s?c0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Ot=(s,t,e)=>h0(s,typeof t!="symbol"?t+"":t,e);function rs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ep(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qo={duration:.5,overwrite:!1,delay:0},mu,mn,Ie,mi=1e8,ye=1/mi,au=Math.PI*2,u0=au/4,f0=0,np=Math.sqrt,d0=Math.cos,p0=Math.sin,en=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},as=function(t){return typeof t=="number"},Ml=function(t){return typeof t>"u"},Xi=function(t){return typeof t=="object"},$n=function(t){return t!==!1},gu=function(){return typeof window<"u"},ul=function(t){return ze(t)||en(t)},ip=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,m0=/random\([^)]+\)/g,g0=/,\s*/g,Yd=/(?:-?\.?\d|\.)+/gi,_u=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ar=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xu=/[+-]=-?[.\d]+/,_0=/[^,'"\[\]\s]+/gi,x0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ne,Hi,lu,vu,ei={},ml={},sp,rp=function(t){return(ml=zr(t,ei))&&wn},bl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Yo=function(t,e){return!e&&console.warn(t)},op=function(t,e){return t&&(ei[t]=e)&&ml&&(ml[t]=e)||ei},$o=function(){return 0},v0={suppressEvents:!0,isStart:!0,kill:!1},fl={suppressEvents:!0,kill:!1},y0={suppressEvents:!0},yu={},Cs=[],cu={},ap,qn={},eu={},$d=30,dl=[],Su="",Mu=function(t){var e=t[0],n,i;if(Xi(e)||ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=dl.length;i--&&!dl[i].targetTest(e););n=dl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Eu(t[i],n)))||t.splice(i,1);return t},Ps=function(t){return t._gsap||Mu(gi(t))[0]._gsap},bu=function(t,e,n){return(n=t[e])&&ze(n)?t[e]():Ml(n)&&t.getAttribute&&t.getAttribute(e)||n},Fn=function(t,e){return(t=t.split(",")).forEach(e)||t},ke=function(t){return Math.round(t*1e5)/1e5||0},De=function(t){return Math.round(t*1e7)/1e7||0},lr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},S0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},gl=function(){var t=Cs.length,e=Cs.slice(0),n,i;for(cu={},Cs.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Tu=function(t){return!!(t._initted||t._startAt||t.add)},lp=function(t,e,n,i){Cs.length&&!mn&&gl(),t.render(e,n,i||!!(mn&&e<0&&Tu(t))),Cs.length&&!mn&&gl()},cp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(_0).length<2?e:en(t)?t.trim():t},hp=function(t){return t},ni=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},M0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},zr=function(t,e){for(var n in e)t[n]=e[n];return t},Zd=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Xi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},_l=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ho=function(t){var e=t.parent||Ne,n=t.keyframes?M0(Tn(t.keyframes)):ni;if($n(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},b0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},up=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Tl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Is=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},sr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},T0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},hu=function(t,e,n,i){return t._startAt&&(mn?t._startAt.revert(fl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},w0=function s(t){return!t||t._ts&&s(t.parent)},Jd=function(t){return t._repeat?kr(t._tTime,t=t.duration()+t._rDelay)*t:0},kr=function(t,e){var n=Math.floor(t=De(t/e));return t&&n===t?n-1:n},xl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},wl=function(t){return t._end=De(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},El=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=De(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),wl(t),n._dirty||sr(n,t)),t},fp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=xl(t.rawTime(),e),(!e._dur||Qo(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),sr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},Wi=function(t,e,n,i){return e.parent&&Is(e),e._start=De((as(n)?n:!n&&vl(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Ne?pi(t,n,e):t._time)+e._delay),e._end=De(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),up(t,e,"_first","_last",t._sort?"_start":0),vl(e)||(t._recent=e),i||fp(t,e),t._ts<0&&El(t,t._tTime),t},dp=function(t,e){return(ei.ScrollTrigger||bl("scrollTrigger",e))&&ei.ScrollTrigger.create(e,t)},pp=function(t,e,n,i,r){if(Cu(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ap!==Yn.frame)return Cs.push(t),t._lazy=[r,i],1},E0=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},vl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},A0=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&E0(t)&&!(!t._initted&&vl(t))||(t._ts<0||t._dp._ts<0)&&!vl(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Qo(0,t._tDur,e),h=kr(l,a),t._yoyo&&h&1&&(o=1-o),h!==kr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||mn||i||t._zTime===ye||!e&&t._zTime){if(!t._initted&&pp(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&hu(t,e,n,!0),t._onUpdate&&!n&&ti(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ti(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Is(t,1),!n&&!mn&&(ti(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},R0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Gr=function(t,e,n,i){var r=t._repeat,o=De(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:De(o*(r+1)+t._rDelay*r):o,a>0&&!i&&El(t,t._tTime=t._tDur*a),t.parent&&wl(t),n||sr(t.parent,t),t},Kd=function(t){return t instanceof bn?sr(t):Gr(t,t._dur)},C0={_start:0,endTime:$o,totalDuration:$o},pi=function s(t,e,n){var i=t.labels,r=t._recent||C0,o=t.duration()>=mi?r.endTime(!1):t._dur,a,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Wo=function(t,e,n){var i=as(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;o.immediateRender=$n(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new We(e[0],o,e[r+1])},Ls=function(t,e){return t||t===0?e(t):e},Qo=function(t,e,n){return n<t?t:n>e?e:n},gn=function(t,e){return!en(t)||!(e=x0.exec(t))?"":e[1]},P0=function(t,e,n){return Ls(n,function(i){return Qo(t,e,i)})},uu=[].slice,mp=function(t,e){return t&&Xi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Xi(t[0]))&&!t.nodeType&&t!==Hi},I0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return en(i)&&!e||mp(i,1)?(r=n).push.apply(r,gi(i)):n.push(i)})||n},gi=function(t,e,n){return Ie&&!e&&Ie.selector?Ie.selector(t):en(t)&&!n&&(lu||!Vr())?uu.call((e||vu).querySelectorAll(t),0):Tn(t)?I0(t,n):mp(t)?uu.call(t,0):t?[t]:[]},fu=function(t){return t=gi(t)[0]||Yo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return gi(e,n.querySelectorAll?n:n===t?Yo("Invalid scope")||vu.createElement("div"):t)}},gp=function(t){return t.sort(function(){return .5-Math.random()})},_p=function(t){if(ze(t))return t;var e=Xi(t)?t:{each:t},n=rr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return en(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,m){var _=(m||e).length,p=o[_],g,y,E,v,T,w,x,M,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,mi])[1],!P){for(x=-mi;x<(x=m[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=o[_]=[],g=l?Math.min(P,_)*h-.5:i%P,y=P===mi?0:l?_*d/P-.5:i/P|0,x=0,M=mi,w=0;w<_;w++)E=w%P-g,v=y-(w/P|0),p[w]=T=c?Math.abs(c==="y"?v:E):np(E*E+v*v),T>x&&(x=T),T<M&&(M=T);i==="random"&&gp(p),p.max=x-M,p.min=M,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=gn(e.amount||e.each)||0,n=n&&_<0?W0(n):n}return _=(p[u]-p.min)/p.max||0,De(p.b+(n?n(_):_)*p.v)+p.u}},du=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=De(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(as(n)?0:gn(n))}},xp=function(t,e){var n=Tn(t),i,r;return!n&&Xi(t)&&(i=n=t.radius||mi,t.values?(t=gi(t.values),(r=!as(t[0]))&&(i*=i)):t=du(t.increment)),Ls(e,n?ze(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=mi,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,r||h===o||as(o)?h:h+gn(o)}:du(t))},vp=function(t,e,n,i){return Ls(Tn(t)?!e:n===!0?!!(n=0):!i,function(){return Tn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},L0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},D0=function(t,e){return function(n){return t(parseFloat(n))+(e||gn(n))}},N0=function(t,e,n){return Sp(t,e,0,1,n)},yp=function(t,e,n){return Ls(n,function(i){return t[~~e(i)]})},U0=function s(t,e,n){var i=e-t;return Tn(t)?yp(t,s(0,t.length),e):Ls(n,function(r){return(i+(r-t)%i)%i+t})},O0=function s(t,e,n){var i=e-t,r=i*2;return Tn(t)?yp(t,s(0,t.length-1),e):Ls(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Hr=function(t){return t.replace(m0,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(g0);return vp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Sp=function(t,e,n,i,r){var o=e-t,a=i-n;return Ls(r,function(l){return n+((l-t)/o*a||0)})},F0=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=en(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Tn(t)&&!Tn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(m){m*=d;var _=Math.min(u,~~m);return h[_](m-_)},n=e}else i||(t=zr(Tn(t)?[]:{},t));if(!h){for(l in e)Au.call(a,t,l,"get",e[l]);r=function(m){return Lu(m,a)||(o?t.p:t)}}}return Ls(n,r)},Qd=function(t,e,n){var i=t.labels,r=mi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ti=function(t,e,n){var i=t.vars,r=i[e],o=Ie,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Cs.length&&gl(),a&&(Ie=a),h=l?r.apply(c,l):r.call(c),Ie=o,h},Go=function(t){return Is(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mn),t.progress()<1&&ti(t,"onInterrupt"),t},Br,Mp=[],bp=function(t){if(t)if(t=!t.name&&t.default||t,gu()||t.headless){var e=t.name,n=ze(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:$o,render:Lu,add:Au,kill:tx,modifier:j0,rawVars:0},o={targetTest:0,get:0,getSetter:Al,aliases:{},register:0};if(Vr(),t!==i){if(qn[e])return;ni(i,ni(_l(t,r),o)),zr(i.prototype,zr(r,_l(t,o))),qn[i.prop=e]=i,t.targetTest&&(dl.push(i),yu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}op(e,i),t.register&&t.register(wn,i,Bn)}else Mp.push(t)},we=255,Vo={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},nu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*we+.5|0},Tp=function(t,e,n){var i=t?as(t)?[t>>16,t>>8&we,t&we]:0:Vo.black,r,o,a,l,c,h,d,u,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vo[t])i=Vo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&we,i&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Yd),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=nu(l+1/3,r,o),i[1]=nu(l,r,o),i[2]=nu(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(_u),n&&i.length<4&&(i[3]=1),i}else i=t.match(Yd)||Vo.transparent;i=i.map(Number)}return e&&!m&&(r=i[0]/we,o=i[1]/we,a=i[2]/we,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},wp=function(t){var e=[],n=[],i=-1;return t.split(os).forEach(function(r){var o=r.match(ar)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},jd=function(t,e,n){var i="",r=(t+i).match(os),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=Tp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=wp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(os,"1").split(ar),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(os),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},os=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vo)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),B0=/hsl[a]?\(/,wu=function(t){var e=t.join(" "),n;if(os.lastIndex=0,os.test(e))return n=B0.test(e),t[1]=jd(t[1],n),t[0]=jd(t[0],n,wp(t[1])),!0},Zo,Yn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,u,f,m=function _(p){var g=s()-i,y=p===!0,E,v,T,w;if((g>t||g<0)&&(n+=g-e),i+=g,T=i-n,E=T-o,(E>0||y)&&(w=++d.frame,u=T-d.time*1e3,d.time=T=T/1e3,o+=E+(E>=r?0:r-E),v=1),y||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](T,u,w,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){sp&&(!lu&&gu()&&(Hi=lu=window,vu=Hi.document||{},ei.gsap=wn,(Hi.gsapVersions||(Hi.gsapVersions=[])).push(wn.version),rp(ml||Hi.GreenSockGlobals||!Hi.gsap&&Hi||{}),Mp.forEach(bp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Zo=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Zo=0,c=$o},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,g,y){var E=g?function(v,T,w,x){p(v,T,w,x),d.remove(E)}:p;return d.remove(p),a[y?"unshift":"push"](E),Vr(),E},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),Vr=function(){return!Zo&&Yn.wake()},oe={},z0=/^[\d.\-M][\d.\-,\s]/,k0=/["']/g,G0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(k0,"").trim():+c,i=l.substr(a+1).trim();return e},V0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},H0=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[G0(e[1])]:V0(t).split(",").map(cp)):oe._CE&&z0.test(t)?oe._CE("",t):n},W0=function(t){return function(e){return 1-t(1-e)}},rr=function(t,e){return t&&(ze(t)?t:oe[t]||H0(t))||e},cr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Fn(t,function(a){oe[a]=ei[a]=r,oe[o=a.toLowerCase()]=n;for(var l in r)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=r[l]}),r},Ep=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},iu=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/au*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*p0((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Ep(a);return r=au/r,l.config=function(c,h){return s(t,c,h)},l},su=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Ep(n);return i.config=function(r){return s(t,r)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;cr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;cr("Elastic",iu("in"),iu("out"),iu());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};cr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);cr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});cr("Circ",function(s){return-(np(1-s*s)-1)});cr("Sine",function(s){return s===1?1:-d0(s*u0)+1});cr("Back",su("in"),su("out"),su());oe.SteppedEase=oe.steps=ei.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ye;return function(a){return((i*Qo(0,o,a)|0)+r)*n}}};qo.ease=oe["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Su+=s+","+s+"Params,"});var Eu=function(t,e){this.id=f0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:bu,this.set=e?e.getSetter:Al},Jo=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Gr(this,+e.duration,1,1),this.data=e.data,Ie&&(this._ctx=Ie,Ie.data.push(this)),Zo||Yn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Gr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Vr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(El(this,n),!r._dp||r.parent||fp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),lp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?kr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?xl(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Qo(-Math.abs(this._delay),a,r),i!==!1),wl(this),T0(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Vr(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==ye,o;if(r)for(this._tTime-=ye,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+ye){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=De(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Wi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=y0);var i=mn;return mn=n,Tu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Kd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Kd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(pi(this,n),$n(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-ye),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ye)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=ze(n)?n:hp,l=function(){var h=i.then;i.then=null,r&&r(),ze(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Go(this)},s})();ni(Jo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var bn=(function(s){ep(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=$n(n.sortChildren),Ne&&Wi(n.parent||Ne,rs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&dp(rs(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Wo(0,arguments,this),this},e.from=function(i,r,o){return Wo(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Wo(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Ho(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new We(i,r,pi(this,o),1),this},e.call=function(i,r,o){return Wi(this,We.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new We(i,o,pi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Ho(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Ho(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:De(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,m,_,p,g,y,E,v,T,w,x;if(this!==Ne&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,v=this._start,E=this._ts,g=!E,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(u=De(h%p),h===l?(_=this._repeat,u=c):(T=De(h/p),_=~~T,_&&_===T&&(u=c,_--),u>c&&(u=c)),T=kr(this._tTime,p),!a&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),w&&_&1&&(u=c-u,x=1),_!==T&&!this._lock){var M=w&&T&1,P=M===(w&&_&1);if(_<T&&(M=!M),a=M?0:h%c?c:h,this._lock=1,this.render(a||(x?0:De(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=R0(this,De(a),De(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!T&&(ti(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!g){y=0,m&&(h+=this._zTime=-ye);break}}f=m}else{f=this._last;for(var A=i<0?i:u;f;){if(m=f._prev,(f._act||A<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,r,o||mn&&Tu(f)),u!==this._time||!this._ts&&!g){y=0,m&&(h+=this._zTime=A?-ye:ye);break}}f=m}}if(y&&!r&&(this.pause(),y.render(u>=a?0:-ye)._zTime=u>=a?1:-1,this._ts))return this._start=v,wl(this),this.render(i,r,o);this._onUpdate&&!r&&ti(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Is(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(ti(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(as(r)||(r=pi(this,r,i)),!(i instanceof Jo)){if(Tn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(en(i))return this.addLabel(i,r);if(ze(i))i=We.delayedCall(0,i);else return this}return this!==i?Wi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof We?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return en(i)?this.removeLabel(i):ze(i)?this.killTweensOf(i):(i.parent===this&&Tl(this,i),i===this._recent&&(this._recent=this._last),sr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=De(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=pi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=We.delayedCall(0,r||$o,o);return a.data="isPause",this._hasPause=1,Wi(this,a,pi(this,i))},e.removePause=function(i){var r=this._first;for(i=pi(this,i);r;)r._start===i&&r.data==="isPause"&&Is(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Rs!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=gi(i),l=this._first,c=as(r),h;l;)l instanceof We?S0(l._targets,a)&&(c?(!Rs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=pi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=We.to(o,ni({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ye,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Gr(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},r));return u?m.render(0):m},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,ni({startAt:{time:pi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Qd(this,pi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Qd(this,pi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=De(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return sr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),sr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=mi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Wi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=De(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Gr(o,o===Ne&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ne._ts&&(lp(Ne,xl(i,Ne)),ap=Yn.frame),Yn.frame>=$d){$d+=Zn.autoSleep||120;var r=Ne._first;if((!r||!r._ts)&&Zn.autoSleep&&Yn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Yn.sleep()}}},t})(Jo);ni(bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var X0=function(t,e,n,i,r,o,a){var l=new Bn(this._pt,t,e,0,1,Iu,null,r),c=0,h=0,d,u,f,m,_,p,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Hr(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),u=n.match(tu)||[];d=tu.exec(i);)m=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?lr(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=tu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(xu.test(i)||g)&&(l.e=0),this._pt=l,l},Au=function(t,e,n,i,r,o,a,l,c,h){ze(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:ze(d)?c?t[e.indexOf("set")||!ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=ze(d)?c?J0:Rp:Pu,m;if(en(i)&&(~i.indexOf("random(")&&(i=Hr(i)),i.charAt(1)==="="&&(m=lr(u,i)+(gn(u)||0),(m||m===0)&&(i=m))),!h||u!==i||pu)return!isNaN(u*i)&&i!==""?(m=new Bn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?Q0:Cp,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&bl(e,i),X0.call(this,t,e,u,i,f,l||Zn.stringFilter,c))},q0=function(t,e,n,i,r){if(ze(t)&&(t=Xo(t,r,e,n,i)),!Xi(t)||t.style&&t.nodeType||Tn(t)||ip(t))return en(t)?Xo(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Xo(t[a],r,e,n,i);return o},Ru=function(t,e,n,i,r,o){var a,l,c,h;if(qn[t]&&(a=new qn[t]).init(r,a.rawVars?e[t]:q0(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Bn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Br))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Rs,pu,Cu=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:p,E=t._overwrite==="auto"&&!mu,v=t.timeline,T=i.easeReverse||d,w,x,M,P,A,N,L,z,I,B,k,O,K;if(v&&(!u||!r)&&(r="none"),t._ease=rr(r,qo.ease),t._rEase=T&&(rr(T)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(z=p[0]?Ps(p[0]).harness:0,O=z&&i[z.prop],w=_l(i,yu),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&m?fl:v0),_._lazy=0),o){if(Is(t._startAt=We.set(p,ni({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return ti(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn||!a&&!f)&&t._startAt.revert(fl),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),M=ni({overwrite:!1,data:"isFromStart",lazy:a&&!_&&$n(l),immediateRender:a,stagger:0,parent:g},w),O&&(M[z.prop]=O),Is(t._startAt=We.set(p,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn?t._startAt.revert(fl):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&$n(l)||l&&!m,x=0;x<p.length;x++){if(A=p[x],L=A._gsap||Mu(p)[x]._gsap,t._ptLookup[x]=B={},cu[L.id]&&Cs.length&&gl(),k=y===p?x:y.indexOf(A),z&&(I=new z).init(A,O||w,t,k,y)!==!1&&(t._pt=P=new Bn(t._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(H){B[H]=P}),I.priority&&(N=1)),!z||O)for(M in w)qn[M]&&(I=Ru(M,w,t,k,A,y))?I.priority&&(N=1):B[M]=P=Au.call(t,A,M,"get",w[M],k,y,0,i.stringFilter);t._op&&t._op[x]&&t.kill(A,t._op[x]),E&&t._pt&&(Rs=t,Ne.killTweensOf(A,B,t.globalTime(e)),K=!t.parent,Rs=0),t._pt&&l&&(cu[L.id]=1)}N&&Du(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,u&&e<=0&&v.render(mi,!0,!0)},Y0=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return pu=1,t.vars[e]="+=0",Cu(t,a),pu=0,l?Yo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=ke(n)+gn(d.e)),d.b&&(d.b=h.s+gn(d.b))},$0=function(t,e){var n=t[0]?Ps(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=zr({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Z0=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Tn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Xo=function(t,e,n,i,r){return ze(t)?t.call(e,n,i,r):en(t)&&~t.indexOf("random(")?Hr(t):t},yl=Su+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ap={};Fn(yl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Ap[s]=1});yl=yl.split(",");var We=(function(s){ep(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Ho(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Ne,y=(Tn(n)||ip(n)?as(n[0]):"length"in i)?[n]:gi(n),E,v,T,w,x,M,P,A;if(a._targets=y.length?Mu(y):Yo("GSAP target "+n+" not found. https://gsap.com",!Zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||u||ul(c)||ul(h)){i=a.vars;var N=i.easeReverse||i.yoyoEase;if(E=a.timeline=new bn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:y}),E.kill(),E.parent=E._dp=rs(a),E._start=0,u||ul(c)||ul(h)){if(w=y.length,P=u&&_p(u),Xi(u))for(x in u)~yl.indexOf(x)&&(A||(A={}),A[x]=u[x]);for(v=0;v<w;v++)T=_l(i,Ap),T.stagger=0,N&&(T.easeReverse=N),A&&zr(T,A),M=y[v],T.duration=+Xo(c,rs(a),v,M,y),T.delay=(+Xo(h,rs(a),v,M,y)||0)-a._delay,!u&&w===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),E.to(M,T,P?P(v,M,y):0),E._ease=oe.none;E.duration()?c=h=0:a.timeline=0}else if(m){Ho(ni(E.vars.defaults,{ease:"none"})),E._ease=rr(m.ease||i.ease||"none");var L=0,z,I,B;if(Tn(m))m.forEach(function(k){return E.to(y,k,">")}),E.duration();else{T={};for(x in m)x==="ease"||x==="easeEach"||Z0(x,m[x],T,m.easeEach);for(x in T)for(z=T[x].sort(function(k,O){return k.t-O.t}),L=0,v=0;v<z.length;v++)I=z[v],B={ease:I.e,duration:(I.t-(v?z[v-1].t:0))/100*c},B[x]=I.v,E.to(y,B,L),L+=B.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return f===!0&&!mu&&(Rs=rs(a),Ne.killTweensOf(y),Rs=0),Wi(g,rs(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===De(g._time)&&$n(d)&&w0(rs(a))&&g.data!=="nested")&&(a._tTime=-ye,a.render(Math.max(0,-h)||0)),p&&dp(rs(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-ye&&!h?l:i<ye?0:i,u,f,m,_,p,g,y,E;if(!c)A0(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(u=De(d%_),d===l?(m=this._repeat,u=c):(p=De(d/_),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(u=c-u),p=kr(this._tTime,_),u===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(De(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(pp(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var v=u<a;if(v!==this._inv){var T=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(v?-1:1)/T:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!p&&(ti(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;E&&E.render(i<0?i:E._dur*E._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&hu(this,i,r,o),ti(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&ti(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&hu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Is(this,1),!r&&!(h&&!a)&&(d||a||g)&&(ti(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Zo||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Cu(this,c),h=this._ease(c/this._dur),Y0(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(El(this,0),this.parent||up(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Rs&&Rs.vars.overwrite!==!0)._first||Go(this),this.parent&&o!==this.timeline.totalDuration()&&Gr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gi(i):a,c=this._ptLookup,h=this._pt,d,u,f,m,_,p,g;if((!r||r==="all")&&b0(a,l))return r==="all"&&(this._pt=0),Go(this);for(d=this._op=this._op||[],r!=="all"&&(en(r)&&(_={},Fn(r,function(y){return _[y]=1}),r=_),r=$0(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],r==="all"?(d[g]=r,m=u,f={}):(f=d[g]=d[g]||{},m=r);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Tl(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Go(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Wo(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Wo(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Ne.killTweensOf(i,r,o)},t})(Jo);ni(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(s){We[s]=function(){var t=new bn,e=uu.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Pu=function(t,e,n){return t[e]=n},Rp=function(t,e,n){return t[e](n)},J0=function(t,e,n,i){return t[e](i.fp,n)},K0=function(t,e,n){return t.setAttribute(e,n)},Al=function(t,e){return ze(t[e])?Rp:Ml(t[e])&&t.setAttribute?K0:Pu},Cp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Q0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Iu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Lu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},j0=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},tx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Tl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},ex=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Du=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Bn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Cp,this.d=l||this,this.set=c||Pu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=ex,this.m=n,this.mt=r,this.tween=i},s})();Fn(Su+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return yu[s]=1});ei.TweenMax=ei.TweenLite=We;ei.TimelineLite=ei.TimelineMax=bn;Ne=new bn({sortChildren:!1,defaults:qo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zn.stringFilter=wu;var or=[],pl={},nx=[],tp=0,ix=0,ru=function(t){return(pl[t]||nx).map(function(e){return e()})},Ko=function(){var t=Date.now(),e=[];t-tp>2&&(ru("matchMediaInit"),or.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Hi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),ru("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),tp=t,ru("matchMedia"))},Pp=(function(){function s(e,n){this.selector=n&&fu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ix++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){ze(n)&&(r=i,i=n,n=ze);var o=this,a=function(){var c=Ie,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=fu(r)),Ie=o,d=i.apply(o,arguments),ze(d)&&o._r.push(d),Ie=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===ze?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ie;Ie=null,n(this),Ie=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof We&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof We)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=or.length;o--;)or[o].id===this.id&&or.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Ko):a.removeEventListener("change",Ko)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),sx=(function(){function s(e){this.contexts=[],this.scope=e,Ie&&Ie.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Xi(n)||(n={matches:n});var o=new Pp(0,r||this.scope),a=o.conditions={},l,c,h;Ie&&!o.selector&&(o.selector=Ie.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Hi.matchMedia(n[c]),l&&(or.indexOf(o)<0&&or.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ko):l.addEventListener("change",Ko),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Sl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return bp(i)})},timeline:function(t){return new bn(t)},getTweensOf:function(t,e){return Ne.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=gi(t)[0]);var r=Ps(t||{}).get,o=n?hp:cp;return n==="native"&&(n=""),t&&(e?o((qn[e]&&qn[e].get||r)(t,e,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=gi(t),t.length>1){var i=t.map(function(h){return wn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=qn[e],a=Ps(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Br._pt=0,d.init(t,n?h+n:h,Br,0,[t]),d.render(1,d),Br._pt&&Lu(1,Br)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=wn.to(t,ni((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Ne.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=rr(t.ease,qo.ease)),Zd(qo,t||{})},config:function(t){return Zd(Zn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!ei[a]&&Yo(e+" effect requires "+a+" plugin.")}),eu[e]=function(a,l,c){return n(gi(a),ni(l||{},r),c)},o&&(bn.prototype[e]=function(a,l,c){return this.add(eu[e](a,Xi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=rr(e)},parseEase:function(t,e){return arguments.length?rr(t,e):oe},getById:function(t){return Ne.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new bn(t),i,r;for(n.smoothChildTiming=$n(t.smoothChildTiming),Ne.remove(n),n._dp=0,n._time=n._tTime=Ne._time,i=Ne._first;i;)r=i._next,(e||!(!i._dur&&i instanceof We&&i.vars.onComplete===i._targets[0]))&&Wi(n,i,i._start-i._delay),i=r;return Wi(Ne,n,0),n},context:function(t,e){return t?new Pp(t,e):Ie},matchMedia:function(t){return new sx(t)},matchMediaRefresh:function(){return or.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ko()},addEventListener:function(t,e){var n=pl[t]||(pl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=pl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:U0,wrapYoyo:O0,distribute:_p,random:vp,snap:xp,normalize:N0,getUnit:gn,clamp:P0,splitColor:Tp,toArray:gi,selector:fu,mapRange:Sp,pipe:L0,unitize:D0,interpolate:F0,shuffle:gp},install:rp,effects:eu,ticker:Yn,updateRoot:bn.updateRoot,plugins:qn,globalTimeline:Ne,core:{PropTween:Bn,globals:op,Tween:We,Timeline:bn,Animation:Jo,getCache:Ps,_removeLinkedListItem:Tl,reverting:function(){return mn},context:function(t){return t&&Ie&&(Ie.data.push(t),t._ctx=Ie),Ie},suppressOverwrites:function(t){return mu=t}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Sl[s]=We[s]});Yn.add(bn.updateRoot);Br=Sl.to({},{duration:0});var rx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},ox=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=rx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},ou=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(en(r)&&(l={},Fn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}ox(a,r)}}}},wn=Sl.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ou("roundProps",du),ou("modifiers"),ou("snap",xp))||Sl;We.version=bn.version=wn.version="3.15.1";sp=1;gu()&&Vr();var ax=oe.Power0,lx=oe.Power1,cx=oe.Power2,hx=oe.Power3,ux=oe.Power4,fx=oe.Linear,dx=oe.Quad,px=oe.Cubic,mx=oe.Quart,gx=oe.Quint,_x=oe.Strong,xx=oe.Elastic,vx=oe.Back,yx=oe.SteppedEase,Sx=oe.Bounce,Mx=oe.Sine,bx=oe.Expo,Tx=oe.Circ;var Ip,Ds,Xr,zu,dr,wx,Lp,ku,Ex=function(){return typeof window<"u"},cs={},fr=180/Math.PI,qr=Math.PI/180,Wr=Math.atan2,Dp=1e8,Gu=/([A-Z])/g,Ax=/(left|right|width|margin|padding|x)/i,Rx=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Px=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ix=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Lx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Gp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Vp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Dx=function(t,e,n){return t.style[e]=n},Nx=function(t,e,n){return t.style.setProperty(e,n)},Ux=function(t,e,n){return t._gsap[e]=n},Ox=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Fx=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Bx=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Ue="transform",Jn=Ue+"Origin",zx=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in cs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=qi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ls(i,a)}):this.tfm[t]=o.x?o[t]:ls(i,t),t===Jn&&(this.tfm.zOrigin=o.zOrigin);else return qi.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Ue)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Jn,e,"")),t=Ue}(r||e)&&this.props.push(t,e,r[t])},Hp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},kx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Gu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ku(),(!r||!r.isStart)&&!n[Ue]&&(Hp(n),i.zOrigin&&n[Jn]&&(n[Jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Wp=function(t,e){var n={target:t,props:[],revert:kx,save:zx};return t._gsap||wn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Xp,Ou=function(t,e){var n=Ds.createElementNS?Ds.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ds.createElement(t);return n&&n.style?n:Ds.createElement(t)},ii=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Gu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Yr(e)||e,1)||""},Np="O,Moz,ms,Ms,Webkit".split(","),Yr=function(t,e,n){var i=e||dr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Np[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Np[o]:"")+t},Fu=function(){Ex()&&window.document&&(Ip=window,Ds=Ip.document,Xr=Ds.documentElement,dr=Ou("div")||{style:{}},wx=Ou("div"),Ue=Yr(Ue),Jn=Ue+"Origin",dr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xp=!!Yr("perspective"),ku=wn.core.reverting,zu=1)},Up=function(t){var e=t.ownerSVGElement,n=Ou("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Xr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Xr.removeChild(n),r},Op=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},qp=function(t){var e,n;try{e=t.getBBox()}catch{e=Up(t),n=1}return e&&(e.width||e.height)||n||(e=Up(t)),e&&!e.width&&!e.x&&!e.y?{x:+Op(t,["x","cx","x1"])||0,y:+Op(t,["y","cy","y1"])||0,width:0,height:0}:e},Yp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&qp(t))},Us=function(t,e){if(e){var n=t.style,i;e in cs&&e!==Jn&&(e=Ue),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Gu,"-$1").toLowerCase())):n.removeAttribute(e)}},Ns=function(t,e,n,i,r,o){var a=new Bn(t._pt,e,n,0,1,o?Vp:Gp);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Fp={deg:1,rad:1,turn:1},Gx={grid:1,flex:1},Os=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=dr.style,l=Ax.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",m,_,p,g;if(i===o||!r||Fp[i]||Fp[o])return r;if(o!=="px"&&!u&&(r=s(t,e,n,"px")),g=t.getCTM&&Yp(t),(f||o==="%")&&(cs[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],ke(f?r/m*d:r/100*m);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ds||!_.appendChild)&&(_=Ds.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Yn.time&&!p.uncache)return ke(r/p.width*d);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=d+i,m=t[h],y?t.style[e]=y:Us(t,e)}else(f||o==="%")&&!Gx[ii(_,"display")]&&(a.position=ii(t,"position")),_===t&&(a.position="static"),_.appendChild(dr),m=dr[h],_.removeChild(dr),a.position="absolute";return l&&f&&(p=Ps(_),p.time=Yn.time,p.width=_[h]),ke(u?m*r/d:m&&r?d/m*r:0)},ls=function(t,e,n,i){var r;return zu||Fu(),e in qi&&e!=="transform"&&(e=qi[e],~e.indexOf(",")&&(e=e.split(",")[0])),cs[e]&&e!=="transform"?(r=ea(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Cl(ii(t,Jn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Rl[e]&&Rl[e](t,e,n)||ii(t,e)||bu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Os(t,e,r,n)+n:r},Vx=function(t,e,n,i){if(!n||n==="none"){var r=Yr(e,t,1),o=r&&ii(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=ii(t,"borderTopColor"))}var a=new Bn(this._pt,t.style,e,0,1,Iu),l=0,c=0,h,d,u,f,m,_,p,g,y,E,v,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ii(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ii(t,e)||i,_?t.style[e]=_:Us(t,e)),h=[n,i],wu(h),n=h[0],i=h[1],u=n.match(ar)||[],T=i.match(ar)||[],T.length){for(;d=ar.exec(i);)p=d[0],y=i.substring(l,d.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),p.charAt(1)==="="&&(p=lr(f,p)+v),g=parseFloat(p),E=p.substr((g+"").length),l=ar.lastIndex-E.length,E||(E=E||Zn.units[e]||v,l===i.length&&(i+=E,a.e+=E)),v!==E&&(f=Os(t,e,_,E)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:g-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Vp:Gp;return xu.test(i)&&(a.e=0),this._pt=a,a},Bp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Bp[n]||n,e[1]=Bp[i]||i,e.join(" ")},Wx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],cs[a]&&(l=1,a=a==="transformOrigin"?Jn:Ue),Us(n,a);l&&(Us(n,Ue),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ea(n,1),o.uncache=1,Hp(i)))}},Rl={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Bn(t._pt,e,n,0,0,Wx);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},ta=[1,0,0,1,0,0],$p={},Zp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},zp=function(t){var e=ii(t,Ue);return Zp(e)?ta:e.substr(7).match(_u).map(ke)},Vu=function(t,e){var n=t._gsap||Ps(t),i=t.style,r=zp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ta:r):(r===ta&&!t.offsetParent&&t!==Xr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Xr.appendChild(t)),r=zp(t),l?i.display=l:Us(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Xr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Bu=function(t,e,n,i,r,o){var a=t._gsap,l=r||Vu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],y=l[5],E=e.split(" "),v=parseFloat(E[0])||0,T=parseFloat(E[1])||0,w,x,M,P;n?l!==ta&&(x=f*p-m*_)&&(M=v*(p/x)+T*(-_/x)+(_*y-p*g)/x,P=v*(-m/x)+T*(f/x)-(f*y-m*g)/x,v=M,T=P):(w=qp(t),v=w.x+(~E[0].indexOf("%")?v/100*w.width:v),T=w.y+(~(E[1]||E[0]).indexOf("%")?T/100*w.height:T)),i||i!==!1&&a.smooth?(g=v-c,y=T-h,a.xOffset=d+(g*f+y*_)-g,a.yOffset=u+(g*m+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Jn]="0px 0px",o&&(Ns(o,a,"xOrigin",c,v),Ns(o,a,"yOrigin",h,T),Ns(o,a,"xOffset",d,a.xOffset),Ns(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+T)},ea=function(t,e){var n=t._gsap||new Eu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ii(t,Jn)||"0",h,d,u,f,m,_,p,g,y,E,v,T,w,x,M,P,A,N,L,z,I,B,k,O,K,H,R,Z,_t,Et,X,rt;return h=d=u=_=p=g=y=E=v=0,f=m=1,n.svg=!!(t.getCTM&&Yp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ue]!=="none"?l[Ue]:"")),i.scale=i.rotate=i.translate="none"),x=Vu(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),Bu(t,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,x)),T=n.xOrigin||0,w=n.yOrigin||0,x!==ta&&(N=x[0],L=x[1],z=x[2],I=x[3],h=B=x[4],d=k=x[5],x.length===6?(f=Math.sqrt(N*N+L*L),m=Math.sqrt(I*I+z*z),_=N||L?Wr(L,N)*fr:0,y=z||I?Wr(z,I)*fr+_:0,y&&(m*=Math.abs(Math.cos(y*qr))),n.svg&&(h-=T-(T*N+w*z),d-=w-(T*L+w*I))):(rt=x[6],Et=x[7],R=x[8],Z=x[9],_t=x[10],X=x[11],h=x[12],d=x[13],u=x[14],M=Wr(rt,_t),p=M*fr,M&&(P=Math.cos(-M),A=Math.sin(-M),O=B*P+R*A,K=k*P+Z*A,H=rt*P+_t*A,R=B*-A+R*P,Z=k*-A+Z*P,_t=rt*-A+_t*P,X=Et*-A+X*P,B=O,k=K,rt=H),M=Wr(-z,_t),g=M*fr,M&&(P=Math.cos(-M),A=Math.sin(-M),O=N*P-R*A,K=L*P-Z*A,H=z*P-_t*A,X=I*A+X*P,N=O,L=K,z=H),M=Wr(L,N),_=M*fr,M&&(P=Math.cos(M),A=Math.sin(M),O=N*P+L*A,K=B*P+k*A,L=L*P-N*A,k=k*P-B*A,N=O,B=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=ke(Math.sqrt(N*N+L*L+z*z)),m=ke(Math.sqrt(k*k+rt*rt)),M=Wr(B,k),y=Math.abs(M)>2e-4?M*fr:0,v=X?1/(X<0?-X:X):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Zp(ii(t,Ue)),O&&t.setAttribute("transform",O))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=ke(f),n.scaleY=ke(m),n.rotation=ke(_)+a,n.rotationX=ke(p)+a,n.rotationY=ke(g)+a,n.skewX=y+a,n.skewY=E+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Jn]=Cl(c)),n.xOffset=n.yOffset=0,n.force3D=Zn.force3D,n.renderTransform=n.svg?qx:Xp?Jp:Xx,n.uncache=0,n},Cl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Nu=function(t,e,n){var i=gn(e);return ke(parseFloat(e)+parseFloat(Os(t,"x",n+"px",i)))+i},Xx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Jp(t,e)},hr="0deg",jo="0px",ur=") ",Jp=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,y=n.target,E=n.zOrigin,v="",T=g==="auto"&&t&&t!==1||g===!0;if(E&&(d!==hr||h!==hr)){var w=parseFloat(h)*qr,x=Math.sin(w),M=Math.cos(w),P;w=parseFloat(d)*qr,P=Math.cos(w),o=Nu(y,o,x*P*-E),a=Nu(y,a,-Math.sin(w)*-E),l=Nu(y,l,M*P*-E+E)}p!==jo&&(v+="perspective("+p+ur),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(T||o!==jo||a!==jo||l!==jo)&&(v+=l!==jo||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ur),c!==hr&&(v+="rotate("+c+ur),h!==hr&&(v+="rotateY("+h+ur),d!==hr&&(v+="rotateX("+d+ur),(u!==hr||f!==hr)&&(v+="skew("+u+", "+f+ur),(m!==1||_!==1)&&(v+="scale("+m+", "+_+ur),y.style[Ue]=v||"translate(0, 0)"},qx=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,y=n.forceCSS,E=parseFloat(o),v=parseFloat(a),T,w,x,M,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=qr,c*=qr,T=Math.cos(l)*d,w=Math.sin(l)*d,x=Math.sin(l-c)*-u,M=Math.cos(l-c)*u,c&&(h*=qr,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,M*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),T*=P,w*=P)),T=ke(T),w=ke(w),x=ke(x),M=ke(M)):(T=d,M=u,w=x=0),(E&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(E=Os(f,"x",o,"px"),v=Os(f,"y",a,"px")),(m||_||p||g)&&(E=ke(E+m-(m*T+_*x)+p),v=ke(v+_-(m*w+_*M)+g)),(i||r)&&(P=f.getBBox(),E=ke(E+i/100*P.width),v=ke(v+r/100*P.height)),P="matrix("+T+","+w+","+x+","+M+","+E+","+v+")",f.setAttribute("transform",P),y&&(f.style[Ue]=P)},Yx=function(t,e,n,i,r){var o=360,a=en(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?fr:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Dp)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Dp)%o-~~(c/o)*o)),t._pt=u=new Bn(t._pt,e,n,i,c,Cx),u.e=h,u.u="deg",t._props.push(n),u},kp=function(t,e){for(var n in e)t[n]=e[n];return t},$x=function(t,e,n){var i=kp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ue]=e,a=ea(n,1),Us(n,Ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ue],o[Ue]=e,a=ea(n,1),o[Ue]=c);for(l in cs)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=gn(c),m=gn(h),d=f!==m?Os(n,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new Bn(t._pt,a,l,d,u-d,Uu),t._pt.u=m||0,t._props.push(l));kp(a,i)};Fn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Rl[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(m){return ls(a,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var Hu={name:"css",register:Fu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,m,_,p,g,y,E,v,T,w,x,M,P;zu||Fu(),this.styles=this.styles||Wp(t),M=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(qn[_]&&Ru(_,e,n,i,t,r)))){if(f=typeof h,m=Rl[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Hr(h)),m)m(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",os.lastIndex=0,os.test(c)||(p=gn(c),g=gn(h),g?p!==g&&(c=Os(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),M.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],en(c)&&~c.indexOf("random(")&&(c=Hr(c)),gn(c+"")||c==="auto"||(c+=Zn.units[_]||gn(ls(t,_))||""),(c+"").charAt(1)==="="&&(c=ls(t,_))):c=ls(t,_),u=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),_ in qi&&(_==="autoAlpha"&&(u===1&&ls(t,"visibility")==="hidden"&&d&&(u=0),M.push("visibility",0,a.visibility),Ns(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=qi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in cs,E){if(this.styles.save(_),P=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ii(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=ii(t,"perspective"),A?t.style.perspective=A:Us(t,"perspective")}d=parseFloat(h)}if(v||(T=t._gsap,T.renderTransform&&!e.parseTransform||ea(t,e.parseTransform),w=e.smoothOrigin!==!1&&T.smooth,v=this._pt=new Bn(this._pt,a,Ue,0,1,T.renderTransform,T,0,-1),v.dep=1),_==="scale")this._pt=new Bn(this._pt,T,"scaleY",T.scaleY,(y?lr(T.scaleY,y+d):d)-T.scaleY||0,Uu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){M.push(Jn,0,a[Jn]),h=Hx(h),T.svg?Bu(t,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&Ns(this,T,"zOrigin",T.zOrigin,g),Ns(this,a,_,Cl(c),Cl(h)));continue}else if(_==="svgOrigin"){Bu(t,h,1,w,0,this);continue}else if(_ in $p){Yx(this,T,_,u,y?lr(u,y+h):h);continue}else if(_==="smoothOrigin"){Ns(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){$x(this,h,t);continue}}else _ in a||(_=Yr(_)||_);if(E||(d||d===0)&&(u||u===0)&&!Rx.test(h)&&_ in a)p=(c+"").substr((u+"").length),d||(d=0),g=gn(h)||(_ in Zn.units?Zn.units[_]:p),p!==g&&(u=Os(t,_,c,g)),this._pt=new Bn(this._pt,E?T:a,_,u,(y?lr(u,y+d):d)-u,!E&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?Lx:Uu),this._pt.u=g||0,E&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=Ix):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Px);else if(_ in a)Vx.call(this,t,_,c,y?y+h:h);else if(_ in t)this.add(t,_,c||t[_],y?y+h:h,i,r);else if(_!=="parseTransform"){bl(_,h);continue}E||(_ in a?M.push(_,0,a[_]):typeof t[_]=="function"?M.push(_,2,t[_]()):M.push(_,1,c||t[_])),o.push(_)}}x&&Du(this)},render:function(t,e){if(e.tween._time||!ku())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ls,aliases:qi,getSetter:function(t,e,n){var i=qi[e];return i&&i.indexOf(",")<0&&(e=i),e in cs&&e!==Jn&&(t._gsap.x||ls(t,"x"))?n&&Lp===n?e==="scale"?Ox:Ux:(Lp=n||{})&&(e==="scale"?Fx:Bx):t.style&&!Ml(t.style[e])?Dx:~e.indexOf("-")?Nx:Al(t,e)},core:{_removeProperty:Us,_getMatrix:Vu}};wn.utils.checkPrefix=Yr;wn.core.getStyleSaver=Wp;(function(s,t,e,n){var i=Fn(s+","+t+","+e,function(r){cs[r]=1});Fn(t,function(r){Zn.units[r]="deg",$p[r]=1}),qi[i[13]]=s+","+t,Fn(n,function(r){var o=r.split(":");qi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Zn.units[s]="px"});wn.registerPlugin(Hu);var pe=wn.registerPlugin(Hu)||wn,b1=pe.core.Tween;function Kp(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Zx(s,t,e){return t&&Kp(s.prototype,t),e&&Kp(s,e),s}var _n,Ll,Jx,Kn,Fs,Bs,Zr,jp,pr,Jr,tm,hs,Ci,em,nm=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},im=1,$r=[],$t=[],Pi=[],ia=Date.now,Wu=function(t,e){return e},Kx=function(){var t=Jr.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,$t),i.push.apply(i,Pi),$t=n,Pi=i,Wu=function(o,a){return e[o](a)}},fs=function(t,e){return~Pi.indexOf(t)&&Pi[Pi.indexOf(t)+1][e]},sa=function(t){return!!~tm.indexOf(t)},kn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},zn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Pl="scrollLeft",Il="scrollTop",Xu=function(){return hs&&hs.isPressed||$t.cache++},Dl=function(t,e){var n=function i(r){if(r||r===0){im&&Kn.history.scrollRestoration!=="manual"&&(Kn.history.scrollRestoration="manual");var o=hs&&hs.isPressed;r=i.v=Math.round(r)||(hs&&hs.iOS?1:0),t(r),i.cacheID=$t.cache,o&&Wu("ss",r)}else(e||$t.cache!==i.cacheID||Wu("ref"))&&(i.cacheID=$t.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},En={s:Pl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Dl(function(s){return arguments.length?Kn.scrollTo(s,Ze.sc()):Kn.pageXOffset||Fs[Pl]||Bs[Pl]||Zr[Pl]||0})},Ze={s:Il,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:En,sc:Dl(function(s){return arguments.length?Kn.scrollTo(En.sc(),s):Kn.pageYOffset||Fs[Il]||Bs[Il]||Zr[Il]||0})},Gn=function(t,e){return(e&&e._ctx&&e._ctx.selector||_n.utils.toArray)(t)[0]||(typeof t=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Qx=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},us=function(t,e){var n=e.s,i=e.sc;sa(t)&&(t=Fs.scrollingElement||Bs);var r=$t.indexOf(t),o=i===Ze.sc?1:2;!~r&&(r=$t.push(t)-1),$t[r+o]||kn(t,"scroll",Xu);var a=$t[r+o],l=a||($t[r+o]=Dl(fs(t,n),!0)||(sa(t)?i:Dl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=_n.getProperty(t,"scrollBehavior")==="smooth"),l},Nl=function(t,e,n){var i=t,r=t,o=ia(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=ia();_||p-o>l?(r=i,i=m,a=o,o=p):n?i+=m:i=r+(m-r)/(p-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},u=function(m){var _=a,p=r,g=ia();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},na=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Qp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},sm=function(){Jr=_n.core.globals().ScrollTrigger,Jr&&Jr.core&&Kx()},rm=function(t){return _n=t||nm(),!Ll&&_n&&typeof document<"u"&&document.body&&(Kn=window,Fs=document,Bs=Fs.documentElement,Zr=Fs.body,tm=[Kn,Fs,Bs,Zr],Jx=_n.utils.clamp,em=_n.core.context||function(){},pr="onpointerenter"in Zr?"pointer":"mouse",jp=Ge.isTouch=Kn.matchMedia&&Kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ci=Ge.eventTypes=("ontouchstart"in Bs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return im=0},500),Ll=1),Jr||sm(),Ll};En.op=Ze;$t.cache=0;var Ge=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Ll||rm(_n)||console.warn("Please gsap.registerPlugin(Observer)"),Jr||sm();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,y=n.onDrag,E=n.onPress,v=n.onRelease,T=n.onRight,w=n.onLeft,x=n.onUp,M=n.onDown,P=n.onChangeX,A=n.onChangeY,N=n.onChange,L=n.onToggleX,z=n.onToggleY,I=n.onHover,B=n.onHoverEnd,k=n.onMove,O=n.ignoreCheck,K=n.isNormalizer,H=n.onGestureStart,R=n.onGestureEnd,Z=n.onWheel,_t=n.onEnable,Et=n.onDisable,X=n.onClick,rt=n.scrollSpeed,xt=n.capture,bt=n.allowClicks,mt=n.lockAxis,Nt=n.onLockAxis;this.target=a=Gn(a)||Bs,this.vars=n,f&&(f=_n.utils.toArray(f)),i=i||1e-9,r=r||0,m=m||1,rt=rt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Kn.getComputedStyle(Zr).lineHeight)||22);var xe,At,Ht,Lt,Ft,he,ae,J=this,Qt=0,Xe=0,Se=n.passive||!h&&n.passive!==!1,re=us(a,En),Oe=us(a,Ze),He=re(),F=Oe(),fe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ci[0]==="pointerdown",le=sa(a),Gt=a.ownerDocument||Fs,ut=[0,0,0],ue=[0,0,0],Dt=0,Bt=function(){return Dt=ia()},C=function(pt,st){return(J.event=pt)&&f&&Qx(pt.target,f)||st&&fe&&pt.pointerType!=="touch"||O&&O(pt,st)},S=function(){J._vx.reset(),J._vy.reset(),At.pause(),d&&d(J)},V=function(){var pt=J.deltaX=Qp(ut),st=J.deltaY=Qp(ue),et=Math.abs(pt)>=i,vt=Math.abs(st)>=i;N&&(et||vt)&&N(J,pt,st,ut,ue),et&&(T&&J.deltaX>0&&T(J),w&&J.deltaX<0&&w(J),P&&P(J),L&&J.deltaX<0!=Qt<0&&L(J),Qt=J.deltaX,ut[0]=ut[1]=ut[2]=0),vt&&(M&&J.deltaY>0&&M(J),x&&J.deltaY<0&&x(J),A&&A(J),z&&J.deltaY<0!=Xe<0&&z(J),Xe=J.deltaY,ue[0]=ue[1]=ue[2]=0),(Lt||Ht)&&(k&&k(J),Ht&&(p&&Ht===1&&p(J),y&&y(J),Ht=0),Lt=!1),he&&!(he=!1)&&Nt&&Nt(J),Ft&&(Z(J),Ft=!1),xe=0},ot=function(pt,st,et){ut[et]+=pt,ue[et]+=st,J._vx.update(pt),J._vy.update(st),c?xe||(xe=requestAnimationFrame(V)):V()},it=function(pt,st){mt&&!ae&&(J.axis=ae=Math.abs(pt)>Math.abs(st)?"x":"y",he=!0),ae!=="y"&&(ut[2]+=pt,J._vx.update(pt,!0)),ae!=="x"&&(ue[2]+=st,J._vy.update(st,!0)),c?xe||(xe=requestAnimationFrame(V)):V()},ht=function(pt){if(!C(pt,1)){pt=na(pt,h);var st=pt.clientX,et=pt.clientY,vt=st-J.x,nt=et-J.y,Tt=J.isDragging;J.x=st,J.y=et,(Tt||(vt||nt)&&(Math.abs(J.startX-st)>=r||Math.abs(J.startY-et)>=r))&&(Ht||(Ht=Tt?2:1),Tt||(J.isDragging=!0),it(vt,nt))}},gt=J.onPress=function(at){C(at,1)||at&&at.button||(J.axis=ae=null,At.pause(),J.isPressed=!0,at=na(at),Qt=Xe=0,J.startX=J.x=at.clientX,J.startY=J.y=at.clientY,J._vx.reset(),J._vy.reset(),kn(K?a:Gt,Ci[1],ht,Se,!0),J.deltaX=J.deltaY=0,E&&E(J))},W=J.onRelease=function(at){if(!C(at,1)){zn(K?a:Gt,Ci[1],ht,!0);var pt=!isNaN(J.y-J.startY),st=J.isDragging,et=st&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),vt=na(at);!et&&pt&&(J._vx.reset(),J._vy.reset(),h&&bt&&_n.delayedCall(.08,function(){if(ia()-Dt>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Gt.createEvent){var nt=Gt.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,Kn,1,vt.screenX,vt.screenY,vt.clientX,vt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(nt)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,d&&st&&!K&&At.restart(!0),Ht&&V(),g&&st&&g(J),v&&v(J,et)}},tt=function(pt){return pt.touches&&pt.touches.length>1&&(J.isGesturing=!0)&&H(pt,J.isDragging)},ct=function(){return(J.isGesturing=!1)||R(J)},D=function(pt){if(!C(pt)){var st=re(),et=Oe();ot((st-He)*rt,(et-F)*rt,1),He=st,F=et,d&&At.restart(!0)}},j=function(pt){if(!C(pt)){pt=na(pt,h),Z&&(Ft=!0);var st=(pt.deltaMode===1?l:pt.deltaMode===2?Kn.innerHeight:1)*m;ot(pt.deltaX*st,pt.deltaY*st,0),d&&!K&&At.restart(!0)}},Q=function(pt){if(!C(pt)){var st=pt.clientX,et=pt.clientY,vt=st-J.x,nt=et-J.y;J.x=st,J.y=et,Lt=!0,d&&At.restart(!0),(vt||nt)&&it(vt,nt)}},ft=function(pt){J.event=pt,I(J)},lt=function(pt){J.event=pt,B(J)},dt=function(pt){return C(pt)||na(pt,h)&&X(J)};At=J._dc=_n.delayedCall(u||.25,S).pause(),J.deltaX=J.deltaY=0,J._vx=Nl(0,50,!0),J._vy=Nl(0,50,!0),J.scrollX=re,J.scrollY=Oe,J.isDragging=J.isGesturing=J.isPressed=!1,em(this),J.enable=function(at){return J.isEnabled||(kn(le?Gt:a,"scroll",Xu),o.indexOf("scroll")>=0&&kn(le?Gt:a,"scroll",D,Se,xt),o.indexOf("wheel")>=0&&kn(a,"wheel",j,Se,xt),(o.indexOf("touch")>=0&&jp||o.indexOf("pointer")>=0)&&(kn(a,Ci[0],gt,Se,xt),kn(Gt,Ci[2],W),kn(Gt,Ci[3],W),bt&&kn(a,"click",Bt,!0,!0),X&&kn(a,"click",dt),H&&kn(Gt,"gesturestart",tt),R&&kn(Gt,"gestureend",ct),I&&kn(a,pr+"enter",ft),B&&kn(a,pr+"leave",lt),k&&kn(a,pr+"move",Q)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=Lt=Ht=!1,J._vx.reset(),J._vy.reset(),He=re(),F=Oe(),at&&at.type&&gt(at),_t&&_t(J)),J},J.disable=function(){J.isEnabled&&($r.filter(function(at){return at!==J&&sa(at.target)}).length||zn(le?Gt:a,"scroll",Xu),J.isPressed&&(J._vx.reset(),J._vy.reset(),zn(K?a:Gt,Ci[1],ht,!0)),zn(le?Gt:a,"scroll",D,xt),zn(a,"wheel",j,xt),zn(a,Ci[0],gt,xt),zn(Gt,Ci[2],W),zn(Gt,Ci[3],W),zn(a,"click",Bt,!0),zn(a,"click",dt),zn(Gt,"gesturestart",tt),zn(Gt,"gestureend",ct),zn(a,pr+"enter",ft),zn(a,pr+"leave",lt),zn(a,pr+"move",Q),J.isEnabled=J.isPressed=J.isDragging=!1,Et&&Et(J))},J.kill=J.revert=function(){J.disable();var at=$r.indexOf(J);at>=0&&$r.splice(at,1),hs===J&&(hs=0)},$r.push(J),K&&sa(a)&&(hs=J),J.enable(_)},Zx(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Ge.version="3.15.1";Ge.create=function(s){return new Ge(s)};Ge.register=rm;Ge.getAll=function(){return $r.slice()};Ge.getById=function(s){return $r.filter(function(t){return t.vars.id===s})[0]};nm()&&_n.registerPlugin(Ge);var Rt,to,Kt,ve,oi,ge,of,Jl,_a,ua,oa,Ul,An,jl,Qu,Hn,om,am,eo,bm,qu,Tm,Vn,ju,wm,Em,zs,tf,af,no,lf,ks,ef,Yu,Ol=1,Rn=Date.now,$u=Rn(),vi=0,aa=0,lm=function(t,e,n){var i=ri(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},cm=function(t,e){return e&&(!ri(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},jx=function s(){return aa&&requestAnimationFrame(s)},hm=function(){return jl=1},um=function(){return jl=0},Yi=function(t){return t},la=function(t){return Math.round(t*1e5)/1e5||0},Am=function(){return typeof window<"u"},Rm=function(){return Rt||Am()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},yr=function(t){return!!~of.indexOf(t)},Cm=function(t){return(t==="Height"?lf:Kt["inner"+t])||oi["client"+t]||ge["client"+t]},Pm=function(t){return fs(t,"getBoundingClientRect")||(yr(t)?function(){return Zl.width=Kt.innerWidth,Zl.height=lf,Zl}:function(){return ds(t)})},tv=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=fs(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Cm(r):t["client"+r])||0}},ev=function(t,e){return!e||~Pi.indexOf(t)?Pm(t):function(){return Zl}},$i=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=fs(t,n))?o()-Pm(t)()[r]:yr(t)?(oi[n]||ge[n])-Cm(i):t[n]-t["offset"+i])},Fl=function(t,e){for(var n=0;n<eo.length;n+=3)(!e||~e.indexOf(eo[n+1]))&&t(eo[n],eo[n+1],eo[n+2])},ri=function(t){return typeof t=="string"},Cn=function(t){return typeof t=="function"},ca=function(t){return typeof t=="number"},mr=function(t){return typeof t=="object"},ra=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Kr=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Qr=Math.abs,Im="left",Lm="top",cf="right",hf="bottom",_r="width",xr="height",fa="Right",da="Left",pa="Top",ma="Bottom",Je="padding",_i="margin",so="Width",uf="Height",nn="px",xi=function(t){return Kt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},nv=function(t){var e=xi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},fm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ds=function(t,e){var n=e&&xi(t)[Qu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Kl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Dm=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},iv=function(t){return function(e){return Rt.utils.snap(Dm(t),e)}},ff=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},sv=function(t){return function(e,n){return ff(Dm(t))(e,n.direction)}},Bl=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},hn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},cn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},zl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},dm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},kl={toggleActions:"play",anticipatePin:0},Ql={top:0,left:0,center:.5,bottom:1,right:1},Xl=function(t,e){if(ri(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Ql?Ql[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Gl=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,m=ve.createElement("div"),_=yr(n)||fs(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?ge:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,E=y?c:h,v="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(v+=(i===Ze?cf:hf)+":"+(o+parseFloat(u))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=v,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],ql(m,0,i,y),m},ql=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+so]=1,r["border"+a+so]=0,r[n.p]=e+"px",Rt.set(t,r)},Jt=[],nf={},xa,pm=function(){return Rn()-vi>34&&(xa||(xa=requestAnimationFrame(ps)))},jr=function(){(!Vn||!Vn.isPressed||Vn.startX>ge.clientWidth)&&($t.cache++,Vn?xa||(xa=requestAnimationFrame(ps)):ps(),vi||Mr("scrollStart"),vi=Rn())},Zu=function(){Em=Kt.innerWidth,wm=Kt.innerHeight},ha=function(t){$t.cache++,(t===!0||!An&&!Tm&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!ju||Em!==Kt.innerWidth||Math.abs(Kt.innerHeight-wm)>Kt.innerHeight*.25))&&Jl.restart(!0)},Sr={},rv=[],Nm=function s(){return cn(qt,"scrollEnd",s)||gr(!0)},Mr=function(t){return Sr[t]&&Sr[t].map(function(e){return e()})||rv},si=[],Um=function(t){for(var e=0;e<si.length;e+=5)(!t||si[e+4]&&si[e+4].query===t)&&(si[e].style.cssText=si[e+1],si[e].getBBox&&si[e].setAttribute("transform",si[e+2]||""),si[e+3].uncache=1)},Om=function(){$t.cache++,$t.forEach(function(t){return Cn(t)&&(t.rec=t())})},df=function(t,e){var n;for(Hn=0;Hn<Jt.length;Hn++)n=Jt[Hn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));ks=!0,e&&Um(e),e||Mr("revert")},Fm=function(t,e){$t.cache++,(e||!Wn)&&$t.forEach(function(n){return Cn(n)&&n.cacheID++&&(n.rec=0)}),ri(t)&&(af=t,Kt.history.scrollRestoration!==t&&(Kt.history.scrollRestoration=t))},Wn,vr=0,mm,ov=function(){if(mm!==vr){var t=mm=vr;requestAnimationFrame(function(){return t===vr&&gr(!0)})}},Bm=function(){ge.appendChild(no),lf=!Vn&&no.offsetHeight||Kt.innerHeight,ge.removeChild(no)},gm=function(t){return _a(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},gr=function(t,e){if(oi=ve.documentElement,ge=ve.body,of=[Kt,ve,oi,ge],vi&&!t&&!ks){hn(qt,"scrollEnd",Nm);return}Bm(),Wn=qt.isRefreshing=!0,ks||Om();var n=Mr("refreshInit");bm&&qt.sort(),e||df(),$t.forEach(function(i){Cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Jt.slice(0).forEach(function(i){return i.refresh()}),ks=!1,Jt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),ef=1,gm(!0),Jt.forEach(function(i){var r=$i(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),gm(!1),ef=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),$t.forEach(function(i){Cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Fm(af,1),Jl.pause(),vr++,Wn=2,ps(2),Jt.forEach(function(i){return Cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Wn=qt.isRefreshing=!1,Mr("refresh")},sf=0,Yl=1,ga,ps=function(t){if(t===2||!Wn&&!ks){qt.isUpdating=!0,ga&&ga.update(0);var e=Jt.length,n=Rn(),i=n-$u>=50,r=e&&Jt[0].scroll();if(Yl=sf>r?-1:1,Wn||(sf=r),i&&(vi&&!jl&&n-vi>200&&(vi=0,Mr("scrollEnd")),oa=$u,$u=n),Yl<0){for(Hn=e;Hn-- >0;)Jt[Hn]&&Jt[Hn].update(0,i);Yl=1}else for(Hn=0;Hn<e;Hn++)Jt[Hn]&&Jt[Hn].update(0,i);qt.isUpdating=!1}xa=0},rf=[Im,Lm,hf,cf,_i+ma,_i+fa,_i+pa,_i+da,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$l=rf.concat([_r,xr,"boxSizing","max"+so,"max"+uf,"position",_i,Je,Je+pa,Je+fa,Je+ma,Je+da]),av=function(t,e,n){io(n);var i=t._gsap;if(i.spacerIsNative)io(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Ju=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=rf.length,o=e.style,a=t.style,l;r--;)l=rf[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[hf]=a[cf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[_r]=Kl(t,En)+nn,o[xr]=Kl(t,Ze)+nn,o[Je]=a[_i]=a[Lm]=a[Im]="0",io(i),a[_r]=a["max"+so]=n[_r],a[xr]=a["max"+uf]=n[xr],a[Je]=n[Je],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},lv=/([A-Z])/g,io=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(lv,"-$1").toLowerCase())}},Vl=function(t){for(var e=$l.length,n=t.style,i=[],r=0;r<e;r++)i.push($l[r],n[$l[r]]);return i.t=t,i},cv=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Zl={left:0,top:0},_m=function(t,e,n,i,r,o,a,l,c,h,d,u,f,m){Cn(t)&&(t=t(l)),ri(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Xl("0"+t.substr(3),n):0));var _=f?f.time():0,p,g,y;if(f&&f.seek(0),isNaN(t)||(t=+t),ca(t))f&&(t=Rt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&ql(a,n,i,!0);else{Cn(e)&&(e=e(l));var E=(t||"0").split(" "),v,T,w,x;y=Gn(e,l)||ge,v=ds(y)||{},(!v||!v.left&&!v.top)&&xi(y).display==="none"&&(x=y.style.display,y.style.display="block",v=ds(y),x?y.style.display=x:y.style.removeProperty("display")),T=Xl(E[0],v[i.d]),w=Xl(E[1]||"0",n),t=v[i.p]-c[i.p]-h+T+r-w,a&&ql(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var M=t+n,P=o._isStart;p="scroll"+i.d2,ql(o,M,i,P&&M>20||!P&&(d?Math.max(ge[p],oi[p]):o.parentNode[p])<=M+1),d&&(c=ds(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return f&&y&&(p=ds(y),f.seek(u),g=ds(y),f._caScrollDist=p[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},hv=/(webkit|moz|length|cssText|inset)/i,xm=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===ge){t._stOrig=r.cssText,a=xi(t);for(o in a)!+o&&!hv.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},zm=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Hl=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},vm=function(t,e){var n=us(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,m={};c=c||n();var _=zm(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){$t.cache++,o.tween&&ps()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Rt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},hn(t,"wheel",n.wheelHandler),qt.isTouch&&hn(t,"touchmove",n.wheelHandler),r},qt=(function(){function s(e,n){to||s.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),tf(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!aa){this.update=this.refresh=this.kill=Yi;return}n=fm(ri(n)||ca(n)||n.nodeType?{trigger:n}:n,kl);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,y=r.onSnapComplete,E=r.once,v=r.snap,T=r.pinReparent,w=r.pinSpacer,x=r.containerAnimation,M=r.fastScrollEnd,P=r.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?En:Ze,N=!d&&d!==0,L=Gn(n.scroller||Kt),z=Rt.core.getCache(L),I=yr(L),B=("pinType"in n?n.pinType:fs(L,"pinType")||I&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=N&&n.toggleActions.split(" "),K="markers"in n?n.markers:kl.markers,H=I?0:parseFloat(xi(L)["border"+A.p2+so])||0,R=this,Z=n.onRefreshInit&&function(){return n.onRefreshInit(R)},_t=tv(L,I,A),Et=ev(L,I),X=0,rt=0,xt=0,bt=us(L,A),mt,Nt,xe,At,Ht,Lt,Ft,he,ae,J,Qt,Xe,Se,re,Oe,He,F,fe,le,Gt,ut,ue,Dt,Bt,C,S,V,ot,it,ht,gt,W,tt,ct,D,j,Q,ft,lt;if(R._startClamp=R._endClamp=!1,R._dir=A,p*=45,R.scroller=L,R.scroll=x?x.time.bind(x):bt,At=bt(),ks&&bt.rec==null&&(bt.rec=At),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(bm=1,n.refreshPriority===-9999&&(ga=R)),z.tweenScroll=z.tweenScroll||{top:vm(L,Ze),left:vm(L,En)},R.tweenTo=mt=z.tweenScroll[A.p],R.scrubDuration=function(et){tt=ca(et)&&et,tt?W?W.duration(et):W=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return g&&g(R)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),ht=0,l||(l=i.vars.id)),v&&((!mr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ge.style&&Rt.set(I?[ge,oi]:L,{scrollBehavior:"auto"}),$t.forEach(function(et){return Cn(et)&&et.target===(I?ve.scrollingElement||oi:L)&&(et.smooth=!1)}),xe=Cn(v.snapTo)?v.snapTo:v.snapTo==="labels"?iv(i):v.snapTo==="labelsDirectional"?sv(i):v.directional!==!1?function(et,vt){return ff(v.snapTo)(et,Rn()-rt<500?0:vt.direction)}:Rt.utils.snap(v.snapTo),ct=v.duration||{min:.1,max:2},ct=mr(ct)?ua(ct.min,ct.max):ua(ct,ct),D=Rt.delayedCall(v.delay||tt/2||.1,function(){var et=bt(),vt=Rn()-rt<500,nt=mt.tween;if((vt||Math.abs(R.getVelocity())<10)&&!nt&&!jl&&X!==et){var Tt=(et-Lt)/re,jt=i&&!N?i.totalProgress():Tt,Wt=vt?0:(jt-gt)/(Rn()-oa)*1e3||0,Ce=Rt.utils.clamp(-Tt,1-Tt,Qr(Wt/2)*Wt/.185),qe=Tt+(v.inertia===!1?0:Ce),Pe,Me,me=v,Qe=me.onStart,be=me.onInterrupt,yn=me.onComplete;if(Pe=xe(qe,R),ca(Pe)||(Pe=qe),Me=Math.max(0,Math.round(Lt+Pe*re)),et<=Ft&&et>=Lt&&Me!==et){if(nt&&!nt._initted&&nt.data<=Qr(Me-et))return;v.inertia===!1&&(Ce=Pe-Tt),mt(Me,{duration:ct(Qr(Math.max(Qr(qe-jt),Qr(Pe-jt))*.185/Wt/.05||0)),ease:v.ease||"power3",data:Qr(Me-et),onInterrupt:function(){return D.restart(!0)&&be&&Kr(R,be)},onComplete:function(){R.update(),X=bt(),i&&!N&&(W?W.resetTo("totalProgress",Pe,i._tTime/i._tDur):i.progress(Pe)),ht=gt=i&&!N?i.totalProgress():R.progress,y&&y(R),yn&&Kr(R,yn)}},et,Ce*re,Me-et-Ce*re),Qe&&Kr(R,Qe,mt.tween)}}else R.isActive&&X!==et&&D.restart(!0)}).pause()),l&&(nf[l]=R),u=R.trigger=Gn(u||f!==!0&&f),lt=u&&u._gsap&&u._gsap.stRevert,lt&&(lt=lt(R)),f=f===!0?u:Gn(f),ri(a)&&(a={targets:u,className:a}),f&&(m===!1||m===_i||(m=!m&&f.parentNode&&f.parentNode.style&&xi(f.parentNode).display==="flex"?!1:Je),R.pin=f,Nt=Rt.core.getCache(f),Nt.spacer?Oe=Nt.pinState:(w&&(w=Gn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Nt.spacerIsNative=!!w,w&&(Nt.spacerState=Vl(w))),Nt.spacer=fe=w||ve.createElement("div"),fe.classList.add("pin-spacer"),l&&fe.classList.add("pin-spacer-"+l),Nt.pinState=Oe=Vl(f)),n.force3D!==!1&&Rt.set(f,{force3D:!0}),R.spacer=fe=Nt.spacer,it=xi(f),Bt=it[m+A.os2],Gt=Rt.getProperty(f),ut=Rt.quickSetter(f,A.a,nn),Ju(f,fe,it),F=Vl(f)),K){Xe=mr(K)?fm(K,dm):dm,J=Gl("scroller-start",l,L,A,Xe,0),Qt=Gl("scroller-end",l,L,A,Xe,0,J),le=J["offset"+A.op.d2];var dt=Gn(fs(L,"content")||L);he=this.markerStart=Gl("start",l,dt,A,Xe,le,0,x),ae=this.markerEnd=Gl("end",l,dt,A,Xe,le,0,x),x&&(ft=Rt.quickSetter([he,ae],A.a,nn)),!B&&!(Pi.length&&fs(L,"fixedMarkers")===!0)&&(nv(I?ge:L),Rt.set([J,Qt],{force3D:!0}),S=Rt.quickSetter(J,A.a,nn),ot=Rt.quickSetter(Qt,A.a,nn))}if(x){var at=x.vars.onUpdate,pt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),at&&at.apply(x,pt||[])})}if(R.previous=function(){return Jt[Jt.indexOf(R)-1]},R.next=function(){return Jt[Jt.indexOf(R)+1]},R.revert=function(et,vt){if(!vt)return R.kill(!0);var nt=et!==!1||!R.enabled,Tt=An;nt!==R.isReverted&&(nt&&(j=Math.max(bt(),R.scroll.rec||0),xt=R.progress,Q=i&&i.progress()),he&&[he,ae,J,Qt].forEach(function(jt){return jt.style.display=nt?"none":"block"}),nt&&(An=R,R.update(nt)),f&&(!T||!R.isActive)&&(nt?av(f,fe,Oe):Ju(f,fe,xi(f),C)),nt||R.update(nt),An=Tt,R.isReverted=nt)},R.refresh=function(et,vt,nt,Tt){if(!((An||!R.enabled)&&!vt)){if(f&&et&&vi){hn(s,"scrollEnd",Nm);return}!Wn&&Z&&Z(R),An=R,mt.tween&&!nt&&(mt.tween.kill(),mt.tween=0),W&&W.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(G){return G.vars.immediateRender&&G.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var jt=_t(),Wt=Et(),Ce=x?x.duration():$i(L,A),qe=re<=.01||!re,Pe=0,Me=Tt||0,me=mr(nt)?nt.end:n.end,Qe=n.endTrigger||u,be=mr(nt)?nt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),yn=R.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,R),Qn=u&&Math.max(0,Jt.indexOf(R))||0,Fe=Qn,Ye,je,jn,Fr,tn,Be,di,ko,cl,Es,b,U,Y;for(K&&mr(nt)&&(U=Rt.getProperty(J,A.p),Y=Rt.getProperty(Qt,A.p));Fe-- >0;)Be=Jt[Fe],Be.end||Be.refresh(0,1)||(An=R),di=Be.pin,di&&(di===u||di===f||di===yn)&&!Be.isReverted&&(Es||(Es=[]),Es.unshift(Be),Be.revert(!0,!0)),Be!==Jt[Fe]&&(Qn--,Fe--);for(Cn(be)&&(be=be(R)),be=lm(be,"start",R),Lt=_m(be,u,jt,A,bt(),he,J,R,Wt,H,B,Ce,x,R._startClamp&&"_startClamp")||(f?-.001:0),Cn(me)&&(me=me(R)),ri(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(ri(be)?be.split(" ")[0]:"")+me:(Pe=Xl(me.substr(2),jt),me=ri(be)?be:(x?Rt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Lt):Lt)+Pe,Qe=u)),me=lm(me,"end",R),Ft=Math.max(Lt,_m(me||(Qe?"100% 0":Ce),Qe,jt,A,bt()+Pe,ae,Qt,R,Wt,H,B,Ce,x,R._endClamp&&"_endClamp"))||-.001,Pe=0,Fe=Qn;Fe--;)Be=Jt[Fe]||{},di=Be.pin,di&&Be.start-Be._pinPush<=Lt&&!x&&Be.end>0&&(Ye=Be.end-(R._startClamp?Math.max(0,Be.start):Be.start),(di===u&&Be.start-Be._pinPush<Lt||di===yn)&&isNaN(be)&&(Pe+=Ye*(1-Be.progress)),di===f&&(Me+=Ye));if(Lt+=Pe,Ft+=Pe,R._startClamp&&(R._startClamp+=Pe),R._endClamp&&!Wn&&(R._endClamp=Ft||-.001,Ft=Math.min(Ft,$i(L,A))),re=Ft-Lt||(Lt-=.01)&&.001,qe&&(xt=Rt.utils.clamp(0,1,Rt.utils.normalize(Lt,Ft,j))),R._pinPush=Me,he&&Pe&&(Ye={},Ye[A.a]="+="+Pe,yn&&(Ye[A.p]="-="+bt()),Rt.set([he,ae],Ye)),f&&!(ef&&R.end>=$i(L,A)))Ye=xi(f),Fr=A===Ze,jn=bt(),ue=parseFloat(Gt(A.a))+Me,!Ce&&Ft>1&&(b=(I?ve.scrollingElement||oi:L).style,b={style:b,value:b["overflow"+A.a.toUpperCase()]},I&&xi(ge)["overflow"+A.a.toUpperCase()]!=="scroll"&&(b.style["overflow"+A.a.toUpperCase()]="scroll")),Ju(f,fe,Ye),F=Vl(f),je=ds(f,!0),ko=B&&us(L,Fr?En:Ze)(),m?(C=[m+A.os2,re+Me+nn],C.t=fe,Fe=m===Je?Kl(f,A)+re+Me:0,Fe&&(C.push(A.d,Fe+nn),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=Fe+nn)),io(C),yn&&Jt.forEach(function(G){G.pin===yn&&G.vars.pinSpacing!==!1&&(G._subPinOffset=!0)}),B&&bt(j)):(Fe=Kl(f,A),Fe&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=Fe+nn)),B&&(tn={top:je.top+(Fr?jn-Lt:ko)+nn,left:je.left+(Fr?ko:jn-Lt)+nn,boxSizing:"border-box",position:"fixed"},tn[_r]=tn["max"+so]=Math.ceil(je.width)+nn,tn[xr]=tn["max"+uf]=Math.ceil(je.height)+nn,tn[_i]=tn[_i+pa]=tn[_i+fa]=tn[_i+ma]=tn[_i+da]="0",tn[Je]=Ye[Je],tn[Je+pa]=Ye[Je+pa],tn[Je+fa]=Ye[Je+fa],tn[Je+ma]=Ye[Je+ma],tn[Je+da]=Ye[Je+da],He=cv(Oe,tn,T),Wn&&bt(0)),i?(cl=i._initted,qu(1),i.render(i.duration(),!0,!0),Dt=Gt(A.a)-ue+re+Me,V=Math.abs(re-Dt)>1,B&&V&&He.splice(He.length-2,2),i.render(0,!0,!0),cl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),qu(0)):Dt=re,b&&(b.value?b.style["overflow"+A.a.toUpperCase()]=b.value:b.style.removeProperty("overflow-"+A.a));else if(u&&bt()&&!x)for(je=u.parentNode;je&&je!==ge;)je._pinOffset&&(Lt-=je._pinOffset,Ft-=je._pinOffset),je=je.parentNode;Es&&Es.forEach(function(G){return G.revert(!1,!0)}),R.start=Lt,R.end=Ft,At=Ht=Wn?j:bt(),!x&&!Wn&&!ks&&(At<j&&bt(j),R.scroll.rec=0),R.revert(!1,!0),rt=Rn(),D&&(X=-1,D.restart(!0)),An=0,i&&N&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(qe||xt!==R.progress||x||_||i&&!i._initted)&&(i&&!N&&(i._initted||xt||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Lt<-.001&&!xt?Rt.utils.normalize(Lt,Ft,0):xt,!0),R.progress=qe||(At-Lt)/re===xt?0:xt),f&&m&&(fe._pinOffset=Math.round(R.progress*Dt)),W&&W.invalidate(),isNaN(U)||(U-=Rt.getProperty(J,A.p),Y-=Rt.getProperty(Qt,A.p),Hl(J,A,U),Hl(he,A,U-(Tt||0)),Hl(Qt,A,Y),Hl(ae,A,Y-(Tt||0))),qe&&!Wn&&R.update(),h&&!Wn&&!Se&&(Se=!0,h(R),Se=!1)}},R.getVelocity=function(){return(bt()-Ht)/(Rn()-oa)*1e3||0},R.endAnimation=function(){ra(R.callbackAnimation),i&&(W?W.progress(1):i.paused()?N||ra(i,R.direction<0,1):ra(i,i.reversed()))},R.labelToScroll=function(et){return i&&i.labels&&(Lt||R.refresh()||Lt)+i.labels[et]/i.duration()*re||0},R.getTrailing=function(et){var vt=Jt.indexOf(R),nt=R.direction>0?Jt.slice(0,vt).reverse():Jt.slice(vt+1);return(ri(et)?nt.filter(function(Tt){return Tt.vars.preventOverlaps===et}):nt).filter(function(Tt){return R.direction>0?Tt.end<=Lt:Tt.start>=Ft})},R.update=function(et,vt,nt){if(!(x&&!nt&&!et)){var Tt=Wn===!0?j:R.scroll(),jt=et?0:(Tt-Lt)/re,Wt=jt<0?0:jt>1?1:jt||0,Ce=R.progress,qe,Pe,Me,me,Qe,be,yn,Qn;if(vt&&(Ht=At,At=x?bt():Tt,v&&(gt=ht,ht=i&&!N?i.totalProgress():Wt)),p&&f&&!An&&!Ol&&vi&&(!Wt&&Lt<Tt+(Tt-Ht)/(Rn()-oa)*p?Wt=1e-4:Wt===1&&Ft>Tt+(Tt-Ht)/(Rn()-oa)*p&&(Wt=.9999)),Wt!==Ce&&R.enabled){if(qe=R.isActive=!!Wt&&Wt<1,Pe=!!Ce&&Ce<1,be=qe!==Pe,Qe=be||!!Wt!=!!Ce,R.direction=Wt>Ce?1:-1,R.progress=Wt,Qe&&!An&&(Me=Wt&&!Ce?0:Wt===1?1:Ce===1?2:3,N&&(me=!be&&O[Me+1]!=="none"&&O[Me+1]||O[Me],Qn=i&&(me==="complete"||me==="reset"||me in i))),P&&(be||Qn)&&(Qn||d||!i)&&(Cn(P)?P(R):R.getTrailing(P).forEach(function(jn){return jn.endAnimation()})),N||(W&&!An&&!Ol?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",Wt,i._tTime/i._tDur):(W.vars.totalProgress=Wt,W.invalidate().restart())):i&&i.totalProgress(Wt,!!(An&&(rt||et)))),f){if(et&&m&&(fe.style[m+A.os2]=Bt),!B)ut(la(ue+Dt*Wt));else if(Qe){if(yn=!et&&Wt>Ce&&Ft+1>Tt&&Tt+1>=$i(L,A),T)if(!et&&(qe||yn)){var Fe=ds(f,!0),Ye=Tt-Lt;xm(f,ge,Fe.top+(A===Ze?Ye:0)+nn,Fe.left+(A===Ze?0:Ye)+nn)}else xm(f,fe);io(qe||yn?He:F),V&&Wt<1&&qe||ut(ue+(Wt===1&&!yn?Dt:0))}}v&&!mt.tween&&!An&&!Ol&&D.restart(!0),a&&(be||E&&Wt&&(Wt<1||!Yu))&&_a(a.targets).forEach(function(jn){return jn.classList[qe||E?"add":"remove"](a.className)}),o&&!N&&!et&&o(R),Qe&&!An?(N&&(Qn&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),o&&o(R)),(be||!Yu)&&(c&&be&&Kr(R,c),k[Me]&&Kr(R,k[Me]),E&&(Wt===1?R.kill(!1,1):k[Me]=0),be||(Me=Wt===1?1:3,k[Me]&&Kr(R,k[Me]))),M&&!qe&&Math.abs(R.getVelocity())>(ca(M)?M:2500)&&(ra(R.callbackAnimation),W?W.progress(1):ra(i,me==="reverse"?1:!Wt,1))):N&&o&&!An&&o(R)}if(ot){var je=x?Tt/x.duration()*(x._caScrollDist||0):Tt;S(je+(J._isFlipped?1:0)),ot(je)}ft&&ft(-Tt/x.duration()*(x._caScrollDist||0))}},R.enable=function(et,vt){R.enabled||(R.enabled=!0,hn(L,"resize",ha),I||hn(L,"scroll",jr),Z&&hn(s,"refreshInit",Z),et!==!1&&(R.progress=xt=0,At=Ht=X=bt()),vt!==!1&&R.refresh())},R.getTween=function(et){return et&&mt?mt.tween:W},R.setPositions=function(et,vt,nt,Tt){if(x){var jt=x.scrollTrigger,Wt=x.duration(),Ce=jt.end-jt.start;et=jt.start+Ce*et/Wt,vt=jt.start+Ce*vt/Wt}R.refresh(!1,!1,{start:cm(et,nt&&!!R._startClamp),end:cm(vt,nt&&!!R._endClamp)},Tt),R.update()},R.adjustPinSpacing=function(et){if(C&&et){var vt=C.indexOf(A.d)+1;C[vt]=parseFloat(C[vt])+et+nn,C[1]=parseFloat(C[1])+et+nn,io(C)}},R.disable=function(et,vt){if(et!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,vt||W&&W.pause(),j=0,Nt&&(Nt.uncache=1),Z&&cn(s,"refreshInit",Z),D&&(D.pause(),mt.tween&&mt.tween.kill()&&(mt.tween=0)),!I)){for(var nt=Jt.length;nt--;)if(Jt[nt].scroller===L&&Jt[nt]!==R)return;cn(L,"resize",ha),I||cn(L,"scroll",jr)}},R.kill=function(et,vt){R.disable(et,vt),W&&!vt&&W.kill(),l&&delete nf[l];var nt=Jt.indexOf(R);nt>=0&&Jt.splice(nt,1),nt===Hn&&Yl>0&&Hn--,nt=0,Jt.forEach(function(Tt){return Tt.scroller===R.scroller&&(nt=1)}),nt||Wn||ks||(R.scroll.rec=0),i&&(i.scrollTrigger=null,et&&i.revert({kill:!1}),vt||i.kill()),he&&[he,ae,J,Qt].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),ga===R&&(ga=0),f&&(Nt&&(Nt.uncache=1),nt=0,Jt.forEach(function(Tt){return Tt.pin===f&&nt++}),nt||(Nt.spacer=0)),n.onKill&&n.onKill(R)},Jt.push(R),R.enable(!1,!1),lt&&lt(R),i&&i.add&&!re){var st=R.update;R.update=function(){R.update=st,$t.cache++,Lt||Ft||R.refresh()},Rt.delayedCall(.01,R.update),re=.01,Lt=Ft=0}else R.refresh();f&&ov()},s.register=function(n){return to||(Rt=n||Rm(),Am()&&window.document&&s.enable(),to=aa),to},s.defaults=function(n){if(n)for(var i in n)kl[i]=n[i];return kl},s.disable=function(n,i){aa=0,Jt.forEach(function(o){return o[i?"kill":"disable"](n)}),cn(Kt,"wheel",jr),cn(ve,"scroll",jr),clearInterval(Ul),cn(ve,"touchcancel",Yi),cn(ge,"touchstart",Yi),Bl(cn,ve,"pointerdown,touchstart,mousedown",hm),Bl(cn,ve,"pointerup,touchend,mouseup",um),Jl.kill(),Fl(cn);for(var r=0;r<$t.length;r+=3)zl(cn,$t[r],$t[r+1]),zl(cn,$t[r],$t[r+2])},s.enable=function(){if(Kt=window,ve=document,oi=ve.documentElement,ge=ve.body,Rt){if(_a=Rt.utils.toArray,ua=Rt.utils.clamp,tf=Rt.core.context||Yi,qu=Rt.core.suppressOverwrites||Yi,af=Kt.history.scrollRestoration||"auto",sf=Kt.pageYOffset||0,Rt.core.globals("ScrollTrigger",s),ge){aa=1,no=document.createElement("div"),no.style.height="100vh",no.style.position="absolute",Bm(),jx(),Ge.register(Rt),s.isTouch=Ge.isTouch,zs=Ge.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ju=Ge.isTouch===1,hn(Kt,"wheel",jr),of=[Kt,ve,oi,ge],Rt.matchMedia?(s.matchMedia=function(h){var d=Rt.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Rt.addEventListener("matchMediaInit",function(){Om(),df()}),Rt.addEventListener("matchMediaRevert",function(){return Um()}),Rt.addEventListener("matchMedia",function(){gr(0,1),Mr("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return Zu(),Zu})):console.warn("Requires GSAP 3.11.0 or later"),Zu(),hn(ve,"scroll",jr);var n=ge.hasAttribute("style"),i=ge.style,r=i.borderTopStyle,o=Rt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ds(ge),Ze.m=Math.round(a.top+Ze.sc())||0,En.m=Math.round(a.left+En.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(ge.setAttribute("style",""),ge.removeAttribute("style")),Ul=setInterval(pm,250),Rt.delayedCall(.5,function(){return Ol=0}),hn(ve,"touchcancel",Yi),hn(ge,"touchstart",Yi),Bl(hn,ve,"pointerdown,touchstart,mousedown",hm),Bl(hn,ve,"pointerup,touchend,mouseup",um),Qu=Rt.utils.checkPrefix("transform"),$l.push(Qu),to=Rn(),Jl=Rt.delayedCall(.2,gr).pause(),eo=[ve,"visibilitychange",function(){var h=Kt.innerWidth,d=Kt.innerHeight;ve.hidden?(om=h,am=d):(om!==h||am!==d)&&ha()},ve,"DOMContentLoaded",gr,Kt,"load",gr,Kt,"resize",ha],Fl(hn),Jt.forEach(function(h){return h.enable(0,1)}),l=0;l<$t.length;l+=3)zl(cn,$t[l],$t[l+1]),zl(cn,$t[l],$t[l+2])}else if(ve){var c=function h(){s.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(Yu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ul)||(Ul=i)&&setInterval(pm,i),"ignoreMobileResize"in n&&(ju=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fl(cn)||Fl(hn,n.autoRefreshEvents||"none"),Tm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Gn(n),o=$t.indexOf(r),a=yr(r);~o&&$t.splice(o,a?6:2),i&&(a?Pi.unshift(Kt,i,ge,i,oi,i):Pi.unshift(r,i))},s.clearMatchMedia=function(n){Jt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(ri(n)?Gn(n):n).getBoundingClientRect(),a=o[r?_r:xr]*i||0;return r?o.right-a>0&&o.left+a<Kt.innerWidth:o.bottom-a>0&&o.top+a<Kt.innerHeight},s.positionInViewport=function(n,i,r){ri(n)&&(n=Gn(n));var o=n.getBoundingClientRect(),a=o[r?_r:xr],l=i==null?a/2:i in Ql?Ql[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/Kt.innerWidth:(o.top+l)/Kt.innerHeight},s.killAll=function(n){if(Jt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Sr.killAll||[];Sr={},i.forEach(function(r){return r()})}},s})();qt.version="3.15.1";qt.saveStyles=function(s){return s?_a(s).forEach(function(t){if(t&&t.style){var e=si.indexOf(t);e>=0&&si.splice(e,5),si.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),tf())}}):si};qt.revert=function(s,t){return df(!s,t)};qt.create=function(s,t){return new qt(s,t)};qt.refresh=function(s){return s?ha(!0):(to||qt.register())&&gr(!0)};qt.update=function(s){return++$t.cache&&ps(s===!0?2:0)};qt.clearScrollMemory=Fm;qt.maxScroll=function(s,t){return $i(s,t?En:Ze)};qt.getScrollFunc=function(s,t){return us(Gn(s),t?En:Ze)};qt.getById=function(s){return nf[s]};qt.getAll=function(){return Jt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};qt.isScrolling=function(){return!!vi};qt.snapDirectional=ff;qt.addEventListener=function(s,t){var e=Sr[s]||(Sr[s]=[]);~e.indexOf(t)||e.push(t)};qt.removeEventListener=function(s,t){var e=Sr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};qt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Rt.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),u.push(m),r<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Cn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Cn(r)&&(r=r(),hn(qt,"refresh",function(){return r=t.batchMax()})),_a(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(qt.create(c))}),e};var ym=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ku=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ge.isTouch?" pinch-zoom":""):"none",t===oi&&s(ge,e)},Wl={auto:1,scroll:1},uv=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Rt.core.getCache(r),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==ge&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Wl[(l=xi(r)).overflowY]||Wl[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!yr(r)&&(Wl[(l=xi(r)).overflowY]||Wl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},km=function(t,e,n,i){return Ge.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&uv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&hn(ve,Ge.eventTypes[0],Mm,!1,!0)},onDisable:function(){return cn(ve,Ge.eventTypes[0],Mm,!0)}})},fv=/(input|label|select|textarea)/i,Sm,Mm=function(t){var e=fv.test(t.target.tagName);(e||Sm)&&(t._gsapAllow=!0,Sm=e)},dv=function(t){mr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Gn(t.target)||oi,h=Rt.core.globals().ScrollSmoother,d=h&&h.get(),u=zs&&(t.content&&Gn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=us(c,Ze),m=us(c,En),_=1,p=(Ge.isTouch&&Kt.visualViewport?Kt.visualViewport.scale*Kt.visualViewport.width:Kt.outerWidth)/Kt.innerWidth,g=0,y=Cn(i)?function(){return i(a)}:function(){return i||2.8},E,v,T=km(c,t.type,!0,r),w=function(){return v=!1},x=Yi,M=Yi,P=function(){l=$i(c,Ze),M=ua(zs?1:0,l),n&&(x=ua(0,$i(c,En))),E=vr},A=function(){u._gsap.y=la(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(v){requestAnimationFrame(w);var K=la(a.deltaY/2),H=M(f.v-K);if(u&&H!==f.v+f.offset){f.offset=H-f.v;var R=la((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=$t.cache,ps()}return!0}f.offset&&A(),v=!0},L,z,I,B,k=function(){P(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return u&&Rt.set(u,{y:"+=0"}),t.ignoreCheck=function(O){return zs&&O.type==="touchmove"&&N(O)||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){v=!1;var O=_;_=la((Kt.visualViewport&&Kt.visualViewport.scale||1)/p),L.pause(),O!==_&&Ku(c,_>1.01?!0:n?!1:"x"),z=m(),I=f(),P(),E=vr},t.onRelease=t.onGestureStart=function(O,K){if(f.offset&&A(),!K)B.restart(!0);else{$t.cache++;var H=y(),R,Z;n&&(R=m(),Z=R+H*.05*-O.velocityX/.227,H*=ym(m,R,Z,$i(c,En)),L.vars.scrollX=x(Z)),R=f(),Z=R+H*.05*-O.velocityY/.227,H*=ym(f,R,Z,$i(c,Ze)),L.vars.scrollY=M(Z),L.invalidate().duration(H).play(.01),(zs&&L.vars.scrollY>=l||R>=l-1)&&Rt.to({},{onUpdate:k,duration:H})}o&&o(O)},t.onWheel=function(){L._ts&&L.pause(),Rn()-g>1e3&&(E=0,g=Rn())},t.onChange=function(O,K,H,R,Z){if(vr!==E&&P(),K&&n&&m(x(R[2]===K?z+(O.startX-O.x):m()+K-R[1])),H){f.offset&&A();var _t=Z[2]===H,Et=_t?I+O.startY-O.y:f()+H-Z[1],X=M(Et);_t&&Et!==X&&(I+=X-Et),f(X)}(H||K)&&ps()},t.onEnable=function(){Ku(c,n?!1:"x"),qt.addEventListener("refresh",k),hn(Kt,"resize",k),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),T.enable()},t.onDisable=function(){Ku(c,!0),cn(Kt,"resize",k),qt.removeEventListener("refresh",k),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ge(t),a.iOS=zs,zs&&!f()&&f(1),zs&&Rt.ticker.add(Yi),B=a._dc,L=Rt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:zm(f,f(),function(){return L.pause()})},onUpdate:ps,onComplete:B.vars.onComplete}),a};qt.sort=function(s){if(Cn(s))return Jt.sort(s);var t=Kt.pageYOffset||0;return qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Kt.innerHeight}),Jt.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};qt.observe=function(s){return new Ge(s)};qt.normalizeScroll=function(s){if(typeof s>"u")return Vn;if(s===!0&&Vn)return Vn.enable();if(s===!1){Vn&&Vn.kill(),Vn=s;return}var t=s instanceof Ge?s:dv(s);return Vn&&Vn.target===t.target&&Vn.kill(),yr(t.target)&&(Vn=t),t};qt.core={_getVelocityProp:Nl,_inputObserver:km,_scrollers:$t,_proxies:Pi,bridge:{ss:function(){vi||Mr("scrollStart"),vi=Rn()},ref:function(){return An}}};Rm()&&Rt.registerPlugin(qt);var va,ya,Gm=typeof Symbol=="function"?Symbol():"_split",mf,pv=()=>mf||oo.register(window.gsap),Vm=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Sa=s=>s?typeof s=="string"?Sa(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((t,e)=>(typeof e=="string"?t.push(...Sa(e)):t.push(e),t),[]):[s]:[],Hm=s=>Sa(s).filter(t=>t&&t.nodeType===1),tc=[],pf=function(){},mv={add:s=>s()},gv=/\s+/g,Wm=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),ec={left:0,top:0,width:0,height:0},_v=(s,t)=>{for(;++t<s.length&&s[t]===ec;);return s[t]||ec},Xm=({element:s,html:t,ariaL:e,ariaH:n})=>{s.innerHTML=t,e?s.setAttribute("aria-label",e):s.removeAttribute("aria-label"),n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")},qm=(s,t)=>{if(t){let e=new Set(s.join("").match(t)||tc),n=s.length,i,r,o,a;if(e.size)for(;--n>-1;){r=s[n];for(o of e)if(o.startsWith(r)&&o.length>r.length){for(i=0,a=r;o.startsWith(a+=s[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){s[n]=o,s.splice(n+1,i);break}}}}return s},Ym=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),ro=(s,t,e)=>t.insertBefore(typeof s=="string"?document.createTextNode(s):s,e),gf=(s,t,e)=>{let n=t[s+"sClass"]||"",{tag:i="div",aria:r="auto",propIndex:o=!1}=t,a=s==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let d=document.createElement(i),u=e.length+1;return n&&(d.className=n+(l?" "+n+u:"")),o&&d.style.setProperty("--"+s,u+""),r!=="none"&&d.setAttribute("aria-hidden","true"),i!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(n=n.replace("++","")),c.collection=e,c},xv=(s,t,e,n)=>{let i=gf("line",e,n),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=r,s.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},$m=(s,t,e,n,i,r,o,a,l,c)=>{var h;let d=Array.from(s.childNodes),u=0,{wordDelimiter:f,reduceWhiteSpace:m=!0,prepareText:_}=t,p=s.getBoundingClientRect(),g=p,y=!m&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",E=r&&c&&window.getComputedStyle(s).direction==="rtl",v=0,T=e.collection,w,x,M,P,A,N,L,z,I,B,k,O,K,H,R,Z,_t,Et;for(typeof f=="object"?(M=f.delimiter||f,x=f.replaceWith||""):x=f===""?"":f||" ",w=x!==" ";u<d.length;u++)if(P=d[u],P.nodeType===3){for(R=P.textContent||"",m?R=R.replace(gv," "):y&&(R=R.replace(/\n/g,x+`
`)),_&&(R=_(R,s)),P.textContent=R,A=x||M?R.split(M||x):R.match(a)||tc,_t=A[A.length-1],z=w?_t.slice(-1)===" ":!_t,_t||A.pop(),g=p,L=w?A[0].charAt(0)===" ":!A[0],L&&ro(" ",s,P),A[0]||A.shift(),qm(A,l),r&&c||(P.textContent=""),I=1;I<=A.length;I++)if(Z=A[I-1],!m&&y&&Z.charAt(0)===`
`&&((h=P.previousSibling)==null||h.remove(),ro(document.createElement("br"),s,P),Z=Z.slice(1)),!m&&Z==="")ro(x,s,P);else if(Z===" ")s.insertBefore(document.createTextNode(" "),P);else{if(w&&Z.charAt(0)===" "&&ro(" ",s,P),v&&I===1&&!L&&T.indexOf(v.parentNode)>-1?(N=T[T.length-1],N.appendChild(document.createTextNode(n?"":Z))):(N=e(n?"":Z),ro(N,s,P),v&&I===1&&!L&&N.insertBefore(v,N.firstChild)),n){if(k=Vm?qm([...Vm.segment(Z)].map(X=>X.segment),l):Z.match(a)||tc,l){let X=Z.match(l);X&&X.some(rt=>k.indexOf(rt)<0)&&(k=Z.match(a)||tc)}for(Et=0;Et<k.length;Et++)N.appendChild(k[Et]===" "?document.createTextNode(" "):n(k[Et]))}if(r&&c){if(R=P.textContent=R.substring(Z.length+1,R.length),B=N.getBoundingClientRect(),B.top>g.top&&(E?B.left>=g.left:B.left<=g.left)){for(O=s.cloneNode(),K=s.childNodes[0];K&&K!==N;)H=K,K=K.nextSibling,O.appendChild(H);s.parentNode.insertBefore(O,s),i&&Ym(O)}g=B}(I<A.length||z)&&ro(I>=A.length?" ":w&&Z.slice(-1)===" "?" "+x:x,s,P)}s.removeChild(P),v=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(T.indexOf(P.previousSibling)>-1&&T[T.length-1].appendChild(P),v=P):($m(P,t,e,n,i,r,o,a,l,!0),v=0),i&&Ym(P))},Zm=class Jm{constructor(t,e){this.isSplit=!1,pv(),this.elements=Hm(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(r=>{var o;e.overwrite!==!1&&((o=r[Gm])==null||o._data.orig.filter(({element:a})=>a===r).forEach(Xm)),r[Gm]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let r=n.length,o;for(;r--;){o=n[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},pf(this),this.split(e)}split(t){return(this._ctx||mv).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,u=e.indexOf("words")>-1,f=d&&!u&&!h,m=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=m?new RegExp(m.source+"|"+Wm.source,"gu"):Wm,p=!!t.ignore&&Hm(t.ignore),{orig:g,animTime:y,obs:E}=this._data,v;(d||u||h)&&(this.elements.forEach((T,w)=>{g[w]={element:T,html:T.innerHTML,ariaL:T.getAttribute("aria-label"),ariaH:T.getAttribute("aria-hidden")},n==="auto"?T.setAttribute("aria-label",(T.textContent||"").trim()):n==="hidden"&&T.setAttribute("aria-hidden","true");let x=[],M=[],P=[],A=d?gf("char",t,x):null,N=gf("word",t,M),L,z,I,B;if($m(T,t,N,A,f,i&&(h||f),p,_,m,!1),h){let k=Sa(T.childNodes),O=xv(T,k,t,P),K,H=[],R=0,Z=window.getComputedStyle(T).direction==="rtl",_t=k.map(rt=>rt.nodeType===1?rt.getBoundingClientRect():ec),Et=ec,X;for(L=0;L<k.length;L++)K=k[L],K.nodeType===1&&(K.nodeName==="BR"?((!L||k[L-1].nodeName!=="BR")&&(H.push(K),O(R,L+1)),R=L+1,Et=_v(_t,L)):(X=_t[L],L&&X.top>Et.top&&(Z?X.left+X.width>Et.left+1:X.left<Et.left+Et.width-1)&&(O(R,L),R=L),Et=X));R<L&&O(R,L),H.forEach(rt=>{var xt;return(xt=rt.parentNode)==null?void 0:xt.removeChild(rt)})}if(!u){for(L=0;L<M.length;L++)if(z=M[L],d||!z.nextSibling||z.nextSibling.nodeType!==3)if(r&&!h){for(I=document.createElement("span"),I.style.whiteSpace="nowrap";z.firstChild;)I.appendChild(z.firstChild);z.replaceWith(I)}else z.replaceWith(...z.childNodes);else B=z.nextSibling,B&&B.nodeType===3&&(B.textContent=(z.textContent||"")+(B.textContent||""),z.remove());M.length=0,T.normalize()}this.lines.push(...P),this.words.push(...M),this.chars.push(...x)}),c&&this[c]&&this.masks.push(...this[c].map(T=>{let w=T.cloneNode();return T.replaceWith(w),w.appendChild(T),T.className&&(w.className=T.className.trim().split(" ").map(x=>x+"-mask").join(" ")),w.style.overflow="clip",w.style.verticalAlign="top",w}))),this.isSplit=!0,ya&&h&&a&&ya.addEventListener("loadingdone",this._split),(v=o&&o(this))&&v.totalTime&&(this._data.anim=y?v.totalTime(y):v),h&&a&&this.elements.forEach((T,w)=>{g[w].width=T.offsetWidth,E&&E.observe(T)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),ya?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Xm),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new Jm(t,e)}static register(t){va=va||t||window.gsap,va&&(Sa=va.utils.toArray,pf=va.core.context||pf),!mf&&window.innerWidth>0&&(ya=document.fonts,mf=!0)}};Zm.version="3.15.1";var oo=Zm;var Km="1.3.27";function tg(s,t,e){return Math.max(s,Math.min(t,e))}function vv(s,t,e){return(1-e)*s+e*t}function yv(s,t,e,n){return vv(s,t,1-Math.exp(-e*n))}function Sv(s,t){return(s%t+t)%t}var Mv=class{constructor(){Ot(this,"isRunning",!1);Ot(this,"value",0);Ot(this,"from",0);Ot(this,"to",0);Ot(this,"currentTime",0);Ot(this,"lerp");Ot(this,"duration");Ot(this,"easing");Ot(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=tg(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=yv(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function bv(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var Tv=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Ot(this,"width",0);Ot(this,"height",0);Ot(this,"scrollHeight",0);Ot(this,"scrollWidth",0);Ot(this,"debouncedResize");Ot(this,"wrapperResizeObserver");Ot(this,"contentResizeObserver");Ot(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ot(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ot(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=bv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},eg=class{constructor(){Ot(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},wv=100/6,Gs={passive:!1};function Qm(s,t){return s===1?wv:s===2?t:1}var Ev=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Ot(this,"touchStart",{x:0,y:0});Ot(this,"lastDelta",{x:0,y:0});Ot(this,"window",{width:0,height:0});Ot(this,"emitter",new eg);Ot(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Ot(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Ot(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Ot(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=Qm(n,this.window.width),r=Qm(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Ot(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Gs),this.element.addEventListener("touchstart",this.onTouchStart,Gs),this.element.addEventListener("touchmove",this.onTouchMove,Gs),this.element.addEventListener("touchend",this.onTouchEnd,Gs)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Gs),this.element.removeEventListener("touchstart",this.onTouchStart,Gs),this.element.removeEventListener("touchmove",this.onTouchMove,Gs),this.element.removeEventListener("touchend",this.onTouchEnd,Gs)}},jm=s=>Math.min(1,1.001-2**(-10*s)),ng=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:y=!0,autoRaf:E=!1,anchors:v=!1,autoToggle:T=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:M=x,stopInertiaOnNavigate:P=!1,respectReducedMotion:A=!0}={}){Ot(this,"_isScrolling",!1);Ot(this,"_isStopped",!1);Ot(this,"_isLocked",!1);Ot(this,"_preventNextNativeScrollEvent",!1);Ot(this,"_resetVelocityTimeout",null);Ot(this,"_rafId",null);Ot(this,"_isDraggingSelection",!1);Ot(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ot(this,"isTouching");Ot(this,"isIos");Ot(this,"time",0);Ot(this,"userData",{});Ot(this,"lastVelocity",0);Ot(this,"velocity",0);Ot(this,"direction",0);Ot(this,"options");Ot(this,"targetScroll");Ot(this,"animatedScroll");Ot(this,"animate",new Mv);Ot(this,"emitter",new eg);Ot(this,"dimensions");Ot(this,"virtualScroll");Ot(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Ot(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ot(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Ot(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Ot(this,"onPointerDown",s=>{s.button===1&&this.reset()});Ot(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||r&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ot(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ot(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Km,window.lenis||(window.lenis={}),window.lenis.version=Km,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=jm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:y,autoRaf:E,anchors:v,autoToggle:T,allowNestedScroll:w,naiveDimensions:M,stopInertiaOnNavigate:P,respectReducedMotion:A},this.dimensions=new Tv(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Ev(e,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(m=u),m){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),y=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(E)?0:E)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=tg(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=jm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,u,f,m;if(n-(i.time??0)>2e3){i.time=Date.now();let w=window.getComputedStyle(s);if(i.computedStyle=w,r=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,m=s.clientHeight,a=d>f,l=u>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,y,E,v,T;if(_==="horizontal")p=Math.round(s.scrollLeft),g=d-f,y=t,E=r,v=a,T=c;else if(_==="vertical")p=Math.round(s.scrollTop),g=u-m,y=e,E=o,v=l,T=h;else return!1;return!T&&(p>=g||p<=0)?!0:(y>0?p<g:p>0)&&E&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Sv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};pe.registerPlugin(qt,oo);qt.config({ignoreMobileResize:!0});var sn=(s,t=document)=>t.querySelector(s),Ma=(s,t=document)=>[...t.querySelectorAll(s)],_f=document.documentElement,Pn=_f.classList.contains("reduce"),nc=_f.classList.contains("fine");function ig(){if(Pn)return null;let s=new ng({lerp:.1,anchors:!0});return s.on("scroll",qt.update),pe.ticker.add(t=>s.raf(t*1e3)),pe.ticker.lagSmoothing(0),s}function sg(){let s=sn("[data-nav]");s&&qt.create({start:0,end:"max",onUpdate:t=>s.classList.toggle("is-away",t.direction===1&&t.scroll()>140&&!s.contains(document.activeElement))})}function rg(s,t){let e=sn("[data-curtain]"),n=sn("[data-count]"),i=!0;try{i=!sessionStorage.getItem("theia-seen"),sessionStorage.setItem("theia-seen","1")}catch{}if(_f.classList.add("ready"),Pn){e.style.display="none",t();return}let r=Promise.race([Promise.all([document.fonts.ready,s]),new Promise(a=>setTimeout(a,3500))]),o=()=>{t(),pe.timeline().to(n,{yPercent:-30,opacity:0,duration:.45,ease:"power3.in"},0).to(e,{yPercent:-100,duration:.95,ease:"expo.inOut"},.1).set(e,{display:"none"})};if(i){let a={v:0};pe.to(a,{v:100,duration:1.4,ease:"power2.inOut",onUpdate(){n.textContent=Math.round(a.v),n.style.fontStretch=50+a.v+"%"},onComplete(){r.then(o)}})}else n.textContent="",r.then(o)}function og(){let s=sn("[data-curtain]"),t=sn("[data-count]");document.addEventListener("click",e=>{let n=e.target.closest&&e.target.closest("a[href]");if(!n||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||n.target==="_blank"||Pn)return;let i=new URL(n.href,location.href);i.protocol!==location.protocol||i.host!==location.host||i.pathname===location.pathname||(e.preventDefault(),t.textContent="",pe.killTweensOf(s),pe.set(s,{display:"flex",yPercent:100}),pe.to(s,{yPercent:0,duration:.6,ease:"expo.inOut",onComplete(){location.href=n.href}}))}),window.addEventListener("pageshow",e=>{e.persisted&&pe.set(s,{display:"none"})})}function xf(s,t={}){Pn||!s||oo.create(s,{type:"lines",mask:"lines",autoSplit:!0,onSplit:e=>pe.from(e.lines,{yPercent:108,duration:1.15,ease:"expo.out",stagger:.09,...t})})}var Cg=0,qf=1,Pg=2;var Ha=1,Ig=2,Io=3,tr=0,vn=1,wi=2,Lr=0,Lo=1,Yf=2,$f=3,Zf=4,Lg=5;var Dr=100,Dg=101,Ng=102,Ug=103,Og=104,Fg=200,Bg=201,zg=202,kg=203,Jf=204,Kf=205,Gg=206,Vg=207,Hg=208,Wg=209,Xg=210,qg=211,Yg=212,$g=213,Zg=214,Ec=0,Ac=1,Rc=2,bo=3,Cc=4,Pc=5,Ic=6,Lc=7,Qf=0,Jg=1,Kg=2,Ei=0,jf=1,td=2,ed=3,nd=4,id=5,sd=6,rd=7;var od=300,Nr=301,Do=302,oh=303,ah=304,Dc=1e3,Ji=1001,Nc=1002,fn=1003,Qg=1004;var Wa=1005;var rn=1006,lh=1007;var Oi=1008;var fi=1009,ad=1010,ld=1011,No=1012,ch=1013,Fi=1014,Bi=1015,zi=1016,hh=1017,uh=1018,Ur=1020,cd=35902,hd=35899,ud=1021,fd=1022,ki=1023,Ss=1026,Ts=1027,dd=1028,fh=1029,er=1030,dh=1031;var ph=1033,Xa=33776,qa=33777,Ya=33778,$a=33779,mh=35840,gh=35841,_h=35842,xh=35843,vh=36196,yh=37492,Sh=37496,Mh=37488,bh=37489,Za=37490,Th=37491,wh=37808,Eh=37809,Ah=37810,Rh=37811,Ch=37812,Ph=37813,Ih=37814,Lh=37815,Dh=37816,Nh=37817,Uh=37818,Oh=37819,Fh=37820,Bh=37821,zh=36492,kh=36494,Gh=36495,Vh=36283,Hh=36284,Ja=36285,Wh=36286;var Aa=2300,Uc=2301,bc=2302,kf=2303,Gf=2400,Vf=2401,Hf=2402;var jg=3200;var Xh=0,t_=1,Gi="",xn="srgb",Ra="srgb-linear",Ca="linear",_e="srgb";var Tc=7680;var e_=519,n_=512,i_=513,s_=514,pd=515,r_=516,o_=517,md=518,gd=519,a_=35044;var _d="300 es",Si=2e3,Pa=2001;function Av(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Rv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function To(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function l_(){let s=To("canvas");return s.style.display="block",s}var ag={},wo=null;function xd(...s){let t="THREE."+s.shift();wo?wo("log",t,...s):console.log(t,...s)}function c_(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function zt(...s){s=c_(s);let t="THREE."+s.shift();if(wo)wo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function kt(...s){s=c_(s);let t="THREE."+s.shift();if(wo)wo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Rr(...s){let t=s.join(" ");t in ag||(ag[t]=!0,zt(...s))}function h_(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var u_={[Ec]:Ec,[Rc]:Ic,[Cc]:Cc,[bo]:Pc,[Ac]:Ac,[Ic]:Rc,[Lc]:Lc,[Pc]:bo},Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vf=Math.PI/180,Oc=180/Math.PI;function Ka(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function ie(s,t,e){return Math.max(t,Math.min(e,s))}function Cv(s,t){return(s%t+t)%t}function yf(s,t,e){return(1-e)*s+e*t}function f_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vd(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pv(s,t){if(t.constructor===Float32Array)return s;let e=vd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Iv(s,t){if(t.constructor===Float32Array)return s;let e=vd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Td=class Td{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Td.prototype.isVector2=!0;var se=Td,ci=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let y=Math.acos(p),E=Math.sin(y);g=Math.sin(g*y)/E,a=Math.sin(a*y)/E,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},wd=class wd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sf.copy(this).projectOnVector(t),this.sub(Sf)}reflect(t){return this.sub(Sf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wd.prototype.isVector3=!0;var $=wd,Sf=new $,lg=new ci,Ed=class Ed{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],y=i[1],E=i[4],v=i[7],T=i[2],w=i[5],x=i[8];return r[0]=o*_+a*y+l*T,r[3]=o*p+a*E+l*w,r[6]=o*g+a*v+l*x,r[1]=c*_+h*y+d*T,r[4]=c*p+h*E+d*w,r[7]=c*g+h*v+d*x,r[2]=u*_+f*y+m*T,r[5]=u*p+f*E+m*w,r[8]=u*g+f*v+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mf.makeScale(t,e)),this}rotate(t){return Rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mf.makeRotation(-t)),this}translate(t,e){return Rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ed.prototype.isMatrix3=!0;var Vt=Ed,Mf=new Vt,cg=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hg=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lv(){let s={enabled:!0,workingColorSpace:Ra,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(i.r=Mo(i.r),i.g=Mo(i.g),i.b=Mo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?Ca:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ra]:{primaries:t,whitePoint:n,transfer:Ca,toXYZ:cg,fromXYZ:hg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:cg,fromXYZ:hg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),s}var ne=Lv();function ys(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ao,Fc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ao===void 0&&(ao=To("canvas")),ao.width=t.width,ao.height=t.height;let i=ao.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ao}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=To("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ys(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dv=0,Eo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Ka(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(bf(i[o].image)):r.push(bf(i[o]))}else r=bf(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function bf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Nv=0,Tf=new $,Dn=class s extends Qi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ji,i=Ji,r=rn,o=Oi,a=ki,l=fi,c=s.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Ka(),this.name="",this.source=new Eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Tf).x}get height(){return this.source.getSize(Tf).y}get depth(){return this.source.getSize(Tf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==od)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dc:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case Nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dc:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case Nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=od;Dn.DEFAULT_ANISOTROPY=1;var Ad=class Ad{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,v=(f+1)/2,T=(g+1)/2,w=(h+u)/4,x=(d+_)/4,M=(m+p)/4;return E>v&&E>T?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=w/n,r=x/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=M/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=x/r,i=M/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ad.prototype.isVector4=!0;var Ae=Ad,Bc=class extends Qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Dn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Eo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Bc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ia=class extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zc=class extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var rh=class rh{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,p)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rh().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/lo.setFromMatrixColumn(t,0).length(),r=1/lo.setFromMatrixColumn(t,1).length(),o=1/lo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uv,t,Ov)}lookAt(t,e,n){let i=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Vs.crossVectors(n,ai),Vs.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Vs.crossVectors(n,ai)),Vs.normalize(),ic.crossVectors(ai,Vs),i[0]=Vs.x,i[4]=ic.x,i[8]=ai.x,i[1]=Vs.y,i[5]=ic.y,i[9]=ai.y,i[2]=Vs.z,i[6]=ic.z,i[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],E=n[7],v=n[11],T=n[15],w=i[0],x=i[4],M=i[8],P=i[12],A=i[1],N=i[5],L=i[9],z=i[13],I=i[2],B=i[6],k=i[10],O=i[14],K=i[3],H=i[7],R=i[11],Z=i[15];return r[0]=o*w+a*A+l*I+c*K,r[4]=o*x+a*N+l*B+c*H,r[8]=o*M+a*L+l*k+c*R,r[12]=o*P+a*z+l*O+c*Z,r[1]=h*w+d*A+u*I+f*K,r[5]=h*x+d*N+u*B+f*H,r[9]=h*M+d*L+u*k+f*R,r[13]=h*P+d*z+u*O+f*Z,r[2]=m*w+_*A+p*I+g*K,r[6]=m*x+_*N+p*B+g*H,r[10]=m*M+_*L+p*k+g*R,r[14]=m*P+_*z+p*O+g*Z,r[3]=y*w+E*A+v*I+T*K,r[7]=y*x+E*N+v*B+T*H,r[11]=y*M+E*L+v*k+T*R,r[15]=y*P+E*z+v*O+T*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],y=l*f-c*u,E=a*f-c*d,v=a*u-l*d,T=o*f-c*h,w=o*u-l*h,x=o*d-a*h;return e*(_*y-p*E+g*v)-n*(m*y-p*T+g*w)+i*(m*E-_*T+g*x)-r*(m*v-_*w+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],y=e*a-n*o,E=e*l-i*o,v=e*c-r*o,T=n*l-i*a,w=n*c-r*a,x=i*c-r*l,M=h*_-d*m,P=h*p-u*m,A=h*g-f*m,N=d*p-u*_,L=d*g-f*_,z=u*g-f*p,I=y*z-E*L+v*N+T*A-w*P+x*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return t[0]=(a*z-l*L+c*N)*B,t[1]=(i*L-n*z-r*N)*B,t[2]=(_*x-p*w+g*T)*B,t[3]=(u*w-d*x-f*T)*B,t[4]=(l*A-o*z-c*P)*B,t[5]=(e*z-i*A+r*P)*B,t[6]=(p*v-m*x-g*E)*B,t[7]=(h*x-u*v+f*E)*B,t[8]=(o*L-a*A+c*M)*B,t[9]=(n*A-e*L-r*M)*B,t[10]=(m*w-_*v+g*y)*B,t[11]=(d*v-h*w-f*y)*B,t[12]=(a*P-o*N-l*M)*B,t[13]=(e*N-n*P+i*M)*B,t[14]=(_*E-m*T-p*y)*B,t[15]=(h*T-d*E+u*y)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,_=o*h,p=o*d,g=a*d,y=l*c,E=l*h,v=l*d,T=n.x,w=n.y,x=n.z;return i[0]=(1-(_+g))*T,i[1]=(f+v)*T,i[2]=(m-E)*T,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(u+g))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(m+E)*x,i[9]=(p-y)*x,i[10]=(1-(u+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=lo.set(i[0],i[1],i[2]).length(),a=lo.set(i[4],i[5],i[6]).length(),l=lo.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ii.copy(this);let c=1/o,h=1/a,d=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=d,Ii.elements[9]*=d,Ii.elements[10]*=d,e.setFromRotationMatrix(Ii),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Si,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Si)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Pa)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Si,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Si)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Pa)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};rh.prototype.isMatrix4=!0;var Ve=rh,lo=new $,Ii=new Ve,Uv=new $(0,0,0),Ov=new $(1,1,1),Vs=new $,ic=new $,ai=new $,ug=new Ve,fg=new ci,Ui=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ug.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ug,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fg.setFromEuler(this),this.setFromQuaternion(fg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var La=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fv=0,dg=new $,co=new ci,ms=new Ve,sc=new $,ba=new $,Bv=new $,zv=new ci,pg=new $(1,0,0),mg=new $(0,1,0),gg=new $(0,0,1),_g={type:"added"},kv={type:"removed"},ho={type:"childadded",child:null},wf={type:"childremoved",child:null},bi=class s extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new $,e=new Ui,n=new ci,i=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Vt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return co.setFromAxisAngle(t,e),this.quaternion.multiply(co),this}rotateOnWorldAxis(t,e){return co.setFromAxisAngle(t,e),this.quaternion.premultiply(co),this}rotateX(t){return this.rotateOnAxis(pg,t)}rotateY(t){return this.rotateOnAxis(mg,t)}rotateZ(t){return this.rotateOnAxis(gg,t)}translateOnAxis(t,e){return dg.copy(t).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pg,t)}translateY(t){return this.translateOnAxis(mg,t)}translateZ(t){return this.translateOnAxis(gg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sc.copy(t):sc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(ba,sc,this.up):ms.lookAt(sc,ba,this.up),this.quaternion.setFromRotationMatrix(ms),i&&(ms.extractRotation(i.matrixWorld),co.setFromRotationMatrix(ms),this.quaternion.premultiply(co.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_g),ho.child=t,this.dispatchEvent(ho),ho.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kv),wf.child=t,this.dispatchEvent(wf),wf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_g),ho.child=t,this.dispatchEvent(ho),ho.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,t,Bv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,zv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bi.DEFAULT_UP=new $(0,1,0);bi.DEFAULT_MATRIX_AUTO_UPDATE=!0;bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ar=class extends bi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gv={type:"move"},Ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ar;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},d_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hs={h:0,s:0,l:0},rc={h:0,s:0,l:0};function Ef(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=Cv(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ef(o,r,t+1/3),this.g=Ef(o,r,t),this.b=Ef(o,r,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){let n=d_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return ne.workingToColorSpace(Ln.copy(this),t),Math.round(ie(Ln.r*255,0,255))*65536+Math.round(ie(Ln.g*255,0,255))*256+Math.round(ie(Ln.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,i=Ln.g,r=Ln.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=xn){ne.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,i=Ln.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hs),this.setHSL(Hs.h+t,Hs.s+e,Hs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hs),t.getHSL(rc);let n=yf(Hs.h,rc.h,e),i=yf(Hs.s,rc.s,e),r=yf(Hs.l,rc.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new Yt;Yt.NAMES=d_;var Cr=class extends bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Li=new $,gs=new $,Af=new $,_s=new $,uo=new $,fo=new $,xg=new $,Rf=new $,Cf=new $,Pf=new $,If=new Ae,Lf=new Ae,Df=new Ae,Ys=class s{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Li.subVectors(t,e),i.cross(Li);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Li.subVectors(i,e),gs.subVectors(n,e),Af.subVectors(t,e);let o=Li.dot(Li),a=Li.dot(gs),l=Li.dot(Af),c=gs.dot(gs),h=gs.dot(Af),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_s.x),l.addScaledVector(o,_s.y),l.addScaledVector(a,_s.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return If.setScalar(0),Lf.setScalar(0),Df.setScalar(0),If.fromBufferAttribute(t,e),Lf.fromBufferAttribute(t,n),Df.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(If,r.x),o.addScaledVector(Lf,r.y),o.addScaledVector(Df,r.z),o}static isFrontFacing(t,e,n,i){return Li.subVectors(n,e),gs.subVectors(t,e),Li.cross(gs).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),Li.cross(gs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;uo.subVectors(i,n),fo.subVectors(r,n),Rf.subVectors(t,n);let l=uo.dot(Rf),c=fo.dot(Rf);if(l<=0&&c<=0)return e.copy(n);Cf.subVectors(t,i);let h=uo.dot(Cf),d=fo.dot(Cf);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(uo,o);Pf.subVectors(t,r);let f=uo.dot(Pf),m=fo.dot(Pf);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(fo,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return xg.subVectors(r,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(xg,a);let g=1/(p+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(uo,o).addScaledVector(fo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$s=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Di):Di.fromBufferAttribute(r,o),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oc.copy(n.boundingBox)),oc.applyMatrix4(t.matrixWorld),this.union(oc)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ta),ac.subVectors(this.max,Ta),po.subVectors(t.a,Ta),mo.subVectors(t.b,Ta),go.subVectors(t.c,Ta),Ws.subVectors(mo,po),Xs.subVectors(go,mo),br.subVectors(po,go);let e=[0,-Ws.z,Ws.y,0,-Xs.z,Xs.y,0,-br.z,br.y,Ws.z,0,-Ws.x,Xs.z,0,-Xs.x,br.z,0,-br.x,-Ws.y,Ws.x,0,-Xs.y,Xs.x,0,-br.y,br.x,0];return!Nf(e,po,mo,go,ac)||(e=[1,0,0,0,1,0,0,0,1],!Nf(e,po,mo,go,ac))?!1:(lc.crossVectors(Ws,Xs),e=[lc.x,lc.y,lc.z],Nf(e,po,mo,go,ac))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xs=[new $,new $,new $,new $,new $,new $,new $,new $],Di=new $,oc=new $s,po=new $,mo=new $,go=new $,Ws=new $,Xs=new $,br=new $,Ta=new $,ac=new $,lc=new $,Tr=new $;function Nf(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Tr.fromArray(s,r);let a=i.x*Math.abs(Tr.x)+i.y*Math.abs(Tr.y)+i.z*Math.abs(Tr.z),l=t.dot(Tr),c=e.dot(Tr),h=n.dot(Tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ke=new $,cc=new se,Vv=0,Ki=class extends Qi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=a_,this.updateRanges=[],this.gpuType=Bi,this.version=0,this._normalizationScale=t!==void 0?vd(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cc.fromBufferAttribute(this,e),cc.applyMatrix3(t),this.setXY(e,cc.x,cc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pv(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Iv(t,this.array)}};var Da=class extends Ki{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Na=class extends Ki{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Mi=class extends Ki{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hv=new $s,wa=new $,Uf=new $,Ro=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hv.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wa.subVectors(t,this.center);let e=wa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(wa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wa.copy(t.center).add(Uf)),this.expandByPoint(wa.copy(t.center).sub(Uf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wv=0,yi=new Ve,Of=new bi,_o=new $,li=new $s,Ea=new $s,un=new $,Zs=class s extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Av(t)?Na:Da)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return Of.lookAt(t),Of.updateMatrix(),this.applyMatrix4(Of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];li.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ea.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(li.min,Ea.min),li.expandByPoint(un),un.addVectors(li.max,Ea.max),li.expandByPoint(un)):(li.expandByPoint(Ea.min),li.expandByPoint(Ea.max))}li.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(_o.fromBufferAttribute(t,c),un.add(_o)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ki(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new $,l[P]=new $;let h=new $,d=new $,u=new $,f=new se,m=new se,_=new se,p=new $,g=new $;function y(P,A,N){c[P]=c[A]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,N),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,A),_.fromBufferAttribute(r,N),d.sub(h),u.sub(h),m.sub(f),_.sub(f);let L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(L),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(L),a[P].add(p),a[A].add(p),a[N].add(p),l[P].add(g),l[A].add(g),l[N].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,A=E.length;P<A;++P){let N=E[P],L=N.start,z=N.count;for(let I=L,B=L+z;I<B;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new $,T=new $,w=new $,x=new $;function M(P){w.fromBufferAttribute(i,P),x.copy(w);let A=a[P];v.copy(A),v.sub(w.multiplyScalar(w.dot(A))).normalize(),T.crossVectors(x,A);let L=T.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,L)}for(let P=0,A=n.count;P<A;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ki(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new $,r=new $,o=new $,a=new $,l=new $,c=new $,h=new $,d=new $;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Ki(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ff=new $,Xv=new $,qv=new Vt,Ni=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ff.subVectors(n,e).cross(Xv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ff),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qv.getNormalMatrix(t),i=this.coplanarPoint(Ff).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Yv=0,Js=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=Lo,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jf,this.blendDst=Kf,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tc,this.stencilZFail=Tc,this.stencilZPass=Tc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new se().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vs=new $,Bf=new $,hc=new $,uc=new $,kc=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vs.copy(this.origin).addScaledVector(this.direction,e),vs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bf.copy(t).add(e).multiplyScalar(.5),hc.copy(e).sub(t).normalize(),uc.copy(this.origin).sub(Bf);let r=t.distanceTo(e)*.5,o=-this.direction.dot(hc),a=uc.dot(this.direction),l=-uc.dot(hc),c=uc.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Bf).addScaledVector(hc,u),f}intersectSphere(t,e){if(t.radius<0)return null;vs.subVectors(t.center,this.origin);let n=vs.dot(this.direction),i=vs.dot(vs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,y=n.y-o.y,E=n.z-o.z,v=Math.abs(l),T=Math.abs(c),w=Math.abs(h),x,M,P,A,N,L,z,I,B,k,O,K;if(v>=T&&v>=w?(P=l,L=d,B=m,K=g,l>=0?(x=c,M=h,A=u,N=f,z=_,I=p,k=y,O=E):(x=h,M=c,A=f,N=u,z=p,I=_,k=E,O=y)):T>=w?(P=c,L=u,B=_,K=y,c>=0?(x=h,M=l,A=f,N=d,z=p,I=m,k=E,O=g):(x=l,M=h,A=d,N=f,z=m,I=p,k=g,O=E)):(P=h,L=f,B=p,K=E,h>=0?(x=l,M=c,A=d,N=u,z=m,I=_,k=g,O=y):(x=c,M=l,A=u,N=d,z=_,I=m,k=y,O=g)),P===0)return null;let H=x/P,R=M/P,Z=1/P,_t=A-H*L,Et=N-R*L,X=z-H*B,rt=I-R*B,xt=k-H*K,bt=O-R*K,mt=xt*rt-bt*X,Nt=_t*bt-Et*xt,xe=X*Et-rt*_t;if(i){if(mt<0||Nt<0||xe<0)return null}else if((mt<0||Nt<0||xe<0)&&(mt>0||Nt>0||xe>0))return null;let At=mt+Nt+xe;if(At===0)return null;let Ht=Z*(mt*L+Nt*B+xe*K);return(At>0?Ht<0:Ht>0)?null:this.at(Ht/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pr=class extends Js{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},vg=new Ve,wr=new kc,fc=new Ro,yg=new $,dc=new $,pc=new $,mc=new $,zf=new $,gc=new $,Sg=new $,_c=new $,Nn=class extends bi{constructor(t=new Zs,e=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){gc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(zf.fromBufferAttribute(d,t),o?gc.addScaledVector(zf,h):gc.addScaledVector(zf.sub(e),h))}e.add(gc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(r),wr.copy(t.ray).recast(t.near),!(fc.containsPoint(wr.origin)===!1&&(wr.intersectSphere(fc,yg)===null||wr.origin.distanceToSquared(yg)>(t.far-t.near)**2))&&(vg.copy(r).invert(),wr.copy(t.ray).applyMatrix4(vg),!(n.boundingBox!==null&&wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,T=E;v<T;v+=3){let w=a.getX(v),x=a.getX(v+1),M=a.getX(v+2);i=xc(this,g,t,n,c,h,d,w,x,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let y=a.getX(p),E=a.getX(p+1),v=a.getX(p+2);i=xc(this,o,t,n,c,h,d,y,E,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,T=E;v<T;v+=3){let w=v,x=v+1,M=v+2;i=xc(this,g,t,n,c,h,d,w,x,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let y=p,E=p+1,v=p+2;i=xc(this,o,t,n,c,h,d,y,E,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function $v(s,t,e,n,i,r,o,a){let l;if(t.side===vn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===tr,a),l===null)return null;_c.copy(a),_c.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(_c);return c<e.near||c>e.far?null:{distance:c,point:_c.clone(),object:s}}function xc(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,dc),s.getVertexPosition(l,pc),s.getVertexPosition(c,mc);let h=$v(s,t,e,n,dc,pc,mc,Sg);if(h){let d=new $;Ys.getBarycoord(Sg,dc,pc,mc,d),i&&(h.uv=Ys.getInterpolatedAttribute(i,a,l,c,d,new se)),r&&(h.uv1=Ys.getInterpolatedAttribute(r,a,l,c,d,new se)),o&&(h.normal=Ys.getInterpolatedAttribute(o,a,l,c,d,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new $,materialIndex:0};Ys.getNormal(dc,pc,mc,u.normal),h.face=u,h.barycoord=d}return h}var Gc=class extends Dn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=fn,h=fn,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Er=new Ro,Zv=new se(.5,.5),vc=new $,Ir=class{constructor(t=new Ni,e=new Ni,n=new Ni,i=new Ni,r=new Ni,o=new Ni){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],y=r[12],E=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-o,f-h,g-m,T-y).normalize(),i[1].setComponents(c+o,f+h,g+m,T+y).normalize(),i[2].setComponents(c+a,f+d,g+_,T+E).normalize(),i[3].setComponents(c-a,f-d,g-_,T-E).normalize(),n)i[4].setComponents(l,u,p,v).normalize(),i[5].setComponents(c-l,f-u,g-p,T-v).normalize();else if(i[4].setComponents(c-l,f-u,g-p,T-v).normalize(),e===Si)i[5].setComponents(c+l,f+u,g+p,T+v).normalize();else if(e===Pa)i[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(t){Er.center.set(0,0,0);let e=Zv.distanceTo(t.center);return Er.radius=.7071067811865476+e,Er.applyMatrix4(t.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(vc.x=i.normal.x>0?t.max.x:t.min.x,vc.y=i.normal.y>0?t.max.y:t.min.y,vc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(vc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mg=new Ve,Vc=class s{constructor(){this.coordinateSystem=Si,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Mg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ir),n[i].setFromProjectionMatrix(Mg,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Ir),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Ua=class extends Dn{constructor(t=[],e=Nr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oa=class extends Dn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ms=class extends Dn{constructor(t,e,n=Fi,i,r,o,a=fn,l=fn,c,h=Ss,d=1){if(h!==Ss&&h!==Ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Eo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fa=class extends Ms{constructor(t,e=Fi,n=Nr,i,r,o=fn,a=fn,l,c=Ss){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ba=class extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ji=class s extends Zs{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Mi(c,3)),this.setAttribute("normal",new Mi(h,3)),this.setAttribute("uv",new Mi(d,2));function m(_,p,g,y,E,v,T,w,x,M,P){let A=v/x,N=T/M,L=v/2,z=T/2,I=w/2,B=x+1,k=M+1,O=0,K=0,H=new $;for(let R=0;R<k;R++){let Z=R*N-z;for(let _t=0;_t<B;_t++){let Et=_t*A-L;H[_]=Et*y,H[p]=Z*E,H[g]=I,c.push(H.x,H.y,H.z),H[_]=0,H[p]=0,H[g]=w>0?1:-1,h.push(H.x,H.y,H.z),d.push(_t/x),d.push(1-R/M),O+=1}}for(let R=0;R<M;R++)for(let Z=0;Z<x;Z++){let _t=u+Z+B*R,Et=u+Z+B*(R+1),X=u+(Z+1)+B*(R+1),rt=u+(Z+1)+B*R;l.push(_t,Et,rt),l.push(Et,X,rt),K+=6}a.addGroup(f,K,P),f+=K,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var bs=class s extends Zs{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let y=g*u-o;for(let E=0;E<c;E++){let v=E*d-r;m.push(v,-y,0),_.push(0,0,1),p.push(E/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let E=y+c*g,v=y+c*(g+1),T=y+1+c*(g+1),w=y+1+c*g;f.push(E,v,w),f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new Mi(m,3)),this.setAttribute("normal",new Mi(_,3)),this.setAttribute("uv",new Mi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};function Or(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(bg(i))i.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(bg(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Un(s){let t={};for(let e=0;e<s.length;e++){let n=Or(s[e]);for(let i in n)t[i]=n[i]}return t}function bg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Jv(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function yd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var p_={clone:Or,merge:Un},Kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ti=class extends Js{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kv,this.fragmentShader=Qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=Jv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(i.value);break;case"v2":this.uniforms[n].value=new se().fromArray(i.value);break;case"v3":this.uniforms[n].value=new $().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Hc=class extends Ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wc=class extends Js{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},za=class extends Wc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Rr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Rr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Xc=class extends Js{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qc=class extends Js{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xo(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function yc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ks=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yc=class extends Ks{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gf,endingEnd:Gf}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vf:r=t,a=2*e-n;break;case Hf:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vf:o=t,l=2*n-e;break;case Hf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,y=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,E=(-1-f)*p+(1.5+f)*_+.5*m,v=f*p-f*_;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+y*o[c+T]+E*o[l+T]+v*o[d+T];return r}},$c=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Zc=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Jc=class extends Ks{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=f*u+m*2,y=d[g],E=d[g+1],v=t*u+m*2,T=h[v],w=h[v+1],x=ty(n,e,y,T,i);r[m]=m_(x,_,E,w,p)}return r}};function m_(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function jv(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function ty(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=m_(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=jv(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ui=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xo(e,this.TimeBufferType),this.values=xo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xo(t.times,Array),values:xo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),yc(t.settings)&&(n.settings={inTangents:xo(t.settings.inTangents,Array),outTangents:xo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Jc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Aa:e=this.InterpolantFactoryMethodDiscrete;break;case Uc:e=this.InterpolantFactoryMethodLinear;break;case bc:e=this.InterpolantFactoryMethodSmooth;break;case kf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return Uc;case this.InterpolantFactoryMethodSmooth:return bc;case this.InterpolantFactoryMethodBezier:return kf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;yc(this.settings)&&(Tg(this.settings.inTangents,t),Tg(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;yc(this.settings)&&(wg(this.settings.inTangents,t),wg(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Rv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,yc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Tg(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function wg(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Uc;var Qs=class extends ui{constructor(t,e,n){super(t,e,n)}};Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Aa;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Kc.prototype.ValueTypeName="color";var Qc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Qc.prototype.ValueTypeName="number";var jc=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)ci.slerpFlat(r,0,o,c-a,o,c,l);return r}},ka=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new jc(this.times,this.values,this.getValueSize(),t)}};ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;var js=class extends ui{constructor(t,e,n){super(t,e,n)}};js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Aa;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;var th=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};th.prototype.ValueTypeName="vector";var wc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Eg(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Eg(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Eg(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var eh=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},g_=new eh,Co=class{constructor(t){this.manager=t!==void 0?t:g_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Co.DEFAULT_MATERIAL_NAME="__DEFAULT";var vo=new WeakMap,nh=class extends Co{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=wc.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=vo.get(o);d===void 0&&(d=[],vo.set(o,d)),d.push({onLoad:e,onError:i})}return o}let a=To("img");function l(){h(),e&&e(this);let d=vo.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}vo.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),wc.remove(`image:${t}`);let u=vo.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(d)}vo.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),wc.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}};var Ga=class extends Co{constructor(t){super(t)}load(t,e,n,i){let r=new Dn,o=new nh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}};var Sc=new $,Mc=new ci,Zi=new $,Va=class extends bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sc,Mc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,Zi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sc,Mc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qs=new $,Ag=new se,Rg=new se,Xn=class extends Va{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oc*2*Math.atan(Math.tan(vf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qs.x,qs.y).multiplyScalar(-t/qs.z),qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qs.x,qs.y).multiplyScalar(-t/qs.z)}getViewSize(t,e){return this.getViewBounds(t,Ag,Rg),e.subVectors(Rg,Ag)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vf*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ih=class extends Va{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var yo=-90,So=1,Po=class extends bi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xn(yo,So,t,e);i.layers=this.layers,this.add(i);let r=new Xn(yo,So,t,e);r.layers=this.layers,this.add(r);let o=new Xn(yo,So,t,e);o.layers=this.layers,this.add(o);let a=new Xn(yo,So,t,e);a.layers=this.layers,this.add(a);let l=new Xn(yo,So,t,e);l.layers=this.layers,this.add(l);let c=new Xn(yo,So,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},sh=class extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Sd="\\[\\]\\.:\\/",ey=new RegExp("["+Sd+"]","g"),Md="[^"+Sd+"]",ny="[^"+Sd.replace("\\.","")+"]",iy=/((?:WC+[\/:])*)/.source.replace("WC",Md),sy=/(WCOD+)?/.source.replace("WCOD",ny),ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Md),oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Md),ay=new RegExp("^"+iy+sy+ry+oy+"$"),ly=["material","materials","bones","map"],Wf=class{constructor(t,e,n){let i=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ey,"")}static parseTrackName(t){let e=ay.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);ly.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Wf;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G1=new Float32Array(1);var Rd=class Rd{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Rd.prototype.isMatrix2=!0;var Xf=Rd;function bd(s,t,e,n){let i=cy(n);switch(e){case ud:return s*t;case dd:return s*t/i.components*i.byteLength;case fh:return s*t/i.components*i.byteLength;case er:return s*t*2/i.components*i.byteLength;case dh:return s*t*2/i.components*i.byteLength;case fd:return s*t*3/i.components*i.byteLength;case ki:return s*t*4/i.components*i.byteLength;case ph:return s*t*4/i.components*i.byteLength;case Xa:case qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ya:case $a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gh:case xh:return Math.max(s,16)*Math.max(t,8)/4;case mh:case _h:return Math.max(s,8)*Math.max(t,8)/2;case vh:case yh:case Mh:case bh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sh:case Za:case Th:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Bh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case zh:case kh:case Gh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Vh:case Hh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ja:case Wh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cy(s){switch(s){case fi:case ad:return{byteLength:1,components:1};case No:case ld:case zi:return{byteLength:2,components:1};case hh:case uh:return{byteLength:2,components:4};case Fi:case ch:case Bi:return{byteLength:4,components:1};case cd:case hd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function B_(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function dy(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,my=`#ifdef USE_ALPHAHASH
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
#endif`,gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yy=`#ifdef USE_AOMAP
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
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
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
#endif`,by=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ey=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ay=`#ifdef USE_IRIDESCENCE
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
#endif`,Ry=`#ifdef USE_BUMPMAP
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Fy=`#define PI 3.141592653589793
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
} // validated`,By=`vec3 transformedNormal = objectNormal;
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
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xy=`#ifdef USE_ENVMAP
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
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tS=`#ifdef USE_GRADIENTMAP
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
}`,eS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rS=`#ifdef USE_ENVMAP
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
#endif`,oS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hS=`PhysicalMaterial material;
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
#endif`,uS=`uniform sampler2D dfgLUT;
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
}`,fS=`
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
#endif`,dS=`#if defined( RE_IndirectDiffuse )
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
#endif`,pS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,gS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bS=`#if defined( USE_POINTS_UV )
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
#endif`,TS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ES=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AS=`#if defined( USE_MORPHCOLORS )
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
#endif`,RS=`#ifdef USE_MORPHNORMALS
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
#endif`,PS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,US=`#ifndef FLAT_SHADED
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
#endif`,FS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GS=`#ifdef OPAQUE
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
}`,HS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$S=`#ifdef USE_ROUGHNESSMAP
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
#endif`,KS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QS=`float getShadowMask() {
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
}`,jS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tM=`#ifdef USE_SKINNING
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
#endif`,eM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#ifdef USE_TRANSMISSION
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pM=`uniform sampler2D t2D;
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`uniform float backgroundBlurriness;
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`#include <common>
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
}`,yM=`#if DEPTH_PACKING == 3200
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
}`,SM=`#define DISTANCE
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
}`,MM=`#define DISTANCE
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TM=`uniform sampler2D tEquirect;
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
}`,EM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,RM=`uniform vec3 diffuse;
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
}`,PM=`#define LAMBERT
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
}`,IM=`#define MATCAP
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
}`,LM=`#define MATCAP
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
}`,DM=`#define NORMAL
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
}`,NM=`#define NORMAL
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
}`,UM=`#define PHONG
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
}`,FM=`#define STANDARD
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
}`,BM=`#define STANDARD
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
}`,zM=`#define TOON
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
}`,kM=`#define TOON
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
}`,GM=`uniform float size;
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
}`,HM=`#include <common>
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
}`,WM=`uniform vec3 color;
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
}`,XM=`uniform float rotation;
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
}`,qM=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:py,alphahash_pars_fragment:my,alphamap_fragment:gy,alphamap_pars_fragment:_y,alphatest_fragment:xy,alphatest_pars_fragment:vy,aomap_fragment:yy,aomap_pars_fragment:Sy,batching_pars_vertex:My,batching_vertex:by,begin_vertex:Ty,beginnormal_vertex:wy,bsdfs:Ey,iridescence_fragment:Ay,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:Iy,clipping_planes_vertex:Ly,color_fragment:Dy,color_pars_fragment:Ny,color_pars_vertex:Uy,color_vertex:Oy,common:Fy,defaultnormal_vertex:By,displacementmap_pars_vertex:zy,displacementmap_vertex:ky,emissivemap_fragment:Gy,emissivemap_pars_fragment:Vy,colorspace_fragment:Hy,colorspace_pars_fragment:Wy,envmap_fragment:Xy,envmap_common_pars_fragment:qy,envmap_pars_fragment:Yy,envmap_pars_vertex:$y,envmap_physical_pars_fragment:rS,envmap_vertex:Zy,fog_vertex:Jy,fog_pars_vertex:Ky,fog_fragment:Qy,fog_pars_fragment:jy,gradientmap_pars_fragment:tS,lightmap_pars_fragment:eS,lights_lambert_fragment:nS,lights_lambert_pars_fragment:iS,lights_pars_begin:sS,lights_toon_fragment:oS,lights_toon_pars_fragment:aS,lights_phong_fragment:lS,lights_phong_pars_fragment:cS,lights_physical_fragment:hS,lights_physical_pars_fragment:uS,lights_fragment_begin:fS,lights_fragment_maps:dS,lights_fragment_end:pS,lightprobes_pars_fragment:mS,logdepthbuf_fragment:gS,logdepthbuf_pars_fragment:_S,logdepthbuf_pars_vertex:xS,logdepthbuf_vertex:vS,map_fragment:yS,map_pars_fragment:SS,map_particle_fragment:MS,map_particle_pars_fragment:bS,metalnessmap_fragment:TS,metalnessmap_pars_fragment:wS,morphinstance_vertex:ES,morphcolor_vertex:AS,morphnormal_vertex:RS,morphtarget_pars_vertex:CS,morphtarget_vertex:PS,normal_fragment_begin:IS,normal_fragment_maps:LS,normal_pars_fragment:DS,normal_pars_vertex:NS,normal_vertex:US,normalmap_pars_fragment:OS,clearcoat_normal_fragment_begin:FS,clearcoat_normal_fragment_maps:BS,clearcoat_pars_fragment:zS,iridescence_pars_fragment:kS,opaque_fragment:GS,packing:VS,premultiplied_alpha_fragment:HS,project_vertex:WS,dithering_fragment:XS,dithering_pars_fragment:qS,roughnessmap_fragment:YS,roughnessmap_pars_fragment:$S,shadowmap_pars_fragment:ZS,shadowmap_pars_vertex:JS,shadowmap_vertex:KS,shadowmask_pars_fragment:QS,skinbase_vertex:jS,skinning_pars_vertex:tM,skinning_vertex:eM,skinnormal_vertex:nM,specularmap_fragment:iM,specularmap_pars_fragment:sM,tonemapping_fragment:rM,tonemapping_pars_fragment:oM,transmission_fragment:aM,transmission_pars_fragment:lM,uv_pars_fragment:cM,uv_pars_vertex:hM,uv_vertex:uM,worldpos_vertex:fM,background_vert:dM,background_frag:pM,backgroundCube_vert:mM,backgroundCube_frag:gM,cube_vert:_M,cube_frag:xM,depth_vert:vM,depth_frag:yM,distance_vert:SM,distance_frag:MM,equirect_vert:bM,equirect_frag:TM,linedashed_vert:wM,linedashed_frag:EM,meshbasic_vert:AM,meshbasic_frag:RM,meshlambert_vert:CM,meshlambert_frag:PM,meshmatcap_vert:IM,meshmatcap_frag:LM,meshnormal_vert:DM,meshnormal_frag:NM,meshphong_vert:UM,meshphong_frag:OM,meshphysical_vert:FM,meshphysical_frag:BM,meshtoon_vert:zM,meshtoon_frag:kM,points_vert:GM,points_frag:VM,shadow_vert:HM,shadow_frag:WM,sprite_vert:XM,sprite_frag:qM},Mt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},es={basic:{uniforms:Un([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Un([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Un([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Un([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Un([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Un([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Un([Mt.points,Mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Un([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Un([Mt.common,Mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Un([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Un([Mt.sprite,Mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Un([Mt.common,Mt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Un([Mt.lights,Mt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};es.physical={uniforms:Un([es.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var qh={r:0,b:0,g:0},YM=new Ve,z_=new Vt;z_.set(-1,0,0,0,1,0,0,0,1);function $M(s,t,e,n,i,r){let o=new Yt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let v=y.backgroundBlurriness>0;E=t.get(E,v)}return E}function m(y){let E=!1,v=f(y);v===null?p(o,a):v&&v.isColor&&(p(v,1),E=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,E){let v=f(E);v&&v.isCubeTexture?(c===void 0&&(c=new Nn(new ji(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Or(es.backgroundCube.uniforms),vertexShader:es.backgroundCube.vertexShader,fragmentShader:es.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(YM.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(z_),c.material.toneMapped=ne.getTransfer(v.colorSpace)!==_e,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Nn(new bs(2,2),new Ti({name:"BackgroundMaterial",uniforms:Or(es.background.uniforms),vertexShader:es.background.vertexShader,fragmentShader:es.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,E){y.getRGB(qh,yd(s)),e.buffers.color.setClear(qh.r,qh.g,qh.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:_,dispose:g}}function ZM(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(N,L,z,I,B){let k=!1,O=d(N,I,z,L);r!==O&&(r=O,c(r.object)),k=f(N,I,z,B),k&&m(N,I,z,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(N,L,z,I),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,L,z,I){let B=I.wireframe===!0,k=n[L.id];k===void 0&&(k={},n[L.id]=k);let O=N.isInstancedMesh===!0?N.id:0,K=k[O];K===void 0&&(K={},k[O]=K);let H=K[z.id];H===void 0&&(H={},K[z.id]=H);let R=H[B];return R===void 0&&(R=u(l()),H[B]=R),R}function u(N){let L=[],z=[],I=[];for(let B=0;B<e;B++)L[B]=0,z[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,L,z,I){let B=r.attributes,k=L.attributes,O=0,K=z.getAttributes();for(let H in K)if(K[H].location>=0){let Z=B[H],_t=k[H];if(_t===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(_t=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(_t=N.instanceColor)),Z===void 0||Z.attribute!==_t||_t&&Z.data!==_t.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function m(N,L,z,I){let B={},k=L.attributes,O=0,K=z.getAttributes();for(let H in K)if(K[H].location>=0){let Z=k[H];Z===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));let _t={};_t.attribute=Z,Z&&Z.data&&(_t.data=Z.data),B[H]=_t,O++}r.attributes=B,r.attributesNum=O,r.index=I}function _(){let N=r.newAttributes;for(let L=0,z=N.length;L<z;L++)N[L]=0}function p(N){g(N,0)}function g(N,L){let z=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;z[N]=1,I[N]===0&&(s.enableVertexAttribArray(N),I[N]=1),B[N]!==L&&(s.vertexAttribDivisor(N,L),B[N]=L)}function y(){let N=r.newAttributes,L=r.enabledAttributes;for(let z=0,I=L.length;z<I;z++)L[z]!==N[z]&&(s.disableVertexAttribArray(z),L[z]=0)}function E(N,L,z,I,B,k,O){O===!0?s.vertexAttribIPointer(N,L,z,B,k):s.vertexAttribPointer(N,L,z,I,B,k)}function v(N,L,z,I){_();let B=I.attributes,k=z.getAttributes(),O=L.defaultAttributeValues;for(let K in k){let H=k[K];if(H.location>=0){let R=B[K];if(R===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),R!==void 0){let Z=R.normalized,_t=R.itemSize,Et=t.get(R);if(Et===void 0)continue;let X=Et.buffer,rt=Et.type,xt=Et.bytesPerElement,bt=rt===s.INT||rt===s.UNSIGNED_INT||R.gpuType===ch;if(R.isInterleavedBufferAttribute){let mt=R.data,Nt=mt.isInterleavedBuffer===!0?mt.stride:mt.itemSize,xe=R.offset;if(mt.isInstancedInterleavedBuffer||mt.isInstancedBufferAttribute){for(let At=0;At<H.locationSize;At++)g(H.location+At,mt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let At=0;At<H.locationSize;At++)p(H.location+At);s.bindBuffer(s.ARRAY_BUFFER,X);for(let At=0;At<H.locationSize;At++)E(H.location+At,_t/H.locationSize,rt,Z,Nt*xt,(xe+_t/H.locationSize*At)*xt,bt)}else{if(R.isInstancedBufferAttribute){for(let mt=0;mt<H.locationSize;mt++)g(H.location+mt,R.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let mt=0;mt<H.locationSize;mt++)p(H.location+mt);s.bindBuffer(s.ARRAY_BUFFER,X);for(let mt=0;mt<H.locationSize;mt++)E(H.location+mt,_t/H.locationSize,rt,Z,_t*xt,_t/H.locationSize*mt*xt,bt)}}else if(O!==void 0){let Z=O[K];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(H.location,Z);break;case 3:s.vertexAttrib3fv(H.location,Z);break;case 4:s.vertexAttrib4fv(H.location,Z);break;default:s.vertexAttrib1fv(H.location,Z)}}}}y()}function T(){P();for(let N in n){let L=n[N];for(let z in L){let I=L[z];for(let B in I){let k=I[B];for(let O in k)h(k[O].object),delete k[O];delete I[B]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let L=n[N.id];for(let z in L){let I=L[z];for(let B in I){let k=I[B];for(let O in k)h(k[O].object),delete k[O];delete I[B]}}delete n[N.id]}function x(N){for(let L in n){let z=n[L];for(let I in z){let B=z[I];if(B[N.id]===void 0)continue;let k=B[N.id];for(let O in k)h(k[O].object),delete k[O];delete B[N.id]}}}function M(N){for(let L in n){let z=n[L],I=N.isInstancedMesh===!0?N.id:0,B=z[I];if(B!==void 0){for(let k in B){let O=B[k];for(let K in O)h(O[K].object),delete O[K];delete B[k]}delete z[I],Object.keys(z).length===0&&delete n[L]}}}function P(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function JM(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function KM(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==ki&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==fi&&x!==Bi&&!M&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:v,maxSamples:T,samples:w}}function QM(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Ni,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,E=y*4,v=g.clippingState||null;l.value=v,v=h(m,u,E,f);for(let T=0;T!==E;++T)v[T]=e[T];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,v=f;E!==_;++E,v+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var tl=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ua(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ji(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Lr});r.uniforms.tEquirect.value=e;let o=new Nn(i,r),a=e.minFilter;return e.minFilter===Oi&&(e.minFilter=rn),new Po(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},__=256,jM=3,tb=20,k_=256,G_=16,eb=3,nb=new $,ib=new Yt,Oo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Po(1,10,null),this._boxMesh=new Nn(new ji(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=nb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(ib));let p=new Po(n,i,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(__,f_(t))}_fromTexture(t,e){t.mapping===Nr||t.mapping===Do?this._setSize(t.image.length===0?__:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=x_(t,!1,!1),n=Math.log2(t)-jM;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=x_(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Nr||t.mapping===Do?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=v_()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=sb(),this._integrationMaterial=rb());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/G_);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-eb)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(k_*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ob());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function x_(s,t,e){return new tl(s,{minFilter:Oi,generateMipmaps:t,type:zi,colorSpace:Ra,depthBuffer:e})}function el(s,t,e){return new Ti({name:s,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:vn,blending:Lr,depthTest:!1,depthWrite:!1})}function sb(){return el("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function rb(){return el("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:G_}},`

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
	`)}function ob(){return el("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${tb}
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
	`)}function v_(){return el("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function y_(){return el("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ab(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===oh||f===ah)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new tl(m.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===oh||f===ah,_=f===Nr||f===Do;if(m||_){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Oo(s)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return m&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Oo(s)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===oh?u.mapping=Nr:f===ah&&(u.mapping=Do),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function lb(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Rr("WebGLRenderer: "+n+" extension not supported."),i}}}function cb(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],s.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let y=_!==null?_.array.length:p.array.length/3-1,E=p.count>=65535?Na:Da,v=new E(Math.ceil(y/3)*6,1),T=v.array;if(_!==null){let x=_.array;g=_.version;for(let M=0,P=0;M<y;M+=3){let A=x[M+0],N=x[M+1],L=x[M+2];T[P++]=A,T[P++]=N,T[P++]=N,T[P++]=L,T[P++]=L,T[P++]=A}}else{g=p.version;for(let x=0,M=0;x<y;x+=3){let P=x+0,A=x+1,N=x+2;T[M++]=P,T[M++]=A,T[M++]=A,T[M++]=N,T[M++]=N,T[M++]=P}}v.version=g;let w=r.get(m);w&&t.remove(w),r.set(m,v)}function u(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function hb(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ub(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function fb(s,t,e){let n=new WeakMap,i=new Ae;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let v=a.attributes.position.count*E,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*T*4*d),x=new Ia(w,v,T,d);x.type=Bi,x.needsUpdate=!0;let M=E*4;for(let A=0;A<d;A++){let N=p[A],L=g[A],z=y[A],I=v*T*4*A;for(let B=0;B<N.count;B++){let k=B*M;f===!0&&(i.fromBufferAttribute(N,B),w[I+k+0]=i.x,w[I+k+1]=i.y,w[I+k+2]=i.z,w[I+k+3]=0),m===!0&&(i.fromBufferAttribute(L,B),w[I+k+4]=i.x,w[I+k+5]=i.y,w[I+k+6]=i.z,w[I+k+7]=0),_===!0&&(i.fromBufferAttribute(z,B),w[I+k+8]=i.x,w[I+k+9]=i.y,w[I+k+10]=i.z,w[I+k+11]=z.itemSize===4?i.w:1)}}u={count:d,texture:x,size:new se(v,T)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function db(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var pb={[jf]:"LINEAR_TONE_MAPPING",[td]:"REINHARD_TONE_MAPPING",[ed]:"CINEON_TONE_MAPPING",[nd]:"ACES_FILMIC_TONE_MAPPING",[sd]:"AGX_TONE_MAPPING",[rd]:"NEUTRAL_TONE_MAPPING",[id]:"CUSTOM_TONE_MAPPING"};function mb(s,t,e,n,i,r){let o=new hi(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Zs;h.setAttribute("position",new Mi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Mi([0,2,0,0,2,0],2));let d=new Hc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Nn(h,d),f=new ih(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,y=null,E=[],v=!1;this.setSize=function(T,w){o.setSize(T,w),a!==null&&a.setSize(T,w),l!==null&&l.setSize(T,w);for(let x=0;x<E.length;x++){let M=E[x];M.setSize&&M.setSize(T,w)}},this.setEffects=function(T){E=T,v=E.length>0&&E[0].isRenderPass===!0;let w=o.width,x=o.height;E.length>0&&a===null&&(a=new hi(w,x,{type:zi,depthBuffer:!1,stencilBuffer:!1}),l=new hi(w,x,{type:zi,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&E.some(P=>P.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new Ms(w,x),r===!0&&(c.format=Ts,c.type=Ur)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let P=0;P<E.length;P++){let A=E[P];A.setSize&&A.setSize(w,x),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(T,w){if(p||T.toneMapping===Ei&&E.length===0)return!1;if(y=w,w!==null){let x=w.width,M=w.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return v===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=Ei,!0},this.hasRenderPass=function(){return v},this.end=function(T,w){T.toneMapping=g,p=!0;let x=o,M=a;for(let P=0;P<E.length;P++){let A=E[P];A.enabled!==!1&&(A.render(T,M,x,w),A.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(m!==T.outputColorSpace||_!==T.toneMapping){m=T.outputColorSpace,_=T.toneMapping,d.defines={},ne.getTransfer(m)===_e&&(d.defines.SRGB_TRANSFER="");let P=pb[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(y),T.render(u,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var V_=new Dn,H_=new Ms(1,1),W_=new Fa(1),X_=new Ia,q_=new zc,Y_=new Ua,S_=[],M_=[],b_=new Float32Array(16),T_=new Float32Array(9),w_=new Float32Array(4);function Fo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=S_[i];if(r===void 0&&(r=new Float32Array(i),S_[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function on(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function an(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Zh(s,t){let e=M_[t];e===void 0&&(e=new Int32Array(t),M_[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function gb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function _b(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;s.uniform2fv(this.addr,t),an(e,t)}}function xb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;s.uniform3fv(this.addr,t),an(e,t)}}function vb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;s.uniform4fv(this.addr,t),an(e,t)}}function yb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;w_.set(n),s.uniformMatrix2fv(this.addr,!1,w_),an(e,n)}}function Sb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;T_.set(n),s.uniformMatrix3fv(this.addr,!1,T_),an(e,n)}}function Mb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;b_.set(n),s.uniformMatrix4fv(this.addr,!1,b_),an(e,n)}}function bb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Tb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;s.uniform2iv(this.addr,t),an(e,t)}}function wb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;s.uniform3iv(this.addr,t),an(e,t)}}function Eb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;s.uniform4iv(this.addr,t),an(e,t)}}function Ab(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Rb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;s.uniform2uiv(this.addr,t),an(e,t)}}function Cb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;s.uniform3uiv(this.addr,t),an(e,t)}}function Pb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;s.uniform4uiv(this.addr,t),an(e,t)}}function Jh(s){return s.version===0&&(s.compareFunction=gd,s.needsUpdate=!0),s}function Ib(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Jh(H_):r=V_,e.setTexture2D(t||r,i)}function Lb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||q_,i)}function Db(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Jh(W_):r=Y_,e.setTextureCube(t||r,i)}function Nb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||X_,i)}function Ub(s){switch(s){case 5126:return gb;case 35664:return _b;case 35665:return xb;case 35666:return vb;case 35674:return yb;case 35675:return Sb;case 35676:return Mb;case 5124:case 35670:return bb;case 35667:case 35671:return Tb;case 35668:case 35672:return wb;case 35669:case 35673:return Eb;case 5125:return Ab;case 36294:return Rb;case 36295:return Cb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Nb}}function Ob(s,t){s.uniform1fv(this.addr,t)}function Fb(s,t){let e=Fo(t,this.size,2);s.uniform2fv(this.addr,e)}function Bb(s,t){let e=Fo(t,this.size,3);s.uniform3fv(this.addr,e)}function zb(s,t){let e=Fo(t,this.size,4);s.uniform4fv(this.addr,e)}function kb(s,t){let e=Fo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Gb(s,t){let e=Fo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Vb(s,t){let e=Fo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Hb(s,t){s.uniform1iv(this.addr,t)}function Wb(s,t){s.uniform2iv(this.addr,t)}function Xb(s,t){s.uniform3iv(this.addr,t)}function qb(s,t){s.uniform4iv(this.addr,t)}function Yb(s,t){s.uniform1uiv(this.addr,t)}function $b(s,t){s.uniform2uiv(this.addr,t)}function Zb(s,t){s.uniform3uiv(this.addr,t)}function Jb(s,t){s.uniform4uiv(this.addr,t)}function Kb(s,t,e){let n=this.cache,i=t.length,r=Zh(e,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Jh(H_):o=V_;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Qb(s,t,e){let n=this.cache,i=t.length,r=Zh(e,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||q_,r[o])}function jb(s,t,e){let n=this.cache,i=t.length,r=Zh(e,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Jh(W_):o=Y_;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function tT(s,t,e){let n=this.cache,i=t.length,r=Zh(e,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||X_,r[o])}function eT(s){switch(s){case 5126:return Ob;case 35664:return Fb;case 35665:return Bb;case 35666:return zb;case 35674:return kb;case 35675:return Gb;case 35676:return Vb;case 5124:case 35670:return Hb;case 35667:case 35671:return Wb;case 35668:case 35672:return Xb;case 35669:case 35673:return qb;case 5125:return Yb;case 36294:return $b;case 36295:return Zb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return tT}}var Id=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ub(e.type)}},Ld=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eT(e.type)}},Dd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Cd=/(\w+)(\])?(\[|\.)?/g;function E_(s,t){s.seq.push(t),s.map[t.id]=t}function nT(s,t,e){let n=s.name,i=n.length;for(Cd.lastIndex=0;;){let r=Cd.exec(n),o=Cd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){E_(e,c===void 0?new Id(a,s,t):new Ld(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Dd(a),E_(e,d)),e=d}}}var Uo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);nT(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function A_(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var iT=37297,sT=0;function rT(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var R_=new Vt;function oT(s){ne._getMatrix(R_,ne.workingColorSpace,s);let t=`mat3( ${R_.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case Ca:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function C_(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+rT(s.getShaderSource(t),a)}else return r}function aT(s,t){let e=oT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var lT={[jf]:"Linear",[td]:"Reinhard",[ed]:"Cineon",[nd]:"ACESFilmic",[sd]:"AgX",[rd]:"Neutral",[id]:"Custom"};function cT(s,t){let e=lT[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yh=new $;function hT(){ne.getLuminanceCoefficients(Yh);let s=Yh.x.toFixed(4),t=Yh.y.toFixed(4),e=Yh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function fT(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dT(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ja(s){return s!==""}function P_(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function I_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(s){return s.replace(pT,mT)}function mT(s,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Nd(e)}var gT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(s){return s.replace(gT,_T)}function _T(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function D_(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var xT={[Ha]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function vT(s){return xT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yT={[Do]:"ENVMAP_MODE_REFRACTION"};function ST(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":yT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var MT={[Qf]:"ENVMAP_BLENDING_MULTIPLY",[Jg]:"ENVMAP_BLENDING_MIX",[Kg]:"ENVMAP_BLENDING_ADD"};function bT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":MT[s.combine]||"ENVMAP_BLENDING_NONE"}function TT(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=vT(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ST(e),d=bT(e),u=uT(e),f=fT(r),m=i.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ja).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ja).join(`
`),p.length>0&&(p+=`
`)):(_=[D_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),p=[D_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Ei?cT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,aT("linearToOutputTexel",e.outputColorSpace),hT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ja).join(`
`)),o=Nd(o),o=P_(o,e),o=I_(o,e),a=Nd(a),a=P_(a,e),a=I_(a,e),o=L_(o),a=L_(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+_+o,E=g+p+a,v=A_(i,i.VERTEX_SHADER,y),T=A_(i,i.FRAGMENT_SHADER,E);i.attachShader(m,v),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function w(A){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",L=i.getShaderInfoLog(v)||"",z=i.getShaderInfoLog(T)||"",I=N.trim(),B=L.trim(),k=z.trim(),O=!0,K=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,v,T);else{let H=C_(i,v,"vertex"),R=C_(i,T,"fragment");kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+H+`
`+R)}else I!==""?zt("WebGLProgram: Program Info Log:",I):(B===""||k==="")&&(K=!1);K&&(A.diagnostics={runnable:O,programLog:I,vertexShader:{log:B,prefix:_},fragmentShader:{log:k,prefix:p}})}i.deleteShader(v),i.deleteShader(T),x=new Uo(i,m),M=dT(i,m)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,iT)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sT++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=T,this}var wT=0,Ud=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Od(t),e.set(t,n)),n}},Od=class{constructor(t){this.id=wT++,this.code=t,this.usedTimes=0}};function ET(s){return s===er||s===Za||s===Ja}function AT(s,t,e,n,i,r){let o=new La,a=new Ud,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,A,N,L){let z=A.fog,I=N.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=t.get(x.envMap||B,k),K=u[x.type],H=n.precision;x.precision!==null&&(H=n.getMaxPrecision(x.precision),H!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=R!==void 0?R.length:0,_t=0;I.morphAttributes.position!==void 0&&(_t=1),I.morphAttributes.normal!==void 0&&(_t=2),I.morphAttributes.color!==void 0&&(_t=3);let Et,X,rt,xt;if(K){let nt=es[K];Et=nt.vertexShader,X=nt.fragmentShader}else{Et=x.vertexShader,X=x.fragmentShader;let nt=a.getVertexShaderStage(x),Tt=a.getFragmentShaderStage(x);a.update(x,nt,Tt),rt=nt.id,xt=Tt.id}let bt=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,At=!!x.map,Ht=!!x.matcap,Lt=!!O,Ft=Lt&&O.isPMREMTexture===!0,he=!!x.aoMap,ae=!!x.lightMap,J=!!x.bumpMap&&x.wireframe===!1,Qt=!!x.normalMap,Xe=!!x.displacementMap,Se=!!x.emissiveMap,re=!!x.metalnessMap,Oe=!!x.roughnessMap,He=x.anisotropy>0,F=x.clearcoat>0,fe=x.diffuseRoughness>0,le=x.dispersion>0,Gt=x.retroreflectivity>0,ut=x.iridescence>0,ue=x.sheen>0,Dt=x.transmission>0,Bt=He&&!!x.anisotropyMap,C=F&&!!x.clearcoatMap,S=F&&!!x.clearcoatNormalMap,V=F&&!!x.clearcoatRoughnessMap,ot=fe&&!!x.diffuseRoughnessMap,it=ut&&!!x.iridescenceMap,ht=ut&&!!x.iridescenceThicknessMap,gt=ue&&!!x.sheenColorMap,W=ue&&!!x.sheenRoughnessMap,tt=!!x.specularMap,ct=!!x.specularColorMap,D=!!x.specularIntensityMap,j=Dt&&!!x.transmissionMap,Q=Dt&&!!x.thicknessMap,ft=!!x.gradientMap,lt=!!x.alphaMap,dt=x.alphaTest>0,at=!!x.alphaHash,pt=!!x.extensions,st=Ei;x.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(st=s.toneMapping);let et=Ft?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,vt={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:Et,fragmentShader:X,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:xt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,outputColorSpace:bt===null?s.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:At,matcap:Ht,envMap:Lt,envMapMode:Lt&&O.mapping,envMapPMREM:Ft,envMapMaxLod:Ft?et.length-1:null,envMapSize:Ft?et[0].width:null,aoMap:he,lightMap:ae,bumpMap:J,normalMap:Qt,displacementMap:Xe,emissiveMap:Se,normalMapObjectSpace:Qt&&x.normalMapType===t_,normalMapTangentSpace:Qt&&x.normalMapType===Xh,packedNormalMap:Qt&&x.normalMapType===Xh&&ET(x.normalMap.format),metalnessMap:re,roughnessMap:Oe,anisotropy:He,anisotropyMap:Bt,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:V,diffuseRoughness:fe,diffuseRoughnessMap:ot,dispersion:le,retroreflection:Gt,iridescence:ut,iridescenceMap:it,iridescenceThicknessMap:ht,sheen:ue,sheenColorMap:gt,sheenRoughnessMap:W,specularMap:tt,specularColorMap:ct,specularIntensityMap:D,transmission:Dt,transmissionMap:j,thicknessMap:Q,gradientMap:ft,opaque:x.transparent===!1&&x.blending===Lo&&x.alphaToCoverage===!1,alphaMap:lt,alphaTest:dt,alphaHash:at,combine:x.combine,mapUv:At&&f(x.map.channel),aoMapUv:he&&f(x.aoMap.channel),lightMapUv:ae&&f(x.lightMap.channel),bumpMapUv:J&&f(x.bumpMap.channel),normalMapUv:Qt&&f(x.normalMap.channel),displacementMapUv:Xe&&f(x.displacementMap.channel),emissiveMapUv:Se&&f(x.emissiveMap.channel),metalnessMapUv:re&&f(x.metalnessMap.channel),roughnessMapUv:Oe&&f(x.roughnessMap.channel),anisotropyMapUv:Bt&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:W&&f(x.sheenRoughnessMap.channel),specularMapUv:tt&&f(x.specularMap.channel),specularColorMapUv:ct&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:j&&f(x.transmissionMap.channel),thicknessMapUv:Q&&f(x.thicknessMap.channel),alphaMapUv:lt&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Qt||He),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(At||lt),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Qt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:_t,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.filter(nt=>nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:At&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===_e,decodeVideoTextureEmissive:Se&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wi,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&x.extensions.multiDraw===!0||xe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(M,x),g(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let M=u[x.type],P;if(M){let A=es[M];P=p_.clone(A.uniforms)}else P=x.uniforms;return P}function E(x,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new TT(s,M,x,i),c.push(P),h.set(M,P)),P}function v(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:y,acquireProgram:E,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:w}}function RT(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function CT(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function N_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function U_(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,p,g){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},s[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=o(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=p,y.group=g),t++,y}function l(u,f,m,_,p,g,y){y.reversedDepth===!0&&(p=-p);let E=a(u,f,m,_,p,g);m.transmission>0?n.push(E):m.transparent===!0?i.push(E):e.push(E)}function c(u,f,m,_,p,g){let y=a(u,f,m,_,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||CT),n.length>1&&n.sort(f||N_),i.length>1&&i.sort(f||N_)}function d(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function PT(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new U_,s.set(n,[o])):i>=r.length?(o=new U_,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function IT(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new Yt};break;case"SpotLight":e={position:new $,direction:new $,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=e,e}}}function LT(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var DT=0;function NT(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function UT(s){let t=new IT,e=LT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let i=new $,r=new Ve,o=new Ve;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,y=0,E=0,v=0,T=0,w=0,x=0,M=0,P=0,A=0;c.sort(NT);for(let L=0,z=c.length;L<z;L++){let I=c[L],B=I.color,k=I.intensity,O=I.distance,K=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===er?K=I.shadow.map.texture:K=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*k,d+=B.g*k,u+=B.b*k;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],k);A++}else if(I.isSunLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,Z=e.get(I);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=Z,n.sunShadowMap[m]=K;let _t=R.getViewportCount();for(let Et=0;Et<_t;Et++)n.sunShadowMatrix[_+Et]=R.getMatrix(Et),n.sunShadowCascade[_+Et]=R._cascadeData[Et];_+=_t,m++}n.sun[f]=H,f++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,Z=e.get(I);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize=R.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=H,p++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(B).multiplyScalar(k),H.distance=O,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[y]=H;let R=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,R.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[y]=R.matrix,I.castShadow){let Z=e.get(I);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize=R.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=K,x++}y++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(B).multiplyScalar(k),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=H,E++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let R=I.shadow,Z=e.get(I);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize=R.mapSize,Z.shadowCameraNear=R.camera.near,Z.shadowCameraFar=R.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=H,g++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(k),H.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[v]=H,v++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==E||N.hemiLength!==v||N.numSunShadows!==m||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==x||N.numSpotMaps!==M||N.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=E,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,N.sunLength=f,N.directionalLength=p,N.pointLength=g,N.spotLength=y,N.rectAreaLength=E,N.hemiLength=v,N.numSunShadows=m,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=x,N.numSpotMaps=M,N.numLightProbes=A,n.version=DT++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let v=c[y];if(v.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),u++}else if(v.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function O_(s){let t=new UT(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function OT(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new O_(s),t.set(i,[a])):r>=o.length?(a=new O_(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var FT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BT=`uniform sampler2D shadow_pass;
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
}`,zT=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],kT=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],F_=new Ve,Qa=new $,Pd=new $;function GT(s,t,e){let n=new Ir,i=new se,r=new se,o=new Ae,a=new Xc,l=new qc,c={},h=e.maxTextureSize,d={[tr]:vn,[vn]:tr,[wi]:wi},u=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:FT,fragmentShader:BT}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Zs;m.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Nn(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let g=this.type;this.render=function(w,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Ig&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ha);let P=s.getRenderTarget(),A=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Lr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let z=g!==this.type;z&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=w.length;I<B;I++){let k=w[I],O=k.shadow;if(O===void 0){zt("WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let K=O.getFrameExtents();i.multiply(K),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,O.mapSize.y=r.y));let H=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||z===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Io){if(k.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new hi(i.x,i.y,{format:er,type:zi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),O.map.texture.name=k.name+".shadowMap",O.map.depthTexture=new Ms(i.x,i.y,Bi),O.map.depthTexture.name=k.name+".shadowMapDepth",O.map.depthTexture.format=Ss,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=fn,O.map.depthTexture.magFilter=fn}else k.isPointLight?(O.map=new tl(i.x),O.map.depthTexture=new Fa(i.x,Fi)):(O.map=new hi(i.x,i.y),O.map.depthTexture=new Ms(i.x,i.y,Fi)),O.map.depthTexture.name=k.name+".shadowMap",O.map.depthTexture.format=Ss,this.type===Ha?(O.map.depthTexture.compareFunction=H?md:pd,O.map.depthTexture.minFilter=rn,O.map.depthTexture.magFilter=rn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=fn,O.map.depthTexture.magFilter=fn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let R=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();k.isPointLight!==!0&&O.updateMatrices(k,M);let Z=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:M.layers;for(let _t=0;_t<R;_t++){let Et=O.getCamera(_t);if(k.isPointLight){let X=O.camera,rt=O.matrix,xt=k.distance||X.far;xt!==X.far&&(X.far=xt,X.updateProjectionMatrix()),Qa.setFromMatrixPosition(k.matrixWorld),X.position.copy(Qa),Pd.copy(X.position),Pd.add(zT[_t]),X.up.copy(kT[_t]),X.lookAt(Pd),X.updateMatrixWorld(),rt.makeTranslation(-Qa.x,-Qa.y,-Qa.z),F_.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),O._frustum.setFromProjectionMatrix(F_,X.coordinateSystem,X.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,_t),s.clear();else{_t===0&&(s.setRenderTarget(O.map),s.clear());let X=O.getViewport(_t);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),L.viewport(o)}n=O.getFrustum(_t),v(x,M,Et,k,Z,this.type)}O.isPointLightShadow!==!0&&this.type===Io&&y(O,M),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(P,A,N)};function y(w,x){let M=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new hi(i.x,i.y,{format:er,type:zi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(x,null,M,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(x,null,M,f,_,null)}function E(w,x,M,P){let A=null,N=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)A=N;else if(A=M.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=A.uuid,z=x.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let B=I[z];B===void 0&&(B=A.clone(),I[z]=B,x.addEventListener("dispose",T)),A=B}if(A.visible=x.visible,A.wireframe=x.wireframe,P===Io?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=s.properties.get(A);L.light=M}return A}function v(w,x,M,P,A,N){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Io)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let I=t.update(w),B=w.material;if(Array.isArray(B)){let k=I.groups;for(let O=0,K=k.length;O<K;O++){let H=k[O],R=B[H.materialIndex];if(R&&R.visible){let Z=E(w,R,P,N);w.onBeforeShadow(s,w,x,M,I,Z,H),s.renderBufferDirect(M,null,I,Z,w,H),w.onAfterShadow(s,w,x,M,I,Z,H)}}}else if(B.visible){let k=E(w,B,P,N);w.onBeforeShadow(s,w,x,M,I,k,null),s.renderBufferDirect(M,null,I,k,w,null),w.onAfterShadow(s,w,x,M,I,k,null)}}let z=w.children;for(let I=0,B=z.length;I<B;I++)v(z[I],x,M,P,A,N)}function T(w){w.target.removeEventListener("dispose",T);for(let M in c){let P=c[M],A=w.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function VT(s,t){function e(){let D=!1,j=new Ae,Q=null,ft=new Ae(0,0,0,0);return{setMask:function(lt){Q!==lt&&!D&&(s.colorMask(lt,lt,lt,lt),Q=lt)},setLocked:function(lt){D=lt},setClear:function(lt,dt,at,pt,st){st===!0&&(lt*=pt,dt*=pt,at*=pt),j.set(lt,dt,at,pt),ft.equals(j)===!1&&(s.clearColor(lt,dt,at,pt),ft.copy(j))},reset:function(){D=!1,Q=null,ft.set(-1,0,0,0)}}}function n(){let D=!1,j=!1,Q=null,ft=null,lt=null;return{setReversed:function(dt){if(j!==dt){let at=t.get("EXT_clip_control");dt?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),j=dt;let pt=lt;lt=null,this.setClear(pt)}},getReversed:function(){return j},setTest:function(dt){dt?mt(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(dt){Q!==dt&&!D&&(s.depthMask(dt),Q=dt)},setFunc:function(dt){if(j&&(dt=u_[dt]),ft!==dt){switch(dt){case Ec:s.depthFunc(s.NEVER);break;case Ac:s.depthFunc(s.ALWAYS);break;case Rc:s.depthFunc(s.LESS);break;case bo:s.depthFunc(s.LEQUAL);break;case Cc:s.depthFunc(s.EQUAL);break;case Pc:s.depthFunc(s.GEQUAL);break;case Ic:s.depthFunc(s.GREATER);break;case Lc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=dt}},setLocked:function(dt){D=dt},setClear:function(dt){lt!==dt&&(lt=dt,j&&(dt=1-dt),s.clearDepth(dt))},reset:function(){D=!1,Q=null,ft=null,lt=null,j=!1}}}function i(){let D=!1,j=null,Q=null,ft=null,lt=null,dt=null,at=null,pt=null,st=null;return{setTest:function(et){D||(et?mt(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(et){j!==et&&!D&&(s.stencilMask(et),j=et)},setFunc:function(et,vt,nt){(Q!==et||ft!==vt||lt!==nt)&&(s.stencilFunc(et,vt,nt),Q=et,ft=vt,lt=nt)},setOp:function(et,vt,nt){(dt!==et||at!==vt||pt!==nt)&&(s.stencilOp(et,vt,nt),dt=et,at=vt,pt=nt)},setLocked:function(et){D=et},setClear:function(et){st!==et&&(s.clearStencil(et),st=et)},reset:function(){D=!1,j=null,Q=null,ft=null,lt=null,dt=null,at=null,pt=null,st=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,y=null,E=null,v=null,T=null,w=null,x=null,M=new Yt(0,0,0),P=0,A=!1,N=null,L=null,z=null,I=null,B=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,K=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=K>=2);let R=null,Z={},_t=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),X=new Ae().fromArray(_t),rt=new Ae().fromArray(Et);function xt(D,j,Q,ft){let lt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(D,dt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<Q;at++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(j+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return dt}let bt={};bt[s.TEXTURE_2D]=xt(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(s.DEPTH_TEST),o.setFunc(bo),J(!1),Qt(qf),mt(s.CULL_FACE),he(Lr);function mt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Nt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function xe(D,j){return u[D]!==j?(s.bindFramebuffer(D,j),u[D]=j,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=j),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=j),!0):!1}function At(D,j){let Q=m,ft=!1;if(D){Q=f.get(j),Q===void 0&&(Q=[],f.set(j,Q));let lt=D.textures;if(Q.length!==lt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,at=lt.length;dt<at;dt++)Q[dt]=s.COLOR_ATTACHMENT0+dt;Q.length=lt.length,ft=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,ft=!0);ft&&s.drawBuffers(Q)}function Ht(D){return _!==D?(s.useProgram(D),_=D,!0):!1}let Lt={[Dr]:s.FUNC_ADD,[Dg]:s.FUNC_SUBTRACT,[Ng]:s.FUNC_REVERSE_SUBTRACT};Lt[Ug]=s.MIN,Lt[Og]=s.MAX;let Ft={[Fg]:s.ZERO,[Bg]:s.ONE,[zg]:s.SRC_COLOR,[Jf]:s.SRC_ALPHA,[Xg]:s.SRC_ALPHA_SATURATE,[Hg]:s.DST_COLOR,[Gg]:s.DST_ALPHA,[kg]:s.ONE_MINUS_SRC_COLOR,[Kf]:s.ONE_MINUS_SRC_ALPHA,[Wg]:s.ONE_MINUS_DST_COLOR,[Vg]:s.ONE_MINUS_DST_ALPHA,[qg]:s.CONSTANT_COLOR,[Yg]:s.ONE_MINUS_CONSTANT_COLOR,[$g]:s.CONSTANT_ALPHA,[Zg]:s.ONE_MINUS_CONSTANT_ALPHA};function he(D,j,Q,ft,lt,dt,at,pt,st,et){if(D===Lr){p===!0&&(Nt(s.BLEND),p=!1);return}if(p===!1&&(mt(s.BLEND),p=!0),D!==Lg){if(D!==g||et!==A){if((y!==Dr||T!==Dr)&&(s.blendEquation(s.FUNC_ADD),y=Dr,T=Dr),et)switch(D){case Lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yf:s.blendFunc(s.ONE,s.ONE);break;case $f:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",D);break}else switch(D){case Lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case $f:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zf:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",D);break}E=null,v=null,w=null,x=null,M.set(0,0,0),P=0,g=D,A=et}return}lt=lt||j,dt=dt||Q,at=at||ft,(j!==y||lt!==T)&&(s.blendEquationSeparate(Lt[j],Lt[lt]),y=j,T=lt),(Q!==E||ft!==v||dt!==w||at!==x)&&(s.blendFuncSeparate(Ft[Q],Ft[ft],Ft[dt],Ft[at]),E=Q,v=ft,w=dt,x=at),(pt.equals(M)===!1||st!==P)&&(s.blendColor(pt.r,pt.g,pt.b,st),M.copy(pt),P=st),g=D,A=!1}function ae(D,j){D.side===wi?Nt(s.CULL_FACE):mt(s.CULL_FACE);let Q=D.side===vn;j&&(Q=!Q),J(Q),D.blending===Lo&&D.transparent===!1?he(Lr):he(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ft=D.stencilWrite;a.setTest(ft),ft&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function J(D){N!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),N=D)}function Qt(D){D!==Cg?(mt(s.CULL_FACE),D!==L&&(D===qf?s.cullFace(s.BACK):D===Pg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),L=D}function Xe(D){D!==z&&(O&&s.lineWidth(D),z=D)}function Se(D,j,Q){D?(mt(s.POLYGON_OFFSET_FILL),(I!==j||B!==Q)&&(I=j,B=Q,o.getReversed()&&(j=-j,Q=-Q),s.polygonOffset(j,Q))):Nt(s.POLYGON_OFFSET_FILL)}function re(D){D?mt(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function Oe(D){D===void 0&&(D=s.TEXTURE0+k-1),R!==D&&(s.activeTexture(D),R=D)}function He(D,j,Q){Q===void 0&&(R===null?Q=s.TEXTURE0+k-1:Q=R);let ft=Z[Q];ft===void 0&&(ft={type:void 0,texture:void 0},Z[Q]=ft),(ft.type!==D||ft.texture!==j)&&(R!==Q&&(s.activeTexture(Q),R=Q),s.bindTexture(D,j||bt[D]),ft.type=D,ft.texture=j)}function F(){let D=Z[R];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function fe(){try{s.compressedTexImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function le(){try{s.compressedTexImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Gt(){try{s.texSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function ut(){try{s.texSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function Dt(){try{s.compressedTexSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Bt(){try{s.texStorage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function C(){try{s.texStorage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function S(){try{s.texImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function V(){try{s.texImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function ot(D){return d[D]!==void 0?d[D]:s.getParameter(D)}function it(D,j){d[D]!==j&&(s.pixelStorei(D,j),d[D]=j)}function ht(D){X.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),X.copy(D))}function gt(D){rt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),rt.copy(D))}function W(D,j){let Q=c.get(j);Q===void 0&&(Q=new WeakMap,c.set(j,Q));let ft=Q.get(D);ft===void 0&&(ft=s.getUniformBlockIndex(j,D.name),s.uniformBlockBinding(j,ft,ft),Q.set(D,ft))}function tt(D,j,Q){let lt=c.get(j).get(D);l[lt]!==Q&&(s.bindBufferBase(s.UNIFORM_BUFFER,lt,Q),l[lt]=Q)}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,Z={},u={},l={},f=new WeakMap,m=[],_=null,p=!1,g=null,y=null,E=null,v=null,T=null,w=null,x=null,M=new Yt(0,0,0),P=0,A=!1,N=null,L=null,z=null,I=null,B=null,X.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:Nt,bindFramebuffer:xe,drawBuffers:At,useProgram:Ht,setBlending:he,setMaterial:ae,setFlipSided:J,setCullFace:Qt,setLineWidth:Xe,setPolygonOffset:Se,setScissorTest:re,activeTexture:Oe,bindTexture:He,unbindTexture:F,compressedTexImage2D:fe,compressedTexImage3D:le,texImage2D:S,texImage3D:V,pixelStorei:it,getParameter:ot,updateUBOMapping:W,uniformBlockBinding:tt,texStorage2D:Bt,texStorage3D:C,texSubImage2D:Gt,texSubImage3D:ut,compressedTexSubImage2D:ue,compressedTexSubImage3D:Dt,scissor:ht,viewport:gt,reset:ct}}function HT(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,_=new FinalizationRegistry(C=>m.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):To("canvas")}function y(C,S,V){let ot=1,it=Bt(C);if((it.width>V||it.height>V)&&(ot=V/Math.max(it.width,it.height)),ot<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ht=Math.floor(ot*it.width),gt=Math.floor(ot*it.height);u===void 0&&(u=g(ht,gt));let W=S?g(ht,gt):u;return W.width=ht,W.height=gt,W.getContext("2d").drawImage(C,0,0,ht,gt),zt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ht+"x"+gt+")."),W}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function E(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(C,S,V,ot,it,ht=!1){if(C!==null){if(s[C]!==void 0)return s[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let gt;ot&&(gt=t.get("EXT_texture_norm16"),gt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=S;if(S===s.RED&&(V===s.FLOAT&&(W=s.R32F),V===s.HALF_FLOAT&&(W=s.R16F),V===s.UNSIGNED_BYTE&&(W=s.R8),V===s.UNSIGNED_SHORT&&gt&&(W=gt.R16_EXT),V===s.SHORT&&gt&&(W=gt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(W=s.R8UI),V===s.UNSIGNED_SHORT&&(W=s.R16UI),V===s.UNSIGNED_INT&&(W=s.R32UI),V===s.BYTE&&(W=s.R8I),V===s.SHORT&&(W=s.R16I),V===s.INT&&(W=s.R32I)),S===s.RG&&(V===s.FLOAT&&(W=s.RG32F),V===s.HALF_FLOAT&&(W=s.RG16F),V===s.UNSIGNED_BYTE&&(W=s.RG8),V===s.UNSIGNED_SHORT&&gt&&(W=gt.RG16_EXT),V===s.SHORT&&gt&&(W=gt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(W=s.RG8UI),V===s.UNSIGNED_SHORT&&(W=s.RG16UI),V===s.UNSIGNED_INT&&(W=s.RG32UI),V===s.BYTE&&(W=s.RG8I),V===s.SHORT&&(W=s.RG16I),V===s.INT&&(W=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(W=s.RGB8UI),V===s.UNSIGNED_SHORT&&(W=s.RGB16UI),V===s.UNSIGNED_INT&&(W=s.RGB32UI),V===s.BYTE&&(W=s.RGB8I),V===s.SHORT&&(W=s.RGB16I),V===s.INT&&(W=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),V===s.UNSIGNED_INT&&(W=s.RGBA32UI),V===s.BYTE&&(W=s.RGBA8I),V===s.SHORT&&(W=s.RGBA16I),V===s.INT&&(W=s.RGBA32I)),S===s.RGB&&(V===s.UNSIGNED_SHORT&&gt&&(W=gt.RGB16_EXT),V===s.SHORT&&gt&&(W=gt.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),S===s.RGBA){let tt=ht?Ca:ne.getTransfer(it);V===s.FLOAT&&(W=s.RGBA32F),V===s.HALF_FLOAT&&(W=s.RGBA16F),V===s.UNSIGNED_BYTE&&(W=tt===_e?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&gt&&(W=gt.RGBA16_EXT),V===s.SHORT&&gt&&(W=gt.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(C,S){let V;return C?S===null||S===Fi||S===Ur?V=s.DEPTH24_STENCIL8:S===Bi?V=s.DEPTH32F_STENCIL8:S===No&&(V=s.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Fi||S===Ur?V=s.DEPTH_COMPONENT24:S===Bi?V=s.DEPTH_COMPONENT32F:S===No&&(V=s.DEPTH_COMPONENT16),V}function M(C,S){return E(C)===!0||C.isFramebufferTexture&&C.minFilter!==fn&&C.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){let S=new WeakRef(C);n.get(C).__ref=S,m.add(S),_.register(C,S,S)}function A(C){let S=n.get(C).__ref;S!==void 0&&(m.delete(S),_.unregister(S))}function N(C){z(C.target)}function L(C){I(C.target)}function z(C){C.removeEventListener("dispose",N),A(C),k(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function I(C){C.removeEventListener("dispose",L),A(C),K(C)}function B(){for(let C of m){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):z(S))}m.clear(),d.clear()}function k(C){let S=n.get(C);if(S.__webglInit===void 0)return;let V=C.source,ot=f.get(V);if(ot){let it=ot[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&O(C),Object.keys(ot).length===0&&f.delete(V)}n.remove(C)}function O(C){let S=n.get(C);s.deleteTexture(S.__webglTexture);let V=C.source,ot=f.get(V);delete ot[S.__cacheKey],o.memory.textures--}function K(C){let S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let V=C.depthTexture;if(V&&V.renderTarget===C&&z(V),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let ht=0;ht<S.__webglFramebuffer[it].length;ht++)s.deleteFramebuffer(S.__webglFramebuffer[it][ht]);else s.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)s.deleteFramebuffer(S.__webglFramebuffer[it]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ot=C.textures;for(let it=0,ht=ot.length;it<ht;it++){let gt=n.get(ot[it]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(ot[it])}n.remove(C)}let H=0;function R(){H=0}function Z(){return H}function _t(C){H=C}function Et(){let C=H;return C>=i.maxTextures&&zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,C}function X(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function rt(C,S){let V=n.get(C);if(C.isVideoTexture&&ue(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let ot=C.image;if(ot===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(V,C,S);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function xt(C,S){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ae(V,C,S);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function bt(C,S){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ae(V,C,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function mt(C,S){let V=n.get(C);if(C.version>0&&V.__version!==C.version){J(V,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}let Nt={[Dc]:s.REPEAT,[Ji]:s.CLAMP_TO_EDGE,[Nc]:s.MIRRORED_REPEAT},xe={[fn]:s.NEAREST,[Qg]:s.NEAREST_MIPMAP_NEAREST,[Wa]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[lh]:s.LINEAR_MIPMAP_NEAREST,[Oi]:s.LINEAR_MIPMAP_LINEAR},At={[n_]:s.NEVER,[gd]:s.ALWAYS,[i_]:s.LESS,[pd]:s.LEQUAL,[s_]:s.EQUAL,[md]:s.GEQUAL,[r_]:s.GREATER,[o_]:s.NOTEQUAL};function Ht(C,S){if(S.type===Bi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===lh||S.magFilter===Wa||S.magFilter===Oi||S.minFilter===rn||S.minFilter===lh||S.minFilter===Wa||S.minFilter===Oi)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Nt[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Nt[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Nt[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,xe[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,xe[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,At[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fn||S.minFilter!==Wa&&S.minFilter!==Oi||S.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Lt(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",N),P(S));let ot=S.source,it=f.get(ot);it===void 0&&(it={},f.set(ot,it));let ht=X(S);if(ht!==C.__cacheKey){it[ht]===void 0&&(it[ht]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),it[ht].usedTimes++;let gt=it[C.__cacheKey];gt!==void 0&&(it[C.__cacheKey].usedTimes--,gt.usedTimes===0&&O(S)),C.__cacheKey=ht,C.__webglTexture=it[ht].texture}return V}function Ft(C,S,V){return Math.floor(Math.floor(C/V)/S)}function he(C,S,V,ot){let ht=C.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,V,ot,S.data);else{ht.sort((D,j)=>D.start-j.start);let gt=0;for(let D=1;D<ht.length;D++){let j=ht[gt],Q=ht[D],ft=j.start+j.count,lt=Ft(Q.start,S.width,4),dt=Ft(j.start,S.width,4);Q.start<=ft+1&&lt===dt&&Ft(Q.start+Q.count-1,S.width,4)===lt?j.count=Math.max(j.count,Q.start+Q.count-j.start):(++gt,ht[gt]=Q)}ht.length=gt+1;let W=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let D=0,j=ht.length;D<j;D++){let Q=ht[D],ft=Math.floor(Q.start/4),lt=Math.ceil(Q.count/4),dt=ft%S.width,at=Math.floor(ft/S.width),pt=lt,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(s.UNPACK_SKIP_ROWS,at),e.texSubImage2D(s.TEXTURE_2D,0,dt,at,pt,st,V,ot,S.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,W),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function ae(C,S,V){let ot=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=s.TEXTURE_3D);let it=Lt(C,S),ht=S.source;e.bindTexture(ot,C.__webglTexture,s.TEXTURE0+V);let gt=n.get(ht);if(ht.version!==gt.__version||it===!0){if(e.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let st=ne.getPrimaries(ne.workingColorSpace),et=S.colorSpace===Gi?null:ne.getPrimaries(S.colorSpace),vt=S.colorSpace===Gi||st===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=y(S.image,!1,i.maxTextureSize);tt=Dt(S,tt);let ct=r.convert(S.format,S.colorSpace),D=r.convert(S.type),j=w(S.internalFormat,ct,D,S.normalized,S.colorSpace,S.isVideoTexture);Ht(ot,S);let Q,ft=S.mipmaps,lt=S.isVideoTexture!==!0,dt=gt.__version===void 0||it===!0,at=ht.dataReady,pt=M(S,tt);if(S.isDepthTexture)j=x(S.format===Ts,S.type),dt&&(lt?e.texStorage2D(s.TEXTURE_2D,1,j,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,ct,D,null));else if(S.isDataTexture)if(ft.length>0){lt&&dt&&e.texStorage2D(s.TEXTURE_2D,pt,j,ft[0].width,ft[0].height);for(let st=0,et=ft.length;st<et;st++)Q=ft[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,Q.width,Q.height,ct,D,Q.data):e.texImage2D(s.TEXTURE_2D,st,j,Q.width,Q.height,0,ct,D,Q.data);S.generateMipmaps=!1}else lt?(dt&&e.texStorage2D(s.TEXTURE_2D,pt,j,tt.width,tt.height),at&&he(S,tt,ct,D)):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,ct,D,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){lt&&dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,j,ft[0].width,ft[0].height,tt.depth);for(let st=0,et=ft.length;st<et;st++)if(Q=ft[st],S.format!==ki)if(ct!==null)if(lt){if(at)if(S.layerUpdates.size>0){let vt=bd(Q.width,Q.height,S.format,S.type);for(let nt of S.layerUpdates){let Tt=Q.data.subarray(nt*vt/Q.data.BYTES_PER_ELEMENT,(nt+1)*vt/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,nt,Q.width,Q.height,1,ct,Tt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Q.width,Q.height,tt.depth,ct,Q.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,j,Q.width,Q.height,tt.depth,0,Q.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Q.width,Q.height,tt.depth,ct,D,Q.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,j,Q.width,Q.height,tt.depth,0,ct,D,Q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{lt&&dt&&e.texStorage2D(s.TEXTURE_2D,pt,j,ft[0].width,ft[0].height);for(let st=0,et=ft.length;st<et;st++)Q=ft[st],S.format!==ki?ct!==null?lt?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,Q.width,Q.height,ct,Q.data):e.compressedTexImage2D(s.TEXTURE_2D,st,j,Q.width,Q.height,0,Q.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,Q.width,Q.height,ct,D,Q.data):e.texImage2D(s.TEXTURE_2D,st,j,Q.width,Q.height,0,ct,D,Q.data)}else if(S.isDataArrayTexture)if(lt){if(dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,j,tt.width,tt.height,tt.depth),at)if(S.layerUpdates.size>0){let st=bd(tt.width,tt.height,S.format,S.type);for(let et of S.layerUpdates){let vt=tt.data.subarray(et*st/tt.data.BYTES_PER_ELEMENT,(et+1)*st/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,tt.width,tt.height,1,ct,D,vt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,D,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,j,tt.width,tt.height,tt.depth,0,ct,D,tt.data);else if(S.isData3DTexture)lt?(dt&&e.texStorage3D(s.TEXTURE_3D,pt,j,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,D,tt.data)):e.texImage3D(s.TEXTURE_3D,0,j,tt.width,tt.height,tt.depth,0,ct,D,tt.data);else if(S.isFramebufferTexture){if(dt)if(lt)e.texStorage2D(s.TEXTURE_2D,pt,j,tt.width,tt.height);else{let st=tt.width,et=tt.height;for(let vt=0;vt<pt;vt++)e.texImage2D(s.TEXTURE_2D,vt,j,st,et,0,ct,D,null),st>>=1,et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),tt.parentNode!==st){st.appendChild(tt),d.add(S),st.onpaint=et=>{let vt=et.changedElements;for(let nt of d)vt.includes(nt.image)&&(nt.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let vt=s.RGBA,nt=s.RGBA,Tt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,vt,nt,Tt,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ft.length>0){if(lt&&dt){let st=Bt(ft[0]);e.texStorage2D(s.TEXTURE_2D,pt,j,st.width,st.height)}for(let st=0,et=ft.length;st<et;st++)Q=ft[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ct,D,Q):e.texImage2D(s.TEXTURE_2D,st,j,ct,D,Q);S.generateMipmaps=!1}else if(lt){if(dt){let st=Bt(tt);e.texStorage2D(s.TEXTURE_2D,pt,j,st.width,st.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,D,tt)}else e.texImage2D(s.TEXTURE_2D,0,j,ct,D,tt);E(S)&&S.mipmapsAutoUpdate===!0&&v(ot),gt.__version=ht.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function J(C,S,V){if(S.image.length!==6)return;let ot=Lt(C,S),it=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+V);let ht=n.get(it);if(it.version!==ht.__version||ot===!0){e.activeTexture(s.TEXTURE0+V);let gt=ne.getPrimaries(ne.workingColorSpace),W=S.colorSpace===Gi?null:ne.getPrimaries(S.colorSpace),tt=S.colorSpace===Gi||gt===W?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ct=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,j=[];for(let nt=0;nt<6;nt++)!ct&&!D?j[nt]=y(S.image[nt],!0,i.maxCubemapSize):j[nt]=D?S.image[nt].image:S.image[nt],j[nt]=Dt(S,j[nt]);let Q=j[0],ft=r.convert(S.format,S.colorSpace),lt=r.convert(S.type),dt=w(S.internalFormat,ft,lt,S.normalized,S.colorSpace),at=S.isVideoTexture!==!0,pt=ht.__version===void 0||ot===!0,st=it.dataReady,et=M(S,Q);Ht(s.TEXTURE_CUBE_MAP,S);let vt;if(S.isDepthTexture){if(dt=x(S.format===Ts,S.type),pt)if(at)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,dt,Q.width,Q.height);else for(let nt=0;nt<6;nt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,Q.width,Q.height,0,ft,lt,null)}else if(ct){at&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,dt,Q.width,Q.height);for(let nt=0;nt<6;nt++){vt=j[nt].mipmaps;for(let Tt=0;Tt<vt.length;Tt++){let jt=vt[Tt];S.format!==ki?ft!==null?at?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,jt.width,jt.height,ft,jt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,dt,jt.width,jt.height,0,jt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,jt.width,jt.height,ft,lt,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,dt,jt.width,jt.height,0,ft,lt,jt.data)}}}else{if(vt=S.mipmaps,at&&pt){vt.length>0&&et++;let nt=Bt(j[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,dt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(D){at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,j[nt].width,j[nt].height,ft,lt,j[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,j[nt].width,j[nt].height,0,ft,lt,j[nt].data);for(let Tt=0;Tt<vt.length;Tt++){let Wt=vt[Tt].image[nt].image;at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,Wt.width,Wt.height,ft,lt,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,dt,Wt.width,Wt.height,0,ft,lt,Wt.data)}}else{at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ft,lt,j[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,ft,lt,j[nt]);for(let Tt=0;Tt<vt.length;Tt++){let jt=vt[Tt];at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,ft,lt,jt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,dt,ft,lt,jt.image[nt])}}}E(S)&&S.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),ht.__version=it.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Qt(C,S,V,ot,it,ht){let gt=r.convert(V.format,V.colorSpace),W=r.convert(V.type),tt=w(V.internalFormat,gt,W,V.normalized,V.colorSpace),ct=n.get(S),D=n.get(V);if(D.__renderTarget=S,!ct.__hasExternalTextures){let j=Math.max(1,S.width>>ht),Q=Math.max(1,S.height>>ht);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,ht,tt,j,Q,S.depth,0,gt,W,null):e.texImage2D(it,ht,tt,j,Q,0,gt,W,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),ut(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,it,D.__webglTexture,0,Gt(S)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,it,D.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(C,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let ot=S.depthTexture,it=ot&&ot.isDepthTexture?ot.type:null,ht=x(S.stencilBuffer,it),gt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ut(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(S),ht,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(S),ht,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ht,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,C)}else{let ot=S.textures;for(let it=0;it<ot.length;it++){let ht=ot[it],gt=r.convert(ht.format,ht.colorSpace),W=r.convert(ht.type),tt=w(ht.internalFormat,gt,W,ht.normalized,ht.colorSpace);ut(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(S),tt,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(S),tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,tt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(C,S,V){let ot=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(S.depthTexture);it.__renderTarget=S;let ht=ot?S.depthTexture.image[0]:S.depthTexture.image;(!it.__webglTexture||ht.width!==S.width||ht.height!==S.height)&&(ht.width=S.width,ht.height=S.height,S.depthTexture.needsUpdate=!0),ot?mt(S.depthTexture,0):rt(S.depthTexture,0);let gt=it.__webglTexture,W=Gt(S),tt=ot?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,ct=S.depthTexture.format===Ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ss)ut(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,tt,gt,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,ct,tt,gt,0);else if(S.depthTexture.format===Ts)ut(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,tt,gt,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,ct,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(C){let S=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let ot=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ot){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ot.removeEventListener("dispose",it)};ot.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=ot}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let ot=0;ot<6;ot++)Se(S.__webglFramebuffer[ot],C,ot);else C.texture.mipmaps.length>0?Se(S.__webglFramebuffer[0],C,0):Se(S.__webglFramebuffer,C,0);else if(V){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]===void 0)S.__webglDepthbuffer[ot]=s.createRenderbuffer(),Xe(S.__webglDepthbuffer[ot],C,!1);else{let it=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer[ot];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ht)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Xe(S.__webglDepthbuffer,C,!1);else{let it=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ht)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(C,S,V){let ot=n.get(C);S!==void 0&&Qt(ot.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&re(C)}function He(C){let S=C.texture,V=n.get(C),ot=n.get(S);C.addEventListener("dispose",L),P(C);let it=C.textures,ht=C.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=S.version,o.memory.textures++),ht){V.__webglFramebuffer=[];for(let W=0;W<6;W++)if(S.mipmaps.length>0){V.__webglFramebuffer[W]=[];for(let tt=0;tt<S.mipmaps.length;tt++)V.__webglFramebuffer[W][tt]=s.createFramebuffer()}else V.__webglFramebuffer[W]=s.createFramebuffer()}else{if(S.mipmaps.length>0){V.__webglFramebuffer=[];for(let W=0;W<S.mipmaps.length;W++)V.__webglFramebuffer[W]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(gt)for(let W=0,tt=it.length;W<tt;W++){let ct=n.get(it[W]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&ut(C)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let W=0;W<it.length;W++){let tt=it[W];V.__webglColorRenderbuffer[W]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[W]);let ct=r.convert(tt.format,tt.colorSpace),D=r.convert(tt.type),j=w(tt.internalFormat,ct,D,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),Q=Gt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,j,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,V.__webglColorRenderbuffer[W])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,S);for(let W=0;W<6;W++)if(S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Qt(V.__webglFramebuffer[W][tt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,tt);else Qt(V.__webglFramebuffer[W],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);E(S)?v(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let W=0,tt=it.length;W<tt;W++){let ct=it[W],D=n.get(ct),j=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,D.__webglTexture),Ht(j,ct),Qt(V.__webglFramebuffer,C,ct,s.COLOR_ATTACHMENT0+W,j,0),E(ct)&&v(j)}e.unbindTexture()}else{let W=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(W=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(W,ot.__webglTexture),Ht(W,S),S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Qt(V.__webglFramebuffer[tt],C,S,s.COLOR_ATTACHMENT0,W,tt);else Qt(V.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,W,0);E(S)?v(W):S.mipmaps.length>0&&s.texParameteri(W,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&re(C)}function F(C){let S=C.textures;for(let V=0,ot=S.length;V<ot;V++){let it=S[V];if(E(it)&&it.mipmapsAutoUpdate===!0){let ht=T(C),gt=n.get(it).__webglTexture;e.bindTexture(ht,gt),v(ht),e.unbindTexture()}}}let fe=[];function le(C){if(C.samples>0){if(ut(C)===!1){let S=C.textures,V=C.width,ot=C.height,it=s.COLOR_BUFFER_BIT,ht=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(C),W=S.length>1;if(W)for(let ct=0;ct<S.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),W){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let D=n.get(S[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,D,0)}s.blitFramebuffer(0,0,V,ot,0,0,V,ot,it,s.NEAREST),l===!0&&(fe.length=0,fe.push(s.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&fe.push(ht),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),W)for(let ct=0;ct<S.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let D=n.get(S[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,D,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Gt(C){return Math.min(i.maxSamples,C.samples)}function ut(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ue(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Dt(C,S){let V=C.colorSpace,ot=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Ra&&V!==Gi&&(ne.getTransfer(V)===_e?(ot!==ki||it!==fi)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",V)),S}function Bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Et,this.resetTextureUnits=R,this.getTextureUnits=Z,this.setTextureUnits=_t,this.setTexture2D=rt,this.setTexture2DArray=xt,this.setTexture3D=bt,this.setTextureCube=mt,this.rebindTextures=Oe,this.setupRenderTarget=He,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=ut,this.dispose=B}function WT(s,t){function e(n,i=Gi){let r,o=ne.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===hh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===uh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===cd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ad)return s.BYTE;if(n===ld)return s.SHORT;if(n===No)return s.UNSIGNED_SHORT;if(n===ch)return s.INT;if(n===Fi)return s.UNSIGNED_INT;if(n===Bi)return s.FLOAT;if(n===zi)return s.HALF_FLOAT;if(n===ud)return s.ALPHA;if(n===fd)return s.RGB;if(n===ki)return s.RGBA;if(n===Ss)return s.DEPTH_COMPONENT;if(n===Ts)return s.DEPTH_STENCIL;if(n===dd)return s.RED;if(n===fh)return s.RED_INTEGER;if(n===er)return s.RG;if(n===dh)return s.RG_INTEGER;if(n===ph)return s.RGBA_INTEGER;if(n===Xa||n===qa||n===Ya||n===$a)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mh||n===gh||n===_h||n===xh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_h)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vh||n===yh||n===Sh||n===Mh||n===bh||n===Za||n===Th)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vh||n===yh)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Mh)return r.COMPRESSED_R11_EAC;if(n===bh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Za)return r.COMPRESSED_RG11_EAC;if(n===Th)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wh||n===Eh||n===Ah||n===Rh||n===Ch||n===Ph||n===Ih||n===Lh||n===Dh||n===Nh||n===Uh||n===Oh||n===Fh||n===Bh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ah)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ch)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ph)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ih)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zh||n===kh||n===Gh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zh)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vh||n===Hh||n===Ja||n===Wh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var XT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qT=`
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

}`,Fd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ba(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ti({vertexShader:XT,fragmentShader:qT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nn(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bd=class extends Qi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new Fd,g={},y=e.getContextAttributes(),E=null,v=null,T=[],w=[],x=new se,M=null,P=null,A=new Xn;A.viewport=new Ae;let N=new Xn;N.viewport=new Ae;let L=[A,N],z=new sh,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let rt=T[X];return rt===void 0&&(rt=new Ao,T[X]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(X){let rt=T[X];return rt===void 0&&(rt=new Ao,T[X]=rt),rt.getGripSpace()},this.getHand=function(X){let rt=T[X];return rt===void 0&&(rt=new Ao,T[X]=rt),rt.getHandSpace()};function k(X){let rt=w.indexOf(X.inputSource);if(rt===-1)return;let xt=T[rt];xt!==void 0&&(xt.update(X.inputSource,X.frame,c||o),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",K);for(let X=0;X<T.length;X++){let rt=w[X];rt!==null&&(w[X]=null,T[X].disconnect(rt))}I=null,B=null,p.reset();for(let X in g)delete g[X];if(t.setRenderTarget(E),f=null,u=null,d=null,i=null,v=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),P!==null){let X=P.camera;X.fov=P.fov,X.zoom=P.zoom,X.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",O),i.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,bt=null,mt=null;y.depth&&(mt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=y.stencil?Ts:Ss,bt=y.stencil?Ur:Fi);let Nt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Nt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new hi(u.textureWidth,u.textureHeight,{format:ki,type:fi,depthTexture:new Ms(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new hi(f.framebufferWidth,f.framebufferHeight,{format:ki,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Et.setContext(i),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(X){for(let rt=0;rt<X.removed.length;rt++){let xt=X.removed[rt],bt=w.indexOf(xt);bt>=0&&(w[bt]=null,T[bt].disconnect(xt))}for(let rt=0;rt<X.added.length;rt++){let xt=X.added[rt],bt=w.indexOf(xt);if(bt===-1){for(let Nt=0;Nt<T.length;Nt++)if(Nt>=w.length){w.push(xt),bt=Nt;break}else if(w[Nt]===null){w[Nt]=xt,bt=Nt;break}if(bt===-1)break}let mt=T[bt];mt&&mt.connect(xt)}}function H(X,rt){rt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(rt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let rt=X.near,xt=X.far;p.texture!==null&&(p.depthNear>0&&(rt=p.depthNear),p.depthFar>0&&(xt=p.depthFar)),z.near=N.near=A.near=rt,z.far=N.far=A.far=xt,(I!==z.near||B!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,B=z.far),z.layers.mask=X.layers.mask|6,A.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;let bt=X.parent,mt=z.cameras;H(z,bt);for(let Nt=0;Nt<mt.length;Nt++)H(mt[Nt],bt);z.projectionMatrix.copy(A.projectionMatrix),z.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&X.isPerspectiveCamera&&(P={camera:X,fov:X.fov,zoom:X.zoom}),R(X,z,bt)};function R(X,rt,xt){xt===null?X.matrix.copy(rt.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(rt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Oc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(X){return g[X]};let Z=null;function _t(X,rt){if(h=rt.getViewerPose(c||o),m=rt,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let bt=!1;xt.length!==z.cameras.length&&(z.cameras.length=0,bt=!0);for(let At=0;At<xt.length;At++){let Ht=xt[At],Lt=null;if(f!==null)Lt=f.getViewport(Ht);else{let he=d.getViewSubImage(u,Ht);Lt=he.viewport,At===0&&(t.setRenderTargetTextures(v,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(v))}let Ft=L[At];Ft===void 0&&(Ft=new Xn,Ft.layers.enable(At),Ft.viewport=new Ae,L[At]=Ft),Ft.matrix.fromArray(Ht.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Ht.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),At===0&&(z.matrix.copy(Ft.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),bt===!0&&z.cameras.push(Ft)}let mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let At=d.getDepthInformation(xt[0]);At&&At.isValid&&At.texture&&p.init(At,i.renderState)}if(mt&&mt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let At=0;At<xt.length;At++){let Ht=xt[At].camera;if(Ht){let Lt=g[Ht];Lt||(Lt=new Ba,g[Ht]=Lt);let Ft=d.getCameraImage(Ht);Lt.sourceTexture=Ft}}}}for(let xt=0;xt<T.length;xt++){let bt=w[xt],mt=T[xt];bt!==null&&mt!==void 0&&mt.update(bt,rt,c||o)}Z&&Z(X,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let Et=new B_;Et.setAnimationLoop(_t),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}},YT=new Ve,$_=new Vt;$_.set(-1,0,0,0,1,0,0,0,1);function $T(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,yd(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,y,E,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===vn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===vn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=t.get(g),E=y.envMap,v=y.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(YT.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply($_),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let y=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ZT(s,t,e,n){let i={},r={};function o(y,E){let v=E.program;n.uniformBlockBinding(y,v,i[y.id])}function a(y,E){let v=i[y.id];v===void 0&&(m(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",p));let T=E.program;n.updateUBOMapping(y,T);let w=t.render.frame;r[y.id]!==w&&(c(y),r[y.id]=w)}function l(y){let E=s.createBuffer(),v=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,v,T),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(y){let E=i[y.id],v=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let w=0,x=v.length;w<x;w++){let M=v[w];if(Array.isArray(M))for(let P=0,A=M.length;P<A;P++)h(M[P],w,P,T);else h(M,w,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,E,v,T){if(u(y,E,v,T)===!0){let w=y.__offset,x=y.value;if(Array.isArray(x)){let M=0;for(let P=0;P<x.length;P++){let A=x[P],N=_(A,!0);d(A,y.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,y.__data)}}function d(y,E,v){typeof y=="number"||typeof y=="boolean"?E[v]=y:y.isMatrix3?(E[v]=y.elements[0],E[v+1]=y.elements[1],E[v+2]=y.elements[2],E[v+3]=0,E[v+4]=y.elements[3],E[v+5]=y.elements[4],E[v+6]=y.elements[5],E[v+7]=0,E[v+8]=y.elements[6],E[v+9]=y.elements[7],E[v+10]=y.elements[8],E[v+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-v),v):y.toArray(E,v)}function u(y,E,v,T){let w=y.value,x=E+"_"+v;if(Array.isArray(w)){T[x]===void 0&&(T[x]=[]);let M=T[x],P=!1;for(let A=0;A<w.length;A++)f(w[A],M,A)===!0&&(P=!0);return P}return f(w,T,x)}function f(y,E,v){if(E[v]===void 0)return typeof y=="number"||typeof y=="boolean"?E[v]=y:ArrayBuffer.isView(y)?E[v]=y.slice():E[v]=y.clone(),!0;{let T=E[v];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return E[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function m(y){let E=y.uniforms,v=0,T=16;for(let x=0,M=E.length;x<M;x++){let P=Array.isArray(E[x])?E[x]:[E[x]];for(let A=0,N=P.length;A<N;A++){let L=P[A],z=Array.isArray(L.value)?L.value:[L.value],I=Array.isArray(E[x])||Array.isArray(L.value),B=v;for(let O=0,K=z.length;O<K;O++){let H=z[O],R=_(H,I),Z=v%T,_t=Z%R.boundary,Et=Z+_t;v+=_t,Et!==0&&T-Et<R.storage&&(v+=T-Et),O===0&&(B=v),v+=R.storage}let k=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new k((v-B)/Float32Array.BYTES_PER_ELEMENT),L.__offset=B}}let w=v%T;return w>0&&(v+=T-w),y.__size=v,y.__cache={},this}function _(y,E){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(y){let E=y.target;E.removeEventListener("dispose",p),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function g(){for(let y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:a,dispose:g}}var JT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ts=null;function KT(){return ts===null&&(ts=new Gc(JT,16,16,er,zi),ts.name="DFG_LUT",ts.minFilter=rn,ts.magFilter=rn,ts.wrapS=Ji,ts.wrapT=Ji,ts.generateMipmaps=!1,ts.needsUpdate=!0),ts}var $h=class{constructor(t={}){let{canvas:e=l_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=fi}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,p=new Set([ph,dh,fh]),g=new Set([fi,Fi,No,Ur,hh,uh]),y=new Uint32Array(4),E=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,w=null,x=[],M=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,N=!1,L=null,z=null,I=null,B=null;this._outputColorSpace=xn;let k=0,O=0,K=null,H=-1,R=null,Z=new Ae,_t=new Ae,Et=null,X=new Yt(0),rt=0,xt=e.width,bt=e.height,mt=1,Nt=null,xe=null,At=new Ae(0,0,xt,bt),Ht=new Ae(0,0,xt,bt),Lt=!1,Ft=new Ir,he=new Vc,ae=!1,J=!1,Qt=new Ve,Xe=new $,Se=new Ae,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function He(){return K===null?mt:1}let F=n;function fe(b,U){return e.getContext(b,U)}let le,Gt,ut,ue,Dt,Bt,C,S,V,ot,it,ht,gt,W,tt,ct,D,j,Q,ft,lt,dt,at;try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),F===null){let U="webgl2";if(F=fe(U,b),F===null)throw fe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pt()}catch(b){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),kt("WebGLRenderer: "+b.message),b}function pt(){le=new lb(F),le.init(),lt=new WT(F,le),Gt=new KM(F,le,t,lt),ut=new VT(F,le),Gt.reversedDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),z=F.createFramebuffer(),I=F.createFramebuffer(),B=F.createFramebuffer(),ue=new ub(F),Dt=new RT,Bt=new HT(F,le,ut,Dt,Gt,lt,ue),C=new ab(A),S=new dy(F),dt=new ZM(F,S),V=new cb(F,S,ue,dt),ot=new db(F,V,S,dt,ue),j=new fb(F,Gt,Bt),tt=new QM(Dt),it=new AT(A,C,le,Gt,dt,tt),ht=new $T(A,Dt),gt=new PT,W=new OT(le),D=new $M(A,C,ut,ot,m,l),ct=new GT(A,ot,Gt),at=new ZT(F,ue,Gt,ut),Q=new JM(F,le,ue),ft=new hb(F,le,ue),ue.programs=it.programs,A.capabilities=Gt,A.extensions=le,A.properties=Dt,A.renderLists=gt,A.shadowMap=ct,A.state=ut,A.info=ue}_!==fi&&(P=new mb(_,e.width,e.height,a,i,r));let st=new Bd(A,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(b){b!==void 0&&(mt=b,this.setSize(xt,bt,!1))},this.getSize=function(b){return b.set(xt,bt)},this.setSize=function(b,U,Y=!0){if(st.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=b,bt=U,e.width=Math.floor(b*mt),e.height=Math.floor(U*mt),Y===!0&&(e.style.width=b+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(xt*mt,bt*mt).floor()},this.setDrawingBufferSize=function(b,U,Y){xt=b,bt=U,mt=Y,e.width=Math.floor(b*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===fi){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Z)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,U,Y,G){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,U,Y,G),ut.viewport(Z.copy(At).multiplyScalar(He()).round())},this.getScissor=function(b){return b.copy(Ht)},this.setScissor=function(b,U,Y,G){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,U,Y,G),ut.scissor(_t.copy(Ht).multiplyScalar(He()).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(b){ut.setScissorTest(Lt=b)},this.setOpaqueSort=function(b){Nt=b},this.setTransparentSort=function(b){xe=b},this.getClearColor=function(b){return b.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,Y=!0){let G=0;if(b){let q=!1;if(K!==null){let St=K.texture.format;q=p.has(St)}if(q){let St=K.texture.type,Ct=g.has(St),yt=D.getClearColor(),wt=D.getClearAlpha(),Ut=yt.r,Xt=yt.g,te=yt.b;Ct?(y[0]=Ut,y[1]=Xt,y[2]=te,y[3]=wt,F.clearBufferuiv(F.COLOR,0,y)):(E[0]=Ut,E[1]=Xt,E[2]=te,E[3]=wt,F.clearBufferiv(F.COLOR,0,E))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),D.dispose(),gt.dispose(),W.dispose(),Bt.dispose(),Dt.dispose(),C.dispose(),ot.dispose(),V.dispose(),dt.dispose(),at.dispose(),it.dispose(),st.dispose(),st.removeEventListener("sessionstart",Me),st.removeEventListener("sessionend",me),Qe.stop()};function et(b){b.preventDefault(),xd("WebGLRenderer: Context Lost."),N=!0}function vt(){xd("WebGLRenderer: Context Restored."),N=!1;let b=ue.autoReset,U=ct.enabled,Y=ct.autoUpdate,G=ct.needsUpdate,q=ct.type;pt(),ue.autoReset=b,ct.enabled=U,ct.autoUpdate=Y,ct.needsUpdate=G,ct.type=q}function nt(b){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Tt(b){let U=b.target;U.removeEventListener("dispose",Tt),jt(U)}function jt(b){Wt(b),Dt.remove(b)}function Wt(b){let U=Dt.get(b).programs;U!==void 0&&(U.forEach(function(Y){it.releaseProgram(Y)}),b.isShaderMaterial&&it.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,Y,G,q,St){U===null&&(U=re);let Ct=q.isMesh&&q.matrixWorld.determinantAffine()<0,yt=di(b,U,Y,G,q);ut.setMaterial(G,Ct);let wt=Y.index,Ut=1;if(G.wireframe===!0){if(wt=V.getWireframeAttribute(Y),wt===void 0)return;Ut=2}let Xt=Y.drawRange,te=Y.attributes.position,Pt=Xt.start*Ut,ee=(Xt.start+Xt.count)*Ut;St!==null&&(Pt=Math.max(Pt,St.start*Ut),ee=Math.min(ee,(St.start+St.count)*Ut)),wt!==null?(Pt=Math.max(Pt,0),ee=Math.min(ee,wt.count)):te!=null&&(Pt=Math.max(Pt,0),ee=Math.min(ee,te.count));let $e=ee-Pt;if($e<0||$e===1/0)return;dt.setup(q,G,yt,Y,wt);let Ee,Te=Q;if(wt!==null&&(Ee=S.get(wt),Te=ft,Te.setIndex(Ee)),q.isMesh)G.wireframe===!0?(ut.setLineWidth(G.wireframeLinewidth*He()),Te.setMode(F.LINES)):Te.setMode(F.TRIANGLES);else if(q.isLine){let Sn=G.linewidth;Sn===void 0&&(Sn=1),ut.setLineWidth(Sn*He()),q.isLineSegments?Te.setMode(F.LINES):q.isLineLoop?Te.setMode(F.LINE_LOOP):Te.setMode(F.LINE_STRIP)}else q.isPoints?Te.setMode(F.POINTS):q.isSprite&&Te.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Te.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Sn=q._multiDrawStarts,It=q._multiDrawCounts,On=q._multiDrawCount,de=wt?S.get(wt).bytesPerElement:1,nr=Dt.get(G).currentProgram.getUniforms();for(let Mn=0;Mn<On;Mn++)nr.setValue(F,"_gl_DrawID",Mn),Te.render(Sn[Mn]/de,It[Mn])}else if(q.isInstancedMesh)Te.renderInstances(Pt,$e,q.count);else if(Y.isInstancedBufferGeometry){let Sn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,It=Math.min(Y.instanceCount,Sn);Te.renderInstances(Pt,$e,It)}else Te.render(Pt,$e)};function Ce(b,U,Y,G){L!==null&&b.isNodeMaterial&&L.setObject(G,b),ae===!0&&tt.setState(b,Y,!1),b.transparent===!0&&b.side===wi&&b.forceSinglePass===!1?(b.side=vn,b.needsUpdate=!0,jn(b,U,G),b.side=tr,b.needsUpdate=!0,jn(b,U,G),b.side=wi):jn(b,U,G)}this.compile=function(b,U,Y=null){Y===null&&(Y=b),L!==null&&L.renderStart(b,U,Y),w=W.get(Y),w.init(U),M.push(w),Y.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),b!==Y&&b.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),J=this.localClippingEnabled,ae=tt.init(this.clippingPlanes,J),ae===!0&&tt.setGlobalState(this.clippingPlanes,U),L!==null&&ct.render(w.state.shadowsArray,Y,U);let G=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let St=q.material;if(St)if(Array.isArray(St))for(let Ct=0;Ct<St.length;Ct++){let yt=St[Ct];Ce(yt,Y,U,q),G.add(yt)}else Ce(St,Y,U,q),G.add(St)}),w=M.pop(),L!==null&&L.renderEnd(),G},this.compileAsync=function(b,U,Y=null){let G=this.compile(b,U,Y);return new Promise(q=>{function St(){if(G.forEach(function(Ct){let wt=Dt.get(Ct).currentProgram;(wt===void 0||wt.isReady())&&G.delete(Ct)}),G.size===0){q(b);return}setTimeout(St,10)}le.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let qe=null;function Pe(b){qe&&qe(b)}function Me(){Qe.stop()}function me(){Qe.start()}let Qe=new B_;Qe.setAnimationLoop(Pe),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(b){qe=b,st.setAnimationLoop(b),b===null?Qe.stop():Qe.start()},st.addEventListener("sessionstart",Me),st.addEventListener("sessionend",me),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(b,U);let Y=st.enabled===!0&&st.isPresenting===!0,G=P!==null&&(K===null||Y)&&P.begin(A,K);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,U,K),w=W.get(b,M.length),w.init(U),w.state.textureUnits=Bt.getTextureUnits(),M.push(w),Qt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?he.setFromArrayCamera(U):Ft.setFromProjectionMatrix(Qt,Si,U.reversedDepth),J=this.localClippingEnabled,ae=tt.init(this.clippingPlanes,J),T=gt.get(b,x.length),T.init(),x.push(T),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Ct=A.xr.getDepthSensingMesh();Ct!==null&&be(Ct,U,-1/0,A.sortObjects)}be(b,U,0,A.sortObjects),T.finish(),L!==null&&L.updateLights(w.state.lightsArray),A.sortObjects===!0&&T.sort(Nt,xe),Oe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Oe&&D.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),ae===!0&&tt.beginShadows();let q=w.state.shadowsArray;if(ct.render(q,b,U),ae===!0&&tt.endShadows(),(G&&P.hasRenderPass())===!1){let Ct=T.opaque,yt=T.transmissive;if(w.setupLights(),U.isArrayCamera){let wt=U.cameras;if(yt.length>0)for(let Ut=0,Xt=wt.length;Ut<Xt;Ut++){let te=wt[Ut];Qn(Ct,yt,b,te)}Oe&&D.render(b);for(let Ut=0,Xt=wt.length;Ut<Xt;Ut++){let te=wt[Ut];yn(T,b,te,te.viewport)}}else yt.length>0&&Qn(Ct,yt,b,U),Oe&&D.render(b),yn(T,b,U)}K!==null&&O===0&&(Bt.updateMultisampleRenderTarget(K),Bt.updateRenderTargetMipmap(K)),G&&P.end(A),b.isScene===!0&&b.onAfterRender(A,b,U),dt.resetDefaultState(),H=-1,R=null,M.pop(),M.length>0?(w=M[M.length-1],Bt.setTextureUnits(w.state.textureUnits),ae===!0&&tt.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,L!==null&&L.renderEnd()};function be(b,U,Y,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Ct=U.isArrayCamera?he:Ft;if(!b.frustumCulled||b.intersectsFrustum(Ct)){G&&Se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Qt);let yt=ot.update(b),wt=b.material;wt.visible&&T.push(b,yt,wt,Y,Se.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let Ct=U.isArrayCamera?he:Ft;if(!b.frustumCulled||b.intersectsFrustum(Ct)){let yt=ot.update(b),wt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Se.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Se.copy(yt.boundingSphere.center)),Se.applyMatrix4(b.matrixWorld).applyMatrix4(Qt)),Array.isArray(wt)){let Ut=yt.groups;for(let Xt=0,te=Ut.length;Xt<te;Xt++){let Pt=Ut[Xt],ee=wt[Pt.materialIndex];ee&&ee.visible&&T.push(b,yt,ee,Y,Se.z,Pt,U)}}else wt.visible&&T.push(b,yt,wt,Y,Se.z,null,U)}}}let St=b.children;for(let Ct=0,yt=St.length;Ct<yt;Ct++)be(St[Ct],U,Y,G)}function yn(b,U,Y,G){let{opaque:q,transmissive:St,transparent:Ct}=b;w.setupLightsView(Y),ae===!0&&tt.setGlobalState(A.clippingPlanes,Y),G&&ut.viewport(Z.copy(G)),q.length>0&&Fe(q,U,Y),St.length>0&&Fe(St,U,Y),Ct.length>0&&Fe(Ct,U,Y),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Qn(b,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Pt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new hi(1,1,{generateMipmaps:!0,type:Pt?zi:fi,minFilter:Oi,samples:Math.max(4,Gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let St=w.state.transmissionRenderTarget[G.id],Ct=G.viewport||Z;St.setSize(Ct.z*A.transmissionResolutionScale,Ct.w*A.transmissionResolutionScale);let yt=A.getRenderTarget(),wt=A.getActiveCubeFace(),Ut=A.getActiveMipmapLevel();A.setRenderTarget(St),A.getClearColor(X),rt=A.getClearAlpha(),rt<1&&A.setClearColor(16777215,.5),A.clear(),Oe&&D.render(Y);let Xt=A.toneMapping;A.toneMapping=Ei;let te=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),ae===!0&&tt.setGlobalState(A.clippingPlanes,G),Fe(b,Y,G),Bt.updateMultisampleRenderTarget(St),Bt.updateRenderTargetMipmap(St),le.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ee=0,$e=U.length;ee<$e;ee++){let Ee=U[ee],{object:Te,geometry:Sn,material:It,group:On}=Ee;if(It.side===wi&&Te.layers.test(G.layers)){let de=It.side;It.side=vn,It.needsUpdate=!0,Ye(Te,Y,G,Sn,It,On),It.side=de,It.needsUpdate=!0,Pt=!0}}Pt===!0&&(Bt.updateMultisampleRenderTarget(St),Bt.updateRenderTargetMipmap(St))}A.setRenderTarget(yt,wt,Ut),A.setClearColor(X,rt),te!==void 0&&(G.viewport=te),A.toneMapping=Xt}function Fe(b,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let q=0,St=b.length;q<St;q++){let Ct=b[q],{object:yt,geometry:wt,group:Ut}=Ct,Xt=Ct.material;Xt.allowOverride===!0&&G!==null&&(Xt=G),yt.layers.test(Y.layers)&&Ye(yt,U,Y,wt,Xt,Ut)}}function Ye(b,U,Y,G,q,St){L!==null&&q.isNodeMaterial&&L.setObject(b,q),b.onBeforeRender(A,U,Y,G,q,St),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(A,U,Y,G,b,St),q.transparent===!0&&q.side===wi&&q.forceSinglePass===!1?(q.side=vn,q.needsUpdate=!0,A.renderBufferDirect(Y,U,G,q,b,St),q.side=tr,q.needsUpdate=!0,A.renderBufferDirect(Y,U,G,q,b,St),q.side=wi):A.renderBufferDirect(Y,U,G,q,b,St),b.onAfterRender(A,U,Y,G,q,St)}function je(b){let U=0;for(let Y of b)Y.texture!==null&&U++;return U}function jn(b,U,Y){U.isScene!==!0&&(U=re);let G=Dt.get(b),q=w.state.lights,St=w.state.shadowsArray,Ct=q.state.version,yt=it.getParameters(b,q.state,St,U,Y,w.state.lightProbeGridArray),wt=it.getProgramCacheKey(yt),Ut=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Xt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=C.get(b.envMap||G.environment,Xt),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",Tt),Ut=new Map,G.programs=Ut,G.programVariants=new Map);let te=Ut.get(wt);if(te!==void 0){if(G.currentProgram===te&&G.lightsStateVersion===Ct)return Be(b,yt),te}else yt.uniforms=it.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,Y,yt),b.onBeforeCompile(yt,A),te=it.acquireProgram(yt,wt),Ut.set(wt,te),G.uniforms=yt.uniforms;let Pt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=tt.uniform),Be(b,yt),G.needsLights=cl(b),G.lightsStateVersion=Ct,G.needsLights&&(Pt.ambientLightColor.value=q.state.ambient,Pt.lightProbe.value=q.state.probe,Pt.sunLights.value=q.state.sun,Pt.sunLightShadows.value=q.state.sunShadow,Pt.directionalLights.value=q.state.directional,Pt.directionalLightShadows.value=q.state.directionalShadow,Pt.spotLights.value=q.state.spot,Pt.spotLightShadows.value=q.state.spotShadow,Pt.rectAreaLights.value=q.state.rectArea,Pt.ltc_1.value=q.state.rectAreaLTC1,Pt.ltc_2.value=q.state.rectAreaLTC2,Pt.pointLights.value=q.state.point,Pt.pointLightShadows.value=q.state.pointShadow,Pt.hemisphereLights.value=q.state.hemi,Pt.sunShadowMatrix.value=q.state.sunShadowMatrix,Pt.sunShadowCascade.value=q.state.sunShadowCascade,Pt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Pt.spotLightMatrix.value=q.state.spotLightMatrix,Pt.spotLightMap.value=q.state.spotLightMap,Pt.pointShadowMatrix.value=q.state.pointShadowMatrix),G.numLightProbeGrids=je(w.state.lightProbeGridArray),G.currentProgram=te,G.uniformsList=null,te}function Fr(b,U,Y,G,q){let St=Dt.get(b),Ct=St.currentProgram.id+","+G+","+q,yt=St.programVariants.get(Ct);return yt===void 0?(yt=jn(b,U,Y),St.programVariants.set(Ct,yt)):(St.currentProgram=yt,St.uniformsList=null,St.outputColorSpace=G,St.toneMapping=q),yt}function tn(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Uo.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Be(b,U){let Y=Dt.get(b);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function di(b,U,Y,G,q){U.isScene!==!0&&(U=re),Bt.resetTextureUnits();let St=U.fog,Ct=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,yt=K===null?A.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ne.workingColorSpace,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ut=C.get(G.envMap||Ct,wt),Xt=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,te=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!Y.morphAttributes.position,ee=!!Y.morphAttributes.normal,$e=!!Y.morphAttributes.color,Ee=Ei;G.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ee=A.toneMapping);let Te=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Sn=Te!==void 0?Te.length:0,It=Dt.get(G),On=w.state.lights;if(ae===!0&&(J===!0||b!==R)){let Le=b===R&&G.id===H;tt.setState(G,b,Le)}let de=!1,nr=!1;G.version===It.__version?It.needsLights&&It.lightsStateVersion!==On.state.version||q.isBatchedMesh&&It.batching===!1||!q.isBatchedMesh&&It.batching===!0||q.isBatchedMesh&&It.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&It.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||q.isInstancedMesh&&It.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&It.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&It.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&It.instancingMorph===!1&&q.morphTexture!==null||It.envMap!==Ut||G.fog===!0&&It.fog!==St||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==tt.numPlanes||It.numIntersection!==tt.numIntersection)||It.vertexAlphas!==Xt||It.vertexTangents!==te||It.morphTargets!==Pt||It.morphNormals!==ee||It.morphColors!==$e||It.morphTargetsCount!==Sn||It.numLightProbeGrids!==je(w.state.lightProbeGridArray)?de=!0:(It.outputColorSpace!==yt||It.toneMapping!==Ee)&&(nr=!0):(de=!0,It.__version=G.version);let Mn=It.currentProgram;(de===!0||nr===!0)&&(Mn=nr===!0?Fr(G,U,q,yt,Ee):jn(G,U,q),L&&G.isNodeMaterial&&L.onUpdateProgram(G,Mn,It));let hl=!1,As=!1,ir=!1,ce=Mn.getUniforms(),pn=It.uniforms;if(ut.useProgram(Mn.program)&&(hl=!0,As=!0,ir=!0),G.id!==H&&(H=G.id,As=!0),hl||R!==b){ut.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ce.setValue(F,"projectionMatrix",b.projectionMatrix),ce.setValue(F,"viewMatrix",b.matrixWorldInverse);let ln=ce.map.cameraPosition;ln!==void 0&&ln.setValue(F,Xe.setFromMatrixPosition(b.matrixWorld)),Gt.logarithmicDepthBuffer&&ce.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ce.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,As=!0,ir=!0)}if(It.needsLights&&(On.state.sunShadowMap.length>0&&ce.setValue(F,"sunShadowMap",On.state.sunShadowMap,Bt),On.state.directionalShadowMap.length>0&&ce.setValue(F,"directionalShadowMap",On.state.directionalShadowMap,Bt),On.state.spotShadowMap.length>0&&ce.setValue(F,"spotShadowMap",On.state.spotShadowMap,Bt),On.state.pointShadowMap.length>0&&ce.setValue(F,"pointShadowMap",On.state.pointShadowMap,Bt)),q.isSkinnedMesh){ce.setOptional(F,q,"bindMatrix"),ce.setOptional(F,q,"bindMatrixInverse");let Le=q.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),ce.setValue(F,"boneTexture",Le.boneTexture,Bt))}q.isBatchedMesh&&(ce.setOptional(F,q,"batchingTexture"),ce.setValue(F,"batchingTexture",q._matricesTexture,Bt),ce.setOptional(F,q,"batchingIdTexture"),ce.setValue(F,"batchingIdTexture",q._indirectTexture,Bt),ce.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&ce.setValue(F,"batchingColorTexture",q._colorsTexture,Bt));let Ri=Y.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&j.update(q,Y,Mn),(As||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,ce.setValue(F,"receiveShadow",q.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(pn.envMapIntensity.value=U.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=KT()),As){if(ce.setValue(F,"toneMappingExposure",A.toneMappingExposure),It.needsLights&&ko(pn,ir),St&&G.fog===!0&&ht.refreshFogUniforms(pn,St),ht.refreshMaterialUniforms(pn,G,mt,bt,w.state.transmissionRenderTarget[b.id]),It.needsLights&&It.numLightProbeGrids>0){let Le=v,ln=0;for(let ss of w.state.lightProbeGridArray)ss.texture!==null&&(Le.textures[ln]=ss.texture,Le.min[ln]=ss.boundingBox.min,Le.max[ln]=ss.boundingBox.max,Le.resolution[ln]=ss.resolution,ln++);for(let ss in Le)Le[ss].length=ln;pn.probesSH.value=Le.textures,pn.probesMin.value=Le.min,pn.probesMax.value=Le.max,pn.probesResolution.value=Le.resolution}Uo.upload(F,tn(It),pn,Bt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Uo.upload(F,tn(It),pn,Bt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ce.setValue(F,"center",q.center),ce.setValue(F,"modelViewMatrix",q.modelViewMatrix),ce.setValue(F,"normalMatrix",q.normalMatrix),ce.setValue(F,"modelMatrix",q.matrixWorld),G.uniformsGroups!==void 0){let Le=G.uniformsGroups;for(let ln=0,ss=Le.length;ln<ss;ln++){let qd=Le[ln];at.update(qd,Mn),at.bind(qd,Mn)}}return Mn}function ko(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function cl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,U,Y){let G=Dt.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Dt.get(b.texture).__webglTexture=U,Dt.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let Y=Dt.get(b);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,Y=0){K=b,k=U,O=Y;let G=null,q=!1,St=!1;if(b){let yt=Dt.get(b);if(yt.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(F.FRAMEBUFFER,yt.__webglFramebuffer),Z.copy(b.viewport),_t.copy(b.scissor),Et=b.scissorTest,ut.viewport(Z),ut.scissor(_t),ut.setScissorTest(Et),H=-1;return}else if(yt.__webglFramebuffer===void 0)Bt.setupRenderTarget(b);else if(yt.__hasExternalTextures)Bt.rebindTextures(b,Dt.get(b.texture).__webglTexture,Dt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Xt=b.depthTexture;if(yt.__boundDepthTexture!==Xt){if(Xt!==null&&Dt.has(Xt)&&(b.width!==Xt.image.width||b.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(b)}}let wt=b.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(St=!0);let Ut=Dt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?G=Ut[U][Y]:G=Ut[U],q=!0):b.samples>0&&Bt.useMultisampledRTT(b)===!1?G=Dt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?G=Ut[Y]:G=Ut,Z.copy(b.viewport),_t.copy(b.scissor),Et=b.scissorTest}else Z.copy(At).multiplyScalar(mt).floor(),_t.copy(Ht).multiplyScalar(mt).floor(),Et=Lt;if(Y!==0&&(G=z),ut.bindFramebuffer(F.FRAMEBUFFER,G)&&ut.drawBuffers(b,G),ut.viewport(Z),ut.scissor(_t),ut.setScissorTest(Et),q){let yt=Dt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,Y)}else if(St){let yt=U;for(let wt=0;wt<b.textures.length;wt++){let Ut=Dt.get(b.textures[wt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+wt,Ut.__webglTexture,Y,yt)}}else if(b!==null&&Y!==0){let yt=Dt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yt.__webglTexture,Y)}H=-1};function Es(b){let U=Dt.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=Gt.textureFormatReadable(b.format),U.__typeReadable=Gt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,Y,G,q,St,Ct,yt=0){if(!(b&&b.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt){ut.bindFramebuffer(F.FRAMEBUFFER,wt);try{let Ut=b.textures[yt],Xt=Ut.format,te=Ut.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Pt=Es(Ut);if(Pt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&Y>=0&&Y<=b.height-q&&F.readPixels(U,Y,G,q,lt.convert(Xt),lt.convert(te),St)}finally{let Ut=K!==null?Dt.get(K).__webglFramebuffer:null;ut.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,U,Y,G,q,St,Ct,yt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt)if(U>=0&&U<=b.width-G&&Y>=0&&Y<=b.height-q){ut.bindFramebuffer(F.FRAMEBUFFER,wt);let Ut=b.textures[yt],Xt=Ut.format,te=Ut.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Pt=Es(Ut);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.bufferData(F.PIXEL_PACK_BUFFER,St.byteLength,F.STREAM_READ),F.readPixels(U,Y,G,q,lt.convert(Xt),lt.convert(te),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let $e=K!==null?Dt.get(K).__webglFramebuffer:null;ut.bindFramebuffer(F.FRAMEBUFFER,$e);let Ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await h_(F,Ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,St),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ee),F.deleteSync(Ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,Y=0){let G=Math.pow(2,-Y),q=Math.floor(b.image.width*G),St=Math.floor(b.image.height*G),Ct=U!==null?U.x:0,yt=U!==null?U.y:0;Bt.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Ct,yt,q,St),ut.unbindTexture()},this.copyTextureToTexture=function(b,U,Y=null,G=null,q=0,St=0){let Ct,yt,wt,Ut,Xt,te,Pt,ee,$e,Ee=b.isCompressedTexture?b.mipmaps[St]:b.image;if(Y!==null)Ct=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,wt=Y.isBox3?Y.max.z-Y.min.z:1,Ut=Y.min.x,Xt=Y.min.y,te=Y.isBox3?Y.min.z:0;else{let ce=Math.pow(2,-q);Ct=Math.floor(Ee.width*ce),yt=Math.floor(Ee.height*ce),b.isDataArrayTexture?wt=Ee.depth:b.isData3DTexture?wt=Math.floor(Ee.depth*ce):wt=1,Ut=0,Xt=0,te=0}G!==null?(Pt=G.x,ee=G.y,$e=G.z):(Pt=0,ee=0,$e=0);let Te=lt.convert(U.format),Sn=lt.convert(U.type),It;U.isData3DTexture?(Bt.setTexture3D(U,0),It=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Bt.setTexture2DArray(U,0),It=F.TEXTURE_2D_ARRAY):(Bt.setTexture2D(U,0),It=F.TEXTURE_2D),ut.activeTexture(F.TEXTURE0),ut.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),ut.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ut.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let On=ut.getParameter(F.UNPACK_ROW_LENGTH),de=ut.getParameter(F.UNPACK_IMAGE_HEIGHT),nr=ut.getParameter(F.UNPACK_SKIP_PIXELS),Mn=ut.getParameter(F.UNPACK_SKIP_ROWS),hl=ut.getParameter(F.UNPACK_SKIP_IMAGES);ut.pixelStorei(F.UNPACK_ROW_LENGTH,Ee.width),ut.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ee.height),ut.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),ut.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),ut.pixelStorei(F.UNPACK_SKIP_IMAGES,te);let As=b.isDataArrayTexture||b.isData3DTexture,ir=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let ce=Dt.get(b),pn=Dt.get(U),Ri=Dt.get(ce.__renderTarget),Le=Dt.get(pn.__renderTarget);ut.bindFramebuffer(F.READ_FRAMEBUFFER,Ri.__webglFramebuffer),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let ln=0;ln<wt;ln++)As&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.get(b).__webglTexture,q,te+ln),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.get(U).__webglTexture,St,$e+ln)),F.blitFramebuffer(Ut,Xt,Ut+Ct,Xt+yt,Pt,ee,Pt+Ct,ee+yt,F.DEPTH_BUFFER_BIT,F.NEAREST);ut.bindFramebuffer(F.READ_FRAMEBUFFER,null),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||Dt.has(b)){let ce=Dt.get(b),pn=Dt.get(U);ut.bindFramebuffer(F.READ_FRAMEBUFFER,I),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Ri=0;Ri<wt;Ri++)As?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ce.__webglTexture,q,te+Ri):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ce.__webglTexture,q),ir?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,St,$e+Ri):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,St),q!==0?F.blitFramebuffer(Ut,Xt,Ut+Ct,Xt+yt,Pt,ee,Pt+Ct,ee+yt,F.COLOR_BUFFER_BIT,F.NEAREST):ir?F.copyTexSubImage3D(It,St,Pt,ee,$e+Ri,Ut,Xt,Ct,yt):F.copyTexSubImage2D(It,St,Pt,ee,Ut,Xt,Ct,yt);ut.bindFramebuffer(F.READ_FRAMEBUFFER,null),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ir?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(It,St,Pt,ee,$e,Ct,yt,wt,Te,Sn,Ee.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(It,St,Pt,ee,$e,Ct,yt,wt,Te,Ee.data):F.texSubImage3D(It,St,Pt,ee,$e,Ct,yt,wt,Te,Sn,Ee):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,St,Pt,ee,Ct,yt,Te,Sn,Ee.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,St,Pt,ee,Ee.width,Ee.height,Te,Ee.data):F.texSubImage2D(F.TEXTURE_2D,St,Pt,ee,Ct,yt,Te,Sn,Ee);ut.pixelStorei(F.UNPACK_ROW_LENGTH,On),ut.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de),ut.pixelStorei(F.UNPACK_SKIP_PIXELS,nr),ut.pixelStorei(F.UNPACK_SKIP_ROWS,Mn),ut.pixelStorei(F.UNPACK_SKIP_IMAGES,hl),St===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(It),ut.unbindTexture()},this.initRenderTarget=function(b){Dt.get(b).__webglFramebuffer===void 0&&Bt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Bt.setTextureCube(b,0):b.isData3DTexture?Bt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Bt.setTexture2DArray(b,0):Bt.setTexture2D(b,0),ut.unbindTexture()},this.resetState=function(){k=0,O=0,K=null,ut.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var nl=new $;function Ai(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;nl.copy(t),nl[n]=0,nl.normalize();let c=.5*o/(o+a),h=1-nl.angleTo(s)/l;return Math.sign(nl[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Kh=class s extends ji{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new $,c=new $,h=new $(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,_=new $,p=.5/o;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/m)){case 0:_.set(1,0,0),f[y+0]=Ai(_,c,"z","y",r,n),f[y+1]=1-Ai(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[y+0]=1-Ai(_,c,"z","y",r,n),f[y+1]=1-Ai(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[y+0]=1-Ai(_,c,"x","z",r,t),f[y+1]=Ai(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[y+0]=1-Ai(_,c,"x","z",r,t),f[y+1]=1-Ai(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[y+0]=1-Ai(_,c,"x","y",r,t),f[y+1]=1-Ai(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[y+0]=Ai(_,c,"x","y",r,t),f[y+1]=1-Ai(_,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var QT="THEIA",jT=.34;function Z_(s){let t=new Cr;t.add(new Nn(new ji(60,60,60),new Pr({color:1710873,side:vn})));let e=(r,o,a,l,c)=>{let h=new Nn(new bs(r,o),new Pr({color:new Yt(l).multiplyScalar(c),side:wi,toneMapped:!1}));h.position.set(...a),h.lookAt(0,0,0),t.add(h)};e(16,16,[0,18,3],"#ffffff",5),e(3,22,[-18,2,5],"#ffffff",9),e(9,12,[18,-2,-3],"#fff3e6",3.5),e(26,8,[0,-16,7],"#ffffff",1.4),e(6,6,[11,7,-17],"#ffffff",5),e(30,14,[0,3,22],"#ffffff",.5);let n=new Oo(s),i=n.fromScene(t,.03).texture;return n.dispose(),i}var Bo=3,Gd=2,t1=.13,zd=null;function e1(s){if(zd)return zd;let t=new Kh(1,1,1,s?4:7,.13),e=t.attributes.position.array,n=t.attributes.normal.array,i=t.attributes.uv.array,r=e.length/3/6;for(let o=0;o<e.length/3;o++){let a=Math.floor(o/r),l=a%Bo,c=Math.floor(a/Bo);i[o*2]=(l+i[o*2])/Bo,i[o*2+1]=(Gd-1-c+i[o*2+1])/Gd;let h=a>>1;for(let u=0;u<3;u++)u!==h&&(n[o*3+u]+=e[o*3+u]*t1*2);let d=Math.hypot(n[o*3],n[o*3+1],n[o*3+2]);n[o*3]/=d,n[o*3+1]/=d,n[o*3+2]/=d}return t.clearGroups(),zd=t}var n1={1:[[0,0]],2:[[-1,-1],[1,1]],3:[[-1,-1],[0,0],[1,1]],4:[[-1,-1],[1,-1],[-1,1],[1,1]],5:[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],6:[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]},i1=(s,t)=>t%2?[4,3,2,5,s,6]:[3,4,5,2,s,6];function kd(s,t,e,n){let i=document.createElement("canvas"),r=i.getContext("2d");i.width=t*Bo,i.height=t*Gd,r.fillStyle=e,r.fillRect(0,0,i.width,i.height),r.fillStyle=n,s.forEach((a,l)=>{let c=l%Bo*t,h=Math.floor(l/Bo)*t;if(typeof a=="number"){for(let[_,p]of n1[a])r.beginPath(),r.arc(c+t*(.5+_*.215),h+t*(.5+p*.215),t*(a===1?.125:.078),0,Math.PI*2),r.fill();return}let d=_=>{r.font=`900 ${_}px Anybody, "Arial Black", sans-serif`,"fontStretch"in r&&(r.fontStretch="expanded")};d(t);let u=r.measureText(a),f=t*(t*.5)/(u.actualBoundingBoxAscent||t*.7);d(f),u=r.measureText(a);let m=u.actualBoundingBoxLeft+u.actualBoundingBoxRight;m>t*.6&&(f*=t*.6/m,d(f),u=r.measureText(a)),r.textBaseline="alphabetic",r.fillText(a,c+t/2-(u.actualBoundingBoxRight-u.actualBoundingBoxLeft)/2,h+t/2+u.actualBoundingBoxAscent/2)});let o=new Oa(i);return o.minFilter=Oi,o.magFilter=rn,o}function J_(s,{light:t=!1,aniso:e=1,accent:n="#ff4b1f",paper:i="#e8e9e4",face:r=QT[s]}={}){let o=t?256:512,a=i1(r,s),l="#"+new Yt(n).multiplyScalar(jT).getHexString(),c=kd(a,o,n,"#000"),h=kd(a,o,"#fff","#000"),d=kd(a,o,l,i);c.colorSpace=d.colorSpace=xn,h.colorSpace=Gi,c.anisotropy=d.anisotropy=h.anisotropy=e;let u=new za({map:c,metalness:0,roughness:.05,ior:1.5,thickness:.7,dispersion:4,transmission:1,transmissionMap:h,emissive:16777215,emissiveMap:d,emissiveIntensity:1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.15,specularIntensity:1});return{mesh:new Nn(e1(t),u),mat:u}}var K_="data:image/jpeg;base64,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";var Q_=28,j_=12,t0=-2.6,e0=Math.PI*2,il=(s,t,e)=>Math.min(e,Math.max(t,s)),r1=(s,t,e)=>s+(t-s)*e,o1=s=>s*s*(3-2*s),a1=s=>s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375,l1=s=>s<=0?0:s<.08?s/.08:s<.16?.35:s<.3?1:s<.38?.6:1,c1=`
uniform sampler2D uMap; uniform vec4 uWin; uniform vec3 uLight; uniform vec4 uShadow; uniform float uLit; uniform float uDark; uniform vec2 uRes; uniform vec3 uGlass;
varying vec2 vUv; varying vec4 vClip;
vec3 toScreen(vec3 c) { return pow(max(c, 0.0), vec3(1.0 / 2.2)); }
vec3 toLinear(vec3 c) { return pow(max(c, 0.0), vec3(2.2)); }
float grain(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453) - 0.5; }
void main() {
  vec2 uv = vec2(uWin.x + (vUv.x - 0.5) * uWin.z, 1.0 - (uWin.y + (0.5 - vUv.y) * uWin.w));
  vec3 c = toScreen(texture2D(uMap, uv).rgb);
  float g = dot(c, vec3(0.299, 0.587, 0.114));
  vec3 dark = vec3(clamp((g - 0.5) * 1.25 + 0.5, 0.0, 1.0) * uDark);
  vec2 p = (vClip.xy / vClip.w * 0.5 + 0.5) * uRes;
  float d = length(p - uLight.xy) / uLight.z;
  float a = exp(-d * d * 3.0) * uLit;
  vec3 lit = mix(vec3(g), c, 1.15) * 1.05 * mix(vec3(1.0, 0.76, 0.65), vec3(1.0), smoothstep(0.0, 0.9, d));
  vec3 col = mix(dark, lit, a);
  // a little of the glass's own colour thrown on the room
  float h = exp(-d * d * 5.3) * 0.28 * uLit;
  col = 1.0 - (1.0 - col) * (1.0 - toScreen(uGlass) * h);
  // the die stands on the floor: a soft dark patch under it, tinted by the glass, fainter the higher it is
  vec2 q = (p - uShadow.xy) / (uShadow.z * vec2(0.78, 0.2));
  col *= 1.0 - exp(-dot(q, q) * 1.6) * 0.62 * uShadow.w * uLit;
  gl_FragColor = vec4(toLinear(col), 1.0);
  #include <colorspace_fragment>
  gl_FragColor.rgb += grain(gl_FragCoord.xy) * 7.0 / 255.0;
}`;function n0(s,{still:t=!1,coarse:e=!1,dark:n=.2}={}){if(!s)return null;let i=document.createElement("canvas");i.className="house-gl",i.setAttribute("aria-hidden","true");let r;try{r=new $h({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return null}if(!r.capabilities.isWebGL2)return r.dispose(),null;r.toneMapping=Ei,s.prepend(i),s.classList.add("has-house");let o=getComputedStyle(document.documentElement),a=A=>o.getPropertyValue(A).trim(),l=new Cr,c=new Xn(Q_,1,.1,60);c.position.z=j_,l.environment=Z_(r),l.background=new Yt(a("--ink"));let h={uMap:{value:null},uWin:{value:new Ae(.5,.5,1,1)},uLight:{value:new $(0,0,1)},uShadow:{value:new Ae(0,0,1,0)},uLit:{value:t?1:0},uDark:{value:n},uRes:{value:new se(1,1)},uGlass:{value:new Yt(a("--accent"))}},d=new Nn(new bs(1,1),new Ti({uniforms:h,vertexShader:"varying vec2 vUv; varying vec4 vClip; void main() { vUv = uv; vClip = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = vClip; }",fragmentShader:c1}));d.visible=!1,d.position.z=t0,l.add(d);let u=4/3;new Ga().load(K_,A=>{A.colorSpace=xn,A.minFilter=rn,A.generateMipmaps=!1,u=A.image.width/A.image.height,h.uMap.value=A,d.visible=!0});let f=J_(0,{face:1,light:e,aniso:r.capabilities.getMaxAnisotropy(),accent:a("--accent"),paper:a("--paper")});f.mat.emissiveIntensity=1.6,f.mesh.visible=!1,l.add(f.mesh);let m=1,_=1,p=80,g=!0,y=A=>{let N=2*(j_-A)*Math.tan(Q_*Math.PI/360);return{h:N,w:N*(m/_)}},E=()=>{m=s.clientWidth,_=s.clientHeight,r.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.5:2)),r.setSize(m,_,!1),c.aspect=m/_,c.updateProjectionMatrix(),h.uRes.value.set(m,_),p=il(Math.min(m,_*1.6)*.06,54,96);let A=y(t0);d.scale.set(A.w,A.h,1)};new ResizeObserver(E).observe(s),new IntersectionObserver(A=>{g=A[0].isIntersecting}).observe(s),E();let v={spot:{x:m*.55,y:_*.66},dropT:t?0:null,hopT:-1,axis:new $(1,.4,.2).normalize(),at:{x:0,y:0}},T=new Ui,w=new ci,x=new ci,M=0;function P(A){if(M+=A,!g||!h.uMap.value)return;let N=1,L=1,z=m/Math.max(1,_);if(z>u?L=u/z:N=z/u,N/=1.06,L/=1.06,h.uWin.value.set(.5,il(.56,L/2,1-L/2),N,L),v.dropT===null){f.mesh.visible=!1,h.uLit.value=0,r.render(l,c);return}let I=v.spot.x,B=v.spot.y-p*.62,k=B,O=0,K=0,H=1,R=0;if(!t){let X=il((M-v.dropT)/1.15,0,1);if(k=r1(-p*2,B,a1(X)),K=(1-o1(Math.min(1,X*1.3)))*e0*1.25,H=l1((X-.36)/.64*1.15),v.hopT>=0){let rt=il((M-v.hopT)/.95,0,1);rt>=1&&(v.hopT=-1);let xt=Math.sin(Math.PI*Math.min(1,rt/.6));k-=xt*p*1.6,O+=xt*1.2,K+=(1-Math.pow(1-rt,3))*e0}R=il((B-k)/(p*2.5),0,1)}h.uLit.value=H,h.uLight.value.set(I,_-k,.42*Math.max(m,_*.62)),h.uShadow.value.set(I,_-v.spot.y,p*(1+R*.8),1-R),v.at.x=I,v.at.y=k;let Z=y(0),_t=p/_*Z.h,Et=t?0:1;f.mesh.visible=!0,f.mesh.scale.setScalar(_t),f.mesh.position.set((I/m-.5)*Z.w,(.5-k/_)*Z.h,O),w.setFromEuler(T.set(.5+Et*Math.cos(M*.55)*.025,-.5+Et*Math.sin(M*.42)*.04,.2)),K&&w.multiply(x.setFromAxisAngle(v.axis,K)),f.mesh.quaternion.copy(w),r.render(l,c)}return{frame:P,spot(A,N){v.spot={x:A,y:N}},drop(){v.dropT===null&&(v.dropT=M)},over:(A,N)=>!t&&v.dropT!==null&&M-v.dropT>1.2&&v.hopT<0&&Math.hypot(A-v.at.x,N-v.at.y)<p*.85,get die(){return{x:v.spot.x,y:v.spot.y-p*.62,edge:p}},hop(){t||(v.axis.set(Math.random()-.5,Math.random()-.5,(Math.random()-.5)*.6).normalize(),v.hopT=M)}}}ig();og();sg();var h1=Ma("section[data-theme]");pe.ticker.add(()=>{for(let s of h1){let t=s.getBoundingClientRect();if(t.top<=36&&t.bottom>36){document.body.dataset.theme!==s.dataset.theme&&(document.body.dataset.theme=s.dataset.theme);return}}});var dn=sn(".reach-addr"),Vd=dn?dn.dataset.email:"",al=sn(".reach-open"),is=al?n0(al,{still:Pn,coarse:!nc}):null,ws=sn(".reach-copy"),Wd=()=>{if(!is||!dn)return;let s=al.getBoundingClientRect(),t=sn(".reach-floor").getBoundingClientRect().top-s.top,e=sn(".reach-foot").getBoundingClientRect().top-s.top;if(is.spot(s.width*.56,t+(e-t)*.66),ws){let n=is.die;ws.style.setProperty("--x",n.x+"px"),ws.style.setProperty("--y",n.y+"px"),ws.style.setProperty("--e",n.edge+"px")}};is&&(ws&&(al.append(ws),ws.classList.add("on-room")),new ResizeObserver(Wd).observe(al),pe.ticker.add((s,t)=>is.frame(Math.min(Math.max(t,1)/1e3,.05))));var o0=Ma(".reach-line"),Xd=o0.map(s=>oo.create(s,{type:"chars",charsClass:"char"})),zo=Xd.flatMap((s,t)=>s.chars.map(e=>({el:e,out:o0[t].classList.contains("is-out"),lit:0,want:0,x:0,y:0}))),u1=dn?(getComputedStyle(dn).color.match(/[\d.]+/g)||[232,233,228]).slice(0,3).join(" "):"232 233 228",Qh=100,rl=!1,ol=!1,ns=null,ll=()=>{dn&&(Qh=parseFloat(getComputedStyle(dn).fontSize)*1.5,zo.forEach(s=>{let t=s.el.getBoundingClientRect();s.x=t.left+t.width/2,s.y=t.top+t.height/2+window.scrollY}))},f1=()=>{let s=sn(".reach-open");if(!dn||!s)return;let t=parseFloat(getComputedStyle(dn).fontSize),e=Math.max(...Xd.map(n=>n.chars.reduce((i,r)=>i+r.offsetWidth,0)));t>0&&e>0&&s.style.setProperty("--k",(t/e*.99).toFixed(5))};document.fonts.load("900 100px Anybody").catch(()=>{}).then(()=>{f1(),ll(),Wd()});var a0=(s,t=null)=>zo.forEach(e=>{let n=Math.max(0,1-Math.hypot(s-e.x,t===null?0:t+window.scrollY-e.y)/Qh);e.want=n*n*(3-2*n)}),jh=()=>zo.forEach(s=>{s.want=0});pe.ticker.add(()=>zo.forEach(s=>{s.lit!==s.want&&(s.lit+=(s.want-s.lit)*(Pn?1:s.want>s.lit?.3:.07),Math.abs(s.want-s.lit)<.004&&(s.lit=s.want),s.out&&(s.el.style.color=s.lit?`rgb(${u1} / ${s.lit.toFixed(3)})`:""),Pn||(s.el.style.translate=s.lit?`0 ${(-s.lit*.05).toFixed(4)}em`:""))}));var l0=()=>{if(!dn||Pn||rl||ol||ns||document.hidden)return;let s=dn.getBoundingClientRect();if(s.bottom<0||s.top>window.innerHeight)return;ll();let t={x:s.left-Qh};ns=pe.to(t,{x:s.right+Qh,duration:1.7,ease:"power1.inOut",onUpdate:()=>a0(t.x),onComplete:()=>{ns=null,jh()}})},d1=()=>{zo.forEach(s=>{s.want=1}),pe.delayedCall(.6,()=>{!rl&&!ol&&!ns&&jh()})};dn&&(nc&&(dn.addEventListener("pointerenter",()=>{rl=!0,ns&&(ns.kill(),ns=null),ll()}),dn.addEventListener("pointermove",s=>a0(s.clientX,s.clientY)),dn.addEventListener("pointerleave",()=>{rl=!1,ol||jh()})),dn.addEventListener("focus",()=>{dn.matches(":focus-visible")&&(ol=!0,ns&&(ns.kill(),ns=null),zo.forEach(s=>{s.want=1}))}),dn.addEventListener("blur",()=>{ol=!1,rl||jh()}),window.addEventListener("resize",ll),Pn||setInterval(l0,7e3));async function p1(s){try{return await navigator.clipboard.writeText(s),!0}catch{}let t=document.createElement("textarea");t.value=s,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-99px;top:0;opacity:0",document.body.append(t),t.select();let e=!1;try{e=document.execCommand("copy")}catch{e=!1}return t.remove(),e}var Hd=Ma("[data-copy-label]"),i0=sn("[data-copy-said]");Hd.forEach(s=>{s.dataset.was=s.textContent});var s0;Ma("[data-copy]").forEach(s=>s.addEventListener("click",async()=>{let t=await p1(Vd);is&&is.hop(),Hd.forEach(e=>{e.textContent=t?"Copied":"Sorry"}),i0&&(i0.textContent=t?"The address is copied.":"The address could not be copied. It is "+Vd),t&&(ll(),d1()),clearTimeout(s0),s0=setTimeout(()=>Hd.forEach(e=>{e.textContent=e.dataset.was}),1800)}));var sl=sn("[data-ticket]"),Vi=sn(".ticket");sl&&sl.addEventListener("submit",s=>{s.preventDefault();let t=c=>sl.elements[c]?sl.elements[c].value.trim():"",e=t("name"),n=t("company"),i=t("about"),r=i||"Hello from "+(n||e||"a visitor"),o=[i,"",[e,n].filter(Boolean).join(", ")].join(`
`).trim(),a="mailto:"+Vd+"?subject="+encodeURIComponent(r)+"&body="+encodeURIComponent(o),l=()=>{sl.dataset.sent=a,location.href=a};if(Pn||!Vi){l();return}pe.timeline().to(Vi,{xPercent:12,yPercent:-8,opacity:0,duration:.5,ease:"power3.in"}).add(l).set(Vi,{xPercent:0,yPercent:0}).fromTo(Vi,{clipPath:"inset(0% 0% 100% 0%)",y:-36,opacity:1},{clipPath:"inset(0% 0% 0% 0%)",y:0,duration:1.1,ease:"expo.out",clearProps:"clipPath,transform,opacity"},"+=0.5")});if(nc&&!Pn&&Vi){let s=pe.quickTo(Vi,"rotationX",{duration:.7,ease:"power3"}),t=pe.quickTo(Vi,"rotationY",{duration:.7,ease:"power3"});pe.set(Vi,{transformPerspective:1100});let e=sn(".reach-desk");e.addEventListener("pointermove",n=>{let i=Vi.getBoundingClientRect();t(((n.clientX-i.left)/i.width-.5)*7),s(-((n.clientY-i.top)/i.height-.5)*6)}),e.addEventListener("pointerleave",()=>{s(0),t(0)})}var r0=sn(".reach-desk");if(r0&&!Pn){let s={trigger:r0,start:"top 80%",once:!0};xf(sn(".reach-say h2"),{scrollTrigger:s}),pe.from(".reach-say p, .reach-send",{y:22,opacity:0,duration:.9,ease:"expo.out",stagger:.1,delay:.3,scrollTrigger:s}),Vi&&pe.fromTo(Vi,{clipPath:"inset(0% 0% 100% 0%)",y:-36},{clipPath:"inset(0% 0% 0% 0%)",y:0,duration:1.3,ease:"expo.out",delay:.2,clearProps:"clipPath,transform",scrollTrigger:s})}document.fonts.ready.then(()=>qt.refresh());window.addEventListener("load",()=>qt.refresh());rg(document.fonts.load("900 100px Anybody").catch(()=>{}),()=>{Wd(),is&&pe.delayedCall(Pn?0:.25,()=>is.drop()),is&&ws&&pe.delayedCall(Pn?0:1.6,()=>ws.classList.add("is-in")),!Pn&&(Xd.forEach((s,t)=>pe.from(s.chars,{rotationX:-92,yPercent:38,opacity:0,transformOrigin:"50% 100% -0.35em",duration:1.1,ease:"expo.out",stagger:.04,delay:.45+t*.22})),pe.from(".reach-top > *",{opacity:0,duration:.8,delay:.4,stagger:.5}),pe.delayedCall(2.5,l0),xf(sn(".reach-lead"),{delay:.9}),pe.from(".reach-side > *",{y:22,opacity:0,duration:.9,ease:"expo.out",stagger:.09,delay:1.2}),pe.from(".nav > *",{y:-18,opacity:0,duration:.9,ease:"expo.out",stagger:.08,delay:.5,clearProps:"transform,opacity"}))});})();
