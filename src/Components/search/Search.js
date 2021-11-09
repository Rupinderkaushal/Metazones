import React from 'react'
import "../../Styles/Search.css"
import Pic from "../../assests/react.jpg"
import Card from "../collections/Card"
const Search = () => {
  const cardData =[
    {
      pic:Pic,
      title:"Title 1",
      text :"Creator 1"
    },
    {
      pic:Pic,
      title:"Title 2",
      text :"Creator 2"
    },
    {
      pic:Pic,
      title:"Title 3",
      text :"Creator 3"
    },
    {
      pic:Pic,
      title:"Title 4",
      text :"Creator 4"
    },
  ]
 
    return (
        <div className="search">
            <p>Search for NFTs</p> <br/>
            <input type="text" placeholder="Type to start searching..."/><br/>
            <span>100 results for dogs</span>

            <div id="result-card">
              {cardData.map(value =>(
                    <Card
                    pic ={value.pic}
                    title ={value.title}
                    text ={value.text}
                    />
              ))}
            
            
        </div>
        </div>
    )
}

export default Search
