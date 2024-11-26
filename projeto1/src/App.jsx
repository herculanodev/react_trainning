import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Error404 from "./pages/Error404";
import Layout from "./pages/Layout";

 
 function App(){
 return(
  <BrowserRouter>
    <Routes>
    <Route index element={<Layout/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/perfil" element={<Perfil/>}/>
    <Route path="/login" element={<Login />}/>
  <Route path="*" element={<Error404/>}/>



    


    </Routes>
  
  </BrowserRouter>
  
  
  
 )


}

export default App;