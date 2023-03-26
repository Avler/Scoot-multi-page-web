
export default function Section1() {
    return(
        <div className="cont-location-section1" >
            <div className="cont-location-elm1">
                <img src="src\assets\images\Locations\section1-map.png"/>
                <button className="btn-location"><span className="btn-location-text">New York</span></button>
                <button className="btn-location"><span className="btn-location-text">London</span></button>
                <button className="btn-location"><span className="btn-location-text">Jakarta</span></button>
                <button className="btn-location"><span className="btn-location-text">Yokohama</span></button>
            </div>
            <div className="cont-location-elm2">
                <h2 className="cont-location-elm2-title">Your City Not Listed?</h2>
                <p className="cont-location-elm2-text">If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                <button className="btn-location-msg">Message Us</button>
            </div>
        </div>
    )
}