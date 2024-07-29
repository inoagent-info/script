// Скрипт разработан автором проекта «Иноагент-Инфо», https://t.me/inoagentinfo

var fs = require('fs');
Image = function(){ };

require('./pdf.js/examples/node/domstubs.js');
require('./pdf-table-extractor.js');

PDFJS = require('./pdf.js/build/dist');
PDFJS.cMapUrl = './pdf.js/build/generic/web/cmaps/';
PDFJS.cMapPacked = true;


var pdfPath = process.argv[2];
var data = new Uint8Array(fs.readFileSync(pdfPath));

PDFJS.getDocument(data).then(pdf_table_extractor).then(function (result) {
    console.log(JSON.stringify(result));
}, function (err) {
    console.error('Error: ' + err);
});

