import { postFromUrl, getFromUrl } from "../actions/apiUtils";
const transactionService = {

    getListTransaction: async function () {
        try {
            const response = await getFromUrl(
                "/dragons/transaction/all");
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },

    getListTransactionOfCustomer: async function (customerId) {
        try {
            const response = await getFromUrl(
                "/dragons/transaction/by_customer?customerId=" + customerId);
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    }
}

export default transactionService;