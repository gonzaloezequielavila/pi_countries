import {Routes, Route} from 'react-router-dom'
import './App.css'

//!Views
import HomePage from './views/HomePage'
import Landing from './views/Landing'
import Detail from './views/Detail'

//!Components

import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route
        path='/'
        element={<Landing/>}/>

        <Route
        path='/home'
        element={<HomePage/>}/>

        <Route
        path='/detail/:id'
        element={<Detail/>}/>

      </Routes>

    </div>
  )
}

export default App
