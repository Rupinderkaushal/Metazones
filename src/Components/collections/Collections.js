import React from 'react'
import Card from "../collections/Card"
import "../../Styles/Collection.css"
import Pic from "../../assests/react.jpg"
const Collections = () => {
  const cardText =[
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
        <div className="collection-div">
            <div className="col-text">
                <h4>My Collection</h4>
                <p>4 NFTs in collection</p>
            </div>
            <div id="result-card">
              {cardText.map(card =>(
 <Card
 pic={card.pic}
 title={card.title}
 text={card.text}
/>
              ))}
           
            </div>
            
        </div>
    )
}

export default Collections
