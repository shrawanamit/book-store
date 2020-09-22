import React from 'react';
import Button from '@material-ui/core/Button';
import UserService from "../Services/userService";


let service = new UserService();
export default class OrderCheckOut extends React.Component {
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
    render() {
        return (
            <> {this.state.orderData.map((row) =>
                <div className="orderSummaryBody">
                   
                    <div className="DisplayCart">
                        <div className="DisplayCartBookImage">
                            <div className="cartImage"><img alt="noImage" className="CartBookImage" src={row.bookImage}/></div>
                        </div>
                        <div className="cartBookDetails">
                            <div className="bookname">{row.title}</div>
                            <div className="Auther">{row.author}</div>
                            <div className="price">Rs.{row.price}</div>
                        </div>

                    </div>
                    <div className="orderCheck">
                        <Button variant="contained" color="primary" disableElevation onClick={() => this.handelOrder()}>
                            Order checkOut
                       </Button>
                    </div>
            </div>)}
            </>
        );
    }
}

