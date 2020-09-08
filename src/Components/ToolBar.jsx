import React from 'react';
import "../SCSS/dashbord.scss";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
export default  class ToolBar extends React.Component{
    render(){
        return(
            <div className="appBar">
                   
            <div className="heading"> <LocalLibraryOutlinedIcon />
                Bookstore</div>
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
            </div>
            <div className="cartContainer">
                <span className="cart">Cart</span>
                <div className="searchIcon">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <ShoppingCartOutlinedIcon />
                    </IconButton>

                </div>
            </div>
        </div>
        );
    }

} 