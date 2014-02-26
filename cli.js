// CLI example.
var removeWhitespace = require('./lib/remove-whitespace');
var file = process.argv[2];

process.stdout.write(removeWhitespace(file));
