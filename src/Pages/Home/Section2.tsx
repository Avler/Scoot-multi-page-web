import sectionPhoto1 from "../../assets/images/Home/section-photo1.png"
import sectionPhoto2 from "../../assets/images/Home/section-photo2.png"
import sectionPhoto3 from "../../assets/images/Home/section-photo3.png"
import arrow from "../../assets/images/Home/arrowpic.svg"

export default function Section2() {
    return ( 
        <div className="cont-section2">
            <div className="cont-section2-elm">
                <img src={sectionPhoto1}/>
                <img src={arrow} className="section-home-arrow"/>
                <div className="cont-section2-elm-box">
                    <h2 className="section-title">Easy to use riding telemetry</h2>
                    <p className="section-text">The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                    <button className="btn">Learn More</button>
                </div>
             
            </div>
            <div className="cont-section2-elm">
                <img src={sectionPhoto2}/>
                <img src={arrow} className="section-home-arrow"/>
                <div className="cont-section2-elm-box">
                    <h2 className="section-title">Coming to a city near you</h2>
                    <p className="section-text">Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
                    <button className="btn">Learn More</button>
                </div>
                
            </div>
            <div className="cont-section2-elm">
                <img src={sectionPhoto3}/>
                <img src={arrow} className="section-home-arrow"/>
                <div className="cont-section2-elm-box">
                    <h2 className="section-title">Zero hassle payments</h2>
                    <p className="section-text">Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
                    <button className="btn">Learn More</button>
                </div>
                
            </div>
        </div>
    )
}