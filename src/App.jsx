import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.componnent";
import UserProfile from "./components/UserProfile";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import FAQPage from "./pages/FAQ.page";
import About_Us from "./pages/About-Us.page"
import Contact_Us from "./pages/Contact-Us.page"

function App() {
  return (

    <div>
      {/* Navbar */}
      <NavbarComponent />
      {/* Wrapper */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq"  element ={<FAQPage />} />
          <Route path="/about-us" element={<About_Us />} />
          <Route path="/contact-us" element={<Contact_Us />} />
        </Routes>
      
        {/* <UserProfile />  */}
      </div>
      {/* Footer */}

      <FooterComponent />
    </div>
  );
}
export default App;

// Routes
//  /
//  /faq
//  /about-us
//  /contact-us