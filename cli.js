// CLI example.
var fs = require('fs');
var removeWhitespace = require('./lib/remove-whitespace');
var file = process.argv[2];

process.stdout.write(removeWhitespace(fs.readFileSync(file, 'utf8')));
