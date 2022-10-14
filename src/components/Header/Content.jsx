import React from "react";
import "./css.scss"

const Content = ({content}) => {
const {name, image, likes} = content
    return (
        <div className="content">
        
        <div className="content-image">        
        <img src={`./images/${image}`} alt="" />
        </div>
        
        <div className="content-info">
       
        <div className="content-info-left">
                <h5>{name}</h5>
                <h6>{likes}</h6>
        </div>
        </div>
        </div>
)
}

export default Content