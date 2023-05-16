import phoneIcon from "../../assets/images/Home/phone-icon.png"
import scooterIcon from "../../assets/images/Home/scooter-icon.png"
import scooterDrivingIcon from "../../assets/images/Home/scooter-driving-icon.png"

export default function Section1() {
    return(
        <div className="cont-section1">
            <div className="cont-section1-elm" >
                <img src={phoneIcon}/>
                <div className="cont-section1-elm-text">
                    <h2 className="section-title">Locate with app</h2>
                    <p className="section-text">Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
                </div>
                
            </div>
            <div className="cont-section1-elm" >
                <img src={scooterIcon}/>
                <div className="cont-section1-elm-text">
                    <h2 className="section-title">Pick your scooter</h2>
                    <p className="section-text">We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
                </div>
                
            </div>
            <div className="cont-section1-elm" >
                <img src={scooterDrivingIcon}/>
                <div className="cont-section1-elm-text">
                    <h2 className="section-title">Enjoy the ride</h2>
                    <p className="section-text">Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
                </div>
                
            </div>
        </div>
    )
}