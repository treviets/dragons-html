import React, { Component } from 'react'
import '../../assets/css/slide.css'
import '../../assets/css/style.css'
import '../../assets/js/index'
import $ from "jquery";
import homeService from '../../services/home.js'
import * as Constants from '../../const.js'
import DetailHouse from '../DetailHouse'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import district from '../../masterData/district.json'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { Route, Redirect, Switch } from 'react-router';
import HeaderComponent from '../Layout/HeaderComponent';
import LeftMenuComponent from '../Layout/LeftMenuComponent';
import HomeComponent from './HomeComponent';
const Range = Slider.Range;


class ListHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homes: []
        };      
    }
 
    componentWillMount() {
        this.getAllHome();
    }

    async getAllHome() {
        const res = await homeService.getListHomes()
        this.setState({ homes: res.Data })
    }

    render() {
        return (
                <div>
                    <div className="right-home">
                        <div className="container main-slider no-padding-lr-mobile">
                            <div className="listHome">
                                <br></br>
                                <div className="title-list">The Dragons's list</div>
                                <br></br>
                                <div className="col-md-12">
                                    <div className="row">
                                        {
                                            this.state.homes.map((home, index) => {
                                                return (
                                                    <HomeComponent index = {index} home = {home} key = {index} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            )
        }
    }

export default ListHomeComponent                