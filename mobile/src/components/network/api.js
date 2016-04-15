module.exports = {

  getNearbyActivities: function( region ) {
  
    // var url = 'http://adventureus.herokuapp.com/api/activities';
    var url = 'http://192.168.0.121:3000/api/activities';
    // var url = 'http://localhost:3000/api/activities';

    return fetch( url )
      .then( (response) => response.json() )
      .then( (data) => data )
      .catch( e => console.log( 'error fetching activity data:', e ) );
  },

  saveData: function( newActivity ) {

    // jenna: change this depending on if you test on simulator or iphone, will research more scalable way to do this
    // var url = 'http://localhost:3000/api/activities/new';
    var url = 'http://192.168.0.121:3000/api/activities/new';
    // var url = 'http://adventureus.herokuapp.com/api/activities/new';

    fetch( url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        activity: newActivity
      })
    })
    .catch( e => console.log( 'error posting new activity data:', e ) );
  }

};