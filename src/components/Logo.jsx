// Logo.jsx

import uem from "../assets/image/UEM_White.png";
import iem from "../assets/image/IEM_White.png";
import ieee_kol from "../assets/image/ieeek_logo_white.png";
import ieee_sb from "../assets/image/Ieee_cs_kol_white.png";
import iedc from "../assets/image/IEDC_White_Logo.png";
import ieee_cs_sb from "../assets/image/pritam2.png";
import cycrai_logo from "../assets/image/cycrai_latest_logo.png";
import comsoc from "../assets/image/comsoc.png";
export default function Logo() {
  const logos = [
    {
      src: iem,
      alt: "Institute of Engineering and Management",
      large: true,
    },
    {
      src: ieee_kol,
      alt: "IEEE Kolkata Section",
      large: false,
    },
    {
      src: comsoc,
      alt: "IEEE Comsoc Society",
      large: true,
    },
    {
      src: ieee_sb,
      alt: "IEEE Computer Society Kolkata Section",
      large: false,
    },
    {
      src: cycrai_logo,
      alt: "CYCRAI 2027",
      large: true,
    },
    {
      src: ieee_cs_sb,
      alt: "IEEE Computer Society Student Branch",
      large: false,
    },
    {
      src: iedc,
      alt: "Innovation and Entrepreneurship Development Cell",
      large: true,
    },
    {
      src: uem,
      alt: "University of Engineering and Management",
      large: true,
    },
  ];

  // Duplicate for seamless infinite scrolling
  const marqueeLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden bg-[#F2A900]">
      {/* =====================================================
          MOVING LOGO TRACK
      ====================================================== */}

      <div className="logo-marquee flex w-max items-center">
        {marqueeLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="
              flex
              h-[70px]
              shrink-0
              items-center
              justify-center
              border-r
              border-[#172554]/20
              px-4

              sm:h-[80px]
              sm:px-6

              md:h-[90px]
              md:px-9

              lg:h-[95px]
              lg:px-10
            "
          >
            {/* =================================================
                LOGO
            ================================================== */}

            <div
              className={`
                flex
                shrink-0
                items-center
                justify-center

                ${
                  logo.large
                    ? `
                      h-[66px]
                      w-[145px]

                      sm:h-[72px]
                      sm:w-[165px]

                      md:h-[80px]
                      md:w-[185px]

                      lg:h-[86px]
                      lg:w-[205px]
                    `
                    : `
                      h-[44px]
                      w-[100px]

                      sm:h-[48px]
                      sm:w-[110px]

                      md:h-[52px]
                      md:w-[120px]

                      lg:h-[56px]
                      lg:w-[135px]
                    `
                }
              `}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="
                  block
                  h-full
                  w-full
                  object-contain
                  opacity-95
                  drop-shadow-[0_1px_1px_rgba(23,37,84,0.25)]
                "
              />
            </div>
          </div>
        ))}
      </div>

      {/* =====================================================
          MARQUEE ANIMATION
      ====================================================== */}

      <style>{`
        .logo-marquee {
          animation: logoMarquee 32s linear infinite;
          will-change: transform;
        }

        @keyframes logoMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (min-width: 1024px) {
          .logo-marquee {
            animation-duration: 36s;
          }
        }

        @media (min-width: 1536px) {
          .logo-marquee {
            animation-duration: 40s;
          }
        }

        .logo-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-marquee {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}