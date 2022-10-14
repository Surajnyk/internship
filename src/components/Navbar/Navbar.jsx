import React, {useEffect, useState} from "react"
import { Link, useLocation, useNavigate} from "react-router-dom"
import "../Header/css.scss"

const Navbar = () => {

const location = useLocation()

const goToHome = () => {

        navigate("/")
        
        }

const [activeLink, setActiveLink] = useState("/")

const navigate = useNavigate()

useEffect(() => {
setActiveLink(location.pathname)
},
[location])
          
return (
        <div className="navbar">
        <div className="navbar-logo" onClick={goToHome}>
        <section className="header-top__logo">
        <a href="/" className="header-logo">My Blog</a>
        </section>
        </div>  

        <ul className="navbar-menu">
        <li className={activeLink === '/' ? "active" : ""}>
        <Link to={'/'}>Home</Link>
        </li>
        
        <li className={activeLink === '/contents' ? "active" : ""}>
        <Link to={'/contents'}>Contents</Link>                  
        </li>
        <br />
        
        <div> 
        <li className="navbar">
        <a href="https://www.youtube.com/" className="navbar-item">My Channel</a>
        </li>
        </div>
       
        </ul>            
        </div>
)
}

export default Navbar