import React from 'react';
import Menu from '@material-ui/core/Menu';
import "../SCSS/logout.scss";
import logo from '../assetes/logo.jpg';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Link ,withRouter} from "react-router-dom";
import auth from './Auth'


class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            imageUrl: ''
        };
    }


    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    handelLogOut = () => {
        auth.logout(() => {
            this.props.history.push("/Login");
        })
    }
   
    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <div
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <AccountCircleRoundedIcon fontSize='large' />
                    </IconButton>
                </div>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    style={{ transform: "translate3d(-15px, 40px, 0px)" }}>
                    <div className="logout">
                        <div className="accountimage">
                            <img src={this.state.imageUrl ? this.state.imageUrl : logo} class="displayAccountImage" alt="imag" />
                        </div>
                        <div className="name">
                        <div className="namebody">{localStorage.getItem('role') ==='Admin'?'Admin':""}</div>
                        <div className="namebody">{localStorage.getItem('firstName')+' '+localStorage.getItem('lastName')}</div>
                            <div className="email">{localStorage.getItem('email')}</div><br />
                        </div>
                        <div className="btnLogout">
                            {this.props.logOutTrue?"":
                            <Link to="/home/books/wishlist" variant="body2">
                                <button className="wishlist" type="button" >WISHLIST</button>
                            </Link>}
                            <button className="Addbag" type="button" onClick={this.handelLogOut}>LOGOUT</button>
                        </div>

                    </div>
                </Menu>
            </div>
        );
    }
}
export default withRouter(Logout)