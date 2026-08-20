
// import { motion } from "framer-motion";

// export default function MemberCard({ member }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{
//         y: -3,
//       }}
//       transition={{ duration: 0.3 }}
//       className="
//         group
//         relative
//         overflow-hidden
//         rounded-xl
//         bg-[#071326]/80
//         backdrop-blur-xl
//         border
//         border-cyan-400/20
//         shadow-[0_0_20px_rgba(34,211,238,0.05)]
//         hover:border-cyan-400/40
//         hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
//         transition-all
//         duration-300
//         px-5
//         py-4
//       "
//     >
//       {/* Subtle Left Accent */}
//       <div
//         className="
//           absolute
//           left-0
//           top-0
//           h-full
//           w-[2px]
//           bg-gradient-to-b
//           from-cyan-400
//           to-blue-600
//           opacity-70
//           group-hover:opacity-100
//           transition-opacity
//           duration-300
//         "
//       />

//       {/* Name + Designation */}
//       <div className="flex items-center gap-3">

//         {/* Name */}
//         <h3
//           className="
//             text-base
//             md:text-lg
//             font-semibold
//             text-white
//             whitespace-nowrap
//             transition-colors
//             duration-300
//             group-hover:text-cyan-300
//           "
//         >
//           {member.name}
//         </h3>

//         {/* Separator */}
//         <span className="text-cyan-400/50">
//           •
//         </span>

//         {/* Designation */}
//         <p
//           className="
//             text-sm
//             md:text-base
//             text-slate-400
//             font-medium
//             whitespace-nowrap
//           "
//         >
//           {member.position}
//         </p>

//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";

export default function MemberCard({ member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        bg-[#071326]/80
        backdrop-blur-xl
        border
        border-cyan-400/20
        shadow-[0_0_20px_rgba(34,211,238,0.05)]
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
        transition-all
        duration-300
        px-6
        py-5
      "
    >
      {/* =====================================================
          SUBTLE LEFT ACCENT
      ===================================================== */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-[2px]
          bg-gradient-to-b
          from-cyan-400
          to-blue-600
          opacity-70
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
      />

      {/* =====================================================
          MEMBER INFORMATION
      ===================================================== */}
      <div className="flex flex-col gap-3">

        {/* NAME */}
        <h3
          className="
            text-lg
            md:text-xl
            font-semibold
            text-white
            leading-tight
            transition-colors
            duration-300
            group-hover:text-cyan-300
          "
        >
          {member.name}
        </h3>

        {/* POSITION */}
        <div>
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
              text-xs
              md:text-sm
              font-semibold
              tracking-wide
              text-cyan-300
              transition-all
              duration-300
              group-hover:border-cyan-300/50
              group-hover:bg-cyan-500/15
            "
          >
            {member.position}
          </span>
        </div>

        {/* DESIGNATION / INSTITUTION */}
        {member.designation && (
          <p
            className="
              text-sm
              md:text-base
              leading-relaxed
              text-slate-400
              font-medium
              max-w-3xl
            "
          >
            {member.designation}
          </p>
        )}

      </div>
    </motion.div>
  );
}