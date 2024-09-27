import React from "react";
import ReactDOM from "react-dom";

const myStyles = {
    border: '2px solid green',
    backgroundColor: 'yellow',
    color: 'green',
}

const Info = () => (
    <h1 className='sentence' style={ myStyles }
    >Moja pierwsza strona w React</h1>
)

const HeaderFn = () => {
    return (
        <div>
            <Info/>
        </div>
    );
}

/*class InfoCl extends React.Component {
    render() {
        return <Info/> 
    }
}

const HeaderCl = () => {
    return <div>
        <InfoCl/>
    </div>
}*/



ReactDOM.render(
    <HeaderFn/>,
    //<HeaderCl/>,
    document.querySelector('#root')
);

