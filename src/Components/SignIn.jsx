import React from 'react';
import "../SCSS/signin.scss";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import AdminService from "../Services/adminServices";
import UserService from "../Services/userService";
import { Redirect } from 'react-router-dom';
import {userInformation} from '../redux/Action/actionCreater';
import {connect} from 'react-redux';
let service = new AdminService();
let serviceUser = new UserService();

const validEmailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

 class Registration extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            email: null,
            password: null,
            SnackbarOpen: false,
            SnackbarMessage: '',
            loggedIn: false,
            pathName:'',
            errors: {

                email: '',
                password: '',
                token: ''
            }
        };
    }




    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [event.target.name]: event.target.value,
        });
        let errors = this.state.errors;

        switch (name) {

            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            alert('Valid Form')
        } else {
            alert('Invalid Form')
        }
    }

    submitUserSignInForm = () => {
        
            const data = {
                Email: this.state.email,
                Password: this.state.password,
            };
            serviceUser.Login(data)
            .then((data) => {
                console.log("responce data==>", data.data); 
                            
                localStorage.setItem('token', data.data.jsonToken);
                if (data.data.data.userRole === "Customer" ) {
                    this.props.userInformation(data.data);
                    console.log("user login");
                    this.props.history.push("/userDashboard");
                   
                }
                else {
                    this.props.history.push("/adminDashboard");
                }
            })
            .catch((err) => {
                console.log(err);
            })
        };

    render() {
        const { errors } = this.state;

        return (
            <div className="smainContainer ">

                <div className="sloginContainer">
                    <div className="fundoofont1" align="center">
                        <span class="f">B</span>
                        <span class="u">o</span>
                        <span class="n">o</span>
                        <span class="d">k</span>
                        <span class="o">s</span>
                        <span class="oo">t</span>
                        <span class="u">o</span>
                        <span class="n">r</span>
                        <span class="d">e</span>
                    </div>
                    <div>
                        <p class="title" align="center">
                            <Typography component="h1" variant="h5">
                                Sign in
                                </Typography>
                        </p>
                    </div>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="textField1">
                            <TextField
                                fullWidth
                                type="email"
                                name="email"
                                label="Username"
                                id="outlined-size-small"
                                variant="outlined"
                                size="small"
                                helperText="Use EmailID or Mobile Number"
                                required
                                placeholder="@gmail.com"
                                onChange={this.handleChange} noValidate />

                            {errors.email.length > 0 &&
                                <span className='error'>{errors.email}</span>}
                        </div>
                        <div className="textField1">
                            <TextField
                                fullWidth
                                type="password"
                                name="password"
                                label="password"
                                id="outlined-size-small"
                                variant="outlined"
                                size="small"
                                helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
                                required
                                onChange={this.handleChange} noValidate />
                            {errors.password.length > 0 &&
                                <span className='error'>{errors.password}</span>}
                        </div>

                        <div className="buttonContainer">
                            <div className="btn1">
                                <Link href="/" variant="body2">
                                    <Button color="primary">Create account</Button>
                                </Link>
                            </div>
                            <div className="btn2">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.submitUserSignInForm}
                                    className="btn"
                                    type="submit">
                                    Sign in
                            </Button>
                            </div>
                        </div>

                    </form>


                </div>

            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    
    return {
        userInformation: (data) => dispatch(userInformation(data)),
        
    }
}

export default connect(null,mapDispatchToProps)(Registration)