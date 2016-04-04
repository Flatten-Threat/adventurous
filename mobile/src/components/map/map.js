var React = require('react-native');
var Icon_Restaurant = require('../images/icon_restaurant.png');
var Icon_Shopping = require('../images/icon_shopping.png');
var Icon_Pub = require('../images/icon_pub.png');
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
        ],
      activityRootUrl: 'http://adventureus.herokuapp.com/api/activities' // jenna: needs to be prop, not sure where to put it
    };
  },

  componentWillMount: function(){

    // holder array for pins
    var tempMarker = [];

    //get activities
    return fetch( this.state.activityRootUrl )
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

  // create 1 pin
  createMapMarkers: function() {
    return {
      "title": "test pin state and navigation!",
      "subtitle": "fun times ahead!",
      "longitude": -122.268393,
      "latitude": 37.880196,
      "image": Icon_Shopping,
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
  }

  // // create array of markers
  // createMarkerArray: function() {

  //   var result = [];
  //   result.push(createMapMarkers());

  //   console.log('result: ', result);
  //   return result;
  // },

  // createActivityMarkers: function(json) {

  //   console.log('json: ', json);

  //   // holder array for pins
  //   var tempMarker = [];

  //   for (var i = 0; i < json.length; i++) {

  //     // holder for ea region object
  //     var holder = json[i].region;

  //     // add title, description, image to region object
  //     holder['title'] = json[i].title;
  //     holder['subtitle'] = json[i].description;

  //     if ( json[i].category === 'Restaurant' ) {
  //       holder['image'] = Icon_Restaurant;
  //     }
  //     else if ( json[i].category === 'Bar' ) {
  //       holder['image'] = Icon_Pub;
  //     }
  //     else if ( json[i].category === 'Shopping' ) {
  //       holder['image'] = Icon_Shopping;
  //     }
        
  //     tempMarker.push(holder);
  //   }

  //   this.setState({
  //     markers: tempMarker
  //   });
  // },

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