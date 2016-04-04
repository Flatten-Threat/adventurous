var React = require('react-native');

var {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image
} = React;

var Button = require('../common/button');
var DropDown = require('../common/dropdown');

module.exports = React.createClass({

  render: function(){

    console.log("---->", this.props.route.passProps.isNew);

    return (
    
      <View style={styles.container}>
          
        <View style={[styles.header, this.border('blue')]}>
          <Image source={{uri: this.props.route.passProps.photo}} style={styles.cover}/>
        </View>

        <View style={[styles.footer, this.border('green')]}>
          
          {this.titleInput()}
          {this.dropDownMenu()}
          {this.descriptionInput()}

        </View>
          
          {this.submitButton()}
      
      </View>    
    )
    
  },

  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  },


  //helper functions
  titleInput: function() {
    return <View style={[styles.titleWrapper, this.border('yellow')]}>
        <TextInput editable={this.props.route.passProps.isNew} height={25} maxLength={20} placeholder={'Edit title'}/>
      </View>
  },


  dropDownMenu: function() {
    return <View style={[styles.dropDownWrapper, this.border('red')]}>
      <DropDown/>
    </View> 

  },

  descriptionInput: function() {
    return <View style={[styles.descriptionWrapper, this.border('purple')]}>
      <TextInput editable={this.props.route.passProps.isNew} height={50} maxLength={200} multiline={true} placeholder={'Edit description'}/>
    </View>

  },

  submitButton: function(){
    return <View style={styles.buttonWrapper} >
     <Button text={'Submit'} onPress={this.changeToSignIn}/>
    </View>
  },

  changeToSignIn: function(){
    this.props.navigator.push({name: 'signin'});
  }

});


var styles = StyleSheet.create({
  

  container: {
    flex: 1,
    alignItems: 'stretch'

  },

  header: {
    flex: 2,
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'stretch'
  },

  footer: {
    flex: 3
  },

  titleWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  dropDownWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },

  descriptionWrapper: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center'
  },

  buttonWrapper: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cover: {
    flex: 1,
    width: null,
    height: null
  }

})