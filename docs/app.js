/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

/*! skrollr 0.6.26 (2014-06-08) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ft=r.forceHeight!==!1,ft&&(Vt=r.scale||1),mt=r.mobileDeceleration||x,dt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||E,vt={targetTop:it.getScrollTop()},Gt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Gt?(st=t.getElementById("skrollr-body"),st&&at(),X(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Mt)&&($t=t,Mt=e,_t=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.26"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",I=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^(@?[a-z\-]+)\[(\w+)\]$/,z=/-([a-z0-9_])/g,q=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,B="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(B=n.match(e)||+n==n&&t[n].match(e))break;if(!B)return B=G="",r;B=B[0],"-"===B.slice(0,1)?(G=B,B={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[B]):G="-"+B.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[B.toLowerCase()+"RequestAnimationFrame"],r=Pt();return(Gt||!t)&&(t=function(t){var n=Pt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Pt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[B.toLowerCase()+"CancelAnimationFrame"];return(Gt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=dt,f=yt,u=!1;if(a&&H in i&&delete i[H],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(N);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(z,q)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==A&&b!==F?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===F?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Vt))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&H in i?(x=i[H],k=lt[x].styleAttr,w=lt[x].classAttr):(x=i[H]=Bt++,k=i.style.cssText,w=Ct(i)),lt[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Pt(),o=it.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:U[t.easing||k],done:t.done},pt.topDiff||(pt.done&&pt.done.call(it,!1),pt=r),it},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(it,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.isMobile=function(){return Gt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,Gt?Kt=s.min(s.max(t,0),Ot):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return Gt?Kt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Ot},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),wt(),Dt(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Ot=0,Vt=1,ut=r,mt=r,zt="down",qt=-1,Mt=0,$t=0,_t=!1,pt=r,dt=r,gt=r,vt=r,ht=r,Bt=0,yt=r,Gt=!1,Kt=0,Tt=r};var X=function(){var n,i,l,c,d,g,v,h,y,T,b,S;St(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,I.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:I.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,it.setScrollTop(Kt-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!I.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/mt),F=E*A+.5*mt*A*A,C=it.getScrollTop()-F,D=0;C>Ot?(D=(Ot-C)/F,C=Ot):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=At();for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=m,ft&&!l.isEnd&&l.frame>Ot&&(Ot=l.frame);for(Ot=s.max(Ot,Ft()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Ot-l.offset+m);e.keyFrames.sort(Nt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(xt(c,p.eventType,zt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(xt(c,y.eventType,zt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=nt(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=rt(A.props[o].value,F.props[o].value,C),a=nt(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===zt?xt(c,A.eventType,zt):xt(c,F.eventType,zt),s.lastFrameIndex=E);break}}},Z=function(){_t&&(_t=!1,Et());var e,t,n=it.getScrollTop(),o=Pt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=vt.targetTop-n;a&&(vt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:Lt,endTime:Lt+gt}),vt.endTime>=o&&(t=U.sqrt((o-vt.startTime)/gt),n=0|vt.startTop+t*vt.topDiff)}if(Gt&&st&&i.setStyle(st,"transform","translate(0, "+-Kt+"px) "+Tt),ht||qt!==n){zt=n>qt?"down":qt>n?"up":zt,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Ot,direction:zt},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}Lt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=O.exec(l.props));)a=i[1],o=i[2],n=a.match(V),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(_.lastIndex=0,e=e.replace(_,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ct(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(z,q).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{B&&(n[B+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Yt.push({element:t,name:a,listener:n})},kt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=Yt.length;r>t;t++)e=Yt[t],kt(e.element,e.name,e.listener);Yt=[]},xt=function(e,t,r){ct.keyframe&&ct.keyframe.call(it,e,t,r)},Et=function(){var e=it.getScrollTop();Ot=0,ft&&!Gt&&(a.style.height=""),j(),ft&&!Gt&&(a.style.height=Ot+o.clientHeight+"px"),Gt?it.setScrollTop(s.min(it.getScrollTop(),Ot)):it.setScrollTop(e,!0),ht=!0},At=function(){var e,t,r=o.clientHeight,n={};for(e in ut)t=ut[e],"function"==typeof t?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ft=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Ct=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=It(i).replace(It(o[l])," ");i=Ht(i);for(var c=0,f=n.length;f>c;c++)-1===It(i).indexOf(It(n[c]))&&(i+=" "+n[c]);t[a]=Ht(i)},Ht=function(e){return e.replace(P,"")},It=function(e){return" "+e+" "},Pt=Date.now||function(){return+new Date},Nt=function(e,t){return e.frame-t.frame},Ot=0,Vt=1,zt="down",qt=-1,Lt=Pt(),Mt=0,$t=0,_t=!1,Bt=0,Gt=!1,Kt=0,Yt=[];"function"==typeof define&&define.amd?define("skrollr",function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i})(window,document);
/*! skrollr-menu 1.0.3 (2015-06-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr-menu | Free to use under terms of MIT license */
(function(t,e){"use strict";var n=500,a="sqrt",o=1,r="data-menu-top",i="data-menu-offset",u="data-menu-duration",c="data-menu-ignore",l=e.skrollr,s=e.history,f=!!s.pushState,h=function(e){return e!==t&&e?"A"===e.tagName.toUpperCase()?e:h(e.parentNode):!1},p=function(t){if(1===t.which||0===t.button){var e=h(t.target);e&&m(e)&&t.preventDefault()}},m=function(n,a){var o;if(y){if(n.hostname!==e.location.hostname)return!1;if(n.pathname!==t.location.pathname)return!1;o=n.hash}else o=n.getAttribute("href");if(!/^#/.test(o))return!1;if(!a&&null!==n.getAttribute(c))return!1;var l,h;if(h=T?T(n):n.getAttribute(r),null!==h)l=/p$/.test(h)?h.slice(0,-1)/100*t.documentElement.clientHeight:+h*k;else{var p=t.getElementById(o.substr(1));if(!p)return!1;l=v.relativeToAbsolute(p,"top","top");var m=p.getAttribute(i);null!==m&&(l+=+m)}f&&N&&!a&&s.pushState({top:l},"",o);var d=parseInt(n.getAttribute(u),10),q=A(v.getScrollTop(),l);return isNaN(d)||(q=d),E&&E(o,l),S&&!a?v.animateTo(l,{duration:q,easing:b}):g(function(){v.setScrollTop(l)}),!0},d=function(){if(e.location.hash&&t.querySelector){var n=t.querySelector('a[href="'+e.location.hash+'"]');n||(n=t.createElement("a"),n.href=e.location.hash),m(n,!0)}},g=function(t){e.setTimeout(t,1)};l.menu={},l.menu.init=function(r,i){v=r,i=i||{},b=i.easing||a,S=i.animate!==!1,A=i.duration||n,T=i.handleLink,k=i.scale||o,y=i.complexLinks===!0,E=i.change,N=i.updateUrl!==!1,"number"==typeof A&&(A=function(t){return function(){return t}}(A)),l.addEvent(t,"click",p),f&&l.addEvent(e,"popstate",function(t){var e=t.state||{},n=e.top||0;g(function(){v.setScrollTop(n)})},!1),d()},l.menu.click=function(t){m(t)};var v,b,A,S,T,k,y,E,N;g(function(){e.location.hash&&e.scrollTo(0,0)})})(document,window);
/**
  * 2016-2017 (C) Antonio Redondo / antonioredondo.com
  *
  * DOMTools is a nano-library which contains a bunch of functions to deal with basic
  * needs and problems faced on front-end web applications.
  *
  * It's implemented on ES5 JavaScript as the 'd' object on the global namespace.
  *
  * It contains the following functionality:
  * - Sorter name functions wrapping quering, events and timeouts functions.
  * - Generation of random integers.
  * - Adding, retrieving and removing cookies.
  * - Checking of CSS transforms support.
  * - Checking of OS.
  * - Calculation of element heights and positions.
  * - Loading of images and executing a callback once they're loaded.
  *
  */

(function(d) {
	"use strict";
	
	d.gi = function(id) {
		return document.getElementById(id);
	};
	
	d.gc = function(className) {
		return document.getElementsByClassName(className)[0];
	};
	
	d.gca = function(className) {
		return [].slice.call(document.getElementsByClassName(className));
	};
	
	d.qs = function(query) {
		return document.querySelector(query);
	};
	
	d.qsa = function(query) {
		return [].slice.call(document.querySelectorAll(query));
	};
	
	d.ae = function(event, callback) {
		return window.addEventListener(event, callback);
	};
	
	d.st = function(callback, time) {
		return window.setTimeout(callback, time);
	};
	
	d.si = function(callback, time) {
		return window.setInterval(callback, time);
	};
	
	
	
	
	
	/**
	  * Returns a random integer within a range.
	  * @param {number} min - The lower limit of the range. It defaults to -50.
	  * @param {number} max - The higher limit of the range. It defaults to 50.
	  * @returns {number} - The generated ramdon integer within the range.
	  */
	d.getRandomInt = function(min, max) {
		min = min || -50;
		max = max || 50;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	
	
	
	
	/**
	  * Returns the sum of clientHeights of all the elements selected by the CSS query provided.
	  * @param {string} selectors - CSS query.
	  * @returns {number} - The sum of all clientHeights. 0 if no elements selected.
	  */
	d.calcClientHeightsSum = function(selector) {
		var total = 0;
		var elements = [].slice.call(d.qsa(selector));
		
		elements.forEach(function(item) {
			total += item.clientHeight;
		});
		
		return total;
	};
	
	/**
	  * Returns an Array with DOMRects of all the elements selected by the CSS query provided.
	  * The border-box coordinates' origin is relative to the viewport.
	  * @param {string} selectors - CSS query.
	  * @returns {Array} - An array with DOMRects. undefined if no elements selected.
	  */
	d.calcPositionsToViewport = function(selectors) {
		var positions = [];
		var elements = [].slice.call(d.qsa(selectors));

		if (elements.length === 0)
			return;

		elements.forEach(function(item) {
			positions.push(item.getBoundingClientRect());
		});

		return positions;
	};
	
	/**
	  * Returns an Object with left, top, width and height properties of the child
	  * element border-box position relative to a parent element specified by parentSelector.
	  * The parent and the child don't need to be directly nested on the elements' hierarchy.
	  * If a CSS selector string is provided and it selects more than one element
	  * only the first element will be used.
	  * @param {string|HTMLElement} parentSelector - CSS selector string or HTMLElement for a reference parent.
	  * @param {string|HTMLElement} childSelector - CSS selector string or HTMLElement for the child.
	  * @returns {Object} - An Object with left, top, width and height properties.
	*/
	d.calcRelativePosition = function(parent, child) {
		if (typeof parent === "string")
			parent = d.qs(parent);
		if (typeof child === "string")
			child = d.qs(child);

		if ((!parent || !child)
				&& (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement))) {
			console.error("The parent or child were undefined or they weren\'t HTMLElements");// eslint-disable-line no-console
			return;
		}

		var parentRect = parent.getBoundingClientRect();
		var childRect = child.getBoundingClientRect();

		var offset = {
			left: null,
			top: null,
			width: null,
			height: null
		};

		offset.left = childRect.left - parentRect.left;
		offset.top = childRect.top - parentRect.top;
		offset.width = child.offsetWidth;
		offset.height = child.offsetHeight;

		return offset;
	};
	
	
	
	
	
	var elementsToLoad = [];
	var	callbacks = [];
		
	var runCallbacks = function() {
		var allLoaded = elementsToLoad.every(function(i) {
			return i.loaded;
		});
		
		if (allLoaded) {
			callbacks.forEach(function(i) {
				i();
			});
		}
	};
	
	d.notifyWhenLoaded = function(selector) {
		var elementToLoad = {
			selector: selector,
			loaded: false,
			get setAsLoaded() {
				this.loaded = true;
				runCallbacks();
			}
			// Chrome 53 works. Firefox 49 and Edge 14 don't
			//setAsLoaded: function() {
			//	elementToLoad.loaded = true;
			//	runCallbacks();
			//	console.log("bbb");
			//}
			// Doesn't work on browsers
			//setAsLoaded: function() {
			//	this.loaded = true;
			//	runCallbacks();
			//	console.log("ccc");
			//}
		};
		
		var element = d.qs(selector);
		if (element) {
			elementsToLoad.push(elementToLoad);
			
			// http://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-in-javascript
			if (element.complete && element.naturalHeight !== 0) {
				elementToLoad.setAsLoaded;
			} else element.addEventListener("load", elementToLoad.setAsLoaded);
		}
		
		return element;
	};
	
	d.runWhenAllLoaded = function(callback) {
		callbacks.push(callback);
		runCallbacks();
	};
	
	d.resetElementsToLoad = function() {
		elementsToLoad = [];
		callbacks = [];
	};
	
	
	
	
	
	d.checkTransformsSupported = function() {
		if (document.documentElement.style.transform !== undefined)
			return "transform";
		else if (document.documentElement.style.webkitTransform !== undefined)
			return "webkitTransform";
	};
	
	// http://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript
	d.getOS = function() {
		var os;
		var ua = window.navigator.userAgent;
		
		if (ua.indexOf("Win") != -1)		os = "Windows";
		if (ua.indexOf("Mac") != -1)		os = "macOS";
		if (ua.indexOf("Linux") != -1)		os = "Linux";
		if (ua.indexOf("Android") != -1)	os = "Android";
		if (ua.indexOf("like Mac") != -1)	os = "iOS";
		
		return os;
	};
	
	
	
	
	/**
	* Gets a cookie by name.
	* @param {string} name - Name of the cookie.
	* @returns {string} - The value of the cookie. null is no cookie was found with the given name.
	*/
	d.getCookie = function(name) {
		var nameWithEqual = name + "=";
		var ca = document.cookie.split(";");
		
		for (var i=0; i < ca.length; i++) {
			var c = ca[i];
			
			while (c.charAt(0) == " ")
				c = c.substring(1,c.length);
				
			if (c.indexOf(nameWithEqual) === 0)
				return c.substring(nameWithEqual.length, c.length);
		}
		return null;
	};
	
	/**
	* Sets a cookie by name.
	* @param {string} name - Name of the cookie.
	* @param {string} value - Value for the cookie.
	* @param {string} days - Expiration time in days.
	* @returns {undefined} - Always undefined
	*/
	d.setCookie = function(name, value, days) {
		var expires;
		
		if (days) {
			var date = new Date();
			
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toGMTString();
		} else expires = "";
		
		document.cookie = name + "=" + value + expires + "; path=/";
	};
	
	/**
	* Removes a cookie by name.
	* @param {string} name - Name of the cookie to remove.
	* @returns {undefined} - Always undefined.
	*/
	d.removeCookie = function(name) {
		this.setCookie(name, "", -1);
	};
	
}(window.d = window.d || {}));


function showTopBarEntries() {
	var menuEntries = d.qsa(".top-bar__tab-container:nth-child(n+3)");
	menuEntries.forEach(function(e, i) {
		e.classList.add("top-bar__tab-container--in");
		e.classList.add("top-bar__tab-container--in" + (i + 1));
	});
}





function setMargin(breakpointMobile) {
	var margin = 300;
	if (window.innerWidth < breakpointMobile)
		margin = 80;
	return margin;
}





function setBodyHeight(height) {
	document.body.style.height = height + "px";
}





function moveLine(position) {
	var hash = window.location.hash;
	if (position === undefined && hash) {
		switch (hash.slice(1)) {
			case "intro":		position = 0; break;
			case "who-we-are":	position = 1; break;
			case "contact":		position = 2; break;
			default:			position = 0; break;
		}
	} else if (position === undefined) {
		position = 0;
	}
	
	var topBarPositions = d.calcPositionsToViewport(".top-bar__tab");
	var line = d.gc("top-bar__line");
	line.style.width = topBarPositions[position].width + "px";
	line.style.transform = "translate3d(" + topBarPositions[position].left + "px, 0, 0)";
}





function init() { // eslint-disable-line no-unused-vars
	var breakpointMobile = 810;
	var margin = setMargin(breakpointMobile);
	var gap = -margin;
	
	d.st(function() { showTopBarEntries(); }, 2500);
	setBodyHeight(d.calcClientHeightsSum("section.skrollr-deck") + margin*6);
	moveLine();
	
	
	
	
	// Sets up Skroller
	var offsetFunctions = {
		get d0() { return d.gi("intro").clientHeight + margin; },
		get d0g() { return gap + this.d0; },
		get d1() { return d.gi("who-we-are").clientHeight + margin + this.d0; },
		get d1g() { return gap + this.d1; },
		get d2() { return d.gi("contact").clientHeight + margin + this.d1; }
	};
		
	var skrollrInstance = skrollr.init({
		smoothScrolling: false,
		forceHeight: false,
		constants: offsetFunctions,
		mobileCheck: function() { return false; },
		keyframe: function(element, name, direction) {
			// console.log("keyframe:");
			// console.log(name);
			// console.log(name.slice(6));
			var extra = 0;
			if (direction === "up")
				--extra;
			switch (name.slice(6)) {
				case "0g": moveLine(1 + extra); break;
				case "1g": moveLine(2 + extra); break;
				case "2g": moveLine(3 + extra);
			}
		}
	});
	
	// Sets up Skroller Menu
	skrollr.menu.init(skrollrInstance, {
		animate: true,
		easing: "outCubic",
		duration: 500,
		handleLink: function(link) {
			var extra = 1;
			var linkText = link.href.split("#").pop();
			
			try { // To prevent SYNTAX_ERR exception
				if (d.qs("#" + linkText) === null)
					throw Error;
			} catch(e) {
				document.location.hash = "";
				return 0;
			}
			
			switch (linkText) {
				case "intro":		return 0;
				case "who-we-are":	return offsetFunctions.d0 + extra;
				case "contact":		return offsetFunctions.d1 + extra;
			}
			
			return 0;
		}
	});
	
	
	
	// Adds logic for 'scroll' and 'resize' events
	var scrolled = false,
		distance = offsetFunctions.d0/3.5,
		header = d.gc("top-bar");
	
	d.ae("scroll", function() {
		if (window.pageYOffset > distance && !scrolled) {
			header.classList.add("top-bar--in");
			scrolled = true;
		} else if (window.pageYOffset < distance && scrolled) {
			header.classList.remove("top-bar--in");
			scrolled = false;
		}
	});
	
	d.ae("resize", function() {
		margin = setMargin(breakpointMobile);
		setBodyHeight(d.calcClientHeightsSum("section.skrollr-deck") + margin*6);
		d.st(function() { moveLine(); }, 500);
		d.gc("top-bar").classList.remove("top-bar--open");
		d.gc("top-bar__three-bars-close").classList.remove("top-bar__three-bars-close--in");
	});
	
	d.ae("load", function() { // There are images that haven't height specified and it's only known once the image is loaded. They affect the height of the page.
		margin = setMargin(breakpointMobile);
		setBodyHeight(d.calcClientHeightsSum("section.skrollr-deck") + margin*2);
		d.st(function() { moveLine(); }, 500);
	});
	
	
	
	// Adapts the UI to remove intro animations if the URL points to a section
	var hash = window.location.hash;
	if ((hash && hash !== "#intro") ||
			window.innerWidth < breakpointMobile) {
		d.gc("top-bar").classList.add("top-bar--in");
		d.gc("top-bar").classList.add("top-bar--in2");
		d.st(function() { d.gc("top-bar").classList.remove("top-bar--in2"); }, 1000);
		
		showTopBarEntries();
		
		d.st(function() { moveLine(); }, 500);
	}
	
	
	
	// Set ups the navigation top bar for mobile screens
	d.qsa(".top-bar__tab, .top-bar__three-bars, .top-bar__three-bars-close").forEach(function(item) {
		item.addEventListener("click", function() {
			if (window.innerWidth < breakpointMobile) {
				d.gc("top-bar").classList.toggle("top-bar--open");
				d.gc("top-bar__three-bars-close").classList.toggle("top-bar__three-bars-close--in");
			}
		});
	});
	
	
	
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits
	d.qs("a.top-bar__tab[href='#intro']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "intro"); });
	d.qs("a.top-bar__tab[href='#who-we-are']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "who-we-are"); });
	d.qs("a.top-bar__tab[href='#contact']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "contact"); });
	
	
	
	d.gc("body").classList.add("body--in");
}

d.notifyWhenLoaded(".intro__header");
d.notifyWhenLoaded(".intro__logo");

WebFont.load({
	google: {
		families: ["Roboto Slab:300,700", "Source Sans Pro:300,900"]
	},
	active: function() {
		d.runWhenAllLoaded(init);
	},
	inactive: function() {
		window.location.reload();
	},
	classes: false,
	timeout: 8000
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZvbnRsb2FkZXIuanMiLCJza3JvbGxyLm1pbi5qcyIsInNrcm9sbHIubWVudS5taW4uanMiLCJET01Ub29scy5qcyIsImFlZ2VlTG9uZG9uLmpzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUNEQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDclNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogV2ViIEZvbnQgTG9hZGVyIHYxLjYuMjggLSAoYykgQWRvYmUgU3lzdGVtcywgR29vZ2xlLiBMaWNlbnNlOiBBcGFjaGUgMi4wICovKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYWEoYSxiLGMpe3JldHVybiBhLmNhbGwuYXBwbHkoYS5iaW5kLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYmEoYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShjLGQpO3JldHVybiBhLmFwcGx5KGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gcChhLGIsYyl7cD1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmLTEhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLnRvU3RyaW5nKCkuaW5kZXhPZihcIm5hdGl2ZSBjb2RlXCIpP2FhOmJhO3JldHVybiBwLmFwcGx5KG51bGwsYXJndW1lbnRzKX12YXIgcT1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9O2Z1bmN0aW9uIGNhKGEsYil7dGhpcy5hPWE7dGhpcy5vPWJ8fGE7dGhpcy5jPXRoaXMuby5kb2N1bWVudH12YXIgZGE9ISF3aW5kb3cuRm9udEZhY2U7ZnVuY3Rpb24gdChhLGIsYyxkKXtiPWEuYy5jcmVhdGVFbGVtZW50KGIpO2lmKGMpZm9yKHZhciBlIGluIGMpYy5oYXNPd25Qcm9wZXJ0eShlKSYmKFwic3R5bGVcIj09ZT9iLnN0eWxlLmNzc1RleHQ9Y1tlXTpiLnNldEF0dHJpYnV0ZShlLGNbZV0pKTtkJiZiLmFwcGVuZENoaWxkKGEuYy5jcmVhdGVUZXh0Tm9kZShkKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gdShhLGIsYyl7YT1hLmMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYilbMF07YXx8KGE9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTthLmluc2VydEJlZm9yZShjLGEubGFzdENoaWxkKX1mdW5jdGlvbiB2KGEpe2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpfVxuZnVuY3Rpb24gdyhhLGIsYyl7Yj1ifHxbXTtjPWN8fFtdO2Zvcih2YXIgZD1hLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLGU9MDtlPGIubGVuZ3RoO2UrPTEpe2Zvcih2YXIgZj0hMSxnPTA7ZzxkLmxlbmd0aDtnKz0xKWlmKGJbZV09PT1kW2ddKXtmPSEwO2JyZWFrfWZ8fGQucHVzaChiW2VdKX1iPVtdO2ZvcihlPTA7ZTxkLmxlbmd0aDtlKz0xKXtmPSExO2ZvcihnPTA7ZzxjLmxlbmd0aDtnKz0xKWlmKGRbZV09PT1jW2ddKXtmPSEwO2JyZWFrfWZ8fGIucHVzaChkW2VdKX1hLmNsYXNzTmFtZT1iLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpfWZ1bmN0aW9uIHkoYSxiKXtmb3IodmFyIGM9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWlmKGNbZF09PWIpcmV0dXJuITA7cmV0dXJuITF9XG5mdW5jdGlvbiBlYShhKXtyZXR1cm4gYS5vLmxvY2F0aW9uLmhvc3RuYW1lfHxhLmEubG9jYXRpb24uaG9zdG5hbWV9ZnVuY3Rpb24geihhLGIsYyl7ZnVuY3Rpb24gZCgpe20mJmUmJmYmJihtKGcpLG09bnVsbCl9Yj10KGEsXCJsaW5rXCIse3JlbDpcInN0eWxlc2hlZXRcIixocmVmOmIsbWVkaWE6XCJhbGxcIn0pO3ZhciBlPSExLGY9ITAsZz1udWxsLG09Y3x8bnVsbDtkYT8oYi5vbmxvYWQ9ZnVuY3Rpb24oKXtlPSEwO2QoKX0sYi5vbmVycm9yPWZ1bmN0aW9uKCl7ZT0hMDtnPUVycm9yKFwiU3R5bGVzaGVldCBmYWlsZWQgdG8gbG9hZFwiKTtkKCl9KTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZT0hMDtkKCl9LDApO3UoYSxcImhlYWRcIixiKX1cbmZ1bmN0aW9uIEEoYSxiLGMsZCl7dmFyIGU9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtpZihlKXt2YXIgZj10KGEsXCJzY3JpcHRcIix7c3JjOmJ9KSxnPSExO2Yub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Z3x8dGhpcy5yZWFkeVN0YXRlJiZcImxvYWRlZFwiIT10aGlzLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9dGhpcy5yZWFkeVN0YXRlfHwoZz0hMCxjJiZjKG51bGwpLGYub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJIRUFEXCI9PWYucGFyZW50Tm9kZS50YWdOYW1lJiZlLnJlbW92ZUNoaWxkKGYpKX07ZS5hcHBlbmRDaGlsZChmKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z3x8KGc9ITAsYyYmYyhFcnJvcihcIlNjcmlwdCBsb2FkIHRpbWVvdXRcIikpKX0sZHx8NUUzKTtyZXR1cm4gZn1yZXR1cm4gbnVsbH07ZnVuY3Rpb24gQigpe3RoaXMuYT0wO3RoaXMuYz1udWxsfWZ1bmN0aW9uIEMoYSl7YS5hKys7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hLS07RChhKX19ZnVuY3Rpb24gRShhLGIpe2EuYz1iO0QoYSl9ZnVuY3Rpb24gRChhKXswPT1hLmEmJmEuYyYmKGEuYygpLGEuYz1udWxsKX07ZnVuY3Rpb24gRihhKXt0aGlzLmE9YXx8XCItXCJ9Ri5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYi5wdXNoKGFyZ3VtZW50c1tjXS5yZXBsYWNlKC9bXFxXX10rL2csXCJcIikudG9Mb3dlckNhc2UoKSk7cmV0dXJuIGIuam9pbih0aGlzLmEpfTtmdW5jdGlvbiBHKGEsYil7dGhpcy5jPWE7dGhpcy5mPTQ7dGhpcy5hPVwiblwiO3ZhciBjPShifHxcIm40XCIpLm1hdGNoKC9eKFtuaW9dKShbMS05XSkkL2kpO2MmJih0aGlzLmE9Y1sxXSx0aGlzLmY9cGFyc2VJbnQoY1syXSwxMCkpfWZ1bmN0aW9uIGZhKGEpe3JldHVybiBIKGEpK1wiIFwiKyhhLmYrXCIwMFwiKStcIiAzMDBweCBcIitJKGEuYyl9ZnVuY3Rpb24gSShhKXt2YXIgYj1bXTthPWEuc3BsaXQoLyxcXHMqLyk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10ucmVwbGFjZSgvWydcIl0vZyxcIlwiKTstMSE9ZC5pbmRleE9mKFwiIFwiKXx8L15cXGQvLnRlc3QoZCk/Yi5wdXNoKFwiJ1wiK2QrXCInXCIpOmIucHVzaChkKX1yZXR1cm4gYi5qb2luKFwiLFwiKX1mdW5jdGlvbiBKKGEpe3JldHVybiBhLmErYS5mfWZ1bmN0aW9uIEgoYSl7dmFyIGI9XCJub3JtYWxcIjtcIm9cIj09PWEuYT9iPVwib2JsaXF1ZVwiOlwiaVwiPT09YS5hJiYoYj1cIml0YWxpY1wiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGdhKGEpe3ZhciBiPTQsYz1cIm5cIixkPW51bGw7YSYmKChkPWEubWF0Y2goLyhub3JtYWx8b2JsaXF1ZXxpdGFsaWMpL2kpKSYmZFsxXSYmKGM9ZFsxXS5zdWJzdHIoMCwxKS50b0xvd2VyQ2FzZSgpKSwoZD1hLm1hdGNoKC8oWzEtOV0wMHxub3JtYWx8Ym9sZCkvaSkpJiZkWzFdJiYoL2JvbGQvaS50ZXN0KGRbMV0pP2I9NzovWzEtOV0wMC8udGVzdChkWzFdKSYmKGI9cGFyc2VJbnQoZFsxXS5zdWJzdHIoMCwxKSwxMCkpKSk7cmV0dXJuIGMrYn07ZnVuY3Rpb24gaGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9YS5vLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt0aGlzLmg9Yjt0aGlzLmE9bmV3IEYoXCItXCIpO3RoaXMuaj0hMSE9PWIuZXZlbnRzO3RoaXMuZz0hMSE9PWIuY2xhc3Nlc31mdW5jdGlvbiBpYShhKXthLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXSk7SyhhLFwibG9hZGluZ1wiKX1mdW5jdGlvbiBMKGEpe2lmKGEuZyl7dmFyIGI9eShhLmYsYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpKSxjPVtdLGQ9W2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildO2J8fGMucHVzaChhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKSk7dyhhLmYsYyxkKX1LKGEsXCJpbmFjdGl2ZVwiKX1mdW5jdGlvbiBLKGEsYixjKXtpZihhLmomJmEuaFtiXSlpZihjKWEuaFtiXShjLmMsSihjKSk7ZWxzZSBhLmhbYl0oKX07ZnVuY3Rpb24gamEoKXt0aGlzLmM9e319ZnVuY3Rpb24ga2EoYSxiLGMpe3ZhciBkPVtdLGU7Zm9yKGUgaW4gYilpZihiLmhhc093blByb3BlcnR5KGUpKXt2YXIgZj1hLmNbZV07ZiYmZC5wdXNoKGYoYltlXSxjKSl9cmV0dXJuIGR9O2Z1bmN0aW9uIE0oYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9dCh0aGlzLmMsXCJzcGFuXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn0sdGhpcy5mKX1mdW5jdGlvbiBOKGEpe3UoYS5jLFwiYm9keVwiLGEuYSl9ZnVuY3Rpb24gTyhhKXtyZXR1cm5cImRpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7bGVmdDotOTk5OXB4O2ZvbnQtc2l6ZTozMDBweDt3aWR0aDphdXRvO2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0Om5vcm1hbDttYXJnaW46MDtwYWRkaW5nOjA7Zm9udC12YXJpYW50Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6XCIrSShhLmMpK1wiO1wiKyhcImZvbnQtc3R5bGU6XCIrSChhKStcIjtmb250LXdlaWdodDpcIisoYS5mK1wiMDBcIikrXCI7XCIpfTtmdW5jdGlvbiBQKGEsYixjLGQsZSxmKXt0aGlzLmc9YTt0aGlzLmo9Yjt0aGlzLmE9ZDt0aGlzLmM9Yzt0aGlzLmY9ZXx8M0UzO3RoaXMuaD1mfHx2b2lkIDB9UC5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmMuby5kb2N1bWVudCxiPXRoaXMsYz1xKCksZD1uZXcgUHJvbWlzZShmdW5jdGlvbihkLGUpe2Z1bmN0aW9uIGYoKXtxKCktYz49Yi5mP2UoKTphLmZvbnRzLmxvYWQoZmEoYi5hKSxiLmgpLnRoZW4oZnVuY3Rpb24oYSl7MTw9YS5sZW5ndGg/ZCgpOnNldFRpbWVvdXQoZiwyNSl9LGZ1bmN0aW9uKCl7ZSgpfSl9ZigpfSksZT1udWxsLGY9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxkKXtlPXNldFRpbWVvdXQoZCxiLmYpfSk7UHJvbWlzZS5yYWNlKFtmLGRdKS50aGVuKGZ1bmN0aW9uKCl7ZSYmKGNsZWFyVGltZW91dChlKSxlPW51bGwpO2IuZyhiLmEpfSxmdW5jdGlvbigpe2IuaihiLmEpfSl9O2Z1bmN0aW9uIFEoYSxiLGMsZCxlLGYsZyl7dGhpcy52PWE7dGhpcy5CPWI7dGhpcy5jPWM7dGhpcy5hPWQ7dGhpcy5zPWd8fFwiQkVTYnN3eVwiO3RoaXMuZj17fTt0aGlzLnc9ZXx8M0UzO3RoaXMudT1mfHxudWxsO3RoaXMubT10aGlzLmo9dGhpcy5oPXRoaXMuZz1udWxsO3RoaXMuZz1uZXcgTSh0aGlzLmMsdGhpcy5zKTt0aGlzLmg9bmV3IE0odGhpcy5jLHRoaXMucyk7dGhpcy5qPW5ldyBNKHRoaXMuYyx0aGlzLnMpO3RoaXMubT1uZXcgTSh0aGlzLmMsdGhpcy5zKTthPW5ldyBHKHRoaXMuYS5jK1wiLHNlcmlmXCIsSih0aGlzLmEpKTthPU8oYSk7dGhpcy5nLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEcodGhpcy5hLmMrXCIsc2Fucy1zZXJpZlwiLEoodGhpcy5hKSk7YT1PKGEpO3RoaXMuaC5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBHKFwic2VyaWZcIixKKHRoaXMuYSkpO2E9TyhhKTt0aGlzLmouYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgRyhcInNhbnMtc2VyaWZcIixKKHRoaXMuYSkpO2E9XG5PKGEpO3RoaXMubS5hLnN0eWxlLmNzc1RleHQ9YTtOKHRoaXMuZyk7Tih0aGlzLmgpO04odGhpcy5qKTtOKHRoaXMubSl9dmFyIFI9e0Q6XCJzZXJpZlwiLEM6XCJzYW5zLXNlcmlmXCJ9LFM9bnVsbDtmdW5jdGlvbiBUKCl7aWYobnVsbD09PVMpe3ZhciBhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtTPSEhYSYmKDUzNj5wYXJzZUludChhWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYVsxXSwxMCkmJjExPj1wYXJzZUludChhWzJdLDEwKSl9cmV0dXJuIFN9US5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLmYuc2VyaWY9dGhpcy5qLmEub2Zmc2V0V2lkdGg7dGhpcy5mW1wic2Fucy1zZXJpZlwiXT10aGlzLm0uYS5vZmZzZXRXaWR0aDt0aGlzLkE9cSgpO1UodGhpcyl9O1xuZnVuY3Rpb24gbGEoYSxiLGMpe2Zvcih2YXIgZCBpbiBSKWlmKFIuaGFzT3duUHJvcGVydHkoZCkmJmI9PT1hLmZbUltkXV0mJmM9PT1hLmZbUltkXV0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gVShhKXt2YXIgYj1hLmcuYS5vZmZzZXRXaWR0aCxjPWEuaC5hLm9mZnNldFdpZHRoLGQ7KGQ9Yj09PWEuZi5zZXJpZiYmYz09PWEuZltcInNhbnMtc2VyaWZcIl0pfHwoZD1UKCkmJmxhKGEsYixjKSk7ZD9xKCktYS5BPj1hLnc/VCgpJiZsYShhLGIsYykmJihudWxsPT09YS51fHxhLnUuaGFzT3duUHJvcGVydHkoYS5hLmMpKT9WKGEsYS52KTpWKGEsYS5CKTptYShhKTpWKGEsYS52KX1mdW5jdGlvbiBtYShhKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXtVKHRoaXMpfSxhKSw1MCl9ZnVuY3Rpb24gVihhLGIpe3NldFRpbWVvdXQocChmdW5jdGlvbigpe3YodGhpcy5nLmEpO3YodGhpcy5oLmEpO3YodGhpcy5qLmEpO3YodGhpcy5tLmEpO2IodGhpcy5hKX0sYSksMCl9O2Z1bmN0aW9uIFcoYSxiLGMpe3RoaXMuYz1hO3RoaXMuYT1iO3RoaXMuZj0wO3RoaXMubT10aGlzLmo9ITE7dGhpcy5zPWN9dmFyIFg9bnVsbDtXLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtiLmcmJncoYi5mLFtiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKV0sW2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKSxiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpXSk7SyhiLFwiZm9udGFjdGl2ZVwiLGEpO3RoaXMubT0hMDtuYSh0aGlzKX07XG5XLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtpZihiLmcpe3ZhciBjPXkoYi5mLGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpKSxkPVtdLGU9W2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKV07Y3x8ZC5wdXNoKGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIikpO3coYi5mLGQsZSl9SyhiLFwiZm9udGluYWN0aXZlXCIsYSk7bmEodGhpcyl9O2Z1bmN0aW9uIG5hKGEpezA9PS0tYS5mJiZhLmomJihhLm0/KGE9YS5hLGEuZyYmdyhhLmYsW2EuYS5jKFwid2ZcIixcImFjdGl2ZVwiKV0sW2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIiksYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIildKSxLKGEsXCJhY3RpdmVcIikpOkwoYS5hKSl9O2Z1bmN0aW9uIG9hKGEpe3RoaXMuaj1hO3RoaXMuYT1uZXcgamE7dGhpcy5oPTA7dGhpcy5mPXRoaXMuZz0hMH1vYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt0aGlzLmM9bmV3IGNhKHRoaXMuaixhLmNvbnRleHR8fHRoaXMuaik7dGhpcy5nPSExIT09YS5ldmVudHM7dGhpcy5mPSExIT09YS5jbGFzc2VzO3BhKHRoaXMsbmV3IGhhKHRoaXMuYyxhKSxhKX07XG5mdW5jdGlvbiBxYShhLGIsYyxkLGUpe3ZhciBmPTA9PS0tYS5oOyhhLmZ8fGEuZykmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYT1lfHxudWxsLG09ZHx8bnVsbHx8e307aWYoMD09PWMubGVuZ3RoJiZmKUwoYi5hKTtlbHNle2IuZis9Yy5sZW5ndGg7ZiYmKGIuaj1mKTt2YXIgaCxsPVtdO2ZvcihoPTA7aDxjLmxlbmd0aDtoKyspe3ZhciBrPWNbaF0sbj1tW2suY10scj1iLmEseD1rO3IuZyYmdyhyLmYsW3IuYS5jKFwid2ZcIix4LmMsSih4KS50b1N0cmluZygpLFwibG9hZGluZ1wiKV0pO0socixcImZvbnRsb2FkaW5nXCIseCk7cj1udWxsO2lmKG51bGw9PT1YKWlmKHdpbmRvdy5Gb250RmFjZSl7dmFyIHg9L0dlY2tvLipGaXJlZm94XFwvKFxcZCspLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSx4YT0vT1MgWC4qVmVyc2lvblxcLzEwXFwuLipTYWZhcmkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGUvLmV4ZWMod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpO1xuWD14PzQyPHBhcnNlSW50KHhbMV0sMTApOnhhPyExOiEwfWVsc2UgWD0hMTtYP3I9bmV3IFAocChiLmcsYikscChiLmgsYiksYi5jLGssYi5zLG4pOnI9bmV3IFEocChiLmcsYikscChiLmgsYiksYi5jLGssYi5zLGEsbik7bC5wdXNoKHIpfWZvcihoPTA7aDxsLmxlbmd0aDtoKyspbFtoXS5zdGFydCgpfX0sMCl9ZnVuY3Rpb24gcGEoYSxiLGMpe3ZhciBkPVtdLGU9Yy50aW1lb3V0O2lhKGIpO3ZhciBkPWthKGEuYSxjLGEuYyksZj1uZXcgVyhhLmMsYixlKTthLmg9ZC5sZW5ndGg7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspZFtiXS5sb2FkKGZ1bmN0aW9uKGIsZCxjKXtxYShhLGYsYixkLGMpfSl9O2Z1bmN0aW9uIHJhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9XG5yYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7aWYoZltcIl9fbXRpX2ZudExzdFwiK2RdKXt2YXIgYz1mW1wiX19tdGlfZm50THN0XCIrZF0oKSxlPVtdLGg7aWYoYylmb3IodmFyIGw9MDtsPGMubGVuZ3RoO2wrKyl7dmFyIGs9Y1tsXS5mb250ZmFtaWx5O3ZvaWQgMCE9Y1tsXS5mb250U3R5bGUmJnZvaWQgMCE9Y1tsXS5mb250V2VpZ2h0PyhoPWNbbF0uZm9udFN0eWxlK2NbbF0uZm9udFdlaWdodCxlLnB1c2gobmV3IEcoayxoKSkpOmUucHVzaChuZXcgRyhrKSl9YShlKX1lbHNlIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKCl9LDUwKX12YXIgYz10aGlzLGQ9Yy5hLnByb2plY3RJZCxlPWMuYS52ZXJzaW9uO2lmKGQpe3ZhciBmPWMuYy5vO0EodGhpcy5jLChjLmEuYXBpfHxcImh0dHBzOi8vZmFzdC5mb250cy5uZXQvanNhcGlcIikrXCIvXCIrZCtcIi5qc1wiKyhlP1wiP3Y9XCIrZTpcIlwiKSxmdW5jdGlvbihlKXtlP2EoW10pOihmW1wiX19Nb25vdHlwZUNvbmZpZ3VyYXRpb25fX1wiK1xuZF09ZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSxiKCkpfSkuaWQ9XCJfX01vbm90eXBlQVBJU2NyaXB0X19cIitkfWVsc2UgYShbXSl9O2Z1bmN0aW9uIHNhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9c2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMuYS51cmxzfHxbXSxlPXRoaXMuYS5mYW1pbGllc3x8W10sZj10aGlzLmEudGVzdFN0cmluZ3N8fHt9LGc9bmV3IEI7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspeih0aGlzLmMsZFtiXSxDKGcpKTt2YXIgbT1bXTtiPTA7Zm9yKGM9ZS5sZW5ndGg7YjxjO2IrKylpZihkPWVbYl0uc3BsaXQoXCI6XCIpLGRbMV0pZm9yKHZhciBoPWRbMV0uc3BsaXQoXCIsXCIpLGw9MDtsPGgubGVuZ3RoO2wrPTEpbS5wdXNoKG5ldyBHKGRbMF0saFtsXSkpO2Vsc2UgbS5wdXNoKG5ldyBHKGRbMF0pKTtFKGcsZnVuY3Rpb24oKXthKG0sZil9KX07ZnVuY3Rpb24gdGEoYSxiKXthP3RoaXMuYz1hOnRoaXMuYz11YTt0aGlzLmE9W107dGhpcy5mPVtdO3RoaXMuZz1ifHxcIlwifXZhciB1YT1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzXCI7ZnVuY3Rpb24gdmEoYSxiKXtmb3IodmFyIGM9Yi5sZW5ndGgsZD0wO2Q8YztkKyspe3ZhciBlPWJbZF0uc3BsaXQoXCI6XCIpOzM9PWUubGVuZ3RoJiZhLmYucHVzaChlLnBvcCgpKTt2YXIgZj1cIlwiOzI9PWUubGVuZ3RoJiZcIlwiIT1lWzFdJiYoZj1cIjpcIik7YS5hLnB1c2goZS5qb2luKGYpKX19XG5mdW5jdGlvbiB3YShhKXtpZigwPT1hLmEubGVuZ3RoKXRocm93IEVycm9yKFwiTm8gZm9udHMgdG8gbG9hZCFcIik7aWYoLTEhPWEuYy5pbmRleE9mKFwia2l0PVwiKSlyZXR1cm4gYS5jO2Zvcih2YXIgYj1hLmEubGVuZ3RoLGM9W10sZD0wO2Q8YjtkKyspYy5wdXNoKGEuYVtkXS5yZXBsYWNlKC8gL2csXCIrXCIpKTtiPWEuYytcIj9mYW1pbHk9XCIrYy5qb2luKFwiJTdDXCIpOzA8YS5mLmxlbmd0aCYmKGIrPVwiJnN1YnNldD1cIithLmYuam9pbihcIixcIikpOzA8YS5nLmxlbmd0aCYmKGIrPVwiJnRleHQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEuZykpO3JldHVybiBifTtmdW5jdGlvbiB5YShhKXt0aGlzLmY9YTt0aGlzLmE9W107dGhpcy5jPXt9fVxudmFyIHphPXtsYXRpbjpcIkJFU2Jzd3lcIixcImxhdGluLWV4dFwiOlwiXFx1MDBlN1xcdTAwZjZcXHUwMGZjXFx1MDExZlxcdTAxNWZcIixjeXJpbGxpYzpcIlxcdTA0MzlcXHUwNDRmXFx1MDQxNlwiLGdyZWVrOlwiXFx1MDNiMVxcdTAzYjJcXHUwM2EzXCIsa2htZXI6XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIixIYW51bWFuOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCJ9LEFhPXt0aGluOlwiMVwiLGV4dHJhbGlnaHQ6XCIyXCIsXCJleHRyYS1saWdodFwiOlwiMlwiLHVsdHJhbGlnaHQ6XCIyXCIsXCJ1bHRyYS1saWdodFwiOlwiMlwiLGxpZ2h0OlwiM1wiLHJlZ3VsYXI6XCI0XCIsYm9vazpcIjRcIixtZWRpdW06XCI1XCIsXCJzZW1pLWJvbGRcIjpcIjZcIixzZW1pYm9sZDpcIjZcIixcImRlbWktYm9sZFwiOlwiNlwiLGRlbWlib2xkOlwiNlwiLGJvbGQ6XCI3XCIsXCJleHRyYS1ib2xkXCI6XCI4XCIsZXh0cmFib2xkOlwiOFwiLFwidWx0cmEtYm9sZFwiOlwiOFwiLHVsdHJhYm9sZDpcIjhcIixibGFjazpcIjlcIixoZWF2eTpcIjlcIixsOlwiM1wiLHI6XCI0XCIsYjpcIjdcIn0sQmE9e2k6XCJpXCIsaXRhbGljOlwiaVwiLG46XCJuXCIsbm9ybWFsOlwiblwifSxcbkNhPS9eKHRoaW58KD86KD86ZXh0cmF8dWx0cmEpLT8pP2xpZ2h0fHJlZ3VsYXJ8Ym9va3xtZWRpdW18KD86KD86c2VtaXxkZW1pfGV4dHJhfHVsdHJhKS0/KT9ib2xkfGJsYWNrfGhlYXZ5fGx8cnxifFsxLTldMDApPyhufGl8bm9ybWFsfGl0YWxpYyk/JC87XG5mdW5jdGlvbiBEYShhKXtmb3IodmFyIGI9YS5mLmxlbmd0aCxjPTA7YzxiO2MrKyl7dmFyIGQ9YS5mW2NdLnNwbGl0KFwiOlwiKSxlPWRbMF0ucmVwbGFjZSgvXFwrL2csXCIgXCIpLGY9W1wibjRcIl07aWYoMjw9ZC5sZW5ndGgpe3ZhciBnO3ZhciBtPWRbMV07Zz1bXTtpZihtKWZvcih2YXIgbT1tLnNwbGl0KFwiLFwiKSxoPW0ubGVuZ3RoLGw9MDtsPGg7bCsrKXt2YXIgaztrPW1bbF07aWYoay5tYXRjaCgvXltcXHctXSskLykpe3ZhciBuPUNhLmV4ZWMoay50b0xvd2VyQ2FzZSgpKTtpZihudWxsPT1uKWs9XCJcIjtlbHNle2s9blsyXTtrPW51bGw9PWt8fFwiXCI9PWs/XCJuXCI6QmFba107bj1uWzFdO2lmKG51bGw9PW58fFwiXCI9PW4pbj1cIjRcIjtlbHNlIHZhciByPUFhW25dLG49cj9yOmlzTmFOKG4pP1wiNFwiOm4uc3Vic3RyKDAsMSk7az1bayxuXS5qb2luKFwiXCIpfX1lbHNlIGs9XCJcIjtrJiZnLnB1c2goayl9MDxnLmxlbmd0aCYmKGY9Zyk7Mz09ZC5sZW5ndGgmJihkPWRbMl0sZz1bXSxkPWQ/ZC5zcGxpdChcIixcIik6XG5nLDA8ZC5sZW5ndGgmJihkPXphW2RbMF1dKSYmKGEuY1tlXT1kKSl9YS5jW2VdfHwoZD16YVtlXSkmJihhLmNbZV09ZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrPTEpYS5hLnB1c2gobmV3IEcoZSxmW2RdKSl9fTtmdW5jdGlvbiBFYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXZhciBGYT17QXJpbW86ITAsQ291c2luZTohMCxUaW5vczohMH07RWEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IEIsYz10aGlzLmMsZD1uZXcgdGEodGhpcy5hLmFwaSx0aGlzLmEudGV4dCksZT10aGlzLmEuZmFtaWxpZXM7dmEoZCxlKTt2YXIgZj1uZXcgeWEoZSk7RGEoZik7eihjLHdhKGQpLEMoYikpO0UoYixmdW5jdGlvbigpe2EoZi5hLGYuYyxGYSl9KX07ZnVuY3Rpb24gR2EoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn1HYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEuaWQsYz10aGlzLmMubztiP0EodGhpcy5jLCh0aGlzLmEuYXBpfHxcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0XCIpK1wiL1wiK2IrXCIuanNcIixmdW5jdGlvbihiKXtpZihiKWEoW10pO2Vsc2UgaWYoYy5UeXBla2l0JiZjLlR5cGVraXQuY29uZmlnJiZjLlR5cGVraXQuY29uZmlnLmZuKXtiPWMuVHlwZWtpdC5jb25maWcuZm47Zm9yKHZhciBlPVtdLGY9MDtmPGIubGVuZ3RoO2YrPTIpZm9yKHZhciBnPWJbZl0sbT1iW2YrMV0saD0wO2g8bS5sZW5ndGg7aCsrKWUucHVzaChuZXcgRyhnLG1baF0pKTt0cnl7Yy5UeXBla2l0LmxvYWQoe2V2ZW50czohMSxjbGFzc2VzOiExLGFzeW5jOiEwfSl9Y2F0Y2gobCl7fWEoZSl9fSwyRTMpOmEoW10pfTtmdW5jdGlvbiBIYShhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYT1bXX1IYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmYuaWQsYz10aGlzLmMubyxkPXRoaXM7Yj8oYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9ffHwoYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fPXt9KSxjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX19bYl09ZnVuY3Rpb24oYixjKXtmb3IodmFyIGc9MCxtPWMuZm9udHMubGVuZ3RoO2c8bTsrK2cpe3ZhciBoPWMuZm9udHNbZ107ZC5hLnB1c2gobmV3IEcoaC5uYW1lLGdhKFwiZm9udC13ZWlnaHQ6XCIraC53ZWlnaHQrXCI7Zm9udC1zdHlsZTpcIitoLnN0eWxlKSkpfWEoZC5hKX0sQSh0aGlzLmMsKHRoaXMuZi5hcGl8fFwiaHR0cHM6Ly9mLmZvbnRkZWNrLmNvbS9zL2Nzcy9qcy9cIikrZWEodGhpcy5jKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7YiYmYShbXSl9KSk6YShbXSl9O3ZhciBZPW5ldyBvYSh3aW5kb3cpO1kuYS5jLmN1c3RvbT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgc2EoYixhKX07WS5hLmMuZm9udGRlY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEhhKGIsYSl9O1kuYS5jLm1vbm90eXBlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyByYShiLGEpfTtZLmEuYy50eXBla2l0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBHYShiLGEpfTtZLmEuYy5nb29nbGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEVhKGIsYSl9O3ZhciBaPXtsb2FkOnAoWS5sb2FkLFkpfTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBafSk6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPVo6KHdpbmRvdy5XZWJGb250PVosd2luZG93LldlYkZvbnRDb25maWcmJlkubG9hZCh3aW5kb3cuV2ViRm9udENvbmZpZykpO30oKSk7XG4iLCIvKiEgc2tyb2xsciAwLjYuMjYgKDIwMTQtMDYtMDgpIHwgQWxleGFuZGVyIFByaW56aG9ybiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Qcmluemhvcm4vc2tyb2xsciB8IEZyZWUgdG8gdXNlIHVuZGVyIHRlcm1zIG9mIE1JVCBsaWNlbnNlICovXG4oZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4ocil7aWYobz10LmRvY3VtZW50RWxlbWVudCxhPXQuYm9keSxLKCksaXQ9dGhpcyxyPXJ8fHt9LHV0PXIuY29uc3RhbnRzfHx7fSxyLmVhc2luZylmb3IodmFyIG4gaW4gci5lYXNpbmcpVVtuXT1yLmVhc2luZ1tuXTt5dD1yLmVkZ2VTdHJhdGVneXx8XCJzZXRcIixjdD17YmVmb3JlcmVuZGVyOnIuYmVmb3JlcmVuZGVyLHJlbmRlcjpyLnJlbmRlcixrZXlmcmFtZTpyLmtleWZyYW1lfSxmdD1yLmZvcmNlSGVpZ2h0IT09ITEsZnQmJihWdD1yLnNjYWxlfHwxKSxtdD1yLm1vYmlsZURlY2VsZXJhdGlvbnx8eCxkdD1yLnNtb290aFNjcm9sbGluZyE9PSExLGd0PXIuc21vb3RoU2Nyb2xsaW5nRHVyYXRpb258fEUsdnQ9e3RhcmdldFRvcDppdC5nZXRTY3JvbGxUb3AoKX0sR3Q9KHIubW9iaWxlQ2hlY2t8fGZ1bmN0aW9uKCl7cmV0dXJuL0FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHxlLm9wZXJhKX0pKCksR3Q/KHN0PXQuZ2V0RWxlbWVudEJ5SWQoXCJza3JvbGxyLWJvZHlcIiksc3QmJmF0KCksWCgpLER0KG8sW3ksU10sW1RdKSk6RHQobyxbeSxiXSxbVF0pLGl0LnJlZnJlc2goKSxTdChlLFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgZT1vLmNsaWVudFdpZHRoLHQ9by5jbGllbnRIZWlnaHQ7KHQhPT0kdHx8ZSE9PU10KSYmKCR0PXQsTXQ9ZSxfdD0hMCl9KTt2YXIgaT1ZKCk7cmV0dXJuIGZ1bmN0aW9uIGwoKXtaKCksYnQ9aShsKX0oKSxpdH12YXIgbyxhLGk9e2dldDpmdW5jdGlvbigpe3JldHVybiBpdH0saW5pdDpmdW5jdGlvbihlKXtyZXR1cm4gaXR8fG5ldyBuKGUpfSxWRVJTSU9OOlwiMC42LjI2XCJ9LGw9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxzPWUuTWF0aCxjPWUuZ2V0Q29tcHV0ZWRTdHlsZSxmPVwidG91Y2hzdGFydFwiLHU9XCJ0b3VjaG1vdmVcIixtPVwidG91Y2hjYW5jZWxcIixwPVwidG91Y2hlbmRcIixkPVwic2tyb2xsYWJsZVwiLGc9ZCtcIi1iZWZvcmVcIix2PWQrXCItYmV0d2VlblwiLGg9ZCtcIi1hZnRlclwiLHk9XCJza3JvbGxyXCIsVD1cIm5vLVwiK3ksYj15K1wiLWRlc2t0b3BcIixTPXkrXCItbW9iaWxlXCIsaz1cImxpbmVhclwiLHc9MWUzLHg9LjAwNCxFPTIwMCxBPVwic3RhcnRcIixGPVwiZW5kXCIsQz1cImNlbnRlclwiLEQ9XCJib3R0b21cIixIPVwiX19fc2tyb2xsYWJsZV9pZFwiLEk9L14oPzppbnB1dHx0ZXh0YXJlYXxidXR0b258c2VsZWN0KSQvaSxQPS9eXFxzK3xcXHMrJC9nLE49L15kYXRhKD86LShfXFx3KykpPyg/Oi0/KC0/XFxkKlxcLj9cXGQrcD8pKT8oPzotPyhzdGFydHxlbmR8dG9wfGNlbnRlcnxib3R0b20pKT8oPzotPyh0b3B8Y2VudGVyfGJvdHRvbSkpPyQvLE89L1xccyooQD9bXFx3XFwtXFxbXFxdXSspXFxzKjpcXHMqKC4rPylcXHMqKD86O3wkKS9naSxWPS9eKEA/W2EtelxcLV0rKVxcWyhcXHcrKVxcXSQvLHo9Ly0oW2EtejAtOV9dKS9nLHE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfSxMPS9bXFwtK10/W1xcZF0qXFwuP1tcXGRdKy9nLE09L1xce1xcP1xcfS9nLCQ9L3JnYmE/XFwoXFxzKi0/XFxkK1xccyosXFxzKi0/XFxkK1xccyosXFxzKi0/XFxkKy9nLF89L1thLXpcXC1dKy1ncmFkaWVudC9nLEI9XCJcIixHPVwiXCIsSz1mdW5jdGlvbigpe3ZhciBlPS9eKD86T3xNb3p8d2Via2l0fG1zKXwoPzotKD86b3xtb3p8d2Via2l0fG1zKS0pLztpZihjKXt2YXIgdD1jKGEsbnVsbCk7Zm9yKHZhciBuIGluIHQpaWYoQj1uLm1hdGNoKGUpfHwrbj09biYmdFtuXS5tYXRjaChlKSlicmVhaztpZighQilyZXR1cm4gQj1HPVwiXCIscjtCPUJbMF0sXCItXCI9PT1CLnNsaWNlKDAsMSk/KEc9QixCPXtcIi13ZWJraXQtXCI6XCJ3ZWJraXRcIixcIi1tb3otXCI6XCJNb3pcIixcIi1tcy1cIjpcIm1zXCIsXCItby1cIjpcIk9cIn1bQl0pOkc9XCItXCIrQi50b0xvd2VyQ2FzZSgpK1wiLVwifX0sWT1mdW5jdGlvbigpe3ZhciB0PWUucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxlW0IudG9Mb3dlckNhc2UoKStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSxyPVB0KCk7cmV0dXJuKEd0fHwhdCkmJih0PWZ1bmN0aW9uKHQpe3ZhciBuPVB0KCktcixvPXMubWF4KDAsMWUzLzYwLW4pO3JldHVybiBlLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyPVB0KCksdCgpfSxvKX0pLHR9LFI9ZnVuY3Rpb24oKXt2YXIgdD1lLmNhbmNlbEFuaW1hdGlvbkZyYW1lfHxlW0IudG9Mb3dlckNhc2UoKStcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdO3JldHVybihHdHx8IXQpJiYodD1mdW5jdGlvbih0KXtyZXR1cm4gZS5jbGVhclRpbWVvdXQodCl9KSx0fSxVPXtiZWdpbjpmdW5jdGlvbigpe3JldHVybiAwfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gMX0sbGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxxdWFkcmF0aWM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUqZX0sY3ViaWM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUqZSplfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4tcy5jb3MoZSpzLlBJKS8yKy41fSxzcXJ0OmZ1bmN0aW9uKGUpe3JldHVybiBzLnNxcnQoZSl9LG91dEN1YmljOmZ1bmN0aW9uKGUpe3JldHVybiBzLnBvdyhlLTEsMykrMX0sYm91bmNlOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKC41MDgzPj1lKXQ9MztlbHNlIGlmKC44NDg5Pj1lKXQ9OTtlbHNlIGlmKC45NjIwOD49ZSl0PTI3O2Vsc2V7aWYoISguOTk5ODE+PWUpKXJldHVybiAxO3Q9OTF9cmV0dXJuIDEtcy5hYnMoMypzLmNvcygxLjAyOCplKnQpL3QpfX07bi5wcm90b3R5cGUucmVmcmVzaD1mdW5jdGlvbihlKXt2YXIgbixvLGE9ITE7Zm9yKGU9PT1yPyhhPSEwLGx0PVtdLEJ0PTAsZT10LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSk6ZS5sZW5ndGg9PT1yJiYoZT1bZV0pLG49MCxvPWUubGVuZ3RoO28+bjtuKyspe3ZhciBpPWVbbl0sbD1pLHM9W10sYz1kdCxmPXl0LHU9ITE7aWYoYSYmSCBpbiBpJiZkZWxldGUgaVtIXSxpLmF0dHJpYnV0ZXMpe2Zvcih2YXIgbT0wLHA9aS5hdHRyaWJ1dGVzLmxlbmd0aDtwPm07bSsrKXt2YXIgZz1pLmF0dHJpYnV0ZXNbbV07aWYoXCJkYXRhLWFuY2hvci10YXJnZXRcIiE9PWcubmFtZSlpZihcImRhdGEtc21vb3RoLXNjcm9sbGluZ1wiIT09Zy5uYW1lKWlmKFwiZGF0YS1lZGdlLXN0cmF0ZWd5XCIhPT1nLm5hbWUpaWYoXCJkYXRhLWVtaXQtZXZlbnRzXCIhPT1nLm5hbWUpe3ZhciB2PWcubmFtZS5tYXRjaChOKTtpZihudWxsIT09dil7dmFyIGg9e3Byb3BzOmcudmFsdWUsZWxlbWVudDppLGV2ZW50VHlwZTpnLm5hbWUucmVwbGFjZSh6LHEpfTtzLnB1c2goaCk7dmFyIHk9dlsxXTt5JiYoaC5jb25zdGFudD15LnN1YnN0cigxKSk7dmFyIFQ9dlsyXTsvcCQvLnRlc3QoVCk/KGguaXNQZXJjZW50YWdlPSEwLGgub2Zmc2V0PSgwfFQuc2xpY2UoMCwtMSkpLzEwMCk6aC5vZmZzZXQ9MHxUO3ZhciBiPXZbM10sUz12WzRdfHxiO2ImJmIhPT1BJiZiIT09Rj8oaC5tb2RlPVwicmVsYXRpdmVcIixoLmFuY2hvcnM9W2IsU10pOihoLm1vZGU9XCJhYnNvbHV0ZVwiLGI9PT1GP2guaXNFbmQ9ITA6aC5pc1BlcmNlbnRhZ2V8fChoLm9mZnNldD1oLm9mZnNldCpWdCkpfX1lbHNlIHU9ITA7ZWxzZSBmPWcudmFsdWU7ZWxzZSBjPVwib2ZmXCIhPT1nLnZhbHVlO2Vsc2UgaWYobD10LnF1ZXJ5U2VsZWN0b3IoZy52YWx1ZSksbnVsbD09PWwpdGhyb3cnVW5hYmxlIHRvIGZpbmQgYW5jaG9yIHRhcmdldCBcIicrZy52YWx1ZSsnXCInfWlmKHMubGVuZ3RoKXt2YXIgayx3LHg7IWEmJkggaW4gaT8oeD1pW0hdLGs9bHRbeF0uc3R5bGVBdHRyLHc9bHRbeF0uY2xhc3NBdHRyKTooeD1pW0hdPUJ0Kyssaz1pLnN0eWxlLmNzc1RleHQsdz1DdChpKSksbHRbeF09e2VsZW1lbnQ6aSxzdHlsZUF0dHI6ayxjbGFzc0F0dHI6dyxhbmNob3JUYXJnZXQ6bCxrZXlGcmFtZXM6cyxzbW9vdGhTY3JvbGxpbmc6YyxlZGdlU3RyYXRlZ3k6ZixlbWl0RXZlbnRzOnUsbGFzdEZyYW1lSW5kZXg6LTF9LER0KGksW2RdLFtdKX19fWZvcihFdCgpLG49MCxvPWUubGVuZ3RoO28+bjtuKyspe3ZhciBFPWx0W2Vbbl1bSF1dO0UhPT1yJiYoSihFKSxldChFKSl9cmV0dXJuIGl0fSxuLnByb3RvdHlwZS5yZWxhdGl2ZVRvQWJzb2x1dGU9ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPW8uY2xpZW50SGVpZ2h0LGE9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxpPWEudG9wLGw9YS5ib3R0b20tYS50b3A7cmV0dXJuIHQ9PT1EP2ktPW46dD09PUMmJihpLT1uLzIpLHI9PT1EP2krPWw6cj09PUMmJihpKz1sLzIpLGkrPWl0LmdldFNjcm9sbFRvcCgpLDB8aSsuNX0sbi5wcm90b3R5cGUuYW5pbWF0ZVRvPWZ1bmN0aW9uKGUsdCl7dD10fHx7fTt2YXIgbj1QdCgpLG89aXQuZ2V0U2Nyb2xsVG9wKCk7cmV0dXJuIHB0PXtzdGFydFRvcDpvLHRvcERpZmY6ZS1vLHRhcmdldFRvcDplLGR1cmF0aW9uOnQuZHVyYXRpb258fHcsc3RhcnRUaW1lOm4sZW5kVGltZTpuKyh0LmR1cmF0aW9ufHx3KSxlYXNpbmc6VVt0LmVhc2luZ3x8a10sZG9uZTp0LmRvbmV9LHB0LnRvcERpZmZ8fChwdC5kb25lJiZwdC5kb25lLmNhbGwoaXQsITEpLHB0PXIpLGl0fSxuLnByb3RvdHlwZS5zdG9wQW5pbWF0ZVRvPWZ1bmN0aW9uKCl7cHQmJnB0LmRvbmUmJnB0LmRvbmUuY2FsbChpdCwhMCkscHQ9cn0sbi5wcm90b3R5cGUuaXNBbmltYXRpbmdUbz1mdW5jdGlvbigpe3JldHVybiEhcHR9LG4ucHJvdG90eXBlLmlzTW9iaWxlPWZ1bmN0aW9uKCl7cmV0dXJuIEd0fSxuLnByb3RvdHlwZS5zZXRTY3JvbGxUb3A9ZnVuY3Rpb24odCxyKXtyZXR1cm4gaHQ9cj09PSEwLEd0P0t0PXMubWluKHMubWF4KHQsMCksT3QpOmUuc2Nyb2xsVG8oMCx0KSxpdH0sbi5wcm90b3R5cGUuZ2V0U2Nyb2xsVG9wPWZ1bmN0aW9uKCl7cmV0dXJuIEd0P0t0OmUucGFnZVlPZmZzZXR8fG8uc2Nyb2xsVG9wfHxhLnNjcm9sbFRvcHx8MH0sbi5wcm90b3R5cGUuZ2V0TWF4U2Nyb2xsVG9wPWZ1bmN0aW9uKCl7cmV0dXJuIE90fSxuLnByb3RvdHlwZS5vbj1mdW5jdGlvbihlLHQpe3JldHVybiBjdFtlXT10LGl0fSxuLnByb3RvdHlwZS5vZmY9ZnVuY3Rpb24oZSl7cmV0dXJuIGRlbGV0ZSBjdFtlXSxpdH0sbi5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3ZhciBlPVIoKTtlKGJ0KSx3dCgpLER0KG8sW1RdLFt5LGIsU10pO2Zvcih2YXIgdD0wLG49bHQubGVuZ3RoO24+dDt0Kyspb3QobHRbdF0uZWxlbWVudCk7by5zdHlsZS5vdmVyZmxvdz1hLnN0eWxlLm92ZXJmbG93PVwiXCIsby5zdHlsZS5oZWlnaHQ9YS5zdHlsZS5oZWlnaHQ9XCJcIixzdCYmaS5zZXRTdHlsZShzdCxcInRyYW5zZm9ybVwiLFwibm9uZVwiKSxpdD1yLHN0PXIsY3Q9cixmdD1yLE90PTAsVnQ9MSx1dD1yLG10PXIsenQ9XCJkb3duXCIscXQ9LTEsTXQ9MCwkdD0wLF90PSExLHB0PXIsZHQ9cixndD1yLHZ0PXIsaHQ9cixCdD0wLHl0PXIsR3Q9ITEsS3Q9MCxUdD1yfTt2YXIgWD1mdW5jdGlvbigpe3ZhciBuLGksbCxjLGQsZyx2LGgseSxULGIsUztTdChvLFtmLHUsbSxwXS5qb2luKFwiIFwiKSxmdW5jdGlvbihlKXt2YXIgbz1lLmNoYW5nZWRUb3VjaGVzWzBdO2ZvcihjPWUudGFyZ2V0OzM9PT1jLm5vZGVUeXBlOyljPWMucGFyZW50Tm9kZTtzd2l0Y2goZD1vLmNsaWVudFksZz1vLmNsaWVudFgsVD1lLnRpbWVTdGFtcCxJLnRlc3QoYy50YWdOYW1lKXx8ZS5wcmV2ZW50RGVmYXVsdCgpLGUudHlwZSl7Y2FzZSBmOm4mJm4uYmx1cigpLGl0LnN0b3BBbmltYXRlVG8oKSxuPWMsaT12PWQsbD1nLHk9VDticmVhaztjYXNlIHU6SS50ZXN0KGMudGFnTmFtZSkmJnQuYWN0aXZlRWxlbWVudCE9PWMmJmUucHJldmVudERlZmF1bHQoKSxoPWQtdixTPVQtYixpdC5zZXRTY3JvbGxUb3AoS3QtaCwhMCksdj1kLGI9VDticmVhaztkZWZhdWx0OmNhc2UgbTpjYXNlIHA6dmFyIGE9aS1kLGs9bC1nLHc9ayprK2EqYTtpZig0OT53KXtpZighSS50ZXN0KG4udGFnTmFtZSkpe24uZm9jdXMoKTt2YXIgeD10LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7eC5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsZS52aWV3LDEsby5zY3JlZW5YLG8uc2NyZWVuWSxvLmNsaWVudFgsby5jbGllbnRZLGUuY3RybEtleSxlLmFsdEtleSxlLnNoaWZ0S2V5LGUubWV0YUtleSwwLG51bGwpLG4uZGlzcGF0Y2hFdmVudCh4KX1yZXR1cm59bj1yO3ZhciBFPWgvUztFPXMubWF4KHMubWluKEUsMyksLTMpO3ZhciBBPXMuYWJzKEUvbXQpLEY9RSpBKy41Km10KkEqQSxDPWl0LmdldFNjcm9sbFRvcCgpLUYsRD0wO0M+T3Q/KEQ9KE90LUMpL0YsQz1PdCk6MD5DJiYoRD0tQy9GLEM9MCksQSo9MS1ELGl0LmFuaW1hdGVUbygwfEMrLjUse2Vhc2luZzpcIm91dEN1YmljXCIsZHVyYXRpb246QX0pfX0pLGUuc2Nyb2xsVG8oMCwwKSxvLnN0eWxlLm92ZXJmbG93PWEuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIn0saj1mdW5jdGlvbigpe3ZhciBlLHQscixuLGEsaSxsLGMsZix1LG0scD1vLmNsaWVudEhlaWdodCxkPUF0KCk7Zm9yKGM9MCxmPWx0Lmxlbmd0aDtmPmM7YysrKWZvcihlPWx0W2NdLHQ9ZS5lbGVtZW50LHI9ZS5hbmNob3JUYXJnZXQsbj1lLmtleUZyYW1lcyxhPTAsaT1uLmxlbmd0aDtpPmE7YSsrKWw9blthXSx1PWwub2Zmc2V0LG09ZFtsLmNvbnN0YW50XXx8MCxsLmZyYW1lPXUsbC5pc1BlcmNlbnRhZ2UmJih1Kj1wLGwuZnJhbWU9dSksXCJyZWxhdGl2ZVwiPT09bC5tb2RlJiYob3QodCksbC5mcmFtZT1pdC5yZWxhdGl2ZVRvQWJzb2x1dGUocixsLmFuY2hvcnNbMF0sbC5hbmNob3JzWzFdKS11LG90KHQsITApKSxsLmZyYW1lKz1tLGZ0JiYhbC5pc0VuZCYmbC5mcmFtZT5PdCYmKE90PWwuZnJhbWUpO2ZvcihPdD1zLm1heChPdCxGdCgpKSxjPTAsZj1sdC5sZW5ndGg7Zj5jO2MrKyl7Zm9yKGU9bHRbY10sbj1lLmtleUZyYW1lcyxhPTAsaT1uLmxlbmd0aDtpPmE7YSsrKWw9blthXSxtPWRbbC5jb25zdGFudF18fDAsbC5pc0VuZCYmKGwuZnJhbWU9T3QtbC5vZmZzZXQrbSk7ZS5rZXlGcmFtZXMuc29ydChOdCl9fSxXPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByPTAsbj1sdC5sZW5ndGg7bj5yO3IrKyl7dmFyIG8sYSxzPWx0W3JdLGM9cy5lbGVtZW50LGY9cy5zbW9vdGhTY3JvbGxpbmc/ZTp0LHU9cy5rZXlGcmFtZXMsbT11Lmxlbmd0aCxwPXVbMF0seT11W3UubGVuZ3RoLTFdLFQ9cC5mcmFtZT5mLGI9Zj55LmZyYW1lLFM9VD9wOnksaz1zLmVtaXRFdmVudHMsdz1zLmxhc3RGcmFtZUluZGV4O2lmKFR8fGIpe2lmKFQmJi0xPT09cy5lZGdlfHxiJiYxPT09cy5lZGdlKWNvbnRpbnVlO3N3aXRjaChUPyhEdChjLFtnXSxbaCx2XSksayYmdz4tMSYmKHh0KGMscC5ldmVudFR5cGUsenQpLHMubGFzdEZyYW1lSW5kZXg9LTEpKTooRHQoYyxbaF0sW2csdl0pLGsmJm0+dyYmKHh0KGMseS5ldmVudFR5cGUsenQpLHMubGFzdEZyYW1lSW5kZXg9bSkpLHMuZWRnZT1UPy0xOjEscy5lZGdlU3RyYXRlZ3kpe2Nhc2VcInJlc2V0XCI6b3QoYyk7Y29udGludWU7Y2FzZVwiZWFzZVwiOmY9Uy5mcmFtZTticmVhaztkZWZhdWx0OmNhc2VcInNldFwiOnZhciB4PVMucHJvcHM7Zm9yKG8gaW4geClsLmNhbGwoeCxvKSYmKGE9bnQoeFtvXS52YWx1ZSksMD09PW8uaW5kZXhPZihcIkBcIik/Yy5zZXRBdHRyaWJ1dGUoby5zdWJzdHIoMSksYSk6aS5zZXRTdHlsZShjLG8sYSkpO2NvbnRpbnVlfX1lbHNlIDAhPT1zLmVkZ2UmJihEdChjLFtkLHZdLFtnLGhdKSxzLmVkZ2U9MCk7Zm9yKHZhciBFPTA7bS0xPkU7RSsrKWlmKGY+PXVbRV0uZnJhbWUmJnVbRSsxXS5mcmFtZT49Zil7dmFyIEE9dVtFXSxGPXVbRSsxXTtmb3IobyBpbiBBLnByb3BzKWlmKGwuY2FsbChBLnByb3BzLG8pKXt2YXIgQz0oZi1BLmZyYW1lKS8oRi5mcmFtZS1BLmZyYW1lKTtDPUEucHJvcHNbb10uZWFzaW5nKEMpLGE9cnQoQS5wcm9wc1tvXS52YWx1ZSxGLnByb3BzW29dLnZhbHVlLEMpLGE9bnQoYSksMD09PW8uaW5kZXhPZihcIkBcIik/Yy5zZXRBdHRyaWJ1dGUoby5zdWJzdHIoMSksYSk6aS5zZXRTdHlsZShjLG8sYSl9ayYmdyE9PUUmJihcImRvd25cIj09PXp0P3h0KGMsQS5ldmVudFR5cGUsenQpOnh0KGMsRi5ldmVudFR5cGUsenQpLHMubGFzdEZyYW1lSW5kZXg9RSk7YnJlYWt9fX0sWj1mdW5jdGlvbigpe190JiYoX3Q9ITEsRXQoKSk7dmFyIGUsdCxuPWl0LmdldFNjcm9sbFRvcCgpLG89UHQoKTtpZihwdClvPj1wdC5lbmRUaW1lPyhuPXB0LnRhcmdldFRvcCxlPXB0LmRvbmUscHQ9cik6KHQ9cHQuZWFzaW5nKChvLXB0LnN0YXJ0VGltZSkvcHQuZHVyYXRpb24pLG49MHxwdC5zdGFydFRvcCt0KnB0LnRvcERpZmYpLGl0LnNldFNjcm9sbFRvcChuLCEwKTtlbHNlIGlmKCFodCl7dmFyIGE9dnQudGFyZ2V0VG9wLW47YSYmKHZ0PXtzdGFydFRvcDpxdCx0b3BEaWZmOm4tcXQsdGFyZ2V0VG9wOm4sc3RhcnRUaW1lOkx0LGVuZFRpbWU6THQrZ3R9KSx2dC5lbmRUaW1lPj1vJiYodD1VLnNxcnQoKG8tdnQuc3RhcnRUaW1lKS9ndCksbj0wfHZ0LnN0YXJ0VG9wK3QqdnQudG9wRGlmZil9aWYoR3QmJnN0JiZpLnNldFN0eWxlKHN0LFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoMCwgXCIrLUt0K1wicHgpIFwiK1R0KSxodHx8cXQhPT1uKXt6dD1uPnF0P1wiZG93blwiOnF0Pm4/XCJ1cFwiOnp0LGh0PSExO3ZhciBsPXtjdXJUb3A6bixsYXN0VG9wOnF0LG1heFRvcDpPdCxkaXJlY3Rpb246enR9LHM9Y3QuYmVmb3JlcmVuZGVyJiZjdC5iZWZvcmVyZW5kZXIuY2FsbChpdCxsKTtzIT09ITEmJihXKG4saXQuZ2V0U2Nyb2xsVG9wKCkpLHF0PW4sY3QucmVuZGVyJiZjdC5yZW5kZXIuY2FsbChpdCxsKSksZSYmZS5jYWxsKGl0LCExKX1MdD1vfSxKPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLHI9ZS5rZXlGcmFtZXMubGVuZ3RoO3I+dDt0Kyspe2Zvcih2YXIgbixvLGEsaSxsPWUua2V5RnJhbWVzW3RdLHM9e307bnVsbCE9PShpPU8uZXhlYyhsLnByb3BzKSk7KWE9aVsxXSxvPWlbMl0sbj1hLm1hdGNoKFYpLG51bGwhPT1uPyhhPW5bMV0sbj1uWzJdKTpuPWssbz1vLmluZGV4T2YoXCIhXCIpP1Eobyk6W28uc2xpY2UoMSldLHNbYV09e3ZhbHVlOm8sZWFzaW5nOlVbbl19O2wucHJvcHM9c319LFE9ZnVuY3Rpb24oZSl7dmFyIHQ9W107cmV0dXJuICQubGFzdEluZGV4PTAsZT1lLnJlcGxhY2UoJCxmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKEwsZnVuY3Rpb24oZSl7cmV0dXJuIDEwMCooZS8yNTUpK1wiJVwifSl9KSxHJiYoXy5sYXN0SW5kZXg9MCxlPWUucmVwbGFjZShfLGZ1bmN0aW9uKGUpe3JldHVybiBHK2V9KSksZT1lLnJlcGxhY2UoTCxmdW5jdGlvbihlKXtyZXR1cm4gdC5wdXNoKCtlKSxcIns/fVwifSksdC51bnNoaWZ0KGUpLHR9LGV0PWZ1bmN0aW9uKGUpe3ZhciB0LHIsbj17fTtmb3IodD0wLHI9ZS5rZXlGcmFtZXMubGVuZ3RoO3I+dDt0KyspdHQoZS5rZXlGcmFtZXNbdF0sbik7Zm9yKG49e30sdD1lLmtleUZyYW1lcy5sZW5ndGgtMTt0Pj0wO3QtLSl0dChlLmtleUZyYW1lc1t0XSxuKX0sdHQ9ZnVuY3Rpb24oZSx0KXt2YXIgcjtmb3IociBpbiB0KWwuY2FsbChlLnByb3BzLHIpfHwoZS5wcm9wc1tyXT10W3JdKTtmb3IociBpbiBlLnByb3BzKXRbcl09ZS5wcm9wc1tyXX0scnQ9ZnVuY3Rpb24oZSx0LHIpe3ZhciBuLG89ZS5sZW5ndGg7aWYobyE9PXQubGVuZ3RoKXRocm93XCJDYW4ndCBpbnRlcnBvbGF0ZSBiZXR3ZWVuIFxcXCJcIitlWzBdKydcIiBhbmQgXCInK3RbMF0rJ1wiJzt2YXIgYT1bZVswXV07Zm9yKG49MTtvPm47bisrKWFbbl09ZVtuXSsodFtuXS1lW25dKSpyO3JldHVybiBhfSxudD1mdW5jdGlvbihlKXt2YXIgdD0xO3JldHVybiBNLmxhc3RJbmRleD0wLGVbMF0ucmVwbGFjZShNLGZ1bmN0aW9uKCl7cmV0dXJuIGVbdCsrXX0pfSxvdD1mdW5jdGlvbihlLHQpe2U9W10uY29uY2F0KGUpO2Zvcih2YXIgcixuLG89MCxhPWUubGVuZ3RoO2E+bztvKyspbj1lW29dLHI9bHRbbltIXV0sciYmKHQ/KG4uc3R5bGUuY3NzVGV4dD1yLmRpcnR5U3R5bGVBdHRyLER0KG4sci5kaXJ0eUNsYXNzQXR0cikpOihyLmRpcnR5U3R5bGVBdHRyPW4uc3R5bGUuY3NzVGV4dCxyLmRpcnR5Q2xhc3NBdHRyPUN0KG4pLG4uc3R5bGUuY3NzVGV4dD1yLnN0eWxlQXR0cixEdChuLHIuY2xhc3NBdHRyKSkpfSxhdD1mdW5jdGlvbigpe1R0PVwidHJhbnNsYXRlWigwKVwiLGkuc2V0U3R5bGUoc3QsXCJ0cmFuc2Zvcm1cIixUdCk7dmFyIGU9YyhzdCksdD1lLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIikscj1lLmdldFByb3BlcnR5VmFsdWUoRytcInRyYW5zZm9ybVwiKSxuPXQmJlwibm9uZVwiIT09dHx8ciYmXCJub25lXCIhPT1yO258fChUdD1cIlwiKX07aS5zZXRTdHlsZT1mdW5jdGlvbihlLHQscil7dmFyIG49ZS5zdHlsZTtpZih0PXQucmVwbGFjZSh6LHEpLnJlcGxhY2UoXCItXCIsXCJcIiksXCJ6SW5kZXhcIj09PXQpblt0XT1pc05hTihyKT9yOlwiXCIrKDB8cik7ZWxzZSBpZihcImZsb2F0XCI9PT10KW4uc3R5bGVGbG9hdD1uLmNzc0Zsb2F0PXI7ZWxzZSB0cnl7QiYmKG5bQit0LnNsaWNlKDAsMSkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXT1yKSxuW3RdPXJ9Y2F0Y2gobyl7fX07dmFyIGl0LGx0LHN0LGN0LGZ0LHV0LG10LHB0LGR0LGd0LHZ0LGh0LHl0LFR0LGJ0LFN0PWkuYWRkRXZlbnQ9ZnVuY3Rpb24odCxyLG4pe3ZhciBvPWZ1bmN0aW9uKHQpe3JldHVybiB0PXR8fGUuZXZlbnQsdC50YXJnZXR8fCh0LnRhcmdldD10LnNyY0VsZW1lbnQpLHQucHJldmVudERlZmF1bHR8fCh0LnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7dC5yZXR1cm5WYWx1ZT0hMSx0LmRlZmF1bHRQcmV2ZW50ZWQ9ITB9KSxuLmNhbGwodGhpcyx0KX07cj1yLnNwbGl0KFwiIFwiKTtmb3IodmFyIGEsaT0wLGw9ci5sZW5ndGg7bD5pO2krKylhPXJbaV0sdC5hZGRFdmVudExpc3RlbmVyP3QuYWRkRXZlbnRMaXN0ZW5lcihhLG4sITEpOnQuYXR0YWNoRXZlbnQoXCJvblwiK2EsbyksWXQucHVzaCh7ZWxlbWVudDp0LG5hbWU6YSxsaXN0ZW5lcjpufSl9LGt0PWkucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LHIpe3Q9dC5zcGxpdChcIiBcIik7Zm9yKHZhciBuPTAsbz10Lmxlbmd0aDtvPm47bisrKWUucmVtb3ZlRXZlbnRMaXN0ZW5lcj9lLnJlbW92ZUV2ZW50TGlzdGVuZXIodFtuXSxyLCExKTplLmRldGFjaEV2ZW50KFwib25cIit0W25dLHIpfSx3dD1mdW5jdGlvbigpe2Zvcih2YXIgZSx0PTAscj1ZdC5sZW5ndGg7cj50O3QrKyllPVl0W3RdLGt0KGUuZWxlbWVudCxlLm5hbWUsZS5saXN0ZW5lcik7WXQ9W119LHh0PWZ1bmN0aW9uKGUsdCxyKXtjdC5rZXlmcmFtZSYmY3Qua2V5ZnJhbWUuY2FsbChpdCxlLHQscil9LEV0PWZ1bmN0aW9uKCl7dmFyIGU9aXQuZ2V0U2Nyb2xsVG9wKCk7T3Q9MCxmdCYmIUd0JiYoYS5zdHlsZS5oZWlnaHQ9XCJcIiksaigpLGZ0JiYhR3QmJihhLnN0eWxlLmhlaWdodD1PdCtvLmNsaWVudEhlaWdodCtcInB4XCIpLEd0P2l0LnNldFNjcm9sbFRvcChzLm1pbihpdC5nZXRTY3JvbGxUb3AoKSxPdCkpOml0LnNldFNjcm9sbFRvcChlLCEwKSxodD0hMH0sQXQ9ZnVuY3Rpb24oKXt2YXIgZSx0LHI9by5jbGllbnRIZWlnaHQsbj17fTtmb3IoZSBpbiB1dCl0PXV0W2VdLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dD10LmNhbGwoaXQpOi9wJC8udGVzdCh0KSYmKHQ9dC5zbGljZSgwLC0xKS8xMDAqciksbltlXT10O3JldHVybiBufSxGdD1mdW5jdGlvbigpe3ZhciBlPXN0JiZzdC5vZmZzZXRIZWlnaHR8fDAsdD1zLm1heChlLGEuc2Nyb2xsSGVpZ2h0LGEub2Zmc2V0SGVpZ2h0LG8uc2Nyb2xsSGVpZ2h0LG8ub2Zmc2V0SGVpZ2h0LG8uY2xpZW50SGVpZ2h0KTtyZXR1cm4gdC1vLmNsaWVudEhlaWdodH0sQ3Q9ZnVuY3Rpb24odCl7dmFyIHI9XCJjbGFzc05hbWVcIjtyZXR1cm4gZS5TVkdFbGVtZW50JiZ0IGluc3RhbmNlb2YgZS5TVkdFbGVtZW50JiYodD10W3JdLHI9XCJiYXNlVmFsXCIpLHRbcl19LER0PWZ1bmN0aW9uKHQsbixvKXt2YXIgYT1cImNsYXNzTmFtZVwiO2lmKGUuU1ZHRWxlbWVudCYmdCBpbnN0YW5jZW9mIGUuU1ZHRWxlbWVudCYmKHQ9dFthXSxhPVwiYmFzZVZhbFwiKSxvPT09cilyZXR1cm4gdFthXT1uLHI7Zm9yKHZhciBpPXRbYV0sbD0wLHM9by5sZW5ndGg7cz5sO2wrKylpPUl0KGkpLnJlcGxhY2UoSXQob1tsXSksXCIgXCIpO2k9SHQoaSk7Zm9yKHZhciBjPTAsZj1uLmxlbmd0aDtmPmM7YysrKS0xPT09SXQoaSkuaW5kZXhPZihJdChuW2NdKSkmJihpKz1cIiBcIituW2NdKTt0W2FdPUh0KGkpfSxIdD1mdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKFAsXCJcIil9LEl0PWZ1bmN0aW9uKGUpe3JldHVyblwiIFwiK2UrXCIgXCJ9LFB0PURhdGUubm93fHxmdW5jdGlvbigpe3JldHVybituZXcgRGF0ZX0sTnQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5mcmFtZS10LmZyYW1lfSxPdD0wLFZ0PTEsenQ9XCJkb3duXCIscXQ9LTEsTHQ9UHQoKSxNdD0wLCR0PTAsX3Q9ITEsQnQ9MCxHdD0hMSxLdD0wLFl0PVtdO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJza3JvbGxyXCIsZnVuY3Rpb24oKXtyZXR1cm4gaX0pOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWk6ZS5za3JvbGxyPWl9KSh3aW5kb3csZG9jdW1lbnQpOyIsIi8qISBza3JvbGxyLW1lbnUgMS4wLjMgKDIwMTUtMDYtMTkpIHwgQWxleGFuZGVyIFByaW56aG9ybiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Qcmluemhvcm4vc2tyb2xsci1tZW51IHwgRnJlZSB0byB1c2UgdW5kZXIgdGVybXMgb2YgTUlUIGxpY2Vuc2UgKi9cbihmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3ZhciBuPTUwMCxhPVwic3FydFwiLG89MSxyPVwiZGF0YS1tZW51LXRvcFwiLGk9XCJkYXRhLW1lbnUtb2Zmc2V0XCIsdT1cImRhdGEtbWVudS1kdXJhdGlvblwiLGM9XCJkYXRhLW1lbnUtaWdub3JlXCIsbD1lLnNrcm9sbHIscz1lLmhpc3RvcnksZj0hIXMucHVzaFN0YXRlLGg9ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT10JiZlP1wiQVwiPT09ZS50YWdOYW1lLnRvVXBwZXJDYXNlKCk/ZTpoKGUucGFyZW50Tm9kZSk6ITF9LHA9ZnVuY3Rpb24odCl7aWYoMT09PXQud2hpY2h8fDA9PT10LmJ1dHRvbil7dmFyIGU9aCh0LnRhcmdldCk7ZSYmbShlKSYmdC5wcmV2ZW50RGVmYXVsdCgpfX0sbT1mdW5jdGlvbihuLGEpe3ZhciBvO2lmKHkpe2lmKG4uaG9zdG5hbWUhPT1lLmxvY2F0aW9uLmhvc3RuYW1lKXJldHVybiExO2lmKG4ucGF0aG5hbWUhPT10LmxvY2F0aW9uLnBhdGhuYW1lKXJldHVybiExO289bi5oYXNofWVsc2Ugbz1uLmdldEF0dHJpYnV0ZShcImhyZWZcIik7aWYoIS9eIy8udGVzdChvKSlyZXR1cm4hMTtpZighYSYmbnVsbCE9PW4uZ2V0QXR0cmlidXRlKGMpKXJldHVybiExO3ZhciBsLGg7aWYoaD1UP1Qobik6bi5nZXRBdHRyaWJ1dGUociksbnVsbCE9PWgpbD0vcCQvLnRlc3QoaCk/aC5zbGljZSgwLC0xKS8xMDAqdC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0OitoKms7ZWxzZXt2YXIgcD10LmdldEVsZW1lbnRCeUlkKG8uc3Vic3RyKDEpKTtpZighcClyZXR1cm4hMTtsPXYucmVsYXRpdmVUb0Fic29sdXRlKHAsXCJ0b3BcIixcInRvcFwiKTt2YXIgbT1wLmdldEF0dHJpYnV0ZShpKTtudWxsIT09bSYmKGwrPSttKX1mJiZOJiYhYSYmcy5wdXNoU3RhdGUoe3RvcDpsfSxcIlwiLG8pO3ZhciBkPXBhcnNlSW50KG4uZ2V0QXR0cmlidXRlKHUpLDEwKSxxPUEodi5nZXRTY3JvbGxUb3AoKSxsKTtyZXR1cm4gaXNOYU4oZCl8fChxPWQpLEUmJkUobyxsKSxTJiYhYT92LmFuaW1hdGVUbyhsLHtkdXJhdGlvbjpxLGVhc2luZzpifSk6ZyhmdW5jdGlvbigpe3Yuc2V0U2Nyb2xsVG9wKGwpfSksITB9LGQ9ZnVuY3Rpb24oKXtpZihlLmxvY2F0aW9uLmhhc2gmJnQucXVlcnlTZWxlY3Rvcil7dmFyIG49dC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCInK2UubG9jYXRpb24uaGFzaCsnXCJdJyk7bnx8KG49dC5jcmVhdGVFbGVtZW50KFwiYVwiKSxuLmhyZWY9ZS5sb2NhdGlvbi5oYXNoKSxtKG4sITApfX0sZz1mdW5jdGlvbih0KXtlLnNldFRpbWVvdXQodCwxKX07bC5tZW51PXt9LGwubWVudS5pbml0PWZ1bmN0aW9uKHIsaSl7dj1yLGk9aXx8e30sYj1pLmVhc2luZ3x8YSxTPWkuYW5pbWF0ZSE9PSExLEE9aS5kdXJhdGlvbnx8bixUPWkuaGFuZGxlTGluayxrPWkuc2NhbGV8fG8seT1pLmNvbXBsZXhMaW5rcz09PSEwLEU9aS5jaGFuZ2UsTj1pLnVwZGF0ZVVybCE9PSExLFwibnVtYmVyXCI9PXR5cGVvZiBBJiYoQT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdH19KEEpKSxsLmFkZEV2ZW50KHQsXCJjbGlja1wiLHApLGYmJmwuYWRkRXZlbnQoZSxcInBvcHN0YXRlXCIsZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZXx8e30sbj1lLnRvcHx8MDtnKGZ1bmN0aW9uKCl7di5zZXRTY3JvbGxUb3Aobil9KX0sITEpLGQoKX0sbC5tZW51LmNsaWNrPWZ1bmN0aW9uKHQpe20odCl9O3ZhciB2LGIsQSxTLFQsayx5LEUsTjtnKGZ1bmN0aW9uKCl7ZS5sb2NhdGlvbi5oYXNoJiZlLnNjcm9sbFRvKDAsMCl9KX0pKGRvY3VtZW50LHdpbmRvdyk7IiwiLyoqXHJcbiAgKiAyMDE2LTIwMTcgKEMpIEFudG9uaW8gUmVkb25kbyAvIGFudG9uaW9yZWRvbmRvLmNvbVxyXG4gICpcclxuICAqIERPTVRvb2xzIGlzIGEgbmFuby1saWJyYXJ5IHdoaWNoIGNvbnRhaW5zIGEgYnVuY2ggb2YgZnVuY3Rpb25zIHRvIGRlYWwgd2l0aCBiYXNpY1xyXG4gICogbmVlZHMgYW5kIHByb2JsZW1zIGZhY2VkIG9uIGZyb250LWVuZCB3ZWIgYXBwbGljYXRpb25zLlxyXG4gICpcclxuICAqIEl0J3MgaW1wbGVtZW50ZWQgb24gRVM1IEphdmFTY3JpcHQgYXMgdGhlICdkJyBvYmplY3Qgb24gdGhlIGdsb2JhbCBuYW1lc3BhY2UuXHJcbiAgKlxyXG4gICogSXQgY29udGFpbnMgdGhlIGZvbGxvd2luZyBmdW5jdGlvbmFsaXR5OlxyXG4gICogLSBTb3J0ZXIgbmFtZSBmdW5jdGlvbnMgd3JhcHBpbmcgcXVlcmluZywgZXZlbnRzIGFuZCB0aW1lb3V0cyBmdW5jdGlvbnMuXHJcbiAgKiAtIEdlbmVyYXRpb24gb2YgcmFuZG9tIGludGVnZXJzLlxyXG4gICogLSBBZGRpbmcsIHJldHJpZXZpbmcgYW5kIHJlbW92aW5nIGNvb2tpZXMuXHJcbiAgKiAtIENoZWNraW5nIG9mIENTUyB0cmFuc2Zvcm1zIHN1cHBvcnQuXHJcbiAgKiAtIENoZWNraW5nIG9mIE9TLlxyXG4gICogLSBDYWxjdWxhdGlvbiBvZiBlbGVtZW50IGhlaWdodHMgYW5kIHBvc2l0aW9ucy5cclxuICAqIC0gTG9hZGluZyBvZiBpbWFnZXMgYW5kIGV4ZWN1dGluZyBhIGNhbGxiYWNrIG9uY2UgdGhleSdyZSBsb2FkZWQuXHJcbiAgKlxyXG4gICovXHJcblxyXG4oZnVuY3Rpb24oZCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cdFxyXG5cdGQuZ2kgPSBmdW5jdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHR9O1xyXG5cdFxyXG5cdGQuZ2MgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XHJcblx0fTtcclxuXHRcclxuXHRkLmdjYSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xyXG5cdFx0cmV0dXJuIFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpKTtcclxuXHR9O1xyXG5cdFxyXG5cdGQucXMgPSBmdW5jdGlvbihxdWVyeSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG5cdH07XHJcblx0XHJcblx0ZC5xc2EgPSBmdW5jdGlvbihxdWVyeSkge1xyXG5cdFx0cmV0dXJuIFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpO1xyXG5cdH07XHJcblx0XHJcblx0ZC5hZSA9IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XHJcblx0fTtcclxuXHRcclxuXHRkLnN0ID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRpbWUpIHtcclxuXHRcdHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgdGltZSk7XHJcblx0fTtcclxuXHRcclxuXHRkLnNpID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRpbWUpIHtcclxuXHRcdHJldHVybiB3aW5kb3cuc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIHRpbWUpO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0LyoqXHJcblx0ICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gYSByYW5nZS5cclxuXHQgICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBsb3dlciBsaW1pdCBvZiB0aGUgcmFuZ2UuIEl0IGRlZmF1bHRzIHRvIC01MC5cclxuXHQgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBoaWdoZXIgbGltaXQgb2YgdGhlIHJhbmdlLiBJdCBkZWZhdWx0cyB0byA1MC5cclxuXHQgICogQHJldHVybnMge251bWJlcn0gLSBUaGUgZ2VuZXJhdGVkIHJhbWRvbiBpbnRlZ2VyIHdpdGhpbiB0aGUgcmFuZ2UuXHJcblx0ICAqL1xyXG5cdGQuZ2V0UmFuZG9tSW50ID0gZnVuY3Rpb24obWluLCBtYXgpIHtcclxuXHRcdG1pbiA9IG1pbiB8fCAtNTA7XHJcblx0XHRtYXggPSBtYXggfHwgNTA7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8qKlxyXG5cdCAgKiBSZXR1cm5zIHRoZSBzdW0gb2YgY2xpZW50SGVpZ2h0cyBvZiBhbGwgdGhlIGVsZW1lbnRzIHNlbGVjdGVkIGJ5IHRoZSBDU1MgcXVlcnkgcHJvdmlkZWQuXHJcblx0ICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMgLSBDU1MgcXVlcnkuXHJcblx0ICAqIEByZXR1cm5zIHtudW1iZXJ9IC0gVGhlIHN1bSBvZiBhbGwgY2xpZW50SGVpZ2h0cy4gMCBpZiBubyBlbGVtZW50cyBzZWxlY3RlZC5cclxuXHQgICovXHJcblx0ZC5jYWxjQ2xpZW50SGVpZ2h0c1N1bSA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHR2YXIgdG90YWwgPSAwO1xyXG5cdFx0dmFyIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChkLnFzYShzZWxlY3RvcikpO1xyXG5cdFx0XHJcblx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0dG90YWwgKz0gaXRlbS5jbGllbnRIZWlnaHQ7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRvdGFsO1xyXG5cdH07XHJcblx0XHJcblx0LyoqXHJcblx0ICAqIFJldHVybnMgYW4gQXJyYXkgd2l0aCBET01SZWN0cyBvZiBhbGwgdGhlIGVsZW1lbnRzIHNlbGVjdGVkIGJ5IHRoZSBDU1MgcXVlcnkgcHJvdmlkZWQuXHJcblx0ICAqIFRoZSBib3JkZXItYm94IGNvb3JkaW5hdGVzJyBvcmlnaW4gaXMgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0LlxyXG5cdCAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzIC0gQ1NTIHF1ZXJ5LlxyXG5cdCAgKiBAcmV0dXJucyB7QXJyYXl9IC0gQW4gYXJyYXkgd2l0aCBET01SZWN0cy4gdW5kZWZpbmVkIGlmIG5vIGVsZW1lbnRzIHNlbGVjdGVkLlxyXG5cdCAgKi9cclxuXHRkLmNhbGNQb3NpdGlvbnNUb1ZpZXdwb3J0ID0gZnVuY3Rpb24oc2VsZWN0b3JzKSB7XHJcblx0XHR2YXIgcG9zaXRpb25zID0gW107XHJcblx0XHR2YXIgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGQucXNhKHNlbGVjdG9ycykpO1xyXG5cclxuXHRcdGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0cG9zaXRpb25zLnB1c2goaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gcG9zaXRpb25zO1xyXG5cdH07XHJcblx0XHJcblx0LyoqXHJcblx0ICAqIFJldHVybnMgYW4gT2JqZWN0IHdpdGggbGVmdCwgdG9wLCB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXMgb2YgdGhlIGNoaWxkXHJcblx0ICAqIGVsZW1lbnQgYm9yZGVyLWJveCBwb3NpdGlvbiByZWxhdGl2ZSB0byBhIHBhcmVudCBlbGVtZW50IHNwZWNpZmllZCBieSBwYXJlbnRTZWxlY3Rvci5cclxuXHQgICogVGhlIHBhcmVudCBhbmQgdGhlIGNoaWxkIGRvbid0IG5lZWQgdG8gYmUgZGlyZWN0bHkgbmVzdGVkIG9uIHRoZSBlbGVtZW50cycgaGllcmFyY2h5LlxyXG5cdCAgKiBJZiBhIENTUyBzZWxlY3RvciBzdHJpbmcgaXMgcHJvdmlkZWQgYW5kIGl0IHNlbGVjdHMgbW9yZSB0aGFuIG9uZSBlbGVtZW50XHJcblx0ICAqIG9ubHkgdGhlIGZpcnN0IGVsZW1lbnQgd2lsbCBiZSB1c2VkLlxyXG5cdCAgKiBAcGFyYW0ge3N0cmluZ3xIVE1MRWxlbWVudH0gcGFyZW50U2VsZWN0b3IgLSBDU1Mgc2VsZWN0b3Igc3RyaW5nIG9yIEhUTUxFbGVtZW50IGZvciBhIHJlZmVyZW5jZSBwYXJlbnQuXHJcblx0ICAqIEBwYXJhbSB7c3RyaW5nfEhUTUxFbGVtZW50fSBjaGlsZFNlbGVjdG9yIC0gQ1NTIHNlbGVjdG9yIHN0cmluZyBvciBIVE1MRWxlbWVudCBmb3IgdGhlIGNoaWxkLlxyXG5cdCAgKiBAcmV0dXJucyB7T2JqZWN0fSAtIEFuIE9iamVjdCB3aXRoIGxlZnQsIHRvcCwgd2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzLlxyXG5cdCovXHJcblx0ZC5jYWxjUmVsYXRpdmVQb3NpdGlvbiA9IGZ1bmN0aW9uKHBhcmVudCwgY2hpbGQpIHtcclxuXHRcdGlmICh0eXBlb2YgcGFyZW50ID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRwYXJlbnQgPSBkLnFzKHBhcmVudCk7XHJcblx0XHRpZiAodHlwZW9mIGNoaWxkID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRjaGlsZCA9IGQucXMoY2hpbGQpO1xyXG5cclxuXHRcdGlmICgoIXBhcmVudCB8fCAhY2hpbGQpXHJcblx0XHRcdFx0JiYgKCEocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICEoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJUaGUgcGFyZW50IG9yIGNoaWxkIHdlcmUgdW5kZWZpbmVkIG9yIHRoZXkgd2VyZW5cXCd0IEhUTUxFbGVtZW50c1wiKTsvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0dmFyIGNoaWxkUmVjdCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdHZhciBvZmZzZXQgPSB7XHJcblx0XHRcdGxlZnQ6IG51bGwsXHJcblx0XHRcdHRvcDogbnVsbCxcclxuXHRcdFx0d2lkdGg6IG51bGwsXHJcblx0XHRcdGhlaWdodDogbnVsbFxyXG5cdFx0fTtcclxuXHJcblx0XHRvZmZzZXQubGVmdCA9IGNoaWxkUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0O1xyXG5cdFx0b2Zmc2V0LnRvcCA9IGNoaWxkUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcDtcclxuXHRcdG9mZnNldC53aWR0aCA9IGNoaWxkLm9mZnNldFdpZHRoO1xyXG5cdFx0b2Zmc2V0LmhlaWdodCA9IGNoaWxkLm9mZnNldEhlaWdodDtcclxuXHJcblx0XHRyZXR1cm4gb2Zmc2V0O1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0dmFyIGVsZW1lbnRzVG9Mb2FkID0gW107XHJcblx0dmFyXHRjYWxsYmFja3MgPSBbXTtcclxuXHRcdFxyXG5cdHZhciBydW5DYWxsYmFja3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBhbGxMb2FkZWQgPSBlbGVtZW50c1RvTG9hZC5ldmVyeShmdW5jdGlvbihpKSB7XHJcblx0XHRcdHJldHVybiBpLmxvYWRlZDtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRpZiAoYWxsTG9hZGVkKSB7XHJcblx0XHRcdGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0XHRpKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0ZC5ub3RpZnlXaGVuTG9hZGVkID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcclxuXHRcdHZhciBlbGVtZW50VG9Mb2FkID0ge1xyXG5cdFx0XHRzZWxlY3Rvcjogc2VsZWN0b3IsXHJcblx0XHRcdGxvYWRlZDogZmFsc2UsXHJcblx0XHRcdGdldCBzZXRBc0xvYWRlZCgpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRlZCA9IHRydWU7XHJcblx0XHRcdFx0cnVuQ2FsbGJhY2tzKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gQ2hyb21lIDUzIHdvcmtzLiBGaXJlZm94IDQ5IGFuZCBFZGdlIDE0IGRvbid0XHJcblx0XHRcdC8vc2V0QXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvL1x0ZWxlbWVudFRvTG9hZC5sb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHQvL1x0cnVuQ2FsbGJhY2tzKCk7XHJcblx0XHRcdC8vXHRjb25zb2xlLmxvZyhcImJiYlwiKTtcclxuXHRcdFx0Ly99XHJcblx0XHRcdC8vIERvZXNuJ3Qgd29yayBvbiBicm93c2Vyc1xyXG5cdFx0XHQvL3NldEFzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly9cdHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0Ly9cdHJ1bkNhbGxiYWNrcygpO1xyXG5cdFx0XHQvL1x0Y29uc29sZS5sb2coXCJjY2NcIik7XHJcblx0XHRcdC8vfVxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0dmFyIGVsZW1lbnQgPSBkLnFzKHNlbGVjdG9yKTtcclxuXHRcdGlmIChlbGVtZW50KSB7XHJcblx0XHRcdGVsZW1lbnRzVG9Mb2FkLnB1c2goZWxlbWVudFRvTG9hZCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5Nzc4NzEvY2hlY2staWYtYW4taW1hZ2UtaXMtbG9hZGVkLW5vLWVycm9ycy1pbi1qYXZhc2NyaXB0XHJcblx0XHRcdGlmIChlbGVtZW50LmNvbXBsZXRlICYmIGVsZW1lbnQubmF0dXJhbEhlaWdodCAhPT0gMCkge1xyXG5cdFx0XHRcdGVsZW1lbnRUb0xvYWQuc2V0QXNMb2FkZWQ7XHJcblx0XHRcdH0gZWxzZSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGVsZW1lbnRUb0xvYWQuc2V0QXNMb2FkZWQpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gZWxlbWVudDtcclxuXHR9O1xyXG5cdFxyXG5cdGQucnVuV2hlbkFsbExvYWRlZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcblx0XHRydW5DYWxsYmFja3MoKTtcclxuXHR9O1xyXG5cdFxyXG5cdGQucmVzZXRFbGVtZW50c1RvTG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0ZWxlbWVudHNUb0xvYWQgPSBbXTtcclxuXHRcdGNhbGxiYWNrcyA9IFtdO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0ZC5jaGVja1RyYW5zZm9ybXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBcInRyYW5zZm9ybVwiO1xyXG5cdFx0ZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gXCJ3ZWJraXRUcmFuc2Zvcm1cIjtcclxuXHR9O1xyXG5cdFxyXG5cdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTEyMTk1ODIvaG93LXRvLWRldGVjdC1teS1icm93c2VyLXZlcnNpb24tYW5kLW9wZXJhdGluZy1zeXN0ZW0tdXNpbmctamF2YXNjcmlwdFxyXG5cdGQuZ2V0T1MgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBvcztcclxuXHRcdHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cdFx0XHJcblx0XHRpZiAodWEuaW5kZXhPZihcIldpblwiKSAhPSAtMSlcdFx0b3MgPSBcIldpbmRvd3NcIjtcclxuXHRcdGlmICh1YS5pbmRleE9mKFwiTWFjXCIpICE9IC0xKVx0XHRvcyA9IFwibWFjT1NcIjtcclxuXHRcdGlmICh1YS5pbmRleE9mKFwiTGludXhcIikgIT0gLTEpXHRcdG9zID0gXCJMaW51eFwiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJBbmRyb2lkXCIpICE9IC0xKVx0b3MgPSBcIkFuZHJvaWRcIjtcclxuXHRcdGlmICh1YS5pbmRleE9mKFwibGlrZSBNYWNcIikgIT0gLTEpXHRvcyA9IFwiaU9TXCI7XHJcblx0XHRcclxuXHRcdHJldHVybiBvcztcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8qKlxyXG5cdCogR2V0cyBhIGNvb2tpZSBieSBuYW1lLlxyXG5cdCogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBjb29raWUuXHJcblx0KiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSB2YWx1ZSBvZiB0aGUgY29va2llLiBudWxsIGlzIG5vIGNvb2tpZSB3YXMgZm91bmQgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHQqL1xyXG5cdGQuZ2V0Q29va2llID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdFx0dmFyIG5hbWVXaXRoRXF1YWwgPSBuYW1lICsgXCI9XCI7XHJcblx0XHR2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG5cdFx0XHJcblx0XHRmb3IgKHZhciBpPTA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgYyA9IGNhW2ldO1xyXG5cdFx0XHRcclxuXHRcdFx0d2hpbGUgKGMuY2hhckF0KDApID09IFwiIFwiKVxyXG5cdFx0XHRcdGMgPSBjLnN1YnN0cmluZygxLGMubGVuZ3RoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0aWYgKGMuaW5kZXhPZihuYW1lV2l0aEVxdWFsKSA9PT0gMClcclxuXHRcdFx0XHRyZXR1cm4gYy5zdWJzdHJpbmcobmFtZVdpdGhFcXVhbC5sZW5ndGgsIGMubGVuZ3RoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH07XHJcblx0XHJcblx0LyoqXHJcblx0KiBTZXRzIGEgY29va2llIGJ5IG5hbWUuXHJcblx0KiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5hbWUgb2YgdGhlIGNvb2tpZS5cclxuXHQqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFZhbHVlIGZvciB0aGUgY29va2llLlxyXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRheXMgLSBFeHBpcmF0aW9uIHRpbWUgaW4gZGF5cy5cclxuXHQqIEByZXR1cm5zIHt1bmRlZmluZWR9IC0gQWx3YXlzIHVuZGVmaW5lZFxyXG5cdCovXHJcblx0ZC5zZXRDb29raWUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgZGF5cykge1xyXG5cdFx0dmFyIGV4cGlyZXM7XHJcblx0XHRcclxuXHRcdGlmIChkYXlzKSB7XHJcblx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHJcblx0XHRcdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzKjI0KjYwKjYwKjEwMDApKTtcclxuXHRcdFx0ZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b0dNVFN0cmluZygpO1xyXG5cdFx0fSBlbHNlIGV4cGlyZXMgPSBcIlwiO1xyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQqIFJlbW92ZXMgYSBjb29raWUgYnkgbmFtZS5cclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gTmFtZSBvZiB0aGUgY29va2llIHRvIHJlbW92ZS5cclxuXHQqIEByZXR1cm5zIHt1bmRlZmluZWR9IC0gQWx3YXlzIHVuZGVmaW5lZC5cclxuXHQqL1xyXG5cdGQucmVtb3ZlQ29va2llID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdFx0dGhpcy5zZXRDb29raWUobmFtZSwgXCJcIiwgLTEpO1xyXG5cdH07XHJcblx0XHJcbn0od2luZG93LmQgPSB3aW5kb3cuZCB8fCB7fSkpO1xyXG4iLCJcclxuZnVuY3Rpb24gc2hvd1RvcEJhckVudHJpZXMoKSB7XHJcblx0dmFyIG1lbnVFbnRyaWVzID0gZC5xc2EoXCIudG9wLWJhcl9fdGFiLWNvbnRhaW5lcjpudGgtY2hpbGQobiszKVwiKTtcclxuXHRtZW51RW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcclxuXHRcdGUuY2xhc3NMaXN0LmFkZChcInRvcC1iYXJfX3RhYi1jb250YWluZXItLWluXCIpO1xyXG5cdFx0ZS5jbGFzc0xpc3QuYWRkKFwidG9wLWJhcl9fdGFiLWNvbnRhaW5lci0taW5cIiArIChpICsgMSkpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0TWFyZ2luKGJyZWFrcG9pbnRNb2JpbGUpIHtcclxuXHR2YXIgbWFyZ2luID0gMzAwO1xyXG5cdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IGJyZWFrcG9pbnRNb2JpbGUpXHJcblx0XHRtYXJnaW4gPSA4MDtcclxuXHRyZXR1cm4gbWFyZ2luO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Qm9keUhlaWdodChoZWlnaHQpIHtcclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1vdmVMaW5lKHBvc2l0aW9uKSB7XHJcblx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuXHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCAmJiBoYXNoKSB7XHJcblx0XHRzd2l0Y2ggKGhhc2guc2xpY2UoMSkpIHtcclxuXHRcdFx0Y2FzZSBcImludHJvXCI6XHRcdHBvc2l0aW9uID0gMDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgXCJ3aG8td2UtYXJlXCI6XHRwb3NpdGlvbiA9IDE7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiY29udGFjdFwiOlx0XHRwb3NpdGlvbiA9IDI7IGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0Olx0XHRcdHBvc2l0aW9uID0gMDsgYnJlYWs7XHJcblx0XHR9XHJcblx0fSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRwb3NpdGlvbiA9IDA7XHJcblx0fVxyXG5cdFxyXG5cdHZhciB0b3BCYXJQb3NpdGlvbnMgPSBkLmNhbGNQb3NpdGlvbnNUb1ZpZXdwb3J0KFwiLnRvcC1iYXJfX3RhYlwiKTtcclxuXHR2YXIgbGluZSA9IGQuZ2MoXCJ0b3AtYmFyX19saW5lXCIpO1xyXG5cdGxpbmUuc3R5bGUud2lkdGggPSB0b3BCYXJQb3NpdGlvbnNbcG9zaXRpb25dLndpZHRoICsgXCJweFwiO1xyXG5cdGxpbmUuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIHRvcEJhclBvc2l0aW9uc1twb3NpdGlvbl0ubGVmdCArIFwicHgsIDAsIDApXCI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcblx0dmFyIGJyZWFrcG9pbnRNb2JpbGUgPSA4MTA7XHJcblx0dmFyIG1hcmdpbiA9IHNldE1hcmdpbihicmVha3BvaW50TW9iaWxlKTtcclxuXHR2YXIgZ2FwID0gLW1hcmdpbjtcclxuXHRcclxuXHRkLnN0KGZ1bmN0aW9uKCkgeyBzaG93VG9wQmFyRW50cmllcygpOyB9LCAyNTAwKTtcclxuXHRzZXRCb2R5SGVpZ2h0KGQuY2FsY0NsaWVudEhlaWdodHNTdW0oXCJzZWN0aW9uLnNrcm9sbHItZGVja1wiKSArIG1hcmdpbio2KTtcclxuXHRtb3ZlTGluZSgpO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIFNldHMgdXAgU2tyb2xsZXJcclxuXHR2YXIgb2Zmc2V0RnVuY3Rpb25zID0ge1xyXG5cdFx0Z2V0IGQwKCkgeyByZXR1cm4gZC5naShcImludHJvXCIpLmNsaWVudEhlaWdodCArIG1hcmdpbjsgfSxcclxuXHRcdGdldCBkMGcoKSB7IHJldHVybiBnYXAgKyB0aGlzLmQwOyB9LFxyXG5cdFx0Z2V0IGQxKCkgeyByZXR1cm4gZC5naShcIndoby13ZS1hcmVcIikuY2xpZW50SGVpZ2h0ICsgbWFyZ2luICsgdGhpcy5kMDsgfSxcclxuXHRcdGdldCBkMWcoKSB7IHJldHVybiBnYXAgKyB0aGlzLmQxOyB9LFxyXG5cdFx0Z2V0IGQyKCkgeyByZXR1cm4gZC5naShcImNvbnRhY3RcIikuY2xpZW50SGVpZ2h0ICsgbWFyZ2luICsgdGhpcy5kMTsgfVxyXG5cdH07XHJcblx0XHRcclxuXHR2YXIgc2tyb2xsckluc3RhbmNlID0gc2tyb2xsci5pbml0KHtcclxuXHRcdHNtb290aFNjcm9sbGluZzogZmFsc2UsXHJcblx0XHRmb3JjZUhlaWdodDogZmFsc2UsXHJcblx0XHRjb25zdGFudHM6IG9mZnNldEZ1bmN0aW9ucyxcclxuXHRcdG1vYmlsZUNoZWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9LFxyXG5cdFx0a2V5ZnJhbWU6IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUsIGRpcmVjdGlvbikge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcImtleWZyYW1lOlwiKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cobmFtZSk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKG5hbWUuc2xpY2UoNikpO1xyXG5cdFx0XHR2YXIgZXh0cmEgPSAwO1xyXG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpXHJcblx0XHRcdFx0LS1leHRyYTtcclxuXHRcdFx0c3dpdGNoIChuYW1lLnNsaWNlKDYpKSB7XHJcblx0XHRcdFx0Y2FzZSBcIjBnXCI6IG1vdmVMaW5lKDEgKyBleHRyYSk7IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCIxZ1wiOiBtb3ZlTGluZSgyICsgZXh0cmEpOyBicmVhaztcclxuXHRcdFx0XHRjYXNlIFwiMmdcIjogbW92ZUxpbmUoMyArIGV4dHJhKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdC8vIFNldHMgdXAgU2tyb2xsZXIgTWVudVxyXG5cdHNrcm9sbHIubWVudS5pbml0KHNrcm9sbHJJbnN0YW5jZSwge1xyXG5cdFx0YW5pbWF0ZTogdHJ1ZSxcclxuXHRcdGVhc2luZzogXCJvdXRDdWJpY1wiLFxyXG5cdFx0ZHVyYXRpb246IDUwMCxcclxuXHRcdGhhbmRsZUxpbms6IGZ1bmN0aW9uKGxpbmspIHtcclxuXHRcdFx0dmFyIGV4dHJhID0gMTtcclxuXHRcdFx0dmFyIGxpbmtUZXh0ID0gbGluay5ocmVmLnNwbGl0KFwiI1wiKS5wb3AoKTtcclxuXHRcdFx0XHJcblx0XHRcdHRyeSB7IC8vIFRvIHByZXZlbnQgU1lOVEFYX0VSUiBleGNlcHRpb25cclxuXHRcdFx0XHRpZiAoZC5xcyhcIiNcIiArIGxpbmtUZXh0KSA9PT0gbnVsbClcclxuXHRcdFx0XHRcdHRocm93IEVycm9yO1xyXG5cdFx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0XHRkb2N1bWVudC5sb2NhdGlvbi5oYXNoID0gXCJcIjtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0c3dpdGNoIChsaW5rVGV4dCkge1xyXG5cdFx0XHRcdGNhc2UgXCJpbnRyb1wiOlx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHRjYXNlIFwid2hvLXdlLWFyZVwiOlx0cmV0dXJuIG9mZnNldEZ1bmN0aW9ucy5kMCArIGV4dHJhO1xyXG5cdFx0XHRcdGNhc2UgXCJjb250YWN0XCI6XHRcdHJldHVybiBvZmZzZXRGdW5jdGlvbnMuZDEgKyBleHRyYTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gQWRkcyBsb2dpYyBmb3IgJ3Njcm9sbCcgYW5kICdyZXNpemUnIGV2ZW50c1xyXG5cdHZhciBzY3JvbGxlZCA9IGZhbHNlLFxyXG5cdFx0ZGlzdGFuY2UgPSBvZmZzZXRGdW5jdGlvbnMuZDAvMy41LFxyXG5cdFx0aGVhZGVyID0gZC5nYyhcInRvcC1iYXJcIik7XHJcblx0XHJcblx0ZC5hZShcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBkaXN0YW5jZSAmJiAhc2Nyb2xsZWQpIHtcclxuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0b3AtYmFyLS1pblwiKTtcclxuXHRcdFx0c2Nyb2xsZWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCBkaXN0YW5jZSAmJiBzY3JvbGxlZCkge1xyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInRvcC1iYXItLWluXCIpO1xyXG5cdFx0XHRzY3JvbGxlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdGQuYWUoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRtYXJnaW4gPSBzZXRNYXJnaW4oYnJlYWtwb2ludE1vYmlsZSk7XHJcblx0XHRzZXRCb2R5SGVpZ2h0KGQuY2FsY0NsaWVudEhlaWdodHNTdW0oXCJzZWN0aW9uLnNrcm9sbHItZGVja1wiKSArIG1hcmdpbio2KTtcclxuXHRcdGQuc3QoZnVuY3Rpb24oKSB7IG1vdmVMaW5lKCk7IH0sIDUwMCk7XHJcblx0XHRkLmdjKFwidG9wLWJhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidG9wLWJhci0tb3BlblwiKTtcclxuXHRcdGQuZ2MoXCJ0b3AtYmFyX190aHJlZS1iYXJzLWNsb3NlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b3AtYmFyX190aHJlZS1iYXJzLWNsb3NlLS1pblwiKTtcclxuXHR9KTtcclxuXHRcclxuXHRkLmFlKFwibG9hZFwiLCBmdW5jdGlvbigpIHsgLy8gVGhlcmUgYXJlIGltYWdlcyB0aGF0IGhhdmVuJ3QgaGVpZ2h0IHNwZWNpZmllZCBhbmQgaXQncyBvbmx5IGtub3duIG9uY2UgdGhlIGltYWdlIGlzIGxvYWRlZC4gVGhleSBhZmZlY3QgdGhlIGhlaWdodCBvZiB0aGUgcGFnZS5cclxuXHRcdG1hcmdpbiA9IHNldE1hcmdpbihicmVha3BvaW50TW9iaWxlKTtcclxuXHRcdHNldEJvZHlIZWlnaHQoZC5jYWxjQ2xpZW50SGVpZ2h0c1N1bShcInNlY3Rpb24uc2tyb2xsci1kZWNrXCIpICsgbWFyZ2luKjIpO1xyXG5cdFx0ZC5zdChmdW5jdGlvbigpIHsgbW92ZUxpbmUoKTsgfSwgNTAwKTtcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBBZGFwdHMgdGhlIFVJIHRvIHJlbW92ZSBpbnRybyBhbmltYXRpb25zIGlmIHRoZSBVUkwgcG9pbnRzIHRvIGEgc2VjdGlvblxyXG5cdHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcblx0aWYgKChoYXNoICYmIGhhc2ggIT09IFwiI2ludHJvXCIpIHx8XHJcblx0XHRcdHdpbmRvdy5pbm5lcldpZHRoIDwgYnJlYWtwb2ludE1vYmlsZSkge1xyXG5cdFx0ZC5nYyhcInRvcC1iYXJcIikuY2xhc3NMaXN0LmFkZChcInRvcC1iYXItLWluXCIpO1xyXG5cdFx0ZC5nYyhcInRvcC1iYXJcIikuY2xhc3NMaXN0LmFkZChcInRvcC1iYXItLWluMlwiKTtcclxuXHRcdGQuc3QoZnVuY3Rpb24oKSB7IGQuZ2MoXCJ0b3AtYmFyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b3AtYmFyLS1pbjJcIik7IH0sIDEwMDApO1xyXG5cdFx0XHJcblx0XHRzaG93VG9wQmFyRW50cmllcygpO1xyXG5cdFx0XHJcblx0XHRkLnN0KGZ1bmN0aW9uKCkgeyBtb3ZlTGluZSgpOyB9LCA1MDApO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBTZXQgdXBzIHRoZSBuYXZpZ2F0aW9uIHRvcCBiYXIgZm9yIG1vYmlsZSBzY3JlZW5zXHJcblx0ZC5xc2EoXCIudG9wLWJhcl9fdGFiLCAudG9wLWJhcl9fdGhyZWUtYmFycywgLnRvcC1iYXJfX3RocmVlLWJhcnMtY2xvc2VcIikuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgYnJlYWtwb2ludE1vYmlsZSkge1xyXG5cdFx0XHRcdGQuZ2MoXCJ0b3AtYmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ0b3AtYmFyLS1vcGVuXCIpO1xyXG5cdFx0XHRcdGQuZ2MoXCJ0b3AtYmFyX190aHJlZS1iYXJzLWNsb3NlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ0b3AtYmFyX190aHJlZS1iYXJzLWNsb3NlLS1pblwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL3NlbmRpbmctaGl0c1xyXG5cdGQucXMoXCJhLnRvcC1iYXJfX3RhYltocmVmPScjaW50cm8nXVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwiVG9wIGJhciBsaW5rXCIsIFwiY2xpY2tcIiwgXCJpbnRyb1wiKTsgfSk7XHJcblx0ZC5xcyhcImEudG9wLWJhcl9fdGFiW2hyZWY9JyN3aG8td2UtYXJlJ11cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcIlRvcCBiYXIgbGlua1wiLCBcImNsaWNrXCIsIFwid2hvLXdlLWFyZVwiKTsgfSk7XHJcblx0ZC5xcyhcImEudG9wLWJhcl9fdGFiW2hyZWY9JyNjb250YWN0J11cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcIlRvcCBiYXIgbGlua1wiLCBcImNsaWNrXCIsIFwiY29udGFjdFwiKTsgfSk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0ZC5nYyhcImJvZHlcIikuY2xhc3NMaXN0LmFkZChcImJvZHktLWluXCIpO1xyXG59XHJcbiIsImQubm90aWZ5V2hlbkxvYWRlZChcIi5pbnRyb19faGVhZGVyXCIpO1xyXG5kLm5vdGlmeVdoZW5Mb2FkZWQoXCIuaW50cm9fX2xvZ29cIik7XHJcblxyXG5XZWJGb250LmxvYWQoe1xyXG5cdGdvb2dsZToge1xyXG5cdFx0ZmFtaWxpZXM6IFtcIlJvYm90byBTbGFiOjMwMCw3MDBcIiwgXCJTb3VyY2UgU2FucyBQcm86MzAwLDkwMFwiXVxyXG5cdH0sXHJcblx0YWN0aXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdGQucnVuV2hlbkFsbExvYWRlZChpbml0KTtcclxuXHR9LFxyXG5cdGluYWN0aXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHR9LFxyXG5cdGNsYXNzZXM6IGZhbHNlLFxyXG5cdHRpbWVvdXQ6IDgwMDBcclxufSk7XHJcbiJdfQ==
