import arrowpic from "../../assets/images/Home/arrowpic.svg"
import section1Photo from "../../assets/images/Careers/section1-photo.png"

export default  function Section1() {
    return(
        <div className="cont-careers-section1">
            <img src={section1Photo}/>
            <div className="cont-careers-sectio1-box">
                <h2 className="cont-careers-elm-title">Care to join our mission?</h2>
                <p className="cont-careers-elm-text">We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
                <button className="btn">Say Hello</button>
            </div>
            <img src={arrowpic} className="section-home-arrow"/>
            
        </div>
    )
}