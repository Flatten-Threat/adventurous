var React = require('react-native');
var Icon_Restaurant = require('../images/icon_restaurant.png');
var Icon_Shopping = require('../images/icon_shopping.png');
var Icon_Pub = require('../images/icon_bar.png');
var Icon_Coffee = require('../images/icon_coffee.png');
var Button = require('../common/button.js');
var MapPin = require('./mapPin.js');
var RightArrow = require('../images/icon_right_arrow.png');

var {
  Component,
  StyleSheet,
  MapView,
  View,
  Text,
  TouchableOpacity,
  Image
} = React;

module.exports = React.createClass({

  getInitialState: function() {
    return {
      markers: [
        this.createMapMarkers()
        ]    
      };
  },
  componentWillMount: function(){
    //get activities
    return fetch( this.props.route.passProps.activityRootUrl )
      .then(function(response){
        return response.json();
      })
      .then(function(json){

        console.log('this.state.markers: ', this.state.markers);
        // this.createActivityMarkers(json);
      }.bind(this));
  },
  render: function(){
    return(

        <View style={styles.container}>
          <MapView 
          showsPointsOfInterest={false}
          annotations={ this.state.markers }
          showsUserLocation={true}
          followUserLocation={true}
          style={styles.map}
          >
          </MapView>

          <Button style={styles.button} text={'Add Activity'} onPress={this.addActivity} />
          
        </View>
    );
  },
  // create 1 marker
  createMapMarkers: function() {
    return {
      "title": "Best cappuccino in the city!",
      "subtitle": "The smoothest cappuccino, not too caffeinated",
      "longitude": -122.268393,
      "latitude": 37.880196,
      "image": Icon_Coffee,
      "rightCalloutView": (
        <TouchableOpacity onPress={ this.navigateToActivityDetailView }>
          <Image source={RightArrow} />
        </TouchableOpacity>
        )
    }
  },
  // navigate to activity view
  navigateToActivityDetailView: function() {
    this.props.navigator.push({name: 'activities', passProps: {isNew: false}})
  },
  addActivity: function() {
    //navigate over to signup
    //push into the navigator stack
    this.props.navigator.push({name: 'camera', passProps: {isNew: true}})
  },
  // create 1 pin for user location


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