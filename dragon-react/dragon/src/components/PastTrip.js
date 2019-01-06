import React, { Component } from 'react'
import '../assets/css/pasttrip.css'

class PastTripComponent extends Component{
    render(){
        return(
            <div className="container">
                <div className="container">
                    <div>
                        <p>Past Trips</p>
                    </div>
                    <div className="row bodyPastrip">
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src="img/mot.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <img src="img/avatar.jpg" alt="Avatar" className = "avatar-pasttrip"/>
                                    <h5 className="card-title">Ngũ Hành Sơn</h5>
                                    <div className="content-info">
                                        <p>Oct - 19, 2018 . 1 guest</p>
                                        <p>FIFAHOUSE STUDIO WALKING TO BEACH MY KHE</p>
                                    </div>
                                    <div className="footer-content">
                                        <span className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </span>
                                        <p>Read Your Review</p>
                                        <hr/>
                                        <a href="#">Get Receipt</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="img/bon.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <img src="img/avatar.jpg" alt="Avatar" className = "avatar-pasttrip"/>
                                    <h5 className="card-title">Hồ Chí Minh City </h5>
                                    <div className="content-info">
                                        <p>Oct - 19, 2018 . 1 guest</p>
                                        <p>FIFAHOUSE STUDIO WALKING TO BEACH MY KHE</p>
                                    </div>
                                    <div className="footer-content">
                                        <span className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </span>
                                        <p>Read Your Review</p>
                                        <hr/>
                                        <a href="#">Get Receipt</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="img/ba.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <img src="img/avatar.jpg" alt="Avatar" className = "avatar-pasttrip"/>
                                    <h5 className="card-title">Bến Nghé</h5>
                                    <div className="content-info">
                                        <p>Oct - 19, 2018 . 1 guest</p>
                                        <p>FIFAHOUSE STUDIO WALKING TO BEACH MY KHE</p>
                                    </div>
                                    <div className="footer-content">
                                        <span className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </span>
                                        <p>Read Your Review</p>
                                        <hr/>
                                        <a href="#">Get Receipt</a>
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

export default PastTripComponent