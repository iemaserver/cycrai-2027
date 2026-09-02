// AnnouncementTicker.jsx

import { FaBullhorn } from "react-icons/fa";

export default function AnnouncementTicker() {
  const announcements = [
    {
      id: 1,
      text: "International Conference on Cyber Security, Cryptography and Responsible AI",
    },
    {
      id: 2,
      text: "Organized by Department of Computer Science and Engineering (Cyber Security) Institute of Engineering & Management Kolkata, University of Engineering and Management Kolkata",
    },
  ];

  // Duplicate announcements for seamless infinite scrolling
  const marqueeAnnouncements = [
    ...announcements,
    ...announcements,
  ];

  return (
    <div
      className="
        relative
        w-screen
        ml-[calc(50%-50vw)]
        mr-[calc(50%-50vw)]

        mt-1
        mb-0
        p-0

        overflow-hidden

        bg-[#F2A900]

        border-y
        border-[#FFE36A]

        shadow-[0_0_10px_rgba(242,169,0,0.35)]
      "
    >

      {/* =====================================================
          MOVING ANNOUNCEMENT TRACK
      ====================================================== */}

      <div className="announcement-marquee flex w-max items-center">

        {marqueeAnnouncements.map((announcement, index) => (
          <div
            key={`${announcement.id}-${index}`}
            className="
              flex
              shrink-0
              items-center

              h-[38px]

              px-5
              sm:px-7
              md:px-9
              lg:px-12

              border-r
              border-[#172554]/20
            "
          >

            {/* =================================================
                ANNOUNCEMENTS LABEL
            ================================================== */}

            <div
              className="
                flex
                shrink-0
                items-center
                gap-2

                mr-4
                sm:mr-5
                md:mr-6
              "
            >

              {/* ICON */}

              <FaBullhorn
                className="
                  shrink-0

                  text-red-600

                  text-[12px]
                  sm:text-sm
                  md:text-base

                  drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]
                "
              />

              {/* ANNOUNCEMENTS */}

              <span
                className="
                  whitespace-nowrap

                  text-red-600

                  text-[10px]
                  sm:text-[11px]
                  md:text-xs
                  lg:text-sm

                  font-black

                  uppercase

                  tracking-wide

                  drop-shadow-[0_1px_1px_rgba(255,255,255,0.25)]
                "
              >
                Announcements
              </span>

            </div>


            {/* =================================================
                ANNOUNCEMENT TEXT
            ================================================== */}

            <p
              className="
                whitespace-nowrap

                text-center

                text-[10px]
                sm:text-[11px]
                md:text-xs
                lg:text-sm

                font-extrabold

                leading-none

                tracking-wide

                text-[#172554]

                drop-shadow-[0_1px_1px_rgba(255,255,255,0.25)]
              "
            >
              {announcement.text}
            </p>


            {/* =================================================
                SEPARATOR
            ================================================== */}

            <span
              className="
                mx-6
                sm:mx-8
                md:mx-10

                text-[#172554]

                text-[10px]
                md:text-xs

                font-black
              "
            >
              ◆
            </span>

          </div>
        ))}

      </div>


      {/* =====================================================
          MARQUEE ANIMATION
          RIGHT → LEFT
      ====================================================== */}

      <style>{`

        .announcement-marquee {
          animation: announcementMarquee 30s linear infinite;
          will-change: transform;
        }

        @keyframes announcementMarquee {

          from {
            transform: translateX(0%);
          }

          to {
            transform: translateX(-50%);
          }

        }


        /* =====================================================
           LARGE SCREENS
        ====================================================== */

        @media (min-width: 1024px) {

          .announcement-marquee {
            animation-duration: 34s;
          }

        }


        /* =====================================================
           VERY LARGE SCREENS
        ====================================================== */

        @media (min-width: 1536px) {

          .announcement-marquee {
            animation-duration: 38s;
          }

        }


        /* =====================================================
           PAUSE ON HOVER
        ====================================================== */

        .announcement-marquee:hover {
          animation-play-state: paused;
        }


        /* =====================================================
           ACCESSIBILITY
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          .announcement-marquee {
            animation: none;
            transform: translateX(0);
          }

        }

      `}</style>

    </div>
  );
}