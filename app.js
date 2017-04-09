var express = require('express');
var app = express();
var port = 3000;
var config = require('./inventors.json');

app.set('env', 'production');   
app.set('view engine', 'html');
//app.set('views', path.join(__dirname, 'templates'));
app.engine('html', require('ejs').__express);

app.set('trust proxy', true);
app.set('x-powered-by', false);
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('view cache', true);

app.get('/inventors', function(request, response){
    response.status(200);
    response.set('Content-type', 'text/html'); 
    response.render('index', {data: config});
    response.end();
});

app.listen(port, function(){
    console.log('The server is running on port %s', port)
});