import {Link} from "react-router-dom"
import {useState} from "react"

export default function Navbar() {

    const [nav , setNav] = useState(false)
    
    const navBarOn = () => {
        setNav( x => !x)
    }
    return (
        <div className="cont-navbar">
          {nav ?
            <img src="src\assets\images\menu-close.svg" onClick={navBarOn}></img> 
            :
            <img src="src\assets\images\menu.svg" onClick={navBarOn}></img>   
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