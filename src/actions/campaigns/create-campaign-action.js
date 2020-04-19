import {CREATE_CAMPAIGN, EDIT_CAMPAIGN, DELETE_CAMPAIGN, GET_CAMPAIGN, ERROR_MSG} from '../action-constants';

import {postReq, getReq} from '../../apis/proxy';
import {url} from '../../apis/config';

export async function getPaymentMethod(userData) {
    const {data} = await postReq(url, '/campaigns/payment-method', userData);
    return data;
}

export async function getCampaignsList(userData) {
    const {data} = await getReq(url, '/campaigns/campaigns-lists', userData.userId, {
        ad_account_id: userData.adAccountId
      });
    return data.data;
}

export async function getCampaigns(userData) {
    const {data} = await getReq(url, '/campaigns', userData.userId, {ad_account_id: userData.adAccountId});
    return data.data;
}

export async function createCampaignCopies(userData){
    const {data} = await postReq(url, '/campaigns/copy', userData);
    return data;
}

export function createCampaign(campaignData) {
    return async dispatch => {
        const {data} = await postReq(url, '/campaigns', campaignData);
        if(data.message){
            dispatch({
                type: ERROR_MSG,
                data: data.message
            })
        }else {
            dispatch({
                type: CREATE_CAMPAIGN,
                data: data
            });
            dispatch({
                type: ERROR_MSG,
                data: null
            })
        }
    }
}
