import { postFromUrl, getFromUrl } from "../actions/apiUtils";
const HomeService = {

    createdUser: async function () {
        try {
            const response = await getFromUrl(
                "/dragons/home/all");
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },

    signUpCustomer: async function (formData) {
        try {
            const response = await postFromUrl(
                "/dragons/customer/create_user/", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },
}

export default HomeService;