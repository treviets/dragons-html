import { postFromUrl, getFromUrl } from "../actions/apiUtils";

const PaymentService = {

    redirectOnePay: async function (obj) {
        try {

            const response = await postFromUrl(
                "/dragons/payment/pay_with_atm", obj);
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },

    checkPaymentATM: async function(url) {
        try {
            const response = await getFromUrl("/dragons/payment/response/pay_with_atm" + url);
            
            return response;
        } catch (ex) {
            console.log(ex);
        }
    },

    checkPaymentNonATM: async function(url) {
        try {
            const response = await getFromUrl("/dragons/payment/response/pay_with_non_atm" + url);
            if (response && response.data) {
                return response.data;
            }
           
        } catch (ex) {
            console.log(ex);
        }
    }


}

export default PaymentService