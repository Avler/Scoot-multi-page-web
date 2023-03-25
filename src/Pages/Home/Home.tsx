import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";


export default function Home() {
    return (
        <div className="cont-home">
            <Navbar />
            <Header />
            <Section1 />
            <Section2 />
            <Footer />
        </div>
    )
}