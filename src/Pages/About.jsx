import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Building2,
  Network,
  ShieldCheck,
} from "lucide-react";

export default function AboutSection() {
  return (
    <>
      {/* =========================================================
          ABOUT PAGE
      ========================================================= */}

      <section className="relative min-h-screen overflow-hidden bg-[#F7FAFF]">

        {/* =========================================================
            DARK HEADER / HERO
        ========================================================= */}

        <div
          className="
            relative
            overflow-hidden
            bg-[#07152F]
            px-5
            pb-20
            pt-12
            sm:px-6
            sm:pb-24
            sm:pt-16
            lg:px-8
            lg:pb-28
            lg:pt-20
          "
        >

          {/* Header Content */}

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

            {/* Main Heading */}

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
              About

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
                CYCRAI 2027
              </span>
            </h1>

            {/* Conference Name */}

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                font-semibold
                leading-8
                tracking-wide
                text-blue-100/90
                sm:text-lg
                md:text-xl
              "
            >
              International Conference on Cyber Security,
              Cryptography and Responsible AI
            </p>

          </motion.div>
        </div>


        {/* =========================================================
            LIGHT CONTENT AREA
        ========================================================= */}

        <div
          className="
            relative
            bg-gradient-to-b
            from-white
            via-[#F8FBFF]
            to-[#F1F6FD]
            px-5
            py-12
            sm:px-6
            sm:py-16
            lg:px-8
            lg:py-20
          "
        >

          {/* Soft Background Glows */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-20
              h-[450px]
              w-[450px]
              rounded-full
              bg-[#BFDBFE]/20
              blur-[130px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#DBEAFE]/30
              blur-[140px]
            "
          />


          {/* =======================================================
              MAIN CONTENT
          ======================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-7xl
            "
          >

            {/* =====================================================
                CONFERENCE OVERVIEW
            ===================================================== */}

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
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                mx-auto
                mt-10
                max-w-6xl
              "
            >

              {/* Main White Box */}

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

                {/* Card Header */}

                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    border-b
                    border-[#E2E8F0]
                    px-7
                    py-7
                    sm:flex-row
                    sm:items-center
                    sm:px-9
                    md:px-11
                  "
                >

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#075DB8]
                      text-white
                    "
                  >
                    <ShieldCheck size={27} />
                  </div>

                  <div>

                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[#075DB8]
                      "
                    >
                      Conference Overview
                    </p>

                    <h2
                      className="
                        mt-1
                        text-2xl
                        font-bold
                        text-[#172554]
                        sm:text-3xl
                      "
                    >
                      About CYCRAI 2027
                    </h2>

                  </div>

                </div>


                {/* Card Content */}

                <div
                  className="
                    px-7
                    py-8
                    sm:px-9
                    sm:py-9
                    md:px-11
                    md:py-10
                  "
                >

                  <p
                    className="
                      text-lg
                      font-semibold
                      leading-8
                      text-[#1E3A5F]
                      md:text-xl
                    "
                  >
                    First International Conference on Cybersecurity,
                    Cryptography and Responsible AI (CYCRAI 2027) will be
                    organized by Department of Computer Science and
                    Engineering(Cyber Security), Institute of Engineering &
                    Management Kolkata, under University of Engineering and
                    Management Kolkata, with Technical Co-Sponsorship of the
                    IEEE Kolkata Section and IEEE Computer Society SBC during
                    29th September to 30th September, 2027.
                  </p>

                  <p
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                      md:text-xl
                    "
                  >
                    The event brings together researchers, professionals, and
                    government representatives to share their work, examine
                    key challenges, and explore potential solutions. Keynote
                    addresses, technical sessions, and networking activities
                    are designed to encourage cross-disciplinary dialogue.
                    Papers that are accepted and presented will be submitted
                    for publication in the IEEE Xplore Digital Library.
                  </p>

                </div>

              </div>

            </motion.div>


            {/* =====================================================
                ABOUT INSTITUTION
            ===================================================== */}

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
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                mx-auto
                mt-8
                max-w-6xl
              "
            >

              {/* Main White Box */}

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

                {/* Institution Header */}

                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    border-b
                    border-[#E2E8F0]
                    px-7
                    py-7
                    sm:flex-row
                    sm:items-center
                    sm:px-9
                    md:px-11
                  "
                >

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#075DB8]
                      text-white
                    "
                  >
                    <Building2 size={27} />
                  </div>

                  <div>

                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[#075DB8]
                      "
                    >
                      Our Institution
                    </p>

                    <h2
                      className="
                        mt-1
                        text-2xl
                        font-bold
                        text-[#172554]
                        sm:text-3xl
                      "
                    >
                      About the Institution
                    </h2>

                  </div>

                </div>


                {/* Institution Content */}

                <div
                  className="
                    px-7
                    py-8
                    sm:px-9
                    sm:py-9
                    md:px-11
                    md:py-10
                  "
                >

                  <p
                    className="
                      text-lg
                      font-semibold
                      leading-8
                      text-[#1E3A5F]
                      md:text-xl
                    "
                  >
                    The University of Engineering &amp; Management (UEM),
                    Kolkata stands as one of Eastern India's most distinguished
                    centres of higher education, consistently recognised for
                    its academic rigour, research output, and industry-aligned
                    curriculum. Established under the aegis of the IEM-UEM
                    Group — founded by Padma Bhushan awardee Prof. (Dr.) Satyajit
                    Chakrabarti — the institution has earned top positions in
                    the list of Best Engineering Colleges of West Bengal and
                    ranks highly among leading private universities in India.
                  </p>


                  <p
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                      md:text-xl
                    "
                  >
                    Spread across a sprawling, state-of-the-art campus in New
                    Town, Kolkata, UEM offers modern laboratories, dedicated
                    research centres, a fully digitised library, and innovation
                    hubs that foster entrepreneurial thinking and real-world
                    problem solving.
                  </p>


                  <p
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                      md:text-xl
                    "
                  >
                    UEM offers a comprehensive blend of hardware and software
                    programmes enabling deep expertise in Artificial
                    Intelligence, Machine Learning, IoT, Renewable Energy
                    Systems, Cloud Computing, Cybersecurity, and Astronomy &
                    Astrophysics. The two flagship Centres of Excellence
                    actively drive interdisciplinary research bridging
                    engineering, science, and sustainability.
                  </p>


                  {/* =====================================================
                      GLOBAL COLLABORATION
                  ===================================================== */}

                  <div
                    className="
                      mt-8
                      rounded-2xl
                      border
                      border-[#BFDBFE]
                      bg-[#F5F9FF]
                      p-6
                      sm:p-7
                    "
                  >

                    <div
                      className="
                        flex
                        items-start
                        gap-4
                      "
                    >

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
                        <Network size={23} />
                      </div>


                      <div>

                        <p
                          className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[1.8px]
                            text-[#075DB8]
                          "
                        >
                          Global Collaboration
                        </p>

                        <p
                          className="
                            mt-2
                            text-lg
                            font-semibold
                            leading-8
                            text-[#334155]
                            md:text-xl
                          "
                        >
                          With a distinguished faculty and strong global
                          collaborations, UEM maintains active partnerships
                          with leading international universities, research
                          organisations, and technology enterprises.

                          <span
                            className="
                              font-bold
                              text-[#1E3A5F]
                            "
                          >
                            {" "}
                            CYCRAI 2027 embodies UEM's vision: a global platform
                            where academia and industry converge to shape the
                            future of technology.
                          </span>
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>
        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </>
  );
}