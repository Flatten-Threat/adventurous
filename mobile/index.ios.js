<<<<<<< HEAD
var React = require('react-native');
var Main = require('./src/main.js');

React.AppRegistry.registerComponent('adventureus', () => Main)
=======
/**********************************************************************
  Standard cross-platform (ios/android) strategy (uses Main as 'root')
***********************************************************************/

//app registry is how we tell react native what its most core component is
var React = require('react-native');

//requires main and requires it as its main component
var Main = require('./src/main.js');


React.AppRegistry.registerComponent('adventureus', () => Main)

/*
// IOS-specific: Override navigator method for wider back swiping margin
// see: http://adrian-philipp.com/post/react-native-navigator-swipe-from-middle/

const SCREEN_WIDTH = require('Dimensions').get('window').width;

const FloatFromRight = {
  ...Navigator.SceneConfigs.FloatFromRight,
  gestures: {
    pop: {
      ...Navigator.SceneConfigs.FloatFromRight.gestures.pop,
      edgeHitWidth: SCREEN_WIDTH / 2,
    },
  },
};
*/
>>>>>>> 0313886ba058e4158fed960871128c283c43626e
