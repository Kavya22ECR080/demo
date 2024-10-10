import React from 'react';
import Navbar from './Botton/Navi';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Top/Home';
import Contact from './Top/Contact';
import Work from './Top/Work';

function App() {
  return (                                                                                                                                                        
    <div>
      <Router>
        <div>
         <Navi/>
        </div>
       <div style ={{padding : '50px'}}>
        <Routes>
          <Route path ="/" element={ <Home/>} />
          <Route path="/work" element ={<Work/>} />
          <Route path="/contact" element ={<Contact/>} />
        </Routes>
        
      </div>
      </Router>
    </div>

      
  )
}

export default App; 
