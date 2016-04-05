var React = require('react-native');
var Button = require('../common/button');

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


  render: function() {

    
    console.log("---->", this.props.route.passProps.isNew);
    console.log("---->", this.props.route.passProps.photo);
    return (
    
      <View style={styles.container}>
          
        <View style={[styles.header]}>
          <Image 
          source={{uri: this.props.route.passProps.photo}}
          style={styles.cover} 
          />
        </View>

        <View style={[styles.footer, this.border('green')]}>
          <View style={[styles.titleWrapper]}>
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },

  footer: {
    flex: 1
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

});