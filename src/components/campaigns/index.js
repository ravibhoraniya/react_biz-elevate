import React, { Component } from 'react';
import CreateCampaignComponent from './create-campaign';
import Stepper from 'react-stepper-horizontal';
import SideBarComponent from '../navigation/side-nav';
import AdsetsComponent from './adsets';
import './style.scss';

class RStepperComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            steps: [
                {title: 'Campaign'},
                {title: 'Adset'},
                {title: 'Ad'},
            ],
            currentStep: 0,
         }
    }

    onClickNext = () => {
        const { currentStep } = this.state;
        this.setState({
          currentStep: currentStep + 1,
        });
    }

    handleNavigate = (v) => {
      this.setState({
        currentStep: v
      })
    }

    render() { 
        const { steps, currentStep } = this.state;
        return ( 
            <div className='campaigns-stepper'>
              <SideBarComponent handleNavigate={this.handleNavigate}/>
            <div id='right-panel' className='stepper-block'>
            <Stepper steps={steps} activeStep={currentStep} /></div>
            { currentStep === 1 ? <AdsetsComponent handleClick={this.onClickNext}/> : 
              currentStep === 2 ? <div>Ads page</div> : 
              <CreateCampaignComponent handleClick={this.onClickNext} />
            }
          </div>
         );
    }
}
 
export default RStepperComponent;
