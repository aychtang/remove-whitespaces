var test = require('tape');
var removeWhitespace = require('./remove-whitespace');

test('Should split a read file into list of lines, and remove any that are empty', function(t){
	t.plan(1);
	t.equal(removeWhitespace('test.txt'), 'hello\nworld');
});
