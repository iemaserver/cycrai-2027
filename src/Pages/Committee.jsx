
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import MemberCard from "../components/MemberCard";
// import { committeeData } from "../data/committeeData";
// import Footer from "../components/Footer";

// export default function Committee() {
//   const committees = Object.entries(committeeData);

//   const [activeCommittee, setActiveCommittee] = useState(
//     committees[0]?.[0] || "organizing"
//   );

//   const currentCommittee =
//     committeeData[activeCommittee] || committees[0]?.[1];

//   return (
//     <main className="min-h-screen overflow-hidden bg-[#020817] text-white">

//       {/* =========================================================
//           HERO SECTION
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-[#020817]">

//         {/* Background Grid */}
//         <div
//           className="pointer-events-none absolute inset-0 opacity-[0.08]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />

//         {/* Cyan Glow */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             -left-40
//             -top-40
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-cyan-500/20
//             blur-[160px]
//           "
//         />

//         {/* Blue Glow */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             -bottom-40
//             -right-40
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-blue-600/20
//             blur-[170px]
//           "
//         />

//         <div
//           className="
//             relative
//             mx-auto
//             max-w-7xl
//             px-6
//             pb-20
//             pt-6
//             md:pb-24
//           "
//         >

//           {/* =====================================================
//               HERO CONTENT
//           ===================================================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-center"
//           >

//             {/* Badge */}
//             <span
//               className="
//                 inline-flex
//                 items-center
//                 rounded-full
//                 border
//                 border-cyan-400/30
//                 bg-cyan-500/10
//                 px-5
//                 py-2
//                 text-xs
//                 uppercase
//                 tracking-[3px]
//                 text-cyan-300
//                 backdrop-blur-xl
//                 md:text-sm
//               "
//             >
//               Conference Committee
//             </span>


//             {/* Main Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 delay: 0.15,
//                 duration: 0.7,
//               }}
//               className="
//                 mt-7
//                 text-5xl
//                 font-black
//                 leading-[1.1]
//                 md:text-7xl
//               "
//             >
//               Conference

//               <span
//                 className="
//                   block
//                   bg-gradient-to-r
//                   from-cyan-300
//                   via-sky-400
//                   to-blue-500
//                   bg-clip-text
//                   pb-3
//                   text-transparent
//                 "
//               >
//                 Committee
//               </span>
//             </motion.h1>


//             {/* Accent Line */}
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: 140 }}
//               transition={{
//                 delay: 0.4,
//                 duration: 0.8,
//               }}
//               className="
//                 mx-auto
//                 mt-8
//                 h-1
//                 rounded-full
//                 bg-gradient-to-r
//                 from-cyan-400
//                 via-sky-500
//                 to-blue-600
//               "
//             />


//             {/* =====================================================
//                 COMMITTEE DIRECTORY
//                 MOVED INSIDE HERO AFTER ACCENT LINE
//             ===================================================== */}
//             <div
//               className="
//                 mt-12
//                 text-left
//                 md:mt-14
//               "
//             >

//               {/* ===================================================
//                   DIRECTORY HEADER
//               =================================================== */}
//               <div
//                 className="
//                   mb-6
//                   flex
//                   items-center
//                   justify-between
//                   gap-4
//                 "
//               >

//                 <div>

//                   <p
//                     className="
//                       text-[9px]
//                       font-semibold
//                       uppercase
//                       tracking-[4px]
//                       text-cyan-400
//                     "
//                   >
//                     Conference
//                   </p>

//                   <h2
//                     className="
//                       mt-1.5
//                       text-xl
//                       font-black
//                       tracking-tight
//                       text-white
//                       md:text-2xl
//                     "
//                   >
//                     Committee Directory
//                   </h2>

//                 </div>


//                 {/* Committee Count */}
//                 <div
//                   className="
//                     rounded-full
//                     border
//                     border-cyan-400/20
//                     bg-cyan-500/5
//                     px-3
//                     py-1.5
//                     text-[9px]
//                     font-medium
//                     text-cyan-300
//                   "
//                 >
//                   {committees.length} Committees
//                 </div>

//               </div>


//               {/* ===================================================
//                   ALL 7 COMMITTEES
//               =================================================== */}
//               <div className="space-y-2.5">

