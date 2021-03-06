import { postFromUrl, getFromUrl, postCustomeFromUrl } from "../actions/apiUtils";
import axios from 'axios'

const PaymentService = {

    redirectOnePay: async function (obj) {
        try {
            const response = await axios.post(`http://api.thedragonshost.com:8080/dragons/payment/pay_with_atm`, obj);
            return response.data;
        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },

    redirectOnePayNoATM: async function (obj) {
        try {

            const response = await postFromUrl(
                "/dragons/payment/pay_with_non_atm", obj);
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },

    checkPaymentATM: async function (url) {
        try {
            const response = await getFromUrl("/dragons/payment/response/pay_with_atm" + url);
            const data = response.data;
            if (data) {
                return data;
            }

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },


    checkPaymentNonATM: async function (url) {
        try {
            const response = await getFromUrl("/dragons/payment/response/pay_with_non_atm" + url);
            const data = response.Data;
            if (data) {
                return data;
            }

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    }
}

export default PaymentService