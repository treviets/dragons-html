import { postFromUrl, getFromUrl } from "../actions/apiUtils";
// import { url } from "inspector";
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
            localStorage.setItem('info', JSON.parse(data))
            console.log("localStorage")
            console.log(localStorage)
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },

    signInCustomer: async function (formData) {
        try {
            const response = await postFromUrl(
                "/dragons/login/account", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {
                return
            }
        }
    },

    signUpBySocial: async function (formData) {
        try {
            const response = await postFromUrl(
                "/dragons/login/social", formData, {
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
    async getInfoDetailCustomer(id) {
        var urlBase = "/dragons/customer/detail/by_id?customer_id=" + id
        try {
            const response = await getFromUrl(urlBase);
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },
    async updateInfoDetailCustomer(formData) {
        try {
            const response = await postFromUrl(
                "/dragons/customer/detail/update", formData, {
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
    }
}

export default HomeService;