var React = require('react-native');
var Map = require('./components/map/map');
var Signin = require('./components/authentication/signin');
var Activity = require('./components/activities/activity');
var Camera = require('./components/camera/camera');
var NavBar = require('./components/common/navbar');

var {
  Navigator
} = React;

var Routes = {
  map: Map,
  signin: Signin,
  activity: Activity,
  camera: Camera
};


module.exports = React.createClass({

  renderScene: function (route, navigator) {
    var Component = Routes[route.name];
    return <Component route={route} navigator={navigator}/>;
  },

  render: function () {
    return (
        <Navigator
          style={{position: 'relative'}}
          navigationBar={<NavBar/>}
          renderScene={this.renderScene}
          initialRoute={{name: 'map', index: 0, passProps: {activityRootUrl: 'http://adventureus.herokuapp.com/api/activities'}}}
          configureScene={()=> Navigator.SceneConfigs.FloatFromRight }
        />
    );
  }

});


