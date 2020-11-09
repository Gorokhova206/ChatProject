import React from 'react'; 

export default class Button extends React.Component{

    handleClick(){
        //console.log('1');
        this.props.handleClick();
    }
    render(){
        return(
            <button onClick = {() => this.handleClick()}>
                <img className='button-image'  src={this.props.img} alt={'1'} ></img>
            </button>
        )
    }

};

export function renderButton(img, handleClick) {
    return (
    <Button 
        img={img}
        handleClick = {()=> handleClick()}
    />);
}

