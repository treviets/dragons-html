import React, {Component} from 'react'
import '../assets/css/trasactionhistory.css'

class TransactionHistoryComponent extends Component{
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
                            <button type="button" className="btn btn-light btnView">Invite Friends</button>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <label htmlFor="">Wellcome to your new Transaction History. <a href="#">Share your feedback</a></label>
                        </div>
                        <hr/>
                        <div className="content-history">
                            <ul className="nav nav-tabs nav-justified" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#completed">Completed Payouts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#updacomming">Upcoming Payouts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#gross">Gross Earnings</a>
                                </li>
                            </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" data-toggle="tab" id="completed">
                                        <br/>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <form className="form-group">
                                                    <select name="cars" className="form-control">
                                                        <option selected>All Payout Method</option>
                                                        <option value="volvo">Method 1</option>
                                                        <option value="fiat">Method 2</option>
                                                        <option value="audi">Method 3</option>
                                                    </select>
                                                </form>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <form className="form-group">
                                                    <select name="cars" className="form-control">
                                                        <option selected>All Listings</option>
                                                        <option value="volvo">Method 1</option>
                                                        <option value="fiat">Method 2</option>
                                                        <option value="audi">Method 3</option>
                                                    </select>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-12 col-init-trans">
                                                        <form className="form-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text hiddenDiv">From: </div>
                                                                <select name="cars" className="form-control">
                                                                    <option selected>January</option>
                                                                    <option value="volvo">February</option>
                                                                    <option value="volvo">March</option>
                                                                </select>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-md-4 col-sm-12 ">
                                                    <form className="form-group">
                                                        <select name="cars" className="form-control">
                                                            <option selected>2018</option>
                                                            <option value="volvo">2019</option>
                                                            <option value="fiat">2020</option>
                                                            <option value="audi">2021</option>
                                                        </select>
                                                    </form>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-12 col-init-trans">
                                                        <form className="form-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text hiddenDiv">To: </div>
                                                                <select name="cars" className="form-control">
                                                                    <option selected>January</option>
                                                                    <option value="volvo">February</option>
                                                                    <option value="volvo">March</option>
                                                                </select>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-md-4 col-sm-12 ">
                                                        <form className="form-group">
                                                            <select name="cars" className="form-control">
                                                                <option selected>2018</option>
                                                                <option value="volvo">2019</option>
                                                                <option value="fiat">2020</option>
                                                                <option value="audi">2021</option>
                                                            </select>
                                                        </form>
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="paidOut">
                                                    <p >Paid Out:</p>
                                                    <a href="#">Download CSV</a>
                                                </div>
                                            </div>
                                            <div className="col-md-10 col-sm-12 paidOut2">
                                                <hr/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 card">
                                            <div className="row card-body">
                                                <div className="col-md-6 col-sm-6">
                                                    <label>Dec 14, 2018</label><br/>
                                                    <span>7 transactions</span><br/>
                                                    <span>Account ****04</span>
                                                </div>
                                                <div className="col-md-6 col-sm-6 price">
                                                    <p>đ31,343,043</p>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row card-body">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Dec 13, 2018</label><br/>
                                                    <span>7 transactions</span><br/>
                                                    <span>Account ****04</span>
                                                </div>
                                                <div className="col-md-6 col-sm-12 price">
                                                    <p>đ31,343,043</p>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row card-body">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Dec 13, 2018</label><br/>
                                                    <span>7 transactions</span><br/>
                                                    <span>Account ****04</span>
                                                </div>
                                                <div className="col-md-6 col-sm-12 price">
                                                    <p>đ31,343,043</p>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row card-body">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Dec 13, 2018</label><br/>
                                                    <span>7 transactions</span><br/>
                                                    <span>Account ****04</span>
                                                </div>
                                                <div className="col-md-6 col-sm-12 price">
                                                    <p>đ31,343,043</p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="tab-pane fade" data-toggle="tab" id="updacomming">
                                        updacomming
                                    </div>
                                    <div className="tab-pane fade" data-toggle="tab" id="gross">
                                        gross
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

export default TransactionHistoryComponent