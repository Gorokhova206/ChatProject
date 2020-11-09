import React from 'react';
import * as avatar from './avatar';

class ChatCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let date = new Date(this.props.Messages[this.props.Messages.length-1].date)
        return(
            <div className="chat-card" style={{backgroundColor:this.props.backgroundColor}}>
                {avatar.renderMiddleAvatar(this.props.Avatar)}
                <div className="inline" style={{width:  'calc( 100% - '+52+'px )'}}>
                    <div className="contact-name">{this.props.Name}</div>
                    <div style={{width: 100+'%', height:'auto'}}>
                        <div className="last-message" style={{display:this.props.isChat}}>{this.props.Messages[this.props.Messages.length-1].text}</div>
                        <div className="last-message-date" style={{display:this.props.isChat}}>{ date.toLocaleString()}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export function renderContactCard(contact, isChat, backgroundColor) {
    return (
    <ChatCard
    id = {contact.id}
    Name= {contact.Name} 
    isChat = {isChat}
    Avatar = {contact.avatar}
    Messages = {contact.Messages}
    backgroundColor = {backgroundColor}/  
    >);
}
