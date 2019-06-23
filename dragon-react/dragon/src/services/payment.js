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

    checkPaymentNonATM: async function(url) {
        try {

            const response = await getFromUrl("/dragons/payment/response/pay_with_non_atm" + url);
            if (response && response.Data) {
                console.log("Đã gọi");
            }
        } catch (ex) {

        }
    }


}

export default PaymentService