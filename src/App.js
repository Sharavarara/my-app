import './App.css';
import React from 'react';
import StopWatchInterval from './components/StopWatchInterval';
import StopWatchTimeout from './components/StopWatchTimeout';

const App=()=>{
  return <>
    <StopWatchInterval />
    <StopWatchTimeout />
  </>
}

export default App;



