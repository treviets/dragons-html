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

const CaptionElement = () => <h3 style={
    {
        borderRadius: '0.25em',
        textAlign: 'center',
        color: 'black',
        padding: '0.5em'
    }}>List rooms</h3>;


class ListRoom extends Component {
    constructor(props) {
        super(props);
        var columns = [
            {
                dataField: 'Id',
                text: ''
            },
            {
                dataField: 'Code',
                text: 'Code'
            },
            {
                dataField: 'NumberOfGuest',
                text: 'Guest'
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
            {
                dataField: 'Calendar',
                text: 'Calendar'
            }

        ];
        var options = {
            // onSizePerPageChange: (sizePerPage, page) => {
            //     console.log('onSizePerPageChange', page);
            //     console.log('onSizePerPageChange', sizePerPage);
            //     this.handleGetRooms(page - 1);
            // },

            onPageChange: (page, sizePerPage) => {
                console.log('onPageChange', page);
                console.log('onPageChange', sizePerPage);
                this.handleGetRooms(page - 1);


            },
            onRowClick: (row, cell) => {

            }
        }
        var rowEvents = {
            onClick: (e, row, rowIndex) => {
                this.showDetailToEdit(row)
            }
        }
        this.state = {
            id: '',
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
            price: 0,
            calendar: "",
            modelAdd: false,
        }

        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleUpdateRoom = this.handleUpdateRoom.bind(this);
        this.addNewRoom = this.addNewRoom.bind(this);
    }

    async handleGetRooms(page) {
        const res = await adminService.getListRoom(page);

        var paginationOption = {
            custom: true,
            totalSize: res.Data.totalElement,
            sizePerPage: 20
        };

        this.setState({ listRooms: res.Data.content, paginationOption: paginationOption })

    }
    async handleUpdateRoom() {
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
            Price: this.state.objectRoom.Price,
            Province: this.state.objectRoom.Province,
            RentalType: this.state.objectRoom.RentalType,
            RoomType: this.state.objectRoom.RoomType,
            Status: this.state.objectRoom.Status
        }

        const response = await adminService.updateRoom(obj);
        if (response && response.Status === "OK") {
            this.setState({ modal: !this.state.modal });
            // Alert success
            alert(response.Message);
        }

    }
    componentDidMount() {
        var page = 0;
        this.handleGetRooms(0);
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
        if (row !== null) {
            var obj = {
                Calendar: row.Calendar,
                Description: row.Description,
                District: row.District,
                HomeId: row.HomeId,
                Province: row.Province,
                Price: row.Price,
                RentalType: row.RentalType,
                RoomType: row.RoomType,
                Status: row.Status,
                Images: row.Images,
                Id: row.Id
            }
            this.setState({
                id: row.Id,
                modal: true,
                code: row.Code,
                bath: parseInt(row.Bath),
                bed: parseInt(row.Bed),
                calendar: row.Calendar,
                bedroom: parseInt(row.Bedroom),
                numberOfGuest: parseInt(row.NumberOfGuest),
                price: parseInt(row.Price),
                objectRoom: obj
            });
        } else {
            this.setState({
                modal: true,
                modelAdd: true,
            })
        }

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    addNewRoom() {
        console.log("adb");
        this.showDetailToEdit(null);
    }

    render() {
        return (
            <div className="container">
                <CaptionElement />
                <button className="btn btn-primary btn-cus-add">
                    <i className="fa fa-plus"></i>
                    <Link to="/admin/list/room_add" className="link-cus-add"> New Room</Link>
                </button>
                <BootstrapTable keyField='id' data={this.state.listRooms} striped columns={this.state.columns}
                    pagination={paginationFactory(this.state.options)} rowEvents={this.state.rowEvents} />
                {
                    this.state.modal === true ?
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

                                            <Label>Calendar</Label>
                                            <Input value={this.state.calendar} onChange={this.onChange} name="calendar" />
                                        </FormGroup>
                                    </Form>
                                </ModalBody>

                                <ModalFooter>
                                    <Button ccolor="primary">
                                        <i className="fa fa-plus"></i>
                                        <Link to={{
                                            pathname: '/admin/list/room_detail',
                                            search: '?roomId=' + this.state.id,
                                        }}> Room Detail</Link>

                                        {/* <Link to="/admin/list/room_detail" className="link-cus-add"> Room Detail</Link> */}
                                    </Button>
                                    {
                                        this.state.modelAdd === true ?
                                            <Button color="primary" onClick={this.handleCreateRoom}>New</Button>
                                            :
                                            <Button color="primary" onClick={this.handleUpdateRoom}>Update</Button>
                                    }
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>

                            </Modal>

                        </div>
                        : null
                }
            </div>

        )

    }
}

export default ListRoom
