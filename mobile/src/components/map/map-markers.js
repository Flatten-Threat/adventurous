var React = require('react-native');
var Icon_Restaurant = require('./images/restaurant.png');
var Icon_Shopping = require('./images/clothes.png');
var Icon_Pub = require('./images/bar.png');
var Icon_Coffee = require('./images/coffee.png');
var RightArrow = require('./images/icon_right_arrow.png');

var {
    Image,
    StyleSheet,
    TouchableOpacity
} = React;

module.exports = {

  createPin: function( callback ) {

    return {
      "title": "Best cappuccino in the city!",
      "subtitle": "The smoothest cappuccino, not too caffeinated",
      "longitude": -122.268393,
      "latitude": 37.880196,
      "image": Icon_Coffee,
      "rightCalloutView": (
        <TouchableOpacity onPress={ ()=> callback( {
            title: 'Best cappuccino in the city!',
            description: 'The smoothest cappuccino, not too caffeinated'
          }) }>
          <Image style={ styles.image } source={RightArrow} />
        </TouchableOpacity>
        )
    };
  }
};

var styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24
  }
});