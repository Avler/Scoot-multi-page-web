import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

 
export default function Careers() {
    return(
        <div className="cont-careers">
            <Navbar />
            <div className="cont-careers-header">
                <h1 className="cont-careers-title">Careers</h1>
            </div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    )
}