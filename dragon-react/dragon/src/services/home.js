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
            const response = await getFromUrl(
                "/dragons/room/by_home_id/?homeId="+homeId);
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
                "/dragons/room_detail/by_room_id?roomId="+roomId);
            const data = response.data;
            return data
            
        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    }
}

export default HomeService;