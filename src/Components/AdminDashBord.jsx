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
let service = new AdminService();


export default class AdminDashBord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            getAllBooks: [],

        };
    }
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
            })
            .catch((err) => {
                console.log(err);

            })
    }

    deleteBook = (Id) => {
        console.log("Delete Id", Id);
        service.delete(Id).then((json) => {
            console.log("responce of deleteed data==>", json);
            // if (json.data.success === 'True') {
            //     //alert('Record deleted successfully!!');
            //     this.setState({ SnackbarOpen: true, SnackbarMessage: 'Record deleted successfully!!' })
            // }
        })
    }

    render() {


        return (
            <div class="tableBody">
                {/* <div class="history"><p>Admin DashBord</p></div> */}
                <ToolBar />
                <div class="table">
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell align="center">Author</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">Image</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Edit</TableCell>
                                    <TableCell align="center">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.getAllBooks.map((row) => (
                                        <StylesProvider injectFirst>
                                            <TableRow key={row.bookID}>
                                                <TableCell component="th" scope="row">
                                                    {row.bookName}
                                                </TableCell>
                                                <TableCell align="center">{row.authorName}</TableCell>
                                                <TableCell align="center">{row.price}</TableCell>
                                                <TableCell align="center">{row.quantity}</TableCell>
                                                <TableCell align="center">{row.imageLink}</TableCell>
                                                <TableCell align="center">{row.description}</TableCell>
                                                <TableCell align="center">
                                                    <IconButton edge="start" color="inherit" >
                                                        <EditOutlinedIcon fontSize="small" color="inherit" />
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <IconButton edge="start" color="inherit" onClick={()=>this.deleteBook(row.bookID)}>
                                                        <DeleteOutlineOutlinedIcon fontSize="small" color="inherit" />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        </StylesProvider>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    }
}