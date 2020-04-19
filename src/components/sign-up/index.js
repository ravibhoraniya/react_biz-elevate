import './style.scss';

import { Col, Row } from 'react-bootstrap';
import { Link, Redirect, withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import FormComponent from '../../reusable-component/form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signUpAction } from '../../actions/auth/sign-up/sign-up-action';
import { clearError } from '../../actions/error-action';
import { _ } from 'underscore';

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        name: null,
        username: null,
        companyName: null,
        mobileNumber: null,
        email: null,
        password: null
      }
    };
  }

  checkFields(values, field){
    return values.data && values.data[field] ? null: 'Field is required';
  }

  signUpUser = values => {
    let errorObj = this.state.errors;
    errorObj.name = this.checkFields(values, 'name');
    errorObj.username = this.checkFields(values, 'username');
    errorObj.companyName = this.checkFields(values, 'companyName');
    errorObj.mobileNumber = this.checkFields(values, 'mobileNumber');
    errorObj.email = this.checkFields(values, 'email');
    errorObj.password = this.checkFields(values, 'password');
    this.setState({
      errors: errorObj
    });
    let result = _.every(_.values(errorObj), function(v) {return !v;});
    if(result){
      this.props.signUpAction(values.data);
    }
  };

  handleClick = () => {
    this.props.clearError();
  }
  
  render() {
    const {errors} = this.state;

    if(this.props.userSignUp.data && this.props.userSignUp.data.success){
      return <Redirect to='/otp' />;
    }
    return (
      <div className="container-fluid">
        <Row className="sign-up text-center">
          <Col className="left">
          <img className='header-logo' src="/assets/bitmap-imgs/logo1.png" alt='' />
            <div className='sub-title'>Grow your business with BizzElevate</div>
            <div className='content'>
              BizzElevate.io gives businesses the tools to leverage their data
              and build a centralized view of each customer, powering effective
              marketing decisions from a single platform.
            </div>
            <img src="/assets/3bitmap-imgs/social-dashboard.png" className='thumbnail' alt='' />
            <Row className="logo-images">
                <Col><img alt='' style={{float: 'right', paddingBottom: '10%'}} src='/assets/bitmap-imgs/facebook.png'/></Col>
                <Col><img alt='' style={{float: 'left' , paddingBottom: '10%'}} src='/assets/bitmap-imgs/google.png'/></Col>
            </Row>
               <Row>
                <Col><a href="/terms-of-service" className="terms-and-privacy">Terms of Service</a></Col>
                <Col><Link to='/privacy-policy' className="terms-and-privacy">Privacy policy</Link></Col>
            </Row>
            
          </Col>
          <Col className="right">
            <span className="title">Welcome</span>
            <div className="form">
              <div className="form-border row">
                <FormComponent
                  formData={[
                    {
                      tag: 'input',
                      type: 'text',
                      label: 'Name',
                      error: errors.name,
                      errorClass: 'warning',
                      name: 'name',
                      value: null,
                      placeholder: 'Ex. steve smith',
                      class: 'input',
                      align: 'col-12 input-grp',
                    },
                    {
                      tag: 'input',
                      type: 'text',
                      label: 'Username',
                      error: errors.username,
                      errorClass: 'warning',
                      name: 'username',
                      value: null,
                      placeholder: 'Username',
                      class: 'input',
                      align: 'col-12 input-grp',
                    },
                    {
                      tag: 'input',
                      type: 'text',
                      label: 'Company Name',
                      error: errors.companyName,
                      errorClass: 'warning',
                      name: 'companyName',
                      value: null,
                      placeholder: 'Enter company name',
                      class: 'input',
                      align: 'col-12 input-grp',
                    },
                    {
                      tag: 'input',
                      type: 'text',
                      label: 'Country Code',
                      name: 'countryCode',
                      value: null,
                      placeholder: 'Country code',
                      class: 'input',
                      align: 'col-4 input-grp',
                    },
                    {
                      tag: 'input',
                      type: 'text',
                      label: 'Mobile Number',
                      error: errors.mobileNumber,
                      errorClass: 'warning',
                      name: 'mobileNumber',
                      value: null,
                      placeholder: 'Mobile Number',
                      class: 'input',
                      align: 'col-8 input-grp',
                    },
                    {
                      tag: 'input',
                      type: 'email',
                      label: 'Email',
                      error: errors.email,
                      errorClass: 'warning',
                      name: 'email',
                      value: null,
                      placeholder: 'Email',
                      class: 'input',
                      align: 'col-12 input-grp',
                    },
                    {
                      tag: 'input',
                      type: 'password',
                      label: 'Password',
                      error: errors.password,
                      errorClass: 'warning',
                      name: 'password',
                      value: null,
                      placeholder: 'Enter password',
                      class: 'input col-12 inp-icn',
                      align: 'col-12 input-grp',
                      icon: '/assets/icons/eye-icon/eye-icon.png',
                      icon2: '/assets/icons/eye-close-icon/eye-close-icon.png'
                    },
                    {
                      tag: 'input',
                      type: 'button',
                      value: 'Register',
                      class: 'register',
                      action: this.signUpUser,
                      align: 'col-12',
                    },
                  ]}
                />
                {(this.props.error && this.props.error.data) ? 
                <span className='col-12 warning' style={{paddingTop: '10px'}}>{this.props.error.data}</span>:null}
                <Col className='footer'><Link to='/' onClick={this.handleClick} style={{ color: '#41b3c4', textDecoration:'underline'}}>Click here to login</Link></Col>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  let data = {userSignUp: state.signUp, error: state.error};
  return data;
};

const mapDispatchToProps = dispatch => {
  const actions = { signUpAction, clearError };
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpComponent));
