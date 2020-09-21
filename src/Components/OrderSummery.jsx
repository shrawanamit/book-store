import React from 'react';
import ToolBar from './ToolBar';
import orderSucessfull from '../assetes/orderSucessfull.png';
import '../SCSS/orderSummery.scss'
import Button from '@material-ui/core/Button';
import Footer from './Footer';
import { Link } from 'react-router-dom';


export default class OrderSummery extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cartDisplayOrderSummary:true,
            searchBarOrderSummary:true,
        }
    }
    render() {
        return (
            <React.Fragment>
                <ToolBar   searchBarOrderSummary={this.state.searchBarOrderSummary} cartDisplayOrderSummary={this.state.cartDisplayOrderSummary} />
                <div className="cartDisplay">
                    <div className="orderSummeryContainer">
                        <div className="orderSucessfullImageContainer">
                            <img src={orderSucessfull} alt="noImage" className="orderSucessfullImage" />
                        </div>
                        <div>
                            <p className="orderSucessfullMessage">hurray!!! your order is confirmed <br />
                                your order id is #12345 save the order id<br />
                                fro further communication
                            </p>
                        </div>
                        <div className="tableContainer">
                            <table className="tableHtml">
                                <tr classNmae="tableRow">
                                    <th className="tableHeading">Email</th>
                                    <th className="tableHeading">Contact</th>
                                    <th className="tableHeading">Address</th>
                                </tr>
                                <tr classNmae="tableRow">
                                    <td className="tableValue">Jill</td>
                                    <td className="tableValue">Smith</td>
                                    <td className="tableValue">50</td>
                                </tr>
                            </table>
                        </div>
                        <div className="continueShopping">
                            <Link href="/home/books" variant="body2">
                                <Button variant="contained" color="primary" disableElevation>
                                    continue Shoping
                            </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
