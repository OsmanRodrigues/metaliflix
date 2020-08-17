import React from 'react';
import dotenv from 'dotenv';
import Routes from './routes/Routes';

const App =()=>{
  dotenv.config()
  return(
    <Routes/>
  )
}
export default App;
