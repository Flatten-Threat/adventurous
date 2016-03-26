var React = require('react-native');

var {
  Component,
  StyleSheet,
  MapView
} = React;

module.exports = React.createClass({
  render: function(){
    return(
      <MapView style={styles.map}></MapView>);
  }
})

var styles = StyleSheet.create ({
  map: {
    flex: 1
  }
});