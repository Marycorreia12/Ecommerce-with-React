import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Shops from "./pages/Shops/Shops";
import Gallery from "./pages/Gallery/Gallery";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import './App.css';
import initFontAwesome from "./initFontAwesome";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";

initFontAwesome();

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/shops" element={<Shops/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login/*" element={<Login />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
