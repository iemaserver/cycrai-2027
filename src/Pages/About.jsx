import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import {
  Building2,
  Network,
  ShieldCheck,
  Cpu,
} from "lucide-react";

export default function AboutSection() {
  return (
    <>
      {/* =========================================================
          ABOUT PAGE
      ========================================================= */}
      <Logo></Logo>

      <section className="relative min-h-screen overflow-hidden bg-[#F7FAFF]">

        {/* =========================================================
            DARK HEADER / HERO
        ========================================================= */}

        <div
          className="
            relative
            overflow-hidden
            bg-[#07152F]
            px-5
            pb-20
            pt-12
            sm:px-6
            sm:pb-24
            sm:pt-16
            lg:px-8
            lg:pb-28
            lg:pt-20
          "
        >

          {/* Header Content */}

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
            className="
              relative
              z-10
              mx-auto
              max-w-5xl
              text-center
            "
          >

            {/* Main Heading */}

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
              About

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
                CYCRAI 2027
              </span>
            </h1>

            {/* Conference Name */}

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                font-semibold
                leading-8
                tracking-wide
                text-blue-100/90
                sm:text-lg
                md:text-xl
              "
            >
              First International Conference on Cyber Security,
              Cryptography and Responsible AI
            </p>

          </motion.div>
        </div>


        {/* =========================================================
            LIGHT CONTENT AREA
        ========================================================= */}

        <div
          className="
            relative
            bg-gradient-to-b
            from-white
            via-[#F8FBFF]
            to-[#F1F6FD]
            px-5
            py-12
            sm:px-6
            sm:py-16
            lg:px-8
            lg:py-20
          "
        >

          {/* Soft Background Glows */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-20
              h-[450px]
              w-[450px]
              rounded-full
              bg-[#BFDBFE]/20
              blur-[130px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#DBEAFE]/30
              blur-[140px]
            "
          />


          {/* =======================================================
              MAIN CONTENT
          ======================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-7xl
            "
          >

            {/* =====================================================
                CONFERENCE OVERVIEW
            ===================================================== */}

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
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                mx-auto
                mt-10
                max-w-6xl
              "
            >

              {/* Main White Box */}

              <div
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

                {/* Card Header */}

                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    border-b
                    border-[#E2E8F0]
                    px-7
                    py-7
                    sm:flex-row
                    sm:items-center
                    sm:px-9
                    md:px-11
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
                      bg-[#075DB8]
                      text-white
                    "
                  >
                    <ShieldCheck size={27} />
                  </div>

                  <div>

                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[#075DB8]
                      "
                    >
                      Conference Overview
                    </p>

                    <h2
                      className="
                        mt-1
                        text-2xl
                        font-bold
                        text-[#172554]
                        sm:text-3xl
                      "
                    >
                      About CYCRAI 2027
                    </h2>

                  </div>

                </div>


                {/* Card Content */}

                <div
                  className="
                    px-7
                    py-8
                    sm:px-9
                    sm:py-9
                    md:px-11
                    md:py-10
                  "
                >

                  <p
                    className="
                      text-lg
                      font-semibold
                      leading-8
                      text-[#1E3A5F]
                      md:text-xl
                    "
                  >
                    First International Conference on Cyber Security,
                    Cryptography and Responsible AI (CYCRAI 2027) will be
                    organized by Department of Computer Science and
                    Engineering(Cyber Security), Institute of Engineering &
                    Management Kolkata, under University of Engineering and
                    Management Kolkata, with Technical Co-Sponsorship of the
                    IEEE Kolkata Section and IEEE Computer Society SBC during
                    29th September to 30th September, 2027.
                  </p>

                  <p
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                      md:text-xl
                    "
                  >
                    The event brings together researchers, professionals, and
                    government representatives to share their work, examine
                    key challenges, and explore potential solutions. Keynote
                    addresses, technical sessions, and networking activities
                    are designed to encourage cross-disciplinary dialogue.
                    Papers that are accepted and presented will be submitted
                    for publication in the IEEE Xplore Digital Library.
                  </p>

                </div>

              </div>

            </motion.div>


            {/* =====================================================
                ABOUT DEPARTMENT
            ===================================================== */}

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
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                mx-auto
                mt-8
                max-w-6xl
              "
            >

              {/* Main White Box */}

              <div
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

                {/* Department Header */}

                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    border-b
                    border-[#E2E8F0]
                    px-7
                    py-7
                    sm:flex-row
                    sm:items-center
                    sm:px-9
                    md:px-11
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
                      bg-[#075DB8]
                      text-white
                    "
                  >
                    <Cpu size={27} />
                  </div>

                  <div>

                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[#075DB8]
                      "
                    >
                      About Department
                    </p>

                    <h2
                      className="
                        mt-1
                        text-2xl
                        font-bold
                        text-[#172554]
                        sm:text-3xl
                      "
                    >
                      Department of Computer Science and Engineering
                      (Cyber Security)
                    </h2>

                  </div>

                </div>


                {/* =====================================================
                    DEPARTMENT CONTENT
                ===================================================== */}

                <div
                  className="
                    px-7
                    py-8
                    sm:px-9
                    sm:py-9
                    md:px-11
                    md:py-10
                  "
                >

                  <p
                    className="
                      text-lg
                      font-semibold
                      leading-8
                      text-[#1E3A5F]
                      md:text-xl
                    "
                  >
                    The Department of Computer Science and Engineering
                    (Cyber Security) programme at UEM Kolkata is allowing
                    students to gain knowledge about the concepts that enable
                    many of today’s fundamental technologies, including
                    artificial intelligence &amp; machine Learning, Wireless
                    Communication and the Internet of Things.
                  </p>

                  <p
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                      md:text-xl
                    "
                  >
                    The Department introduces fundamental concepts of
                    Computer Science, Information Technology, Cybersecurity
                    and Networks and imparts knowledge dealing with logical
                    reasoning, problem-solving, data representation,
                    abstraction etc. The initial level courses provide
                    students with a core foundation in programming,
                    mathematical reasoning, physics, and circuit design.
                  </p>

                  <p
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                      md:text-xl
                    "
                  >
                    The latter part blends fundamentals in computer
                    technologies including software engineering, database
                    management system, computer networks, operating systems,
                    and computer architecture with fundamentals in electrical
                    and electronics engineering.
                  </p>

                  <p
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                      md:text-xl
                    "
                  >
                    Currently, the Department runs a four-year B. Tech in
                    Computer Science and Engineering (Cyber Security) course
                    to prepare students with a firm foundation of both the
                    theory and practice of Computer Science and Engineering
                    with a specialization in Cyber Security through a
                    comprehensive undergraduate program and to strengthen
                    creativity, nurture innovation and develop the ability
                    to carry out research and solve real-world problems.
                  </p>

                </div>

              </div>

            </motion.div>


            {/* =====================================================
                ABOUT INSTITUTION
            ===================================================== */}

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
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                mx-auto
                mt-8
                max-w-6xl
              "
            >

              {/* Main White Box */}

              <div
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

                {/* Institution Header */}

                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    border-b
                    border-[#E2E8F0]
                    px-7
                    py-7
                    sm:flex-row
                    sm:items-center
                    sm:px-9
                    md:px-11
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
                      bg-[#075DB8]
                      text-white
                    "
                  >
                    <Building2 size={27} />
                  </div>

                  <div>

                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[#075DB8]
                      "
                    >
                      About Institution
                    </p>

                    <h2
                      className="
                        mt-1
                        text-2xl
                        font-bold
                        text-[#172554]
                        sm:text-3xl
                      "
                    >
                      About IEM-UEM Group
                    </h2>

                  </div>

                </div>


                {/* =====================================================
                    INSTITUTION CONTENT
                ===================================================== */}

                <div
                  className="
                    px-7
                    py-8
                    sm:px-9
                    sm:py-9
                    md:px-11
                    md:py-10
                  "
                >

                  {/* =====================================================
                      INTRODUCTION
                  ===================================================== */}

                  <p
                    className="
                      text-lg
                      font-semibold
                      leading-8
                      text-[#1E3A5F]
                      md:text-xl
                    "
                  >
                    The IEM UEM group is an acclaimed educational group
                    amongst the industry-centred academic training
                    organisations of today. IEM has set sublime standards in
                    addressing the technical and managerial resource shortage
                    in the new era of dynamic globalisation. The IEM UEM group
                    has risen to fame for its strong foundation in teaching
                    and R&amp;D in multifaceted areas. It aims to serve the
                    future generation as well as the Nation through its
                    commitment towards self sufficiency and unmatchable
                    excellence.
                  </p>


                  {/* =====================================================
                      LEGACY
                  ===================================================== */}

                  <p
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                      md:text-xl
                    "
                  >
                    Since its inception, the IEM UEM group has surpassed
                    innumerable benchmarks of achievements and accreditations.
                    Today IEM flaunts a colossal network of expansive
                    operations led by an awe-inspiring student force who are
                    the torchbearers of a better tomorrow.
                  </p>


                  {/* =====================================================
                      VISION
                  ===================================================== */}

                  <p
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                      md:text-xl
                    "
                  >
                    The IEM UEM Group has opened up the doors for young minds
                    who dare to dream. It encourages the spirit of free enquiry
                    and imagination. In this temple of learning, dreams take
                    shape. The educational group attempts to inculcate the
                    sense of human values and discipline in students to make
                    them respectable human beings. It encourages learners to
                    learn, to realize their potential and imbibe the best
                    practices.
                  </p>


                  {/* =====================================================
                      INSTITUTIONS
                  ===================================================== */}

                  <div
                    className="
                      mt-8
                      border-t
                      border-[#E2E8F0]
                      pt-8
                    "
                  >

                    {/* IEM */}

                    <div className="mt-5">

                      <p
                        className="
                          text-lg
                          font-bold
                          leading-8
                          text-[#1E3A5F]
                          md:text-xl
                        "
                      >
                        Institute of Engineering &amp; Management(IEM) Kolkata
                      </p>

                      <p
                        className="
                          mt-2
                          text-lg
                          font-semibold
                          leading-8
                          text-[#334155]
                          md:text-xl
                        "
                      >
                        IEM is established in Kolkata in the IT hub of the
                        state of West Bengal since 1989 as the first
                        self-financed engineering college of the state. Since
                        then, IEM has been socially accredited as the best
                        self-financed engineering institute of West Bengal and
                        admits the best students from the top engineering merit
                        list of WBJEE and JEE Main.
                      </p>

                    </div>


                    {/* UEM Jaipur */}

                    <div className="mt-6">

                      <p
                        className="
                          text-lg
                          font-bold
                          leading-8
                          text-[#1E3A5F]
                          md:text-xl
                        "
                      >
                        University of Engineering &amp; Management(UEM) Jaipur
                      </p>

                      <p
                        className="
                          mt-2
                          text-lg
                          font-semibold
                          leading-8
                          text-[#334155]
                          md:text-xl
                        "
                      >
                        UEM Jaipur was established in the year 2011 by
                        Ordinance 11 of 2011 and Act No 5 of 2012 of Govt of
                        Rajasthan. UEM Jaipur has achieved the awards of
                        <span className="font-bold text-[#1E3A5F]">
                          {" "}“Best Private University in North India”
                        </span>
                        {" "}and
                        <span className="font-bold text-[#1E3A5F]">
                          {" "}“Best Emerging University in North India”.
                        </span>
                      </p>

                    </div>


                    {/* UEM Kolkata */}

                    <div className="mt-6">

                      <p
                        className="
                          text-lg
                          font-bold
                          leading-8
                          text-[#1E3A5F]
                          md:text-xl
                        "
                      >
                        University of Engineering &amp; Management(UEM) Kolkata
                      </p>

                      <p
                        className="
                          mt-2
                          text-lg
                          font-semibold
                          leading-8
                          text-[#334155]
                          md:text-xl
                        "
                      >
                        UEM Kolkata is established in the year 2014 by Act No
                        25 of 2014 of Govt of West Bengal. Being located in New
                        Town, the Smart City of Eastern India and very near to
                        the Netaji Subhash International Airport, the students
                        of the University are exposed to the top corporates.
                        UEM Kolkata has stood one out of the top 10 institutes
                        of India including all IITs and all NITs of the country
                        in the NPTEL program ranked by IIT Kharagpur and IIT
                        Chennai.
                      </p>

                    </div>

                  </div>


                  {/* =====================================================
                      PLACEMENT
                  ===================================================== */}

                  <div
                    className="
                      mt-8
                      rounded-2xl
                      border
                      border-[#BFDBFE]
                      bg-[#F5F9FF]
                      p-6
                      sm:p-7
                    "
                  >

                    <p
                      className="
                        mt-2
                        text-lg
                        font-semibold
                        leading-8
                        text-[#334155]
                        md:text-xl
                      "
                    >
                      Right from its inception, the placement cells of both
                      IEM and UEM have consistently provided for
                      <span className="font-bold text-[#1E3A5F]">
                        {" "}1 to 2 jobs on average for all its students.
                      </span>
                      {" "}The educational group has one of the strongest
                      Placement Cells in the country. The same story has been
                      repeated even in the year 2016 with all students of both
                      IEM and UEM getting 1 to 2 job offers on average.
                    </p>

                  </div>


                  {/* =====================================================
                      ACHIEVEMENTS
                  ===================================================== */}

                  <div
                    className="
                      mt-8
                      border-t
                      border-[#E2E8F0]
                      pt-8
                    "
                  >

                    <h3
                      className="
                        mt-1
                        text-2xl
                        font-bold
                        text-[#172554]
                        sm:text-3xl
                      "
                    >
                      Major Achievements
                    </h3>


                    {/* Achievement Points */}

                    <div className="mt-6 space-y-4">

                      {[
                        "IEM has ranked the 3rd best engineering college in West Bengal after IIT Kharagpur and NIT Durgapur by NIRF (National Institutional Ranking Framework), Ministry of HRD, Govt of India, and 79th all across India.",

                        "UEM Jaipur has won the “Best Private University in Rajasthan Award” in the National Education Excellence Awards, 2016.",

                        "IEM has won the title of the “Jewel of the East” by Telegraph.",

                        "UEM Jaipur has won the “Best Emerging University in Rajasthan Award” in Asia Education Summit & Awards, 2016.",

                        "UEM Kolkata has won “AAA” category, placing it among the first 10 institutes nationally in the NPTEL program by IIT Kharagpur and IIT Chennai.",

                        "IEM has won the title of “Picture Perfect” by ABP Group.",

                        "A UEM Kolkata student has stood 1st amongst all students of India in the NPTEL program.",

                        "IEM has achieved the best institute of India award in Star News Award.",

                        "A UEM Jaipur student became world champion in the IEEE Maker Project, IEEE, USA, by developing the Amantron Gaming Console.",

                        "UEM Jaipur students have developed their own car and represented India in the BAJA SAE International Motorsport Competition.",

                        "IEM organized IEMCON-2015 and IEMCON-2016 at the University of British Columbia, Vancouver, Canada in association with IEEE Vancouver.",

                        "UEM Jaipur and UEM Kolkata organized UEMCON-2016 at Columbia University, New York, USA in association with IEEE New York, IEEE USA and IEEE Region 1.",

                        "The educational group has one of the strongest Placement Cells in the country, with both IEM and UEM consistently providing 1 to 2 job offers on average for their students."
                      ].map((achievement, index) => (

                        <div
                          key={index}
                          className="
                            flex
                            items-start
                            gap-4
                            rounded-xl
                            border
                            border-[#E2E8F0]
                            bg-[#FAFCFF]
                            px-4
                            py-4
                            transition-all
                            duration-300
                            hover:border-[#BFDBFE]
                            hover:bg-[#F5F9FF]
                          "
                        >

                          {/* Number */}

                          <div
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#075DB8]
                              text-sm
                              font-bold
                              text-white
                            "
                          >
                            {index + 1}
                          </div>


                          {/* Achievement Text */}

                          <p
                            className="
                              text-base
                              font-semibold
                              leading-7
                              text-[#334155]
                              md:text-lg
                            "
                          >
                            {achievement}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>


                  {/* =====================================================
                      CYCRAI CONNECTION
                  ===================================================== */}

                  <div
                    className="
                      mt-8
                      rounded-2xl
                      border
                      border-[#BFDBFE]
                      bg-[#F5F9FF]
                      p-6
                      sm:p-7
                    "
                  >

                    <div
                      className="
                        flex
                        items-start
                        gap-4
                      "
                    >

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#E8F1FF]
                          text-[#075DB8]
                        "
                      >
                        <Network size={23} />
                      </div>


                      <div>

                        <p
                          className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[1.8px]
                            text-[#075DB8]
                          "
                        >
                          CYCRAI 2027
                        </p>

                        <p
                          className="
                            mt-2
                            text-lg
                            font-semibold
                            leading-8
                            text-[#334155]
                            md:text-xl
                          "
                        >
                          The legacy of academic excellence, research,
                          innovation, industry exposure and international
                          collaboration established by the IEM-UEM Group
                          provides the foundation for
                          <span className="font-bold text-[#1E3A5F]">
                            {" "}CYCRAI 2027
                          </span>
                          {" "}— bringing together academia, industry,
                          researchers and technology professionals to explore
                          the future of Cyber Security, Cryptography and
                          Responsible AI.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

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