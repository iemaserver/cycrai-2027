import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../assets/image/cycrai_latest_logo.png";

export default function Footer() {
  // =========================================================
  // QUICK LINKS
  // =========================================================

  const quickLinks = [
    { number: "01", name: "Home", href: "/" },
    { number: "02", name: "About", href: "/about" },
    { number: "03", name: "Authors", href: "/call-for-papers" },
    { number: "04", name: "Registration", href: "/registration" },
    { number: "05", name: "Committee", href: "/committee" },
    { number: "06", name: "Program", href: "/program" },
    { number: "07", name: "Important Dates", href: "/important-dates" },
    { number: "08", name: "Venue", href: "/venue" },
  ];


  // =========================================================
  // AUTHOR LINKS
  // =========================================================

  const authorLinks = [
    {
      number: "01",
      name: "Call For Papers",
      href: "/call-for-papers",
    },
    {
      number: "02",
      name: "Guidelines & Policies",
      href: "/guidelines",
    },
    {
      number: "03",
      name: "Review Process",
      href: "/review-process",
    },
    {
      number: "04",
      name: "Tracks",
      href: "/tracks",
    },
  ];


  // =========================================================
  // BACK TO TOP
  // =========================================================

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[#1E3A5F]
        bg-[#07152F]
        text-white
      "
    >

      {/* =========================================================
          SUBTLE BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Left blue glow */}

        <div
          className="
            absolute
            -left-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#075DB8]/10
            blur-[150px]
          "
        />

        {/* Right blue glow */}

        <div
          className="
            absolute
            -bottom-40
            -right-32
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#2563EB]/10
            blur-[160px]
          "
        />

      </div>


     


          


      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          py-12
          sm:px-6
          sm:py-14
          lg:px-8
          lg:py-16
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-[1.35fr_1fr_0.9fr_1.15fr]
            lg:gap-12
          "
        >

          {/* =====================================================
              BRAND
          ====================================================== */}

          <div
            className="
              sm:col-span-2
              lg:col-span-1
            "
          >

            {/* Logo */}

            <img
              src={logo}
              alt="CYCRAI 2027"
              className="
                h-14
                w-auto
                object-contain
                sm:h-16
              "
            />


            {/* Description */}

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                font-medium
                leading-7
                text-[#CBD5E1]
                sm:text-base
              "
            >
              International Conference on Cyber Security,
              Cryptography and Responsible AI.
            </p>


            {/* Hosted By */}

            <div className="mt-7">

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[2.5px]
                  text-[#60A5FA]
                "
              >
                Hosted by
              </p>


              <div
                className="
                  mt-3
                  h-[2px]
                  w-10
                  bg-[#075DB8]
                "
              />


              <p
                className="
                  mt-4
                  max-w-sm
                  text-sm
                  font-bold
                  leading-7
                  text-white
                "
              >
                Department of Computer Science and Engineering
                (Cyber Security),
                <br />
                Institute of Engineering and Management Kolkata,
                <br />
                University of Engineering and Management Kolkata
              </p>


              <p
                className="
                  mt-2
                  text-xs
                  font-medium
                  text-[#94A3B8]
                "
              >
                New Town, Kolkata, India
              </p>

            </div>

          </div>


          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          <div>

            {/* Section Heading */}

            <FooterHeading title="Navigation" />


            <nav className="mt-5">

              {quickLinks.map((link) => (

                <FooterLink
                  key={link.number}
                  link={link}
                />

              ))}

            </nav>

          </div>


          {/* =====================================================
              AUTHORS
          ====================================================== */}

          <div>

            {/* Section Heading */}

            <FooterHeading title="Authors" />


            <nav className="mt-5">

              {authorLinks.map((link) => (

                <FooterLink
                  key={link.number}
                  link={link}
                />

              ))}

            </nav>

          </div>


          {/* =====================================================
              CONTACT
          ====================================================== */}

          <div>

            {/* Section Heading */}

            <FooterHeading title="Contact" />


            {/* Location */}

            <div
              className="
                mt-5
                border-b
                border-[#1E3A5F]
                pb-5
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
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#0B2144]
                    text-[#60A5FA]
                  "
                >
                  <FaMapMarkerAlt size={15} />
                </div>


                <div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[2px]
                      text-[#60A5FA]
                    "
                  >
                    Address
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      leading-6
                      text-white
                    "
                  >
                    Department of Computer Science and
                    Engineering (Cyber Security),
                    <br />
                    Institute of Engineering &amp; Management
                    Kolkata,
                    <br />
                    University of Engineering and Management
                    Kolkata
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                CONFERENCE CHAIR
            ================================================== */}

            <div
              className="
                mt-6
                border-b
                border-[#1E3A5F]
                pb-5
              "
            >

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#60A5FA]
                "
              >
                Conference Chair
              </p>


              <div
                className="
                  mt-3
                  h-[2px]
                  w-10
                  bg-[#075DB8]
                "
              />


              <p
                className="
                  mt-4
                  text-sm
                  font-bold
                  text-white
                "
              >
                Prof. Dr. Maumita Chakraborty
              </p>


              <p
                className="
                  mt-2
                  text-xs
                  font-medium
                  leading-6
                  text-[#94A3B8]
                  sm:text-sm
                "
              >
                Department of Computer Science and Engineering
                (Cyber Security), Institute of Engineering &
                Management Kolkata, University of Engineering
                and Management Kolkata
              </p>

            </div>


            {/* =================================================
                EMAIL
            ================================================== */}

            <a
              href="mailto:cycrai@iem.edu.in"
              className="
                mt-5
                flex
                items-center
                gap-4
                text-sm
                font-semibold
                text-[#CBD5E1]
                transition-colors
                duration-300
                hover:text-[#93C5FD]
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#0B2144]
                  text-[#60A5FA]
                "
              >
                <FaEnvelope size={15} />
              </div>

              <span>
                cycrai@iem.edu.in
              </span>

            </a>

          </div>

        </div>


        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}

        <div
          className="
            mt-12
            border-t
            border-[#1E3A5F]
            pt-6
          "
        >

          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* Copyright */}

            <p
              className="
                text-[11px]
                font-medium
                text-[#64748B]
                sm:text-xs
              "
            >
              © 2027 CYCRAI. All Rights Reserved.
            </p>


            {/* Conference Information */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-3
                text-[11px]
                font-medium
                text-[#64748B]
                sm:text-xs
              "
            >

              <span>
                IEEE Conference
              </span>

              <span
                className="
                  text-[#075DB8]
                "
              >
                •
              </span>

              <span>
                IEM Kolkata
              </span>

              <span
                className="
                  text-[#075DB8]
                "
              >
                •
              </span>

              <span>
                India
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* =============================================================
   FOOTER SECTION HEADING
============================================================= */

function FooterHeading({ title }) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
      "
    >

      <span
        className="
          h-[2px]
          w-7
          bg-[#60A5FA]
        "
      />

      <h3
        className="
          text-[11px]
          font-bold
          uppercase
          tracking-[2.5px]
          text-[#93C5FD]
          sm:text-xs
        "
      >
        {title}
      </h3>

    </div>
  );
}


/* =============================================================
   FOOTER NAVIGATION LINK
============================================================= */

function FooterLink({ link }) {
  return (
    <a
      href={link.href}
      className="
        group
        flex
        items-center
        justify-between
        border-b
        border-[#1E3A5F]
        py-3
        text-[#94A3B8]
        transition-colors
        duration-300
        hover:text-white
      "
    >

      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        {/* Number */}

        <span
          className="
            text-[9px]
            font-bold
            tracking-wider
            text-[#475569]
            transition-colors
            duration-300
            group-hover:text-[#60A5FA]
          "
        >
          {link.number}
        </span>


        {/* Name */}

        <span
          className="
            text-xs
            font-semibold
            sm:text-sm
          "
        >
          {link.name}
        </span>

      </div>


      {/* Arrow */}

      <FaArrowRight
        className="
          text-[9px]
          text-[#60A5FA]
          opacity-0
          -translate-x-2
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      />

    </a>
  );
}