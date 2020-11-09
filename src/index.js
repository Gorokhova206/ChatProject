import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import add from './buttons/add.svg';
import * as button from './button';
import * as avatar from './avatar';
import * as contact_buttons from './contact_buttons';
import * as contact_list from './contact_list';
import ChatsList from './chats_list';
import * as utils from './utilites';
import InputTextArea from './input_text_area';
import send from './buttons/send.svg';
import ChatBox from './chat_box';



function BasicMarkup(){
    
    const [open, setOpen] = React.useState(false);
    const [contacts, setContacts] = React.useState(utils.LoadContacts());
    const [chats, setChats] = React.useState(utils.LoadChatsList() ? utils.LoadChatsList(): [] );
    const [selected_chat, setSelectedChat] = React.useState(chats[0]);
    const [new_message, setNewMessage] = React.useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = (value) => {
        setOpen(false);
        
    };

    const UpdateChats = (value) => {
        if (!chats.find(({id})=> id === value.id))
        {
            chats.push(value);
            chats.sort((a,b) => new Date(b.Messages[b.Messages.length-1].date) - new Date(a.Messages[a.Messages.length-1].date));
            console.log(chats);
            utils.SaveChatsInLocalStorage(chats);
        }
        UpdateSelectedChat(value);
        
    }

    const UpdateSelectedChat = (value) => {
        setSelectedChat(value);
    }

    const SendNewMessage = () =>{
        selected_chat.Messages.push({text:new_message, isMy:'true'});
        chats.forEach(function(item, index, array) {
            if(item.id === selected_chat.id)
                array[index]  = selected_chat
        });
        console.log(chats);
    }

    const handleChange = (event) => {
        setNewMessage(event.target.value);
    }

    return(

        <div> 
            <div className="inline contact-area">
                <div className="small-block" >
                    <div style={{float:'right'}}>{button.renderButton(add, handleClickOpen)}</div>
                </div>
                <ChatsList chats={chats} UpdateSelectedChat={UpdateSelectedChat} selectedChat={selected_chat}/>
            </div>
            <div className="inline chat-area">
                <div className="small-block" id='banner'>
                    <div>{avatar.renderAvatar(selected_chat.avatar)}</div>
                    <div className="contact_name" style={{float:'left', marginLeft: 8+'px', marginTop: 8+'px'}}>{selected_chat.Name}</div>
                    <div style={{float:'right'}}>
                        {contact_buttons.renderContactButtons()}
                    </div>
                </div>
                <ChatBox messageList={selected_chat.Messages}/>
                <div className="small-block message-input-area">
                    <InputTextArea handleChange={handleChange} />
                    {button.renderButton(send, SendNewMessage)}
                </div>
            </div>
            <div className="inline contact-info">
                {avatar.renderBigAvatar(selected_chat.avatar)}
                <div className="contact_name" style={{marginTop: 12+'px', marginBottom:4+'px'}}>{selected_chat.Name}</div>
                <div style={{margin:'0 auto'}}>
                    {contact_buttons.renderContactButtons()}
                </div>
            </div>
            <contact_list.ContactList open={open} onClose={handleClose} contacts={contacts} updateChats={UpdateChats}/>
        </div>
    );
}

utils.addStartInfoInLocalStorage();
ReactDOM.render(
    <BasicMarkup/>,
    document.getElementById('root')
    
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
