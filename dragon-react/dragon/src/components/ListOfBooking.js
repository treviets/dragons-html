import React, { Component } from 'react'
import '../assets/css/listbooking.css'
import BootstrapTable from 'react-bootstrap-table-next';
import adminService from '../services/admin';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import moment, { lang } from 'moment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


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
                console.log('onSizePerPageChange', page);
                console.log('onSizePerPageChange', sizePerPage);
                this.handleGetBooking(page - 1);
            },
            onPageChange: (page, sizePerPage) => {
                console.log('onPageChange', page);
                console.log('onPageChange', sizePerPage);
                this.handleGetBooking(page - 1);


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
    async handleGetBooking(page) {
        const res = await adminService.getListBooking(page);
        var list = []
        if (!res || !res.Data) {
            return;
        }
        for (var i = 0; i < res.Data.content.length; i++) {
            var detail = res.Data.content[i];
            var obj = {
                // Home: detail.Home.Name,
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
        var page = 0;
        this.handleGetBooking(0);
    }


    render() {
        return (
            <div className="container">
                <Tabs className="tabs-booking" >
                    <TabList>
                        <Tab>Past</Tab>
                        <Tab>In progress</Tab>
                        <Tab>UpComming</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>List booking in past</h2>
                        <CaptionElement />
                        <BootstrapTable
                            keyField='id'
                            data={this.state.listbooking}
                            striped
                            columns={this.state.columns}
                            pagination={paginationFactory(this.state.options)}
                        />
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default ListOfBooking
