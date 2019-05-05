
import { getFromUrl } from './apiUtils'

export const GET_HOME_DETAIL_REQUEST        = 'GET_HOME_DETAIL_REQUEST';
export const GET_HOME_DETAIL_ERROR          = 'GET_HOME_DETAIL_ERROR';
export const GET_HOME_DETAIL_SUCCESSFULLY   = 'GET_HOME_DETAIL_SUCCESSFULLY';

export const GET_ALL_HOME_REQUEST           = 'GET_ALL_HOME_REQUEST';
export const GET_ALL_HOME_SUCCESSFULLY      = 'GET_ALL_HOME_SUCCESSFULLY';
export const GET_ALL_HOME_ERROR             = 'GET_ALL_HOME_ERROR';

export const SEARCH_ROOM_REQUEST        = 'SEARCH_ROOM_REQUEST';
export const SEARCH_ROOM_ERROR          = 'SEARCH_ROOM_ERROR';
export const SEARCH_ROOM_SUCCESSFULLY   = 'SEARCH_ROOM_SUCCESSFULLY';


function searchRoomRequest() {
    return {
        type: SEARCH_ROOM_REQUEST,
        rooms: []
    }
}

function searchRoomSuccessfully(data) {
    return {
        type: SEARCH_ROOM_SUCCESSFULLY,
        rooms: data
    }
}

function searchRoomError(message) {
    return {
        type: SEARCH_ROOM_ERROR,
        error: message
    }
}


function getAllHomeRequest() {
    return {
        type: GET_ALL_HOME_REQUEST,
        homes: []
    }
}

function getAllHomeSuccessfully(data) {
    return {
        type: GET_ALL_HOME_SUCCESSFULLY,
        all_homes: data
    }
}

function getAllHomeError(message) {
    return {
        type: GET_ALL_HOME_SUCCESSFULLY,
        error: message
    }
}


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

export function handleGetAllHome() {
    return (dispatch) => {
        dispatch(getAllHomeRequest())
        getFromUrl('/dragons/home/all').then((response) => {
            if (response && response.status === 200) {
                if (response.data && response.data.Data) {
                    const data = response.data;

                    if (data.Status != 'OK') {
                        dispatch(getAllHomeError(data.Message));
                    } else {
                        dispatch(getAllHomeSuccessfully(data.Data));
                    }
                }
            }
            
        }).catch(err => {
            console.log(err);
        })
    }
}


export function handleSearchRooms(homeId, from, to, number_of_guest, min, max, roomType) {
    let url = "/dragons/room/list?homeId=" + homeId;
    if (homeId == "" || homeId == null) {
        homeId = 0
    }
    if (from != null) {
        url += "&from=" + from
    }
    if (to != null) {
        url += "&to=" + to
    }
    if (min != null) {
        url += "&min=" + min
    }
    if (max != null) {
        url += "&max=" + max
    }
    if (number_of_guest != null) {
        url += "&number_of_guest=" + number_of_guest
    }
    if (roomType != null) {
        url += "&roomtype=" + roomType
    }

    return (dispatch) => {
        dispatch(searchRoomRequest())
        getFromUrl(url).then((response) => {
            if (response && response.status === 200) {
                if (response.data && response.data.Data) {
                    const data = response.data;

                    if (data.Status != 'OK') {
                        dispatch(searchRoomError(data.Message));
                    } else {
                        dispatch(searchRoomSuccessfully(data.Data));
                    }
                }
            }
            
        }).catch(err => {
            console.log(err);
        })
    }
}