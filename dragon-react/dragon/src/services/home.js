import { postFromUrl, getFromUrl } from "../actions/apiUtils";
const HomeService = {

    getListHomes: async function () {
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
    getDetailHome: async function (homeId) {
        try {
            if (homeId === null) {
                homeId = 0;
            }
            const response = await getFromUrl(
                "/dragons/room/by_home_id?homeId=" + homeId);
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },
    getDetailRoom: async function (roomId) {
        try {
            const response = await getFromUrl(
                "/dragons/room_detail/by_room_id?roomId=" + roomId);
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },
    saveRoom: async function (roomData) {
        try {
            const response = await postFromUrl(
                "/dragons/admin/room/create", roomData);
            const data = response.data;
            return data
        } catch (e) {
            if (e.response.status === 401) {
                alert(e.response.message);
            }
        }
    },
    searchRoom: async function (homeId, from, to, number_of_guest, min, max, roomType) {
        try {

            if (homeId === "" || homeId === null) {
                homeId = 0
            }
            var url = "/dragons/room/list?homeId=" + homeId
            if (from != null) {
                url += "&from=" + from
            }
            if (to != null) {
                url += "&to=" + to
            }
            if (min != null) {
                url += "&min=" + min
            }
            if (max != null) {
                url += "&max=" + max
            }
            if (number_of_guest != null) {
                url += "&number_of_guest=" + number_of_guest
            }
            if (roomType != null) {
                url += "&roomtype=" + roomType
            }
            const response = await getFromUrl(
                url)
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },

    getRoomsByHomeId: async function (homeId) {
        try {
            const response = await getFromUrl(
                "/dragons/room/by_home_id?homeId=" + homeId);
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },

}

export default HomeService;