import React from 'react';
import '../SCSS/wishlist.scss';
import Toolbar from './ToolBar'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import UserService from "../Services/userService";
let service = new UserService();

class WishList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchBarCartHide:true,
            getAllWishListBook:[]
        }
    }
    componentDidMount() {
        this.getAllWishListBooks();
    }
    getAllWishListBooks = () => {
        service.GetWishList()
            .then((data) => {
                console.log(" All wishList  books ", data.data.data);
                this.setState({ getAllWishListBook: data.data.data })
                // this.setState({ getAllBooks: data.data.data });
                // console.log(" All books arrey ", this.state.getAllBooks);
                // this.props.displayAllBooks(data.data.data );
            })
            .catch((err) => {
                console.log(err);

            })
    }


    render() {
        return (
            <React.Fragment>
                <Toolbar wishListsearchBarCartHide={this.state.searchBarCartHide}/>.
                <div className="wishListContainer">
                    <div className="wishListBody">
                        <div className="cartHeading"><span>My WishList</span></div>
                        <div className="cartBody">
                            <div className="cartDetail">
                                {
                                <div className="DisplayCart">
                                    <div className="DisplayCartBookImage">
                                        <div className="cartImage"><img className="CartBookImage" /></div>
                                    </div>
                                    <div className="cartBookDetails">
                                        <div className="bookname">amit</div>
                                        <div className="Auther">amit</div>
                                        <div className="price">Rs.50</div>
                                    </div>
                                </div>
    }
                                <div className="cartButton">
                                    <Button variant="contained" color="primary" disableElevation>
                                        send to cart
                                    </Button>
                                </div>
                            </div>
                        </div>

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