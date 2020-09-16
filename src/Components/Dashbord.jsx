import React from 'react';
import "../SCSS/dashbord.scss";
import BooksContainer from "./BooksContainer.jsx"
import ToolBar from "./ToolBar";
import UserService from "../Services/userService";
let service = new UserService();

class Dashbord extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }


    filterByPrice = ()=>{
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
                        <span  className="headingcount">Books</span>
                        <select className="selectOptionCntainer">
                            <option >Sort by relevence</option>
                            <option onClick={()=>this.filterByPrice()} value="">Price:low to high</option>
                            <option  value="">Price:low to high</option>
                            <option  value="">Newest Arrival</option>
                        </select>
                    </div>
                    <div className="booksBodyContainer">
                        <BooksContainer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Dashbord;