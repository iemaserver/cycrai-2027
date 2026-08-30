

import Footer from "../components/Footer.jsx";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  University,
  Sparkles,
} from "lucide-react";

import uem from "../assets/image/uem.jpeg";

export default function Venue() {
  return (
    <div className="bg-[#020817] text-white overflow-hidden">

      {/* =====================================================
          VENUE LANDING SECTION
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#020817]
          min-h-screen
          mt-1
        "
      >

        {/* =================================================
            BACKGROUND GRID
        ================================================== */}

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* =================================================
            CYAN GLOW
        ================================================== */}

        <div
          className="
            absolute
            -top-40
            left-0
            w-[500px]
            h-[500px]
            bg-cyan-500/20
            blur-[160px]
            rounded-full
          "
        />

        {/* =================================================
            BLUE GLOW
        ================================================== */}

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[500px]
            h-[500px]
            bg-blue-600/20
            blur-[170px]
            rounded-full
          "
        />


        {/* =================================================
            MAIN CONTAINER
        ================================================== */}

        <div className="relative max-w-7xl mx-auto px-6">


          {/* =================================================
              VENUE HERO
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-16 md:pt-20"
          >

            {/* Badge */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-500/10
                px-5
                py-2
                text-cyan-300
                text-sm
                tracking-[3px]
                uppercase
              "
            >
              <Sparkles size={16} />

              Conference Venue
            </span>


            {/* Main Heading */}

            <h1
              className="
                mt-4
                text-5xl
                md:text-7xl
                font-black
                leading-tight
                text-white
              "
            >
              Conference

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                Venue
              </span>
            </h1>

          </motion.div>


          {/* =================================================
              HOST INSTITUTION
              PART OF SAME VENUE SECTION
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.8,
            }}
            className="mt-20"
          >

            {/* =================================================
                INSTITUTION HEADER
            ================================================== */}

            <div className="text-center mb-16">

              <h2
                className="
                  text-2xl
                  md:text-4xl
                  font-black
                  text-white
                  leading-tight
                "
              >
                Institute of Engineering &amp; Management Kolkata,

                <span
                  className="
                    block
                    mt-3
                    pb-1
                    leading-normal
                    bg-gradient-to-r
                    from-cyan-300
                    via-sky-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  University of Engineering and Management Kolkata
                </span>
              </h2>


              <p
                className="
                  mt-8
                  max-w-3xl
                  mx-auto
                  text-slate-400
                  text-lg
                  leading-9
                "
              >
                A technology-focused academic environment providing the
                foundation for CYCRAI 2027 to connect research, innovation,
                cybersecurity and responsible artificial intelligence.
              </p>

            </div>


            {/* =================================================
                VENUE INFORMATION
            ================================================== */}

            <div
              className="
                grid
                lg:grid-cols-2
                gap-12
                lg:gap-16
                items-center
              "
            >

              {/* =================================================
                  CAMPUS IMAGE
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="
                  relative
                  rounded-[30px]
                  border
                  border-cyan-400/20
                  bg-white/5
                  backdrop-blur-2xl
                  p-3
                  shadow-[0_0_50px_rgba(34,211,238,.10)]
                  overflow-hidden
                "
              >

                <div className="overflow-hidden rounded-[22px]">

                  <img
                    src={uem}
                    alt="Institute of Engineering and Management campus"
                    className="
                      w-full
                      aspect-[4/3]
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-[1.04]
                    "
                  />

                </div>

              </motion.div>


              {/* =================================================
                  VENUE CONTENT
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
              >

                {/* LOCATION */}

                <div
                  className="
                    inline-flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-500/10
                    text-cyan-300
                    font-semibold
                  "
                >

                  <MapPin size={18} />

                  Newtown, Kolkata, West Bengal, India

                </div>


                {/* TITLE */}

                <h3
                  className="
                    mt-8
                    text-2xl
                  md:text-4xl
                    font-black
                    text-white
                    leading-tight
                  "
                >

                  Welcome to the

                  <span
                    className="
                      block
                      text-cyan-400
                    "
                  >
                    Host Institution
                  </span>

                </h3>


                {/* DESCRIPTION */}

                <p
                  className="
                    mt-7
                    text-slate-400
                    text-lg
                    leading-8
                  "
                >
                  The Institute of Engineering &amp; Management, Kolkata,
                  provides an academic environment focused on engineering,
                  technology, research, innovation and professional development.
                </p>


                <p
                  className="
                    mt-5
                    text-slate-500
                    text-lg
                    leading-8
                  "
                >
                  Located in New Town, the campus provides a suitable setting
                  for bringing together researchers, academicians, students and
                  industry professionals for an international conference such
                  as CYCRAI 2027.
                </p>


                {/* =================================================
                    BUTTONS
                ================================================== */}

                <div
                  className="
                    mt-9
                    flex
                    flex-wrap
                    gap-4
                    mb-10
                  "
                >

                  {/* GOOGLE MAPS */}

                  <a
                    href="https://maps.app.goo.gl/VFN2t1qFxYAxbgB57"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-cyan-400
                      px-7
                      py-4
                      font-bold
                      text-slate-950
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-[0_0_40px_rgba(34,211,238,.45)]
                    "
                  >

                    View on Google Maps

                    <ArrowRight
                      size={19}
                      className="
                        group-hover:translate-x-1
                        transition-transform
                      "
                    />

                  </a>


                  {/* IEM WEBSITE */}

                  <a
                    href="https://iem.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-cyan-400/40
                      bg-white/5
                      backdrop-blur-xl
                      px-7
                      py-4
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:border-cyan-400
                      hover:bg-cyan-500/10
                    "
                  >

                    Visit IEM Website

                    <ArrowRight size={19} />

                  </a>

                </div>

              </motion.div>

            </div>


            {/* =================================================
                BOTTOM LOCATION INFORMATION
            ================================================== */}

            
          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </div>
  );
}