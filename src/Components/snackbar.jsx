import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
 class Snackbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            SnackbarOpen: false,
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
                open={this.props.snakebarDisplay.loggedIn}
                autoHideDuration={3000}
                onClose={this.SnackbarClose}
                message={<span id="message-id">{this.props.snakebarDisplay.SnackbarMessage}</span>}
                action={[
                    <IconButton key="close" aria-label="close"
                        color="inherit" onClick={this.SnackbarClose}>x</IconButton>
                ]}
            />.
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    console.log("state snackbarOpen",state)
    return {
        snakebarDisplay:state.snackbarOpen,
    };
  
}

export default connect(mapStateToProps)( Snackbar)