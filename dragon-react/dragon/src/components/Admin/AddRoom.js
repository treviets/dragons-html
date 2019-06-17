import React, { Component } from 'react'
import '../../assets/css/style.css'
import '../../assets/css/profile.css';
import Select from 'react-select';
import homeService from '../../services/home'

const optionsRoomType = [
    { value: '1', label: 'ENTIRE APARTMENT' },
    { value: '2', label: 'ENTIRE HOUSE' },
    { value: '3', label: 'PRIVATE ROOM' },
    { value: '4', label: 'SHARE ROOM' },
];

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
            status: 0,
            optionPath: [],
            selectedRoomType: null,
            selectedHome: null,
            optionsHome: [],
        }

        this.saveRoom = this.saveRoom.bind(this)

    }

    handleChangeRoomType = selectedRoomType => {
        this.setState({ selectedRoomType });
        console.log(`Option selected ROOM TYPE:`, selectedRoomType);
    };
    handleChangeHome = selectedHome => {
        this.setState({ selectedHome });
        console.log(`Option selected HOME:`, selectedHome);
    };

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

    componentDidMount() {
        this.handlegetListHomes();
    }

    saveRoom(){
        console.log("SAVE___ROOM");
        var roomInfo ={
            HomeId : parseInt(this.state.selectedHome.value),
            Code : this.state.code,
            NumberOfGuest: parseInt(this.state.numberOfGuest),
            Price: parseInt(this.state.price),
            Description: this.state.desc,
            RoomType: parseInt(this.state.selectedRoomType.value),
            RentalType: 1,
            Bedroom: parseInt(this.state.bedroom),
            Bed: parseInt(this.state.bed),
            Bath: parseInt(this.state.bath),
            Status: 1
        };

        console.log("ROOM-INFO")
        console.log(JSON.stringify(roomInfo));

        var res = homeService.saveRoom(JSON.stringify(roomInfo));

        console.log(res)


    }

    async handlegetListHomes() {
        const res = await homeService.getListHomes();
        var listHome =[];
        for(var i = 0; i < res.Data.length; i++){
            var item = res.Data[i];
            listHome.push(
                {
                    value: item.Id,
                    label: item.Name
                },
            )
        }
        this.setState({ optionsHome: listHome})
    }

    render() {
        return (
            <div className="page-container-responsive space-top-4 space-4">
                <br />
                <div className="row edit-profile">
                    <div>
                        <div className="panel space-4">
                            <div className="panel-header">
                                <h2 className="edit-profile-section-heading">
                                    Add new room
                                </h2>
                            </div>
                            <div className="panel-body">
                                <div className="row row-condensed space-4">
                                    <label className="col-3" >
                                        Name
                                    </label>
                                    <div className="col-9">
                                        <input size="30" value={this.state.code} onChange={this.onChange} name="code" />
                                    </div>
                                </div>
                                <div className="row row-condensed space-4">
                                    <label className="col-3" >
                                        Number Of guest
                                    </label>
                                    <div className="col-9">
                                        <input type="text" value={this.state.numberOfGuest} onChange={this.onChange} name="numberOfGuest" />
                                    </div>
                                </div>
                                <div className="row row-condensed space-4">
                                    <label className="col-3" >
                                        Price
                                    </label>
                                    <div className="col-9">
                                        <input type="text" value={this.state.price} onChange={this.onChange} name="price" />
                                    </div>
                                </div>
                                <div className="row row-condensed space-4">
                                    <label className="col-3">
                                        Path
                                    </label>
                                    <div className="col-9">
                                        <input type="text" value={this.state.bath} onChange={this.onChange} name="bath" />
                                    </div>
                                </div>
                                <div className="row row-condensed space-4">
                                    <label className="col-3">
                                        Bed Room
                                    </label>
                                    <div className="col-9">
                                        <input type="text" value={this.state.bedroom} onChange={this.onChange} name="bedroom" />
                                    </div>
                                </div>
                                <div className="row row-condensed space-4">
                                    <label className="col-3">
                                        Bed
                                    </label>
                                    <div className="col-9">
                                        <input type="text" value={this.state.bed} onChange={this.onChange} name="bed" />
                                    </div>
                                </div>
                                <div className="row row-condensed space-4">
                                    <label className="col-3">
                                        Room type
                                    </label>
                                    <div className="col-9">
                                        <Select
                                            options={optionsRoomType}
                                            value={this.state.selectedRoomType}
                                            onChange={this.handleChangeRoomType}/>
                                    </div>
                                </div>
                                <div className="row row-condensed space-4">
                                    <label className="col-3">
                                        Home
                                    </label>
                                    <div className="col-9">
                                        <Select
                                            options={this.state.optionsHome}
                                            value={this.state.selectedHome}
                                            onChange={this.handleChangeHome}/>
                                        </div>
                                </div>

                                <div className="row row-condensed space-4">
                                    <label className="col-3">
                                        Describe
                                    </label>
                                    <div className="col-9 text-muted space-top-1">
                                        <textarea cols={40} value={this.state.desc} rows={5} name="desc" onChange={this.onChange} />
                                        <div className="text-muted space-top-1">The Dragon is built on relationships. Help other people get to know you.<br /><br />Tell them about the things you like: What are 5 things you can’t live without? Share your favorite travel destinations, books, movies, shows, music, food.<br /><br />Tell them what it’s like to have you as a guest or host: What’s your style of traveling? Of Airbnb hosting?<br /><br />Tell them about you: Do you have a life motto?</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-large" onClick={this.saveRoom}>Save</button>
                    </div>
                </div >

            </div >
        )

    }
}

export default AddRoom
