
import Categories from './categories';
var _ = require('underscore');

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  ListView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  DeviceEventEmitter,
  Dimensions
} from 'react-native';


export default class TestApp extends Component {

  constructor(props) {

    super(props);

    // explicit binding required in ES6...
    this.renderListRow = this.renderListRow.bind(this);
    this.showCategoryList = this.showCategoryList.bind(this);
    this.updateActivity = this.updateActivity.bind(this);
    this.save = this.save.bind(this);
    this.keyboardWillShow = this.keyboardWillShow.bind(this);
    this.KeyboardWillHide = this.KeyboardWillHide.bind(this);
    
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows( Categories.getCategories() );

    this.isNew = this.props.route.passProps.isNew;
    
    this.state = {
      activity: this.props.route.passProps.activity,
      visibleHeight: Dimensions.get('window').height,
      showList: false
    };
  }


  componentWillMount() {
    DeviceEventEmitter.addListener( 'keyboardWillShow', this.keyboardWillShow );
    DeviceEventEmitter.addListener( 'KeyboardWillHide', this.KeyboardWillHide );
  }


  render() {
    return (
      <View style={styles.container, { height: this.state.visibleHeight } } >

        <Image style={styles.image}
          source = {{ uri: this.state.activity.image }}
        />

        <View style={styles.footer} >

          <View style={styles.titleBar}>
            <TouchableHighlight style={styles.categoryButton}
              disabled={ !this.isNew }
              onPress={ this.showCategoryList }>
              <Image source={ Categories.getIcon(this.state.activity.category) } />
            </TouchableHighlight>
            <TextInput
              style={ styles.titleText }
              editable={ this.isNew }
              placeholder={ 'please add a category and title...' }
              onChangeText={ (text) => this.updateActivity({ title: text }) }
              value = { this.state.activity.title }
            />
          </View>

          { this.state.showList ? <ListView
            dataSource={this.dataSource}
            renderRow={ this.renderListRow }
            style={ styles.list }
          /> : null }

          { this.state.showList ? null : <TextInput
            style={ styles.description }
            multiline={true}
            maxLength={300}
            editable={ this.isNew }
            placeholder={'What makes this place so special?'}
            onChangeText={ (text) => this.updateActivity({ description: text }) }
            value = { this.state.activity.description }
          />}

          { this.isNew ? <TouchableHighlight
            style={ styles.saveButton }
            onPress={ this.save }
            underlayColor='gray' >
              <Text style={ styles.saveButtonText }>Save</Text>
            </TouchableHighlight>
          : null }

        </View>
      </View>
    );
  }


  renderListRow(rowData) {
    return <TouchableOpacity style={styles.listRow} onPress={ () => this.setCategory(rowData.category) }>
             <Image source={ rowData.icon } />
             <Text style={styles.listRowText} >
               { rowData.category }
             </Text>
           </TouchableOpacity>
  }


  // setState must replace ENTIRE element (can't set properties etc.)
  updateActivity( newValue ) {
    this.setState({
      activity: _.extend( this.state.activity, newValue )
    });
  }

  
  showCategoryList() {
    this.setState({ showList: true });
  }


  setCategory(name) {
    this.updateActivity({ category: name });
    this.setState({ showList: false });
  }


  save() {
    this.props.navigator.popToTop();
    this.props.route.passProps.initiateSave( this.state.activity );
  }


  keyboardWillShow(e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({ visibleHeight: newSize });
  }


  KeyboardWillHide(e) {
    this.setState({ visibleHeight: Dimensions.get('window').height });
  }

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#F5FCFF',
  },

  image: {
    flex: 3,
    resizeMode: 'cover'
  },

  footer: {
    flex: 2
  },

  titleBar: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },

  categoryButton: {
    width: 30,
    height: 29,
    overflow: 'hidden',
    margin: 2
  },

  titleText: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center'
  },

  description: {
    flex: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    padding: 8,
    margin: 4
  },

  list: {
    flex: 8
  },

  listRow: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  listRowText: {
    flex: 1,
    fontSize: 20,
    marginLeft: 8
  },

  saveButton: {
    flex: 1,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    paddingTop: 5,
    paddingLeft: 8,
    paddingBottom: 5,
    paddingRight: 8,
    marginBottom: 8,
    marginTop: 4
  },

  saveButtonText: {
    fontSize: 20
  }

});
