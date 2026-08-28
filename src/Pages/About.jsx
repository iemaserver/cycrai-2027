import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Globe,
  Building2,
  Network,
  ShieldCheck,
} from "lucide-react";

export default function AboutSection() {
  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#020817] min-h-screen pt-6 pb-24">

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Background Glows */}
        <div
          className="
            absolute
            -top-40
            left-0
            w-[550px]
            h-[550px]
            bg-cyan-500/20
            blur-[170px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            top-1/3
            right-[-150px]
            w-[500px]
            h-[500px]
            bg-blue-600/20
            blur-[170px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-[-200px]
            left-1/3
            w-[450px]
            h-[450px]
            bg-cyan-500/10
            blur-[160px]
            rounded-full
          "
        />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* =====================================================
              HERO CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
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
              <Globe size={16} />

              CYCRAI 2027
            </span>


            {/* Main Heading */}
            <h1
              className="
                mt-8

                text-5xl
                md:text-7xl

                font-black

                leading-tight

                text-white
              "
            >
              About

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
                CYCRAI 2027
              </span>
            </h1>

          </motion.div>


          {/* =====================================================
              CONFERENCE INTRODUCTION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}

            className="
              mt-20
              w-full
              max-w-6xl
              mx-auto
            "
          >

            {/* Conference Card */}
            <div
              className="
                group
                relative
                overflow-hidden

                rounded-[30px]

                border
                border-cyan-400/20

                bg-white/5
                backdrop-blur-2xl

                p-8
                md:p-10

                transition-all
                duration-500

                hover:border-cyan-400/40
                hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
                hover:-translate-y-2
              "
            >

              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition
                  duration-500

                  bg-gradient-to-br
                  from-cyan-500/10
                  via-transparent
                  to-blue-500/5

                  pointer-events-none
                "
              />

              <div className="relative z-10">

                {/* Card Heading */}
                <div className="flex items-center gap-4 mb-7">

                  <div
                    className="
                      w-14
                      h-14
                      shrink-0

                      rounded-2xl

                      bg-cyan-500/10

                      border
                      border-cyan-400/20

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <ShieldCheck
                      size={27}
                      className="text-cyan-300"
                    />
                  </div>


                  <div>

                    <p
                      className="
                        text-cyan-400
                        text-xs
                        uppercase
                        tracking-[3px]
                      "
                    >
                      Conference Overview
                    </p>

                    <h2
                      className="
                        mt-1
                        text-2xl
                        md:text-3xl
                        font-bold
                        text-white
                      "
                    >
                      About CYCRAI 2027
                    </h2>

                  </div>

                </div>


                {/* First Paragraph */}
                <p
                  className="
                    text-slate-300
                    text-base
                    md:text-lg
                    leading-8
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


                {/* Second Paragraph */}
                <p
                  className="
                    mt-6

                    text-slate-400

                    text-base
                    md:text-lg

                    leading-8
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


                {/* Bottom Accent */}
                <div
                  className="
                    mt-8

                    h-[2px]
                    w-16

                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500

                    group-hover:w-28

                    transition-all
                    duration-500
                  "
                />

              </div>

            </div>

          </motion.div>


          {/* =====================================================
              ABOUT THE INSTITUTION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}

            className="
              mt-12
              w-full
              max-w-6xl
              mx-auto
            "
          >

            {/* Institution Card */}
            <div
              className="
                group
                relative
                overflow-hidden

                rounded-[30px]

                border
                border-cyan-400/20

                bg-white/5
                backdrop-blur-2xl

                p-8
                md:p-10

                transition-all
                duration-500

                hover:border-cyan-400/40
                hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
                hover:-translate-y-2
              "
            >

              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition
                  duration-500

                  bg-gradient-to-br
                  from-cyan-500/10
                  via-transparent
                  to-blue-500/5

                  pointer-events-none
                "
              />

              <div className="relative z-10">

                {/* Institution Heading */}
                <div className="flex items-center gap-4 mb-7">

                  <div
                    className="
                      w-14
                      h-14
                      shrink-0

                      rounded-2xl

                      bg-cyan-500/10

                      border
                      border-cyan-400/20

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Building2
                      size={27}
                      className="text-cyan-300"
                    />
                  </div>


                  <div>

                    <p
                      className="
                        text-cyan-400
                        text-xs
                        uppercase
                        tracking-[3px]
                      "
                    >
                      Our Institution
                    </p>

                    <h2
                      className="
                        mt-1

                        text-2xl
                        md:text-3xl

                        font-bold

                        text-white
                      "
                    >
                      About the Institution
                    </h2>

                  </div>

                </div>


                {/* =================================================
                    INSTITUTION PARAGRAPH 1
                ================================================== */}

                <p
                  className="
                    text-slate-300

                    text-base
                    md:text-lg

                    leading-8
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


                {/* =================================================
                    INSTITUTION PARAGRAPH 2
                ================================================== */}

                <p
                  className="
                    mt-6

                    text-slate-400

                    text-base
                    md:text-lg

                    leading-8
                  "
                >
                  Spread across a sprawling, state-of-the-art campus in New
                  Town, Kolkata, UEM offers modern laboratories, dedicated
                  research centres, a fully digitised library, and innovation
                  hubs that foster entrepreneurial thinking and real-world
                  problem solving.
                </p>


                {/* =================================================
                    INSTITUTION PARAGRAPH 3
                ================================================== */}

                <p
                  className="
                    mt-6

                    text-slate-400

                    text-base
                    md:text-lg

                    leading-8
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


                {/* =================================================
                    GLOBAL COLLABORATION
                ================================================== */}

                <div
                  className="
                    mt-8

                    rounded-2xl

                    border
                    border-cyan-400/10

                    bg-[#020817]/50

                    p-6
                  "
                >

                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <div
                      className="
                        w-12
                        h-12
                        shrink-0

                        rounded-xl

                        bg-blue-500/10

                        border
                        border-blue-400/20

                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Network
                        size={23}
                        className="text-cyan-300"
                      />
                    </div>


                    {/* Text */}
                    <p
                      className="
                        text-slate-400

                        text-base
                        md:text-lg

                        leading-8
                      "
                    >
                      With a distinguished faculty and strong global
                      collaborations, UEM maintains active partnerships with
                      leading international universities, research
                      organisations, and technology enterprises.

                      <span className="text-slate-300">
                        {" "}CYCRAI 2027 embodies UEM's vision: a global
                        platform where academia and industry converge to shape
                        the future of technology.
                      </span>
                    </p>

                  </div>

                </div>


                {/* Bottom Accent */}
                <div
                  className="
                    mt-8

                    h-[2px]
                    w-16

                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500

                    group-hover:w-28

                    transition-all
                    duration-500
                  "
                />

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </>
  );
}