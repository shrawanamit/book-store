import React from 'react';
import "../SCSS/registration.scss";
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import  userService from "../Services/userService";
let service=new userService();

const validEmailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
export default class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            confirmPassword: null,
            phoneNumber:null,
            city:null,
            address:null,
            SnackbarOpen: false,
            SnackbarMessage: '',
            errors: {

                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }
        };
    }

    SnackbarClose = (event) => {
        this.setState({ SnackbarOpen: false });
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        this.setState({
            [event.target.name]: event.target.value,
        });
        let formIsValid = true;

        switch (name) {
            case 'firstName':
                errors.firstName =
                    value.length < 3
                        ? 'must be 5 characters long!'
                        : '';
                formIsValid = false;
                break;
            case 'lastName':
                errors.lastName =
                    value.length < 3
                        ? 'must be 5 characters long!'
                        : '';
                formIsValid = false;
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                formIsValid = false;
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'must be 8 characters long!'
                        : '';
                formIsValid = false;
                break;
            case 'confirmPassword':
                errors.confirmPassword =
                    value.length < 8
                        ? 'must be 8 characters long!'
                        : '';
                formIsValid = false;
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
        return formIsValid;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }else{
          console.error('Invalid Form')
        }
      }

    
    submitUserSignInForm = () => {

        const user = {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Email:this.state.email,
            Address:this.state.address,
            City:this.state.city,
            PhoneNumber:this.state.phoneNumber,
            password: this.state.password,
        };
        if( this.state.password === this.state.confirmPassword)
        {
            service.Registration(user)
            .then((json) => {
                console.log("responce data==>", json);
                if (json.status === 200) {
                    this.setState({ SnackbarOpen: true, SnackbarMessage: 'Registration Sucessfull !!' })
                }
            })
            .catch((err) => {
                console.log(err);
            });
        
        }
        else{
            this.setState({ SnackbarOpen: true, SnackbarMessage: 'password not match !!' })
        }
        
    };



    render() {
        const { errors } = this.state;
        return (

           
            <div className="mainContainer ">
                 <Snackbar
                anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
                open={this.state.SnackbarOpen}
                autoHideDuration={3000}
                onClose={this.SnackbarClose}
                message={<span id="message-id">{this.state.SnackbarMessage}</span>}
                action={[
                    <IconButton key="close" aria-label="close"
                        color="inherit" onClick={this.SnackbarClose}>x</IconButton>
                ]}
            />
                <div className="bodyContainer">
                    <div className="registrationContainer">
                        <div className="fundoofont" >
                            <span className="f">B</span>
                            <span className="u">o</span>
                            <span className="n">o</span>
                            <span className="d">k</span>
                            <span className="o">s</span>
                            <span className="oo">t</span>
                            <span className="u">o</span>
                            <span className="n">r</span>
                            <span className="d">e</span>
                        </div>

                        <div className="textFieldBody">
                            {/* <p className="p1">Create your BookStore Account</p> <br /> */}
                            <form onSubmit={this.handleSubmit} noValidate>
                                <div className="text">
                                    <div className="text1">
                                        <div className="textRow1">
                                            <TextField
                                                fullWidth
                                                type="text"
                                                name="firstName"
                                                label="First name"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                                required
                                                defaultValue={this.state.firstName}
                                                onChange={this.handleChange} noValidate />
                                            {errors.firstName.length > 0 &&
                                                <span className='error'>{errors.firstName}</span>}
                                        </div>
                                        <div className="textRow2">
                                            <TextField
                                                fullWidth
                                                name="lastName"
                                                label="Last name"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                                required
                                                defaultValue={this.state.lastName}
                                                onChange={this.handleChange} noValidate />
                                            {errors.lastName.length > 0 &&
                                                <span className='error'>{errors.lastName}</span>}
                                        </div>
                                    </div>
                                    <div className="textColumn2">
                                        <TextField
                                            fullWidth
                                            type="email"
                                            name="email"
                                            label="Email"
                                            id="outlined-size-small"
                                            variant="outlined"
                                            size="small"
                                            helperText="Use EmailID "
                                            required
                                            placeholder="@gmail.com"
                                            text-align="right"
                                            defaultValue={this.state.email}
                                            onChange={this.handleChange} noValidate />
                                        {errors.email.length > 0 &&
                                            <span className='error'>{errors.email}</span>}
                                    </div>
                                    <div className="text3">
                                        <div className="textRow1">
                                            <TextField
                                                fullWidth
                                                name="city"
                                                label="City"
                                                type="text"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                                required
                                                defaultValue={this.state.city}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="textRow2">
                                            <TextField
                                                fullWidth
                                                name="phoneNumber"
                                                label="Phone Number"
                                                type="number"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                                required
                                                defaultValue={this.state.PhoneNumber}
                                                onChange={this.handleChange}
                                            />
                                            {errors.confirmPassword.length > 0 &&
                                                <span className='error'>{errors.confirmPassword}</span>}
                                        </div>
                                    </div>
                                    <div className="textColumn2">
                                        <TextField
                                            fullWidth
                                            type="address"
                                            name="address"
                                            label="address"
                                            multiline
                                            id="outlined-size-small"
                                            variant="outlined"
                                            size="small"
                                            helperText="enter your address"
                                            required
                                            text-align="right"
                                            defaultValue={this.state.address}
                                            onChange={this.handleChange} noValidate />
                                    </div>
                                    <div className="text3">
                                        <div className="textRow1">
                                            <TextField
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                                helperText="Use 8 or more characters mix"
                                                required
                                                defaultValue={this.state.password}
                                                onChange={this.handleChange}
                                            />
                                            {errors.password.length > 0 &&
                                                <span className='error'>{errors.password}</span>}
                                        </div>
                                        <div className="textRow2">
                                            <TextField
                                                fullWidth
                                                name="confirmPassword"
                                                label="Confirm"
                                                type="password"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                                required
                                                defaultValue={this.state.confirmPassword}
                                                onChange={this.handleChange}
                                            />
                                            {errors.confirmPassword.length > 0 &&
                                                <span className='error'>{errors.confirmPassword}</span>}
                                        </div>
                                    </div>
                                    <div className="button">
                                        <div className="button1">
                                            <Link href="/signin" variant="body2">
                                                <Button color="primary">sign in Insted</Button>
                                            </Link>
                                        </div>

                                        <div className="button2">
                                            <Button variant="contained" color="primary" onClick={this.submitUserSignInForm} type='submit'>
                                                Register
                                        </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                    {/* <div className="sideImageBox">
                        <div className="figureBox">
                            <div className="image"><img src={logo} class="tempimage" alt="Temperature" />
                                <figcaption className="figCaption"> One account. All of Fundoo working for you.</figcaption>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}