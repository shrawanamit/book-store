import React from 'react';
import ToolBar from './ToolBar';
import '../SCSS/cartInBook.scss';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import Button from '@material-ui/core/Button';

export default class BookInCart extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ToolBar />
                <div className="cartDisplay">
                    <div className="cartDisplayContainer">
                        <div className="cartItem">
                            <div className="cartHeading"><span>My Cart</span></div>
                            <div className="cartBody">
                                <div className="cartImage"></div>
                                <div className="cartDetail">
                                    <div className="bookname">java</div>
                                    <div className="Auther">amit</div>
                                    <div className="price">Rs:500</div>
                                    <div className="quantityContainer">
                                        <div className="addIcon">
                                            <ControlPointOutlinedIcon font="small" />
                                        </div>
                                        <div className="noOfItems">1</div>
                                        <div className="removeIcons">
                                            <RemoveCircleOutlineRoundedIcon font="small" />
                                        </div>
                                        <div className="removeMessage">Remove</div>

                                    </div>
                                    <div className="cartButton">
                                        <Button variant="contained" color="primary" disableElevation>
                                            place order
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="CustomerDetails"> <span className="messageDetais">Customer Details</span></div>
                        <div className="CustomerDetails"><span className="messageDetais"> Order Summery </span></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}