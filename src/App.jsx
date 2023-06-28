import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage'
import CityDetails from './pages/CityDetails/CityDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Routes>
       <Route path='/' element={<Homepage />} />
       <Route path='/SeeAllCities' element={<SeeAllCitiesPage />}/>
       <Route path='/CityDetails/:cityId/:testParam' element={<CityDetails />} />
      </Routes>
     
      <Footer />
    </BrowserRouter>
  )
}

export default App
