
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  Globe,
  Trophy,
  Sparkles,
} from "lucide-react";

import Footer from "../components/Footer";

export default function CallForPapers() {
  const navigate = useNavigate();

  const [showCmtPopup, setShowCmtPopup] = useState(false);
  const [showRegPopup, setShowRegPopup] = useState(false);

  const stats = [
    {
      value: "10+",
      label: "Technical Tracks",
    },
    {
      value: "IEEE",
      label: "Publication",
    },
    {
      value: "Global",
      label: "Authors",
    },
    {
      value: "Hybrid",
      label: "Conference",
    },
  ];

  const heroCards = [
    {
      icon: FileText,
      title: "Research Publication",
      desc:
        "Present original contributions across Artificial Intelligence, Cyber Security and Emerging Technologies.",
    },
    {
      icon: Globe,
      title: "International Community",
      desc:
        "Connect with researchers, IEEE professionals and innovators from academia and industry.",
    },
    {
      icon: Trophy,
      title: "Best Paper Awards",
      desc:
        "Outstanding research across technical tracks will be recognized during CYCRAI 2027.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Review",
      desc:
        "Every submission undergoes a rigorous peer-review process to ensure technical excellence.",
    },
  ];
  const topics = [
  {
    title: "Track 1: Foundation of Cyber Security",
    subtopics: [
      "Cybersecurity Awareness",
      "Cybersecurity Governance, Risk and Compliance",
      "Digital Forensics and Cybercrime Investigation",
      "Cyberattack Reconstruction and Attribution",
      "Hardware Security and Reliability",
      "IoT-based Data Security",
      "Security in IoT, Cloud and Edge Devices",
      "Database Security and Privacy",
      "Malware Analysis",
      "Federated Learning Security and Privacy-Preserving Machine Learning",
      "Digital Twin Security",
      "Cyber Resilience and Cyber Recovery",
      "5G/6G Network Security",
      "Cyber Threat Intelligence",
      "Intrusion Detection and Prevention",
      "Vulnerability Assessment and Prevention",
      "Zero Trust Architecture",
      "Cyber-Physical Systems and Security",
      "Blockchain and Distributed Ledger Security",
      "Security Aspects of Software Development",
      "AI-Driven Cyber Defence",
    ],
  },
  {
    title: "Track 2: Foundation of Cryptography",
    subtopics: [
      "Cryptography and Cryptanalysis",
      "Information Theory and Cryptography",
      "Applied Cryptography and Network Security",
      "AI/ML for Cryptography",
      "Lightweight Cryptography for IoT and Embedded Systems",
      "Applied Cryptography and Its Implementation",
      "Quantum Cryptography",
      "Quantum Machine Learning",
      "Quantum Computing",
      "Post-Quantum Cryptography",
    ],
  },
  {
    title: "Track 3: Foundation of Responsible AI",
    subtopics: [
      "AI Ethics",
      "AI Fairness",
      "AI Bias Mitigation",
      "Explainable AI",
      "Interpretable AI",
      "Transparency in AI Audit",
      "Privacy-Preserving AI Models",
      "Secure AI Systems",
      "Responsible Generative AI",
      "AI for Ransomware Analysis",
      "AI Security in Healthcare, Education, Infrastructure and Finance",
      "Security in Sustainable AI",
      "Societal Impact of Responsible AI Development",
      "Security and Privacy for AI Systems",
      "AI/ML for Threat Detection and Prevention",
    ],
  },
];

  return (
    <>
      {/* ============================
          HERO SECTION
      ============================ */}

      <section className="relative overflow-hidden bg-[#020817] min-h-screen pt-6 pb-24">

        {/* Background Grid */}

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Cyan Glow */}

        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[170px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 text-sm tracking-[3px] uppercase">

              <Sparkles size={16} />

              Call For Papers

            </span>

            <h1
  className="
    mt-8
    text-5xl
    md:text-7xl
    font-black
    leading-[1.15]
    text-white
    overflow-visible
  "
>
  Call For
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
    Papers
  </span>
</h1>
                       

            {/* CTA Buttons */}

            {/* <div className="mt-12 flex flex-wrap justify-center gap-5">

              <button
                onClick={() => setShowCmtPopup(true)}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-cyan-400
                  px-8
                  py-4
                  font-bold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(34,211,238,.45)]
                "
              >
                Submit Paper

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />

              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("topics")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="
                  rounded-full
                  border
                  border-cyan-400/40
                  bg-white/5
                  backdrop-blur-xl
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-cyan-400
                  hover:bg-cyan-500/10
                "
              >
                Explore Tracks
              </button>

            </div> */}

          </motion.div>

          {/* Statistics */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="
              mt-20
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  rounded-3xl
                  border
                  border-cyan-400/15
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_35px_rgba(34,211,238,.12)]
                "
              >
                <h2 className="text-4xl font-black text-cyan-300">
                  {item.value}
                </h2>

                <p className="mt-3 text-slate-400 tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Hero Cards */}

          <div className="mt-20 grid lg:grid-cols-2 gap-8">
            {heroCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="
                    group
                    rounded-[30px]
                    border
                    border-cyan-400/15
                    bg-white/5
                    backdrop-blur-2xl
                    p-8
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
                  "
                >
                  <div className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-cyan-500/15
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-cyan-400/20
                    transition-all
                  ">
                    <Icon
                      className="text-cyan-300"
                      size={30}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {card.title}
                  </h3>

                  <p className="mt-5 text-slate-400 leading-8">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </section>
            {/* =========================================
          WHY PUBLISH AT CYCRAI 2027
      ========================================= */}

      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-[#020817] via-[#071326] to-[#020817]">

        {/* Background Effects */}

        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-0 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="text-center mb-20"
          >

            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">

              Publication Benefits

            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">

              Why Publish at

              <span className="block mt-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                IEEE CYCRAI 2027

              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-lg leading-9">

              CYCRAI 2027 provides an international platform for presenting
              cutting-edge research, exchanging innovative ideas and building
              collaborations among academia, industry and government
              organizations working in Cyber Security, Artificial Intelligence
              and Sustainable Engineering.

            </p>

          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">

            <motion.div
              initial={{ opacity:0, x:-30 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:.6 }}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  📚

                </div>

                <h3 className="text-3xl font-bold text-white">

                  IEEE Xplore Publication

                </h3>

              </div>

              <p className="text-slate-400 leading-8">

                Accepted and presented papers will be submitted for inclusion
                in the IEEE Xplore Digital Library subject to IEEE quality
                review, conference policies and presentation compliance.

              </p>

            </motion.div>

            <motion.div
              initial={{ opacity:0, x:30 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:.6 }}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  🌍

                </div>

                <h3 className="text-3xl font-bold text-white">

                  International Exposure

                </h3>

              </div>

              <p className="text-slate-400 leading-8">

                Meet researchers, innovators, startup founders, industry
                experts and IEEE volunteers from across the world while sharing
                your latest scientific contributions.

              </p>

            </motion.div>

            <motion.div
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:.6 }}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  🤝

                </div>

                <h3 className="text-3xl font-bold text-white">

                  Collaboration Opportunities

                </h3>

              </div>

              <p className="text-slate-400 leading-8">

                Build collaborations with universities, laboratories,
                government agencies and technology companies working on
                next-generation intelligent systems.

              </p>

            </motion.div>

            <motion.div
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:.6 }}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  🏆

                </div>

                <h3 className="text-3xl font-bold text-white">

                  Track-wise Awards

                </h3>

              </div>

              <p className="text-slate-400 leading-8">

                Outstanding technical contributions will receive recognition
                through Best Paper Awards across multiple conference tracks,
                encouraging impactful and innovative research.

              </p>

            </motion.div>

          </div>

        </div>

      </section>
            {/* =========================================
          TOPICS OF INTEREST
      ========================================= */}

      <section
        id="topics"
        className="relative py-28 bg-[#020817] overflow-hidden"
      >

        {/* Background */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        <div className="absolute -left-20 top-40 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute right-0 bottom-20 w-[350px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
            className="text-center mb-20"
          >

            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">

              Research Tracks

            </span>

            <h2 className="mt-7 text-5xl md:text-6xl font-black text-white">

              Topics of

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                Interest

              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-lg leading-8">

              Authors are invited to submit original research papers related
              to, but not limited to, the following conference themes.

            </p>

          </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

  {topics.map((topic, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border border-cyan-400/15
        bg-white/5
        backdrop-blur-xl
        p-8
        hover:border-cyan-400/40
        hover:-translate-y-2
        transition-all
        duration-500
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
          to-transparent
        "
      />

      <div className="relative z-10">

        {/* Track Number */}
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
            mb-6
          "
        >
          <span className="text-cyan-300 text-xl font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Track Title */}
        <h3
          className="
            text-xl
            font-bold
            text-white
            leading-8
            group-hover:text-cyan-300
            transition-colors
            duration-300
          "
        >
          {topic.title}
        </h3>

        {/* Subtopics */}
        <div className="mt-6 space-y-3">

          {topic.subtopics.map((subtopic, subIndex) => (
            <div
              key={subIndex}
              className="
                flex
                items-start
                gap-3
                text-sm
                text-slate-400
                leading-6
              "
            >
              <span
                className="
                  mt-2
                  w-1.5
                  h-1.5
                  flex-shrink-0
                  rounded-full
                  bg-cyan-400
                "
              />

              <span>
                {subtopic}
              </span>
            </div>
          ))}

        </div>

      </div>

    </motion.div>

  ))}

</div>

          {/* Bottom Highlight */}

          

        </div>

      </section>

      {/* =========================================
            SUBMISSION ROADMAP
      ========================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#020817] via-[#071326] to-[#020817] overflow-hidden">

        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
            className="text-center mb-20"
          >

            <span className="inline-flex px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 uppercase tracking-[3px] text-sm">

              Author Guide

            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">

              Paper Submission

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                Workflow

              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-400 leading-8">

              Follow these simple steps to submit your manuscript to
              IEEE CYCRAI 2027.

            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                number:"01",
                title:"Prepare Manuscript",
                desc:"Write your paper using the official IEEE Conference Template."
              },
              {
                number:"02",
                title:"Check Originality",
                desc:"Ensure your submission is original and follows ethical publishing practices."
              },
              {
                number:"03",
                title:"Create CMT Account",
                desc:"Login or register on the Microsoft CMT submission portal."
              },
              {
                number:"04",
                title:"Upload Paper",
                desc:"Submit the PDF version together with complete author information."
              },
              {
                number:"05",
                title:"Peer Review",
                desc:"Your manuscript will undergo a rigorous technical review process."
              },
              {
                number:"06",
                title:"Camera Ready",
                desc:"Accepted papers must submit the final manuscript and complete registration."
              }

            ].map((step,index)=>(

              <motion.div

                key={step.number}

                initial={{opacity:0,y:40}}

                whileInView={{opacity:1,y:0}}

                viewport={{once:true}}

                transition={{
                  duration:.55,
                  delay:index*.08
                }}

                className="
                  group
                  relative
                  rounded-[30px]
                  border
                  border-cyan-400/20
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  hover:border-cyan-400/40
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "

              >

                <div className="absolute top-8 right-8 text-6xl font-black text-cyan-500/10">

                  {step.number}

                </div>

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20 mb-6">

                    <FileText
                      size={26}
                      className="text-cyan-300"
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-white">

                    {step.title}

                  </h3>

                  <p className="mt-5 text-slate-400 leading-8">

                    {step.desc}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>
                    {/* Submission Actions */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="mt-24 grid lg:grid-cols-2 gap-10"
          >

            {/* IEEE Template */}

            <div className="relative overflow-hidden rounded-[35px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10">

              <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/10 blur-[120px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">

                  📄

                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">

                  IEEE Conference Template

                </h3>

                <p className="mt-6 text-slate-400 leading-8">

                  Authors should prepare manuscripts using the official IEEE
                  Conference Template. Papers must comply with IEEE formatting,
                  plagiarism and publication guidelines before submission.

                </p>

                <button
                  className="
                    mt-10
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-cyan-400
                    px-8
                    py-4
                    font-bold
                    text-slate-900
                    hover:scale-105
                    transition-all
                  "
                >

                  Download Template

                  <ArrowRight size={20} />

                </button>

              </div>

            </div>

            {/* Microsoft CMT */}

            <div className="relative overflow-hidden rounded-[35px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-[#071326] to-[#020817] p-10">

              <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-cyan-400/20 flex items-center justify-center">

                  🚀

                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">

                  Microsoft CMT Submission

                </h3>

                <p className="mt-6 text-slate-300 leading-8">

                  Submit your manuscript through the Microsoft CMT platform.
                  Complete all metadata carefully before final submission.
                  Authors can later update the camera-ready version after
                  acceptance.

                </p>

                <button
                  onClick={() => setShowCmtPopup(true)}
                  className="
                    mt-10
                    rounded-full
                    border
                    border-cyan-400
                    px-8
                    py-4
                    font-bold
                    text-cyan-300
                    hover:bg-cyan-400
                    hover:text-slate-900
                    transition-all
                  "
                >

                  Open CMT Portal

                </button>

              </div>

            </div>

          </motion.div>

          {/* IEEE Publication Notice */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .3 }}
            className="
              mt-20
              rounded-[35px]
              border
              border-cyan-400/20
              bg-cyan-500/5
              backdrop-blur-xl
              p-10
            "
          >

            <div className="flex flex-col lg:flex-row gap-8 items-center">

              <div className="text-6xl">

                📚

              </div>

              <div>

                <h3 className="text-3xl font-bold text-white">

                  Publication Policy

                </h3>

                <p className="mt-5 text-slate-400 leading-8">

                  Accepted papers that are registered, presented and satisfy
                  all IEEE conference publication policies will be submitted
                  for inclusion in the IEEE Xplore Digital Library subject to
                  IEEE quality checks.

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =========================================
            REGISTRATION
      ========================================= */}

      <section
        id="registration"
        className="relative py-28 bg-[#020817] overflow-hidden"
      >

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-0 top-0 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity:0,y:30 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
            className="text-center mb-20"
          >

            <span className="inline-flex px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 uppercase tracking-[3px] text-sm">

              Registration

            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">

              Registration

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                Details

              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-400 leading-8">

              Registration is mandatory for every accepted paper. At least one
              author must register and present the paper during the conference.

            </p>

          </motion.div>
                    {/* Registration Guidelines */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="grid lg:grid-cols-3 gap-8 mb-20"
          >

            <div className="lg:col-span-2 rounded-[35px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10">

              <h3 className="text-3xl font-bold text-white mb-8">

                Registration Guidelines

              </h3>

              <div className="space-y-6">

                {[
                  "At least one author must register for every accepted paper.",
                  "One registration covers one paper up to six pages.",
                  "Additional pages will incur an over-length page charge.",
                  "Only registered and presented papers will be considered for IEEE Xplore submission.",
                  "IEEE Member registrations require a valid IEEE Membership ID.",
                  "Student registrations require a valid Student Identity Card.",
                  "Registration fees are non-refundable after payment confirmation."
                ].map((item,index)=>(

                  <div
                    key={index}
                    className="flex gap-5 items-start"
                  >

                    <div className="w-9 h-9 rounded-full bg-cyan-500/15 border border-cyan-400/20 flex items-center justify-center text-cyan-300 font-bold flex-shrink-0">

                      ✓

                    </div>

                    <p className="text-slate-300 leading-8">

                      {item}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Important Notice */}

            <div className="rounded-[35px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-[#071326] p-10">

              <div className="text-5xl mb-6">

                ⚠️

              </div>

              <h3 className="text-2xl font-bold text-white">

                Important

              </h3>

              <p className="mt-6 text-slate-300 leading-8">

                Registration is mandatory after paper acceptance.
                Only presented papers will be eligible for publication.

              </p>

              <div className="mt-10 rounded-2xl bg-black/20 border border-cyan-400/20 p-5">

                <p className="text-cyan-300 font-semibold">

                  Registration Deadline

                </p>

                <h4 className="mt-3 text-3xl font-black text-white">

                  10 Nov 2026

                </h4>

              </div>

            </div>

          </motion.div>

          <div className="space-y-12">

  {/* EARLY BIRD REGISTRATION FEES */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="rounded-[20px] border border-cyan-400/20 overflow-hidden bg-white/5 backdrop-blur-2xl"
  >

    {/* Heading */}
    <div className="px-6 md:px-8 pt-7 pb-4">
      <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 uppercase tracking-wide">
        Early Bird Registration Fees
      </h3>
    </div>

    {/* Table Header */}
    <div className="overflow-x-auto">
      <div className="min-w-[700px]">

        <div className="grid grid-cols-[2fr_1fr_1fr] bg-cyan-500/80 text-white uppercase text-sm font-bold tracking-wide px-5 md:px-6 py-4">
          <span>Author Category</span>
          <span className="text-center">IEEE Member</span>
          <span className="text-center">Non-IEEE</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-cyan-400/10">

          <div className="grid grid-cols-[2fr_1fr_1fr] px-5 md:px-6 py-5 items-center">
            <span className="text-slate-300">
              Regular Author Academician (UG, PG, PhD, Faculty Members)
            </span>

            <span className="text-center font-bold text-white">
              ₹ 8,500
            </span>

            <span className="text-center font-bold text-white">
              ₹ 9,000
            </span>
          </div>

          <div className="grid grid-cols-[2fr_1fr_1fr] px-5 md:px-6 py-5 items-center">
            <span className="text-slate-300">
              Regular Author from Industry
            </span>

            <span className="text-center font-bold text-white">
              ₹ 9,500
            </span>

            <span className="text-center font-bold text-white">
              ₹ 10,000
            </span>
          </div>

          <div className="grid grid-cols-[2fr_1fr_1fr] px-5 md:px-6 py-5 items-center">
            <span className="text-slate-300">
              Foreign Delegates
            </span>

            <span className="text-center font-bold text-white">
              USD 350
            </span>

            <span className="text-center font-bold text-white">
              USD 400
            </span>
          </div>

          <div className="grid grid-cols-[2fr_1fr_1fr] px-5 md:px-6 py-5 items-center">
            <span className="text-slate-300">
              Only Attending / Accompanying
            </span>

            <span className="text-center font-bold text-white">
              ₹ 4,000
            </span>

            <span className="text-center font-bold text-white">
              ₹ 4,000
            </span>
          </div>

        </div>
      </div>
    </div>
  </motion.div>


  {/* REGULAR REGISTRATION FEES */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="rounded-[20px] border border-cyan-400/20 overflow-hidden bg-white/5 backdrop-blur-2xl"
  >

    {/* Heading */}
    <div className="px-6 md:px-8 pt-7 pb-4">
      <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 uppercase tracking-wide">
        Regular Registration Fees
      </h3>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <div className="min-w-[700px]">

        {/* Table Header */}
        <div className="grid grid-cols-[2fr_1fr_1fr] bg-cyan-500/80 text-white uppercase text-sm font-bold tracking-wide px-5 md:px-6 py-4">
          <span>Author Category</span>
          <span className="text-center">IEEE Member</span>
          <span className="text-center">Non-IEEE</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-cyan-400/10">

          <div className="grid grid-cols-[2fr_1fr_1fr] px-5 md:px-6 py-5 items-center">
            <span className="text-slate-300">
              Regular Author Academician (UG, PG, PhD, Faculty Members)
            </span>

            <span className="text-center font-bold text-white">
              ₹ 9,000
            </span>

            <span className="text-center font-bold text-white">
              ₹ 9,500
            </span>
          </div>

          <div className="grid grid-cols-[2fr_1fr_1fr] px-5 md:px-6 py-5 items-center">
            <span className="text-slate-300">
              Regular Author from Industry
            </span>

            <span className="text-center font-bold text-white">
              ₹ 10,000
            </span>

            <span className="text-center font-bold text-white">
              ₹ 10,500
            </span>
          </div>

          <div className="grid grid-cols-[2fr_1fr_1fr] px-5 md:px-6 py-5 items-center">
            <span className="text-slate-300">
              Foreign Delegates
            </span>

            <span className="text-center font-bold text-white">
              USD 400
            </span>

            <span className="text-center font-bold text-white">
              USD 450
            </span>
          </div>

          <div className="grid grid-cols-[2fr_1fr_1fr] px-5 md:px-6 py-5 items-center">
            <span className="text-slate-300">
              Only Attending / Accompanying
            </span>

            <span className="text-center font-bold text-white">
              ₹ 4,000
            </span>

            <span className="text-center font-bold text-white">
              ₹ 4,000
            </span>
          </div>

        </div>
      </div>
    </div>
  </motion.div>

</div>

          {/* CTA */}

          <motion.div
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once:true }}
            transition={{ delay:.3 }}
            className="text-center mt-20"
          >

            <button
              onClick={() => setShowRegPopup(true)}
              className="
                bg-cyan-400
                text-slate-900
                px-10
                py-5
                rounded-full
                text-lg
                font-bold
                hover:scale-105
                transition-all
                shadow-[0_0_40px_rgba(34,211,238,.25)]
              "
            >

              Proceed To Registration

            </button>

          </motion.div>

        </div>

      </section>
            {/* =========================================
            CMT SUBMISSION POPUP
      ========================================= */}

      <AnimatePresence>

        {showCmtPopup && (

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md p-6"
          >

            <motion.div
              initial={{ scale:.9, opacity:0 }}
              animate={{ scale:1, opacity:1 }}
              exit={{ scale:.9, opacity:0 }}
              transition={{ duration:.25 }}
              className="relative w-full max-w-xl rounded-[35px] border border-cyan-400/20 bg-[#071326] p-10"
            >

              <button
                onClick={() => setShowCmtPopup(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white text-2xl"
              >

                ×

              </button>

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-8">

                🚀

              </div>

              <h2 className="text-3xl font-bold text-white">

                Microsoft CMT Portal

              </h2>

              <p className="mt-6 text-slate-400 leading-8">

                Paper submission will be handled through the official
                Microsoft Conference Management Toolkit (CMT). Authors
                should prepare their manuscript using the IEEE format
                before submission.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <button
                  onClick={() =>
                    window.open(
                      "",
                      "_blank"
                    )
                  }
                  className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-900 hover:scale-105 transition-all"
                >

                  Open CMT

                </button>

                <button
                  onClick={() => setShowCmtPopup(false)}
                  className="rounded-full border border-cyan-400/30 px-8 py-4 text-white hover:bg-cyan-500/10 transition-all"
                >

                  Close

                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* =========================================
            REGISTRATION POPUP
      ========================================= */}

      <AnimatePresence>

        {showRegPopup && (

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md p-6"
          >

            <motion.div
              initial={{ scale:.9, opacity:0 }}
              animate={{ scale:1, opacity:1 }}
              exit={{ scale:.9, opacity:0 }}
              transition={{ duration:.25 }}
              className="relative w-full max-w-xl rounded-[35px] border border-cyan-400/20 bg-[#071326] p-10"
            >

              <button
                onClick={() => setShowRegPopup(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white text-2xl"
              >

                ×

              </button>

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-8">

                📝

              </div>

              <h2 className="text-3xl font-bold text-white">

                Registration

              </h2>

              <p className="mt-6 text-slate-400 leading-8">

                The registration portal will become available after paper
                acceptance. Please keep checking the conference website for
                payment instructions, important deadlines and author updates.

              </p>

              <button
                onClick={() => setShowRegPopup(false)}
                className="mt-10 rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-900 hover:scale-105 transition-all"
              >

                Okay

              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* =========================================
            FOOTER
      ========================================= */}

      <Footer />

    </>

  );

}