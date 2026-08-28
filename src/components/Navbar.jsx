// import { useEffect, useRef, useState } from "react";
// import logo from "../assets/image/cycrai_latest_logo.png";
// import { Link, useLocation } from "react-router-dom";
// import { ChevronDown } from "lucide-react";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [authorsOpen, setAuthorsOpen] = useState(false);
//   const [mobileAuthorsOpen, setMobileAuthorsOpen] = useState(false);

//   const location = useLocation();

//   const authorsRef = useRef(null);

//   // =========================================================
//   // NAVBAR SCROLL EFFECT
//   // =========================================================

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // =========================================================
//   // CLOSE MENUS WHEN ROUTE CHANGES
//   // =========================================================

//   useEffect(() => {
//     setMenuOpen(false);
//     setAuthorsOpen(false);
//     setMobileAuthorsOpen(false);

//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   // =========================================================
//   // CLOSE DESKTOP DROPDOWN WHEN CLICKING OUTSIDE
//   // =========================================================

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         authorsRef.current &&
//         !authorsRef.current.contains(event.target)
//       ) {
//         setAuthorsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // =========================================================
//   // CLOSE DROPDOWN WITH ESCAPE KEY
//   // =========================================================

//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         setAuthorsOpen(false);
//         setMobileAuthorsOpen(false);
//       }
//     };

//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, []);

//   // =========================================================
//   // MAIN NAVIGATION ITEMS
//   // =========================================================

//   const navItems = [
//     {
//       name: "Home",
//       path: "/",
//     },
//     {
//       name: "About",
//       path: "/about",
//     },
//     {
//       name: "Committee",
//       path: "/committee",
//     },
//     {
//       name: "Program",
//       path: "/speakers",
//     },
//     {
//       name: "Important Dates",
//       path: "/important-dates",
//     },
//     {
//       name: "Venue",
//       path: "/venue",
//     },
//   ];

//   // =========================================================
//   // AUTHORS DROPDOWN ITEMS
//   // =========================================================

//   const authorItems = [
//     {
//       name: "Call For Papers",
//       path: "/call-for-papers",
//     },
//     {
//       name: "Guidelines & Policies",
//       path: "/guidelines",
//     },
//     {
//       name: "Tracks",
//       path: "/tracks",
//     },
//   ];

//   // =========================================================
//   // ACTIVE ROUTE
//   // =========================================================

//   const isActive = (path) => {
//     if (path === "/") {
//       return location.pathname === "/";
//     }

//     return location.pathname === path;
//   };

//   // =========================================================
//   // AUTHORS ACTIVE STATE
//   // =========================================================

//   const isAuthorsActive = authorItems.some(
//     (item) => location.pathname === item.path
//   );

//   // =========================================================
//   // NAVIGATION HANDLER
//   // =========================================================

//   const handleNavigation = () => {
//     setMenuOpen(false);
//     setAuthorsOpen(false);
//     setMobileAuthorsOpen(false);

//     window.scrollTo(0, 0);
//   };

//   // =========================================================
//   // RENDER
//   // =========================================================

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">

//       <div
//         className={`
//           mx-auto
//           transition-all
//           duration-700
//           ease-[cubic-bezier(0.22,1,0.36,1)]
//           ${scrolled ? "max-w-[1280px]" : "max-w-[1500px]"}
//           px-4 md:px-8 lg:px-12
//         `}
//       >

//         {/* =====================================================
//             NAVBAR
//         ====================================================== */}

//         <div
//           className={`
//             mt-3 md:mt-7
//             flex
//             items-center
//             justify-between
//             rounded-2xl
//             transition-all
//             duration-500

//             ${
//               scrolled
//                 ? `
//                   bg-[#051024]/70
//                   backdrop-blur-xl
//                   px-4 md:px-8
//                   py-3
//                   shadow-[0_15px_40px_rgba(0,0,0,0.25)]
//                   border
//                   border-cyan-400/20
//                 `
//                 : `
//                   bg-[#051024]/85
//                   backdrop-blur-md
//                   px-4 md:px-8
//                   py-3 md:py-4
//                   shadow-2xl
//                   border
//                   border-cyan-400/20
//                 `
//             }
//           `}
//         >

//           {/* ===================================================
//               LOGO
//           =================================================== */}

//           <div className="relative flex items-center flex-shrink-0">

//             <Link
//               to="/"
//               onClick={handleNavigation}
//             >
//               <img
//                 src={logo}
//                 alt="CYCRAI 2027"
//                 className={`
//                   w-auto
//                   object-contain
//                   transition-all
//                   duration-700

//                   ${
//                     scrolled
//                       ? "h-14 md:h-16 -my-3"
//                       : "h-16 md:h-20 -my-4"
//                   }
//                 `}
//               />
//             </Link>

//           </div>


//           {/* ===================================================
//               DESKTOP NAVIGATION
//           =================================================== */}

//           <nav className="hidden lg:flex items-center gap-5 xl:gap-6 2xl:gap-8">

//             {/* =================================================
//                 HOME
//             ================================================= */}

//             <Link
//               to="/"
//               onClick={handleNavigation}
//               className={`
//                 relative
//                 text-[13px]
//                 xl:text-[14px]
//                 2xl:text-[15px]
//                 font-medium
//                 tracking-wide
//                 whitespace-nowrap
//                 transition-all
//                 duration-300
//                 group

//                 ${
//                   isActive("/")
//                     ? "text-[#12B8E8]"
//                     : "text-white hover:text-[#12B8E8]"
//                 }
//               `}
//             >
//               Home

//               <span
//                 className={`
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-[2px]
//                   bg-gradient-to-r
//                   from-[#12B8E8]
//                   to-[#2D6CF2]
//                   rounded-full
//                   transition-all
//                   duration-300

//                   ${
//                     isActive("/")
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                   }
//                 `}
//               />
//             </Link>


//             {/* =================================================
//                 ABOUT
//             ================================================= */}

//             <Link
//               to="/about"
//               onClick={handleNavigation}
//               className={`
//                 relative
//                 text-[13px]
//                 xl:text-[14px]
//                 2xl:text-[15px]
//                 font-medium
//                 tracking-wide
//                 whitespace-nowrap
//                 transition-all
//                 duration-300
//                 group

//                 ${
//                   isActive("/about")
//                     ? "text-[#12B8E8]"
//                     : "text-white hover:text-[#12B8E8]"
//                 }
//               `}
//             >
//               About

//               <span
//                 className={`
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-[2px]
//                   bg-gradient-to-r
//                   from-[#12B8E8]
//                   to-[#2D6CF2]
//                   rounded-full
//                   transition-all
//                   duration-300

//                   ${
//                     isActive("/about")
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                   }
//                 `}
//               />
//             </Link>


//             {/* =================================================
//                 AUTHORS DROPDOWN
//             ================================================= */}

//             <div
//               ref={authorsRef}
//               className="relative"
//             >

//               <button
//                 type="button"
//                 onClick={() => setAuthorsOpen(!authorsOpen)}
//                 aria-expanded={authorsOpen}
//                 aria-haspopup="true"
//                 className={`
//                   relative
//                   flex
//                   items-center
//                   gap-1.5
//                   text-[13px]
//                   xl:text-[14px]
//                   2xl:text-[15px]
//                   font-medium
//                   tracking-wide
//                   whitespace-nowrap
//                   transition-all
//                   duration-300
//                   group

//                   ${
//                     isAuthorsActive || authorsOpen
//                       ? "text-[#12B8E8]"
//                       : "text-white hover:text-[#12B8E8]"
//                   }
//                 `}
//               >

//                 <span>Authors</span>

//                 <ChevronDown
//                   size={17}
//                   strokeWidth={2}
//                   className={`
//                     transition-transform
//                     duration-300

//                     ${
//                       authorsOpen
//                         ? "rotate-180"
//                         : "rotate-0"
//                     }
//                   `}
//                 />

//                 <span
//                   className={`
//                     absolute
//                     -bottom-2
//                     left-0
//                     h-[2px]
//                     rounded-full
//                     bg-gradient-to-r
//                     from-[#12B8E8]
//                     to-[#2D6CF2]
//                     transition-all
//                     duration-300

//                     ${
//                       isAuthorsActive || authorsOpen
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }
//                   `}
//                 />

//               </button>


//               {/* Authors Dropdown */}

//               {authorsOpen && (
//                 <div
//                   className="
//                     absolute
//                     top-full
//                     left-1/2
//                     -translate-x-1/2
//                     mt-5
//                     w-[270px]
//                     rounded-2xl
//                     border
//                     border-cyan-400/20
//                     bg-[#051024]/95
//                     backdrop-blur-2xl
//                     shadow-[0_20px_50px_rgba(0,0,0,0.45)]
//                     overflow-hidden
//                     z-[100]
//                   "
//                 >

//                   <div className="relative py-2">

//                     {authorItems.map((item, index) => (

//                       <Link
//                         key={item.name}
//                         to={item.path}
//                         onClick={handleNavigation}
//                         className={`
//                           group
//                           flex
//                           items-center
//                           gap-3
//                           px-5
//                           py-4
//                           text-[15px]
//                           font-medium
//                           transition-all
//                           duration-300

//                           ${
//                             isActive(item.path)
//                               ? "text-[#12B8E8] bg-cyan-400/10"
//                               : "text-white hover:text-[#12B8E8] hover:bg-white/5"
//                           }

//                           ${
//                             index !== authorItems.length - 1
//                               ? "border-b border-white/5"
//                               : ""
//                           }
//                         `}
//                       >

//                         <span
//                           className="
//                             flex
//                             items-center
//                             justify-center
//                             w-7
//                             h-7
//                             rounded-lg
//                             text-xs
//                             font-bold
//                             bg-cyan-500/10
//                             border
//                             border-cyan-400/20
//                             text-cyan-300
//                           "
//                         >
//                           {String(index + 1).padStart(2, "0")}
//                         </span>

//                         <span>
//                           {item.name}
//                         </span>

//                       </Link>

//                     ))}

//                   </div>

//                 </div>
//               )}

//             </div>


//             {/* =================================================
//                 REGISTRATION
//             ================================================= */}

//             <Link
//               to="/registration"
//               onClick={handleNavigation}
//               className={`
//                 relative
//                 text-[13px]
//                 xl:text-[14px]
//                 2xl:text-[15px]
//                 font-medium
//                 tracking-wide
//                 whitespace-nowrap
//                 transition-all
//                 duration-300
//                 group

//                 ${
//                   isActive("/registration")
//                     ? "text-[#12B8E8]"
//                     : "text-white hover:text-[#12B8E8]"
//                 }
//               `}
//             >
//               Registration

//               <span
//                 className={`
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-[2px]
//                   bg-gradient-to-r
//                   from-[#12B8E8]
//                   to-[#2D6CF2]
//                   rounded-full
//                   transition-all
//                   duration-300

//                   ${
//                     isActive("/registration")
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                   }
//                 `}
//               />
//             </Link>


//             {/* =================================================
//                 COMMITTEE
//             ================================================= */}

//             <Link
//               to="/committee"
//               onClick={handleNavigation}
//               className={`
//                 relative
//                 text-[13px]
//                 xl:text-[14px]
//                 2xl:text-[15px]
//                 font-medium
//                 tracking-wide
//                 whitespace-nowrap
//                 transition-all
//                 duration-300
//                 group

