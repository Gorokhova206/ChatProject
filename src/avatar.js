export function Avatar (props){
    return(
        <div className="circle avatar">
            <img className="button-image" src={process.env.PUBLIC_URL + props.img} alt={'1'}></img>
        </div>
    )
}

export function BigAvatar (props){
    return(
        <div className="circle avatar big-avatar">
            <img className="button-image" src={props.img} alt={'1'}></img>
        </div>
    )
}

export function MiddleAvatar (props){
    return(
        <div className="circle avatar middle-avatar">
            <img className="button-image" src={props.img} alt={'1'}></img>
        </div>
    )
}

export function renderAvatar(img) {
    return (
    <Avatar 
        img={img}
    />);
}

export function renderBigAvatar(img) {
    return (
    <BigAvatar 
        img={img}
    />);
}

export function renderMiddleAvatar(img) {
    return (
    <MiddleAvatar 
        img={img}
    />);
}
