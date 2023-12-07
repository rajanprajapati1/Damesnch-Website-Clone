import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import CategoryPage from './Pages/CategoryPage'
const App = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route exact path='/damensch' element={<HomePage/>} />
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/men/category/:id' element={<CategoryPage/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
