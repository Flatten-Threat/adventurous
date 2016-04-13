var React = require('react-native');

module.exports = {

  getNearbyActivities: function( region ) {
  
    var url = 'http://adventureus.herokuapp.com/api/activities';

    return fetch( url )
      .then( (response) => response.json() )
      .then( (data) => data )
      .catch( e => console.log( 'error fetching activity data:', e ) );
  },


  saveData: function( newActivity ) {

    var url = 'http://localhost:3000/api/activities/new';
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
    .then( (response) => response.json() )
    .then( (data) => data )
    .catch( e => console.log( 'error posting new activity data:', e ) );
  }

};