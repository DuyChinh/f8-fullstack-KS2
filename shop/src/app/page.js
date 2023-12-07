import SimpleSlider from "@/components/Slider/Slider"
import Navbar from "@/components/Navbar/Navbar";
import Book from "./book/page";
import Packages from "./packages/page";
import Gallery from "./gallery/page";
import Services from "./services/page";
import Review from "./review/page";
import Contact from "./contact/page";
import Footer from "@/components/Footer/Footer";
const Home = ()=> {
  return (
    <div className="home" id="home">
      <Navbar/>
      <SimpleSlider />
      <Book/>
      <Packages/>
      <Gallery/>
      <Services/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home