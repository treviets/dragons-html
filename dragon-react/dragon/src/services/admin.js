import { postFromUrl, getFromUrl } from "../actions/apiUtils";
const adminService = {

    getListBooking: async function () {
        try {
            const response = await getFromUrl(
                "/dragons/admin/booking/all");
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },

    getListRoom: async function () {
        try {
            const response = await getFromUrl(
                "/dragons/admin/room/all");
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },
    async updateRoom(formData) {
        try {
            const response = await postFromUrl(
                "/dragons/admin/room/update", formData, {
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
    async createRoom(formData) {
        try {
            const response = await postFromUrl(
                "/dragons/admin/room/save", formData, {
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

export default adminService;