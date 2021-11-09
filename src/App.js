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
import Collections from './Components/collections/Collections';
import Logo from "./assests/metalogo.png"
import Down from "./assests/down-arrow.png"
import Xmark from "./assests/x-mark.png"
function App() {
  
  
  return (
    <div>
     <BrowserRouter>
     <div id='hamlink'>
       <div className='xdiv'>
         <img src={Xmark}/>
       </div>
      <ul>
        <li id="ham-li"><a>Home</a></li>
        <li><a>Search</a></li>
        <li><a>Create</a></li>
        <li><a>Community</a></li>
        <li><a>Login</a></li>
      </ul>
     </div>
        <div className="logo-div">
          <div>
            
          </div>
          <div className="ham-div">
           <div></div>
          </div>
    <a href=""> <img id="logo-pic" src={Logo}/></a>
    
    <a   id="dp-link" href=""><img id="dp-pic" src={Logo} /><img id="down-arrow" src={Down}/>
      <ul id="ul-div">
        
        <li><a style={{textDecoration:'none',color:'black'}} href="/collection">My Profile</a></li>
        <li><a style={{textDecoration:'none',color:'black'}} href="/collection">My Collections</a></li>
        <li><a style={{textDecoration:'none',color:'black'}} href="/collection">My Transactions</a></li>
        
      </ul>
    </a>

        </div>
     <Navbar/>
     {/* <Routes>
       {/* <Route path="/" element={<Home/>} exact />
       <Route path="/create" element={<Create/>} exact />
       <Route path="/search" element={<Search/>}/>
       <Route path="/community" element={<Community/>}/>
       <Route path="/feature" element={<Feature/>} />
       <Route path="/login" element={<Login/>} /> }
       <Route path="/collection" element={<Collections/>} />
     </Routes> */}
     <Home/>
     <Create/>
     <Search/>
     <Collections/>
     </BrowserRouter>
    </div>
  );
}

export default App;
