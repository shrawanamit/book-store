import React from 'react';
import "../SCSS/signin.scss";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import  AdminService from "../Services/adminServices";
let service=new AdminService();


const validEmailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

export default class Registration extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
           
            email: null,
            password: null,
            SnackbarOpen: false,
            SnackbarMessage: '',
            errors: {
                
                email: '',
                password: '',
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
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }
    submitUserSignInForm = () => {
        const user = {
           
            email: this.state.email,
            password: this.state.password,
           
          }; 

          service.Login(user)
            .then((json) => {
              console.log("responce data==>", json.data.id);
            //   //taking token Id of user
            //   localStorage.setItem('token', json.data.id);
              if (json.status === 200) {
                this.setState({ SnackbarOpen: true, SnackbarMessage: 'Login Sucessfull !!' })

                // auth.login(()=>{
                //     this.props.history.push("/home/notes");
                // })
              }
            })
            .catch((err) => {
              console.log(err);
            });
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
                            <Link href="/"  variant="body2">
                                <Button color="primary">Create account</Button>
                                </Link>
                            </div>
                            <div className="btn2">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.submitUserSignInForm}
                                    className="btn">
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