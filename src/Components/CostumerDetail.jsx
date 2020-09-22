import React from 'react';
import '../SCSS/cartInBook.scss';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {connect} from 'react-redux';
import UserService from "../Services/userService";

let service = new UserService();
class CostumerDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'home',
            Type: [
                { id: 'home', title: "Home" },
                { id: 'work', title: "Work" },
                { id: 'other', title: "Other" },
            ],
            name: localStorage.getItem('firstName')+' '+localStorage.getItem('lastName'),
            phoneNumber: localStorage.getItem('phoneNo'),
            pinCode: "",
            locality: localStorage.getItem('city'),
            city: localStorage.getItem('city'),
            address: localStorage.getItem('address'),
            landMark: localStorage.getItem('city'),
            cartId:'58',

        }
    }
    submitData= async()=>{
        this.props.cartDetail.filter((row => row.isDeleted === false)).map((row)=>{
             this.setState({
                    cartId:row.cartId,
                })
                return console.log("row.cartId",row.cartId);
        })
        const data={
            address:this.state.address,
            city:this.state.city,
            pinCode:parseInt(this.state.pinCode),
            cartId:parseInt(this.state.cartId)
        }
        service.OrderPlace(data)
        .then((data)=>{
            console.log("order with address",data);
        })
        .catch((err) => {
            console.log(err);

        })

    }

    
    handleChange = (event) => {
        event.preventDefault();
        
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handelSubmit = (e) => {
        e.preventDefault();
        alert("submit");
        console.log("sub mit");
    }

    render() {
        return (
            <React.Fragment>
                <div className="CostumerDetailContainer">
                    <form onSubmit={this.handelSubmit} className="form">
                        <div className="CostumerDetailContainerBody">
                            <div className="CustomerDetailsHeading">
                                Customer Details
                            </div>
                            <div className="textfieldBody">
                                <div className="textFieldBodyOne">
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="name"
                                        label="Name"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                        defaultValue={this.state.name}
                                        onChange={this.handleChange} noValidate 
                                    />
                                </div>

                                <div className="textFieldBodyOne">
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                        defaultValue={this.state.phoneNumber}
                                        onChange={this.handleChange} noValidate
                                    />

                                </div>
                            </div>
                            <div className="textfieldBody">
                                <div className="textFieldBodyOne">
                                    <TextField
                                        fullWidth
                                        type="number"
                                        name="pinCode"
                                        label="PinCode"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                        defaultValue={this.state.pinCode}
                                        onChange={this.handleChange} noValidate 
                                    />
                                </div>

                                <div className="textFieldBodyOne">
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="locality"
                                        label="Locality"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                        defaultValue={this.state.locality}
                                        required
                                        onChange={this.handleChange} noValidate
                                    />

                                </div>
                            </div>
                            <div className="textfieldBody">
                                <div className="textFieldBodyTwo">
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="address"
                                        label="Address"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="medium"
                                        multiline
                                        defaultValue={this.state.address}
                                        onChange={this.handleChange} noValidate 
                                    />
                                </div>
                            </div>
                            <div className="textfieldBody">
                                <div className="textFieldBodyOne">
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="city"
                                        label="City/Town"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                        defaultValue={this.state.city}
                                        onChange={this.handleChange} noValidate 
                                    />
                                </div>

                                <div className="textFieldBodyOne">
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="landMark"
                                        label="LandMark"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                        defaultValue={this.state.landMark}
                                        required
                                        onChange={this.handleChange} noValidate
                                    />

                                </div>
                            </div>
                            <div className="radioContainer">
                                <FormControl component="fieldset">
                                    <span className="TypePlace">Type</span>
                                    <RadioGroup aria-label="gender" name="type" row value={this.state.type} >
                                        {
                                            this.state.Type.map((item, index) =>
                                                <FormControlLabel value={item.id} control={<Radio size='small' />} label={item.title} />
                                            )}
                                    </RadioGroup>
                                </FormControl>
                            </div>

                        </div>
                        <div className="CostumerDetailSideNav ">
                            <div className="editform">Edit</div>
                            <div className="cartButtonContinue">
                                <Button variant="contained" 
                                color="primary" 
                                disableElevation 
                                type='submit'
                                onClick={this.submitData}>
                                    Continue
                        </Button>
                            </div>
                        </div>
                    </form>
                </div>

            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    console.log("state usrer details",state );
    return {
        cartDetail: [...state.bookInCartReducer.allBooksInCart]
    };
  
}

export default connect(mapStateToProps)(CostumerDetail)