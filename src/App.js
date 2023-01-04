import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login/Login';


function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/home=:id' element={<Home />}>HOME</Route>
        <Route path='/about' element={<About />} >ABOUT US</Route>
        <Route path='/' element={<Login/>} >Login</Route>
  
      </Routes>
   
    </div>
  );
}

export default App;
