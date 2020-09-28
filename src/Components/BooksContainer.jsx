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
            bookIdArray: []
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

    addToBag = (arreyObject, index) => {
        //  this.setState({button:'ADDED TO BAG'});

        if (arreyObject.wishListId === undefined) {
            console.log(arreyObject);
            const data = {
                BookId: arreyObject.bookId,
                Quantity: 1
            }
            //to change button color
            this.props.getAllBooks[index].isAdded = true
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
           if( arreyObject.isDeleted === false && arreyObject.isMoved === false){
            const data = {
                wishListId: arreyObject.wishListId,
            }
            service.AddWishListToCart(data)
                .then((data) => {
                    console.log(data);
                    this.props.methodData();
                    this.props.getAllWishListBooks();
                })
                .catch((err) => {
                    console.log(err);

                })
            }
        }

    }

    render() {
        console.log("array bookid", this.state.bookIdArray)
        return (
            // 
            <React.Fragment>
                {(this.props.filterAction ? this.props.getAllFilterBooks :this.props.searchBook ?  this.props.searchedData :
                this.props.getAllBooks.filter(row =>  row.isDeleted == false )).slice((this.state.page - 1) * this.state.pageSize, ((this.state.page) * (this.state.pageSize))).map((row, index) =>
                    <div className="container">
                        <div className="bookcell">
                            <div className="imageContainer">
                                <img src={row.bookImage ? row.bookImage : Noimage} alt="noImage" className="imageUserBook" />
                            </div>
                            {row.booksAvailable === 0 && <div className="outOfStock">OUT OF STOCK</div>}
                            <div className="bookDiscription">
                                <div className="bookNameContainer">
                                    <div className="bookname">{row.title}</div>
                                    <div className="Auther">{row.author}</div>
                                    <div className="price">Rs. {row.price}</div>
                                </div>

                                {!row.isAdded ?

                                    row.booksAvailable === 0 ?
                                        <div className="buttonCotainer">
                                            <button className="wishlisted" type="button" onClick={() => this.addToWishList(row)}>WISHLIST</button>
                                        </div>
                                        :
                                        <div className="buttonCotainer">
                                            <button className={this.state.btn} type="button" onClick={() => this.addToBag(row, index)}>{row.wishListId === undefined ? this.state.button : this.state.addToCart}</button>
                                            <button className="wishlist" type="button" onClick={() => this.addToWishList(row)}>{row.wishListId === undefined ? "WISHLIST" : "REMOVE"}</button>
                                        </div> :
                                    <div className="buttonCotainer">
                                        <button className="AddedToBag" type="button" >ADDED TO BAG</button>
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
                {this.props.paginationhide ? "" : <div className="pagination">
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
    console.log("state=in book container", state,window.location.href)
   
    if (window.location.href === "http://localhost:3000/home/books") {

            return {
                getAllFilterBooks: [...state.bookReducer.filteredData],
                getAllBooks: [...state.bookReducer.allBooks],
                searchedData:[...state.bookReducer.searchedData]
            }

    }
    else if(window.location.href === 'http://localhost:3000/wishlist') {
        console.log("u r in get wish list book")
        return {
           
            getAllBooks: [...state.bookReducer.wishListData.filter(row=>row.isMoved === false)],
            methodData: state.bookInCartReducer.methodData
        }
    }
};



export default connect(mapStateToProps)(BooksContainer)