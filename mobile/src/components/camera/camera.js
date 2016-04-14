var React = require('react-native');
var _ = require('underscore');

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
            captureTarget={Camera.constants.CaptureTarget.memory}
            captureQuality={Camera.constants.CaptureQuality.low} // jenna
            >
          </Camera>
        </View> 
            
         <View style={styles.footer}>    
          <TouchableHighlight onPress={this.takePicture}>
            <Image source={require('../images/camera.png')}/>
          </TouchableHighlight>
         </View> 
         
      </View>
    );
  },

  takePicture: function() {
    this.camera.capture()

      .then( (data) => {

        var temp = 'data:image/jpeg;base64,' + data; // jenna

        this.props.route.passProps.activity.image = temp; // jenna

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