//                 ${
//                   isActive("/committee")
//                     ? "text-[#12B8E8]"
//                     : "text-white hover:text-[#12B8E8]"
//                 }
//               `}
//             >
//               Committee

//               <span
//                 className={`
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-[2px]
//                   bg-gradient-to-r
//                   from-[#12B8E8]
//                   to-[#2D6CF2]
//                   rounded-full
//                   transition-all
//                   duration-300

//                   ${
//                     isActive("/committee")
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                   }
//                 `}
//               />
//             </Link>


//             {/* =================================================
//                 PROGRAM
//             ================================================= */}

//             <Link
//               to="/speakers"
//               onClick={handleNavigation}
//               className={`
//                 relative
//                 text-[13px]
//                 xl:text-[14px]
//                 2xl:text-[15px]
//                 font-medium
//                 tracking-wide
//                 whitespace-nowrap
//                 transition-all
//                 duration-300
//                 group

//                 ${
//                   isActive("/speakers")
//                     ? "text-[#12B8E8]"
//                     : "text-white hover:text-[#12B8E8]"
//                 }
//               `}
//             >
//               Program

//               <span
//                 className={`
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-[2px]
//                   bg-gradient-to-r
//                   from-[#12B8E8]
//                   to-[#2D6CF2]
//                   rounded-full
//                   transition-all
//                   duration-300

//                   ${
//                     isActive("/speakers")
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                   }
//                 `}
//               />
//             </Link>


//             {/* =================================================
//                 IMPORTANT DATES
//             ================================================= */}

//             <Link
//               to="/important-dates"
//               onClick={handleNavigation}
//               className={`
//                 relative
//                 text-[13px]
//                 xl:text-[14px]
//                 2xl:text-[15px]
//                 font-medium
//                 tracking-wide
//                 whitespace-nowrap
//                 transition-all
//                 duration-300
//                 group

//                 ${
//                   isActive("/important-dates")
//                     ? "text-[#12B8E8]"
//                     : "text-white hover:text-[#12B8E8]"
//                 }
//               `}
//             >
//               Important Dates

//               <span
//                 className={`
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-[2px]
//                   bg-gradient-to-r
//                   from-[#12B8E8]
//                   to-[#2D6CF2]
//                   rounded-full
//                   transition-all
//                   duration-300

//                   ${
//                     isActive("/important-dates")
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                   }
//                 `}
//               />
//             </Link>


//             {/* =================================================
//                 VENUE
//             ================================================= */}

//             <Link
//               to="/venue"
//               onClick={handleNavigation}
//               className={`
//                 relative
//                 text-[13px]
//                 xl:text-[14px]
//                 2xl:text-[15px]
//                 font-medium
//                 tracking-wide
//                 whitespace-nowrap
//                 transition-all
//                 duration-300
//                 group

//                 ${
//                   isActive("/venue")
//                     ? "text-[#12B8E8]"
//                     : "text-white hover:text-[#12B8E8]"
//                 }
//               `}
//             >
//               Venue

//               <span
//                 className={`
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-[2px]
//                   bg-gradient-to-r
//                   from-[#12B8E8]
//                   to-[#2D6CF2]
//                   rounded-full
//                   transition-all
//                   duration-300

//                   ${
//                     isActive("/venue")
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                   }
//                 `}
//               />
//             </Link>

//           </nav>


//           {/* ===================================================
//               DESKTOP CONTACT BUTTON
//           =================================================== */}

//           <Link
//             to="/contact"
//             onClick={handleNavigation}
//             className={`
//               hidden
//               lg:flex
//               items-center
//               justify-center
//               rounded-full
//               bg-gradient-to-r
//               from-[#12B8E8]
//               via-[#18AEEF]
//               to-[#2D6CF2]
//               text-white
//               font-semibold
//               tracking-wide
//               text-[12px]
//               xl:text-[13px]
//               2xl:text-[14px]
//               shadow-[0_8px_25px_rgba(37,108,242,0.35)]
//               transition-all
//               duration-300
//               hover:scale-105
//               hover:shadow-[0_12px_35px_rgba(37,108,242,0.55)]
//               hover:brightness-110
//               flex-shrink-0

//               ${scrolled ? "px-6 py-3" : "px-7 py-3.5"}
//             `}
//           >
//             CONTACT US
//           </Link>


//           {/* ===================================================
//               MOBILE MENU BUTTON
//           =================================================== */}

//           <button
//             onClick={() => {
//               setMenuOpen(!menuOpen);
//               setAuthorsOpen(false);
//             }}
//             className="
//               lg:hidden
//               text-white
//               flex
//               items-center
//               justify-center
//               min-w-[40px]
//               min-h-[40px]
//               flex-shrink-0
//               rounded-xl
//               hover:bg-white/5
//               transition-all
//             "
//             aria-label="Toggle navigation menu"
//             aria-expanded={menuOpen}
//           >

//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >

//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={
//                   menuOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16M4 18h16"
//                 }
//               />

//             </svg>

//           </button>

//         </div>


//         {/* =====================================================
//             MOBILE DROPDOWN
//         ====================================================== */}

//         {menuOpen && (

//           <div
//             className="
//               lg:hidden
//               mt-2
//               rounded-2xl
//               bg-[#051024]/95
//               backdrop-blur-xl
//               border
//               border-cyan-400/20
//               shadow-2xl
//               overflow-hidden
//             "
//           >

//             {/* =================================================
//                 HOME
//             ================================================= */}

//             <Link
//               to="/"
//               onClick={handleNavigation}
//               className={`
//                 block
//                 w-full
//                 text-left
//                 px-6
//                 py-4
//                 border-b
//                 border-white/10
//                 transition-all
//                 duration-300

//                 ${
//                   isActive("/")
//                     ? "text-[#12B8E8] bg-cyan-400/5"
//                     : "text-white hover:text-[#12B8E8] hover:bg-white/5"
//                 }
//               `}
//             >
//               Home
//             </Link>


//             {/* =================================================
//                 ABOUT
//             ================================================= */}

//             <Link
//               to="/about"
//               onClick={handleNavigation}
//               className={`
//                 block
//                 w-full
//                 text-left
//                 px-6
//                 py-4
//                 border-b
//                 border-white/10
//                 transition-all
//                 duration-300

//                 ${
//                   isActive("/about")
//                     ? "text-[#12B8E8] bg-cyan-400/5"
//                     : "text-white hover:text-[#12B8E8] hover:bg-white/5"
//                 }
//               `}
//             >
//               About
//             </Link>


//             {/* =================================================
//                 MOBILE AUTHORS DROPDOWN
//             ================================================= */}

//             <div className="border-b border-white/10">

//               <button
//                 type="button"
//                 onClick={() =>
//                   setMobileAuthorsOpen(!mobileAuthorsOpen)
//                 }
//                 className={`
//                   w-full
//                   flex
//                   items-center
//                   justify-between
//                   px-6
//                   py-4
//                   text-left
//                   transition-all
//                   duration-300

//                   ${
//                     isAuthorsActive
//                       ? "text-[#12B8E8] bg-cyan-400/5"
//                       : "text-white hover:text-[#12B8E8] hover:bg-white/5"
//                   }
//                 `}
//               >

//                 <span className="font-medium">
//                   Authors
//                 </span>

//                 <ChevronDown
//                   size={20}
//                   className={`
//                     transition-transform
//                     duration-300

//                     ${
//                       mobileAuthorsOpen
//                         ? "rotate-180"
//                         : ""
//                     }
//                   `}
//                 />

//               </button>


//               {/* Authors Submenu */}

//               {mobileAuthorsOpen && (

//                 <div
//                   className="
//                     bg-[#020817]/70
//                     border-t
//                     border-cyan-400/10
//                   "
//                 >

//                   {authorItems.map((item, index) => (

//                     <Link
//                       key={item.name}
//                       to={item.path}
//                       onClick={handleNavigation}
//                       className={`
//                         flex
//                         items-center
//                         gap-3
//                         px-8
//                         py-4
//                         text-sm
//                         border-b
//                         border-white/5
//                         transition-all
//                         duration-300

//                         ${
//                           isActive(item.path)
//                             ? "text-[#12B8E8] bg-cyan-400/5"
//                             : "text-slate-300 hover:text-[#12B8E8] hover:bg-white/5"
//                         }
//                       `}
//                     >

//                       <span
//                         className="
//                           flex
//                           items-center
//                           justify-center
//                           w-7
//                           h-7
//                           rounded-lg
//                           bg-cyan-500/10
//                           border
//                           border-cyan-400/20
//                           text-xs
//                           font-bold
//                           text-cyan-300
//                         "
//                       >
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       <span>
//                         {item.name}
//                       </span>

//                     </Link>

//                   ))}

//                 </div>

//               )}

//             </div>


//             {/* =================================================
//                 REGISTRATION
//             ================================================= */}

//             <Link
//               to="/registration"
//               onClick={handleNavigation}
//               className={`
//                 block
//                 w-full
//                 text-left
//                 px-6
//                 py-4
//                 border-b
//                 border-white/10
//                 transition-all
//                 duration-300

//                 ${
//                   isActive("/registration")
//                     ? "text-[#12B8E8] bg-cyan-400/5"
//                     : "text-white hover:text-[#12B8E8] hover:bg-white/5"
//                 }
//               `}
//             >
//               Registration
//             </Link>


//             {/* =================================================
//                 COMMITTEE
//             ================================================= */}

//             <Link
//               to="/committee"
//               onClick={handleNavigation}
//               className={`
//                 block
//                 w-full
//                 text-left
//                 px-6
//                 py-4
//                 border-b
//                 border-white/10
//                 transition-all
//                 duration-300

//                 ${
//                   isActive("/committee")
//                     ? "text-[#12B8E8] bg-cyan-400/5"
//                     : "text-white hover:text-[#12B8E8] hover:bg-white/5"
//                 }
//               `}
//             >
//               Committee
//             </Link>


//             {/* =================================================
//                 PROGRAM
//             ================================================= */}

//             <Link
//               to="/speakers"
//               onClick={handleNavigation}
//               className={`
//                 block
//                 w-full
//                 text-left
//                 px-6
//                 py-4
//                 border-b
//                 border-white/10
//                 transition-all
//                 duration-300

//                 ${
//                   isActive("/speakers")
//                     ? "text-[#12B8E8] bg-cyan-400/5"
//                     : "text-white hover:text-[#12B8E8] hover:bg-white/5"
//                 }
//               `}
//             >
//               Program
//             </Link>


//             {/* =================================================
//                 IMPORTANT DATES
//             ================================================= */}

//             <Link
//               to="/important-dates"
//               onClick={handleNavigation}
//               className={`
//                 block
//                 w-full
//                 text-left
//                 px-6
//                 py-4
//                 border-b
//                 border-white/10
//                 transition-all
//                 duration-300

//                 ${
//                   isActive("/important-dates")
//                     ? "text-[#12B8E8] bg-cyan-400/5"
//                     : "text-white hover:text-[#12B8E8] hover:bg-white/5"
//                 }
//               `}
//             >
//               Important Dates
//             </Link>


//             {/* =================================================
//                 VENUE
//             ================================================= */}

//             <Link
//               to="/venue"
//               onClick={handleNavigation}
//               className={`
//                 block
//                 w-full
//                 text-left
//                 px-6
//                 py-4
//                 border-b
//                 border-white/10
//                 transition-all
//                 duration-300

