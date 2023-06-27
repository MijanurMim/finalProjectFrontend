import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes";
import FooterBlack from "./components/footer/FooterBlack";
import GoToTop from "./components/goToTop/GoToTop";
import ScrollToTop from "./components/scrolToTop/ScrollToTop";
function App() {
  return (
    <Router>
      {/* common  */}

      <ScrollToTop />
      {/* <Navbar /> */}
      <AnimatedRoutes />
      {/* Common */}

      <GoToTop />
      <FooterBlack />
    </Router>
  );
}

export default App;
