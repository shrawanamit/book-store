import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button'

export default class Emptymessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }
    render() {
        return (

            <div className="emptyCart">
                <span className="emptyCartmessage">{this.props.messageEmpty ? "Your wishList is Empty": "Your Cart is Empty"}</span>
                <div className="continueShopping">
                    <Link href="/home/books" variant="body2" underline="none">
                        <Button variant="contained" color="primary" disableElevation className="continueShopping">
                            continue Shoping
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}
