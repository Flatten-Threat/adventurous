import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div className="menu-bar">
        <div className="title">Welcome to Trippin!</div>
        <div className="menu">
          <Link to="travels" className="menu-link">Travels</Link>
        </div>
      </div>
    );
  }
})
