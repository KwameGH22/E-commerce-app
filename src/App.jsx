import "./App.css";

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import RootLayout from "./layout/RootLayout";
import XX99MarkIIDetailsPage from "./pages/XX99MarkIIDetailsPage";
import XX99MarkIDetailsPage from "./pages/XX99MarkIDetailsPage";
import YX1DetailsPage from "./pages/YX1DetailsPage";
import XX59DetailsPage from "./pages/XX59DetailsPage";
import ZX9SpeakerDetailsPage from './pages/ZX9SpeakerDetailsPage';
import ZX7SpeakerDetailsPage from './pages/ZX7SpeakerDetailsPage'

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
              <Route path="/XX99MarkII" element={<XX99MarkIIDetailsPage/>} />
              <Route path="/XX99MarkI" element={<XX99MarkIDetailsPage/>} />
              <Route path="/XX59" element={<XX59DetailsPage/>} />
              <Route path="/ZX9" element={<ZX9SpeakerDetailsPage/>} />
              <Route path="/ZX7" element={<ZX7SpeakerDetailsPage/>} />
              <Route path="/YX1" element={<YX1DetailsPage/>} />
              
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
