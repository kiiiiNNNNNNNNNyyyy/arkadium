var express = require('express');
var request = require('request');
var data = require('./public/data');
var bodyParser = require('body-parser');
var fs = require('fs');
var ejs = require('ejs');
var ejsMate = require('ejs-mate');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');

var app = express();
var api_key = "b63f3b60776f510d0be5712e50e1cd35";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 60000 },
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}));
app.use(flash());
app.use(express.static('public'));

app.set("view engine", "ejs")

app.get("/", function(req, res) {
	var json = fs.readFileSync("../src/themoviedb_data.json");
	var content = JSON.parse(json);
	var template = fs.readFileSync("./public/template.ejs", "utf8");
	var obj = {};
	obj.content = content;
	obj.name = "Brad Pitt";
	var rendered = ejs.render(template, {obj:obj});
	res.send(rendered);
});

app.get("/actor", function(req, res){ 
	var name = req.query.actor;
	var id_url = `http://api.tmdb.org/3/search/person?api_key=${api_key}&query=${name}`;
	var promise = data.get_details(id_url).then((data) => {
		var json = JSON.parse(data);
		var id = json.results[0].id;
		return id;
	})	.then((id) => {
		var movie_url = `http://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_cast=${id}`;
		var x = data.get_details(movie_url).then((data) => {
			var json = JSON.parse(data);
			return json;
		}).then((json) => {
			var content = json;
			var template = fs.readFileSync("./public/template.ejs", "utf8");
			var obj = {};
			obj.content = content;
			obj.name = name;
			var rendered = ejs.render(template, {obj:obj});
			res.send(rendered);
		}).catch(() => {
			req.flash('success', 'This is a flash message using the express-flash module.')
			res.status(404).redirect('/');
		});
	});

	//console.log(main);
});

app.post('/', (req, res) => {
	var x = req.body.search;
	res.redirect('/actor?actor=' + x);
});

var port = process.env.PORT ||  3001
app.listen(port, function(){
 console.log("Listening on port 3001")
});

