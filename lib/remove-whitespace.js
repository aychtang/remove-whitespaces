
module.exports = function(string) {
	string = string.split('\n');
	
	return string.filter(function(e) {
		return e.trim().length;
	}).join('\n');
};
