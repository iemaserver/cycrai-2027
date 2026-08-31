import { motion } from "framer-motion";
import {
  ArrowRight,
  CreditCard,
  Sparkles,
} from "lucide-react";

import Footer from "../components/Footer";

export default function Registration() {
  // =========================================================
  // EARLY BIRD FEES
  // =========================================================

  const earlyBirdFees = [
    {
      category:
        "Regular Author Academician (UG, PG, PhD, Faculty Members)",
      ieee: "₹ 8,500",
      nonIeee: "₹ 9,000",
    },
    {
      category: "Regular Author from Industry",
      ieee: "₹ 9,500",
      nonIeee: "₹ 10,000",
    },
    {
      category: "Foreign Delegates",
      ieee: "USD 350",
      nonIeee: "USD 400",
    },
    {
      category: "Only Attending / Accompanying",
      ieee: "₹ 4,000",
      nonIeee: "₹ 4,000",
    },
  ];

  // =========================================================
  // REGULAR FEES
  // =========================================================

  const regularFees = [
    {
      category:
        "Regular Author Academician (UG, PG, PhD, Faculty Members)",
      ieee: "₹ 9,000",
      nonIeee: "₹ 9,500",
    },
    {
      category: "Regular Author from Industry",
      ieee: "₹ 10,000",
      nonIeee: "₹ 10,500",
    },
    {
      category: "Foreign Delegates",
      ieee: "USD 400",
      nonIeee: "USD 450",
    },
    {
      category: "Only Attending / Accompanying",
      ieee: "₹ 4,000",
      nonIeee: "₹ 4,000",
    },
  ];

  // =========================================================
  // FEE TABLE
  // =========================================================

  const FeeTable = ({
    title,
    fees,
    delay = 0,
    early = false,
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
            px-7
            pb-5
            pt-8
            sm:px-9
            sm:pt-9
            md:px-12
          "
        >
          <div className="flex flex-wrap items-center gap-3">

            <h2
              className="
                text-2xl
                font-black
                uppercase
                tracking-[1px]
                text-[#075DB8]
                sm:text-3xl
              "
            >
              {title}
            </h2>

            {early && (
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-[#EFF6FF]
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-[#075DB8]
                "
              >
                <Sparkles size={12} />
                Early Bird
              </span>
            )}

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
            overflow-x-auto
            px-7
            pb-8
            sm:px-9
            md:px-12
          "
        >

          <div className="min-w-[700px]">

            {/* =================================================
                BLUE TABLE HEADER
            ================================================== */}

            <div
              className="
                grid
                grid-cols-[2fr_1fr_1fr]
                bg-[#075DB8]
                px-5
                py-4
                text-sm
                font-bold
                uppercase
                tracking-wide
                text-white
                sm:px-5
                sm:text-base
              "
            >

              <span>
                Author Category
              </span>

              <span className="text-center">
                IEEE Member
              </span>

              <span className="text-center">
                Non-IEEE
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
                    grid-cols-[2fr_1fr_1fr]
                    items-center
                    border-b
                    border-[#E2E8F0]
                    px-5
                    py-5
                  "
                >

                  {/* CATEGORY */}

                  <span
                    className="
                      pr-6
                      text-base
                      font-medium
                      leading-7
                      text-[#334155]
                      sm:text-lg
                    "
                  >
                    {fee.category}
                  </span>


                  {/* IEEE */}

                  <span
                    className="
                      text-center
                      text-base
                      font-bold
                      text-[#172554]
                      sm:text-lg
                    "
                  >
                    {fee.ieee}
                  </span>


                  {/* NON IEEE */}

                  <span
                    className="
                      text-center
                      text-base
                      font-bold
                      text-[#172554]
                      sm:text-lg
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


  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#07152F]
          px-5
          pb-20
          pt-14
          sm:px-6
          sm:pb-24
          sm:pt-16
          lg:px-8
          lg:pb-28
          lg:pt-20
        "
      >

        {/* Soft background glow */}

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


        {/* Hero Content */}

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
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              Conference

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
                Registration
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-6
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
              Registration categories and fee structure for
              CYCRAI 2027.
            </p>


            {/* Scroll Button */}

            <div className="mt-10 flex justify-center">

              <button
                onClick={() =>
                  document
                    .getElementById("fees")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#075DB8]
                  px-8
                  py-4
                  font-bold
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-[#064F9C]
                "
              >
                View Registration Fees

                <ArrowRight size={20} />

              </button>

            </div>

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
          px-5
          py-16
          sm:px-6
          sm:py-20
          lg:px-8
          lg:py-24
        "
      >

        {/* Background Glows */}

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
              FEE TABLES
          ====================================================== */}

          <div className="space-y-10">

            <FeeTable
              title="Early Bird Registration Fees"
              fees={earlyBirdFees}
              early={true}
            />

            <FeeTable
              title="Regular Registration Fees"
              fees={regularFees}
              delay={0.1}
            />

          </div>


          {/* =====================================================
              INFORMATION BOX
          ====================================================== */}

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
            }}
            className="mt-10"
          >

            <div
              className="
                overflow-hidden
                rounded-[16px]
                border
                border-[#DCE3EB]
                border-t-4
                border-t-[#075DB8]
                bg-white
                p-7
                sm:p-9
              "
            >

              <div
                className="
                  flex
                  flex-col
                  gap-5
                  sm:flex-row
                  sm:items-center
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#E8F1FF]
                    text-[#075DB8]
                  "
                >
                  <Sparkles size={25} />
                </div>

                <div>

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-[#172554]
                      sm:text-2xl
                    "
                  >
                    Choose the appropriate registration category
                  </h3>

                  <p
                    className="
                      mt-2
                      text-base
                      font-semibold
                      leading-7
                      text-[#334155]
                    "
                  >
                    Registration fees differ according to author
                    category and IEEE membership status.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>


          {/* =====================================================
              REGISTRATION BUTTON
          ====================================================== */}

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
            }}
            className="
              mt-12
              flex
              justify-center
            "
          >

            <button
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#075DB8]
                px-9
                py-4
                text-base
                font-bold
                text-white
                transition-colors
                duration-300
                hover:bg-[#064F9C]
                sm:px-10
                sm:py-5
                sm:text-lg
              "
            >
              Proceed to Registration

              <ArrowRight size={21} />

            </button>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </>
  );
}