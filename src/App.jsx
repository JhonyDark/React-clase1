import React from 'react';
import Header from './common/header';
import Home from './common/home';
import Footer from './common/footer';
import Login from './pages/login/login';
import './App.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <Login />
      <Home />
      <Footer />
    </div>
  )
}

export default App
