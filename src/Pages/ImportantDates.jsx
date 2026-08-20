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
    <section
      id="dates"
      className="
        relative
        overflow-hidden
        bg-[#020817]
        text-white
        pt-6
        pb-28
        scroll-mt-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Cyan Glow */}

        <div
          className="
            absolute
            -top-40
            -left-40
            w-[550px]
            h-[550px]
            rounded-full
            bg-cyan-500/15
            blur-[180px]
          "
        />

        {/* Blue Glow */}

        <div
          className="
            absolute
            top-[45%]
            -right-40
            w-[550px]
            h-[550px]
            rounded-full
            bg-blue-600/15
            blur-[180px]
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            absolute
            bottom-0
            left-[30%]
            w-[500px]
            h-[350px]
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative max-w-7xl mx-auto px-6">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24 md:mb-32"
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-500/10
              text-cyan-300
              uppercase
              tracking-[3px]
              text-sm
              font-semibold
            "
          >
            <FaCalendarPlus />

            Conference Timeline
          </span>

          {/* Heading */}

          <h1
            className="
              mt-8
              text-5xl
              sm:text-6xl
              md:text-7xl
              font-black
              tracking-tight
              leading-none
              text-white
            "
          >
            Important

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
              Dates
            </span>
          </h1>

          
        </motion.div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div className="relative max-w-5xl mx-auto">

          {/* =================================================
              CENTRAL TIMELINE
          ================================================== */}

          <div
            className="
              absolute
              left-6
              md:left-1/2
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-transparent
              via-cyan-400/50
              to-transparent
              md:-translate-x-1/2
            "
          />

          {/* Timeline Items */}

          {dates.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: isLeft ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="
                  relative
                  grid
                  md:grid-cols-2
                  mb-20
                  md:mb-28
                  last:mb-0
                "
              >

                {/* =================================================
                    TIMELINE NODE
                ================================================== */}

                <div
                  className="
                    absolute
                    left-0
                    md:left-1/2
                    md:-translate-x-1/2
                    top-0
                    z-20
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      rounded-full
                      bg-[#020817]
                      border
                      border-cyan-400/60
                      text-cyan-300
                      text-lg
                      shadow-[0_0_30px_rgba(34,211,238,0.2)]
                    "
                  >
                    {item.icon}

                    {/* Node Glow */}

                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-cyan-400/10
                        blur-md
                        -z-10
                      "
                    />
                  </div>
                </div>

                {/* =================================================
                    LEFT SIDE
                ================================================== */}

                {isLeft ? (
                  <div
                    className="
                      md:pr-20
                      pl-20
                      md:pl-0
                      text-left
                      md:text-right
                    "
                  >

                    {/* Badge */}

                    <span
                      className="
                        inline-flex
                        px-3
                        py-1
                        rounded-full
                        border
                        border-cyan-400/20
                        bg-cyan-500/10
                        text-cyan-300
                        text-[11px]
                        tracking-[2px]
                        font-semibold
                      "
                    >
                      {item.badge}
                    </span>

                    {/* Date */}

                    <p
                      className="
                        mt-4
                        text-xl
                        md:text-2xl
                        font-bold
                        text-cyan-300
                      "
                    >
                      {item.date}
                    </p>

                    {/* Title */}

                    <h3
                      className="
                        mt-2
                        text-2xl
                        md:text-3xl
                        font-bold
                        text-white
                        leading-tight
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Divider */}

                    <div
                      className="
                        mt-5
                        h-[2px]
                        w-16
                        md:ml-auto
                        bg-gradient-to-r
                        from-cyan-400
                        to-blue-500
                      "
                    />

                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}

                {/* =================================================
                    RIGHT SIDE
                ================================================== */}

                {!isLeft ? (
                  <div
                    className="
                      md:pl-20
                      pl-20
                      text-left
                    "
                  >

                    {/* Badge */}

                    <span
                      className="
                        inline-flex
                        px-3
                        py-1
                        rounded-full
                        border
                        border-cyan-400/20
                        bg-cyan-500/10
                        text-cyan-300
                        text-[11px]
                        tracking-[2px]
                        font-semibold
                      "
                    >
                      {item.badge}
                    </span>

                    {/* Date */}

                    <p
                      className="
                        mt-4
                        text-xl
                        md:text-2xl
                        font-bold
                        text-cyan-300
                      "
                    >
                      {item.date}
                    </p>

                    {/* Title */}

                    <h3
                      className="
                        mt-2
                        text-2xl
                        md:text-3xl
                        font-bold
                        text-white
                        leading-tight
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Divider */}

                    <div
                      className="
                        mt-5
                        h-[2px]
                        w-16
                        bg-gradient-to-r
                        from-cyan-400
                        to-blue-500
                      "
                    />

                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}
              </motion.div>
            );
          })}
        </div>
        
      </div>
       
    </section>
    <Footer />
    </>
  );
}