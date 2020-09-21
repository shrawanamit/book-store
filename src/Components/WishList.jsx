import React from 'react';
import '../SCSS/wishlist.scss';
import Toolbar from './ToolBar'
import { connect } from 'react-redux';
import UserService from "../Services/userService";
import BookContainer from './BooksContainer';
import { wishListData} from '../redux/Action/actionCreater';
import Footer from './Footer'
let service = new UserService();

class WishList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBarCartHide: true,
            getAllWishListBook: [],
            addTocart:"ADD TO Cart"
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
                this.props.wishListData(data.data.data);
            })
            .catch((err) => {
                console.log(err);

            })
    }


    render() {
        return (
            <div className="wishListMainContainer">
                <Toolbar wishListsearchBarCartHide={this.state.searchBarCartHide} />.
                <div className="wishListContainer">
                    <div className="wishListBody">
                        <div className="cartHeading"><span>My WishList</span></div>
                        <BookContainer />
                    </div>
                </div>
                 <Footer /> 
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {

    return {
        wishListData: (data) => dispatch(wishListData(data)),

    }
}

export default connect(null, mapDispatchToProps)(WishList)