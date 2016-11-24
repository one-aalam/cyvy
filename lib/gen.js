const parse = require('./parse');
const resumeFile = require('../resume.json');

function gen(){
    parse.parse(resumeFile);
}

gen();