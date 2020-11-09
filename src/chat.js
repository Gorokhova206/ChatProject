import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component{
    render(){
        return(
            <div>
                <div></div>
                <div>Some name</div>
                <div>Some message</div>
            </div>
        )
    }
}

ReactDOM.render(
    <Contact/>//,
    //document.getElementById('root')
);