import React, { Component } from "react";
import {
  Row,
  Col,
  Dropdown,
  Button,
  ButtonGroup,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import RInput from "../../../reusable-component/input";
import {
  getPaymentMethod,
  createCampaign,
  getCampaigns
} from "../../../actions/campaigns/create-campaign-action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RButton from "../../../reusable-component/button";
import { _ } from "underscore";
import { CAMPAIGNS } from '../../../lib/constant';
import NavBarComponent from '../../navigation/nav-bar';
import RTimeline from '../../../reusable-component/timeline';
import RDropdown from '../../../reusable-component/dropdown';

import "./style.scss";

class CreateCampaignComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedState: false,
      selectedBillingAcc: "Select dropdown menu",
      billingAccountList: ["No billing account is found"],
      optimizationCheck: false,
      selectedBudget: "Daily Budget",
      campaignType: 'new',
      campaignsList: [],
      budget: null,
      ids: {
        specialAdCategory: null,
        objective: {
          row: null,
          col: null
        },
      },
      currentAdAccount: {
        id: "",
        name: "Select ad account"
      },
      obj: {
        campaignName: null,
        marketObjective: null,
        specialAdCategory: null,
        userId: null,
        adAccountId: null
      }
    };
  }

  selectbillingAccount = value => {
    this.setState({
      selectedBillingAcc: value
    });
  };

  selectedAdAccount = (adAccountId, name, userId) => {
    this.setState({
      currentAdAccount: {
        id: adAccountId,
        name
      }
    });
    getPaymentMethod({
      userId,
      adAccountId
    }).then(res => {
      let list = this.state.billingAccountList;
      if (res && res.funding_source_details) {
        list.push(res.funding_source_details.display_string);
        this.setState({
          selectedBillingAcc: res.funding_source_details.display_string,
          billingAccountList: list
        });
      } else {
        list = ["No billing account found"];
        this.setState({
          selectedBillingAcc: "No billing account found",
          billingAccountList: list
        });
      }
    });
  };

  handleChange = e => {
    let obj = this.state.obj;
    obj[e.target.id] = e.target.value;
    this.setState({
      obj
    });
  };

  handleSpecialAdCheck = e => {
    this.setState({
      checkedState: e.target.checked
    });
  };

  handleSpecialAdCategory(idx, value) {
    console.log(idx);
    let obj = this.state.obj;
    let ids = this.state.ids;
    ids.specialAdCategory = idx;
    obj.specialAdCategory = value;
    this.setState({
      obj,
      ids
    });
  };

  handleOptimizationCheck = e => {
    this.setState({
      optimizationCheck: e.target.checked
    });
  };

  handleBudgetClick = value => {
    this.setState({
      selectedBudget: value
    });
  };

  handleCampaignType = value => {
    if(value === 'existing'){
      getCampaigns({userId: this.props.signIn.data.userId, adAccountId: 'act_2711494898882012'}).then(res => {
        let temp = [];
        _.each(res, campaign => {
          temp.push(campaign.id)
        });
        this.setState({campaignsList: temp});
      })
    }
    this.setState({
      campaignType: value
    });
  };

  handleSelectedCampaign = () => {

  }

  handleMarketObjective(value, rowId, colId){
    let obj = this.state.obj;
    let ids = this.state.ids;
    ids.objective.row = rowId;
    ids.objective.col = colId;
    obj.marketObjective = value;
    this.setState({
      obj,
      ids
    });
  };

  handleBudgetValue = e => {
    this.setState({
      budget: e.target.value
    });
  };

  createCampaign = () => {
    let {
      currentAdAccount,
      selectedBillingAcc,
      campaignType,
      checkedState,
      obj,
      selectedBudget,
      budget
    } = this.state;
    let dataObj = this.state.obj;
    dataObj.userId = this.props.signIn.data.userId;
    dataObj.adAccountId = currentAdAccount.id;
    dataObj.campaignType = campaignType;
    dataObj.specialAdCategory = checkedState ? obj.specialAdCategory : "NONE";
    dataObj.optimizationBudget = selectedBudget
      ? { budget: budget, budgetType: selectedBudget }
      : null;
    if (
      selectedBillingAcc !== "No billing account found" &&
      !!dataObj.marketObjective &&
      !!campaignType &&
      !!dataObj.campaignName
    ) {
      console.log(dataObj);
      this.props.createCampaign(obj);
    } else {
      console.log("Nope");
    }
  };

  render() {
    const { signIn } = this.props;
    if(this.props.campaigns && this.props.campaigns.success){
      this.props.handleClick();
    }
    return (
      <div id="right-panel" className="campaign right-panel">
        <NavBarComponent auth={true}/>
        <div id='campaignType'/>
        <div className='container-fluid row camp-block'>
        <RTimeline timelines={CAMPAIGNS.timeline} />
        <div className="col-9 content-block">
        <h2 className="header">Create Campaign</h2>
        <p className="sub-title">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when a scrambled it to make specimen book.
        </p>
        <hr className="divider" />
        <div className="campaign-type">
          <span>Select Ad Account</span>
          <br />
          <Dropdown as={ButtonGroup}>
            <Button variant="success" className="btn-1">
              {this.state.currentAdAccount.name}
            </Button>
            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-basic"
              className="btn-toggle-1"
            />
            <Dropdown.Menu >
              {_.map(signIn.data.adAccountList, (data, idx) => (
                <Dropdown.Item
                  key={idx}
                  href="#/action-1"
                  onClick={() =>
                    this.selectedAdAccount(
                      data.id,
                      data.name,
                      signIn.data.userId
                    )
                  }
                >
                  {data.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <p id='selectCampaignType' />
          <p>Select Campaign Type</p>
          <Row>
            <Col>
              <div
                className={
                  this.state.campaignType === "new"
                    ? "create-campaign campaign-active text-center"
                    : "create-campaign text-center"
                }
                onClick={() => this.handleCampaignType("new")}
              >
                <img src="/assets/icons/create-campaign/folder.png" alt="" />
                <p>Create new campaign</p>
              </div>
            </Col>
            <Col>
              <div
                className={
                  this.state.campaignType === "existing"
                    ? "existing-campaign campaign-active text-center"
                    : "existing-campaign text-center"
                }
                onClick={() => this.handleCampaignType("existing")}
              >
                <img
                  src="/assets/icons/existing-campaign/folder (1).png"
                  alt=""
                />
                <p>Use existing campaign</p>
              </div>
            </Col>
            <Col />
            <Col />
            <Col />
          </Row>
        </div>
        <div id='specialAdCategory'/>
        <p />
        {this.state.campaignType === "new" ? (
          <>
            <RInput
              id="campaignName"
              label="Campaign Name"
              type="input"
              placeholder="Enter campaign name"
              handleChange={this.handleChange}
            />
            <OverlayTrigger
              placement={"right"}
              overlay={
                <Tooltip id={`tooltip-right`}>
                  Campaign name is mandatory field
                </Tooltip>
              }
            >
              <img
                className="info-icon"
                src="/assets/icons/info/information (1).png"
                alt=""
              />
            </OverlayTrigger>
            <br />
            <p />
            <span>Billing Account</span>
            <br />
            <div id='marketingObjective'/>
            <Dropdown as={ButtonGroup}>
              <Button variant="success" className="btn-1">
                {this.state.selectedBillingAcc}
              </Button>
              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-basic"
                className="btn-toggle-1"
              />
              <Dropdown.Menu alignRight>
                {_.map(this.state.billingAccountList, (data, idx) => (
                  <Dropdown.Item
                    key={idx}
                    href="#/action-1"
                    onClick={() => this.selectbillingAccount(data)}
                  >
                    {data}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <OverlayTrigger
              placement={"right"}
              overlay={
                <Tooltip id={`tooltip-right`}>
                  Please setup your billing method to proceed further.
                </Tooltip>
              }
            >
              <img
                className="info-icon"
                src="/assets/icons/info/information (1).png"
                alt=""
              />
            </OverlayTrigger>
            <br />
            <p />
            <span>
              Special Ad Category
              <span>
                &nbsp;- (check mark if the ads are related to housing,
                Employment, Credit or Business)
              </span>
              <a href="#abc" className="need-help-lnk">
                Need help for choosing a special Ad category?
              </a>
            </span>
            <br />
            <div className="checkbox">
              <input
                id="specialAdCategoryCheck"
                type="checkbox"
                className="custom-control-input"
                onChange={this.handleSpecialAdCheck}
                defaultChecked={this.state.checkedState}
              />
              <label
                htmlFor="specialAdCategoryCheck"
                className="custom-control-label account-label"
              >
                I'm creating a campaign for ads in a Special Ad Category.
                <br />
                <span>Ads related to credit, employment or housing.</span>
              </label>
            </div>
            {this.state.checkedState ? <Row className="ad-category">
              <p className="col-12">
                Ad category
                <img
                  className="info-icon"
                  src="/assets/icons/info/information (1).png"
                  alt=""
                />
              </p>
              {_.map(CAMPAIGNS.AD_CATEGORY, (data, idx) =>
                data.col !== "col-2" ? (
                  <div
                    key={idx}
                    id={idx}
                    className={data.col}
                    onClick={() => this.handleSpecialAdCategory(idx, data.title)}
                  >
                      <div className={`ad-type row ${idx === this.state.ids.specialAdCategory ? 'active' : null}`}>
                      <div className="col-2 icon-block">
                        <img src={data.img} alt="" />
                      </div>
                      <div className="col-10 content-block">
                        <span className="title">{data.title}</span>
                        <br />
                        <br />
                        <span className="sub-title">{data.subTitle}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={idx}>
                    <div className={data.col}></div>
                    <p className="col-12"></p>
                  </div>
                )
              )}
              <p className="col-12">
                To help you comply with our Advertising Policies, some audience
                selection options are unavailable or limited for ads in special
                categories. <a href="#abc">Click here to see details.</a>
              </p>
            </Row>:null}
            <p />
            <span>
              What's your marketing objective?
              <a href="#abc" className="need-help-lnk">
                Need help for choosing an objective?
              </a>
            </span>
            <br />
            <div style={{ margin: "0px 15px" }}>
              <Row className="objective">
                {_.map(CAMPAIGNS.OBJECTIVES, (data, id) => 
                <Col key={id} className="text-center">
                  <div className="headers">{data.title}</div>
                  {_.map(data.menu, (menu, idx) => (
                    <div
                      key={idx}
                      id={idx}
                      className={`row blocks ${this.state.ids.objective.row === idx && this.state.ids.objective.col === id ? 'active' : null}`}
                      onClick={(e) => this.handleMarketObjective(menu, idx, id)}
                    >
                      <div className="col-2">
                        <img
                          src="/assets/icons/portfolio/portfolio.png"
                          alt=""
                        />
                      </div>
                      <div className="col-10 title">{menu}</div>
                    </div>
                  ))}
                </Col>)}
              </Row>
            </div>
            <p />
            <div id='budgetOptimization'/>
            <span>
              Campaign Budget Optimization
              <span>&nbsp;- (lorem ipsum dollar site amet dummy text)</span>
              <a href="#abc" className="need-help-lnk">
                Need help for choosing a special Ad category?
              </a>
            </span>
            <br />
            <div className="checkbox">
              <input
                id="optimizationCheck"
                type="checkbox"
                className="custom-control-input"
                onChange={this.handleOptimizationCheck}
                defaultChecked={this.state.optimizationCheck}
              />
              <label
                htmlFor="optimizationCheck"
                className="custom-control-label account-label"
              >
                Optimization Budget across ad sets
              </label>
            </div>
            {this.state.optimizationCheck ? (
              <Row className="ad-category">
                <p className="col-12">
                  Campaign Budget
                  <img
                    className="info-icon"
                    src="/assets/icons/info/information (1).png"
                    alt=""
                  />
                </p>
                <Dropdown as={ButtonGroup} style={{ marginLeft: "15px" }}>
                  <Button variant="success" className="btn-1">
                    {this.state.selectedBudget}
                  </Button>
                  <Dropdown.Toggle
                    split
                    variant="success"
                    id="dropdown-basic"
                    className="btn-toggle-1"
                  />
                  <Dropdown.Menu alignRight>
                    {_.map(
                      ["Daily Budget", "Life time Budget"],
                      (data, idx) => (
                        <Dropdown.Item
                          key={idx}
                          href="#/action-1"
                          onClick={() => this.handleBudgetClick(data)}
                        >
                          {data}
                        </Dropdown.Item>
                      )
                    )}
                  </Dropdown.Menu>
                </Dropdown>
                &nbsp;
                <RInput
                  id="budget"
                  type="input"
                  placeholder="Enter Budget"
                  handleChange={this.handleBudgetValue}
                />
                <p className="col-12" />
                <p className="col-12">
                  Actual amount spent daily may vary.
                  <a href="#abc">Click here to see details.</a>
                </p>
              </Row>
            ) : null}
            <br />
            <div style={{ textAlign: "center" }}>
              <RButton
                class="button"
                click={this.createCampaign}
                text="Continue"
              />
            </div>{" "}
          </>
        ) : (
          <RDropdown 
            label="Existing Campaigns"
            dataArr={this.state.campaignsList}
            styles="dropdown-style"
            action={this.handleSelectedCampaign}
          />
        )}
      </div>
      </div>
      {/* </Col> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  let data = { signIn: state.signIn, error: state.error, campaignsData: state.campaigns };
  if(state.campaigns && state.campaigns.campaignsData){
    data.campaignsData = state.campaigns.campaignsData;
  }
  return data;
};

const mapDispatchToProps = dispatch => {
  const actions = { createCampaign };
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateCampaignComponent));
