import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
//import Background from '../img/class.jpg';

class Signin extends Component {
  handleFormSubmit({email, password }){
    console.log(email, password);
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>OOPS!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render(){
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <div className="login">
      <title>KYER Sign In</title>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <h3>Stand Up and Fight for Educational Rights!</h3>
          <fieldset className="form-group">
            <label></label>
            <input {...email} className="form-control" placeholder="Email" />
          </fieldset>
          <fieldset className="form-group">
            <label></label>
            <input {...password} type="password" className="form-control" placeholder="Password"/>
          </fieldset>
          { this.renderAlert()}
        <button action="submit" className="btn btn-primary button">SIGN IN</button>
        <h4>OR</h4>
        <button className="btn btn-primary button">REGISTER</button><br/>
        <h3>Right of the Day</h3>
        <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>

      </form>
    </div>
    );
  }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email' , 'password']
}, mapStateToProps, actions)(Signin);
