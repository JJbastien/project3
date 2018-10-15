import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';


 class Home extends Component {
   
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');}
      
    }
  
  render() {
    return (
      <div>
        <div className="home">
                <div className="dark-overlay home-inner text-light">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-3 mb-4">ITeachDrive
                        </h1>
                        <p className="lead">Create Link new Student account</p>
                        <hr />
                        <Link to="/" className="btn btn-lg btn-info mr-2">Adminstrator Home</Link>
                        <Link to="/Scheduler" className="btn btn-lg btn-light">Scheduler</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
  
      </div>
    )
  }
}
  Home.PropTypes = {
    auth:PropTypes.object.isRequired
}
const mapStateToProps = (state)=> ({
  auth:state.auth
})
export default connect(mapStateToProps)(Home)
