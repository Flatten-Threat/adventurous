var React = require('react-native');

module.exports = {

  getNearbyActivities: function( region ) {
  
    var url = 'http://adventureus.herokuapp.com/api/activities';

    return fetch( url )
      .then( (response) => response.json() )
      .then( (data) => data )
      .catch( e => console.log( 'error fetching activity data:', e ) );
  }

};