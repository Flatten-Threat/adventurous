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


var demoData = [

  {
    'title' : 'Great Spot for Ice Cream!',
    'description' : 'I LUV this little corner cafe, and the owner is the sweetest old lady (practice your Greek language skills, for some free Ouzo!).',
    'image' : 'http://someurl...'
  },

  {
    'title' : 'Best Irish Pub!',
    'description' : 'Awesome brew pub with all your Emerald Isle favs plus ALL THE MALTS (natch)',
    'image' : 'http://someurl...'
  },

  {
    'title' : 'Harajuku Fashion Outlet in S.F',
    'description' : 'Had no idea this existed, and I freaked out a little and dropped about $2K on crazy threads... but totally worth it (cuz paying your rent should be optional)',
    'image' : 'http://someurl...'
  },

];

