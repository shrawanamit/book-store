import React from 'react';
import "../SCSS/dashbord.scss";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserService from "../Services/userService";
import { displayAllSearchBook } from '../redux/Action/actionCreater';
import Logout from './Logout';

let service = new UserService();

class ToolBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            getAllCartBook: [],
            searchBook: '',
        };
    }
    handelChange = async (event) => {
        event.preventDefault();
        await this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state.searchBook);
        const requestdata = {
            Search: this.state.searchBook
        }
        service.SearchBook(requestdata)
            .then((data) => {
                console.log(data);
                this.props.displayAllSearchBook(data.data.data)
            })
            .catch((err) => {
                console.log(err);

            })
    }


    render() {
        return (
            <div className="appBar">

                <div className="heading"> <LocalLibraryOutlinedIcon />
                Bookstore</div>

                {
                    this.props.logOutTrue || this.props.displaycartIcon ||this.props.wishListsearchBarCartHide ||this.props.searchBarOrderSummary ?
                        <div className="searchBarContener"></div> :
                        <div className="searchBarContener">
                            <div className="searchBody">
                                <div className="searchIcon">
                                    <IconButton edge="start" color="inherit" aria-label="menu">
                                        <SearchIcon />
                                    </IconButton>

                                </div>
                                <div className="inputBox">
                                    <InputBase
                                        placeholder="Search..."
                                        inputProps={{ 'aria-label': 'search' }}
                                        fullWidth
                                        name="searchBook"
                                        defaultValue={this.state.searchBook}
                                        onChange={this.handelChange}
                                    />
                                </div>
                            </div>
                        </div>}
                <div className="cartlogoutContainer">
                    {
                       this.props.logOutTrue || this.props.displaycartIcon || this.props.searchBarOrderSummary?<div></div>
                         :
                            <div className="cartContainer">
                                <span className="cart">Cart</span>
                                <div className="searchIcon">
                                    <Link to='/bookInCart'>
                                        <IconButton edge="start" color="inherit" aria-label="menu">
                                            <ShoppingCartOutlinedIcon className="cartOutLine" />
                                            <span className="countInCart">{this.props.getAllCartBook.filter(row => row.isDeleted === false).length}</span>
                                        </IconButton>
                                    </Link>
                                </div>
                            </div>
                    }
                    <Logout />
                   
                </div>
            </div>
        );
    }

}
const mapStateToProps = state => {
    return {
        getAllCartBook: [...state.bookInCartReducer.allBooksInCart]
    };

}
const mapDispatchToProps = dispatch => {

    return {
        displayAllSearchBook: (data) => dispatch(displayAllSearchBook(data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)