import React from 'react';
import ToolBar from './ToolBar';
import '../SCSS/cartInBook.scss';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import Button from '@material-ui/core/Button';
import CostumerDetail from './CostumerDetail';
import UserService from "../Services/userService";
import { connect } from 'react-redux';
import Footer from "./Footer";
import OrderCheckOut from './OrderCheckOut';
import Emptymessage from './Emptymessage';
import Noimage from '../assetes/Noimage.jpg';

let service = new UserService();

class BookInCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            getAllCart: [],
            cartDisplay: true,
            handelOrderOpenClose: true,
            handelAddressOpenClose: true,
            placeOrder: true
        }
    }
    componentDidMount() {
        this.getorder();
        // this.props.methodData();
    }
    getorder = () => {
        service.getOrder()
            .then((data) => {
                console.log("order ", data);
            })
            .catch((err) => {
                console.log(err);

            })
    }

    handelOrder = () => {
        this.setState({
            placeOrder: false,
            handelAddressOpenClose: false,
        })
        
    }


    removeBookFromCart = (arrayObject) => {
        console.log("cartId", arrayObject.cartId)
        service.DeleteCart(arrayObject.cartId)
            .then((data) => {
                console.log(data);
                this.props.methodData();
            })
            .catch((err) => {
                console.log(err);

            })
    }

    render() {
        return (
            <React.Fragment>
                <ToolBar displaycartIcon={this.state.cartDisplay} />
                <div className="cartDisplay">
                    <div className="cartDisplayContainer">
                        <div className="blank"></div>
                        <div className="cartMainBody">
                            <div className="cartItem">
                                <div className="cartHeading"><span>My Cart</span></div>
                                {this.props.getAllCartBook.filter(row => row.isDeleted === false &&  row.isUsed === false ).length === 0 ? <Emptymessage /> :
                                    this.props.getAllCartBook.filter(row => row.isDeleted === false &&  row.isUsed === false).map((row) =>
                                        <div className="cartBody">
                                            <div className="DisplayCart">
                                                <div className="DisplayCartBookImage">
                                                    <div className="cartImage"><img alt="noImage" className="CartBookImage" src={row.bookImage?row.bookImage:Noimage} /></div>
                                                </div>
                                                <div className="cartBookDetails">
                                                    <div className="bookname">{row.title}</div>
                                                    <div className="Auther">{row.author}</div>
                                                    <div className="price">Rs.{row.price}</div>
                                                    <div className="quantityContainer">
                                                        <div className="addIcon">
                                                            <RemoveCircleOutlineRoundedIcon font="small" />
                                                        </div>
                                                        <div className="noOfItems">{row.quantity}</div>
                                                        <div className="removeIcons">
                                                            <ControlPointOutlinedIcon font="small" />
                                                        </div>
                                                        <div className="removeMessage"><Button onClick={() => this.removeBookFromCart(row)}>Remove</Button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)}
                                {this.props.getAllCartBook.filter(row => row.isDeleted === false &&  row.isUsed === false ).length === 0 ? "" : this.state.placeOrder && <div className="cartButton">
                                    <Button variant="contained" color="primary" disableElevation onClick={this.handelOrder}>
                                        place order
                                     </Button>
                                </div>
                                }

                            </div>

                            {this.state.handelAddressOpenClose ? <div className="CustomerDetails"> <span className="messageDetais">Customer Details</span></div> :
                                <CostumerDetail />}

                            <div className="orderSummary"><span className={this.props.userInformation.orderSummeryOpen ? "displayCheckOut" : "messageDetais"}> Order Summery </span>
                                {this.props.userInformation.orderSummeryOpen ? <OrderCheckOut /> : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cartFooter">
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    console.log("state book in cart", state)
    return {
        getAllCartBook: [...state.bookInCartReducer.allBooksInCart],
        userInformation: state.bookInCartReducer.userData,
        methodData: state.bookInCartReducer.methodData
    };

}

export default connect(mapStateToProps)(BookInCart)