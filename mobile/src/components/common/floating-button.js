/**********************************
   NOTE OUR USE OF ES6 SYNTAX !!!
***********************************/

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';


export default class FloatingButton extends Component {

  render () {

    return(
      <TouchableOpacity onPress={ this.props.onPress } >
        <View style={ [styles.floatingButton, {backgroundColor: this.props.bkColor} ] } >
          <Text style={ [styles.buttonText, {color: this.props.color}] }>
            { this.props.text }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

};


var styles = StyleSheet.create ({

  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    paddingTop: 3,
    paddingRight: 10,
    paddingBottom: 3,
    paddingLeft: 10,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },

  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  }

});