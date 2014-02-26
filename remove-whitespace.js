var fs = require('fs');

module.exports = function(file) {
	var data = fs.readFileSync(file, 'utf8');
	data = data.split('\n');

	return data.filter(function(e) {
		return e.length;
	}).join('\n');
};
