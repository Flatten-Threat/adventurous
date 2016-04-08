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
         navigationBar={<NavBar />}
         //determines what first component is when navigator is first rendered
         initialRoute={{name: 'map'}}
         //contains functionality that tells the navigator how to render at any given time
         renderScene={this.renderScene}
         //how newly rendered components will appear to the user / LIKE AN ANIMATION
         configureScene={()=> Navigator.SceneConfigs.FloatFromRight }
          /> 
    );
  }

});


