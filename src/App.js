import './App.css';
import React from "react";
import {BrowserRouter,Route,Routes,NavLink} from "react-router-dom"
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
  let open = false;
  const Toggler =(e)=>{
    e.preventDefault()
    const MenuList = document.getElementById("ul-div")
    if(!open){
    MenuList.style.display="block"}
    else{
    MenuList.style.display="none"
    }
    open = !open
  }



  const Cliker =()=>{
    const HamLink = document.getElementById("hamlink")
    HamLink.style.display="block"
  }
  const Closer =(e)=>{
    e.preventDefault()
    const HamLink = document.getElementById("hamlink")
    HamLink.style.display="none"
  }
  
  return (
    <div>
     <BrowserRouter>
     <div id='hamlink'>
       <div onClick={Closer}  className='xdiv'>
        <a href=""> <img src={Xmark}/></a>
       </div>
     <div>
     <ul>
        <li id="ham-li"><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/search" >Search</NavLink></li>
        <li><NavLink to="/create" >Create</NavLink></li>
        <li><NavLink to="/community" >Community</NavLink></li>
        <li><NavLink to="/login" >Login</NavLink></li>
      </ul>
     </div>
     </div>
        <div className="logo-div">
          <div>
            
          </div>
          <div onClick={Cliker} className="ham-div">
           <div></div>
          </div>
    <a  href=""> <img id="logo-pic" src={Logo}/></a>
    
    <a onClick={Toggler}  id="dp-link" href=""><img id="dp-pic" src={Logo} /><img id="down-arrow" src={Down}/>
      <ul id="ul-div">
        
        <li><a style={{textDecoration:'none',color:'black'}} href="">My Profile</a></li>
        <li><a style={{textDecoration:'none',color:'black'}} href="">My Collections</a></li>
        <li><a style={{textDecoration:'none',color:'black'}} href="">My Transactions</a></li>
        
      </ul>
    </a>

        </div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}  />
       <Route path="/create" element={<Create/>}  />
       <Route path="/search" element={<Search/>}/>
       <Route path="/community" element={<Community/>}/>
       <Route path="/feature" element={<Feature/>} />
       <Route path="/login" element={<Login/>} /> 
       <Route path="/collection" element={<Collections/>} />
     </Routes> 
     {/* <Home/>
     <Create/>
     <Search/> */}
     {/* <Collections/> */}
     </BrowserRouter>
    </div>
  );
}

export default App;
