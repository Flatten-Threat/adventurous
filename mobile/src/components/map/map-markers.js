var React = require('react-native');
var RightArrow = require('../activities/images/icon_right_arrow.png');

var {
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} = React;

var iconMap = {
  restaurant : require('../activities/images/restaurant.png'),
  shopping : require('../activities/images/clothes.png'),
  bar : require('../activities/images/bar.png'),
  coffee : require('../activities/images/coffee.png'),
  'museum-art' : require('../activities/images/museum_art.png'),
  groceries : require('../activities/images/supermarket.png'),
  books : require('../activities/images/books.png'),
  hotel : require('../activities/images/hotel.png'),
  garden : require('../activities/images/garden.png'),
  hiking : require('../activities/images/hiking.png'),
  sports : require('../activities/images/sports.png')
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
    // get pin icon or use default pin
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