//                 {committees.map(([key, committee], index) => {

//                   const isActive = activeCommittee === key;

//                   return (
//                     <motion.button
//                       key={key}
//                       type="button"
//                       onClick={() => setActiveCommittee(key)}
//                       whileHover={{
//                         x: isActive ? 0 : 3,
//                       }}
//                       whileTap={{
//                         scale: 0.99,
//                       }}
//                       transition={{
//                         duration: 0.2,
//                       }}
//                       className={`
//                         group
//                         relative
//                         flex
//                         min-h-[64px]
//                         w-full
//                         items-center
//                         overflow-hidden
//                         rounded-xl
//                         border
//                         px-4
//                         py-3
//                         text-left
//                         transition-all
//                         duration-300

//                         ${
//                           isActive
//                             ? `
//                               border-cyan-400/50
//                               bg-gradient-to-r
//                               from-cyan-500
//                               via-sky-500
//                               to-blue-600
//                               shadow-[0_0_30px_rgba(34,211,238,0.14)]
//                             `
//                             : `
//                               border-white/[0.08]
//                               bg-[#071326]/75
//                               hover:border-cyan-400/25
//                               hover:bg-[#0a192d]
//                             `
//                         }
//                       `}
//                     >

//                       {/* Active Left Indicator */}
//                       <motion.div
//                         initial={false}
//                         animate={{
//                           opacity: isActive ? 1 : 0,
//                           scaleY: isActive ? 1 : 0,
//                         }}
//                         transition={{
//                           duration: 0.25,
//                         }}
//                         className="
//                           absolute
//                           left-0
//                           top-0
//                           h-full
//                           w-[3px]
//                           origin-center
//                           bg-white/80
//                         "
//                       />


//                       {/* Number */}
//                       <span
//                         className={`
//                           mr-4
//                           shrink-0
//                           text-[11px]
//                           font-bold
//                           tracking-wide
//                           transition-colors
//                           duration-300

//                           ${
//                             isActive
//                               ? "text-white/90"
//                               : "text-cyan-400/60 group-hover:text-cyan-300"
//                           }
//                         `}
//                       >
//                         {String(index + 1).padStart(2, "0")}.
//                       </span>


//                       {/* Committee Name */}
//                       <span
//                         className={`
//                           min-w-0
//                           flex-1
//                           text-sm
//                           font-semibold
//                           leading-snug
//                           transition-colors
//                           duration-300
//                           md:text-[15px]

//                           ${
//                             isActive
//                               ? "text-white"
//                               : "text-slate-300 group-hover:text-white"
//                           }
//                         `}
//                       >
//                         {committee.title}
//                       </span>


//                       {/* Arrow */}
//                       <span
//                         className={`
//                           ml-3
//                           shrink-0
//                           text-sm
//                           transition-all
//                           duration-300

//                           ${
//                             isActive
//                               ? "translate-x-0 text-white opacity-100"
//                               : "-translate-x-1 text-slate-600 opacity-0 group-hover:translate-x-0 group-hover:text-cyan-400 group-hover:opacity-100"
//                           }
//                         `}
//                       >
//                         →
//                       </span>

//                     </motion.button>
//                   );
//                 })}

//               </div>

//             </div>

//           </motion.div>

//         </div>
//       </section>


//       {/* =========================================================
//           ACTIVE COMMITTEE CONTENT
//       ========================================================= */}
//       <section
//         className="
//           relative
//           overflow-hidden
//           bg-gradient-to-b
//           from-[#020817]
//           via-[#071326]
//           to-[#020817]
//           pb-24
//         "
//       >

//         {/* Background Grid */}
//         <div
//           className="pointer-events-none absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
//             backgroundSize: "70px 70px",
//           }}
//         />


//         {/* Cyan Glow */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             left-0
//             top-20
//             h-[450px]
//             w-[450px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[170px]
//           "
//         />


//         {/* Blue Glow */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-0
//             right-0
//             h-[450px]
//             w-[450px]
//             rounded-full
//             bg-blue-600/10
//             blur-[170px]
//           "
//         />


//         <div
//           className="
//             relative
//             mx-auto
//             max-w-7xl
//             px-4
//             md:px-6
//           "
//         >

