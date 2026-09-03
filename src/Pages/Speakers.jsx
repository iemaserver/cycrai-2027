import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

import Footer from "../components/Footer";
import Logo from "../components/Logo";

export default function Speakers() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FAFF] text-[#172554]">
      <Logo></Logo>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#07152F]
          px-5
          pb-12
          pt-8
          sm:px-6
          sm:pb-16
          sm:pt-10
          lg:px-8
          lg:pb-20
          lg:pt-14
        "
      >
        {/* Soft Blue Glow */}

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

        {/* Hero Content */}

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
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
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
                pb-1
                text-transparent
              "
            >
              Program
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
            Connect with leading researchers, experts and innovators
            shaping the future of secure and responsible technology.
          </p>
        </motion.div>
      </section>

      {/* =========================================================
          PROGRAM CONTENT
      ========================================================= */}

      <section
        className="
          relative
          min-h-[500px]
          overflow-hidden
          bg-gradient-to-b
          from-white
          via-[#F8FBFF]
          to-[#F1F6FD]
          px-5
          pt-8
          pb-16
          sm:px-6
          sm:pt-10
          sm:pb-20
          lg:px-8
          lg:pt-12
          lg:pb-24
        "
      >
        {/* Soft Background Glows */}

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

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-6xl
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
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
            {/* =================================================
                CARD CONTENT
            ================================================== */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                px-7
                py-14
                text-center
                sm:px-9
                sm:py-16
                md:px-11
                md:py-20
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#E8F1FF]
                  text-[#075DB8]
                "
              >
                <CalendarDays
                  size={38}
                  strokeWidth={1.7}
                />
              </div>

              {/* Eyebrow */}

              <span
                className="
                  mt-6
                  inline-flex
                  rounded-full
                  bg-[#EFF6FF]
                  px-4
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#075DB8]
                  sm:text-xs
                "
              >
                CONFERENCE PROGRAM
              </span>

              {/* Coming Soon */}

              <div
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-[#BFDBFE]
                  bg-[#F5F9FF]
                  px-8
                  py-5
                  text-2xl
                  font-black
                  text-[#075DB8]
                  md:text-3xl
                "
              >
                Coming Soon
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