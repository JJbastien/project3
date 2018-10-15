import React, { Component } from 'react'

 class Login extends Component {
  render() {
    return (
        <div>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Login</h1>
                <p className="lead text-center">Scheduler</p>
                <form action="create-profile.html">
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" />
                    <small className="form-text text-muted"></small>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" />
                  </div>
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    )
  }
}
export default Login