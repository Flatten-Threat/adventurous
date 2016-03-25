var express = require('express');
var path = require('path');
var compression = require('compression');
var mongoose = require('mongoose');
var demoData = require( './models/demo-data' );

var app = express();
app.use( compression() ); // must come first!

// serve static files like index.html, css etc.
app.use( express.static( path.join( __dirname, 'public' ) ) );

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile( path.join(__dirname, 'public', 'index.html') );
});


var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT);
});


var dbURI = 'mongodb://localhost/adventureUS';

mongoose.connect( dbURI );

mongoose.connection.on( 'connected', function () {
  console.log( 'successful db connection to: ' + dbURI + '\n' );
  demoData.initDatabase(); // clear database, and seed with demo data
});
