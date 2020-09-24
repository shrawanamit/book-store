import React from 'react';
import "../SCSS/dashbord.scss";
import UserService from "../Services/userService";
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import Noimage from '../assetes/Noimage.jpg';

let service = new UserService();

class BooksContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allBooks: [],
            page: 1,
            count: 3,
            pageSize: 8,
            button: 'ADD TO BAG',
            buttonChange: true,
            btn: 'Addbag',
            addToCart: 'ADD TO CART',
            BookId: null
        };
    }
    handlePageChange = (event, value) => {
        this.setState({ page: value });
    };

    handlePageSizeChange(event) {
        this.setState({ pageSize: event.target.value });

    }
    addToWishList = (arreyObject) => {

        if (arreyObject.wishListId === undefined) {
            const data = {
                BookId: arreyObject.bookId,
                Quantity: 1
            }

            service.AddtoWishList(data)
                .then((data) => {
                    console.log("addToWishList", data);
                    this.props.getAllWishListBooks();
                })
                .catch((err) => {
                    console.log(err);

                })
        }
        else {
            console.log("DeleteWishList id", arreyObject.wishListId);
            const data = {
                wishListId: arreyObject.wishListId
            }
            service.DeleteWishList(data)
                .then((data) => {
                    console.log(" All wishList removed  books responce", data);
                    this.props.getAllWishListBooks();
                })
                .catch((err) => {
                    console.log(err);

                })

        }

    }

    addToBag = (arreyObject) => {
        //  this.setState({button:'ADDED TO BAG'});
        if (arreyObject.wishListId === undefined) {
            console.log(arreyObject);
            const data = {
                BookId: arreyObject.bookId,
                Quantity: 1
            }
            this.setState({
                bookId: arreyObject.bookId,
            });
            service.AddtoCart(data)
                .then((data) => {
                    console.log(data);
                    this.props.getAllCartBooks();

                })
                .catch((err) => {
                    console.log(err);

                })
        }
        else {//AddWishListToCart
            const data = {
                wishListId: arreyObject.wishListId,
            }
            service.AddWishListToCart(data)
                .then((data) => {
                    this.props.getAllCartBooks();
                })
                .catch((err) => {
                    console.log(err);

                })
        }



    }

    render() {
        console.log("prpops", this.props)
        return (
            <React.Fragment>
                {this.props.getAllBooks.slice((this.state.page - 1) * this.state.pageSize, ((this.state.page) * (this.state.pageSize))).filter(row => row.isDeleted === false ).map((row) =>
                    <div className="container">
                        <div className="bookcell">
                            <div className="imageContainer">
                                <img src={row.bookImage?row.bookImage:Noimage} alt="noImage" className="imageUserBook" />
                            </div>
                            {row.booksAvailable === 0 && <div className="outOfStock">OUT OF STOCK</div>}
                            <div className="bookDiscription">
                                <div className="bookNameContainer">
                                    <div className="bookname">{row.title}</div>
                                    <div className="Auther">{row.author}</div>
                                    <div className="price">Rs. {row.price}</div>
                                </div>

                                {this.state.bookId === row.bookId ? <div className="buttonCotainer">
                                    <button className="AddedToBag" type="button" >ADDED TO BAG</button>
                                </div>
                                    : row.booksAvailable === 0 ? <div className="buttonCotainer">
                                        <button className="wishlisted" type="button" onClick={() => this.addToWishList(row)}>WISHLIST</button>
                                    </div> :
                                        <div className="buttonCotainer">
                                            <button className={this.state.btn} type="button" onClick={() => this.addToBag(row)}>{row.wishListId === undefined ? this.state.button : this.state.addToCart}</button>
                                            <button className="wishlist" type="button" onClick={() => this.addToWishList(row)}>{row.wishListId === undefined ? "WISHLIST" : "REMOVE"}</button>
                                        </div>
                                }
                            </div>
                        </div>
                        {/* book discription not shownwishList  Book */}
                        {row.wishListId === undefined &&
                            <div className="bookDetailsContainer">
                                <div className="bookDetailsheading">Book Details</div>
                                <div className="bookDetails">{row.description}</div>
                            </div>}
                    </div>
                )}
               {this.props.paginationhide ?"":<div className="pagination">
                 <div>
                        <Pagination
                            color="secondary"
                            count={this.props.getAllBooks.length % 8 === 0 ? parseInt(this.props.getAllBooks.length / 8) : parseInt(this.props.getAllBooks.length / 8 + 1)}
                            page={this.state.page}
                            siblingCount={1}
                            boundaryCount={1}
                            shape="rounded"
                            onChange={this.handlePageChange}
                        />
                    </div>
                </div>}
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    console.log("state====", state)

    if (state.bookReducer.wishListData.length === 0) {

        if (state.bookReducer.searchedData.length === 0 && state.bookReducer.filteredData.length === 0) {
            return {
                getAllBooks: [...state.bookReducer.allBooks]
            }
        }
        else if (state.bookReducer.searchedData.length === 0) {
            return {
                getAllBooks: [...state.bookReducer.filteredData]
            }

        }
        else {
            return {
                // 
                getAllBooks: [...state.bookReducer.searchedData]
            }
        }

    }
    else {
        return {
            getAllBooks: [...state.bookReducer.wishListData],
        }
    }
};



export default connect(mapStateToProps)(BooksContainer)