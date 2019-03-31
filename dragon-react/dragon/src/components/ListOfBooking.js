import React, { Component } from 'react'
import '../assets/css/listbooking.css'
import BootstrapTable from 'react-bootstrap-table-next';
import adminService from '../services/admin'


const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];
const products = [];


class ListOfBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listBooking: []
        }

    }
    async handleGetBooking() {
        const res = await adminService.getListBooking();
        console.log("list-booking", res)
        this.setState({ listBooking: res.Data })
    }
    componentDidMount() {
        this.handleGetBooking();
    }


    render() {
        return (
            <div className="container">
                <BootstrapTable keyField='id' data={products} columns={columns} />
            </div>
        )
    }
}

export default ListOfBooking
