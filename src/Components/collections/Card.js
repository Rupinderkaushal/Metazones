import React from 'react'
import "../../Styles/Card.css"
const Card = ({pic,title,text}) => {
    return (
        <div>
             <div>
              <div id="card-results">
                  <img src={pic}/>
              </div>
                <h4>{title}</h4>
                <label>{text}</label>
              </div>
        </div>
    )
}

export default Card
