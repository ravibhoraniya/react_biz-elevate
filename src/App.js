import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Redirect, Route, Router, Switch } from 'react-router-dom';
import AdNetworkComponent from './components/ad-network';
import AddNetworkComponent from './components/add-network1';
import EmailComponent from './components/email';
import OtpComponent from './components/otp';
import PrivacyPolicyComponent from './components/privacy-policy';
import React from 'react';
import ResetPasswordComponent from './components/reset-pass';
import SignInComponent from './components/sign-in';
import SignUpComponent from './components/sign-up';
import Stepper from './components/stepper';
import TermsOfServiceComponent from './components/terms-of-service';
import AdListComponent from './components/list-ad-accounts';
import SurveyComponent from './components/survey';
import CampaignComponent from './components/campaigns';
import AdsetsComponent from './components/campaigns/adsets';
import AdsComponent from './components/campaigns/ads';
import CampaignsListComponent from './components/campaigns/list/campaigns-list';
import AdsetsListComponent from './components/campaigns/list/adsets-list';
import BreakdownChartComponent from './components/breakdown-chart';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <>
          <Route exact path={'/'} render={() => <SignInComponent />}></Route>
          <Route path={'/sign-up'} render={() => <SignUpComponent />}></Route>
          <Route path={'/otp'} render={() => <OtpComponent />}></Route>
          <Route path={'/reset-password'} render={() => <ResetPasswordComponent />}></Route>
          <Route path={'/privacy-policy'} render={() => <PrivacyPolicyComponent />}></Route>
          <Route path={'/terms-of-service'} render={() => <TermsOfServiceComponent />}></Route>
          <Route path={'/verify-email'} render={() => <EmailComponent />}></Route>
          <Route path={'/ad-network'} render={() => <AdNetworkComponent />}></Route>
          <Route path={'/add-network'} render={() => <AddNetworkComponent />}></Route>
          <Route path={'/ad-list'} render={() => <AdListComponent />}></Route>
          <Route path={'/survey'} render={() => <SurveyComponent />}></Route>
          <Route path={'/registrations'} render={() => <Stepper />}></Route>
          <Route path={'/campaigns'} render={() => <CampaignComponent />}></Route>
          <Route path={'/adsets'} render={() => <AdsetsComponent />}></Route>
          <Route path={'/ads'} render={() => <AdsComponent />}></Route>
          <Route path={'/campaigns-list'} render={() => <CampaignsListComponent />}></Route>
          <Route path={'/adsets-list'} render={() => <AdsetsListComponent />}></Route>
          <Route path={'/breakdown-chart'} render={() => <BreakdownChartComponent />}></Route>
          <Route path={'/'}></Route>
        </>
      </Switch>
    </Router>
  );
}

export default App;
