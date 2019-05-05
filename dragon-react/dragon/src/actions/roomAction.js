
import { getFromUrl } from './apiUtils'

export const GET_ROOM_DETAIL_REQUEST        = 'GET_ROOM_DETAIL_REQUEST';
export const GET_ROOM_DETAIL_ERROR          = 'GET_ROOM_DETAIL_ERROR';
export const GET_ROOM_DETAIL_SUCCESSFULLY   = 'GET_ROOM_DETAIL_SUCCESSFULLY';

function getRoomDetailRequest(roomId) {
    return {
        type: GET_ROOM_DETAIL_REQUEST,
        roomId: roomId
    }
}

function getRoomDetailError(message) {
    return { 
        type: GET_ROOM_DETAIL_ERROR, 
        message: message
    }
}

function getRoomDetailSuccessfully(data) {
    return { 
        type: GET_ROOM_DETAIL_SUCCESSFULLY, 
        room_detail: data,
    }
}

export function handleGetRoomDetail(roomId) {
    return (dispatch) => {
        dispatch(getRoomDetailRequest(roomId))
        getFromUrl('/dragons/room_detail/by_room_id?roomId=' + roomId).then((response) => {
            if (response && response.status === 200) {
                if (response.data && response.data.Data) {
                    const data = response.data;

                    if (data.Status != 'OK') {
                        dispatch(getRoomDetailError(data.Message));
                    } else {
                        dispatch(getRoomDetailSuccessfully(data.Data));
                    }
                }
            }
            
        }).catch(err => {
            console.log(err);
        })
    }
}