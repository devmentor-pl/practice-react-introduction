import React from 'react';
import ReactDOM from 'react-dom';

const myStyles1 = {
    fontSize: '40px',
    color: 'rgb(16, 102, 126)',
    fontFamily: 'Arial',
    letterSpacing: '10px',
    fontWeight: '100'
}

const HeaderFn = () => {
    return (
        <div>
            <header>
                <h1
                style = { myStyles1 }
                >Moja pierwsza strona w react! (funkcja)</h1>
            </header>
        </div>
    )
}

class HeaderCl extends React.Component {
    render() {
        return <header>
            <h1
            style = { myStyles1 }
            >Moja pierwsza strona w react! (klasa)</h1>
        </header>
    }
}

ReactDOM.render(
    <section>
        <HeaderFn/>
        <HeaderCl/>
    </section>,
    document.querySelector('#root')
)