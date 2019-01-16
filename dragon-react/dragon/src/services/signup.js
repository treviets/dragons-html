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
}

export default HomeService;