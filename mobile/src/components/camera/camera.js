var React = require('react-native');

var  {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions
} = React;

import Camera from 'react-native-camera';

module.exports = React.createClass({
  
  getInitialState: function() {
    return {
      photo: null
    };
  },

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
        // this.setState({photo: data}); 
        // console.log(data)
        this.props.navigator.push({name: 'activities', passProps:{isNew: true, photo: data}});

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