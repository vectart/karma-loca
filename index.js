var path = require('path');

var createPattern = function(file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var initLoca = function(files) {
	var pattern;
	var lastMochaLibIndex = files.length - 1;
    var locaPath = path.dirname(require.resolve('loca'));

	files.forEach(function (file, i) {
		pattern = file.pattern || '';

		if (~pattern.indexOf('mocha')) {
			lastMochaLibIndex = i;
		}
	});

	lastMochaLibIndex++;
	
    files.splice(lastMochaLibIndex, 0, createPattern(__dirname + '/client.js'));
    files.splice(lastMochaLibIndex, 0, createPattern(locaPath + '/loca.js'));
};


initLoca.$inject = ['config.files'];

module.exports = {
    'framework:loca': ['factory', initLoca]
};
