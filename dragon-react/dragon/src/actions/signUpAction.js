
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
            console.log("data-handle singup", response.data)
            const data = response.data;
            if (data.Status !== 'OK') {
                alert(data.Message)
            } else {
                const cusId = data.Data.cusId;
                console.log("cusId", cusId)
                localStorage.setItem('cusId', cusId)
                localStorage.setItem('accessToken', data.Data.token)
                localStorage.setItem('isSocial', false)
                let isFetching = false;
                dispatch(receiveSignUp(cusId, isFetching))
            }
        }).catch(err => {
            console.log("Error:", err)
        })
    }
}
///eeeeeeeeh, call