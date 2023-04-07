import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Allproducts from './Allproducts';
import Register from './Register';
import Login from './login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MonNavbar from './MonNavbar';


 
function App() {
  return ( 
    <BrowserRouter>

       <MonNavbar />

     <Routes>
         <Route path="/" element={<Login />} />
          <Route path="/Allproducts" element={<Allproducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
     </Routes>

 </BrowserRouter>



                 
    
  );
}



export default App;
