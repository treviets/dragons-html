import React, { Component } from 'react'
import { ModalDialog } from 'react-bootstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import adminService from '../../services/admin'
import '../../assets/css/style.css'
import service from '../../services/signup.js';
import { Link, Redirect } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';






const CaptionElement = () => <h3 style={{ backgroundColor: 'gray', borderRadius: '0.25em', textAlign: 'center', color: 'White', border: '1px solid gray', padding: '0.5em' }}>List Rooms</h3>;


class ListRoom extends Component {
    constructor(props) {
        super(props);
        var columns = [
            {
                dataField: 'Id',
                text: 'Room ID'
            },
            {
                dataField: 'Code',
                text: 'Name'
            },
            {
                dataField: 'NumberOfGuest',
                text: 'Number Of Guest'
            },
            {
                dataField: 'Bedroom',
                text: 'Bedroom'
            },

            {
                dataField: 'Bed',
                text: 'Bed'
            },
            {
                dataField: 'Bath',
                text: 'Bath'
            },
            {
                dataField: 'Price',
                text: 'Price',
                formatter: this.priceFormatter
            },

        ];
        var options = {
            onSizePerPageChange: (sizePerPage, page) => {

            },
            onPageChange: (page, sizePerPage) => {

            },
            onRowClick: (row, cell) => {
                console.log(row)
            }

        };
        var rowEvents = {
            onClick: (e, row, rowIndex) => {
                this.showDetailToEdit(row)

            }
        }
        this.state = {
            listRooms: [],
            paginationOption: {},
            options: options,
            columns: columns,
            rowEvents: rowEvents,
            showDetail: false,
            modal: false,
            objectRoom: {},
            code: "",
            numberOfGuest: 0,
            bedroom: 0,
            bath: 0,
            bed: 0,
            price: 0

        }

        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleUpdateRoom = this.handleUpdateRoom.bind(this);


    }

    async handleGetBooking() {
        const res = await adminService.getListRoom();
        console.log("list-Rooms", res)
        console.log(this.state.listRooms)
        var paginationOption = {
            custom: true,
            totalSize: res.Data.length,
        };
        this.setState({ listRooms: res.Data, paginationOption: paginationOption })

    }
    async handleUpdateRoom() {
        var othis = this

        var obj = {
            Bath: this.state.bath,
            Bed: this.state.bed,
            Bedroom: this.state.bedroom,
            Calendar: this.state.objectRoom.Calendar,
            Code: this.state.code,
            Description: this.state.objectRoom.Description,
            District: this.state.objectRoom.District,
            HomeId: this.state.objectRoom.HomeId,
            Id: this.state.objectRoom.Id,
            Images: this.state.objectRoom.Images,
            NumberOfGuest: this.state.numberOfGuest,
            Price: this.state.Price,
            Province: this.state.objectRoom.Province,
            RentalType: this.state.objectRoom.RentalType,
            RoomType: this.state.objectRoom.RoomType,
            Status: this.state.objectRoom.Status
        }
        var bet = othis.state
        console.log("state", bet)
        const res = await adminService.updateRoom(obj);
        console.log(res)

    }


    componentDidMount() {
        this.handleGetBooking();
    }
    priceFormatter(cell, row) {
        var price = parseInt(row.Price)
        return (
            <span>
                <strong>{price}</strong>
            </span>
        );
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    };
    showDetailToEdit(row) {
        console.log(row)
        var obj = {
            Calendar: row.Calendar,
            Description: row.Description,
            District: row.District,
            HomeId: row.HomeId,
            Province: row.Province,
            RentalType: row.RentalType,
            RoomType: row.RoomType,
            Status: row.Status,
            Images: row.Images,
            Id: row.Id
        }

        this.setState({
            modal: true,
            code: row.Code,
            bath: parseInt(row.Bath),
            bed: parseInt(row.Bed),
            bedroom: parseInt(row.Bedroom),
            numberOfGuest: parseInt(row.NumberOfGuest),
            price: parseInt(row.Price),
            objectRoom: obj
        });
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        return (
            <div className="container">
                <CaptionElement />
                <BootstrapTable
                    keyField='id'
                    data={this.state.listRooms}
                    striped
                    columns={this.state.columns}
                    pagination={paginationFactory(this.state.options)}
                    rowEvents={this.state.rowEvents} />
                {
                    this.state.modal === true ?
                        (
                            <div className="dialog-detail container-modal">
                                <Modal isOpen={this.state.modal} toggle={this.toggle} size='lg'>
                                    <ModalHeader toggle={this.toggle}>{this.state.code}</ModalHeader>
                                    <ModalBody>
                                        <Form>
                                            <FormGroup>
                                                <Label>Name</Label>
                                                <Input value={this.state.code} onChange={this.onChange} name="code" />
                                                <Label>Number Of Guest</Label>
                                                <Input value={this.state.numberOfGuest} onChange={this.onChange} name="numberOfGuest" />
                                                <Label>Bedroom</Label>
                                                <Input value={this.state.bedroom} onChange={this.onChange} name="bedroom" />
                                                <Label>Bed</Label>
                                                <Input value={this.state.bed} onChange={this.onChange} name="bed" />
                                                <Label>Bath</Label>
                                                <Input value={this.state.bath} onChange={this.onChange} name="bath" />
                                                <Label>Price</Label>
                                                <Input value={this.state.price} onChange={this.onChange} name="price" />
                                            </FormGroup>
                                        </Form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.handleUpdateRoom}>Update</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>

                            </div>
                        )
                        : null

                }

            </div>

        )

    }
}

export default ListRoom
