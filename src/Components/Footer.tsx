import {Link} from "react-router-dom"

export default function Footer () {
    return (
        <div className="cont-footer">
            <div className="cont-footer-1">
                <h2 className="footer-title">Sign up and Scoot off today</h2>
                <div className="footer-elm">
                    <img src="src\assets\images\appstore.png"/>
                    <img src="src\assets\images\googleplay.png"/>
                </div>
            </div>
            <div className="cont-footer-2">
            <Link to="/"><p className="navbar-text-footer">scoot</p> </Link> 
                <div className="nav-footer">
                    <ul className="nav-footer-elm">
                        <Link to="/About"><li className="navbar-elem">About</li></Link>
                        <Link to="/About"><li className="navbar-elem">Location</li></Link>
                        <Link to="/About"><li className="navbar-elem">Careers</li></Link>
                    </ul>
                </div>
                <div className="footer-social">
                    <img src="src\assets\images\facebook-icon.png"/>
                    <img src="src\assets\images\twitter-icon.png"/>
                    <img src="src\assets\images\instagram-icon.png"/>
                </div>
            </div>
        </div>
    )
}