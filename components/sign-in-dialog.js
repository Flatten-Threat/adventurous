import React, { Component } from 'react'
import { Link } from 'react-router'


export default class SignInDialog extends Component {

  render() {
    return (
      <div className="sign-in-dialog">
        <h2>Please Sign In...</h2>
        <form>
          <input type="text" placeholder="username" required />
          <input type="password" placeholder="password" required />
          {/* temp HACK uses Link in place of actual control below
          <input type="submit" value="Welcome Back"/>
          */}
          <Link to="travels" className="temp-hack-button">Welcome Back</Link>
        </form>
        <footer>
          <span>Not a member?</span><a href="#">Sign Up!</a>
        </footer>
      </div>
    )
  }

};

