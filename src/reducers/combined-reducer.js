import adNetwork from './ad-network/ad-network-reducer';
import {combineReducers} from 'redux';
import error from './error/error';
import reducer from './reducer';
import resetPass from './auth/reset-pass/reset-pass-reducer';
import signIn from './auth/sign-in/sign-in-reducer';
import signUp from './auth/sign-up/sign-up-reducer';
import campaigns from './campaigns/campaigns';
export default combineReducers({
    reducer,
    signIn,
    signUp,
    error,
    resetPass,
    adNetwork,
    campaigns
});