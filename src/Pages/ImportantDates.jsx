import {
  FaCalendarPlus,
  FaFileUpload,
  FaCheckCircle,
  FaUserCheck,
  FaFileAlt,
  FaMicrophoneAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";
import Footer from "../components/Footer";

const dates = [
  {
    icon: <FaCalendarPlus />,
    date: "15 December 2026",
    title: "Full Paper Submission Starts",
    badge: "IMPORTANT",
  },
  {
    icon: <FaFileUpload />,
    date: "15 March 2027",
    title: "Full Paper Submission Deadline",
    badge: "DEADLINE",
  },
  {
    icon: <FaCheckCircle />,
    date: "15 June 2027",
    title: "Acceptance Notification",
    badge: "RESULT",
  },
  {
    icon: <FaUserCheck />,
    date: "10 August 2027",
    title: "Author Registration Deadline",
    badge: "REGISTRATION",
  },
  {
    icon: <FaFileAlt />,
    date: "28 August 2027",
    title: "Camera Ready Submission",
    badge: "FINAL",
  },
  {
    icon: <FaMicrophoneAlt />,
    date: "29–30 September 2027",
    title: "Conference Dates",
    badge: "EVENT",
  },
];

export default function ImportantDates() {
  return (
    <>
      {/* =========================================================
          IMPORTANT DATES PAGE
      ========================================================= */}

      <section
        id="dates"
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#F7FAFF]
          scroll-mt-24
        "
      >

        {/* =====================================================
            DARK NAVY HERO
        ====================================================== */}

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

          {/* Soft blue glow */}

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

          {/* HERO CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
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
              Important

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
                Dates
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
              Important deadlines and key milestones for CYCRAI 2027.
            </p>

          </motion.div>
        </div>


        {/* =====================================================
            LIGHT CONTENT AREA
        ====================================================== */}

        <div
          className="
            relative
            bg-gradient-to-b
            from-white
            via-[#F8FBFF]
            to-[#F1F6FD]
            px-5
            py-14
            sm:px-6
            sm:py-16
            lg:px-8
            lg:py-20
          "
        >

          {/* Soft background glow */}

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


          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-6xl
            "
          >

            


            {/* =================================================
                NEW DATE REPRESENTATION
            ================================================== */}

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
                  BOX HEADER
              ================================================== */}

              <div
                className="
                  px-7
                  pt-8
                  sm:px-9
                  sm:pt-10
                  md:px-12
                  md:pt-11
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
                  Submission Timeline
                </h3>

                <div
                  className="
                    mt-4
                    h-[2px]
                    w-full
                    bg-[#E2E8F0]
                  "
                />

              </div>


              {/* =================================================
                  TIMELINE
              ================================================== */}

              <div
                className="
                  px-7
                  pb-8
                  pt-2
                  sm:px-9
                  sm:pb-9
                  md:px-12
                  md:pb-10
                "
              >

                <div
                  className="
                    relative
                    pl-7
                    sm:pl-8
                  "
                >

                  {/* Vertical line */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      top-0
                      w-[3px]
                      bg-[#DCE7F5]
                    "
                  />


                  {/* Date Rows */}

                  {dates.map((item, index) => (

                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                      }}
                      className={`
                        relative
                        flex
                        min-h-[76px]
                        flex-col
                        justify-center
                        gap-2
                        py-5
                        sm:min-h-[78px]
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        sm:gap-8
                        ${
                          index !== dates.length - 1
                            ? "border-b border-dashed border-[#DCE3EB]"
                            : ""
                        }
                      `}
                    >

                      {/* Timeline dot */}

                      <div
                        className="
                          absolute
                          -left-[35px]
                          top-1/2
                          h-3
                          w-3
                          -translate-y-1/2
                          rounded-full
                          bg-[#075DB8]
                          ring-4
                          ring-[#E8F1FF]
                        "
                      />


                      {/* =================================================
                          LEFT SIDE
                      ================================================== */}

                      <div
                        className="
                          flex
                          min-w-0
                          items-center
                          gap-4
                        "
                      >

                        {/* Icon */}

                        <div
                          className="
                            hidden
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#E8F1FF]
                            text-[#075DB8]
                            sm:flex
                          "
                        >
                          {item.icon}
                        </div>


                        {/* Title */}

                        <h4
                          className="
                            text-base
                            font-bold
                            leading-7
                            text-[#172554]
                            sm:text-lg
                            md:text-xl
                          "
                        >
                          {item.title}
                        </h4>

                      </div>


                      {/* =================================================
                          RIGHT SIDE
                      ================================================== */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          gap-4
                          pl-0
                          sm:justify-end
                          sm:pl-4
                        "
                      >

                        {/* Badge */}

                        <span
                          className="
                            rounded-full
                            bg-[#EFF6FF]
                            px-3
                            py-1
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[1.5px]
                            text-[#075DB8]
                          "
                        >
                          {item.badge}
                        </span>


                        {/* Date */}

                        <p
                          className="
                            whitespace-nowrap
                            text-base
                            font-bold
                            leading-7
                            text-[#075DB8]
                            sm:text-lg
                            md:text-xl
                          "
                        >
                          {item.date}
                        </p>

                      </div>

                    </motion.div>

                  ))}

                </div>

              </div>

            </motion.div>


            {/* =================================================
                CONFERENCE HIGHLIGHT
            ================================================== */}

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
              className="mt-8"
            >

              <div
                className="
                  rounded-[16px]
                  border
                  border-[#BFDBFE]
                  bg-[#F5F9FF]
                  p-7
                  sm:p-9
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    items-center
                    gap-5
                    text-center
                    sm:flex-row
                    sm:text-left
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
                      text-xl
                      text-white
                    "
                  >
                    <FaMicrophoneAlt />
                  </div>


                  <div className="flex-1">

                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[#075DB8]
                      "
                    >
                      Conference Event
                    </p>

                    <h3
                      className="
                        mt-1
                        text-2xl
                        font-bold
                        text-[#172554]
                        md:text-3xl
                      "
                    >
                      CYCRAI 2027
                    </h3>

                    <p
                      className="
                        mt-2
                        text-base
                        font-semibold
                        leading-7
                        text-[#334155]
                      "
                    >
                      29–30 September 2027
                    </p>

                  </div>


                  <div
                    className="
                      rounded-full
                      bg-[#E8F1FF]
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-[#075DB8]
                    "
                  >
                    New Town, Kolkata
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