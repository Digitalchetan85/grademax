import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from "./Components/Home/Home";
import TopMenuBar from "./Components/Includes/TopMenuBar";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/Includes/Footer';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Router>
        <TopMenuBar />
        <Routes>
          <Route path="/grademax" index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/ready-mix-content" element={<Products />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
