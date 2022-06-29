import './App.css';
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Aboutus from './pages/About/Aboutus';
import Contactus from './pages/Contact/Contactus';
import Card from './components/Card/Card';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          {/* <Route path='/home' element={<Card/>}/> */}
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/contact' element={<Contactus/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
