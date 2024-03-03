import "./App.css";

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import RootLayout from "./layout/RootLayout";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#fafafa]">
      
        <div className="Router__wrapper">
          <Routes>
            <Route path="/"  element={<RootLayout />}>
              <Route path="/Home"  element={<Homepage />} />
              <Route path="/Headphones" element={<Headphones />} />
              <Route path="/Speakers" element={<Speakers />} />
              <Route path="/Earphones" element={<Earphones />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
