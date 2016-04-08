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

  render: function() {

    console.log(this.props.route.passProps.photo);

    var isNew = this.props.route.passProps.isNew;

    return (

      <View style={styles.container}>
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
             // value = { this.state.activity.title }
            />
          </View>

          <View style={styles.descriptionWrapper}>
            <TextInput
              style={ [ styles.input, { flex: 3 }, isNew ? styles.editable : null ] } 
              multiline={true}
              maxLength={200}
              editable={ isNew }
              placeholder={'What makes this place so special?'}
              // value = { this.state.activity.description }
            />
           </View>
            
        </View>
          
        <View style={styles.buttonWrapper} >
          <Button text={'Submit'} onPress={this.changeToSignIn}/>
        </View>
      
      </View>    
    );
    
  },

  changeToSignIn: function() {
    this.props.navigator.push({name: 'signin'});
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
    position: 'relative'
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
    alignItems: 'stretch',
    justifyContent: 'center'
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