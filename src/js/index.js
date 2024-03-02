function isMobile() {
	return window.innerWidth < 810;
}


function getGap() {
	return isMobile() ? 80 : 300;
}


function setBodyHeight() {
	var height = d.calcClientHeightsSum("section.skrollr-deck") + getGap()*5;
	document.body.style.height = height + "px";
}


function showTopBarEntries() {
	var menuEntries = d.qsa(".top-bar__tab-container");
	menuEntries.forEach(function(entry, index) {
		entry.classList.add("top-bar__tab-container--in", "top-bar__tab-container--in" + (index + 1));
	});
}


function init() { // eslint-disable-line no-unused-vars
	d.st(function() { showTopBarEntries(); }, 2500);
	setBodyHeight();
	
	d.ae("resize", function() {
		setBodyHeight();
	});
	
	d.ae("load", function() {
		setBodyHeight();
	});
	
	// Sets up Skroller
	var gap = getGap();

	var offsetFunctions = {
		get d0() { return d.gi("intro").clientHeight; },
		get d0g() { return this.d0 + gap; },
		get d1() { return d.gi("introduction").clientHeight + this.d0g; },
		get d1g() { return this.d1 + gap; },
		get d2() { return d.gi("programme").clientHeight + this.d1g; },
		get d2g() { return this.d2 + gap; },
		get d3() { return d.gi("locations").clientHeight + this.d2g; },
		get d3g() { return this.d3 + gap; },
		get d4() { return d.gi("get-ready").clientHeight + this.d3g; },
		get d4g() { return this.d4 + gap; },
		get d5() { return d.gi("organisers").clientHeight + this.d4g; }
	};

	var skrollrInstance = skrollr.init({
		smoothScrolling: false,
		forceHeight: false,
		constants: offsetFunctions,
		mobileCheck: function() { return false; },
		// keyframe: function(element, name, direction) {
		// var up = direction === "up" ? -1 : 0;
		// switch (name.slice(6)) {
		// 	case "0": moveLine(1 + up); break;
		// 	case "1": moveLine(2 + up); break;
		// 	case "2": moveLine(3 + up); break;
		// 	case "3": moveLine(4 + up); break;
		// 	case "4": moveLine(5 + up); break;
		// 	case "5": moveLine(6 + up); break;
		// }
		// }
	});
	
	// Sets up Skroller Menu
	skrollr.menu.init(skrollrInstance, {
		animate: true,
		easing: "outCubic",
		duration: 800,
		handleLink: function(link) {
			var extraSpace = -100;
			var linkText = link.href.split("#").pop();
			var linkPositionIntroduction = d.calcRelativePosition("#introduction", "#" + linkText);
			var linkPositionLocations = d.calcRelativePosition("#locations", "#" + linkText);
			var linkPositionGetReady = d.calcRelativePosition("#get-ready", "#" + linkText);
			
			switch (linkText) {
				case "intro":														return 0;
				case "introduction":												return offsetFunctions.d0g;
				case "what-is-aegee":												return offsetFunctions.d0g + linkPositionIntroduction.top + extraSpace;
				case "programme":													return offsetFunctions.d1g;
				case "locations":													return offsetFunctions.d2g;
				case "hostel":
				case "sky-garden":
				case "rest-of-london":												return offsetFunctions.d2g + linkPositionLocations.top + extraSpace;
				case "get-ready":													return offsetFunctions.d3g;
				case "what-to-bring":
				case "what-the-fee-includes":
				case "how-to-reach-london-centre":
				case "useful-information":											return offsetFunctions.d3g + linkPositionGetReady.top + extraSpace;
				case "organisers":													return offsetFunctions.d4g;
			}
			
			window.history.replaceState(null, null, " "); // https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r
			return 0;
		}
	});


	// Adds logic for 'scroll' and 'resize' events
	var scrolled = false,
		distance = offsetFunctions.d0 / 2,
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
		d.st(function() {
			// moveLine();
			setBodyHeight();
			skrollrInstance.refresh();
		}, 300);
		d.gc("top-bar").classList.remove("top-bar--open");
		d.gc("top-bar__three-bars-close-surface").classList.remove("top-bar__three-bars-close-surface--in");
	});

	d.ae("load", function() {
		setBodyHeight();
	});
	
	
	// Adapts the UI to remove intro animations if the URL points to a section
	var hash = window.location.hash;
	if ((hash && hash !== "#intro") || isMobile()) {
		d.gc("top-bar").classList.add("top-bar--in");
		d.st(function() { d.gc("top-bar").classList.remove("top-bar--in-no-delay"); }, 1000);
		showTopBarEntries();
	}
	
	
	// Set ups the navigation top bar for mobile screens
	d.qsa(".top-bar__tab, .top-bar__three-bars, .top-bar__three-bars-close-surface").forEach(function(item) {
		item.addEventListener("click", function() {
			if (isMobile()) {
				d.gc("top-bar").classList.toggle("top-bar--open");
				d.gc("top-bar__three-bars-close-surface").classList.toggle("top-bar__three-bars-close-surface--in");
			}
		});
	});
	
	
	d.gc("body").classList.add("body--in");
}



d.notifyWhenLoaded(".intro__logo");
d.notifyWhenLoaded(".intro__bg-blue");

async function loadFonts() {
	window.document.fonts.onloadingerror = (event) => {
		console.error(event); // eslint-disable-line no-console
		window.location.reload();
	};
	// https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400&family=Roboto+Slab:wght@300&family=Source+Sans+Pro:wght@300;900
	const fonts = await Promise.all([
		(new FontFace("Bebas Neue", "url(https://fonts.gstatic.com/s/bebasneue/v9/JTUSjIg69CK48gW7PXoo9WlhyyTh89Y.woff2)")).load(),
		(new FontFace("Roboto Slab", "url(https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoa4Omb2Rj.woff2)", { weight: "700" })).load(),
		(new FontFace("Source Sans Pro", "url(https://fonts.gstatic.com/s/sourcesanspro/v21/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu3cOWxw.woff2)", { weight: "300" })).load(),
		(new FontFace("Source Sans Pro", "url(https://fonts.gstatic.com/s/sourcesanspro/v21/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwlxdu3cOWxw.woff2)", { weight: "900" })).load()
	]);
	fonts?.forEach(font => window.document.fonts.add(font));
	window.document.fonts.ready.then(() => d.runWhenAllLoaded(init));
}
loadFonts();
