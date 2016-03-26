var express = require('express');
var path = require('path');
var compression = require('compression');
var mongoose = require('mongoose');
var demoData = require( './models/demo-data' );

var app = express();
app.use( compression() ); // must come first!

// serve static files like index.html, css etc.
app.use( express.static( path.join( __dirname, 'public' ) ) );


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



// move this, and other API handlers, into their own file...

var Activity = require( './models/activity' );

app.get( '/api/activities', function( req, res ) {

  Activity.find( {}, function(error, data) {

    if(error) {
      res.json(error);
    }
    else if( data === null ) {
      res.json('Empty data')
    }
    else {
      res.json(data);
    }      
  });

});
