import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import '../assets/css/style.css'
import "react-datepicker/dist/react-datepicker.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import transactionService from '../services/transaction';
import * as moment from "moment";

const CaptionElement = () => <h3 style={
    {
        borderRadius: '0.25em',
        textAlign: 'center',
        color: 'black',
        padding: '0.5em'
    }}>List transaction</h3>;

class ListTransactionHistory extends Component {
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
                dataField: 'CreatedAt',
                text: 'Date'
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
        };

        this.state = {
            listRooms: [],
            paginationOption: {},
            options: options,
            columns: columns,
            rowEvents: rowEvents,
            modelAdd: false
        };
        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
        ListTransactionHistory.handleConvertDate = ListTransactionHistory.handleConvertDate.bind(this);
    }

    async handleGetTransactions(cusId) {
        const res = await transactionService.getListTransactionOfCustomer(cusId);
        var paginationOption = {
            custom: true,
            totalSize: res.Data.length,
        };
        var listRoomsCustome = [];
        for(let i =0; i < res.Data.length; i++){
            var element = res.Data[i];
            var item = {
                Id: element.id,
                CustomerPhone: element.CustomerPhone,
                CustomerEmail: element.CustomerEmail,
                CreatedAt: ListTransactionHistory.handleConvertDate(element.CreatedAt),
                TotalAmount: element.TotalAmount
            };
            listRoomsCustome.push(item);
        }
        this.setState({ listRooms: listRoomsCustome, paginationOption: paginationOption })
    }

    static handleConvertDate(dateUnix){
        return moment.unix(dateUnix/1000).format("YYYY-MM-DD HH:mm:ss");
    }

    componentDidMount() {
        this.handleGetTransactions(localStorage.getItem("cusId"));
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

export default ListTransactionHistory
