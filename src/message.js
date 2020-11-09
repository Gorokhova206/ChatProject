import React from 'react'; 

export default class Message extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if (this.props.message.isMy === 'true')
            return(
                <div className='message'>
                    {this.props.message.text}
                </div>
            )
        else 
            return(
                <div className='message alien-message'>
                    {this.props.message.text}
                </div>
            )  
    }
}