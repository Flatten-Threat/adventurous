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
          
        <View style={[styles.header]}>
          <Image source={{uri: this.props.route.passProps.photo}} style={styles.cover}/>
        </View>

        <View style={[styles.footer]}>
          <View style={[styles.titleWrapper]}>
          <TextInput
           style={ [styles.input, { textAlign: 'center' }, isNew ? styles.editable : null ] }
           editable={ isNew }
           placeholder={ 'add a title...' }
           value = { this.state.activity.title }
          />
          </View>
          {this.dropDownMenu()}
          <TextInput
            style={ [ styles.input, { flex: 3 }, isNew ? styles.editable : null ] } 
            multiline={true}
            maxLength={200}
            editable={ isNew }
            placeholder={'What makes this place so special?'}
            value = { this.state.activity.description }
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
  dropDownMenu: function() {
    return <View style={[styles.dropDownWrapper]}>
      <DropDown/>
    </View> 
  }

});


var styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 30 // offset for wifi, time, battery etc. display
  },
  header: {
    flex: 2,
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  footer: {
    flex: 3,
    paddingRight: 20,
    paddingLeft: 20
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
    alignItems: 'stretch',
    justifyContent: 'center'
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