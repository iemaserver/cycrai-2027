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

import KeynoteSpeakers from "./Pages/KeynoteSpeakers.jsx";
import Speakers from "./Pages/Speakers.jsx";
import Tracks from "./Pages/Tracks.jsx";
import ImportantDates from "./Pages/ImportantDates.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Venue from "./Pages/Venue.jsx";
import Contact from "./Pages/contact.jsx";
import Registration from "./Pages/Registration.jsx";

function App() {
  /* =========================================================
     PREMIUM SMOOTH SCROLL — LENIS
  ========================================================= */
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
        {/* =====================================================
            NAVBAR
        ===================================================== */}
        <Navbar />

        {/* =====================================================
            ROUTES
        ===================================================== */}
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* TOP BAR */}
          <Route path="/TopBar" element={<TopBar />} />

          {/* AUTHOR / PAPER INFORMATION */}
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/review-process" element={<ReviewProcess />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/important-dates" element={<ImportantDates />} />

          {/* REGISTRATION */}
          <Route path="/registration" element={<Registration />} />

          {/* COMMITTEE */}
          <Route path="/committee" element={<Committee />} />

          {/* =====================================================
              SPEAKERS
              Keynote Speakers = new dedicated page
          ===================================================== */}
          <Route
            path="/keynote-speakers"
            element={<KeynoteSpeakers />}
          />

          {/* =====================================================
              PROGRAM
              Existing Speakers.jsx is being used as Program page
          ===================================================== */}
          <Route path="/speakers" element={<Speakers />} />

          {/* TRACKS */}
          <Route path="/tracks" element={<Tracks />} />

          {/* =====================================================
              GALLERY
          ===================================================== */}
          <Route path="/gallery" element={<Gallery />} />

          {/* VENUE */}
          <Route path="/venue" element={<Venue />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;