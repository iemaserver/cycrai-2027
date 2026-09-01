
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";

import { committeeData } from "../data/committeeData";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

// =============================================================
// COMMITTEE PAGE
// =============================================================

export default function Committee() {
  // =========================================================
  // URL SEARCH PARAMETERS
  // =========================================================

  const [searchParams, setSearchParams] = useSearchParams();


  // =========================================================
  // ALL COMMITTEES
  // =========================================================

  const committees = Object.entries(committeeData);


  // =========================================================
  // GET ACTIVE COMMITTEE FROM URL
  // =========================================================

  const requestedCommittee = searchParams.get("committee");


  // =========================================================
  // FALLBACK TO FIRST COMMITTEE
  // =========================================================

  const activeCommittee =
    committeeData[requestedCommittee]
      ? requestedCommittee
      : committees[0]?.[0] || "organizing";


  // =========================================================
  // CURRENT COMMITTEE DATA
  // =========================================================

  const currentCommittee =
    committeeData[activeCommittee] ||
    committees[0]?.[1];


  // =========================================================
  // SET DEFAULT COMMITTEE IN URL
  // =========================================================

  useEffect(() => {
    if (!requestedCommittee) {
      setSearchParams(
        {
          committee: activeCommittee,
        },
        {
          replace: true,
        }
      );
    }
  }, [
    requestedCommittee,
    activeCommittee,
    setSearchParams,
  ]);


  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[#F7FAFF]
        text-[#172554]
      "
    >

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
<Logo></Logo>
      <section
        className="
          relative
          overflow-hidden

          bg-[#07152F]

          px-5
          pb-16
          pt-12

          sm:px-6
          sm:pb-20
          sm:pt-16

          lg:px-8
          lg:pb-24
          lg:pt-20
        "
      >
       
        {/* ===================================================
            BACKGROUND GLOW - LEFT
        ==================================================== */}

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


        {/* ===================================================
            BACKGROUND GLOW - RIGHT
        ==================================================== */}

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


        {/* ===================================================
            HERO CONTENT
        ==================================================== */}

        <div
          className="
            relative
            z-10

            mx-auto
            max-w-7xl
          "
        >

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
              text-center
            "
          >

            {/* =================================================
                MAIN HEADING
            ================================================== */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
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
                Committee
              </span>

            </motion.h1>


            {/* =================================================
                CURRENT COMMITTEE LABEL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="
                mx-auto
                mt-8
                max-w-3xl
              "
            >

              <div
                className="
                  inline-flex
                  max-w-full

                  items-center
                  gap-3

                  rounded-full

                  border
                  border-[#315783]

                  bg-[#0B2144]

                  px-5
                  py-3

                  text-left
                "
              >

                {/* STATUS DOT */}

                <span
                  className="
                    h-2
                    w-2
                    shrink-0

                    rounded-full

                    bg-[#60A5FA]

                    shadow-[0_0_10px_rgba(96,165,250,0.6)]
                  "
                />


                {/* COMMITTEE NAME */}

                <span
                  className="
                    text-xs
                    font-semibold
                    leading-5
                    text-[#BFDBFE]

                    sm:text-sm
                  "
                >
                  {currentCommittee?.title}
                </span>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          COMMITTEE CONTENT
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden

          bg-gradient-to-b
          from-white
          via-[#F8FBFF]
          to-[#F1F6FD]

          px-4

          pb-24
          pt-12

          sm:px-6
          sm:pt-14

          lg:px-8
          lg:pb-28
          lg:pt-16
        "
      >

        {/* ===================================================
            BACKGROUND GLOW - LEFT
        ==================================================== */}

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


        {/* ===================================================
            BACKGROUND GLOW - RIGHT
        ==================================================== */}

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


        {/* ===================================================
            MAIN CONTENT WRAPPER
        ==================================================== */}

        <div
          className="
            relative
            z-10

            mx-auto
            max-w-7xl
          "
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={activeCommittee}

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: -15,
              }}

              transition={{
                duration: 0.4,
              }}

              className="
                pt-2
                md:pt-4
              "
            >

              {/* =================================================
                  COMMITTEE TITLE
              ================================================== */}

              <div
                className="
                  mb-10
                  text-center

                  md:mb-14
                "
              >

                


                <h2
                  className="
                    mx-auto

                    mt-4

                    max-w-5xl

                    text-3xl
                    font-black
                    leading-tight

                    text-[#172554]

                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  {currentCommittee?.title}
                </h2>


                {/* SMALL BLUE ACCENT */}

                <div
                  className="
                    mx-auto

                    mt-5

                    h-[2px]
                    w-12

                    bg-[#075DB8]
                  "
                />

              </div>


              {/* =================================================
                  COMMITTEE SECTIONS
              ================================================== */}

              <div
                className="
                  space-y-10

                  md:space-y-12
                "
              >

                {currentCommittee?.sections?.map(
                  (section, sectionIndex) => (

                    <motion.div
                      key={`${activeCommittee}-${sectionIndex}`}

                      initial={{
                        opacity: 0,
                        y: 20,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}

                      viewport={{
                        once: true,
                        amount: 0.05,
                      }}

                      transition={{
                        duration: 0.45,
                      }}
                    >

                      {/* =================================================
                          SECTION HEADER
                      ================================================== */}

                      <div
                        className="
                          mb-6

                          overflow-hidden

                          rounded-[16px]

                          border
                          border-[#DCE3EB]

                          border-t-4
                          border-t-[#075DB8]

                          bg-white

                          px-6
                          py-6

                          shadow-[0_5px_20px_rgba(15,23,42,0.03)]

                          md:px-8
                          md:py-7
                        "
                      >

                        <div
                          className="
                            flex
                            items-center

                            gap-4
                          "
                        >

                          {/* =================================================
                              SECTION NUMBER
                          ================================================== */}

                          <div
                            className="
                              flex

                              h-11
                              w-11

                              shrink-0

                              items-center
                              justify-center

                              rounded-xl

                              bg-[#E8F1FF]

                              text-sm
                              font-bold

                              text-[#075DB8]

                              md:h-12
                              md:w-12
                              md:text-base
                            "
                          >
                            {String(
                              sectionIndex + 1
                            ).padStart(2, "0")}
                          </div>


                          {/* =================================================
                              SECTION TITLE
                          ================================================== */}

                          <div
                            className="
                              min-w-0
                            "
                          >

                            


                            <h3
                              className="
                                mt-1

                                text-lg
                                font-bold
                                leading-tight

                                text-[#172554]

                                md:text-2xl
                              "
                            >
                              {section.title}
                            </h3>

                          </div>

                        </div>

                      </div>


                      {/* =================================================
                          MEMBER GRID
                      ================================================== */}

                      <motion.div
                        layout

                        className="
                          grid
                          grid-cols-1

                          gap-5

                          sm:grid-cols-2
                          lg:grid-cols-3
                          xl:grid-cols-4
                        "
                      >

                        {section.members?.map(
                          (member, memberIndex) => (

                            <MemberBox
                              key={`${member.name}-${memberIndex}`}
                              member={member}
                              index={memberIndex}
                            />

                          )
                        )}

                      </motion.div>

                    </motion.div>

                  )
                )}

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </main>
  );
}


// =============================================================
// MEMBER BOX
// =============================================================

function MemberBox({
  member,
  index = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.05,
      }}

      transition={{
        duration: 0.4,
        delay: index * 0.03,
      }}

      whileHover={{
        y: -4,
      }}

      className="
        group

        relative

        overflow-hidden

        rounded-[12px]

        border
        border-[#DCE3EB]

        border-t-4
        border-t-[#075DB8]

        bg-white

        shadow-[0_5px_18px_rgba(15,23,42,0.03)]

        transition-all
        duration-300

        hover:border-[#BFDBFE]

        hover:shadow-[0_12px_30px_rgba(7,93,184,0.10)]
      "
    >

      {/* =====================================================
          MEMBER CONTENT
      ====================================================== */}

      <div
        className="
          flex

          min-h-[190px]

          flex-col
          items-center
          justify-center

          px-6
          py-8

          text-center
        "
      >

        {/* =================================================
            OPTIONAL MEMBER IMAGE
        ================================================== */}

        {member.image && (
          <div
            className="
              mb-5

              h-20
              w-20

              overflow-hidden

              rounded-full

              border-2
              border-[#E8F1FF]

              bg-[#F5F9FF]
            "
          >

            <img
              src={member.image}
              alt={member.name}
              className="
                h-full
                w-full

                object-cover
              "
            />

          </div>
        )}


        {/* =================================================
            MEMBER NAME
        ================================================== */}

        <h3
          className="
            max-w-full

            text-lg
            font-black
            uppercase
            leading-7

            tracking-[-0.2px]

            text-[#075DB8]

            transition-colors
            duration-300

            group-hover:text-[#064F9C]

            sm:text-xl
          "
        >
          {member.name}
        </h3>


        {/* =================================================
            ORANGE ACCENT
        ================================================== */}

        <div
          className="
            mt-5

            h-[2px]
            w-10

            bg-[#F59E0B]
          "
        />


        {/* =================================================
            DESIGNATION
        ================================================== */}

        {member.designation && (
          <p
            className="
              mt-4

              text-sm
              font-semibold
              leading-6

              text-[#475569]
            "
          >
            {member.designation}
          </p>
        )}


        {/* =================================================
            POSITION
        ================================================== */}

        {member.position && (
          <p
            className="
              mt-2

              text-xs
              font-bold
              uppercase

              tracking-[1px]

              text-[#64748B]
            "
          >
            {member.position}
          </p>
        )}


        {/* =================================================
            AFFILIATION
        ================================================== */}

        {member.affiliation && (
          <p
            className="
              mt-1

              text-xs
              font-medium
              leading-5

              text-[#64748B]
            "
          >
            {member.affiliation}
          </p>
        )}

      </div>

    </motion.div>
  );
}