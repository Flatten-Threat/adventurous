var React = require('react-native');
var Icon_Restaurant = require('./images/restaurant.png');
var Icon_Shopping = require('./images/clothes.png');
var Icon_Pub = require('./images/bar.png');
var Icon_Coffee = require('./images/coffee.png');
var RightArrow = require('./images/icon_right_arrow.png');

var {
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} = React;

module.exports = {

  create: function( activity, callback ) {
    return {
      title: activity.title,
      longitude: activity.region.longitude,
      latitude: activity.region.latitude,
      rightCalloutView: (
          <TouchableOpacity onPress={ ()=> callback( activity ) }>
            <Image style={ styles.image } source={RightArrow} />
          </TouchableOpacity>
          ),
      image: Icon_Coffee
    }
  }
};

var styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24
  }
});