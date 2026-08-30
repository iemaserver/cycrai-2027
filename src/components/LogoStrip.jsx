
import uem from "../assets/image/UEM_White.png";
import iem from "../assets/image/IEM_White.png";
import ieee_kol from "../assets/image/ieeek_logo_white.png";
import ieee_sb from "../assets/image/Ieee_cs_kol_white.png";
import iedc from "../assets/image/IEDC_White_Logo.png";
import ieee_cs_sb from "../assets/image/pritam2.png";
import cycrai_logo from "../assets/image/cycrai_latest_logo.png";

export default function LogoStrip() {
  const logos = [
    {
      src: iem,
      alt: "Institute of Engineering and Management",
    },
    {
      src: ieee_kol,
      alt: "IEEE Kolkata Section",
    },
    {
      src: ieee_sb,
      alt: "IEEE Computer Society Kolkata Section",
    },
    {
      src: cycrai_logo,
      alt: "CYCRAI 2027",
    },
    {
      src: ieee_cs_sb,
      alt: "IEEE Computer Society Student Branch",
    },
    {
      src: iedc,
      alt: "Innovation and Entrepreneurship Development Cell",
    },
    {
      src: uem,
      alt: "University of Engineering and Management",
    },
  ];

  return (
    <div className="w-full px-1 mt-4 md:mt-5">
      {/* =====================================================
          MAIN LOGO STRIP
      ====================================================== */}

      <div
        className="
          relative

          w-full
          max-w-[1000px]
          mx-auto

          h-[92px]
          md:h-[112px]
          lg:h-[120px]

          rounded-2xl

          border
          border-cyan-400/20

          bg-[#020B18]/40

          backdrop-blur-xl

          overflow-hidden

          shadow-[0_10px_40px_rgba(0,0,0,0.3)]

          transition-all
          duration-500

          hover:border-cyan-400/35
          hover:shadow-[0_10px_45px_rgba(0,150,255,0.15)]
        "
      >
        {/* =====================================================
            TOP CYAN LIGHT
        ====================================================== */}

        <div
          className="
            absolute
            top-0
            left-[8%]
            right-[8%]

            h-px

            bg-gradient-to-r
            from-transparent
            via-cyan-400/60
            to-transparent
          "
        />

        {/* =====================================================
            SOFT CENTER GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none

            absolute

            -top-16
            left-1/2

            -translate-x-1/2

            w-[55%]
            h-[90px]

            rounded-full

            bg-cyan-400/5

            blur-3xl
          "
        />

        {/* =====================================================
            LOGO ROW
        ====================================================== */}

        <div
          className="
            relative
            z-10

            flex

            h-full
            w-full

            items-center
            justify-between

            px-4
            md:px-5
            lg:px-6
          "
        >
          {logos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="
                flex
                h-full

                flex-1

                items-center
                justify-center

                min-w-0
              "
            >
              {/* =================================================
                  EQUAL-SIZE LOGO AREA
              ================================================== */}

              <div
                className="
                  flex

                  h-[72px]
                  md:h-[88px]
                  lg:h-[96px]

                  w-[105px]
                  md:w-[125px]
                  lg:w-[135px]

                  items-center
                  justify-center

                  px-2

                  transition-all
                  duration-300

                  hover:scale-105
                "
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="
                    block

                    w-full
                    h-full

                    object-contain

                    opacity-95

                    transition-all
                    duration-300

                    hover:opacity-100
                  "
                />
              </div>

              {/* =================================================
                  VERTICAL DIVIDER
              ================================================== */}

              {index !== logos.length - 1 && (
                <div
                  className="
                    h-[48px]
                    md:h-[62px]
                    lg:h-[68px]

                    w-px

                    flex-shrink-0

                    bg-gradient-to-b
                    from-transparent
                    via-cyan-400/25
                    to-transparent
                  "
                />
              )}
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CYAN LIGHT
        ====================================================== */}

        <div
          className="
            absolute

            bottom-0

            left-[10%]
            right-[10%]

            h-px

            bg-gradient-to-r
            from-transparent
            via-blue-500/35
            to-transparent
          "
        />

        {/* =====================================================
            CORNER GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none

            absolute

            left-0
            top-1/2

            -translate-y-1/2

            w-[80px]
            h-[80px]

            rounded-full

            bg-cyan-400/5

            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none

            absolute

            right-0
            top-1/2

            -translate-y-1/2

            w-[80px]
            h-[80px]

            rounded-full

            bg-blue-500/5

            blur-3xl
          "
        />
      </div>
    </div>
  );
}