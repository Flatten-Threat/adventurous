var Activity = require( './activity' );


module.exports.initDatabase = function() {
  
  /********************* IMPORTANT !!! ************************
  need to figure out how to use demo data in dev. mode AND
  with webpack-dev-server (which currently hi-jacks dev. mode)
  *************************************************************/

  //if( app.get('env') === 'development' ) {

    Activity.remove().exec(); // clear database

    Activity.collection.insertMany( demoData, function(err,r) {

      if( err )
        console.log( "error loading demo data:", err );
      else
        console.log( "seeded database with " + r.insertedCount + " records\n" );
    });

  //}
};

// test test
var demoData = [

  {
    'title' : 'Amazing Spot for Ice Cream!',
    'description' : 'I LUV this little corner cafe, and the owner is the sweetest old lady (practice your Greek language skills, for some free Ouzo!).',
    'image' : 'http://someurl...',
    'category' : 'Restaurant',
    'region' : {
       longitude: -122.4046101306659,
       latitude: 37.78151983393839
    }
  },

  {
    'title' : 'Best Irish Pub!',
    'description' : 'Awesome brew pub with all your Emerald Isle favs plus ALL THE MALTS (natch)',
    'image' : 'http://someurl...',
    'category' : 'Bar',
    'region' : {
       longitude: -122.4081291893224,
       latitude: 37.78213036011432
    }
  },

  {
    'title' : 'Harajuku Fashion Outlet in S.F',
    'description' : 'Had no idea this existed, and I freaked out a little and dropped about $2K on crazy threads... but totally worth it (cuz paying your rent should be optional)',
    'image' : 'http://someurl...',
    'category' : 'Shopping',
    'region' : {
       longitude: -122.4117340786778,
       latitude: 37.78308005747538
    }
  }

];
