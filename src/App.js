import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
//import {QrReader} from 'react-qr-reader';
import { Scanner } from '@yudiel/react-qr-scanner';

function App() {
  return (
    <Scanner onScan={(result) => console.log(result)} />

  );
}

export default App;
{/* <>
<QrReader containerStyle={{width:'50',height:'100'}}
  onResult={(result, error) => {
    if (!!result) {
      setData(result?.text);
      console.info(result?.text);
    }

    if (!!error) {
      console.info(error);
    }
  }}
  style={{ width: '50',height:'50' }}
/>
<p>{data}</p>
</> */}

// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>
