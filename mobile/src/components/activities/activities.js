var React = require('react-native');

var {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions
} = React;

//require the button to navigate to the sign in page
var Button = require('../common/button');

//import Camera from 'react-native-camera'
import Camera from 'react-native-camera';

module.exports = React.createClass({
  render: function(){
    return (

      <View style={styles.container}>

        <Button style={styles.button} text={'Add a photo'} onPress={this.changeToCamera}/> 

        <TextInput style={styles.input} multiline={true} maxLength={200} placeholder={'Add a description'}/>
        
        <View style={styles.buttonWrapper}>
            <Button style={styles.button} text={'Submit'} onPress={this.changeToSignIn}/>
        </View>
      
      </View>    

  
    )
  },

  changeToCamera: function(){
    //switch to sign in view
    this.props.navigator.push({name: 'camera'})
  },

  changeToSignIn: function(){
    this.props.navigator.push({name: 'signin'})
  }

})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonWrapper: {
    alignItems: 'center'
  },

  input: {
    height: 90,
    borderColor: 'black',
    borderWidth: 1
  }
})