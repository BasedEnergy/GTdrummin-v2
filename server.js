const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);

const PORT = process.env.PORT || 3000;

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/tone', express.static(__dirname + '/node_modules/tone/build/'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api-routes")(app);

app.get('/assets', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets'))
});

var db = require("./models");

db.sequelize.sync({force: true}).then(function () {
  server.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

module.exports = app;
