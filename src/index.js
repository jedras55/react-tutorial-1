import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyB2E5kwwSZTxEv9b8JeyZ24Np-crEcm8v4';

// Create a new component. This component should procude
// some HTML
const App = () =>{
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));