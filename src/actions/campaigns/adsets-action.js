import {
  CREATE_ADSETS,
  EDIT_ADSETS,
  DELETE_ADSETS,
  GET_ADSETS,
  ERROR_MSG
} from "../action-constants";

import { postReq, getReq } from "../../apis/proxy";
import { url } from "../../apis/config";

export async function getFBPages(userData) {
  const { data } = await getReq(url, `/adsets/pages`, userData.userId, {
    ad_account_id: userData.adAccountId
  });
  return data;
}

export async function getLocations(userData){
  const { data } = await getReq(url, '/adsets/countries', userData.userId);
  return data;
}

export async function getLanguages(userData){
  const { data } = await getReq(url, '/adsets/languages', userData.userId);
  return data;
}

export async function getTargetingList(userData){
  const { data } = await getReq(url, '/adsets/target-search', userData.userId, {
    ad_account_id: userData.adAccountId, keyword: userData.keyword
  });
  return data;
}

export async function getConnectionList(userData){
  const { data } = await getReq(url, '/adsets/connections', userData.userId);
  return data;
}

export async function saveAdsetAudience(audienceData){
  const { data } = await postReq(url, '/adsets/audience', audienceData);
  return data;
}

export async function getAudience(targetingData){
  const { data } = await postReq(url, '/adsets/audience', targetingData);
  return data;
}

export async function createAdsetCopies(userData){
  const {data} = await postReq(url, '/adsets/copy', userData);
  return data;
}

export function createAdsets(adsetsData) {
  return async dispatch => {
    const { data } = await postReq(url, "/adsets", adsetsData);
    console.log(data);
    if (data.message) {
      dispatch({
        type: ERROR_MSG,
        data: data.message
      });
    } else {
      dispatch({
        type: CREATE_ADSETS,
        data: data
      });
      dispatch({
        type: ERROR_MSG,
        data: null
      });
    }
  };
}
