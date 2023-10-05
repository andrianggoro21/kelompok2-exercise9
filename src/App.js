import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import PageCart from './pages/cart';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<PageCart/>}/>
      </Routes>
      
    </>
  )
}

export default App;

