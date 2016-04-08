var React = require('react-native');

var {
    Text,
    StyleSheet,
    TouchableHighlight
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={'gray'}
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight> 
    );
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    borderColor: '#42B299',
    backgroundColor: '#42B299',
    marginTop: 10
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    color: 'white',
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 2,
      height: 2
    },
  },

});