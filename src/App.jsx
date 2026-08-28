// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
// import Lenis from "lenis";

// import Navbar from "./components/Navbar.jsx";
// import Home from "./Pages/Home.jsx";
// import TopBar from "./components/TopBar.jsx"; 
// import About from "./Pages/About.jsx"; // Capitalized 'About' for React standards
// import Guidelines from "./Pages/Guidelines.jsx";
// import Committee from "./Pages/Committee.jsx";
// import CallForPapers from "./Pages/CallForPaper.jsx"; 
// import Speakers from "./Pages/Speakers.jsx";
// import Tracks from "./Pages/Tracks.jsx";
// import ImportantDates from "./Pages/ImportantDates.jsx";
// import Venue from "./Pages/Venue.jsx";
// import Contact from "./Pages/contact.jsx";
// import Registration from "./Pages/Registration";

// function App() {
  
//   // Premium Smooth Scroll (Lenis) Setup
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2, // Scroll speed. Innum slow aaganum na increase pannunga (e.g., 1.5)
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Butter smooth curve
//       smoothWheel: true,
//       touchMultiplier: 2, // Mobile touch scroll speed
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     // Page close aagumbothu memory clean aaga
//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <div className="overflow-x-hidden w-full"> {/* Overflow hide panna added wrapper */}
//       <BrowserRouter>
//         {/* NAVBAR */}
//         <Navbar />

//         {/* PAGES */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/TopBar" element={<TopBar />} />
//           <Route path="/guidelines" element={<Guidelines />} />
//           <Route path="/registration" element={<Registration />} />
//           {/* <Route path="/about" element={<About />} />  */}
//           <Route path="/committee" element={<Committee />} />
//           <Route path="/call-for-papers" element={<CallForPapers />} />
//           <Route path="/speakers" element={<Speakers />} />
//           <Route path="/tracks" element={<Tracks />} />
//           <Route path="/important-dates" element={<ImportantDates />} />
//           <Route path="/venue" element={<Venue />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/registration" element={<Registration />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import TopBar from "./components/TopBar.jsx";
import About from "./Pages/About.jsx";
import Guidelines from "./Pages/Guidelines.jsx";
import ReviewProcess from "./Pages/ReviewProcess.jsx";
import Committee from "./Pages/Committee.jsx";
import CallForPapers from "./Pages/CallForPaper.jsx";
import Speakers from "./Pages/Speakers.jsx";
import Tracks from "./Pages/Tracks.jsx";
import ImportantDates from "./Pages/ImportantDates.jsx";
import Venue from "./Pages/Venue.jsx";
import Contact from "./Pages/contact.jsx";
import Registration from "./Pages/Registration.jsx";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden w-full">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/TopBar" element={<TopBar />} />
          <Route path="/guidelines" element={<Guidelines />} />

          {/* Registration */}
          <Route path="/registration" element={<Registration />} />

          <Route path="/committee" element={<Committee />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/review-process" element={<ReviewProcess />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;