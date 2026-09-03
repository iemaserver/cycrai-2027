import Footer from "../components/Footer.jsx";
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  KeyRound,
  BrainCircuit,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const tracks = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Foundation of Cyber Security",
    description:
      "Research addressing the foundations, technologies, architectures and emerging challenges in cyber Security and resilient digital infrastructure.",
    subtopics: [
      "Cyber Security Awareness",
      "Cyber Security Governance, Risk and Compliance",
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
    number: "02",
    icon: KeyRound,
    title: "Foundation of Cryptography",
    description:
      "Research exploring modern cryptographic foundations, secure communication, quantum technologies and next-generation cryptographic systems.",
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
    number: "03",
    icon: BrainCircuit,
    title: "Foundation of Responsible AI",
    description:
      "Research focused on building secure, transparent, fair, explainable and socially responsible artificial intelligence systems.",
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

export default function Tracks() {
  return (
    <div className="bg-[#020817] text-white overflow-hidden ">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      
     


      {/* =====================================================
          TRACKS
      ===================================================== */}

      <section
        id="tracks"
        className="
          relative
    overflow-hidden
    min-h-[85vh]
    flex
    items-start
    bg-[#020817]
    pt-6
    pb-24
        "
      >

        {/* Background */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        <div
          className="
            absolute
            -left-40
            top-40
            w-[450px]
            h-[450px]
            bg-cyan-500/10
            blur-[160px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-40
            w-[450px]
            h-[450px]
            bg-blue-600/10
            blur-[160px]
            rounded-full
          "
        />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Section Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
              Conference Themes
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
              Three Foundations.

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
                One Vision.
              </span>
            </h2>

          </motion.div>


          {/* Track Cards */}

          <div className="space-y-10">

            {tracks.map((track, index) => {

              const Icon = track.icon;

              return (
                <motion.div
                  key={track.number}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[35px]
                    border
                    border-cyan-400/20
                    bg-white/5
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_50px_rgba(34,211,238,.12)]
                  "
                >

                  {/* Hover Gradient */}

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      bg-gradient-to-br
                      from-cyan-500/10
                      via-transparent
                      to-blue-500/10
                    "
                  />

                  {/* Top Glow */}

                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-400
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      p-8
                      md:p-10
                      lg:p-12
                    "
                  >

                    {/* Header */}

                    <div
                      className="
                        flex
                        flex-col
                        md:flex-row
                        md:items-start
                        md:justify-between
                        gap-8
                      "
                    >

                      <div className="flex items-start gap-6">

                        {/* Number */}

                        <div
                          className="
                            hidden
                            sm:block
                            text-5xl
                            md:text-6xl
                            font-black
                            text-cyan-400/10
                            group-hover:text-cyan-400/20
                            transition-colors
                          "
                        >
                          {track.number}
                        </div>

                        <div>

                          {/* Track Label */}

                          <p
                            className="
                              text-cyan-400
                              text-xs
                              uppercase
                              tracking-[3px]
                              font-semibold
                              mb-3
                            "
                          >
                            Track {track.number}
                          </p>

                          {/* Title */}

                          <h3
                            className="
                              text-2xl
                              md:text-4xl
                              font-bold
                              text-white
                              leading-tight
                              group-hover:text-cyan-300
                              transition-colors
                            "
                          >
                            {track.title}
                          </h3>

                        </div>

                      </div>


                      {/* Icon */}

                      <div
                        className="
                          w-16
                          h-16
                          flex-shrink-0
                          rounded-2xl
                          bg-cyan-500/10
                          border
                          border-cyan-400/20
                          flex
                          items-center
                          justify-center
                          text-cyan-300
                          group-hover:bg-cyan-400/20
                          group-hover:border-cyan-400/50
                          group-hover:scale-105
                          transition-all
                          duration-300
                        "
                      >
                        <Icon size={30} />
                      </div>

                    </div>


                    {/* Description */}

                    <p
                      className="
                        mt-8
                        max-w-5xl
                        text-slate-400
                        text-base
                        md:text-lg
                        leading-8
                      "
                    >
                      {track.description}
                    </p>


                    {/* Divider */}

                    <div className="flex items-center gap-4 mt-9">

                      <span
                        className="
                          h-px
                          w-14
                          bg-cyan-400
                        "
                      />

                      <span
                        className="
                          text-cyan-300
                          text-xs
                          uppercase
                          tracking-[3px]
                          font-semibold
                        "
                      >
                        Topics of Interest
                      </span>

                    </div>


                    {/* =================================================
                        SUBTOPICS
                    ================================================= */}

                    <div
                      className="
                        mt-8
                        grid
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-x-8
                        gap-y-4
                      "
                    >

                      {track.subtopics.map((subtopic, subIndex) => (

                        <motion.div
                          key={subIndex}
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: subIndex * 0.02,
                          }}
                          className="
                            group/item
                            flex
                            items-start
                            gap-3
                            rounded-xl
                            px-3
                            py-3
                            border
                            border-transparent
                            hover:border-cyan-400/10
                            hover:bg-cyan-500/5
                            transition-all
                            duration-300
                          "
                        >

                          {/* Bullet */}

                          <span
                            className="
                              mt-[7px]
                              w-2
                              h-2
                              flex-shrink-0
                              rounded-full
                              bg-cyan-400
                              shadow-[0_0_8px_rgba(34,211,238,.7)]
                              group-hover/item:scale-125
                              transition-transform
                            "
                          />

                          {/* Text */}

                          <span
                            className="
                              text-sm
                              md:text-[15px]
                              leading-6
                              text-slate-400
                              group-hover/item:text-slate-200
                              transition-colors
                            "
                          >
                            {subtopic}
                          </span>

                        </motion.div>

                      ))}

                    </div>


                    {/* Bottom Accent */}

                    <div className="mt-10 flex items-center justify-between">

                      <div
                        className="
                          h-px
                          flex-1
                          bg-gradient-to-r
                          from-cyan-400/30
                          to-transparent
                        "
                      />

                      <div
                        className="
                          ml-6
                          flex
                          items-center
                          gap-2
                          text-cyan-400/60
                          text-xs
                          uppercase
                          tracking-[2px]
                        "
                      >
                        Research Track

                        <ArrowRight size={14} />

                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>
      <Footer/>
    </div>
  );
}