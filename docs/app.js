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
		get d1() { return d.gi("body").clientHeight + margin + this.d0; },
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

d.notifyWhenLoaded(".intro__logo");
d.notifyWhenLoaded(".intro__subtext");
d.runWhenAllLoaded(init);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNrcm9sbHIubWluLmpzIiwiRE9NVG9vbHMuanMiLCJhZWdlZUxvbmRvbi5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1R0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIHNrcm9sbHIgMC42LjI2ICgyMDE0LTA2LTA4KSB8IEFsZXhhbmRlciBQcmluemhvcm4gLSBodHRwczovL2dpdGh1Yi5jb20vUHJpbnpob3JuL3Nrcm9sbHIgfCBGcmVlIHRvIHVzZSB1bmRlciB0ZXJtcyBvZiBNSVQgbGljZW5zZSAqL1xuKGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHIpe2lmKG89dC5kb2N1bWVudEVsZW1lbnQsYT10LmJvZHksSygpLGl0PXRoaXMscj1yfHx7fSx1dD1yLmNvbnN0YW50c3x8e30sci5lYXNpbmcpZm9yKHZhciBuIGluIHIuZWFzaW5nKVVbbl09ci5lYXNpbmdbbl07eXQ9ci5lZGdlU3RyYXRlZ3l8fFwic2V0XCIsY3Q9e2JlZm9yZXJlbmRlcjpyLmJlZm9yZXJlbmRlcixyZW5kZXI6ci5yZW5kZXIsa2V5ZnJhbWU6ci5rZXlmcmFtZX0sZnQ9ci5mb3JjZUhlaWdodCE9PSExLGZ0JiYoVnQ9ci5zY2FsZXx8MSksbXQ9ci5tb2JpbGVEZWNlbGVyYXRpb258fHgsZHQ9ci5zbW9vdGhTY3JvbGxpbmchPT0hMSxndD1yLnNtb290aFNjcm9sbGluZ0R1cmF0aW9ufHxFLHZ0PXt0YXJnZXRUb3A6aXQuZ2V0U2Nyb2xsVG9wKCl9LEd0PShyLm1vYmlsZUNoZWNrfHxmdW5jdGlvbigpe3JldHVybi9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8ZS5vcGVyYSl9KSgpLEd0PyhzdD10LmdldEVsZW1lbnRCeUlkKFwic2tyb2xsci1ib2R5XCIpLHN0JiZhdCgpLFgoKSxEdChvLFt5LFNdLFtUXSkpOkR0KG8sW3ksYl0sW1RdKSxpdC5yZWZyZXNoKCksU3QoZSxcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGU9by5jbGllbnRXaWR0aCx0PW8uY2xpZW50SGVpZ2h0Oyh0IT09JHR8fGUhPT1NdCkmJigkdD10LE10PWUsX3Q9ITApfSk7dmFyIGk9WSgpO3JldHVybiBmdW5jdGlvbiBsKCl7WigpLGJ0PWkobCl9KCksaXR9dmFyIG8sYSxpPXtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaXR9LGluaXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGl0fHxuZXcgbihlKX0sVkVSU0lPTjpcIjAuNi4yNlwifSxsPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkscz1lLk1hdGgsYz1lLmdldENvbXB1dGVkU3R5bGUsZj1cInRvdWNoc3RhcnRcIix1PVwidG91Y2htb3ZlXCIsbT1cInRvdWNoY2FuY2VsXCIscD1cInRvdWNoZW5kXCIsZD1cInNrcm9sbGFibGVcIixnPWQrXCItYmVmb3JlXCIsdj1kK1wiLWJldHdlZW5cIixoPWQrXCItYWZ0ZXJcIix5PVwic2tyb2xsclwiLFQ9XCJuby1cIit5LGI9eStcIi1kZXNrdG9wXCIsUz15K1wiLW1vYmlsZVwiLGs9XCJsaW5lYXJcIix3PTFlMyx4PS4wMDQsRT0yMDAsQT1cInN0YXJ0XCIsRj1cImVuZFwiLEM9XCJjZW50ZXJcIixEPVwiYm90dG9tXCIsSD1cIl9fX3Nrcm9sbGFibGVfaWRcIixJPS9eKD86aW5wdXR8dGV4dGFyZWF8YnV0dG9ufHNlbGVjdCkkL2ksUD0vXlxccyt8XFxzKyQvZyxOPS9eZGF0YSg/Oi0oX1xcdyspKT8oPzotPygtP1xcZCpcXC4/XFxkK3A/KSk/KD86LT8oc3RhcnR8ZW5kfHRvcHxjZW50ZXJ8Ym90dG9tKSk/KD86LT8odG9wfGNlbnRlcnxib3R0b20pKT8kLyxPPS9cXHMqKEA/W1xcd1xcLVxcW1xcXV0rKVxccyo6XFxzKiguKz8pXFxzKig/Ojt8JCkvZ2ksVj0vXihAP1thLXpcXC1dKylcXFsoXFx3KylcXF0kLyx6PS8tKFthLXowLTlfXSkvZyxxPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX0sTD0vW1xcLStdP1tcXGRdKlxcLj9bXFxkXSsvZyxNPS9cXHtcXD9cXH0vZywkPS9yZ2JhP1xcKFxccyotP1xcZCtcXHMqLFxccyotP1xcZCtcXHMqLFxccyotP1xcZCsvZyxfPS9bYS16XFwtXSstZ3JhZGllbnQvZyxCPVwiXCIsRz1cIlwiLEs9ZnVuY3Rpb24oKXt2YXIgZT0vXig/Ok98TW96fHdlYmtpdHxtcyl8KD86LSg/Om98bW96fHdlYmtpdHxtcyktKS87aWYoYyl7dmFyIHQ9YyhhLG51bGwpO2Zvcih2YXIgbiBpbiB0KWlmKEI9bi5tYXRjaChlKXx8K249PW4mJnRbbl0ubWF0Y2goZSkpYnJlYWs7aWYoIUIpcmV0dXJuIEI9Rz1cIlwiLHI7Qj1CWzBdLFwiLVwiPT09Qi5zbGljZSgwLDEpPyhHPUIsQj17XCItd2Via2l0LVwiOlwid2Via2l0XCIsXCItbW96LVwiOlwiTW96XCIsXCItbXMtXCI6XCJtc1wiLFwiLW8tXCI6XCJPXCJ9W0JdKTpHPVwiLVwiK0IudG9Mb3dlckNhc2UoKStcIi1cIn19LFk9ZnVuY3Rpb24oKXt2YXIgdD1lLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZVtCLnRvTG93ZXJDYXNlKCkrXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl0scj1QdCgpO3JldHVybihHdHx8IXQpJiYodD1mdW5jdGlvbih0KXt2YXIgbj1QdCgpLXIsbz1zLm1heCgwLDFlMy82MC1uKTtyZXR1cm4gZS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cj1QdCgpLHQoKX0sbyl9KSx0fSxSPWZ1bmN0aW9uKCl7dmFyIHQ9ZS5jYW5jZWxBbmltYXRpb25GcmFtZXx8ZVtCLnRvTG93ZXJDYXNlKCkrXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXTtyZXR1cm4oR3R8fCF0KSYmKHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xlYXJUaW1lb3V0KHQpfSksdH0sVT17YmVnaW46ZnVuY3Rpb24oKXtyZXR1cm4gMH0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIDF9LGxpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0scXVhZHJhdGljOmZ1bmN0aW9uKGUpe3JldHVybiBlKmV9LGN1YmljOmZ1bmN0aW9uKGUpe3JldHVybiBlKmUqZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLXMuY29zKGUqcy5QSSkvMisuNX0sc3FydDpmdW5jdGlvbihlKXtyZXR1cm4gcy5zcXJ0KGUpfSxvdXRDdWJpYzpmdW5jdGlvbihlKXtyZXR1cm4gcy5wb3coZS0xLDMpKzF9LGJvdW5jZTpmdW5jdGlvbihlKXt2YXIgdDtpZiguNTA4Mz49ZSl0PTM7ZWxzZSBpZiguODQ4OT49ZSl0PTk7ZWxzZSBpZiguOTYyMDg+PWUpdD0yNztlbHNle2lmKCEoLjk5OTgxPj1lKSlyZXR1cm4gMTt0PTkxfXJldHVybiAxLXMuYWJzKDMqcy5jb3MoMS4wMjgqZSp0KS90KX19O24ucHJvdG90eXBlLnJlZnJlc2g9ZnVuY3Rpb24oZSl7dmFyIG4sbyxhPSExO2ZvcihlPT09cj8oYT0hMCxsdD1bXSxCdD0wLGU9dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikpOmUubGVuZ3RoPT09ciYmKGU9W2VdKSxuPTAsbz1lLmxlbmd0aDtvPm47bisrKXt2YXIgaT1lW25dLGw9aSxzPVtdLGM9ZHQsZj15dCx1PSExO2lmKGEmJkggaW4gaSYmZGVsZXRlIGlbSF0saS5hdHRyaWJ1dGVzKXtmb3IodmFyIG09MCxwPWkuYXR0cmlidXRlcy5sZW5ndGg7cD5tO20rKyl7dmFyIGc9aS5hdHRyaWJ1dGVzW21dO2lmKFwiZGF0YS1hbmNob3ItdGFyZ2V0XCIhPT1nLm5hbWUpaWYoXCJkYXRhLXNtb290aC1zY3JvbGxpbmdcIiE9PWcubmFtZSlpZihcImRhdGEtZWRnZS1zdHJhdGVneVwiIT09Zy5uYW1lKWlmKFwiZGF0YS1lbWl0LWV2ZW50c1wiIT09Zy5uYW1lKXt2YXIgdj1nLm5hbWUubWF0Y2goTik7aWYobnVsbCE9PXYpe3ZhciBoPXtwcm9wczpnLnZhbHVlLGVsZW1lbnQ6aSxldmVudFR5cGU6Zy5uYW1lLnJlcGxhY2UoeixxKX07cy5wdXNoKGgpO3ZhciB5PXZbMV07eSYmKGguY29uc3RhbnQ9eS5zdWJzdHIoMSkpO3ZhciBUPXZbMl07L3AkLy50ZXN0KFQpPyhoLmlzUGVyY2VudGFnZT0hMCxoLm9mZnNldD0oMHxULnNsaWNlKDAsLTEpKS8xMDApOmgub2Zmc2V0PTB8VDt2YXIgYj12WzNdLFM9dls0XXx8YjtiJiZiIT09QSYmYiE9PUY/KGgubW9kZT1cInJlbGF0aXZlXCIsaC5hbmNob3JzPVtiLFNdKTooaC5tb2RlPVwiYWJzb2x1dGVcIixiPT09Rj9oLmlzRW5kPSEwOmguaXNQZXJjZW50YWdlfHwoaC5vZmZzZXQ9aC5vZmZzZXQqVnQpKX19ZWxzZSB1PSEwO2Vsc2UgZj1nLnZhbHVlO2Vsc2UgYz1cIm9mZlwiIT09Zy52YWx1ZTtlbHNlIGlmKGw9dC5xdWVyeVNlbGVjdG9yKGcudmFsdWUpLG51bGw9PT1sKXRocm93J1VuYWJsZSB0byBmaW5kIGFuY2hvciB0YXJnZXQgXCInK2cudmFsdWUrJ1wiJ31pZihzLmxlbmd0aCl7dmFyIGssdyx4OyFhJiZIIGluIGk/KHg9aVtIXSxrPWx0W3hdLnN0eWxlQXR0cix3PWx0W3hdLmNsYXNzQXR0cik6KHg9aVtIXT1CdCsrLGs9aS5zdHlsZS5jc3NUZXh0LHc9Q3QoaSkpLGx0W3hdPXtlbGVtZW50Omksc3R5bGVBdHRyOmssY2xhc3NBdHRyOncsYW5jaG9yVGFyZ2V0Omwsa2V5RnJhbWVzOnMsc21vb3RoU2Nyb2xsaW5nOmMsZWRnZVN0cmF0ZWd5OmYsZW1pdEV2ZW50czp1LGxhc3RGcmFtZUluZGV4Oi0xfSxEdChpLFtkXSxbXSl9fX1mb3IoRXQoKSxuPTAsbz1lLmxlbmd0aDtvPm47bisrKXt2YXIgRT1sdFtlW25dW0hdXTtFIT09ciYmKEooRSksZXQoRSkpfXJldHVybiBpdH0sbi5wcm90b3R5cGUucmVsYXRpdmVUb0Fic29sdXRlPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbj1vLmNsaWVudEhlaWdodCxhPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT1hLnRvcCxsPWEuYm90dG9tLWEudG9wO3JldHVybiB0PT09RD9pLT1uOnQ9PT1DJiYoaS09bi8yKSxyPT09RD9pKz1sOnI9PT1DJiYoaSs9bC8yKSxpKz1pdC5nZXRTY3JvbGxUb3AoKSwwfGkrLjV9LG4ucHJvdG90eXBlLmFuaW1hdGVUbz1mdW5jdGlvbihlLHQpe3Q9dHx8e307dmFyIG49UHQoKSxvPWl0LmdldFNjcm9sbFRvcCgpO3JldHVybiBwdD17c3RhcnRUb3A6byx0b3BEaWZmOmUtbyx0YXJnZXRUb3A6ZSxkdXJhdGlvbjp0LmR1cmF0aW9ufHx3LHN0YXJ0VGltZTpuLGVuZFRpbWU6bisodC5kdXJhdGlvbnx8dyksZWFzaW5nOlVbdC5lYXNpbmd8fGtdLGRvbmU6dC5kb25lfSxwdC50b3BEaWZmfHwocHQuZG9uZSYmcHQuZG9uZS5jYWxsKGl0LCExKSxwdD1yKSxpdH0sbi5wcm90b3R5cGUuc3RvcEFuaW1hdGVUbz1mdW5jdGlvbigpe3B0JiZwdC5kb25lJiZwdC5kb25lLmNhbGwoaXQsITApLHB0PXJ9LG4ucHJvdG90eXBlLmlzQW5pbWF0aW5nVG89ZnVuY3Rpb24oKXtyZXR1cm4hIXB0fSxuLnByb3RvdHlwZS5pc01vYmlsZT1mdW5jdGlvbigpe3JldHVybiBHdH0sbi5wcm90b3R5cGUuc2V0U2Nyb2xsVG9wPWZ1bmN0aW9uKHQscil7cmV0dXJuIGh0PXI9PT0hMCxHdD9LdD1zLm1pbihzLm1heCh0LDApLE90KTplLnNjcm9sbFRvKDAsdCksaXR9LG4ucHJvdG90eXBlLmdldFNjcm9sbFRvcD1mdW5jdGlvbigpe3JldHVybiBHdD9LdDplLnBhZ2VZT2Zmc2V0fHxvLnNjcm9sbFRvcHx8YS5zY3JvbGxUb3B8fDB9LG4ucHJvdG90eXBlLmdldE1heFNjcm9sbFRvcD1mdW5jdGlvbigpe3JldHVybiBPdH0sbi5wcm90b3R5cGUub249ZnVuY3Rpb24oZSx0KXtyZXR1cm4gY3RbZV09dCxpdH0sbi5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKGUpe3JldHVybiBkZWxldGUgY3RbZV0saXR9LG4ucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgZT1SKCk7ZShidCksd3QoKSxEdChvLFtUXSxbeSxiLFNdKTtmb3IodmFyIHQ9MCxuPWx0Lmxlbmd0aDtuPnQ7dCsrKW90KGx0W3RdLmVsZW1lbnQpO28uc3R5bGUub3ZlcmZsb3c9YS5zdHlsZS5vdmVyZmxvdz1cIlwiLG8uc3R5bGUuaGVpZ2h0PWEuc3R5bGUuaGVpZ2h0PVwiXCIsc3QmJmkuc2V0U3R5bGUoc3QsXCJ0cmFuc2Zvcm1cIixcIm5vbmVcIiksaXQ9cixzdD1yLGN0PXIsZnQ9cixPdD0wLFZ0PTEsdXQ9cixtdD1yLHp0PVwiZG93blwiLHF0PS0xLE10PTAsJHQ9MCxfdD0hMSxwdD1yLGR0PXIsZ3Q9cix2dD1yLGh0PXIsQnQ9MCx5dD1yLEd0PSExLEt0PTAsVHQ9cn07dmFyIFg9ZnVuY3Rpb24oKXt2YXIgbixpLGwsYyxkLGcsdixoLHksVCxiLFM7U3QobyxbZix1LG0scF0uam9pbihcIiBcIiksZnVuY3Rpb24oZSl7dmFyIG89ZS5jaGFuZ2VkVG91Y2hlc1swXTtmb3IoYz1lLnRhcmdldDszPT09Yy5ub2RlVHlwZTspYz1jLnBhcmVudE5vZGU7c3dpdGNoKGQ9by5jbGllbnRZLGc9by5jbGllbnRYLFQ9ZS50aW1lU3RhbXAsSS50ZXN0KGMudGFnTmFtZSl8fGUucHJldmVudERlZmF1bHQoKSxlLnR5cGUpe2Nhc2UgZjpuJiZuLmJsdXIoKSxpdC5zdG9wQW5pbWF0ZVRvKCksbj1jLGk9dj1kLGw9Zyx5PVQ7YnJlYWs7Y2FzZSB1OkkudGVzdChjLnRhZ05hbWUpJiZ0LmFjdGl2ZUVsZW1lbnQhPT1jJiZlLnByZXZlbnREZWZhdWx0KCksaD1kLXYsUz1ULWIsaXQuc2V0U2Nyb2xsVG9wKEt0LWgsITApLHY9ZCxiPVQ7YnJlYWs7ZGVmYXVsdDpjYXNlIG06Y2FzZSBwOnZhciBhPWktZCxrPWwtZyx3PWsqaythKmE7aWYoNDk+dyl7aWYoIUkudGVzdChuLnRhZ05hbWUpKXtuLmZvY3VzKCk7dmFyIHg9dC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO3guaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLGUudmlldywxLG8uc2NyZWVuWCxvLnNjcmVlblksby5jbGllbnRYLG8uY2xpZW50WSxlLmN0cmxLZXksZS5hbHRLZXksZS5zaGlmdEtleSxlLm1ldGFLZXksMCxudWxsKSxuLmRpc3BhdGNoRXZlbnQoeCl9cmV0dXJufW49cjt2YXIgRT1oL1M7RT1zLm1heChzLm1pbihFLDMpLC0zKTt2YXIgQT1zLmFicyhFL210KSxGPUUqQSsuNSptdCpBKkEsQz1pdC5nZXRTY3JvbGxUb3AoKS1GLEQ9MDtDPk90PyhEPShPdC1DKS9GLEM9T3QpOjA+QyYmKEQ9LUMvRixDPTApLEEqPTEtRCxpdC5hbmltYXRlVG8oMHxDKy41LHtlYXNpbmc6XCJvdXRDdWJpY1wiLGR1cmF0aW9uOkF9KX19KSxlLnNjcm9sbFRvKDAsMCksby5zdHlsZS5vdmVyZmxvdz1hLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCJ9LGo9ZnVuY3Rpb24oKXt2YXIgZSx0LHIsbixhLGksbCxjLGYsdSxtLHA9by5jbGllbnRIZWlnaHQsZD1BdCgpO2ZvcihjPTAsZj1sdC5sZW5ndGg7Zj5jO2MrKylmb3IoZT1sdFtjXSx0PWUuZWxlbWVudCxyPWUuYW5jaG9yVGFyZ2V0LG49ZS5rZXlGcmFtZXMsYT0wLGk9bi5sZW5ndGg7aT5hO2ErKylsPW5bYV0sdT1sLm9mZnNldCxtPWRbbC5jb25zdGFudF18fDAsbC5mcmFtZT11LGwuaXNQZXJjZW50YWdlJiYodSo9cCxsLmZyYW1lPXUpLFwicmVsYXRpdmVcIj09PWwubW9kZSYmKG90KHQpLGwuZnJhbWU9aXQucmVsYXRpdmVUb0Fic29sdXRlKHIsbC5hbmNob3JzWzBdLGwuYW5jaG9yc1sxXSktdSxvdCh0LCEwKSksbC5mcmFtZSs9bSxmdCYmIWwuaXNFbmQmJmwuZnJhbWU+T3QmJihPdD1sLmZyYW1lKTtmb3IoT3Q9cy5tYXgoT3QsRnQoKSksYz0wLGY9bHQubGVuZ3RoO2Y+YztjKyspe2ZvcihlPWx0W2NdLG49ZS5rZXlGcmFtZXMsYT0wLGk9bi5sZW5ndGg7aT5hO2ErKylsPW5bYV0sbT1kW2wuY29uc3RhbnRdfHwwLGwuaXNFbmQmJihsLmZyYW1lPU90LWwub2Zmc2V0K20pO2Uua2V5RnJhbWVzLnNvcnQoTnQpfX0sVz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0wLG49bHQubGVuZ3RoO24+cjtyKyspe3ZhciBvLGEscz1sdFtyXSxjPXMuZWxlbWVudCxmPXMuc21vb3RoU2Nyb2xsaW5nP2U6dCx1PXMua2V5RnJhbWVzLG09dS5sZW5ndGgscD11WzBdLHk9dVt1Lmxlbmd0aC0xXSxUPXAuZnJhbWU+ZixiPWY+eS5mcmFtZSxTPVQ/cDp5LGs9cy5lbWl0RXZlbnRzLHc9cy5sYXN0RnJhbWVJbmRleDtpZihUfHxiKXtpZihUJiYtMT09PXMuZWRnZXx8YiYmMT09PXMuZWRnZSljb250aW51ZTtzd2l0Y2goVD8oRHQoYyxbZ10sW2gsdl0pLGsmJnc+LTEmJih4dChjLHAuZXZlbnRUeXBlLHp0KSxzLmxhc3RGcmFtZUluZGV4PS0xKSk6KER0KGMsW2hdLFtnLHZdKSxrJiZtPncmJih4dChjLHkuZXZlbnRUeXBlLHp0KSxzLmxhc3RGcmFtZUluZGV4PW0pKSxzLmVkZ2U9VD8tMToxLHMuZWRnZVN0cmF0ZWd5KXtjYXNlXCJyZXNldFwiOm90KGMpO2NvbnRpbnVlO2Nhc2VcImVhc2VcIjpmPVMuZnJhbWU7YnJlYWs7ZGVmYXVsdDpjYXNlXCJzZXRcIjp2YXIgeD1TLnByb3BzO2ZvcihvIGluIHgpbC5jYWxsKHgsbykmJihhPW50KHhbb10udmFsdWUpLDA9PT1vLmluZGV4T2YoXCJAXCIpP2Muc2V0QXR0cmlidXRlKG8uc3Vic3RyKDEpLGEpOmkuc2V0U3R5bGUoYyxvLGEpKTtjb250aW51ZX19ZWxzZSAwIT09cy5lZGdlJiYoRHQoYyxbZCx2XSxbZyxoXSkscy5lZGdlPTApO2Zvcih2YXIgRT0wO20tMT5FO0UrKylpZihmPj11W0VdLmZyYW1lJiZ1W0UrMV0uZnJhbWU+PWYpe3ZhciBBPXVbRV0sRj11W0UrMV07Zm9yKG8gaW4gQS5wcm9wcylpZihsLmNhbGwoQS5wcm9wcyxvKSl7dmFyIEM9KGYtQS5mcmFtZSkvKEYuZnJhbWUtQS5mcmFtZSk7Qz1BLnByb3BzW29dLmVhc2luZyhDKSxhPXJ0KEEucHJvcHNbb10udmFsdWUsRi5wcm9wc1tvXS52YWx1ZSxDKSxhPW50KGEpLDA9PT1vLmluZGV4T2YoXCJAXCIpP2Muc2V0QXR0cmlidXRlKG8uc3Vic3RyKDEpLGEpOmkuc2V0U3R5bGUoYyxvLGEpfWsmJnchPT1FJiYoXCJkb3duXCI9PT16dD94dChjLEEuZXZlbnRUeXBlLHp0KTp4dChjLEYuZXZlbnRUeXBlLHp0KSxzLmxhc3RGcmFtZUluZGV4PUUpO2JyZWFrfX19LFo9ZnVuY3Rpb24oKXtfdCYmKF90PSExLEV0KCkpO3ZhciBlLHQsbj1pdC5nZXRTY3JvbGxUb3AoKSxvPVB0KCk7aWYocHQpbz49cHQuZW5kVGltZT8obj1wdC50YXJnZXRUb3AsZT1wdC5kb25lLHB0PXIpOih0PXB0LmVhc2luZygoby1wdC5zdGFydFRpbWUpL3B0LmR1cmF0aW9uKSxuPTB8cHQuc3RhcnRUb3ArdCpwdC50b3BEaWZmKSxpdC5zZXRTY3JvbGxUb3AobiwhMCk7ZWxzZSBpZighaHQpe3ZhciBhPXZ0LnRhcmdldFRvcC1uO2EmJih2dD17c3RhcnRUb3A6cXQsdG9wRGlmZjpuLXF0LHRhcmdldFRvcDpuLHN0YXJ0VGltZTpMdCxlbmRUaW1lOkx0K2d0fSksdnQuZW5kVGltZT49byYmKHQ9VS5zcXJ0KChvLXZ0LnN0YXJ0VGltZSkvZ3QpLG49MHx2dC5zdGFydFRvcCt0KnZ0LnRvcERpZmYpfWlmKEd0JiZzdCYmaS5zZXRTdHlsZShzdCxcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKDAsIFwiKy1LdCtcInB4KSBcIitUdCksaHR8fHF0IT09bil7enQ9bj5xdD9cImRvd25cIjpxdD5uP1widXBcIjp6dCxodD0hMTt2YXIgbD17Y3VyVG9wOm4sbGFzdFRvcDpxdCxtYXhUb3A6T3QsZGlyZWN0aW9uOnp0fSxzPWN0LmJlZm9yZXJlbmRlciYmY3QuYmVmb3JlcmVuZGVyLmNhbGwoaXQsbCk7cyE9PSExJiYoVyhuLGl0LmdldFNjcm9sbFRvcCgpKSxxdD1uLGN0LnJlbmRlciYmY3QucmVuZGVyLmNhbGwoaXQsbCkpLGUmJmUuY2FsbChpdCwhMSl9THQ9b30sSj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxyPWUua2V5RnJhbWVzLmxlbmd0aDtyPnQ7dCsrKXtmb3IodmFyIG4sbyxhLGksbD1lLmtleUZyYW1lc1t0XSxzPXt9O251bGwhPT0oaT1PLmV4ZWMobC5wcm9wcykpOylhPWlbMV0sbz1pWzJdLG49YS5tYXRjaChWKSxudWxsIT09bj8oYT1uWzFdLG49blsyXSk6bj1rLG89by5pbmRleE9mKFwiIVwiKT9RKG8pOltvLnNsaWNlKDEpXSxzW2FdPXt2YWx1ZTpvLGVhc2luZzpVW25dfTtsLnByb3BzPXN9fSxRPWZ1bmN0aW9uKGUpe3ZhciB0PVtdO3JldHVybiAkLmxhc3RJbmRleD0wLGU9ZS5yZXBsYWNlKCQsZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShMLGZ1bmN0aW9uKGUpe3JldHVybiAxMDAqKGUvMjU1KStcIiVcIn0pfSksRyYmKF8ubGFzdEluZGV4PTAsZT1lLnJlcGxhY2UoXyxmdW5jdGlvbihlKXtyZXR1cm4gRytlfSkpLGU9ZS5yZXBsYWNlKEwsZnVuY3Rpb24oZSl7cmV0dXJuIHQucHVzaCgrZSksXCJ7P31cIn0pLHQudW5zaGlmdChlKSx0fSxldD1mdW5jdGlvbihlKXt2YXIgdCxyLG49e307Zm9yKHQ9MCxyPWUua2V5RnJhbWVzLmxlbmd0aDtyPnQ7dCsrKXR0KGUua2V5RnJhbWVzW3RdLG4pO2ZvcihuPXt9LHQ9ZS5rZXlGcmFtZXMubGVuZ3RoLTE7dD49MDt0LS0pdHQoZS5rZXlGcmFtZXNbdF0sbil9LHR0PWZ1bmN0aW9uKGUsdCl7dmFyIHI7Zm9yKHIgaW4gdClsLmNhbGwoZS5wcm9wcyxyKXx8KGUucHJvcHNbcl09dFtyXSk7Zm9yKHIgaW4gZS5wcm9wcyl0W3JdPWUucHJvcHNbcl19LHJ0PWZ1bmN0aW9uKGUsdCxyKXt2YXIgbixvPWUubGVuZ3RoO2lmKG8hPT10Lmxlbmd0aCl0aHJvd1wiQ2FuJ3QgaW50ZXJwb2xhdGUgYmV0d2VlbiBcXFwiXCIrZVswXSsnXCIgYW5kIFwiJyt0WzBdKydcIic7dmFyIGE9W2VbMF1dO2ZvcihuPTE7bz5uO24rKylhW25dPWVbbl0rKHRbbl0tZVtuXSkqcjtyZXR1cm4gYX0sbnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9MTtyZXR1cm4gTS5sYXN0SW5kZXg9MCxlWzBdLnJlcGxhY2UoTSxmdW5jdGlvbigpe3JldHVybiBlW3QrK119KX0sb3Q9ZnVuY3Rpb24oZSx0KXtlPVtdLmNvbmNhdChlKTtmb3IodmFyIHIsbixvPTAsYT1lLmxlbmd0aDthPm87bysrKW49ZVtvXSxyPWx0W25bSF1dLHImJih0PyhuLnN0eWxlLmNzc1RleHQ9ci5kaXJ0eVN0eWxlQXR0cixEdChuLHIuZGlydHlDbGFzc0F0dHIpKTooci5kaXJ0eVN0eWxlQXR0cj1uLnN0eWxlLmNzc1RleHQsci5kaXJ0eUNsYXNzQXR0cj1DdChuKSxuLnN0eWxlLmNzc1RleHQ9ci5zdHlsZUF0dHIsRHQobixyLmNsYXNzQXR0cikpKX0sYXQ9ZnVuY3Rpb24oKXtUdD1cInRyYW5zbGF0ZVooMClcIixpLnNldFN0eWxlKHN0LFwidHJhbnNmb3JtXCIsVHQpO3ZhciBlPWMoc3QpLHQ9ZS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpLHI9ZS5nZXRQcm9wZXJ0eVZhbHVlKEcrXCJ0cmFuc2Zvcm1cIiksbj10JiZcIm5vbmVcIiE9PXR8fHImJlwibm9uZVwiIT09cjtufHwoVHQ9XCJcIil9O2kuc2V0U3R5bGU9ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUuc3R5bGU7aWYodD10LnJlcGxhY2UoeixxKS5yZXBsYWNlKFwiLVwiLFwiXCIpLFwiekluZGV4XCI9PT10KW5bdF09aXNOYU4ocik/cjpcIlwiKygwfHIpO2Vsc2UgaWYoXCJmbG9hdFwiPT09dCluLnN0eWxlRmxvYXQ9bi5jc3NGbG9hdD1yO2Vsc2UgdHJ5e0ImJihuW0IrdC5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV09ciksblt0XT1yfWNhdGNoKG8pe319O3ZhciBpdCxsdCxzdCxjdCxmdCx1dCxtdCxwdCxkdCxndCx2dCxodCx5dCxUdCxidCxTdD1pLmFkZEV2ZW50PWZ1bmN0aW9uKHQscixuKXt2YXIgbz1mdW5jdGlvbih0KXtyZXR1cm4gdD10fHxlLmV2ZW50LHQudGFyZ2V0fHwodC50YXJnZXQ9dC5zcmNFbGVtZW50KSx0LnByZXZlbnREZWZhdWx0fHwodC5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe3QucmV0dXJuVmFsdWU9ITEsdC5kZWZhdWx0UHJldmVudGVkPSEwfSksbi5jYWxsKHRoaXMsdCl9O3I9ci5zcGxpdChcIiBcIik7Zm9yKHZhciBhLGk9MCxsPXIubGVuZ3RoO2w+aTtpKyspYT1yW2ldLHQuYWRkRXZlbnRMaXN0ZW5lcj90LmFkZEV2ZW50TGlzdGVuZXIoYSxuLCExKTp0LmF0dGFjaEV2ZW50KFwib25cIithLG8pLFl0LnB1c2goe2VsZW1lbnQ6dCxuYW1lOmEsbGlzdGVuZXI6bn0pfSxrdD1pLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGUsdCxyKXt0PXQuc3BsaXQoXCIgXCIpO2Zvcih2YXIgbj0wLG89dC5sZW5ndGg7bz5uO24rKyllLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZS5yZW1vdmVFdmVudExpc3RlbmVyKHRbbl0sciwhMSk6ZS5kZXRhY2hFdmVudChcIm9uXCIrdFtuXSxyKX0sd3Q9ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wLHI9WXQubGVuZ3RoO3I+dDt0KyspZT1ZdFt0XSxrdChlLmVsZW1lbnQsZS5uYW1lLGUubGlzdGVuZXIpO1l0PVtdfSx4dD1mdW5jdGlvbihlLHQscil7Y3Qua2V5ZnJhbWUmJmN0LmtleWZyYW1lLmNhbGwoaXQsZSx0LHIpfSxFdD1mdW5jdGlvbigpe3ZhciBlPWl0LmdldFNjcm9sbFRvcCgpO090PTAsZnQmJiFHdCYmKGEuc3R5bGUuaGVpZ2h0PVwiXCIpLGooKSxmdCYmIUd0JiYoYS5zdHlsZS5oZWlnaHQ9T3Qrby5jbGllbnRIZWlnaHQrXCJweFwiKSxHdD9pdC5zZXRTY3JvbGxUb3Aocy5taW4oaXQuZ2V0U2Nyb2xsVG9wKCksT3QpKTppdC5zZXRTY3JvbGxUb3AoZSwhMCksaHQ9ITB9LEF0PWZ1bmN0aW9uKCl7dmFyIGUsdCxyPW8uY2xpZW50SGVpZ2h0LG49e307Zm9yKGUgaW4gdXQpdD11dFtlXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q9dC5jYWxsKGl0KTovcCQvLnRlc3QodCkmJih0PXQuc2xpY2UoMCwtMSkvMTAwKnIpLG5bZV09dDtyZXR1cm4gbn0sRnQ9ZnVuY3Rpb24oKXt2YXIgZT1zdCYmc3Qub2Zmc2V0SGVpZ2h0fHwwLHQ9cy5tYXgoZSxhLnNjcm9sbEhlaWdodCxhLm9mZnNldEhlaWdodCxvLnNjcm9sbEhlaWdodCxvLm9mZnNldEhlaWdodCxvLmNsaWVudEhlaWdodCk7cmV0dXJuIHQtby5jbGllbnRIZWlnaHR9LEN0PWZ1bmN0aW9uKHQpe3ZhciByPVwiY2xhc3NOYW1lXCI7cmV0dXJuIGUuU1ZHRWxlbWVudCYmdCBpbnN0YW5jZW9mIGUuU1ZHRWxlbWVudCYmKHQ9dFtyXSxyPVwiYmFzZVZhbFwiKSx0W3JdfSxEdD1mdW5jdGlvbih0LG4sbyl7dmFyIGE9XCJjbGFzc05hbWVcIjtpZihlLlNWR0VsZW1lbnQmJnQgaW5zdGFuY2VvZiBlLlNWR0VsZW1lbnQmJih0PXRbYV0sYT1cImJhc2VWYWxcIiksbz09PXIpcmV0dXJuIHRbYV09bixyO2Zvcih2YXIgaT10W2FdLGw9MCxzPW8ubGVuZ3RoO3M+bDtsKyspaT1JdChpKS5yZXBsYWNlKEl0KG9bbF0pLFwiIFwiKTtpPUh0KGkpO2Zvcih2YXIgYz0wLGY9bi5sZW5ndGg7Zj5jO2MrKyktMT09PUl0KGkpLmluZGV4T2YoSXQobltjXSkpJiYoaSs9XCIgXCIrbltjXSk7dFthXT1IdChpKX0sSHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShQLFwiXCIpfSxJdD1mdW5jdGlvbihlKXtyZXR1cm5cIiBcIitlK1wiIFwifSxQdD1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9LE50PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZnJhbWUtdC5mcmFtZX0sT3Q9MCxWdD0xLHp0PVwiZG93blwiLHF0PS0xLEx0PVB0KCksTXQ9MCwkdD0wLF90PSExLEJ0PTAsR3Q9ITEsS3Q9MCxZdD1bXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwic2tyb2xsclwiLGZ1bmN0aW9uKCl7cmV0dXJuIGl9KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1pOmUuc2tyb2xscj1pfSkod2luZG93LGRvY3VtZW50KTsiLCIvKipcclxuICAqIDIwMTYtMjAxNyAoQykgQW50b25pbyBSZWRvbmRvIC8gYW50b25pb3JlZG9uZG8uY29tXHJcbiAgKlxyXG4gICogRE9NVG9vbHMgaXMgYSBuYW5vLWxpYnJhcnkgd2hpY2ggY29udGFpbnMgYSBidW5jaCBvZiBmdW5jdGlvbnMgdG8gZGVhbCB3aXRoIGJhc2ljXHJcbiAgKiBuZWVkcyBhbmQgcHJvYmxlbXMgZmFjZWQgb24gZnJvbnQtZW5kIHdlYiBhcHBsaWNhdGlvbnMuXHJcbiAgKlxyXG4gICogSXQncyBpbXBsZW1lbnRlZCBvbiBFUzUgSmF2YVNjcmlwdCBhcyB0aGUgJ2QnIG9iamVjdCBvbiB0aGUgZ2xvYmFsIG5hbWVzcGFjZS5cclxuICAqXHJcbiAgKiBJdCBjb250YWlucyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uYWxpdHk6XHJcbiAgKiAtIFNvcnRlciBuYW1lIGZ1bmN0aW9ucyB3cmFwcGluZyBxdWVyaW5nLCBldmVudHMgYW5kIHRpbWVvdXRzIGZ1bmN0aW9ucy5cclxuICAqIC0gR2VuZXJhdGlvbiBvZiByYW5kb20gaW50ZWdlcnMuXHJcbiAgKiAtIEFkZGluZywgcmV0cmlldmluZyBhbmQgcmVtb3ZpbmcgY29va2llcy5cclxuICAqIC0gQ2hlY2tpbmcgb2YgQ1NTIHRyYW5zZm9ybXMgc3VwcG9ydC5cclxuICAqIC0gQ2hlY2tpbmcgb2YgT1MuXHJcbiAgKiAtIENhbGN1bGF0aW9uIG9mIGVsZW1lbnQgaGVpZ2h0cyBhbmQgcG9zaXRpb25zLlxyXG4gICogLSBMb2FkaW5nIG9mIGltYWdlcyBhbmQgZXhlY3V0aW5nIGEgY2FsbGJhY2sgb25jZSB0aGV5J3JlIGxvYWRlZC5cclxuICAqXHJcbiAgKi9cclxuXHJcbihmdW5jdGlvbihkKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0XHJcblx0ZC5naSA9IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdH07XHJcblx0XHJcblx0ZC5nYyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcclxuXHR9O1xyXG5cdFxyXG5cdGQuZ2NhID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XHJcblx0XHRyZXR1cm4gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSkpO1xyXG5cdH07XHJcblx0XHJcblx0ZC5xcyA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcblx0fTtcclxuXHRcclxuXHRkLnFzYSA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XHJcblx0XHRyZXR1cm4gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcblx0fTtcclxuXHRcclxuXHRkLmFlID0gZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxuXHR9O1xyXG5cdFxyXG5cdGQuc3QgPSBmdW5jdGlvbihjYWxsYmFjaywgdGltZSkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCB0aW1lKTtcclxuXHR9O1xyXG5cdFxyXG5cdGQuc2kgPSBmdW5jdGlvbihjYWxsYmFjaywgdGltZSkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5zZXRJbnRlcnZhbChjYWxsYmFjaywgdGltZSk7XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHQvKipcclxuXHQgICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiBhIHJhbmdlLlxyXG5cdCAgKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIGxvd2VyIGxpbWl0IG9mIHRoZSByYW5nZS4gSXQgZGVmYXVsdHMgdG8gLTUwLlxyXG5cdCAgKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIGhpZ2hlciBsaW1pdCBvZiB0aGUgcmFuZ2UuIEl0IGRlZmF1bHRzIHRvIDUwLlxyXG5cdCAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFRoZSBnZW5lcmF0ZWQgcmFtZG9uIGludGVnZXIgd2l0aGluIHRoZSByYW5nZS5cclxuXHQgICovXHJcblx0ZC5nZXRSYW5kb21JbnQgPSBmdW5jdGlvbihtaW4sIG1heCkge1xyXG5cdFx0bWluID0gbWluIHx8IC01MDtcclxuXHRcdG1heCA9IG1heCB8fCA1MDtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0LyoqXHJcblx0ICAqIFJldHVybnMgdGhlIHN1bSBvZiBjbGllbnRIZWlnaHRzIG9mIGFsbCB0aGUgZWxlbWVudHMgc2VsZWN0ZWQgYnkgdGhlIENTUyBxdWVyeSBwcm92aWRlZC5cclxuXHQgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycyAtIENTUyBxdWVyeS5cclxuXHQgICogQHJldHVybnMge251bWJlcn0gLSBUaGUgc3VtIG9mIGFsbCBjbGllbnRIZWlnaHRzLiAwIGlmIG5vIGVsZW1lbnRzIHNlbGVjdGVkLlxyXG5cdCAgKi9cclxuXHRkLmNhbGNDbGllbnRIZWlnaHRzU3VtID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcclxuXHRcdHZhciB0b3RhbCA9IDA7XHJcblx0XHR2YXIgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGQucXNhKHNlbGVjdG9yKSk7XHJcblx0XHRcclxuXHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHR0b3RhbCArPSBpdGVtLmNsaWVudEhlaWdodDtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdG90YWw7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQgICogUmV0dXJucyBhbiBBcnJheSB3aXRoIERPTVJlY3RzIG9mIGFsbCB0aGUgZWxlbWVudHMgc2VsZWN0ZWQgYnkgdGhlIENTUyBxdWVyeSBwcm92aWRlZC5cclxuXHQgICogVGhlIGJvcmRlci1ib3ggY29vcmRpbmF0ZXMnIG9yaWdpbiBpcyByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnQuXHJcblx0ICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMgLSBDU1MgcXVlcnkuXHJcblx0ICAqIEByZXR1cm5zIHtBcnJheX0gLSBBbiBhcnJheSB3aXRoIERPTVJlY3RzLiB1bmRlZmluZWQgaWYgbm8gZWxlbWVudHMgc2VsZWN0ZWQuXHJcblx0ICAqL1xyXG5cdGQuY2FsY1Bvc2l0aW9uc1RvVmlld3BvcnQgPSBmdW5jdGlvbihzZWxlY3RvcnMpIHtcclxuXHRcdHZhciBwb3NpdGlvbnMgPSBbXTtcclxuXHRcdHZhciBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZC5xc2Eoc2VsZWN0b3JzKSk7XHJcblxyXG5cdFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRwb3NpdGlvbnMucHVzaChpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBwb3NpdGlvbnM7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQgICogUmV0dXJucyBhbiBPYmplY3Qgd2l0aCBsZWZ0LCB0b3AsIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllcyBvZiB0aGUgY2hpbGRcclxuXHQgICogZWxlbWVudCBib3JkZXItYm94IHBvc2l0aW9uIHJlbGF0aXZlIHRvIGEgcGFyZW50IGVsZW1lbnQgc3BlY2lmaWVkIGJ5IHBhcmVudFNlbGVjdG9yLlxyXG5cdCAgKiBUaGUgcGFyZW50IGFuZCB0aGUgY2hpbGQgZG9uJ3QgbmVlZCB0byBiZSBkaXJlY3RseSBuZXN0ZWQgb24gdGhlIGVsZW1lbnRzJyBoaWVyYXJjaHkuXHJcblx0ICAqIElmIGEgQ1NTIHNlbGVjdG9yIHN0cmluZyBpcyBwcm92aWRlZCBhbmQgaXQgc2VsZWN0cyBtb3JlIHRoYW4gb25lIGVsZW1lbnRcclxuXHQgICogb25seSB0aGUgZmlyc3QgZWxlbWVudCB3aWxsIGJlIHVzZWQuXHJcblx0ICAqIEBwYXJhbSB7c3RyaW5nfEhUTUxFbGVtZW50fSBwYXJlbnRTZWxlY3RvciAtIENTUyBzZWxlY3RvciBzdHJpbmcgb3IgSFRNTEVsZW1lbnQgZm9yIGEgcmVmZXJlbmNlIHBhcmVudC5cclxuXHQgICogQHBhcmFtIHtzdHJpbmd8SFRNTEVsZW1lbnR9IGNoaWxkU2VsZWN0b3IgLSBDU1Mgc2VsZWN0b3Igc3RyaW5nIG9yIEhUTUxFbGVtZW50IGZvciB0aGUgY2hpbGQuXHJcblx0ICAqIEByZXR1cm5zIHtPYmplY3R9IC0gQW4gT2JqZWN0IHdpdGggbGVmdCwgdG9wLCB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXMuXHJcblx0Ki9cclxuXHRkLmNhbGNSZWxhdGl2ZVBvc2l0aW9uID0gZnVuY3Rpb24ocGFyZW50LCBjaGlsZCkge1xyXG5cdFx0aWYgKHR5cGVvZiBwYXJlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHBhcmVudCA9IGQucXMocGFyZW50KTtcclxuXHRcdGlmICh0eXBlb2YgY2hpbGQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdGNoaWxkID0gZC5xcyhjaGlsZCk7XHJcblxyXG5cdFx0aWYgKCghcGFyZW50IHx8ICFjaGlsZClcclxuXHRcdFx0XHQmJiAoIShwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIShjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlRoZSBwYXJlbnQgb3IgY2hpbGQgd2VyZSB1bmRlZmluZWQgb3IgdGhleSB3ZXJlblxcJ3QgSFRNTEVsZW1lbnRzXCIpOy8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHR2YXIgY2hpbGRSZWN0ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0dmFyIG9mZnNldCA9IHtcclxuXHRcdFx0bGVmdDogbnVsbCxcclxuXHRcdFx0dG9wOiBudWxsLFxyXG5cdFx0XHR3aWR0aDogbnVsbCxcclxuXHRcdFx0aGVpZ2h0OiBudWxsXHJcblx0XHR9O1xyXG5cclxuXHRcdG9mZnNldC5sZWZ0ID0gY2hpbGRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQ7XHJcblx0XHRvZmZzZXQudG9wID0gY2hpbGRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wO1xyXG5cdFx0b2Zmc2V0LndpZHRoID0gY2hpbGQub2Zmc2V0V2lkdGg7XHJcblx0XHRvZmZzZXQuaGVpZ2h0ID0gY2hpbGQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuXHRcdHJldHVybiBvZmZzZXQ7XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHR2YXIgZWxlbWVudHNUb0xvYWQgPSBbXTtcclxuXHR2YXJcdGNhbGxiYWNrcyA9IFtdO1xyXG5cdFx0XHJcblx0dmFyIHJ1bkNhbGxiYWNrcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGFsbExvYWRlZCA9IGVsZW1lbnRzVG9Mb2FkLmV2ZXJ5KGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0cmV0dXJuIGkubG9hZGVkO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGlmIChhbGxMb2FkZWQpIHtcclxuXHRcdFx0Y2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGkoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRkLm5vdGlmeVdoZW5Mb2FkZWQgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0dmFyIGVsZW1lbnRUb0xvYWQgPSB7XHJcblx0XHRcdHNlbGVjdG9yOiBzZWxlY3RvcixcclxuXHRcdFx0bG9hZGVkOiBmYWxzZSxcclxuXHRcdFx0Z2V0IHNldEFzTG9hZGVkKCkge1xyXG5cdFx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRydW5DYWxsYmFja3MoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBDaHJvbWUgNTMgd29ya3MuIEZpcmVmb3ggNDkgYW5kIEVkZ2UgMTQgZG9uJ3RcclxuXHRcdFx0Ly9zZXRBc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vXHRlbGVtZW50VG9Mb2FkLmxvYWRlZCA9IHRydWU7XHJcblx0XHRcdC8vXHRydW5DYWxsYmFja3MoKTtcclxuXHRcdFx0Ly9cdGNvbnNvbGUubG9nKFwiYmJiXCIpO1xyXG5cdFx0XHQvL31cclxuXHRcdFx0Ly8gRG9lc24ndCB3b3JrIG9uIGJyb3dzZXJzXHJcblx0XHRcdC8vc2V0QXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvL1x0dGhpcy5sb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHQvL1x0cnVuQ2FsbGJhY2tzKCk7XHJcblx0XHRcdC8vXHRjb25zb2xlLmxvZyhcImNjY1wiKTtcclxuXHRcdFx0Ly99XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHR2YXIgZWxlbWVudCA9IGQucXMoc2VsZWN0b3IpO1xyXG5cdFx0aWYgKGVsZW1lbnQpIHtcclxuXHRcdFx0ZWxlbWVudHNUb0xvYWQucHVzaChlbGVtZW50VG9Mb2FkKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3Nzg3MS9jaGVjay1pZi1hbi1pbWFnZS1pcy1sb2FkZWQtbm8tZXJyb3JzLWluLWphdmFzY3JpcHRcclxuXHRcdFx0aWYgKGVsZW1lbnQuY29tcGxldGUgJiYgZWxlbWVudC5uYXR1cmFsSGVpZ2h0ICE9PSAwKSB7XHJcblx0XHRcdFx0ZWxlbWVudFRvTG9hZC5zZXRBc0xvYWRlZDtcclxuXHRcdFx0fSBlbHNlIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZWxlbWVudFRvTG9hZC5zZXRBc0xvYWRlZCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBlbGVtZW50O1xyXG5cdH07XHJcblx0XHJcblx0ZC5ydW5XaGVuQWxsTG9hZGVkID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuXHRcdHJ1bkNhbGxiYWNrcygpO1xyXG5cdH07XHJcblx0XHJcblx0ZC5yZXNldEVsZW1lbnRzVG9Mb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRlbGVtZW50c1RvTG9hZCA9IFtdO1xyXG5cdFx0Y2FsbGJhY2tzID0gW107XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRkLmNoZWNrVHJhbnNmb3Jtc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIFwidHJhbnNmb3JtXCI7XHJcblx0XHRlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBcIndlYmtpdFRyYW5zZm9ybVwiO1xyXG5cdH07XHJcblx0XHJcblx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTIxOTU4Mi9ob3ctdG8tZGV0ZWN0LW15LWJyb3dzZXItdmVyc2lvbi1hbmQtb3BlcmF0aW5nLXN5c3RlbS11c2luZy1qYXZhc2NyaXB0XHJcblx0ZC5nZXRPUyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIG9zO1xyXG5cdFx0dmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblx0XHRcclxuXHRcdGlmICh1YS5pbmRleE9mKFwiV2luXCIpICE9IC0xKVx0XHRvcyA9IFwiV2luZG93c1wiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJNYWNcIikgIT0gLTEpXHRcdG9zID0gXCJtYWNPU1wiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJMaW51eFwiKSAhPSAtMSlcdFx0b3MgPSBcIkxpbnV4XCI7XHJcblx0XHRpZiAodWEuaW5kZXhPZihcIkFuZHJvaWRcIikgIT0gLTEpXHRvcyA9IFwiQW5kcm9pZFwiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJsaWtlIE1hY1wiKSAhPSAtMSlcdG9zID0gXCJpT1NcIjtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIG9zO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0LyoqXHJcblx0KiBHZXRzIGEgY29va2llIGJ5IG5hbWUuXHJcblx0KiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5hbWUgb2YgdGhlIGNvb2tpZS5cclxuXHQqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIHZhbHVlIG9mIHRoZSBjb29raWUuIG51bGwgaXMgbm8gY29va2llIHdhcyBmb3VuZCB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG5cdCovXHJcblx0ZC5nZXRDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR2YXIgbmFtZVdpdGhFcXVhbCA9IG5hbWUgKyBcIj1cIjtcclxuXHRcdHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcblx0XHRcclxuXHRcdGZvciAodmFyIGk9MDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBjID0gY2FbaV07XHJcblx0XHRcdFxyXG5cdFx0XHR3aGlsZSAoYy5jaGFyQXQoMCkgPT0gXCIgXCIpXHJcblx0XHRcdFx0YyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRpZiAoYy5pbmRleE9mKG5hbWVXaXRoRXF1YWwpID09PSAwKVxyXG5cdFx0XHRcdHJldHVybiBjLnN1YnN0cmluZyhuYW1lV2l0aEVxdWFsLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQqIFNldHMgYSBjb29raWUgYnkgbmFtZS5cclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gTmFtZSBvZiB0aGUgY29va2llLlxyXG5cdCogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVmFsdWUgZm9yIHRoZSBjb29raWUuXHJcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF5cyAtIEV4cGlyYXRpb24gdGltZSBpbiBkYXlzLlxyXG5cdCogQHJldHVybnMge3VuZGVmaW5lZH0gLSBBbHdheXMgdW5kZWZpbmVkXHJcblx0Ki9cclxuXHRkLnNldENvb2tpZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcblx0XHR2YXIgZXhwaXJlcztcclxuXHRcdFxyXG5cdFx0aWYgKGRheXMpIHtcclxuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xyXG5cdFx0XHRleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvR01UU3RyaW5nKCk7XHJcblx0XHR9IGVsc2UgZXhwaXJlcyA9IFwiXCI7XHJcblx0XHRcclxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxuXHR9O1xyXG5cdFxyXG5cdC8qKlxyXG5cdCogUmVtb3ZlcyBhIGNvb2tpZSBieSBuYW1lLlxyXG5cdCogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBjb29raWUgdG8gcmVtb3ZlLlxyXG5cdCogQHJldHVybnMge3VuZGVmaW5lZH0gLSBBbHdheXMgdW5kZWZpbmVkLlxyXG5cdCovXHJcblx0ZC5yZW1vdmVDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR0aGlzLnNldENvb2tpZShuYW1lLCBcIlwiLCAtMSk7XHJcblx0fTtcclxuXHRcclxufSh3aW5kb3cuZCA9IHdpbmRvdy5kIHx8IHt9KSk7XHJcbiIsImZ1bmN0aW9uIHNldE1hcmdpbihicmVha3BvaW50TW9iaWxlKSB7XHJcblx0dmFyIG1hcmdpbiA9IDI1MDtcclxuXHRpZiAod2luZG93LmlubmVyV2lkdGggPCBicmVha3BvaW50TW9iaWxlKVxyXG5cdFx0bWFyZ2luID0gODA7XHJcblx0cmV0dXJuIG1hcmdpbjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEJvZHlIZWlnaHQoaGVpZ2h0KSB7XHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcblx0dmFyIGJyZWFrcG9pbnRNb2JpbGUgPSA4MTA7XHJcblx0dmFyIG1hcmdpbiA9IHNldE1hcmdpbihicmVha3BvaW50TW9iaWxlKTtcclxuXHR2YXIgZ2FwID0gLW1hcmdpbjtcclxuXHRcclxuXHRzZXRCb2R5SGVpZ2h0KGQuY2FsY0NsaWVudEhlaWdodHNTdW0oXCJzZWN0aW9uLnNrcm9sbHItZGVja1wiKSArIG1hcmdpbiozKTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBTZXRzIHVwIFNrcm9sbGVyXHJcblx0dmFyIG9mZnNldEZ1bmN0aW9ucyA9IHtcclxuXHRcdGdldCBkMCgpIHsgcmV0dXJuIGQuZ2koXCJpbnRyb1wiKS5jbGllbnRIZWlnaHQgKyBtYXJnaW47IH0sXHJcblx0XHRnZXQgZDBnKCkgeyByZXR1cm4gZ2FwICsgdGhpcy5kMDsgfSxcclxuXHRcdGdldCBkMSgpIHsgcmV0dXJuIGQuZ2koXCJib2R5XCIpLmNsaWVudEhlaWdodCArIG1hcmdpbiArIHRoaXMuZDA7IH0sXHJcblx0XHRnZXQgZDFnKCkgeyByZXR1cm4gZ2FwICsgdGhpcy5kMTsgfSxcclxuXHRcdGdldCBkMigpIHsgcmV0dXJuIGQuZ2koXCJ3aGF0cy1pbmNsdWRlZFwiKS5jbGllbnRIZWlnaHQgKyBtYXJnaW4gKyB0aGlzLmQxOyB9LFxyXG5cdFx0Z2V0IGQyZygpIHsgcmV0dXJuIGdhcCArIHRoaXMuZDI7IH1cclxuXHR9O1xyXG5cdFxyXG5cdHNrcm9sbHIuaW5pdCh7XHJcblx0XHRzbW9vdGhTY3JvbGxpbmc6IGZhbHNlLFxyXG5cdFx0Zm9yY2VIZWlnaHQ6IGZhbHNlLFxyXG5cdFx0Y29uc3RhbnRzOiBvZmZzZXRGdW5jdGlvbnMsXHJcblx0XHRtb2JpbGVDaGVjazogZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSxcclxuXHRcdC8vIGtleWZyYW1lOiBmdW5jdGlvbihlbGVtZW50LCBuYW1lLCBkaXJlY3Rpb24pIHtcclxuXHRcdC8vIFx0Ly8gY29uc29sZS5sb2coXCJrZXlmcmFtZTpcIik7XHJcblx0XHQvLyBcdC8vIGNvbnNvbGUubG9nKG5hbWUpO1xyXG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhuYW1lLnNsaWNlKDYpKTtcclxuXHRcdC8vIFx0dmFyIGV4dHJhID0gMDtcclxuXHRcdC8vIFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKVxyXG5cdFx0Ly8gXHRcdC0tZXh0cmE7XHJcblx0XHQvLyBcdHN3aXRjaCAobmFtZS5zbGljZSg2KSkge1xyXG5cdFx0Ly8gXHRcdGNhc2UgXCIwZ1wiOiBtb3ZlTGluZSgxICsgZXh0cmEpOyBicmVhaztcclxuXHRcdC8vIFx0XHRjYXNlIFwiMWdcIjogbW92ZUxpbmUoMiArIGV4dHJhKTsgYnJlYWs7XHJcblx0XHQvLyBcdFx0Y2FzZSBcIjJnXCI6IG1vdmVMaW5lKDMgKyBleHRyYSk7XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIH1cclxuXHR9KTtcclxuXHRcclxuXHQvLyBTZXRzIHVwIFNrcm9sbGVyIE1lbnVcclxuXHQvLyBza3JvbGxyLm1lbnUuaW5pdChza3JvbGxySW5zdGFuY2UsIHtcclxuXHQvLyBcdGFuaW1hdGU6IHRydWUsXHJcblx0Ly8gXHRlYXNpbmc6IFwib3V0Q3ViaWNcIixcclxuXHQvLyBcdGR1cmF0aW9uOiA1MDAsXHJcblx0Ly8gXHRoYW5kbGVMaW5rOiBmdW5jdGlvbihsaW5rKSB7XHJcblx0Ly8gXHRcdHZhciBleHRyYSA9IDE7XHJcblx0Ly8gXHRcdHZhciBsaW5rVGV4dCA9IGxpbmsuaHJlZi5zcGxpdChcIiNcIikucG9wKCk7XHJcblx0Ly9cclxuXHQvLyBcdFx0dHJ5IHsgLy8gVG8gcHJldmVudCBTWU5UQVhfRVJSIGV4Y2VwdGlvblxyXG5cdC8vIFx0XHRcdGlmIChkLnFzKFwiI1wiICsgbGlua1RleHQpID09PSBudWxsKVxyXG5cdC8vIFx0XHRcdFx0dGhyb3cgRXJyb3I7XHJcblx0Ly8gXHRcdH0gY2F0Y2goZSkge1xyXG5cdC8vIFx0XHRcdGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xyXG5cdC8vIFx0XHRcdHJldHVybiAwO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly9cclxuXHQvLyBcdFx0c3dpdGNoIChsaW5rVGV4dCkge1xyXG5cdC8vIFx0XHRcdGNhc2UgXCJpbnRyb1wiOlx0XHRyZXR1cm4gMDtcclxuXHQvLyBcdFx0XHRjYXNlIFwid2hvLXdlLWFyZVwiOlx0cmV0dXJuIG9mZnNldEZ1bmN0aW9ucy5kMCArIGV4dHJhO1xyXG5cdC8vIFx0XHRcdGNhc2UgXCJjb250YWN0XCI6XHRcdHJldHVybiBvZmZzZXRGdW5jdGlvbnMuZDEgKyBleHRyYTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vXHJcblx0Ly8gXHRcdHJldHVybiAwO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH0pO1xyXG5cdFxyXG5cdGQuYWUoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRtYXJnaW4gPSBzZXRNYXJnaW4oYnJlYWtwb2ludE1vYmlsZSk7XHJcblx0XHRzZXRCb2R5SGVpZ2h0KGQuY2FsY0NsaWVudEhlaWdodHNTdW0oXCJzZWN0aW9uLnNrcm9sbHItZGVja1wiKSArIG1hcmdpbiozKTtcclxuXHR9KTtcclxuXHRcclxuXHRkLmFlKFwibG9hZFwiLCBmdW5jdGlvbigpIHsgLy8gVGhlcmUgYXJlIGltYWdlcyB0aGF0IGhhdmVuJ3QgaGVpZ2h0IHNwZWNpZmllZCBhbmQgaXQncyBvbmx5IGtub3duIG9uY2UgdGhlIGltYWdlIGlzIGxvYWRlZC4gVGhleSBhZmZlY3QgdGhlIGhlaWdodCBvZiB0aGUgcGFnZS5cclxuXHRcdG1hcmdpbiA9IHNldE1hcmdpbihicmVha3BvaW50TW9iaWxlKTtcclxuXHRcdHNldEJvZHlIZWlnaHQoZC5jYWxjQ2xpZW50SGVpZ2h0c1N1bShcInNlY3Rpb24uc2tyb2xsci1kZWNrXCIpICsgbWFyZ2luKjMpO1xyXG5cdFx0Ly8gZC5zdChmdW5jdGlvbigpIHsgbW92ZUxpbmUoKTsgfSwgNTAwKTtcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvc2VuZGluZy1oaXRzXHJcblx0Ly8gZC5xcyhcImEudG9wLWJhcl9fdGFiW2hyZWY9JyNpbnRybyddXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgZ2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJUb3AgYmFyIGxpbmtcIiwgXCJjbGlja1wiLCBcImludHJvXCIpOyB9KTtcclxuXHQvLyBkLnFzKFwiYS50b3AtYmFyX190YWJbaHJlZj0nI3doby13ZS1hcmUnXVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwiVG9wIGJhciBsaW5rXCIsIFwiY2xpY2tcIiwgXCJ3aG8td2UtYXJlXCIpOyB9KTtcclxuXHQvLyBkLnFzKFwiYS50b3AtYmFyX190YWJbaHJlZj0nI2NvbnRhY3QnXVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwiVG9wIGJhciBsaW5rXCIsIFwiY2xpY2tcIiwgXCJjb250YWN0XCIpOyB9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRkLmdjKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiYm9keS0taW5cIik7XHJcbn1cclxuIiwiZC5ub3RpZnlXaGVuTG9hZGVkKFwiLmludHJvX19sb2dvXCIpO1xyXG5kLm5vdGlmeVdoZW5Mb2FkZWQoXCIuaW50cm9fX3N1YnRleHRcIik7XHJcbmQucnVuV2hlbkFsbExvYWRlZChpbml0KTtcclxuIl19
