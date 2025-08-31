import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.componnent";
import UserProfile from "./components/UserProfile";

function App() {
  return (
   
   <div>
      {/* Navbar */}
        <NavbarComponent/>
      {/* Wrapper */}
        <div className="wrapper">
          <h2>Wrapper</h2>
          <UserProfile/>
        </div>
      {/* Footer */}

      <FooterComponent/>
    </div>
  );
}
export default App;
