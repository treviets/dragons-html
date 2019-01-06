import React, { Component } from 'react'
import '../../assets/css/slide.css'
import '../../assets/css/style.css'


class HomeComponent extends Component { 
    
    render() {
        return (
        <div className="home">          
            <div className="col-md-12">
                    <div className="left-menu left-responsive ">
                    <div className="menu no-padding-lr-mobile">
                        <div className="_1lr8j2n8">
                            <div style={{marginTop: '16px', marginBottom: '8px'}}><div className="label-menu"> Dates </div></div>
                            <button aria-haspopup="true" aria-expanded="false" aria-controls="menuItemComponent-date_picker" className="button-menu"><div className="label-button">Check in → Check out</div>
                                <span className="span-button">
                                    <div className="span-icon-button" style={{transform: 'rotate(0deg)'}}>
                                        <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                            <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </span>
                            </button>
                            <div style={{marginTop: '16px', marginBottom: '8px'}}><div className="label-menu"> Guests </div></div>
                            <button aria-haspopup="true" aria-expanded="false" aria-controls="menuItemComponent-date_picker" className="button-menu"><div className="label-button">Guests</div>
                                <span className="span-button">
                                    <div className="span-icon-button" style={{transform: 'rotate(0deg)'}}>
                                        <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                            <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </span>
                            </button>
                        </div>
                        <span>
                            <span style={{fontSize: '0px'}}></span>
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
                                                        <div style={{marginLeft: '8px'}}>
                                                            <div className="_d5depq" style={{transform: 'rotate(180deg)'}}>
                                                                <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '10px', width: '10px', display: 'block', fill: 'rgb(118, 118, 118)'}}>
                                                                    <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '8px'}} id="amount-range-private" >
                                        <div className="_1r804a6o" id="amount-hide" style={{fontSize:'12px !important'}}>₫230000 - ₫25000000+</div>
                                    </div>
                                </button>
                                <div id="select-range">
                                    <div className="_x01z5ll">
                                        <div style={{marginTop: '16px'}}>
                                            <div style={{marginBottom: '-16px'}}>
                                                <div style={{marginBottom: '16px'}}>
                                                    <div>
                                                        <div style={{marginBottom: '16px'}}>
                                                            <div style={{marginBottom: '16px'}}>
                                                                <div style={{marginBottom: '8px'}}>
                                                                    <div className="_12kw8n71" style={{fontSize: '12px'}}>The average nightly price is ₫1,763,582</div>
                                                                </div>
                                                                <div className="_z6hmjh">
                                                                    <div style={{marginTop: '16px'}}>
                                                                        
                                                                        <div className="_sh9qj2d">
                                                                            <div id="slider-range" className="price-filter-range" name="rangeInput"></div>
                                                                        
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div style={{marginTop: '40px'}}>
                                                                    <div className="_1r804a6o" id="amount">₫230000 - ₫25000000+</div>
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
                            <span style={{fontSize: '0px'}}></span>
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
                                                        <div style={{marginLeft: '8px'}}>
                                                            <div className="_d5depq" style={{transform: 'rotate(180deg)'}}>
                                                                <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '10px', width: '10px', display: 'block', fill: 'rgb(118, 118, 118)'}}>
                                                                    <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '8px'}} id="Entire"><div className="_4r6fry" style={{fontSize:'14px'}}>Entire place</div></div>
                                </button>
                                <div id="Entire-checkbox">
                                    <div className="_x01z5ll">
                                        <div style={{marginTop: '16px'}}>
                                            <div style={{marginBottom: '-16px'}}>
                                                <div style={{marginBottom: '16px'}}>
                                                    <div>
                                                        <div>
                                                            <label className="_4m7syz" >
                                                                <div className="_gyif22">
                                                                    <div className="_73ihd0r">
                                                                        <span className="_foa2bi">
                                                                            <input type="checkbox" className="_fcv8ql" aria-invalid="false" id="DynamicFilterCheckboxItem-room_types-Entire_home" name="room_types-Entire_home" value="on"/>
                                                                            <span data-fake-checkbox="true" data-style-select="false" id="DynamicFilterSpanItem-room_types-Entire_home" data-style-default="true" className="_fhj4ui">
                                                                                
                                                                            </span>
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
                                                <div style={{marginBottom: '16px'}}>
                                                    <div>
                                                        <div>
                                                            <label className="_4m7syz" >
                                                                <div className="_gyif22">
                                                                    <div className="_73ihd0r">
                                                                        <span className="_foa2bi">
                                                                            <input type="checkbox" className="_fcv8ql" aria-invalid="false" id="DynamicFilterCheckboxItem-room_types-Private_room" name="room_types-Private_room" value="on"/>
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
                                                <div style={{marginBottom: '16px'}}>
                                                    <div>
                                                        <div>
                                                            <label className="_4m7syz" >
                                                                <div className="_gyif22">
                                                                    <div className="_73ihd0r">
                                                                        <span className="_foa2bi">
                                                                            <input type="checkbox" className="_fcv8ql" aria-invalid="false" id="DynamicFilterCheckboxItem-room_types-Shared_room" name="room_types-Shared_room" value="on"/>
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

                <div className="right-home">
                <div className="container main-slider no-padding-lr-mobile">
                    <div className="_1avdemu">
                        <div className="_76dwae">
                            <h3 className="_jmmm34f">
                                <div>
                                    <div>300+ homes</div>
                                </div>
                            </h3>
                            <h4 className="_1olgbwl">A selection of homes verified for quality and comfort</h4>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 bottom-group">
                                <div id="demo" className="carousel slide" data-ride="carousel"  data-interval="false">
                                    
                                    <ul className="carousel-indicators">
                                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                                        <li data-target="#demo" data-slide-to="1"></li>
                                        <li data-target="#demo" data-slide-to="2"></li>
                                        <li data-target="#demo" data-slide-to="3"></li>
                                    </ul>
                                    
                                    
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="img/original1.jpg" alt="Los Angeles" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original2.jpg" alt="Chicago" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original3.jpg" alt="New York" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original4.jpg" alt="New York" width="1100" height="500"/>
                                        </div>
                                    </div>
                                    
                            
                                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" href="#demo" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div>
                                <div className="_v72lrv">
                                    <a href="/detail/house" target="_blank" rel="noopener" data-check-info-section="true" className="_1ol0z3h">
                                        <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                                            <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                                                <span className="_1bb2ucx1">
                                                    <span style={{color: 'rgb(98, 86, 75)'}}>Entire house
                                                        <span aria-hidden="true"> · </span>Ostuni
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '4px'}}>
                                            <div className="_1pkilk3o">
                                                <div className="_ng4pvpo">I SETTE CONI - TRULLO EDERA </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div>
                                                <div className="_59f9ic">
                                                    <div className="_ncmdki">
                                                        <div className="_1yarz4r">
                                                            <span>
                                                                <span>
                                                                    <span className="_12kw8n71">
                                                                        <span className="_12kw8n71">
                                                                            <span className="_1m8bb6v">Price</span>
                                                                            <span>₫1,725,019</span>
                                                                        </span> per night
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="_y9ev9r">
                                                        <div className="_1cm6f7d">
                                                            <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                            <span className="_12kw8n71">Free cancellation</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div className="_hdbaj7">
                                                <div className="_36rlri">
                                                    <span className="_q27mtmr">
                                                        <span role="img" aria-label="Rating 5 out of 5">
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="_1m8bb6v">149 reviews</span>
                                                    <span className="_1gvnvab" aria-hidden="true">
                                                        <span className="_7g6kz31">149</span>
                                                    </span>
                                                </div>
                                                <span className="_7g6kz31">
                                                    <span aria-hidden="true"> · </span>Superhost
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 bottom-group">
                                <div id="demo1" className="carousel slide" data-ride="carousel"  data-interval="false">

                                    <ul className="carousel-indicators">
                                        <li data-target="#demo1" data-slide-to="0" className="active"></li>
                                        <li data-target="#demo1" data-slide-to="1"></li>
                                        <li data-target="#demo1" data-slide-to="2"></li>
                                        <li data-target="#demo1" data-slide-to="3"></li>
                                    </ul>
                                    
                                
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="img/original1.jpg" alt="Los Angeles" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original2.jpg" alt="Chicago" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original3.jpg" alt="New York" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original4.jpg" alt="New York" width="1100" height="500"/>
                                        </div>
                                    </div>
                                    
                                    <a className="carousel-control-prev" href="#demo1" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" href="#demo1" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div>
                                <div className="_v72lrv">
                                    <a href="/detail/house" target="_blank" rel="noopener" data-check-info-section="true" className="_1ol0z3h">
                                        <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                                            <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                                                <span className="_1bb2ucx1">
                                                    <span style={{color: 'rgb(98, 86, 75)'}}>Entire house
                                                        <span aria-hidden="true"> · </span>Ostuni
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '4px'}}>
                                            <div className="_1pkilk3o">
                                                <div className="_ng4pvpo">I SETTE CONI - TRULLO EDERA </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div>
                                                <div className="_59f9ic">
                                                    <div className="_ncmdki">
                                                        <div className="_1yarz4r">
                                                            <span>
                                                                <span>
                                                                    <span className="_12kw8n71">
                                                                        <span className="_12kw8n71">
                                                                            <span className="_1m8bb6v">Price</span>
                                                                            <span>₫1,725,019</span>
                                                                        </span> per night
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="_y9ev9r">
                                                        <div className="_1cm6f7d">
                                                            <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                            <span className="_12kw8n71">Free cancellation</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div className="_hdbaj7">
                                                <div className="_36rlri">
                                                    <span className="_q27mtmr">
                                                        <span role="img" aria-label="Rating 5 out of 5">
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="_1m8bb6v">149 reviews</span>
                                                    <span className="_1gvnvab" aria-hidden="true">
                                                        <span className="_7g6kz31">149</span>
                                                    </span>
                                                </div>
                                                <span className="_7g6kz31">
                                                    <span aria-hidden="true"> · </span>Superhost
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 bottom-group">
                                <div id="demo2" className="carousel slide" data-ride="carousel"  data-interval="false">
                                    <ul className="carousel-indicators">
                                        <li data-target="#demo2" data-slide-to="0" className="active"></li>
                                        <li data-target="#demo2" data-slide-to="1"></li>
                                        <li data-target="#demo2" data-slide-to="2"></li>
                                        <li data-target="#demo2" data-slide-to="3"></li>
                                    </ul>
                                    
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="img/original1.jpg" alt="Los Angeles" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original2.jpg" alt="Chicago" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original3.jpg" alt="New York" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original4.jpg" alt="New York" width="1100" height="500"/>
                                        </div>
                                    </div>
                                    
                        
                                    <a className="carousel-control-prev" href="#demo2" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" href="#demo2" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div> 
                                <div className="_v72lrv">
                                    <a href="/detail/house" target="_blank" rel="noopener" data-check-info-section="true" className="_1ol0z3h">
                                        <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                                            <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                                                <span className="_1bb2ucx1">
                                                    <span style={{color: 'rgb(98, 86, 75)'}}>Entire house
                                                        <span aria-hidden="true"> · </span>Ostuni
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '4px'}}>
                                            <div className="_1pkilk3o">
                                                <div className="_ng4pvpo">I SETTE CONI - TRULLO EDERA </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div>
                                                <div className="_59f9ic">
                                                    <div className="_ncmdki">
                                                        <div className="_1yarz4r">
                                                            <span>
                                                                <span>
                                                                    <span className="_12kw8n71">
                                                                        <span className="_12kw8n71">
                                                                            <span className="_1m8bb6v">Price</span>
                                                                            <span>₫1,725,019</span>
                                                                        </span> per night
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="_y9ev9r">
                                                        <div className="_1cm6f7d">
                                                            <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                            <span className="_12kw8n71">Free cancellation</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div className="_hdbaj7">
                                                <div className="_36rlri">
                                                    <span className="_q27mtmr">
                                                        <span role="img" aria-label="Rating 5 out of 5">
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="_1m8bb6v">149 reviews</span>
                                                    <span className="_1gvnvab" aria-hidden="true">
                                                        <span className="_7g6kz31">149</span>
                                                    </span>
                                                </div>
                                                <span className="_7g6kz31">
                                                    <span aria-hidden="true"> · </span>Superhost
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>                   
                            </div>
                            <div className="col-md-6 col-lg-4 bottom-group">
                                    <div id="demo3" className="carousel slide" data-ride="carousel"  data-interval="false">
                                        
                                        <ul className="carousel-indicators">
                                            <li data-target="#demo3" data-slide-to="0" className="active"></li>
                                            <li data-target="#demo3" data-slide-to="1"></li>
                                            <li data-target="#demo3" data-slide-to="2"></li>
                                            <li data-target="#demo3" data-slide-to="3"></li>
                                        </ul>
                                        
                                        
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                            <img src="img/original1.jpg" alt="Los Angeles" width="1100" height="500" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src="img/original2.jpg" alt="Chicago" width="1100" height="500" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src="img/original3.jpg" alt="New York" width="1100" height="500" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src="img/original4.jpg" alt="New York" width="1100" height="500" />
                                            </div>
                                        </div>
                                        
                                        
                                        <a className="carousel-control-prev" href="#demo3" data-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                        </a>
                                        <a className="carousel-control-next" href="#demo3" data-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                        </a>
                                    </div>
                                    <div className="_v72lrv">
                                        <a href="/detail/house" target="_blank" rel="noopener" data-check-info-section="true" className="_1ol0z3h">
                                            <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                                                <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                                                    <span className="_1bb2ucx1">
                                                        <span style={{color: 'rgb(98, 86, 75)'}}>Entire house
                                                            <span aria-hidden="true"> · </span>Ostuni
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div style={{marginTop: '4px'}}>
                                                <div className="_1pkilk3o">
                                                    <div className="_ng4pvpo">I SETTE CONI - TRULLO EDERA </div>
                                                </div>
                                            </div>
                                            <div style={{marginTop: '2px'}}>
                                                <div>
                                                    <div className="_59f9ic">
                                                        <div className="_ncmdki">
                                                            <div className="_1yarz4r">
                                                                <span>
                                                                    <span>
                                                                        <span className="_12kw8n71">
                                                                            <span className="_12kw8n71">
                                                                                <span className="_1m8bb6v">Price</span>
                                                                                <span>₫1,725,019</span>
                                                                            </span> per night
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="_y9ev9r">
                                                            <div className="_1cm6f7d">
                                                                <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                                <span className="_12kw8n71">Free cancellation</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{marginTop: '2px'}}>
                                                <div className="_hdbaj7">
                                                    <div className="_36rlri">
                                                        <span className="_q27mtmr">
                                                            <span role="img" aria-label="Rating 5 out of 5">
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </span>
                                                        <span className="_1m8bb6v">149 reviews</span>
                                                        <span className="_1gvnvab" aria-hidden="true">
                                                            <span className="_7g6kz31">149</span>
                                                        </span>
                                                    </div>
                                                    <span className="_7g6kz31">
                                                        <span aria-hidden="true"> · </span>Superhost
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                            </div>
                            <div className="col-md-6 col-lg-4 bottom-group">
                                <div id="demo4" className="carousel slide" data-ride="carousel"  data-interval="false">
                                
                                    <ul className="carousel-indicators">
                                        <li data-target="#demo4" data-slide-to="0" className="active"></li>
                                        <li data-target="#demo4" data-slide-to="1"></li>
                                        <li data-target="#demo4" data-slide-to="2"></li>
                                        <li data-target="#demo4" data-slide-to="3"></li>
                                    </ul>
                                    
                                    
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="img/original1.jpg" alt="Los Angeles" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original2.jpg" alt="Chicago" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original3.jpg" alt="New York" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original4.jpg" alt="New York" width="1100" height="500"/>
                                        </div>
                                    </div>
                                    
                                    
                                    <a className="carousel-control-prev" href="#demo4" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" href="#demo4" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div>
                                <div className="_v72lrv">
                                    <a href="PrivateRomInHouse.html" target="_blank" rel="noopener" data-check-info-section="true" className="_1ol0z3h">
                                        <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                                            <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                                                <span className="_1bb2ucx1">
                                                    <span style={{color: 'rgb(98, 86, 75)'}}>Entire house
                                                        <span aria-hidden="true"> · </span>Ostuni
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '4px'}}>
                                            <div className="_1pkilk3o">
                                                <div className="_ng4pvpo">I SETTE CONI - TRULLO EDERA </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div>
                                                <div className="_59f9ic">
                                                    <div className="_ncmdki">
                                                        <div className="_1yarz4r">
                                                            <span>
                                                                <span>
                                                                    <span className="_12kw8n71">
                                                                        <span className="_12kw8n71">
                                                                            <span className="_1m8bb6v">Price</span>
                                                                            <span>₫1,725,019</span>
                                                                        </span> per night
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="_y9ev9r">
                                                        <div className="_1cm6f7d">
                                                            <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                            <span className="_12kw8n71">Free cancellation</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div className="_hdbaj7">
                                                <div className="_36rlri">
                                                    <span className="_q27mtmr">
                                                        <span role="img" aria-label="Rating 5 out of 5">
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="_1m8bb6v">149 reviews</span>
                                                    <span className="_1gvnvab" aria-hidden="true">
                                                        <span className="_7g6kz31">149</span>
                                                    </span>
                                                </div>
                                                <span className="_7g6kz31">
                                                    <span aria-hidden="true"> · </span>Superhost
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 bottom-group">
                                <div id="demo5" className="carousel slide" data-ride="carousel"  data-interval="false">
                                    
                                    <ul className="carousel-indicators">
                                        <li data-target="#demo5" data-slide-to="0" className="active"></li>
                                        <li data-target="#demo5" data-slide-to="1"></li>
                                        <li data-target="#demo5" data-slide-to="2"></li>
                                        <li data-target="#demo5" data-slide-to="3"></li>
                                    </ul>
                                    
                                
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="img/original1.jpg" alt="Los Angeles" width="1100" height="500" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original2.jpg" alt="Chicago" width="1100" height="500" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original3.jpg" alt="New York" width="1100" height="500" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original4.jpg" alt="New York" width="1100" height="500" />
                                        </div>
                                    </div>
                                    
                                    
                                    <a className="carousel-control-prev" href="#demo5" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" href="#demo5" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div> 
                                <div className="_v72lrv">
                                    <a href="PrivateRomInHouse.html" target="_blank" rel="noopener" data-check-info-section="true" className="_1ol0z3h">
                                        <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                                            <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                                                <span className="_1bb2ucx1">
                                                    <span style={{color: 'rgb(98, 86, 75)'}}>Entire house
                                                        <span aria-hidden="true"> · </span>Ostuni
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '4px'}}>
                                            <div className="_1pkilk3o">
                                                <div className="_ng4pvpo">I SETTE CONI - TRULLO EDERA </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div>
                                                <div className="_59f9ic">
                                                    <div className="_ncmdki">
                                                        <div className="_1yarz4r">
                                                            <span>
                                                                <span>
                                                                    <span className="_12kw8n71">
                                                                        <span className="_12kw8n71">
                                                                            <span className="_1m8bb6v">Price</span>
                                                                            <span>₫1,725,019</span>
                                                                        </span> per night
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="_y9ev9r">
                                                        <div className="_1cm6f7d">
                                                            <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                            <span className="_12kw8n71">Free cancellation</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div className="_hdbaj7">
                                                <div className="_36rlri">
                                                    <span className="_q27mtmr">
                                                        <span role="img" aria-label="Rating 5 out of 5">
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="_1m8bb6v">149 reviews</span>
                                                    <span className="_1gvnvab" aria-hidden="true">
                                                        <span className="_7g6kz31">149</span>
                                                    </span>
                                                </div>
                                                <span className="_7g6kz31">
                                                    <span aria-hidden="true"> · </span>Superhost
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>                   
                            </div>
                            <div className="col-md-6 col-lg-4 bottom-group">
                                    <div id="demo3" className="carousel slide" data-ride="carousel"  data-interval="false">
                                        
                                        <ul className="carousel-indicators">
                                            <li data-target="#demo3" data-slide-to="0" className="active"></li>
                                            <li data-target="#demo3" data-slide-to="1"></li>
                                            <li data-target="#demo3" data-slide-to="2"></li>
                                            <li data-target="#demo3" data-slide-to="3"></li>
                                        </ul>
                                        
                                    
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                            <img src="img/original1.jpg" alt="Los Angeles" width="1100" height="500" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src="img/original2.jpg" alt="Chicago" width="1100" height="500" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src="img/original3.jpg" alt="New York" width="1100" height="500" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src="img/original4.jpg" alt="New York" width="1100" height="500" />
                                            </div>
                                        </div>
                                        
                                        
                                        <a className="carousel-control-prev" href="#demo3" data-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                        </a>
                                        <a className="carousel-control-next" href="#demo3" data-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                        </a>
                                    </div>
                                    <div className="_v72lrv">
                                        <a href="PrivateRomInHouse.html" target="_blank" rel="noopener" data-check-info-section="true" className="_1ol0z3h">
                                            <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                                                <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                                                    <span className="_1bb2ucx1">
                                                        <span style={{color: 'rgb(98, 86, 75)'}}>Entire house
                                                            <span aria-hidden="true"> · </span>Ostuni
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div style={{marginTop: '4px'}}>
                                                <div className="_1pkilk3o">
                                                    <div className="_ng4pvpo">I SETTE CONI - TRULLO EDERA </div>
                                                </div>
                                            </div>
                                            <div style={{marginTop: '2px'}}>
                                                <div>
                                                    <div className="_59f9ic">
                                                        <div className="_ncmdki">
                                                            <div className="_1yarz4r">
                                                                <span>
                                                                    <span>
                                                                        <span className="_12kw8n71">
                                                                            <span className="_12kw8n71">
                                                                                <span className="_1m8bb6v">Price</span>
                                                                                <span>₫1,725,019</span>
                                                                            </span> per night
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="_y9ev9r">
                                                            <div className="_1cm6f7d">
                                                                <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                                <span className="_12kw8n71">Free cancellation</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{marginTop: '2px'}}>
                                                <div className="_hdbaj7">
                                                    <div className="_36rlri">
                                                        <span className="_q27mtmr">
                                                            <span role="img" aria-label="Rating 5 out of 5">
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </span>
                                                        <span className="_1m8bb6v">149 reviews</span>
                                                        <span className="_1gvnvab" aria-hidden="true">
                                                            <span className="_7g6kz31">149</span>
                                                        </span>
                                                    </div>
                                                    <span className="_7g6kz31">
                                                        <span aria-hidden="true"> · </span>Superhost
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                            </div>
                            <div className="col-md-6 col-lg-4 bottom-group">
                                <div id="demo4" className="carousel slide" data-ride="carousel"  data-interval="false">
                                
                                    <ul className="carousel-indicators">
                                        <li data-target="#demo4" data-slide-to="0" className="active"></li>
                                        <li data-target="#demo4" data-slide-to="1"></li>
                                        <li data-target="#demo4" data-slide-to="2"></li>
                                        <li data-target="#demo4" data-slide-to="3"></li>
                                    </ul>
                                    
                                
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="img/original1.jpg" alt="Los Angeles" width="1100" height="500" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original2.jpg" alt="Chicago" width="1100" height="500" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original3.jpg" alt="New York" width="1100" height="500" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original4.jpg" alt="New York" width="1100" height="500" />
                                        </div>
                                    </div>
                                    
                                    
                                    <a className="carousel-control-prev" href="#demo4" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" href="#demo4" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div>
                                <div className="_v72lrv">
                                    <a href="PrivateRomInHouse.html" target="_blank" rel="noopener" data-check-info-section="true" className="_1ol0z3h">
                                        <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                                            <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                                                <span className="_1bb2ucx1">
                                                    <span style={{color: 'rgb(98, 86, 75)'}}>Entire house
                                                        <span aria-hidden="true"> · </span>Ostuni
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '4px'}}>
                                            <div className="_1pkilk3o">
                                                <div className="_ng4pvpo">I SETTE CONI - TRULLO EDERA </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div>
                                                <div className="_59f9ic">
                                                    <div className="_ncmdki">
                                                        <div className="_1yarz4r">
                                                            <span>
                                                                <span>
                                                                    <span className="_12kw8n71">
                                                                        <span className="_12kw8n71">
                                                                            <span className="_1m8bb6v">Price</span>
                                                                            <span>₫1,725,019</span>
                                                                        </span> per night
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="_y9ev9r">
                                                        <div className="_1cm6f7d">
                                                            <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                            <span className="_12kw8n71">Free cancellation</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div className="_hdbaj7">
                                                <div className="_36rlri">
                                                    <span className="_q27mtmr">
                                                        <span role="img" aria-label="Rating 5 out of 5">
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="_1m8bb6v">149 reviews</span>
                                                    <span className="_1gvnvab" aria-hidden="true">
                                                        <span className="_7g6kz31">149</span>
                                                    </span>
                                                </div>
                                                <span className="_7g6kz31">
                                                    <span aria-hidden="true"> · </span>Superhost
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 bottom-group">
                                <div id="demo5" className="carousel slide" data-ride="carousel"  data-interval="false">
                                    
                                    <ul className="carousel-indicators">
                                        <li data-target="#demo5" data-slide-to="0" className="active"></li>
                                        <li data-target="#demo5" data-slide-to="1"></li>
                                        <li data-target="#demo5" data-slide-to="2"></li>
                                        <li data-target="#demo5" data-slide-to="3"></li>
                                    </ul>
                                    
                                
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="img/original1.jpg" alt="Los Angeles" width="1100" height="500" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original2.jpg" alt="Chicago" width="1100" height="500" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original3.jpg" alt="New York" width="1100" height="500" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original4.jpg" alt="New York" width="1100" height="500" />
                                        </div>
                                    </div>
                                    
                                    
                                    <a className="carousel-control-prev" href="#demo5" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" href="#demo5" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div> 
                                <div className="_v72lrv">
                                    <a href="PrivateRomInHouse.html" target="_blank" rel="noopener" data-check-info-section="true" className="_1ol0z3h">
                                        <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                                            <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                                                <span className="_1bb2ucx1">
                                                    <span style={{color: 'rgb(98, 86, 75)'}}>Entire house
                                                        <span aria-hidden="true"> · </span>Ostuni
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '4px'}}>
                                            <div className="_1pkilk3o">
                                                <div className="_ng4pvpo">I SETTE CONI - TRULLO EDERA </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div>
                                                <div className="_59f9ic">
                                                    <div className="_ncmdki">
                                                        <div className="_1yarz4r">
                                                            <span>
                                                                <span>
                                                                    <span className="_12kw8n71">
                                                                        <span className="_12kw8n71">
                                                                            <span className="_1m8bb6v">Price</span>
                                                                            <span>₫1,725,019</span>
                                                                        </span> per night
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="_y9ev9r">
                                                        <div className="_1cm6f7d">
                                                            <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                            <span className="_12kw8n71">Free cancellation</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div className="_hdbaj7">
                                                <div className="_36rlri">
                                                    <span className="_q27mtmr">
                                                        <span role="img" aria-label="Rating 5 out of 5">
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="_1m8bb6v">149 reviews</span>
                                                    <span className="_1gvnvab" aria-hidden="true">
                                                        <span className="_7g6kz31">149</span>
                                                    </span>
                                                </div>
                                                <span className="_7g6kz31">
                                                    <span aria-hidden="true"> · </span>Superhost
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>                   
                            </div>
                            <div className="col-md-6 col-lg-4 bottom-group">
                                <div id="demo5" className="carousel slide" data-ride="carousel"  data-interval="false">
                                
                                    <ul className="carousel-indicators">
                                        <li data-target="#demo5" data-slide-to="0" className="active"></li>
                                        <li data-target="#demo5" data-slide-to="1"></li>
                                        <li data-target="#demo5" data-slide-to="2"></li>
                                        <li data-target="#demo5" data-slide-to="3"></li>
                                    </ul>
                                    
                                
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="img/original1.jpg" alt="Los Angeles" width="1100" height="500" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original2.jpg" alt="Chicago" width="1100" height="500" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original3.jpg" alt="New York" width="1100" height="500" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original4.jpg" alt="New York" width="1100" height="500" />
                                        </div>
                                    </div>
                                    
                                
                                    <a className="carousel-control-prev" href="#demo5" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" href="#demo5" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div> 
                                <div className="_v72lrv">
                                    <a href="PrivateRomInHouse.html" target="_blank" rel="noopener" data-check-info-section="true" className="_1ol0z3h">
                                        <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                                            <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                                                <span className="_1bb2ucx1">
                                                    <span style={{color: 'rgb(98, 86, 75)'}}>Entire house
                                                        <span aria-hidden="true"> · </span>Ostuni
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '4px'}}>
                                            <div className="_1pkilk3o">
                                                <div className="_ng4pvpo">I SETTE CONI - TRULLO EDERA </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div>
                                                <div className="_59f9ic">
                                                    <div className="_ncmdki">
                                                        <div className="_1yarz4r">
                                                            <span>
                                                                <span>
                                                                    <span className="_12kw8n71">
                                                                        <span className="_12kw8n71">
                                                                            <span className="_1m8bb6v">Price</span>
                                                                            <span>₫1,725,019</span>
                                                                        </span> per night
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="_y9ev9r">
                                                        <div className="_1cm6f7d">
                                                            <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                            <span className="_12kw8n71">Free cancellation</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div className="_hdbaj7">
                                                <div className="_36rlri">
                                                    <span className="_q27mtmr">
                                                        <span role="img" aria-label="Rating 5 out of 5">
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="_1m8bb6v">149 reviews</span>
                                                    <span className="_1gvnvab" aria-hidden="true">
                                                        <span className="_7g6kz31">149</span>
                                                    </span>
                                                </div>
                                                <span className="_7g6kz31">
                                                    <span aria-hidden="true"> · </span>Superhost
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>                   
                            </div>
                            <div className="col-md-6 col-lg-4 bottom-group">
                                    <div id="demo5" className="carousel slide" data-ride="carousel"  data-interval="false">
                                    
                                        <ul className="carousel-indicators">
                                            <li data-target="#demo5" data-slide-to="0" className="active"></li>
                                            <li data-target="#demo5" data-slide-to="1"></li>
                                            <li data-target="#demo5" data-slide-to="2"></li>
                                            <li data-target="#demo5" data-slide-to="3"></li>
                                        </ul>
                                        
                                        
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                            <img src="img/original1.jpg" alt="Los Angeles" width="1100" height="500" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src="img/original2.jpg" alt="Chicago" width="1100" height="500" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src="img/original3.jpg" alt="New York" width="1100" height="500" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src="img/original4.jpg" alt="New York" width="1100" height="500" />
                                            </div>
                                        </div>
                                        
                                    
                                        <a className="carousel-control-prev" href="#demo5" data-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                        </a>
                                        <a className="carousel-control-next" href="#demo5" data-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                        </a>
                                    </div> 
                                    <div className="_v72lrv">
                                        <a href="PrivateRomInHouse.html" target="_blank" rel="noopener" data-check-info-section="true" className="_1ol0z3h">
                                            <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                                                <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                                                    <span className="_1bb2ucx1">
                                                        <span style={{color: 'rgb(98, 86, 75)'}}>Entire house
                                                            <span aria-hidden="true"> · </span>Ostuni
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div style={{marginTop: '4px'}}>
                                                <div className="_1pkilk3o">
                                                    <div className="_ng4pvpo">I SETTE CONI - TRULLO EDERA </div>
                                                </div>
                                            </div>
                                            <div style={{marginTop: '2px'}}>
                                                <div>
                                                    <div className="_59f9ic">
                                                        <div className="_ncmdki">
                                                            <div className="_1yarz4r">
                                                                <span>
                                                                    <span>
                                                                        <span className="_12kw8n71">
                                                                            <span className="_12kw8n71">
                                                                                <span className="_1m8bb6v">Price</span>
                                                                                <span>₫1,725,019</span>
                                                                            </span> per night
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="_y9ev9r">
                                                            <div className="_1cm6f7d">
                                                                <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                                <span className="_12kw8n71">Free cancellation</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{marginTop: '2px'}}>
                                                <div className="_hdbaj7">
                                                    <div className="_36rlri">
                                                        <span className="_q27mtmr">
                                                            <span role="img" aria-label="Rating 5 out of 5">
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="_z1pr8k6">
                                                                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </span>
                                                        <span className="_1m8bb6v">149 reviews</span>
                                                        <span className="_1gvnvab" aria-hidden="true">
                                                            <span className="_7g6kz31">149</span>
                                                        </span>
                                                    </div>
                                                    <span className="_7g6kz31">
                                                        <span aria-hidden="true"> · </span>Superhost
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>                   
                            </div>
                            <div className="col-md-6 col-lg-4 bottom-group">
                                <div id="demo5" className="carousel slide" data-ride="carousel"  data-interval="false">
                                
                                    <ul className="carousel-indicators">
                                        <li data-target="#demo5" data-slide-to="0" className="active"></li>
                                        <li data-target="#demo5" data-slide-to="1"></li>
                                        <li data-target="#demo5" data-slide-to="2"></li>
                                        <li data-target="#demo5" data-slide-to="3"></li>
                                    </ul>
                                    
                                
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="img/original1.jpg" alt="Los Angeles" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original2.jpg" alt="Chicago" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original3.jpg" alt="New York" width="1100" height="500"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="img/original4.jpg" alt="New York" width="1100" height="500"/>
                                        </div>
                                    </div>
                                    
                            
                                    <a className="carousel-control-prev" href="#demo5" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" href="#demo5" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div> 
                                <div className="_v72lrv">
                                    <a href="PrivateRomInHouse.html" target="_blank" rel="noopener" data-check-info-section="true" className="_1ol0z3h">
                                        <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                                            <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                                                <span className="_1bb2ucx1">
                                                    <span style={{color: 'rgb(98, 86, 75)'}}>Entire house
                                                        <span aria-hidden="true"> · </span>Ostuni
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '4px'}}>
                                            <div className="_1pkilk3o">
                                                <div className="_ng4pvpo">I SETTE CONI - TRULLO EDERA </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div>
                                                <div className="_59f9ic">
                                                    <div className="_ncmdki">
                                                        <div className="_1yarz4r">
                                                            <span>
                                                                <span>
                                                                    <span className="_12kw8n71">
                                                                        <span className="_12kw8n71">
                                                                            <span className="_1m8bb6v">Price</span>
                                                                            <span>₫1,725,019</span>
                                                                        </span> per night
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="_y9ev9r">
                                                        <div className="_1cm6f7d">
                                                            <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                            <span className="_12kw8n71">Free cancellation</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: '2px'}}>
                                            <div className="_hdbaj7">
                                                <div className="_36rlri">
                                                    <span className="_q27mtmr">
                                                        <span role="img" aria-label="Rating 5 out of 5">
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="_z1pr8k6">
                                                                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                                    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="_1m8bb6v">149 reviews</span>
                                                    <span className="_1gvnvab" aria-hidden="true">
                                                        <span className="_7g6kz31">149</span>
                                                    </span>
                                                </div>
                                                <span className="_7g6kz31">
                                                    <span aria-hidden="true"> · </span>Superhost
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default HomeComponent                