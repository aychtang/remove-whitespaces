
module.exports = function(string) {
	return string.split('\n').filter(function(e) {
		return e.trim().length;
	}).join('\n');
};
