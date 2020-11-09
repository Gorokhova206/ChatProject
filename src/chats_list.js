import React from 'react';
import {List, ListItem} from '@material-ui/core';
import * as chat_card from './chat_card';


export default class ChatsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0
        }
        this.UpdateSelectedChat = props.UpdateSelectedChat;
    }

    static getDerivedStateFromProps(nextProps, prevState){
        let new_s_index = 0;
        let selChat = nextProps.selectedChat;
        nextProps.chats.forEach(function(item, index) {
            if(item.id === selChat.id)
            new_s_index  = index
        });
        if (new_s_index !== JSON.stringify(prevState.selectedIndex))
            return({
                selectedIndex: new_s_index
            });
    }

    SelectChat(value, index){
        this.setState({
            selectedIndex: index
        });
        
        this.UpdateSelectedChat(value);
    }


    render(){
        return (<div className="chats-list" id='chats_list'>
        <List style={{padding:0}}>
            {this.props.chats.map((chat, i)=>(
              <ListItem  button key={i}  style={{padding:0}} onClick={() => this.SelectChat(chat, i)} selected={this.state.selectedIndex === {i}.i}>
                {chat_card.renderContactCard(chat, 'block', (this.state.selectedIndex === {i}.i) ? 'aliceblue' : 'white')}
              </ListItem>
            ))}
        </List>
        </div>);
    }
}


export function renderChatsList(chatsList, updateSelectedChat, selectedChat){
    return (<ChatsList chats={chatsList} updateSelectedChat={updateSelectedChat} selectedChat={selectedChat}/>);
}
