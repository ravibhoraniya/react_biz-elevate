import "./style.scss";

import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import RadioButton from "../../reusable-component/radiobutton";
import { withRouter } from 'react-router-dom';
import RButton from "../../reusable-component/button";
import {surveySchema} from '../../lib/schema';
import { _ } from 'underscore';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { storeSurveyData } from '../../actions/ad-network/ad-network-action';

class SurveyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  handleContinue = () => {
    const props = this.props;
    let surveyState = _.every(surveySchema);
    if(surveyState){
      let obj = surveySchema;
      obj.userId = props.signIn.data.userId;
      obj.userName = props.signIn.data.userName;
      storeSurveyData(obj).then(res => {
        if(res.success){
          props.handleClick();
        }
      });
    }else {
      this.setState({
        error: 'Please answer all mandatory fields'
      });
    }
  }

  render() {
    return (
      <div className="survey-page">
        {/* stepper code goes here */}
        <div className="content text-center mx-auto">
          <p className="heading-bold">Elevate your Business with us!</p>
          <div className="heading-content">
            <p>
              You have ambitious goals, we have the ambition to make them
              happen.
              <br />
              Stay up-to-speed with the latest advertising innovations.
              <br /> Access insights, KPI analysis and strategic advice for your
              ads.
            </p>
          </div>
        </div>
        <div className="survey-body mx-auto ">
          <p className="title text-center">Survey</p>
          <div className="question">
            Do you manage advertising on behalf of your clients?
          </div>
          <Row>
            <RadioButton
              formData={[
                {
                  type: "radio",
                  name: "manageAds",
                  value: "yes",
                  class: "input ",
                  id: "abc",
                  labelName: "Yes",
                  align: "col-12 input-grp"
                },
                {
                  type: "radio",
                  name: "manageAds",
                  value: "no",
                  class: "input",
                  id: "abc",
                  labelName: "No",
                  align: "col-12 input-grp"
                }
              ]}
            />
          </Row>
          <div className="question">
            How many people visit your website every day?
          </div>
          <RadioButton
            formData={[
              {
                type: "radio",
                name: "websiteVisit",
                value: "Less than 100",
                class: "row input ",
                id: "abc",
                labelName: "Less than 100",
                align: "input-grp"
              },
              {
                type: "radio",
                name: "websiteVisit",
                value: "101-1000",
                class: "row input ",
                id: "abc",
                labelName: "101-1000",
                align: "col-12 input-grp"
              },
              {
                type: "radio",
                name: "websiteVisit",
                value: "1001 - 5000",
                class: "row input",
                id: "abc",
                labelName: "1001 - 5000",
                align: "col-12 input-grp"
              },
              {
                type: "radio",
                name: "websiteVisit",
                value: "More than 5000",
                class: "row input",
                id: "abc",
                labelName: "More than 5000",
                align: "col-12 input-grp"
              }
            ]}
          />
          <div className="question">
            How many people buy or convert from your website everyday?
          </div>
          <RadioButton
            formData={[
              {
                type: "radio",
                name: "buyOrConvert",
                value: "Less than 10",
                class: "row ",
                id: "abc",
                labelName: "Less than 10",
                align: "input-grp"
              },
              {
                type: "radio",
                name: "buyOrConvert",
                value: "11-50",
                class: "row  ",
                id: "abc",
                labelName: "11-50",
                align: "col-12 input-grp"
              },
              {
                type: "radio",
                name: "buyOrConvert",
                value: "51 - 100",
                class: "row input",
                id: "abc",
                labelName: "51 - 100",
                align: "col-12 input-grp"
              },
              {
                type: "radio",
                name: "buyOrConvert",
                value: "More than 100",
                class: "row input",
                id: "abc",
                labelName: "More than 100",
                align: "col-12 input-grp"
              }
            ]}
          />
          <div className="question">
            {" "}
            How much do you spend on Facebook Ads every day?
          </div>
          <RadioButton
            formData={[
              {
                type: "radio",
                name: "fbAdSpend",
                value: "Less than $100",
                class: "row input ",
                id: "abc",
                labelName: "Less than $100",
                align: "input-grp"
              },
              {
                type: "radio",
                name: "fbAdSpend",
                value: "$101 - $1000",
                class: "row input ",
                id: "abc",
                labelName: "$101 - $1000",
                align: "col-12 input-grp"
              },
              {
                type: "radio",
                name: "fbAdSpend",
                value: "$1001 - $5000",
                class: "row input",
                id: "abc",
                labelName: "$1001 - $5000",
                align: "col-12 input-grp"
              },
              {
                type: "radio",
                name: "fbAdSpend",
                value: "More than $5000",
                class: "row input",
                id: "abc",
                labelName: "More than $5000",
                align: "col-12 input-grp"
              }
            ]}
          />
          <div className="question">
            {" "}
            How much do you spend on Google Ads every day?
          </div>
          <RadioButton
            formData={[
              {
                type: "radio",
                name: "googleAdSpend",
                value: "Less than $100",
                class: "row text-left input ",
                id: "abc",
                labelName: "Less than $100",
                align: "input-grp"
              },
              {
                type: "radio",
                name: "googleAdSpend",
                value: "$101 - $1000",
                class: "row input ",
                id: "abc",
                labelName: "$101 - $1000",
                align: "col-12 input-grp"
              },
              {
                type: "radio",
                name: "googleAdSpend",
                value: "$1001 - $5000",
                class: "row input",
                id: "abc",
                labelName: "$1001 - $5000",
                align: "col-12 input-grp"
              },
              {
                type: "radio",
                name: "googleAdSpend",
                value: "More than $5000",
                class: "row input",
                id: "abc",
                labelName: "More than $5000",
                align: "col-12 input-grp"
              }
            ]}
          />
          <p className='error'>{this.state.error}</p>
          <RButton
            text="CONTINUE"
            class='button submit-btn'
            click={() => this.handleContinue()}
          />
          <br />
          <a href="#abc" className="need-help">
            Need help?
          </a>
        </div>
        <Row className="logo-images">
          <Col>
            <img
              style={{ float: "right" }}
              src="/assets/bitmap-imgs/facebook.png"
              alt=''
            ></img>
          </Col>
          <Col>
            <img
              style={{ float: "left" }}
              alt=''
              src="/assets/bitmap-imgs/google.png"
            ></img>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  let data = { signIn: state.signIn };
  return data;
};

const mapDispatchToProps = dispatch => {
  const actions = {  };
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SurveyComponent));
