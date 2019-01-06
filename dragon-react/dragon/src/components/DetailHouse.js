import React, { Component } from 'react'
import '../assets/css/privateHomeInHouse.css'

class DetailHouseComponent extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            selectGuest:""
        };
        this.handeChageGuest =  this.handeChageGuest.bind(this)


    }
    handeChageGuest(event){
        this.setState({
            selectGuest: event.target.value,
        });
    }
    render() {
        return (
            <div className="container divbody">
                <div className="privateRom">
                    <div className="row">
                        <div className="col-md-7 col-sm-12">
                            <h5 style={{color: 'darkred'}}>PRIVATE ROOM IN HOUSE</h5>
                            <div className="optionTitle">
                                <p className="title">5 minutes on foot from Takaida Statiion!</p>
                                <p>Higashiosaka-shi</p>
                                <img className="avatar" src="../img/avatar.jpg" alt=""/>
                                <span>
                                    <i className="fa fa-users" aria-hidden="true"></i> 8 guests
                                    <i className="fa fa-bell" aria-hidden="true"></i> 2 bedrooms
                                    <i className="fa fa-bed" aria-hidden="true"></i> 8 beds
                                    <i className="fa fa-bath" aria-hidden="true"></i> 1 share bath
                                </span>
                            </div>
                            <div className="home-high-lights">
                                <div className="content">
                                    <p>HOME HIGHLIGHTS</p>
                                    <p>Hiroyasu is a Superhost. Superhosts are experienced, highly rated hosts</p>
                                    <p>Who are commited to providing greate stays for guests.</p>
                                    <p>
                                        <span>
                                            Helpful <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>.
                                            Not helpful <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                                        </span>
                                    </p>
                                    <p>Sparkling clean. 11 recent guest have said that this home was sparkling clean.</p>
                                    <p>
                                        <span>
                                            Helpful <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>.
                                            Not helpful <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                                        </span>
                                    </p>
                                    <p>Hot tub. This is one of few homes in this area that has this features.</p>
                                    <p>
                                        <span>
                                            Helpful <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>.
                                            Not helpful <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <br/>
                            <p>Higashiosaka Takaida Monozukuri (Craftsmanship) Experience and Traing Facility <br/>(inside Doushin Kinzoku Kogyo, Inc..)</p>
                            <p>For transportation, Takaida station on the Chuo subway Line and JR Takaida-Chuo <br/>station are available</p>
                            <br/>
                            <p style={{color: '#40bab3'}}>Read more about the space</p>
                            <p style={{color: '#40bab3'}}>Contact host</p>

                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="request-to-book">
                                <div className="content-request">
                                    <span>
                                        <b>$35</b> per night
                                    </span>
                                    <p>
                                        <span>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            65
                                        </span>
                                    </p>
                                    <hr/>
                                    <div className="form-group">
                                        <label htmlFor="email">Date</label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Guest:</label>
                                        <select className="form-control" value={this.state.selectGuest} onChange={this.handeChageGuest} id="inlineFormCustomSelect">
                                            <option value="1">1 guest</option>
                                            <option value="2">2 guests</option>
                                        </select>
                                        <br/>
                                        <button className="form-control btnRequest">Request to Book</button>
                                        <p style={{textAlign: 'center'}}>You won't be charged yet</p>
                                    </div>
                                    <hr/>
                                    <div className="footer-request">
                                        <p>This home is on people's minds.</p>
                                        <p> It's been viewed 500+ times in the past week</p>
                                        <i className="fa fa-lightbulb-o logo-created" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <p style={{textAlign: 'center'}}><i className="fa fa-flag-o" aria-hidden="true"></i> Report this listing</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailHouseComponent    