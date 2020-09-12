import React from 'react';
import "../SCSS/dashbord.scss";
import BooksContainer from "./BooksContainer.jsx"
import ToolBar from "./ToolBar";


class Dashbord extends React.Component {
    render() {
        return (
            <React.Fragment>
               <ToolBar />
                <div className="body">
                    <div className="bookscount">
                        <span  className="headingcount">Books</span>
                        <select className="">
                            <option value="desebel">Sort by relevence</option>
                            <option value="">Price:low to high</option>
                            <option value="">Price:low to high</option>
                            <option value="">Newest Arrival</option>
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