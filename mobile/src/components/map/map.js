var React = require('react-native');
var Icon_Restaurant = require('../images/icon_restaurant.png');
var Icon_Shopping = require('../images/icon_shopping.png');
var Icon_Pub = require('../images/icon_pub.png');

var {
  Component,
  StyleSheet,
  MapView,
  View,
  Text
} = React;

var Button = require('../common/button');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      markers: [], // for pins
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

        for (var i = 0; i < json.length; i++) {

          // holder for region object
          var holder = json[i].region;

          // add title, description, image to region object
          holder['title'] = json[i].title;
          holder['subtitle'] = json[i].description;

          console.log('json[i]: ', json[i]);

          // assign pin image based on category
          if ( json[i].category === 'Restaurant' ) {
            holder['image'] = Icon_Restaurant;
            console.log('inside restaurant! ');
          }
          else if ( json[i].category === 'Bar' ) {
            holder['image'] = Icon_Pub;
            console.log('inside bar! ');
          }
          else if ( json[i].category === 'Shopping' ) {
            holder['image'] = Icon_Shopping;
            console.log('inside shopping! ');
          }

          tempMarker.push(holder);
        }

        // set pins state
        this.setState({
          markers: tempMarker
        });

      }.bind(this));

      console.log('this.state.markers: ', this.state.markers);
  },

  render: function(){

    return(

        <View style={styles.container}>
          <MapView 
          annotations={this.state.markers}
          showsUserLocation={true}
          followUserLocation={true}
          style={styles.map}
          >
          </MapView>

          <Button style={styles.button} text={'Add Activity'} onPress={this.showActivity} />
          
        </View>
    );
  },

  //when the user stops dragging the map this function is called
  onRegionChangeComplete: function(region){
    console.log(region);
  },

  //refer to this on line 20.
  showActivity: function() {
    //navigate over to signup
    //push into the navigator stack
    this.props.navigator.push({name: 'camera', passProps: {isNew: true}})
  }

})

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
  }

});