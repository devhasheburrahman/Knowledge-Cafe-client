import { useState } from 'react'

import './App.css'
import Header from './Componeant/Header/Header'
import Main from './Componeant/Main/main'
import Footer from './Componeant/footer/footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {



  return (
    <div>
      <Header></Header>
      <Main></Main>

      <Footer></Footer>
      <ToastContainer />
    </div >

  )
}

export default App
