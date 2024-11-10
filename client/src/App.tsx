import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestApi from "./pages/TestApi";
import AgeDetection from "./components/AgeDetection";
import NSFWDetection from "./components/NSFWDetection";
import ContentModeration from "./components/ContentModeration";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/test" element={<TestApi />} />
          <Route path="/test/age-detectorApi" element={<AgeDetection />} />
          <Route path="/test/NSFW-Api" element={<NSFWDetection />} />
          <Route
            path="/test/Content-ModerateApi"
            element={<ContentModeration />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
