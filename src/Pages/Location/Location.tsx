import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Section from "./Section1"
export default function Location() {
    return(
        <div className="cont-location" >
            <Navbar />
            <div className="cont-location-header">
                <h1 className="cont-location-title">Location</h1>
            </div>
            <Section />
            <Footer/>
        </div>
    )
}