//                 ${
//                   isActive("/venue")
//                     ? "text-[#12B8E8] bg-cyan-400/5"
//                     : "text-white hover:text-[#12B8E8] hover:bg-white/5"
//                 }
//               `}
//             >
//               Venue
//             </Link>


//             {/* =================================================
//                 MOBILE CONTACT
//             ================================================= */}

//             <Link
//               to="/contact"
//               onClick={handleNavigation}
//               className="
//                 block
//                 w-full
//                 py-4
//                 text-center
//                 font-semibold
//                 text-white
//                 bg-gradient-to-r
//                 from-[#12B8E8]
//                 via-[#18AEEF]
//                 to-[#2D6CF2]
//                 hover:brightness-110
//                 transition-all
//                 duration-300
//               "
//             >
//               CONTACT US
//             </Link>

//           </div>

//         )}

//       </div>

//     </header>
//   );
// }


// import { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ChevronDown } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [authorsOpen, setAuthorsOpen] = useState(false);
//   const [mobileAuthorsOpen, setMobileAuthorsOpen] = useState(false);

//   const location = useLocation();
//   const authorsRef = useRef(null);
//   const mobileMenuRef = useRef(null);

//   // =========================================================
//   // MAIN NAVIGATION ITEMS
//   // =========================================================

//   const navItems = [
//     {
//       name: "Home",
//       path: "/",
//     },
//     {
//       name: "About",
//       path: "/about",
//     },
//     {
//       name: "Registration",
//       path: "/registration",
//     },
//     {
//       name: "Committee",
//       path: "/committee",
//     },
//     {
//       name: "Program",
//       path: "/speakers",
//     },
//     {
//       name: "Important Dates",
//       path: "/important-dates",
//     },
//     {
//       name: "Venue",
//       path: "/venue",
//     },
//   ];

//   // =========================================================
//   // AUTHORS DROPDOWN
//   // =========================================================

//   const authorItems = [
//     {
//       name: "Call For Papers",
//       path: "/call-for-papers",
//     },
//     {
//       name: "Guidelines & Policies",
//       path: "/guidelines",
//     },
//     {
//       name: "Tracks",
//       path: "/tracks",
//     },
//   ];

//   // =========================================================
//   // ACTIVE ROUTE
//   // =========================================================

//   const isActive = (path) => {
//     if (path === "/") {
//       return location.pathname === "/";
//     }

//     return location.pathname === path;
//   };

//   // =========================================================
//   // AUTHORS ACTIVE STATE
//   // =========================================================

//   const isAuthorsActive = authorItems.some(
//     (item) => location.pathname === item.path
//   );

//   // =========================================================
//   // NAVIGATION HANDLER
//   // =========================================================

//   const handleNavigation = () => {
//     setMenuOpen(false);
//     setAuthorsOpen(false);
//     setMobileAuthorsOpen(false);

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   // =========================================================
//   // CLOSE DESKTOP AUTHORS DROPDOWN WHEN CLICKING OUTSIDE
//   // =========================================================

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         authorsRef.current &&
//         !authorsRef.current.contains(event.target)
//       ) {
//         setAuthorsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // =========================================================
//   // ESCAPE KEY
//   // =========================================================

//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         setMenuOpen(false);
//         setAuthorsOpen(false);
//         setMobileAuthorsOpen(false);
//       }
//     };

//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, []);

//   // =========================================================
//   // CLOSE MOBILE MENU WHEN ROUTE CHANGES
//   // =========================================================

//   useEffect(() => {
//     setMenuOpen(false);
//     setAuthorsOpen(false);
//     setMobileAuthorsOpen(false);

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [location.pathname]);

//   // =========================================================
//   // PREVENT BACKGROUND SCROLL WHEN MOBILE MENU IS OPEN
//   // =========================================================

//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   // =========================================================
//   // DESKTOP NAVIGATION ITEM
//   // =========================================================

//   const DesktopNavItem = ({ item }) => {
//     const active = isActive(item.path);

//     return (
//       <Link
//         to={item.path}
//         onClick={handleNavigation}
//         className={`
//           group
//           relative
//           flex
//           items-center

//           px-6
//           py-4

//           text-[15px]
//           xl:text-[16px]

//           font-medium
//           tracking-wide

//           transition-all
//           duration-300

//           overflow-hidden

//           ${
//             active
//               ? "text-[#12B8E8]"
//               : "text-white/90 hover:text-[#12B8E8]"
//           }
//         `}
//       >
//         {/* Hover background */}

//         <span
//           className={`
//             absolute
//             inset-0

//             bg-gradient-to-r
//             from-[#12B8E8]/10
//             via-[#12B8E8]/5
//             to-transparent

//             transition-opacity
//             duration-300

//             ${
//               active
//                 ? "opacity-100"
//                 : "opacity-0 group-hover:opacity-100"
//             }
//           `}
//         />

//         {/* Active left indicator */}

//         <span
//           className={`
//             absolute
//             left-0
//             top-1/2
//             -translate-y-1/2

//             w-[4px]

//             rounded-r-full

//             bg-gradient-to-b
//             from-[#12B8E8]
//             to-[#2D6CF2]

//             shadow-[0_0_15px_rgba(18,184,232,0.8)]

//             transition-all
//             duration-300

//             ${
//               active
//                 ? "h-14 opacity-100"
//                 : "h-0 opacity-0 group-hover:h-10 group-hover:opacity-100"
//             }
//           `}
//         />

//         {/* Text */}

//         <span className="relative z-10">
//           {item.name}
//         </span>
//       </Link>
//     );
//   };

//   // =========================================================
//   // RENDER
//   // =========================================================

//   return (
//     <>
//       {/* =====================================================
//           DESKTOP FLOATING NAVBAR
//       ====================================================== */}

//       <aside
//         className="
//           hidden
//           lg:flex

//           fixed
//           left-7
//           xl:left-9
//           top-1/2
//           -translate-y-1/2

//           z-[100]

//           w-[225px]
//           xl:w-[245px]

//           flex-col

//           rounded-[24px]

//           border
//           border-cyan-400/20

//           bg-[#020B18]/45

//           backdrop-blur-2xl

//           shadow-[0_20px_70px_rgba(0,0,0,0.5)]

//           overflow-visible

//           transition-all
//           duration-500

//           hover:border-cyan-400/35
//           hover:bg-[#020B18]/55
//         "
//       >
//         {/* Top glow */}

//         <div
//           className="
//             absolute
//             top-0
//             left-8
//             right-8

//             h-px

//             bg-gradient-to-r
//             from-transparent
//             via-cyan-400/60
//             to-transparent
//           "
//         />

//         {/* =================================================
//             NAVIGATION
//         ================================================== */}

//         <nav className="py-5">
//           {/* HOME */}

//           <DesktopNavItem item={navItems[0]} />

//           {/* ABOUT */}

//           <DesktopNavItem item={navItems[1]} />

//           {/* =================================================
//               AUTHORS
//           ================================================== */}

//           <div
//             ref={authorsRef}
//             className="relative"
//           >
//             <button
//               type="button"
//               onClick={() => setAuthorsOpen(!authorsOpen)}
//               aria-expanded={authorsOpen}
//               aria-haspopup="true"
//               className={`
//                 group
//                 relative

//                 flex
//                 w-full
//                 items-center

//                 px-6
//                 py-4

//                 text-[15px]
//                 xl:text-[16px]

//                 font-medium
//                 tracking-wide

//                 transition-all
//                 duration-300

//                 overflow-hidden

//                 ${
//                   isAuthorsActive || authorsOpen
//                     ? "text-[#12B8E8]"
//                     : "text-white/90 hover:text-[#12B8E8]"
//                 }
//               `}
//             >
//               {/* Hover background */}

//               <span
//                 className={`
//                   absolute
//                   inset-0

//                   bg-gradient-to-r
//                   from-[#12B8E8]/10
//                   via-[#12B8E8]/5
//                   to-transparent

//                   transition-opacity
//                   duration-300

//                   ${
//                     isAuthorsActive || authorsOpen
//                       ? "opacity-100"
//                       : "opacity-0 group-hover:opacity-100"
//                   }
//                 `}
//               />

//               {/* Left indicator */}

//               <span
//                 className={`
//                   absolute
//                   left-0
//                   top-1/2
//                   -translate-y-1/2

//                   w-[4px]

//                   rounded-r-full

//                   bg-gradient-to-b
//                   from-[#12B8E8]
//                   to-[#2D6CF2]

//                   shadow-[0_0_15px_rgba(18,184,232,0.8)]

//                   transition-all
//                   duration-300

//                   ${
//                     isAuthorsActive || authorsOpen
//                       ? "h-14 opacity-100"
//                       : "h-0 opacity-0 group-hover:h-10 group-hover:opacity-100"
//                   }
//                 `}
//               />

//               <span className="relative z-10 flex-1 text-left">
//                 Authors
//               </span>

//               <ChevronDown
//                 size={18}
//                 strokeWidth={2}
//                 className={`
//                   relative
//                   z-10

//                   transition-transform
//                   duration-300

//                   ${
//                     authorsOpen
//                       ? "rotate-180"
//                       : "rotate-0"
//                   }
//                 `}
//               />
//             </button>

//             {/* =================================================
//                 AUTHORS DROPDOWN
//             ================================================== */}

//             <div
//               className={`
//                 absolute

//                 left-full
//                 top-1/2
//                 -translate-y-1/2

//                 ml-3

//                 w-[255px]

//                 rounded-2xl

//                 border
//                 border-cyan-400/20

//                 bg-[#051024]/90

//                 backdrop-blur-2xl

//                 shadow-[0_20px_50px_rgba(0,0,0,0.5)]

//                 overflow-hidden

//                 transition-all
//                 duration-300

//                 origin-left

//                 ${
//                   authorsOpen
//                     ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
//                     : "opacity-0 scale-95 -translate-x-2 pointer-events-none"
//                 }
//               `}
//             >
//               {/* Dropdown top glow */}

//               <div
//                 className="
//                   h-px

//                   bg-gradient-to-r
//                   from-transparent
//                   via-cyan-400/50
//                   to-transparent
//                 "
//               />

//               <div className="py-2">
//                 {authorItems.map((item, index) => (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     onClick={handleNavigation}
//                     className={`
//                       group/author

//                       flex
//                       items-center
//                       gap-3

//                       px-5
//                       py-4

//                       text-[14px]

//                       border-b
//                       border-white/5

//                       last:border-b-0

//                       transition-all
//                       duration-300

//                       ${
//                         isActive(item.path)
//                           ? "text-[#12B8E8] bg-cyan-400/10"
//                           : "text-white/80 hover:text-[#12B8E8] hover:bg-cyan-400/5"
//                       }
//                     `}
//                   >
//                     <span
//                       className="
//                         flex
//                         h-7
//                         w-7

//                         flex-shrink-0

//                         items-center
//                         justify-center

//                         rounded-lg

//                         border
//                         border-cyan-400/20

//                         bg-cyan-400/5

//                         text-[10px]
//                         font-bold

//                         text-cyan-300

//                         transition-all
//                         duration-300

//                         group-hover/author:border-cyan-400/50
//                       "
//                     >
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <span>
//                       {item.name}
//                     </span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* REGISTRATION */}

//           <DesktopNavItem item={navItems[2]} />

//           {/* COMMITTEE */}

//           <DesktopNavItem item={navItems[3]} />

//           {/* PROGRAM */}

//           <DesktopNavItem item={navItems[4]} />

//           {/* IMPORTANT DATES */}

