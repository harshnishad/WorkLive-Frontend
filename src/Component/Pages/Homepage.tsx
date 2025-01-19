
import CommentPage from "../Sections/CommentPage";
import Features from "../Sections/Features";
import FunctionPage from "../Sections/FunctionPage";
import HeroSection from "../Sections/HeroSection";
import NavBar from "../Sections/NavBar";
import Footer from "../Sections/Footer";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <CommentPage />
      <FunctionPage />
      <Footer />
    </>
  );
};

export default Homepage;
