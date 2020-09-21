import React from 'react';
import "../SCSS/dashbord.scss";
import BooksContainer from "./BooksContainer.jsx"
import ToolBar from "./ToolBar";
import Footer from "./Footer.jsx";
import UserService from "../Services/userService";
import { connect } from 'react-redux';
import { displayAllBooks, displayAllBooksInCart } from '../redux/Action/actionCreater'
import { BrowserRouter as  Route } from 'react-router-dom';
let service = new UserService();

class Dashbord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allBooks: []
        }
    }

    componentDidMount() {
        this.getAllBooks();
        this.getAllCartBooks();
    }

    getAllBooks = () => {
        service.GetAllBooks()
            .then((data) => {
                console.log(" All books ", data);
                this.setState({ allBooks: data.data.data });
                this.props.displayAllBooks(data.data.data);
            })
            .catch((err) => {
                console.log(err);

            })
    }


    getAllCartBooks = () => {
        service.GetCart()
            .then((data) => {
                console.log(" All  cart books ", data);
                this.props.bookInCart(data.data.data);
                this.setState({ getAllCart: data.data.data })
                // this.setState({ getAllBooks: data.data.data });
                // console.log(" All books arrey ", this.state.getAllBooks);
                // this.props.displayAllBooks(data.data.data );
            })
            .catch((err) => {
                console.log(err);

            })
    }


    filterByPrice = () => {
        console.log("filter data")
        service.FilterBookByPrice()
            .then((data) => {
                console.log(" All books by filter ", data);

            })
            .catch((err) => {
                console.log(err);

            })

    }
    render() {
        return (
            <React.Fragment>
                <ToolBar />
                <div className="body">
                    <div className="bookscount">
                        <span className="headingcount">Books <span className="noOfBooks">({this.state.allBooks.length} items)</span></span>
                        <select className="selectOptionCntainer">
                            <option >Sort by relevence</option>
                            <option onClick={() => this.filterByPrice()} value="">Price:low to high</option>
                            <option value="">Price:low to high</option>
                            <option value="">Newest Arrival</option>
                        </select>
                    </div>
                    <div className="booksBodyContainer">
                        <Route path="/home/books" component={BooksContainer} /> 
                        {/* <BooksContainer /> */}
                    </div>
                    <Footer />

                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {

    return {
        displayAllBooks: (data) => dispatch(displayAllBooks(data)),
        bookInCart: (data) => dispatch(displayAllBooksInCart(data)),
    }
}
export default connect(null, mapDispatchToProps)(Dashbord);
