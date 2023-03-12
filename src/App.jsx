import React from 'react'
import Carrousel from './components/Carrousel'
import {slides} from './data/carrousel.json'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Carrousel data={slides} />
    </div>
  )
}

export default App