import React, { Component } from 'react'
import '../assets/css/style.css'

class AccountSettingComponent extends Component {
    render(){
        return(
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Notifications</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">Payment Method</a>
                            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="true">Payout Preferences</a>
                            <a className="nav-link" id="v-pills-privacy-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">Privacy</a>
                            <a className="nav-link" id="v-pills-security-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">Security</a>
                            <a className="nav-link" id="v-pills-contact-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">Contacted app</a>
                            <a className="nav-link" id="v-pills-setting-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">Setting</a>
                            <a className="nav-link" id="v-pills-badges-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">Badges</a>



                            <button type="button" className="btn btn-light">View profile</button>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="card message">
                                    <div className="card-header">
                                        Message
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title">Receive message from host and guest, including booking requests.</p>
                                        <hr/>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="1" />Email</label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="3" />Push notifications
                                                <br/>
                                                <p>To your mobile or tablet devices</p>
                                            </label>
                                        </div>
                                        <div className="checkbox disabled">
                                            <label><input type="checkbox" value="3" />Text messages</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="col-lg-6 col-sm-12">
                                <div className="card contact-information">
                                    <div className="card-header">
                                        Contact information
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title">This information can be edited from your profile page.
                                            <a href="url">Edit profile</a></p>
                                        <hr/>
                                        <form>
                                            <div className="form-row">
                                                <div className="col">
                                                    <p>Email</p>
                                                </div>
                                                <div className="col">
                                                    <p>tranthoai151@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col">
                                                    <p>Phone number</p>
                                                </div>
                                                <div className="col">
                                                    <p>01684511324</p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        Reminders
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title">Receive booking reminders, requests to write a review, pricing notices, and other
                                            reminders related to your activities on Airbnb.</p>
                                        <hr/>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value="1" />Email</label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="3" />Push notifications
                                                <br/>
                                                <p>To your mobile or tablet devices</p>
                                            </label>
                                        </div>
                                        <div className="checkbox ">
                                            <label><input type="checkbox" value="3" />Text messages</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="col-lg-6 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        Text Messages
                                    </div>
                                    <div className="card-body">
                                        <div className="form-row">
                                            <div className="col-4">
                                                <p>Receive SMS notifications to: </p>
                                            </div>
                                            <div className="col-8">
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="01684511324" />
                                            </div>
                                        </div>
                                        <hr/>
                                        <p>Note: for more information, text HELP to 247262.<br/>
                                            To cancel mobile notifications, reply STOP to 247262. Message and Data rates may apply.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default AccountSettingComponent