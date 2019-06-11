import React, { Component } from 'react'
import { ModalDialog } from 'react-bootstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import adminService from '../services/admin'
import '../assets/css/style.css'
import service from '../services/signup.js';
import { Link, Redirect } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import transactionService from '../services/transaction';

const CaptionElement = () => <h3 style={
    {
        borderRadius: '0.25em',
        textAlign: 'center',
        color: 'black',
        padding: '0.5em'
    }}>List transaction</h3>;


class ListRoom extends Component {
    constructor(props) {
        super(props);
        var columns = [
            {
                dataField: 'Id',
                text: ''
            },
            {
                dataField: 'CustomerPhone',
                text: 'Phone'
            },
            {
                dataField: 'CustomerEmail',
                text: 'Email'
            },
            {
                dataField: 'TotalAmount',
                text: 'Total'
            }
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
            modelAdd: false
        }

        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    async handleGetTransactions() {
        const res = await transactionService.getListTransaction();

        var paginationOption = {
            custom: true,
            totalSize: res.Data.length,
        };

        this.setState({ listRooms: res.Data, paginationOption: paginationOption })

    }

    componentDidMount() {
        this.handleGetTransactions();
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    };


    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div className="container">
                <CaptionElement />
                <BootstrapTable keyField='id' data={this.state.listRooms} striped columns={this.state.columns}
                    pagination={paginationFactory(this.state.options)} />
            </div>
        )
    }
}

export default ListRoom
