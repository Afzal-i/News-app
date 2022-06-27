import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import LoadingBar from 'react-top-loading-bar'
//import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
//import Test from './components/Test';
const App =()=> {
  const pageSize = 10
  const apiKey=process.env.REACT_APP_NEWS_API
 
    const [mode, setMode] = useState('light'); // enable dark mode.
    
    
    const removebodycls=()=>{
      document.body.classList.remove('bg-light')
      document.body.classList.remove('bg-dark')
      document.body.classList.remove('bg-success')
      document.body.classList.remove('bg-danger')
      document.body.classList.remove('bg-warning')
      if (toggleMode === 1) {
        removebodycls();
        console('condition matched')
      } else {
        console.log('Condition didnot matched')
      }
    }
    const toggleMode = (cls) => {                                                   {/*Cls is the primary call*/}
    removebodycls();
    document.body.classList.add('bg-'+cls);                                          {/*Cls will be called when ever button is clicked then accordingly color will be set*/}
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        //showAlert("Dark mode has been enabled", "Success")
        document.title = "Dark Mode is enabled"
  
      } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        //showAlert("Light mode has been enabled", "success")
        document.title = "Dark Mode is disabled"
      }
  
    }
    return (


      <BrowserRouter>
      <NavBar mode={mode} toggleMode={toggleMode} />
        
        <Routes>
          <Route path="/" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
          <Route path="/sports" element={<News key="sports" apiKey={apiKey}  pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/business" element={<News key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/health" element={<News key="health" apiKey={apiKey}  pageSize={pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science" />} />
          <Route path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology" />} />

          
        </Routes>
      </BrowserRouter>


    )
  
}
export default App;
