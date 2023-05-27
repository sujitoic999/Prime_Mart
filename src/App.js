import "./App.css";
import CartL from "./Cartpage/CartL";
import Navbar from "./Components/Navbar";
import Footer from "./HomePageSujit/FooterSujit/FooterSujit";
import SearchSujit from "./HomePageSujit/NavbarSujit/SearchSujit";
import MainRoutes from "./Pages/MainRoutes";

import { Search } from "./Pages/SingleProductPage.jsx/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
