import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css'
import Header from './components/Header'
import Document from './components/Document'
import Main from './components/Main'
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/portfolio/' element={<Main />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  )
}


