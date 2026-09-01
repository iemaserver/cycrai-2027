import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FAFF] text-[#172554]">

      {/* =========================================================
          HERO / PAGE HEADING
      ========================================================= */}

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
        {/* Background Glow */}
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Contact

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
              Information
            </span>
          </h1>
        </motion.div>
      </section>

      {/* =========================================================
          CONTACT INFORMATION
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
        {/* Background Glow */}
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

        {/* Main Content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            max-w-4xl
            justify-center
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              w-full
              max-w-2xl
              overflow-hidden
              rounded-2xl
              border
              border-[#DCE3EB]
              border-t-4
              border-t-[#075DB8]
              bg-white
              shadow-[0_20px_60px_rgba(7,93,184,0.08)]
            "
          >
            {/* Card Header */}
            <div
              className="
                px-7
                pb-7
                pt-8
                sm:px-9
                sm:pb-8
                sm:pt-9
                lg:px-10
                lg:pt-10
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#E8F1FF]
                  text-[#075DB8]
                  sm:h-16
                  sm:w-16
                "
              >
                <MessageCircle
                  size={28}
                  strokeWidth={2}
                  className="sm:h-8 sm:w-8"
                />
              </div>

              <h2
                className="
                  mt-6
                  text-3xl
                  font-black
                  tracking-tight
                  text-[#172554]
                  sm:text-4xl
                "
              >
                CYCRAI 2027
              </h2>

              <div
                className="
                  mt-4
                  h-[3px]
                  w-12
                  rounded-full
                  bg-[#F59E0B]
                "
              />
            </div>

            {/* Email */}
            <div
              className="
                px-7
                pb-7
                sm:px-9
                sm:pb-9
                lg:px-10
                lg:pb-10
              "
            >
              <div
                className="
                  rounded-2xl
                  border
                  border-[#DCE3EB]
                  bg-[#F7FAFF]
                  p-5
                  transition-all
                  duration-300
                  hover:border-[#BFD3EA]
                  hover:shadow-[0_10px_30px_rgba(7,93,184,0.06)]
                  sm:p-6
                "
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Email Icon */}
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
                      sm:h-14
                      sm:w-14
                    "
                  >
                    <Mail
                      size={23}
                      strokeWidth={2}
                      className="sm:h-6 sm:w-6"
                    />
                  </div>

                  {/* Email Details */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[#075DB8]
                      "
                    >
                      Email Support
                    </p>

                    <a
                      href="mailto:cycrai@iem.edu.in"
                      className="
                        mt-2
                        block
                        break-all
                        text-base
                        font-bold
                        leading-relaxed
                        text-[#172554]
                        transition-colors
                        duration-200
                        hover:text-[#075DB8]
                        sm:text-lg
                      "
                    >
                      cycrai@iem.edu.in
                    </a>
                  </div>
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