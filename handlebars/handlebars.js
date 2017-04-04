var Handlebars = require("handlebars");
var fs = require('fs');

var source = fs.readFileSync(__dirname + "/message.hbs", 'utf8'); // need to read the template from the file system
var template = Handlebars.compile(source); // need to call Handlebars.compile with the template file

// in each of the functions below you will see `var html = template(context)`
// This merges the template and the relevant data together to produce the html

Handlebars.registerHelper('formatNumber', function(number) {
  return `+44 ${number.slice(1, 4)} ${number.slice(4, 7)} ${number.slice(7)}`;
});


// In the function below you will see `var html = template(context)`
// This merges the template and the relevant data together to produce the html

function renderHtml(){
  var context = {
    title:"Hello World",
    post: "A bit of info about FAC!",
    people: ["Dan Sofer", "Ines Teles", "Nelson Correira"],
    email: "hello@foundersandcoders.com",
    number: '02035832442'
  };

  var html = template(context);
  return html;
}

module.exports = {
  renderHtml: renderHtml
};
