import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import ProductDetail from './pages/ProductDetail'

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/product' element={<ProductDetail />} />
    </Routes>
  )
}

export default MainRoutes