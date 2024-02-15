import Navbar from "@/components/navbar/navbar";
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import Footer from "./footer";
import FourthSection from "./fourth-section";

const LandingPage = () => {
  return ( <div>
   <Navbar />
   <HeroSection />
   <SecondSection />
   <ThirdSection />
   <FourthSection />
   <Footer />
  </div> );
}
 
export default LandingPage;