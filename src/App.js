
import './App.css';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom';
import Navbar from './NavBar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services'
import Products from './components/Products';
import Contact  from './components/Contact';
import Signup from './components/Signup';
import Notfound from './components/Notfound';



function App() {
  return (
    <Router>
      <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path="*" element={<Notfound/>} />
    </Routes>
    </Router>
  );
}

export default App;
