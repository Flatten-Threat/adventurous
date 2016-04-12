var React = require('react-native');

import Camera from 'react-native-camera';
import Button from '../common/button';

// import 
var {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableHighlight
} = React;

module.exports = React.createClass({
  
  render: function() {
    return (
      
      <View style={styles.container}>

        <View style={[styles.header]}>
          <Camera 
            ref={ (cam) => {
              this.camera = cam;
            }}
            style = {styles.preview}
            aspect = {Camera.constants.Aspect.fill}
            captureTarget={Camera.constants.CaptureTarget.disk}
          />
        </View> 
            
         <View style={styles.footer}>    
          <TouchableHighlight onPress={this.takePicture}>
            <Image source={require('../images/Camera.png')}/>
          </TouchableHighlight>
         </View> 
         
      </View>
    );
  },

  takePicture: function() {
    this.camera.capture()

      .then( (data) => {

        this.props.route.passProps.activity.image = data;

        this.props.navigator.replace({
          name: 'activity',
          passProps: this.props.route.passProps
        });

      })
      .catch(err => console.error(err));
  }

});

var styles = StyleSheet.create({

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  container: {
    flex: 1,
    alignItems: 'stretch',
    marginTop: 30
  },

  header: {
    flex: 2
  },

  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7A87A7'
  },
 
});