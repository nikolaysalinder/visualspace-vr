var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);


app.get('/', function(req, res){
	if(err) {
		console.log(err);
	} else {
		res.render('index.html');
	}
});

app.listen(app.get('port'), function(){
	console.log('Express запущен на http://localhost:' + app.get('port') + ': нажмите Ctr+ C для завершения');
})