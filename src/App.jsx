import "./App.css";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ZX7Speaker from "./components/ZX7Speaker";
import ZX9Speaker from "./components/ZX9Speaker";
import { Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import FooterSection from "./components/FooterSection";
import YX1Earphones from "./components/YX1Earphones";


function App() {
  return (
    <>
      <div className="w-full min-h-screen">
        <NavBar />
        <HeroSection/>
        <Cards/>
        <YX1Earphones/>
        <FooterSection/>
        
        
        {/* <ZX9Speaker/>
        <ZX7Speaker/> */}
        <div className="Router__wrapper">
          <Routes>
            <Route path="/Home" element={<Homepage/>}/>
            <Route path="/Headphones" element={<Headphones/>}/>
            <Route path="/Speakers" element={ <Speakers/>}/>
            <Route path="/Earphones" element={<Earphones/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
