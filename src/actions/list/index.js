
import axios from 'axios';

import { postReq, getReq } from "../../apis/proxy";
import { url, fbActUrl, fbtoken, token } from "../../apis/config";

export async function getList(Request) {
    let params = {
        headers: {
            authorization: token
        },
        params: Request
    };
    const data = axios.get(url + '/campaigns/campaigns-lists/' + Request.userId, params)
        .then(res => {
            return res.data;
        });
    return data;
}

export async function deleteCampaign(Request) {
    let params = {
        headers: {
            authorization: token
        },
        params: Request
    };
    const data = axios.delete(url + '/campaigns/delete-campaign/' + Request.userId, params)
        .then(res => {
            return res.data;
        });
    return data;
}

export async function copyCampaign(Request) {
    let params = {
        headers: {
            authorization: token
        }
    };
    const data = axios.post(url + '/campaigns/copy', Request, params)
        .then(res => {
            return res.data;
        });
    return data;
}