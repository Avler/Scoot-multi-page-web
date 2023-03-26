import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Section1 from "./Section1";

 
export default function Careers() {
    return(
        <div className="cont-careers">
            <Navbar />
            <div className="cont-careers-header">
                <h1 className="cont-careers-title">Careers</h1>
            </div>
            <Section1 />
            <Footer />
        </div>
    )
}