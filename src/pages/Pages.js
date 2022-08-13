import React from 'react'
import Home from './Home'
import {Route,Routes,BrowserRouter, useLocation} from 'react-router-dom'
import Cusine from './Cusine'
import Searched from './Searched'
import RecipeDetail from './RecipeDetail'
import { AnimatePresence } from 'framer-motion'
const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>

        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path="/cusine/:type" element={<Cusine/>}/>
            <Route path='/searched/:searched' element={<Searched/>}/>
            <Route path='/recipeDetail/:name' element={<RecipeDetail/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default Pages