import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "../SCSS/adminDashBord.scss";
import { StylesProvider } from "@material-ui/core/styles";
import ToolBar from "./ToolBar";
import AdminService from "../Services/adminServices";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import IconButton from '@material-ui/core/IconButton';
import '../SCSS/update.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddImage from './AddImage';
import { connect } from 'react-redux';
import logo from '../assetes/bookLogo.png';
import TablePagination from '@material-ui/core/TablePagination';
import SearchIcon from '@material-ui/icons/Search';
import { Redirect } from 'react-router-dom';
import {displayAllBooks} from '../redux/Action/actionCreater'


let service = new AdminService();


class AdminDashBord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            getAllBooks: [],
            open: false,
            title: '',
            description: '',
            author: '',
            quantity: null,
            price: null,
            pages: '100',
            imageURL: '',
            bookId: null,
            adminId: null,
            heading: '',
            imageUrl: '',
            button: '',
            page: 0,
            rowsPerPage: 5,
            logOut: true,
            query: '',
            titleError: '',
            loggedIn: ''

        };
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    handleClickOpen = (dataObject) => {
        this.setState({
            button: 'UPDATE',
            heading: 'UPDATE BOOK ',
            open: true,
            title: dataObject.title,
            description: dataObject.description,
            author: dataObject.author,
            quantity: dataObject.booksAvailable,
            price: dataObject.price,
            imageURL: dataObject.bookImage,
            bookId: dataObject.bookId,

        });
    };
    handleAddBook = () => {
        this.setState({
            heading: 'ADD BOOK',
            open: true,
            button: 'ADD',
        });
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(this.state.query);
    };

    handelApi = () => {
        this.setState({ open: false });
        if (this.state.title === "") {
            this.setState({
                titleError: "title is empty"
            });
        }


        else if (this.state.bookId === null && this.state.title != null) {
            this.setState({
                titleError: ""
            });
            const requestData={
                'Title': this.state.title,
                'Description': this.state.description,
                'Author':this.state.author,
                "BooksAvailable": parseInt(this.state.quantity),
                'Price': parseInt(this.state.price)
            }
            service
                .AddBook(requestData)
                .then((json) => {
                    console.log(json)
                })
                .catch((err) => {
                    console.log(err);
                });

        }
        else {
            const requestData={
                'BookId':parseInt(this.state.bookId),
                'Title': this.state.title,
                'Description': this.state.description,
                'Author':this.state.author,
                "BooksAvailable": parseInt(this.state.quantity),
                'Price': parseInt(this.state.price)
            }

            service
                .updateBooks(requestData)
                .then((json) => {
                    console.log(json)
                    this.setState({
                        title: '',
                        description: '',
                        author: '',
                        quantity: null,
                        price: null,
                        pages: null,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    }

    handleClose = () => {
        this.setState({ open: false });
    };
    //for fetching Employee list from database
    componentDidMount() {
        this.getAllBooks();
    }



    getAllBooks = () => {
        service.GetAllBooks()
            .then((data) => {
                console.log(" All books ", data);
                this.setState({ getAllBooks: data.data.data });
                console.log(" All books arrey ", this.state.getAllBooks);
                this.props.displayAllBooks(data.data.data );
            })
            .catch((err) => {
                console.log(err);

            })
    }

    deleteBook = (bookId) => {
        console.log("Delete Id", bookId);
        service.DeleteBooks(bookId).then((json) => {
            console.log("responce of deleteed data==>", json);
           
        })
            .catch((err) => {
                console.log(err);

            })
    }
    stringTruncate =(str, length)=>{
        var dots = str.length > length ? '...' : '';
        return str.substring(0, length)+dots;
      };

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/signin" />
        }
        const searchTitle = this.state.query.toLowerCase();
        const emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, this.state.getAllBooks.length - this.state.page * this.state.rowsPerPage);
        return (
            <div class="tableBody">
                {/* <div class="history"><p>Admin DashBord</p></div> */}
                <ToolBar logOutTrue={this.state.logOut} />
                <div className="searchBarContainer">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <SearchIcon />
                    </IconButton>
                    <TextField
                        label="search by title"
                        type="text"
                        name="query"
                        id="outlined-size-small"
                        size="small"
                        value={this.state.query}
                        onChange={this.handleChange} noValidate />
                </div>
                <div class="table">
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Image</TableCell>
                                    <TableCell align="center">Title</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Author</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Edit</TableCell>
                                    <TableCell align="center">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    (this.state.query
                                        ? this.state.getAllBooks.filter(x => x.title.toLowerCase().includes(searchTitle)).slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                                        : this.state.getAllBooks.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)).map((row) => (
                                            <StylesProvider injectFirst>
                                                <TableRow key={row.bookID}>
                                                    <TableCell component="th" scope="row" ><img src={row.bookImage} alt ="noImage" className="displayImage" /></TableCell>
                                                    <TableCell align="center">{row.title}</TableCell>
                                                    <TableCell align="center">{this.stringTruncate(row.description, 20)}</TableCell>
                                                    <TableCell align="center">{row.author}</TableCell>
                                                    <TableCell align="center">{row.booksAvailable}</TableCell>
                                                    <TableCell align="center">{row.price}</TableCell>
                                                    <TableCell align="center">
                                                        <IconButton edge="start" color="inherit" >
                                                            <EditOutlinedIcon fontSize="small" color="inherit" onClick={() => this.handleClickOpen(row)} />
                                                        </IconButton>
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <IconButton edge="start" color="inherit" onClick={() => this.deleteBook(row.bookId)}>
                                                            <DeleteOutlineOutlinedIcon fontSize="small" color="inherit" />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            </StylesProvider>
                                        ))}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 77 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10]}
                        component="div"
                        count={this.state.getAllBooks.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                    <div className="addNote">
                        <Tooltip title="Add Books" aria-label="add">
                            <Fab color="secondary" onClick={this.handleAddBook}>
                                <AddCircleOutlineTwoToneIcon color="inherit" />
                            </Fab>
                        </Tooltip>

                    </div>
                </div>



                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">{this.state.heading}</DialogTitle>
                    <DialogContent>
                        <div className="updateContainer">
                            <div className="addImage">
                                <div className="imagebody">
                                    <img src={logo ? logo : this.props.imageURL} alt="upload" className="logoImage" />
                                </div>
                                <div className="imageInput">
                                    <AddImage />
                                </div>
                            </div>
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
                                        value={this.state.title}
                                        onChange={this.handleChange} noValidate />
                                </div>

                                <div className="textFieldTwo">
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
                            </div>

                            <div className="textfield">
                                <TextField
                                    fullWidth
                                    multiline
                                    type="text"
                                    name="description"
                                    label="Description"
                                    id="outlined-size-small"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.description}
                                    onChange={this.handleChange} noValidate />
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
                                        name="quantity"
                                        label="quantity"
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                        value={this.state.quantity}
                                        onChange={this.handleChange} noValidate />
                                </div>
                            </div>

                        </div>
                    </DialogContent>
                    <DialogActions>

                        <Button variant="contained" color="secondary" onClick={this.handelApi} >
                            {this.state.button}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div >
        );
    }
}
const mapStateToProps = state => {
    return {
        imageURL: state.imageURL,
    };

}
const mapDispatchToProps = dispatch => {
    return {
        displayAllBooks : (data) => dispatch(displayAllBooks(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminDashBord)