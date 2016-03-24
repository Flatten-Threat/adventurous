import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="sign-in-dialog">
        <h2>Please Sign In...</h2>
        <form>
          <input type="text" placeholder="username" required />
          <input type="password" placeholder="password" required />
          <input type="submit" value="Welcome Back"/>
        </form>
        <footer>
          <span>Not a member?</span><a href="#">Sign Up!</a>
        </footer>
      </div>
    )
  }
})