//           <DesktopNavItem item={navItems[5]} />

//           {/* VENUE */}

//           <DesktopNavItem item={navItems[6]} />
//         </nav>

//         {/* =================================================
//             DIVIDER
//         ================================================== */}

//         <div
//           className="
//             mx-6

//             h-px

//             bg-gradient-to-r
//             from-transparent
//             via-cyan-400/20
//             to-transparent
//           "
//         />

//         {/* =================================================
//             CONTACT US
//         ================================================== */}

//         <Link
//           to="/contact"
//           onClick={handleNavigation}
//           className="
//             group/contact

//             relative

//             mx-4
//             my-5

//             flex
//             items-center
//             justify-center

//             rounded-xl

//             border
//             border-cyan-400/25

//             bg-cyan-400/5

//             px-4
//             py-3

//             text-[13px]

//             font-semibold
//             tracking-wider

//             text-white

//             overflow-hidden

//             transition-all
//             duration-300

//             hover:border-cyan-400/50
//             hover:bg-cyan-400/10

//             hover:shadow-[0_0_25px_rgba(18,184,232,0.18)]
//           "
//         >
//           {/* Animated shine */}

//           <span
//             className="
//               absolute
//               inset-0

//               bg-gradient-to-r
//               from-transparent
//               via-white/10
//               to-transparent

//               -translate-x-full

//               group-hover/contact:translate-x-full

//               transition-transform
//               duration-700
//             "
//           />

//           <span className="relative z-10">
//             CONTACT US
//           </span>
//         </Link>

//         {/* Bottom glow */}

//         <div
//           className="
//             absolute
//             bottom-0
//             left-8
//             right-8

//             h-px

//             bg-gradient-to-r
//             from-transparent
//             via-cyan-400/40
//             to-transparent
//           "
//         />
//       </aside>

//       {/* =====================================================
//           MOBILE MENU BUTTON
//       ====================================================== */}

//       <button
//         type="button"
//         onClick={() => {
//           setMenuOpen(!menuOpen);
//           setAuthorsOpen(false);
//         }}
//         aria-label="Toggle navigation menu"
//         aria-expanded={menuOpen}
//         className="
//           lg:hidden

//           fixed

//           top-5
//           right-5

//           z-[200]

//           flex
//           h-12
//           w-12

//           items-center
//           justify-center

//           rounded-2xl

//           border
//           border-cyan-400/30

//           bg-[#020B18]/60

//           backdrop-blur-xl

//           text-[#12B8E8]

//           shadow-[0_10px_35px_rgba(0,0,0,0.45)]

//           transition-all
//           duration-300

//           hover:border-cyan-400/60
//           hover:bg-[#020B18]/80

//           active:scale-95
//         "
//       >
//         {menuOpen ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         )}
//       </button>

//       {/* =====================================================
//           MOBILE DARK OVERLAY
//       ====================================================== */}

//       <div
//         onClick={() => setMenuOpen(false)}
//         className={`
//           lg:hidden

//           fixed
//           inset-0

//           z-[150]

//           bg-black/55

//           backdrop-blur-[2px]

//           transition-opacity
//           duration-300

//           ${
//             menuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           }
//         `}
//       />

//       {/* =====================================================
//           MOBILE LEFT SIDEBAR
//       ====================================================== */}

//       <aside
//         ref={mobileMenuRef}
//         className={`
//           lg:hidden

//           fixed
//           left-0
//           top-0
//           bottom-0

//           z-[180]

//           w-[290px]
//           max-w-[82vw]

//           flex
//           flex-col

//           border-r
//           border-cyan-400/20

//           bg-[#020B18]/92

//           backdrop-blur-2xl

//           shadow-[20px_0_60px_rgba(0,0,0,0.55)]

//           transition-transform
//           duration-500

//           ease-[cubic-bezier(0.22,1,0.36,1)]

//           ${
//             menuOpen
//               ? "translate-x-0"
//               : "-translate-x-full"
//           }
//         `}
//       >
//         {/* =================================================
//             MOBILE HEADER
//         ================================================== */}

//         <div
//           className="
//             flex
//             items-center
//             justify-between

//             px-6
//             py-6

//             border-b
//             border-white/5
//           "
//         >
//           <div>
//             <p
//               className="
//                 text-[11px]
//                 tracking-[0.35em]
//                 text-cyan-400
//               "
//             >
//               CYCRAI
//             </p>

//             <p
//               className="
//                 mt-1

//                 text-xl
//                 font-bold
//                 tracking-wide

//                 text-white
//               "
//             >
//               2027
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={() => setMenuOpen(false)}
//             className="
//               flex
//               h-10
//               w-10

//               items-center
//               justify-center

//               rounded-xl

//               border
//               border-white/10

//               text-white/70

//               transition-all
//               duration-300

//               hover:border-cyan-400/40
//               hover:text-cyan-400
//             "
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* =================================================
//             MOBILE NAVIGATION
//         ================================================== */}

//         <nav className="flex-1 overflow-y-auto py-4">
//           {/* HOME */}

//           <Link
//             to="/"
//             onClick={handleNavigation}
//             className={`
//               relative

//               flex
//               items-center

//               px-6
//               py-4

//               border-l-[3px]

//               text-[15px]

//               font-medium

//               transition-all
//               duration-300

//               ${
//                 isActive("/")
//                   ? "border-[#12B8E8] bg-cyan-400/10 text-[#12B8E8]"
//                   : "border-transparent text-white/85 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-[#12B8E8]"
//               }
//             `}
//           >
//             Home
//           </Link>

//           {/* ABOUT */}

//           <Link
//             to="/about"
//             onClick={handleNavigation}
//             className={`
//               flex
//               items-center

//               px-6
//               py-4

//               border-l-[3px]

//               text-[15px]

//               font-medium

//               transition-all
//               duration-300

//               ${
//                 isActive("/about")
//                   ? "border-[#12B8E8] bg-cyan-400/10 text-[#12B8E8]"
//                   : "border-transparent text-white/85 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-[#12B8E8]"
//               }
//             `}
//           >
//             About
//           </Link>

//           {/* =================================================
//               AUTHORS
//           ================================================== */}

//           <div>
//             <button
//               type="button"
//               onClick={() =>
//                 setMobileAuthorsOpen(!mobileAuthorsOpen)
//               }
//               className={`
//                 flex
//                 w-full
//                 items-center

//                 px-6
//                 py-4

//                 border-l-[3px]

//                 text-[15px]

//                 font-medium

//                 transition-all
//                 duration-300

//                 ${
//                   isAuthorsActive
//                     ? "border-[#12B8E8] bg-cyan-400/10 text-[#12B8E8]"
//                     : "border-transparent text-white/85 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-[#12B8E8]"
//                 }
//               `}
//             >
//               <span className="flex-1 text-left">
//                 Authors
//               </span>

//               <ChevronDown
//                 size={19}
//                 className={`
//                   transition-transform
//                   duration-300

//                   ${
//                     mobileAuthorsOpen
//                       ? "rotate-180"
//                       : ""
//                   }
//                 `}
//               />
//             </button>

//             {/* Authors submenu */}

//             <div
//               className={`
//                 overflow-hidden

//                 bg-[#010713]/70

//                 transition-all
//                 duration-300

//                 ${
//                   mobileAuthorsOpen
//                     ? "max-h-[220px]"
//                     : "max-h-0"
//                 }
//               `}
//             >
//               {authorItems.map((item, index) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   onClick={handleNavigation}
//                   className={`
//                     flex
//                     items-center
//                     gap-3

//                     pl-10
//                     pr-6
//                     py-3.5

//                     text-sm

//                     transition-all
//                     duration-300

//                     ${
//                       isActive(item.path)
//                         ? "text-[#12B8E8] bg-cyan-400/10"
//                         : "text-white/65 hover:bg-cyan-400/5 hover:text-[#12B8E8]"
//                     }
//                   `}
//                 >
//                   <span
//                     className="
//                       flex
//                       h-6
//                       w-6

//                       items-center
//                       justify-center

//                       rounded-md

//                       border
//                       border-cyan-400/20

//                       bg-cyan-400/5

//                       text-[9px]
//                       font-bold

//                       text-cyan-300
//                     "
//                   >
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* REGISTRATION */}

//           <Link
//             to="/registration"
//             onClick={handleNavigation}
//             className={`
//               flex
//               items-center

//               px-6
//               py-4

//               border-l-[3px]

//               text-[15px]

//               font-medium

//               transition-all
//               duration-300

//               ${
//                 isActive("/registration")
//                   ? "border-[#12B8E8] bg-cyan-400/10 text-[#12B8E8]"
//                   : "border-transparent text-white/85 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-[#12B8E8]"
//               }
//             `}
//           >
//             Registration
//           </Link>

//           {/* COMMITTEE */}

//           <Link
//             to="/committee"
//             onClick={handleNavigation}
//             className={`
//               flex
//               items-center

//               px-6
//               py-4

//               border-l-[3px]

//               text-[15px]

//               font-medium

//               transition-all
//               duration-300

//               ${
//                 isActive("/committee")
//                   ? "border-[#12B8E8] bg-cyan-400/10 text-[#12B8E8]"
//                   : "border-transparent text-white/85 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-[#12B8E8]"
//               }
//             `}
//           >
//             Committee
//           </Link>

//           {/* PROGRAM */}

//           <Link
//             to="/speakers"
//             onClick={handleNavigation}
//             className={`
//               flex
//               items-center

//               px-6
//               py-4

//               border-l-[3px]

//               text-[15px]

//               font-medium

//               transition-all
//               duration-300

//               ${
//                 isActive("/speakers")
//                   ? "border-[#12B8E8] bg-cyan-400/10 text-[#12B8E8]"
//                   : "border-transparent text-white/85 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-[#12B8E8]"
//               }
//             `}
//           >
//             Program
//           </Link>

//           {/* IMPORTANT DATES */}

//           <Link
//             to="/important-dates"
//             onClick={handleNavigation}
//             className={`
//               flex
//               items-center

//               px-6
//               py-4

//               border-l-[3px]

//               text-[15px]

//               font-medium

//               transition-all
//               duration-300

//               ${
//                 isActive("/important-dates")
//                   ? "border-[#12B8E8] bg-cyan-400/10 text-[#12B8E8]"
//                   : "border-transparent text-white/85 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-[#12B8E8]"
//               }
//             `}
//           >
//             Important Dates
//           </Link>

//           {/* VENUE */}

//           <Link
//             to="/venue"
//             onClick={handleNavigation}
//             className={`
//               flex
//               items-center

//               px-6
//               py-4

//               border-l-[3px]

//               text-[15px]

//               font-medium

//               transition-all
//               duration-300

//               ${
//                 isActive("/venue")
//                   ? "border-[#12B8E8] bg-cyan-400/10 text-[#12B8E8]"
//                   : "border-transparent text-white/85 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-[#12B8E8]"
//               }
//             `}
//           >
//             Venue
//           </Link>
//         </nav>

//         {/* =================================================
//             MOBILE CONTACT
//         ================================================== */}

//         <div
//           className="
//             border-t
//             border-white/5

//             p-5
//           "
//         >
//           <Link
//             to="/contact"
//             onClick={handleNavigation}
//             className="
//               block
//               w-full

//               rounded-xl

//               bg-gradient-to-r
//               from-[#12B8E8]
//               via-[#18AEEF]
//               to-[#2D6CF2]

