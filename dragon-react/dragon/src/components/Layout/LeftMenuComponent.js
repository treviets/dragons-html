import React, { Component } from 'react';
import '../../assets/css/slide.css';
import '../../assets/css/style.css';
import '../../assets/js/index';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import { DateRangePicker } from 'react-dates';
import homeService from '../../services/home.js';
import $ from "jquery";
import moment from 'moment';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { Route, Redirect, Switch } from 'react-router';
const Range = Slider.Range;

class LeftMenuComponent extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            minSearch:null,
            maxSearch:null,
            min: 200000,
            max: 10000000,
            minPrice: 500000,
            maxPrice: 5000000,
            amount: "₫500000  - ₫5000000+",
            roomType: 0,

        };
        
    }


    render() {
        return (
            <div className="left-menu left-responsive ">
                <div className="menu no-padding-lr-mobile">
                    <span>
                        <span style={{ fontSize: '0px' }}></span>
                        <div className="price-range">
                            <button type="button" className="button-price" id="btn-open-range" aria-expanded="true" aria-busy="false">
                                <div className="_12d0llg5">
                                    <div className="_qo24lwc">
                                        <span className="_1r804a6o">
                                            <div className="_ng4pvpo">Price range</div>
                                        </span>
                                    </div>
                                    <div className="_1iti0ju">
                                        <span className="_9zwlhy1">
                                            <div className="_36rlri">
                                                <div className="_fhmr8ze"></div>
                                                <div className="_fhmr8ze">
                                                    <div style={{ marginLeft: '8px' }}>
                                                        <div className="_d5depq" style={{ transform: 'rotate(180deg)' }}>
                                                            <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '10px', width: '10px', display: 'block', fill: 'rgb(118, 118, 118)' }}>
                                                                <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div style={{ marginTop: '8px' }} id="amount-range-private" >
                                    <div className="_1r804a6o" id="amount-hide" style={{ fontSize: '12px !important' }}>{this.state.amount}</div>
                                </div>
                            </button>
                            <div id="select-range">
                                <div className="_x01z5ll">
                                    <div style={{ marginTop: '16px' }}>
                                        <div style={{ marginBottom: '-16px' }}>
                                            <div style={{ marginBottom: '16px' }}>
                                                <div>
                                                    <div style={{ marginBottom: '16px' }}>
                                                        <div style={{ marginBottom: '16px' }}>
                                                            <div style={{ marginBottom: '8px' }}>
                                                                <div className="_12kw8n71" style={{ fontSize: '12px' }}>The average nightly price is ₫1,763,582</div>
                                                            </div>
                                                            <div className="_z6hmjh">
                                                                <div style={{ marginTop: '16px' }}>

                                                                    <div className="_sh9qj2d">
                                                                        <Range onBlur={this.fillterPrice} defaultValue={[500000, 5000000]} min={this.state.min} max={this.state.max} onChange={this.onSliderChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{ marginTop: '40px' }}>
                                                                <div className="_1r804a6o" id="amount">{this.state.amount}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                    <span>
                    
                    <span style={{ fontSize: '0px' }}></span>
                        <div className="price-range">
                            <button type="button" className="button-price" id="open-checkbox" aria-expanded="true" aria-busy="false">
                                <div className="_12d0llg5">
                                    <div className="_qo24lwc">
                                        <span className="_1r804a6o">
                                            <div className="_ng4pvpo">Home type</div>
                                        </span>
                                    </div>
                                    <div className="_1iti0ju">
                                        <span className="_9zwlhy1">
                                            <div className="_36rlri">
                                                <div className="_fhmr8ze"></div>
                                                <div className="_fhmr8ze">
                                                    <div style={{ marginLeft: '8px' }}>
                                                        <div className="_d5depq" style={{ transform: 'rotate(180deg)' }}>
                                                            <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '10px', width: '10px', display: 'block', fill: 'rgb(118, 118, 118)' }}>
                                                                <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div style={{ marginTop: '8px' }} id="Entire"><div className="_4r6fry" style={{ fontSize: '14px' }}>Entire place</div></div>
                            </button>
                            <div id="Entire-checkbox">
                                <div className="_x01z5ll">
                                    <div style={{ marginTop: '16px' }}>
                                        <div style={{ marginBottom: '-16px' }}>
                                            <div style={{ marginBottom: '16px' }}>
                                                <div>
                                                    <div>
                                                        <label className="_4m7syz" htmlFor="DynamicFilterCheckboxItem-room_types-Entire_home">
                                                            <div className="_gyif22">
                                                                <div className="_73ihd0r">
                                                                    <span className="_foa2bi">
                                                                        <input type="checkbox" className="_fcv8ql" aria-invalid="false" id="DynamicFilterCheckboxItem-room_types-Entire_home" name="room_types-Entire_home" value="on" onChange={(e) => this.handleHomeType(1, e)} />
                                                                        <span data-fake-checkbox="true" data-style-select="false" id="DynamicFilterSpanItem-room_types-Entire_home" 
                                                                            data-style-default="true" className="_fhj4ui"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="_zkrkb6">
                                                                    <span className="_f7dcovm">
                                                                        <div className="_9zwlhy1">Entire place</div>
                                                                    </span>
                                                                    <span className="_wzwtzh8">
                                                                        <span className="_tnaqre1">Have a place to yourself</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginBottom: '16px' }}>
                                                <div>
                                                    <div>
                                                        <label className="_4m7syz" htmlFor="DynamicFilterCheckboxItem-room_types-Private_room">
                                                            <div className="_gyif22">
                                                                <div className="_73ihd0r">
                                                                    <span className="_foa2bi">
                                                                        <input type="checkbox" className="_fcv8ql" aria-invalid="false" id="DynamicFilterCheckboxItem-room_types-Private_room" name="room_types-Private_room" value="on" onChange={(e) => this.handleHomeType(3, e)} />
                                                                        <span data-fake-checkbox="true" data-style-select="false" data-style-default="true" id="DynamicFilterSpanItem-room_types-Private_room" className="_fhj4ui"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="_zkrkb6">
                                                                    <span className="_f7dcovm">
                                                                        <div className="_9zwlhy1">Private room</div>
                                                                    </span>
                                                                    <span className="_wzwtzh8">
                                                                        <span className="_tnaqre1">Have your own room and share some common spaces</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginBottom: '16px' }}>
                                                <div>
                                                    <div>
                                                        <label className="_4m7syz" htmlFor="DynamicFilterCheckboxItem-room_types-Shared_room">
                                                            <div className="_gyif22">
                                                                <div className="_73ihd0r">
                                                                    <span className="_foa2bi">
                                                                        <input type="checkbox" className="_fcv8ql" aria-invalid="false" id="DynamicFilterCheckboxItem-room_types-Shared_room" name="room_types-Shared_room" value="on" onChange={(e) => this.handleHomeType(4, e)} />
                                                                        <span data-fake-checkbox="true" data-style-select="false" id="DynamicFilterSpanItem-room_types-Shared_room" data-style-default="true" className="_fhj4ui"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="_zkrkb6">
                                                                    <span className="_f7dcovm">
                                                                        <div className="_9zwlhy1">Shared room</div>
                                                                    </span>
                                                                    <span className="_wzwtzh8">
                                                                        <span className="_tnaqre1">Stay in a shared space, like a common room</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}

export default LeftMenuComponent;