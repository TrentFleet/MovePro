import Navbar from "@/components/navbar/navbar";
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import Footer from "./footer";

const LandingPage = () => {
  return ( <div>
   <Navbar />
   <HeroSection />
   <SecondSection />
   <ThirdSection />
   <Footer />
  </div> );
}
 
export default LandingPage;