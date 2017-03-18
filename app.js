var express = require('express');
var app = express();
app.set('view engine', 'ejs');  
app.set('views', __dirname);
app.use(express.static(__dirname));
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(port, function () {
  console.log('http://localhost:'+port+'/ is now ready!');
})