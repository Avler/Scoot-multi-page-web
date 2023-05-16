import {Link} from "react-router-dom"
import {useState} from "react"
import menuClose from "../assets/images/menu-close.svg"
import menu from "../assets/images/menu.svg"

export default function Navbar() {

    const [nav , setNav] = useState(false)
    
    const navBarOn = () => {
        setNav( x => !x)
    }
    return (
        <div className="cont-navbar">
          {nav ?
            <img src={menuClose} onClick={navBarOn}></img> 
            :
            <img src={menu} onClick={navBarOn}></img>   
        } 
           <Link to="/"><p className="navbar-text">scoot</p> </Link> 
           {nav ?
                <div className="nav">
                <ul className="navbar">
                    <Link to="/About"><li className="navbar-elem">About</li></Link>
                    <Link to="/Location"><li className="navbar-elem">Location</li></Link>
                    <Link to="/Careers"><li className="navbar-elem">Careers</li></Link>
                </ul>
                <button className="btn">Get Scootin</button>
            </div>
            :
            <div className="nav-fordesktop">
                <ul className="navbar">
                    <Link to="/"><p className="navbar-text-desktop">scoot</p> </Link> 
                    <Link to="/About"><li className="navbar-elem">About</li></Link>
                    <Link to="/Location"><li className="navbar-elem">Location</li></Link>
                    <Link to="/Careers"><li className="navbar-elem">Careers</li></Link>
                    <button className="btn">Get Scootin</button>
                </ul>
                
            </div>
           } 
        </div>
    )
}