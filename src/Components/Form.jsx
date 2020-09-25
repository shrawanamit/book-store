import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import FormControl from '@material-ui/core/FormControl';
 
export class MyForm extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
            email: '',
            bool:false
        }
    }
   
 
    handleChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }
 
    handleSubmit = () => {
        // your submit logic
    }
 
    render() {
        const { email } = this.state;
        return (
           
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    value={email}
                    disabled={this.state.bool}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm>
            
        );
    }
}
 