//               px-5
//               py-3.5

//               text-center

//               text-sm
//               font-semibold
//               tracking-wide

//               text-white

//               shadow-[0_8px_25px_rgba(37,108,242,0.25)]

//               transition-all
//               duration-300

//               hover:brightness-110
//               hover:shadow-[0_10px_30px_rgba(37,108,242,0.4)]
//             "
//           >
//             CONTACT US
//           </Link>
//         </div>
//       </aside>
//     </>
//   );
// }






// import { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   ChevronDown,
//   Menu,
//   X,
//   Home,
//   UserRound,
//   PenLine,
//   CreditCard,
//   UsersRound,
//   CalendarDays,
//   Clock3,
//   MapPin,
// } from "lucide-react";

// export default function Navbar() {
//   const location = useLocation();

//   // =========================================================
//   // STATES
//   // =========================================================

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [authorsOpen, setAuthorsOpen] = useState(false);
//   const [mobileAuthorsOpen, setMobileAuthorsOpen] = useState(false);

//   const [desktopExpanded, setDesktopExpanded] = useState(false);

//   const collapseTimerRef = useRef(null);

//   // =========================================================
//   // NAVIGATION
//   // =========================================================

//   const navItems = [
//     {
//       name: "Home",
//       path: "/",
//       icon: Home,
//     },
//     {
//       name: "About",
//       path: "/about",
//       icon: UserRound,
//     },
//     {
//       name: "Registration",
//       path: "/registration",
//       icon: CreditCard,
//     },
//     {
//       name: "Committee",
//       path: "/committee",
//       icon: UsersRound,
//     },
//     {
//       name: "Program",
//       path: "/speakers",
//       icon: CalendarDays,
//     },
//     {
//       name: "Important Dates",
//       path: "/important-dates",
//       icon: Clock3,
//     },
//     {
//       name: "Venue",
//       path: "/venue",
//       icon: MapPin,
//     },
//   ];

//   // =========================================================
//   // AUTHORS
//   // =========================================================

//   const authorItems = [
//     {
//       name: "Call For Papers",
//       path: "/call-for-papers",
//       icon: PenLine,
//     },
//     {
//       name: "Guidelines & Policies",
//       path: "/guidelines",
//       icon: PenLine,
//     },
//     {
//       name: "Tracks",
//       path: "/tracks",
//       icon: PenLine,
//     },
//   ];

//   // =========================================================
//   // ACTIVE ROUTE
//   // =========================================================

//   const isActive = (path) => {
//     if (path === "/") {
//       return location.pathname === "/";
//     }

//     return location.pathname === path;
//   };

//   const isAuthorsActive = authorItems.some(
//     (item) => location.pathname === item.path
//   );

//   // =========================================================
//   // DESKTOP EXPAND
//   // =========================================================

//   const expandDesktopNav = () => {
//     if (collapseTimerRef.current) {
//       clearTimeout(collapseTimerRef.current);
//       collapseTimerRef.current = null;
//     }

//     setDesktopExpanded(true);
//   };

//   // =========================================================
//   // DESKTOP COLLAPSE
//   // =========================================================

//   const collapseDesktopNav = () => {
//     if (collapseTimerRef.current) {
//       clearTimeout(collapseTimerRef.current);
//     }

//     collapseTimerRef.current = setTimeout(() => {
//       setDesktopExpanded(false);
//       setAuthorsOpen(false);
//     }, 450);
//   };

//   // =========================================================
//   // NAVIGATION CLICK
//   // =========================================================

//   const handleNavigation = () => {
//     setMenuOpen(false);
//     setAuthorsOpen(false);
//     setMobileAuthorsOpen(false);
//     setDesktopExpanded(false);

//     if (collapseTimerRef.current) {
//       clearTimeout(collapseTimerRef.current);
//       collapseTimerRef.current = null;
//     }

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   // =========================================================
//   // ESCAPE
//   // =========================================================

//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         setMenuOpen(false);
//         setAuthorsOpen(false);
//         setMobileAuthorsOpen(false);
//         setDesktopExpanded(false);
//       }
//     };

//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, []);

//   // =========================================================
//   // ROUTE CHANGE
//   // =========================================================

//   useEffect(() => {
//     setMenuOpen(false);
//     setAuthorsOpen(false);
//     setMobileAuthorsOpen(false);
//     setDesktopExpanded(false);

//     if (collapseTimerRef.current) {
//       clearTimeout(collapseTimerRef.current);
//       collapseTimerRef.current = null;
//     }

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [location.pathname]);

//   // =========================================================
//   // CLEANUP
//   // =========================================================

//   useEffect(() => {
//     return () => {
//       if (collapseTimerRef.current) {
//         clearTimeout(collapseTimerRef.current);
//       }
//     };
//   }, []);

//   // =========================================================
//   // MOBILE BODY LOCK
//   // =========================================================

//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   // =========================================================
//   // DESKTOP NAV ITEM
//   // =========================================================

//   const DesktopNavItem = ({ item }) => {
//     const active = isActive(item.path);
//     const Icon = item.icon;

//     return (
//       <Link
//         to={item.path}
//         onClick={handleNavigation}
//         className={`
//           group
//           relative

//           flex
//           items-center
//           gap-4

//           px-5
//           py-4

//           text-[15px]
//           xl:text-[16px]

//           font-medium

//           transition-all
//           duration-300

//           overflow-hidden

//           ${
//             active
//               ? "text-[#13C8F3]"
//               : "text-white/85 hover:text-[#13C8F3]"
//           }
//         `}
//       >
//         {/* Hover background */}

//         <span
//           className={`
//             absolute
//             inset-0

//             bg-gradient-to-r
//             from-[#0CC8F2]/12
//             via-[#0CC8F2]/5
//             to-transparent

//             transition-opacity
//             duration-300

//             ${
//               active
//                 ? "opacity-100"
//                 : "opacity-0 group-hover:opacity-100"
//             }
//           `}
//         />

//         {/* Active cyan line */}

//         <span
//           className={`
//             absolute
//             left-0
//             top-1/2

//             -translate-y-1/2

//             w-[3px]

//             rounded-r-full

//             bg-gradient-to-b
//             from-[#13C8F3]
//             to-[#2877FF]

//             shadow-[0_0_14px_rgba(19,200,243,0.9)]

//             transition-all
//             duration-300

//             ${
//               active
//                 ? "h-11 opacity-100"
//                 : "h-0 opacity-0 group-hover:h-8 group-hover:opacity-100"
//             }
//           `}
//         />

//         {/* Icon */}

//         <Icon
//           size={20}
//           strokeWidth={1.8}
//           className={`
//             relative
//             z-10
//             flex-shrink-0

//             transition-all
//             duration-300

//             ${
//               active
//                 ? "text-[#13C8F3]"
//                 : "text-white/75 group-hover:text-[#13C8F3]"
//             }

//             group-hover:scale-110
//           `}
//         />

//         {/* Text */}

//         <span className="relative z-10">
//           {item.name}
//         </span>
//       </Link>
//     );
//   };

//   // =========================================================
//   // DESKTOP AUTHORS ITEM
//   // =========================================================

//   const AuthorsDesktop = () => {
//     const active = isAuthorsActive || authorsOpen;

//     return (
//       <div className="relative">
//         <button
//           type="button"
//           onClick={() => {
//             expandDesktopNav();
//             setAuthorsOpen((prev) => !prev);
//           }}
//           aria-expanded={authorsOpen}
//           className={`
//             group
//             relative

//             flex
//             w-full
//             items-center
//             gap-4

//             px-5
//             py-4

//             text-[15px]
//             xl:text-[16px]

//             font-medium

//             transition-all
//             duration-300

//             overflow-hidden

//             ${
//               active
//                 ? "text-[#13C8F3]"
//                 : "text-white/85 hover:text-[#13C8F3]"
//             }
//           `}
//         >
//           {/* Background */}

//           <span
//             className={`
//               absolute
//               inset-0

//               bg-gradient-to-r
//               from-[#0CC8F2]/12
//               via-[#0CC8F2]/5
//               to-transparent

//               transition-opacity
//               duration-300

//               ${
//                 active
//                   ? "opacity-100"
//                   : "opacity-0 group-hover:opacity-100"
//               }
//             `}
//           />

//           {/* Active line */}

//           <span
//             className={`
//               absolute
//               left-0
//               top-1/2

//               -translate-y-1/2

//               w-[3px]

//               rounded-r-full

//               bg-gradient-to-b
//               from-[#13C8F3]
//               to-[#2877FF]

//               shadow-[0_0_14px_rgba(19,200,243,0.9)]

//               transition-all
//               duration-300

//               ${
//                 active
//                   ? "h-11 opacity-100"
//                   : "h-0 opacity-0 group-hover:h-8 group-hover:opacity-100"
//               }
//             `}
//           />

//           {/* Icon */}

//           <PenLine
//             size={20}
//             strokeWidth={1.8}
//             className={`
//               relative
//               z-10

//               flex-shrink-0

//               transition-all
//               duration-300

//               ${
//                 active
//                   ? "text-[#13C8F3]"
//                   : "text-white/75 group-hover:text-[#13C8F3]"
//               }

//               group-hover:scale-110
//             `}
//           />

//           {/* Text */}

//           <span className="relative z-10 flex-1 text-left">
//             Authors
//           </span>

//           <ChevronDown
//             size={17}
//             strokeWidth={2}
//             className={`
//               relative
//               z-10

//               transition-transform
//               duration-300

//               ${
//                 authorsOpen
//                   ? "rotate-180 text-[#13C8F3]"
//                   : "rotate-0"
//               }
//             `}
//           />
//         </button>

//         {/* =================================================
//             AUTHORS SUBMENU
//         ================================================= */}

//         <div
//           onMouseEnter={expandDesktopNav}
//           onMouseLeave={collapseDesktopNav}
//           className={`
//             absolute

//             left-full
//             top-1/2

//             -translate-y-1/2

//             ml-3

//             w-[245px]

//             rounded-2xl

//             border
//             border-cyan-400/20

//             bg-[#03101F]/95

//             backdrop-blur-2xl

//             shadow-[0_20px_60px_rgba(0,0,0,0.55)]

//             overflow-hidden

//             transition-all
//             duration-300

//             origin-left

//             ${
//               authorsOpen
//                 ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
//                 : "opacity-0 scale-95 -translate-x-3 pointer-events-none"
//             }
//           `}
//         >
//           {/* Top glow */}

//           <div
//             className="
//               h-[2px]

//               bg-gradient-to-r
//               from-transparent
//               via-[#13C8F3]
//               to-transparent
//             "
//           />

//           <div className="py-2">
//             {authorItems.map((item, index) => {
//               const Icon = item.icon;
//               const activeItem = isActive(item.path);

//               return (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   onClick={handleNavigation}
//                   className={`
//                     group/sub

//                     flex
//                     items-center
//                     gap-3

//                     px-4
//                     py-3.5

//                     border-b
//                     border-white/[0.05]

//                     last:border-b-0

//                     text-sm

//                     transition-all
//                     duration-300

//                     ${
//                       activeItem
//                         ? "bg-cyan-400/10 text-[#13C8F3]"
//                         : "text-white/75 hover:bg-cyan-400/5 hover:text-[#13C8F3]"
//                     }
//                   `}
//                 >
//                   <span
//                     className={`
//                       flex
//                       h-8
//                       w-8

//                       items-center
//                       justify-center

