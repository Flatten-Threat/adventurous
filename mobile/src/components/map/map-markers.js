var React = require('react-native');
var RightArrow = require('./images/icon_right_arrow.png');

var {
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} = React;

var iconMap = {
  restaurant : require('./images/restaurant.png'),
  shopping : require('./images/clothes.png'),
  bar : require('./images/bar.png'),
  coffee : require('./images/coffee.png')
};

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
      image: this.getPinIcon( activity.category )
    }
  },

  getPinIcon: function( category ) {

    // get pin icon or use default
    if ( iconMap[category] !== undefined ) {
      // var icon = require( './images/' + iconMap[category] );
      return iconMap[category];
    }
  }

};

var styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24
  }
});