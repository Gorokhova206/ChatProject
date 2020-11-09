import React from 'react'; 

export default class InputTextArea extends React.Component{
    constructor(props){
        super(props);
        this.ChangeMessage = props.handleChange
    }

    render(){
        return(
            <input className='message-input-area__input' placeholder="Введите сообщение..." onChange = {this.ChangeMessage}></input>
        )
    }

};