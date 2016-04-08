'use strict' // jenna
var React = require('react-native');
var Button = require('../common/button');
var _ = require('underscore');

var {
  StyleSheet,
  View,
  TextInput,
  Image,
  DeviceEventEmitter, // jenna
  Dimensions // jenna
} = React;

module.exports = React.createClass({


  getInitialState: function() {
    return {
      activity: this.props.route.passProps.activity,
      visibleHeight: Dimensions.get('window').height // jenna
    };
  },

  componentWillMount: function() { // jenna
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow);
    DeviceEventEmitter.addListener('KeyboardWillHide', this.KeyboardWillHide);
  },

  render: function(){

    var isNew = this.props.route.passProps.isNew;

    return (

      <View style={ styles.container, { height: this.state.visibleHeight }}>
        <View style={styles.header}>
          <Image 
          source={{uri: this.props.route.passProps.photo}}
          // source={require('../images/Traveler.jpg')}
          style={styles.cover}
          resizeMode={'cover'}
          />
        </View>

        <View style={styles.footer}>
          
          <View style={[styles.titleWrapper]}>

          <TextInput
           style={ [styles.input, { textAlign: 'center' }, isNew ? styles.editable : null ] }
           editable={ isNew }
           placeholder={ 'add a title...' }
           onChangeText={ (text) => this.updateActivity({ title: text }) }
           value = { this.state.activity.title }
          />
          </View>

          <TextInput
            style={ [ styles.input, { flex: 3 }, isNew ? styles.editable : null ] } 
            multiline={true}
            maxLength={200}
            editable={ isNew }
            placeholder={'What makes this place so special?'}
            onChangeText={ (text) => this.updateActivity({ description: text }) }
            value = { this.state.activity.description }
          />
          { isNew ? // only show 'save' button if this is a NEW activity
            <View style={styles.buttonWrapper}>
              <Button text={'Save'} onPress={ this.save }/>
            </View>
            : null
          }
        </View>
      
      </View>    
    )
  },

  // setState replaces ENTIRE element (can't set properties etc.)
  updateActivity: function( newValue ) {
    this.setState({
      activity: _.extend( this.state.activity, newValue )
    });
  },

  save: function() {
    this.props.navigator.popToTop();
    this.props.route.passProps.initiateSave( this.state.activity );
  },

  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  },

  keyboardWillShow: function(e) { // jenna
    let newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({ visibleHeight: newSize });
  },

  KeyboardWillHide: function(e) { // jenna
    this.setState({ visibleHeight: Dimensions.get('window').height });
  }
  
});


var styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:'white',
    marginTop: 30
  },

  header: {
    flex: 2,
  },

  cover: {
    flex: 1,
    width: null,
    height: null,
  },

  footer: {
    flex: 1
  },

  titleWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },

  descriptionWrapper: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center'
  },

  buttonWrapper: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },

  input: {
    flex: 0,
    margin: 4,
    padding: 8,
    fontSize: 18,
    height: 36,
    color: 'gray',
  },

  editable: {
    borderColor: '#FFD8C7',
    borderWidth: 1,
    borderRadius: 10
  }

});