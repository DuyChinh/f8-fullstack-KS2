// "use client"
import SimpleSlider from "@/components/Slider/Slider"
import Navbar from "@/components/Navbar/Navbar";
import Book from "./book/page";
import Packages from "./packages/page";
import Gallery from "./gallery/page";
import Services from "./services/page";
import Review from "./review/page";
import Contact from "./contact/page";
import Footer from "@/components/Footer/Footer";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "./theme";
const Home = ()=> {
  return (
      <main className="home" id="home">
        <Navbar />
        <SimpleSlider />
        <Book />
        <Packages />
        <Gallery />
        <Services />
        <Review />
        <Contact />
        <Footer />
      </main>
  );
}

export default Home