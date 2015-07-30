;(function(){
	var isPhantom = window._phantom || window.callPhantom || navigator.userAgent.match(/PhantomJS/);
	var OriginalReporter = mocha._reporter;
	var WebkitReporter = mocha.WebKit;

	mocha.WebKit = function (runner) {
		if (OriginalReporter) {
			OriginalReporter.call(this, runner);
		}

		return WebkitReporter.call(this, runner);
	};

	if (!isPhantom) {
		mocha.reporter(mocha.WebKit);
	}
})();
