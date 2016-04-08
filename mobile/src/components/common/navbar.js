var React = require('react-native');

var {
    Text,
    StyleSheet,
    View
} = React;


module.exports = React.createClass({

  render: function() {

    var notMapView = this.props.navigator.getCurrentRoutes().length > 1;

    return (
      <View  style={ styles.navbar }>
        { notMapView ?
          <Text style={ [styles.backButton, styles.headerText] } onPress={ this.back } >&lt;</Text>
          : null
        }
        <Text style={ styles.headerText }>AdventureUs</Text>
      </View>
    );
  },

  back: function() {
    this.props.navigator.pop();
  }

});


var styles = StyleSheet.create ({

  navbar: {
    position: 'absolute',
    padding: 5,
    top: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderBottomColor: 'darkgreen',
    borderBottomWidth: 1,
    
  },

  backButton: {
    position: 'absolute',
    left: 14,
    top: 5
  },

  headerText: {
    color: 'lightgreen',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 2,
      height: 2
    },
    letterSpacing: 4
  },

});