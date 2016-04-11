'use strict';
var React = require('react-native');
var Button = require('../common/button');
var ListPopover = require('react-native-list-popover');
var _ = require('underscore');


var {
  StyleSheet,
  View,
  TextInput,
  Image,
  DeviceEventEmitter,
  Dimensions,
  TouchableHighlight
} = React;


module.exports = React.createClass({

  getInitialState: function() {
    return {
      activity: this.props.route.passProps.activity,
      visibleHeight: Dimensions.get('window').height,
      isVisible: false
    };
  },


  componentWillMount: function() {
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow);
    DeviceEventEmitter.addListener('KeyboardWillHide', this.KeyboardWillHide);
  },


  render: function() {

    var isNew = this.props.route.passProps.isNew;

    return (

      <View style={ styles.container, { height: this.state.visibleHeight } }>
        <View style={styles.header}>
          <Image
            source={{uri: this.props.route.passProps.photo}}
            // source={require('../images/Traveler.jpg')}
            style={styles.cover}
            resizeMode={'cover'}
            />
        </View>

        <View style={styles.footer}>
          
          <View style={[ styles.titleWrapper, isNew ? styles.editable : null ]}>
            <TouchableHighlight style={styles.categoryButton} disabled={!isNew} onPress={ this.showCategoryList }>
              <Image source={ require('../map/images/category-undefined.png') } />
            </TouchableHighlight>
            <TextInput
             style={ [styles.input, styles.inputWithIcon, { textAlign: 'center' } ] }
             editable={ isNew }
             placeholder={ 'please add a category and title...' }
             onChangeText={ (text) => this.updateActivity({ title: text }) }
             value = { this.state.activity.title }
            />
          </View>

          { isNew ? <ListPopover containerStyle={ {backgroundColor: 'white' } }
            list={[
              'restaurant',
              'shopping',
              'bar',
              'coffee',
              'museum-art',
              'groceries',
              'books',
              'hotel',
              'garden',
              'hiking',
              'sports'
            ]}
            isVisible={this.state.isVisible}
            onClick={this.setItem}
            onClose={this.closePopover}
          /> : null }

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
    );
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
    };
  },


  keyboardWillShow: function(e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({ visibleHeight: newSize });
  },


  KeyboardWillHide: function(e) {
    this.setState({ visibleHeight: Dimensions.get('window').height });
  },


  showCategoryList: function() {
    this.setState({isVisible: true});
  },
  
  closePopover: function() {
    this.setState({isVisible: false});
  },

  setItem: function( category ) {
    this.updateActivity({ category: category });
  },
  
});



var styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white',
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
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  categoryButton: {
    width: 30,
    height: 29,
    overflow: 'hidden',
    margin: 2,
    marginLeft: 4
  },

  categoryImage: {
    resizeMode: 'cover'
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
    color: 'gray',
  },

  inputWithIcon: {
    flex: 1,
    margin: 0
  },

  editable: {
    borderColor: '#7A87A7',
    borderWidth: 1,
    borderRadius: 10
  }

});