//                       rounded-lg

//                       border

//                       transition-all
//                       duration-300

//                       ${
//                         activeItem
//                           ? "border-cyan-400/50 bg-cyan-400/10"
//                           : "border-cyan-400/15 bg-cyan-400/5 group-hover/sub:border-cyan-400/40"
//                       }
//                     `}
//                   >
//                     <Icon
//                       size={15}
//                       strokeWidth={1.8}
//                     />
//                   </span>

//                   <span className="flex-1">
//                     {item.name}
//                   </span>

//                   <span className="text-[9px] text-cyan-400/50">
//                     0{index + 1}
//                   </span>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // =========================================================
//   // DESKTOP NAVBAR
//   // =========================================================

//   return (
//     <>
//       {/* =====================================================
//           DESKTOP NAVBAR
//       ====================================================== */}

//       <aside
//         onMouseEnter={expandDesktopNav}
//         onMouseLeave={collapseDesktopNav}
//         className={`
//           hidden
//           lg:flex

//           fixed

//           left-0
//           top-1/2

//           -translate-y-1/2

//           z-[100]

//           w-[225px]
//           xl:w-[235px]

//           flex-col

//           rounded-r-[25px]

//           border
//           border-l-0
//           border-cyan-400/25

//           bg-[#020B18]/78

//           backdrop-blur-2xl

//           shadow-[15px_15px_60px_rgba(0,0,0,0.55)]

//           transition-transform
//           duration-500

//           ease-[cubic-bezier(0.22,1,0.36,1)]

//           ${
//             desktopExpanded
//               ? "translate-x-0"
//               : "-translate-x-[calc(100%-48px)]"
//           }
//         `}
//       >
//         {/* =================================================
//             OPTION 1 COLLAPSED TAB
//         ================================================== */}

//         <div
//           className="
//             absolute

//             right-[-48px]

//             top-1/2

//             -translate-y-1/2

//             h-[210px]
//             w-[48px]

//             flex
//             flex-col
//             items-center
//             justify-between

//             py-4

//             rounded-r-[18px]

//             border
//             border-l-0
//             border-cyan-400/35
// bg-gradient-to-r
// from-[#13C8F3]
// via-[#18AEEF]
// to-[#2877FF]

//             backdrop-blur-xl

//             shadow-[8px_0_30px_rgba(0,0,0,0.4)]

//             overflow-hidden

//             cursor-pointer

//             group/tab

//             transition-all
//             duration-300

//             hover:border-cyan-400/70
//             hover:shadow-[0_0_30px_rgba(19,200,243,0.35)]
//           "
//           onMouseEnter={expandDesktopNav}
//           onClick={expandDesktopNav}
//         >
//           {/* =================================================
//               GLOW
//           ================================================== */}

//           <span
//             className="
//               absolute
//               inset-y-0
//               left-0

//               w-[2px]

//               bg-gradient-to-b
//               from-transparent
//               via-[#13C8F3]
//               to-transparent

//               shadow-[0_0_15px_rgba(19,200,243,0.9)]
//             "
//           />

//           {/* =================================================
//               MENU CIRCLE
//           ================================================== */}

//           <span
//             className="
//               relative
//               z-10

//               flex
//               h-8
//               w-8

//               items-center
//               justify-center

//               rounded-full

//               border
//               border-cyan-400/60

//               bg-[#061B30]/80

//               text-cyan-300

//               shadow-[0_0_15px_rgba(19,200,243,0.2)]

//               transition-all
//               duration-300

//               group-hover/tab:bg-[#0A2944]
//               group-hover/tab:border-cyan-300
//               group-hover/tab:scale-105
//             "
//           >
//             <Menu
//               size={17}
//               strokeWidth={2}
//             />
//           </span>

//           {/* =================================================
//               VERTICAL TEXT
//           ================================================== */}

//           <span
//   className="
//     relative
//     z-10

//     flex-1

//     flex
//     items-center
//     justify-center

//     text-[9px]

//     font-semibold

//     tracking-[0.18em]

//     text-black

//     [writing-mode:vertical-rl]

//     rotate-180

//     whitespace-nowrap

//     transition-colors
//     duration-300

//     group-hover/tab:text-black
//   "
// >
//   CLICK HERE
// </span>

//           {/* =================================================
//               SMALL ARROW
//           ================================================== */}

//           <span
//             className="
//               relative
//               z-10

//               text-lg

//               leading-none

//               text-[#13C8F3]

//               transition-transform
//               duration-300

//               group-hover/tab:translate-x-1
//             "
//           >
//             »
//           </span>
//         </div>

//         {/* =================================================
//             TOP GLOW
//         ================================================== */}

//         <div
//           className="
//             absolute
//             left-8
//             right-8
//             top-0

//             h-px

//             bg-gradient-to-r
//             from-transparent
//             via-[#13C8F3]/70
//             to-transparent
//           "
//         />

//         {/* =================================================
//             NAVIGATION
//         ================================================== */}

//         <nav className="py-4">
//           {/* HOME */}

//           <DesktopNavItem item={navItems[0]} />

//           {/* ABOUT */}

//           <DesktopNavItem item={navItems[1]} />

//           {/* AUTHORS */}

//           <AuthorsDesktop />

//           {/* REGISTRATION */}

//           <DesktopNavItem item={navItems[2]} />

//           {/* COMMITTEE */}

//           <DesktopNavItem item={navItems[3]} />

//           {/* PROGRAM */}

//           <DesktopNavItem item={navItems[4]} />

//           {/* IMPORTANT DATES */}

//           <DesktopNavItem item={navItems[5]} />

//           {/* VENUE */}

//           <DesktopNavItem item={navItems[6]} />
//         </nav>

//         {/* =================================================
//             DIVIDER
//         ================================================== */}

//         <div
//           className="
//             mx-5

//             h-px

//             bg-gradient-to-r
//             from-transparent
//             via-cyan-400/20
//             to-transparent
//           "
//         />

//         {/* =================================================
//             CONTACT
//         ================================================== */}

//         <Link
//           to="/contact"
//           onClick={handleNavigation}
//           className="
//             group/contact

//             relative

//             mx-4
//             my-4

//             flex
//             items-center
//             justify-center

//             rounded-xl

//             border
//             border-cyan-400/30

//             bg-cyan-400/5

//             px-4
//             py-3

//             text-[12px]

//             font-semibold
//             tracking-[0.08em]

//             text-white

//             overflow-hidden

//             transition-all
//             duration-300

//             hover:border-cyan-400/70
//             hover:bg-cyan-400/10
//             hover:text-cyan-300

//             hover:shadow-[0_0_25px_rgba(19,200,243,0.2)]
//           "
//         >
//           {/* Shimmer */}

//           <span
//             className="
//               absolute
//               inset-0

//               bg-gradient-to-r
//               from-transparent
//               via-white/10
//               to-transparent

//               -translate-x-full

//               group-hover/contact:translate-x-full

//               transition-transform
//               duration-700
//             "
//           />

//           <span className="relative z-10">
//             CONTACT US
//           </span>
//         </Link>

//         {/* =================================================
//             BOTTOM GLOW
//         ================================================== */}

//         <div
//           className="
//             absolute

//             bottom-0
//             left-8
//             right-8

//             h-px

//             bg-gradient-to-r
//             from-transparent
//             via-[#13C8F3]/50
//             to-transparent
//           "
//         />
//       </aside>

//       {/* =====================================================
//           MOBILE MENU BUTTON
//       ====================================================== */}

//       <button
//         type="button"
//         onClick={() => {
//           setMenuOpen((prev) => !prev);
//           setMobileAuthorsOpen(false);
//         }}
//         aria-label="Toggle navigation"
//         aria-expanded={menuOpen}
//         className="
//           lg:hidden

//           fixed

//           top-5
//           right-5

//           z-[200]

//           flex
//           h-12
//           w-12

//           items-center
//           justify-center

//           rounded-2xl

//           border
//           border-cyan-400/30

//           bg-[#020B18]/70

//           backdrop-blur-xl

//           text-[#13C8F3]

//           shadow-[0_10px_35px_rgba(0,0,0,0.5)]

//           transition-all
//           duration-300

//           hover:border-cyan-400/70
//           hover:bg-[#061B30]

//           active:scale-95
//         "
//       >
//         {menuOpen ? (
//           <X size={23} />
//         ) : (
//           <Menu size={23} />
//         )}
//       </button>

//       {/* =====================================================
//           MOBILE OVERLAY
//       ====================================================== */}

//       <div
//         onClick={() => setMenuOpen(false)}
//         className={`
//           lg:hidden

//           fixed
//           inset-0

//           z-[150]

//           bg-black/60

//           backdrop-blur-[3px]

//           transition-opacity
//           duration-300

//           ${
//             menuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           }
//         `}
//       />

//       {/* =====================================================
//           MOBILE SIDEBAR
//       ====================================================== */}

//       <aside
//         className={`
//           lg:hidden

//           fixed

//           left-0
//           top-0
//           bottom-0

//           z-[180]

//           w-[290px]
//           max-w-[82vw]

//           flex
//           flex-col

//           border-r
//           border-cyan-400/20

//           bg-[#020B18]/95

//           backdrop-blur-2xl

//           shadow-[20px_0_60px_rgba(0,0,0,0.6)]

//           transition-transform
//           duration-500

//           ease-[cubic-bezier(0.22,1,0.36,1)]

//           ${
//             menuOpen
//               ? "translate-x-0"
//               : "-translate-x-full"
//           }
//         `}
//       >
//         {/* MOBILE HEADER */}

//         <div
//           className="
//             flex
//             items-center
//             justify-between

//             px-6
//             py-6

//             border-b
//             border-white/5
//           "
//         >
//           <div>
//             <p
//               className="
//                 text-[10px]

//                 tracking-[0.4em]

//                 text-[#13C8F3]
//               "
//             >
//               CYCRAI
//             </p>

//             <p
//               className="
//                 mt-1

//                 text-xl

//                 font-bold

//                 text-white
//               "
//             >
//               2027
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={() => setMenuOpen(false)}
//             className="
//               flex
//               h-10
//               w-10

//               items-center
//               justify-center

//               rounded-xl

//               border
//               border-white/10

//               text-white/70

//               transition-all
//               duration-300

//               hover:border-cyan-400/50
//               hover:text-cyan-400
//             "
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* MOBILE NAVIGATION */}

//         <nav className="flex-1 overflow-y-auto py-4">
//           {/* HOME */}

//           <MobileNavItem
//             item={navItems[0]}
//             active={isActive("/")}
//             onClick={handleNavigation}
//           />

//           {/* ABOUT */}

//           <MobileNavItem
//             item={navItems[1]}
//             active={isActive("/about")}
//             onClick={handleNavigation}
//           />

//           {/* AUTHORS */}

//           <div>
//             <button
//               type="button"
//               onClick={() =>
//                 setMobileAuthorsOpen((prev) => !prev)
//               }
//               className={`
//                 flex
//                 w-full
//                 items-center
//                 gap-4

//                 px-6
//                 py-4

//                 border-l-[3px]

//                 text-[15px]
//                 font-medium

//                 transition-all
//                 duration-300

//                 ${
//                   isAuthorsActive
//                     ? "border-[#13C8F3] bg-cyan-400/10 text-[#13C8F3]"
//                     : "border-transparent text-white/85 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-[#13C8F3]"
//                 }
//               `}
//             >
//               <PenLine
//                 size={20}
//                 strokeWidth={1.8}
//               />

