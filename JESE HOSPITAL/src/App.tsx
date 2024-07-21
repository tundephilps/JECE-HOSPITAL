import "./App.css";
import Achieve from "./components/Achieve";
import Blog from "./components/Blog";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Body4 from "./components/Body4";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Status from "./components/Status";
import Testimonials from "./components/Testimonials";
import Youtube from "./components/Youtube";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
