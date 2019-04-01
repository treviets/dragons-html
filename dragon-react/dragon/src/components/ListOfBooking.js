import React, { Component } from 'react'
import '../assets/css/listbooking.css'
import BootstrapTable from 'react-bootstrap-table-next';
import adminService from '../services/admin';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import moment, { lang } from 'moment';



const CaptionElement = () => <h3 style={{ backgroundColor: 'gray', borderRadius: '0.25em', textAlign: 'center', color: 'White', border: '1px solid gray', padding: '0.5em' }}>List Booking</h3>;
class ListOfBooking extends Component {
    constructor(props) {
        super(props);
        var columns = [
            {
                dataField: 'Home',
                text: 'Home'
            },
            {
                dataField: 'Room',
                text: 'Room'
            },
            {
                dataField: 'From_time',
                text: 'From'
            },
            {
                dataField: 'To_time',
                text: 'To'
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

        this.state = {
            listbooking: [],
            paginationOption: {},
            options: options,
            columns: columns,
        }

    }
    async handleGetBooking() {
        const res = await adminService.getListBooking();
        var list = []
        for (var i = 0; i < res.Data.length; i++) {
            var detail = res.Data[i];
            var obj = {
                Home: detail.Home.Name,
                Room: detail.Room.Code,
                From_time: moment(detail.FromDate).format('MM/DD/YYYY'),
                To_time: moment(detail.ToDate).format('MM/DD/YYYY'),
            }
            list.push(obj)
        }
        var paginationOption = {
            custom: true,
            totalSize: res.Data.length,
        };
        this.setState({ listbooking: list, paginationOption: paginationOption })

    }
    componentDidMount() {
        this.handleGetBooking();
    }


    render() {
        return (
            <div className="container">
                <CaptionElement />
                <BootstrapTable
                    keyField='id'
                    data={this.state.listbooking}
                    striped
                    columns={this.state.columns}
                    pagination={paginationFactory(this.state.options)}
                />
            </div>
        )
    }
}

export default ListOfBooking
