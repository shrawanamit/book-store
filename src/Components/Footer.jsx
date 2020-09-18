import React from 'react';
import '../SCSS/footer.scss'

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date :new Date()
        }
    }
    render(){
        return(
            <div className="footer">
                    Copyright @ {this.state.date.getFullYear()} Bookstore Private Limited.All Rights Reserved
            </div>
          
        );
    }
}