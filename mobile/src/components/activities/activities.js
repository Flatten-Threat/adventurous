var React = require('react-native');
var Button = require('../common/button');
var DropDown = require('../common/dropdown');

var {
  StyleSheet,
  View,
  TextInput,
  Image
} = React;

module.exports = React.createClass({

  getInitialState: function() {
    return {
      activity: this.props.route.passProps.activity
    };
  },
  render: function(){

    var isNew = this.props.route.passProps.isNew;

    return (
    
      <View style={styles.container}>
          
        <View style={[styles.header, this.border('blue')]}>
          <Image source={{uri: this.props.route.passProps.photo}} style={styles.cover}/>
        </View>

        <View style={[styles.footer, this.border('green')]}>

          <View style={[styles.titleWrapper, this.border('yellow')]}>
          <TextInput
           style={ [styles.input, { textAlign: 'center' }, isNew ? styles.editable : null ] }
           editable={ isNew }
           placeholder={ 'add a title...' }
           // value = { this.state.activity.title }
          />
          </View>
          {this.dropDownMenu()}
          <TextInput
            style={ [ styles.input, { flex: 3 }, isNew ? styles.editable : null ] } 
            multiline={true}
            maxLength={200}
            editable={ isNew }
            placeholder={'What makes this place so special?'}
            // value = { this.state.activity.description }
          />

        </View>
          
        <View style={styles.buttonWrapper}>
          <Button text={'Save'} onPress={ this.save }/>
        </View>
      
      </View>    
    )
    
  },
  save: function() {
    this.props.navigator.popToTop();
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  },


  // //helper functions
  // titleInput: function() {
  //   return <View style={[styles.titleWrapper, this.border('yellow')]}>
  //       <TextInput editable={this.props.route.passProps.isNew} height={25} maxLength={20} placeholder={'Edit title'}/>
  //     </View>
  // },


  dropDownMenu: function() {
    return <View style={[styles.dropDownWrapper, this.border('red')]}>
      <DropDown/>
    </View> 

  },

  // descriptionInput: function() {
  //   return <View style={[styles.descriptionWrapper, this.border('purple')]}>
  //     <TextInput editable={this.props.route.passProps.isNew} height={50} maxLength={200} multiline={true} placeholder={'Edit description'}/>
  //   </View>

  // },

  // submitButton: function(){
  //   return <View style={styles.buttonWrapper} >
  //    <Button text={'Submit'} onPress={this.changeToSignIn}/>
  //   </View>
  // },

  // changeToSignIn: function(){
  //   this.props.navigator.push({name: 'signin'});
  // }

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
  },
  input: {
    flex: 0,
    margin: 4,
    padding: 8,
    fontSize: 18,
    height: 36
  },
  editable: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3
  }
})