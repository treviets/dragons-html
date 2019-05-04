
import { getFromUrl } from './apiUtils'

export const GET_HOME_DETAIL_REQUEST        = 'GET_HOME_DETAIL_REQUEST';
export const GET_HOME_DETAIL_ERROR          = 'GET_HOME_DETAIL_ERROR';
export const GET_HOME_DETAIL_SUCCESSFULLY   = 'GET_HOME_DETAIL_SUCCESSFULLY';

function getHomeDetailRequest(homeId) {
    return {
        type: GET_HOME_DETAIL_REQUEST,
        homeId: homeId
    }
}

function getHomeDetailError(message) {
    return { 
        type: GET_HOME_DETAIL_ERROR, 
        message: message
    }
}

function getHomeDetailSuccessfully(data) {
    return { 
        type: GET_HOME_DETAIL_SUCCESSFULLY, 
        rooms: data,
    }
}

export function handleGetHomeDetail(homeId) {
    return (dispatch) => {
        dispatch(getHomeDetailRequest(homeId))
        getFromUrl('/dragons/room/by_home_id?homeId=' + homeId).then((response) => {
            if (response && response.status === 200) {
                if (response.data && response.data.Data) {
                    const data = response.data;

                    if (data.Status != 'OK') {
                        dispatch(getHomeDetailError(data.Message));
                    } else {
                        dispatch(getHomeDetailSuccessfully(data.Data));
                    }
                }
            }
            
        }).catch(err => {
            console.log(err);
        })
    }
}