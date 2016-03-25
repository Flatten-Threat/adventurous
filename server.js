var express = require('express');
var path = require('path');
var compression = require('compression');
var mongoose = require('mongoose');
var Activity = require( './models/activity' );

var app = express();
app.use( compression() ); // must come first!

// serve static files like index.html, css etc.
app.use( express.static( path.join( __dirname, 'public' ) ) );

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile( path.join(__dirname, 'public', 'index.html') );
});


var dbURI = 'mongodb://localhost/trippin';

mongoose.connect( dbURI );


var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT);
});


mongoose.connection.on( 'connected', function () {

  console.log( 'successful db connection to: ' + dbURI + '\n' );

  /********************* IMPORTANT !!! ************************
  need to figure out how to use demo data in dev. mode AND
  with webpack-dev-server (which currently hi-jacks dev. mode)
  *************************************************************/

  //if( app.get('env') === 'development' ) {

    var demoData = require( './models/demo-data' );

    Activity.remove().exec(); // clear database

    Activity.collection.insertMany( demoData, function(err,r) {

      if( err )
        console.log( "error loading demo data:", err );
      else
        console.log( "seeded database with " + r.insertedCount + " records\n" );
    });

  //}
});
