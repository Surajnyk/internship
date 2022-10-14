import React, {useState, useEffect} from "react"
import contentList from "../../product.json"
import Content from "../../components/Header/Content"
import "./css.scss"

const Contents  = () => {

    const [contents, setContents] = useState([])
    
    useEffect(() => {
    setContents(contentList)

}, 
[])
    
return (
           <div className="container">
            <h1>Top Contents</h1>
           <div className="content-grid">
           
            {contents.map((content) => <Content content={content} />)}
           
           </div>
           </div>
)
}

export default Contents 