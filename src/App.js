import './App.css';
import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './Components/navbar/Navbar';
import Home from "./Components/home/Home";
import Create from './Components/create/Create';
import Search from './Components/search/Search';
import Community from './Components/community/Community';
import Feature from './Components/feature/Feature';
import Login from './Components/login/Login';
import Logo from "./assests/metalogo.png"
import Down from "./assests/down-arrow.png"
function App() {
  return (
    <div>
     <BrowserRouter>
        <div className="logo-div">
    <a href=""> <img id="logo-pic" src={Logo}/></a>
    
    <a id="dp-link" href=""><img id="dp-pic" src={Logo} /><img id="down-arrow" src={Down}/>
      <ul id="ul-div">
        <li>My Profile</li>
        <li>My Collections</li>
        <li>My Transactions</li>
      </ul>
    </a>

        </div>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>} exact />
       <Route path="/create" element={<Create/>} exact />
       <Route path="/search" element={<Search/>}/>
       <Route path="/community" element={<Community/>}/>
       <Route path="/feature" element={<Feature/>} />
       <Route path="/login" element={<Login/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
