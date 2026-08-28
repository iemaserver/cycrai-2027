import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import LogoStrip from "./LogoStrip";
import heroBg from "../assets/image/a_new_bg.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#010611]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 flex items-end justify-center">
        <img
          src={heroBg}
          alt="Background"
          className="
            w-full
            h-full
            object-cover
            object-bottom
            pointer-events-none
            select-none
          "
        />
      </div>

      {/* Slight Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 w-full">

  {/* Logo Strip at Top */}
  <div className="w-full">
    <LogoStrip />
  </div>

  {/* Hero Text */}
  <div className="text-center mt-2">

          <h1
  className="
    text-4xl
sm:text-4xl
md:text-6xl
lg:text-6xl

    font-black

    tracking-[0.04em]

    leading-none

    text-white

    drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
  "
>
  CYCRAI{" "}
  <span
    className="
      bg-gradient-to-r
      from-[#20E0FF]
      via-[#19BDF2]
      to-[#315CFF]

      bg-clip-text
      text-transparent

      drop-shadow-[0_0_25px_rgba(20,190,255,0.35)]
    "
  >
    2027
  </span>
</h1>

<p
  className="
    mt-1

    text-white

    text-xs
  sm:text-sm
  md:text-base

    font-small

    tracking-[0.10em]

    uppercase

    drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]
  "
>
  International Conference on
</p>

  <p
  className="
    mt-1

    text-[#27D9F7]

    text-xs
    sm:text-sm
    md:text-base

    font-small

    tracking-[0.10em]

    uppercase

    drop-shadow-[0_0_15px_rgba(20,210,245,0.35)]
  "
>
  Cyber Security, Cryptography and Responsible AI
</p>
<div
  className="
    mt-1

    flex
    flex-col
    sm:flex-row

    items-center
    justify-center

    gap-4
    sm:gap-8

    text-white
  "
>
  <div className="flex items-center gap-3">
    <FaCalendarAlt
      className="
        text-[#16D8F5]
        text-lg

        drop-shadow-[0_0_8px_rgba(22,216,245,0.8)]
      "
    />

    <span
      className="
        text-sm
        md:text-base

        font-medium

        tracking-wide
      "
    >
      29 – 30 SEPTEMBER 2027
    </span>
  </div>

  <div
    className="
      hidden
      sm:block

      h-6
      w-px

      bg-cyan-400/40
    "
  />

  <div className="flex items-center gap-3">
    <FaLocationDot
      className="
        text-[#16D8F5]
        text-lg

        drop-shadow-[0_0_8px_rgba(22,216,245,0.8)]
      "
    />

    <span
      className="
        text-sm
        md:text-base

        font-medium

        tracking-wide
      "
    >
      NEW TOWN, KOLKATA, INDIA
    </span>
  </div>
</div>
{/* <div
  className="
    mt-5

    flex
    flex-col
    sm:flex-row

    justify-center
    items-center

    gap-4
    sm:gap-7
  "
>


  <button
    onClick={() => navigate("/about")}
    className="
      w-[190px]
      h-[50px]

      rounded-lg

      border
      border-cyan-400

      bg-[#021426]/70

      text-[#29D8F5]

      font-semibold

      tracking-wide

      transition-all
      duration-300

      hover:bg-cyan-400/10

      hover:shadow-[0_0_25px_rgba(20,210,245,0.3)]

      hover:-translate-y-1
    "
  >
    EXPLORE MORE
  </button>



  <button
    onClick={() => navigate("/registration")}
    className="
      w-[190px]
      h-[50px]

      rounded-lg

      bg-gradient-to-r
      from-[#16CFF2]
      to-[#3158F5]

      text-white

      font-bold

      tracking-wide

      shadow-[0_8px_25px_rgba(30,100,245,0.3)]

      transition-all
      duration-300

      hover:-translate-y-1

      hover:shadow-[0_10px_35px_rgba(30,120,245,0.5)]
    "
  >
    REGISTER NOW
  </button>
</div> */}
         {/* Conference Information */}
<div
  className="
    mt-1
    mx-auto
    max-w-5xl
    px-5
    text-center
  "
>
  {/* Organized By */}
  <p
    className="
      text-white
      text-sm
      sm:text-base
      md:text-lg
      font-medium
      leading-relaxed
      tracking-wide
      drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]
    "
  >
    Organized by{" "}
    <span className="text-[#27D9F7] font-semibold">
      Department of Computer Science and Engineering (Cyber Security)
    </span>
    <br />
    Institute of Engineering & Management Kolkata, University of
    Engineering and Management Kolkata
  </p>

  {/* IEEE Xplore */}
  <p
    className="
      mt-1
      text-white
      text-sm
      sm:text-base
      md:text-lg
      font-medium
      leading-relaxed
      drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]
    "
  >
    *(All accepted and presented papers will be published in{" "}
    <span
      className="
        text-[#27D9F7]
        font-bold
        drop-shadow-[0_0_10px_rgba(39,217,247,0.4)]
      "
    >
      IEEE Xplore
    </span>{" "}
    <span className="text-white/80">(Awaiting Approval))</span>
  </p>

  {/* Microsoft CMT */}
  <p
    className="
      mt-1
      mx-auto
      max-w-4xl
      text-white/90
      text-xs
      sm:text-sm
      md:text-base
      font-normal
      leading-relaxed
      drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]
    "
  >
    *The Microsoft CMT service will be used for managing the peer-reviewing
    process of this conference. This service is provided for free by Microsoft
    and they bear all expenses, including costs for Azure cloud services as
    well as software development and support.
  </p>
</div>
          
        </div>
      </div>
    </section>
  );
}
