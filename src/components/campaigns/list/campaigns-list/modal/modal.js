import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import RButton from "../../../../../reusable-component/button";
import RRadiobutton from '../../../../../reusable-component/radiobutton';
import RInput from '../../../../../reusable-component/input';
import RLabel from '../../../../../reusable-component/labels';
import Select from 'react-select';
import {_} from 'underscore';

import {getCampaigns} from '../../../../../actions/campaigns/create-campaign-action';
import './style.scss';

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioState: null,
      numberOfCopies: 1,
      selectedCampaign: null,
      campaignList: []
    };
  }

  componentDidMount(){
    if(this.props.tab === 'campaigns'){
      this.setState({radioState: 'new-campaign'});
    }
    getCampaigns(this.props.user).then(res => {
      let temp = this.state.campaignList;
      _.each(res, (data) => {
        data.label = `${data.name}: - ${data.id}`;
        data.value = `${data.name.toLowerCase()}-${data.id}`;
        temp.push(_.omit(data, "name"));
      });
      this.setState({
        campaignList: temp
      });
    });
  }

  handleRadioBtn = (e) => {
    console.log(e.target.value);
    this.setState({
      radioState: e.target.value
    });
  }

  handleNumberInput = (e) => {
    this.setState({numberOfCopies: e.target.value});
  }

  handleCampaignChange = option => {
    console.log(option);
    this.setState({selectedCampaign: option});
  }

  submit = () => {
    const {radioState, numberOfCopies, selectedCampaign} = this.state;
    const {tab} = this.props;
    let obj = {option: radioState, numberOfCopies};
    if(tab === 'adsets'){
      obj.campaignId = selectedCampaign.id;
      this.props.submit(obj);
    }else{
      this.props.submit({option: radioState, numberOfCopies});
    }
    this.props.toggleModal();
  }

  render() {
    const { show, toggleModal, tab } = this.props;
    const {radioState, selectedCampaign, campaignList} = this.state;
    const campaign = [
      {
        type: "radio",
        name: "radio",
        value: "new-campaign",
        selected: true,
        class: "input",
        id: "campaign",
        labelName: "Create new campaign",
        align: "col-12",
        handleChange: this.handleRadioBtn
      },
      {
        type: "radio",
        name: "radio",
        value: "campaign-ab-test",
        class: "input",
        id: "campaign",
        labelName: "Create a duplicate to A/B test",
        align: "col-12",
        handleChange: this.handleRadioBtn
      },
    ];
    const adset = [
      {
        type: "radio",
        name: "radio",
        value: "adsets-original-campaign",
        selected: true,
        class: "input",
        id: "original-campaign",
        labelName: "Original Campaign",
        align: "col-12",
        handleChange: this.handleRadioBtn
      },
      {
        type: "radio",
        name: "radio",
        value: "adsets-existing-campaign",
        class: "input",
        id: "existing-campaign",
        labelName: "Existing Campaign",
        align: "col-12",
        handleChange: this.handleRadioBtn
      },
      {
        type: "radio",
        name: "radio",
        value: "adsets-new-campaign",
        class: "input",
        id: "new-campaign",
        labelName: "New Campaign",
        align: "col-12",
        handleChange: this.handleRadioBtn
      },
      {
        type: "radio",
        name: "radio",
        value: "adsets-campaign-ab-test",
        class: "input",
        id: "campaign-ab-test",
        labelName: "Create a Duplicate to A/B Test",
        align: "col-12",
        handleChange: this.handleRadioBtn
      },
    ];
    const ads = [
      {
        type: "radio",
        name: "radio",
        value: "original-campaign",
        selected: true,
        class: "input",
        id: "original-campaign",
        labelName: "Original Campaign",
        align: "col-12",
        handleChange: this.handleRadioBtn
      },
      {
        type: "radio",
        name: "radio",
        value: "existing-campaign",
        class: "input",
        id: "existing-campaign",
        labelName: "Existing Campaign",
        align: "col-12",
        handleChange: this.handleRadioBtn
      },
      {
        type: "radio",
        name: "radio",
        value: "new-campaign",
        selected: true,
        class: "input",
        id: "new-campaign",
        labelName: "New Campaign",
        align: "col-12",
        handleChange: this.handleRadioBtn
      },
      {
        type: "radio",
        name: "radio",
        value: "campaign-ab-test",
        class: "input",
        id: "campaign-ab-test",
        labelName: "Create a Duplicate to A/B Test",
        align: "col-12",
        handleChange: this.handleRadioBtn
      },
    ];
    const radioFormData = tab === 'campaigns' ? campaign : tab === 'adsets' ? adset : ads;
    return (
      <Modal className='modal' show={show} onHide={() => toggleModal()} centered>
        <Modal.Header className='header' closeButton>
          <Modal.Title>Duplicate {tab}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RRadiobutton
            formData={radioFormData}
          />
          {radioState === 'adsets-existing-campaign' ? (
            <>
            <RLabel
            label="Language"
            infoIcon={true}
            toolTip="Select languages"
          />
          <Select
            value={selectedCampaign}
            onChange={this.handleCampaignChange}
            options={campaignList}
            className="select-dropdown"
          />
          </>
          ): null}
            <RInput
              label='Number of copies of each campaign'
              type='number'
              handleChange={this.handleNumberInput}
              class='number-campaign-input'
              min={0}
              max={5}
            />
        </Modal.Body>
        <Modal.Footer>
          <RButton class='button' text="CONTINUE" click={() => this.submit()} />
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalComponent;
