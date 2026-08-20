import { motion } from "framer-motion";
import { committeeData } from "../data/committeeData";

export default function CommitteeTabs({
  activeCommittee,
  setActiveCommittee,
}) {
  const committees = Object.entries(committeeData);

  return (
    <div className="w-full">

      {/* =========================================================
          DESKTOP
          ALL 7 IN ONE HORIZONTAL ROW
      ========================================================= */}
      <div className="hidden w-full md:block">

        <div
          className="
            flex
            w-full
            items-stretch
            gap-1.5
            rounded-2xl
            border
            border-cyan-400/20
            bg-[#071326]/80
            p-1.5
            backdrop-blur-xl
          "
        >

          {committees.map(([key, committee], index) => {
            const isActive = activeCommittee === key;

            return (
              <motion.button
                key={key}
                type="button"
                onClick={() => setActiveCommittee(key)}
                whileTap={{ scale: 0.97 }}
                whileHover={{
                  y: isActive ? 0 : -1,
                }}
                className={`
                  relative
                  flex
                  min-w-0
                  flex-1
                  items-center
                  justify-center
                  rounded-xl
                  border
                  px-2
                  py-3
                  text-center
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        border-cyan-300/30
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        text-white
                        shadow-[0_0_20px_rgba(34,211,238,0.15)]
                      `
                      : `
                        border-transparent
                        bg-transparent
                        text-slate-400
                        hover:border-cyan-400/15
                        hover:bg-cyan-500/[0.05]
                        hover:text-white
                      `
                  }
                `}
              >

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="committee-active-desktop"
                    className="
                      absolute
                      left-2
                      right-2
                      top-0
                      h-[2px]
                      rounded-full
                      bg-white/70
                    "
                  />
                )}

                {/* Number */}
                <span
                  className={`
                    mr-1.5
                    shrink-0
                    self-start
                    pt-0.5
                    text-[8px]
                    font-bold

                    ${
                      isActive
                        ? "text-white/80"
                        : "text-cyan-400/60"
                    }
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Name */}
                <span
                  className="
                    min-w-0
                    text-[9px]
                    font-semibold
                    leading-[1.25]
                    lg:text-[10px]
                    xl:text-[11px]
                  "
                >
                  {committee.title}
                </span>

              </motion.button>
            );
          })}

        </div>

      </div>


      {/* =========================================================
          MOBILE
          3 + 3 + 1 GRID
      ========================================================= */}
      <div className="block md:hidden">

        <div
          className="
            rounded-2xl
            border
            border-cyan-400/20
            bg-[#071326]/80
            p-2
            backdrop-blur-xl
          "
        >

          <div
            className="
              grid
              grid-cols-3
              gap-1.5
            "
          >

            {committees.map(([key, committee], index) => {
              const isActive = activeCommittee === key;

              return (
                <motion.button
                  key={key}
                  type="button"
                  onClick={() => setActiveCommittee(key)}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className={`
                    relative
                    flex
                    min-h-[58px]
                    min-w-0
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    border
                    px-1.5
                    py-2
                    text-center
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          border-cyan-300/30
                          bg-gradient-to-r
                          from-cyan-500
                          to-blue-600
                          text-white
                          shadow-[0_0_18px_rgba(34,211,238,0.14)]
                        `
                        : `
                          border-white/[0.07]
                          bg-white/[0.02]
                          text-slate-400
                          hover:border-cyan-400/20
                          hover:bg-cyan-500/[0.05]
                        `
                    }

                    ${
                      index === 6
                        ? "col-start-2"
                        : ""
                    }
                  `}
                >

                  {/* Active Line */}
                  {isActive && (
                    <motion.div
                      layoutId="committee-active-mobile"
                      className="
                        absolute
                        left-2
                        right-2
                        top-0
                        h-[2px]
                        rounded-full
                        bg-white/70
                      "
                    />
                  )}

                  {/* Number */}
                  <span
                    className={`
                      mb-1
                      text-[8px]
                      font-bold

                      ${
                        isActive
                          ? "text-white/80"
                          : "text-cyan-400/60"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Committee Name */}
                  <span
                    className={`
                      line-clamp-2
                      w-full
                      text-[8px]
                      font-semibold
                      leading-[1.2]

                      ${
                        isActive
                          ? "text-white"
                          : "text-slate-400"
                      }
                    `}
                  >
                    {committee.title}
                  </span>

                </motion.button>
              );
            })}

          </div>

        </div>

      </div>

    </div>
  );
}