import photo1 from "../../assets/images/About/section2-photo1.png"
import photo2 from "../../assets/images/About/section2-photo2.png"
import photo3 from "../../assets/images/About/section2-photo3.png"



export default function Section2() {
    return (
        <div className="cont-section2-about-box">
            <h2 className="section2-title">Our values</h2>
            <div className="section2-careers-box">
            <div className="cont-section2-about-elm">
                <img src={photo1} alt="section2 phto 2"/>
                <h2 className="cont-section1-about-title">Our tech</h2>
                <p className="cont-section2-about-text">We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
            </div>
            <div className="cont-section2-about-elm">
                <img src={photo2} alt="section2 photo 2"/>
                <h2 className="cont-section1-about-title">Our integrity</h2>
                <p className="cont-section2-about-text">We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
            </div>
            <div className="cont-section2-about-elm">
                <img src={photo3} alt="section2 photo 3"/>
                <h2 className="cont-section1-about-title">Our community</h2>
                <p className="cont-section2-about-text">We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
            </div>
        </div>
        </div>
        
    )
}   