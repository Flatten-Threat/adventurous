var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  MapView
} = React;


// var Signin = require('./components/authentication/signin');

var Map = require('./components/map/map');

//add <Signin /> before closing view tag to see sign in 
module.exports = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>  

        <Map/>
          
      </View>  
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
});