import React from 'react';
import "../SCSS/signin.scss";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import UserService from "../Services/userService";
import { userInformation } from '../redux/Action/actionCreater';
import { connect } from 'react-redux';
import { snackbarDisplay } from '../redux/Action/actionCreater';
import auth from './Auth';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';


let serviceUser = new UserService();

const validEmailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
// const validPasswordRegex = RegExp(/"^[a-zA-Z0-9]*[@#$&*_+-]{1}[a-zA-Z0-9]*$/);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class SignIn extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            email: '',
            password: '',
            SnackbarOpen: true,
            snackbar: {
                SnackbarMessage: 'login Sucessfull',
                loggedIn: true,
            },
            errorColor: false,
            compliteError:'',
            showPassword: false,
            errors: {

                email: '',
                password: '',
                token: ''
            }
        };
    }


    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };


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
                        ? 'must be 8 characters long!'
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
            console.log('Valid Form');
        } else {
            console.log('Invalid Form');
        }
    }

    submitUserSignInForm = () => {

        if(this.state.email.length === 0 || this.state.password.length === 0 )
        {
             this.setState({compliteError:"All field Required"})
        }
        else{
         const data = {
            Email: this.state.email,
            Password: this.state.password,
        };
        serviceUser.Login(data)
            .then((data) => {
                localStorage.setItem('userId', data.data.data.userId);
                localStorage.setItem('address', data.data.data.address);
                localStorage.setItem('phoneNo', data.data.data.phoneNumber);
                localStorage.setItem('firstName', data.data.data.firstName);
                localStorage.setItem('lastName', data.data.data.lastName);
                localStorage.setItem('city', data.data.data.city);
                localStorage.setItem('token', data.data.jsonToken);
                localStorage.setItem('email', data.data.data.email);
                localStorage.setItem('role', data.data.data.userRole);
                if (data.data.data.userRole === "Customer") {
                    this.props.userInformation(data.data);
                    this.props.snackbarDisplay(this.state.snackbar);
                    auth.login(() => {
                        this.props.history.push("/home/books");
                    })

                }
                else {
                    auth.login(()=>{
                        this.props.history.push("/adminDashboard");
                    })
                    
                    this.props.snackbarDisplay(this.state.snackbar);

                }
            })
            .catch((err) => {
                console.log(err);
            })
        }
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="smainContainer ">

                <div className="sloginContainer">
                    <div className="fundoofont1" align="center">
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
                    <div>
                        <p className="title" align="center">
                            <Typography component="h1" variant="h5">
                                SignIn
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
                                type={this.state.showPassword ? 'text' : 'password'}
                                name="password"
                                label="password"
                                id="outlined-size-small"
                                variant="outlined"
                                size="small"
                                helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
                                required
                                onChange={this.handleChange} noValidate
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }} />
                            {errors.password.length > 0 &&
                                <span className='error'>{errors.password}</span>}
                        </div>
                        <spam className="error">{this.state.compliteError}</spam>
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
        snackbarDisplay: (data) => dispatch(snackbarDisplay(data))

    }
}


export default connect(null, mapDispatchToProps)(SignIn)