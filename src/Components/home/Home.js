import React from 'react'
import "../../Styles/Home.css"
import { Button } from 'reactstrap';
import Pic from "../../assests/react.jpg"
const Home = () => {
    return (
        <div className="home-wrapper">
            <div className='home-text-div'>
                <h1>Hello Artisan</h1>
                <p>Create, Search, Trade NFTs like a pro</p>
                <Button className="px-5" color="dark">Create</Button>
            </div>
            <div className='home-pic-div'>
                <img src={Pic}/>
            </div>
        </div>
    )
}

export default Home
