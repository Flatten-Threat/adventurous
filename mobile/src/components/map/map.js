var React = require('react-native');

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
      markers: [],
      activityRootUrl: 'http://adventureus.herokuapp.com/api/activities'
    };
  },

  componentWillMount: function(){

    //get activities
    return fetch( this.state.activityRootUrl )
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        var tempMarker = [];
        for (var i = 0; i < json.length; i ++) {
          tempMarker.push(json[i].region);
        }
        this.setState({
          markers:tempMarker
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
          
          <View style={styles.buttonWrapper}>
            <Button style={styles.button} text={'Add Activity'} onPress={this.onPress} />
          </View>
        
        </View>
    );
  },

  //when the user stops dragging the map this function is called
  onRegionChangeComplete: function(region){
    console.log(region);
  },

  //refer to this on line 20.
  onPress: function() {
    //navigate over to signup
    //push into the navigator stack
    this.props.navigator.push({name: 'activities'})
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