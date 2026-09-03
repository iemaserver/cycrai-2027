import Footer from "../components/Footer.jsx";
import { motion } from "framer-motion";
import Logo from "../components/Logo.jsx";
import {
  ArrowRight,
  MapPin,
  University,
} from "lucide-react";

import uem from "../assets/image/uem.jpeg";


/* =========================================================
   UEM KOLKATA CONFERENCE VENUE
   Exact location from the Google Maps link provided
========================================================= */

const UEM_LATITUDE = 22.5601079;
const UEM_LONGITUDE = 88.4898782;


/* =========================================================
   GOOGLE MAP EMBED
   The map is centered tightly around UEM Kolkata
========================================================= */

const UEM_MAP_URL =
  "https://www.google.com/maps?q=22.5601079,88.4898782&z=18&output=embed";


/* =========================================================
   GOOGLE MAP DIRECTIONS
========================================================= */

const UEM_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=22.5601079,88.4898782";


export default function Venue() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FAFF] text-[#172554]">

      {/* =========================================================
          HERO / PAGE HEADING
      ========================================================= */}

      <Logo />

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
              HOST INSTITUTION + LOCATION MAP
              SIDE BY SIDE ON DESKTOP
          ====================================================== */}

          <div
            className="
              grid
              gap-8
              lg:grid-cols-2
              lg:items-stretch
            "
          >


            {/* =================================================
                HOST INSTITUTION CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                flex
                h-full
                flex-col
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
                  flex-1
                  flex-col
                  justify-center
                  p-7
                  text-center
                  sm:p-9
                  lg:p-10
                "
              >

                {/* =================================================
                    ICON
                ================================================== */}

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


                {/* =================================================
                    LABEL
                ================================================== */}

                <p
                  className="
                    mt-6
                    text-xs
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-[#64748B]
                  "
                >
                  Host Institution
                </p>


                {/* =================================================
                    INSTITUTION NAME
                ================================================== */}

                <h2
                  className="
                    mx-auto
                    mt-4
                    max-w-xl
                    text-2xl
                    font-black
                    leading-tight
                    text-[#172554]
                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  Institute of Engineering &amp; Management Kolkata
                </h2>

                <span
                  className="
                    mx-auto
                    mt-3
                    block
                    max-w-xl
                    text-xl
                    font-black
                    leading-tight
                    text-[#075DB8]
                    sm:text-2xl
                  "
                >
                  University of Engineering and Management Kolkata
                </span>


                {/* =================================================
                    DIVIDER
                ================================================== */}

                <div
                  className="
                    mx-auto
                    my-7
                    h-px
                    w-24
                    bg-[#D6E3F5]
                  "
                />


                {/* =================================================
                    ADDRESS
                ================================================== */}

                <div
                  className="
                    mx-auto
                    flex
                    max-w-xl
                    items-start
                    justify-center
                    gap-3
                    text-center
                  "
                >

                  <MapPin
                    size={20}
                    className="
                      mt-1
                      shrink-0
                      text-[#075DB8]
                    "
                  />

                  <p
                    className="
                      text-sm
                      font-semibold
                      leading-7
                      text-[#475569]
                      sm:text-base
                    "
                  >
                    University Area, Plot No. III-B/5,
                    <br />
                    New Town, Action Area – III,
                    <br />
                    Kolkata, West Bengal, India
                  </p>

                </div>


                {/* =================================================
                    IEM WEBSITE
                ================================================== */}

                <a
                  href="https://iem.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mx-auto
                    mt-8
                    inline-flex
                    w-fit
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

            </motion.div>


            {/* =================================================
                LOCATION MAP CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[16px]
                border
                border-[#DCE3EB]
                border-t-4
                border-t-[#075DB8]
                bg-white
                p-5
                sm:p-6
                lg:p-7
              "
            >

              {/* =================================================
                  MAP HEADING
              ================================================== */}

              <div
                className="
                  border-b
                  border-[#DCE3EB]
                  pb-4
                "
              >

                <h3
                  className="
                    text-2xl
                    font-black
                    uppercase
                    tracking-[1px]
                    text-[#075DB8]
                    sm:text-3xl
                  "
                >
                  Location Map
                </h3>

              </div>


              {/* =================================================
                  GOOGLE MAP
                  
                  The map is tightly centered on the UEM
                  Kolkata campus location.
              ================================================== */}

              <div
                className="
                  relative
                  mt-5
                  flex-1
                  overflow-hidden
                  rounded-[14px]
                  border
                  border-[#E2E8F0]
                  bg-[#EAF3FF]
                "
              >

                <iframe
                  title="UEM Kolkata Conference Venue"
                  src={UEM_MAP_URL}
                  className="
                    h-[360px]
                    w-full
                    border-0
                    sm:h-[400px]
                    lg:h-full
                    lg:min-h-[430px]
                  "
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>


              {/* =================================================
                  CONFERENCE VENUE LABEL
              ================================================== */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#F5F9FF]
                  px-4
                  py-3
                "
              >

                <MapPin
                  size={19}
                  className="
                    shrink-0
                    text-[#075DB8]
                  "
                />

                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[1px]
                      text-[#64748B]
                    "
                  >
                    Conference Venue
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-sm
                      font-bold
                      text-[#172554]
                    "
                  >
                    UEM Kolkata
                  </p>
                </div>

              </div>


              {/* =================================================
                  GET DIRECTIONS
              ================================================== */}

              <a
                href={UEM_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-[10px]
                  bg-[#075DB8]
                  px-6
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

                Get Directions

                <ArrowRight size={19} />

              </a>

            </motion.div>

          </div>


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
              mt-10
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

                {/* Location */}

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


                {/* Title */}

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
                    Conference Venue
                  </span>
                </h3>


                {/* Description */}

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-sm
                    leading-7
                    text-[#64748B]
                    sm:text-base
                  "
                >
                  CYCRAI 2027 will be hosted at the University
                  of Engineering and Management Kolkata in
                  New Town, Kolkata.
                </p>


                {/* Buttons */}

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
                    href={UEM_DIRECTIONS_URL}
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
                    University of Engineering and Management
                    Kolkata, University Area, Plot No. III-B/5,
                    New Town, Action Area – III, Kolkata,
                    West Bengal, India
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