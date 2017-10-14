d.notifyWhenLoaded(".intro__bga2");
d.notifyWhenLoaded(".intro__logo");
d.notifyWhenLoaded(".intro__subtext");

var fontA = new FontFaceObserver("Gill Sans MT Pro");
var fontB = new FontFaceObserver("Gill Sans MT Pro", { weight: 400 });

Promise.all([fontA.load(null, 5000), fontB.load(null, 5000)])
	.then(function() {
		d.runWhenAllLoaded(init);
	}, function() {
		d.runWhenAllLoaded(init);
	});
