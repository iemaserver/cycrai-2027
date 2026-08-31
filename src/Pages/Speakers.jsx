import { motion } from "framer-motion";
import {
  Mic2,
  CalendarDays,
  Sparkles,
  Users,
  Presentation,
  Clock3,
} from "lucide-react";

import Footer from "../components/Footer";

export default function Speakers() {
  // =========================================================
  // SPEAKER / PROGRAM SECTIONS
  // =========================================================

  const sections = [
    {
      icon: Mic2,
      eyebrow: "KEYNOTE SPEAKERS",
      title: "Invited Speakers",
      heading: "Speaker Announcements",
      gradient: "Coming Soon",
      text:
        "Renowned researchers, IEEE Fellows, industry leaders and innovators will be announced soon. Stay tuned for keynote addresses and distinguished invited talks at CYCRAI 2027.",
    },
    {
      icon: CalendarDays,
      eyebrow: "CONFERENCE PROGRAM",
      title: "Conference Program",
      heading: "Program Details",
      gradient: "Coming Soon",
      text:
        "The complete conference agenda including paper presentations, tutorials, workshops, poster sessions and networking events will be published after final confirmation.",
    },
  ];

  // =========================================================
  // PROGRAM HIGHLIGHTS
  // =========================================================

  const highlights = [
    {
      icon: Presentation,
      title: "Keynote Addresses",
      desc:
        "Thought-provoking keynote sessions from leading researchers and experts working across Cyber Security, Responsible AI and Emerging Technologies.",
    },
    {
      icon: Users,
      title: "Expert Interaction",
      desc:
        "Engage with distinguished speakers, researchers, industry professionals and innovators from academia and industry.",
    },
    {
      icon: Clock3,
      title: "Technical Sessions",
      desc:
        "Explore a carefully curated conference program featuring technical presentations, workshops, tutorials and panel discussions.",
    },
    {
      icon: Sparkles,
      title: "Emerging Ideas",
      desc:
        "Discover new perspectives, breakthrough research and emerging directions shaping the future of secure and responsible technology.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FAFF] text-[#172554]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
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
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Speakers &

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
          SPEAKERS / PROGRAM
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


        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
          "
        >

          {/* =====================================================
              SECTION HEADER
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
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[2.5px]
                text-[#075DB8]
                sm:text-sm
              "
            >
              <Mic2 size={16} />

              Conference Program
            </div>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                text-[#172554]
                sm:text-4xl
                md:text-5xl
              "
            >
              Connect With Experts
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                font-semibold
                leading-8
                text-[#334155]
                md:text-lg
              "
            >
              Discover the speakers, sessions and academic interactions
              planned for CYCRAI 2027.
            </p>

          </motion.div>


          {/* =====================================================
              MAIN SPEAKER / PROGRAM BOXES
          ====================================================== */}

          <div className="space-y-8">

            {sections.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
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
                      grid
                      items-center
                      gap-8
                      p-7
                      sm:p-9
                      md:p-11
                      lg:grid-cols-[auto_1fr]
                      lg:gap-10
                      lg:p-12
                    "
                  >

                    {/* =================================================
                        ICON
                    ================================================== */}

                    <div
                      className="
                        mx-auto
                        flex
                        h-20
                        w-20
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#E8F1FF]
                        text-[#075DB8]
                        lg:mx-0
                      "
                    >
                      <Icon
                        size={38}
                        strokeWidth={1.7}
                      />
                    </div>


                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div
                      className="
                        text-center
                        lg:text-left
                      "
                    >

                      {/* Eyebrow */}

                      <span
                        className="
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
                        {item.eyebrow}
                      </span>


                      {/* Title */}

                      <h3
                        className="
                          mt-5
                          text-3xl
                          font-black
                          text-[#172554]
                          md:text-4xl
                        "
                      >
                        {item.title}
                      </h3>


                      {/* Heading */}

                      <h4
                        className="
                          mt-4
                          text-xl
                          font-bold
                          text-[#075DB8]
                          md:text-2xl
                        "
                      >
                        {item.heading}
                      </h4>


                      {/* Coming Soon */}

                      <div
                        className="
                          mt-2
                          text-2xl
                          font-black
                          text-[#075DB8]
                          md:text-3xl
                        "
                      >
                        {item.gradient}
                      </div>


                      {/* Description */}

                      <p
                        className="
                          mt-5
                          max-w-3xl
                          text-base
                          font-semibold
                          leading-8
                          text-[#334155]
                          md:text-lg
                        "
                      >
                        {item.text}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          WHAT TO EXPECT
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          px-5
          py-20
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-28
        "
      >

        {/* Soft Blue Background */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#DBEAFE]/30
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#BFDBFE]/20
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
              HEADER
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
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[2.5px]
                text-[#075DB8]
                sm:text-sm
              "
            >
              <Sparkles size={16} />

              Program Highlights
            </div>


            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                text-[#172554]
                sm:text-4xl
                md:text-5xl
              "
            >
              More Than

              <span
                className="
                  ml-2
                  text-[#075DB8]
                "
              >
                A Conference
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                font-semibold
                leading-8
                text-[#334155]
                md:text-lg
              "
            >
              Experience meaningful technical discussions, expert
              interaction and emerging research directions.
            </p>

          </motion.div>


          {/* =====================================================
              HIGHLIGHT BOXES
          ====================================================== */}

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
            "
          >

            {highlights.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    duration: 0.5,
                    delay: index * 0.06,
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
                      p-7
                      sm:p-8
                    "
                  >

                    {/* Icon */}

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
                      "
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.7}
                      />
                    </div>


                    {/* Title */}

                    <h3
                      className="
                        mt-6
                        text-2xl
                        font-bold
                        text-[#172554]
                      "
                    >
                      {item.title}
                    </h3>


                    {/* Description */}

                    <p
                      className="
                        mt-4
                        text-base
                        font-semibold
                        leading-8
                        text-[#334155]
                        md:text-lg
                      "
                    >
                      {item.desc}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>


          {/* =====================================================
              BOTTOM ANNOUNCEMENT
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
            className="mt-12"
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
                p-8
                text-center
                sm:p-10
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
                <Sparkles size={26} />
              </div>


              {/* Heading */}

              <h3
                className="
                  mt-6
                  text-2xl
                  font-bold
                  text-[#172554]
                  md:text-3xl
                "
              >
                Stay Tuned for Speaker Announcements
              </h3>


              {/* Description */}

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-3xl
                  text-base
                  font-semibold
                  leading-8
                  text-[#334155]
                  md:text-lg
                "
              >
                Distinguished speakers and the complete conference
                program will be announced soon. Follow CYCRAI 2027
                for the latest updates.
              </p>

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