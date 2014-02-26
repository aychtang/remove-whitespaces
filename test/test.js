var test = require('tape');
var removeWhitespace = require('../lib/remove-whitespace');

test('Should split a read file into list of lines, and remove any that are empty', function(t){
	t.plan(1);
	t.equal(removeWhitespace('./test/test.txt'), 'hello\nworld');
});

test('Should remove any lines that include only whitespace', function(t) {
	t.plan(1);
	t.equal(removeWhitespace('./test/test1.txt'), 'hello\nworld');
});
