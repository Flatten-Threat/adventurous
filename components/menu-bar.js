import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="menu-bar">
        <div className="title">AdventureUs</div>
        <div className="menu">
          <Link to="sign-in" className="menu-link">Sign In</Link>
        </div>
      </div>
    );
  }
})