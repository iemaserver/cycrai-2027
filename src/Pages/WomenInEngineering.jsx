import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

export default function WomenInEngineering() {
  // =========================================================
  // EARLY BIRD WIE FEES
  // 10% DEDUCTION APPLIED
  // =========================================================

  const earlyBirdFees = [
    {
      category:
        "Regular Author Academician (UG, PG, PhD, Faculty Members)",
      ieee: "₹ 7,650",
      nonIeee: "₹ 8,100",
    },
    {
      category: "Regular Author from Industry",
      ieee: "₹ 8,550",
      nonIeee: "₹ 9,000",
    },
    {
      category: "Foreign Delegates",
      ieee: "USD 315",
      nonIeee: "USD 360",
    },
    {
      category: "Only Attending / Accompanying",
      ieee: "₹ 3,600",
      nonIeee: "₹ 3,600",
    },
  ];

  // =========================================================
  // REGULAR WIE FEES
  // 10% DEDUCTION APPLIED
  // =========================================================

  const regularFees = [
    {
      category:
        "Regular Author Academician (UG, PG, PhD, Faculty Members)",
      ieee: "₹ 8,100",
      nonIeee: "₹ 8,550",
    },
    {
      category: "Regular Author from Industry",
      ieee: "₹ 9,000",
      nonIeee: "₹ 9,450",
    },
    {
      category: "Foreign Delegates",
      ieee: "USD 360",
      nonIeee: "USD 405",
    },
    {
      category: "Only Attending / Accompanying",
      ieee: "₹ 3,600",
      nonIeee: "₹ 3,600",
    },
  ];

  // =========================================================
  // FEE TABLE
  // =========================================================

  const FeeTable = ({
    title,
    fees,
    delay = 0,
  }) => {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay,
        }}
        className="
          overflow-hidden
          rounded-[16px]
          border
          border-[#DCE3EB]
          border-t-4
          border-t-[#075DB8]
          bg-white
        "
      >
        {/* =====================================================
            TABLE TITLE
        ====================================================== */}

        <div
          className="
            px-5
            pb-4
            pt-7
            sm:px-9
            sm:pb-5
            sm:pt-9
            md:px-12
          "
        >
          <div className="flex flex-wrap items-center gap-3">
            <h2
              className="
                text-xl
                font-black
                uppercase
                tracking-[1px]
                text-[#075DB8]
                sm:text-3xl
              "
            >
              {title}
            </h2>
          </div>

          <div
            className="
              mt-4
              h-[2px]
              w-full
              bg-[#E2E8F0]
            "
          />
        </div>

        {/* =====================================================
            TABLE
        ====================================================== */}

        <div
          className="
            px-4
            pb-6
            sm:px-9
            sm:pb-8
            md:px-12
          "
        >
          {/* =================================================
              RESPONSIVE TABLE
          ================================================== */}

          <div className="w-full">

            {/* =================================================
                BLUE TABLE HEADER
            ================================================== */}

            <div
              className="
                grid
                grid-cols-[1.65fr_.8fr_.8fr]
                items-center
                bg-[#075DB8]
                px-3
                py-4
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-white
                sm:grid-cols-[2fr_1fr_1fr]
                sm:px-5
                sm:text-base
              "
            >
              <span
                className="
                  pr-2
                  leading-tight
                  sm:pr-4
                "
              >
                Author Category
              </span>

              <span
                className="
                  px-1
                  text-center
                  leading-tight
                "
              >
                IEEE
                <span className="hidden sm:inline"> Member</span>
                <span className="sm:hidden"> Member</span>
              </span>

              <span
                className="
                  px-1
                  text-center
                  leading-tight
                "
              >
                Non-
                <span className="hidden sm:inline">IEEE</span>
                <span className="sm:hidden">IEEE</span>
              </span>
            </div>

            {/* =================================================
                TABLE ROWS
            ================================================== */}

            <div>
              {fees.map((fee, index) => (
                <motion.div
                  key={fee.category}
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                  }}
                  className="
                    grid
                    grid-cols-[1.65fr_.8fr_.8fr]
                    items-center
                    border-b
                    border-[#E2E8F0]
                    px-3
                    py-5
                    sm:grid-cols-[2fr_1fr_1fr]
                    sm:px-5
                    sm:py-5
                  "
                >
                  {/* =================================================
                      CATEGORY
                  ================================================== */}

                  <span
                    className="
                      min-w-0
                      pr-2
                      text-[14px]
                      font-medium
                      leading-6
                      text-[#334155]
                      sm:pr-6
                      sm:text-lg
                      sm:leading-7
                    "
                  >
                    {fee.category}
                  </span>

                  {/* =================================================
                      IEEE
                  ================================================== */}

                  <span
                    className="
                      min-w-0
                      px-1
                      text-center
                      text-[13px]
                      font-bold
                      leading-5
                      text-[#172554]
                      sm:text-lg
                      sm:leading-7
                    "
                  >
                    {fee.ieee}
                  </span>

                  {/* =================================================
                      NON IEEE
                  ================================================== */}

                  <span
                    className="
                      min-w-0
                      px-1
                      text-center
                      text-[13px]
                      font-bold
                      leading-5
                      text-[#172554]
                      sm:text-lg
                      sm:leading-7
                    "
                  >
                    {fee.nonIeee}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <Logo />

      <section
        className="
          relative
          overflow-hidden
          bg-[#07152F]
          px-5
          pb-12
          pt-8
          sm:px-6
          sm:pb-16
          sm:pt-10
          lg:px-8
          lg:pb-20
          lg:pt-14
        "
      >
        {/* =====================================================
            SOFT BACKGROUND GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-500/10
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-48
            -right-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-sky-400/10
            blur-[150px]
          "
        />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-5xl
            text-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <h1
              className="
                text-5xl
                font-black
                leading-tight
                tracking-tight
                text-white
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Women In
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#93C5FD]
                  via-[#60A5FA]
                  to-[#BFDBFE]
                  bg-clip-text
                  pb-3
                  text-transparent
                "
              >
                Engineering
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-2
                max-w-3xl
                text-sm
                font-medium
                leading-7
                tracking-wide
                text-blue-100/80
                sm:text-base
                md:text-lg
              "
            >
              Special registration fee concession for eligible
              Women-in-Engineering participants at CYCRAI 2027.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          REGISTRATION FEES
      ========================================================= */}

      <section
        id="fees"
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-white
          via-[#F8FBFF]
          to-[#F1F6FD]
          px-4
          py-14
          sm:px-6
          sm:py-20
          lg:px-8
          lg:py-24
        "
      >
        {/* =====================================================
            BACKGROUND GLOWS
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#BFDBFE]/20
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -right-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#DBEAFE]/30
            blur-[150px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
          "
        >
          {/* =====================================================
              CONCESSION INFORMATION
          ====================================================== */}

          <motion.div
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
              duration: 0.6,
            }}
            className="
              mb-10
              rounded-[16px]
              border
              border-[#DCE3EB]
              bg-white
              px-5
              py-6
              shadow-sm
              sm:px-8
              sm:py-7
              lg:px-10
            "
          >
            <p
              className="
                text-sm
                font-medium
                leading-7
                text-[#475569]
                sm:text-base
              "
            >
              A 10% deduction on the applicable conference
              registration fee will be provided to eligible
              participants under Women-in-Engineering as a special
              concession. The deduction will be calculated on the
              applicable registration fee before any additional taxes,
              bank charges, or other associated charges, as applicable.
            </p>
          </motion.div>

          {/* =====================================================
              FEE TABLES
          ====================================================== */}

          <div className="space-y-8 sm:space-y-10">

            {/* EARLY BIRD */}

            <FeeTable
              title="Early Bird Registration Fees for WIE"
              fees={earlyBirdFees}
            />

            {/* REGULAR */}

            <FeeTable
              title="Regular Registration Fees for WIE"
              fees={regularFees}
              delay={0.1}
            />

          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </>
  );
}