import React from 'react';
import ToolBar from './ToolBar';
import '../SCSS/cartInBook.scss';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import Button from '@material-ui/core/Button';
import CostumerDetail from './CostumerDetail';
import UserService from "../Services/userService";
import { connect } from 'react-redux';
import {displayAllBooksInCart} from '../redux/Action/actionCreater'
let service = new UserService();

class BookInCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allCart: [],
        }
    }
    componentDidMount() {
        this.getAllCartBooks();
    }

    getAllCartBooks = () => {
        service.GetCart()
            .then((data) => {
                console.log(" All  cart books ", data);
                this.props.bookInCart(data.data.data);
                // this.setState({ getAllBooks: data.data.data });
                // console.log(" All books arrey ", this.state.getAllBooks);
                // this.props.displayAllBooks(data.data.data );
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
                                    <div className="cartImage"></div>
                                    <div className="cartDetail">
                                        <div className="bookname">java</div>
                                        <div className="Auther">amit</div>
                                        <div className="price">Rs:500</div>
                                        <div className="quantityContainer">
                                            <div className="addIcon">
                                                <RemoveCircleOutlineRoundedIcon font="small" />
                                            </div>
                                            <div className="noOfItems">1</div>
                                            <div className="removeIcons">
                                                <ControlPointOutlinedIcon font="small" />
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
const mapDispatchToProps = dispatch => {
    return {
        bookInCart: (data) => dispatch(displayAllBooksInCart(data))
    }
}
export default connect(null, mapDispatchToProps)(BookInCart)