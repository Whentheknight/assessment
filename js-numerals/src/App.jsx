import { useState } from 'react'
import './App.css'
import { numToWord } from './utils/numberToWord'
import Converter from './components/Converter'

function App() {

  return (
    <div className="App">
      <header className="App-header"></header>
      <Converter></Converter>
    </div>
  )
}

export default App
