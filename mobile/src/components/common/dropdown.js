var React = require('react-native');

var {
  Component,
  AppRegistry,
  Text,
  View,
  StyleSheet
} = React;

const DropDown = require('react-native-dropdown');

const{
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

module.exports = class App extends Component {
  
  constructor(props) {
    super(props);

    this.state= {
      activity: ''
    };

  }

  componentDidMount(){
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['OPTIONLIST']);
  }

  _getOptionList(){
    return this.refs['OPTIONLIST'];
  }

  _activity(activityType) {
    
    this.setState({
      ...this.state,
      activity: activityType
    });
  
  }

  render() {
    return (
      <View>

        <Select style={styles.select}
        width={250}
        ref='SELECT1'
        optionListRef={this._getOptionList.bind(this)}
        defaultValue="Select a type of activity..."
        onSelect={this._activity.bind(this)}
        >
          <Option>Restaurant</Option>
          <Option>Bar</Option>
          <Option>Shopping</Option>
          <Option>Historical Landmark</Option>
          <Option>Museum</Option>
          <Option>Tour</Option>
          <Option>Outdoors</Option>       
        
        </Select>

        <OptionList ref="OPTIONLIST"/>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  select : {
    borderRadius: 5,
    borderWidth: 1
  }
})

AppRegistry.registerComponent('App', () => App);
