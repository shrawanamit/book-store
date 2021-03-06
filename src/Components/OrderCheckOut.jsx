import React from 'react';
import Button from '@material-ui/core/Button';
import UserService from "../Services/userService";
import { connect } from 'react-redux';
import { getOrderId } from '../redux/Action/actionCreater';
import { withRouter } from "react-router";
import Noimage from '../assetes/Noimage.jpg';
let service = new UserService();
class OrderCheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderData: []

        };
    }
    componentDidMount() {
        this.getorder();
    }
    getorder = () => {
        service.getOrder()
            .then((data) => {
                console.log("order ", data);
                this.setState({
                    orderData: data.data.data
                })
            })
            .catch((err) => {
                console.log(err);

            })
    }

    hendalOrder = () => {
        console.log("===", this.props.userInformation.address)
        this.props.getAllCartBook.filter(row => row.isDeleted === false && row.isUsed === false).map((row) => {
            const data = {
                address: JSON.stringify(this.props.userInformation.address),
                city: JSON.stringify(this.props.userInformation.city),
                pinCode: this.props.userInformation.pinCode,
                cartId: row.cartId
            }

            service.OrderPlace(data)
                .then((data) => {
                    console.log("order with address", data);
                    this.props.getOrderId(data.data.data);
                    localStorage.setItem('orderId', data.data.data.orderId);
                    this.props.history.push("/home/books/orderSummery");
                    
                })
                .catch((err) => {
                    console.log(err);
                })
                return null;
        })
    };




    render() {
        return (
            <>
                <div className="orderSummaryBody">
                    {this.props.getAllCartBook.filter(row => row.isDeleted === false && row.isUsed === false).map((row) =>
                        <div className="DisplayCart">
                            <div className="DisplayCartBookImage">
                                <div className="cartImage"><img alt="noImage" className="CartBookImage" src={row.bookImage?row.bookImage:Noimage} /></div>
                            </div>
                            <div className="cartBookDetails">
                                <div className="bookname">{row.title}</div>
                                <div className="Auther">{row.author}</div>
                                <div className="price">Rs.{row.price}</div>
                            </div>

                        </div>)}
                        {this.props.getAllCartBook.filter(row => row.isDeleted === false && row.isUsed === false).length ===0 ?"":
                    <div className="orderCheck">
                        <Button variant="contained" color="primary" disableElevation onClick={this.hendalOrder} >
                            Order checkOut
                        </Button>
                    </div>}
                </div>
            </>
        );
    }
}
const mapDispatchToProps = dispatch => {

    return {
        getOrderId: (data) => dispatch(getOrderId(data)),
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        getAllCartBook: [...state.bookInCartReducer.allBooksInCart],
        userInformation: state.bookInCartReducer.userData
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderCheckOut))

