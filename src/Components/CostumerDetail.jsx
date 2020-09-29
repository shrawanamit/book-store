import React from 'react';
import '../SCSS/cartInBook.scss';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';
import { userInformation } from "../redux/Action/actionCreater";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

// const nameRegx = "^[A-Z][a-zA-Z]{2,15}$";
// const pinRegx = "^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$";
// const phoneNumberRegx = "^[1-9]{1}[0-9]{9}";

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
            name: localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName'),
            phoneNumber: localStorage.getItem('phoneNo'),
            pinCode: "",
            locality: localStorage.getItem('city'),
            city: localStorage.getItem('city'),
            address: localStorage.getItem('address'),
            landMark: localStorage.getItem('city'),
            orderSummeryOpen: true,
            openButton: true,
            nameError: '',
            disable:false,
        }
    }
    submitData = async () => {
      

        if(this.state.pinCode.length === 0 || this.state.name.length === 0 || this.state.phoneNumber.length === 0 || this.state.address.length===0)
        {
            await this.setState({nameError:"All field Required"})
        }
         else{
            await this.setState({nameError:"",
             })
         }

        const data = {
            address: this.state.address,
            city: this.state.city,
            pinCode: this.state.pinCode,
            email: this.state.email,
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            orderSummeryOpen: this.state.orderSummeryOpen,

        }
        if(this.state.nameError.length===0)
        {
        this.props.userInformation(data);
        await this.setState({disable:true,
            openButton:false
        })
    }
    }

    handleEdit=()=>{
        this.setState({disable:false,
            openButton:true})
    }
    handleChange = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        });
      
       
    }

    render() {
       
        return (
            <React.Fragment>
                <div className="CostumerDetailContainer">
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.handleSubmit}
                        onError={errors => console.log(errors)}
                        className="form"
                    >
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
                                        disabled={this.state.disable}
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
                                        disabled={this.state.disable}
                                        defaultValue={this.state.phoneNumber}
                                        onChange={this.handleChange} noValidate
                                    />

                                </div>
                            </div>
                            <div className="textfieldBody">
                                <div className="textFieldBodyOne">
                                    <TextValidator
                                        fullWidth
                                        type="number"
                                        name="pinCode"
                                        label="PinCode"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                        disabled={this.state.disable}
                                        defaultValue={this.state.pinCode}
                                        onChange={this.handleChange}
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
                                        disabled={this.state.disable}
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
                                        disabled={this.state.disable}
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
                                        disabled={this.state.disable}
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
                                        disabled={this.state.disable}
                                        defaultValue={this.state.landMark}
                                        required
                                        onChange={this.handleChange} noValidat
                                    />
                                </div>
                            </div>
                            <div className="radioContainer">
                                <FormControl component="fieldset" disabled={this.state.disable}>
                                    <span className="TypePlace">Type</span>
                                    <RadioGroup aria-label="gender" name="type" row value={this.state.type} >
                                        {
                                            this.state.Type.map((item, index) =>
                                                <FormControlLabel value={item.id} control={<Radio size='small' />} label={item.title} />
                                            )}
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <spam className="errorMessage">{this.state.nameError}</spam>

                        </div>
                        <div className="CostumerDetailSideNav ">
                            <div className="editform">
                            <IconButton edge="start" color="inherit" aria-label="menu" fontSize="small" onClick={this.handleEdit}>
                                 <EditOutlinedIcon  fontSize="small" />
                            </IconButton>
                            </div>
                            {this.state.openButton ? <div className="cartButtonContinue">
                                <Button variant="contained"
                                    color="primary"
                                    disableElevation
                                    type="submit"
                                    onClick={this.submitData}
                                >
                                    Continue
                                </Button>
                            </div> : ""}
                        </div>
                    </ValidatorForm>
                </div>

            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {

    return {
        userInformation: (data) => dispatch(userInformation(data)),

    }
}



export default connect(null, mapDispatchToProps)(CostumerDetail)