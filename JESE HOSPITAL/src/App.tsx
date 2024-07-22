import "./App.css";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
