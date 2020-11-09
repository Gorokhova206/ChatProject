import React from 'react';
import * as button from './button';
import phone from './buttons/phone.svg';
import webcam from './buttons/webcam.svg';
import heart from './buttons/heart_black.svg';

class ContactButtons extends React.Component{
    render(){
        return(
            <div className="contact-buttons">
                {button.renderButton(phone)}
                {button.renderButton(webcam)}
                {button.renderButton(heart)}
            </div>
        )
    }
}

export function renderContactButtons() {
    return (
    <ContactButtons/>);
}