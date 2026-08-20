
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  KeyRound,
  BrainCircuit,
  Cpu,
  Globe,
  Users,
  Lightbulb,
  Network,
} from "lucide-react";

export default function AboutSection() {
  const researchAreas = [
    {
      number: "01",
      icon: ShieldCheck,
      title: "Foundation of Cyber Security",
      description:
        "Explore cutting-edge research in cybersecurity, digital forensics, cyber threat intelligence, IoT and cloud security, privacy, zero-trust architecture, and AI-driven cyber defence. Focus on emerging approaches for building secure, resilient, and trustworthy digital infrastructure.",
    },
    {
      number: "02",
      icon: KeyRound,
      title: "Foundation of Cryptography",
      description:
        "Explore cutting-edge research in cryptography, cryptanalysis, quantum and post-quantum security, lightweight cryptography, and AI/ML-driven cryptographic techniques. Focus on advancing secure communication, privacy, and resilient cryptographic systems for emerging technologies.",
    },
    {
      number: "03",
      icon: BrainCircuit,
      title: "Foundation of Responsible AI",
      description:
        "Explore cutting-edge research in responsible AI, fairness, explainability, privacy, secure AI systems, and trustworthy generative AI. Focus on developing transparent, ethical, secure, and socially responsible AI for real-world applications and emerging cyber threats.",
    },
    {
      number: "04",
      icon: Cpu,
      title: "Emerging Technologies",
      description:
        "Explore emerging technologies shaping the future of cybersecurity, cryptography, and responsible AI, including quantum computing, advanced AI/ML, IoT, 5G/6G, blockchain, digital twins, and secure intelligent systems. Focus on innovative solutions that enable secure, resilient, and trustworthy digital transformation.",
    },
  ];

  const highlights = [
    {
      icon: Globe,
      title: "Global Platform",
      description:
        "Connect with researchers, academicians, industry leaders, entrepreneurs, and students from across the world.",
    },
    {
      icon: Users,
      title: "Knowledge Exchange",
      description:
        "Exchange ideas and research through keynote talks, technical presentations, workshops, tutorials, and industry sessions.",
    },
    {
      icon: Lightbulb,
      title: "Research & Innovation",
      description:
        "Promote interdisciplinary research and innovative solutions addressing real-world challenges in secure digital ecosystems.",
    },
    {
      icon: Network,
      title: "Collaboration",
      description:
        "Build meaningful collaborations across academia, industry, research institutions, and emerging technology communities.",
    },
  ];

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#020817] min-h-screen pt-6 pb-24">

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Background Glows */}
        <div className="absolute -top-40 left-0 w-[550px] h-[550px] bg-cyan-500/20 blur-[170px] rounded-full" />

        <div className="absolute top-1/3 right-[-150px] w-[500px] h-[500px] bg-blue-600/20 blur-[170px] rounded-full" />

        <div className="absolute bottom-[-200px] left-1/3 w-[450px] h-[450px] bg-cyan-500/10 blur-[160px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              <Globe size={16} />
              Cycrai 2027
            </span>

            {/* Heading */}
            <h1
              className="
                mt-8
                text-5xl
                md:text-7xl
                font-black
                leading-tight
                text-white
              "
            >
              About
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                CYCRAI 2027
              </span>
            </h1>

            {/* Subtitle */}
            {/* <p
              className="
                mt-8
                max-w-4xl
                mx-auto
                text-lg
                md:text-xl
                leading-9
                text-slate-300
              "
            >
              Empowering the future through{" "}
              <span className="text-cyan-300 font-semibold">
                secure, responsible,
              </span>{" "}
              and{" "}
              <span className="text-white font-semibold">
                intelligent digital technologies.
              </span>
            </p> */}

          </motion.div>

          {/* =====================================================
              CONFERENCE INTRODUCTION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              mt-20
              grid
              lg:grid-cols-[0.8fr_1.2fr]
              gap-10
              lg:gap-16
              items-stretch
            "
          >

            {/* Theme Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-cyan-400/20
                bg-gradient-to-br
                from-cyan-500/10
                via-[#071326]
                to-[#020817]
                backdrop-blur-2xl
                p-8
                md:p-10
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-60
                  h-60
                  rounded-full
                  bg-cyan-500/15
                  blur-[100px]
                "
              />

              <div className="relative z-10">

                <p
                  className="
                    text-cyan-300
                    text-sm
                    uppercase
                    tracking-[3px]
                    font-semibold
                  "
                >
                  Conference Theme
                </p>

                <h2
                  className="
                    mt-6
                    text-4xl
                    md:text-5xl
                    font-black
                    leading-tight
                    text-white
                  "
                >
                  Secure Intelligence
                  <span
                    className="
                      block
                      mt-3
                      bg-gradient-to-r
                      from-cyan-300
                      via-sky-400
                      to-blue-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    for a Connected Future
                  </span>
                </h2>

                <div className="mt-10 h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />

                <p className="mt-8 text-slate-400 leading-8">
                  Advancing secure, responsible, and intelligent technologies
                  through interdisciplinary research and global collaboration.
                </p>

              </div>
            </div>

            {/* Introduction */}
            <div
              className="
                rounded-[30px]
                border
                border-cyan-400/15
                bg-white/5
                backdrop-blur-2xl
                p-8
                md:p-10
              "
            >

              <p className="text-slate-300 text-lg md:text-xl leading-8">
                {/* <span className="text-cyan-300 font-semibold">
                  CYCRAI 2027
                </span>{" "} */}
                First International Conference on Cybersecurity, Cryptography and Responsible AI (CYCRAI 2027) will be organized by
                Department of  Computer Science and Engineering(Cyber Security), Institute of Engineering & Management Kolkata, 
                under University of Engineering and Management Kolkata, with Technical Co-Sponsorship of the IEEE Kolkata Section 
                and IEEE Computer Society SBC during 29th September to 30th September, 2027.
              </p>

              <p className="mt-6 text-slate-400 text-lg leading-8">
                The event brings together researchers, professionals, and government
                representatives to share their work, examine key challenges, and 
                explore potential solutions. Keynote addresses, technical sessions, 
                and networking activities are designed to encourage cross-disciplinary 
                dialogue. Papers that are accepted and presented will be submitted for 
                publication in the IEEE Xplore Digital Library.
              </p>

            </div>

          </motion.div>

          {/* =====================================================
              CONFERENCE HIGHLIGHTS
          ===================================================== */}

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24"
          > */}

            {/* Section Heading */}
            {/* <div className="text-center mb-14">

              <span
                className="
                  inline-flex
                  px-5
                  py-2
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-cyan-500/10
                  text-cyan-300
                  uppercase
                  tracking-[3px]
                  text-sm
                "
              >
                Conference Highlights
              </span>

              <h2
                className="
                  mt-7
                  text-4xl
                  md:text-6xl
                  font-black
                  text-white
                "
              >
                Connect.
                <span
                  className="
                    bg-gradient-to-r
                    from-cyan-300
                    via-sky-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {" "}Innovate.
                </span>
                {" "}Transform.
              </h2>

            </div> */}

            {/* Highlight Cards */}
            {/* <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -8 }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-cyan-400/15
                      bg-white/5
                      backdrop-blur-2xl
                      p-7
                      transition-all
                      duration-500
                      hover:border-cyan-400/40
                      hover:shadow-[0_0_40px_rgba(34,211,238,.12)]
                    "
                  >

                    
                    <div
                      className="
                        absolute
                        inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition
                        duration-500
                        bg-gradient-to-br
                        from-cyan-500/10
                        to-transparent
                      "
                    />

                    <div className="relative z-10">

                      <div
                        className="
                          w-14
                          h-14
                          rounded-2xl
                          bg-cyan-500/10
                          border
                          border-cyan-400/20
                          flex
                          items-center
                          justify-center
                          group-hover:bg-cyan-400/20
                          transition-all
                          duration-300
                        "
                      >
                        <Icon
                          size={26}
                          className="text-cyan-300"
                        />
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-slate-400 leading-7 text-sm">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </motion.div> */}

        </div>
      </section>

      {/* =========================================================
          RESEARCH AREAS
      ========================================================= */}

      <section
        className="
          relative
          py-28
          overflow-hidden
          bg-gradient-to-b
          from-[#020817]
          via-[#071326]
          to-[#020817]
        "
      >

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glows */}
        <div className="absolute left-0 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >

            <span
              className="
                inline-flex
                px-5
                py-2
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-500/10
                text-cyan-300
                uppercase
                tracking-[3px]
                text-sm
              "
            >
              Areas of Focus
            </span>

            <h2
              className="
                mt-7
                text-5xl
                md:text-6xl
                font-black
                text-white
              "
            >
              Research at
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                CYCRAI 2027
              </span>
            </h2>

            {/* <p
              className="
                mt-8
                max-w-3xl
                mx-auto
                text-slate-400
                text-lg
                leading-8
              "
            >
              Explore the interconnected research domains shaping the future
              of secure, responsible, and intelligent digital societies.
            </p> */}

          </motion.div>

          {/* Research Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {researchAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -8 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-cyan-400/20
                    bg-white/5
                    backdrop-blur-2xl
                    p-8
                    md:p-10
                    transition-all
                    duration-500
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_45px_rgba(34,211,238,.14)]
                  "
                >

                  {/* Hover Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-500
                      bg-gradient-to-br
                      from-cyan-500/10
                      via-transparent
                      to-blue-500/5
                    "
                  />

                  <div className="relative z-10">

                    {/* Number + Icon */}
                    <div className="flex items-center justify-between">

                      <span
                        className="
                          text-5xl
                          font-black
                          text-cyan-500/10
                          group-hover:text-cyan-400/20
                          transition-colors
                        "
                      >
                        {area.number}
                      </span>

                      <div
                        className="
                          w-16
                          h-16
                          rounded-2xl
                          bg-cyan-500/10
                          border
                          border-cyan-400/20
                          flex
                          items-center
                          justify-center
                          group-hover:bg-cyan-400/20
                          transition-all
                          duration-300
                        "
                      >
                        <Icon
                          size={30}
                          className="
                            text-cyan-300
                            group-hover:text-cyan-200
                            transition-colors
                          "
                        />
                      </div>

                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-8
                        text-2xl
                        md:text-3xl
                        font-bold
                        text-white
                        leading-tight
                        group-hover:text-cyan-300
                        transition-colors
                        duration-300
                      "
                    >
                      {area.title}
                    </h3>

                    {/* Accent */}
                    <div
                      className="
                        mt-6
                        h-[2px]
                        w-16
                        bg-gradient-to-r
                        from-cyan-400
                        to-blue-500
                        group-hover:w-24
                        transition-all
                        duration-500
                      "
                    />

                    {/* Description */}
                    <p
                      className="
                        mt-6
                        text-slate-400
                        text-base
                        md:text-lg
                        leading-8
                      "
                    >
                      {area.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================================
          VISION SECTION
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          py-28
          bg-[#020817]
        "
      >

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glow */}
        <div className="absolute left-1/3 top-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[170px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-[35px]
              border
              border-cyan-400/20
              bg-gradient-to-br
              from-cyan-500/10
              via-[#071326]
              to-[#020817]
              backdrop-blur-2xl
              p-10
              md:p-16
            "
          >

            {/* Decorative Glow */}
            <div
              className="
                absolute
                -top-32
                -right-32
                w-96
                h-96
                rounded-full
                bg-cyan-500/10
                blur-[140px]
              "
            />

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-end">

              <div>

                <div className="flex items-center gap-4 mb-7">

                  <span className="h-px w-16 bg-cyan-400" />

                  <span
                    className="
                      text-cyan-300
                      text-sm
                      uppercase
                      tracking-[4px]
                      font-semibold
                    "
                  >
                    The Vision
                  </span>

                </div>

                <h2
                  className="
                    text-4xl
                    md:text-6xl
                    font-black
                    text-white
                    leading-tight
                    max-w-4xl
                  "
                >
                  Building a secure,
                  <span
                    className="
                      bg-gradient-to-r
                      from-cyan-300
                      via-sky-400
                      to-blue-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {" "}intelligent
                  </span>
                  {" "}and sustainable digital future.
                </h2>

                <p
                  className="
                    mt-8
                    max-w-3xl
                    text-lg
                    text-slate-400
                    leading-8
                  "
                >
                  CYCRAI 2027 brings together diverse perspectives and
                  disciplines to advance technologies that are secure,
                  trustworthy, responsible, and capable of shaping the future
                  of digital society.
                </p>

              </div>

              {/* Year */}
              <div className="text-right">

                <div
                  className="
                    text-7xl
                    md:text-9xl
                    font-black
                    text-white/[0.05]
                    leading-none
                  "
                >
                2027
                </div>

                <p
                  className="
                    text-cyan-400
                    text-xs
                    tracking-[4px]
                    uppercase
                    mt-3
                  "
                >
                  International Conference
                </p>

              </div>

            </div>

          </motion.div>

        </div>
      </section>
      <Footer />
    </>
  );
}