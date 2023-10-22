
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Pages/Menu';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <div className='App' data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Menu' element={<Menu/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>

      </Router>
     
    </div>
    
  );
}

export default App;
