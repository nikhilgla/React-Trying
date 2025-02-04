import { useState } from 'react'
import './App.css'
import Header from './components/Header/header';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/footer';
import Home from './components/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
