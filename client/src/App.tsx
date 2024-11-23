// import "./App.css";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import TestApi from "./pages/TestApi";
// import AgeDetection from "./components/AgeDetection";
// import NSFWDetection from "./components/NSFWDetection";
// import ContentModeration from "./components/ContentModeration";
// import Hero from "./pages/Hero";
// function App() {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navbar />} />
//           <Route path="/test" element={<TestApi />} />
//           <Route path="/test/age-detectorApi" element={<AgeDetection />} />
//           <Route path="/test/NSFW-Api" element={<NSFWDetection />} />
//           <Route
//             path="/test/Content-ModerateApi"
//             element={<ContentModeration />}
//           />
//         </Routes>
//         <Hero />
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import TestApi from "./pages/TestApi";
import AgeDetection from "./components/AgeDetection";
import NSFWDetection from "./components/NSFWDetection";
import ContentModeration from "./components/ContentModeration";
import Hero from "./pages/Hero";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const { pathname } = useLocation(); // Destructure pathname directly

  return (
    <div>
      <Navbar />
      <Routes>
        {!pathname.startsWith("/test") && <Route path="/" element={<Hero />} />}
        <Route path="/test" element={<TestApi />} />
        <Route path="/test/age-detectorApi" element={<AgeDetection />} />
        <Route path="/test/NSFW-Api" element={<NSFWDetection />} />
        <Route
          path="/test/Content-ModerateApi"
          element={<ContentModeration />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
