import React from 'react';
import "../SCSS/dashbord.scss";
import { connect } from 'react-redux';
import UserService from "../Services/userService";
import TablePagination from '@material-ui/core/TablePagination';
import Pagination from '@material-ui/lab/Pagination';
let service = new UserService();

class BooksContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getAllBooks: [],
            page: 0,
            rowsPerPage: 8,
            // page: 1,
            count: 0,
            pageSize: 8,
            button: 'ADD TO BAG',
            buttonChange: true,

        };
    }
    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };


    addToBag = async (arreyObject) => {
        //  this.setState({button:'ADDED TO BAG'});
        this.setState({
            buttonChange: !this.state.buttonChange
        })
        console.log(arreyObject);
        const data = {
            bookID: arreyObject.bookID,
        }
        service.AddtoCart(data)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);

            })

    }
    //for fetching Employee list from database
    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks = () => {
        service.GetAllBooks()
            .then((data) => {
                console.log(" All books ", data);
                this.setState({ getAllBooks: data.data.data });
                // console.log(" All books arrey ", this.state.getAllBooks);
                // this.props.displayAllBooks(data.data.data );
            })
            .catch((err) => {
                console.log(err);

            })
    }
    render() {
        const emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, this.state.getAllBooks.length - this.state.page * this.state.rowsPerPage);
        console.log("all book", this.props.allBooks);
        return (
            <React.Fragment>
                {this.state.getAllBooks.map((row) =>
                    <div className="container">
                        <div className="bookcell">
                            <div className="imageContainer">
                                <img src={row.imageLink} className="imageUserBook" />
                               
                            </div>
                            <div className="outOfStock">OUT OF STOCK</div>
                            <div className="bookDiscription">
                                <div className="bookNameContainer">
                                    <div className="bookname">{row.bookName}</div>
                                    <div className="Auther">{row.authorName}</div>
                                    <div className="price">Rs. {row.price}</div>
                                </div>
                                {this.state.buttonChange ?
                                    <div className="buttonCotainer">
                                        <button className="Addbag" type="button" onClick={() => this.addToBag(row)}>{this.state.button}</button>
                                        <button className="wishlist" type="button" onclick="alert('Hello world!')">WISHLIST</button>
                                    </div> : <div className="buttonCotainer"><button className="AddedToBag" type="button" >ADDED TO BAG</button></div>}

                            </div>
                        </div>
                        <div className="bookDetailsContainer">
                            <div className="bookDetailsheading">Book Details</div>
                            <div className="bookDetails">{row.description}</div>
                        </div>
                    </div>
                )}
                <Pagination
                    color="secondary"
                    count={18}
                    defaultPage={1}
                    onChange={this.handleChange}
                // rowsPerPageOptions={[8, 12]}
                // component="div"
                // count={this.state.getAllBooks.length}
                // rowsPerPage={this.state.rowsPerPage}
                // page={this.state.page}
                // onChangePage={this.handleChangePage}
                // onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    // console.log("state in book container", state);
    // return {
    //     allBooks: [...state.allBooks]
    // };

}
export default connect(mapStateToProps)(BooksContainer)