import Carousel from "../Components/misc/Carousel";
import Footer from "../Components/misc/Footer";
import JobTrackingLandingPage from "../Components/misc/JobTrackingLandingPage";
import Navbar from "../Components/navbar/Navbar";

export default function Home() {
    return (
        <div className="noscroll">
            <Navbar />
            <Carousel />
            <JobTrackingLandingPage />
            <Footer />
        </div>
    )
}

