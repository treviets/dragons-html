import axios from 'axios'
import qs from 'qs'
const apiConfig = {
    // baseUrl: 'http://localhost:8080/'
    baseUrl: 'https://payment.iparkingstg.com/'
}

export function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export function config() {
    axios.defaults.baseURL = apiConfig.baseUrl
    axios.defaults.responseType = 'json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.headers["Accept"] = "application/json";
    axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
    axios.defaults.headers.common.post = {};
    axios.defaults.headers.common.put = {};
    axios.defaults.xsrfCookieName = '_CSRF';
    axios.defaults.xsrfHeaderName = 'CSRF';
}

export function postFromUrl(url, data) {

    return axios.post(url, data)
}

export function getFromUrl(url, data) {
    return axios.get(url + qs.stringify(data))
}
