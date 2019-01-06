import React, { Component } from 'react'
import '../assets/css/listbooking.css'
class ListOfBooking extends Component { 
    render(){
        return(
            <div className="container">
                <br/>
                <div className="header">
                    <h2>Reservations</h2>
                    <div className="row">
                        <div className="col-6">
                            <span>
                            <div className="row">
                                    <button style={{marginRight:'5px'}} className="col-2 btn btn-outline-secondary btnComing">Upcoming</button>
                                    <button style={{marginRight:'5px'}} className="col-1 btn btn-outline-secondary">All</button>
                                    <button  className="col-2 btn btn-outline-secondary"><i className="fa fa-filter" aria-hidden="true"></i> Filter</button>
                            </div>
                            </span>
                        </div>
                        <div className="col-6">
                            <div className="grButtonExport">
                                <span>
                                <button style={{marginRight:'5px'}} className="btn btn-outline-secondary" type="button" data-toggle="dropdown">Export
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                <li><a href="#">CSV</a></li>
                                <li><a href="#">Excel</a></li>
                                <li><a href="#">PDF</a></li>
                                </ul>
                                <button className="btn btn-outline-secondary btnDetail">Print</button>
                            </span>
                            </div>

                    </div>
                </div>
                <div className="row">
                    <table className="table" id="table-booking">
                        <thead>
                        <tr>
                            <th>Status</th>
                            <th>Guest</th>
                            <th>Dates</th>
                            <th>Booked</th>
                            <th>Listing</th>
                            <th>Earnings</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <p>Confirmed</p>
                            </td>
                            <td>
                                <p>Justin Gross</p>
                                <p className="notes">2 adults</p>
                            </td>
                            <td>
                                <p>Nov 28-Dec 19, 2018</p>
                                <p className="notes">21 nights</p>
                            </td>
                            <td>
                            <p>Oct 22, 2018</p>
                            </td>
                            <td>
                                <p>Free AIRPORT</p>
                                <p>PICKUP.TheDragonsHost@CityCenter.P720</p>
                            </td>
                            <td>
                                <p>$1,099.88</p>
                            </td>
                            <td>
                                <button type="submit" className="btn btn-outline-secondary btnDetail">Detail</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Confirmed</p>
                            </td>
                            <td>
                                <p>Justin Gross</p>
                                <p className="notes">2 adults</p>
                            </td>
                            <td>
                                <p>Nov 28-Dec 19, 2018</p>
                                <p className="notes">21 nights</p>
                            </td>
                            <td>
                                <p>Oct 22, 2018</p>
                            </td>
                            <td>
                                <p>Free AIRPORT</p>
                                <p>PICKUP.TheDragonsHost@CityCenter.P720</p>
                            </td>
                            <td>
                                <p>$1,099.88</p>
                            </td>
                            <td>
                                <button type="submit" className="btn btn-outline-secondary btnDetail">Detail</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Confirmed</p>
                            </td>
                            <td>
                                <p>Justin Gross</p>
                                <p className="notes">2 adults</p>
                            </td>
                            <td>
                                <p>Nov 28-Dec 19, 2018</p>
                                <p className="notes">21 nights</p>
                            </td>
                            <td>
                                <p>Oct 22, 2018</p>
                            </td>
                            <td>
                                <p>Free AIRPORT</p>
                                <p>PICKUP.TheDragonsHost@CityCenter.P720</p>
                            </td>
                            <td>
                                <p>$1,099.88</p>
                            </td>
                            <td>
                                <button type="submit" className="btn btn-outline-secondary btnDetail">Detail</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Confirmed</p>
                            </td>
                            <td>
                                <p>Justin Gross</p>
                                <p className="notes">2 adults</p>
                            </td>
                            <td>
                                <p>Nov 28-Dec 19, 2018</p>
                                <p className="notes">21 nights</p>
                            </td>
                            <td>
                                <p>Oct 22, 2018</p>
                            </td>
                            <td>
                                <p>Free AIRPORT</p>
                                <p>PICKUP.TheDragonsHost@CityCenter.P720</p>
                            </td>
                            <td>
                                <p>$1,099.88</p>
                            </td>
                            <td>
                                <button type="submit" className="btn btn-outline-secondary btnDetail">Detail</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Confirmed</p>
                            </td>
                            <td>
                                <p>Justin Gross</p>
                                <p className="notes">2 adults</p>
                            </td>
                            <td>
                                <p>Nov 28-Dec 19, 2018</p>
                                <p className="notes">21 nights</p>
                            </td>
                            <td>
                                <p>Oct 22, 2018</p>
                            </td>
                            <td>
                                <p>Free AIRPORT</p>
                                <p>PICKUP.TheDragonsHost@CityCenter.P720</p>
                            </td>
                            <td>
                                <p>$1,099.88</p>
                            </td>
                            <td>
                                <button type="submit" className="btn btn-outline-secondary btnDetail">Detail</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}
export default ListOfBooking
