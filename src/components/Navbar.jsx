import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  ChevronDown,
  Menu,
  X,
  Home,
  UserRound,
  PenLine,
  FileSearch,
  CreditCard,
  UsersRound,
  CalendarDays,
  Clock3,
  MapPin,
  Building2,
  Globe2,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Settings2,
  Mic2,
  Images,
} from "lucide-react";

// =============================================================
// NAVBAR
// =============================================================

export default function Navbar() {
  const location = useLocation();

  // ===========================================================
  // STATES
  // ===========================================================

  const [menuOpen, setMenuOpen] = useState(false);

  const [authorsOpen, setAuthorsOpen] = useState(false);

  const [committeeOpen, setCommitteeOpen] = useState(false);

  const [mobileAuthorsOpen, setMobileAuthorsOpen] = useState(false);

  const [mobileCommitteeOpen, setMobileCommitteeOpen] = useState(false);

  const [desktopExpanded, setDesktopExpanded] = useState(false);

  const collapseTimerRef = useRef(null);


  // ===========================================================
  // MAIN NAVIGATION
  // ===========================================================

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "About",
      path: "/about",
      icon: UserRound,
    },
    {
      name: "Registration",
      path: "/registration",
      icon: CreditCard,
    },
    {
      name: "Speakers",
      path: "/keynote-speakers",
      icon: Mic2,
    },
    {
      name: "Program",
      path: "/speakers",
      icon: CalendarDays,
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: Images,
    },
    {
      name: "Venue",
      path: "/venue",
      icon: MapPin,
    },
  ];


  // ===========================================================
  // AUTHORS
  // ===========================================================

  const authorItems = [
    {
      name: "Call For Papers",
      path: "/call-for-papers",
      icon: PenLine,
    },
    {
      name: "Guidelines & Policies",
      path: "/guidelines",
      icon: PenLine,
    },
    {
      name: "Review Process",
      path: "/review-process",
      icon: FileSearch,
    },
    {
      name: "Important Dates",
      path: "/important-dates",
      icon: Clock3,
    },
  ];


  // ===========================================================
  // COMMITTEE
  // ===========================================================

  const committeeItems = [
    {
      name: "Organizing Committee",
      key: "organizing",
      icon: Building2,
    },
    {
      name: "IEEE Kolkata Section Steering Committee",
      key: "ieeeKolkata",
      icon: Landmark,
    },
    {
      name: "IEEE Computer Society Kolkata Section",
      key: "ieeeCS",
      icon: ShieldCheck,
    },
    {
      name: "National Advisory Committee",
      key: "nationalAdvisory",
      icon: Landmark,
    },
    {
      name: "International Advisory Committee",
      key: "internationalAdvisory",
      icon: Globe2,
    },
    {
      name: "Technical Program Committee",
      key: "technicalProgram",
      icon: Settings2,
    },
    {
      name: "IEEE Computer Society UEMK Student Committee",
      key: "student",
      icon: GraduationCap,
    },
  ];


  // ===========================================================
  // ACTIVE ROUTE
  // ===========================================================

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname === path;
  };


  const isAuthorsActive = authorItems.some(
    (item) => location.pathname === item.path
  );


  const isCommitteeActive =
    location.pathname === "/committee";


  const currentCommittee =
    new URLSearchParams(location.search).get("committee");


  // ===========================================================
  // DESKTOP OPEN
  // ===========================================================

  const expandDesktopNav = () => {
    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }

    setDesktopExpanded(true);
  };


  // ===========================================================
  // DESKTOP CLOSE
  // ===========================================================

  const collapseDesktopNav = () => {
    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
    }

    collapseTimerRef.current = setTimeout(() => {
      setDesktopExpanded(false);
      setAuthorsOpen(false);
      setCommitteeOpen(false);

      collapseTimerRef.current = null;
    }, 1200);
  };


  // ===========================================================
  // CLOSE EVERYTHING
  // ===========================================================

  const closeAllMenus = () => {
    setMenuOpen(false);

    setAuthorsOpen(false);

    setCommitteeOpen(false);

    setMobileAuthorsOpen(false);

    setMobileCommitteeOpen(false);

    setDesktopExpanded(false);

    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }
  };


  // ===========================================================
  // NAVIGATION
  // ===========================================================

  const handleNavigation = () => {
    closeAllMenus();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  // ===========================================================
  // ESCAPE KEY
  // ===========================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeAllMenus();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);


  // ===========================================================
  // ROUTE CHANGE
  // ===========================================================

  useEffect(() => {
    setMenuOpen(false);
    setAuthorsOpen(false);
    setCommitteeOpen(false);
    setMobileAuthorsOpen(false);
    setMobileCommitteeOpen(false);
    setDesktopExpanded(false);

    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }
  }, [location.pathname, location.search]);


  // ===========================================================
  // CLEANUP
  // ===========================================================

  useEffect(() => {
    return () => {
      if (collapseTimerRef.current) {
        clearTimeout(collapseTimerRef.current);
      }
    };
  }, []);


  // ===========================================================
  // MOBILE BODY LOCK
  // ===========================================================

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);


  // ===========================================================
  // DESKTOP NORMAL ITEM
  // ===========================================================

  const DesktopNavItem = ({ item }) => {
    const active = isActive(item.path);

    const Icon = item.icon;

    return (
      <Link
        to={item.path}
        onClick={handleNavigation}
        className={`
          group
          relative
          flex
          items-center
          gap-4
          overflow-hidden
          px-5
          py-3.5

          text-[16px]
          font-semibold

          xl:text-[17px]

          transition-colors
          duration-300

          ${
            active
              ? "text-white"
              : "text-[#CBD5E1] hover:text-white"
          }
        `}
      >

        {/* Hover background */}

        <span
          className={`
            absolute
            inset-y-1
            left-1
            right-1
            rounded-xl
            bg-[#075DB8]
            transition-opacity
            duration-300

            ${
              active
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }
          `}
        />


        {/* Active indicator */}

        <span
          className={`
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            rounded-r-full
            bg-[#60A5FA]
            transition-all
            duration-300

            ${
              active
                ? "h-8 w-[3px] opacity-100"
                : "h-0 w-[3px] opacity-0 group-hover:h-6 group-hover:opacity-100"
            }
          `}
        />


        {/* Icon */}

        <Icon
          size={20}
          strokeWidth={1.9}
          className={`
            relative
            z-10
            shrink-0

            ${
              active
                ? "text-[#BFDBFE]"
                : "text-[#94A3B8] group-hover:text-[#BFDBFE]"
            }
          `}
        />


        {/* Text */}

        <span className="relative z-10">
          {item.name}
        </span>

      </Link>
    );
  };


  // ===========================================================
  // AUTHORS DESKTOP
  // ===========================================================

  const AuthorsDesktop = () => {
    const active = isAuthorsActive || authorsOpen;

    return (
      <div
        className="relative"
        onMouseEnter={() => {
          expandDesktopNav();

          setAuthorsOpen(true);

          setCommitteeOpen(false);
        }}
        onMouseLeave={collapseDesktopNav}
      >

        {/* AUTHORS BUTTON */}

        <button
          type="button"
          onClick={() => {
            expandDesktopNav();

            setAuthorsOpen((prev) => !prev);

            setCommitteeOpen(false);
          }}
          className={`
            group
            relative
            flex
            w-full
            items-center
            gap-4
            overflow-hidden
            px-5
            py-3.5
            text-left

            text-[16px]
            font-semibold

            xl:text-[17px]

            transition-colors
            duration-300

            ${
              active
                ? "text-white"
                : "text-[#CBD5E1] hover:text-white"
            }
          `}
        >

          {/* Background */}

          <span
            className={`
              absolute
              inset-y-1
              left-1
              right-1
              rounded-xl
              bg-[#075DB8]
              transition-opacity
              duration-300

              ${
                active
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }
            `}
          />


          {/* Indicator */}

          <span
            className={`
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              rounded-r-full
              bg-[#60A5FA]

              ${
                active
                  ? "h-8 w-[3px]"
                  : "h-0 w-[3px] group-hover:h-6"
              }
            `}
          />


          {/* Icon */}

          <PenLine
            size={20}
            strokeWidth={1.9}
            className="
              relative
              z-10
              text-[#94A3B8]
              transition-colors
              duration-300
              group-hover:text-[#BFDBFE]
            "
          />


          {/* Text */}

          <span className="relative z-10 flex-1">
            Authors
          </span>


          {/* Arrow */}

          <ChevronDown
            size={18}
            className={`
              relative
              z-10
              transition-transform
              duration-300

              ${
                authorsOpen
                  ? "rotate-180 text-[#BFDBFE]"
                  : "text-[#94A3B8]"
              }
            `}
          />

        </button>


        {/* AUTHORS SUBMENU */}

        <div
          className={`
            absolute
            left-full
            top-1/2
            z-[120]

            w-[275px]
            -translate-y-1/2

            pl-3

            transition-all
            duration-300

            ${
              authorsOpen
                ? "pointer-events-auto translate-x-0 scale-100 opacity-100"
                : "pointer-events-none -translate-x-2 scale-[0.98] opacity-0"
            }
          `}

          onMouseEnter={() => {
            expandDesktopNav();

            setAuthorsOpen(true);

            setCommitteeOpen(false);
          }}

          onMouseLeave={collapseDesktopNav}
        >

          <div
            className="
              overflow-hidden
              rounded-[14px]
              border
              border-[#315783]
              bg-[#07152F]
              shadow-[0_18px_50px_rgba(0,0,0,0.35)]
            "
          >

            {/* Top accent */}

            <div className="h-[3px] w-full bg-[#075DB8]" />


            {/* Items */}

            <div className="py-2">

              {authorItems.map((item, index) => {
                const Icon = item.icon;

                const activeItem = isActive(item.path);

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={handleNavigation}
                    className={`
                      group/sub
                      flex
                      items-center
                      gap-3

                      border-b
                      border-[#1E3A5F]

                      px-4
                      py-3.5

                      last:border-b-0

                      text-[15px]
                      font-medium

                      transition-colors
                      duration-300

                      ${
                        activeItem
                          ? "bg-[#075DB8] text-white"
                          : "text-[#CBD5E1] hover:bg-[#0B2144] hover:text-white"
                      }
                    `}
                  >

                    {/* Icon box */}

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border

                        ${
                          activeItem
                            ? "border-[#60A5FA] bg-[#0B376A] text-[#BFDBFE]"
                            : "border-[#315783] bg-[#0B2144] text-[#94A3B8]"
                        }
                      `}
                    >
                      <Icon size={16} />
                    </span>


                    {/* Name */}

                    <span className="min-w-0 flex-1">
                      {item.name}
                    </span>


                    {/* Number */}

                    <span
                      className="
                        shrink-0
                        text-[10px]
                        font-bold
                        text-[#64748B]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </Link>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    );
  };


  // ===========================================================
  // COMMITTEE DESKTOP
  // ===========================================================

  const CommitteeDesktop = () => {
    const active = isCommitteeActive || committeeOpen;

    return (
      <div
        className="relative"
        onMouseEnter={() => {
          expandDesktopNav();

          setCommitteeOpen(true);

          setAuthorsOpen(false);
        }}
        onMouseLeave={collapseDesktopNav}
      >

        {/* COMMITTEE BUTTON */}

        <button
          type="button"
          onClick={() => {
            expandDesktopNav();

            setCommitteeOpen((prev) => !prev);

            setAuthorsOpen(false);
          }}
          className={`
            group
            relative
            flex
            w-full
            items-center
            gap-4
            overflow-hidden
            px-5
            py-3.5
            text-left

            text-[16px]
            font-semibold

            xl:text-[17px]

            transition-colors
            duration-300

            ${
              active
                ? "text-white"
                : "text-[#CBD5E1] hover:text-white"
            }
          `}
        >

          {/* Background */}

          <span
            className={`
              absolute
              inset-y-1
              left-1
              right-1
              rounded-xl
              bg-[#075DB8]
              transition-opacity
              duration-300

              ${
                active
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }
            `}
          />


          {/* Indicator */}

          <span
            className={`
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              rounded-r-full
              bg-[#60A5FA]

              ${
                active
                  ? "h-8 w-[3px]"
                  : "h-0 w-[3px] group-hover:h-6"
              }
            `}
          />


          {/* Icon */}

          <UsersRound
            size={20}
            strokeWidth={1.9}
            className="
              relative
              z-10
              text-[#94A3B8]
              transition-colors
              duration-300
              group-hover:text-[#BFDBFE]
            "
          />


          {/* Text */}

          <span className="relative z-10 flex-1">
            Committee
          </span>


          {/* Arrow */}

          <ChevronDown
            size={18}
            className={`
              relative
              z-10
              transition-transform
              duration-300

              ${
                committeeOpen
                  ? "rotate-180 text-[#BFDBFE]"
                  : "text-[#94A3B8]"
              }
            `}
          />

        </button>


        {/* COMMITTEE SUBMENU */}

        <div
          className={`
            absolute
            left-full
            top-1/2
            z-[120]

            w-[325px]
            -translate-y-1/2

            pl-3

            transition-all
            duration-300
            origin-left

            ${
              committeeOpen
                ? "pointer-events-auto translate-x-0 scale-100 opacity-100"
                : "pointer-events-none -translate-x-2 scale-[0.98] opacity-0"
            }
          `}

          onMouseEnter={() => {
            expandDesktopNav();

            setCommitteeOpen(true);

            setAuthorsOpen(false);
          }}

          onMouseLeave={collapseDesktopNav}
        >

          <div
            className="
              overflow-hidden
              rounded-[14px]
              border
              border-[#315783]
              bg-[#07152F]
              shadow-[0_18px_50px_rgba(0,0,0,0.35)]
            "
          >

            {/* Top accent */}

            <div className="h-[3px] w-full bg-[#075DB8]" />


            {/* Header */}

            <div
              className="
                border-b
                border-[#1E3A5F]
                px-4
                py-3
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
                Conference Committee
              </p>
            </div>


            {/* Committee items */}

            <div className="py-2">

              {committeeItems.map((item, index) => {
                const Icon = item.icon;

                const activeItem =
                  isCommitteeActive &&
                  currentCommittee === item.key;

                return (
                  <Link
                    key={item.key}
                    to={`/committee?committee=${item.key}`}
                    onClick={handleNavigation}
                    className={`
                      group/sub
                      flex
                      items-center
                      gap-3

                      border-b
                      border-[#1E3A5F]

                      px-4
                      py-3.5

                      last:border-b-0

                      transition-colors
                      duration-300

                      ${
                        activeItem
                          ? "bg-[#075DB8] text-white"
                          : "text-[#CBD5E1] hover:bg-[#0B2144] hover:text-white"
                      }
                    `}
                  >

                    {/* Icon */}

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border

                        transition-colors
                        duration-300

                        ${
                          activeItem
                            ? "border-[#60A5FA] bg-[#0B376A] text-[#BFDBFE]"
                            : "border-[#315783] bg-[#0B2144] text-[#94A3B8] group-hover/sub:border-[#60A5FA] group-hover/sub:text-[#BFDBFE]"
                        }
                      `}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.8}
                      />
                    </span>


                    {/* Name */}

                    <span
                      className="
                        min-w-0
                        flex-1
                        text-[13px]
                        font-semibold
                        leading-5
                      "
                    >
                      {item.name}
                    </span>


                    {/* Number */}

                    <span
                      className="
                        shrink-0
                        text-[10px]
                        font-bold
                        text-[#64748B]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </Link>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    );
  };


  // ===========================================================
  // RENDER
  // ===========================================================

  return (
    <>
      {/* =======================================================
          DESKTOP SIDEBAR
      ======================================================== */}

      <aside
        onMouseEnter={expandDesktopNav}
        onMouseLeave={collapseDesktopNav}
        className={`
          fixed
          left-0
          top-1/2
          z-[100]

          hidden
          w-[250px]

          -translate-y-1/2

          flex-col

          overflow-visible

          rounded-r-[20px]

          border
          border-l-0
          border-[#315783]

          bg-[#07152F]

          shadow-[12px_18px_50px_rgba(0,0,0,0.28)]

          transition-transform
          duration-500

          lg:flex

          ${
            desktopExpanded
              ? "translate-x-0"
              : "-translate-x-[calc(100%-48px)]"
          }
        `}
      >

        {/* =====================================================
            COLLAPSED TAB
        ====================================================== */}

        <div
          className="
            group/tab

            absolute
            right-[-48px]
            top-1/2

            flex
            h-[205px]
            w-[48px]

            -translate-y-1/2

            cursor-pointer

            flex-col
            items-center
            justify-between

            overflow-hidden

            rounded-r-[16px]

            border
            border-l-0
            border-[#315783]

            bg-[#075DB8]

            py-4

            transition-colors
            duration-300

            hover:bg-[#064F9C]
          "
          onMouseEnter={expandDesktopNav}
          onClick={expandDesktopNav}
        >

          {/* Accent */}

          <span
            className="
              absolute
              left-0
              right-0
              top-0
              h-[3px]
              bg-[#60A5FA]
            "
          />


          {/* Menu icon */}

          <span
            className="
              relative
              z-10
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-[#93C5FD]
              bg-[#0B376A]
              text-[#BFDBFE]
            "
          >
            <Menu size={17} />
          </span>


          {/* Vertical text */}

          <span
            className="
              relative
              z-10

              flex
              flex-1
              items-center
              justify-center

              text-[9px]
              font-bold
              tracking-[0.18em]
              text-white

              [writing-mode:vertical-rl]
              rotate-180

              whitespace-nowrap
            "
          >
            CLICK HERE
          </span>


          {/* Arrow */}

          <span
            className="
              relative
              z-10
              text-lg
              leading-none
              text-[#BFDBFE]
            "
          >
            »
          </span>

        </div>


        {/* =====================================================
            TOP ACCENT
        ====================================================== */}

        <div
          className="
            absolute
            left-6
            right-6
            top-0
            h-[3px]
            rounded-b-full
            bg-[#075DB8]
          "
        />


        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav className="py-5">

          {/* Home */}

          <DesktopNavItem
            item={navItems[0]}
          />


          {/* About */}

          <DesktopNavItem
            item={navItems[1]}
          />


          {/* Authors */}

          <AuthorsDesktop />


          {/* Registration */}

          <DesktopNavItem
            item={navItems[2]}
          />


          {/* Committee */}

          <CommitteeDesktop />


          {/* Speakers */}

          <DesktopNavItem
            item={navItems[3]}
          />


          {/* Program */}

          <DesktopNavItem
            item={navItems[4]}
          />


          {/* Gallery */}

          <DesktopNavItem
            item={navItems[5]}
          />


          {/* Venue */}

          <DesktopNavItem
            item={navItems[6]}
          />

        </nav>


        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div
          className="
            mx-5
            h-px
            bg-[#1E3A5F]
          "
        />


        {/* =====================================================
            CONTACT
        ====================================================== */}

        <Link
          to="/contact"
          onClick={handleNavigation}
          className="
            group/contact
            relative

            mx-4
            my-4

            flex
            items-center
            justify-center

            overflow-hidden

            rounded-xl

            border
            border-[#315783]

            bg-[#0B2144]

            px-4
            py-3

            text-[13px]
            font-bold
            tracking-[0.12em]

            text-[#BFDBFE]

            transition-all
            duration-300

            hover:border-[#60A5FA]
            hover:bg-[#075DB8]
            hover:text-white
          "
        >
          CONTACT US
        </Link>


        {/* Bottom accent */}

        <div
          className="
            absolute
            bottom-0
            left-6
            right-6
            h-[2px]
            rounded-t-full
            bg-[#075DB8]
          "
        />

      </aside>


      {/* =======================================================
          MOBILE MENU BUTTON
      ======================================================== */}

      <button
        type="button"
        onClick={() => {
          setMenuOpen((prev) => !prev);

          setMobileAuthorsOpen(false);

          setMobileCommitteeOpen(false);
        }}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        className="
          fixed
          right-5
          top-5
          z-[200]

          flex
          h-12
          w-12

          items-center
          justify-center

          rounded-2xl

          border
          border-[#315783]

          bg-[#07152F]

          text-[#93C5FD]

          shadow-[0_10px_30px_rgba(0,0,0,0.25)]

          transition-all
          duration-300

          hover:border-[#60A5FA]
          hover:bg-[#075DB8]
          hover:text-white

          active:scale-95

          lg:hidden
        "
      >
        {menuOpen ? (
          <X size={23} />
        ) : (
          <Menu size={23} />
        )}
      </button>


      {/* =======================================================
          MOBILE OVERLAY
      ======================================================== */}

      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed
          inset-0
          z-[150]

          bg-[#020B18]/70

          transition-opacity
          duration-300

          lg:hidden

          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />


      {/* =======================================================
          MOBILE SIDEBAR
      ======================================================== */}

      <aside
        className={`
          fixed
          bottom-0
          left-0
          top-0
          z-[180]

          flex
          w-[310px]
          max-w-[86vw]
          flex-col

          border-r
          border-[#315783]

          bg-[#07152F]

          shadow-[20px_0_55px_rgba(0,0,0,0.35)]

          transition-transform
          duration-500

          lg:hidden

          ${
            menuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* =====================================================
            MOBILE HEADER
        ====================================================== */}

        <div
          className="
            relative
            flex
            items-center
            justify-between

            border-b
            border-[#1E3A5F]

            px-6
            py-6
          "
        >

          {/* Top accent */}

          <span
            className="
              absolute
              left-6
              right-6
              top-0
              h-[3px]
              bg-[#075DB8]
            "
          />


          <div>

            <p
              className="
                text-[10px]
                font-bold
                tracking-[0.4em]
                text-[#60A5FA]
              "
            >
              CYCRAI
            </p>

            <p
              className="
                mt-1
                text-xl
                font-black
                text-white
              "
            >
              2027
            </p>

          </div>


          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="
              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-xl

              border
              border-[#315783]

              text-[#CBD5E1]

              transition-colors
              duration-300

              hover:border-[#60A5FA]
              hover:bg-[#075DB8]
              hover:text-white
            "
          >
            <X size={20} />
          </button>

        </div>


        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}

        <nav className="flex-1 overflow-y-auto py-4">

          {/* Home */}

          <MobileNavItem
            item={navItems[0]}
            active={isActive("/")}
            onClick={handleNavigation}
          />


          {/* About */}

          <MobileNavItem
            item={navItems[1]}
            active={isActive("/about")}
            onClick={handleNavigation}
          />


          {/* =================================================
              AUTHORS
          ================================================== */}

          <MobileDropdown
            title="Authors"
            icon={PenLine}
            open={mobileAuthorsOpen}
            setOpen={setMobileAuthorsOpen}
            otherClose={() => setMobileCommitteeOpen(false)}
            active={isAuthorsActive}
          >

            {authorItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavigation}
                  className={`
                    flex
                    items-center
                    gap-3

                    border-b
                    border-[#1E3A5F]

                    py-3.5
                    pl-11
                    pr-6

                    text-[15px]
                    font-medium

                    ${
                      isActive(item.path)
                        ? "bg-[#075DB8] text-white"
                        : "text-[#94A3B8] hover:bg-[#0B2144] hover:text-white"
                    }
                  `}
                >

                  <Icon size={17} />

                  <span>
                    {item.name}
                  </span>

                </Link>
              );
            })}

          </MobileDropdown>


          {/* Registration */}

          <MobileNavItem
            item={navItems[2]}
            active={isActive("/registration")}
            onClick={handleNavigation}
          />


          {/* =================================================
              COMMITTEE
          ================================================== */}

          <MobileDropdown
            title="Committee"
            icon={UsersRound}
            open={mobileCommitteeOpen}
            setOpen={setMobileCommitteeOpen}
            otherClose={() => setMobileAuthorsOpen(false)}
            active={isCommitteeActive}
          >

            {committeeItems.map((item) => {
              const Icon = item.icon;

              const activeItem =
                isCommitteeActive &&
                currentCommittee === item.key;

              return (
                <Link
                  key={item.key}
                  to={`/committee?committee=${item.key}`}
                  onClick={handleNavigation}
                  className={`
                    flex
                    items-center
                    gap-3

                    border-b
                    border-[#1E3A5F]

                    py-3.5
                    pl-11
                    pr-5

                    text-[13px]
                    font-semibold
                    leading-5

                    ${
                      activeItem
                        ? "bg-[#075DB8] text-white"
                        : "text-[#94A3B8] hover:bg-[#0B2144] hover:text-white"
                    }
                  `}
                >

                  <Icon
                    size={16}
                    className="shrink-0"
                  />

                  <span>
                    {item.name}
                  </span>

                </Link>
              );
            })}

          </MobileDropdown>


          {/* Speakers */}

          <MobileNavItem
            item={navItems[3]}
            active={isActive("/keynote-speakers")}
            onClick={handleNavigation}
          />


          {/* Program */}

          <MobileNavItem
            item={navItems[4]}
            active={isActive("/speakers")}
            onClick={handleNavigation}
          />


          {/* Gallery */}

          <MobileNavItem
            item={navItems[5]}
            active={isActive("/gallery")}
            onClick={handleNavigation}
          />


          {/* Venue */}

          <MobileNavItem
            item={navItems[6]}
            active={isActive("/venue")}
            onClick={handleNavigation}
          />

        </nav>


        {/* =====================================================
            MOBILE CONTACT
        ====================================================== */}

        <div
          className="
            border-t
            border-[#1E3A5F]
            p-5
          "
        >

          <Link
            to="/contact"
            onClick={handleNavigation}
            className="
              block
              w-full

              rounded-xl

              bg-[#075DB8]

              px-5
              py-3.5

              text-center

              text-[14px]
              font-bold
              tracking-wide

              text-white

              transition-colors
              duration-300

              hover:bg-[#064F9C]
            "
          >
            CONTACT US
          </Link>

        </div>

      </aside>
    </>
  );
}


// =============================================================
// MOBILE NORMAL NAV ITEM
// =============================================================

function MobileNavItem({
  item,
  active,
  onClick,
}) {
  const Icon = item.icon;

  return (
    <Link
      to={item.path}
      onClick={onClick}
      className={`
        group

        flex
        items-center
        gap-4

        border-l-[3px]

        px-6
        py-4

        text-[16px]
        font-semibold

        transition-colors
        duration-300

        ${
          active
            ? "border-[#60A5FA] bg-[#075DB8] text-white"
            : "border-transparent text-[#CBD5E1] hover:border-[#60A5FA] hover:bg-[#0B2144] hover:text-white"
        }
      `}
    >

      <Icon
        size={21}
        strokeWidth={1.8}
        className={`
          ${
            active
              ? "text-[#BFDBFE]"
              : "text-[#94A3B8] group-hover:text-[#BFDBFE]"
          }
        `}
      />

      <span>
        {item.name}
      </span>

    </Link>
  );
}


// =============================================================
// MOBILE DROPDOWN
// =============================================================

function MobileDropdown({
  title,
  icon: Icon,
  open,
  setOpen,
  otherClose,
  active,
  children,
}) {
  return (
    <div>

      {/* Dropdown button */}

      <button
        type="button"
        onClick={() => {
          setOpen((prev) => !prev);

          otherClose();
        }}
        className={`
          flex
          w-full

          items-center
          gap-4

          border-l-[3px]

          px-6
          py-4

          text-left

          text-[16px]
          font-semibold

          transition-colors
          duration-300

          ${
            active
              ? "border-[#60A5FA] bg-[#075DB8] text-white"
              : "border-transparent text-[#CBD5E1] hover:border-[#60A5FA] hover:bg-[#0B2144] hover:text-white"
          }
        `}
      >

        <Icon
          size={21}
          strokeWidth={1.8}
        />


        <span className="flex-1">
          {title}
        </span>


        <ChevronDown
          size={19}
          className={`
            transition-transform
            duration-300

            ${
              open
                ? "rotate-180 text-[#BFDBFE]"
                : "text-[#94A3B8]"
            }
          `}
        />

      </button>


      {/* Dropdown content */}

      <div
        className={`
          overflow-hidden

          bg-[#051126]

          transition-all
          duration-300

          ${
            open
              ? "max-h-[800px]"
              : "max-h-0"
          }
        `}
      >
        {children}
      </div>

    </div>
  );
}