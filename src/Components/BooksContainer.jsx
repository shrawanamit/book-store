import React from 'react';
import "../SCSS/dashbord.scss";
import UserService from "../Services/userService";
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import { StylesProvider } from "@material-ui/core/styles";
let service = new UserService();

class BooksContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getAllBooks: [],
            page: 1,
            count: 3,
            pageSize: 8,
            button: 'ADD TO BAG',
            buttonChange: true,
            btn:'Addbag'

        };
    }
    handlePageChange = (event, value) => {
        this.setState({ page: value });
    };

    handlePageSizeChange(event) {
        this.setState({ pageSize: event.target.value });

    }
    addToWishList=(arreyObject)=>{
        const data = {
            BookId: arreyObject.bookId,
            Quantity: 1
        }

        service.AddtoWishList(data)
        .then((data) => {
            console.log("addToWishList",data);
        })
        .catch((err) => {
            console.log(err);

        })

    }

    addToBag = async (arreyObject) => {
        //  this.setState({button:'ADDED TO BAG'});
        
      
        console.log(arreyObject);
        const data = {
            BookId: arreyObject.bookId,
            Quantity: 1
        }
        service.AddtoCart(data)
            .then((data) => {
                console.log(data);
                this.setState({
                    btn:'AddedToBag',
                    button:'ADDED TO BAG'
                })
            })
            .catch((err) => {
                console.log(err);

            })

    }
    //for fetching Employee list from database

    render() {
        const emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, this.state.getAllBooks.length - this.state.page * this.state.rowsPerPage);
        console.log("all book", this.props.allBooks);
        return (
            <React.Fragment>
                {(this.props.searchedData === null ? this.props.searchedData:this.props.getAllBooks).slice((this.state.page - 1) * this.state.pageSize, ((this.state.page) * (this.state.pageSize))).map((row) =>
                    <div className="container">
                        <div className="bookcell">
                            <div className="imageContainer">
                                <img src={row.bookImage} className="imageUserBook" />
                            </div>
                            {row.booksAvailable === 0 && <div className="outOfStock">OUT OF STOCK</div> }
                            <div className="bookDiscription">
                                <div className="bookNameContainer">
                                    <div className="bookname">{row.title}</div>
                                    <div className="Auther">{row.author}</div>
                                    <div className="price">Rs. {row.price}</div>
                                </div>
                                {/* {this.state.buttonChange ? */}
                                    <div className="buttonCotainer">
                                        <button className={this.state.btn} type="button" onClick={() => this.addToBag(row)}>{this.state.button}</button>
                                        <button className="wishlist" type="button" onClick={() => this.addToWishList(row)}>WISHLIST</button>
                                    </div> 
                                    {/* : <div className="buttonCotainer"><button className="AddedToBag" type="button" >ADDED TO BAG</button></div>} */}

                            </div>
                        </div>
                        <div className="bookDetailsContainer">
                            <div className="bookDetailsheading">Book Details</div>
                            <div className="bookDetails">{row.description}</div>
                        </div>
                    </div>
                )}
                <div className="pagination">
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
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    console.log("state", state)
    return {
        getAllBooks: [...state.bookReducer.allBooks],
        searchedData:[...state.bookReducer.searchedData]
    };

}

export default connect(mapStateToProps)(BooksContainer)