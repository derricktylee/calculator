import Navigationbar from "./components/Navigationbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InterestCalculator from "./pages/InterestCalculator";
import SwitchOffers from "./pages/SwitchOffers";
import Contact from "./pages/Contact";
import Saving from "./pages/Saving";
import CurrentAccount from "./pages/CurrentAccount";
import RegSaver from "./pages/RegSaver";
import FixedSaving from "./pages/FixedSaving";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/saving" element={<Saving />} />
          <Route path="/calculator" element={<InterestCalculator />} />
          <Route path="/switchoffers" element={<SwitchOffers />} />
          <Route path="/saving/currentaccount" element={<CurrentAccount />} />
          <Route path="/saving/regsaver" element={<RegSaver />} />
          <Route path="/saving/fixed" element={<FixedSaving />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
