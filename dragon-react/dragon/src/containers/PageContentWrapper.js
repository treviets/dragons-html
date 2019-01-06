import React, { Component } from 'react';
import { types } from '../routes/RouteMap'
import HomeComponent from "../components/Home/HomeComponent"
import DetailHouseComponent from "../components/DetailHouse"
import ListOfBooking from "../components/ListOfBooking"
import TransactionHistoryComponent from "../components/TransactionHistory"
import AccountSettingComponent from "../components/AccountSetting"
import Today from "../components/Today"
import PastTripComponent from "../components/PastTrip"
import TodayComponent from '../components/Today';






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
                _view = < PastTripComponent/>;
                break;
            case types.today:
                _view = <TodayComponent />;
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