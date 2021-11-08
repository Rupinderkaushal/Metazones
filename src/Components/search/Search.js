import React from 'react'
import "../../Styles/Search.css"
const Search = () => {
    return (
        <div className="search">
            <p>Search for NFTs</p> <br/>
            <input type="text" placeholder="Type to start searching..."/><br/>
            <span>100 results for dogs</span>
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

export default Search
