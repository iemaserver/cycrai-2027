
import {
  FaMapMarkerAlt,
  FaEnvelope,
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
          BACKGROUND GLOW
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
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
          w-full
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
            gap-y-12
            md:grid-cols-2
            md:gap-x-12
            lg:grid-cols-[1.4fr_0.9fr_1.1fr]
            lg:gap-x-16
          "
        >
          {/* =====================================================
              BRAND
          ====================================================== */}

          <section className="min-w-0">
            {/* Logo */}
            <div className="flex items-start">
              <img
                src={logo}
                alt="CYCRAI 2027"
                className="
                  h-14
                  w-auto
                  max-w-full
                  object-contain
                  object-left
                  sm:h-16
                "
              />
            </div>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-lg
                text-sm
                font-semibold
                leading-6
                text-white
                text-justify
              "
            >
              First International Conference on Cybersecurity, Cryptography and
              Responsible AI.
            </p>

            {/* Hosted By */}
            <div className="mt-8">
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

              <div className="mt-3 h-[2px] w-10 bg-[#075DB8]" />

              <p
                className="
                  mt-4
                  max-w-lg
                  text-sm
                  font-bold
                  leading-6
                  text-white
                  text-justify
                "
              >
                Department of Computer Science and Engineering (Cybersecurity), Institute of Engineering and Management Kolkata,
                University of Engineering and Management Kolkata
              </p>

              <p
                className="
                  mt-3
                  text-xs
                  font-medium
                  leading-5
                  text-[#94A3B8]
                "
              >
                New Town, Kolkata, India
              </p>
            </div>
          </section>

          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          <section className="min-w-0">
            <FooterHeading title="Navigation" />

            <nav
              className="mt-5 w-full"
              aria-label="Footer navigation"
            >
              {quickLinks.map((link) => (
                <FooterLink
                  key={link.number}
                  link={link}
                />
              ))}
            </nav>
          </section>

          {/* =====================================================
              CONTACT
          ====================================================== */}

          <section className="min-w-0">
            <FooterHeading title="Contact" />

            {/* Address */}
            <div
              className="
                mt-5
                border-b
                border-[#1E3A5F]
                pb-6
              "
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
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

                {/* Content */}
                <div className="min-w-0 flex-1">
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
                      text-justify
                    "
                  >
                    Department of Computer Science and Engineering
                    (Cybersecurity),
                    <br />
                    Institute of Engineering &amp; Management Kolkata,
                    <br />
                    University of Engineering and Management Kolkata
                  </p>
                </div>
              </div>
            </div>

            {/* Conference Chair */}
            <div
              className="
                border-b
                border-[#1E3A5F]
                py-6
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

              <div className="mt-3 h-[2px] w-10 bg-[#075DB8]" />

              <p
                className="
                  mt-4
                  text-sm
                  font-bold
                  leading-5
                  text-white
                "
              >
                Prof. Dr. Maumita Chakraborty
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  font-semibold
                  leading-6
                  text-white
                  text-justify
                "
              >
                Department of Computer Science and Engineering
                (Cybersecurity), Institute of Engineering &amp;
                Management Kolkata, University of Engineering and
                Management Kolkata
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:cycrai@iem.edu.in"
              className="
                mt-5
                flex
                w-fit
                max-w-full
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

              <span className="break-all">
                cycrai@iem.edu.in
              </span>
            </a>
          </section>
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
            lg:mt-14
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
                leading-5
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
                gap-x-3
                gap-y-1
                text-[11px]
                font-medium
                leading-5
                text-[#64748B]
                sm:text-xs
              "
            >
              <span>IEEE Conference</span>

              <span
                className="text-[#075DB8]"
                aria-hidden="true"
              >
                •
              </span>

              <span>IEM Kolkata</span>

              <span
                className="text-[#075DB8]"
                aria-hidden="true"
              >
                •
              </span>

              <span>India</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BACK TO TOP
      ========================================================= */}

      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Back to top"
        className="
          absolute
          bottom-6
          right-5
          hidden
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-[#1E3A5F]
          bg-[#0B2144]
          text-[#60A5FA]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#60A5FA]
          hover:text-white
          sm:flex
          lg:right-8
        "
      >
        <span className="sr-only">
          Back to top
        </span>

        ↑
      </button>
    </footer>
  );
}

/* =============================================================
   FOOTER SECTION HEADING
============================================================= */

function FooterHeading({ title }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="
          h-[2px]
          w-7
          shrink-0
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
        min-h-[44px]
        w-full
        items-center
        justify-between
        gap-4
        border-b
        border-[#1E3A5F]
        py-3
        text-[#94A3B8]
        transition-colors
        duration-300
        hover:text-white
      "
    >
      {/* Number + Name */}
      <div className="flex min-w-0 items-center gap-3">
        <span
          className="
            w-5
            shrink-0
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

        <span
          className="
            min-w-0
            text-xs
            font-semibold
            leading-5
            sm:text-sm
          "
        >
          {link.name}
        </span>
      </div>

      {/* Arrow */}
      <FaArrowRight
        className="
          shrink-0
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