import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
export default class snackBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            SnackbarOpen: false,
            SnackbarMessage: '',
        };
    }

    SnackbarClose = (event) => {
        this.setState({ SnackbarOpen: false });
    }
    render(){
        return(
            <React.Fragment>
                <Snackbar
                anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
                open={this.state.SnackbarOpen}
                autoHideDuration={3000}
                onClose={this.SnackbarClose}
                message={<span id="message-id">{this.state.SnackbarMessage}</span>}
                action={[
                    <IconButton key="close" aria-label="close"
                        color="inherit" onClick={this.SnackbarClose}>x</IconButton>
                ]}
            />.
            </React.Fragment>
        );
    }
}