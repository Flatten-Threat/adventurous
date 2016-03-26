import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MenuBar extends Component {

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

};