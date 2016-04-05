var React = require('react-native');
var Icon_Shopping = require('../images/icon_shopping.png');

var {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} = React;

module.exports = React.createClass({

  getInitialState: function() {
    return {
      isFirstLoad: false,
      isSelected: false
    };
  },

  render: function() {

  },

  // navigate to activity view
  navigateToActDetailView: function() {
    this.props.navigator.push({name: 'activities'});
  }

});

var styles = StyleSheet.create({
  mapPin: {

  }
});