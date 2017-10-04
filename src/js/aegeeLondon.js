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
