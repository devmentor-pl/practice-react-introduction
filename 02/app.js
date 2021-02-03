import React from 'react';
import ReactDOM from 'react-dom';

// const HeaderFn = () => {
//     return (
//         <div>
//             <h1>
//                 Moja pierwsza strona w React
//             </h1>
//         </div>
//     )
// }
// ReactDOM.render(
//     <HeaderFn/>,
//     document.querySelector("#root")
// )

class HeaderCL extends React.Component {
    render () {
        return <h1>Moja pierwsza strona w React</h1>
    }
}
ReactDOM.render(
    <HeaderCL/>,
    document.querySelector("#root")
)