import React from "react"
import "./App.css"
import LandingPage from "./stores/pages/LandingPage"
import { Route, Routes } from "react-router-dom"
import MobilesPage from "./stores/pages/MobilesPage"
import ACPage from "./stores/pages/ACPage"
import TvPage from "./stores/pages/TvPage"
import SpeakersPage from "./stores/pages/SpeakersPage"
import WatchesPage from "./stores/pages/WatchesPage"
import ComputerPage from "./stores/pages/ComputersPage"
import BooksPage from "./stores/pages/BooksPage"
import FurniturePage from "./stores/pages/FurnturePage"
import FridgePage from "./stores/pages/FridgePage"
import WomenPage from "./stores/pages/WomenPage"
import MenPage from "./stores/pages/MenPage"
import KitchenPage from "./stores/pages/KitchenPage"
import MobileSingle from "./singles/MobileSingle"
import AcSingle from "./singles/AcSingle"
import TvSingle from "./singles/TvSingle"
import SpeakersSingle from "./singles/SpeakersSingle"
import WatchesSingle from "./singles/WatchesSingle"
import ComputersSingle from "./singles/ComputersSingle"
import FurnitureSingle from "./singles/FurnitrueSingle"
import BooksSingle from "./singles/BooksSingle"
import FridgeSingle from "./singles/FridgeSingle"
import WomenSingles from "./singles/WomenSingles"
import MenSingles from "./singles/MenSingles"
import KitchenSingle from "./singles/KitchenSingle"
import UserCart from "./stores/UserCart"
const App = ()=>{

  return(
    <div>
      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
        <Route path = "/mobiles" element = {<MobilesPage/>}/>
        <Route path = "/ac" element = {<ACPage/>}/>
        <Route path = "/tv" element = {<TvPage/>}/>
        <Route path = "/speakers" element = {<SpeakersPage/>}/>
        <Route path = "/watches" element = {<WatchesPage/>}/>
        <Route path = "/computers" element = {<ComputerPage/>}/>
        <Route path = "/books" element = {<BooksPage/>}/>
        <Route path = "/furniture" element = {<FurniturePage/>}/>
        <Route path = "/fridge" element = {<FridgePage/>}/>
        <Route path = "/women" element = {<WomenPage/>}/>
        <Route path = "/men" element = {<MenPage/>}/>
        <Route path = "/kitchen" element = {<KitchenPage/>}/>
          <Route path = "/mobiles/:id" element = {<MobileSingle/>}/>
          <Route path = "/ac/:id" element = {<AcSingle/>}/>
          <Route path = "/tv/:id" element = {<TvSingle/>}/>
          <Route path = "/speakers/:id" element = {<SpeakersSingle/>}/>
          <Route path = "/watches/:id" element = {<WatchesSingle/>}/>
          <Route path = "books/:id" element = {<BooksSingle/>}/>
          <Route path = "/furniture/:id" element = {<FurnitureSingle/>}/>          
          <Route path = "/computers/:id" element = {<ComputersSingle/>}/>          
          <Route path = "/fridge/:id" element = {<FridgeSingle/>}/>          
          <Route path = "/women/:id" element = {<WomenSingles/>}/>          
          <Route path = "/men/:id" element = {<MenSingles/>}/>          
          <Route path = "/kitchen/:id" element = {<KitchenSingle/>}/>     
        <Route path = "/cart" element ={<UserCart/>}/>  
      </Routes>
     </div>
  )

}
export default App