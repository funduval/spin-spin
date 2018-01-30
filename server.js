// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//Require Schemas
// var User = require('./src/schema');
var Food = require('./src/models/Food');

// Create Instance of Express
var app = express();

var PORT = process.env.PORT || 3001;

// Run Morgan for Logging
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));
} else {
	app.use(express.static('public'));
}

// MongoDB Config Set-up
if (process.env.NODE_ENV == 'production') {
	mongoose.connect('mongodb://funduval:Msjane110@ds129796.mlab.com:29796/sugrlab', { useMongoClient: true });
} else {
	mongoose.connect('mongodb://localhost/foods', { useMongoClient: true });
}

var db = mongoose.connection;

db.on('error', function(err) {
	console.log('Mongoose Error: ', err);
});

db.once('open', function() {
	console.log('Mongoose connection successful.');
});

//============================================================
// -------------------------------------------------

// Route to get all saved foods
app.get('/api/saved', function(req, res) {
	Food.find({}).exec(function(err, doc) {
		if (err) {
			console.log(err);
		} else {
			res.json(doc);
		}
	});
});

// Route to add an aood to saved list
app.post('/api/saved', function(req, res) {
	console.log('calling /api/saved');

	var newFood = new Food(req.body);

	console.log(req.body);

	newFood.save(function(err, doc) {
		if (err) {
			console.log(err);
		} else {
			res.json(doc);
		}
	});
});

// Route to delete any food from saved list
// app.delete('/api/saved/', function(req, res) {
// 	var url = req.param('url');

// 	Food.find({ url: url })
// 		.remove()
// 		.exec(function(err) {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				res.send('Deleted');
// 			}
// 		});
// });

// Any non API GET routes will be directed to our React App and handled by React Router
app.get('*', function(req, res) {
	if (process.env.NODE_ENV === 'production') {
		res.sendFile(__dirname + '/build/index.html');
	} else {
		res.sendFile(__dirname + '/public/index.html');
	}
});

// Listener
app.listen(PORT, function() {
	console.log('App listening on PORT: ' + PORT);
});

// db.on('error', err => {
// 	console.log(err);
// });

// db.once('open', err => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		// ...
// 	}
// });

