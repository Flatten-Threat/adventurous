import React from 'react'
import MenuBar from './menu-bar'

export default React.createClass({
  render() {
    return (
      <div>
        <MenuBar/>
        {this.props.children}
      </div>
    );
  }
})
