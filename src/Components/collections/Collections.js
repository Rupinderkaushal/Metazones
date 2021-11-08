import React from 'react'
import "../../Styles/Collection.css"
const Collections = () => {
    return (
        <div className="collection-div">
            <div className="col-text">
                <h4>My Collection</h4>
                <p>4 NFTs in collection</p>
            </div>
            <div id="result-card">
              <div>
              <div id="dogs-result"></div>
                <h4>Title 1</h4>
                <label>Creator 1</label>
              </div>
              <div>
              <div id="dogs-result"></div>
                <h4>Title 1</h4>
                <label>Creator 1</label>
              </div>
               <div>
               <div id="dogs-result"></div>
                <h4>Title 1</h4>
                <label>Creator 1</label>
               </div>
               <div>
               <div id="dogs-result"></div>
                <h4>Title 1</h4>
                <label>Creator 1</label>
               </div>
            </div>
        </div>
    )
}

export default Collections
