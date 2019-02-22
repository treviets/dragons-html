
import { setAuthorizationToken, postFromUrl } from './apiUtils'
import $ from "jquery";

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin(creds) {
    return { type: LOGIN_REQUEST, isFetching: true, isAuthenticated: false, creds }
}

function receiveLogin(token) {
    return { type: LOGIN_SUCCESS, isFetching: false, isAuthenticated: true, accessToken: token }
}

function loginError(message) {
    return { type: LOGIN_FAILURE, isFetching: false, isAuthenticated: false, message }
}

export function loginUser(creds) {
    return (dispatch) => {
        dispatch(requestLogin(creds))
        postFromUrl('/dragons/login/account', creds, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            const data = response.data;
            // console.log(data);
            if (data.Status != 'OK') {
                dispatch(loginError(data.Message))
                alert(data.Message)
            } else {
                console.log("data-login", data)
                const token = data.Data.token;
                const cusId = data.Data.cusId;
                localStorage.setItem('accessToken', token)
                localStorage.setItem('cusId', cusId)

                console.log("localStorage-login", localStorage)
                dispatch(receiveLogin(token))
                $('#buttonClose').click();
                $('#buttonCloseSocial').click()


            }
        }).catch(err => {
            console.log("Error:", err)
        })
    }
}

export function loginUserSocial(creds) {
    return (dispatch) => {
        dispatch(requestLogin(creds))
        postFromUrl('/dragons/login/social', creds, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            const data = response.data;
            // console.log(data);
            if (data.Status != 'OK') {
                dispatch(loginError(data.Message))
                alert(data.Message)
            } else {
                const token = data.Data;
                localStorage.setItem('accessToken', token)
                dispatch(receiveLogin(token))
                $('#buttonClose').click()
                $('#buttonCloseSocial').click()

            }
        }).catch(err => {
            console.log("Error:", err)
        })
    }
}

export function saveCreds(token) {
    return (dispatch) => {
        setAuthorizationToken(token)
    }
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function requestLogout() {
    return { type: LOGOUT_REQUEST, isFetching: true, isAuthenticated: true }
}

function receiveLogout() {
    return { type: LOGOUT_SUCCESS, isFetching: false, isAuthenticated: false }
}

export function logoutUser() {
    return (dispatch) => {
        dispatch(requestLogout())
        localStorage.removeItem('accessToken')
        localStorage.clear()
        console.log("storage-logout", localStorage)
        dispatch(receiveLogout())
    }
}