//               <span className="flex-1 text-left">
//                 Authors
//               </span>

//               <ChevronDown
//                 size={18}
//                 className={`
//                   transition-transform
//                   duration-300

//                   ${
//                     mobileAuthorsOpen
//                       ? "rotate-180"
//                       : ""
//                   }
//                 `}
//               />
//             </button>

//             {/* MOBILE AUTHORS */}

//             <div
//               className={`
//                 overflow-hidden

//                 bg-[#010813]/70

//                 transition-all
//                 duration-300

//                 ${
//                   mobileAuthorsOpen
//                     ? "max-h-[220px]"
//                     : "max-h-0"
//                 }
//               `}
//             >
//               {authorItems.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     onClick={handleNavigation}
//                     className={`
//                       flex
//                       items-center
//                       gap-3

//                       pl-11
//                       pr-6
//                       py-3.5

//                       text-sm

//                       transition-all
//                       duration-300

//                       ${
//                         isActive(item.path)
//                           ? "bg-cyan-400/10 text-[#13C8F3]"
//                           : "text-white/65 hover:bg-cyan-400/5 hover:text-[#13C8F3]"
//                       }
//                     `}
//                   >
//                     <Icon size={16} />

//                     {item.name}
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>

//           {/* REGISTRATION */}

//           <MobileNavItem
//             item={navItems[2]}
//             active={isActive("/registration")}
//             onClick={handleNavigation}
//           />

//           {/* COMMITTEE */}

//           <MobileNavItem
//             item={navItems[3]}
//             active={isActive("/committee")}
//             onClick={handleNavigation}
//           />

//           {/* PROGRAM */}

//           <MobileNavItem
//             item={navItems[4]}
//             active={isActive("/speakers")}
//             onClick={handleNavigation}
//           />

//           {/* IMPORTANT DATES */}

//           <MobileNavItem
//             item={navItems[5]}
//             active={isActive("/important-dates")}
//             onClick={handleNavigation}
//           />

//           {/* VENUE */}

//           <MobileNavItem
//             item={navItems[6]}
//             active={isActive("/venue")}
//             onClick={handleNavigation}
//           />
//         </nav>

//         {/* MOBILE CONTACT */}

//         <div
//           className="
//             border-t
//             border-white/5

//             p-5
//           "
//         >
//           <Link
//             to="/contact"
//             onClick={handleNavigation}
//             className="
//               block
//               w-full

//               rounded-xl

//               bg-gradient-to-r
//               from-[#13C8F3]
//               via-[#18AEEF]
//               to-[#2877FF]

//               px-5
//               py-3.5

//               text-center

//               text-sm

//               font-semibold

//               tracking-wide

//               text-white

//               shadow-[0_8px_25px_rgba(37,108,246,0.25)]

//               transition-all
//               duration-300

//               hover:brightness-110
//             "
//           >
//             CONTACT US
//           </Link>
//         </div>
//       </aside>
//     </>
//   );
// }

// // ===========================================================
// // MOBILE NAV ITEM
// // ===========================================================

// function MobileNavItem({ item, active, onClick }) {
//   const Icon = item.icon;

//   return (
//     <Link
//       to={item.path}
//       onClick={onClick}
//       className={`
//         group

//         flex
//         items-center
//         gap-4

//         px-6
//         py-4

//         border-l-[3px]

//         text-[15px]

//         font-medium

//         transition-all
//         duration-300

//         ${
//           active
//             ? "border-[#13C8F3] bg-cyan-400/10 text-[#13C8F3]"
//             : "border-transparent text-white/85 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-[#13C8F3]"
//         }
//       `}
//     >
//       <Icon
//         size={20}
//         strokeWidth={1.8}
//         className="
//           transition-transform
//           duration-300

//           group-hover:scale-110
//         "
//       />

