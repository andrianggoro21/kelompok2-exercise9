import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </>
  )
  }
import PageCart from './pages/cart';

function App() {
  return (
    <div>
      <PageCart></PageCart>
    </div>
  );
}

export default App;
