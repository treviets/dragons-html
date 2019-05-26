import React, { Component } from 'react'
import { ModalDialog } from 'react-bootstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import adminService from '../../services/admin'
import '../../assets/css/style.css'
import service from '../../services/signup.js';
import { Link, Redirect } from 'react-router-dom'
import '../../assets/css/profile.css';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: "",
            numberOfGuest: 0,
            description: '',
            bedroom: 0,
            bath: 0,
            bed: 0,
            price: 0,
            romType: 0,
            rentalType: 0,
            district: 0,
            province: 0,
            status: 0
        }
    }
    typeRoom(type_id) {
        switch (type_id) {
            case 1:
                return "ENTIRE APARTMENT";
            case 2:
                return "ENTIRE HOUSE";
            case 3:
                return "PRIVATE ROOM";
            case 4:
                return "SHARE ROOM";
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="container">
                <div className="body">
                    <div className="row row-condensed space-4">
                        <label className="col-3" >
                            Code
                        </label>
                        <div className="col-9">
                            <input size="30" value={this.state.code} onChange={this.onChange} name="code" />
                        </div>
                    </div>
                    <div className="row row-condensed space-4">
                        <label className="col-3" >
                            Price
                        </label>
                        <div className="col-9">
                            <input size="30" type="text" value={this.state.price} onChange={this.onChange} name="price" />
                        </div>
                    </div>

                    <div className="row row-condensed space-4">
                        <label className="col-3" >
                            Number of guest
                                </label>
                        <div className="col-9">
                            <input size="30" type="text" value={this.state.numberOfGuest} onChange={this.onChange} name="numberOfGuest" />
                        </div>
                    </div>
                    <div className="row row-condensed space-4">
                        <label className="col-3" >
                            Description
                        </label>
                        <div className="col-9">
                            <textarea size="30" type="text" value={this.state.description} onChange={this.onChange} name="Description" />
                        </div>
                    </div>

                    <div className="row row-condensed space-4">
                        <label className="col-3">
                            Room type
                        </label>
                        <div className="col-9">
                            <div className="select">
                                <select id="roomType">
                                    <option value="1">ENTIRE APARTMENT</option>
                                    <option value="2">ENTIRE HOUSE</option>
                                    <option value="3">PRIVATE ROOM</option>
                                    <option value="4">SHARE ROOM</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row row-condensed space-4">
                        <label className="col-3" >
                            Bed room
                        </label>
                        <div className="col-9">
                            <input type="text" value={this.state.bedroom} onChange={this.onChange} name="bedroom" />
                        </div>
                    </div>
                    <div className="row row-condensed space-4">
                        <label className="col-3" >
                            Bed
                        </label>
                        <div className="col-9">
                            <input type="text" value={this.state.bed} onChange={this.onChange} name="bed" />
                        </div>
                    </div>
                    <div className="row row-condensed space-4">
                        <label className="col-3" >
                            Bath
                        </label>
                        <div className="col-9">
                            <input type="text" value={this.state.bath} onChange={this.onChange} name="bath" />
                        </div>
                    </div>
                    <div className="row row-condensed space-4">
                        <label className="col-3" >
                            Bed room
                        </label>
                        <div className="col-9">
                            <input type="text" value={this.state.bedroom} onChange={this.onChange} name="rentalType" />
                        </div>
                    </div>
                    <div className="row row-condensed space-4">
                        <label className="col-3">
                            Home
                        </label>
                        <div className="col-9">
                            <div className="select">
                                <select id="roomType">
                                    <option value="1">ENTIRE APARTMENT</option>
                                    <option value="2">ENTIRE HOUSE</option>
                                    <option value="3">PRIVATE ROOM</option>
                                    <option value="4">SHARE ROOM</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-large" onClick={this.updateInfo}>Create</button>
                </div>
            </div>
        )

    }
}

export default AddRoom
