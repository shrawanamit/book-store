import React from 'react';
import '../SCSS/cartInBook.scss';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

export default class CostumerDetail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="CostumerDetailContainer">
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
                                // value={this.state.title}
                                // onChange={this.handleChange} noValidate 
                                />
                            </div>

                            <div className="textFieldBodyOne">
                                <TextField
                                    fullWidth
                                    type="text"
                                    name="phoneNo"
                                    label="Phone Number"
                                    id="outlined-size-small"
                                    variant="outlined"
                                    size="small"
                                // value={this.state.author}
                                // required
                                // onChange={this.handleChange} noValidate
                                />

                            </div>
                        </div>
                        <div className="textfieldBody">
                            <div className="textFieldBodyOne">
                                <TextField
                                    fullWidth
                                    type="number"
                                    name="PinCode"
                                    label="PinCode"
                                    id="outlined-size-small"
                                    variant="outlined"
                                    size="small"
                                // value={this.state.title}
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
                                // value={this.state.author}
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
                                // value={this.state.title}
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
                                // value={this.state.title}
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
                                // value={this.state.author}
                                // required
                                // onChange={this.handleChange} noValidate
                                />

                            </div>
                        </div>
                        <div className="radioContainer">
                            <div className="radioBodyType">
                                Type
                        </div>
                            <div className="radioBody">
                                <Radio
                                    value="a"
                                    name="radio-button-demo"
                                    label="Female"
                                    size="small"
                                />
                                <Radio
                                    value="a"
                                    name="radio-button-demo"
                                    label="Female"
                                    size="small"
                                />
                                <Radio
                                    value="a"
                                    name="radio-button-demo"
                                    label="Female"
                                    size="small"
                                />

                            </div>


                        </div>

                    </div>
                    <div className="CostumerDetailSideNav ">
                        <div className="editform">Edit</div>
                        <div className="cartButton">
                        <Button variant="contained" color="primary" disableElevation>
                            Continue
                        </Button>
                    </div>

                    </div>
                    

                </div>

            </React.Fragment>
        );
    }
}