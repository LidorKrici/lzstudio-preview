(()=>{var W0=Object.defineProperty;var X0=(r,t,e)=>t in r?W0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Wt=(r,t,e)=>X0(r,typeof t!="symbol"?t+"":t,e);function rr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Cp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ia={duration:.5,overwrite:!1,delay:0},Uu,mn,Ne,xi=1e8,Te=1/xi,Au=Math.PI*2,q0=Au/4,Y0=0,Rp=Math.sqrt,Z0=Math.cos,J0=Math.sin,sn=function(t){return typeof t=="string"},We=function(t){return typeof t=="function"},or=function(t){return typeof t=="number"},zl=function(t){return typeof t>"u"},Wi=function(t){return typeof t=="object"},Zn=function(t){return t!==!1},Ou=function(){return typeof window<"u"},Cl=function(t){return We(t)||sn(t)},Pp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,$0=/random\([^)]+\)/g,K0=/,\s*/g,yp=/(?:-?\.?\d|\.)+/gi,Fu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bu=/[+-]=-?[.\d]+/,Q0=/[^,'"\[\]\s]+/gi,j0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Fe,Vi,Cu,zu,ni={},Ll={},Ip,Lp=function(t){return(Ll=Js(t,ni))&&En},kl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ra=function(t,e){return!e&&console.warn(t)},Dp=function(t,e){return t&&(ni[t]=e)&&Ll&&(Ll[t]=e)||ni},sa=function(){return 0},tx={suppressEvents:!0,isStart:!0,kill:!1},Rl={suppressEvents:!0,kill:!1},ex={suppressEvents:!0},ku={},Pr=[],Ru={},Np,qn={},Su={},Sp=30,Pl=[],Gu="",Vu=function(t){var e=t[0],n,i;if(Wi(e)||We(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Pl.length;i--&&!Pl[i].targetTest(e););n=Pl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new qu(t[i],n)))||t.splice(i,1);return t},Ir=function(t){return t._gsap||Vu(vi(t))[0]._gsap},Hu=function(t,e,n){return(n=t[e])&&We(n)?t[e]():zl(n)&&t.getAttribute&&t.getAttribute(e)||n},On=function(t,e){return(t=t.split(",")).forEach(e)||t},Xe=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},ms=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},nx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Dl=function(){var t=Pr.length,e=Pr.slice(0),n,i;for(Ru={},Pr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wu=function(t){return!!(t._initted||t._startAt||t.add)},Up=function(t,e,n,i){Pr.length&&!mn&&Dl(),t.render(e,n,i||!!(mn&&e<0&&Wu(t))),Pr.length&&!mn&&Dl()},Op=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Q0).length<2?e:sn(t)?t.trim():t},Fp=function(t){return t},ii=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ix=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Js=function(t,e){for(var n in e)t[n]=e[n];return t},Mp=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Wi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Nl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ta=function(t){var e=t.parent||Fe,n=t.keyframes?ix(Tn(t.keyframes)):ii;if(Zn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},rx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Bp=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Gl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Lr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},us=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},sx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Pu=function(t,e,n,i){return t._startAt&&(mn?t._startAt.revert(Rl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},ox=function r(t){return!t||t._ts&&r(t.parent)},bp=function(t){return t._repeat?$s(t._tTime,t=t.duration()+t._rDelay)*t:0},$s=function(t,e){var n=Math.floor(t=Oe(t/e));return t&&n===t?n-1:n},Ul=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Vl=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},Hl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Vl(t),n._dirty||us(n,t)),t},zp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ul(t.rawTime(),e),(!e._dur||ca(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),us(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},Hi=function(t,e,n,i){return e.parent&&Lr(e),e._start=Oe((or(n)?n:!n&&Ol(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Fe?_i(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Bp(t,e,"_first","_last",t._sort?"_start":0),Ol(e)||(t._recent=e),i||zp(t,e),t._ts<0&&Hl(t,t._tTime),t},kp=function(t,e){return(ni.ScrollTrigger||kl("scrollTrigger",e))&&ni.ScrollTrigger.create(e,t)},Gp=function(t,e,n,i,s){if(Ju(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Np!==Yn.frame)return Pr.push(t),t._lazy=[s,i],1},ax=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Ol=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},lx=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&ax(t)&&!(!t._initted&&Ol(t))||(t._ts<0||t._dp._ts<0)&&!Ol(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=ca(0,t._tDur,e),h=$s(l,a),t._yoyo&&h&1&&(o=1-o),h!==$s(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||mn||i||t._zTime===Te||!e&&t._zTime){if(!t._initted&&Gp(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Pu(t,e,n,!0),t._onUpdate&&!n&&ei(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ei(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Lr(t,1),!n&&!mn&&(ei(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},cx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ks=function(t,e,n,i){var s=t._repeat,o=Oe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Oe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Hl(t,t._tTime=t._tDur*a),t.parent&&Vl(t),n||us(t.parent,t),t},wp=function(t){return t instanceof wn?us(t):Ks(t,t._dur)},hx={_start:0,endTime:sa,totalDuration:sa},_i=function r(t,e,n){var i=t.labels,s=t._recent||hx,o=t.duration()>=xi?s.endTime(!1):t._dur,a,l,c;return sn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ea=function(t,e,n){var i=or(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;o.immediateRender=Zn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ye(e[0],o,e[s+1])},Dr=function(t,e){return t||t===0?e(t):e},ca=function(t,e,n){return n<t?t:n>e?e:n},gn=function(t,e){return!sn(t)||!(e=j0.exec(t))?"":e[1]},ux=function(t,e,n){return Dr(n,function(i){return ca(t,e,i)})},Iu=[].slice,Vp=function(t,e){return t&&Wi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Wi(t[0]))&&!t.nodeType&&t!==Vi},fx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return sn(i)&&!e||Vp(i,1)?(s=n).push.apply(s,vi(i)):n.push(i)})||n},vi=function(t,e,n){return Ne&&!e&&Ne.selector?Ne.selector(t):sn(t)&&!n&&(Cu||!Qs())?Iu.call((e||zu).querySelectorAll(t),0):Tn(t)?fx(t,n):Vp(t)?Iu.call(t,0):t?[t]:[]},Lu=function(t){return t=vi(t)[0]||ra("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return vi(e,n.querySelectorAll?n:n===t?ra("Invalid scope")||zu.createElement("div"):t)}},Hp=function(t){return t.sort(function(){return .5-Math.random()})},Wp=function(t){if(We(t))return t;var e=Wi(t)?t:{each:t},n=fs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return sn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,m){var _=(m||e).length,p=o[_],g,y,b,v,S,E,x,M,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,xi])[1],!P){for(x=-xi;x<(x=m[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=o[_]=[],g=l?Math.min(P,_)*h-.5:i%P,y=P===xi?0:l?_*d/P-.5:i/P|0,x=0,M=xi,E=0;E<_;E++)b=E%P-g,v=y-(E/P|0),p[E]=S=c?Math.abs(c==="y"?v:b):Rp(b*b+v*v),S>x&&(x=S),S<M&&(M=S);i==="random"&&Hp(p),p.max=x-M,p.min=M,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=gn(e.amount||e.each)||0,n=n&&_<0?Tx(n):n}return _=(p[u]-p.min)/p.max||0,Oe(p.b+(n?n(_):_)*p.v)+p.u}},Du=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(or(n)?0:gn(n))}},Xp=function(t,e){var n=Tn(t),i,s;return!n&&Wi(t)&&(i=n=t.radius||xi,t.values?(t=vi(t.values),(s=!or(t[0]))&&(i*=i)):t=Du(t.increment)),Dr(e,n?We(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=xi,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,s||h===o||or(o)?h:h+gn(o)}:Du(t))},qp=function(t,e,n,i){return Dr(Tn(t)?!e:n===!0?!!(n=0):!i,function(){return Tn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},dx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},px=function(t,e){return function(n){return t(parseFloat(n))+(e||gn(n))}},mx=function(t,e,n){return Zp(t,e,0,1,n)},Yp=function(t,e,n){return Dr(n,function(i){return t[~~e(i)]})},gx=function r(t,e,n){var i=e-t;return Tn(t)?Yp(t,r(0,t.length),e):Dr(n,function(s){return(i+(s-t)%i)%i+t})},_x=function r(t,e,n){var i=e-t,s=i*2;return Tn(t)?Yp(t,r(0,t.length-1),e):Dr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},js=function(t){return t.replace($0,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(K0);return qp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Zp=function(t,e,n,i,s){var o=e-t,a=i-n;return Dr(s,function(l){return n+((l-t)/o*a||0)})},xx=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=sn(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Tn(t)&&!Tn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(m){m*=d;var _=Math.min(u,~~m);return h[_](m-_)},n=e}else i||(t=Js(Tn(t)?[]:{},t));if(!h){for(l in e)Yu.call(a,t,l,"get",e[l]);s=function(m){return Qu(m,a)||(o?t.p:t)}}}return Dr(n,s)},Tp=function(t,e,n){var i=t.labels,s=xi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ei=function(t,e,n){var i=t.vars,s=i[e],o=Ne,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Pr.length&&Dl(),a&&(Ne=a),h=l?s.apply(c,l):s.call(c),Ne=o,h},Qo=function(t){return Lr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mn),t.progress()<1&&ei(t,"onInterrupt"),t},Zs,Jp=[],$p=function(t){if(t)if(t=!t.name&&t.default||t,Ou()||t.headless){var e=t.name,n=We(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:sa,render:Qu,add:Yu,kill:Ux,modifier:Nx,rawVars:0},o={targetTest:0,get:0,getSetter:Wl,aliases:{},register:0};if(Qs(),t!==i){if(qn[e])return;ii(i,ii(Nl(t,s),o)),Js(i.prototype,Js(s,Nl(t,o))),qn[i.prop=e]=i,t.targetTest&&(Pl.push(i),ku[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Dp(e,i),t.register&&t.register(En,i,Fn)}else Jp.push(t)},Re=255,jo={aqua:[0,Re,Re],lime:[0,Re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Re],navy:[0,0,128],white:[Re,Re,Re],olive:[128,128,0],yellow:[Re,Re,0],orange:[Re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Re,0,0],pink:[Re,192,203],cyan:[0,Re,Re],transparent:[Re,Re,Re,0]},Mu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Re+.5|0},Kp=function(t,e,n){var i=t?or(t)?[t>>16,t>>8&Re,t&Re]:0:jo.black,s,o,a,l,c,h,d,u,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),jo[t])i=jo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Re,i&Re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Re,t&Re]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(yp),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Mu(l+1/3,s,o),i[1]=Mu(l,s,o),i[2]=Mu(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Fu),n&&i.length<4&&(i[3]=1),i}else i=t.match(yp)||jo.transparent;i=i.map(Number)}return e&&!m&&(s=i[0]/Re,o=i[1]/Re,a=i[2]/Re,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Qp=function(t){var e=[],n=[],i=-1;return t.split(sr).forEach(function(s){var o=s.match(ps)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Ep=function(t,e,n){var i="",s=(t+i).match(sr),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=Kp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Qp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(sr,"1").split(ps),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(sr),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},sr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in jo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),vx=/hsl[a]?\(/,Xu=function(t){var e=t.join(" "),n;if(sr.lastIndex=0,sr.test(e))return n=vx.test(e),t[1]=Ep(t[1],n),t[0]=Ep(t[0],n,Qp(t[1])),!0},oa,Yn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,m=function _(p){var g=r()-i,y=p===!0,b,v,S,E;if((g>t||g<0)&&(n+=g-e),i+=g,S=i-n,b=S-o,(b>0||y)&&(E=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,o+=b+(b>=s?0:s-b),v=1),y||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](S,u,E,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Ip&&(!Cu&&Ou()&&(Vi=Cu=window,zu=Vi.document||{},ni.gsap=En,(Vi.gsapVersions||(Vi.gsapVersions=[])).push(En.version),Lp(Ll||Vi.GreenSockGlobals||!Vi.gsap&&Vi||{}),Jp.forEach($p)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},oa=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),oa=0,c=sa},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,g,y){var b=g?function(v,S,E,x){p(v,S,E,x),d.remove(b)}:p;return d.remove(p),a[y?"unshift":"push"](b),Qs(),b},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),Qs=function(){return!oa&&Yn.wake()},_e={},yx=/^[\d.\-M][\d.\-,\s]/,Sx=/["']/g,Mx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Sx,"").trim():+c,i=l.substr(a+1).trim();return e},bx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},wx=function(t){var e=(t+"").split("("),n=_e[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Mx(e[1])]:bx(t).split(",").map(Op)):_e._CE&&yx.test(t)?_e._CE("",t):n},Tx=function(t){return function(e){return 1-t(1-e)}},fs=function(t,e){return t&&(We(t)?t:_e[t]||wx(t))||e},gs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return On(t,function(a){_e[a]=ni[a]=s,_e[o=a.toLowerCase()]=n;for(var l in s)_e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_e[a+"."+l]=s[l]}),s},jp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},bu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Au*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*J0((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:jp(a);return s=Au/s,l.config=function(c,h){return r(t,c,h)},l},wu=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:jp(n);return i.config=function(s){return r(t,s)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;gs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});_e.Linear.easeNone=_e.none=_e.Linear.easeIn;gs("Elastic",bu("in"),bu("out"),bu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};gs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);gs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});gs("Circ",function(r){return-(Rp(1-r*r)-1)});gs("Sine",function(r){return r===1?1:-Z0(r*q0)+1});gs("Back",wu("in"),wu("out"),wu());_e.SteppedEase=_e.steps=ni.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Te;return function(a){return((i*ca(0,o,a)|0)+s)*n}}};ia.ease=_e["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Gu+=r+","+r+"Params,"});var qu=function(t,e){this.id=Y0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Hu,this.set=e?e.getSetter:Wl},aa=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ks(this,+e.duration,1,1),this.data=e.data,Ne&&(this._ctx=Ne,Ne.data.push(this)),oa||Yn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ks(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Hl(this,n),!s._dp||s.parent||zp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Up(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?$s(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ul(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(ca(-Math.abs(this._delay),a,s),i!==!1),Vl(this),sx(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Qs(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Te,o;if(s)for(this._tTime-=Te,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Te){s=!1;break}o=o._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=Oe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ul(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=ex);var i=mn;return mn=n,Wu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(_i(this,n),Zn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zn(i)),this._dur||(this._zTime=-Te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Te)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=We(n)?n:Fp,l=function(){var h=i.then;i.then=null,s&&s(),We(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Qo(this)},r})();ii(aa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var wn=(function(r){Cp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Zn(n.sortChildren),Fe&&Hi(n.parent||Fe,rr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&kp(rr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ea(0,arguments,this),this},e.from=function(i,s,o){return ea(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ea(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,ta(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ye(i,s,_i(this,o),1),this},e.call=function(i,s,o){return Hi(this,Ye.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ye(i,o,_i(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,ta(o).immediateRender=Zn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,ta(a).immediateRender=Zn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Oe(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,m,_,p,g,y,b,v,S,E,x;if(this!==Fe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,v=this._start,b=this._ts,g=!b,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(u=Oe(h%p),h===l?(_=this._repeat,u=c):(S=Oe(h/p),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=$s(this._tTime,p),!a&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),E&&_&1&&(u=c-u,x=1),_!==S&&!this._lock){var M=E&&S&1,P=M===(E&&_&1);if(_<S&&(M=!M),a=M?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Oe(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ei(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=cx(this,Oe(a),Oe(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!S&&(ei(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!g){y=0,m&&(h+=this._zTime=-Te);break}}f=m}else{f=this._last;for(var A=i<0?i:u;f;){if(m=f._prev,(f._act||A<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,s,o||mn&&Wu(f)),u!==this._time||!this._ts&&!g){y=0,m&&(h+=this._zTime=A?-Te:Te);break}}f=m}}if(y&&!s&&(this.pause(),y.render(u>=a?0:-Te)._zTime=u>=a?1:-1,this._ts))return this._start=v,Vl(this),this.render(i,s,o);this._onUpdate&&!s&&ei(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Lr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(ei(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(or(s)||(s=_i(this,s,i)),!(i instanceof aa)){if(Tn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(sn(i))return this.addLabel(i,s);if(We(i))i=Ye.delayedCall(0,i);else return this}return this!==i?Hi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-xi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ye?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return sn(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(i.parent===this&&Gl(this,i),i===this._recent&&(this._recent=this._last),us(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=_i(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ye.delayedCall(0,s||sa,o);return a.data="isPause",this._hasPause=1,Hi(this,a,_i(this,i))},e.removePause=function(i){var s=this._first;for(i=_i(this,i);s;)s._start===i&&s.data==="isPause"&&Lr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Rr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=vi(i),l=this._first,c=or(s),h;l;)l instanceof Ye?nx(l._targets,a)&&(c?(!Rr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=_i(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=Ye.to(o,ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Ks(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},s));return u?m.render(0):m},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ii({startAt:{time:_i(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Tp(this,_i(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Tp(this,_i(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Oe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return us(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),us(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=xi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Hi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Oe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ks(o,o===Fe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Fe._ts&&(Up(Fe,Ul(i,Fe)),Np=Yn.frame),Yn.frame>=Sp){Sp+=Jn.autoSleep||120;var s=Fe._first;if((!s||!s._ts)&&Jn.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},t})(aa);ii(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ex=function(t,e,n,i,s,o,a){var l=new Fn(this._pt,t,e,0,1,Ku,null,s),c=0,h=0,d,u,f,m,_,p,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=js(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),u=n.match(yu)||[];d=yu.exec(i);)m=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?ms(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=yu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Bu.test(i)||g)&&(l.e=0),this._pt=l,l},Yu=function(t,e,n,i,s,o,a,l,c,h){We(i)&&(i=i(s||0,t,o));var d=t[e],u=n!=="get"?n:We(d)?c?t[e.indexOf("set")||!We(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=We(d)?c?Ix:em:$u,m;if(sn(i)&&(~i.indexOf("random(")&&(i=js(i)),i.charAt(1)==="="&&(m=ms(u,i)+(gn(u)||0),(m||m===0)&&(i=m))),!h||u!==i||Nu)return!isNaN(u*i)&&i!==""?(m=new Fn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?Dx:nm,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&kl(e,i),Ex.call(this,t,e,u,i,f,l||Jn.stringFilter,c))},Ax=function(t,e,n,i,s){if(We(t)&&(t=na(t,s,e,n,i)),!Wi(t)||t.style&&t.nodeType||Tn(t)||Pp(t))return sn(t)?na(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=na(t[a],s,e,n,i);return o},Zu=function(t,e,n,i,s,o){var a,l,c,h;if(qn[t]&&(a=new qn[t]).init(s,a.rawVars?e[t]:Ax(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Fn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Zs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Rr,Nu,Ju=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:p,b=t._overwrite==="auto"&&!Uu,v=t.timeline,S=i.easeReverse||d,E,x,M,P,A,N,D,G,I,k,V,L,W;if(v&&(!u||!s)&&(s="none"),t._ease=fs(s,ia.ease),t._rEase=S&&(fs(S)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(G=p[0]?Ir(p[0]).harness:0,L=G&&i[G.prop],E=Nl(i,ku),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&m?Rl:tx),_._lazy=0),o){if(Lr(t._startAt=Ye.set(p,ii({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Zn(l),startAt:null,delay:0,onUpdate:c&&function(){return ei(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn||!a&&!f)&&t._startAt.revert(Rl),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),M=ii({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Zn(l),immediateRender:a,stagger:0,parent:g},E),L&&(M[G.prop]=L),Lr(t._startAt=Ye.set(p,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn?t._startAt.revert(Rl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Zn(l)||l&&!m,x=0;x<p.length;x++){if(A=p[x],D=A._gsap||Vu(p)[x]._gsap,t._ptLookup[x]=k={},Ru[D.id]&&Pr.length&&Dl(),V=y===p?x:y.indexOf(A),G&&(I=new G).init(A,L||E,t,V,y)!==!1&&(t._pt=P=new Fn(t._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(B){k[B]=P}),I.priority&&(N=1)),!G||L)for(M in E)qn[M]&&(I=Zu(M,E,t,V,A,y))?I.priority&&(N=1):k[M]=P=Yu.call(t,A,M,"get",E[M],V,y,0,i.stringFilter);t._op&&t._op[x]&&t.kill(A,t._op[x]),b&&t._pt&&(Rr=t,Fe.killTweensOf(A,k,t.globalTime(e)),W=!t.parent,Rr=0),t._pt&&l&&(Ru[D.id]=1)}N&&ju(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!W,u&&e<=0&&v.render(xi,!0,!0)},Cx=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Nu=1,t.vars[e]="+=0",Ju(t,a),Nu=0,l?ra(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Xe(n)+gn(d.e)),d.b&&(d.b=h.s+gn(d.b))},Rx=function(t,e){var n=t[0]?Ir(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Js({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Px=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Tn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},na=function(t,e,n,i,s){return We(t)?t.call(e,n,i,s):sn(t)&&~t.indexOf("random(")?js(t):t},Fl=Gu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",tm={};On(Fl+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return tm[r]=1});Fl=Fl.split(",");var Ye=(function(r){Cp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ta(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Fe,y=(Tn(n)||Pp(n)?or(n[0]):"length"in i)?[n]:vi(n),b,v,S,E,x,M,P,A;if(a._targets=y.length?Vu(y):ra("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||u||Cl(c)||Cl(h)){i=a.vars;var N=i.easeReverse||i.yoyoEase;if(b=a.timeline=new wn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:y}),b.kill(),b.parent=b._dp=rr(a),b._start=0,u||Cl(c)||Cl(h)){if(E=y.length,P=u&&Wp(u),Wi(u))for(x in u)~Fl.indexOf(x)&&(A||(A={}),A[x]=u[x]);for(v=0;v<E;v++)S=Nl(i,tm),S.stagger=0,N&&(S.easeReverse=N),A&&Js(S,A),M=y[v],S.duration=+na(c,rr(a),v,M,y),S.delay=(+na(h,rr(a),v,M,y)||0)-a._delay,!u&&E===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),b.to(M,S,P?P(v,M,y):0),b._ease=_e.none;b.duration()?c=h=0:a.timeline=0}else if(m){ta(ii(b.vars.defaults,{ease:"none"})),b._ease=fs(m.ease||i.ease||"none");var D=0,G,I,k;if(Tn(m))m.forEach(function(V){return b.to(y,V,">")}),b.duration();else{S={};for(x in m)x==="ease"||x==="easeEach"||Px(x,m[x],S,m.easeEach);for(x in S)for(G=S[x].sort(function(V,L){return V.t-L.t}),D=0,v=0;v<G.length;v++)I=G[v],k={ease:I.e,duration:(I.t-(v?G[v-1].t:0))/100*c},k[x]=I.v,b.to(y,k,D),D+=k.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return f===!0&&!Uu&&(Rr=rr(a),Fe.killTweensOf(y),Rr=0),Hi(g,rr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===Oe(g._time)&&Zn(d)&&ox(rr(a))&&g.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-h)||0)),p&&kp(rr(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Te&&!h?l:i<Te?0:i,u,f,m,_,p,g,y,b;if(!c)lx(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Oe(d%_),d===l?(m=this._repeat,u=c):(p=Oe(d/_),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(u=c-u),p=$s(this._tTime,_),u===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Oe(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Gp(this,h?i:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=u<a;if(v!==this._inv){var S=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(ei(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;b&&b.render(i<0?i:b._dur*b._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Pu(this,i,s,o),ei(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&ei(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Pu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Lr(this,1),!s&&!(h&&!a)&&(d||a||g)&&(ei(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){oa||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ju(this,c),h=this._ease(c/this._dur),Cx(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Hl(this,0),this.parent||Bp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Qo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Rr&&Rr.vars.overwrite!==!0)._first||Qo(this),this.parent&&o!==this.timeline.totalDuration()&&Ks(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?vi(i):a,c=this._ptLookup,h=this._pt,d,u,f,m,_,p,g;if((!s||s==="all")&&rx(a,l))return s==="all"&&(this._pt=0),Qo(this);for(d=this._op=this._op||[],s!=="all"&&(sn(s)&&(_={},On(s,function(y){return _[y]=1}),s=_),s=Rx(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(d[g]=s,m=u,f={}):(f=d[g]=d[g]||{},m=s);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Gl(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Qo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ea(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ea(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Fe.killTweensOf(i,s,o)},t})(aa);ii(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(r){Ye[r]=function(){var t=new wn,e=Iu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var $u=function(t,e,n){return t[e]=n},em=function(t,e,n){return t[e](n)},Ix=function(t,e,n,i){return t[e](i.fp,n)},Lx=function(t,e,n){return t.setAttribute(e,n)},Wl=function(t,e){return We(t[e])?em:zl(t[e])&&t.setAttribute?Lx:$u},nm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Dx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ku=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Qu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Nx=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Ux=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Gl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Ox=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ju=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Fn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||nm,this.d=l||this,this.set=c||$u,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Ox,this.m=n,this.mt=s,this.tween=i},r})();On(Gu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return ku[r]=1});ni.TweenMax=ni.TweenLite=Ye;ni.TimelineLite=ni.TimelineMax=wn;Fe=new wn({sortChildren:!1,defaults:ia,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=Xu;var ds=[],Il={},Fx=[],Ap=0,Bx=0,Tu=function(t){return(Il[t]||Fx).map(function(e){return e()})},la=function(){var t=Date.now(),e=[];t-Ap>2&&(Tu("matchMediaInit"),ds.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Vi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Tu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ap=t,Tu("matchMedia"))},im=(function(){function r(e,n){this.selector=n&&Lu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Bx++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){We(n)&&(s=i,i=n,n=We);var o=this,a=function(){var c=Ne,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Lu(s)),Ne=o,d=i.apply(o,arguments),We(d)&&o._r.push(d),Ne=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===We?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ne;Ne=null,n(this),Ne=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ye)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=ds.length;o--;)ds[o].id===this.id&&ds.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(la):a.removeEventListener("change",la)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),zx=(function(){function r(e){this.contexts=[],this.scope=e,Ne&&Ne.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Wi(n)||(n={matches:n});var o=new im(0,s||this.scope),a=o.conditions={},l,c,h;Ne&&!o.selector&&(o.selector=Ne.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Vi.matchMedia(n[c]),l&&(ds.indexOf(o)<0&&ds.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(la):l.addEventListener("change",la),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Bl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return $p(i)})},timeline:function(t){return new wn(t)},getTweensOf:function(t,e){return Fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){sn(t)&&(t=vi(t)[0]);var s=Ir(t||{}).get,o=n?Fp:Op;return n==="native"&&(n=""),t&&(e?o((qn[e]&&qn[e].get||s)(t,e,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=vi(t),t.length>1){var i=t.map(function(h){return En.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var o=qn[e],a=Ir(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Zs._pt=0,d.init(t,n?h+n:h,Zs,0,[t]),d.render(1,d),Zs._pt&&Qu(1,Zs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=En.to(t,ii((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=fs(t.ease,ia.ease)),Mp(ia,t||{})},config:function(t){return Mp(Jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!ni[a]&&ra(e+" effect requires "+a+" plugin.")}),Su[e]=function(a,l,c){return n(vi(a),ii(l||{},s),c)},o&&(wn.prototype[e]=function(a,l,c){return this.add(Su[e](a,Wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){_e[t]=fs(e)},parseEase:function(t,e){return arguments.length?fs(t,e):_e},getById:function(t){return Fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new wn(t),i,s;for(n.smoothChildTiming=Zn(t.smoothChildTiming),Fe.remove(n),n._dp=0,n._time=n._tTime=Fe._time,i=Fe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&Hi(n,i,i._start-i._delay),i=s;return Hi(Fe,n,0),n},context:function(t,e){return t?new im(t,e):Ne},matchMedia:function(t){return new zx(t)},matchMediaRefresh:function(){return ds.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||la()},addEventListener:function(t,e){var n=Il[t]||(Il[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Il[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:gx,wrapYoyo:_x,distribute:Wp,random:qp,snap:Xp,normalize:mx,getUnit:gn,clamp:ux,splitColor:Kp,toArray:vi,selector:Lu,mapRange:Zp,pipe:dx,unitize:px,interpolate:xx,shuffle:Hp},install:Lp,effects:Su,ticker:Yn,updateRoot:wn.updateRoot,plugins:qn,globalTimeline:Fe,core:{PropTween:Fn,globals:Dp,Tween:Ye,Timeline:wn,Animation:aa,getCache:Ir,_removeLinkedListItem:Gl,reverting:function(){return mn},context:function(t){return t&&Ne&&(Ne.data.push(t),t._ctx=Ne),Ne},suppressOverwrites:function(t){return Uu=t}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Bl[r]=Ye[r]});Yn.add(wn.updateRoot);Zs=Bl.to({},{duration:0});var kx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Gx=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=kx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Eu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(sn(s)&&(l={},On(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Gx(a,s)}}}},En=Bl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Eu("roundProps",Du),Eu("modifiers"),Eu("snap",Xp))||Bl;Ye.version=wn.version=En.version="3.15.1";Ip=1;Ou()&&Qs();var Vx=_e.Power0,Hx=_e.Power1,Wx=_e.Power2,Xx=_e.Power3,qx=_e.Power4,Yx=_e.Linear,Zx=_e.Quad,Jx=_e.Cubic,$x=_e.Quart,Kx=_e.Quint,Qx=_e.Strong,jx=_e.Elastic,tv=_e.Back,ev=_e.SteppedEase,nv=_e.Bounce,iv=_e.Sine,rv=_e.Expo,sv=_e.Circ;var rm,Nr,eo,of,ys,ov,sm,af,av=function(){return typeof window<"u"},lr={},vs=180/Math.PI,no=Math.PI/180,to=Math.atan2,om=1e8,lf=/([A-Z])/g,lv=/(left|right|width|margin|padding|x)/i,cv=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ef=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},hv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},uv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},fv=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},dv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},pm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},mm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},pv=function(t,e,n){return t.style[e]=n},mv=function(t,e,n){return t.style.setProperty(e,n)},gv=function(t,e,n){return t._gsap[e]=n},_v=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},xv=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},vv=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Be="transform",$n=Be+"Origin",yv=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in lr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Xi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ar(i,a)}):this.tfm[t]=o.x?o[t]:ar(i,t),t===$n&&(this.tfm.zOrigin=o.zOrigin);else return Xi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Be)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,e,"")),t=Be}(s||e)&&this.props.push(t,e,s[t])},gm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Sv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(lf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=af(),(!s||!s.isStart)&&!n[Be]&&(gm(n),i.zOrigin&&n[$n]&&(n[$n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_m=function(t,e){var n={target:t,props:[],revert:Sv,save:yv};return t._gsap||En.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},xm,nf=function(t,e){var n=Nr.createElementNS?Nr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Nr.createElement(t);return n&&n.style?n:Nr.createElement(t)},ri=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(lf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,io(e)||e,1)||""},am="O,Moz,ms,Ms,Webkit".split(","),io=function(t,e,n){var i=e||ys,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(am[o]+t in s););return o<0?null:(o===3?"ms":o>=0?am[o]:"")+t},rf=function(){av()&&window.document&&(rm=window,Nr=rm.document,eo=Nr.documentElement,ys=nf("div")||{style:{}},ov=nf("div"),Be=io(Be),$n=Be+"Origin",ys.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xm=!!io("perspective"),af=En.core.reverting,of=1)},lm=function(t){var e=t.ownerSVGElement,n=nf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),eo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),eo.removeChild(n),s},cm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},vm=function(t){var e,n;try{e=t.getBBox()}catch{e=lm(t),n=1}return e&&(e.width||e.height)||n||(e=lm(t)),e&&!e.width&&!e.x&&!e.y?{x:+cm(t,["x","cx","x1"])||0,y:+cm(t,["y","cy","y1"])||0,width:0,height:0}:e},ym=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&vm(t))},Or=function(t,e){if(e){var n=t.style,i;e in lr&&e!==$n&&(e=Be),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(lf,"-$1").toLowerCase())):n.removeAttribute(e)}},Ur=function(t,e,n,i,s,o){var a=new Fn(t._pt,e,n,0,1,o?mm:pm);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},hm={deg:1,rad:1,turn:1},Mv={grid:1,flex:1},Fr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ys.style,l=lv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",m,_,p,g;if(i===o||!s||hm[i]||hm[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),g=t.getCTM&&ym(t),(f||o==="%")&&(lr[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Xe(f?s/m*d:s/100*m);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Nr||!_.appendChild)&&(_=Nr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Yn.time&&!p.uncache)return Xe(s/p.width*d);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=d+i,m=t[h],y?t.style[e]=y:Or(t,e)}else(f||o==="%")&&!Mv[ri(_,"display")]&&(a.position=ri(t,"position")),_===t&&(a.position="static"),_.appendChild(ys),m=ys[h],_.removeChild(ys),a.position="absolute";return l&&f&&(p=Ir(_),p.time=Yn.time,p.width=_[h]),Xe(u?m*s/d:m&&s?d/m*s:0)},ar=function(t,e,n,i){var s;return of||rf(),e in Xi&&e!=="transform"&&(e=Xi[e],~e.indexOf(",")&&(e=e.split(",")[0])),lr[e]&&e!=="transform"?(s=fa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ql(ri(t,$n))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xl[e]&&Xl[e](t,e,n)||ri(t,e)||Hu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Fr(t,e,s,n)+n:s},bv=function(t,e,n,i){if(!n||n==="none"){var s=io(e,t,1),o=s&&ri(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ri(t,"borderTopColor"))}var a=new Fn(this._pt,t.style,e,0,1,Ku),l=0,c=0,h,d,u,f,m,_,p,g,y,b,v,S;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ri(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ri(t,e)||i,_?t.style[e]=_:Or(t,e)),h=[n,i],Xu(h),n=h[0],i=h[1],u=n.match(ps)||[],S=i.match(ps)||[],S.length){for(;d=ps.exec(i);)p=d[0],y=i.substring(l,d.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),p.charAt(1)==="="&&(p=ms(f,p)+v),g=parseFloat(p),b=p.substr((g+"").length),l=ps.lastIndex-b.length,b||(b=b||Jn.units[e]||v,l===i.length&&(i+=b,a.e+=b)),v!==b&&(f=Fr(t,e,_,b)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:g-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?mm:pm;return Bu.test(i)&&(a.e=0),this._pt=a,a},um={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=um[n]||n,e[1]=um[i]||i,e.join(" ")},Tv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],lr[a]&&(l=1,a=a==="transformOrigin"?$n:Be),Or(n,a);l&&(Or(n,Be),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",fa(n,1),o.uncache=1,gm(i)))}},Xl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Fn(t._pt,e,n,0,0,Tv);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},ua=[1,0,0,1,0,0],Sm={},Mm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},fm=function(t){var e=ri(t,Be);return Mm(e)?ua:e.substr(7).match(Fu).map(Xe)},cf=function(t,e){var n=t._gsap||Ir(t),i=t.style,s=fm(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ua:s):(s===ua&&!t.offsetParent&&t!==eo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,eo.appendChild(t)),s=fm(t),l?i.display=l:Or(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):eo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sf=function(t,e,n,i,s,o){var a=t._gsap,l=s||cf(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],y=l[5],b=e.split(" "),v=parseFloat(b[0])||0,S=parseFloat(b[1])||0,E,x,M,P;n?l!==ua&&(x=f*p-m*_)&&(M=v*(p/x)+S*(-_/x)+(_*y-p*g)/x,P=v*(-m/x)+S*(f/x)-(f*y-m*g)/x,v=M,S=P):(E=vm(t),v=E.x+(~b[0].indexOf("%")?v/100*E.width:v),S=E.y+(~(b[1]||b[0]).indexOf("%")?S/100*E.height:S)),i||i!==!1&&a.smooth?(g=v-c,y=S-h,a.xOffset=d+(g*f+y*_)-g,a.yOffset=u+(g*m+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[$n]="0px 0px",o&&(Ur(o,a,"xOrigin",c,v),Ur(o,a,"yOrigin",h,S),Ur(o,a,"xOffset",d,a.xOffset),Ur(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+S)},fa=function(t,e){var n=t._gsap||new qu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ri(t,$n)||"0",h,d,u,f,m,_,p,g,y,b,v,S,E,x,M,P,A,N,D,G,I,k,V,L,W,B,C,H,dt,bt,q,et;return h=d=u=_=p=g=y=b=v=0,f=m=1,n.svg=!!(t.getCTM&&ym(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Be]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Be]!=="none"?l[Be]:"")),i.scale=i.rotate=i.translate="none"),x=cf(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",L=""):L=!e&&t.getAttribute("data-svg-origin"),sf(t,L||c,!!L||n.originIsAbsolute,n.smooth!==!1,x)),S=n.xOrigin||0,E=n.yOrigin||0,x!==ua&&(N=x[0],D=x[1],G=x[2],I=x[3],h=k=x[4],d=V=x[5],x.length===6?(f=Math.sqrt(N*N+D*D),m=Math.sqrt(I*I+G*G),_=N||D?to(D,N)*vs:0,y=G||I?to(G,I)*vs+_:0,y&&(m*=Math.abs(Math.cos(y*no))),n.svg&&(h-=S-(S*N+E*G),d-=E-(S*D+E*I))):(et=x[6],bt=x[7],C=x[8],H=x[9],dt=x[10],q=x[11],h=x[12],d=x[13],u=x[14],M=to(et,dt),p=M*vs,M&&(P=Math.cos(-M),A=Math.sin(-M),L=k*P+C*A,W=V*P+H*A,B=et*P+dt*A,C=k*-A+C*P,H=V*-A+H*P,dt=et*-A+dt*P,q=bt*-A+q*P,k=L,V=W,et=B),M=to(-G,dt),g=M*vs,M&&(P=Math.cos(-M),A=Math.sin(-M),L=N*P-C*A,W=D*P-H*A,B=G*P-dt*A,q=I*A+q*P,N=L,D=W,G=B),M=to(D,N),_=M*vs,M&&(P=Math.cos(M),A=Math.sin(M),L=N*P+D*A,W=k*P+V*A,D=D*P-N*A,V=V*P-k*A,N=L,k=W),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=Xe(Math.sqrt(N*N+D*D+G*G)),m=Xe(Math.sqrt(V*V+et*et)),M=to(k,V),y=Math.abs(M)>2e-4?M*vs:0,v=q?1/(q<0?-q:q):0),n.svg&&(L=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Mm(ri(t,Be)),L&&t.setAttribute("transform",L))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Xe(f),n.scaleY=Xe(m),n.rotation=Xe(_)+a,n.rotationX=Xe(p)+a,n.rotationY=Xe(g)+a,n.skewX=y+a,n.skewY=b+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[$n]=ql(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?Av:xm?bm:Ev,n.uncache=0,n},ql=function(t){return(t=t.split(" "))[0]+" "+t[1]},tf=function(t,e,n){var i=gn(e);return Xe(parseFloat(e)+parseFloat(Fr(t,"x",n+"px",i)))+i},Ev=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bm(t,e)},_s="0deg",ha="0px",xs=") ",bm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,y=n.target,b=n.zOrigin,v="",S=g==="auto"&&t&&t!==1||g===!0;if(b&&(d!==_s||h!==_s)){var E=parseFloat(h)*no,x=Math.sin(E),M=Math.cos(E),P;E=parseFloat(d)*no,P=Math.cos(E),o=tf(y,o,x*P*-b),a=tf(y,a,-Math.sin(E)*-b),l=tf(y,l,M*P*-b+b)}p!==ha&&(v+="perspective("+p+xs),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(S||o!==ha||a!==ha||l!==ha)&&(v+=l!==ha||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xs),c!==_s&&(v+="rotate("+c+xs),h!==_s&&(v+="rotateY("+h+xs),d!==_s&&(v+="rotateX("+d+xs),(u!==_s||f!==_s)&&(v+="skew("+u+", "+f+xs),(m!==1||_!==1)&&(v+="scale("+m+", "+_+xs),y.style[Be]=v||"translate(0, 0)"},Av=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,y=n.forceCSS,b=parseFloat(o),v=parseFloat(a),S,E,x,M,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=no,c*=no,S=Math.cos(l)*d,E=Math.sin(l)*d,x=Math.sin(l-c)*-u,M=Math.cos(l-c)*u,c&&(h*=no,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,M*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),S*=P,E*=P)),S=Xe(S),E=Xe(E),x=Xe(x),M=Xe(M)):(S=d,M=u,E=x=0),(b&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=Fr(f,"x",o,"px"),v=Fr(f,"y",a,"px")),(m||_||p||g)&&(b=Xe(b+m-(m*S+_*x)+p),v=Xe(v+_-(m*E+_*M)+g)),(i||s)&&(P=f.getBBox(),b=Xe(b+i/100*P.width),v=Xe(v+s/100*P.height)),P="matrix("+S+","+E+","+x+","+M+","+b+","+v+")",f.setAttribute("transform",P),y&&(f.style[Be]=P)},Cv=function(t,e,n,i,s){var o=360,a=sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?vs:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*om)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*om)%o-~~(c/o)*o)),t._pt=u=new Fn(t._pt,e,n,i,c,hv),u.e=h,u.u="deg",t._props.push(n),u},dm=function(t,e){for(var n in e)t[n]=e[n];return t},Rv=function(t,e,n){var i=dm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Be]=e,a=fa(n,1),Or(n,Be),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Be],o[Be]=e,a=fa(n,1),o[Be]=c);for(l in lr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=gn(c),m=gn(h),d=f!==m?Fr(n,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new Fn(t._pt,a,l,d,u-d,ef),t._pt.u=m||0,t._props.push(l));dm(a,i)};On("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Xl[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(m){return ar(a,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var hf={name:"css",register:rf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,m,_,p,g,y,b,v,S,E,x,M,P;of||rf(),this.styles=this.styles||_m(t),M=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(qn[_]&&Zu(_,e,n,i,t,s)))){if(f=typeof h,m=Xl[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=js(h)),m)m(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",sr.lastIndex=0,sr.test(c)||(p=gn(c),g=gn(h),g?p!==g&&(c=Fr(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),M.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],sn(c)&&~c.indexOf("random(")&&(c=js(c)),gn(c+"")||c==="auto"||(c+=Jn.units[_]||gn(ar(t,_))||""),(c+"").charAt(1)==="="&&(c=ar(t,_))):c=ar(t,_),u=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),_ in Xi&&(_==="autoAlpha"&&(u===1&&ar(t,"visibility")==="hidden"&&d&&(u=0),M.push("visibility",0,a.visibility),Ur(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Xi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in lr,b){if(this.styles.save(_),P=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ri(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=ri(t,"perspective"),A?t.style.perspective=A:Or(t,"perspective")}d=parseFloat(h)}if(v||(S=t._gsap,S.renderTransform&&!e.parseTransform||fa(t,e.parseTransform),E=e.smoothOrigin!==!1&&S.smooth,v=this._pt=new Fn(this._pt,a,Be,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new Fn(this._pt,S,"scaleY",S.scaleY,(y?ms(S.scaleY,y+d):d)-S.scaleY||0,ef),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){M.push($n,0,a[$n]),h=wv(h),S.svg?sf(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==S.zOrigin&&Ur(this,S,"zOrigin",S.zOrigin,g),Ur(this,a,_,ql(c),ql(h)));continue}else if(_==="svgOrigin"){sf(t,h,1,E,0,this);continue}else if(_ in Sm){Cv(this,S,_,u,y?ms(u,y+h):h);continue}else if(_==="smoothOrigin"){Ur(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){Rv(this,h,t);continue}}else _ in a||(_=io(_)||_);if(b||(d||d===0)&&(u||u===0)&&!cv.test(h)&&_ in a)p=(c+"").substr((u+"").length),d||(d=0),g=gn(h)||(_ in Jn.units?Jn.units[_]:p),p!==g&&(u=Fr(t,_,c,g)),this._pt=new Fn(this._pt,b?S:a,_,u,(y?ms(u,y+d):d)-u,!b&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?dv:ef),this._pt.u=g||0,b&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=fv):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=uv);else if(_ in a)bv.call(this,t,_,c,y?y+h:h);else if(_ in t)this.add(t,_,c||t[_],y?y+h:h,i,s);else if(_!=="parseTransform"){kl(_,h);continue}b||(_ in a?M.push(_,0,a[_]):typeof t[_]=="function"?M.push(_,2,t[_]()):M.push(_,1,c||t[_])),o.push(_)}}x&&ju(this)},render:function(t,e){if(e.tween._time||!af())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ar,aliases:Xi,getSetter:function(t,e,n){var i=Xi[e];return i&&i.indexOf(",")<0&&(e=i),e in lr&&e!==$n&&(t._gsap.x||ar(t,"x"))?n&&sm===n?e==="scale"?_v:gv:(sm=n||{})&&(e==="scale"?xv:vv):t.style&&!zl(t.style[e])?pv:~e.indexOf("-")?mv:Wl(t,e)},core:{_removeProperty:Or,_getMatrix:cf}};En.utils.checkPrefix=io;En.core.getStyleSaver=_m;(function(r,t,e,n){var i=On(r+","+t+","+e,function(s){lr[s]=1});On(t,function(s){Jn.units[s]="deg",Sm[s]=1}),Xi[i[13]]=r+","+t,On(n,function(s){var o=s.split(":");Xi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Jn.units[r]="px"});En.registerPlugin(hf);var ee=En.registerPlugin(hf)||En,I1=ee.core.Tween;function wm(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Pv(r,t,e){return t&&wm(r.prototype,t),e&&wm(r,e),r}var _n,Jl,Iv,Kn,Br,zr,so,Em,Ss,oo,Am,cr,Ri,Cm,Rm=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},Pm=1,ro=[],se=[],Pi=[],pa=Date.now,uf=function(t,e){return e},Lv=function(){var t=oo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,se),i.push.apply(i,Pi),se=n,Pi=i,uf=function(o,a){return e[o](a)}},ur=function(t,e){return~Pi.indexOf(t)&&Pi[Pi.indexOf(t)+1][e]},ma=function(t){return!!~Am.indexOf(t)},zn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Bn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Yl="scrollLeft",Zl="scrollTop",ff=function(){return cr&&cr.isPressed||se.cache++},$l=function(t,e){var n=function i(s){if(s||s===0){Pm&&Kn.history.scrollRestoration!=="manual"&&(Kn.history.scrollRestoration="manual");var o=cr&&cr.isPressed;s=i.v=Math.round(s)||(cr&&cr.iOS?1:0),t(s),i.cacheID=se.cache,o&&uf("ss",s)}else(e||se.cache!==i.cacheID||uf("ref"))&&(i.cacheID=se.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},An={s:Yl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:$l(function(r){return arguments.length?Kn.scrollTo(r,Qe.sc()):Kn.pageXOffset||Br[Yl]||zr[Yl]||so[Yl]||0})},Qe={s:Zl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:$l(function(r){return arguments.length?Kn.scrollTo(An.sc(),r):Kn.pageYOffset||Br[Zl]||zr[Zl]||so[Zl]||0})},kn=function(t,e){return(e&&e._ctx&&e._ctx.selector||_n.utils.toArray)(t)[0]||(typeof t=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Dv=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},hr=function(t,e){var n=e.s,i=e.sc;ma(t)&&(t=Br.scrollingElement||zr);var s=se.indexOf(t),o=i===Qe.sc?1:2;!~s&&(s=se.push(t)-1),se[s+o]||zn(t,"scroll",ff);var a=se[s+o],l=a||(se[s+o]=$l(ur(t,n),!0)||(ma(t)?i:$l(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=_n.getProperty(t,"scrollBehavior")==="smooth"),l},Kl=function(t,e,n){var i=t,s=t,o=pa(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=pa();_||p-o>l?(s=i,i=m,a=o,o=p):n?i+=m:i=s+(m-s)/(p-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},u=function(m){var _=a,p=s,g=pa();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},da=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Tm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Im=function(){oo=_n.core.globals().ScrollTrigger,oo&&oo.core&&Lv()},Lm=function(t){return _n=t||Rm(),!Jl&&_n&&typeof document<"u"&&document.body&&(Kn=window,Br=document,zr=Br.documentElement,so=Br.body,Am=[Kn,Br,zr,so],Iv=_n.utils.clamp,Cm=_n.core.context||function(){},Ss="onpointerenter"in so?"pointer":"mouse",Em=qe.isTouch=Kn.matchMedia&&Kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ri=qe.eventTypes=("ontouchstart"in zr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in zr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Pm=0},500),Jl=1),oo||Im(),Jl};An.op=Qe;se.cache=0;var qe=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Jl||Lm(_n)||console.warn("Please gsap.registerPlugin(Observer)"),oo||Im();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,y=n.onDrag,b=n.onPress,v=n.onRelease,S=n.onRight,E=n.onLeft,x=n.onUp,M=n.onDown,P=n.onChangeX,A=n.onChangeY,N=n.onChange,D=n.onToggleX,G=n.onToggleY,I=n.onHover,k=n.onHoverEnd,V=n.onMove,L=n.ignoreCheck,W=n.isNormalizer,B=n.onGestureStart,C=n.onGestureEnd,H=n.onWheel,dt=n.onEnable,bt=n.onDisable,q=n.onClick,et=n.scrollSpeed,pt=n.capture,Tt=n.allowClicks,ut=n.lockAxis,Nt=n.onLockAxis;this.target=a=kn(a)||zr,this.vars=n,f&&(f=_n.utils.toArray(f)),i=i||1e-9,s=s||0,m=m||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Kn.getComputedStyle(so).lineHeight)||22);var fe,Pt,Gt,It,j,ct,lt,z=this,mt=0,Xt=0,Ut=n.passive||!h&&n.passive!==!1,Vt=hr(a,An),Qt=hr(a,Qe),re=Vt(),F=Qt(),ae=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ri[0]==="pointerdown",Kt=ma(a),Jt=a.ownerDocument||Br,_t=[0,0,0],ge=[0,0,0],Bt=0,qt=function(){return Bt=pa()},R=function(St,ot){return(z.event=St)&&f&&Dv(St.target,f)||ot&&ae&&St.pointerType!=="touch"||L&&L(St,ot)},w=function(){z._vx.reset(),z._vy.reset(),Pt.pause(),d&&d(z)},Y=function(){var St=z.deltaX=Tm(_t),ot=z.deltaY=Tm(ge),it=Math.abs(St)>=i,wt=Math.abs(ot)>=i;N&&(it||wt)&&N(z,St,ot,_t,ge),it&&(S&&z.deltaX>0&&S(z),E&&z.deltaX<0&&E(z),P&&P(z),D&&z.deltaX<0!=mt<0&&D(z),mt=z.deltaX,_t[0]=_t[1]=_t[2]=0),wt&&(M&&z.deltaY>0&&M(z),x&&z.deltaY<0&&x(z),A&&A(z),G&&z.deltaY<0!=Xt<0&&G(z),Xt=z.deltaY,ge[0]=ge[1]=ge[2]=0),(It||Gt)&&(V&&V(z),Gt&&(p&&Gt===1&&p(z),y&&y(z),Gt=0),It=!1),ct&&!(ct=!1)&&Nt&&Nt(z),j&&(H(z),j=!1),fe=0},at=function(St,ot,it){_t[it]+=St,ge[it]+=ot,z._vx.update(St),z._vy.update(ot),c?fe||(fe=requestAnimationFrame(Y)):Y()},st=function(St,ot){ut&&!lt&&(z.axis=lt=Math.abs(St)>Math.abs(ot)?"x":"y",ct=!0),lt!=="y"&&(_t[2]+=St,z._vx.update(St,!0)),lt!=="x"&&(ge[2]+=ot,z._vy.update(ot,!0)),c?fe||(fe=requestAnimationFrame(Y)):Y()},xt=function(St){if(!R(St,1)){St=da(St,h);var ot=St.clientX,it=St.clientY,wt=ot-z.x,rt=it-z.y,Lt=z.isDragging;z.x=ot,z.y=it,(Lt||(wt||rt)&&(Math.abs(z.startX-ot)>=s||Math.abs(z.startY-it)>=s))&&(Gt||(Gt=Lt?2:1),Lt||(z.isDragging=!0),st(wt,rt))}},Mt=z.onPress=function(ht){R(ht,1)||ht&&ht.button||(z.axis=lt=null,Pt.pause(),z.isPressed=!0,ht=da(ht),mt=Xt=0,z.startX=z.x=ht.clientX,z.startY=z.y=ht.clientY,z._vx.reset(),z._vy.reset(),zn(W?a:Jt,Ri[1],xt,Ut,!0),z.deltaX=z.deltaY=0,b&&b(z))},J=z.onRelease=function(ht){if(!R(ht,1)){Bn(W?a:Jt,Ri[1],xt,!0);var St=!isNaN(z.y-z.startY),ot=z.isDragging,it=ot&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),wt=da(ht);!it&&St&&(z._vx.reset(),z._vy.reset(),h&&Tt&&_n.delayedCall(.08,function(){if(pa()-Bt>300&&!ht.defaultPrevented){if(ht.target.click)ht.target.click();else if(Jt.createEvent){var rt=Jt.createEvent("MouseEvents");rt.initMouseEvent("click",!0,!0,Kn,1,wt.screenX,wt.screenY,wt.clientX,wt.clientY,!1,!1,!1,!1,0,null),ht.target.dispatchEvent(rt)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,d&&ot&&!W&&Pt.restart(!0),Gt&&Y(),g&&ot&&g(z),v&&v(z,it)}},nt=function(St){return St.touches&&St.touches.length>1&&(z.isGesturing=!0)&&B(St,z.isDragging)},gt=function(){return(z.isGesturing=!1)||C(z)},U=function(St){if(!R(St)){var ot=Vt(),it=Qt();at((ot-re)*et,(it-F)*et,1),re=ot,F=it,d&&Pt.restart(!0)}},tt=function(St){if(!R(St)){St=da(St,h),H&&(j=!0);var ot=(St.deltaMode===1?l:St.deltaMode===2?Kn.innerHeight:1)*m;at(St.deltaX*ot,St.deltaY*ot,0),d&&!W&&Pt.restart(!0)}},Q=function(St){if(!R(St)){var ot=St.clientX,it=St.clientY,wt=ot-z.x,rt=it-z.y;z.x=ot,z.y=it,It=!0,d&&Pt.restart(!0),(wt||rt)&&st(wt,rt)}},vt=function(St){z.event=St,I(z)},ft=function(St){z.event=St,k(z)},yt=function(St){return R(St)||da(St,h)&&q(z)};Pt=z._dc=_n.delayedCall(u||.25,w).pause(),z.deltaX=z.deltaY=0,z._vx=Kl(0,50,!0),z._vy=Kl(0,50,!0),z.scrollX=Vt,z.scrollY=Qt,z.isDragging=z.isGesturing=z.isPressed=!1,Cm(this),z.enable=function(ht){return z.isEnabled||(zn(Kt?Jt:a,"scroll",ff),o.indexOf("scroll")>=0&&zn(Kt?Jt:a,"scroll",U,Ut,pt),o.indexOf("wheel")>=0&&zn(a,"wheel",tt,Ut,pt),(o.indexOf("touch")>=0&&Em||o.indexOf("pointer")>=0)&&(zn(a,Ri[0],Mt,Ut,pt),zn(Jt,Ri[2],J),zn(Jt,Ri[3],J),Tt&&zn(a,"click",qt,!0,!0),q&&zn(a,"click",yt),B&&zn(Jt,"gesturestart",nt),C&&zn(Jt,"gestureend",gt),I&&zn(a,Ss+"enter",vt),k&&zn(a,Ss+"leave",ft),V&&zn(a,Ss+"move",Q)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=It=Gt=!1,z._vx.reset(),z._vy.reset(),re=Vt(),F=Qt(),ht&&ht.type&&Mt(ht),dt&&dt(z)),z},z.disable=function(){z.isEnabled&&(ro.filter(function(ht){return ht!==z&&ma(ht.target)}).length||Bn(Kt?Jt:a,"scroll",ff),z.isPressed&&(z._vx.reset(),z._vy.reset(),Bn(W?a:Jt,Ri[1],xt,!0)),Bn(Kt?Jt:a,"scroll",U,pt),Bn(a,"wheel",tt,pt),Bn(a,Ri[0],Mt,pt),Bn(Jt,Ri[2],J),Bn(Jt,Ri[3],J),Bn(a,"click",qt,!0),Bn(a,"click",yt),Bn(Jt,"gesturestart",nt),Bn(Jt,"gestureend",gt),Bn(a,Ss+"enter",vt),Bn(a,Ss+"leave",ft),Bn(a,Ss+"move",Q),z.isEnabled=z.isPressed=z.isDragging=!1,bt&&bt(z))},z.kill=z.revert=function(){z.disable();var ht=ro.indexOf(z);ht>=0&&ro.splice(ht,1),cr===z&&(cr=0)},ro.push(z),W&&ma(a)&&(cr=z),z.enable(_)},Pv(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();qe.version="3.15.1";qe.create=function(r){return new qe(r)};qe.register=Lm;qe.getAll=function(){return ro.slice()};qe.getById=function(r){return ro.filter(function(t){return t.vars.id===r})[0]};Rm()&&_n.registerPlugin(qe);var Ot,ho,ce,we,ai,Me,Ef,dc,Ca,Ma,_a,Ql,Cn,gc,vf,Vn,Dm,Nm,uo,$m,df,Km,Gn,yf,Qm,jm,kr,Sf,Af,fo,Cf,Gr,Mf,pf,jl=1,Rn=Date.now,mf=Rn(),Mi=0,xa=0,Um=function(t,e,n){var i=oi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Om=function(t,e){return e&&(!oi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Nv=function r(){return xa&&requestAnimationFrame(r)},Fm=function(){return gc=1},Bm=function(){return gc=0},qi=function(t){return t},va=function(t){return Math.round(t*1e5)/1e5||0},tg=function(){return typeof window<"u"},eg=function(){return Ot||tg()&&(Ot=window.gsap)&&Ot.registerPlugin&&Ot},As=function(t){return!!~Ef.indexOf(t)},ng=function(t){return(t==="Height"?Cf:ce["inner"+t])||ai["client"+t]||Me["client"+t]},ig=function(t){return ur(t,"getBoundingClientRect")||(As(t)?function(){return fc.width=ce.innerWidth,fc.height=Cf,fc}:function(){return fr(t)})},Uv=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=ur(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?ng(s):t["client"+s])||0}},Ov=function(t,e){return!e||~Pi.indexOf(t)?ig(t):function(){return fc}},Yi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=ur(t,n))?o()-ig(t)()[s]:As(t)?(ai[n]||Me[n])-ng(i):t[n]-t["offset"+i])},tc=function(t,e){for(var n=0;n<uo.length;n+=3)(!e||~e.indexOf(uo[n+1]))&&t(uo[n],uo[n+1],uo[n+2])},oi=function(t){return typeof t=="string"},Pn=function(t){return typeof t=="function"},ya=function(t){return typeof t=="number"},Ms=function(t){return typeof t=="object"},ga=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ao=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},lo=Math.abs,rg="left",sg="top",Rf="right",Pf="bottom",ws="width",Ts="height",ba="Right",wa="Left",Ta="Top",Ea="Bottom",je="padding",yi="margin",mo="Width",If="Height",on="px",Si=function(t){return ce.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Fv=function(t){var e=Si(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},zm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},fr=function(t,e){var n=e&&Si(t)[vf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ot.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},pc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},og=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Bv=function(t){return function(e){return Ot.utils.snap(og(t),e)}},Lf=function(t){var e=Ot.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},zv=function(t){return function(e,n){return Lf(og(t))(e,n.direction)}},ec=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},un=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},hn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},nc=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},km={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ic={toggleActions:"play",anticipatePin:0},mc={top:0,left:0,center:.5,bottom:1,right:1},lc=function(t,e){if(oi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in mc?mc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},rc=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,m=we.createElement("div"),_=As(n)||ur(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?Me:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,b=y?c:h,v="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(v+=(i===Qe?Rf:Pf)+":"+(o+parseFloat(u))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=v,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],cc(m,0,i,y),m},cc=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+mo]=1,s["border"+a+mo]=0,s[n.p]=e+"px",Ot.set(t,s)},le=[],bf={},Ra,Gm=function(){return Rn()-Mi>34&&(Ra||(Ra=requestAnimationFrame(dr)))},co=function(){(!Gn||!Gn.isPressed||Gn.startX>Me.clientWidth)&&(se.cache++,Gn?Ra||(Ra=requestAnimationFrame(dr)):dr(),Mi||Rs("scrollStart"),Mi=Rn())},gf=function(){jm=ce.innerWidth,Qm=ce.innerHeight},Sa=function(t){se.cache++,(t===!0||!Cn&&!Km&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!yf||jm!==ce.innerWidth||Math.abs(ce.innerHeight-Qm)>ce.innerHeight*.25))&&dc.restart(!0)},Cs={},kv=[],ag=function r(){return hn(Yt,"scrollEnd",r)||bs(!0)},Rs=function(t){return Cs[t]&&Cs[t].map(function(e){return e()})||kv},si=[],lg=function(t){for(var e=0;e<si.length;e+=5)(!t||si[e+4]&&si[e+4].query===t)&&(si[e].style.cssText=si[e+1],si[e].getBBox&&si[e].setAttribute("transform",si[e+2]||""),si[e+3].uncache=1)},cg=function(){se.cache++,se.forEach(function(t){return Pn(t)&&(t.rec=t())})},Df=function(t,e){var n;for(Vn=0;Vn<le.length;Vn++)n=le[Vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Gr=!0,e&&lg(e),e||Rs("revert")},hg=function(t,e){se.cache++,(e||!Hn)&&se.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),oi(t)&&(Af=t,ce.history.scrollRestoration!==t&&(ce.history.scrollRestoration=t))},Hn,Es=0,Vm,Gv=function(){if(Vm!==Es){var t=Vm=Es;requestAnimationFrame(function(){return t===Es&&bs(!0)})}},ug=function(){Me.appendChild(fo),Cf=!Gn&&fo.offsetHeight||ce.innerHeight,Me.removeChild(fo)},Hm=function(t){return Ca(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},bs=function(t,e){if(ai=we.documentElement,Me=we.body,Ef=[ce,we,ai,Me],Mi&&!t&&!Gr){un(Yt,"scrollEnd",ag);return}ug(),Hn=Yt.isRefreshing=!0,Gr||cg();var n=Rs("refreshInit");$m&&Yt.sort(),e||Df(),se.forEach(function(i){Pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),le.slice(0).forEach(function(i){return i.refresh()}),Gr=!1,le.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Mf=1,Hm(!0),le.forEach(function(i){var s=Yi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Hm(!1),Mf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),se.forEach(function(i){Pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),hg(Af,1),dc.pause(),Es++,Hn=2,dr(2),le.forEach(function(i){return Pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Hn=Yt.isRefreshing=!1,Rs("refresh")},wf=0,hc=1,Aa,dr=function(t){if(t===2||!Hn&&!Gr){Yt.isUpdating=!0,Aa&&Aa.update(0);var e=le.length,n=Rn(),i=n-mf>=50,s=e&&le[0].scroll();if(hc=wf>s?-1:1,Hn||(wf=s),i&&(Mi&&!gc&&n-Mi>200&&(Mi=0,Rs("scrollEnd")),_a=mf,mf=n),hc<0){for(Vn=e;Vn-- >0;)le[Vn]&&le[Vn].update(0,i);hc=1}else for(Vn=0;Vn<e;Vn++)le[Vn]&&le[Vn].update(0,i);Yt.isUpdating=!1}Ra=0},Tf=[rg,sg,Pf,Rf,yi+Ea,yi+ba,yi+Ta,yi+wa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],uc=Tf.concat([ws,Ts,"boxSizing","max"+mo,"max"+If,"position",yi,je,je+Ta,je+ba,je+Ea,je+wa]),Vv=function(t,e,n){po(n);var i=t._gsap;if(i.spacerIsNative)po(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},_f=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Tf.length,o=e.style,a=t.style,l;s--;)l=Tf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Pf]=a[Rf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ws]=pc(t,An)+on,o[Ts]=pc(t,Qe)+on,o[je]=a[yi]=a[sg]=a[rg]="0",po(i),a[ws]=a["max"+mo]=n[ws],a[Ts]=a["max"+If]=n[Ts],a[je]=n[je],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Hv=/([A-Z])/g,po=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ot.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Hv,"-$1").toLowerCase())}},sc=function(t){for(var e=uc.length,n=t.style,i=[],s=0;s<e;s++)i.push(uc[s],n[uc[s]]);return i.t=t,i},Wv=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},fc={left:0,top:0},Wm=function(t,e,n,i,s,o,a,l,c,h,d,u,f,m){Pn(t)&&(t=t(l)),oi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?lc("0"+t.substr(3),n):0));var _=f?f.time():0,p,g,y;if(f&&f.seek(0),isNaN(t)||(t=+t),ya(t))f&&(t=Ot.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&cc(a,n,i,!0);else{Pn(e)&&(e=e(l));var b=(t||"0").split(" "),v,S,E,x;y=kn(e,l)||Me,v=fr(y)||{},(!v||!v.left&&!v.top)&&Si(y).display==="none"&&(x=y.style.display,y.style.display="block",v=fr(y),x?y.style.display=x:y.style.removeProperty("display")),S=lc(b[0],v[i.d]),E=lc(b[1]||"0",n),t=v[i.p]-c[i.p]-h+S+s-E,a&&cc(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var M=t+n,P=o._isStart;p="scroll"+i.d2,cc(o,M,i,P&&M>20||!P&&(d?Math.max(Me[p],ai[p]):o.parentNode[p])<=M+1),d&&(c=fr(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+on))}return f&&y&&(p=fr(y),f.seek(u),g=fr(y),f._caScrollDist=p[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},Xv=/(webkit|moz|length|cssText|inset)/i,Xm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Me){t._stOrig=s.cssText,a=Si(t);for(o in a)!+o&&!Xv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ot.core.getCache(t).uncache=1,e.appendChild(t)}},fg=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},oc=function(t,e,n){var i={};i[e.p]="+="+n,Ot.set(t,i)},qm=function(t,e){var n=hr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,m={};c=c||n();var _=fg(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){se.cache++,o.tween&&dr()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ot.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(t,"wheel",n.wheelHandler),Yt.isTouch&&un(t,"touchmove",n.wheelHandler),s},Yt=(function(){function r(e,n){ho||r.register(Ot)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Sf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xa){this.update=this.refresh=this.kill=qi;return}n=zm(oi(n)||ya(n)||n.nodeType?{trigger:n}:n,ic);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,b=s.once,v=s.snap,S=s.pinReparent,E=s.pinSpacer,x=s.containerAnimation,M=s.fastScrollEnd,P=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:Qe,N=!d&&d!==0,D=kn(n.scroller||ce),G=Ot.core.getCache(D),I=As(D),k=("pinType"in n?n.pinType:ur(D,"pinType")||I&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],L=N&&n.toggleActions.split(" "),W="markers"in n?n.markers:ic.markers,B=I?0:parseFloat(Si(D)["border"+A.p2+mo])||0,C=this,H=n.onRefreshInit&&function(){return n.onRefreshInit(C)},dt=Uv(D,I,A),bt=Ov(D,I),q=0,et=0,pt=0,Tt=hr(D,A),ut,Nt,fe,Pt,Gt,It,j,ct,lt,z,mt,Xt,Ut,Vt,Qt,re,F,ae,Kt,Jt,_t,ge,Bt,qt,R,w,Y,at,st,xt,Mt,J,nt,gt,U,tt,Q,vt,ft;if(C._startClamp=C._endClamp=!1,C._dir=A,p*=45,C.scroller=D,C.scroll=x?x.time.bind(x):Tt,Pt=Tt(),Gr&&Tt.rec==null&&(Tt.rec=Pt),C.vars=n,i=i||n.animation,"refreshPriority"in n&&($m=1,n.refreshPriority===-9999&&(Aa=C)),G.tweenScroll=G.tweenScroll||{top:qm(D,Qe),left:qm(D,An)},C.tweenTo=ut=G.tweenScroll[A.p],C.scrubDuration=function(it){nt=ya(it)&&it,nt?J?J.duration(it):J=Ot.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:nt,paused:!0,onComplete:function(){return g&&g(C)}}):(J&&J.progress(1).kill(),J=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),xt=0,l||(l=i.vars.id)),v&&((!Ms(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Me.style&&Ot.set(I?[Me,ai]:D,{scrollBehavior:"auto"}),se.forEach(function(it){return Pn(it)&&it.target===(I?we.scrollingElement||ai:D)&&(it.smooth=!1)}),fe=Pn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Bv(i):v.snapTo==="labelsDirectional"?zv(i):v.directional!==!1?function(it,wt){return Lf(v.snapTo)(it,Rn()-et<500?0:wt.direction)}:Ot.utils.snap(v.snapTo),gt=v.duration||{min:.1,max:2},gt=Ms(gt)?Ma(gt.min,gt.max):Ma(gt,gt),U=Ot.delayedCall(v.delay||nt/2||.1,function(){var it=Tt(),wt=Rn()-et<500,rt=ut.tween;if((wt||Math.abs(C.getVelocity())<10)&&!rt&&!gc&&q!==it){var Lt=(it-It)/Vt,ue=i&&!N?i.totalProgress():Lt,ne=wt?0:(ue-Mt)/(Rn()-_a)*1e3||0,Le=Ot.utils.clamp(-Lt,1-Lt,lo(ne/2)*ne/.185),Je=Lt+(v.inertia===!1?0:Le),De,Ee,Se=v,en=Se.onStart,Ae=Se.onInterrupt,Sn=Se.onComplete;if(De=fe(Je,C),ya(De)||(De=Je),Ee=Math.max(0,Math.round(It+De*Vt)),it<=j&&it>=It&&Ee!==it){if(rt&&!rt._initted&&rt.data<=lo(Ee-it))return;v.inertia===!1&&(Le=De-Lt),ut(Ee,{duration:gt(lo(Math.max(lo(Je-ue),lo(De-ue))*.185/ne/.05||0)),ease:v.ease||"power3",data:lo(Ee-it),onInterrupt:function(){return U.restart(!0)&&Ae&&ao(C,Ae)},onComplete:function(){C.update(),q=Tt(),i&&!N&&(J?J.resetTo("totalProgress",De,i._tTime/i._tDur):i.progress(De)),xt=Mt=i&&!N?i.totalProgress():C.progress,y&&y(C),Sn&&ao(C,Sn)}},it,Le*Vt,Ee-it-Le*Vt),en&&ao(C,en,ut.tween)}}else C.isActive&&q!==it&&U.restart(!0)}).pause()),l&&(bf[l]=C),u=C.trigger=kn(u||f!==!0&&f),ft=u&&u._gsap&&u._gsap.stRevert,ft&&(ft=ft(C)),f=f===!0?u:kn(f),oi(a)&&(a={targets:u,className:a}),f&&(m===!1||m===yi||(m=!m&&f.parentNode&&f.parentNode.style&&Si(f.parentNode).display==="flex"?!1:je),C.pin=f,Nt=Ot.core.getCache(f),Nt.spacer?Qt=Nt.pinState:(E&&(E=kn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Nt.spacerIsNative=!!E,E&&(Nt.spacerState=sc(E))),Nt.spacer=ae=E||we.createElement("div"),ae.classList.add("pin-spacer"),l&&ae.classList.add("pin-spacer-"+l),Nt.pinState=Qt=sc(f)),n.force3D!==!1&&Ot.set(f,{force3D:!0}),C.spacer=ae=Nt.spacer,st=Si(f),qt=st[m+A.os2],Jt=Ot.getProperty(f),_t=Ot.quickSetter(f,A.a,on),_f(f,ae,st),F=sc(f)),W){Xt=Ms(W)?zm(W,km):km,z=rc("scroller-start",l,D,A,Xt,0),mt=rc("scroller-end",l,D,A,Xt,0,z),Kt=z["offset"+A.op.d2];var yt=kn(ur(D,"content")||D);ct=this.markerStart=rc("start",l,yt,A,Xt,Kt,0,x),lt=this.markerEnd=rc("end",l,yt,A,Xt,Kt,0,x),x&&(vt=Ot.quickSetter([ct,lt],A.a,on)),!k&&!(Pi.length&&ur(D,"fixedMarkers")===!0)&&(Fv(I?Me:D),Ot.set([z,mt],{force3D:!0}),w=Ot.quickSetter(z,A.a,on),at=Ot.quickSetter(mt,A.a,on))}if(x){var ht=x.vars.onUpdate,St=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){C.update(0,0,1),ht&&ht.apply(x,St||[])})}if(C.previous=function(){return le[le.indexOf(C)-1]},C.next=function(){return le[le.indexOf(C)+1]},C.revert=function(it,wt){if(!wt)return C.kill(!0);var rt=it!==!1||!C.enabled,Lt=Cn;rt!==C.isReverted&&(rt&&(tt=Math.max(Tt(),C.scroll.rec||0),pt=C.progress,Q=i&&i.progress()),ct&&[ct,lt,z,mt].forEach(function(ue){return ue.style.display=rt?"none":"block"}),rt&&(Cn=C,C.update(rt)),f&&(!S||!C.isActive)&&(rt?Vv(f,ae,Qt):_f(f,ae,Si(f),R)),rt||C.update(rt),Cn=Lt,C.isReverted=rt)},C.refresh=function(it,wt,rt,Lt){if(!((Cn||!C.enabled)&&!wt)){if(f&&it&&Mi){un(r,"scrollEnd",ag);return}!Hn&&H&&H(C),Cn=C,ut.tween&&!rt&&(ut.tween.kill(),ut.tween=0),J&&J.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(X){return X.vars.immediateRender&&X.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var ue=dt(),ne=bt(),Le=x?x.duration():Yi(D,A),Je=Vt<=.01||!Vt,De=0,Ee=Lt||0,Se=Ms(rt)?rt.end:n.end,en=n.endTrigger||u,Ae=Ms(rt)?rt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),Sn=C.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,C),jn=u&&Math.max(0,le.indexOf(C))||0,Ve=jn,$e,nn,ti,Ys,rn,He,gi,Ko,El,Ar,T,O,K;for(W&&Ms(rt)&&(O=Ot.getProperty(z,A.p),K=Ot.getProperty(mt,A.p));Ve-- >0;)He=le[Ve],He.end||He.refresh(0,1)||(Cn=C),gi=He.pin,gi&&(gi===u||gi===f||gi===Sn)&&!He.isReverted&&(Ar||(Ar=[]),Ar.unshift(He),He.revert(!0,!0)),He!==le[Ve]&&(jn--,Ve--);for(Pn(Ae)&&(Ae=Ae(C)),Ae=Um(Ae,"start",C),It=Wm(Ae,u,ue,A,Tt(),ct,z,C,ne,B,k,Le,x,C._startClamp&&"_startClamp")||(f?-.001:0),Pn(Se)&&(Se=Se(C)),oi(Se)&&!Se.indexOf("+=")&&(~Se.indexOf(" ")?Se=(oi(Ae)?Ae.split(" ")[0]:"")+Se:(De=lc(Se.substr(2),ue),Se=oi(Ae)?Ae:(x?Ot.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,It):It)+De,en=u)),Se=Um(Se,"end",C),j=Math.max(It,Wm(Se||(en?"100% 0":Le),en,ue,A,Tt()+De,lt,mt,C,ne,B,k,Le,x,C._endClamp&&"_endClamp"))||-.001,De=0,Ve=jn;Ve--;)He=le[Ve]||{},gi=He.pin,gi&&He.start-He._pinPush<=It&&!x&&He.end>0&&($e=He.end-(C._startClamp?Math.max(0,He.start):He.start),(gi===u&&He.start-He._pinPush<It||gi===Sn)&&isNaN(Ae)&&(De+=$e*(1-He.progress)),gi===f&&(Ee+=$e));if(It+=De,j+=De,C._startClamp&&(C._startClamp+=De),C._endClamp&&!Hn&&(C._endClamp=j||-.001,j=Math.min(j,Yi(D,A))),Vt=j-It||(It-=.01)&&.001,Je&&(pt=Ot.utils.clamp(0,1,Ot.utils.normalize(It,j,tt))),C._pinPush=Ee,ct&&De&&($e={},$e[A.a]="+="+De,Sn&&($e[A.p]="-="+Tt()),Ot.set([ct,lt],$e)),f&&!(Mf&&C.end>=Yi(D,A)))$e=Si(f),Ys=A===Qe,ti=Tt(),ge=parseFloat(Jt(A.a))+Ee,!Le&&j>1&&(T=(I?we.scrollingElement||ai:D).style,T={style:T,value:T["overflow"+A.a.toUpperCase()]},I&&Si(Me)["overflow"+A.a.toUpperCase()]!=="scroll"&&(T.style["overflow"+A.a.toUpperCase()]="scroll")),_f(f,ae,$e),F=sc(f),nn=fr(f,!0),Ko=k&&hr(D,Ys?An:Qe)(),m?(R=[m+A.os2,Vt+Ee+on],R.t=ae,Ve=m===je?pc(f,A)+Vt+Ee:0,Ve&&(R.push(A.d,Ve+on),ae.style.flexBasis!=="auto"&&(ae.style.flexBasis=Ve+on)),po(R),Sn&&le.forEach(function(X){X.pin===Sn&&X.vars.pinSpacing!==!1&&(X._subPinOffset=!0)}),k&&Tt(tt)):(Ve=pc(f,A),Ve&&ae.style.flexBasis!=="auto"&&(ae.style.flexBasis=Ve+on)),k&&(rn={top:nn.top+(Ys?ti-It:Ko)+on,left:nn.left+(Ys?Ko:ti-It)+on,boxSizing:"border-box",position:"fixed"},rn[ws]=rn["max"+mo]=Math.ceil(nn.width)+on,rn[Ts]=rn["max"+If]=Math.ceil(nn.height)+on,rn[yi]=rn[yi+Ta]=rn[yi+ba]=rn[yi+Ea]=rn[yi+wa]="0",rn[je]=$e[je],rn[je+Ta]=$e[je+Ta],rn[je+ba]=$e[je+ba],rn[je+Ea]=$e[je+Ea],rn[je+wa]=$e[je+wa],re=Wv(Qt,rn,S),Hn&&Tt(0)),i?(El=i._initted,df(1),i.render(i.duration(),!0,!0),Bt=Jt(A.a)-ge+Vt+Ee,Y=Math.abs(Vt-Bt)>1,k&&Y&&re.splice(re.length-2,2),i.render(0,!0,!0),El||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),df(0)):Bt=Vt,T&&(T.value?T.style["overflow"+A.a.toUpperCase()]=T.value:T.style.removeProperty("overflow-"+A.a));else if(u&&Tt()&&!x)for(nn=u.parentNode;nn&&nn!==Me;)nn._pinOffset&&(It-=nn._pinOffset,j-=nn._pinOffset),nn=nn.parentNode;Ar&&Ar.forEach(function(X){return X.revert(!1,!0)}),C.start=It,C.end=j,Pt=Gt=Hn?tt:Tt(),!x&&!Hn&&!Gr&&(Pt<tt&&Tt(tt),C.scroll.rec=0),C.revert(!1,!0),et=Rn(),U&&(q=-1,U.restart(!0)),Cn=0,i&&N&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(Je||pt!==C.progress||x||_||i&&!i._initted)&&(i&&!N&&(i._initted||pt||i.vars.immediateRender!==!1)&&i.totalProgress(x&&It<-.001&&!pt?Ot.utils.normalize(It,j,0):pt,!0),C.progress=Je||(Pt-It)/Vt===pt?0:pt),f&&m&&(ae._pinOffset=Math.round(C.progress*Bt)),J&&J.invalidate(),isNaN(O)||(O-=Ot.getProperty(z,A.p),K-=Ot.getProperty(mt,A.p),oc(z,A,O),oc(ct,A,O-(Lt||0)),oc(mt,A,K),oc(lt,A,K-(Lt||0))),Je&&!Hn&&C.update(),h&&!Hn&&!Ut&&(Ut=!0,h(C),Ut=!1)}},C.getVelocity=function(){return(Tt()-Gt)/(Rn()-_a)*1e3||0},C.endAnimation=function(){ga(C.callbackAnimation),i&&(J?J.progress(1):i.paused()?N||ga(i,C.direction<0,1):ga(i,i.reversed()))},C.labelToScroll=function(it){return i&&i.labels&&(It||C.refresh()||It)+i.labels[it]/i.duration()*Vt||0},C.getTrailing=function(it){var wt=le.indexOf(C),rt=C.direction>0?le.slice(0,wt).reverse():le.slice(wt+1);return(oi(it)?rt.filter(function(Lt){return Lt.vars.preventOverlaps===it}):rt).filter(function(Lt){return C.direction>0?Lt.end<=It:Lt.start>=j})},C.update=function(it,wt,rt){if(!(x&&!rt&&!it)){var Lt=Hn===!0?tt:C.scroll(),ue=it?0:(Lt-It)/Vt,ne=ue<0?0:ue>1?1:ue||0,Le=C.progress,Je,De,Ee,Se,en,Ae,Sn,jn;if(wt&&(Gt=Pt,Pt=x?Tt():Lt,v&&(Mt=xt,xt=i&&!N?i.totalProgress():ne)),p&&f&&!Cn&&!jl&&Mi&&(!ne&&It<Lt+(Lt-Gt)/(Rn()-_a)*p?ne=1e-4:ne===1&&j>Lt+(Lt-Gt)/(Rn()-_a)*p&&(ne=.9999)),ne!==Le&&C.enabled){if(Je=C.isActive=!!ne&&ne<1,De=!!Le&&Le<1,Ae=Je!==De,en=Ae||!!ne!=!!Le,C.direction=ne>Le?1:-1,C.progress=ne,en&&!Cn&&(Ee=ne&&!Le?0:ne===1?1:Le===1?2:3,N&&(Se=!Ae&&L[Ee+1]!=="none"&&L[Ee+1]||L[Ee],jn=i&&(Se==="complete"||Se==="reset"||Se in i))),P&&(Ae||jn)&&(jn||d||!i)&&(Pn(P)?P(C):C.getTrailing(P).forEach(function(ti){return ti.endAnimation()})),N||(J&&!Cn&&!jl?(J._dp._time-J._start!==J._time&&J.render(J._dp._time-J._start),J.resetTo?J.resetTo("totalProgress",ne,i._tTime/i._tDur):(J.vars.totalProgress=ne,J.invalidate().restart())):i&&i.totalProgress(ne,!!(Cn&&(et||it)))),f){if(it&&m&&(ae.style[m+A.os2]=qt),!k)_t(va(ge+Bt*ne));else if(en){if(Sn=!it&&ne>Le&&j+1>Lt&&Lt+1>=Yi(D,A),S)if(!it&&(Je||Sn)){var Ve=fr(f,!0),$e=Lt-It;Xm(f,Me,Ve.top+(A===Qe?$e:0)+on,Ve.left+(A===Qe?0:$e)+on)}else Xm(f,ae);po(Je||Sn?re:F),Y&&ne<1&&Je||_t(ge+(ne===1&&!Sn?Bt:0))}}v&&!ut.tween&&!Cn&&!jl&&U.restart(!0),a&&(Ae||b&&ne&&(ne<1||!pf))&&Ca(a.targets).forEach(function(ti){return ti.classList[Je||b?"add":"remove"](a.className)}),o&&!N&&!it&&o(C),en&&!Cn?(N&&(jn&&(Se==="complete"?i.pause().totalProgress(1):Se==="reset"?i.restart(!0).pause():Se==="restart"?i.restart(!0):i[Se]()),o&&o(C)),(Ae||!pf)&&(c&&Ae&&ao(C,c),V[Ee]&&ao(C,V[Ee]),b&&(ne===1?C.kill(!1,1):V[Ee]=0),Ae||(Ee=ne===1?1:3,V[Ee]&&ao(C,V[Ee]))),M&&!Je&&Math.abs(C.getVelocity())>(ya(M)?M:2500)&&(ga(C.callbackAnimation),J?J.progress(1):ga(i,Se==="reverse"?1:!ne,1))):N&&o&&!Cn&&o(C)}if(at){var nn=x?Lt/x.duration()*(x._caScrollDist||0):Lt;w(nn+(z._isFlipped?1:0)),at(nn)}vt&&vt(-Lt/x.duration()*(x._caScrollDist||0))}},C.enable=function(it,wt){C.enabled||(C.enabled=!0,un(D,"resize",Sa),I||un(D,"scroll",co),H&&un(r,"refreshInit",H),it!==!1&&(C.progress=pt=0,Pt=Gt=q=Tt()),wt!==!1&&C.refresh())},C.getTween=function(it){return it&&ut?ut.tween:J},C.setPositions=function(it,wt,rt,Lt){if(x){var ue=x.scrollTrigger,ne=x.duration(),Le=ue.end-ue.start;it=ue.start+Le*it/ne,wt=ue.start+Le*wt/ne}C.refresh(!1,!1,{start:Om(it,rt&&!!C._startClamp),end:Om(wt,rt&&!!C._endClamp)},Lt),C.update()},C.adjustPinSpacing=function(it){if(R&&it){var wt=R.indexOf(A.d)+1;R[wt]=parseFloat(R[wt])+it+on,R[1]=parseFloat(R[1])+it+on,po(R)}},C.disable=function(it,wt){if(it!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,wt||J&&J.pause(),tt=0,Nt&&(Nt.uncache=1),H&&hn(r,"refreshInit",H),U&&(U.pause(),ut.tween&&ut.tween.kill()&&(ut.tween=0)),!I)){for(var rt=le.length;rt--;)if(le[rt].scroller===D&&le[rt]!==C)return;hn(D,"resize",Sa),I||hn(D,"scroll",co)}},C.kill=function(it,wt){C.disable(it,wt),J&&!wt&&J.kill(),l&&delete bf[l];var rt=le.indexOf(C);rt>=0&&le.splice(rt,1),rt===Vn&&hc>0&&Vn--,rt=0,le.forEach(function(Lt){return Lt.scroller===C.scroller&&(rt=1)}),rt||Hn||Gr||(C.scroll.rec=0),i&&(i.scrollTrigger=null,it&&i.revert({kill:!1}),wt||i.kill()),ct&&[ct,lt,z,mt].forEach(function(Lt){return Lt.parentNode&&Lt.parentNode.removeChild(Lt)}),Aa===C&&(Aa=0),f&&(Nt&&(Nt.uncache=1),rt=0,le.forEach(function(Lt){return Lt.pin===f&&rt++}),rt||(Nt.spacer=0)),n.onKill&&n.onKill(C)},le.push(C),C.enable(!1,!1),ft&&ft(C),i&&i.add&&!Vt){var ot=C.update;C.update=function(){C.update=ot,se.cache++,It||j||C.refresh()},Ot.delayedCall(.01,C.update),Vt=.01,It=j=0}else C.refresh();f&&Gv()},r.register=function(n){return ho||(Ot=n||eg(),tg()&&window.document&&r.enable(),ho=xa),ho},r.defaults=function(n){if(n)for(var i in n)ic[i]=n[i];return ic},r.disable=function(n,i){xa=0,le.forEach(function(o){return o[i?"kill":"disable"](n)}),hn(ce,"wheel",co),hn(we,"scroll",co),clearInterval(Ql),hn(we,"touchcancel",qi),hn(Me,"touchstart",qi),ec(hn,we,"pointerdown,touchstart,mousedown",Fm),ec(hn,we,"pointerup,touchend,mouseup",Bm),dc.kill(),tc(hn);for(var s=0;s<se.length;s+=3)nc(hn,se[s],se[s+1]),nc(hn,se[s],se[s+2])},r.enable=function(){if(ce=window,we=document,ai=we.documentElement,Me=we.body,Ot){if(Ca=Ot.utils.toArray,Ma=Ot.utils.clamp,Sf=Ot.core.context||qi,df=Ot.core.suppressOverwrites||qi,Af=ce.history.scrollRestoration||"auto",wf=ce.pageYOffset||0,Ot.core.globals("ScrollTrigger",r),Me){xa=1,fo=document.createElement("div"),fo.style.height="100vh",fo.style.position="absolute",ug(),Nv(),qe.register(Ot),r.isTouch=qe.isTouch,kr=qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),yf=qe.isTouch===1,un(ce,"wheel",co),Ef=[ce,we,ai,Me],Ot.matchMedia?(r.matchMedia=function(h){var d=Ot.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ot.addEventListener("matchMediaInit",function(){cg(),Df()}),Ot.addEventListener("matchMediaRevert",function(){return lg()}),Ot.addEventListener("matchMedia",function(){bs(0,1),Rs("matchMedia")}),Ot.matchMedia().add("(orientation: portrait)",function(){return gf(),gf})):console.warn("Requires GSAP 3.11.0 or later"),gf(),un(we,"scroll",co);var n=Me.hasAttribute("style"),i=Me.style,s=i.borderTopStyle,o=Ot.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=fr(Me),Qe.m=Math.round(a.top+Qe.sc())||0,An.m=Math.round(a.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Me.setAttribute("style",""),Me.removeAttribute("style")),Ql=setInterval(Gm,250),Ot.delayedCall(.5,function(){return jl=0}),un(we,"touchcancel",qi),un(Me,"touchstart",qi),ec(un,we,"pointerdown,touchstart,mousedown",Fm),ec(un,we,"pointerup,touchend,mouseup",Bm),vf=Ot.utils.checkPrefix("transform"),uc.push(vf),ho=Rn(),dc=Ot.delayedCall(.2,bs).pause(),uo=[we,"visibilitychange",function(){var h=ce.innerWidth,d=ce.innerHeight;we.hidden?(Dm=h,Nm=d):(Dm!==h||Nm!==d)&&Sa()},we,"DOMContentLoaded",bs,ce,"load",bs,ce,"resize",Sa],tc(un),le.forEach(function(h){return h.enable(0,1)}),l=0;l<se.length;l+=3)nc(hn,se[l],se[l+1]),nc(hn,se[l],se[l+2])}else if(we){var c=function h(){r.enable(),we.removeEventListener("DOMContentLoaded",h)};we.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(pf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ql)||(Ql=i)&&setInterval(Gm,i),"ignoreMobileResize"in n&&(yf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(tc(hn)||tc(un,n.autoRefreshEvents||"none"),Km=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=kn(n),o=se.indexOf(s),a=As(s);~o&&se.splice(o,a?6:2),i&&(a?Pi.unshift(ce,i,Me,i,ai,i):Pi.unshift(s,i))},r.clearMatchMedia=function(n){le.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(oi(n)?kn(n):n).getBoundingClientRect(),a=o[s?ws:Ts]*i||0;return s?o.right-a>0&&o.left+a<ce.innerWidth:o.bottom-a>0&&o.top+a<ce.innerHeight},r.positionInViewport=function(n,i,s){oi(n)&&(n=kn(n));var o=n.getBoundingClientRect(),a=o[s?ws:Ts],l=i==null?a/2:i in mc?mc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ce.innerWidth:(o.top+l)/ce.innerHeight},r.killAll=function(n){if(le.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Cs.killAll||[];Cs={},i.forEach(function(s){return s()})}},r})();Yt.version="3.15.1";Yt.saveStyles=function(r){return r?Ca(r).forEach(function(t){if(t&&t.style){var e=si.indexOf(t);e>=0&&si.splice(e,5),si.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ot.core.getCache(t),Sf())}}):si};Yt.revert=function(r,t){return Df(!r,t)};Yt.create=function(r,t){return new Yt(r,t)};Yt.refresh=function(r){return r?Sa(!0):(ho||Yt.register())&&bs(!0)};Yt.update=function(r){return++se.cache&&dr(r===!0?2:0)};Yt.clearScrollMemory=hg;Yt.maxScroll=function(r,t){return Yi(r,t?An:Qe)};Yt.getScrollFunc=function(r,t){return hr(kn(r),t?An:Qe)};Yt.getById=function(r){return bf[r]};Yt.getAll=function(){return le.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Yt.isScrolling=function(){return!!Mi};Yt.snapDirectional=Lf;Yt.addEventListener=function(r,t){var e=Cs[r]||(Cs[r]=[]);~e.indexOf(t)||e.push(t)};Yt.removeEventListener=function(r,t){var e=Cs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Yt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ot.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),u.push(m),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Pn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Pn(s)&&(s=s(),un(Yt,"refresh",function(){return s=t.batchMax()})),Ca(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Yt.create(c))}),e};var Ym=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},xf=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(qe.isTouch?" pinch-zoom":""):"none",t===ai&&r(Me,e)},ac={auto:1,scroll:1},qv=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ot.core.getCache(s),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ac[(l=Si(s)).overflowY]||ac[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!As(s)&&(ac[(l=Si(s)).overflowY]||ac[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},dg=function(t,e,n,i){return qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&qv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(we,qe.eventTypes[0],Jm,!1,!0)},onDisable:function(){return hn(we,qe.eventTypes[0],Jm,!0)}})},Yv=/(input|label|select|textarea)/i,Zm,Jm=function(t){var e=Yv.test(t.target.tagName);(e||Zm)&&(t._gsapAllow=!0,Zm=e)},Zv=function(t){Ms(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=kn(t.target)||ai,h=Ot.core.globals().ScrollSmoother,d=h&&h.get(),u=kr&&(t.content&&kn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=hr(c,Qe),m=hr(c,An),_=1,p=(qe.isTouch&&ce.visualViewport?ce.visualViewport.scale*ce.visualViewport.width:ce.outerWidth)/ce.innerWidth,g=0,y=Pn(i)?function(){return i(a)}:function(){return i||2.8},b,v,S=dg(c,t.type,!0,s),E=function(){return v=!1},x=qi,M=qi,P=function(){l=Yi(c,Qe),M=Ma(kr?1:0,l),n&&(x=Ma(0,Yi(c,An))),b=Es},A=function(){u._gsap.y=va(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(v){requestAnimationFrame(E);var W=va(a.deltaY/2),B=M(f.v-W);if(u&&B!==f.v+f.offset){f.offset=B-f.v;var C=va((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",u._gsap.y=C+"px",f.cacheID=se.cache,dr()}return!0}f.offset&&A(),v=!0},D,G,I,k,V=function(){P(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return u&&Ot.set(u,{y:"+=0"}),t.ignoreCheck=function(L){return kr&&L.type==="touchmove"&&N(L)||_>1.05&&L.type!=="touchstart"||a.isGesturing||L.touches&&L.touches.length>1},t.onPress=function(){v=!1;var L=_;_=va((ce.visualViewport&&ce.visualViewport.scale||1)/p),D.pause(),L!==_&&xf(c,_>1.01?!0:n?!1:"x"),G=m(),I=f(),P(),b=Es},t.onRelease=t.onGestureStart=function(L,W){if(f.offset&&A(),!W)k.restart(!0);else{se.cache++;var B=y(),C,H;n&&(C=m(),H=C+B*.05*-L.velocityX/.227,B*=Ym(m,C,H,Yi(c,An)),D.vars.scrollX=x(H)),C=f(),H=C+B*.05*-L.velocityY/.227,B*=Ym(f,C,H,Yi(c,Qe)),D.vars.scrollY=M(H),D.invalidate().duration(B).play(.01),(kr&&D.vars.scrollY>=l||C>=l-1)&&Ot.to({},{onUpdate:V,duration:B})}o&&o(L)},t.onWheel=function(){D._ts&&D.pause(),Rn()-g>1e3&&(b=0,g=Rn())},t.onChange=function(L,W,B,C,H){if(Es!==b&&P(),W&&n&&m(x(C[2]===W?G+(L.startX-L.x):m()+W-C[1])),B){f.offset&&A();var dt=H[2]===B,bt=dt?I+L.startY-L.y:f()+B-H[1],q=M(bt);dt&&bt!==q&&(I+=q-bt),f(q)}(B||W)&&dr()},t.onEnable=function(){xf(c,n?!1:"x"),Yt.addEventListener("refresh",V),un(ce,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),S.enable()},t.onDisable=function(){xf(c,!0),hn(ce,"resize",V),Yt.removeEventListener("refresh",V),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new qe(t),a.iOS=kr,kr&&!f()&&f(1),kr&&Ot.ticker.add(qi),k=a._dc,D=Ot.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:fg(f,f(),function(){return D.pause()})},onUpdate:dr,onComplete:k.vars.onComplete}),a};Yt.sort=function(r){if(Pn(r))return le.sort(r);var t=ce.pageYOffset||0;return Yt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ce.innerHeight}),le.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Yt.observe=function(r){return new qe(r)};Yt.normalizeScroll=function(r){if(typeof r>"u")return Gn;if(r===!0&&Gn)return Gn.enable();if(r===!1){Gn&&Gn.kill(),Gn=r;return}var t=r instanceof qe?r:Zv(r);return Gn&&Gn.target===t.target&&Gn.kill(),As(t.target)&&(Gn=t),t};Yt.core={_getVelocityProp:Kl,_inputObserver:dg,_scrollers:se,_proxies:Pi,bridge:{ss:function(){Mi||Rs("scrollStart"),Mi=Rn()},ref:function(){return Cn}}};eg()&&Ot.registerPlugin(Yt);var Pa,Ia,pg=typeof Symbol=="function"?Symbol():"_split",Uf,Jv=()=>Uf||Vr.register(window.gsap),mg=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,La=r=>r?typeof r=="string"?La(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...La(e)):t.push(e),t),[]):[r]:[],gg=r=>La(r).filter(t=>t&&t.nodeType===1),_c=[],Nf=function(){},$v={add:r=>r()},Kv=/\s+/g,_g=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),xc={left:0,top:0,width:0,height:0},Qv=(r,t)=>{for(;++t<r.length&&r[t]===xc;);return r[t]||xc},xg=({element:r,html:t,ariaL:e,ariaH:n})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},vg=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||_c),n=r.length,i,s,o,a;if(e.size)for(;--n>-1;){s=r[n];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},yg=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),go=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),Of=(r,t,e)=>{let n=t[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let d=document.createElement(i),u=e.length+1;return n&&(d.className=n+(l?" "+n+u:"")),o&&d.style.setProperty("--"+r,u+""),s!=="none"&&d.setAttribute("aria-hidden","true"),i!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(n=n.replace("++","")),c.collection=e,c},jv=(r,t,e,n)=>{let i=Of("line",e,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},Sg=(r,t,e,n,i,s,o,a,l,c)=>{var h;let d=Array.from(r.childNodes),u=0,{wordDelimiter:f,reduceWhiteSpace:m=!0,prepareText:_}=t,p=r.getBoundingClientRect(),g=p,y=!m&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",b=s&&c&&window.getComputedStyle(r).direction==="rtl",v=0,S=e.collection,E,x,M,P,A,N,D,G,I,k,V,L,W,B,C,H,dt,bt;for(typeof f=="object"?(M=f.delimiter||f,x=f.replaceWith||""):x=f===""?"":f||" ",E=x!==" ";u<d.length;u++)if(P=d[u],P.nodeType===3){for(C=P.textContent||"",m?C=C.replace(Kv," "):y&&(C=C.replace(/\n/g,x+`
`)),_&&(C=_(C,r)),P.textContent=C,A=x||M?C.split(M||x):C.match(a)||_c,dt=A[A.length-1],G=E?dt.slice(-1)===" ":!dt,dt||A.pop(),g=p,D=E?A[0].charAt(0)===" ":!A[0],D&&go(" ",r,P),A[0]||A.shift(),vg(A,l),s&&c||(P.textContent=""),I=1;I<=A.length;I++)if(H=A[I-1],!m&&y&&H.charAt(0)===`
`&&((h=P.previousSibling)==null||h.remove(),go(document.createElement("br"),r,P),H=H.slice(1)),!m&&H==="")go(x,r,P);else if(H===" ")r.insertBefore(document.createTextNode(" "),P);else{if(E&&H.charAt(0)===" "&&go(" ",r,P),v&&I===1&&!D&&S.indexOf(v.parentNode)>-1?(N=S[S.length-1],N.appendChild(document.createTextNode(n?"":H))):(N=e(n?"":H),go(N,r,P),v&&I===1&&!D&&N.insertBefore(v,N.firstChild)),n){if(V=mg?vg([...mg.segment(H)].map(q=>q.segment),l):H.match(a)||_c,l){let q=H.match(l);q&&q.some(et=>V.indexOf(et)<0)&&(V=H.match(a)||_c)}for(bt=0;bt<V.length;bt++)N.appendChild(V[bt]===" "?document.createTextNode(" "):n(V[bt]))}if(s&&c){if(C=P.textContent=C.substring(H.length+1,C.length),k=N.getBoundingClientRect(),k.top>g.top&&(b?k.left>=g.left:k.left<=g.left)){for(L=r.cloneNode(),W=r.childNodes[0];W&&W!==N;)B=W,W=W.nextSibling,L.appendChild(B);r.parentNode.insertBefore(L,r),i&&yg(L)}g=k}(I<A.length||G)&&go(I>=A.length?" ":E&&H.slice(-1)===" "?" "+x:x,r,P)}r.removeChild(P),v=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(S.indexOf(P.previousSibling)>-1&&S[S.length-1].appendChild(P),v=P):(Sg(P,t,e,n,i,s,o,a,l,!0),v=0),i&&yg(P))},Mg=class bg{constructor(t,e){this.isSplit=!1,Jv(),this.elements=gg(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(s=>{var o;e.overwrite!==!1&&((o=s[pg])==null||o._data.orig.filter(({element:a})=>a===s).forEach(xg)),s[pg]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let s=n.length,o;for(;s--;){o=n[s];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},Nf(this),this.split(e)}split(t){return(this._ctx||$v).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,u=e.indexOf("words")>-1,f=d&&!u&&!h,m=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=m?new RegExp(m.source+"|"+_g.source,"gu"):_g,p=!!t.ignore&&gg(t.ignore),{orig:g,animTime:y,obs:b}=this._data,v;(d||u||h)&&(this.elements.forEach((S,E)=>{g[E]={element:S,html:S.innerHTML,ariaL:S.getAttribute("aria-label"),ariaH:S.getAttribute("aria-hidden")},n==="auto"?S.setAttribute("aria-label",(S.textContent||"").trim()):n==="hidden"&&S.setAttribute("aria-hidden","true");let x=[],M=[],P=[],A=d?Of("char",t,x):null,N=Of("word",t,M),D,G,I,k;if(Sg(S,t,N,A,f,i&&(h||f),p,_,m,!1),h){let V=La(S.childNodes),L=jv(S,V,t,P),W,B=[],C=0,H=window.getComputedStyle(S).direction==="rtl",dt=V.map(et=>et.nodeType===1?et.getBoundingClientRect():xc),bt=xc,q;for(D=0;D<V.length;D++)W=V[D],W.nodeType===1&&(W.nodeName==="BR"?((!D||V[D-1].nodeName!=="BR")&&(B.push(W),L(C,D+1)),C=D+1,bt=Qv(dt,D)):(q=dt[D],D&&q.top>bt.top&&(H?q.left+q.width>bt.left+1:q.left<bt.left+bt.width-1)&&(L(C,D),C=D),bt=q));C<D&&L(C,D),B.forEach(et=>{var pt;return(pt=et.parentNode)==null?void 0:pt.removeChild(et)})}if(!u){for(D=0;D<M.length;D++)if(G=M[D],d||!G.nextSibling||G.nextSibling.nodeType!==3)if(s&&!h){for(I=document.createElement("span"),I.style.whiteSpace="nowrap";G.firstChild;)I.appendChild(G.firstChild);G.replaceWith(I)}else G.replaceWith(...G.childNodes);else k=G.nextSibling,k&&k.nodeType===3&&(k.textContent=(G.textContent||"")+(k.textContent||""),G.remove());M.length=0,S.normalize()}this.lines.push(...P),this.words.push(...M),this.chars.push(...x)}),c&&this[c]&&this.masks.push(...this[c].map(S=>{let E=S.cloneNode();return S.replaceWith(E),E.appendChild(S),S.className&&(E.className=S.className.trim().split(" ").map(x=>x+"-mask").join(" ")),E.style.overflow="clip",E.style.verticalAlign="top",E}))),this.isSplit=!0,Ia&&h&&a&&Ia.addEventListener("loadingdone",this._split),(v=o&&o(this))&&v.totalTime&&(this._data.anim=y?v.totalTime(y):v),h&&a&&this.elements.forEach((S,E)=>{g[E].width=S.offsetWidth,b&&b.observe(S)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),Ia?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(xg),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new bg(t,e)}static register(t){Pa=Pa||t||window.gsap,Pa&&(La=Pa.utils.toArray,Nf=Pa.core.context||Nf),!Uf&&window.innerWidth>0&&(Ia=document.fonts,Uf=!0)}};Mg.version="3.15.1";var Vr=Mg;var wg="1.3.27";function Ag(r,t,e){return Math.max(r,Math.min(t,e))}function ty(r,t,e){return(1-e)*r+e*t}function ey(r,t,e,n){return ty(r,t,1-Math.exp(-e*n))}function ny(r,t){return(r%t+t)%t}var iy=class{constructor(){Wt(this,"isRunning",!1);Wt(this,"value",0);Wt(this,"from",0);Wt(this,"to",0);Wt(this,"currentTime",0);Wt(this,"lerp");Wt(this,"duration");Wt(this,"easing");Wt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=Ag(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=ey(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function ry(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var sy=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Wt(this,"width",0);Wt(this,"height",0);Wt(this,"scrollHeight",0);Wt(this,"scrollWidth",0);Wt(this,"debouncedResize");Wt(this,"wrapperResizeObserver");Wt(this,"contentResizeObserver");Wt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Wt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Wt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=ry(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Cg=class{constructor(){Wt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},oy=100/6,Hr={passive:!1};function Tg(r,t){return r===1?oy:r===2?t:1}var ay=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Wt(this,"touchStart",{x:0,y:0});Wt(this,"lastDelta",{x:0,y:0});Wt(this,"window",{width:0,height:0});Wt(this,"emitter",new Cg);Wt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Wt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Wt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Wt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=Tg(n,this.window.width),s=Tg(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Wt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Hr),this.element.addEventListener("touchstart",this.onTouchStart,Hr),this.element.addEventListener("touchmove",this.onTouchMove,Hr),this.element.addEventListener("touchend",this.onTouchEnd,Hr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Hr),this.element.removeEventListener("touchstart",this.onTouchStart,Hr),this.element.removeEventListener("touchmove",this.onTouchMove,Hr),this.element.removeEventListener("touchend",this.onTouchEnd,Hr)}},Eg=r=>Math.min(1,1.001-2**(-10*r)),Rg=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:y=!0,autoRaf:b=!1,anchors:v=!1,autoToggle:S=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:M=x,stopInertiaOnNavigate:P=!1,respectReducedMotion:A=!0}={}){Wt(this,"_isScrolling",!1);Wt(this,"_isStopped",!1);Wt(this,"_isLocked",!1);Wt(this,"_preventNextNativeScrollEvent",!1);Wt(this,"_resetVelocityTimeout",null);Wt(this,"_rafId",null);Wt(this,"_isDraggingSelection",!1);Wt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Wt(this,"isTouching");Wt(this,"isIos");Wt(this,"time",0);Wt(this,"userData",{});Wt(this,"lastVelocity",0);Wt(this,"velocity",0);Wt(this,"direction",0);Wt(this,"options");Wt(this,"targetScroll");Wt(this,"animatedScroll");Wt(this,"animate",new iy);Wt(this,"emitter",new Cg);Wt(this,"dimensions");Wt(this,"virtualScroll");Wt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Wt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Wt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Wt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Wt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Wt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Wt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Wt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=wg,window.lenis||(window.lenis={}),window.lenis.version=wg,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Eg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:y,autoRaf:b,anchors:v,autoToggle:S,allowNestedScroll:E,naiveDimensions:M,stopInertiaOnNavigate:P,respectReducedMotion:A},this.dimensions=new sy(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new ay(e,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(m=u),m){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),y=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(b)?0:b)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=Ag(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Eg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,d,u,f,m;if(n-(i.time??0)>2e3){i.time=Date.now();let E=window.getComputedStyle(r);if(i.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),h=["auto"].includes(E.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,m=r.clientHeight,a=d>f,l=u>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,y,b,v,S;if(_==="horizontal")p=Math.round(r.scrollLeft),g=d-f,y=t,b=s,v=a,S=c;else if(_==="vertical")p=Math.round(r.scrollTop),g=u-m,y=e,b=o,v=l,S=h;else return!1;return!S&&(p>=g||p<=0)?!0:(y>0?p<g:p>0)&&b&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?ny(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};ee.registerPlugin(Yt,Vr);Yt.config({ignoreMobileResize:!0});var ve=(r,t=document)=>t.querySelector(r),Wr=(r,t=document)=>[...t.querySelectorAll(r)],Xr=document.documentElement,Ze=Xr.classList.contains("reduce"),_o=Xr.classList.contains("fine");function Pg(){if(Ze)return null;let r=new Rg({lerp:.1,anchors:!0});return r.on("scroll",Yt.update),ee.ticker.add(t=>r.raf(t*1e3)),ee.ticker.lagSmoothing(0),r}function Ig(){let r=ve("[data-nav]");r&&Yt.create({start:0,end:"max",onUpdate:t=>r.classList.toggle("is-away",t.direction===1&&t.scroll()>140&&!r.contains(document.activeElement))})}function Lg(r,t){let e=ve("[data-curtain]"),n=ve("[data-count]"),i=!0;try{i=!sessionStorage.getItem("lz-seen"),sessionStorage.setItem("lz-seen","1")}catch{}if(Xr.classList.add("ready"),Ze){e.style.display="none",t();return}let s=Promise.race([Promise.all([document.fonts.ready,r]),new Promise(a=>setTimeout(a,3500))]),o=()=>{t(),ee.timeline().to(n,{yPercent:-30,opacity:0,duration:.45,ease:"power3.in"},0).to(e,{yPercent:-100,duration:.95,ease:"expo.inOut"},.1).set(e,{display:"none"})};if(i){let a={v:0};ee.to(a,{v:100,duration:1.4,ease:"power2.inOut",onUpdate(){n.textContent=Math.round(a.v),n.style.fontStretch=50+a.v+"%"},onComplete(){s.then(o)}})}else n.textContent="",s.then(o)}function Dg(){let r=ve("[data-curtain]"),t=ve("[data-count]");document.addEventListener("click",e=>{let n=e.target.closest&&e.target.closest("a[href]");if(!n||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||n.target==="_blank"||Ze)return;let i=new URL(n.href,location.href);i.protocol!==location.protocol||i.host!==location.host||i.pathname===location.pathname||(e.preventDefault(),t.textContent="",ee.killTweensOf(r),ee.set(r,{display:"flex",yPercent:100}),ee.to(r,{yPercent:0,duration:.6,ease:"expo.inOut",onComplete(){location.href=n.href}}))}),window.addEventListener("pageshow",e=>{e.persisted&&ee.set(r,{display:"none"})})}function Ff(r,t={}){Ze||!r||Vr.create(r,{type:"lines",mask:"lines",autoSplit:!0,onSplit:e=>ee.from(e.lines,{yPercent:108,duration:1.15,ease:"expo.out",stagger:.09,...t})})}function Ng(r,t={}){if(Ze||!r)return null;let e=Vr.create(r,{type:"words,chars",wordsClass:"word",charsClass:"char"});return ee.from(e.chars,{rotationX:-92,yPercent:38,opacity:0,transformOrigin:"50% 100% -0.35em",duration:1.1,ease:"expo.out",stagger:.045,...t})}var l_=0,xd=1,c_=2;var hl=1,h_=2,Vo=3,ss=0,yn=1,Ai=2,ks=0,Ho=1,vd=2,yd=3,Sd=4,u_=5;var Gs=100,f_=101,d_=102,p_=103,m_=104,g_=200,__=201,x_=202,v_=203,Md=204,bd=205,y_=206,S_=207,M_=208,b_=209,w_=210,T_=211,E_=212,A_=213,C_=214,Hc=0,Wc=1,Xc=2,Lo=3,qc=4,Yc=5,Zc=6,Jc=7,wd=0,R_=1,P_=2,Qn=0,Td=1,Ed=2,Ad=3,Cd=4,Rd=5,Pd=6,Id=7;var Ld=300,Vs=301,Wo=302,Ch=303,Rh=304,Do=1e3,Ji=1001,$c=1002,dn=1003,I_=1004;var ul=1005;var vn=1006,Ph=1007;var Ui=1008;var mi=1009,Dd=1010,Nd=1011,Xo=1012,Ih=1013,Oi=1014,Fi=1015,Bi=1016,Lh=1017,Dh=1018,Hs=1020,Ud=35902,Od=35899,Fd=1021,Bd=1022,zi=1023,yr=1026,wr=1027,zd=1028,Nh=1029,os=1030,Uh=1031;var Oh=1033,fl=33776,dl=33777,pl=33778,ml=33779,Fh=35840,Bh=35841,zh=35842,kh=35843,Gh=36196,Vh=37492,Hh=37496,Wh=37488,Xh=37489,gl=37490,qh=37491,Yh=37808,Zh=37809,Jh=37810,$h=37811,Kh=37812,Qh=37813,jh=37814,tu=37815,eu=37816,nu=37817,iu=37818,ru=37819,su=37820,ou=37821,au=36492,lu=36494,cu=36495,hu=36283,uu=36284,_l=36285,fu=36286;var ka=2300,Kc=2301,Gc=2302,ld=2303,cd=2400,hd=2401,ud=2402;var L_=3200;var du=0,D_=1,Tr="",hi="srgb",Ga="srgb-linear",Va="linear",be="srgb";var Vc=7680;var N_=519,U_=512,O_=513,F_=514,kd=515,B_=516,z_=517,Gd=518,Vd=519,k_=35044;var Hd="300 es",wi=2e3,Ha=2001;function ly(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Wa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function G_(){let r=Wa("canvas");return r.style.display="block",r}var Ug={},No=null;function Wd(...r){let t="THREE."+r.shift();No?No("log",t,...r):console.log(t,...r)}function V_(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Zt(...r){r=V_(r);let t="THREE."+r.shift();if(No)No("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function $t(...r){r=V_(r);let t="THREE."+r.shift();if(No)No("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Us(...r){let t=r.join(" ");t in Ug||(Ug[t]=!0,Zt(...r))}function H_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var W_={[Hc]:Hc,[Xc]:Zc,[qc]:qc,[Lo]:Yc,[Wc]:Wc,[Zc]:Xc,[Jc]:Jc,[Yc]:Lo},Ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Bf=Math.PI/180,Qc=180/Math.PI;function qo(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function he(r,t,e){return Math.max(t,Math.min(e,r))}function hy(r,t){return(r%t+t)%t}function zf(r,t,e){return(1-e)*r+e*t}function X_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xd(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uy(r,t){if(t.constructor===Float32Array)return r;let e=Xd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function fy(r,t){if(t.constructor===Float32Array)return r;let e=Xd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var Kd=class Kd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kd.prototype.isVector2=!0;var Ct=Kd,Qi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let y=Math.acos(p),b=Math.sin(y);g=Math.sin(g*y)/b,a=Math.sin(a*y)/b,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qd=class Qd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Og.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Og.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kf.copy(this).projectOnVector(t),this.sub(kf)}reflect(t){return this.sub(kf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qd.prototype.isVector3=!0;var Z=Qd,kf=new Z,Og=new Qi,jd=class jd{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],y=i[1],b=i[4],v=i[7],S=i[2],E=i[5],x=i[8];return s[0]=o*_+a*y+l*S,s[3]=o*p+a*b+l*E,s[6]=o*g+a*v+l*x,s[1]=c*_+h*y+d*S,s[4]=c*p+h*b+d*E,s[7]=c*g+h*v+d*x,s[2]=u*_+f*y+m*S,s[5]=u*p+f*b+m*E,s[8]=u*g+f*v+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gf.makeScale(t,e)),this}rotate(t){return Us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gf.makeRotation(-t)),this}translate(t,e){return Us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};jd.prototype.isMatrix3=!0;var te=jd,Gf=new te,Fg=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bg=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dy(){let r={enabled:!0,workingColorSpace:Ga,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===be&&(i.r=vr(i.r),i.g=vr(i.g),i.b=vr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(i.r=Io(i.r),i.g=Io(i.g),i.b=Io(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Tr?Va:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ga]:{primaries:t,whitePoint:n,transfer:Va,toXYZ:Fg,fromXYZ:Bg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:n,transfer:be,toXYZ:Fg,fromXYZ:Bg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),r}var me=dy();function vr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var xo,jc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xo===void 0&&(xo=Wa("canvas")),xo.width=t.width,xo.height=t.height;let i=xo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=xo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=vr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vr(e[n]/255)*255):e[n]=vr(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},py=0,Uo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=qo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vf(i[o].image)):s.push(Vf(i[o]))}else s=Vf(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Vf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var my=0,Hf=new Z,Xn=class r extends Ki{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Ji,i=Ji,s=vn,o=Ui,a=zi,l=mi,c=r.DEFAULT_ANISOTROPY,h=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=qo(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hf).x}get height(){return this.source.getSize(Hf).y}get depth(){return this.source.getSize(Hf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ld)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Do:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case $c:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Do:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case $c:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Ld;Xn.DEFAULT_ANISOTROPY=1;var tp=class tp{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,v=(f+1)/2,S=(g+1)/2,E=(h+u)/4,x=(d+_)/4,M=(m+p)/4;return b>v&&b>S?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=E/n,s=x/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=M/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=x/s,i=M/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tp.prototype.isVector4=!0;var Ge=tp,th=class extends Ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Xn({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Uo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends th{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xa=class extends Xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var eh=class extends Xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ah=class Ah{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,p)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ah().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/vo.setFromMatrixColumn(t,0).length(),s=1/vo.setFromMatrixColumn(t,1).length(),o=1/vo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gy,t,_y)}lookAt(t,e,n){let i=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),qr.crossVectors(n,li),qr.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),qr.crossVectors(n,li)),qr.normalize(),vc.crossVectors(li,qr),i[0]=qr.x,i[4]=vc.x,i[8]=li.x,i[1]=qr.y,i[5]=vc.y,i[9]=li.y,i[2]=qr.z,i[6]=vc.z,i[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],b=n[7],v=n[11],S=n[15],E=i[0],x=i[4],M=i[8],P=i[12],A=i[1],N=i[5],D=i[9],G=i[13],I=i[2],k=i[6],V=i[10],L=i[14],W=i[3],B=i[7],C=i[11],H=i[15];return s[0]=o*E+a*A+l*I+c*W,s[4]=o*x+a*N+l*k+c*B,s[8]=o*M+a*D+l*V+c*C,s[12]=o*P+a*G+l*L+c*H,s[1]=h*E+d*A+u*I+f*W,s[5]=h*x+d*N+u*k+f*B,s[9]=h*M+d*D+u*V+f*C,s[13]=h*P+d*G+u*L+f*H,s[2]=m*E+_*A+p*I+g*W,s[6]=m*x+_*N+p*k+g*B,s[10]=m*M+_*D+p*V+g*C,s[14]=m*P+_*G+p*L+g*H,s[3]=y*E+b*A+v*I+S*W,s[7]=y*x+b*N+v*k+S*B,s[11]=y*M+b*D+v*V+S*C,s[15]=y*P+b*G+v*L+S*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],y=l*f-c*u,b=a*f-c*d,v=a*u-l*d,S=o*f-c*h,E=o*u-l*h,x=o*d-a*h;return e*(_*y-p*b+g*v)-n*(m*y-p*S+g*E)+i*(m*b-_*S+g*x)-s*(m*v-_*E+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],y=e*a-n*o,b=e*l-i*o,v=e*c-s*o,S=n*l-i*a,E=n*c-s*a,x=i*c-s*l,M=h*_-d*m,P=h*p-u*m,A=h*g-f*m,N=d*p-u*_,D=d*g-f*_,G=u*g-f*p,I=y*G-b*D+v*N+S*A-E*P+x*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return t[0]=(a*G-l*D+c*N)*k,t[1]=(i*D-n*G-s*N)*k,t[2]=(_*x-p*E+g*S)*k,t[3]=(u*E-d*x-f*S)*k,t[4]=(l*A-o*G-c*P)*k,t[5]=(e*G-i*A+s*P)*k,t[6]=(p*v-m*x-g*b)*k,t[7]=(h*x-u*v+f*b)*k,t[8]=(o*D-a*A+c*M)*k,t[9]=(n*A-e*D-s*M)*k,t[10]=(m*E-_*v+g*y)*k,t[11]=(d*v-h*E-f*y)*k,t[12]=(a*P-o*N-l*M)*k,t[13]=(e*N-n*P+i*M)*k,t[14]=(_*b-m*S-p*y)*k,t[15]=(h*S-d*b+u*y)*k,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,m=s*d,_=o*h,p=o*d,g=a*d,y=l*c,b=l*h,v=l*d,S=n.x,E=n.y,x=n.z;return i[0]=(1-(_+g))*S,i[1]=(f+v)*S,i[2]=(m-b)*S,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(u+g))*E,i[6]=(p+y)*E,i[7]=0,i[8]=(m+b)*x,i[9]=(p-y)*x,i[10]=(1-(u+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=vo.set(i[0],i[1],i[2]).length(),a=vo.set(i[4],i[5],i[6]).length(),l=vo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ii.copy(this);let c=1/o,h=1/a,d=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=d,Ii.elements[9]*=d,Ii.elements[10]*=d,e.setFromRotationMatrix(Ii),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=wi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===wi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ha)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=wi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===wi)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ha)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ah.prototype.isMatrix4=!0;var ke=Ah,vo=new Z,Ii=new ke,gy=new Z(0,0,0),_y=new Z(1,1,1),qr=new Z,vc=new Z,li=new Z,zg=new ke,kg=new Qi,Sr=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kg.setFromEuler(this),this.setFromQuaternion(kg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sr.DEFAULT_ORDER="XYZ";var qa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xy=0,Gg=new Z,yo=new Qi,pr=new ke,yc=new Z,Da=new Z,vy=new Z,yy=new Qi,Vg=new Z(1,0,0),Hg=new Z(0,1,0),Wg=new Z(0,0,1),Xg={type:"added"},Sy={type:"removed"},So={type:"childadded",child:null},Wf={type:"childremoved",child:null},Ei=class r extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Z,e=new Sr,n=new Qi,i=new Z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new te}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yo.setFromAxisAngle(t,e),this.quaternion.multiply(yo),this}rotateOnWorldAxis(t,e){return yo.setFromAxisAngle(t,e),this.quaternion.premultiply(yo),this}rotateX(t){return this.rotateOnAxis(Vg,t)}rotateY(t){return this.rotateOnAxis(Hg,t)}rotateZ(t){return this.rotateOnAxis(Wg,t)}translateOnAxis(t,e){return Gg.copy(t).applyQuaternion(this.quaternion),this.position.add(Gg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vg,t)}translateY(t){return this.translateOnAxis(Hg,t)}translateZ(t){return this.translateOnAxis(Wg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yc.copy(t):yc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Da,yc,this.up):pr.lookAt(yc,Da,this.up),this.quaternion.setFromRotationMatrix(pr),i&&(pr.extractRotation(i.matrixWorld),yo.setFromRotationMatrix(pr),this.quaternion.premultiply(yo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xg),So.child=t,this.dispatchEvent(So),So.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sy),Wf.child=t,this.dispatchEvent(Wf),Wf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pr.multiply(t.parent.matrixWorld)),t.applyMatrix4(pr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xg),So.child=t,this.dispatchEvent(So),So.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,t,vy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,yy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ei.DEFAULT_UP=new Z(0,1,0);Ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $i=class extends Ei{constructor(){super(),this.isGroup=!0,this.type="Group"}},My={type:"move"},Oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(My)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Xf(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=hy(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Xf(o,s,t+1/3),this.g=Xf(o,s,t),this.b=Xf(o,s,t-1/3)}return me.colorSpaceToWorking(this,i),this}setStyle(t,e=hi){function n(s){s!==void 0&&parseFloat(s)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hi){let n=q_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return me.workingToColorSpace(Ln.copy(this),t),Math.round(he(Ln.r*255,0,255))*65536+Math.round(he(Ln.g*255,0,255))*256+Math.round(he(Ln.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,i=Ln.g,s=Ln.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=hi){me.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,i=Ln.b;return t!==hi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Yr),this.setHSL(Yr.h+t,Yr.s+e,Yr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yr),t.getHSL(Sc);let n=zf(Yr.h,Sc.h,e),i=zf(Yr.s,Sc.s,e),s=zf(Yr.l,Sc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new jt;jt.NAMES=q_;var Qr=class extends Ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Li=new Z,mr=new Z,qf=new Z,gr=new Z,Mo=new Z,bo=new Z,qg=new Z,Yf=new Z,Zf=new Z,Jf=new Z,$f=new Ge,Kf=new Ge,Qf=new Ge,Kr=class r{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Li.subVectors(t,e),i.cross(Li);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Li.subVectors(i,e),mr.subVectors(n,e),qf.subVectors(t,e);let o=Li.dot(Li),a=Li.dot(mr),l=Li.dot(qf),c=mr.dot(mr),h=mr.dot(qf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,gr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gr.x),l.addScaledVector(o,gr.y),l.addScaledVector(a,gr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return $f.setScalar(0),Kf.setScalar(0),Qf.setScalar(0),$f.fromBufferAttribute(t,e),Kf.fromBufferAttribute(t,n),Qf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector($f,s.x),o.addScaledVector(Kf,s.y),o.addScaledVector(Qf,s.z),o}static isFrontFacing(t,e,n,i){return Li.subVectors(n,e),mr.subVectors(t,e),Li.cross(mr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Li.cross(mr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Mo.subVectors(i,n),bo.subVectors(s,n),Yf.subVectors(t,n);let l=Mo.dot(Yf),c=bo.dot(Yf);if(l<=0&&c<=0)return e.copy(n);Zf.subVectors(t,i);let h=Mo.dot(Zf),d=bo.dot(Zf);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Mo,o);Jf.subVectors(t,s);let f=Mo.dot(Jf),m=bo.dot(Jf);if(m>=0&&f<=m)return e.copy(s);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(bo,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return qg.subVectors(s,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(qg,a);let g=1/(p+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(Mo,o).addScaledVector(bo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jr=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Di):Di.fromBufferAttribute(s,o),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mc.copy(n.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Na),bc.subVectors(this.max,Na),wo.subVectors(t.a,Na),To.subVectors(t.b,Na),Eo.subVectors(t.c,Na),Zr.subVectors(To,wo),Jr.subVectors(Eo,To),Ps.subVectors(wo,Eo);let e=[0,-Zr.z,Zr.y,0,-Jr.z,Jr.y,0,-Ps.z,Ps.y,Zr.z,0,-Zr.x,Jr.z,0,-Jr.x,Ps.z,0,-Ps.x,-Zr.y,Zr.x,0,-Jr.y,Jr.x,0,-Ps.y,Ps.x,0];return!jf(e,wo,To,Eo,bc)||(e=[1,0,0,0,1,0,0,0,1],!jf(e,wo,To,Eo,bc))?!1:(wc.crossVectors(Zr,Jr),e=[wc.x,wc.y,wc.z],jf(e,wo,To,Eo,bc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_r),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_r=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Di=new Z,Mc=new jr,wo=new Z,To=new Z,Eo=new Z,Zr=new Z,Jr=new Z,Ps=new Z,Na=new Z,bc=new Z,wc=new Z,Is=new Z;function jf(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Is.fromArray(r,s);let a=i.x*Math.abs(Is.x)+i.y*Math.abs(Is.y)+i.z*Math.abs(Is.z),l=t.dot(Is),c=e.dot(Is),h=n.dot(Is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var tn=new Z,Tc=new Ct,by=0,Ti=class extends Ki{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:by++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=k_,this.updateRanges=[],this.gpuType=Fi,this.version=0,this._normalizationScale=t!==void 0?Xd(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tc.fromBufferAttribute(this,e),Tc.applyMatrix3(t),this.setXY(e,Tc.x,Tc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):uy(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):fy(t,this.array)}};var Ya=class extends Ti{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Za=class extends Ti{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Wn=class extends Ti{constructor(t,e,n){super(new Float32Array(t),e,n)}},wy=new jr,Ua=new Z,td=new Z,Fo=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wy.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ua.subVectors(t,this.center);let e=Ua.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ua,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(td.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ua.copy(t.center).add(td)),this.expandByPoint(Ua.copy(t.center).sub(td))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ty=0,bi=new ke,ed=new Ei,Ao=new Z,ci=new jr,Oa=new jr,fn=new Z,ji=class r extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ly(t)?Za:Ya)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,e,n){return bi.makeTranslation(t,e,n),this.applyMatrix4(bi),this}scale(t,e,n){return bi.makeScale(t,e,n),this.applyMatrix4(bi),this}lookAt(t){return ed.lookAt(t),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Oa.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(ci.min,Oa.min),ci.expandByPoint(fn),fn.addVectors(ci.max,Oa.max),ci.expandByPoint(fn)):(ci.expandByPoint(Oa.min),ci.expandByPoint(Oa.max))}ci.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)fn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(fn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)fn.fromBufferAttribute(a,c),l&&(Ao.fromBufferAttribute(t,c),fn.add(Ao)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ti(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new Z,l[P]=new Z;let h=new Z,d=new Z,u=new Z,f=new Ct,m=new Ct,_=new Ct,p=new Z,g=new Z;function y(P,A,N){c[P]=c[A]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,N),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,N),d.sub(h),u.sub(h),m.sub(f),_.sub(f);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(D),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(D),a[P].add(p),a[A].add(p),a[N].add(p),l[P].add(g),l[A].add(g),l[N].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,A=b.length;P<A;++P){let N=b[P],D=N.start,G=N.count;for(let I=D,k=D+G;I<k;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new Z,S=new Z,E=new Z,x=new Z;function M(P){E.fromBufferAttribute(i,P),x.copy(E);let A=a[P];v.copy(A),v.sub(E.multiplyScalar(E.dot(A))).normalize(),S.crossVectors(x,A);let D=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,D)}for(let P=0,A=n.count;P<A;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ti(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,h=new Z,d=new Z;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Ti(u,h,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nd=new Z,Ey=new Z,Ay=new te,Ni=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=nd.subVectors(n,e).cross(Ey.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(nd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ay.getNormalMatrix(t),i=this.coplanarPoint(nd).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cy=0,ts=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Ho,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=bd,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vc,this.stencilZFail=Vc,this.stencilZPass=Vc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var xr=new Z,id=new Z,Ec=new Z,Ac=new Z,nh=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xr.copy(this.origin).addScaledVector(this.direction,e),xr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){id.copy(t).add(e).multiplyScalar(.5),Ec.copy(e).sub(t).normalize(),Ac.copy(this.origin).sub(id);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ec),a=Ac.dot(this.direction),l=-Ac.dot(Ec),c=Ac.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=s*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(id).addScaledVector(Ec,u),f}intersectSphere(t,e){if(t.radius<0)return null;xr.subVectors(t.center,this.origin);let n=xr.dot(this.direction),i=xr.dot(xr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,y=n.y-o.y,b=n.z-o.z,v=Math.abs(l),S=Math.abs(c),E=Math.abs(h),x,M,P,A,N,D,G,I,k,V,L,W;if(v>=S&&v>=E?(P=l,D=d,k=m,W=g,l>=0?(x=c,M=h,A=u,N=f,G=_,I=p,V=y,L=b):(x=h,M=c,A=f,N=u,G=p,I=_,V=b,L=y)):S>=E?(P=c,D=u,k=_,W=y,c>=0?(x=h,M=l,A=f,N=d,G=p,I=m,V=b,L=g):(x=l,M=h,A=d,N=f,G=m,I=p,V=g,L=b)):(P=h,D=f,k=p,W=b,h>=0?(x=l,M=c,A=d,N=u,G=m,I=_,V=g,L=y):(x=c,M=l,A=u,N=d,G=_,I=m,V=y,L=g)),P===0)return null;let B=x/P,C=M/P,H=1/P,dt=A-B*D,bt=N-C*D,q=G-B*k,et=I-C*k,pt=V-B*W,Tt=L-C*W,ut=pt*et-Tt*q,Nt=dt*Tt-bt*pt,fe=q*bt-et*dt;if(i){if(ut<0||Nt<0||fe<0)return null}else if((ut<0||Nt<0||fe<0)&&(ut>0||Nt>0||fe>0))return null;let Pt=ut+Nt+fe;if(Pt===0)return null;let Gt=H*(ut*D+Nt*k+fe*W);return(Pt>0?Gt<0:Gt>0)?null:this.at(Gt/Pt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Os=class extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yg=new ke,Ls=new nh,Cc=new Fo,Zg=new Z,Rc=new Z,Pc=new Z,Ic=new Z,rd=new Z,Lc=new Z,Jg=new Z,Dc=new Z,Dn=class extends Ei{constructor(t=new ji,e=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Lc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(rd.fromBufferAttribute(d,t),o?Lc.addScaledVector(rd,h):Lc.addScaledVector(rd.sub(e),h))}e.add(Lc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cc.copy(n.boundingSphere),Cc.applyMatrix4(s),Ls.copy(t.ray).recast(t.near),!(Cc.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Cc,Zg)===null||Ls.origin.distanceToSquared(Zg)>(t.far-t.near)**2))&&(Yg.copy(s).invert(),Ls.copy(t.ray).applyMatrix4(Yg),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,S=b;v<S;v+=3){let E=a.getX(v),x=a.getX(v+1),M=a.getX(v+2);i=Nc(this,g,t,n,c,h,d,E,x,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let y=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);i=Nc(this,o,t,n,c,h,d,y,b,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,S=b;v<S;v+=3){let E=v,x=v+1,M=v+2;i=Nc(this,g,t,n,c,h,d,E,x,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let y=p,b=p+1,v=p+2;i=Nc(this,o,t,n,c,h,d,y,b,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function Ry(r,t,e,n,i,s,o,a){let l;if(t.side===yn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ss,a),l===null)return null;Dc.copy(a),Dc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Dc);return c<e.near||c>e.far?null:{distance:c,point:Dc.clone(),object:r}}function Nc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Rc),r.getVertexPosition(l,Pc),r.getVertexPosition(c,Ic);let h=Ry(r,t,e,n,Rc,Pc,Ic,Jg);if(h){let d=new Z;Kr.getBarycoord(Jg,Rc,Pc,Ic,d),i&&(h.uv=Kr.getInterpolatedAttribute(i,a,l,c,d,new Ct)),s&&(h.uv1=Kr.getInterpolatedAttribute(s,a,l,c,d,new Ct)),o&&(h.normal=Kr.getInterpolatedAttribute(o,a,l,c,d,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new Z,materialIndex:0};Kr.getNormal(Rc,Pc,Ic,u.normal),h.face=u,h.barycoord=d}return h}var ih=class extends Xn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=dn,h=dn,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ds=new Fo,Py=new Ct(.5,.5),Uc=new Z,Fs=class{constructor(t=new Ni,e=new Ni,n=new Ni,i=new Ni,s=new Ni,o=new Ni){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],_=s[9],p=s[10],g=s[11],y=s[12],b=s[13],v=s[14],S=s[15];if(i[0].setComponents(c-o,f-h,g-m,S-y).normalize(),i[1].setComponents(c+o,f+h,g+m,S+y).normalize(),i[2].setComponents(c+a,f+d,g+_,S+b).normalize(),i[3].setComponents(c-a,f-d,g-_,S-b).normalize(),n)i[4].setComponents(l,u,p,v).normalize(),i[5].setComponents(c-l,f-u,g-p,S-v).normalize();else if(i[4].setComponents(c-l,f-u,g-p,S-v).normalize(),e===wi)i[5].setComponents(c+l,f+u,g+p,S+v).normalize();else if(e===Ha)i[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);let e=Py.distanceTo(t.center);return Ds.radius=.7071067811865476+e,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Uc.x=i.normal.x>0?t.max.x:t.min.x,Uc.y=i.normal.y>0?t.max.y:t.min.y,Uc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$g=new ke,rh=class r{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];$g.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Fs),n[i].setFromProjectionMatrix($g,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Fs),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Ja=class extends Xn{constructor(t=[],e=Vs,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$a=class extends Xn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Mr=class extends Xn{constructor(t,e,n=Oi,i,s,o,a=dn,l=dn,c,h=yr,d=1){if(h!==yr&&h!==wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ka=class extends Mr{constructor(t,e=Oi,n=Vs,i,s,o=dn,a=dn,l,c=yr){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Qa=class extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},es=class r extends ji{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(h,3)),this.setAttribute("uv",new Wn(d,2));function m(_,p,g,y,b,v,S,E,x,M,P){let A=v/x,N=S/M,D=v/2,G=S/2,I=E/2,k=x+1,V=M+1,L=0,W=0,B=new Z;for(let C=0;C<V;C++){let H=C*N-G;for(let dt=0;dt<k;dt++){let bt=dt*A-D;B[_]=bt*y,B[p]=H*b,B[g]=I,c.push(B.x,B.y,B.z),B[_]=0,B[p]=0,B[g]=E>0?1:-1,h.push(B.x,B.y,B.z),d.push(dt/x),d.push(1-C/M),L+=1}}for(let C=0;C<M;C++)for(let H=0;H<x;H++){let dt=u+H+k*C,bt=u+H+k*(C+1),q=u+(H+1)+k*(C+1),et=u+(H+1)+k*C;l.push(dt,bt,et),l.push(bt,q,et),W+=6}a.addGroup(f,W,P),f+=W,u+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Ct:new Z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Z,i=[],s=[],o=[],a=new Z,l=new ke;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new Z)}s[0]=new Z,o[0]=new Z;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(he(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(he(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Bo=class extends fi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ct){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sh=class extends Bo{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function qd(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var Kg=new Z,Qg=new Z,sd=new qd,od=new qd,ad=new qd,oh=class extends fi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new Z){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Qg.subVectors(i[0],i[1]).add(i[0]),c=Qg);let d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Kg.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Kg),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),sd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,_,p),od.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,_,p),ad.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(sd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),od.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ad.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(sd.calc(l),od.calc(l),ad.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Z().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function jg(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Iy(r,t){let e=1-r;return e*e*t}function Ly(r,t){return 2*(1-r)*r*t}function Dy(r,t){return r*r*t}function Ba(r,t,e,n){return Iy(r,t)+Ly(r,e)+Dy(r,n)}function Ny(r,t){let e=1-r;return e*e*e*t}function Uy(r,t){let e=1-r;return 3*e*e*r*t}function Oy(r,t){return 3*(1-r)*r*r*t}function Fy(r,t){return r*r*r*t}function za(r,t,e,n,i){return Ny(r,t)+Uy(r,e)+Oy(r,n)+Fy(r,i)}var ja=class extends fi{constructor(t=new Ct,e=new Ct,n=new Ct,i=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ct){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(za(t,i.x,s.x,o.x,a.x),za(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ah=class extends fi{constructor(t=new Z,e=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Z){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(za(t,i.x,s.x,o.x,a.x),za(t,i.y,s.y,o.y,a.y),za(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tl=class extends fi{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lh=class extends fi{constructor(t=new Z,e=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends fi{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ba(t,i.x,s.x,o.x),Ba(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ch=class extends fi{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ba(t,i.x,s.x,o.x),Ba(t,i.y,s.y,o.y),Ba(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(jg(a,l.x,c.x,h.x,d.x),jg(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Ct().fromArray(i))}return this}},fd=Object.freeze({__proto__:null,ArcCurve:sh,CatmullRomCurve3:oh,CubicBezierCurve:ja,CubicBezierCurve3:ah,EllipseCurve:Bo,LineCurve:tl,LineCurve3:lh,QuadraticBezierCurve:el,QuadraticBezierCurve3:ch,SplineCurve:nl}),hh=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new fd[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},il=class extends hh{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new tl(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new el(this.currentPoint.clone(),new Ct(t,e),new Ct(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new ja(this.currentPoint.clone(),new Ct(t,e),new Ct(n,i),new Ct(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new nl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Bo(t,e,n,i,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},zo=class extends il{constructor(t){super(t),this.uuid=qo(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new il().fromJSON(i))}return this}};function By(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=Y_(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Hy(r,t,s,e)),r.length>80*e){a=r[0],l=r[1];let h=a,d=l;for(let u=e;u<i;u+=e){let f=r[u],m=r[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return rl(s,o,e,a,l,c,0),o}function Y_(r,t,e,n,i){let s;if(i===tS(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=t_(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=t_(o/n|0,r[o],r[o+1],s);return s&&ko(s,s.next)&&(ol(s),s=s.next),s}function Bs(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(ko(e,e.next)||ze(e.prev,e,e.next)===0)){if(ol(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function rl(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Zy(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?ky(r,n,i,s):zy(r)){t.push(l.i,r.i,c.i),ol(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Gy(Bs(r),t),rl(r,t,e,n,i,s,2)):o===2&&Vy(r,t,e,n,i,s):rl(Bs(r),t,e,n,i,s,1);break}}}function zy(r){let t=r.prev,e=r,n=r.next;if(ze(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),d=Math.min(a,l,c),u=Math.max(i,s,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Fa(i,a,s,l,o,c,m.x,m.y)&&ze(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ky(r,t,e,n){let i=r.prev,s=r,o=r.next;if(ze(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,d=s.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),_=Math.max(a,l,c),p=Math.max(h,d,u),g=dd(f,m,t,e,n),y=dd(_,p,t,e,n),b=r.prevZ,v=r.nextZ;for(;b&&b.z>=g&&v&&v.z<=y;){if(b.x>=f&&b.x<=_&&b.y>=m&&b.y<=p&&b!==i&&b!==o&&Fa(a,h,l,d,c,u,b.x,b.y)&&ze(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&Fa(a,h,l,d,c,u,v.x,v.y)&&ze(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=_&&b.y>=m&&b.y<=p&&b!==i&&b!==o&&Fa(a,h,l,d,c,u,b.x,b.y)&&ze(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&Fa(a,h,l,d,c,u,v.x,v.y)&&ze(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Gy(r,t){let e=r;do{let n=e.prev,i=e.next.next;!ko(n,i)&&J_(n,e,e.next,i)&&sl(n,i)&&sl(i,n)&&(t.push(n.i,e.i,i.i),ol(e),ol(e.next),e=r=i),e=e.next}while(e!==r);return Bs(e)}function Vy(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ky(o,a)){let l=$_(o,a);o=Bs(o,o.next),l=Bs(l,l.next),rl(o,t,e,n,i,s,0),rl(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Hy(r,t,e,n){let i=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Y_(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push($y(c))}i.sort(Wy);for(let s=0;s<i.length;s++)e=Xy(i[s],e);return e}function Wy(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Xy(r,t){let e=qy(r,t);if(!e)return t;let n=$_(e,r);return Bs(n,n.next),Bs(e,e.next)}function qy(r,t){let e=t,n=r.x,i=r.y,s=-1/0,o;if(ko(r,e))return e;do{if(ko(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Z_(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);sl(e,r)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Yy(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Yy(r,t){return ze(r.prev,r,t.prev)<0&&ze(t.next,r,r.next)<0}function Zy(r,t,e,n){let i=r;do i.z===0&&(i.z=dd(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Jy(i)}function Jy(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function dd(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function $y(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Z_(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Fa(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&Z_(r,t,e,n,i,s,o,a)}function Ky(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Qy(r,t)&&(sl(r,t)&&sl(t,r)&&jy(r,t)&&(ze(r.prev,r,t.prev)||ze(r,t.prev,t))||ko(r,t)&&ze(r.prev,r,r.next)>0&&ze(t.prev,t,t.next)>0)}function ze(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ko(r,t){return r.x===t.x&&r.y===t.y}function J_(r,t,e,n){let i=Fc(ze(r,t,e)),s=Fc(ze(r,t,n)),o=Fc(ze(e,n,r)),a=Fc(ze(e,n,t));return!!(i!==s&&o!==a||i===0&&Oc(r,e,t)||s===0&&Oc(r,n,t)||o===0&&Oc(e,r,n)||a===0&&Oc(e,t,n))}function Oc(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Fc(r){return r>0?1:r<0?-1:0}function Qy(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&J_(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function sl(r,t){return ze(r.prev,r,r.next)<0?ze(r,t,r.next)>=0&&ze(r,r.prev,t)>=0:ze(r,t,r.prev)<0||ze(r,r.next,t)<0}function jy(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function $_(r,t){let e=pd(r.i,r.x,r.y),n=pd(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function t_(r,t,e,n){let i=pd(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ol(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function pd(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tS(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var md=class{static triangulate(t,e,n=2){return By(t,e,n)}},Ns=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];e_(t),n_(n,t);let o=t.length;e.forEach(e_);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,n_(n,e[l]);let a=md.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function e_(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function n_(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var al=class r extends ji{constructor(t=new zo([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Wn(i,3)),this.setAttribute("uv",new Wn(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:eS,b,v=!1,S,E,x,M;if(g){b=g.getSpacedPoints(h),v=!0,u=!1;let j=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,j),E=new Z,x=new Z,M=new Z}u||(p=0,f=0,m=0,_=0);let P=a.extractPoints(c),A=P.shape,N=P.holes;if(!Ns.isClockWise(A)){A=A.reverse();for(let j=0,ct=N.length;j<ct;j++){let lt=N[j];Ns.isClockWise(lt)&&(N[j]=lt.reverse())}}function G(j){let lt=10000000000000001e-36,z=j[0];for(let mt=1;mt<=j.length;mt++){let Xt=mt%j.length,Ut=j[Xt],Vt=Ut.x-z.x,Qt=Ut.y-z.y,re=Vt*Vt+Qt*Qt,F=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(z.x),Math.abs(z.y)),ae=lt*F*F;if(re<=ae){j.splice(Xt,1),mt--;continue}z=Ut}}G(A),N.forEach(G);let I=N.length,k=A;for(let j=0;j<I;j++){let ct=N[j];A=A.concat(ct)}function V(j,ct,lt){return ct||$t("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(ct,lt)}let L=A.length;function W(j,ct,lt){let z,mt,Xt,Ut=j.x-ct.x,Vt=j.y-ct.y,Qt=lt.x-j.x,re=lt.y-j.y,F=Ut*Ut+Vt*Vt,ae=Ut*re-Vt*Qt;if(Math.abs(ae)>Number.EPSILON){let Kt=Math.sqrt(F),Jt=Math.sqrt(Qt*Qt+re*re),_t=ct.x-Vt/Kt,ge=ct.y+Ut/Kt,Bt=lt.x-re/Jt,qt=lt.y+Qt/Jt,R=((Bt-_t)*re-(qt-ge)*Qt)/(Ut*re-Vt*Qt);z=_t+Ut*R-j.x,mt=ge+Vt*R-j.y;let w=z*z+mt*mt;if(w<=2)return new Ct(z,mt);Xt=Math.sqrt(w/2)}else{let Kt=!1;Ut>Number.EPSILON?Qt>Number.EPSILON&&(Kt=!0):Ut<-Number.EPSILON?Qt<-Number.EPSILON&&(Kt=!0):Math.sign(Vt)===Math.sign(re)&&(Kt=!0),Kt?(z=-Vt,mt=Ut,Xt=Math.sqrt(F)):(z=Ut,mt=Vt,Xt=Math.sqrt(F/2))}return new Ct(z/Xt,mt/Xt)}let B=[];for(let j=0,ct=k.length,lt=ct-1,z=j+1;j<ct;j++,lt++,z++)lt===ct&&(lt=0),z===ct&&(z=0),B[j]=W(k[j],k[lt],k[z]);let C=[],H,dt=B.concat();for(let j=0,ct=I;j<ct;j++){let lt=N[j];H=[];for(let z=0,mt=lt.length,Xt=mt-1,Ut=z+1;z<mt;z++,Xt++,Ut++)Xt===mt&&(Xt=0),Ut===mt&&(Ut=0),H[z]=W(lt[z],lt[Xt],lt[Ut]);C.push(H),dt=dt.concat(H)}let bt;if(p===0)bt=Ns.triangulateShape(k,N);else{let j=[],ct=[];for(let lt=0;lt<p;lt++){let z=lt/p,mt=f*Math.cos(z*Math.PI/2),Xt=m*Math.sin(z*Math.PI/2)+_;for(let Ut=0,Vt=k.length;Ut<Vt;Ut++){let Qt=V(k[Ut],B[Ut],Xt);Nt(Qt.x,Qt.y,-mt),z===0&&j.push(Qt)}for(let Ut=0,Vt=I;Ut<Vt;Ut++){let Qt=N[Ut];H=C[Ut];let re=[];for(let F=0,ae=Qt.length;F<ae;F++){let Kt=V(Qt[F],H[F],Xt);Nt(Kt.x,Kt.y,-mt),z===0&&re.push(Kt)}z===0&&ct.push(re)}}bt=Ns.triangulateShape(j,ct)}let q=bt.length,et=m+_;for(let j=0;j<L;j++){let ct=u?V(A[j],dt[j],et):A[j];v?(x.copy(S.normals[0]).multiplyScalar(ct.x),E.copy(S.binormals[0]).multiplyScalar(ct.y),M.copy(b[0]).add(x).add(E),Nt(M.x,M.y,M.z)):Nt(ct.x,ct.y,0)}for(let j=1;j<=h;j++)for(let ct=0;ct<L;ct++){let lt=u?V(A[ct],dt[ct],et):A[ct];v?(x.copy(S.normals[j]).multiplyScalar(lt.x),E.copy(S.binormals[j]).multiplyScalar(lt.y),M.copy(b[j]).add(x).add(E),Nt(M.x,M.y,M.z)):Nt(lt.x,lt.y,d/h*j)}for(let j=p-1;j>=0;j--){let ct=j/p,lt=f*Math.cos(ct*Math.PI/2),z=m*Math.sin(ct*Math.PI/2)+_;for(let mt=0,Xt=k.length;mt<Xt;mt++){let Ut=V(k[mt],B[mt],z);Nt(Ut.x,Ut.y,d+lt)}for(let mt=0,Xt=N.length;mt<Xt;mt++){let Ut=N[mt];H=C[mt];for(let Vt=0,Qt=Ut.length;Vt<Qt;Vt++){let re=V(Ut[Vt],H[Vt],z);v?Nt(re.x,re.y+b[h-1].y,b[h-1].x+lt):Nt(re.x,re.y,d+lt)}}}pt(),Tt();function pt(){let j=i.length/3;if(u){let ct=0,lt=L*ct;for(let z=0;z<q;z++){let mt=bt[z];fe(mt[2]+lt,mt[1]+lt,mt[0]+lt)}ct=h+p*2,lt=L*ct;for(let z=0;z<q;z++){let mt=bt[z];fe(mt[0]+lt,mt[1]+lt,mt[2]+lt)}}else{for(let ct=0;ct<q;ct++){let lt=bt[ct];fe(lt[2],lt[1],lt[0])}for(let ct=0;ct<q;ct++){let lt=bt[ct];fe(lt[0]+L*h,lt[1]+L*h,lt[2]+L*h)}}n.addGroup(j,i.length/3-j,0)}function Tt(){let j=i.length/3,ct=0;ut(k,ct),ct+=k.length;for(let lt=0,z=N.length;lt<z;lt++){let mt=N[lt];ut(mt,ct),ct+=mt.length}n.addGroup(j,i.length/3-j,1)}function ut(j,ct){let lt=j.length;for(;--lt>=0;){let z=lt,mt=lt-1;mt<0&&(mt=j.length-1);for(let Xt=0,Ut=h+p*2;Xt<Ut;Xt++){let Vt=L*Xt,Qt=L*(Xt+1),re=ct+z+Vt,F=ct+mt+Vt,ae=ct+mt+Qt,Kt=ct+z+Qt;Pt(re,F,ae,Kt)}}}function Nt(j,ct,lt){l.push(j),l.push(ct),l.push(lt)}function fe(j,ct,lt){Gt(j),Gt(ct),Gt(lt);let z=i.length/3,mt=y.generateTopUV(n,i,z-3,z-2,z-1);It(mt[0]),It(mt[1]),It(mt[2])}function Pt(j,ct,lt,z){Gt(j),Gt(ct),Gt(z),Gt(ct),Gt(lt),Gt(z);let mt=i.length/3,Xt=y.generateSideWallUV(n,i,mt-6,mt-3,mt-2,mt-1);It(Xt[0]),It(Xt[1]),It(Xt[3]),It(Xt[1]),It(Xt[2]),It(Xt[3])}function Gt(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function It(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return nS(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new fd[i.type]().fromJSON(i)),new r(n,t.options)}},eS={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Ct(s,o),new Ct(a,l),new Ct(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],m=t[i*3+2],_=t[s*3],p=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ct(o,1-l),new Ct(c,1-d),new Ct(u,1-m),new Ct(_,1-g)]:[new Ct(a,1-l),new Ct(h,1-d),new Ct(f,1-m),new Ct(p,1-g)]}};function nS(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var br=class r extends ji{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let y=g*u-o;for(let b=0;b<c;b++){let v=b*d-s;m.push(v,-y,0),_.push(0,0,1),p.push(b/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let b=y+c*g,v=y+c*(g+1),S=y+1+c*(g+1),E=y+1+c*g;f.push(b,v,E),f.push(v,S,E)}this.setIndex(f),this.setAttribute("position",new Wn(m,3)),this.setAttribute("normal",new Wn(_,3)),this.setAttribute("uv",new Wn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ws(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(i_(i))i.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(i_(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Nn(r){let t={};for(let e=0;e<r.length;e++){let n=Ws(r[e]);for(let i in n)t[i]=n[i]}return t}function i_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function iS(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Yd(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var K_={clone:Ws,merge:Nn},rS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rS,this.fragmentShader=sS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=iS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new jt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ct().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ge().fromArray(i.value);break;case"m3":this.uniforms[n].value=new te().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},uh=class extends di{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fh=class extends ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zs=class extends fh{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var dh=class extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ph=class extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Co(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Bc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var ns=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mh=class extends ns{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cd,endingEnd:cd}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hd:s=t,a=2*e-n;break;case ud:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hd:o=t,l=2*n-e;break;case ud:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,y=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,b=(-1-f)*p+(1.5+f)*_+.5*m,v=f*p-f*_;for(let S=0;S!==a;++S)s[S]=g*o[h+S]+y*o[c+S]+b*o[l+S]+v*o[d+S];return s}},gh=class extends ns{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},_h=class extends ns{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},xh=class extends ns{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==a;++p)s[p]=o[c+p]*_+o[l+p]*m;return s}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=f*u+m*2,y=d[g],b=d[g+1],v=t*u+m*2,S=h[v],E=h[v+1],x=aS(n,e,y,S,i);s[m]=Q_(x,_,b,E,p)}return s}};function Q_(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function oS(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function aS(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=Q_(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=oS(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var pi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Co(e,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Co(t.times,Array),values:Co(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Bc(t.settings)&&(n.settings={inTangents:Co(t.settings.inTangents,Array),outTangents:Co(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ka:e=this.InterpolantFactoryMethodDiscrete;break;case Kc:e=this.InterpolantFactoryMethodLinear;break;case Gc:e=this.InterpolantFactoryMethodSmooth;break;case ld:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ka;case this.InterpolantFactoryMethodLinear:return Kc;case this.InterpolantFactoryMethodSmooth:return Gc;case this.InterpolantFactoryMethodBezier:return ld}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Bc(this.settings)&&(r_(this.settings.inTangents,t),r_(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Bc(this.settings)&&(s_(this.settings.inTangents,t),s_(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){$t("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&cy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Bc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function r_(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]+=t}function s_(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Kc;var is=class extends pi{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=ka;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};vh.prototype.ValueTypeName="color";var yh=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};yh.prototype.ValueTypeName="number";var Sh=class extends ns{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Qi.slerpFlat(s,0,o,c-a,o,c,l);return s}},ll=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Sh(this.times,this.values,this.getValueSize(),t)}};ll.prototype.ValueTypeName="quaternion";ll.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends pi{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=ka;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Mh=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};Mh.prototype.ValueTypeName="vector";var bh=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},j_=new bh,wh=class{constructor(t){this.manager=t!==void 0?t:j_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};wh.DEFAULT_MATERIAL_NAME="__DEFAULT";var zc=new Z,kc=new Qi,Zi=new Z,cl=class extends Ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zc,kc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,kc,Zi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(zc,kc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,kc,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$r=new Z,o_=new Ct,a_=new Ct,xn=class extends cl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(Bf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($r.x,$r.y).multiplyScalar(-t/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($r.x,$r.y).multiplyScalar(-t/$r.z)}getViewSize(t,e){return this.getViewBounds(t,o_,a_),e.subVectors(a_,o_)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bf*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Th=class extends cl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ro=-90,Po=1,Go=class extends Ei{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new xn(Ro,Po,t,e);i.layers=this.layers,this.add(i);let s=new xn(Ro,Po,t,e);s.layers=this.layers,this.add(s);let o=new xn(Ro,Po,t,e);o.layers=this.layers,this.add(o);let a=new xn(Ro,Po,t,e);a.layers=this.layers,this.add(a);let l=new xn(Ro,Po,t,e);l.layers=this.layers,this.add(l);let c=new xn(Ro,Po,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Eh=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Zd="\\[\\]\\.:\\/",lS=new RegExp("["+Zd+"]","g"),Jd="[^"+Zd+"]",cS="[^"+Zd.replace("\\.","")+"]",hS=/((?:WC+[\/:])*)/.source.replace("WC",Jd),uS=/(WCOD+)?/.source.replace("WCOD",cS),fS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jd),dS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jd),pS=new RegExp("^"+hS+uS+fS+dS+"$"),mS=["material","materials","bones","map"],gd=class{constructor(t,e,n){let i=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lS,"")}static parseTrackName(t){let e=pS.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);mS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=gd;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J1=new Float32Array(1);var ep=class ep{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};ep.prototype.isMatrix2=!0;var _d=ep;function $d(r,t,e,n){let i=gS(n);switch(e){case Fd:return r*t;case zd:return r*t/i.components*i.byteLength;case Nh:return r*t/i.components*i.byteLength;case os:return r*t*2/i.components*i.byteLength;case Uh:return r*t*2/i.components*i.byteLength;case Bd:return r*t*3/i.components*i.byteLength;case zi:return r*t*4/i.components*i.byteLength;case Oh:return r*t*4/i.components*i.byteLength;case fl:case dl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pl:case ml:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Bh:case kh:return Math.max(r,16)*Math.max(t,8)/4;case Fh:case zh:return Math.max(r,8)*Math.max(t,8)/2;case Gh:case Vh:case Wh:case Xh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Hh:case gl:case qh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case jh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case tu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case eu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case nu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case iu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ru:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case su:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ou:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case au:case lu:case cu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case hu:case uu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case _l:case fu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gS(r){switch(r){case mi:case Dd:return{byteLength:1,components:1};case Xo:case Nd:case Bi:return{byteLength:2,components:1};case Lh:case Dh:return{byteLength:2,components:4};case Oi:case Ih:case Fi:return{byteLength:4,components:1};case Ud:case Od:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function S0(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function TS(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ES=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AS=`#ifdef USE_ALPHAHASH
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
#endif`,CS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LS=`#ifdef USE_AOMAP
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
#endif`,DS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NS=`#ifdef USE_BATCHING
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
#endif`,US=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zS=`#ifdef USE_IRIDESCENCE
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
#endif`,kS=`#ifdef USE_BUMPMAP
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
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,YS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ZS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,JS=`#define PI 3.141592653589793
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
} // validated`,$S=`vec3 transformedNormal = objectNormal;
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
#endif`,KS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eM="gl_FragColor = linearToOutputTexel( gl_FragColor );",nM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fM=`#ifdef USE_GRADIENTMAP
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
}`,dM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_M=`#ifdef USE_ENVMAP
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
#endif`,xM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MM=`PhysicalMaterial material;
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
#endif`,bM=`uniform sampler2D dfgLUT;
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
}`,wM=`
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
#endif`,TM=`#if defined( RE_IndirectDiffuse )
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,CM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UM=`#if defined( USE_POINTS_UV )
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
#endif`,OM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zM=`#if defined( USE_MORPHCOLORS )
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
#endif`,kM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GM=`#ifdef USE_MORPHTARGETS
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
#endif`,VM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ZM=`#ifdef USE_NORMALMAP
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
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rb=`#ifdef DITHERING
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
#endif`,ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hb=`float getShadowMask() {
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
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fb=`#ifdef USE_SKINNING
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
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vb=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eb=`uniform sampler2D t2D;
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
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform float backgroundBlurriness;
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`#include <common>
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
}`,Lb=`#if DEPTH_PACKING == 3200
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
}`,Db=`#define DISTANCE
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
}`,Nb=`#define DISTANCE
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`uniform float scale;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,zb=`#include <common>
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
}`,kb=`uniform vec3 diffuse;
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
}`,Gb=`#define LAMBERT
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
}`,Vb=`#define LAMBERT
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
}`,Hb=`#define MATCAP
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
}`,Wb=`#define MATCAP
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
}`,Xb=`#define NORMAL
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
}`,qb=`#define NORMAL
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
}`,Yb=`#define PHONG
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
}`,Zb=`#define PHONG
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
}`,Jb=`#define STANDARD
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
}`,$b=`#define STANDARD
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
}`,Kb=`#define TOON
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
}`,Qb=`#define TOON
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
}`,jb=`uniform float size;
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
}`,tw=`uniform vec3 diffuse;
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
}`,ew=`#include <common>
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
}`,nw=`uniform vec3 color;
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
}`,iw=`uniform float rotation;
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
}`,rw=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:ES,alphahash_pars_fragment:AS,alphamap_fragment:CS,alphamap_pars_fragment:RS,alphatest_fragment:PS,alphatest_pars_fragment:IS,aomap_fragment:LS,aomap_pars_fragment:DS,batching_pars_vertex:NS,batching_vertex:US,begin_vertex:OS,beginnormal_vertex:FS,bsdfs:BS,iridescence_fragment:zS,bumpmap_pars_fragment:kS,clipping_planes_fragment:GS,clipping_planes_pars_fragment:VS,clipping_planes_pars_vertex:HS,clipping_planes_vertex:WS,color_fragment:XS,color_pars_fragment:qS,color_pars_vertex:YS,color_vertex:ZS,common:JS,defaultnormal_vertex:$S,displacementmap_pars_vertex:KS,displacementmap_vertex:QS,emissivemap_fragment:jS,emissivemap_pars_fragment:tM,colorspace_fragment:eM,colorspace_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:rM,envmap_pars_fragment:sM,envmap_pars_vertex:oM,envmap_physical_pars_fragment:_M,envmap_vertex:aM,fog_vertex:lM,fog_pars_vertex:cM,fog_fragment:hM,fog_pars_fragment:uM,gradientmap_pars_fragment:fM,lightmap_pars_fragment:dM,lights_lambert_fragment:pM,lights_lambert_pars_fragment:mM,lights_pars_begin:gM,lights_toon_fragment:xM,lights_toon_pars_fragment:vM,lights_phong_fragment:yM,lights_phong_pars_fragment:SM,lights_physical_fragment:MM,lights_physical_pars_fragment:bM,lights_fragment_begin:wM,lights_fragment_maps:TM,lights_fragment_end:EM,lightprobes_pars_fragment:AM,logdepthbuf_fragment:CM,logdepthbuf_pars_fragment:RM,logdepthbuf_pars_vertex:PM,logdepthbuf_vertex:IM,map_fragment:LM,map_pars_fragment:DM,map_particle_fragment:NM,map_particle_pars_fragment:UM,metalnessmap_fragment:OM,metalnessmap_pars_fragment:FM,morphinstance_vertex:BM,morphcolor_vertex:zM,morphnormal_vertex:kM,morphtarget_pars_vertex:GM,morphtarget_vertex:VM,normal_fragment_begin:HM,normal_fragment_maps:WM,normal_pars_fragment:XM,normal_pars_vertex:qM,normal_vertex:YM,normalmap_pars_fragment:ZM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:$M,clearcoat_pars_fragment:KM,iridescence_pars_fragment:QM,opaque_fragment:jM,packing:tb,premultiplied_alpha_fragment:eb,project_vertex:nb,dithering_fragment:ib,dithering_pars_fragment:rb,roughnessmap_fragment:sb,roughnessmap_pars_fragment:ob,shadowmap_pars_fragment:ab,shadowmap_pars_vertex:lb,shadowmap_vertex:cb,shadowmask_pars_fragment:hb,skinbase_vertex:ub,skinning_pars_vertex:fb,skinning_vertex:db,skinnormal_vertex:pb,specularmap_fragment:mb,specularmap_pars_fragment:gb,tonemapping_fragment:_b,tonemapping_pars_fragment:xb,transmission_fragment:vb,transmission_pars_fragment:yb,uv_pars_fragment:Sb,uv_pars_vertex:Mb,uv_vertex:bb,worldpos_vertex:wb,background_vert:Tb,background_frag:Eb,backgroundCube_vert:Ab,backgroundCube_frag:Cb,cube_vert:Rb,cube_frag:Pb,depth_vert:Ib,depth_frag:Lb,distance_vert:Db,distance_frag:Nb,equirect_vert:Ub,equirect_frag:Ob,linedashed_vert:Fb,linedashed_frag:Bb,meshbasic_vert:zb,meshbasic_frag:kb,meshlambert_vert:Gb,meshlambert_frag:Vb,meshmatcap_vert:Hb,meshmatcap_frag:Wb,meshnormal_vert:Xb,meshnormal_frag:qb,meshphong_vert:Yb,meshphong_frag:Zb,meshphysical_vert:Jb,meshphysical_frag:$b,meshtoon_vert:Kb,meshtoon_frag:Qb,points_vert:jb,points_frag:tw,shadow_vert:ew,shadow_frag:nw,sprite_vert:iw,sprite_frag:rw},Rt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},er={basic:{uniforms:Nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Nn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Nn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new jt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Nn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Nn([Rt.points,Rt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Nn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Nn([Rt.common,Rt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Nn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Nn([Rt.sprite,Rt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:Nn([Rt.common,Rt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:Nn([Rt.lights,Rt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};er.physical={uniforms:Nn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var pu={r:0,b:0,g:0},sw=new ke,M0=new te;M0.set(-1,0,0,0,1,0,0,0,1);function ow(r,t,e,n,i,s){let o=new jt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let v=y.backgroundBlurriness>0;b=t.get(b,v)}return b}function m(y){let b=!1,v=f(y);v===null?p(o,a):v&&v.isColor&&(p(v,1),b=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(y,b){let v=f(b);v&&v.isCubeTexture?(c===void 0&&(c=new Dn(new es(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Ws(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sw.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(M0),c.material.toneMapped=me.getTransfer(v.colorSpace)!==be,(h!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Dn(new br(2,2),new di({name:"BackgroundMaterial",uniforms:Ws(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=me.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,b){y.getRGB(pu,Yd(r)),e.buffers.color.setClear(pu.r,pu.g,pu.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:_,dispose:g}}function aw(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(N,D,G,I,k){let V=!1,L=d(N,I,G,D);s!==L&&(s=L,c(s.object)),V=f(N,I,G,k),V&&m(N,I,G,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(N,D,G,I),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function h(N){return r.deleteVertexArray(N)}function d(N,D,G,I){let k=I.wireframe===!0,V=n[D.id];V===void 0&&(V={},n[D.id]=V);let L=N.isInstancedMesh===!0?N.id:0,W=V[L];W===void 0&&(W={},V[L]=W);let B=W[G.id];B===void 0&&(B={},W[G.id]=B);let C=B[k];return C===void 0&&(C=u(l()),B[k]=C),C}function u(N){let D=[],G=[],I=[];for(let k=0;k<e;k++)D[k]=0,G[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,D,G,I){let k=s.attributes,V=D.attributes,L=0,W=G.getAttributes();for(let B in W)if(W[B].location>=0){let H=k[B],dt=V[B];if(dt===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(dt=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(dt=N.instanceColor)),H===void 0||H.attribute!==dt||dt&&H.data!==dt.data)return!0;L++}return s.attributesNum!==L||s.index!==I}function m(N,D,G,I){let k={},V=D.attributes,L=0,W=G.getAttributes();for(let B in W)if(W[B].location>=0){let H=V[B];H===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(H=N.instanceColor));let dt={};dt.attribute=H,H&&H.data&&(dt.data=H.data),k[B]=dt,L++}s.attributes=k,s.attributesNum=L,s.index=I}function _(){let N=s.newAttributes;for(let D=0,G=N.length;D<G;D++)N[D]=0}function p(N){g(N,0)}function g(N,D){let G=s.newAttributes,I=s.enabledAttributes,k=s.attributeDivisors;G[N]=1,I[N]===0&&(r.enableVertexAttribArray(N),I[N]=1),k[N]!==D&&(r.vertexAttribDivisor(N,D),k[N]=D)}function y(){let N=s.newAttributes,D=s.enabledAttributes;for(let G=0,I=D.length;G<I;G++)D[G]!==N[G]&&(r.disableVertexAttribArray(G),D[G]=0)}function b(N,D,G,I,k,V,L){L===!0?r.vertexAttribIPointer(N,D,G,k,V):r.vertexAttribPointer(N,D,G,I,k,V)}function v(N,D,G,I){_();let k=I.attributes,V=G.getAttributes(),L=D.defaultAttributeValues;for(let W in V){let B=V[W];if(B.location>=0){let C=k[W];if(C===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(C=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(C=N.instanceColor)),C!==void 0){let H=C.normalized,dt=C.itemSize,bt=t.get(C);if(bt===void 0)continue;let q=bt.buffer,et=bt.type,pt=bt.bytesPerElement,Tt=et===r.INT||et===r.UNSIGNED_INT||C.gpuType===Ih;if(C.isInterleavedBufferAttribute){let ut=C.data,Nt=ut.isInterleavedBuffer===!0?ut.stride:ut.itemSize,fe=C.offset;if(ut.isInstancedInterleavedBuffer||ut.isInstancedBufferAttribute){for(let Pt=0;Pt<B.locationSize;Pt++)g(B.location+Pt,ut.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Pt=0;Pt<B.locationSize;Pt++)p(B.location+Pt);r.bindBuffer(r.ARRAY_BUFFER,q);for(let Pt=0;Pt<B.locationSize;Pt++)b(B.location+Pt,dt/B.locationSize,et,H,Nt*pt,(fe+dt/B.locationSize*Pt)*pt,Tt)}else{if(C.isInstancedBufferAttribute){for(let ut=0;ut<B.locationSize;ut++)g(B.location+ut,C.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ut=0;ut<B.locationSize;ut++)p(B.location+ut);r.bindBuffer(r.ARRAY_BUFFER,q);for(let ut=0;ut<B.locationSize;ut++)b(B.location+ut,dt/B.locationSize,et,H,dt*pt,dt/B.locationSize*ut*pt,Tt)}}else if(L!==void 0){let H=L[W];if(H!==void 0)switch(H.length){case 2:r.vertexAttrib2fv(B.location,H);break;case 3:r.vertexAttrib3fv(B.location,H);break;case 4:r.vertexAttrib4fv(B.location,H);break;default:r.vertexAttrib1fv(B.location,H)}}}}y()}function S(){P();for(let N in n){let D=n[N];for(let G in D){let I=D[G];for(let k in I){let V=I[k];for(let L in V)h(V[L].object),delete V[L];delete I[k]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let G in D){let I=D[G];for(let k in I){let V=I[k];for(let L in V)h(V[L].object),delete V[L];delete I[k]}}delete n[N.id]}function x(N){for(let D in n){let G=n[D];for(let I in G){let k=G[I];if(k[N.id]===void 0)continue;let V=k[N.id];for(let L in V)h(V[L].object),delete V[L];delete k[N.id]}}}function M(N){for(let D in n){let G=n[D],I=N.isInstancedMesh===!0?N.id:0,k=G[I];if(k!==void 0){for(let V in k){let L=k[V];for(let W in L)h(L[W].object),delete L[W];delete k[V]}delete G[I],Object.keys(G).length===0&&delete n[D]}}}function P(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function lw(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function cw(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==zi&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==mi&&x!==Fi&&!M&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,maxSamples:S,samples:E}}function hw(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Ni,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{let y=s?0:n,b=y*4,v=g.clippingState||null;l.value=v,v=h(m,u,b,f);for(let S=0;S!==b;++S)v[S]=e[S];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,v=f;b!==_;++b,v+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var yl=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ja(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new es(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:ks});s.uniforms.tEquirect.value=e;let o=new Dn(i,s),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=vn),new Go(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},t0=256,uw=3,fw=20,b0=256,w0=16,dw=3,pw=new Z,mw=new jt,Zo=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Go(1,10,null),this._boxMesh=new Dn(new es(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=pw}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(mw));let p=new Go(n,i,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(t0,X_(t))}_fromTexture(t,e){t.mapping===Vs||t.mapping===Wo?this._setSize(t.image.length===0?t0:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=e0(t,!1,!1),n=Math.log2(t)-uw;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=e0(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Vs||t.mapping===Wo?(this._cubemapMaterial===null&&(this._cubemapMaterial=i0()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=n0()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=gw(),this._integrationMaterial=_w());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/w0);for(let o=0;o<=n;o++){let a=r.lodToRoughness(o,n);if(o>n-dw)s.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(b0*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=xw());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}};function e0(r,t,e){return new yl(r,{minFilter:Ui,generateMipmaps:t,type:Bi,colorSpace:Ga,depthBuffer:e})}function Sl(r,t,e){return new di({name:r,uniforms:t,vertexShader:oe.cube_vert,fragmentShader:e,side:yn,blending:ks,depthTest:!1,depthWrite:!1})}function gw(){return Sl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${b0}u

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
	`)}function _w(){return Sl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:w0}},`

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
	`)}function xw(){return Sl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fw}
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
	`)}function n0(){return Sl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function i0(){return Sl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vw(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ch||f===Rh)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new yl(m.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===Ch||f===Rh,_=f===Vs||f===Wo;if(m||_){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Zo(r)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return m&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Zo(r)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===Ch?u.mapping=Vs:f===Rh&&(u.mapping=Wo),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function yw(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Us("WebGLRenderer: "+n+" extension not supported."),i}}}function Sw(r,t,e,n){let i={},s=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let _=s.get(m);_&&(t.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],r.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let y=_!==null?_.array.length:p.array.length/3-1,b=p.count>=65535?Za:Ya,v=new b(Math.ceil(y/3)*6,1),S=v.array;if(_!==null){let x=_.array;g=_.version;for(let M=0,P=0;M<y;M+=3){let A=x[M+0],N=x[M+1],D=x[M+2];S[P++]=A,S[P++]=N,S[P++]=N,S[P++]=D,S[P++]=D,S[P++]=A}}else{g=p.version;for(let x=0,M=0;x<y;x+=3){let P=x+0,A=x+1,N=x+2;S[M++]=P,S[M++]=A,S[M++]=A,S[M++]=N,S[M++]=N,S[M++]=P}}v.version=g;let E=s.get(m);E&&t.remove(E),s.set(m,v)}function u(m){let _=s.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return s.get(m)}function f(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Mw(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function bw(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ww(r,t,e){let n=new WeakMap,i=new Ge;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;f===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*S*4*d),x=new Xa(E,v,S,d);x.type=Fi,x.needsUpdate=!0;let M=b*4;for(let A=0;A<d;A++){let N=p[A],D=g[A],G=y[A],I=v*S*4*A;for(let k=0;k<N.count;k++){let V=k*M;f===!0&&(i.fromBufferAttribute(N,k),E[I+V+0]=i.x,E[I+V+1]=i.y,E[I+V+2]=i.z,E[I+V+3]=0),m===!0&&(i.fromBufferAttribute(D,k),E[I+V+4]=i.x,E[I+V+5]=i.y,E[I+V+6]=i.z,E[I+V+7]=0),_===!0&&(i.fromBufferAttribute(G,k),E[I+V+8]=i.x,E[I+V+9]=i.y,E[I+V+10]=i.z,E[I+V+11]=G.itemSize===4?i.w:1)}}u={count:d,texture:x,size:new Ct(v,S)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Tw(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Ew={[Td]:"LINEAR_TONE_MAPPING",[Ed]:"REINHARD_TONE_MAPPING",[Ad]:"CINEON_TONE_MAPPING",[Cd]:"ACES_FILMIC_TONE_MAPPING",[Pd]:"AGX_TONE_MAPPING",[Id]:"NEUTRAL_TONE_MAPPING",[Rd]:"CUSTOM_TONE_MAPPING"};function Aw(r,t,e,n,i,s){let o=new ui(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ji;h.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Wn([0,2,0,0,2,0],2));let d=new uh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Dn(h,d),f=new Th(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,y=null,b=[],v=!1;this.setSize=function(S,E){o.setSize(S,E),a!==null&&a.setSize(S,E),l!==null&&l.setSize(S,E);for(let x=0;x<b.length;x++){let M=b[x];M.setSize&&M.setSize(S,E)}},this.setEffects=function(S){b=S,v=b.length>0&&b[0].isRenderPass===!0;let E=o.width,x=o.height;b.length>0&&a===null&&(a=new ui(E,x,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),l=new ui(E,x,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&b.some(P=>P.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new Mr(E,x),s===!0&&(c.format=wr,c.type=Hs)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let P=0;P<b.length;P++){let A=b[P];A.setSize&&A.setSize(E,x),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,E){if(p||S.toneMapping===Qn&&b.length===0)return!1;if(y=E,E!==null){let x=E.width,M=E.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return v===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=Qn,!0},this.hasRenderPass=function(){return v},this.end=function(S,E){S.toneMapping=g,p=!0;let x=o,M=a;for(let P=0;P<b.length;P++){let A=b[P];A.enabled!==!1&&(A.render(S,M,x,E),A.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(m!==S.outputColorSpace||_!==S.toneMapping){m=S.outputColorSpace,_=S.toneMapping,d.defines={},me.getTransfer(m)===be&&(d.defines.SRGB_TRANSFER="");let P=Ew[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(y),S.render(u,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var T0=new Xn,E0=new Mr(1,1),A0=new Ka(1),C0=new Xa,R0=new eh,P0=new Ja,r0=[],s0=[],o0=new Float32Array(16),a0=new Float32Array(9),l0=new Float32Array(4);function $o(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=r0[i];if(s===void 0&&(s=new Float32Array(i),r0[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function an(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ln(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function gu(r,t){let e=s0[t];e===void 0&&(e=new Int32Array(t),s0[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Cw(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Rw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;r.uniform2fv(this.addr,t),ln(e,t)}}function Pw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;r.uniform3fv(this.addr,t),ln(e,t)}}function Iw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;r.uniform4fv(this.addr,t),ln(e,t)}}function Lw(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;l0.set(n),r.uniformMatrix2fv(this.addr,!1,l0),ln(e,n)}}function Dw(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;a0.set(n),r.uniformMatrix3fv(this.addr,!1,a0),ln(e,n)}}function Nw(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;o0.set(n),r.uniformMatrix4fv(this.addr,!1,o0),ln(e,n)}}function Uw(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Ow(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;r.uniform2iv(this.addr,t),ln(e,t)}}function Fw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;r.uniform3iv(this.addr,t),ln(e,t)}}function Bw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;r.uniform4iv(this.addr,t),ln(e,t)}}function zw(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function kw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;r.uniform2uiv(this.addr,t),ln(e,t)}}function Gw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;r.uniform3uiv(this.addr,t),ln(e,t)}}function Vw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;r.uniform4uiv(this.addr,t),ln(e,t)}}function _u(r){return r.version===0&&(r.compareFunction=Vd,r.needsUpdate=!0),r}function Hw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=_u(E0):s=T0,e.setTexture2D(t||s,i)}function Ww(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||R0,i)}function Xw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=_u(A0):s=P0,e.setTextureCube(t||s,i)}function qw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||C0,i)}function Yw(r){switch(r){case 5126:return Cw;case 35664:return Rw;case 35665:return Pw;case 35666:return Iw;case 35674:return Lw;case 35675:return Dw;case 35676:return Nw;case 5124:case 35670:return Uw;case 35667:case 35671:return Ow;case 35668:case 35672:return Fw;case 35669:case 35673:return Bw;case 5125:return zw;case 36294:return kw;case 36295:return Gw;case 36296:return Vw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return qw}}function Zw(r,t){r.uniform1fv(this.addr,t)}function Jw(r,t){let e=$o(t,this.size,2);r.uniform2fv(this.addr,e)}function $w(r,t){let e=$o(t,this.size,3);r.uniform3fv(this.addr,e)}function Kw(r,t){let e=$o(t,this.size,4);r.uniform4fv(this.addr,e)}function Qw(r,t){let e=$o(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function jw(r,t){let e=$o(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function tT(r,t){let e=$o(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function eT(r,t){r.uniform1iv(this.addr,t)}function nT(r,t){r.uniform2iv(this.addr,t)}function iT(r,t){r.uniform3iv(this.addr,t)}function rT(r,t){r.uniform4iv(this.addr,t)}function sT(r,t){r.uniform1uiv(this.addr,t)}function oT(r,t){r.uniform2uiv(this.addr,t)}function aT(r,t){r.uniform3uiv(this.addr,t)}function lT(r,t){r.uniform4uiv(this.addr,t)}function cT(r,t,e){let n=this.cache,i=t.length,s=gu(e,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=_u(E0):o=T0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function hT(r,t,e){let n=this.cache,i=t.length,s=gu(e,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||R0,s[o])}function uT(r,t,e){let n=this.cache,i=t.length,s=gu(e,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=_u(A0):o=P0;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,s[a])}function fT(r,t,e){let n=this.cache,i=t.length,s=gu(e,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||C0,s[o])}function dT(r){switch(r){case 5126:return Zw;case 35664:return Jw;case 35665:return $w;case 35666:return Kw;case 35674:return Qw;case 35675:return jw;case 35676:return tT;case 5124:case 35670:return eT;case 35667:case 35671:return nT;case 35668:case 35672:return iT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return aT;case 36296:return lT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return fT}}var rp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yw(e.type)}},sp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dT(e.type)}},op=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},np=/(\w+)(\])?(\[|\.)?/g;function c0(r,t){r.seq.push(t),r.map[t.id]=t}function pT(r,t,e){let n=r.name,i=n.length;for(np.lastIndex=0;;){let s=np.exec(n),o=np.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){c0(e,c===void 0?new rp(a,r,t):new sp(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new op(a),c0(e,d)),e=d}}}var Yo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);pT(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function h0(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var mT=37297,gT=0;function _T(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var u0=new te;function xT(r){me._getMatrix(u0,me.workingColorSpace,r);let t=`mat3( ${u0.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(r)){case Va:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function f0(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+_T(r.getShaderSource(t),a)}else return s}function vT(r,t){let e=xT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var yT={[Td]:"Linear",[Ed]:"Reinhard",[Ad]:"Cineon",[Cd]:"ACESFilmic",[Pd]:"AgX",[Id]:"Neutral",[Rd]:"Custom"};function ST(r,t){let e=yT[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mu=new Z;function MT(){me.getLuminanceCoefficients(mu);let r=mu.x.toFixed(4),t=mu.y.toFixed(4),e=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function wT(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function TT(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function vl(r){return r!==""}function d0(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function p0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ET=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(r){return r.replace(ET,AT)}function AT(r,t){let e=oe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ap(e)}var CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(r){return r.replace(CT,RT)}function RT(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function g0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var PT={[hl]:"SHADOWMAP_TYPE_PCF",[Vo]:"SHADOWMAP_TYPE_VSM"};function IT(r){return PT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var LT={[Wo]:"ENVMAP_MODE_REFRACTION"};function DT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":LT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var NT={[wd]:"ENVMAP_BLENDING_MULTIPLY",[R_]:"ENVMAP_BLENDING_MIX",[P_]:"ENVMAP_BLENDING_ADD"};function UT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":NT[r.combine]||"ENVMAP_BLENDING_NONE"}function OT(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=IT(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=DT(e),d=UT(e),u=bT(e),f=wT(s),m=i.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vl).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vl).join(`
`),p.length>0&&(p+=`
`)):(_=[g0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),p=[g0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Qn?ST("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,vT("linearToOutputTexel",e.outputColorSpace),MT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vl).join(`
`)),o=ap(o),o=d0(o,e),o=p0(o,e),a=ap(a),a=d0(a,e),a=p0(a,e),o=m0(o),a=m0(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+_+o,b=g+p+a,v=h0(i,i.VERTEX_SHADER,y),S=h0(i,i.FRAGMENT_SHADER,b);i.attachShader(m,v),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(A){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",D=i.getShaderInfoLog(v)||"",G=i.getShaderInfoLog(S)||"",I=N.trim(),k=D.trim(),V=G.trim(),L=!0,W=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(L=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,v,S);else{let B=f0(i,v,"vertex"),C=f0(i,S,"fragment");$t("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+B+`
`+C)}else I!==""?Zt("WebGLProgram: Program Info Log:",I):(k===""||V==="")&&(W=!1);W&&(A.diagnostics={runnable:L,programLog:I,vertexShader:{log:k,prefix:_},fragmentShader:{log:V,prefix:p}})}i.deleteShader(v),i.deleteShader(S),x=new Yo(i,m),M=TT(i,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,mT)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gT++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=S,this}var FT=0,lp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new cp(t),e.set(t,n)),n}},cp=class{constructor(t){this.id=FT++,this.code=t,this.usedTimes=0}};function BT(r){return r===os||r===gl||r===_l}function zT(r,t,e,n,i,s){let o=new qa,a=new lp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,A,N,D){let G=A.fog,I=N.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,L=t.get(x.envMap||k,V),W=u[x.type],B=n.precision;x.precision!==null&&(B=n.getMaxPrecision(x.precision),B!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",B,"instead."));let C=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,H=C!==void 0?C.length:0,dt=0;I.morphAttributes.position!==void 0&&(dt=1),I.morphAttributes.normal!==void 0&&(dt=2),I.morphAttributes.color!==void 0&&(dt=3);let bt,q,et,pt;if(W){let rt=er[W];bt=rt.vertexShader,q=rt.fragmentShader}else{bt=x.vertexShader,q=x.fragmentShader;let rt=a.getVertexShaderStage(x),Lt=a.getFragmentShaderStage(x);a.update(x,rt,Lt),et=rt.id,pt=Lt.id}let Tt=r.getRenderTarget(),ut=r.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,fe=N.isBatchedMesh===!0,Pt=!!x.map,Gt=!!x.matcap,It=!!L,j=It&&L.isPMREMTexture===!0,ct=!!x.aoMap,lt=!!x.lightMap,z=!!x.bumpMap&&x.wireframe===!1,mt=!!x.normalMap,Xt=!!x.displacementMap,Ut=!!x.emissiveMap,Vt=!!x.metalnessMap,Qt=!!x.roughnessMap,re=x.anisotropy>0,F=x.clearcoat>0,ae=x.diffuseRoughness>0,Kt=x.dispersion>0,Jt=x.retroreflectivity>0,_t=x.iridescence>0,ge=x.sheen>0,Bt=x.transmission>0,qt=re&&!!x.anisotropyMap,R=F&&!!x.clearcoatMap,w=F&&!!x.clearcoatNormalMap,Y=F&&!!x.clearcoatRoughnessMap,at=ae&&!!x.diffuseRoughnessMap,st=_t&&!!x.iridescenceMap,xt=_t&&!!x.iridescenceThicknessMap,Mt=ge&&!!x.sheenColorMap,J=ge&&!!x.sheenRoughnessMap,nt=!!x.specularMap,gt=!!x.specularColorMap,U=!!x.specularIntensityMap,tt=Bt&&!!x.transmissionMap,Q=Bt&&!!x.thicknessMap,vt=!!x.gradientMap,ft=!!x.alphaMap,yt=x.alphaTest>0,ht=!!x.alphaHash,St=!!x.extensions,ot=Qn;x.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(ot=r.toneMapping);let it=j?L.isCompressedCubeTexture?L.image[0].mipmaps:L.mipmaps:null,wt={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:bt,fragmentShader:q,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:pt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:B,batching:fe,batchingColor:fe&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,outputColorSpace:Tt===null?r.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Pt,matcap:Gt,envMap:It,envMapMode:It&&L.mapping,envMapPMREM:j,envMapMaxLod:j?it.length-1:null,envMapSize:j?it[0].width:null,aoMap:ct,lightMap:lt,bumpMap:z,normalMap:mt,displacementMap:Xt,emissiveMap:Ut,normalMapObjectSpace:mt&&x.normalMapType===D_,normalMapTangentSpace:mt&&x.normalMapType===du,packedNormalMap:mt&&x.normalMapType===du&&BT(x.normalMap.format),metalnessMap:Vt,roughnessMap:Qt,anisotropy:re,anisotropyMap:qt,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:w,clearcoatRoughnessMap:Y,diffuseRoughness:ae,diffuseRoughnessMap:at,dispersion:Kt,retroreflection:Jt,iridescence:_t,iridescenceMap:st,iridescenceThicknessMap:xt,sheen:ge,sheenColorMap:Mt,sheenRoughnessMap:J,specularMap:nt,specularColorMap:gt,specularIntensityMap:U,transmission:Bt,transmissionMap:tt,thicknessMap:Q,gradientMap:vt,opaque:x.transparent===!1&&x.blending===Ho&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:yt,alphaHash:ht,combine:x.combine,mapUv:Pt&&f(x.map.channel),aoMapUv:ct&&f(x.aoMap.channel),lightMapUv:lt&&f(x.lightMap.channel),bumpMapUv:z&&f(x.bumpMap.channel),normalMapUv:mt&&f(x.normalMap.channel),displacementMapUv:Xt&&f(x.displacementMap.channel),emissiveMapUv:Ut&&f(x.emissiveMap.channel),metalnessMapUv:Vt&&f(x.metalnessMap.channel),roughnessMapUv:Qt&&f(x.roughnessMap.channel),anisotropyMapUv:qt&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:st&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(x.sheenRoughnessMap.channel),specularMapUv:nt&&f(x.specularMap.channel),specularColorMapUv:gt&&f(x.specularColorMap.channel),specularIntensityMapUv:U&&f(x.specularIntensityMap.channel),transmissionMapUv:tt&&f(x.transmissionMap.channel),thicknessMapUv:Q&&f(x.thicknessMap.channel),alphaMapUv:ft&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(mt||re),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Pt||ft),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:dt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(rt=>rt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,decodeVideoTexture:Pt&&x.map.isVideoTexture===!0&&me.getTransfer(x.map.colorSpace)===be,decodeVideoTextureEmissive:Ut&&x.emissiveMap.isVideoTexture===!0&&me.getTransfer(x.emissiveMap.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ai,flipSided:x.side===yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||fe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(M,x),g(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let M=u[x.type],P;if(M){let A=er[M];P=K_.clone(A.uniforms)}else P=x.uniforms;return P}function b(x,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new OT(r,M,x,i),c.push(P),h.set(M,P)),P}function v(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:y,acquireProgram:b,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:E}}function kT(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function GT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function _0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function x0(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,p,g){let y=r[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},r[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=o(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=p,y.group=g),t++,y}function l(u,f,m,_,p,g,y){y.reversedDepth===!0&&(p=-p);let b=a(u,f,m,_,p,g);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):e.push(b)}function c(u,f,m,_,p,g){let y=a(u,f,m,_,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||GT),n.length>1&&n.sort(f||_0),i.length>1&&i.sort(f||_0)}function d(){for(let u=t,f=r.length;u<f;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function VT(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new x0,r.set(n,[o])):i>=s.length?(o=new x0,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function HT(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new jt};break;case"SpotLight":e={position:new Z,direction:new Z,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=e,e}}}function WT(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var XT=0;function qT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function YT(r){let t=new HT,e=WT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let i=new Z,s=new ke,o=new ke;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,y=0,b=0,v=0,S=0,E=0,x=0,M=0,P=0,A=0;c.sort(qT);for(let D=0,G=c.length;D<G;D++){let I=c[D],k=I.color,V=I.intensity,L=I.distance,W=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===os?W=I.shadow.map.texture:W=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*V,d+=k.g*V,u+=k.b*V;else if(I.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(I.sh.coefficients[B],V);A++}else if(I.isSunLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,H=e.get(I);H.shadowIntensity=C.intensity,H.shadowBias=C.bias,H.shadowNormalBias=C.normalBias,H.shadowRadius=C.radius,H.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[m]=H,n.sunShadowMap[m]=W;let dt=C.getViewportCount();for(let bt=0;bt<dt;bt++)n.sunShadowMatrix[_+bt]=C.getMatrix(bt),n.sunShadowCascade[_+bt]=C._cascadeData[bt];_+=dt,m++}n.sun[f]=B,f++}else if(I.isDirectionalLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,H=e.get(I);H.shadowIntensity=C.intensity,H.shadowBias=C.bias,H.shadowNormalBias=C.normalBias,H.shadowRadius=C.radius,H.shadowMapSize=C.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=I.shadow.matrix,S++}n.directional[p]=B,p++}else if(I.isSpotLight){let B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(k).multiplyScalar(V),B.distance=L,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,n.spot[y]=B;let C=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,C.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[y]=C.matrix,I.castShadow){let H=e.get(I);H.shadowIntensity=C.intensity,H.shadowBias=C.bias,H.shadowNormalBias=C.normalBias,H.shadowRadius=C.radius,H.shadowMapSize=C.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=W,x++}y++}else if(I.isRectAreaLight){let B=t.get(I);B.color.copy(k).multiplyScalar(V),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),n.rectArea[b]=B,b++}else if(I.isPointLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){let C=I.shadow,H=e.get(I);H.shadowIntensity=C.intensity,H.shadowBias=C.bias,H.shadowNormalBias=C.normalBias,H.shadowRadius=C.radius,H.shadowMapSize=C.mapSize,H.shadowCameraNear=C.camera.near,H.shadowCameraFar=C.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=B,g++}else if(I.isHemisphereLight){let B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(V),B.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[v]=B,v++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==b||N.hemiLength!==v||N.numSunShadows!==m||N.numDirectionalShadows!==S||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==M||N.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=b,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,N.sunLength=f,N.directionalLength=p,N.pointLength=g,N.spotLength=y,N.rectAreaLength=b,N.hemiLength=v,N.numSunShadows=m,N.numDirectionalShadows=S,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=M,N.numLightProbes=A,n.version=XT++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let v=c[y];if(v.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),u++}else if(v.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function v0(r){let t=new YT(r),e=[],n=[],i=[];function s(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ZT(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new v0(r),t.set(i,[a])):s>=o.length?(a=new v0(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var JT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$T=`uniform sampler2D shadow_pass;
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
}`,KT=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],QT=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],y0=new ke,xl=new Z,ip=new Z;function jT(r,t,e){let n=new Fs,i=new Ct,s=new Ct,o=new Ge,a=new dh,l=new ph,c={},h=e.maxTextureSize,d={[ss]:yn,[yn]:ss,[Ai]:Ai},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:JT,fragmentShader:$T}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new ji;m.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Dn(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let g=this.type;this.render=function(E,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===h_&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hl);let P=r.getRenderTarget(),A=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),D=r.state;D.setBlending(ks),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let G=g!==this.type;G&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=E.length;I<k;I++){let V=E[I],L=V.shadow;if(L===void 0){Zt("WebGLShadowMap:",V,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);let W=L.getFrameExtents();i.multiply(W),s.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/W.x),i.x=s.x*W.x,L.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/W.y),i.y=s.y*W.y,L.mapSize.y=s.y));let B=r.state.buffers.depth.getReversed();if(L.camera._reversedDepth=B,L.map===null||G===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Vo){if(V.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new ui(i.x,i.y,{format:os,type:Bi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),L.map.texture.name=V.name+".shadowMap",L.map.depthTexture=new Mr(i.x,i.y,Fi),L.map.depthTexture.name=V.name+".shadowMapDepth",L.map.depthTexture.format=yr,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=dn,L.map.depthTexture.magFilter=dn}else V.isPointLight?(L.map=new yl(i.x),L.map.depthTexture=new Ka(i.x,Oi)):(L.map=new ui(i.x,i.y),L.map.depthTexture=new Mr(i.x,i.y,Oi)),L.map.depthTexture.name=V.name+".shadowMap",L.map.depthTexture.format=yr,this.type===hl?(L.map.depthTexture.compareFunction=B?Gd:kd,L.map.depthTexture.minFilter=vn,L.map.depthTexture.magFilter=vn):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=dn,L.map.depthTexture.magFilter=dn);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==i.x||L.map.height!==i.y)&&L.map.setSize(i.x,i.y);let C=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();V.isPointLight!==!0&&L.updateMatrices(V,M);let H=(L.camera.layers.mask&4294967294)!==0?L.camera.layers:M.layers;for(let dt=0;dt<C;dt++){let bt=L.getCamera(dt);if(V.isPointLight){let q=L.camera,et=L.matrix,pt=V.distance||q.far;pt!==q.far&&(q.far=pt,q.updateProjectionMatrix()),xl.setFromMatrixPosition(V.matrixWorld),q.position.copy(xl),ip.copy(q.position),ip.add(KT[dt]),q.up.copy(QT[dt]),q.lookAt(ip),q.updateMatrixWorld(),et.makeTranslation(-xl.x,-xl.y,-xl.z),y0.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),L._frustum.setFromProjectionMatrix(y0,q.coordinateSystem,q.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)r.setRenderTarget(L.map,dt),r.clear();else{dt===0&&(r.setRenderTarget(L.map),r.clear());let q=L.getViewport(dt);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),D.viewport(o)}n=L.getFrustum(dt),v(x,M,bt,V,H,this.type)}L.isPointLightShadow!==!0&&this.type===Vo&&y(L,M),L.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(P,A,N)};function y(E,x){let M=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ui(i.x,i.y,{format:os,type:Bi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(x,null,M,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(x,null,M,f,_,null)}function b(E,x,M,P){let A=null,N=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)A=N;else if(A=M.isPointLight===!0?l:a,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=A.uuid,G=x.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let k=I[G];k===void 0&&(k=A.clone(),I[G]=k,x.addEventListener("dispose",S)),A=k}if(A.visible=x.visible,A.wireframe=x.wireframe,P===Vo?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=r.properties.get(A);D.light=M}return A}function v(E,x,M,P,A,N){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Vo)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let I=t.update(E),k=E.material;if(Array.isArray(k)){let V=I.groups;for(let L=0,W=V.length;L<W;L++){let B=V[L],C=k[B.materialIndex];if(C&&C.visible){let H=b(E,C,P,N);E.onBeforeShadow(r,E,x,M,I,H,B),r.renderBufferDirect(M,null,I,H,E,B),E.onAfterShadow(r,E,x,M,I,H,B)}}}else if(k.visible){let V=b(E,k,P,N);E.onBeforeShadow(r,E,x,M,I,V,null),r.renderBufferDirect(M,null,I,V,E,null),E.onAfterShadow(r,E,x,M,I,V,null)}}let G=E.children;for(let I=0,k=G.length;I<k;I++)v(G[I],x,M,P,A,N)}function S(E){E.target.removeEventListener("dispose",S);for(let M in c){let P=c[M],A=E.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function t1(r,t){function e(){let U=!1,tt=new Ge,Q=null,vt=new Ge(0,0,0,0);return{setMask:function(ft){Q!==ft&&!U&&(r.colorMask(ft,ft,ft,ft),Q=ft)},setLocked:function(ft){U=ft},setClear:function(ft,yt,ht,St,ot){ot===!0&&(ft*=St,yt*=St,ht*=St),tt.set(ft,yt,ht,St),vt.equals(tt)===!1&&(r.clearColor(ft,yt,ht,St),vt.copy(tt))},reset:function(){U=!1,Q=null,vt.set(-1,0,0,0)}}}function n(){let U=!1,tt=!1,Q=null,vt=null,ft=null;return{setReversed:function(yt){if(tt!==yt){let ht=t.get("EXT_clip_control");yt?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),tt=yt;let St=ft;ft=null,this.setClear(St)}},getReversed:function(){return tt},setTest:function(yt){yt?ut(r.DEPTH_TEST):Nt(r.DEPTH_TEST)},setMask:function(yt){Q!==yt&&!U&&(r.depthMask(yt),Q=yt)},setFunc:function(yt){if(tt&&(yt=W_[yt]),vt!==yt){switch(yt){case Hc:r.depthFunc(r.NEVER);break;case Wc:r.depthFunc(r.ALWAYS);break;case Xc:r.depthFunc(r.LESS);break;case Lo:r.depthFunc(r.LEQUAL);break;case qc:r.depthFunc(r.EQUAL);break;case Yc:r.depthFunc(r.GEQUAL);break;case Zc:r.depthFunc(r.GREATER);break;case Jc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=yt}},setLocked:function(yt){U=yt},setClear:function(yt){ft!==yt&&(ft=yt,tt&&(yt=1-yt),r.clearDepth(yt))},reset:function(){U=!1,Q=null,vt=null,ft=null,tt=!1}}}function i(){let U=!1,tt=null,Q=null,vt=null,ft=null,yt=null,ht=null,St=null,ot=null;return{setTest:function(it){U||(it?ut(r.STENCIL_TEST):Nt(r.STENCIL_TEST))},setMask:function(it){tt!==it&&!U&&(r.stencilMask(it),tt=it)},setFunc:function(it,wt,rt){(Q!==it||vt!==wt||ft!==rt)&&(r.stencilFunc(it,wt,rt),Q=it,vt=wt,ft=rt)},setOp:function(it,wt,rt){(yt!==it||ht!==wt||St!==rt)&&(r.stencilOp(it,wt,rt),yt=it,ht=wt,St=rt)},setLocked:function(it){U=it},setClear:function(it){ot!==it&&(r.clearStencil(it),ot=it)},reset:function(){U=!1,tt=null,Q=null,vt=null,ft=null,yt=null,ht=null,St=null,ot=null}}}let s=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,y=null,b=null,v=null,S=null,E=null,x=null,M=new jt(0,0,0),P=0,A=!1,N=null,D=null,G=null,I=null,k=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,W=0,B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),L=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),L=W>=2);let C=null,H={},dt=r.getParameter(r.SCISSOR_BOX),bt=r.getParameter(r.VIEWPORT),q=new Ge().fromArray(dt),et=new Ge().fromArray(bt);function pt(U,tt,Q,vt){let ft=new Uint8Array(4),yt=r.createTexture();r.bindTexture(U,yt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<Q;ht++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(tt,0,r.RGBA,1,1,vt,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(tt+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return yt}let Tt={};Tt[r.TEXTURE_2D]=pt(r.TEXTURE_2D,r.TEXTURE_2D,1),Tt[r.TEXTURE_CUBE_MAP]=pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[r.TEXTURE_2D_ARRAY]=pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Tt[r.TEXTURE_3D]=pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(r.DEPTH_TEST),o.setFunc(Lo),z(!1),mt(xd),ut(r.CULL_FACE),ct(ks);function ut(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function Nt(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function fe(U,tt){return u[U]!==tt?(r.bindFramebuffer(U,tt),u[U]=tt,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=tt),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=tt),!0):!1}function Pt(U,tt){let Q=m,vt=!1;if(U){Q=f.get(tt),Q===void 0&&(Q=[],f.set(tt,Q));let ft=U.textures;if(Q.length!==ft.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,ht=ft.length;yt<ht;yt++)Q[yt]=r.COLOR_ATTACHMENT0+yt;Q.length=ft.length,vt=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,vt=!0);vt&&r.drawBuffers(Q)}function Gt(U){return _!==U?(r.useProgram(U),_=U,!0):!1}let It={[Gs]:r.FUNC_ADD,[f_]:r.FUNC_SUBTRACT,[d_]:r.FUNC_REVERSE_SUBTRACT};It[p_]=r.MIN,It[m_]=r.MAX;let j={[g_]:r.ZERO,[__]:r.ONE,[x_]:r.SRC_COLOR,[Md]:r.SRC_ALPHA,[w_]:r.SRC_ALPHA_SATURATE,[M_]:r.DST_COLOR,[y_]:r.DST_ALPHA,[v_]:r.ONE_MINUS_SRC_COLOR,[bd]:r.ONE_MINUS_SRC_ALPHA,[b_]:r.ONE_MINUS_DST_COLOR,[S_]:r.ONE_MINUS_DST_ALPHA,[T_]:r.CONSTANT_COLOR,[E_]:r.ONE_MINUS_CONSTANT_COLOR,[A_]:r.CONSTANT_ALPHA,[C_]:r.ONE_MINUS_CONSTANT_ALPHA};function ct(U,tt,Q,vt,ft,yt,ht,St,ot,it){if(U===ks){p===!0&&(Nt(r.BLEND),p=!1);return}if(p===!1&&(ut(r.BLEND),p=!0),U!==u_){if(U!==g||it!==A){if((y!==Gs||S!==Gs)&&(r.blendEquation(r.FUNC_ADD),y=Gs,S=Gs),it)switch(U){case Ho:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vd:r.blendFunc(r.ONE,r.ONE);break;case yd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:$t("WebGLState: Invalid blending: ",U);break}else switch(U){case Ho:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case yd:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sd:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",U);break}b=null,v=null,E=null,x=null,M.set(0,0,0),P=0,g=U,A=it}return}ft=ft||tt,yt=yt||Q,ht=ht||vt,(tt!==y||ft!==S)&&(r.blendEquationSeparate(It[tt],It[ft]),y=tt,S=ft),(Q!==b||vt!==v||yt!==E||ht!==x)&&(r.blendFuncSeparate(j[Q],j[vt],j[yt],j[ht]),b=Q,v=vt,E=yt,x=ht),(St.equals(M)===!1||ot!==P)&&(r.blendColor(St.r,St.g,St.b,ot),M.copy(St),P=ot),g=U,A=!1}function lt(U,tt){U.side===Ai?Nt(r.CULL_FACE):ut(r.CULL_FACE);let Q=U.side===yn;tt&&(Q=!Q),z(Q),U.blending===Ho&&U.transparent===!1?ct(ks):ct(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let vt=U.stencilWrite;a.setTest(vt),vt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):Nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function z(U){N!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),N=U)}function mt(U){U!==l_?(ut(r.CULL_FACE),U!==D&&(U===xd?r.cullFace(r.BACK):U===c_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Nt(r.CULL_FACE),D=U}function Xt(U){U!==G&&(L&&r.lineWidth(U),G=U)}function Ut(U,tt,Q){U?(ut(r.POLYGON_OFFSET_FILL),(I!==tt||k!==Q)&&(I=tt,k=Q,o.getReversed()&&(tt=-tt,Q=-Q),r.polygonOffset(tt,Q))):Nt(r.POLYGON_OFFSET_FILL)}function Vt(U){U?ut(r.SCISSOR_TEST):Nt(r.SCISSOR_TEST)}function Qt(U){U===void 0&&(U=r.TEXTURE0+V-1),C!==U&&(r.activeTexture(U),C=U)}function re(U,tt,Q){Q===void 0&&(C===null?Q=r.TEXTURE0+V-1:Q=C);let vt=H[Q];vt===void 0&&(vt={type:void 0,texture:void 0},H[Q]=vt),(vt.type!==U||vt.texture!==tt)&&(C!==Q&&(r.activeTexture(Q),C=Q),r.bindTexture(U,tt||Tt[U]),vt.type=U,vt.texture=tt)}function F(){let U=H[C];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ae(){try{r.compressedTexImage2D(...arguments)}catch(U){$t("WebGLState:",U)}}function Kt(){try{r.compressedTexImage3D(...arguments)}catch(U){$t("WebGLState:",U)}}function Jt(){try{r.texSubImage2D(...arguments)}catch(U){$t("WebGLState:",U)}}function _t(){try{r.texSubImage3D(...arguments)}catch(U){$t("WebGLState:",U)}}function ge(){try{r.compressedTexSubImage2D(...arguments)}catch(U){$t("WebGLState:",U)}}function Bt(){try{r.compressedTexSubImage3D(...arguments)}catch(U){$t("WebGLState:",U)}}function qt(){try{r.texStorage2D(...arguments)}catch(U){$t("WebGLState:",U)}}function R(){try{r.texStorage3D(...arguments)}catch(U){$t("WebGLState:",U)}}function w(){try{r.texImage2D(...arguments)}catch(U){$t("WebGLState:",U)}}function Y(){try{r.texImage3D(...arguments)}catch(U){$t("WebGLState:",U)}}function at(U){return d[U]!==void 0?d[U]:r.getParameter(U)}function st(U,tt){d[U]!==tt&&(r.pixelStorei(U,tt),d[U]=tt)}function xt(U){q.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),q.copy(U))}function Mt(U){et.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),et.copy(U))}function J(U,tt){let Q=c.get(tt);Q===void 0&&(Q=new WeakMap,c.set(tt,Q));let vt=Q.get(U);vt===void 0&&(vt=r.getUniformBlockIndex(tt,U.name),r.uniformBlockBinding(tt,vt,vt),Q.set(U,vt))}function nt(U,tt,Q){let ft=c.get(tt).get(U);l[ft]!==Q&&(r.bindBufferBase(r.UNIFORM_BUFFER,ft,Q),l[ft]=Q)}function gt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},C=null,H={},u={},l={},f=new WeakMap,m=[],_=null,p=!1,g=null,y=null,b=null,v=null,S=null,E=null,x=null,M=new jt(0,0,0),P=0,A=!1,N=null,D=null,G=null,I=null,k=null,q.set(0,0,r.canvas.width,r.canvas.height),et.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ut,disable:Nt,bindFramebuffer:fe,drawBuffers:Pt,useProgram:Gt,setBlending:ct,setMaterial:lt,setFlipSided:z,setCullFace:mt,setLineWidth:Xt,setPolygonOffset:Ut,setScissorTest:Vt,activeTexture:Qt,bindTexture:re,unbindTexture:F,compressedTexImage2D:ae,compressedTexImage3D:Kt,texImage2D:w,texImage3D:Y,pixelStorei:st,getParameter:at,updateUBOMapping:J,uniformBlockBinding:nt,texStorage2D:qt,texStorage3D:R,texSubImage2D:Jt,texSubImage3D:_t,compressedTexSubImage2D:ge,compressedTexSubImage3D:Bt,scissor:xt,viewport:Mt,reset:gt}}function e1(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,_=new FinalizationRegistry(R=>m.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return p?new OffscreenCanvas(R,w):Wa("canvas")}function y(R,w,Y){let at=1,st=qt(R);if((st.width>Y||st.height>Y)&&(at=Y/Math.max(st.width,st.height)),at<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let xt=Math.floor(at*st.width),Mt=Math.floor(at*st.height);u===void 0&&(u=g(xt,Mt));let J=w?g(xt,Mt):u;return J.width=xt,J.height=Mt,J.getContext("2d").drawImage(R,0,0,xt,Mt),Zt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+xt+"x"+Mt+")."),J}else return"data"in R&&Zt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function b(R){return R.generateMipmaps}function v(R){r.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(R,w,Y,at,st,xt=!1){if(R!==null){if(r[R]!==void 0)return r[R];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Mt;at&&(Mt=t.get("EXT_texture_norm16"),Mt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=w;if(w===r.RED&&(Y===r.FLOAT&&(J=r.R32F),Y===r.HALF_FLOAT&&(J=r.R16F),Y===r.UNSIGNED_BYTE&&(J=r.R8),Y===r.UNSIGNED_SHORT&&Mt&&(J=Mt.R16_EXT),Y===r.SHORT&&Mt&&(J=Mt.R16_SNORM_EXT)),w===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(J=r.R8UI),Y===r.UNSIGNED_SHORT&&(J=r.R16UI),Y===r.UNSIGNED_INT&&(J=r.R32UI),Y===r.BYTE&&(J=r.R8I),Y===r.SHORT&&(J=r.R16I),Y===r.INT&&(J=r.R32I)),w===r.RG&&(Y===r.FLOAT&&(J=r.RG32F),Y===r.HALF_FLOAT&&(J=r.RG16F),Y===r.UNSIGNED_BYTE&&(J=r.RG8),Y===r.UNSIGNED_SHORT&&Mt&&(J=Mt.RG16_EXT),Y===r.SHORT&&Mt&&(J=Mt.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(J=r.RG8UI),Y===r.UNSIGNED_SHORT&&(J=r.RG16UI),Y===r.UNSIGNED_INT&&(J=r.RG32UI),Y===r.BYTE&&(J=r.RG8I),Y===r.SHORT&&(J=r.RG16I),Y===r.INT&&(J=r.RG32I)),w===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(J=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(J=r.RGB16UI),Y===r.UNSIGNED_INT&&(J=r.RGB32UI),Y===r.BYTE&&(J=r.RGB8I),Y===r.SHORT&&(J=r.RGB16I),Y===r.INT&&(J=r.RGB32I)),w===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),Y===r.UNSIGNED_INT&&(J=r.RGBA32UI),Y===r.BYTE&&(J=r.RGBA8I),Y===r.SHORT&&(J=r.RGBA16I),Y===r.INT&&(J=r.RGBA32I)),w===r.RGB&&(Y===r.UNSIGNED_SHORT&&Mt&&(J=Mt.RGB16_EXT),Y===r.SHORT&&Mt&&(J=Mt.RGB16_SNORM_EXT),Y===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(J=r.R11F_G11F_B10F)),w===r.RGBA){let nt=xt?Va:me.getTransfer(st);Y===r.FLOAT&&(J=r.RGBA32F),Y===r.HALF_FLOAT&&(J=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(J=nt===be?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT&&Mt&&(J=Mt.RGBA16_EXT),Y===r.SHORT&&Mt&&(J=Mt.RGBA16_SNORM_EXT),Y===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(R,w){let Y;return R?w===null||w===Oi||w===Hs?Y=r.DEPTH24_STENCIL8:w===Fi?Y=r.DEPTH32F_STENCIL8:w===Xo&&(Y=r.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Oi||w===Hs?Y=r.DEPTH_COMPONENT24:w===Fi?Y=r.DEPTH_COMPONENT32F:w===Xo&&(Y=r.DEPTH_COMPONENT16),Y}function M(R,w){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==vn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function P(R){let w=new WeakRef(R);n.get(R).__ref=w,m.add(w),_.register(R,w,w)}function A(R){let w=n.get(R).__ref;w!==void 0&&(m.delete(w),_.unregister(w))}function N(R){G(R.target)}function D(R){I(R.target)}function G(R){R.removeEventListener("dispose",N),A(R),V(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function I(R){R.removeEventListener("dispose",D),A(R),W(R)}function k(){for(let R of m){let w=R.deref();w!==void 0&&(w.isRenderTarget===!0?I(w):G(w))}m.clear(),d.clear()}function V(R){let w=n.get(R);if(w.__webglInit===void 0)return;let Y=R.source,at=f.get(Y);if(at){let st=at[w.__cacheKey];st.usedTimes--,st.usedTimes===0&&L(R),Object.keys(at).length===0&&f.delete(Y)}n.remove(R)}function L(R){let w=n.get(R);r.deleteTexture(w.__webglTexture);let Y=R.source,at=f.get(Y);delete at[w.__cacheKey],o.memory.textures--}function W(R){let w=n.get(R);w.__depthDisposeCallback&&w.__depthDisposeCallback();let Y=R.depthTexture;if(Y&&Y.renderTarget===R&&G(Y),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(w.__webglFramebuffer[st]))for(let xt=0;xt<w.__webglFramebuffer[st].length;xt++)r.deleteFramebuffer(w.__webglFramebuffer[st][xt]);else r.deleteFramebuffer(w.__webglFramebuffer[st]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[st])}else{if(Array.isArray(w.__webglFramebuffer))for(let st=0;st<w.__webglFramebuffer.length;st++)r.deleteFramebuffer(w.__webglFramebuffer[st]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let st=0;st<w.__webglColorRenderbuffer.length;st++)w.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[st]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let at=R.textures;for(let st=0,xt=at.length;st<xt;st++){let Mt=n.get(at[st]);Mt.__webglTexture&&(r.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(at[st])}n.remove(R)}let B=0;function C(){B=0}function H(){return B}function dt(R){B=R}function bt(){let R=B;return R>=i.maxTextures&&Zt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,R}function q(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.mipmapsAutoUpdate),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function et(R,w){let Y=n.get(R);if(R.isVideoTexture&&ge(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Y.__version!==R.version){let at=R.image;if(at===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(Y,R,w);return}}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+w)}function pt(R,w){let Y=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){lt(Y,R,w);return}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+w)}function Tt(R,w){let Y=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){lt(Y,R,w);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+w)}function ut(R,w){let Y=n.get(R);if(R.version>0&&Y.__version!==R.version){z(Y,R,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+w)}let Nt={[Do]:r.REPEAT,[Ji]:r.CLAMP_TO_EDGE,[$c]:r.MIRRORED_REPEAT},fe={[dn]:r.NEAREST,[I_]:r.NEAREST_MIPMAP_NEAREST,[ul]:r.NEAREST_MIPMAP_LINEAR,[vn]:r.LINEAR,[Ph]:r.LINEAR_MIPMAP_NEAREST,[Ui]:r.LINEAR_MIPMAP_LINEAR},Pt={[U_]:r.NEVER,[Vd]:r.ALWAYS,[O_]:r.LESS,[kd]:r.LEQUAL,[F_]:r.EQUAL,[Gd]:r.GEQUAL,[B_]:r.GREATER,[z_]:r.NOTEQUAL};function Gt(R,w){if(w.type===Fi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===vn||w.magFilter===Ph||w.magFilter===ul||w.magFilter===Ui||w.minFilter===vn||w.minFilter===Ph||w.minFilter===ul||w.minFilter===Ui)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Nt[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Nt[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Nt[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,fe[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,fe[w.minFilter]),w.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Pt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===dn||w.minFilter!==ul&&w.minFilter!==Ui||w.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function It(R,w){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",N),P(w));let at=w.source,st=f.get(at);st===void 0&&(st={},f.set(at,st));let xt=q(w);if(xt!==R.__cacheKey){st[xt]===void 0&&(st[xt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),st[xt].usedTimes++;let Mt=st[R.__cacheKey];Mt!==void 0&&(st[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&L(w)),R.__cacheKey=xt,R.__webglTexture=st[xt].texture}return Y}function j(R,w,Y){return Math.floor(Math.floor(R/Y)/w)}function ct(R,w,Y,at){let xt=R.updateRanges;if(xt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,Y,at,w.data);else{xt.sort((U,tt)=>U.start-tt.start);let Mt=0;for(let U=1;U<xt.length;U++){let tt=xt[Mt],Q=xt[U],vt=tt.start+tt.count,ft=j(Q.start,w.width,4),yt=j(tt.start,w.width,4);Q.start<=vt+1&&ft===yt&&j(Q.start+Q.count-1,w.width,4)===ft?tt.count=Math.max(tt.count,Q.start+Q.count-tt.start):(++Mt,xt[Mt]=Q)}xt.length=Mt+1;let J=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),gt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let U=0,tt=xt.length;U<tt;U++){let Q=xt[U],vt=Math.floor(Q.start/4),ft=Math.ceil(Q.count/4),yt=vt%w.width,ht=Math.floor(vt/w.width),St=ft,ot=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(r.UNPACK_SKIP_ROWS,ht),e.texSubImage2D(r.TEXTURE_2D,0,yt,ht,St,ot,Y,at,w.data)}R.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,J),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,gt)}}function lt(R,w,Y){let at=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(at=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(at=r.TEXTURE_3D);let st=It(R,w),xt=w.source;e.bindTexture(at,R.__webglTexture,r.TEXTURE0+Y);let Mt=n.get(xt);if(xt.version!==Mt.__version||st===!0){if(e.activeTexture(r.TEXTURE0+Y),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ot=me.getPrimaries(me.workingColorSpace),it=w.colorSpace===Tr?null:me.getPrimaries(w.colorSpace),wt=w.colorSpace===Tr||ot===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let nt=y(w.image,!1,i.maxTextureSize);nt=Bt(w,nt);let gt=s.convert(w.format,w.colorSpace),U=s.convert(w.type),tt=E(w.internalFormat,gt,U,w.normalized,w.colorSpace,w.isVideoTexture);Gt(at,w);let Q,vt=w.mipmaps,ft=w.isVideoTexture!==!0,yt=Mt.__version===void 0||st===!0,ht=xt.dataReady,St=M(w,nt);if(w.isDepthTexture)tt=x(w.format===wr,w.type),yt&&(ft?e.texStorage2D(r.TEXTURE_2D,1,tt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,tt,nt.width,nt.height,0,gt,U,null));else if(w.isDataTexture)if(vt.length>0){ft&&yt&&e.texStorage2D(r.TEXTURE_2D,St,tt,vt[0].width,vt[0].height);for(let ot=0,it=vt.length;ot<it;ot++)Q=vt[ot],ft?ht&&e.texSubImage2D(r.TEXTURE_2D,ot,0,0,Q.width,Q.height,gt,U,Q.data):e.texImage2D(r.TEXTURE_2D,ot,tt,Q.width,Q.height,0,gt,U,Q.data);w.generateMipmaps=!1}else ft?(yt&&e.texStorage2D(r.TEXTURE_2D,St,tt,nt.width,nt.height),ht&&ct(w,nt,gt,U)):e.texImage2D(r.TEXTURE_2D,0,tt,nt.width,nt.height,0,gt,U,nt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ft&&yt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,St,tt,vt[0].width,vt[0].height,nt.depth);for(let ot=0,it=vt.length;ot<it;ot++)if(Q=vt[ot],w.format!==zi)if(gt!==null)if(ft){if(ht)if(w.layerUpdates.size>0){let wt=$d(Q.width,Q.height,w.format,w.type);for(let rt of w.layerUpdates){let Lt=Q.data.subarray(rt*wt/Q.data.BYTES_PER_ELEMENT,(rt+1)*wt/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,rt,Q.width,Q.height,1,gt,Lt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,Q.width,Q.height,nt.depth,gt,Q.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ot,tt,Q.width,Q.height,nt.depth,0,Q.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?ht&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,Q.width,Q.height,nt.depth,gt,U,Q.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ot,tt,Q.width,Q.height,nt.depth,0,gt,U,Q.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ft&&yt&&e.texStorage2D(r.TEXTURE_2D,St,tt,vt[0].width,vt[0].height);for(let ot=0,it=vt.length;ot<it;ot++)Q=vt[ot],w.format!==zi?gt!==null?ft?ht&&e.compressedTexSubImage2D(r.TEXTURE_2D,ot,0,0,Q.width,Q.height,gt,Q.data):e.compressedTexImage2D(r.TEXTURE_2D,ot,tt,Q.width,Q.height,0,Q.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?ht&&e.texSubImage2D(r.TEXTURE_2D,ot,0,0,Q.width,Q.height,gt,U,Q.data):e.texImage2D(r.TEXTURE_2D,ot,tt,Q.width,Q.height,0,gt,U,Q.data)}else if(w.isDataArrayTexture)if(ft){if(yt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,St,tt,nt.width,nt.height,nt.depth),ht)if(w.layerUpdates.size>0){let ot=$d(nt.width,nt.height,w.format,w.type);for(let it of w.layerUpdates){let wt=nt.data.subarray(it*ot/nt.data.BYTES_PER_ELEMENT,(it+1)*ot/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,it,nt.width,nt.height,1,gt,U,wt)}w.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,U,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,tt,nt.width,nt.height,nt.depth,0,gt,U,nt.data);else if(w.isData3DTexture)ft?(yt&&e.texStorage3D(r.TEXTURE_3D,St,tt,nt.width,nt.height,nt.depth),ht&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,U,nt.data)):e.texImage3D(r.TEXTURE_3D,0,tt,nt.width,nt.height,nt.depth,0,gt,U,nt.data);else if(w.isFramebufferTexture){if(yt)if(ft)e.texStorage2D(r.TEXTURE_2D,St,tt,nt.width,nt.height);else{let ot=nt.width,it=nt.height;for(let wt=0;wt<St;wt++)e.texImage2D(r.TEXTURE_2D,wt,tt,ot,it,0,gt,U,null),ot>>=1,it>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){let ot=r.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),nt.parentNode!==ot){ot.appendChild(nt),d.add(w),ot.onpaint=it=>{let wt=it.changedElements;for(let rt of d)wt.includes(rt.image)&&(rt.needsUpdate=!0)},ot.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{let wt=r.RGBA,rt=r.RGBA,Lt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,wt,rt,Lt,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(vt.length>0){if(ft&&yt){let ot=qt(vt[0]);e.texStorage2D(r.TEXTURE_2D,St,tt,ot.width,ot.height)}for(let ot=0,it=vt.length;ot<it;ot++)Q=vt[ot],ft?ht&&e.texSubImage2D(r.TEXTURE_2D,ot,0,0,gt,U,Q):e.texImage2D(r.TEXTURE_2D,ot,tt,gt,U,Q);w.generateMipmaps=!1}else if(ft){if(yt){let ot=qt(nt);e.texStorage2D(r.TEXTURE_2D,St,tt,ot.width,ot.height)}ht&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,U,nt)}else e.texImage2D(r.TEXTURE_2D,0,tt,gt,U,nt);b(w)&&w.mipmapsAutoUpdate===!0&&v(at),Mt.__version=xt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function z(R,w,Y){if(w.image.length!==6)return;let at=It(R,w),st=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+Y);let xt=n.get(st);if(st.version!==xt.__version||at===!0){e.activeTexture(r.TEXTURE0+Y);let Mt=me.getPrimaries(me.workingColorSpace),J=w.colorSpace===Tr?null:me.getPrimaries(w.colorSpace),nt=w.colorSpace===Tr||Mt===J?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let gt=w.isCompressedTexture||w.image[0].isCompressedTexture,U=w.image[0]&&w.image[0].isDataTexture,tt=[];for(let rt=0;rt<6;rt++)!gt&&!U?tt[rt]=y(w.image[rt],!0,i.maxCubemapSize):tt[rt]=U?w.image[rt].image:w.image[rt],tt[rt]=Bt(w,tt[rt]);let Q=tt[0],vt=s.convert(w.format,w.colorSpace),ft=s.convert(w.type),yt=E(w.internalFormat,vt,ft,w.normalized,w.colorSpace),ht=w.isVideoTexture!==!0,St=xt.__version===void 0||at===!0,ot=st.dataReady,it=M(w,Q);Gt(r.TEXTURE_CUBE_MAP,w);let wt;if(w.isDepthTexture){if(yt=x(w.format===wr,w.type),St)if(ht)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,yt,Q.width,Q.height);else for(let rt=0;rt<6;rt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,yt,Q.width,Q.height,0,vt,ft,null)}else if(gt){ht&&St&&e.texStorage2D(r.TEXTURE_CUBE_MAP,it,yt,Q.width,Q.height);for(let rt=0;rt<6;rt++){wt=tt[rt].mipmaps;for(let Lt=0;Lt<wt.length;Lt++){let ue=wt[Lt];w.format!==zi?vt!==null?ht?ot&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt,0,0,ue.width,ue.height,vt,ue.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt,yt,ue.width,ue.height,0,ue.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt,0,0,ue.width,ue.height,vt,ft,ue.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt,yt,ue.width,ue.height,0,vt,ft,ue.data)}}}else{if(wt=w.mipmaps,ht&&St){wt.length>0&&it++;let rt=qt(tt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,it,yt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(U){ht?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,tt[rt].width,tt[rt].height,vt,ft,tt[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,yt,tt[rt].width,tt[rt].height,0,vt,ft,tt[rt].data);for(let Lt=0;Lt<wt.length;Lt++){let ne=wt[Lt].image[rt].image;ht?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt+1,0,0,ne.width,ne.height,vt,ft,ne.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt+1,yt,ne.width,ne.height,0,vt,ft,ne.data)}}else{ht?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,vt,ft,tt[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,yt,vt,ft,tt[rt]);for(let Lt=0;Lt<wt.length;Lt++){let ue=wt[Lt];ht?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt+1,0,0,vt,ft,ue.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt+1,yt,vt,ft,ue.image[rt])}}}b(w)&&w.mipmapsAutoUpdate===!0&&v(r.TEXTURE_CUBE_MAP),xt.__version=st.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function mt(R,w,Y,at,st,xt){let Mt=s.convert(Y.format,Y.colorSpace),J=s.convert(Y.type),nt=E(Y.internalFormat,Mt,J,Y.normalized,Y.colorSpace),gt=n.get(w),U=n.get(Y);if(U.__renderTarget=w,!gt.__hasExternalTextures){let tt=Math.max(1,w.width>>xt),Q=Math.max(1,w.height>>xt);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,xt,nt,tt,Q,w.depth,0,Mt,J,null):e.texImage2D(st,xt,nt,tt,Q,0,Mt,J,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),_t(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,at,st,U.__webglTexture,0,Jt(w)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,at,st,U.__webglTexture,xt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(R,w,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer){let at=w.depthTexture,st=at&&at.isDepthTexture?at.type:null,xt=x(w.stencilBuffer,st),Mt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_t(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt(w),xt,w.width,w.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt(w),xt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,xt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,R)}else{let at=w.textures;for(let st=0;st<at.length;st++){let xt=at[st],Mt=s.convert(xt.format,xt.colorSpace),J=s.convert(xt.type),nt=E(xt.internalFormat,Mt,J,xt.normalized,xt.colorSpace);_t(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt(w),nt,w.width,w.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt(w),nt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,nt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ut(R,w,Y){let at=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(w.depthTexture);st.__renderTarget=w;let xt=at?w.depthTexture.image[0]:w.depthTexture.image;(!st.__webglTexture||xt.width!==w.width||xt.height!==w.height)&&(xt.width=w.width,xt.height=w.height,w.depthTexture.needsUpdate=!0),at?ut(w.depthTexture,0):et(w.depthTexture,0);let Mt=st.__webglTexture,J=Jt(w),nt=at?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,gt=w.depthTexture.format===wr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===yr)_t(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,nt,Mt,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,gt,nt,Mt,0);else if(w.depthTexture.format===wr)_t(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,nt,Mt,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,gt,nt,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(R){let w=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let at=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),at){let st=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,at.removeEventListener("dispose",st)};at.addEventListener("dispose",st),w.__depthDisposeCallback=st}w.__boundDepthTexture=at}if(R.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let at=0;at<6;at++)Ut(w.__webglFramebuffer[at],R,at);else R.texture.mipmaps.length>0?Ut(w.__webglFramebuffer[0],R,0):Ut(w.__webglFramebuffer,R,0);else if(Y){w.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[at]),w.__webglDepthbuffer[at]===void 0)w.__webglDepthbuffer[at]=r.createRenderbuffer(),Xt(w.__webglDepthbuffer[at],R,!1);else{let st=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=w.__webglDepthbuffer[at];r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,xt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Xt(w.__webglDepthbuffer,R,!1);else{let st=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,xt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(R,w,Y){let at=n.get(R);w!==void 0&&mt(at.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Vt(R)}function re(R){let w=R.texture,Y=n.get(R),at=n.get(w);R.addEventListener("dispose",D),P(R);let st=R.textures,xt=R.isWebGLCubeRenderTarget===!0,Mt=st.length>1;if(Mt||(at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture()),at.__version=w.version,o.memory.textures++),xt){Y.__webglFramebuffer=[];for(let J=0;J<6;J++)if(w.mipmaps.length>0){Y.__webglFramebuffer[J]=[];for(let nt=0;nt<w.mipmaps.length;nt++)Y.__webglFramebuffer[J][nt]=r.createFramebuffer()}else Y.__webglFramebuffer[J]=r.createFramebuffer()}else{if(w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let J=0;J<w.mipmaps.length;J++)Y.__webglFramebuffer[J]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let J=0,nt=st.length;J<nt;J++){let gt=n.get(st[J]);gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&_t(R)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let J=0;J<st.length;J++){let nt=st[J];Y.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[J]);let gt=s.convert(nt.format,nt.colorSpace),U=s.convert(nt.type),tt=E(nt.internalFormat,gt,U,nt.normalized,nt.colorSpace,R.isXRRenderTarget===!0),Q=Jt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,tt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,Y.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt(Y.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xt){e.bindTexture(r.TEXTURE_CUBE_MAP,at.__webglTexture),Gt(r.TEXTURE_CUBE_MAP,w);for(let J=0;J<6;J++)if(w.mipmaps.length>0)for(let nt=0;nt<w.mipmaps.length;nt++)mt(Y.__webglFramebuffer[J][nt],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt);else mt(Y.__webglFramebuffer[J],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);b(w)?v(r.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let J=0,nt=st.length;J<nt;J++){let gt=st[J],U=n.get(gt),tt=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(tt,U.__webglTexture),Gt(tt,gt),mt(Y.__webglFramebuffer,R,gt,r.COLOR_ATTACHMENT0+J,tt,0),b(gt)&&v(tt)}e.unbindTexture()}else{let J=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(J,at.__webglTexture),Gt(J,w),w.mipmaps.length>0)for(let nt=0;nt<w.mipmaps.length;nt++)mt(Y.__webglFramebuffer[nt],R,w,r.COLOR_ATTACHMENT0,J,nt);else mt(Y.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,J,0);b(w)?v(J):w.mipmaps.length>0&&r.texParameteri(J,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&Vt(R)}function F(R){let w=R.textures;for(let Y=0,at=w.length;Y<at;Y++){let st=w[Y];if(b(st)&&st.mipmapsAutoUpdate===!0){let xt=S(R),Mt=n.get(st).__webglTexture;e.bindTexture(xt,Mt),v(xt),e.unbindTexture()}}}let ae=[];function Kt(R){if(R.samples>0){if(_t(R)===!1){let w=R.textures,Y=R.width,at=R.height,st=r.COLOR_BUFFER_BIT,xt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(R),J=w.length>1;if(J)for(let gt=0;gt<w.length;gt++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let gt=0;gt<w.length;gt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),J){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[gt]);let U=n.get(w[gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,U,0)}r.blitFramebuffer(0,0,Y,at,0,0,Y,at,st,r.NEAREST),l===!0&&(ae.length=0,ae.push(r.COLOR_ATTACHMENT0+gt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ae.push(xt),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let gt=0;gt<w.length;gt++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[gt]);let U=n.get(w[gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,U,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let w=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Jt(R){return Math.min(i.maxSamples,R.samples)}function _t(R){let w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ge(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Bt(R,w){let Y=R.colorSpace,at=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==Ga&&Y!==Tr&&(me.getTransfer(Y)===be?(at!==zi||st!==mi)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",Y)),w}function qt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=bt,this.resetTextureUnits=C,this.getTextureUnits=H,this.setTextureUnits=dt,this.setTexture2D=et,this.setTexture2DArray=pt,this.setTexture3D=Tt,this.setTextureCube=ut,this.rebindTextures=Qt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=_t,this.dispose=k}function n1(r,t){function e(n,i=Tr){let s,o=me.getTransfer(i);if(n===mi)return r.UNSIGNED_BYTE;if(n===Lh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Dh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Od)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dd)return r.BYTE;if(n===Nd)return r.SHORT;if(n===Xo)return r.UNSIGNED_SHORT;if(n===Ih)return r.INT;if(n===Oi)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===Bi)return r.HALF_FLOAT;if(n===Fd)return r.ALPHA;if(n===Bd)return r.RGB;if(n===zi)return r.RGBA;if(n===yr)return r.DEPTH_COMPONENT;if(n===wr)return r.DEPTH_STENCIL;if(n===zd)return r.RED;if(n===Nh)return r.RED_INTEGER;if(n===os)return r.RG;if(n===Uh)return r.RG_INTEGER;if(n===Oh)return r.RGBA_INTEGER;if(n===fl||n===dl||n===pl||n===ml)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ml)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fh||n===Bh||n===zh||n===kh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gh||n===Vh||n===Hh||n===Wh||n===Xh||n===gl||n===qh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Gh||n===Vh)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Hh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wh)return s.COMPRESSED_R11_EAC;if(n===Xh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===gl)return s.COMPRESSED_RG11_EAC;if(n===qh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yh||n===Zh||n===Jh||n===$h||n===Kh||n===Qh||n===jh||n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===ou)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Yh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$h)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===iu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ru)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===su)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ou)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===au||n===lu||n===cu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===au)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hu||n===uu||n===_l||n===fu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===hu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===uu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var i1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r1=`
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

}`,hp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new di({vertexShader:i1,fragmentShader:r1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dn(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},up=class extends Ki{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new hp,g={},y=e.getContextAttributes(),b=null,v=null,S=[],E=[],x=new Ct,M=null,P=null,A=new xn;A.viewport=new Ge;let N=new xn;N.viewport=new Ge;let D=[A,N],G=new Eh,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=S[q];return et===void 0&&(et=new Oo,S[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=S[q];return et===void 0&&(et=new Oo,S[q]=et),et.getGripSpace()},this.getHand=function(q){let et=S[q];return et===void 0&&(et=new Oo,S[q]=et),et.getHandSpace()};function V(q){let et=E.indexOf(q.inputSource);if(et===-1)return;let pt=S[et];pt!==void 0&&(pt.update(q.inputSource,q.frame,c||o),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function L(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",W);for(let q=0;q<S.length;q++){let et=E[q];et!==null&&(E[q]=null,S[q].disconnect(et))}I=null,k=null,p.reset();for(let q in g)delete g[q];if(t.setRenderTarget(b),f=null,u=null,d=null,i=null,v=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),P!==null){let q=P.camera;q.fov=P.fov,q.zoom=P.zoom,q.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",L),i.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Tt=null,ut=null;y.depth&&(ut=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=y.stencil?wr:yr,Tt=y.stencil?Hs:Oi);let Nt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Nt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new ui(u.textureWidth,u.textureHeight,{format:zi,type:mi,depthTexture:new Mr(u.textureWidth,u.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,pt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ui(f.framebufferWidth,f.framebufferHeight,{format:zi,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),bt.setContext(i),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(q){for(let et=0;et<q.removed.length;et++){let pt=q.removed[et],Tt=E.indexOf(pt);Tt>=0&&(E[Tt]=null,S[Tt].disconnect(pt))}for(let et=0;et<q.added.length;et++){let pt=q.added[et],Tt=E.indexOf(pt);if(Tt===-1){for(let Nt=0;Nt<S.length;Nt++)if(Nt>=E.length){E.push(pt),Tt=Nt;break}else if(E[Nt]===null){E[Nt]=pt,Tt=Nt;break}if(Tt===-1)break}let ut=S[Tt];ut&&ut.connect(pt)}}function B(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,pt=q.far;p.texture!==null&&(p.depthNear>0&&(et=p.depthNear),p.depthFar>0&&(pt=p.depthFar)),G.near=N.near=A.near=et,G.far=N.far=A.far=pt,(I!==G.near||k!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,k=G.far),G.layers.mask=q.layers.mask|6,A.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;let Tt=q.parent,ut=G.cameras;B(G,Tt);for(let Nt=0;Nt<ut.length;Nt++)B(ut[Nt],Tt);G.projectionMatrix.copy(A.projectionMatrix),G.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&q.isPerspectiveCamera&&(P={camera:q,fov:q.fov,zoom:q.zoom}),C(q,G,Tt)};function C(q,et,pt){pt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(q){return g[q]};let H=null;function dt(q,et){if(h=et.getViewerPose(c||o),m=et,h!==null){let pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Tt=!1;pt.length!==G.cameras.length&&(G.cameras.length=0,Tt=!0);for(let Pt=0;Pt<pt.length;Pt++){let Gt=pt[Pt],It=null;if(f!==null)It=f.getViewport(Gt);else{let ct=d.getViewSubImage(u,Gt);It=ct.viewport,Pt===0&&(t.setRenderTargetTextures(v,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(v))}let j=D[Pt];j===void 0&&(j=new xn,j.layers.enable(Pt),j.viewport=new Ge,D[Pt]=j),j.matrix.fromArray(Gt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Gt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(It.x,It.y,It.width,It.height),Pt===0&&(G.matrix.copy(j.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Tt===!0&&G.cameras.push(j)}let ut=i.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Pt=d.getDepthInformation(pt[0]);Pt&&Pt.isValid&&Pt.texture&&p.init(Pt,i.renderState)}if(ut&&ut.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Pt=0;Pt<pt.length;Pt++){let Gt=pt[Pt].camera;if(Gt){let It=g[Gt];It||(It=new Qa,g[Gt]=It);let j=d.getCameraImage(Gt);It.sourceTexture=j}}}}for(let pt=0;pt<S.length;pt++){let Tt=E[pt],ut=S[pt];Tt!==null&&ut!==void 0&&ut.update(Tt,et,c||o)}H&&H(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let bt=new S0;bt.setAnimationLoop(dt),this.setAnimationLoop=function(q){H=q},this.dispose=function(){}}},s1=new ke,I0=new te;I0.set(-1,0,0,0,1,0,0,0,1);function o1(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Yd(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,y,b,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,v)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===yn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===yn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=t.get(g),b=y.envMap,v=y.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(I0),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=b*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===yn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let y=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function a1(r,t,e,n){let i={},s={};function o(y,b){let v=b.program;n.uniformBlockBinding(y,v,i[y.id])}function a(y,b){let v=i[y.id];v===void 0&&(m(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",p));let S=b.program;n.updateUBOMapping(y,S);let E=t.render.frame;s[y.id]!==E&&(c(y),s[y.id]=E)}function l(y){let b=r.createBuffer(),v=y.__size,S=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,v,S),r.bindBuffer(r.UNIFORM_BUFFER,null),b}function c(y){let b=i[y.id],v=y.uniforms,S=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let E=0,x=v.length;E<x;E++){let M=v[E];if(Array.isArray(M))for(let P=0,A=M.length;P<A;P++)h(M[P],E,P,S);else h(M,E,0,S)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(y,b,v,S){if(u(y,b,v,S)===!0){let E=y.__offset,x=y.value;if(Array.isArray(x)){let M=0;for(let P=0;P<x.length;P++){let A=x[P],N=_(A,!0);d(A,y.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,y.__data)}}function d(y,b,v){typeof y=="number"||typeof y=="boolean"?b[v]=y:y.isMatrix3?(b[v]=y.elements[0],b[v+1]=y.elements[1],b[v+2]=y.elements[2],b[v+3]=0,b[v+4]=y.elements[3],b[v+5]=y.elements[4],b[v+6]=y.elements[5],b[v+7]=0,b[v+8]=y.elements[6],b[v+9]=y.elements[7],b[v+10]=y.elements[8],b[v+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-v),v):y.toArray(b,v)}function u(y,b,v,S){let E=y.value,x=b+"_"+v;if(Array.isArray(E)){S[x]===void 0&&(S[x]=[]);let M=S[x],P=!1;for(let A=0;A<E.length;A++)f(E[A],M,A)===!0&&(P=!0);return P}return f(E,S,x)}function f(y,b,v){if(b[v]===void 0)return typeof y=="number"||typeof y=="boolean"?b[v]=y:ArrayBuffer.isView(y)?b[v]=y.slice():b[v]=y.clone(),!0;{let S=b[v];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return b[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function m(y){let b=y.uniforms,v=0,S=16;for(let x=0,M=b.length;x<M;x++){let P=Array.isArray(b[x])?b[x]:[b[x]];for(let A=0,N=P.length;A<N;A++){let D=P[A],G=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(b[x])||Array.isArray(D.value),k=v;for(let L=0,W=G.length;L<W;L++){let B=G[L],C=_(B,I),H=v%S,dt=H%C.boundary,bt=H+dt;v+=dt,bt!==0&&S-bt<C.storage&&(v+=S-bt),L===0&&(k=v),v+=C.storage}let V=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new V((v-k)/Float32Array.BYTES_PER_ELEMENT),D.__offset=k}}let E=v%S;return E>0&&(v+=S-E),y.__size=v,y.__cache={},this}function _(y,b){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(y){let b=y.target;b.removeEventListener("dispose",p),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function g(){for(let y in i)r.deleteBuffer(i[y]);i={},s={}}return{bind:o,update:a,dispose:g}}var l1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),tr=null;function c1(){return tr===null&&(tr=new ih(l1,16,16,os,Bi),tr.name="DFG_LUT",tr.minFilter=vn,tr.magFilter=vn,tr.wrapS=Ji,tr.wrapT=Ji,tr.generateMipmaps=!1,tr.needsUpdate=!0),tr}var Jo=class{constructor(t={}){let{canvas:e=G_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=mi}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,p=new Set([Oh,Uh,Nh]),g=new Set([mi,Oi,Xo,Hs,Lh,Dh]),y=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},S=null,E=null,x=[],M=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,N=!1,D=null,G=null,I=null,k=null;this._outputColorSpace=hi;let V=0,L=0,W=null,B=-1,C=null,H=new Ge,dt=new Ge,bt=null,q=new jt(0),et=0,pt=e.width,Tt=e.height,ut=1,Nt=null,fe=null,Pt=new Ge(0,0,pt,Tt),Gt=new Ge(0,0,pt,Tt),It=!1,j=new Fs,ct=new rh,lt=!1,z=!1,mt=new ke,Xt=new Z,Ut=new Ge,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function re(){return W===null?ut:1}let F=n;function ae(T,O){return e.getContext(T,O)}let Kt,Jt,_t,ge,Bt,qt,R,w,Y,at,st,xt,Mt,J,nt,gt,U,tt,Q,vt,ft,yt,ht;try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),F===null){let O="webgl2";if(F=ae(O,T),F===null)throw ae(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}St()}catch(T){throw e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),$t("WebGLRenderer: "+T.message),T}function St(){Kt=new yw(F),Kt.init(),ft=new n1(F,Kt),Jt=new cw(F,Kt,t,ft),_t=new t1(F,Kt),Jt.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),G=F.createFramebuffer(),I=F.createFramebuffer(),k=F.createFramebuffer(),ge=new bw(F),Bt=new kT,qt=new e1(F,Kt,_t,Bt,Jt,ft,ge),R=new vw(A),w=new TS(F),yt=new aw(F,w),Y=new Sw(F,w,ge,yt),at=new Tw(F,Y,w,yt,ge),tt=new ww(F,Jt,qt),nt=new hw(Bt),st=new zT(A,R,Kt,Jt,yt,nt),xt=new o1(A,Bt),Mt=new VT,J=new ZT(Kt),U=new ow(A,R,_t,at,m,l),gt=new jT(A,at,Jt),ht=new a1(F,ge,Jt,_t),Q=new lw(F,Kt,ge),vt=new Mw(F,Kt,ge),ge.programs=st.programs,A.capabilities=Jt,A.extensions=Kt,A.properties=Bt,A.renderLists=Mt,A.shadowMap=gt,A.state=_t,A.info=ge}_!==mi&&(P=new Aw(_,e.width,e.height,a,i,s));let ot=new up(A,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=Kt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Kt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(T){T!==void 0&&(ut=T,this.setSize(pt,Tt,!1))},this.getSize=function(T){return T.set(pt,Tt)},this.setSize=function(T,O,K=!0){if(ot.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=T,Tt=O,e.width=Math.floor(T*ut),e.height=Math.floor(O*ut),K===!0&&(e.style.width=T+"px",e.style.height=O+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(pt*ut,Tt*ut).floor()},this.setDrawingBufferSize=function(T,O,K){pt=T,Tt=O,ut=K,e.width=Math.floor(T*K),e.height=Math.floor(O*K),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(_===mi){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(H)},this.getViewport=function(T){return T.copy(Pt)},this.setViewport=function(T,O,K,X){T.isVector4?Pt.set(T.x,T.y,T.z,T.w):Pt.set(T,O,K,X),_t.viewport(H.copy(Pt).multiplyScalar(re()).round())},this.getScissor=function(T){return T.copy(Gt)},this.setScissor=function(T,O,K,X){T.isVector4?Gt.set(T.x,T.y,T.z,T.w):Gt.set(T,O,K,X),_t.scissor(dt.copy(Gt).multiplyScalar(re()).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(T){_t.setScissorTest(It=T)},this.setOpaqueSort=function(T){Nt=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,K=!0){let X=0;if(T){let $=!1;if(W!==null){let At=W.texture.format;$=p.has(At)}if($){let At=W.texture.type,Ft=g.has(At),Et=U.getClearColor(),Dt=U.getClearAlpha(),Ht=Et.r,ie=Et.g,de=Et.b;Ft?(y[0]=Ht,y[1]=ie,y[2]=de,y[3]=Dt,F.clearBufferuiv(F.COLOR,0,y)):(b[0]=Ht,b[1]=ie,b[2]=de,b[3]=Dt,F.clearBufferiv(F.COLOR,0,b))}else X|=F.COLOR_BUFFER_BIT}O&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),U.dispose(),Mt.dispose(),J.dispose(),qt.dispose(),Bt.dispose(),R.dispose(),at.dispose(),Y.dispose(),yt.dispose(),ht.dispose(),st.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Ee),ot.removeEventListener("sessionend",Se),en.stop()};function it(T){T.preventDefault(),Wd("WebGLRenderer: Context Lost."),N=!0}function wt(){Wd("WebGLRenderer: Context Restored."),N=!1;let T=ge.autoReset,O=gt.enabled,K=gt.autoUpdate,X=gt.needsUpdate,$=gt.type;St(),ge.autoReset=T,gt.enabled=O,gt.autoUpdate=K,gt.needsUpdate=X,gt.type=$}function rt(T){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Lt(T){let O=T.target;O.removeEventListener("dispose",Lt),ue(O)}function ue(T){ne(T),Bt.remove(T)}function ne(T){let O=Bt.get(T).programs;O!==void 0&&(O.forEach(function(K){st.releaseProgram(K)}),T.isShaderMaterial&&st.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,K,X,$,At){O===null&&(O=Vt);let Ft=$.isMesh&&$.matrixWorld.determinantAffine()<0,Et=gi(T,O,K,X,$);_t.setMaterial(X,Ft);let Dt=K.index,Ht=1;if(X.wireframe===!0){if(Dt=Y.getWireframeAttribute(K),Dt===void 0)return;Ht=2}let ie=K.drawRange,de=K.attributes.position,zt=ie.start*Ht,pe=(ie.start+ie.count)*Ht;At!==null&&(zt=Math.max(zt,At.start*Ht),pe=Math.min(pe,(At.start+At.count)*Ht)),Dt!==null?(zt=Math.max(zt,0),pe=Math.min(pe,Dt.count)):de!=null&&(zt=Math.max(zt,0),pe=Math.min(pe,de.count));let Ke=pe-zt;if(Ke<0||Ke===1/0)return;yt.setup($,X,Et,K,Dt);let Pe,Ce=Q;if(Dt!==null&&(Pe=w.get(Dt),Ce=vt,Ce.setIndex(Pe)),$.isMesh)X.wireframe===!0?(_t.setLineWidth(X.wireframeLinewidth*re()),Ce.setMode(F.LINES)):Ce.setMode(F.TRIANGLES);else if($.isLine){let Mn=X.linewidth;Mn===void 0&&(Mn=1),_t.setLineWidth(Mn*re()),$.isLineSegments?Ce.setMode(F.LINES):$.isLineLoop?Ce.setMode(F.LINE_LOOP):Ce.setMode(F.LINE_STRIP)}else $.isPoints?Ce.setMode(F.POINTS):$.isSprite&&Ce.setMode(F.TRIANGLES);if($.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))Ce.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Mn=$._multiDrawStarts,kt=$._multiDrawCounts,Un=$._multiDrawCount,ye=Dt?w.get(Dt).bytesPerElement:1,cs=Bt.get(X).currentProgram.getUniforms();for(let bn=0;bn<Un;bn++)cs.setValue(F,"_gl_DrawID",bn),Ce.render(Mn[bn]/ye,kt[bn])}else if($.isInstancedMesh)Ce.renderInstances(zt,Ke,$.count);else if(K.isInstancedBufferGeometry){let Mn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,kt=Math.min(K.instanceCount,Mn);Ce.renderInstances(zt,Ke,kt)}else Ce.render(zt,Ke)};function Le(T,O,K,X){D!==null&&T.isNodeMaterial&&D.setObject(X,T),lt===!0&&nt.setState(T,K,!1),T.transparent===!0&&T.side===Ai&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,ti(T,O,X),T.side=ss,T.needsUpdate=!0,ti(T,O,X),T.side=Ai):ti(T,O,X)}this.compile=function(T,O,K=null){K===null&&(K=T),D!==null&&D.renderStart(T,O,K),E=J.get(K),E.init(O),M.push(E),K.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),T!==K&&T.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),z=this.localClippingEnabled,lt=nt.init(this.clippingPlanes,z),lt===!0&&nt.setGlobalState(this.clippingPlanes,O),D!==null&&gt.render(E.state.shadowsArray,K,O);let X=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let At=$.material;if(At)if(Array.isArray(At))for(let Ft=0;Ft<At.length;Ft++){let Et=At[Ft];Le(Et,K,O,$),X.add(Et)}else Le(At,K,O,$),X.add(At)}),E=M.pop(),D!==null&&D.renderEnd(),X},this.compileAsync=function(T,O,K=null){let X=this.compile(T,O,K);return new Promise($=>{function At(){if(X.forEach(function(Ft){let Dt=Bt.get(Ft).currentProgram;(Dt===void 0||Dt.isReady())&&X.delete(Ft)}),X.size===0){$(T);return}setTimeout(At,10)}Kt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Je=null;function De(T){Je&&Je(T)}function Ee(){en.stop()}function Se(){en.start()}let en=new S0;en.setAnimationLoop(De),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(T){Je=T,ot.setAnimationLoop(T),T===null?en.stop():en.start()},ot.addEventListener("sessionstart",Ee),ot.addEventListener("sessionend",Se),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(T,O);let K=ot.enabled===!0&&ot.isPresenting===!0,X=P!==null&&(W===null||K)&&P.begin(A,W);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(O),O=ot.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,O,W),E=J.get(T,M.length),E.init(O),E.state.textureUnits=qt.getTextureUnits(),M.push(E),mt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?ct.setFromArrayCamera(O):j.setFromProjectionMatrix(mt,wi,O.reversedDepth),z=this.localClippingEnabled,lt=nt.init(this.clippingPlanes,z),S=Mt.get(T,x.length),S.init(),x.push(S),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let Ft=A.xr.getDepthSensingMesh();Ft!==null&&Ae(Ft,O,-1/0,A.sortObjects)}Ae(T,O,0,A.sortObjects),S.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&S.sort(Nt,fe),Qt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Qt&&U.addToRenderList(S,T),this.info.autoReset===!0&&this.info.reset(),lt===!0&&nt.beginShadows();let $=E.state.shadowsArray;if(gt.render($,T,O),lt===!0&&nt.endShadows(),(X&&P.hasRenderPass())===!1){let Ft=S.opaque,Et=S.transmissive;if(E.setupLights(),O.isArrayCamera){let Dt=O.cameras;if(Et.length>0)for(let Ht=0,ie=Dt.length;Ht<ie;Ht++){let de=Dt[Ht];jn(Ft,Et,T,de)}Qt&&U.render(T);for(let Ht=0,ie=Dt.length;Ht<ie;Ht++){let de=Dt[Ht];Sn(S,T,de,de.viewport)}}else Et.length>0&&jn(Ft,Et,T,O),Qt&&U.render(T),Sn(S,T,O)}W!==null&&L===0&&(qt.updateMultisampleRenderTarget(W),qt.updateRenderTargetMipmap(W)),X&&P.end(A),T.isScene===!0&&T.onAfterRender(A,T,O),yt.resetDefaultState(),B=-1,C=null,M.pop(),M.length>0?(E=M[M.length-1],qt.setTextureUnits(E.state.textureUnits),lt===!0&&nt.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,D!==null&&D.renderEnd()};function Ae(T,O,K,X){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){let Ft=O.isArrayCamera?ct:j;if(!T.frustumCulled||T.intersectsFrustum(Ft)){X&&Ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(mt);let Et=at.update(T),Dt=T.material;Dt.visible&&S.push(T,Et,Dt,K,Ut.z,null,O)}}else if(T.isMesh||T.isLine||T.isPoints){let Ft=O.isArrayCamera?ct:j;if(!T.frustumCulled||T.intersectsFrustum(Ft)){let Et=at.update(T),Dt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ut.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ut.copy(Et.boundingSphere.center)),Ut.applyMatrix4(T.matrixWorld).applyMatrix4(mt)),Array.isArray(Dt)){let Ht=Et.groups;for(let ie=0,de=Ht.length;ie<de;ie++){let zt=Ht[ie],pe=Dt[zt.materialIndex];pe&&pe.visible&&S.push(T,Et,pe,K,Ut.z,zt,O)}}else Dt.visible&&S.push(T,Et,Dt,K,Ut.z,null,O)}}}let At=T.children;for(let Ft=0,Et=At.length;Ft<Et;Ft++)Ae(At[Ft],O,K,X)}function Sn(T,O,K,X){let{opaque:$,transmissive:At,transparent:Ft}=T;E.setupLightsView(K),lt===!0&&nt.setGlobalState(A.clippingPlanes,K),X&&_t.viewport(H.copy(X)),$.length>0&&Ve($,O,K),At.length>0&&Ve(At,O,K),Ft.length>0&&Ve(Ft,O,K),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function jn(T,O,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let zt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new ui(1,1,{generateMipmaps:!0,type:zt?Bi:mi,minFilter:Ui,samples:Math.max(4,Jt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let At=E.state.transmissionRenderTarget[X.id],Ft=X.viewport||H;At.setSize(Ft.z*A.transmissionResolutionScale,Ft.w*A.transmissionResolutionScale);let Et=A.getRenderTarget(),Dt=A.getActiveCubeFace(),Ht=A.getActiveMipmapLevel();A.setRenderTarget(At),A.getClearColor(q),et=A.getClearAlpha(),et<1&&A.setClearColor(16777215,.5),A.clear(),Qt&&U.render(K);let ie=A.toneMapping;A.toneMapping=Qn;let de=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),lt===!0&&nt.setGlobalState(A.clippingPlanes,X),Ve(T,K,X),qt.updateMultisampleRenderTarget(At),qt.updateRenderTargetMipmap(At),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let pe=0,Ke=O.length;pe<Ke;pe++){let Pe=O[pe],{object:Ce,geometry:Mn,material:kt,group:Un}=Pe;if(kt.side===Ai&&Ce.layers.test(X.layers)){let ye=kt.side;kt.side=yn,kt.needsUpdate=!0,$e(Ce,K,X,Mn,kt,Un),kt.side=ye,kt.needsUpdate=!0,zt=!0}}zt===!0&&(qt.updateMultisampleRenderTarget(At),qt.updateRenderTargetMipmap(At))}A.setRenderTarget(Et,Dt,Ht),A.setClearColor(q,et),de!==void 0&&(X.viewport=de),A.toneMapping=ie}function Ve(T,O,K){let X=O.isScene===!0?O.overrideMaterial:null;for(let $=0,At=T.length;$<At;$++){let Ft=T[$],{object:Et,geometry:Dt,group:Ht}=Ft,ie=Ft.material;ie.allowOverride===!0&&X!==null&&(ie=X),Et.layers.test(K.layers)&&$e(Et,O,K,Dt,ie,Ht)}}function $e(T,O,K,X,$,At){D!==null&&$.isNodeMaterial&&D.setObject(T,$),T.onBeforeRender(A,O,K,X,$,At),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(A,O,K,X,T,At),$.transparent===!0&&$.side===Ai&&$.forceSinglePass===!1?($.side=yn,$.needsUpdate=!0,A.renderBufferDirect(K,O,X,$,T,At),$.side=ss,$.needsUpdate=!0,A.renderBufferDirect(K,O,X,$,T,At),$.side=Ai):A.renderBufferDirect(K,O,X,$,T,At),T.onAfterRender(A,O,K,X,$,At)}function nn(T){let O=0;for(let K of T)K.texture!==null&&O++;return O}function ti(T,O,K){O.isScene!==!0&&(O=Vt);let X=Bt.get(T),$=E.state.lights,At=E.state.shadowsArray,Ft=$.state.version,Et=st.getParameters(T,$.state,At,O,K,E.state.lightProbeGridArray),Dt=st.getProgramCacheKey(Et),Ht=X.programs;X.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,X.fog=O.fog;let ie=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;X.envMap=R.get(T.envMap||X.environment,ie),X.envMapRotation=X.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ht===void 0&&(T.addEventListener("dispose",Lt),Ht=new Map,X.programs=Ht,X.programVariants=new Map);let de=Ht.get(Dt);if(de!==void 0){if(X.currentProgram===de&&X.lightsStateVersion===Ft)return He(T,Et),de}else Et.uniforms=st.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,K,Et),T.onBeforeCompile(Et,A),de=st.acquireProgram(Et,Dt),Ht.set(Dt,de),X.uniforms=Et.uniforms;let zt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(zt.clippingPlanes=nt.uniform),He(T,Et),X.needsLights=El(T),X.lightsStateVersion=Ft,X.needsLights&&(zt.ambientLightColor.value=$.state.ambient,zt.lightProbe.value=$.state.probe,zt.sunLights.value=$.state.sun,zt.sunLightShadows.value=$.state.sunShadow,zt.directionalLights.value=$.state.directional,zt.directionalLightShadows.value=$.state.directionalShadow,zt.spotLights.value=$.state.spot,zt.spotLightShadows.value=$.state.spotShadow,zt.rectAreaLights.value=$.state.rectArea,zt.ltc_1.value=$.state.rectAreaLTC1,zt.ltc_2.value=$.state.rectAreaLTC2,zt.pointLights.value=$.state.point,zt.pointLightShadows.value=$.state.pointShadow,zt.hemisphereLights.value=$.state.hemi,zt.sunShadowMatrix.value=$.state.sunShadowMatrix,zt.sunShadowCascade.value=$.state.sunShadowCascade,zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,zt.spotLightMatrix.value=$.state.spotLightMatrix,zt.spotLightMap.value=$.state.spotLightMap,zt.pointShadowMatrix.value=$.state.pointShadowMatrix),X.numLightProbeGrids=nn(E.state.lightProbeGridArray),X.currentProgram=de,X.uniformsList=null,de}function Ys(T,O,K,X,$){let At=Bt.get(T),Ft=At.currentProgram.id+","+X+","+$,Et=At.programVariants.get(Ft);return Et===void 0?(Et=ti(T,O,K),At.programVariants.set(Ft,Et)):(At.currentProgram=Et,At.uniformsList=null,At.outputColorSpace=X,At.toneMapping=$),Et}function rn(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=Yo.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function He(T,O){let K=Bt.get(T);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function gi(T,O,K,X,$){O.isScene!==!0&&(O=Vt),qt.resetTextureUnits();let At=O.fog,Ft=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?O.environment:null,Et=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:me.workingColorSpace,Dt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ht=R.get(X.envMap||Ft,Dt),ie=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,de=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),zt=!!K.morphAttributes.position,pe=!!K.morphAttributes.normal,Ke=!!K.morphAttributes.color,Pe=Qn;X.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Pe=A.toneMapping);let Ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mn=Ce!==void 0?Ce.length:0,kt=Bt.get(X),Un=E.state.lights;if(lt===!0&&(z===!0||T!==C)){let Ue=T===C&&X.id===B;nt.setState(X,T,Ue)}let ye=!1,cs=!1;X.version===kt.__version?kt.needsLights&&kt.lightsStateVersion!==Un.state.version||$.isBatchedMesh&&kt.batching===!1||!$.isBatchedMesh&&kt.batching===!0||$.isBatchedMesh&&kt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&kt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&kt.instancing===!1||!$.isInstancedMesh&&kt.instancing===!0||$.isSkinnedMesh&&kt.skinning===!1||!$.isSkinnedMesh&&kt.skinning===!0||$.isInstancedMesh&&kt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&kt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&kt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&kt.instancingMorph===!1&&$.morphTexture!==null||kt.envMap!==Ht||X.fog===!0&&kt.fog!==At||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==nt.numPlanes||kt.numIntersection!==nt.numIntersection)||kt.vertexAlphas!==ie||kt.vertexTangents!==de||kt.morphTargets!==zt||kt.morphNormals!==pe||kt.morphColors!==Ke||kt.morphTargetsCount!==Mn||kt.numLightProbeGrids!==nn(E.state.lightProbeGridArray)?ye=!0:(kt.outputColorSpace!==Et||kt.toneMapping!==Pe)&&(cs=!0):(ye=!0,kt.__version=X.version);let bn=kt.currentProgram;(ye===!0||cs===!0)&&(bn=cs===!0?Ys(X,O,$,Et,Pe):ti(X,O,$),D&&X.isNodeMaterial&&D.onUpdateProgram(X,bn,kt));let Al=!1,Cr=!1,hs=!1,xe=bn.getUniforms(),pn=kt.uniforms;if(_t.useProgram(bn.program)&&(Al=!0,Cr=!0,hs=!0),X.id!==B&&(B=X.id,Cr=!0),Al||C!==T){_t.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xe.setValue(F,"projectionMatrix",T.projectionMatrix),xe.setValue(F,"viewMatrix",T.matrixWorldInverse);let cn=xe.map.cameraPosition;cn!==void 0&&cn.setValue(F,Xt.setFromMatrixPosition(T.matrixWorld)),Jt.logarithmicDepthBuffer&&xe.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),C!==T&&(C=T,Cr=!0,hs=!0)}if(kt.needsLights&&(Un.state.sunShadowMap.length>0&&xe.setValue(F,"sunShadowMap",Un.state.sunShadowMap,qt),Un.state.directionalShadowMap.length>0&&xe.setValue(F,"directionalShadowMap",Un.state.directionalShadowMap,qt),Un.state.spotShadowMap.length>0&&xe.setValue(F,"spotShadowMap",Un.state.spotShadowMap,qt),Un.state.pointShadowMap.length>0&&xe.setValue(F,"pointShadowMap",Un.state.pointShadowMap,qt)),$.isSkinnedMesh){xe.setOptional(F,$,"bindMatrix"),xe.setOptional(F,$,"bindMatrixInverse");let Ue=$.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),xe.setValue(F,"boneTexture",Ue.boneTexture,qt))}$.isBatchedMesh&&(xe.setOptional(F,$,"batchingTexture"),xe.setValue(F,"batchingTexture",$._matricesTexture,qt),xe.setOptional(F,$,"batchingIdTexture"),xe.setValue(F,"batchingIdTexture",$._indirectTexture,qt),xe.setOptional(F,$,"batchingColorTexture"),$._colorsTexture!==null&&xe.setValue(F,"batchingColorTexture",$._colorsTexture,qt));let Ci=K.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&tt.update($,K,bn),(Cr||kt.receiveShadow!==$.receiveShadow)&&(kt.receiveShadow=$.receiveShadow,xe.setValue(F,"receiveShadow",$.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&O.environment!==null&&(pn.envMapIntensity.value=O.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=c1()),Cr){if(xe.setValue(F,"toneMappingExposure",A.toneMappingExposure),kt.needsLights&&Ko(pn,hs),At&&X.fog===!0&&xt.refreshFogUniforms(pn,At),xt.refreshMaterialUniforms(pn,X,ut,Tt,E.state.transmissionRenderTarget[T.id]),kt.needsLights&&kt.numLightProbeGrids>0){let Ue=v,cn=0;for(let ir of E.state.lightProbeGridArray)ir.texture!==null&&(Ue.textures[cn]=ir.texture,Ue.min[cn]=ir.boundingBox.min,Ue.max[cn]=ir.boundingBox.max,Ue.resolution[cn]=ir.resolution,cn++);for(let ir in Ue)Ue[ir].length=cn;pn.probesSH.value=Ue.textures,pn.probesMin.value=Ue.min,pn.probesMax.value=Ue.max,pn.probesResolution.value=Ue.resolution}Yo.upload(F,rn(kt),pn,qt)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Yo.upload(F,rn(kt),pn,qt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(F,"center",$.center),xe.setValue(F,"modelViewMatrix",$.modelViewMatrix),xe.setValue(F,"normalMatrix",$.normalMatrix),xe.setValue(F,"modelMatrix",$.matrixWorld),X.uniformsGroups!==void 0){let Ue=X.uniformsGroups;for(let cn=0,ir=Ue.length;cn<ir;cn++){let vp=Ue[cn];ht.update(vp,bn),ht.bind(vp,bn)}}return bn}function Ko(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function El(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(T,O,K){let X=Bt.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Bt.get(T.texture).__webglTexture=O,Bt.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let K=Bt.get(T);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,K=0){W=T,V=O,L=K;let X=null,$=!1,At=!1;if(T){let Et=Bt.get(T);if(Et.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(F.FRAMEBUFFER,Et.__webglFramebuffer),H.copy(T.viewport),dt.copy(T.scissor),bt=T.scissorTest,_t.viewport(H),_t.scissor(dt),_t.setScissorTest(bt),B=-1;return}else if(Et.__webglFramebuffer===void 0)qt.setupRenderTarget(T);else if(Et.__hasExternalTextures)qt.rebindTextures(T,Bt.get(T.texture).__webglTexture,Bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ie=T.depthTexture;if(Et.__boundDepthTexture!==ie){if(ie!==null&&Bt.has(ie)&&(T.width!==ie.image.width||T.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qt.setupDepthRenderbuffer(T)}}let Dt=T.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(At=!0);let Ht=Bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ht[O])?X=Ht[O][K]:X=Ht[O],$=!0):T.samples>0&&qt.useMultisampledRTT(T)===!1?X=Bt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ht)?X=Ht[K]:X=Ht,H.copy(T.viewport),dt.copy(T.scissor),bt=T.scissorTest}else H.copy(Pt).multiplyScalar(ut).floor(),dt.copy(Gt).multiplyScalar(ut).floor(),bt=It;if(K!==0&&(X=G),_t.bindFramebuffer(F.FRAMEBUFFER,X)&&_t.drawBuffers(T,X),_t.viewport(H),_t.scissor(dt),_t.setScissorTest(bt),$){let Et=Bt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,K)}else if(At){let Et=O;for(let Dt=0;Dt<T.textures.length;Dt++){let Ht=Bt.get(T.textures[Dt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Dt,Ht.__webglTexture,K,Et)}}else if(T!==null&&K!==0){let Et=Bt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Et.__webglTexture,K)}B=-1};function Ar(T){let O=Bt.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=Jt.textureFormatReadable(T.format),O.__typeReadable=Jt.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,K,X,$,At,Ft,Et=0){if(!(T&&T.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Dt=Dt[Ft],Array.isArray(Dt)&&(Dt=Dt[0])),Dt){_t.bindFramebuffer(F.FRAMEBUFFER,Dt);try{let Ht=T.textures[Et],ie=Ht.format,de=Ht.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Et);let zt=Ar(Ht);if(zt.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-X&&K>=0&&K<=T.height-$&&F.readPixels(O,K,X,$,ft.convert(ie),ft.convert(de),At)}finally{let Ht=W!==null?Bt.get(W).__webglFramebuffer:null;_t.bindFramebuffer(F.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(T,O,K,X,$,At,Ft,Et=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Dt=Dt[Ft],Array.isArray(Dt)&&(Dt=Dt[0])),Dt)if(O>=0&&O<=T.width-X&&K>=0&&K<=T.height-$){_t.bindFramebuffer(F.FRAMEBUFFER,Dt);let Ht=T.textures[Et],ie=Ht.format,de=Ht.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Et);let zt=Ar(Ht);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.bufferData(F.PIXEL_PACK_BUFFER,At.byteLength,F.STREAM_READ),F.readPixels(O,K,X,$,ft.convert(ie),ft.convert(de),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ke=W!==null?Bt.get(W).__webglFramebuffer:null;_t.bindFramebuffer(F.FRAMEBUFFER,Ke);let Pe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await H_(F,Pe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,At),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(pe),F.deleteSync(Pe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,K=0){let X=Math.pow(2,-K),$=Math.floor(T.image.width*X),At=Math.floor(T.image.height*X),Ft=O!==null?O.x:0,Et=O!==null?O.y:0;qt.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,Ft,Et,$,At),_t.unbindTexture()},this.copyTextureToTexture=function(T,O,K=null,X=null,$=0,At=0){let Ft,Et,Dt,Ht,ie,de,zt,pe,Ke,Pe=T.isCompressedTexture?T.mipmaps[At]:T.image;if(K!==null)Ft=K.max.x-K.min.x,Et=K.max.y-K.min.y,Dt=K.isBox3?K.max.z-K.min.z:1,Ht=K.min.x,ie=K.min.y,de=K.isBox3?K.min.z:0;else{let xe=Math.pow(2,-$);Ft=Math.floor(Pe.width*xe),Et=Math.floor(Pe.height*xe),T.isDataArrayTexture?Dt=Pe.depth:T.isData3DTexture?Dt=Math.floor(Pe.depth*xe):Dt=1,Ht=0,ie=0,de=0}X!==null?(zt=X.x,pe=X.y,Ke=X.z):(zt=0,pe=0,Ke=0);let Ce=ft.convert(O.format),Mn=ft.convert(O.type),kt;O.isData3DTexture?(qt.setTexture3D(O,0),kt=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(qt.setTexture2DArray(O,0),kt=F.TEXTURE_2D_ARRAY):(qt.setTexture2D(O,0),kt=F.TEXTURE_2D),_t.activeTexture(F.TEXTURE0),_t.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),_t.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_t.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let Un=_t.getParameter(F.UNPACK_ROW_LENGTH),ye=_t.getParameter(F.UNPACK_IMAGE_HEIGHT),cs=_t.getParameter(F.UNPACK_SKIP_PIXELS),bn=_t.getParameter(F.UNPACK_SKIP_ROWS),Al=_t.getParameter(F.UNPACK_SKIP_IMAGES);_t.pixelStorei(F.UNPACK_ROW_LENGTH,Pe.width),_t.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe.height),_t.pixelStorei(F.UNPACK_SKIP_PIXELS,Ht),_t.pixelStorei(F.UNPACK_SKIP_ROWS,ie),_t.pixelStorei(F.UNPACK_SKIP_IMAGES,de);let Cr=T.isDataArrayTexture||T.isData3DTexture,hs=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let xe=Bt.get(T),pn=Bt.get(O),Ci=Bt.get(xe.__renderTarget),Ue=Bt.get(pn.__renderTarget);_t.bindFramebuffer(F.READ_FRAMEBUFFER,Ci.__webglFramebuffer),_t.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let cn=0;cn<Dt;cn++)Cr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(T).__webglTexture,$,de+cn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(O).__webglTexture,At,Ke+cn)),F.blitFramebuffer(Ht,ie,Ht+Ft,ie+Et,zt,pe,zt+Ft,pe+Et,F.DEPTH_BUFFER_BIT,F.NEAREST);_t.bindFramebuffer(F.READ_FRAMEBUFFER,null),_t.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||Bt.has(T)){let xe=Bt.get(T),pn=Bt.get(O);_t.bindFramebuffer(F.READ_FRAMEBUFFER,I),_t.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let Ci=0;Ci<Dt;Ci++)Cr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.__webglTexture,$,de+Ci):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,$),hs?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,At,Ke+Ci):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,At),$!==0?F.blitFramebuffer(Ht,ie,Ht+Ft,ie+Et,zt,pe,zt+Ft,pe+Et,F.COLOR_BUFFER_BIT,F.NEAREST):hs?F.copyTexSubImage3D(kt,At,zt,pe,Ke+Ci,Ht,ie,Ft,Et):F.copyTexSubImage2D(kt,At,zt,pe,Ht,ie,Ft,Et);_t.bindFramebuffer(F.READ_FRAMEBUFFER,null),_t.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else hs?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(kt,At,zt,pe,Ke,Ft,Et,Dt,Ce,Mn,Pe.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(kt,At,zt,pe,Ke,Ft,Et,Dt,Ce,Pe.data):F.texSubImage3D(kt,At,zt,pe,Ke,Ft,Et,Dt,Ce,Mn,Pe):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,At,zt,pe,Ft,Et,Ce,Mn,Pe.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,At,zt,pe,Pe.width,Pe.height,Ce,Pe.data):F.texSubImage2D(F.TEXTURE_2D,At,zt,pe,Ft,Et,Ce,Mn,Pe);_t.pixelStorei(F.UNPACK_ROW_LENGTH,Un),_t.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye),_t.pixelStorei(F.UNPACK_SKIP_PIXELS,cs),_t.pixelStorei(F.UNPACK_SKIP_ROWS,bn),_t.pixelStorei(F.UNPACK_SKIP_IMAGES,Al),At===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&F.generateMipmap(kt),_t.unbindTexture()},this.initRenderTarget=function(T){Bt.get(T).__webglFramebuffer===void 0&&qt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?qt.setTextureCube(T,0):T.isData3DTexture?qt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?qt.setTexture2DArray(T,0):qt.setTexture2D(T,0),_t.unbindTexture()},this.resetState=function(){V=0,L=0,W=null,_t.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};function L0(r,t=Math.PI/3){let e=r.index?r.toNonIndexed():r,n=e.attributes.position,i=n.count,s;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)s=n.array;else{s=new Float64Array(i*3);for(let v=0;v<i;v++)s[3*v+0]=n.getX(v),s[3*v+1]=n.getY(v),s[3*v+2]=n.getZ(v)}let o=Math.cos(t),a=(1+1e-10)*100,l=i/3,c=new Float64Array(l*3);for(let v=0;v<l;v++){let S=9*v,E=s[S+0],x=s[S+1],M=s[S+2],P=s[S+3],A=s[S+4],N=s[S+5],D=s[S+6],G=s[S+7],I=s[S+8],k=D-P,V=G-A,L=I-N,W=E-P,B=x-A,C=M-N,H=V*C-L*B,dt=L*W-k*C,bt=k*B-V*W,q=1/(Math.sqrt(H*H+dt*dt+bt*bt)||1);c[3*v+0]=H*q,c[3*v+1]=dt*q,c[3*v+2]=bt*q}let h=new Int32Array(i),d=new Float64Array(i*3),u=1;for(;u<i*2;)u<<=1;let f=u-1,m=new Int32Array(u),_=0;for(let v=0;v<i;v++){let S=3*v,E=Math.trunc(s[S+0]*a),x=Math.trunc(s[S+1]*a),M=Math.trunc(s[S+2]*a),P=(Math.imul(E,73856093)^Math.imul(x,19349663)^Math.imul(M,83492791))&f;for(;;){let A=m[P];if(A===0){let D=3*_;d[D+0]=E,d[D+1]=x,d[D+2]=M,m[P]=_+1,h[v]=_++;break}let N=3*(A-1);if(d[N+0]===E&&d[N+1]===x&&d[N+2]===M){h[v]=A-1;break}P=P+1&f}}let p=new Int32Array(_+1);for(let v=0;v<i;v++)p[h[v]+1]++;for(let v=0;v<_;v++)p[v+1]+=p[v];let g=new Int32Array(i),y=p.slice(0,_);for(let v=0;v<l;v++){let S=3*v;g[y[h[S+0]]++]=v,g[y[h[S+1]]++]=v,g[y[h[S+2]]++]=v}let b=new Float32Array(i*3);for(let v=0;v<l;v++){let S=3*v,E=c[S+0],x=c[S+1],M=c[S+2];for(let P=0;P<3;P++){let A=S+P,N=h[A],D=0,G=0,I=0;for(let V=p[N],L=p[N+1];V<L;V++){let W=3*g[V],B=c[W+0],C=c[W+1],H=c[W+2];E*B+x*C+M*H>o&&(D+=B,G+=C,I+=H)}let k=1/(Math.sqrt(D*D+G*G+I*I)||1);b[3*A+0]=D*k,b[3*A+1]=G*k,b[3*A+2]=I*k}}return e.setAttribute("normal",new Ti(b,3,!1)),e}var wl=28,Tl=12,D0=-2.6,fp={s:.6,rx:.1,ry:-.42},qs={color:"#c9ccc6",roughness:.16,env:1.35},Ml=.62,xu=32,N0=.0042,dp=r=>r*r*(3-2*r),as=(r,t,e)=>Math.min(e,Math.max(t,r)),Xs=(r,t,e)=>r+(t-r)*e,h1=[[[20.5,15],[20.5,110.5],[56,110.5]],[[52,23.5],[112,23.5],[64,110.5],[120,110.5]]],u1=8.5,bl=5.4,U0=4.5,pp=1/104;function f1(r){let t=r.map(([a,l])=>new Ct(a,-l)),e=(a,l)=>{let c=l.clone().sub(a).normalize();return new Ct(-c.y,c.x)},n=t.length-1;t[0].add(t[1].clone().sub(t[0]).normalize().multiplyScalar(bl)),t[n].add(t[n-1].clone().sub(t[n]).normalize().multiplyScalar(bl));let i=u1-bl,s=[],o=[];for(let a=0;a<=n;a++){let l=a>0?e(t[a-1],t[a]):null,c=a<n?e(t[a],t[a+1]):null,h;if(l&&c){let d=l.clone().add(c).normalize();h=d.multiplyScalar(i/d.dot(l))}else h=(l||c).clone().multiplyScalar(i);s.push(t[a].clone().add(h)),o.push(t[a].clone().sub(h))}return new zo([...s,...o.reverse()])}function mp(r,t){let e=new $i,n=[];for(let i of h1){let s=new al(f1(i),{depth:U0,bevelEnabled:!0,bevelThickness:bl,bevelSize:bl,bevelSegments:t?6:12,curveSegments:1,steps:1});s.translate(-70,67,-U0/2),s.scale(pp,pp,pp),s=L0(s,.7),s.computeBoundingBox();let o=s.boundingBox.getCenter(new Z);s.translate(-o.x,-o.y,-o.z);let a=new Dn(s,r);a.position.copy(o),a.userData.home=o.clone(),e.add(a),n.push(a)}return{group:e,parts:n}}function gp(r){let t=new Qr;t.add(new Dn(new es(60,60,60),new Os({color:1710873,side:yn})));let e=(s,o,a,l,c)=>{let h=new Dn(new br(s,o),new Os({color:new jt(l).multiplyScalar(c),side:Ai,toneMapped:!1}));h.position.set(...a),h.lookAt(0,0,0),t.add(h)};e(16,16,[0,18,3],"#ffffff",5),e(3,22,[-18,2,5],"#ffffff",9),e(9,12,[18,-2,-3],"#fff3e6",3.5),e(26,8,[0,-16,7],"#ffffff",1.4),e(6,6,[11,7,-17],"#ff4b1f",7),e(30,14,[0,3,22],"#ffffff",.5);let n=new Zo(r),i=n.fromScene(t,.03).texture;return n.dispose(),i}var O0=`
uniform vec3 uTop; uniform vec3 uBottom; uniform float uEdge;
vec3 pageColor(float screenY) { return screenY > uEdge ? uTop : uBottom; }`;function d1(r){let t=new di({uniforms:r,vertexShader:"varying float vY; void main() { vY = position.y * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`${O0} varying float vY;
      void main() {
        gl_FragColor = vec4(pageColor(vY), 1.0);
        #include <colorspace_fragment>
      }`,depthTest:!1,depthWrite:!1}),e=new Dn(new br(2,2),t);return e.frustumCulled=!1,e.renderOrder=-10,e}function p1(r,t,e,n){let s=document.createElement("canvas"),o=s.getContext("2d"),a=m=>{o.font=`900 ${m}px Anybody, "Arial Black", sans-serif`,"fontStretch"in o&&(o.fontStretch="extra-expanded")};a(400);let l=o.measureText("H").actualBoundingBoxAscent||280,c=400*(512*.8)/l;a(c);let h=o.measureText(r).width+c*.42,d=512;if(h>e){let m=e/h;c*=m,h=e,d=Math.round(512*m)}s.width=Math.ceil(h),s.height=d,a(c),o.fillStyle="#000",o.fillRect(0,0,s.width,s.height);let u=o.measureText("H").actualBoundingBoxAscent;o.textBaseline="alphabetic",t?(o.strokeStyle="#fff",o.lineWidth=Math.max(2,c*.016),o.lineJoin="round",o.strokeText(r,c*.21,(d+u)/2)):(o.fillStyle="#fff",o.fillText(r,c*.21,(d+u)/2));let f=new $a(s);return f.wrapS=Do,f.minFilter=Ui,f.magFilter=vn,f.anisotropy=n,f.userData.aspect=s.width/s.height,f}var F0=7;function m1(r,t,e,n,i){let s=new Map,o=(h,d)=>{let u=h+"|"+d;return s.has(u)||s.set(u,p1(h,d,n,i)),s.get(u)},a=new br(1,1),l=new $i,c=[];for(let h=0;h<F0;h++){let d=o(r[h%r.length],h%2===0),u=new di({uniforms:{...t,uMap:{value:d},uInk:{value:e},uRepeat:{value:1},uOffset:{value:h*.37},uShear:{value:0}},vertexShader:"varying vec2 vUv; varying vec4 vClip; void main() { vUv = uv; vClip = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = vClip; }",fragmentShader:`${O0}
        uniform sampler2D uMap; uniform vec3 uInk; uniform float uRepeat; uniform float uOffset; uniform float uShear;
        varying vec2 vUv; varying vec4 vClip;
        void main() {
          float m = texture2D(uMap, vec2(vUv.x * uRepeat + uOffset + (vUv.y - 0.5) * uShear, vUv.y)).r;
          float sy = vClip.y / vClip.w * 0.5 + 0.5;
          gl_FragColor = vec4(mix(pageColor(sy), uInk, m), 1.0);
          #include <colorspace_fragment>
        }`}),f=new Dn(a,u);f.renderOrder=-5,f.visible=!1,l.add(f),c.push({mesh:f,mat:u,aspect:d.userData.aspect,dir:h%2?1:-1,speed:.75+h*7%5*.11})}return{group:l,rows:c}}function B0(r,{still:t=!1,coarse:e=!1}={}){let n;try{n=new Jo({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return null}if(!n.capabilities.isWebGL2)return n.dispose(),null;n.toneMapping=Qn;let i=getComputedStyle(document.documentElement),s=L=>new jt(i.getPropertyValue(L).trim()),o=s("--paper"),a=s("--ink"),l=s("--accent"),c={paper:{bg:o,fg:a},ink:{bg:a,fg:o},accent:{bg:l,fg:a}},h=new Qr,d=new xn(wl,1,.1,60);d.position.z=Tl,h.environment=gp(n);let u={uTop:{value:o.clone()},uBottom:{value:o.clone()},uEdge:{value:-1}};h.add(d1(u));let f=new zs({color:16777215,metalness:0,roughness:.055,transmission:1,thickness:.62,ior:1.52,dispersion:6,attenuationColor:new jt("#dfe6e3"),attenuationDistance:1.9,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.15,specularIntensity:1}),{group:m}=mp(f,e);h.add(m);let _=[...document.querySelectorAll("section[data-theme]")].map(L=>({el:L,theme:c[L.dataset.theme]||c.paper,band:L.querySelector(".hero-rows, .contact-rows"),top:0,opaque:!1,rows:null})),p=_.filter(L=>L.band),g=Math.min(4096,n.capabilities.maxTextureSize),y=n.capabilities.getMaxAnisotropy(),b=()=>{for(let L of p){if(L.rows)continue;let W=[...L.band.querySelectorAll("p")].map(B=>B.textContent.trim().toUpperCase());L.rows=m1(W,u,L.theme.fg,g,y),h.add(L.rows.group)}},v=1,S=1,E=L=>{let W=2*(Tl-L)*Math.tan(wl*Math.PI/360);return{h:W,w:W*(v/S)}};function x(){v=document.documentElement.clientWidth,S=window.innerHeight,n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.5:2)),n.setSize(v,S,!1),d.aspect=v/S,d.updateProjectionMatrix();let L=window.scrollY;for(let W of _){let B=W.el.parentElement.classList.contains("pin-spacer")?W.el.parentElement:W.el;W.top=B.getBoundingClientRect().top+L,W.opaque=!/rgba\([^)]*,\s*0\)$|transparent/.test(getComputedStyle(W.el).backgroundColor)}}let M={x:0,y:0,tx:0,ty:0},P={intro:t?1:0,started:!1},A=new jt("#ffffff"),N=new jt(qs.color),D=!0;window.addEventListener("pointermove",L=>{L.pointerType==="mouse"&&(M.tx=L.clientX/v-.5,M.ty=L.clientY/S-.5)},{passive:!0});function G(L,W,B){M.x=Xs(M.x,M.tx,.06),M.y=Xs(M.y,M.ty,.06);let C=Math.max(1,document.documentElement.scrollHeight-S),H=S*.9,dt=p[p.length-1],bt=dp(as(L.y/H,0,1)),q=p.length>1?dp(as((C-L.y)/H,0,1)):1,et=B?Math.max(1-bt,1-q):1,pt=p.length>1&&L.y>C/2,Tt=pt?dt:p[0],ut=Tt.band.getBoundingClientRect();L.atEnd===void 0&&(L.atEnd=pt),L.atEnd!==pt&&(L.spin+=(pt?1:-1)*C*N0,L.atEnd=pt);let Nt=(pt?L.y-C:L.y)*N0,fe=Math.round(L.spin/(Math.PI*2))*Math.PI*2;L.spin+=(fe-L.spin)*(1-Math.exp(-W*8*et*et));let Pt=L.rail||{x:v-as(v*.034,20,60)/2,top:S*.24,height:S*.52,px:xu},Gt=E(0),It=fp.s*Math.min(Gt.h,Gt.w*.84)/Gt.h*S,j=Pt.px*Math.pow(It/Pt.px,et),ct=Pt.x,lt=Pt.top+as(L.y/C,0,1)*Pt.height,z=Xs(ct,v/2,et),mt=Xs(lt,ut.top+ut.height/2,et),Xt=t?0:1;return L.spin+=W*.5*(1-et),{u:et,cx:z,cy:mt,px:j,railY:lt,overlay:B&&et<Ml,metal:1-dp(as((et-Ml)/(1-Ml),0,1)),x:(z/v-.5)*Gt.w+M.x*.12*et,y:(.5-mt/S)*Gt.h-M.y*.08*et+Xt*Math.sin(L.time*.9)*.035*et,scale:j/S*Gt.h,rx:fp.rx+as(L.vel*3e-4,-.6,.6)*(1-et)+Xt*Math.cos(L.time*.55)*.07+M.y*.42*et,ry:fp.ry+Nt+L.spin+Xt*Math.sin(L.time*.42)*.16+M.x*.6*et,rz:Xt*Math.sin(L.time*.31)*.025}}function I(L,W){let B=E(D0);for(let C of p){if(!C.rows)continue;let H=C.band.getBoundingClientRect(),bt=H.bottom>0&&H.top<S&&H.height>40?as(Math.round(H.height/(v*.17)),3,F0):0,q=bt?H.height/bt:0;C.rows.rows.forEach((et,pt)=>{if(et.mesh.visible=pt<bt,pt>=bt)return;let Tt=q/S*B.h,ut=B.w*1.06;et.mesh.scale.set(ut,Tt,1),et.mesh.position.set(0,(.5-(H.top+q*(pt+.5))/S)*B.h,D0),et.mat.uniforms.uRepeat.value=ut/(Tt*et.aspect),t||(et.mat.uniforms.uOffset.value+=et.dir*L*(et.speed*.05*B.w+W*.0016*B.w)/(Tt*et.aspect)),et.mat.uniforms.uShear.value=Xs(et.mat.uniforms.uShear.value,as(W*35e-5,-.06,.06)*et.dir,.12)})}}function k(L){let W=0;for(let H=0;H<_.length;H++)_[H].top<=L+1&&(W=H);let B=_[W],C=_[W+1];return u.uTop.value=B.theme.bg,C&&C.top-L<S?(u.uBottom.value=C.theme.bg,u.uEdge.value=1-(C.top-L)/S):(u.uBottom.value=B.theme.bg,u.uEdge.value=-1),!(B.opaque&&(!C||C.top-L>=S||C.opaque))}function V(L,W,B){if(!P.started||!k(W.y)&&!D)return;D=!1;let H=P.intro;m.visible=!B.overlay,m.position.set(B.x,B.y,0),m.scale.setScalar(B.scale*(.72+.28*H)),m.rotation.set(B.rx,B.ry-(1-H)*1.9,B.rz),f.metalness=B.metal,f.transmission=Math.max(.001,1-B.metal),f.roughness=Xs(.055,qs.roughness,B.metal),f.envMapIntensity=Xs(1.15,qs.env,B.metal),f.color.lerpColors(A,N,B.metal),I(Math.min(L,.05),W.vel),n.render(h,d)}return r.addEventListener("webglcontextlost",L=>{L.preventDefault(),document.documentElement.classList.remove("gl"),P.started=!1}),{state:P,layout:x,pose:G,frame:V,start(){b(),x(),P.started=!0,D=!0}}}function z0(r=!1){let t=document.createElement("canvas");t.className="charm",t.setAttribute("aria-hidden","true");let e=document.createElement("div");e.className="rail",e.setAttribute("aria-hidden","true"),document.body.append(e,t);let n;try{n=new Jo({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return t.remove(),e.remove(),null}n.setClearColor(0,0),n.toneMapping=Qn;let i=new Qr,s=new xn(wl,1,.1,60);s.position.z=Tl,i.environment=gp(n);let o=new zs({color:new jt(qs.color),metalness:1,roughness:qs.roughness,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:qs.env}),{group:a}=mp(o,r);i.add(a);let l={x:0,top:0,height:0,px:xu},c=0,h=0,d=0,u=!1,f=!0,m="";function _(){c=document.documentElement.clientWidth,h=window.innerHeight;let g=e.getBoundingClientRect();g.height?(l.x=g.left+g.width/2,l.top=g.top,l.height=g.height):(l.x=c-20,l.top=h*.24,l.height=h*.52),l.px=Math.min(xu,Math.max(r?19:18,(c-l.x)*1.12)),e.style.setProperty("--gap",(l.px*.86).toFixed(1)+"px");let y=2*Tl*Math.tan(wl*Math.PI/360),b=.6*Math.min(y,y*(c/h)*.84)/y*h;d=Math.ceil(l.px*Math.pow(b/l.px,Ml)*2.3),t.style.width=t.style.height=d+"px",n.setPixelRatio(Math.min(window.devicePixelRatio||1,3)),n.setSize(d,d,!1),s.aspect=c/h}function p(g){if(!f)return;u!==g.overlay&&(u=g.overlay,t.style.visibility=u?"visible":"hidden"),e.classList.toggle("is-on",g.u<.16);let y=(g.railY-l.top).toFixed(1)+"px";if(y!==m&&(m=y,e.style.setProperty("--y",y)),!u)return;let b=Math.round(g.cx-d/2),v=Math.round(g.cy-d/2);t.style.transform=`translate3d(${b}px,${v}px,0)`,s.setViewOffset(c,h,b,v,d,d),a.position.set(g.x,g.y,0),a.scale.setScalar(g.scale),a.rotation.set(g.rx,g.ry,g.rz),n.render(i,s)}return t.addEventListener("webglcontextlost",g=>{g.preventDefault(),f=!1,t.remove(),e.remove()}),{layout:_,frame:p,line:l}}var k0=Pg();Dg();Ig();var ki=B0(ve("[data-gl]"),{still:Ze,coarse:!_o});ki&&Xr.classList.add("gl");var g1=Wr("section[data-theme]");function _1(){for(let r of g1){let t=r.parentElement.classList.contains("pin-spacer")?r.parentElement:r,e=t.getBoundingClientRect();if(e.top<=36&&e.bottom>36){document.body.dataset.theme!==r.dataset.theme&&(document.body.dataset.theme=r.dataset.theme);return}}}ee.ticker.add(_1);Ze||Wr("[data-scrub-words]").forEach(r=>{Vr.create(r,{type:"words",autoSplit:!0,onSplit:t=>ee.fromTo(t.words,{opacity:.13},{opacity:1,ease:"none",stagger:.1,scrollTrigger:{trigger:r,start:"top 92%",end:"bottom 68%",scrub:!0}})})});var _p=ve("[data-stretch]");_p&&!Ze&&ee.fromTo(_p,{"--w":50},{"--w":150,ease:"none",scrollTrigger:{trigger:_p,start:"top 100%",end:"top 30%",scrub:!0}});var xp=ve("[data-work]");if(xp){let r=Wr(".work-item",xp);if(r.forEach(n=>{let i=ve("img",n);i&&Yt.create({trigger:n,start:"top 220%",once:!0,onEnter:()=>{i.loading="eager"}})}),Ze||r.forEach(n=>{let i=ve(".work-art-in",n),s={trigger:n,start:"top 90%",once:!0};ee.fromTo(i,{clipPath:"inset(100% 0% 0% 0% round 12px)"},{clipPath:"inset(0% 0% 0% 0% round 12px)",duration:1.3,ease:"expo.out",scrollTrigger:s}),ee.from(ve(".work-top",n),{opacity:0,duration:.8,ease:"power2.out",scrollTrigger:s}),ee.from([ve(".work-title",n),ve(".work-sub",n)],{y:28,opacity:0,duration:.9,ease:"expo.out",delay:.18,stagger:.08,scrollTrigger:s}),ee.from(ve(".work-art",n),{rotationX:-24,y:70,transformPerspective:1100,duration:1.4,ease:"expo.out",scrollTrigger:s}),ee.fromTo(i.firstElementChild,{yPercent:-6},{yPercent:6,ease:"none",scrollTrigger:{trigger:i,start:"top bottom",end:"bottom top",scrub:!0}})}),_o&&!Ze&&r.forEach(n=>{let i=ve(".work-art",n),s=ve(".work-art-in",n),o=ee.quickTo(s,"rotationX",{duration:.6,ease:"power3"}),a=ee.quickTo(s,"rotationY",{duration:.6,ease:"power3"});i.addEventListener("pointermove",l=>{let c=i.getBoundingClientRect();a(((l.clientX-c.left)/c.width-.5)*9),o(-((l.clientY-c.top)/c.height-.5)*7)}),i.addEventListener("pointerleave",()=>{o(0),a(0)})}),!_o&&!Ze&&(r.forEach(n=>Yt.create({trigger:n,start:"top 46%",end:"bottom 54%",toggleClass:{targets:n,className:"is-near"}})),Yt.addEventListener("refresh",()=>r.forEach(n=>{let i=ve(".work-title",n);i.style.transition="none";let s=i.offsetHeight;i.style.fontStretch="112%",n.classList.toggle("is-roomy",i.offsetHeight===s),i.style.fontStretch="",i.offsetHeight,i.style.transition=""}))),!Ze){let n=r.map(s=>ee.quickTo(ve(".work-art",s),"skewY",{duration:.5,ease:"power3"})),i;Yt.create({trigger:xp,start:"top bottom",end:"bottom top",onUpdate:s=>{let o=ee.utils.clamp(-2.4,2.4,s.getVelocity()/-500);n.forEach(a=>a(o)),clearTimeout(i),i=setTimeout(()=>n.forEach(a=>a(0)),90)}})}let t=ve("[data-cursor]");if(t&&_o){let n=ee.quickTo(t,"x",{duration:.35,ease:"power3"}),i=ee.quickTo(t,"y",{duration:.35,ease:"power3"});ee.set(t,{scale:0}),r.forEach(s=>{let o=ve(".work-art",s);o.addEventListener("pointerenter",a=>{ee.set(t,{x:a.clientX,y:a.clientY,visibility:"visible"}),ee.to(t,{scale:1,duration:Ze?0:.45,ease:"expo.out",overwrite:"auto"})}),o.addEventListener("pointermove",a=>{n(a.clientX),i(a.clientY)}),o.addEventListener("pointerleave",()=>ee.to(t,{scale:0,duration:Ze?0:.3,ease:"power3.in",overwrite:"auto"}))})}let e=Wr("[data-filter]");e.forEach(n=>n.addEventListener("click",()=>{e.forEach(o=>o.setAttribute("aria-pressed",String(o===n)));let[i,s]=n.dataset.filter.split(":");r.forEach(o=>{o.hidden=!(i==="*"||(i==="cat"?o.dataset.cat:o.dataset.rel)===s)}),r.filter(o=>!o.hidden).forEach((o,a)=>{ve("[data-no]",o).textContent=String(a+1).padStart(2,"0")}),Ze||ee.fromTo(r.filter(o=>!o.hidden),{y:22,opacity:0},{y:0,opacity:1,duration:.55,ease:"expo.out",stagger:.05,clearProps:"transform,opacity"}),n.scrollIntoView({block:"nearest",inline:"center",behavior:Ze?"auto":"smooth"}),Yt.refresh()}))}var ls=ve(".craft"),Er=ve("[data-craft]"),Gi=Wr(".craft-panel"),x1=ee.matchMedia(),vu=ee.utils.clamp;function V0(){let r=Wr(".craft-captions p"),t=Wr(".craft-index li"),e=-1;return ee.set(r,{opacity:0,y:14}),n=>{if(n===e)return;let i=e;e=n,Gi.forEach((s,o)=>s.classList.toggle("is-on",o===n)),t.forEach((s,o)=>s.classList.toggle("is-on",o===n)),r.forEach((s,o)=>ee.to(s,o===n?{opacity:1,y:0,duration:.6,ease:"expo.out",overwrite:!0}:{opacity:0,y:o===i&&n>i?-14:14,duration:.3,ease:"power2.out",overwrite:!0}))}}function H0(r){let t=Gi.length,e=vu(0,t-1,r*(t-1)),n=Math.min(t-2,Math.floor(e)),i=vu(0,1,(e-n-.24)/.52);return{k:n,e:i*i*(3-2*i)}}function v1(){ls.classList.add("is-run");let r=Gi.map(p=>Vr.create(ve(".craft-word",p),{type:"chars",charsClass:"char"})),t=r.flatMap(p=>p.chars),e=ve(".craft-bar i"),n=V0(),i=[],s=[],o=0,a=Xr.clientWidth,l=0,c=0,h=0,d=p=>{p.pointerType==="mouse"&&(h=(p.clientY/window.innerHeight-.5)*-10)};ls.addEventListener("pointermove",d);let u=()=>{a=Xr.clientWidth,i=t.map(p=>p.offsetLeft+p.offsetWidth/2),s=Gi.map(p=>p.offsetLeft+p.offsetWidth/2),o=s[s.length-1]-s[0]},f=p=>{let{k:g,e:y}=H0(p),b=a/2-(s[g]+(s[g+1]-s[g])*y);Er.style.transform=`translate3d(${b.toFixed(1)}px,0,0) skewX(${l.toFixed(2)}deg)`;for(let v=0;v<t.length;v++){let S=vu(-1.3,1.3,(i[v]+b-a/2)/(a*.62)),E=S*S;t[v].style.transform=`perspective(1100px) rotateX(${c.toFixed(2)}deg) translateZ(${(-E*170).toFixed(1)}px) rotateY(${(S*40).toFixed(2)}deg)`,t[v].style.opacity=(1-Math.min(1,E)*.45).toFixed(3)}e&&(e.style.transform=`scaleX(${p.toFixed(4)})`),n(y<.5?g:g+1)};u();let m=Yt.create({trigger:ls,start:"top top",end:()=>(u(),"+="+Math.round(o*.75)),pin:!0,anticipatePin:1,invalidateOnRefresh:!0,onRefresh:p=>f(p.progress),onUpdate:p=>f(p.progress)}),_=()=>{let p=m.isActive?vu(-7,7,m.getVelocity()/-320):0,g=p-l,y=h-c;Math.abs(g)<.01&&Math.abs(y)<.01||(l+=g*.12,c+=y*.08,f(m.progress))};return ee.ticker.add(_),f(0),()=>{ee.ticker.remove(_),ls.removeEventListener("pointermove",d),m.kill(),r.forEach(p=>p.revert()),ls.classList.remove("is-run"),Gi.forEach(p=>p.classList.remove("is-on")),Er.style.transform=""}}function y1(){ls.classList.add("is-reel");let r=ve(".craft-bar i"),t=V0(),e=Gi.length,n=Math.max(1,Math.round(12/e)),i=e*n,s=Math.PI*2/i,o=[];for(let u=e;u<i&&n>1;u++){let f=document.createElement("div"),m=document.createElement("span");f.className="craft-panel",f.setAttribute("aria-hidden","true"),m.className="craft-word",m.textContent=ve(".craft-word",Gi[u%e]).textContent,f.append(m),Er.append(f),o.push(f)}let a=[...Gi,...o],l=0,c=()=>{Er.style.fontSize="";let u=getComputedStyle(Er),f=Er.clientWidth-parseFloat(u.paddingLeft)-parseFloat(u.paddingRight),m=Math.max(...Gi.map(p=>p.offsetWidth)),_=Math.min(parseFloat(u.fontSize)*f/m,Er.clientHeight/5.8);Er.style.fontSize=_.toFixed(1)+"px",l=_*1.5/s},h=u=>{let{k:f,e:m}=H0(u),_=f+m;a.forEach((p,g)=>{let y=((g-_+i/2)%i+i)%i-i/2,b=y*s,v=Math.abs(y);p.style.visibility=v>2.5?"hidden":"",!(v>2.5)&&(p.style.transform=`translate3d(0,${(l*Math.sin(b)).toFixed(1)}px,${(l*(Math.cos(b)-1)).toFixed(1)}px) rotateX(${(-b*57.2958).toFixed(2)}deg)`,p.style.opacity=(v<=1?1-v*.4:Math.max(0,.6-(v-1)*.36)).toFixed(3))}),r&&(r.style.transform=`scaleX(${u.toFixed(4)})`),t(Math.round(_))};c();let d=Yt.create({trigger:ls,start:"top top",end:()=>"+="+Math.round((e-1)*window.innerHeight*.62),pin:!0,anticipatePin:1,invalidateOnRefresh:!0,onRefresh:u=>{c(),h(u.progress)},onUpdate:u=>h(u.progress)});return h(0),()=>{d.kill(),o.forEach(u=>u.remove()),ls.classList.remove("is-reel"),Gi.forEach(u=>{u.classList.remove("is-on"),u.style.transform=u.style.opacity=u.style.visibility=""}),Er.style.fontSize=""}}function S1(){Gi.forEach(r=>{Ng(ve(".craft-word",r),{scrollTrigger:{trigger:r,start:"top 84%"}}),ee.from(ve("p",r),{y:24,opacity:0,duration:.9,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 70%"}})})}x1.add({any:"all",wide:"(min-width: 761px) and (min-height: 580px)",tall:"(max-width: 760px) and (min-height: 500px)"},r=>{if(Ze)return;let{wide:t,tall:e}=r.conditions;return t?v1():e?y1():S1()});var G0=ve(".contact-line");Ff(G0,{scrollTrigger:{trigger:G0,start:"top 90%"}});Ze||ee.from(".contact-side > *",{y:22,opacity:0,duration:.9,ease:"expo.out",stagger:.08,scrollTrigger:{trigger:".contact-side",start:"top 92%"}});var nr=ki&&!Ze?z0(!_o):null;nr&&Xr.classList.add("companion");if(ki){let r={time:0,y:window.scrollY,vel:0,spin:0,rail:nr?nr.line:null},t=r.y,e=()=>{ki.layout(),nr&&nr.layout()};Yt.addEventListener("refresh",e),window.addEventListener("resize",e),ee.ticker.add((n,i)=>{if(!ki.state.started)return;let s=Math.min(i/1e3,.05);r.time+=s,r.y=window.scrollY,r.vel+=((r.y-t)/Math.max(s,.001)-r.vel)*.2,t=r.y;let o=ki.pose(r,s,!!nr);ki.frame(s,r,o),nr&&nr.frame(o)})}var M1=document.fonts.load("900 100px Anybody").catch(()=>{}).then(()=>{ki&&ki.start(),nr&&nr.layout()});Lg(M1,()=>{Ze||(ki&&ee.to(ki.state,{intro:1,duration:2.2,ease:"expo.out",delay:.25}),Ff(ve(".hero-line"),{delay:.55}),ee.from(".hero-side > *",{y:22,opacity:0,duration:1,ease:"expo.out",stagger:.09,delay:.85}),ee.from(".nav > *",{y:-18,opacity:0,duration:.9,ease:"expo.out",stagger:.08,delay:.7,clearProps:"transform,opacity"}))});document.fonts.ready.then(()=>Yt.refresh());window.addEventListener("load",()=>Yt.refresh());k0&&location.hash&&requestAnimationFrame(()=>{let r=ve(location.hash);r&&k0.scrollTo(r,{immediate:!0})});})();
