import React, { useState } from "react"
import Footer from './Components/Footer'
import Header from './Components/Header'
import PigEdit from './Pages/PigEdit'
import PigIndex from './Pages/PigIndex'
import PigNew from './Pages/PigNew'
import PigShow from './Pages/PigShow'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import "./App.css"

import pigs from "./mockPigs" 
import { Routes, Route } from 'react-router-dom'



const App = () => {


  console.log(pigs);

  return (
   <>
 <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/PigIndex" element={<PigIndex />} />
      <Route path="/PigShow" element={<PigShow />} />
      <Route path="/PigNew" element={<PigNew />} />
      <Route path="/PigEdit" element={<PigEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App;
