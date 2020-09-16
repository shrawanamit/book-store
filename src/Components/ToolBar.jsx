import React from 'react';
import "../SCSS/dashbord.scss";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import Button from '@material-ui/core/Button';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';


 class ToolBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            getAllCartBook:[]
        };
    }



    render() {
        return (
            <div className="appBar">

                <div className="heading"> <LocalLibraryOutlinedIcon />
                Bookstore</div>

                {
                    this.props.logOutTrue ?
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
                                    />
                                </div>
                            </div>
                        </div>}
                {
                    this.props.logOutTrue ? <div className="cartContainer">
                        <Button variant="contained" color="primary">
                            Logout
                    </Button>
                    </div> :
                        <div className="cartContainer">
                            <span className="cart">Cart</span>
                            <div className="searchIcon">
                                <Link to='/bookInCart'>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <ShoppingCartOutlinedIcon className="cartOutLine" />
                                    <span className="countInCart">{this.props.getAllCartBook.length}</span>
                                </IconButton>
                                </Link>
                               
                            </div>
                        </div>
                }
            </div>
        );
    }

} 
const mapStateToProps = state => {
    return {
        getAllCartBook: [...state.bookInCartReducer.allBooksInCart]
    };
  
}

export default connect(mapStateToProps)(ToolBar)