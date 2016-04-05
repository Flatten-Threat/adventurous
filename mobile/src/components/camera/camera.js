var React = require('react-native');
import Camera from 'react-native-camera';

var  {
  StyleSheet,
  View,
  Text,
  Dimensions
} = React;

module.exports = React.createClass({
  
  render: function(){
    return (
      
      <View style={styles.container}>

        <Camera 
          ref={ (cam) =>  {
            this.camera = cam;
          }}
          style = {styles.preview}
          aspect = {Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
          >
          <Text style={styles.capture} onPress={this.takePicture}>Add Photo</Text>
        </Camera>

      </View>
    )
  },

  takePicture: function(){
    this.camera.capture()
      .then((data) => {
        var activity = this.props.route.passProps;
        activity.photo = data;

        this.props.navigator.replace({
          name: 'activity',
          passProps: activity 
        });

      })
      .catch(err => console.error(err))
  },



})

var styles = StyleSheet.create({

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
  
})