#!/usr/bin/env node

var x = 3;
var pagedown = require('pagedown');
var converter = new pagedown.Converter();
var pagedownExtra = require('pagedown-extra');
pagedownExtra.Extra.init(converter);


// Something like this should work, but seems not to currently: 
/* converter.hooks.chain("preBlockGamut", function (text, runBlockGamut) {
    return text.replace(/^ {0,3}```sequence *\n((?:.*?\n)+?) {0,3}``` *$/gm, function (whole, inner) {
        return '<div class="sequence"><svg>' + inner + "</svg></div>\n";
    });
});
*/

var content = '';
process.stdin.setEncoding('utf8');
process.stdin.resume();
process.stdin.on('data', function(buf) { content += buf.toString(); });
process.stdin.on('end', function() {
    // your code here
    var html = converter.makeHtml(content);
    console.log('<!DOCTYPE html>');
    console.log('<html>');
    console.log('<head>');
    console.log('<meta charset="utf-8">');
    console.log('<title>title</title>');
    console.log('<link rel="stylesheet" href="style.css">');
    console.log('</head>');

    console.log(html);
    console.log('</html>');
});
