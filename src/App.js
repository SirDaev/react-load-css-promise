import React, { useEffect,useState } from 'react';
import { loadStyleSheet } from './scripts.js';
import './App.css';

function App() {
  const [message,setMessage] = useState('loading...');

 useEffect(() => {

  loadStyleSheet( '/extra.css', function( success, link ) {
    setMessage(success ? 'Loaded!!!' : 'ERROR');
  });

},[]);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
