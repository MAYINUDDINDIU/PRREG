import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login/Login';
import Test from './Pages/Test/Test';
import Reg_information from './Pages/Information/Reg_information';
import Edit from './Pages/Information/Edit';


function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/home=:id' element={<Home />}>HOME</Route>
        <Route path='/edit=:id' element={<Edit />}>Edit</Route>
        <Route path='/about' element={<About />} >ABOUT US</Route>
        <Route path='/info' element={<Reg_information />} >Info</Route>
        <Route path='/' element={<Login/>} >Login</Route>
       <Route path='/test' element={<Test/>} >Test</Route>
      </Routes>
   
    </div>
  );
}

export default App;
