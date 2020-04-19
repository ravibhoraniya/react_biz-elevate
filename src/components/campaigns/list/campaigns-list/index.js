import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { _ } from "underscore";

import SideBarComponent from "../../../navigation/side-nav";
import NavBarComponent from "../../../navigation/nav-bar";
import RTable from "../../../../reusable-component/table";
import { Row, Col, Button, Tab, Tabs } from "react-bootstrap";
import RButton from "../../../../reusable-component/button";
import { TABLE } from "../../../../lib/constant";

import {
  getCampaignsList,
  createCampaignCopies
} from "../../../../actions/campaigns/create-campaign-action";
import {createAdsetCopies} from '../../../../actions/campaigns/adsets-action';
import {createAdCopies} from '../../../../actions/campaigns/ad-action';
import { adsetMapper, adsMapper } from "./methods";
import Switch from "react-switch";
import "./style.scss";
import RDropdown from "../../../../reusable-component/dropdown";
import TableBar from "./tableBar";
import ModalComponent from "./modal/modal";

class CampaignsListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignList: [],
      adsetList: [],
      adsList: [],
      campaignSwitchesStates: {},
      adsetSwitchesStates: {},
      adsSwitchesStates: {},
      checked: false,
      modal: false,
      selectedTab: "campaigns",
      checkboxState: false,
      selectedListId: null
    };
  }

  componentDidMount() {
    this.getListData();
  }

  getListData() {
    getCampaignsList({
      userId: this.props.signIn.data.userId,
      adAccountId: "act_189522688767499"
    }).then(res => {
      let temp = [];
      let adsTemp = [];
      let campaignTempState = {};
      let adsTempState = {};
      _.each(res, (data, idx) => {
        let obj = {};
        campaignTempState[`${data.name}${idx}`] =
          data.effective_status === "ACTIVE" ? true : false;
        obj.col1 = {
          id: data.id,
          accountId: data.account_id,
          campaignName: data.name,
          delivery: data.effective_status,
          graph: "#abc",
          chart: "#abc",
          edit: "#abc",
          duplicate: "#abc"
        };
        obj.col2 = "Using adsets budget";
        if (data.insights && data.insights.data) {
          let insightObj = data.insights.data.find(
            insight => insight.account_id === data.account_id
          );
          // console.log('Insight obj ', insightObj);
          if (insightObj.objective === "PAGE_LIKES") {
            let actionResult = insightObj.actions.find(
              action => action.action_type === "like"
            );
            let actionLinkClickResult = insightObj.actions.find(
              action => action.action_type === "link_click"
            );
            let costPerActionResult = insightObj.cost_per_action_type.find(
              costPerAction => costPerAction.action_type === "like"
            );
            obj.col3 = actionResult.value;
            obj.col6 = costPerActionResult.value;
            obj.col9 = actionResult.value;
            obj.col10 = actionLinkClickResult.value;
          }

          obj.col4 = insightObj.reach;
          obj.col5 = insightObj.impressions;
          obj.col7 = insightObj.spend;
          obj.col8 = insightObj.date_stop;
        } else {
          obj.col3 = "---";
          obj.col4 = "---";
          obj.col5 = "---";
          obj.col6 = "---";
          obj.col7 = "---";
          obj.col8 = "---";
          obj.col9 = "---";
          obj.col10 = "---";
        }
        temp.push({
          col1: obj.col1,
          col2: obj.col2,
          col3: obj.col3,
          col4: obj.col4,
          col5: obj.col5,
          col6: obj.col6,
          col7: obj.col7,
          col8: obj.col8,
          col9: obj.col9,
          col10: obj.col10
        });
        // ADSETS DATA ARRAY
        if (!_.isEmpty(data.adsets)) {
          let adsetResult = adsetMapper(data);
          this.setState({
            adsetList: adsetResult.adsetTemp,
            adsetSwitchesStates: adsetResult.adsetTempState
          });
        }
        if (!_.isEmpty(data.ads)) {
          let adsResult = adsMapper(data);
          this.setState({
            adsList: adsResult.adsTemp,
            adsSwitchesStates: adsResult.adsTempState
          });
        }
      });
      this.setState({
        campaignList: temp,
        campaignSwitchesStates: campaignTempState
      });
    });
  }

  handleTabClick = eventKey => {
    this.setState({ selectedTab: eventKey });
  };

  handleToggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  checkBox = value => {
    // console.log(value);
    this.setState({
      checkboxState: value.checkbox.checked,
      selectedListId: value.data.col1.id
    });
  };

  submitModal = value => {
    let obj = {
      userId: this.props.signIn.data.userId,
      numberOfCopies: value.numberOfCopies
    };
    switch(this.state.selectedTab){
      case 'campaigns':
        obj.campaignId = this.state.selectedListId;
        createCampaignCopies(obj).then(res => {
          console.log(res);
          this.getListData();
        });
        break;
      case 'adsets':
        obj.adsetId = value.campaignId ? value.campaignId : this.state.selectedListId;
        createAdsetCopies(obj).then(res => {
          console.log(res);
          this.getListData();
        });
        break;
      case 'ads':
        obj.adId = this.state.selectedListId;
        createAdCopies(obj).then(res => {
          console.log(res);
          this.getListData();
        });
        break;
      default:
        break;
    };
  };

  render() {
    const {
      campaignList,
      adsetList,
      adsList,
      campaignSwitchesStates,
      adsetSwitchesStates,
      adsSwitchesStates,
      modal,
      selectedTab,
      checkboxState
    } = this.state;
    if (!_.isEmpty(campaignSwitchesStates)) {
      return (
        <div className="campaigns-list">
          <SideBarComponent />
          <div id="right-panel" className="right-panel">
            <NavBarComponent auth={true} />
            <div className="container row">
              <div className="list-tabs">
                <Tabs
                  defaultActiveKey="campaigns"
                  transition={false}
                  id="noanim-tab-example"
                  onSelect={this.handleTabClick}
                >
                  <Tab
                    className="sub-tab"
                    eventKey="campaigns"
                    title="Campaigns"
                  >
                    <TableBar
                      campaignRedirect={() =>
                        this.props.history.push("/campaigns")
                      }
                      duplicate={{
                        modal: this.handleToggleModal
                      }}
                      listClickEnable={checkboxState}
                    />
                    <RTable
                      checkbox={{
                        render: true,
                        method: this.checkBox,
                        id: 'campaigns'
                      }}
                      tableHead={TABLE.tableHead}
                      lists={campaignList}
                      states={campaignSwitchesStates}
                    />
                  </Tab>
                  <Tab className="sub-tab" eventKey="adsets" title="Adsets">
                    <TableBar
                      campaignRedirect={() =>
                        this.props.history.push("/campaigns")
                      }
                      duplicate={{
                        modal: this.handleToggleModal
                      }}
                      listClickEnable={checkboxState}
                    />
                    <RTable
                      checkbox={{
                        render: true,
                        method: this.checkBox,
                        id: 'adsets'
                      }}
                      tableHead={TABLE.adsetTableHead}
                      lists={adsetList}
                      states={adsetSwitchesStates}
                    />
                  </Tab>
                  <Tab className="sub-tab" eventKey="ads" title="Ads">
                    <TableBar
                      campaignRedirect={() =>
                        this.props.history.push("/campaigns")
                      }
                      duplicate={{
                        modal: this.handleToggleModal
                      }}
                      listClickEnable={checkboxState}
                    />
                    <RTable
                      checkbox={{
                        render: true,
                        method: this.checkBox,
                        id: 'ads'
                      }}
                      tableHead={TABLE.adsTableHead}
                      lists={adsList}
                      states={adsSwitchesStates}
                      listClickEnable={checkboxState}
                    />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
          <ModalComponent
            show={modal}
            toggleModal={this.handleToggleModal}
            tab={selectedTab}
            submit={this.submitModal}
            user={{
              userId: this.props.signIn.data.userId,
              adAccountId: 'act_189522688767499'
            }}
          />
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  let data = { signIn: state.signIn };
  return data;
};
const mapDispatchToProps = dispatch => {
  const actions = {};
  return bindActionCreators(actions, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CampaignsListComponent));
