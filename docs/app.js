/*! skrollr 0.6.26 (2014-06-08) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ft=r.forceHeight!==!1,ft&&(Vt=r.scale||1),mt=r.mobileDeceleration||x,dt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||E,vt={targetTop:it.getScrollTop()},Gt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Gt?(st=t.getElementById("skrollr-body"),st&&at(),X(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Mt)&&($t=t,Mt=e,_t=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.26"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",I=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^(@?[a-z\-]+)\[(\w+)\]$/,z=/-([a-z0-9_])/g,q=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,B="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(B=n.match(e)||+n==n&&t[n].match(e))break;if(!B)return B=G="",r;B=B[0],"-"===B.slice(0,1)?(G=B,B={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[B]):G="-"+B.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[B.toLowerCase()+"RequestAnimationFrame"],r=Pt();return(Gt||!t)&&(t=function(t){var n=Pt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Pt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[B.toLowerCase()+"CancelAnimationFrame"];return(Gt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=dt,f=yt,u=!1;if(a&&H in i&&delete i[H],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(N);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(z,q)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==A&&b!==F?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===F?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Vt))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&H in i?(x=i[H],k=lt[x].styleAttr,w=lt[x].classAttr):(x=i[H]=Bt++,k=i.style.cssText,w=Ct(i)),lt[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Pt(),o=it.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:U[t.easing||k],done:t.done},pt.topDiff||(pt.done&&pt.done.call(it,!1),pt=r),it},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(it,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.isMobile=function(){return Gt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,Gt?Kt=s.min(s.max(t,0),Ot):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return Gt?Kt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Ot},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),wt(),Dt(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Ot=0,Vt=1,ut=r,mt=r,zt="down",qt=-1,Mt=0,$t=0,_t=!1,pt=r,dt=r,gt=r,vt=r,ht=r,Bt=0,yt=r,Gt=!1,Kt=0,Tt=r};var X=function(){var n,i,l,c,d,g,v,h,y,T,b,S;St(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,I.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:I.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,it.setScrollTop(Kt-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!I.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/mt),F=E*A+.5*mt*A*A,C=it.getScrollTop()-F,D=0;C>Ot?(D=(Ot-C)/F,C=Ot):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=At();for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=m,ft&&!l.isEnd&&l.frame>Ot&&(Ot=l.frame);for(Ot=s.max(Ot,Ft()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Ot-l.offset+m);e.keyFrames.sort(Nt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(xt(c,p.eventType,zt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(xt(c,y.eventType,zt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=nt(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=rt(A.props[o].value,F.props[o].value,C),a=nt(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===zt?xt(c,A.eventType,zt):xt(c,F.eventType,zt),s.lastFrameIndex=E);break}}},Z=function(){_t&&(_t=!1,Et());var e,t,n=it.getScrollTop(),o=Pt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=vt.targetTop-n;a&&(vt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:Lt,endTime:Lt+gt}),vt.endTime>=o&&(t=U.sqrt((o-vt.startTime)/gt),n=0|vt.startTop+t*vt.topDiff)}if(Gt&&st&&i.setStyle(st,"transform","translate(0, "+-Kt+"px) "+Tt),ht||qt!==n){zt=n>qt?"down":qt>n?"up":zt,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Ot,direction:zt},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}Lt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=O.exec(l.props));)a=i[1],o=i[2],n=a.match(V),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(_.lastIndex=0,e=e.replace(_,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ct(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(z,q).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{B&&(n[B+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Yt.push({element:t,name:a,listener:n})},kt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=Yt.length;r>t;t++)e=Yt[t],kt(e.element,e.name,e.listener);Yt=[]},xt=function(e,t,r){ct.keyframe&&ct.keyframe.call(it,e,t,r)},Et=function(){var e=it.getScrollTop();Ot=0,ft&&!Gt&&(a.style.height=""),j(),ft&&!Gt&&(a.style.height=Ot+o.clientHeight+"px"),Gt?it.setScrollTop(s.min(it.getScrollTop(),Ot)):it.setScrollTop(e,!0),ht=!0},At=function(){var e,t,r=o.clientHeight,n={};for(e in ut)t=ut[e],"function"==typeof t?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ft=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Ct=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=It(i).replace(It(o[l])," ");i=Ht(i);for(var c=0,f=n.length;f>c;c++)-1===It(i).indexOf(It(n[c]))&&(i+=" "+n[c]);t[a]=Ht(i)},Ht=function(e){return e.replace(P,"")},It=function(e){return" "+e+" "},Pt=Date.now||function(){return+new Date},Nt=function(e,t){return e.frame-t.frame},Ot=0,Vt=1,zt="down",qt=-1,Lt=Pt(),Mt=0,$t=0,_t=!1,Bt=0,Gt=!1,Kt=0,Yt=[];"function"==typeof define&&define.amd?define("skrollr",function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i})(window,document);
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
			console.error("The parent or child were undefined or they weren't HTMLElements");// eslint-disable-line no-console
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
	
	
	
	
	
	var imagesToLoad = [];
	var	callbacks = [];
		
	var runCallbacks = function() {
		var areAllLoaded = imagesToLoad.every(function(image) {
			return image.loaded;
		});
		
		if (areAllLoaded) {
			callbacks.forEach(function(callback) {
				callback();
			});
		}
	};
	
	d.notifyWhenLoaded = function(selector) {
		var imageToLoad = {
			selector: selector,
			loaded: false,
			setAsLoaded: function() {
				imageToLoad.loaded = true;
				runCallbacks();
			}
		};
		
		var image = d.qs(selector);
		if (image) {
			imagesToLoad.push(imageToLoad);
			
			// http://stackoverflow.com/questions/1977871/check-if-an-element-is-loaded-no-errors-in-javascript
			if (image.complete && image.naturalHeight) {
				imageToLoad.setAsLoaded();
			} else image.addEventListener("load", imageToLoad.setAsLoaded);
		}
		
		return image;
	};
	
	d.runWhenAllLoaded = function(callback) {
		callbacks.push(callback);
		runCallbacks();
	};
	
	d.resetElementsToLoad = function() {
		imagesToLoad = [];
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

function setMargin(breakpointMobile) {
	var margin = 250;
	if (window.innerWidth < breakpointMobile)
		margin = 80;
	return margin;
}





function setBodyHeight(height) {
	document.body.style.height = height + "px";
}





function init() { // eslint-disable-line no-unused-vars
	var breakpointMobile = 810;
	var margin = setMargin(breakpointMobile);
	var gap = -margin;
	
	setBodyHeight(d.calcClientHeightsSum("section.skrollr-deck") + margin*3);
	
	
	
	
	// Sets up Skroller
	var offsetFunctions = {
		get d0() { return d.gi("intro").clientHeight + margin; },
		get d0g() { return gap + this.d0; },
		get d1() { return d.gi("presentation").clientHeight + margin + this.d0; },
		get d1g() { return gap + this.d1; },
		get d2() { return d.gi("whats-included").clientHeight + margin + this.d1; },
		get d2g() { return gap + this.d2; }
	};
	
	skrollr.init({
		smoothScrolling: false,
		forceHeight: false,
		constants: offsetFunctions,
		mobileCheck: function() { return false; },
		// keyframe: function(element, name, direction) {
		// 	// console.log("keyframe:");
		// 	// console.log(name);
		// 	// console.log(name.slice(6));
		// 	var extra = 0;
		// 	if (direction === "up")
		// 		--extra;
		// 	switch (name.slice(6)) {
		// 		case "0g": moveLine(1 + extra); break;
		// 		case "1g": moveLine(2 + extra); break;
		// 		case "2g": moveLine(3 + extra);
		// 	}
		// }
	});
	
	// Sets up Skroller Menu
	// skrollr.menu.init(skrollrInstance, {
	// 	animate: true,
	// 	easing: "outCubic",
	// 	duration: 500,
	// 	handleLink: function(link) {
	// 		var extra = 1;
	// 		var linkText = link.href.split("#").pop();
	//
	// 		try { // To prevent SYNTAX_ERR exception
	// 			if (d.qs("#" + linkText) === null)
	// 				throw Error;
	// 		} catch(e) {
	// 			document.location.hash = "";
	// 			return 0;
	// 		}
	//
	// 		switch (linkText) {
	// 			case "intro":		return 0;
	// 			case "who-we-are":	return offsetFunctions.d0 + extra;
	// 			case "contact":		return offsetFunctions.d1 + extra;
	// 		}
	//
	// 		return 0;
	// 	}
	// });
	
	d.ae("resize", function() {
		margin = setMargin(breakpointMobile);
		setBodyHeight(d.calcClientHeightsSum("section.skrollr-deck") + margin*3);
	});
	
	d.ae("load", function() { // There are images that haven't height specified and it's only known once the image is loaded. They affect the height of the page.
		margin = setMargin(breakpointMobile);
		setBodyHeight(d.calcClientHeightsSum("section.skrollr-deck") + margin*3);
		// d.st(function() { moveLine(); }, 500);
	});
	
	
	
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits
	// d.qs("a.top-bar__tab[href='#intro']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "intro"); });
	// d.qs("a.top-bar__tab[href='#who-we-are']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "who-we-are"); });
	// d.qs("a.top-bar__tab[href='#contact']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "contact"); });
	
	
	
	d.gc("body").classList.add("body--in");
}

d.notifyWhenLoaded(".intro__bga2");
d.notifyWhenLoaded(".intro__logo");
d.notifyWhenLoaded(".intro__subtext");
d.runWhenAllLoaded(init);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNrcm9sbHIubWluLmpzIiwiRE9NVG9vbHMuanMiLCJhZWdlZUxvbmRvbi5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgc2tyb2xsciAwLjYuMjYgKDIwMTQtMDYtMDgpIHwgQWxleGFuZGVyIFByaW56aG9ybiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Qcmluemhvcm4vc2tyb2xsciB8IEZyZWUgdG8gdXNlIHVuZGVyIHRlcm1zIG9mIE1JVCBsaWNlbnNlICovXG4oZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4ocil7aWYobz10LmRvY3VtZW50RWxlbWVudCxhPXQuYm9keSxLKCksaXQ9dGhpcyxyPXJ8fHt9LHV0PXIuY29uc3RhbnRzfHx7fSxyLmVhc2luZylmb3IodmFyIG4gaW4gci5lYXNpbmcpVVtuXT1yLmVhc2luZ1tuXTt5dD1yLmVkZ2VTdHJhdGVneXx8XCJzZXRcIixjdD17YmVmb3JlcmVuZGVyOnIuYmVmb3JlcmVuZGVyLHJlbmRlcjpyLnJlbmRlcixrZXlmcmFtZTpyLmtleWZyYW1lfSxmdD1yLmZvcmNlSGVpZ2h0IT09ITEsZnQmJihWdD1yLnNjYWxlfHwxKSxtdD1yLm1vYmlsZURlY2VsZXJhdGlvbnx8eCxkdD1yLnNtb290aFNjcm9sbGluZyE9PSExLGd0PXIuc21vb3RoU2Nyb2xsaW5nRHVyYXRpb258fEUsdnQ9e3RhcmdldFRvcDppdC5nZXRTY3JvbGxUb3AoKX0sR3Q9KHIubW9iaWxlQ2hlY2t8fGZ1bmN0aW9uKCl7cmV0dXJuL0FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHxlLm9wZXJhKX0pKCksR3Q/KHN0PXQuZ2V0RWxlbWVudEJ5SWQoXCJza3JvbGxyLWJvZHlcIiksc3QmJmF0KCksWCgpLER0KG8sW3ksU10sW1RdKSk6RHQobyxbeSxiXSxbVF0pLGl0LnJlZnJlc2goKSxTdChlLFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgZT1vLmNsaWVudFdpZHRoLHQ9by5jbGllbnRIZWlnaHQ7KHQhPT0kdHx8ZSE9PU10KSYmKCR0PXQsTXQ9ZSxfdD0hMCl9KTt2YXIgaT1ZKCk7cmV0dXJuIGZ1bmN0aW9uIGwoKXtaKCksYnQ9aShsKX0oKSxpdH12YXIgbyxhLGk9e2dldDpmdW5jdGlvbigpe3JldHVybiBpdH0saW5pdDpmdW5jdGlvbihlKXtyZXR1cm4gaXR8fG5ldyBuKGUpfSxWRVJTSU9OOlwiMC42LjI2XCJ9LGw9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxzPWUuTWF0aCxjPWUuZ2V0Q29tcHV0ZWRTdHlsZSxmPVwidG91Y2hzdGFydFwiLHU9XCJ0b3VjaG1vdmVcIixtPVwidG91Y2hjYW5jZWxcIixwPVwidG91Y2hlbmRcIixkPVwic2tyb2xsYWJsZVwiLGc9ZCtcIi1iZWZvcmVcIix2PWQrXCItYmV0d2VlblwiLGg9ZCtcIi1hZnRlclwiLHk9XCJza3JvbGxyXCIsVD1cIm5vLVwiK3ksYj15K1wiLWRlc2t0b3BcIixTPXkrXCItbW9iaWxlXCIsaz1cImxpbmVhclwiLHc9MWUzLHg9LjAwNCxFPTIwMCxBPVwic3RhcnRcIixGPVwiZW5kXCIsQz1cImNlbnRlclwiLEQ9XCJib3R0b21cIixIPVwiX19fc2tyb2xsYWJsZV9pZFwiLEk9L14oPzppbnB1dHx0ZXh0YXJlYXxidXR0b258c2VsZWN0KSQvaSxQPS9eXFxzK3xcXHMrJC9nLE49L15kYXRhKD86LShfXFx3KykpPyg/Oi0/KC0/XFxkKlxcLj9cXGQrcD8pKT8oPzotPyhzdGFydHxlbmR8dG9wfGNlbnRlcnxib3R0b20pKT8oPzotPyh0b3B8Y2VudGVyfGJvdHRvbSkpPyQvLE89L1xccyooQD9bXFx3XFwtXFxbXFxdXSspXFxzKjpcXHMqKC4rPylcXHMqKD86O3wkKS9naSxWPS9eKEA/W2EtelxcLV0rKVxcWyhcXHcrKVxcXSQvLHo9Ly0oW2EtejAtOV9dKS9nLHE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfSxMPS9bXFwtK10/W1xcZF0qXFwuP1tcXGRdKy9nLE09L1xce1xcP1xcfS9nLCQ9L3JnYmE/XFwoXFxzKi0/XFxkK1xccyosXFxzKi0/XFxkK1xccyosXFxzKi0/XFxkKy9nLF89L1thLXpcXC1dKy1ncmFkaWVudC9nLEI9XCJcIixHPVwiXCIsSz1mdW5jdGlvbigpe3ZhciBlPS9eKD86T3xNb3p8d2Via2l0fG1zKXwoPzotKD86b3xtb3p8d2Via2l0fG1zKS0pLztpZihjKXt2YXIgdD1jKGEsbnVsbCk7Zm9yKHZhciBuIGluIHQpaWYoQj1uLm1hdGNoKGUpfHwrbj09biYmdFtuXS5tYXRjaChlKSlicmVhaztpZighQilyZXR1cm4gQj1HPVwiXCIscjtCPUJbMF0sXCItXCI9PT1CLnNsaWNlKDAsMSk/KEc9QixCPXtcIi13ZWJraXQtXCI6XCJ3ZWJraXRcIixcIi1tb3otXCI6XCJNb3pcIixcIi1tcy1cIjpcIm1zXCIsXCItby1cIjpcIk9cIn1bQl0pOkc9XCItXCIrQi50b0xvd2VyQ2FzZSgpK1wiLVwifX0sWT1mdW5jdGlvbigpe3ZhciB0PWUucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxlW0IudG9Mb3dlckNhc2UoKStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSxyPVB0KCk7cmV0dXJuKEd0fHwhdCkmJih0PWZ1bmN0aW9uKHQpe3ZhciBuPVB0KCktcixvPXMubWF4KDAsMWUzLzYwLW4pO3JldHVybiBlLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyPVB0KCksdCgpfSxvKX0pLHR9LFI9ZnVuY3Rpb24oKXt2YXIgdD1lLmNhbmNlbEFuaW1hdGlvbkZyYW1lfHxlW0IudG9Mb3dlckNhc2UoKStcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdO3JldHVybihHdHx8IXQpJiYodD1mdW5jdGlvbih0KXtyZXR1cm4gZS5jbGVhclRpbWVvdXQodCl9KSx0fSxVPXtiZWdpbjpmdW5jdGlvbigpe3JldHVybiAwfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gMX0sbGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxxdWFkcmF0aWM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUqZX0sY3ViaWM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUqZSplfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4tcy5jb3MoZSpzLlBJKS8yKy41fSxzcXJ0OmZ1bmN0aW9uKGUpe3JldHVybiBzLnNxcnQoZSl9LG91dEN1YmljOmZ1bmN0aW9uKGUpe3JldHVybiBzLnBvdyhlLTEsMykrMX0sYm91bmNlOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKC41MDgzPj1lKXQ9MztlbHNlIGlmKC44NDg5Pj1lKXQ9OTtlbHNlIGlmKC45NjIwOD49ZSl0PTI3O2Vsc2V7aWYoISguOTk5ODE+PWUpKXJldHVybiAxO3Q9OTF9cmV0dXJuIDEtcy5hYnMoMypzLmNvcygxLjAyOCplKnQpL3QpfX07bi5wcm90b3R5cGUucmVmcmVzaD1mdW5jdGlvbihlKXt2YXIgbixvLGE9ITE7Zm9yKGU9PT1yPyhhPSEwLGx0PVtdLEJ0PTAsZT10LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSk6ZS5sZW5ndGg9PT1yJiYoZT1bZV0pLG49MCxvPWUubGVuZ3RoO28+bjtuKyspe3ZhciBpPWVbbl0sbD1pLHM9W10sYz1kdCxmPXl0LHU9ITE7aWYoYSYmSCBpbiBpJiZkZWxldGUgaVtIXSxpLmF0dHJpYnV0ZXMpe2Zvcih2YXIgbT0wLHA9aS5hdHRyaWJ1dGVzLmxlbmd0aDtwPm07bSsrKXt2YXIgZz1pLmF0dHJpYnV0ZXNbbV07aWYoXCJkYXRhLWFuY2hvci10YXJnZXRcIiE9PWcubmFtZSlpZihcImRhdGEtc21vb3RoLXNjcm9sbGluZ1wiIT09Zy5uYW1lKWlmKFwiZGF0YS1lZGdlLXN0cmF0ZWd5XCIhPT1nLm5hbWUpaWYoXCJkYXRhLWVtaXQtZXZlbnRzXCIhPT1nLm5hbWUpe3ZhciB2PWcubmFtZS5tYXRjaChOKTtpZihudWxsIT09dil7dmFyIGg9e3Byb3BzOmcudmFsdWUsZWxlbWVudDppLGV2ZW50VHlwZTpnLm5hbWUucmVwbGFjZSh6LHEpfTtzLnB1c2goaCk7dmFyIHk9dlsxXTt5JiYoaC5jb25zdGFudD15LnN1YnN0cigxKSk7dmFyIFQ9dlsyXTsvcCQvLnRlc3QoVCk/KGguaXNQZXJjZW50YWdlPSEwLGgub2Zmc2V0PSgwfFQuc2xpY2UoMCwtMSkpLzEwMCk6aC5vZmZzZXQ9MHxUO3ZhciBiPXZbM10sUz12WzRdfHxiO2ImJmIhPT1BJiZiIT09Rj8oaC5tb2RlPVwicmVsYXRpdmVcIixoLmFuY2hvcnM9W2IsU10pOihoLm1vZGU9XCJhYnNvbHV0ZVwiLGI9PT1GP2guaXNFbmQ9ITA6aC5pc1BlcmNlbnRhZ2V8fChoLm9mZnNldD1oLm9mZnNldCpWdCkpfX1lbHNlIHU9ITA7ZWxzZSBmPWcudmFsdWU7ZWxzZSBjPVwib2ZmXCIhPT1nLnZhbHVlO2Vsc2UgaWYobD10LnF1ZXJ5U2VsZWN0b3IoZy52YWx1ZSksbnVsbD09PWwpdGhyb3cnVW5hYmxlIHRvIGZpbmQgYW5jaG9yIHRhcmdldCBcIicrZy52YWx1ZSsnXCInfWlmKHMubGVuZ3RoKXt2YXIgayx3LHg7IWEmJkggaW4gaT8oeD1pW0hdLGs9bHRbeF0uc3R5bGVBdHRyLHc9bHRbeF0uY2xhc3NBdHRyKTooeD1pW0hdPUJ0Kyssaz1pLnN0eWxlLmNzc1RleHQsdz1DdChpKSksbHRbeF09e2VsZW1lbnQ6aSxzdHlsZUF0dHI6ayxjbGFzc0F0dHI6dyxhbmNob3JUYXJnZXQ6bCxrZXlGcmFtZXM6cyxzbW9vdGhTY3JvbGxpbmc6YyxlZGdlU3RyYXRlZ3k6ZixlbWl0RXZlbnRzOnUsbGFzdEZyYW1lSW5kZXg6LTF9LER0KGksW2RdLFtdKX19fWZvcihFdCgpLG49MCxvPWUubGVuZ3RoO28+bjtuKyspe3ZhciBFPWx0W2Vbbl1bSF1dO0UhPT1yJiYoSihFKSxldChFKSl9cmV0dXJuIGl0fSxuLnByb3RvdHlwZS5yZWxhdGl2ZVRvQWJzb2x1dGU9ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPW8uY2xpZW50SGVpZ2h0LGE9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxpPWEudG9wLGw9YS5ib3R0b20tYS50b3A7cmV0dXJuIHQ9PT1EP2ktPW46dD09PUMmJihpLT1uLzIpLHI9PT1EP2krPWw6cj09PUMmJihpKz1sLzIpLGkrPWl0LmdldFNjcm9sbFRvcCgpLDB8aSsuNX0sbi5wcm90b3R5cGUuYW5pbWF0ZVRvPWZ1bmN0aW9uKGUsdCl7dD10fHx7fTt2YXIgbj1QdCgpLG89aXQuZ2V0U2Nyb2xsVG9wKCk7cmV0dXJuIHB0PXtzdGFydFRvcDpvLHRvcERpZmY6ZS1vLHRhcmdldFRvcDplLGR1cmF0aW9uOnQuZHVyYXRpb258fHcsc3RhcnRUaW1lOm4sZW5kVGltZTpuKyh0LmR1cmF0aW9ufHx3KSxlYXNpbmc6VVt0LmVhc2luZ3x8a10sZG9uZTp0LmRvbmV9LHB0LnRvcERpZmZ8fChwdC5kb25lJiZwdC5kb25lLmNhbGwoaXQsITEpLHB0PXIpLGl0fSxuLnByb3RvdHlwZS5zdG9wQW5pbWF0ZVRvPWZ1bmN0aW9uKCl7cHQmJnB0LmRvbmUmJnB0LmRvbmUuY2FsbChpdCwhMCkscHQ9cn0sbi5wcm90b3R5cGUuaXNBbmltYXRpbmdUbz1mdW5jdGlvbigpe3JldHVybiEhcHR9LG4ucHJvdG90eXBlLmlzTW9iaWxlPWZ1bmN0aW9uKCl7cmV0dXJuIEd0fSxuLnByb3RvdHlwZS5zZXRTY3JvbGxUb3A9ZnVuY3Rpb24odCxyKXtyZXR1cm4gaHQ9cj09PSEwLEd0P0t0PXMubWluKHMubWF4KHQsMCksT3QpOmUuc2Nyb2xsVG8oMCx0KSxpdH0sbi5wcm90b3R5cGUuZ2V0U2Nyb2xsVG9wPWZ1bmN0aW9uKCl7cmV0dXJuIEd0P0t0OmUucGFnZVlPZmZzZXR8fG8uc2Nyb2xsVG9wfHxhLnNjcm9sbFRvcHx8MH0sbi5wcm90b3R5cGUuZ2V0TWF4U2Nyb2xsVG9wPWZ1bmN0aW9uKCl7cmV0dXJuIE90fSxuLnByb3RvdHlwZS5vbj1mdW5jdGlvbihlLHQpe3JldHVybiBjdFtlXT10LGl0fSxuLnByb3RvdHlwZS5vZmY9ZnVuY3Rpb24oZSl7cmV0dXJuIGRlbGV0ZSBjdFtlXSxpdH0sbi5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3ZhciBlPVIoKTtlKGJ0KSx3dCgpLER0KG8sW1RdLFt5LGIsU10pO2Zvcih2YXIgdD0wLG49bHQubGVuZ3RoO24+dDt0Kyspb3QobHRbdF0uZWxlbWVudCk7by5zdHlsZS5vdmVyZmxvdz1hLnN0eWxlLm92ZXJmbG93PVwiXCIsby5zdHlsZS5oZWlnaHQ9YS5zdHlsZS5oZWlnaHQ9XCJcIixzdCYmaS5zZXRTdHlsZShzdCxcInRyYW5zZm9ybVwiLFwibm9uZVwiKSxpdD1yLHN0PXIsY3Q9cixmdD1yLE90PTAsVnQ9MSx1dD1yLG10PXIsenQ9XCJkb3duXCIscXQ9LTEsTXQ9MCwkdD0wLF90PSExLHB0PXIsZHQ9cixndD1yLHZ0PXIsaHQ9cixCdD0wLHl0PXIsR3Q9ITEsS3Q9MCxUdD1yfTt2YXIgWD1mdW5jdGlvbigpe3ZhciBuLGksbCxjLGQsZyx2LGgseSxULGIsUztTdChvLFtmLHUsbSxwXS5qb2luKFwiIFwiKSxmdW5jdGlvbihlKXt2YXIgbz1lLmNoYW5nZWRUb3VjaGVzWzBdO2ZvcihjPWUudGFyZ2V0OzM9PT1jLm5vZGVUeXBlOyljPWMucGFyZW50Tm9kZTtzd2l0Y2goZD1vLmNsaWVudFksZz1vLmNsaWVudFgsVD1lLnRpbWVTdGFtcCxJLnRlc3QoYy50YWdOYW1lKXx8ZS5wcmV2ZW50RGVmYXVsdCgpLGUudHlwZSl7Y2FzZSBmOm4mJm4uYmx1cigpLGl0LnN0b3BBbmltYXRlVG8oKSxuPWMsaT12PWQsbD1nLHk9VDticmVhaztjYXNlIHU6SS50ZXN0KGMudGFnTmFtZSkmJnQuYWN0aXZlRWxlbWVudCE9PWMmJmUucHJldmVudERlZmF1bHQoKSxoPWQtdixTPVQtYixpdC5zZXRTY3JvbGxUb3AoS3QtaCwhMCksdj1kLGI9VDticmVhaztkZWZhdWx0OmNhc2UgbTpjYXNlIHA6dmFyIGE9aS1kLGs9bC1nLHc9ayprK2EqYTtpZig0OT53KXtpZighSS50ZXN0KG4udGFnTmFtZSkpe24uZm9jdXMoKTt2YXIgeD10LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7eC5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsZS52aWV3LDEsby5zY3JlZW5YLG8uc2NyZWVuWSxvLmNsaWVudFgsby5jbGllbnRZLGUuY3RybEtleSxlLmFsdEtleSxlLnNoaWZ0S2V5LGUubWV0YUtleSwwLG51bGwpLG4uZGlzcGF0Y2hFdmVudCh4KX1yZXR1cm59bj1yO3ZhciBFPWgvUztFPXMubWF4KHMubWluKEUsMyksLTMpO3ZhciBBPXMuYWJzKEUvbXQpLEY9RSpBKy41Km10KkEqQSxDPWl0LmdldFNjcm9sbFRvcCgpLUYsRD0wO0M+T3Q/KEQ9KE90LUMpL0YsQz1PdCk6MD5DJiYoRD0tQy9GLEM9MCksQSo9MS1ELGl0LmFuaW1hdGVUbygwfEMrLjUse2Vhc2luZzpcIm91dEN1YmljXCIsZHVyYXRpb246QX0pfX0pLGUuc2Nyb2xsVG8oMCwwKSxvLnN0eWxlLm92ZXJmbG93PWEuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIn0saj1mdW5jdGlvbigpe3ZhciBlLHQscixuLGEsaSxsLGMsZix1LG0scD1vLmNsaWVudEhlaWdodCxkPUF0KCk7Zm9yKGM9MCxmPWx0Lmxlbmd0aDtmPmM7YysrKWZvcihlPWx0W2NdLHQ9ZS5lbGVtZW50LHI9ZS5hbmNob3JUYXJnZXQsbj1lLmtleUZyYW1lcyxhPTAsaT1uLmxlbmd0aDtpPmE7YSsrKWw9blthXSx1PWwub2Zmc2V0LG09ZFtsLmNvbnN0YW50XXx8MCxsLmZyYW1lPXUsbC5pc1BlcmNlbnRhZ2UmJih1Kj1wLGwuZnJhbWU9dSksXCJyZWxhdGl2ZVwiPT09bC5tb2RlJiYob3QodCksbC5mcmFtZT1pdC5yZWxhdGl2ZVRvQWJzb2x1dGUocixsLmFuY2hvcnNbMF0sbC5hbmNob3JzWzFdKS11LG90KHQsITApKSxsLmZyYW1lKz1tLGZ0JiYhbC5pc0VuZCYmbC5mcmFtZT5PdCYmKE90PWwuZnJhbWUpO2ZvcihPdD1zLm1heChPdCxGdCgpKSxjPTAsZj1sdC5sZW5ndGg7Zj5jO2MrKyl7Zm9yKGU9bHRbY10sbj1lLmtleUZyYW1lcyxhPTAsaT1uLmxlbmd0aDtpPmE7YSsrKWw9blthXSxtPWRbbC5jb25zdGFudF18fDAsbC5pc0VuZCYmKGwuZnJhbWU9T3QtbC5vZmZzZXQrbSk7ZS5rZXlGcmFtZXMuc29ydChOdCl9fSxXPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByPTAsbj1sdC5sZW5ndGg7bj5yO3IrKyl7dmFyIG8sYSxzPWx0W3JdLGM9cy5lbGVtZW50LGY9cy5zbW9vdGhTY3JvbGxpbmc/ZTp0LHU9cy5rZXlGcmFtZXMsbT11Lmxlbmd0aCxwPXVbMF0seT11W3UubGVuZ3RoLTFdLFQ9cC5mcmFtZT5mLGI9Zj55LmZyYW1lLFM9VD9wOnksaz1zLmVtaXRFdmVudHMsdz1zLmxhc3RGcmFtZUluZGV4O2lmKFR8fGIpe2lmKFQmJi0xPT09cy5lZGdlfHxiJiYxPT09cy5lZGdlKWNvbnRpbnVlO3N3aXRjaChUPyhEdChjLFtnXSxbaCx2XSksayYmdz4tMSYmKHh0KGMscC5ldmVudFR5cGUsenQpLHMubGFzdEZyYW1lSW5kZXg9LTEpKTooRHQoYyxbaF0sW2csdl0pLGsmJm0+dyYmKHh0KGMseS5ldmVudFR5cGUsenQpLHMubGFzdEZyYW1lSW5kZXg9bSkpLHMuZWRnZT1UPy0xOjEscy5lZGdlU3RyYXRlZ3kpe2Nhc2VcInJlc2V0XCI6b3QoYyk7Y29udGludWU7Y2FzZVwiZWFzZVwiOmY9Uy5mcmFtZTticmVhaztkZWZhdWx0OmNhc2VcInNldFwiOnZhciB4PVMucHJvcHM7Zm9yKG8gaW4geClsLmNhbGwoeCxvKSYmKGE9bnQoeFtvXS52YWx1ZSksMD09PW8uaW5kZXhPZihcIkBcIik/Yy5zZXRBdHRyaWJ1dGUoby5zdWJzdHIoMSksYSk6aS5zZXRTdHlsZShjLG8sYSkpO2NvbnRpbnVlfX1lbHNlIDAhPT1zLmVkZ2UmJihEdChjLFtkLHZdLFtnLGhdKSxzLmVkZ2U9MCk7Zm9yKHZhciBFPTA7bS0xPkU7RSsrKWlmKGY+PXVbRV0uZnJhbWUmJnVbRSsxXS5mcmFtZT49Zil7dmFyIEE9dVtFXSxGPXVbRSsxXTtmb3IobyBpbiBBLnByb3BzKWlmKGwuY2FsbChBLnByb3BzLG8pKXt2YXIgQz0oZi1BLmZyYW1lKS8oRi5mcmFtZS1BLmZyYW1lKTtDPUEucHJvcHNbb10uZWFzaW5nKEMpLGE9cnQoQS5wcm9wc1tvXS52YWx1ZSxGLnByb3BzW29dLnZhbHVlLEMpLGE9bnQoYSksMD09PW8uaW5kZXhPZihcIkBcIik/Yy5zZXRBdHRyaWJ1dGUoby5zdWJzdHIoMSksYSk6aS5zZXRTdHlsZShjLG8sYSl9ayYmdyE9PUUmJihcImRvd25cIj09PXp0P3h0KGMsQS5ldmVudFR5cGUsenQpOnh0KGMsRi5ldmVudFR5cGUsenQpLHMubGFzdEZyYW1lSW5kZXg9RSk7YnJlYWt9fX0sWj1mdW5jdGlvbigpe190JiYoX3Q9ITEsRXQoKSk7dmFyIGUsdCxuPWl0LmdldFNjcm9sbFRvcCgpLG89UHQoKTtpZihwdClvPj1wdC5lbmRUaW1lPyhuPXB0LnRhcmdldFRvcCxlPXB0LmRvbmUscHQ9cik6KHQ9cHQuZWFzaW5nKChvLXB0LnN0YXJ0VGltZSkvcHQuZHVyYXRpb24pLG49MHxwdC5zdGFydFRvcCt0KnB0LnRvcERpZmYpLGl0LnNldFNjcm9sbFRvcChuLCEwKTtlbHNlIGlmKCFodCl7dmFyIGE9dnQudGFyZ2V0VG9wLW47YSYmKHZ0PXtzdGFydFRvcDpxdCx0b3BEaWZmOm4tcXQsdGFyZ2V0VG9wOm4sc3RhcnRUaW1lOkx0LGVuZFRpbWU6THQrZ3R9KSx2dC5lbmRUaW1lPj1vJiYodD1VLnNxcnQoKG8tdnQuc3RhcnRUaW1lKS9ndCksbj0wfHZ0LnN0YXJ0VG9wK3QqdnQudG9wRGlmZil9aWYoR3QmJnN0JiZpLnNldFN0eWxlKHN0LFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoMCwgXCIrLUt0K1wicHgpIFwiK1R0KSxodHx8cXQhPT1uKXt6dD1uPnF0P1wiZG93blwiOnF0Pm4/XCJ1cFwiOnp0LGh0PSExO3ZhciBsPXtjdXJUb3A6bixsYXN0VG9wOnF0LG1heFRvcDpPdCxkaXJlY3Rpb246enR9LHM9Y3QuYmVmb3JlcmVuZGVyJiZjdC5iZWZvcmVyZW5kZXIuY2FsbChpdCxsKTtzIT09ITEmJihXKG4saXQuZ2V0U2Nyb2xsVG9wKCkpLHF0PW4sY3QucmVuZGVyJiZjdC5yZW5kZXIuY2FsbChpdCxsKSksZSYmZS5jYWxsKGl0LCExKX1MdD1vfSxKPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLHI9ZS5rZXlGcmFtZXMubGVuZ3RoO3I+dDt0Kyspe2Zvcih2YXIgbixvLGEsaSxsPWUua2V5RnJhbWVzW3RdLHM9e307bnVsbCE9PShpPU8uZXhlYyhsLnByb3BzKSk7KWE9aVsxXSxvPWlbMl0sbj1hLm1hdGNoKFYpLG51bGwhPT1uPyhhPW5bMV0sbj1uWzJdKTpuPWssbz1vLmluZGV4T2YoXCIhXCIpP1Eobyk6W28uc2xpY2UoMSldLHNbYV09e3ZhbHVlOm8sZWFzaW5nOlVbbl19O2wucHJvcHM9c319LFE9ZnVuY3Rpb24oZSl7dmFyIHQ9W107cmV0dXJuICQubGFzdEluZGV4PTAsZT1lLnJlcGxhY2UoJCxmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKEwsZnVuY3Rpb24oZSl7cmV0dXJuIDEwMCooZS8yNTUpK1wiJVwifSl9KSxHJiYoXy5sYXN0SW5kZXg9MCxlPWUucmVwbGFjZShfLGZ1bmN0aW9uKGUpe3JldHVybiBHK2V9KSksZT1lLnJlcGxhY2UoTCxmdW5jdGlvbihlKXtyZXR1cm4gdC5wdXNoKCtlKSxcIns/fVwifSksdC51bnNoaWZ0KGUpLHR9LGV0PWZ1bmN0aW9uKGUpe3ZhciB0LHIsbj17fTtmb3IodD0wLHI9ZS5rZXlGcmFtZXMubGVuZ3RoO3I+dDt0KyspdHQoZS5rZXlGcmFtZXNbdF0sbik7Zm9yKG49e30sdD1lLmtleUZyYW1lcy5sZW5ndGgtMTt0Pj0wO3QtLSl0dChlLmtleUZyYW1lc1t0XSxuKX0sdHQ9ZnVuY3Rpb24oZSx0KXt2YXIgcjtmb3IociBpbiB0KWwuY2FsbChlLnByb3BzLHIpfHwoZS5wcm9wc1tyXT10W3JdKTtmb3IociBpbiBlLnByb3BzKXRbcl09ZS5wcm9wc1tyXX0scnQ9ZnVuY3Rpb24oZSx0LHIpe3ZhciBuLG89ZS5sZW5ndGg7aWYobyE9PXQubGVuZ3RoKXRocm93XCJDYW4ndCBpbnRlcnBvbGF0ZSBiZXR3ZWVuIFxcXCJcIitlWzBdKydcIiBhbmQgXCInK3RbMF0rJ1wiJzt2YXIgYT1bZVswXV07Zm9yKG49MTtvPm47bisrKWFbbl09ZVtuXSsodFtuXS1lW25dKSpyO3JldHVybiBhfSxudD1mdW5jdGlvbihlKXt2YXIgdD0xO3JldHVybiBNLmxhc3RJbmRleD0wLGVbMF0ucmVwbGFjZShNLGZ1bmN0aW9uKCl7cmV0dXJuIGVbdCsrXX0pfSxvdD1mdW5jdGlvbihlLHQpe2U9W10uY29uY2F0KGUpO2Zvcih2YXIgcixuLG89MCxhPWUubGVuZ3RoO2E+bztvKyspbj1lW29dLHI9bHRbbltIXV0sciYmKHQ/KG4uc3R5bGUuY3NzVGV4dD1yLmRpcnR5U3R5bGVBdHRyLER0KG4sci5kaXJ0eUNsYXNzQXR0cikpOihyLmRpcnR5U3R5bGVBdHRyPW4uc3R5bGUuY3NzVGV4dCxyLmRpcnR5Q2xhc3NBdHRyPUN0KG4pLG4uc3R5bGUuY3NzVGV4dD1yLnN0eWxlQXR0cixEdChuLHIuY2xhc3NBdHRyKSkpfSxhdD1mdW5jdGlvbigpe1R0PVwidHJhbnNsYXRlWigwKVwiLGkuc2V0U3R5bGUoc3QsXCJ0cmFuc2Zvcm1cIixUdCk7dmFyIGU9YyhzdCksdD1lLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIikscj1lLmdldFByb3BlcnR5VmFsdWUoRytcInRyYW5zZm9ybVwiKSxuPXQmJlwibm9uZVwiIT09dHx8ciYmXCJub25lXCIhPT1yO258fChUdD1cIlwiKX07aS5zZXRTdHlsZT1mdW5jdGlvbihlLHQscil7dmFyIG49ZS5zdHlsZTtpZih0PXQucmVwbGFjZSh6LHEpLnJlcGxhY2UoXCItXCIsXCJcIiksXCJ6SW5kZXhcIj09PXQpblt0XT1pc05hTihyKT9yOlwiXCIrKDB8cik7ZWxzZSBpZihcImZsb2F0XCI9PT10KW4uc3R5bGVGbG9hdD1uLmNzc0Zsb2F0PXI7ZWxzZSB0cnl7QiYmKG5bQit0LnNsaWNlKDAsMSkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXT1yKSxuW3RdPXJ9Y2F0Y2gobyl7fX07dmFyIGl0LGx0LHN0LGN0LGZ0LHV0LG10LHB0LGR0LGd0LHZ0LGh0LHl0LFR0LGJ0LFN0PWkuYWRkRXZlbnQ9ZnVuY3Rpb24odCxyLG4pe3ZhciBvPWZ1bmN0aW9uKHQpe3JldHVybiB0PXR8fGUuZXZlbnQsdC50YXJnZXR8fCh0LnRhcmdldD10LnNyY0VsZW1lbnQpLHQucHJldmVudERlZmF1bHR8fCh0LnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7dC5yZXR1cm5WYWx1ZT0hMSx0LmRlZmF1bHRQcmV2ZW50ZWQ9ITB9KSxuLmNhbGwodGhpcyx0KX07cj1yLnNwbGl0KFwiIFwiKTtmb3IodmFyIGEsaT0wLGw9ci5sZW5ndGg7bD5pO2krKylhPXJbaV0sdC5hZGRFdmVudExpc3RlbmVyP3QuYWRkRXZlbnRMaXN0ZW5lcihhLG4sITEpOnQuYXR0YWNoRXZlbnQoXCJvblwiK2EsbyksWXQucHVzaCh7ZWxlbWVudDp0LG5hbWU6YSxsaXN0ZW5lcjpufSl9LGt0PWkucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LHIpe3Q9dC5zcGxpdChcIiBcIik7Zm9yKHZhciBuPTAsbz10Lmxlbmd0aDtvPm47bisrKWUucmVtb3ZlRXZlbnRMaXN0ZW5lcj9lLnJlbW92ZUV2ZW50TGlzdGVuZXIodFtuXSxyLCExKTplLmRldGFjaEV2ZW50KFwib25cIit0W25dLHIpfSx3dD1mdW5jdGlvbigpe2Zvcih2YXIgZSx0PTAscj1ZdC5sZW5ndGg7cj50O3QrKyllPVl0W3RdLGt0KGUuZWxlbWVudCxlLm5hbWUsZS5saXN0ZW5lcik7WXQ9W119LHh0PWZ1bmN0aW9uKGUsdCxyKXtjdC5rZXlmcmFtZSYmY3Qua2V5ZnJhbWUuY2FsbChpdCxlLHQscil9LEV0PWZ1bmN0aW9uKCl7dmFyIGU9aXQuZ2V0U2Nyb2xsVG9wKCk7T3Q9MCxmdCYmIUd0JiYoYS5zdHlsZS5oZWlnaHQ9XCJcIiksaigpLGZ0JiYhR3QmJihhLnN0eWxlLmhlaWdodD1PdCtvLmNsaWVudEhlaWdodCtcInB4XCIpLEd0P2l0LnNldFNjcm9sbFRvcChzLm1pbihpdC5nZXRTY3JvbGxUb3AoKSxPdCkpOml0LnNldFNjcm9sbFRvcChlLCEwKSxodD0hMH0sQXQ9ZnVuY3Rpb24oKXt2YXIgZSx0LHI9by5jbGllbnRIZWlnaHQsbj17fTtmb3IoZSBpbiB1dCl0PXV0W2VdLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dD10LmNhbGwoaXQpOi9wJC8udGVzdCh0KSYmKHQ9dC5zbGljZSgwLC0xKS8xMDAqciksbltlXT10O3JldHVybiBufSxGdD1mdW5jdGlvbigpe3ZhciBlPXN0JiZzdC5vZmZzZXRIZWlnaHR8fDAsdD1zLm1heChlLGEuc2Nyb2xsSGVpZ2h0LGEub2Zmc2V0SGVpZ2h0LG8uc2Nyb2xsSGVpZ2h0LG8ub2Zmc2V0SGVpZ2h0LG8uY2xpZW50SGVpZ2h0KTtyZXR1cm4gdC1vLmNsaWVudEhlaWdodH0sQ3Q9ZnVuY3Rpb24odCl7dmFyIHI9XCJjbGFzc05hbWVcIjtyZXR1cm4gZS5TVkdFbGVtZW50JiZ0IGluc3RhbmNlb2YgZS5TVkdFbGVtZW50JiYodD10W3JdLHI9XCJiYXNlVmFsXCIpLHRbcl19LER0PWZ1bmN0aW9uKHQsbixvKXt2YXIgYT1cImNsYXNzTmFtZVwiO2lmKGUuU1ZHRWxlbWVudCYmdCBpbnN0YW5jZW9mIGUuU1ZHRWxlbWVudCYmKHQ9dFthXSxhPVwiYmFzZVZhbFwiKSxvPT09cilyZXR1cm4gdFthXT1uLHI7Zm9yKHZhciBpPXRbYV0sbD0wLHM9by5sZW5ndGg7cz5sO2wrKylpPUl0KGkpLnJlcGxhY2UoSXQob1tsXSksXCIgXCIpO2k9SHQoaSk7Zm9yKHZhciBjPTAsZj1uLmxlbmd0aDtmPmM7YysrKS0xPT09SXQoaSkuaW5kZXhPZihJdChuW2NdKSkmJihpKz1cIiBcIituW2NdKTt0W2FdPUh0KGkpfSxIdD1mdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKFAsXCJcIil9LEl0PWZ1bmN0aW9uKGUpe3JldHVyblwiIFwiK2UrXCIgXCJ9LFB0PURhdGUubm93fHxmdW5jdGlvbigpe3JldHVybituZXcgRGF0ZX0sTnQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5mcmFtZS10LmZyYW1lfSxPdD0wLFZ0PTEsenQ9XCJkb3duXCIscXQ9LTEsTHQ9UHQoKSxNdD0wLCR0PTAsX3Q9ITEsQnQ9MCxHdD0hMSxLdD0wLFl0PVtdO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJza3JvbGxyXCIsZnVuY3Rpb24oKXtyZXR1cm4gaX0pOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWk6ZS5za3JvbGxyPWl9KSh3aW5kb3csZG9jdW1lbnQpOyIsIi8qKlxyXG4gICogMjAxNi0yMDE3IChDKSBBbnRvbmlvIFJlZG9uZG8gLyBhbnRvbmlvcmVkb25kby5jb21cclxuICAqXHJcbiAgKiBET01Ub29scyBpcyBhIG5hbm8tbGlicmFyeSB3aGljaCBjb250YWlucyBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyB0byBkZWFsIHdpdGggYmFzaWNcclxuICAqIG5lZWRzIGFuZCBwcm9ibGVtcyBmYWNlZCBvbiBmcm9udC1lbmQgd2ViIGFwcGxpY2F0aW9ucy5cclxuICAqXHJcbiAgKiBJdCdzIGltcGxlbWVudGVkIG9uIEVTNSBKYXZhU2NyaXB0IGFzIHRoZSAnZCcgb2JqZWN0IG9uIHRoZSBnbG9iYWwgbmFtZXNwYWNlLlxyXG4gICpcclxuICAqIEl0IGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25hbGl0eTpcclxuICAqIC0gU29ydGVyIG5hbWUgZnVuY3Rpb25zIHdyYXBwaW5nIHF1ZXJpbmcsIGV2ZW50cyBhbmQgdGltZW91dHMgZnVuY3Rpb25zLlxyXG4gICogLSBHZW5lcmF0aW9uIG9mIHJhbmRvbSBpbnRlZ2Vycy5cclxuICAqIC0gQWRkaW5nLCByZXRyaWV2aW5nIGFuZCByZW1vdmluZyBjb29raWVzLlxyXG4gICogLSBDaGVja2luZyBvZiBDU1MgdHJhbnNmb3JtcyBzdXBwb3J0LlxyXG4gICogLSBDaGVja2luZyBvZiBPUy5cclxuICAqIC0gQ2FsY3VsYXRpb24gb2YgZWxlbWVudCBoZWlnaHRzIGFuZCBwb3NpdGlvbnMuXHJcbiAgKiAtIExvYWRpbmcgb2YgaW1hZ2VzIGFuZCBleGVjdXRpbmcgYSBjYWxsYmFjayBvbmNlIHRoZXkncmUgbG9hZGVkLlxyXG4gICpcclxuICAqL1xyXG5cclxuKGZ1bmN0aW9uKGQpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHRcclxuXHRkLmdpID0gZnVuY3Rpb24oaWQpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0fTtcclxuXHRcclxuXHRkLmdjID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdO1xyXG5cdH07XHJcblx0XHJcblx0ZC5nY2EgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcclxuXHRcdHJldHVybiBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKSk7XHJcblx0fTtcclxuXHRcclxuXHRkLnFzID0gZnVuY3Rpb24ocXVlcnkpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxuXHR9O1xyXG5cdFxyXG5cdGQucXNhID0gZnVuY3Rpb24ocXVlcnkpIHtcclxuXHRcdHJldHVybiBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcclxuXHR9O1xyXG5cdFxyXG5cdGQuYWUgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spIHtcclxuXHRcdHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG5cdH07XHJcblx0XHJcblx0ZC5zdCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aW1lKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIHRpbWUpO1xyXG5cdH07XHJcblx0XHJcblx0ZC5zaSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aW1lKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnNldEludGVydmFsKGNhbGxiYWNrLCB0aW1lKTtcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8qKlxyXG5cdCAgKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIGEgcmFuZ2UuXHJcblx0ICAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbG93ZXIgbGltaXQgb2YgdGhlIHJhbmdlLiBJdCBkZWZhdWx0cyB0byAtNTAuXHJcblx0ICAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgaGlnaGVyIGxpbWl0IG9mIHRoZSByYW5nZS4gSXQgZGVmYXVsdHMgdG8gNTAuXHJcblx0ICAqIEByZXR1cm5zIHtudW1iZXJ9IC0gVGhlIGdlbmVyYXRlZCByYW1kb24gaW50ZWdlciB3aXRoaW4gdGhlIHJhbmdlLlxyXG5cdCAgKi9cclxuXHRkLmdldFJhbmRvbUludCA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcblx0XHRtaW4gPSBtaW4gfHwgLTUwO1xyXG5cdFx0bWF4ID0gbWF4IHx8IDUwO1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHQvKipcclxuXHQgICogUmV0dXJucyB0aGUgc3VtIG9mIGNsaWVudEhlaWdodHMgb2YgYWxsIHRoZSBlbGVtZW50cyBzZWxlY3RlZCBieSB0aGUgQ1NTIHF1ZXJ5IHByb3ZpZGVkLlxyXG5cdCAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzIC0gQ1NTIHF1ZXJ5LlxyXG5cdCAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFRoZSBzdW0gb2YgYWxsIGNsaWVudEhlaWdodHMuIDAgaWYgbm8gZWxlbWVudHMgc2VsZWN0ZWQuXHJcblx0ICAqL1xyXG5cdGQuY2FsY0NsaWVudEhlaWdodHNTdW0gPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0dmFyIHRvdGFsID0gMDtcclxuXHRcdHZhciBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZC5xc2Eoc2VsZWN0b3IpKTtcclxuXHRcdFxyXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdHRvdGFsICs9IGl0ZW0uY2xpZW50SGVpZ2h0O1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0b3RhbDtcclxuXHR9O1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAgKiBSZXR1cm5zIGFuIEFycmF5IHdpdGggRE9NUmVjdHMgb2YgYWxsIHRoZSBlbGVtZW50cyBzZWxlY3RlZCBieSB0aGUgQ1NTIHF1ZXJ5IHByb3ZpZGVkLlxyXG5cdCAgKiBUaGUgYm9yZGVyLWJveCBjb29yZGluYXRlcycgb3JpZ2luIGlzIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydC5cclxuXHQgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycyAtIENTUyBxdWVyeS5cclxuXHQgICogQHJldHVybnMge0FycmF5fSAtIEFuIGFycmF5IHdpdGggRE9NUmVjdHMuIHVuZGVmaW5lZCBpZiBubyBlbGVtZW50cyBzZWxlY3RlZC5cclxuXHQgICovXHJcblx0ZC5jYWxjUG9zaXRpb25zVG9WaWV3cG9ydCA9IGZ1bmN0aW9uKHNlbGVjdG9ycykge1xyXG5cdFx0dmFyIHBvc2l0aW9ucyA9IFtdO1xyXG5cdFx0dmFyIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChkLnFzYShzZWxlY3RvcnMpKTtcclxuXHJcblx0XHRpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdHBvc2l0aW9ucy5wdXNoKGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHBvc2l0aW9ucztcclxuXHR9O1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAgKiBSZXR1cm5zIGFuIE9iamVjdCB3aXRoIGxlZnQsIHRvcCwgd2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzIG9mIHRoZSBjaGlsZFxyXG5cdCAgKiBlbGVtZW50IGJvcmRlci1ib3ggcG9zaXRpb24gcmVsYXRpdmUgdG8gYSBwYXJlbnQgZWxlbWVudCBzcGVjaWZpZWQgYnkgcGFyZW50U2VsZWN0b3IuXHJcblx0ICAqIFRoZSBwYXJlbnQgYW5kIHRoZSBjaGlsZCBkb24ndCBuZWVkIHRvIGJlIGRpcmVjdGx5IG5lc3RlZCBvbiB0aGUgZWxlbWVudHMnIGhpZXJhcmNoeS5cclxuXHQgICogSWYgYSBDU1Mgc2VsZWN0b3Igc3RyaW5nIGlzIHByb3ZpZGVkIGFuZCBpdCBzZWxlY3RzIG1vcmUgdGhhbiBvbmUgZWxlbWVudFxyXG5cdCAgKiBvbmx5IHRoZSBmaXJzdCBlbGVtZW50IHdpbGwgYmUgdXNlZC5cclxuXHQgICogQHBhcmFtIHtzdHJpbmd8SFRNTEVsZW1lbnR9IHBhcmVudFNlbGVjdG9yIC0gQ1NTIHNlbGVjdG9yIHN0cmluZyBvciBIVE1MRWxlbWVudCBmb3IgYSByZWZlcmVuY2UgcGFyZW50LlxyXG5cdCAgKiBAcGFyYW0ge3N0cmluZ3xIVE1MRWxlbWVudH0gY2hpbGRTZWxlY3RvciAtIENTUyBzZWxlY3RvciBzdHJpbmcgb3IgSFRNTEVsZW1lbnQgZm9yIHRoZSBjaGlsZC5cclxuXHQgICogQHJldHVybnMge09iamVjdH0gLSBBbiBPYmplY3Qgd2l0aCBsZWZ0LCB0b3AsIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllcy5cclxuXHQqL1xyXG5cdGQuY2FsY1JlbGF0aXZlUG9zaXRpb24gPSBmdW5jdGlvbihwYXJlbnQsIGNoaWxkKSB7XHJcblx0XHRpZiAodHlwZW9mIHBhcmVudCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cGFyZW50ID0gZC5xcyhwYXJlbnQpO1xyXG5cdFx0aWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0Y2hpbGQgPSBkLnFzKGNoaWxkKTtcclxuXHJcblx0XHRpZiAoKCFwYXJlbnQgfHwgIWNoaWxkKVxyXG5cdFx0XHRcdCYmICghKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiVGhlIHBhcmVudCBvciBjaGlsZCB3ZXJlIHVuZGVmaW5lZCBvciB0aGV5IHdlcmVuJ3QgSFRNTEVsZW1lbnRzXCIpOy8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHR2YXIgY2hpbGRSZWN0ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0dmFyIG9mZnNldCA9IHtcclxuXHRcdFx0bGVmdDogbnVsbCxcclxuXHRcdFx0dG9wOiBudWxsLFxyXG5cdFx0XHR3aWR0aDogbnVsbCxcclxuXHRcdFx0aGVpZ2h0OiBudWxsXHJcblx0XHR9O1xyXG5cclxuXHRcdG9mZnNldC5sZWZ0ID0gY2hpbGRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQ7XHJcblx0XHRvZmZzZXQudG9wID0gY2hpbGRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wO1xyXG5cdFx0b2Zmc2V0LndpZHRoID0gY2hpbGQub2Zmc2V0V2lkdGg7XHJcblx0XHRvZmZzZXQuaGVpZ2h0ID0gY2hpbGQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuXHRcdHJldHVybiBvZmZzZXQ7XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHR2YXIgaW1hZ2VzVG9Mb2FkID0gW107XHJcblx0dmFyXHRjYWxsYmFja3MgPSBbXTtcclxuXHRcdFxyXG5cdHZhciBydW5DYWxsYmFja3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBhcmVBbGxMb2FkZWQgPSBpbWFnZXNUb0xvYWQuZXZlcnkoZnVuY3Rpb24oaW1hZ2UpIHtcclxuXHRcdFx0cmV0dXJuIGltYWdlLmxvYWRlZDtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRpZiAoYXJlQWxsTG9hZGVkKSB7XHJcblx0XHRcdGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRkLm5vdGlmeVdoZW5Mb2FkZWQgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0dmFyIGltYWdlVG9Mb2FkID0ge1xyXG5cdFx0XHRzZWxlY3Rvcjogc2VsZWN0b3IsXHJcblx0XHRcdGxvYWRlZDogZmFsc2UsXHJcblx0XHRcdHNldEFzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpbWFnZVRvTG9hZC5sb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHJ1bkNhbGxiYWNrcygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHR2YXIgaW1hZ2UgPSBkLnFzKHNlbGVjdG9yKTtcclxuXHRcdGlmIChpbWFnZSkge1xyXG5cdFx0XHRpbWFnZXNUb0xvYWQucHVzaChpbWFnZVRvTG9hZCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5Nzc4NzEvY2hlY2staWYtYW4tZWxlbWVudC1pcy1sb2FkZWQtbm8tZXJyb3JzLWluLWphdmFzY3JpcHRcclxuXHRcdFx0aWYgKGltYWdlLmNvbXBsZXRlICYmIGltYWdlLm5hdHVyYWxIZWlnaHQpIHtcclxuXHRcdFx0XHRpbWFnZVRvTG9hZC5zZXRBc0xvYWRlZCgpO1xyXG5cdFx0XHR9IGVsc2UgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW1hZ2VUb0xvYWQuc2V0QXNMb2FkZWQpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gaW1hZ2U7XHJcblx0fTtcclxuXHRcclxuXHRkLnJ1bldoZW5BbGxMb2FkZWQgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG5cdFx0cnVuQ2FsbGJhY2tzKCk7XHJcblx0fTtcclxuXHRcclxuXHRkLnJlc2V0RWxlbWVudHNUb0xvYWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGltYWdlc1RvTG9hZCA9IFtdO1xyXG5cdFx0Y2FsbGJhY2tzID0gW107XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRkLmNoZWNrVHJhbnNmb3Jtc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIFwidHJhbnNmb3JtXCI7XHJcblx0XHRlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBcIndlYmtpdFRyYW5zZm9ybVwiO1xyXG5cdH07XHJcblx0XHJcblx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTIxOTU4Mi9ob3ctdG8tZGV0ZWN0LW15LWJyb3dzZXItdmVyc2lvbi1hbmQtb3BlcmF0aW5nLXN5c3RlbS11c2luZy1qYXZhc2NyaXB0XHJcblx0ZC5nZXRPUyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIG9zO1xyXG5cdFx0dmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblx0XHRcclxuXHRcdGlmICh1YS5pbmRleE9mKFwiV2luXCIpICE9IC0xKVx0XHRvcyA9IFwiV2luZG93c1wiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJNYWNcIikgIT0gLTEpXHRcdG9zID0gXCJtYWNPU1wiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJMaW51eFwiKSAhPSAtMSlcdFx0b3MgPSBcIkxpbnV4XCI7XHJcblx0XHRpZiAodWEuaW5kZXhPZihcIkFuZHJvaWRcIikgIT0gLTEpXHRvcyA9IFwiQW5kcm9pZFwiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJsaWtlIE1hY1wiKSAhPSAtMSlcdG9zID0gXCJpT1NcIjtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIG9zO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0LyoqXHJcblx0KiBHZXRzIGEgY29va2llIGJ5IG5hbWUuXHJcblx0KiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5hbWUgb2YgdGhlIGNvb2tpZS5cclxuXHQqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIHZhbHVlIG9mIHRoZSBjb29raWUuIG51bGwgaXMgbm8gY29va2llIHdhcyBmb3VuZCB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG5cdCovXHJcblx0ZC5nZXRDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR2YXIgbmFtZVdpdGhFcXVhbCA9IG5hbWUgKyBcIj1cIjtcclxuXHRcdHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcblx0XHRcclxuXHRcdGZvciAodmFyIGk9MDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBjID0gY2FbaV07XHJcblx0XHRcdFxyXG5cdFx0XHR3aGlsZSAoYy5jaGFyQXQoMCkgPT0gXCIgXCIpXHJcblx0XHRcdFx0YyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRpZiAoYy5pbmRleE9mKG5hbWVXaXRoRXF1YWwpID09PSAwKVxyXG5cdFx0XHRcdHJldHVybiBjLnN1YnN0cmluZyhuYW1lV2l0aEVxdWFsLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQqIFNldHMgYSBjb29raWUgYnkgbmFtZS5cclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gTmFtZSBvZiB0aGUgY29va2llLlxyXG5cdCogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVmFsdWUgZm9yIHRoZSBjb29raWUuXHJcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF5cyAtIEV4cGlyYXRpb24gdGltZSBpbiBkYXlzLlxyXG5cdCogQHJldHVybnMge3VuZGVmaW5lZH0gLSBBbHdheXMgdW5kZWZpbmVkXHJcblx0Ki9cclxuXHRkLnNldENvb2tpZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcblx0XHR2YXIgZXhwaXJlcztcclxuXHRcdFxyXG5cdFx0aWYgKGRheXMpIHtcclxuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xyXG5cdFx0XHRleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvR01UU3RyaW5nKCk7XHJcblx0XHR9IGVsc2UgZXhwaXJlcyA9IFwiXCI7XHJcblx0XHRcclxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxuXHR9O1xyXG5cdFxyXG5cdC8qKlxyXG5cdCogUmVtb3ZlcyBhIGNvb2tpZSBieSBuYW1lLlxyXG5cdCogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBjb29raWUgdG8gcmVtb3ZlLlxyXG5cdCogQHJldHVybnMge3VuZGVmaW5lZH0gLSBBbHdheXMgdW5kZWZpbmVkLlxyXG5cdCovXHJcblx0ZC5yZW1vdmVDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR0aGlzLnNldENvb2tpZShuYW1lLCBcIlwiLCAtMSk7XHJcblx0fTtcclxuXHRcclxufSh3aW5kb3cuZCA9IHdpbmRvdy5kIHx8IHt9KSk7XHJcbiIsImZ1bmN0aW9uIHNldE1hcmdpbihicmVha3BvaW50TW9iaWxlKSB7XHJcblx0dmFyIG1hcmdpbiA9IDI1MDtcclxuXHRpZiAod2luZG93LmlubmVyV2lkdGggPCBicmVha3BvaW50TW9iaWxlKVxyXG5cdFx0bWFyZ2luID0gODA7XHJcblx0cmV0dXJuIG1hcmdpbjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEJvZHlIZWlnaHQoaGVpZ2h0KSB7XHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcblx0dmFyIGJyZWFrcG9pbnRNb2JpbGUgPSA4MTA7XHJcblx0dmFyIG1hcmdpbiA9IHNldE1hcmdpbihicmVha3BvaW50TW9iaWxlKTtcclxuXHR2YXIgZ2FwID0gLW1hcmdpbjtcclxuXHRcclxuXHRzZXRCb2R5SGVpZ2h0KGQuY2FsY0NsaWVudEhlaWdodHNTdW0oXCJzZWN0aW9uLnNrcm9sbHItZGVja1wiKSArIG1hcmdpbiozKTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBTZXRzIHVwIFNrcm9sbGVyXHJcblx0dmFyIG9mZnNldEZ1bmN0aW9ucyA9IHtcclxuXHRcdGdldCBkMCgpIHsgcmV0dXJuIGQuZ2koXCJpbnRyb1wiKS5jbGllbnRIZWlnaHQgKyBtYXJnaW47IH0sXHJcblx0XHRnZXQgZDBnKCkgeyByZXR1cm4gZ2FwICsgdGhpcy5kMDsgfSxcclxuXHRcdGdldCBkMSgpIHsgcmV0dXJuIGQuZ2koXCJwcmVzZW50YXRpb25cIikuY2xpZW50SGVpZ2h0ICsgbWFyZ2luICsgdGhpcy5kMDsgfSxcclxuXHRcdGdldCBkMWcoKSB7IHJldHVybiBnYXAgKyB0aGlzLmQxOyB9LFxyXG5cdFx0Z2V0IGQyKCkgeyByZXR1cm4gZC5naShcIndoYXRzLWluY2x1ZGVkXCIpLmNsaWVudEhlaWdodCArIG1hcmdpbiArIHRoaXMuZDE7IH0sXHJcblx0XHRnZXQgZDJnKCkgeyByZXR1cm4gZ2FwICsgdGhpcy5kMjsgfVxyXG5cdH07XHJcblx0XHJcblx0c2tyb2xsci5pbml0KHtcclxuXHRcdHNtb290aFNjcm9sbGluZzogZmFsc2UsXHJcblx0XHRmb3JjZUhlaWdodDogZmFsc2UsXHJcblx0XHRjb25zdGFudHM6IG9mZnNldEZ1bmN0aW9ucyxcclxuXHRcdG1vYmlsZUNoZWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9LFxyXG5cdFx0Ly8ga2V5ZnJhbWU6IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUsIGRpcmVjdGlvbikge1xyXG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhcImtleWZyYW1lOlwiKTtcclxuXHRcdC8vIFx0Ly8gY29uc29sZS5sb2cobmFtZSk7XHJcblx0XHQvLyBcdC8vIGNvbnNvbGUubG9nKG5hbWUuc2xpY2UoNikpO1xyXG5cdFx0Ly8gXHR2YXIgZXh0cmEgPSAwO1xyXG5cdFx0Ly8gXHRpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpXHJcblx0XHQvLyBcdFx0LS1leHRyYTtcclxuXHRcdC8vIFx0c3dpdGNoIChuYW1lLnNsaWNlKDYpKSB7XHJcblx0XHQvLyBcdFx0Y2FzZSBcIjBnXCI6IG1vdmVMaW5lKDEgKyBleHRyYSk7IGJyZWFrO1xyXG5cdFx0Ly8gXHRcdGNhc2UgXCIxZ1wiOiBtb3ZlTGluZSgyICsgZXh0cmEpOyBicmVhaztcclxuXHRcdC8vIFx0XHRjYXNlIFwiMmdcIjogbW92ZUxpbmUoMyArIGV4dHJhKTtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfVxyXG5cdH0pO1xyXG5cdFxyXG5cdC8vIFNldHMgdXAgU2tyb2xsZXIgTWVudVxyXG5cdC8vIHNrcm9sbHIubWVudS5pbml0KHNrcm9sbHJJbnN0YW5jZSwge1xyXG5cdC8vIFx0YW5pbWF0ZTogdHJ1ZSxcclxuXHQvLyBcdGVhc2luZzogXCJvdXRDdWJpY1wiLFxyXG5cdC8vIFx0ZHVyYXRpb246IDUwMCxcclxuXHQvLyBcdGhhbmRsZUxpbms6IGZ1bmN0aW9uKGxpbmspIHtcclxuXHQvLyBcdFx0dmFyIGV4dHJhID0gMTtcclxuXHQvLyBcdFx0dmFyIGxpbmtUZXh0ID0gbGluay5ocmVmLnNwbGl0KFwiI1wiKS5wb3AoKTtcclxuXHQvL1xyXG5cdC8vIFx0XHR0cnkgeyAvLyBUbyBwcmV2ZW50IFNZTlRBWF9FUlIgZXhjZXB0aW9uXHJcblx0Ly8gXHRcdFx0aWYgKGQucXMoXCIjXCIgKyBsaW5rVGV4dCkgPT09IG51bGwpXHJcblx0Ly8gXHRcdFx0XHR0aHJvdyBFcnJvcjtcclxuXHQvLyBcdFx0fSBjYXRjaChlKSB7XHJcblx0Ly8gXHRcdFx0ZG9jdW1lbnQubG9jYXRpb24uaGFzaCA9IFwiXCI7XHJcblx0Ly8gXHRcdFx0cmV0dXJuIDA7XHJcblx0Ly8gXHRcdH1cclxuXHQvL1xyXG5cdC8vIFx0XHRzd2l0Y2ggKGxpbmtUZXh0KSB7XHJcblx0Ly8gXHRcdFx0Y2FzZSBcImludHJvXCI6XHRcdHJldHVybiAwO1xyXG5cdC8vIFx0XHRcdGNhc2UgXCJ3aG8td2UtYXJlXCI6XHRyZXR1cm4gb2Zmc2V0RnVuY3Rpb25zLmQwICsgZXh0cmE7XHJcblx0Ly8gXHRcdFx0Y2FzZSBcImNvbnRhY3RcIjpcdFx0cmV0dXJuIG9mZnNldEZ1bmN0aW9ucy5kMSArIGV4dHJhO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly9cclxuXHQvLyBcdFx0cmV0dXJuIDA7XHJcblx0Ly8gXHR9XHJcblx0Ly8gfSk7XHJcblx0XHJcblx0ZC5hZShcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcclxuXHRcdG1hcmdpbiA9IHNldE1hcmdpbihicmVha3BvaW50TW9iaWxlKTtcclxuXHRcdHNldEJvZHlIZWlnaHQoZC5jYWxjQ2xpZW50SGVpZ2h0c1N1bShcInNlY3Rpb24uc2tyb2xsci1kZWNrXCIpICsgbWFyZ2luKjMpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGQuYWUoXCJsb2FkXCIsIGZ1bmN0aW9uKCkgeyAvLyBUaGVyZSBhcmUgaW1hZ2VzIHRoYXQgaGF2ZW4ndCBoZWlnaHQgc3BlY2lmaWVkIGFuZCBpdCdzIG9ubHkga25vd24gb25jZSB0aGUgaW1hZ2UgaXMgbG9hZGVkLiBUaGV5IGFmZmVjdCB0aGUgaGVpZ2h0IG9mIHRoZSBwYWdlLlxyXG5cdFx0bWFyZ2luID0gc2V0TWFyZ2luKGJyZWFrcG9pbnRNb2JpbGUpO1xyXG5cdFx0c2V0Qm9keUhlaWdodChkLmNhbGNDbGllbnRIZWlnaHRzU3VtKFwic2VjdGlvbi5za3JvbGxyLWRlY2tcIikgKyBtYXJnaW4qMyk7XHJcblx0XHQvLyBkLnN0KGZ1bmN0aW9uKCkgeyBtb3ZlTGluZSgpOyB9LCA1MDApO1xyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9zZW5kaW5nLWhpdHNcclxuXHQvLyBkLnFzKFwiYS50b3AtYmFyX190YWJbaHJlZj0nI2ludHJvJ11cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcIlRvcCBiYXIgbGlua1wiLCBcImNsaWNrXCIsIFwiaW50cm9cIik7IH0pO1xyXG5cdC8vIGQucXMoXCJhLnRvcC1iYXJfX3RhYltocmVmPScjd2hvLXdlLWFyZSddXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgZ2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJUb3AgYmFyIGxpbmtcIiwgXCJjbGlja1wiLCBcIndoby13ZS1hcmVcIik7IH0pO1xyXG5cdC8vIGQucXMoXCJhLnRvcC1iYXJfX3RhYltocmVmPScjY29udGFjdCddXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgZ2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJUb3AgYmFyIGxpbmtcIiwgXCJjbGlja1wiLCBcImNvbnRhY3RcIik7IH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdGQuZ2MoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJib2R5LS1pblwiKTtcclxufVxyXG4iLCJkLm5vdGlmeVdoZW5Mb2FkZWQoXCIuaW50cm9fX2JnYTJcIik7XHJcbmQubm90aWZ5V2hlbkxvYWRlZChcIi5pbnRyb19fbG9nb1wiKTtcclxuZC5ub3RpZnlXaGVuTG9hZGVkKFwiLmludHJvX19zdWJ0ZXh0XCIpO1xyXG5kLnJ1bldoZW5BbGxMb2FkZWQoaW5pdCk7XHJcbiJdfQ==
