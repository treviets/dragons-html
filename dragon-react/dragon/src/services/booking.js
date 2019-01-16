import { postFromUrl, getFromUrl } from "../actions/apiUtils";

const BookingService = {

    bookingCreate: async function (bookingJson) {
        try {
            console.log("aaa")
            console.log(bookingJson)
            const response = await postFromUrl(
                "/dragons/booking/create_booking", bookingJson);
            const data = response.data;
            return data

        } catch (e) {
            if (e.response.status === 401) {

            }
        }
    },
}

export default BookingService