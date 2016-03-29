var express = require('express');
var path = require('path');
var compression = require('compression');
var mongoose = require('mongoose');
var demoData = require( './models/demo-data' );
var Activity = require( './models/activity' );

var app = express();
app.use( compression() ); // must come first!


// serve static files like index.html, css etc.
app.use( express.static( __dirname + '/public' ) );


app.get('*', function (req, res) {
  
  var url = req.url;

  if( url === '/api/activities' ) {
    sendActivityData(res);
  }
  else {
    // return index.html (keeps react-router browserHistory working on page refresh)
    res.sendFile( path.join(__dirname, 'public', 'index.html') );
  }

});


var PORT = process.env.PORT || 3000;


var server = app.listen(PORT, function() {

  console.log('\nProduction Express server running at localhost:' + PORT);

  //var dbURI = 'mongodb://localhost/adventureUS';
  var dbURI = 'mongodb://missedmemo:34212x@ds025379.mlab.com:25379/tga';
  
  mongoose.connect( dbURI, function(error) {
    if(error) {
      console.log( '\nERROR! Unable to connect to: ' + dbURI + ' Is mongod running?\n' );
      server.close();
    }
  });

  mongoose.connection.on( 'connected', function () {
    console.log( 'successful db connection to: ' + dbURI + '\n' );
    demoData.initDatabase(); // clear database, and seed with demo data
  });

});



/***********************************************************
  move this, and other API handlers, into their own file...
***********************************************************/

function sendActivityData( res ) {
  
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

};
