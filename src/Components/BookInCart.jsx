import React from 'react';
import ToolBar from './ToolBar';
import '../SCSS/cartInBook.scss';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import Button from '@material-ui/core/Button';
import CostumerDetail from './CostumerDetail';
import UserService from "../Services/userService";
import { connect } from 'react-redux';
import { displayAllBooksInCart } from '../redux/Action/actionCreater'
let service = new UserService();

class BookInCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            getAllCart: [],
        }
    }
    removeBookFromCart=(arrayObject)=>{
        console.log("cartId",arrayObject.cartId)
        service.DeleteCart(arrayObject.cartId)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);

        })
    }
   
    render() {
        return (
            <React.Fragment>
                <ToolBar />
                <div className="cartDisplay">
                    <div className="cartDisplayContainer">
                        <div className="blank"></div>
                        <div className="cartMainBody">
                            <div className="cartItem">
                                <div className="cartHeading"><span>My Cart</span></div>
                                <div className="cartBody">


                                    <div className="cartDetail">
                                        {this.props.getAllCartBook.map((row) =>
                                            <div className="DisplayCart">
                                                <div className="DisplayCartBookImage">
                                                    <div className="cartImage"><img  className="CartBookImage" src={row.bookImage}/></div>
                                                </div>
                                                <div className="cartBookDetails">
                                                    <div className="bookname">{row.title}</div>
                                                    <div className="Auther">{row.auther}</div>
                                                    <div className="price">Rs.{row.price}</div>
                                                    <div className="quantityContainer">
                                                        <div className="addIcon">
                                                            <RemoveCircleOutlineRoundedIcon font="small" />
                                                        </div>
                                                        <div className="noOfItems">{row.quantity}</div>
                                                        <div className="removeIcons">
                                                            <ControlPointOutlinedIcon font="small" />
                                                        </div>
                                                        <div className="removeMessage"><Button onClick={()=>this.removeBookFromCart(row)}>Remove</Button></div>
                                                    </div>
                                                </div>


                                            </div>)}
                                        <div className="cartButton">
                                            <Button variant="contained" color="primary" disableElevation>
                                                place order
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="CustomerDetails"> <span className="messageDetais">Customer Details</span></div> */}
                            <CostumerDetail />
                            <div className="CustomerDetails"><span className="messageDetais"> Order Summery </span></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        getAllCartBook: [...state.bookInCartReducer.allBooksInCart]
    };
  
}

export default connect(mapStateToProps)(BookInCart)