//           {/* =====================================================
//               ACTIVE COMMITTEE
//           ===================================================== */}
//           <AnimatePresence mode="wait">

//             <motion.div
//               key={activeCommittee}
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -15,
//               }}
//               transition={{
//                 duration: 0.4,
//               }}
//               className="pt-16 md:pt-20"
//             >

//               {/* =================================================
//                   ACTIVE COMMITTEE TITLE
//               ================================================= */}
//               <div className="mb-12 text-center">

//                 <p
//                   className="
//                     text-[10px]
//                     uppercase
//                     tracking-[3px]
//                     text-cyan-400
//                     md:text-xs
//                   "
//                 >
//                   Selected Committee
//                 </p>

//                 <h2
//                   className="
//                     mx-auto
//                     mt-3
//                     max-w-5xl
//                     text-3xl
//                     font-black
//                     leading-tight
//                     text-white
//                     md:text-5xl
//                   "
//                 >
//                   {currentCommittee?.title}
//                 </h2>

//                 <div
//                   className="
//                     mx-auto
//                     mt-5
//                     h-1
//                     w-24
//                     rounded-full
//                     bg-gradient-to-r
//                     from-cyan-400
//                     via-sky-500
//                     to-blue-600
//                   "
//                 />

//               </div>


//               {/* =================================================
//                   COMMITTEE SECTIONS
//               ================================================= */}
//               <div className="space-y-12 md:space-y-14">

//                 {currentCommittee?.sections?.map(
//                   (section, sectionIndex) => (

//                     <motion.div
//                       key={`${activeCommittee}-${sectionIndex}`}
//                       initial={{
//                         opacity: 0,
//                         y: 20,
//                       }}
//                       whileInView={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       viewport={{
//                         once: true,
//                         amount: 0.05,
//                       }}
//                       transition={{
//                         duration: 0.45,
//                       }}
//                     >

//                       {/* =================================================
//                           SECTION HEADER
//                       ================================================= */}
//                       <div
//                         className="
//                           relative
//                           mb-6
//                           overflow-hidden
//                           rounded-2xl
//                           border
//                           border-cyan-400/15
//                           bg-white/[0.035]
//                           px-5
//                           py-4
//                           backdrop-blur-xl
//                           md:px-6
//                           md:py-5
//                         "
//                       >

//                         {/* Top Accent */}
//                         <div
//                           className="
//                             absolute
//                             left-0
//                             right-0
//                             top-0
//                             h-[2px]
//                             bg-gradient-to-r
//                             from-cyan-400
//                             via-sky-500
//                             to-blue-600
//                           "
//                         />

//                         <div
//                           className="
//                             flex
//                             items-center
//                             justify-between
//                             gap-4
//                           "
//                         >

//                           {/* Section Information */}
//                           <div
//                             className="
//                               flex
//                               min-w-0
//                               items-center
//                               gap-3
//                             "
//                           >

//                             {/* Section Number */}
//                             <div
//                               className="
//                                 flex
//                                 h-9
//                                 w-9
//                                 shrink-0
//                                 items-center
//                                 justify-center
//                                 rounded-lg
//                                 border
//                                 border-cyan-400/20
//                                 bg-cyan-500/10
//                                 text-xs
//                                 font-bold
//                                 text-cyan-300
//                               "
//                             >
//                               {String(sectionIndex + 1).padStart(
//                                 2,
//                                 "0"
//                               )}
//                             </div>

//                             <div className="min-w-0">

//                               <p
//                                 className="
//                                   text-[8px]
//                                   uppercase
//                                   tracking-[2px]
//                                   text-cyan-400/60
//                                 "
//                               >
//                                 Committee Section
//                               </p>

//                               <h3
//                                 className="
//                                   mt-0.5
//                                   text-lg
//                                   font-bold
//                                   leading-tight
//                                   text-white
//                                   md:text-xl
//                                 "
//                               >
//                                 {section.title}
//                               </h3>

//                             </div>

//                           </div>


