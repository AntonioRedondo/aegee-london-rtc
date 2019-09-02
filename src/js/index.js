d.notifyWhenLoaded(".intro__bga2");
d.notifyWhenLoaded(".intro__logo");
d.notifyWhenLoaded(".intro__subtext");

WebFont.load({
	google: {
		families: ["Roboto Slab:800", "Source Sans Pro:300,900"]
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
	classes: false,
	timeout: 4000
});
