
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
