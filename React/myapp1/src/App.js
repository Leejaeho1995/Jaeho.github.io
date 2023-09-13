//import React, { Component} from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';


function App() {
  const txt="React 와우"
  return (
    <>
    <Header/>
    <Main txt={txt} color="rgb(138, 226, 241)" name="철수"/>
    <Footer/>
    </>
  );
}

export default App;
