/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  MapView
} from 'react-native';

var Map = React.createClass({
  render: function(){
    return ( <MapView style={styles.map}></MapView> );
  }
})

class adventureus extends Component {
  render() {
    return (
     
        <MapView style={styles.map}>
        </MapView>
     
    );
  }
}

const styles = StyleSheet.create({

  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('adventureus', () => adventureus);
