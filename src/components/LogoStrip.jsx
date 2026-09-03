import uem from "../assets/image/UEM_White.png";
import iem from "../assets/image/IEM_White.png";
import ieee_kol from "../assets/image/ieeek_logo_white.png";
import ieee_sb from "../assets/image/Ieee_cs_kol_white.png";
import iedc from "../assets/image/IEDC_White_Logo.png";
import ieee_cs_sb from "../assets/image/pritam2.png";
import cycrai_logo from "../assets/image/cycrai_latest_logo.png";
import comsoc from "../assets/image/Comsoc.png";

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
      src: comsoc,
      alt: "IEEE Comsoc Society",
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
    <div
      className="
        w-full
        px-2
        mt-5
        sm:px-3
        md:mt-6
      "
    >
      {/* =====================================================
          MAIN LOGO STRIP
      ====================================================== */}

      <div
        className="
          relative
          mx-auto

          w-full
          max-w-[1050px]

          h-[90px]
          sm:h-[100px]
          md:h-[112px]
          lg:h-[120px]

          overflow-hidden

          rounded-[16px]

          border
          border-[#315783]

          bg-[#07152F]

          shadow-[0_12px_35px_rgba(0,0,0,0.22)]
        "
      >

       

        {/* ===================================================
            VERY SOFT BLUE BACKGROUND
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2

            h-[100px]
            w-[45%]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#075DB8]/10

            blur-[70px]
          "
        />


        {/* ===================================================
            LOGO ROW
        ==================================================== */}

        <div
          className="
            relative
            z-10

            flex
            h-full
            w-full

            items-center
            justify-between

            px-2
            sm:px-4
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
                min-w-0
                flex-1
                items-center
                justify-center
              "
            >

              {/* =================================================
                  LOGO CONTAINER
              ================================================== */}

              <div
                className="
                  flex
                  h-[62px]
                  w-[78px]

                  items-center
                  justify-center

                  px-1

                  sm:h-[70px]
                  sm:w-[92px]

                  md:h-[80px]
                  md:w-[105px]

                  lg:h-[88px]
                  lg:w-[118px]
                "
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
                  "
                />

              </div>


              {/* =================================================
                  DIVIDER
              ================================================== */}

              {index !== logos.length - 1 && (
                <div
                  className="
                    h-[38px]
                    w-px
                    shrink-0

                    bg-[#315783]/70

                    sm:h-[48px]
                    md:h-[58px]
                    lg:h-[64px]
                  "
                />
              )}

            </div>
          ))}

        </div>


        {/* ===================================================
            BOTTOM BLUE LINE
        ==================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-10
            right-10

            h-[1px]

            bg-[#315783]/70
          "
        />

      </div>

    </div>
  );
}