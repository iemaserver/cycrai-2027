import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Clock3,
  FileText,
  Users,
  Plane,
} from "lucide-react";

import Footer from "../components/Footer";

export default function Contact() {
  // =========================================================
  // SUPPORT AREAS
  // =========================================================

  const supportItems = [
    {
      icon: FileText,
      title: "Paper Submission",
      description:
        "Get assistance with manuscript preparation, submission procedures and paper-related queries.",
    },
    {
      icon: Users,
      title: "Registration Support",
      description:
        "Get guidance regarding author registration, participation and conference formalities.",
    },
    {
      icon: MessageCircle,
      title: "Conference Information",
      description:
        "Find information about the conference program, participation and international delegates.",
    },
    {
      icon: Plane,
      title: "Travel & Accommodation",
      description:
        "Get assistance with travel planning, accommodation and other participation-related information.",
    },
  ];

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
            Get in touch with the CYCRAI 2027 organizing committee
            for conference-related assistance and information.
          </p>

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

        {/* =====================================================
            SOFT BACKGROUND
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
              INTRO
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
              <MessageCircle size={27} />
            </div>


            <h2
              className="
                mt-6
                text-3xl
                font-black
                leading-tight
                text-[#172554]
                sm:text-4xl
                md:text-5xl
              "
            >
              Get in Touch
            </h2>


            {/* Orange accent */}

            <div
              className="
                mx-auto
                mt-5
                h-[2px]
                w-12
                bg-[#F59E0B]
              "
            />


            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                font-semibold
                leading-8
                text-[#334155]
                md:text-lg
              "
            >
              Reach out to the CYCRAI 2027 organizing committee
              for conference-related assistance and information.
            </p>

          </motion.div>


          {/* =====================================================
              MAIN CONTACT GRID
          ====================================================== */}

          <div
            className="
              grid
              gap-8
              lg:grid-cols-2
            "
          >

            {/* ===================================================
                LEFT — CONTACT DETAILS
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
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
                  CARD HEADER
              ================================================== */}

              <div
                className="
                  px-7
                  pt-8
                  sm:px-9
                  sm:pt-9
                  lg:px-10
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
                  "
                >
                  <MessageCircle size={28} />
                </div>


                <h3
                  className="
                    mt-6
                    text-3xl
                    font-black
                    text-[#172554]
                  "
                >
                  CYCRAI 2027
                </h3>

                <div
                  className="
                    mt-4
                    h-[2px]
                    w-12
                    bg-[#F59E0B]
                  "
                />

                <p
                  className="
                    mt-5
                    text-base
                    font-semibold
                    leading-8
                    text-[#334155]
                    md:text-lg
                  "
                >
                  Institute of Engineering &amp; Management, Kolkata
                  welcomes researchers, academicians, industry
                  professionals, students and innovators from around
                  the world to CYCRAI 2027.
                </p>

              </div>


              {/* =================================================
                  EMAIL
              ================================================== */}

              <div className="px-7 pb-7 pt-7 sm:px-9 lg:px-10">

                <div
                  className="
                    rounded-[14px]
                    border
                    border-[#DCE3EB]
                    bg-[#F7FAFF]
                    p-5
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
                      <Mail size={23} />
                    </div>


                    <div className="min-w-0">

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
                          text-[#172554]
                          transition-colors
                          duration-200
                          hover:text-[#075DB8]
                          sm:text-lg
                        "
                      >
                        cycrai@iem.edu.in
                      </a>

                      <p
                        className="
                          mt-2
                          text-sm
                          font-medium
                          text-[#64748B]
                        "
                      >
                        Conference correspondence
                      </p>

                    </div>

                  </div>

                </div>


                {/* =================================================
                    VENUE
                ================================================== */}

                <div
                  className="
                    mt-5
                    rounded-[14px]
                    border
                    border-[#DCE3EB]
                    bg-[#F7FAFF]
                    p-5
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
                      <MapPin size={23} />
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
                        Conference Venue
                      </p>

                      <p
                        className="
                          mt-2
                          text-base
                          font-bold
                          leading-7
                          text-[#172554]
                          sm:text-lg
                        "
                      >
                        Institute of Engineering &amp; Management,
                        Kolkata
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                          leading-7
                          text-[#64748B]
                          sm:text-base
                        "
                      >
                        University Campus, Newtown,
                        <br />
                        Kolkata, West Bengal, India
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>


            {/* ===================================================
                RIGHT — SUPPORT
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
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
                  HEADER
              ================================================== */}

              <div
                className="
                  px-7
                  pt-8
                  sm:px-9
                  sm:pt-9
                  lg:px-10
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
                  "
                >
                  <ShieldCheck size={27} />
                </div>


                <h3
                  className="
                    mt-6
                    text-3xl
                    font-black
                    text-[#172554]
                    md:text-4xl
                  "
                >
                  Need Assistance?
                </h3>

                <div
                  className="
                    mt-4
                    h-[2px]
                    w-12
                    bg-[#F59E0B]
                  "
                />

                <p
                  className="
                    mt-5
                    text-base
                    font-semibold
                    leading-8
                    text-[#334155]
                    md:text-lg
                  "
                >
                  Our organizing committee is available to assist
                  with paper submission, registration, accommodation,
                  presentation guidelines and other
                  conference-related queries.
                </p>

              </div>


              {/* =================================================
                  SUPPORT LIST
              ================================================== */}

              <div
                className="
                  space-y-3
                  px-7
                  pt-7
                  sm:px-9
                  lg:px-10
                "
              >

                {[
                  "Paper Submission Assistance",
                  "Registration Support",
                  "Presentation & Schedule Queries",
                  "Accommodation & Travel Information",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-[12px]
                      border
                      border-[#E2E8F0]
                      bg-[#F7FAFF]
                      px-5
                      py-4
                    "
                  >

                    <div
                      className="
                        h-2.5
                        w-2.5
                        shrink-0
                        rounded-full
                        bg-[#075DB8]
                      "
                    />

                    <span
                      className="
                        text-sm
                        font-bold
                        leading-6
                        text-[#334155]
                        sm:text-base
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>


              {/* =================================================
                  EMAIL BUTTON
              ================================================== */}

              <div
                className="
                  px-7
                  pb-7
                  pt-7
                  sm:px-9
                  lg:px-10
                "
              >

                <a
                  href="mailto:cycrai@iem.edu.in"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#075DB8]
                    px-8
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

                  Email Us

                  <ArrowRight size={20} />

                </a>


                {/* =================================================
                    AVAILABILITY
                ================================================== */}

                <div
                  className="
                    mt-6
                    rounded-[14px]
                    border
                    border-[#DCE3EB]
                    bg-[#F7FAFF]
                    p-5
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

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
                        text-[#075DB8]
                      "
                    >
                      <Clock3 size={21} />
                    </div>


                    <div>

                      <p
                        className="
                          font-bold
                          text-[#172554]
                        "
                      >
                        Support Availability
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-medium
                          leading-6
                          text-[#64748B]
                        "
                      >
                        We aim to respond within{" "}
                        <span className="font-bold text-[#075DB8]">
                          24–48 hours
                        </span>
                        .
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =========================================================
          HOW WE CAN HELP
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

        {/* =====================================================
            SOFT BACKGROUND
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-20
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
            -bottom-40
            -right-40
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
              HEADING
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
              <ShieldCheck size={16} />

              Support Areas
            </div>


            <h2
              className="
                mt-4
                text-3xl
                font-black
                text-[#172554]
                sm:text-4xl
                md:text-5xl
              "
            >
              How We Can{" "}

              <span className="text-[#075DB8]">
                Help You
              </span>
            </h2>


            <div
              className="
                mx-auto
                mt-5
                h-[2px]
                w-12
                bg-[#F59E0B]
              "
            />


            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                font-semibold
                leading-8
                text-[#334155]
                md:text-lg
              "
            >
              Whether you are submitting your first paper or
              joining CYCRAI 2027 as an international delegate,
              our team is ready to help.
            </p>

          </motion.div>


          {/* =====================================================
              SUPPORT BOXES
          ====================================================== */}

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              xl:grid-cols-4
            "
          >

            {supportItems.map((item, index) => {

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

                  <div className="p-7">

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
                      <Icon size={27} />
                    </div>


                    {/* Title */}

                    <h3
                      className="
                        mt-6
                        text-xl
                        font-black
                        text-[#172554]
                      "
                    >
                      {item.title}
                    </h3>


                    {/* Orange line */}

                    <div
                      className="
                        mt-4
                        h-[2px]
                        w-10
                        bg-[#F59E0B]
                      "
                    />


                    {/* Description */}

                    <p
                      className="
                        mt-5
                        text-base
                        font-semibold
                        leading-8
                        text-[#334155]
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#07152F]
          px-5
          py-20
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-28
        "
      >

        {/* Soft Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[350px]
            w-[550px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/10
            blur-[150px]
          "
        />


        <div
          className="
            relative
            z-10
            mx-auto
            max-w-5xl
          "
        >

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
            className="text-center"
          >

            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-blue-500/10
                text-[#93C5FD]
              "
            >
              <MessageCircle size={30} />
            </div>


            <h2
              className="
                mt-7
                text-3xl
                font-black
                text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              We Look Forward to

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-[#93C5FD]
                  via-[#60A5FA]
                  to-[#BFDBFE]
                  bg-clip-text
                  pb-2
                  text-transparent
                "
              >
                Welcoming You
              </span>
            </h2>


            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                font-medium
                leading-8
                text-[#CBD5E1]
                md:text-lg
              "
            >
              Join researchers, academicians, industry experts
              and innovators from across the globe to exchange
              ideas, present impactful research and shape the
              future of Cyber Security, Artificial Intelligence
              and Responsible Innovation.
            </p>


            <a
              href="mailto:cycrai@iem.edu.in"
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#075DB8]
                px-8
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
              Contact Conference Team

              <ArrowRight size={20} />
            </a>

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