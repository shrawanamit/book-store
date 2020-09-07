import React from 'react';
import "../SCSS/dashbord.scss";


export default class BooksContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="bookcell">
                    <div className="imageContainer">

                    </div>
                    <div className="bookDiscription">
                        <div className="bookNameContainer">
                            <div className="bookname">Two State</div>
                            <div className="Auther">chetan Bhagat</div>
                            <div className="price">Rs:</div>
                        </div>
                        <div className="buttonCotainer">
                            <button className="Addbag" type="button" onclick="alert('Hello world!')">ADD TO BAG</button>
                            <button className="wishlist" type="button" onclick="alert('Hello world!')">WISHLIST</button>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}