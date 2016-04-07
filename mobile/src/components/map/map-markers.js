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
  coffee : require('./images/coffee.png'),
  'museum/gallery' : require('./images/museum_art.png'),
  groceries : require('./images/supermarket.png'),
  books : require('./images/books.png'),
  hotel : require('./images/hotel.png'),
  garden : require('./images/garden.png'),
  hiking : require('./images/hiking.png'),
  sports : require('./images/sports.png')
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

    console.log('category: ', category);
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