var React = require('react-native');
import Categories from '../activities/categories'; // start converting to ES6...


var {
    Image,
    StyleSheet,
    TouchableOpacity
} = React;


const arrowIcon = require('./right-arrow.png');


module.exports = {

  create: function( activity, callback ) {
    return {
      title: activity.title,
      longitude: activity.region.longitude,
      latitude: activity.region.latitude,
      rightCalloutView: (
          <TouchableOpacity onPress={ ()=> callback( activity ) }>
            <Image style={ styles.image } source={ arrowIcon } />
          </TouchableOpacity>
          ),
      image: activity.category ? Categories.getIcon( activity.category ) : null
    };
  }

};


var styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24
  }
});