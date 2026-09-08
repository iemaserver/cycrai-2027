import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    {
      number: "05",
      name: "Women In Engineering",
      href: "/women-in-engineering",
    },
    { number: "06", name: "Committee", href: "/committee" },
    { number: "07", name: "Speakers", href: "/keynote-speakers" },
    { number: "08", name: "Program", href: "/speakers" },
    { number: "09", name: "Gallery", href: "/gallery" },
    { number: "10", name: "Venue", href: "/venue" },
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

  // =========================================================
  // FOOTER
  // =========================================================

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
          BACKGROUND EFFECTS
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
        aria-hidden="true"
      >
        {/* Top left glow */}

        <div
          className="
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#075DB8]/10
            blur-[150px]
          "
        />

        {/* Bottom right glow */}

        <div
          className="
            absolute
            -bottom-48
            -right-40
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#2563EB]/10
            blur-[160px]
          "
        />

        {/* Center subtle glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[350px]
            w-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#075DB8]/5
            blur-[140px]
          "
        />
      </div>

      {/* =========================================================
          TOP ACCENT
      ========================================================= */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[3px]
          bg-gradient-to-r
          from-transparent
          via-[#075DB8]
          to-transparent
        "
      />

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          py-14
          sm:px-6
          sm:py-16
          lg:px-8
          lg:py-20
        "
      >
        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:grid-cols-2
            lg:grid-cols-[1.35fr_0.85fr_1.1fr]
            lg:gap-16
          "
        >
          {/* =====================================================
              BRAND / ABOUT
          ====================================================== */}

          <motion.section
            initial={{
              opacity: 0,
              y: 20,
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
            }}
            className="min-w-0"
          >
            {/* Logo */}

            <Link
              to="/"
              onClick={handleBackToTop}
              className="
                inline-flex
                rounded-xl
                outline-none
                transition-opacity
                duration-300
                hover:opacity-90
                focus-visible:ring-2
                focus-visible:ring-[#60A5FA]
              "
            >
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
                  lg:h-[70px]
                "
              />
            </Link>

            {/* Small label */}

            <div className="mt-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#60A5FA]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[2.5px]
                  text-[#60A5FA]
                "
              >
                CYCRAI 2027
              </span>
            </div>

            {/* Description */}

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                font-medium
                leading-7
                text-[#CBD5E1]
              "
            >
              First International Conference on Cyber Security,
              Cryptography and Responsible AI.
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
                  max-w-xl
                  text-sm
                  font-semibold
                  leading-6
                  text-white
                "
              >
                Department of Computer Science and Engineering
                (Cyber Security), Institute of Engineering and
                Management Kolkata, University of Engineering and
                Management Kolkata
              </p>

              <div
                className="
                  mt-4
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#1E3A5F]
                  bg-[#0B2144]/60
                  px-4
                  py-2
                "
              >
                <span
                  className="
                    text-xs
                    font-semibold
                    text-[#93C5FD]
                  "
                >
                  New Town, Kolkata, India
                </span>
              </div>
            </div>
          </motion.section>

          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          <motion.section
            initial={{
              opacity: 0,
              y: 20,
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
              delay: 0.1,
            }}
            className="min-w-0"
          >
            <FooterHeading title="Navigation" />

            <nav
              className="
                mt-5
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-1
              "
              aria-label="Footer navigation"
            >
              {quickLinks.map((link) => (
                <FooterLink
                  key={link.number}
                  link={link}
                />
              ))}
            </nav>
          </motion.section>

          {/* =====================================================
              CONTACT
          ====================================================== */}

          <motion.section
            initial={{
              opacity: 0,
              y: 20,
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
              delay: 0.2,
            }}
            className="min-w-0"
          >
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
                <ContactIcon>
                  <FaMapMarkerAlt size={15} />
                </ContactIcon>

                <div className="min-w-0 flex-1">
                  <p className="footer-label">
                    Address
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-medium
                      leading-6
                      text-[#CBD5E1]
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

            {/* Conference Chair */}

            <div
              className="
                border-b
                border-[#1E3A5F]
                py-6
              "
            >
              <p className="footer-label">
                Conference Chair
              </p>

              <div className="mt-3 h-[2px] w-10 bg-[#075DB8]" />

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
                  text-sm
                  font-medium
                  leading-6
                  text-[#CBD5E1]
                "
              >
                Department of Computer Science and Engineering
                (Cyber Security), Institute of Engineering &
                Management Kolkata, University of Engineering and
                Management Kolkata
              </p>
            </div>

            {/* Email */}

            <a
              href="mailto:cycrai@iem.edu.in"
              className="
                group
                mt-5
                flex
                w-fit
                max-w-full
                items-center
                gap-4
                rounded-xl
                border
                border-transparent
                p-2
                -ml-2
                transition-all
                duration-300
                hover:border-[#1E3A5F]
                hover:bg-[#0B2144]
              "
            >
              <ContactIcon>
                <FaEnvelope size={15} />
              </ContactIcon>

              <span
                className="
                  break-all
                  text-sm
                  font-semibold
                  text-[#CBD5E1]
                  transition-colors
                  duration-300
                  group-hover:text-[#93C5FD]
                "
              >
                cycrai@iem.edu.in
              </span>
            </a>
          </motion.section>
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
            lg:mt-16
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
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

            {/* Conference information */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-2
                text-[11px]
                font-medium
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

            {/* Back to top */}

            <button
              type="button"
              onClick={handleBackToTop}
              aria-label="Back to top"
              className="
                group
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#315783]
                bg-[#0B2144]
                text-[#60A5FA]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#60A5FA]
                hover:bg-[#075DB8]
                hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#60A5FA]
              "
            >
              <span
                className="
                  text-lg
                  leading-none
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              >
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// =============================================================
// FOOTER SECTION HEADING
// =============================================================

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

// =============================================================
// FOOTER NAVIGATION LINK
// =============================================================

function FooterLink({ link }) {
  return (
    <Link
      to={link.href}
      className="
        group
        flex
        min-h-[44px]
        w-full
        items-center
        justify-between
        gap-3
        border-b
        border-[#1E3A5F]
        px-1
        py-3
        text-[#94A3B8]
        transition-all
        duration-300
        hover:border-[#315783]
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
    </Link>
  );
}

// =============================================================
// CONTACT ICON
// =============================================================

function ContactIcon({ children }) {
  return (
    <div
      className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-xl
        border
        border-[#1E3A5F]
        bg-[#0B2144]
        text-[#60A5FA]
        transition-all
        duration-300
      "
    >
      {children}
    </div>
  );
}