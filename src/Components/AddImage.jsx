import React from 'react';
import '../SCSS/update.scss';
import { connect } from 'react-redux';
import {  displayImage  } from '../redux/Action/actionCreater';
class AddImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl:'',
            image:''
        };
    }

     addImage= async(e)=> {
        await this.setState({image:e.target.files[0]})
        this.props.displayImage(this.state.image);
        console.log("image url",this.state.image);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({
                    imageUrl: reader.result,
                });
                // this.props.displayImage(this.state.imageUrl);
            }
        }
        // reader.readAsDataURL(e.target.files[0]);
    }
    render() {
        return (
            <React.Fragment>
                
                   
                
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        displayImage: (data) => dispatch(displayImage(data))
    }
}
export default connect(null, mapDispatchToProps)(AddImage)