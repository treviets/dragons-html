
import { setAuthorizationToken, postFromUrl } from './apiUtils'
import $ from "jquery";


export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'


function receiveSignUp(cusId, isFetching) {
    return { type: SIGNUP_SUCCESS, cusId: cusId, isFetching: isFetching }
}
export function signUp(creds) {
    return (dispatch) => {
        postFromUrl('/dragons/customer/create_user/', creds, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            const data = response.data;
            if (data.Status !== 'OK') {
                alert(data.Message)
            } else {
                const cusId = data.Data.id;
                console.log("cusId", cusId)
                localStorage.setItem('cusId', cusId)
                localStorage.setItem('isSocial', false)
                var isFetching = false;
                dispatch(receiveSignUp(cusId, isFetching))
            }
        }).catch(err => {
            console.log("Error:", err)
        })
    }
}
///eeeeeeeeh, call