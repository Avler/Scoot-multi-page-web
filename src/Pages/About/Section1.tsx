import photo1 from "../../assets/images/About/section1-photo1.png"
import photo2 from "../../assets/images/About/section1-photo2.png"
import arrow from "../..//assets/images/Home/arrowpic.svg"
import arrow2 from "../../assets/images/About/arrow-left.png"

export default function Section1() {
    return(
        <div className="cont-section1-about">
            <div className="cont-section1-about-elm" >
                <img src={photo1} alt="error"/>
                <div  className="cont-section1-about-box">
                    <h2 className="cont-section1-about-title">Mobility for the digital era</h2>
                    <p className="cont-section1-about-text">Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
                </div>
                <img src={arrow} className="section-home-arrow"/>
            </div>
            <div className="cont-section1-about-elm2" >
                
                <img src={photo2} alt="error"/>
                <div className="cont-section1-about-box">
                    <h2 className="cont-section1-about-title">Better urban living</h2>
                    <p className="cont-section1-about-text">We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
                </div>
                <img src={arrow2} className="section-home-arrow"/>
                </div>
                
        </div>
    )
}