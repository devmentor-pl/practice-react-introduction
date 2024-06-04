import ReactDOM from 'react-dom/client'
import React from "react";
import { createRoot } from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector('#root'))

const myStyle = {
    border: '1px solid blue',
    backgroundColor: 'yellow',
};

class HeaderCl extends React.Component {
    render() {
            return <h1
                        className='headerCl'
                        style={myStyle}
                    >
                        Moja pierwsza strona w React
                    </h1>
    }
};

// const HeaderFn = () => {
//     return (
//         <div>
//             <h1 className='headerCl'>Moja pierwsza strona w React</h1>
//         </div>

//     )
// }

root.render(<HeaderCl />)
root.render(<HeaderFn />)