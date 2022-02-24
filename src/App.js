import './App.css';
import React from 'react';
import Header from "./components/Header"
import Footer from './components/Footer';
import Title from './components/Title';
import Content from './components/Content';
import Agent from "./components/agent-section"
import Scroll from './components/Scroll';

// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className='boxed_wrapper'>
    <Header/>
    <Title/>
    <Content/>
    <Agent/>
    <Footer/>
    <Scroll/>
    </div>
  );
}

export default App;