//                           {/* Member Count */}
//                           <div
//                             className="
//                               shrink-0
//                               rounded-full
//                               border
//                               border-cyan-400/20
//                               bg-cyan-500/10
//                               px-3
//                               py-1
//                               text-[10px]
//                               font-semibold
//                               text-cyan-300
//                               md:px-4
//                               md:py-1.5
//                               md:text-xs
//                             "
//                           >
//                             {section.members?.length || 0}{" "}
//                             {section.members?.length === 1
//                               ? "Member"
//                               : "Members"}
//                           </div>

//                         </div>

//                       </div>


//                       {/* =================================================
//                           MEMBER CARDS
//                       ================================================= */}
//                       <motion.div
//                         layout
//                         className="
//                           grid
//                           grid-cols-1
//                           gap-4
//                           md:grid-cols-2
//                           md:gap-5
//                         "
//                       >

//                         {section.members?.map(
//                           (member, memberIndex) => (

//                             <motion.div
//                               key={`${member.name}-${memberIndex}`}
//                               initial={{
//                                 opacity: 0,
//                                 y: 15,
//                               }}
//                               whileInView={{
//                                 opacity: 1,
//                                 y: 0,
//                               }}
//                               viewport={{
//                                 once: true,
//                                 amount: 0.05,
//                               }}
//                               transition={{
//                                 delay: memberIndex * 0.03,
//                                 duration: 0.3,
//                               }}
//                             >
//                               <MemberCard member={member} />
//                             </motion.div>

//                           )
//                         )}

//                       </motion.div>

//                     </motion.div>

//                   )
//                 )}

//               </div>

//             </motion.div>

//           </AnimatePresence>

//         </div>
//       </section>


//       {/* =========================================================
//           FOOTER
//       ========================================================= */}
//       <Footer />

//     </main>
//   );
// }


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CommitteeTabs from "../components/CommitteeTabs";
import MemberCard from "../components/MemberCard";
import { committeeData } from "../data/committeeData";
import Footer from "../components/Footer";

