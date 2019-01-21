import React, { Component } from 'react'
import '../assets/css/reviewHouse.css'

class ReviewHouse extends Component {
    render() {
        return (
            <div className="container">
                <div className="row body-review">
                    <div className="col-md-7 col-sm-12">
                        <div className="title-review">
                            <p>Review house rules</p>
                        </div>
                        <div className="box-title">
                            <i class="fa fa-eye" aria-hidden="true">
                            </i>
                            <span>Peopel are eyeing this, 5 others are looking at it for these dates</span>
                        </div>
                        <div className="info-booking">
                            <div className="title-box">
                                <p>6 nights in Thành Phố Vũng tàu</p>
                            </div>
                            <div className="book-checkin">
                                <div className="box-date">
                                    <p>JAN</p>
                                    <p>24</p>
                                </div>
                                <div className="box-date-info">
                                    Thursday check-in
                                        </div>
                            </div>

                            <div className="book-checkout">
                                <div className="box-date">
                                    <p>JAN</p>
                                    <p>24</p>
                                </div>
                                <div className="box-date-info">
                                    Thursday check-in
                                        </div>
                            </div>
                        </div>
                        {/* <div className="container">
                            <hr />
                        </div> */}
                        <div className="list-services">
                            <p>Thing to keep in mind</p>
                            <ul>
                                <li>
                                    <div className="row service-detail">
                                        <div className="logo-box">
                                            <i class="fa fa-child" aria-hidden="true"></i>
                                        </div>
                                        <div className="logo-content">
                                            <p>Suitable for children and infants</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row service-detail">
                                        <div className="logo-box">
                                            <i class="fa fa-child" aria-hidden="true"></i>
                                        </div>
                                        <div className="logo-content">
                                            <p>Suitable for children and infants</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row service-detail">
                                        <div className="logo-box">
                                            <i class="fa fa-child" aria-hidden="true"></i>
                                        </div>
                                        <div className="logo-content">
                                            <p>Suitable for children and infants</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row service-detail">
                                        <div className="logo-box">
                                            <i class="fa fa-child" aria-hidden="true"></i>
                                        </div>
                                        <div className="logo-content">
                                            <p>Suitable for children and infants</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row service-detail">
                                        <div className="logo-box">
                                            <i class="fa fa-child" aria-hidden="true"></i>
                                        </div>
                                        <div className="logo-content">
                                            <p>Suitable for children and infants</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p>Additional Rules</p>
                                    <p>- Check IN/check OUT: please let us know 30 minutes in advance to supported</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div className="info-box">
                            <div className="container box-room">
                                <div className="box-room-title">
                                    <p>
                                        The Dragons host @ Vung Tau Melody 2 PRs B0407
                                    </p>
                                    <p>
                                        Entire home/apt in Thành phố Vũng Tàu
                                    </p>
                                </div>
                                <div className="box-room-img">
                                    <img src={require('../assets/img/ba.jpg')} />
                                </div>
                            </div>
                            <div className="container">
                                <hr />
                            </div>
                            <div className="container">
                                <ul>
                                    <li>
                                        <span>
                                            <i class="fa fa-users" aria-hidden="true">
                                                1 guest
                                            </i>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class="fa fa-calendar" aria-hidden="true">
                                                Jan 24,2019 --> Jan 30,2019
                                            </i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="container">
                                <hr />
                            </div>
                            <div className="container div-price">
                                <ul className="price-group">
                                    <li>
                                        <div className="price-info">
                                            đ796,692 x 6 nights
                                        </div>
                                        <div className="price-total">
                                            đ4,780,152
                                        </div>
                                    </li>
                                    <li>
                                        <div className="price-info">
                                            Cleaning free
                                        </div>
                                        <div className="price-total">
                                            đ348,069
                                        </div>
                                    </li>
                                    <li>
                                        <div className="price-info">
                                            Service free
                                        </div>
                                        <div className="price-total">
                                            đ672,934
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="container">
                                <hr />
                            </div>
                            <div className="container div-price">
                                <ul className="price-group">
                                    <li>
                                        <div className="price-info">
                                            Total (VND)
                                        </div>
                                        <div className="price-total">
                                            đ5,801,157
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="container">
                                <hr />
                            </div>
                            <div className="container footer-box-room">
                                <p>Flexible - free cancellation</p>
                                <p>Cancel with 48 hours of booking to get a full refund</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewHouse