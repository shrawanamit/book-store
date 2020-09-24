import React from 'react';
import "../SCSS/dashbord.scss";
import BooksContainer from "./BooksContainer.jsx"
import ToolBar from "./ToolBar";
import Footer from "./Footer.jsx";
import UserService from "../Services/userService";
import { connect } from 'react-redux';
import { displayAllBooks, displayAllBooksInCart,filteredData ,methodData} from '../redux/Action/actionCreater'
// import { Route } from 'react-router-dom';
let service = new UserService();

class Dashbord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allBooks: [],
            Type: [
                { id: 'diceble', type: "Sort by relevence", isdisabled: true },
                { id: 'title', type: "title" },
                { id: 'auther', type: "author" },
                { id: 'priceAscending', type: "price" },
            ],
            inputOption:'',
        }
    }

    componentDidMount() {
        this.getAllBooks();
        this.getAllCartBooks();
        this.props.methodData( this.getAllCartBooks);
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
                this.setState({ getAllCart: data.data.data })
                this.props.bookInCart(data.data.data);
            })
            .catch((err) => {
                console.log(err);

            })
    }


    filterOnChange = async(e) => {
        let value = e.target.value;
       await this.setState({ inputOption: value }, () => { console.log("====",this.state.inputOption); });
         const data={
            columnName:this.state.inputOption,
            order:"ascending"
         }
        service.sortBookByColumn(data)
            .then((data) => {
                console.log(" All books by filter ", data);
                this.props.filteredData(data.data.data);
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
                        <select className="selectOptionCntainer" value={this.state.inputOption} onChange={(element) => this.filterOnChange(element)}>
                            {this.state.Type.map((item, index) =>
                                <option key={item.id}>{item.type}</option>
                            )}
                        </select>
                    </div>
                    <div className="booksBodyContainer">
                        {/* <Route path="/home/books" component={BooksContainer} /> */}
                         <BooksContainer getAllCartBooks={this.getAllCartBooks}/> 
                    </div>


                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {

    return {
        displayAllBooks: (data) => dispatch(displayAllBooks(data)),
        bookInCart: (data) => dispatch(displayAllBooksInCart(data)),
        filteredData: (data) => dispatch(filteredData(data)),
        methodData: (data) => dispatch(methodData(data))
    }
}
export default connect(null, mapDispatchToProps)(Dashbord);//filteredData
