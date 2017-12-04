import React, { Component } from 'react';

import SignIn  from './SignIn';
import SignUp2 from './SignUp2';

export default class CurrentModal extends Component {

    render() {

        if (this.props.CurrentModal === 'SignIn') {
            // console.log('ModalName: ',this.props.CurrentModal)
            // console.log('currentModal clickhandle: ',this.props.handleClick)
            // console.log('currentModal closeModal: ',this.props.closeModal)
            return <SignIn 
                        CurrentModal = { this.props.CurrentModal } 
                        handleClick  = { this.props.handleClick }
                        inputChange  = { this.props.inputChange }
                        closeModal   = { this.props.closeModal } />;
        } else if (this.props.CurrentModal === 'SignUp') {
            return <SignUp2 
                        CurrentModal = { this.props.CurrentModal } 
                        handleClick =  { this.props.handleClick }
                        inputChange =  { this.props.inputChange }
                        closeModal   = { this.props.closeModal } />;
        } else {
            return null;
        }
    }
}
