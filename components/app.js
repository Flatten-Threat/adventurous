import React, { Component } from 'react'
import MenuBar from './menu-bar'


export default class App extends Component {
  
  render() {
    return (
      <div>
        <MenuBar/>
        {this.props.children}
      </div>
    );
  }

};
