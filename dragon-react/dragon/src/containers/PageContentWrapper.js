import React, { Component } from 'react';
import { types } from '../routes/RouteMap'
import HomeComponent from "../components/Home/HomeComponent"
import DetailHouseComponent from "../components/DetailHouse"
import ListOfBooking from "../components/ListOfBooking"
import TransactionHistoryComponent from "../components/TransactionHistory"
import AccountSettingComponent from "../components/AccountSetting"
import PastTripComponent from "../components/PastTrip"
import TodayComponent from '../components/Today';
import UpdatePhone from '../components/UpdatePhone';
import ReviewHouse from '../components/ReviewHouse';
import Profile from '../components/Profile/Profile';
import Photo from '../components/Profile/PhotoProfile';
import Verify from '../components/Profile/TrustAndVerify';
import ViewProfile from '../components/Profile/ViewProfile';
import ListRoomComponent from "../components/Home/ListRoomComponent";
import ListRoomAdmin from "../components/Admin/ListRoom";
import AddRoom from "../components/Admin/AddRoom";
import ListTransactionAdim from "../components/Admin/ListTransaction";
import ListTransactionCustomer from "../components/ListTransactionHistory";
import PaymentAtmResponse from "../components/PaymentAtmResponse";
import PaymentNonAtmResponse from "../components/PaymentNonAtmResponse";
import EditRoomDetail from "../components/Admin/EditRoomDetail";


class PageContainerWrapper extends Component {
    render() {
        let _view = null;
        switch (this.props.type) {
            case types.home:
                _view = <HomeComponent />;
                break;
            case types.detailHouse:
                _view = <DetailHouseComponent />;
                break;
            case types.listOfBooking:
                _view = <ListOfBooking />;
                break;
            case types.transactionHistory:
                _view = <TransactionHistoryComponent />;
                break;
            case types.accountSetting:
                _view = <AccountSettingComponent />;
                break;
            case types.pastTrip:
                _view = < PastTripComponent />;
                break;
            case types.today:
                _view = <TodayComponent />;
                break;
            case types.updatePhone:
                _view = <UpdatePhone />;
                break;
            case types.reviewHouse:
                _view = <ReviewHouse />;
                break;
            case types.profile:
                _view = <Profile />;
                break;
            case types.photo:
                _view = <Photo />;
                break;
            case types.verify:
                _view = <Verify />;
                break;
            case types.viewProfile:
                _view = <ViewProfile />;
                break;
            case types.listroom:
                _view = <ListRoomComponent />;
                break;
            case types.listroomAdmin:
                _view = <ListRoomAdmin />;
                break;
            case types.addRoom:
                _view = <AddRoom />;
                break;
            case types.listTransactionAdmin:
                _view = <ListTransactionAdim />;
                break;
            case types.listTransactionCustomer:
                _view = <ListTransactionCustomer />;
                break;
            case types.paymentAtmReponse:
                _view = <PaymentAtmResponse />;
                break;
            case types.paymentNonAtmResponse:
                _view = <PaymentNonAtmResponse />;
                break;
            case types.editRoomDetail:
                _view = <EditRoomDetail />;
                break;
            default:
                _view = "";
                break;
        }
        return (
            <div>
                {_view}
            </div>
        )
    }
}

export default PageContainerWrapper