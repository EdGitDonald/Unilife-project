import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage'
import CityDetails from './pages/CityDetails/CityDetails'
import HomeDetail from './pages/HomeDetail/HomeDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactUs from './components/ContactUs/ContactUs'


function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Routes>
       <Route path='/' element={<Homepage />} />
       <Route path='/SeeAllCities' element={<SeeAllCitiesPage />}/>
       <Route path='/CityDetails/:cityId/:testParam' element={<CityDetails />} />
       <Route path='/HomeDetail/:propertyId' element={<HomeDetail/>} />
      </Routes>
      <ContactUs />
      <Footer />
    </BrowserRouter>
  )
}

export default App
