var c = require('express');
require('jaydata');
window.DOMParser=require('xmldom').DOMParser;
require('q');
require('./model.js');
var app = c();
app.use(c.query());
app.use(c.bodyParser());
app.use(c.cookieParser());
// TODO: This needs bcrypt which is currently failing to install on Windows: app.use(c.session({ secret: 'session key' }));

// this number controls how many records are returned by default (useful in PowerPivot query)
$data.JayService.OData.Defaults.defaultResponseLimit = 1000;

app.use("/zipsdb", $data.JayService.OData.Utils.simpleBodyReader());
app.use("/zipsdb", $data.JayService.createAdapter(zipsdb.Context, function (req, res) {
    return new zipsdb.Context({name: "mongoDB", databaseName:"zipsdb", address: "localhost", port: 27017 });
}));
app.use("/", c.static(__dirname));
app.use(c.errorHandler());

app.listen(8088);