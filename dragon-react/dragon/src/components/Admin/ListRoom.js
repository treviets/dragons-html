import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import adminService from '../../services/admin'
import '../../assets/css/style.css'
import service from '../../services/signup.js';
import { Link, Redirect } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';




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
            visible: false
        }


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
    showDetailToEdit(row) {
        console.log(row)
        this.handleEdit()

    }
    handleEdit() {
        return (
            <div>
                <h1>dddd</h1>
            </div>
        )
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
            </div>
        )

    }
}

export default ListRoom
