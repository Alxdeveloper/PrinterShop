import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './pages/Login/Login';
import { Contact } from './pages/contacts/Contact';
import Footer from './pages/Login/Footer'
import Service from './components/Service';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<Home/>}></Route>
        <Route path='/products' element={<Home/>}></Route>
        <Route path='/contacts' element={<Contact/>}></Route>
        <Route path='/services' element={< Service/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
