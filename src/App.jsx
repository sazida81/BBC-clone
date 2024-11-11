import { useState } from 'react'
import './App.css'
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Main from './components/Main.jsx';
function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/' element={<Main />} />
      </Routes>
      {/*< Signin />*/}
    </div>
  )
}

export default App