//       <span>
//         {item.name}
//       </span>
//     </Link>
//   );
// }

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
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  // =========================================================
  // STATES
  // =========================================================

  const [menuOpen, setMenuOpen] = useState(false);
  const [authorsOpen, setAuthorsOpen] = useState(false);
  const [mobileAuthorsOpen, setMobileAuthorsOpen] = useState(false);

  const [desktopExpanded, setDesktopExpanded] = useState(false);

  const collapseTimerRef = useRef(null);

  // =========================================================
  // NAVIGATION
  // =========================================================

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
      name: "Committee",
      path: "/committee",
      icon: UsersRound,
    },
    {
      name: "Program",
      path: "/speakers",
      icon: CalendarDays,
    },
    {
      name: "Venue",
      path: "/venue",
      icon: MapPin,
    },
  ];

  // =========================================================
  // AUTHORS
  // =========================================================

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

  // =========================================================
  // ACTIVE ROUTE
  // =========================================================

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname === path;
  };

  const isAuthorsActive = authorItems.some(
    (item) => location.pathname === item.path
  );

  // =========================================================
  // DESKTOP EXPAND
  // =========================================================

  const expandDesktopNav = () => {
    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }

    setDesktopExpanded(true);
  };

  // =========================================================
  // DESKTOP COLLAPSE
  // =========================================================

  const collapseDesktopNav = () => {
    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
    }

    collapseTimerRef.current = setTimeout(() => {
      setDesktopExpanded(false);
      setAuthorsOpen(false);
    }, 450);
  };

  // =========================================================
  // NAVIGATION CLICK
  // =========================================================

  const handleNavigation = () => {
    setMenuOpen(false);
    setAuthorsOpen(false);
    setMobileAuthorsOpen(false);
    setDesktopExpanded(false);

    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================================================
  // ESCAPE
  // =========================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setAuthorsOpen(false);
        setMobileAuthorsOpen(false);
        setDesktopExpanded(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // =========================================================
  // ROUTE CHANGE
  // =========================================================

  useEffect(() => {
    setMenuOpen(false);
    setAuthorsOpen(false);
    setMobileAuthorsOpen(false);
    setDesktopExpanded(false);

    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  // =========================================================
  // CLEANUP
  // =========================================================

  useEffect(() => {
    return () => {
      if (collapseTimerRef.current) {
        clearTimeout(collapseTimerRef.current);
      }
    };
  }, []);

  // =========================================================
  // MOBILE BODY LOCK
  // =========================================================

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

  // =========================================================
  // DESKTOP NAV ITEM
  // =========================================================

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

          px-5
          py-4

          text-[15px]
          xl:text-[16px]

          font-medium

          transition-all
          duration-300

          overflow-hidden

          ${
            active
              ? "text-[#13C8F3]"
              : "text-white/85 hover:text-[#13C8F3]"
          }
        `}
      >
        {/* Hover background */}

        <span
          className={`
            absolute
            inset-0

            bg-gradient-to-r
            from-[#0CC8F2]/12
            via-[#0CC8F2]/5
            to-transparent

            transition-opacity
            duration-300

            ${
              active
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }
          `}
        />

        {/* Active cyan line */}

        <span
          className={`
            absolute
            left-0
            top-1/2

            -translate-y-1/2

            w-[3px]

            rounded-r-full

            bg-gradient-to-b
            from-[#13C8F3]
            to-[#2877FF]

            shadow-[0_0_14px_rgba(19,200,243,0.9)]

            transition-all
            duration-300

            ${
              active
                ? "h-11 opacity-100"
                : "h-0 opacity-0 group-hover:h-8 group-hover:opacity-100"
            }
          `}
        />

        {/* Icon */}

        <Icon
          size={20}
          strokeWidth={1.8}
          className={`
            relative
            z-10

            flex-shrink-0

            transition-all
            duration-300

            ${
              active
                ? "text-[#13C8F3]"
                : "text-white/75 group-hover:text-[#13C8F3]"
            }

            group-hover:scale-110
          `}
        />

        {/* Text */}

        <span className="relative z-10">
          {item.name}
        </span>
      </Link>
    );
  };

  // =========================================================
  // DESKTOP AUTHORS ITEM
  // =========================================================

  const AuthorsDesktop = () => {
    const active = isAuthorsActive || authorsOpen;

    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            expandDesktopNav();
            setAuthorsOpen((prev) => !prev);
          }}
          aria-expanded={authorsOpen}
          className={`
            group
            relative

            flex
            w-full
            items-center
            gap-4

            px-5
            py-4

            text-[15px]
            xl:text-[16px]

            font-medium

            transition-all
            duration-300

            overflow-hidden

            ${
              active
                ? "text-[#13C8F3]"
                : "text-white/85 hover:text-[#13C8F3]"
            }
          `}
        >
          {/* Background */}

          <span
            className={`
              absolute
              inset-0

              bg-gradient-to-r
              from-[#0CC8F2]/12
              via-[#0CC8F2]/5
              to-transparent

              transition-opacity
              duration-300

              ${
                active
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }
            `}
          />

          {/* Active line */}

          <span
            className={`
              absolute
              left-0
              top-1/2

              -translate-y-1/2

              w-[3px]

              rounded-r-full

              bg-gradient-to-b
              from-[#13C8F3]
              to-[#2877FF]

              shadow-[0_0_14px_rgba(19,200,243,0.9)]

              transition-all
              duration-300

              ${
                active
                  ? "h-11 opacity-100"
                  : "h-0 opacity-0 group-hover:h-8 group-hover:opacity-100"
              }
            `}
          />

          {/* Icon */}

          <PenLine
            size={20}
            strokeWidth={1.8}
            className={`
              relative
              z-10

              flex-shrink-0

              transition-all
              duration-300

              ${
                active
                  ? "text-[#13C8F3]"
                  : "text-white/75 group-hover:text-[#13C8F3]"
              }

              group-hover:scale-110
            `}
          />

          {/* Text */}

          <span className="relative z-10 flex-1 text-left">
            Authors
          </span>

          {/* Arrow */}

          <ChevronDown
            size={17}
            strokeWidth={2}
            className={`
              relative
              z-10

              transition-transform
              duration-300

              ${
                authorsOpen
                  ? "rotate-180 text-[#13C8F3]"
                  : "rotate-0"
              }
            `}
          />
        </button>

        {/* =================================================
            AUTHORS SUBMENU
        ================================================= */}

        <div
          onMouseEnter={expandDesktopNav}
          onMouseLeave={collapseDesktopNav}
          className={`
            absolute

            left-full
            top-1/2

            -translate-y-1/2

            ml-3

            w-[245px]

            rounded-2xl

            border
            border-cyan-400/20

            bg-[#03101F]/95

            backdrop-blur-2xl

            shadow-[0_20px_60px_rgba(0,0,0,0.55)]

            overflow-hidden

            transition-all
            duration-300

            origin-left

            ${
              authorsOpen
                ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-x-3 pointer-events-none"
            }
          `}
        >
          {/* Top glow */}

          <div
            className="
              h-[2px]

              bg-gradient-to-r
              from-transparent
              via-[#13C8F3]
              to-transparent
            "
          />

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

                    px-4
                    py-3.5

                    border-b
                    border-white/[0.05]

                    last:border-b-0

                    text-sm

                    transition-all
                    duration-300

                    ${
                      activeItem
                        ? "bg-cyan-400/10 text-[#13C8F3]"
                        : "text-white/75 hover:bg-cyan-400/5 hover:text-[#13C8F3]"
                    }
                  `}
                >
                  <span
                    className={`
                      flex
                      h-8
                      w-8

                      items-center
                      justify-center

                      rounded-lg

                      border

                      transition-all
                      duration-300

                      ${
                        activeItem
                          ? "border-cyan-400/50 bg-cyan-400/10"
                          : "border-cyan-400/15 bg-cyan-400/5 group-hover/sub:border-cyan-400/40"
                      }
                    `}
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.8}
                    />
                  </span>

                  <span className="flex-1">
                    {item.name}
                  </span>

                  <span className="text-[9px] text-cyan-400/50">
                    0{index + 1}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // =========================================================
  // DESKTOP NAVBAR
  // =========================================================

  return (
    <>
      {/* =====================================================
          DESKTOP NAVBAR
      ====================================================== */}

      <aside
        onMouseEnter={expandDesktopNav}
        onMouseLeave={collapseDesktopNav}
        className={`
          hidden
          lg:flex

          fixed

          left-0
          top-1/2

          -translate-y-1/2

          z-[100]

          w-[225px]
          xl:w-[235px]

          flex-col

          rounded-r-[25px]

          border
          border-l-0
          border-cyan-400/25

          bg-[#020B18]/78

          backdrop-blur-2xl

          shadow-[15px_15px_60px_rgba(0,0,0,0.55)]

          transition-transform
          duration-500

          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            desktopExpanded
              ? "translate-x-0"
              : "-translate-x-[calc(100%-48px)]"
          }
        `}
      >
        {/* =================================================
            COLLAPSED TAB
        ================================================== */}

        <div
          className="
            absolute

            right-[-48px]

            top-1/2

            -translate-y-1/2

            h-[210px]
            w-[48px]

            flex
            flex-col
            items-center
            justify-between

            py-4

            rounded-r-[18px]

            border
            border-l-0
            border-cyan-400/35

            bg-gradient-to-r
            from-[#13C8F3]
            via-[#18AEEF]
            to-[#2877FF]

            backdrop-blur-xl

            shadow-[8px_0_30px_rgba(0,0,0,0.4)]

            overflow-hidden

            cursor-pointer

            group/tab

            transition-all
            duration-300

            hover:border-cyan-400/70
            hover:shadow-[0_0_30px_rgba(19,200,243,0.35)]
          "
          onMouseEnter={expandDesktopNav}
          onClick={expandDesktopNav}
        >
          {/* Glow */}

          <span
            className="
              absolute
              inset-y-0
              left-0

              w-[2px]

              bg-gradient-to-b
              from-transparent
              via-[#13C8F3]
              to-transparent

              shadow-[0_0_15px_rgba(19,200,243,0.9)]
            "
          />

          {/* Menu Circle */}

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
              border-cyan-400/60

              bg-[#061B30]/80

              text-cyan-300

              shadow-[0_0_15px_rgba(19,200,243,0.2)]

              transition-all
              duration-300

              group-hover/tab:bg-[#0A2944]
              group-hover/tab:border-cyan-300
              group-hover/tab:scale-105
            "
          >
            <Menu
              size={17}
              strokeWidth={2}
            />
          </span>

          {/* Vertical Text */}

          <span
            className="
              relative
              z-10

              flex-1

              flex
              items-center
              justify-center

              text-[9px]

              font-semibold

              tracking-[0.18em]

              text-black

              [writing-mode:vertical-rl]

              rotate-180

              whitespace-nowrap

              transition-colors
              duration-300

              group-hover/tab:text-black
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

              text-[#13C8F3]

              transition-transform
              duration-300

              group-hover/tab:translate-x-1
            "
          >
            »
          </span>
        </div>

        {/* =================================================
            TOP GLOW
        ================================================== */}

        <div
          className="
            absolute
            left-8
            right-8
            top-0

            h-px

            bg-gradient-to-r
            from-transparent
            via-[#13C8F3]/70
            to-transparent
          "
        />

        {/* =================================================
            NAVIGATION
        ================================================== */}

        <nav className="py-4">
          {/* HOME */}

          <DesktopNavItem item={navItems[0]} />

          {/* ABOUT */}

          <DesktopNavItem item={navItems[1]} />

          {/* AUTHORS */}

          <AuthorsDesktop />

          {/* REGISTRATION */}

          <DesktopNavItem item={navItems[2]} />

          {/* COMMITTEE */}

          <DesktopNavItem item={navItems[3]} />

          {/* PROGRAM */}

          <DesktopNavItem item={navItems[4]} />

          {/* VENUE */}

          <DesktopNavItem item={navItems[5]} />
        </nav>

        {/* =================================================
            DIVIDER
        ================================================== */}

        <div
          className="
            mx-5

            h-px

            bg-gradient-to-r
            from-transparent
            via-cyan-400/20
            to-transparent
          "
        />

        {/* =================================================
            CONTACT
        ================================================== */}

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

            rounded-xl

            border
            border-cyan-400/30

            bg-cyan-400/5

            px-4
            py-3

            text-[12px]

            font-semibold
            tracking-[0.08em]

            text-white

            overflow-hidden

            transition-all
            duration-300

            hover:border-cyan-400/70
            hover:bg-cyan-400/10
            hover:text-cyan-300

            hover:shadow-[0_0_25px_rgba(19,200,243,0.2)]
          "
        >
          {/* Shimmer */}

          <span
            className="
              absolute
              inset-0

              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent

              -translate-x-full

              group-hover/contact:translate-x-full

              transition-transform
              duration-700
            "
          />

          <span className="relative z-10">
            CONTACT US
          </span>
        </Link>

        {/* =================================================
            BOTTOM GLOW
        ================================================== */}

        <div
          className="
            absolute

            bottom-0
            left-8
            right-8

            h-px

            bg-gradient-to-r
            from-transparent
            via-[#13C8F3]/50
            to-transparent
          "
        />
      </aside>

      {/* =====================================================
          MOBILE MENU BUTTON
      ====================================================== */}

      <button
        type="button"
        onClick={() => {
          setMenuOpen((prev) => !prev);
          setMobileAuthorsOpen(false);
        }}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        className="
          lg:hidden

          fixed

          top-5
          right-5

          z-[200]

          flex
          h-12
          w-12

          items-center
          justify-center

          rounded-2xl

          border
          border-cyan-400/30

          bg-[#020B18]/70

          backdrop-blur-xl

          text-[#13C8F3]

          shadow-[0_10px_35px_rgba(0,0,0,0.5)]

          transition-all
          duration-300

          hover:border-cyan-400/70
          hover:bg-[#061B30]

          active:scale-95
        "
      >
        {menuOpen ? (
          <X size={23} />
        ) : (
          <Menu size={23} />
        )}
      </button>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        onClick={() => setMenuOpen(false)}
        className={`
          lg:hidden

          fixed
          inset-0

          z-[150]

          bg-black/60

          backdrop-blur-[3px]

          transition-opacity
          duration-300

          ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* =====================================================
          MOBILE SIDEBAR
      ====================================================== */}

      <aside
        className={`
          lg:hidden

          fixed

          left-0
          top-0
          bottom-0

          z-[180]

          w-[290px]
          max-w-[82vw]

          flex
          flex-col

          border-r
          border-cyan-400/20

          bg-[#020B18]/95

          backdrop-blur-2xl

          shadow-[20px_0_60px_rgba(0,0,0,0.6)]

          transition-transform
          duration-500

          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            menuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* MOBILE HEADER */}

        <div
          className="
            flex
            items-center
            justify-between

            px-6
            py-6

            border-b
            border-white/5
          "
        >
          <div>
            <p
              className="
                text-[10px]

                tracking-[0.4em]

                text-[#13C8F3]
              "
            >
              CYCRAI
            </p>

            <p
              className="
                mt-1

                text-xl

                font-bold

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
              border-white/10

              text-white/70

              transition-all
              duration-300

              hover:border-cyan-400/50
              hover:text-cyan-400
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* MOBILE NAVIGATION */}

        <nav className="flex-1 overflow-y-auto py-4">
          {/* HOME */}

          <MobileNavItem
            item={navItems[0]}
            active={isActive("/")}
            onClick={handleNavigation}
          />

          {/* ABOUT */}

          <MobileNavItem
            item={navItems[1]}
            active={isActive("/about")}
            onClick={handleNavigation}
          />

          {/* AUTHORS */}

          <div>
            <button
              type="button"
              onClick={() =>
                setMobileAuthorsOpen((prev) => !prev)
              }
              className={`
                flex
                w-full
                items-center
                gap-4

                px-6
                py-4

                border-l-[3px]

                text-[15px]
                font-medium

                transition-all
                duration-300

                ${
                  isAuthorsActive
                    ? "border-[#13C8F3] bg-cyan-400/10 text-[#13C8F3]"
                    : "border-transparent text-white/85 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-[#13C8F3]"
                }
              `}
            >
              <PenLine
                size={20}
                strokeWidth={1.8}
              />

              <span className="flex-1 text-left">
                Authors
              </span>

              <ChevronDown
                size={18}
                className={`
                  transition-transform
                  duration-300

                  ${
                    mobileAuthorsOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {/* MOBILE AUTHORS */}

            <div
              className={`
                overflow-hidden

                bg-[#010813]/70

                transition-all
                duration-300

                ${
                  mobileAuthorsOpen
                    ? "max-h-[350px]"
                    : "max-h-0"
                }
              `}
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

                      pl-11
                      pr-6

                      py-3.5

                      text-sm

                      transition-all
                      duration-300

                      ${
                        isActive(item.path)
                          ? "bg-cyan-400/10 text-[#13C8F3]"
                          : "text-white/65 hover:bg-cyan-400/5 hover:text-[#13C8F3]"
                      }
                    `}
                  >
                    <Icon size={16} />

                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* REGISTRATION */}

          <MobileNavItem
            item={navItems[2]}
            active={isActive("/registration")}
            onClick={handleNavigation}
          />

          {/* COMMITTEE */}

          <MobileNavItem
            item={navItems[3]}
            active={isActive("/committee")}
            onClick={handleNavigation}
          />

          {/* PROGRAM */}

          <MobileNavItem
            item={navItems[4]}
            active={isActive("/speakers")}
            onClick={handleNavigation}
          />

          {/* VENUE */}

          <MobileNavItem
            item={navItems[5]}
            active={isActive("/venue")}
            onClick={handleNavigation}
          />
        </nav>

        {/* MOBILE CONTACT */}

        <div
          className="
            border-t
            border-white/5

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

              bg-gradient-to-r
              from-[#13C8F3]
              via-[#18AEEF]
              to-[#2877FF]

              px-5
              py-3.5

              text-center

              text-sm

              font-semibold

              tracking-wide

              text-white

              shadow-[0_8px_25px_rgba(37,108,246,0.25)]

              transition-all
              duration-300

              hover:brightness-110
            "
          >
            CONTACT US
          </Link>
        </div>
      </aside>
    </>
  );
}

// ===========================================================
// MOBILE NAV ITEM
// ===========================================================

function MobileNavItem({ item, active, onClick }) {
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

        px-6
        py-4

        border-l-[3px]

        text-[15px]

        font-medium

        transition-all
        duration-300

        ${
          active
            ? "border-[#13C8F3] bg-cyan-400/10 text-[#13C8F3]"
            : "border-transparent text-white/85 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-[#13C8F3]"
        }
      `}
    >
      <Icon
        size={20}
        strokeWidth={1.8}
        className="
          transition-transform
          duration-300

          group-hover:scale-110
        "
      />

      <span>
        {item.name}
      </span>
    </Link>
  );
}