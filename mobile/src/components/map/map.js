var React = require('react-native');
var pinFactory = require('./map-markers.js');
var Api = require('../network/api.js');
import FloatingButton from '../common/floating-button';

var {
  StyleSheet,
  MapView,
  View,
  TouchableOpacity,
  Image,
  Navigator // jenna
} = React;

module.exports = React.createClass({

  getInitialState: function() {
    return {
      mapMarkers: []
      };
  },

  //get activities
  componentWillMount: function(){
    this.setState({
      mapMarkers: this.getMapMarkers()
    });
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
            onPress={ this.addActivity }
            text='+'
            bkColor='#6e73ee'
            color='white'
          />
        </View>
    );
  },

  // create 1 marker
  getMapMarkers: function( region ) {
    return [ pinFactory.createPin( this.showActivity ) ];
  },

  showActivity: function( activity ) {
    this.props.navigator.push({
      name: 'activity', 
      passProps: { isNew: false, activity: activity }
    });
  },

  addActivity: function() {
    var newActivity = { title: '', description: '' };
    this.props.navigator.push({
      name: 'camera', 
      passProps: {isNew: true, activity: newActivity }
    });
  },

  onRegionChangeComplete: function( region ) {

    console.log('onRegionChangeComplete!');

    // call api, fetch new markers within local range

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