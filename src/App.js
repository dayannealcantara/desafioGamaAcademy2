import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Routes from './routes'


const App = () => {
	
	return (
		<div class="container-grid">
      <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes/>
      <Footer/>
      </BrowserRouter>
    </div>
	)
}

export default App
