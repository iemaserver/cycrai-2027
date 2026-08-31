import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import LogoStrip from "./LogoStrip";
import heroBg from "../assets/image/4K Planet Earth Spinning in Space  Free HD Videos - No Copyright - Free HD videos - no copyright (1080p, h264).mp4";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#010611]
      "
    >

      {/* =========================================================
          BACKGROUND VIDEO
      ========================================================= */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          z-0
        "
      >
        <video
          src={heroBg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            pointer-events-none
            select-none
          "
        />
      </div>


      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          w-full
          min-h-screen
          flex
          flex-col
        "
      >

        {/* =======================================================
            LOGO STRIP
        ======================================================= */}

        <div className="w-full mt-6">
          <LogoStrip />
        </div>


        {/* =======================================================
            HERO TEXT
        ======================================================= */}

        <div
          className="
            flex-1
            text-center
            mt-2
            px-4
          "
        >

          {/* =====================================================
              CONFERENCE NAME
          ===================================================== */}

          <p
            className="
              mt-1

              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl

              font-semibold

              leading-relaxed

              tracking-wide

              text-white

              drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)]
            "
          >
            International Conference on
          </p>


          <p
            className="
              mt-1

              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl

              font-semibold

              leading-relaxed

              tracking-wide

              text-[#27D9F7]

              drop-shadow-[0_0_15px_rgba(20,210,245,0.45)]
            "
          >
            Cyber Security, Cryptography and Responsible AI
          </p>


          {/* =====================================================
              CYCRAI 2027
          ===================================================== */}

          <h1
            className="
              mt-2

              text-4xl
              sm:text-6xl
              md:text-8xl
              lg:text-8xl

              font-black

              tracking-[0.04em]

              leading-none

              text-white

              drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]
            "
          >
            CYCRAI{" "}

            <span
              className="
                bg-gradient-to-r
                from-[#20E0FF]
                via-[#19BDF2]
                to-[#315CFF]

                bg-clip-text
                text-transparent

                drop-shadow-[0_0_25px_rgba(20,190,255,0.4)]
              "
            >
              2027
            </span>
          </h1>


          {/* =====================================================
              DATE & LOCATION
          ===================================================== */}

          <div
            className="
              mt-4

              flex
              flex-col
              sm:flex-row

              items-center
              justify-center

              gap-4
              sm:gap-8

              text-white
            "
          >

            {/* =================================================
                DATE
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <FaCalendarAlt
                className="
                  text-[#16D8F5]
                  text-lg

                  drop-shadow-[0_0_8px_rgba(22,216,245,0.8)]
                "
              />

              <span
                className="
                  text-sm
                  md:text-base

                  font-medium

                  tracking-wide

                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                "
              >
                29 – 30 SEPTEMBER 2027
              </span>

            </div>


            {/* =================================================
                DIVIDER
            ================================================== */}

            <div
              className="
                hidden
                sm:block

                h-6
                w-px

                bg-white/50
              "
            />


            {/* =================================================
                LOCATION
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <FaLocationDot
                className="
                  text-[#16D8F5]
                  text-lg

                  drop-shadow-[0_0_8px_rgba(22,216,245,0.8)]
                "
              />

              <span
                className="
                  text-sm
                  md:text-base

                  font-medium

                  tracking-wide

                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                "
              >
                NEW TOWN, KOLKATA, INDIA
              </span>

            </div>

          </div>


          {/* =====================================================
              CONFERENCE INFORMATION
          ===================================================== */}

          <div
            className="
              mt-5

              mx-auto

              max-w-5xl

              px-4
              sm:px-5

              text-center
            "
          >

            {/* ===================================================
                ORGANIZED BY
            =================================================== */}

            <p
              className="
                text-base
                sm:text-lg
                md:text-xl
                lg:text-2xl

                font-extrabold

                leading-relaxed

                tracking-wide

                text-white

                drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]
              "
            >

              {/* ORGANIZED BY */}

              <span
                className="
                  font-extrabold
                  text-white
                "
              >
                Organized by{" "}
              </span>


              {/* DEPARTMENT */}

              <span
                className="
                  font-extrabold

                  text-[#F4C95D]

                  drop-shadow-[0_2px_8px_rgba(244,201,93,0.25)]
                "
              >
                Department of Computer Science and Engineering
                (Cyber Security)
              </span>


              <br />


              {/* INSTITUTE */}

              <span
                className="
                  font-extrabold

                  text-[#F4C95D]

                  drop-shadow-[0_2px_8px_rgba(244,201,93,0.25)]
                "
              >
                Institute of Engineering &amp; Management Kolkata,
                University of Engineering and Management Kolkata
              </span>

            </p>


            {/* ===================================================
                IEEE XPLORE
            =================================================== */}

            <p
              className="
                mt-3

                text-white

                text-sm
                sm:text-base
                md:text-lg

                font-medium

                leading-relaxed

                drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]
              "
            >

              *(All accepted and presented papers will be published in{" "}

              <span
                className="
                  text-[#F4C95D]

                  font-bold

                  drop-shadow-[0_2px_8px_rgba(244,201,93,0.2)]
                "
              >
                IEEE Xplore
              </span>{" "}

              <span
                className="
                  text-white/90
                "
              >
                (Awaiting Approval)
              </span>
              )

            </p>

          </div>

        </div>


        {/* =======================================================
            MICROSOFT CMT NOTICE
            BOTTOM OF SCREEN
        ======================================================= */}

        <div
          className="
            absolute

            bottom-3
            sm:bottom-4

            left-0
            right-0

            z-20

            mx-auto

            max-w-5xl

            px-5

            text-center
          "
        >

          <p
            className="
              text-white

              text-[10px]
              sm:text-xs
              md:text-sm

              font-medium

              leading-relaxed

              drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]
            "
          >
            *The Microsoft CMT service will be used for managing the
            peer-reviewing process of this conference. This service is
            provided for free by Microsoft and they bear all expenses,
            including costs for Azure cloud services as well as software
            development and support.
          </p>

        </div>

      </div>

    </section>
  );
}