import React from 'react';
import '../SCSS/cartInBook.scss';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {connect} from 'react-redux';
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
            name: '',
            phoneNumber: '',
            pinCode: '',
            locality: '',
            city: '',
            address: '',
            landMark: ''

        }
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
                    <form onSubmit={this.handelSubmit}>
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
                                        value={this.state.name}
                                    // onChange={this.handleChange} noValidate 
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
                                        value={this.state.phoneNumber}
                                    // onChange={this.handleChange} noValidate
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
                                        value={this.state.pinCode}
                                    // onChange={this.handleChange} noValidate 
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
                                        value={this.state.locality}
                                    // required
                                    // onChange={this.handleChange} noValidate
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
                                        value={this.state.address}
                                    // onChange={this.handleChange} noValidate 
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
                                        value={this.state.city}
                                    // onChange={this.handleChange} noValidate 
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
                                        value={this.state.landMark}
                                    // required
                                    // onChange={this.handleChange} noValidate
                                    />

                                </div>
                            </div>
                            <div className="radioContainer">
                                <FormControl component="fieldset">
                                    <span>Type</span>
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
                            <div className="cartButton">
                                <Button variant="contained" color="primary" disableElevation type='submit'>
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
    console.log(state);
    return {
        userInformation: state.bookInCartReducer.userData
    };
  
}

export default connect(mapStateToProps)(CostumerDetail)