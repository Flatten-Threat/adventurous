var React = require('react-native');
var pinFactory = require('./map-markers.js');
var api = require('../network/api.js');
import FloatingButton from '../common/floating-button';

var {
  StyleSheet,
  MapView,
  View,
  Image,
  Navigator // jenna
} = React;

module.exports = React.createClass({

  getInitialState: function() {
    return {
      mapMarkers: []
      };
  },

  render: function(){
    console.log('this.state.mapMarkers: ', this.state.mapMarkers);
    return(

        <View style={styles.container}>
          <MapView 
            showsPointsOfInterest={false}
            annotations={ this.state.mapMarkers }
            showsUserLocation={true}
            followUserLocation={true}
            onRegionChangeComplete={ this.onRegionChangeComplete }
            style={styles.map}
          >
          </MapView>
          <FloatingButton
            onPress={ this.startAddActivity }
            text='+'
            bkColor='#6e73ee'
            color='white'
          />
        </View>
    );
  },

  showActivity: function( activity ) {
    this.props.navigator.push({
      name: 'activity', 
      passProps: { isNew: false, activity: activity }
    });
  },

  startAddActivity: function() {

    this.createEmptyActivity()
      .then( function( newActivity ) {

        this.props.navigator.push({
          name: 'camera',
          passProps: { isNew: true, initiateSave: this.endAddActivity, activity: newActivity }
        });

      }.bind(this));
  },

  endAddActivity: function( newActivity ) {
    this.setState({
      mapMarkers: this.state.mapMarkers.concat( [ pinFactory.create( newActivity, this.showActivity ) ] )
    });
  },

  onRegionChangeComplete: function( region ) {

    console.log('onRegionChangeComplete! new region: ', region);

      api.getNearbyActivities( region = null )
      .then( function( activities ) {
          this.setState({
          mapMarkers: activities.map( (activity) => pinFactory.create( activity, this.showActivity ) )
        });

      }.bind(this));
  },

  createEmptyActivity: function() {

    return new Promise( function( fulfill, reject ) {

      var newActivity = { title: '', description: '', region: {} };

      // geolocation call requires 'simulate location' to be active in XCode
      // otherwise, we'll default to TGA location in Berkeley...

      navigator.geolocation.getCurrentPosition(
        (location) => {
          newActivity.region.latitude = location.coords.latitude;
          newActivity.region.longitude = location.coords.longitude;
          console.log('succeeded getting geo coords');
          fulfill( newActivity );
        },
        (error) => {
          newActivity.region.latitude = 37.7873589;
          newActivity.region.longitude = -122.408227;
          console.log('failed getting geo coords:', error.message );
          fulfill( newActivity );
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );

    });
  }

}) // end of react class

var styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  map: {
    flex: 2,
    marginTop: 30
  },
  buttonWrapper: {
   flex: 1,
   alignItems: 'center'
  },
  mapPin: {
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: 'white'
  }
});