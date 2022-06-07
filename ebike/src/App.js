import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Shops from "./pages/Shops/Shops";
import Gallery from "./pages/Gallery/Gallery";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} exact/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/shops" element={<Shops/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
