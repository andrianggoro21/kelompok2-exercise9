import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import PageCart from './pages/cart';
import Navbar from './components/navbar';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<PageCart/>}/>
      </Routes>
      
    </>
  )
}

export default App;

