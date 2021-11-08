import React from 'react'
import "../../Styles/Create.css"
import Upload from "../../assests/upload.png"
import {Button} from "reactstrap"

import Pic from "../../assests/react.jpg"
const Create = () => {
    return (
        <div className="create-wrapper" >
            <div className="create-form-div">
                <form>
                    <label>Create a new NFT</label> <br/>
                    <a href=""><img  src={Upload}/></a> <br/>
                    <label>Name or  Title</label> <br/>
                    <input id="input" type="text"/><br/>
                    <label>Creator</label> <br/>
                    <input id="input" type="text"/> <br/>
                     <label>Description</label> <br/>
                    <input id="input" type="text"/><br/>
                    <label>Tags</label> <br/>
                    <input id="input" type="text"/><br/>
                    <Button>Mint NFT</Button>
                </form>
            </div>
            <div className="create-pic">
                <img src={Pic}/>
            </div>
        </div>
    )
}

export default Create
