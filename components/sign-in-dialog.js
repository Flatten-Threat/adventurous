import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="sign-in-dialog">
        <h4>Please Sign In...</h4>
        <input type="text" placeholder="username" required />
	    <br/>
	    <input type="password" placeholder="password" required />
	    <br/>
	    <button>Sign In</button>
      </div>
    )
  }
})
