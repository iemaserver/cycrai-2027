import Footer from "../components/Footer.jsx";
import { motion } from "framer-motion";
import Logo from "../components/Logo.jsx";
import {
  ArrowRight,
  MapPin,
  University,
} from "lucide-react";

import uem from "../assets/image/uem.jpeg";

export default function Venue() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FAFF] text-[#172554]">

      {/* =========================================================
          HERO / PAGE HEADING
      ========================================================= */}
      <Logo></Logo>
      <section
        className="
          relative
          overflow-hidden
          bg-[#07152F]
          px-5
          pb-20
          pt-14
          sm:px-6
          sm:pb-24
          sm:pt-16
          lg:px-8
          lg:pb-28
          lg:pt-20
        "
      >

        {/* =====================================================
            SOFT BLUE BACKGROUND
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-500/10
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-48
            -right-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-sky-400/10
            blur-[150px]
          "
        />


        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            z-10
            mx-auto
            max-w-5xl
            text-center
          "
        >

          <h1
            className="
              text-5xl
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Conference

            <span
              className="
                block
                bg-gradient-to-r
                from-[#93C5FD]
                via-[#60A5FA]
                to-[#BFDBFE]
                bg-clip-text
                pb-3
                text-transparent
              "
            >
              Venue
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-sm
              font-medium
              leading-7
              tracking-wide
              text-blue-100/80
              sm:text-base
              md:text-lg
            "
          >
            Discover the host institution and conference venue
            for CYCRAI 2027.
          </p>

        </motion.div>

      </section>


      {/* =========================================================
          VENUE CONTENT
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-white
          via-[#F8FBFF]
          to-[#F1F6FD]
          px-5
          py-16
          sm:px-6
          sm:py-20
          lg:px-8
          lg:py-24
        "
      >

        {/* =====================================================
            SOFT BACKGROUND EFFECTS
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#BFDBFE]/20
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -right-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#DBEAFE]/30
            blur-[140px]
          "
        />


        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
          "
        >

          {/* =====================================================
              HOST INSTITUTION
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mb-14
              text-center
              md:mb-16
            "
          >

            {/* Icon */}

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#E8F1FF]
                text-[#075DB8]
              "
            >
              <University size={26} />
            </div>


            {/* Institution Name */}

            <h2
              className="
                mx-auto
                mt-6
                max-w-5xl
                text-2xl
                font-black
                leading-tight
                text-[#172554]
                sm:text-3xl
                md:text-4xl
              "
            >
              Institute of Engineering &amp; Management Kolkata,

              <span
                className="
                  mt-2
                  block
                  text-[#075DB8]
                "
              >
                University of Engineering and Management Kolkata
              </span>
            </h2>


            {/* Description */}

            
          </motion.div>


          {/* =====================================================
              VENUE MAIN BOX
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              overflow-hidden
              rounded-[16px]
              border
              border-[#DCE3EB]
              border-t-4
              border-t-[#075DB8]
              bg-white
            "
          >

            <div
              className="
                grid
                lg:grid-cols-2
              "
            >

              {/* =================================================
                  CAMPUS IMAGE
              ================================================== */}

              <div
                className="
                  p-4
                  sm:p-5
                  lg:p-6
                "
              >

                <div
                  className="
                    h-full
                    overflow-hidden
                    rounded-[12px]
                    bg-[#EAF3FF]
                  "
                >

                  <img
                    src={uem}
                    alt="Institute of Engineering and Management campus"
                    className="
                      aspect-[4/3]
                      h-full
                      w-full
                      object-cover
                    "
                  />

                </div>

              </div>


              {/* =================================================
                  VENUE INFORMATION
              ================================================== */}

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  px-7
                  pb-8
                  pt-2
                  sm:px-9
                  sm:pb-10
                  lg:px-10
                  lg:py-10
                "
              >

                {/* =================================================
                    LOCATION
                ================================================== */}

                <div
                  className="
                    inline-flex
                    w-fit
                    items-center
                    gap-3
                    rounded-full
                    bg-[#EFF6FF]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-[#075DB8]
                  "
                >

                  <MapPin size={18} />

                  <span>
                    New Town, Kolkata, West Bengal, India
                  </span>

                </div>


                {/* =================================================
                    TITLE
                ================================================== */}

                <h3
                  className="
                    mt-7
                    text-3xl
                    font-black
                    leading-tight
                    text-[#172554]
                    md:text-4xl
                  "
                >
                  Welcome to the

                  <span
                    className="
                      mt-2
                      block
                      text-[#075DB8]
                    "
                  >
                    Host Institution
                  </span>
                </h3>


                


                {/* =================================================
                    BUTTONS
                ================================================== */}

                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:flex-wrap
                  "
                >

                  {/* Google Maps */}

                  <a
                    href="https://maps.app.goo.gl/VFN2t1qFxYAxbgB57"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-[#075DB8]
                      px-7
                      py-4
                      text-sm
                      font-bold
                      text-white
                      transition-colors
                      duration-300
                      hover:bg-[#064F9C]
                      sm:text-base
                    "
                  >

                    View on Google Maps

                    <ArrowRight size={19} />

                  </a>


                  {/* IEM Website */}

                  <a
                    href="https://iem.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      border
                      border-[#BFD5F0]
                      bg-[#F5F9FF]
                      px-7
                      py-4
                      text-sm
                      font-bold
                      text-[#075DB8]
                      transition-colors
                      duration-300
                      hover:border-[#075DB8]
                      hover:bg-[#EFF6FF]
                      sm:text-base
                    "
                  >

                    Visit IEM Website

                    <ArrowRight size={19} />

                  </a>

                </div>

              </div>

            </div>

          </motion.div>


          {/* =====================================================
              VENUE INFORMATION STRIP
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mt-10"
          >

            <div
              className="
                overflow-hidden
                rounded-[16px]
                border
                border-[#DCE3EB]
                border-t-4
                border-t-[#075DB8]
                bg-white
              "
            >

              <div
                className="
                  flex
                  flex-col
                  items-center
                  gap-4
                  px-6
                  py-7
                  text-center
                  sm:flex-row
                  sm:text-left
                  md:px-8
                "
              >

                {/* Icon */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#E8F1FF]
                    text-[#075DB8]
                  "
                >
                  <MapPin size={22} />
                </div>


                {/* Information */}

                <div>

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[2px]
                      text-[#64748B]
                    "
                  >
                    Conference Venue
                  </p>

                  <p
                    className="
                      mt-1
                      text-base
                      font-bold
                      leading-7
                      text-[#172554]
                      md:text-lg
                    "
                  >
                    Institute of Engineering &amp; Management, University of Engineering and Management,
                    New Town, Kolkata, West Bengal, India
                  </p>

                </div>

              </div>

            </div>

          </motion.div>


        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />

    </main>
  );
}

