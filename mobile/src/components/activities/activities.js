var React = require('react-native');

var {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput
} = React;

var Button = require('../common/button');
var DropDown = require('../common/dropdown');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      // this.state= {
      // editable: 
      // }
    }
  },

  // setText: function() {
  //   this.setState({
  //     ...this.state,
  //     editable: 
  //   })
  // },

  render: function(){
    return (
    
      <View style={styles.container}>
          
        <View style={[styles.header, this.border('blue')]}>
          <Text> Insert image here! </Text>
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
        <TextInput  height={25} maxLength={20} placeholder={'Edit title'}/>
      </View>
  },


  dropDownMenu: function() {
    return <View style={[styles.dropDownWrapper, this.border('red')]}>
      <DropDown/>
    </View> 

  },

  descriptionInput: function() {
    return <View style={[styles.descriptionWrapper, this.border('purple')]}>
      <TextInput height={50} maxLength={200} multiline={true} placeholder={'Edit description'}/>
    </View>

  },

  submitButton: function(){
    return <View style={styles.buttonWrapper} >
     <Button text={'Submit'} onPress={this.changeToSignIn}/>
    </View>
  },


});


var styles = StyleSheet.create({
  

  container: {
    flex: 1,
    alignItems: 'stretch'

  },

  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
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
  }

})