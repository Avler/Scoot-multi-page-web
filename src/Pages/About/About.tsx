import Navbar from "../../Components/Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function About() {
    return (
        <div className="cont-about" >
            <Navbar />
            <div className="cont-about-header">
                <h1 className="cont-about-title">About</h1>
            </div>
            <Section1 />
            <Section2 />
        </div>
    )
}