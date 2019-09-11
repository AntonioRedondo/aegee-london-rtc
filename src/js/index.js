d.notifyWhenLoaded(".intro__logo");
d.notifyWhenLoaded(".intro__bg-blue");

WebFont.load({
	google: {
		families: ["Roboto Slab:700", "Source Sans Pro:300,900"]
	},
	typekit: {
		id: "bebas-neue",
		api: "//use.edgefonts.net"
	},
	active: function() {
		d.runWhenAllLoaded(init);
	},
	inactive: function() {
		window.location.reload();
	},
	// fontinactive: function(familyName, fvd) {
	// 	console.log(familyName);
	// 	console.log(fvd);
	// },
	classes: false,
	timeout: 5000
});