export default function Committee() {
  const committees = Object.entries(committeeData);

  const [activeCommittee, setActiveCommittee] = useState(
    committees[0]?.[0] || "organizing"
  );

  const currentCommittee =
    committeeData[activeCommittee] || committees[0]?.[1];

  return (
    <main className="min-h-screen overflow-hidden bg-[#020817] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#020817]">

        {/* GRID */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* CYAN GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-500/20
            blur-[160px]
          "
        />

        {/* BLUE GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -right-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/20
            blur-[170px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            pb-10
            pt-8
            md:px-6
            md:pb-14
            md:pt-10
          "
        >

          {/* =====================================================
              HERO CONTENT
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-center"
          >

            {/* BADGE */}
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-500/10
                px-4
                py-1.5
                text-[10px]
                uppercase
                tracking-[3px]
                text-cyan-300
                backdrop-blur-xl
                md:px-5
                md:py-2
                md:text-sm
              "
            >
              Conference Committee
            </span>


            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="
                mt-6
                text-4xl
                font-black
                leading-[1.1]
                md:mt-7
                md:text-7xl
              "
            >
              Conference

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-400
                  to-blue-500
                  bg-clip-text
                  pb-2
                  text-transparent
                "
              >
                Committee
              </span>
            </motion.h1>


            {/* ACCENT LINE */}
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 140,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="
                mx-auto
                mt-7
                h-1
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-sky-500
                to-blue-600
              "
            />

          </motion.div>


          {/* =====================================================
              7 COMMITTEE NAVIGATION
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
              duration: 0.6,
            }}
            className="mt-10 md:mt-12"
          >

            <CommitteeTabs
              activeCommittee={activeCommittee}
              setActiveCommittee={setActiveCommittee}
            />

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          ACTIVE COMMITTEE CONTENT
      ========================================================= */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-[#020817]
          via-[#071326]
          to-[#020817]
          pb-24
        "
      >

        {/* GRID */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* CYAN GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-500/10
            blur-[170px]
          "
        />

        {/* BLUE GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-600/10
            blur-[170px]
          "
        />


        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-4
            md:px-6
          "
        >

          {/* =====================================================
              CURRENT COMMITTEE
          ===================================================== */}
          <AnimatePresence mode="wait">

            <motion.div
              key={activeCommittee}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.4,
              }}
              className="pt-10 md:pt-16"
            >

              {/* =================================================
                  COMMITTEE TITLE
              ================================================= */}
              <div className="mb-10 text-center md:mb-12">

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[3px]
                    text-cyan-400
                    md:text-xs
                  "
                >
                  Selected Committee
                </p>

                <h2
                  className="
                    mx-auto
                    mt-3
                    max-w-5xl
                    text-2xl
                    font-black
                    leading-tight
                    text-white
                    md:text-5xl
                  "
                >
                  {currentCommittee?.title}
                </h2>

                <div
                  className="
                    mx-auto
                    mt-5
                    h-1
                    w-24
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-sky-500
                    to-blue-600
                  "
                />

              </div>


              {/* =================================================
                  SECTIONS
              ================================================= */}
              <div className="space-y-10 md:space-y-14">

                {currentCommittee?.sections?.map(
                  (section, sectionIndex) => (

                    <motion.div
                      key={`${activeCommittee}-${sectionIndex}`}
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
                        amount: 0.05,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                    >

                      {/* SECTION HEADER */}
                      <div
                        className="
                          relative
                          mb-5
                          overflow-hidden
                          rounded-2xl
                          border
                          border-cyan-400/15
                          bg-white/[0.035]
                          px-4
                          py-4
                          backdrop-blur-xl
                          md:mb-6
                          md:px-6
                          md:py-5
                        "
                      >

                        {/* TOP ACCENT */}
                        <div
                          className="
                            absolute
                            left-0
                            right-0
                            top-0
                            h-[2px]
                            bg-gradient-to-r
                            from-cyan-400
                            via-sky-500
                            to-blue-600
                          "
                        />

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-3
                          "
                        >

                          {/* SECTION INFO */}
                          <div
                            className="
                              flex
                              min-w-0
                              items-center
                              gap-3
                            "
                          >

                            <div
                              className="
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-cyan-400/20
                                bg-cyan-500/10
                                text-[10px]
                                font-bold
                                text-cyan-300
                                md:h-9
                                md:w-9
                                md:text-xs
                              "
                            >
                              {String(
                                sectionIndex + 1
                              ).padStart(2, "0")}
                            </div>


                            <div className="min-w-0">

                              <p
                                className="
                                  text-[7px]
                                  uppercase
                                  tracking-[2px]
                                  text-cyan-400/60
                                "
                              >
                                Committee Section
                              </p>

                              <h3
                                className="
                                  mt-0.5
                                  text-base
                                  font-bold
                                  leading-tight
                                  text-white
                                  md:text-xl
                                "
                              >
                                {section.title}
                              </h3>

                            </div>

                          </div>


                          {/* MEMBER COUNT */}
                          <div
                            className="
                              shrink-0
                              rounded-full
                              border
                              border-cyan-400/20
                              bg-cyan-500/10
                              px-2.5
                              py-1
                              text-[9px]
                              font-semibold
                              text-cyan-300
                              md:px-4
                              md:py-1.5
                              md:text-xs
                            "
                          >
                            {section.members?.length || 0}{" "}
                            {section.members?.length === 1
                              ? "Member"
                              : "Members"}
                          </div>

                        </div>

                      </div>


                      {/* =================================================
                          MEMBER CARDS
                      ================================================= */}
                      <motion.div
                        layout
                        className="
                          grid
                          grid-cols-1
                          gap-4
                          md:grid-cols-2
                          md:gap-5
                        "
                      >

                        {section.members?.map(
                          (member, memberIndex) => (

                            <motion.div
                              key={`${member.name}-${memberIndex}`}
                              initial={{
                                opacity: 0,
                                y: 15,
                              }}
                              whileInView={{
                                opacity: 1,
                                y: 0,
                              }}
                              viewport={{
                                once: true,
                                amount: 0.05,
                              }}
                              transition={{
                                delay:
                                  memberIndex * 0.03,
                                duration: 0.3,
                              }}
                            >
                              <MemberCard
                                member={member}
                              />
                            </motion.div>

                          )
                        )}

                      </motion.div>

                    </motion.div>

                  )
                )}

              </div>

            </motion.div>

          </AnimatePresence>

        </div>
      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />

    </main>
  );
}