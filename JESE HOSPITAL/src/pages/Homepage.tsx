import Achieve from "../components/homepage/Achieve";
import Blog from "../components/homepage/Blog";
import Body1 from "../components/homepage/Body1";
import Body2 from "../components/homepage/Body2";
import Body3 from "../components/homepage/Body3";
import Body4 from "../components/homepage/Body4";
import Hero from "../components/homepage/Hero";
import Status from "../components/homepage/Status";
import Testimonials from "../components/homepage/Testimonials";
import Youtube from "../components/homepage/Youtube";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Body1 />
      <Body2 />
      <Body3 />
      <Body4 />
      <Status />
      <Testimonials />
      <Youtube />
      <Achieve />
      <Blog />
      <Footer />
    </div>
  );
};

export default Homepage;
