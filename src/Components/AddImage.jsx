import React from 'react';
import '../SCSS/update.scss';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { connect } from 'react-redux';
import {  displayImage  } from '../redux/Action/actionCreater';
class AddImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl:''
        };
    }

    addImage=(e)=> {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({
                    imageUrl: reader.result,
                });
                this.props.displayImage(this.state.imageUrl);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    render() {
        return (
            <React.Fragment>
                
                   
                        <input type="file" id="BtnBrowseHidden" name="file" className="image" accept="image/*" onChange={(e) => this.addImage(e)} />
                        <label for="BtnBrowseHidden" id="LblBrowse">
                            <span className="imagetitle">add image</span>
                        </label>
                   
                
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