import React from 'react';
import "../SCSS/dashbord.scss";
import { connect } from 'react-redux';
import UserService from "../Services/userService";
let service = new UserService();

class BooksContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            getAllBooks:[]

        };
    }


     addToBag = async(arreyObject)=>{
         console.log(arreyObject);
         const data ={
            BookId:arreyObject.bookID,
        }
        service.AddtoCart(data)
        .then((data)=>{
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
        console.log("all book",this.props.allBooks);
        return (
            <React.Fragment>
                {this.state.getAllBooks.map((row) =>
                    <div className="bookcell">
                        <div className="imageContainer">
                            <img src={row.imageLink}  className="imageUserBook"/>
                        </div>
                        <div className="bookDiscription">
                            <div className="bookNameContainer">
                                <div className="bookname">{row.bookName}</div>
                                <div className="Auther">{row.authorName}</div>
                                <div className="price">Rs:{row.price}</div>
                            </div>
                            <div className="buttonCotainer">
                                <button className="Addbag" type="button" onClick={()=>this.addToBag(row)}>ADD TO BAG</button>
                                <button className="wishlist" type="button" onclick="alert('Hello world!')">WISHLIST</button>
                            </div>
                        </div>

                    </div>)}
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    console.log("state in book container" ,state);
    return {
        allBooks: [...state.allBooks]
    };

}
export default connect(mapStateToProps)(BooksContainer)