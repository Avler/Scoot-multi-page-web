import {Link} from "react-router-dom"
import appstore from "../assets/images/appstore.png"
import googleplay from "../assets/images/googleplay.png"
import facebook from "../assets/images/facebook-icon.png"
import twitter from "../assets/images/twitter-icon.png"
import insta from "../assets/images/instagram-icon.png"

export default function Footer () {
    return (
        <div className="cont-footer">
            <div className="cont-footer-1">
                <h2 className="footer-title">Sign up and Scoot off today</h2>
                <div className="footer-elm">
                    <img src={appstore} className="footer-elm-img"/>
                    <img src={googleplay} className="footer-elm-img2"/>
                </div>
            </div>
            <div className="cont-footer-2">
            <Link to="/"><p className="navbar-text-footer">scoot</p> </Link> 
                <div className="nav-footer">
                    <ul className="nav-footer-elm">
                        <Link to="/About"><li className="navbar-elem">About</li></Link>
                        <Link to="/Location"><li className="navbar-elem">Location</li></Link>
                        <Link to="/Careers"><li className="navbar-elem">Careers</li></Link>
                    </ul>
                </div>
                <div className="footer-social">
                    <img src={facebook}/>
                    <img src={twitter}/>
                    <img src={insta}/>
                </div>
            </div>
        </div>
    )
}