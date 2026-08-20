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

  const FeeTable = ({ title, fees, delay = 0 }) => {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay,
        }}
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-cyan-400/20
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(34,211,238,0.06)]
        "
      >

        {/* Glow */}

        <div
          className="
            absolute
            -top-24
            right-0
            h-48
            w-48
            rounded-full
            bg-cyan-500/10
            blur-[100px]
          "
        />

        {/* Table Title */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            gap-4
            px-6
            md:px-8
            pt-8
            pb-6
            border-b
            border-cyan-400/10
          "
        >

          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-cyan-500/10
              border
              border-cyan-400/20
              flex
              items-center
              justify-center
              flex-shrink-0
            "
          >
            <CreditCard
              size={23}
              className="text-cyan-300"
            />
          </div>

          <div>

            <h3
              className="
                text-xl
                md:text-2xl
                font-bold
                text-white
              "
            >
              {title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Registration fee structure
            </p>

          </div>

        </div>


        {/* Table */}

        <div className="overflow-x-auto">

          <div className="min-w-[760px]">

            {/* Header */}

            <div
              className="
                grid
                grid-cols-[2fr_1fr_1fr]
                bg-gradient-to-r
                from-cyan-500/80
                via-sky-500/80
                to-blue-600/80
                text-white
                uppercase
                text-sm
                font-bold
                tracking-wide
                px-6
                py-4
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


            {/* Rows */}

            <div className="divide-y divide-cyan-400/10">

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
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    grid
                    grid-cols-[2fr_1fr_1fr]
                    items-center
                    px-6
                    py-6
                    transition-all
                    duration-300
                    hover:bg-cyan-400/[0.04]
                  "
                >

                  <span
                    className="
                      text-slate-300
                      leading-7
                      group-hover:text-white
                      transition-colors
                    "
                  >
                    {fee.category}
                  </span>


                  <span
                    className="
                      text-center
                      font-bold
                      text-white
                      group-hover:text-cyan-300
                      transition-colors
                    "
                  >
                    {fee.ieee}
                  </span>


                  <span
                    className="
                      text-center
                      font-bold
                      text-white
                      group-hover:text-cyan-300
                      transition-colors
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
          min-h-[75vh]
          overflow-hidden
          bg-[#020817]
          pt-6
          pb-24
        "
      >

        {/* Background Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.08]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />


        {/* Cyan Glow */}

        <div
          className="
            absolute
            -top-40
            left-0
            w-[500px]
            h-[500px]
            bg-cyan-500/20
            blur-[160px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[500px]
            h-[500px]
            bg-blue-600/20
            blur-[170px]
            rounded-full
          "
        />


        {/* Content */}

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-6
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center"
          >

            {/* Badge */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-500/10
                px-5
                py-2
                text-cyan-300
                text-sm
                tracking-[3px]
                uppercase
              "
            >

              <Sparkles size={16} />

              CYCRAI 2027

            </span>


            {/* Heading */}

            <h1
  className="
    mt-8
    text-5xl
    md:text-7xl
    font-black
    leading-[1.1]
    text-white
    overflow-visible
  "
>
  Conference

  <span
    className="
      block
      pb-3
      bg-gradient-to-r
      from-cyan-300
      via-sky-400
      to-blue-500
      bg-clip-text
      text-transparent
    "
  >
    Registration
  </span>
</h1>


            {/* Description */}

            


            {/* Registration Button */}

            <div className="mt-12 flex justify-center">

              <button
                onClick={() =>
                  document
                    .getElementById("fees")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-cyan-400
                  px-9
                  py-4
                  font-bold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(34,211,238,.45)]
                "
              >

                Register Now

                <ArrowRight
                  size={20}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />

              </button>
             
            </div>
            
           <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="
                mx-auto
                mt-14
                h-1
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-sky-500
                to-blue-600
              "
            />
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
          pt-6 pb-28
          bg-gradient-to-b
          from-[#020817]
          via-[#071326]
          to-[#020817]
          overflow-hidden
          
        "
      >

        {/* Background Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />


        {/* Glows */}

        <div
          className="
            absolute
            left-0
            top-0
            w-[450px]
            h-[450px]
            rounded-full
            bg-cyan-500/10
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            w-[450px]
            h-[450px]
            rounded-full
            bg-blue-600/10
            blur-[170px]
          "
        />


        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-6
          "
        >

          {/* Section Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              text-center
              mb-20
            "
          >

            <span
              className="
                inline-flex
                px-5
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-400/30
                text-cyan-300
                uppercase
                tracking-[3px]
                text-sm
              "
            >
              Registration Fees
            </span>


            <h2
              className="
                mt-8
                text-5xl
                md:text-6xl
                font-black
                text-white
              "
            >

              Registration

              <span
                className="
                  block
                  mt-2
                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                Fee Structure
              </span>

            </h2>



          </motion.div>


          {/* =====================================================
              FEE TABLES
          ===================================================== */}

          <div className="space-y-10">

            <FeeTable
              title="Early Bird Registration Fees"
              fees={earlyBirdFees}
            />

            <FeeTable
              title="Regular Registration Fees"
              fees={regularFees}
              delay={0.1}
            />

          </div>


          {/* Bottom Registration Button */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mt-16
              flex
              justify-center
            "
          >

            <button
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-cyan-400
                px-10
                py-5
                text-lg
                font-bold
                text-slate-900
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
              "
            >

              Proceed to Registration

              <ArrowRight
                size={21}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />

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