function setMargin(breakpointMobile) {
	return window.innerWidth < breakpointMobile ? 80 : 250;
}





function setBodyHeight() {
	var breakpointMobile = 810;
	var height = d.calcClientHeightsSum("section.skrollr-deck") + setMargin(breakpointMobile)*3;
	document.body.style.height = height + "px";
}





function init() { // eslint-disable-line no-unused-vars
	setBodyHeight();
	
	d.ae("resize", function() {
		setBodyHeight();
	});
	
	d.ae("load", function() {
		setBodyHeight();
	});
	
	
	
	var breakpointMobile = 810;
	var margin = setMargin(breakpointMobile);
	var gap = -margin;
	
	// Sets up Skroller
	var offsetFunctions = {
		get d0() { return d.gi("intro").clientHeight + margin; },
		get d0g() { return gap + this.d0; },
		get d1() { return d.gi("presentation").clientHeight + margin + this.d0; },
		get d1g() { return gap + this.d1; },
		get d2() { return d.gi("whats-included").clientHeight + margin + this.d1; },
		get d2g() { return gap + this.d2; }
	};
	
	var skrollrInstance = skrollr.init({
		smoothScrolling: false,
		forceHeight: false,
		constants: offsetFunctions,
		mobileCheck: function() { return false; }
	});
	
	// Sets up Skroller Menu
	skrollr.menu.init(skrollrInstance, {
		animate: true,
		easing: "outCubic",
		duration: 800,
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
				case "presentation":	return offsetFunctions.d0 + extra;
			}
			
			return 0;
		}
	});
	
	
	
	d.gc("body").classList.add("body--in");
}
