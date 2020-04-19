import './style.scss';

import { Col, Row } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import FormComponent from '../../reusable-component/form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signInAction } from '../../actions/auth/sign-in/sign-in-action';

class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  signInUser = values => {
    console.log(values);
    this.props.signInAction(values.data);
  }
  render() {
    if(!!!this.props.error.data && this.props.userSignIn.data){
      if(this.props.userSignIn.data.fbData){
        this.props.history.push('/campaigns');
      }else { this.props.history.push('/registrations'); }
    }
    return (
      <div className="container-fluid">
        <Row className="sign-in text-center">
          <Col className="left">
          <img className='header-logo' alt="" src="/assets/bitmap-imgs/logo1.png"></img>
            <div className='sub-title'>Grow your business with BizzElevate</div>
            <div className='content'>
              BizzElevate.io gives businesses the tools to leverage their data
              and build a centralized view of each customer, powering effective
              marketing decisions from a single platform.
            </div>
            <img src="/assets/bitmap-imgs/finance.png" alt=''/>
            <Row className='text-center'>
            </Row>
            <Row className="logo-images">
                <Col><img style={{float: 'right'}} src='/assets/bitmap-imgs/facebook.png' alt=''/></Col>
                <Col><img style={{float: 'left'}} src='/assets/bitmap-imgs/google.png' alt=''/></Col>
            </Row>
          </Col>
          <Col className="right">
          <div className='form-block'>
            <span className="title">Welcome Back</span>
            <div className="form">
              <div className="form-border row">
                <FormComponent
                  formData={[
                    {
                      tag: 'input',
                      type: 'text',
                      label: 'Username',
                      // error: 'warning goes here',
                      errorClass: 'warning',
                      name: 'username',
                      value: null,
                      placeholder: 'Username',
                      class: 'input',
                      align: 'col-12 input-grp',
                    },
                    {
                      tag: 'input',
                      type: 'password',
                      label: 'Password',
                      // error: 'suggestion goes here',
                      errorClass: 'suggestion',
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
                      value: 'Login',
                      class: 'login',
                      action: this.signInUser,
                      align: 'col-12',
                    },
                  ]}
                />
                {/* <FormComponent
                  formData={[
                    {
                      tag: 'checkbox',
                      type: 'checkbox',
                      value: 'Keep me logged in',
                      class: 'inp-checkbox',
                      align: 'col-6',
                    },
                  ]}
                /> */}
                {(this.props.error && this.props.error.data) ? 
                <div className='error'>{this.props.error.data}</div>:null}
                <span className='col-6'><Link to='/verify-email'><span href='#abc' className='forget-password'>Forgot Password?</span></Link></span>
                <Col className="footer">
                  <Link to='/sign-up'><span href="/sign-up" className="terms-and-privacy">Click here to register</span></Link>
                </Col>
              </div>
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
  let data = {userSignIn: state.signIn, error: state.error};
  return data;
};

const mapDispatchToProps = dispatch => {
  const actions = { signInAction };
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignInComponent));
