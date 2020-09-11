import React from 'react';
import '../SCSS/update.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class UpdateBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            author: '',
            quantity: null,
            price: null,
            pages: null,
            imageURL: '',
            bookId: null,
            adminId: null,
        };
    }
    handleChange = () => {
        this.setState({
            title: this.props.dataObject.bookName,
            description: this.props.dataObject.description,
            author: this.props.dataObject.authorName,
            quantity: this.props.dataObject.quantity,
            price:this.props.dataObject.price,
            pages: this.props.dataObject.pages,
            imageURL:this.props.dataObject.imageLink,
            bookId: this.props.dataObject.bookID,
            adminId: this.props.dataObject.adminID,
        })
        console.log(this.props);
    }


    render() {
        return (
            <div>
                <Dialog open={this.props.handelUpdateBook} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Book Detail</DialogTitle>
                    <DialogContent>
                        <div className="updateContainer">
                            <div className="textfield">
                                <div className="textFieldOne">
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="title"
                                        label="Title"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                        value={this.props.dataObject.bookName}
                                        onChange={this.handleChange} noValidate />
                                </div>

                                <div className="textFieldTwo">
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="description"
                                        label="Description"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                        value={this.props.dataObject.description}
                                        onChange={this.handleChange} noValidate />
                                </div>
                            </div>

                            <div className="textfield">
                                <div className="textFieldOne">
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="author"
                                        label="Author"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                        value={this.state.author}
                                        required
                                        onChange={this.handleChange} noValidate />
                                </div>

                                <div className="textFieldTwo">
                                    <TextField
                                        fullWidth
                                        type="number"
                                        name="quantity"
                                        label="quantity"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                        value={this.state.quantity}
                                        onChange={this.handleChange} noValidate />
                                </div>
                            </div>

                            <div className="textfield">
                                <div className="textFieldOne">
                                    <TextField
                                        fullWidth
                                        type="number"
                                        name="price"
                                        id="outlined-size-small"
                                        label="Price"
                                        variant="outlined"
                                        size="small"
                                        value={this.state.price}
                                        onChange={this.handleChange} noValidate />
                                </div>

                                <div className="textFieldTwo">
                                    <TextField
                                        fullWidth
                                        type="number"
                                        name="pages"
                                        id="outlined-size-small"
                                        label="Pages"
                                        variant="outlined"
                                        size="small"
                                        value={this.state.pages}
                                        onChange={this.handleChange} noValidate />
                                </div>
                            </div>

                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                            Close
                         </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}