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

const headerStyle = {
    width: '100%',
	height: '100%',
	padding: '50px',
	color: '#FFF',
	textShadow: '1px 1px 1px #333',
    backgroundImage: 'linear-gradient( 135deg, #9f05ff69 10%, #fd5e086b 100%)',
  };

class HeaderCL extends React.Component {
    render () {
        return <h1 style={headerStyle}>Moja pierwsza strona w React</h1>
    }
}
ReactDOM.render(
    <HeaderCL/>,
    document.querySelector("#root")
)