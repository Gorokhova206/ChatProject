import React from 'react'; 
import { List, ListItem} from '@material-ui/core'
import Message from './message'

export default class ChatBox extends React.Component{
    constructor(props){
        super(props);
        this.messageList = props.messageList;

    }

    componentDidUpdate(prevProps){
        if(JSON.stringify(prevProps.messageList) !== JSON.stringify(this.props.messageList)){
            this.setState({          
                messageList: this.props.messageList
            });
        }
    }

    render(){
        return(
            <div className="chat-main-area">
                <List style={{padding:0,height:100+'%'}}>
                    {this.props.messageList.map((message, i)=>(
                    <ListItem key={i}  style={{padding:0}} >
                        <Message message={message}/>
                    </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}