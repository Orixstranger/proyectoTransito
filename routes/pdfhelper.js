var wkhtmltopdf = require('wkhtmltopdf');
var path = require('path');
var fs = require('fs');

var saveToPDF = (template, saveTo, params, callback) => {
    fs.readFile(path.resolve(__dirname, `../views/vistas_1/dinamic/${template}.ejs`), {}, (err, file) => {
        console.log('file', file);
        var template = handlerbars.compile(file);
        var html = template(params);
        
        wkhtmltopdf(html, {output: saveTo}, callback);
    });
    
};

module.exports = saveToPDF;
