import React from 'react';
import '../SCSS/wishlist.scss';
import Toolbar from './ToolBar'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import UserService from "../Services/userService";
import { RowingOutlined } from '@material-ui/icons';
import { Divider } from '@material-ui/core';
let service = new UserService();

class WishList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBarCartHide: true,
            getAllWishListBook: []
        }
    }

    removeBookFromWishList = (wishListObject) => {
        console.log("DeleteWishList id", wishListObject.wishListId);
        service.DeleteWishList(wishListObject.wishListId)
            .then((data) => {
                console.log(" All wishList  books ", data);
            })
            .catch((err) => {
                console.log(err);

            })
    }


    componentDidMount() {
        this.getAllWishListBooks();
    }
    getAllWishListBooks = () => {
        service.GetWishList()
            .then((data) => {
                console.log(" All wishList  books ", data.data.data);
                this.setState({ getAllWishListBook: data.data.data })
            })
            .catch((err) => {
                console.log(err);

            })
    }


    render() {
        return (
            <React.Fragment>
                <Toolbar wishListsearchBarCartHide={this.state.searchBarCartHide} />.
                <div className="wishListContainer">
                    <div className="wishListBody">
                        <div className="cartHeading"><span>My WishList</span></div>
                        {this.state.getAllWishListBook.length === 0 ? <div className="emptyWishList">Your WishList is Empty</div> :
                            this.state.getAllWishListBook.map((row) =>
                                <div className="DisplayCart">
                                    <div className="displayWishListImage">
                                        <div className="cartImage"><img className="CartBookImage" src={row.bookImage} /></div>
                                    </div>
                                    <div className="cartBookDetails">
                                        <div className="bookname">{row.title}</div>
                                        <div className="Auther">{row.author}</div>
                                        <div className="price">Rs.{row.price}</div>
                                        <div className="WishListAction">
                                            <div>
                                                <Button variant="contained" disableElevation onclick={() => this.removeBookFromWishList(row)}>
                                                    Remove
                                                </Button>
                                            </div>
                                            <div>
                                                <Button variant="contained" color="primary" disableElevation>
                                                    send to cart
                                                </Button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => {

    return {
        // displayAllSearchBook: (data) => dispatch(displayAllSearchBook(data)),

    }
}

export default connect(null, mapDispatchToProps)(WishList)