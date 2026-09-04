import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../components/Logo";
import {
  ArrowRight,
  FileText,
  ExternalLink,
  ShieldCheck,
  BookOpen,
  Upload,
  SearchCheck,
  UserPlus,
  CheckCircle2,
  X,
} from "lucide-react";

import Footer from "../components/Footer";

export default function CallForPapers() {
  const [showCmtPopup, setShowCmtPopup] = useState(false);

  // =========================================================
  // RESEARCH TRACKS
  // =========================================================

  const topics = [
    {
      title: "Track 1: Foundation of Cyber Security",
      chair: "Prof. (Dr.) Shreya Nag",
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
      title: "Track 2: Foundation of Cryptography",
      chair: "Prof. (Dr.) Siddhartha Roy",
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
      chair: "Prof. (Dr.) Arnab Ghosh",
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

  // =========================================================
  // PAPER SUBMISSION WORKFLOW
  // =========================================================

  const submissionSteps = [
    {
      number: "01",
      title: "Prepare Manuscript",
      desc:
        "Write your paper using the official IEEE Conference Template.",
      icon: BookOpen,
    },
    {
      number: "02",
      title: "Check Originality",
      desc:
        "Ensure your submission is original and follows ethical publishing practices.",
      icon: SearchCheck,
    },
    {
      number: "03",
      title: "Create CMT Account",
      desc:
        "Login or register on the Microsoft CMT submission portal.",
      icon: UserPlus,
    },
    {
      number: "04",
      title: "Upload Paper",
      desc:
        "Submit the PDF version together with complete author information.",
      icon: Upload,
    },
    {
      number: "05",
      title: "Peer Review",
      desc:
        "Your manuscript will undergo a rigorous technical review process.",
      icon: ShieldCheck,
    },
    {
      number: "06",
      title: "Camera Ready",
      desc:
        "Accepted papers must submit the final manuscript and complete registration.",
      icon: CheckCircle2,
    },
  ];

  // =========================================================
  // IEEE TEMPLATE LINKS
  // =========================================================

  const templateLinks = [
    {
      title: "US Letter (DOCX)",
      url:
        "https://ieee-org.widen.net/content/u1tqtjruak/original/conference-template-letter.docx",
    },
    {
      title: "A4 (DOCX)",
      url:
        "https://ieee-org.widen.net/content/ge5anzdecd/original/conference-template-a4.docx",
    },
    {
      title: "LaTeX Template (ZIP)",
      url:
        "https://ieee-org.widen.net/content/ssylclqfn/original/conference-latex-template.zip",
    },
    {
      title: "LaTeX Bibliography Files (ZIP)",
      url:
        "https://ieee-org.widen.net/content/t4f4hdfmwu/original/IEEEtranBST2.zip",
    },
    {
      title: "IEEE Official Template on Overleaf",
      url:
        "https://www.overleaf.com/gallery/tagged/ieee-official",
    },
  ];

  return (
    <>
      {/* =========================================================
          PAGE
      ========================================================= */}

      <main className="min-h-screen bg-[#F7FAFF] text-[#172554]">
        <Logo />

        {/* =======================================================
            HERO / HEADER
        ======================================================= */}

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
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Call For

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#93C5FD]
                  via-[#60A5FA]
                  to-[#BFDBFE]
                  bg-clip-text
                  pb-1
                  text-transparent
                "
              >
                Papers
              </span>
            </h1>

            {/* Hero Description */}

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
              Authors are invited to submit original research papers
              related to, but not limited to, the following conference
              themes.
            </p>

          </motion.div>
        </section>


        {/* =======================================================
            TOPICS OF INTEREST
        ======================================================= */}

        <section
          className="
            relative
            overflow-hidden
            bg-gradient-to-b
            from-white
            via-[#F8FBFF]
            to-[#F1F6FD]
            px-5
            py-14
            sm:px-6
            sm:py-18
            lg:px-8
            lg:py-20
          "
        >

          <div className="relative z-10 mx-auto max-w-7xl">

            {/* Section Heading */}

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
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-12 text-center"
            >

              <h2
                className="
                  mt-3
                  text-3xl
                  font-black
                  text-[#172554]
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Topics of Interest
              </h2>

            </motion.div>


            {/* Track Cards */}

            <div
              className="
                grid
                gap-7
                md:grid-cols-2
                xl:grid-cols-3
              "
            >

              {topics.map((topic, index) => (
                <motion.div
                  key={topic.title}
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
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
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

                  <div className="p-7 sm:p-8">

                    {/* Track Number */}

                    <div className="flex items-center justify-between">

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#E8F1FF]
                          text-[#075DB8]
                        "
                      >
                        <span className="text-lg font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                    </div>


                    {/* Track Title */}

                    <h3
                      className="
                        mt-6
                        text-xl
                        font-bold
                        leading-8
                        text-[#172554]
                        underline decoration-2
                      "
                    >
                      {topic.title}
                    </h3>


                    {/* Track Chair */}

                    <div
                      className="
                        mt-4
                        rounded-xl
                        border
                        border-[#D6E3F5]
                        bg-[#F8FBFF]
                        px-4
                        py-3
                      "
                    >

                      <p
                        className="
                          text-xs
                          font-bold
                          uppercase
                          tracking-[1px]
                          text-[#075DB8]
                        "
                      >
                        Track Chair
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                          text-[#334155]
                        "
                      >
                        {topic.chair}
                      </p>

                    </div>


                    {/* Subtopics */}

                    <div className="mt-6 space-y-3">

                      {topic.subtopics.map((subtopic, subIndex) => (
                        <div
                          key={subIndex}
                          className="
                            flex
                            items-start
                            gap-3
                            text-base
                            font-medium
                            leading-7
                            text-[#334155]
                          "
                        >

                          <span
                            className="
                              mt-[10px]
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-[#075DB8]
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

          </div>
        </section>


        {/* =======================================================
            PAPER SUBMISSION WORKFLOW
        ======================================================= */}

        <section
          className="
            relative
            overflow-hidden
            bg-[#F7FAFF]
            px-5
            py-14
            sm:px-6
            sm:py-18
            lg:px-8
            lg:py-20
          "
        >

          <div className="relative z-10 mx-auto max-w-7xl">

            {/* Section Heading */}

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
              className="mb-12 text-center"
            >

              <h2
                className="
                  mt-3
                  text-3xl
                  font-black
                  text-[#172554]
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Paper Submission
              </h2>

              <div
                className="
                  mx-auto
                  mt-4
                  h-1
                  w-16
                  rounded-full
                  bg-[#075DB8]
                "
              />

            </motion.div>


            {/* Submission Cards */}

            <div
              className="
                mt-14
                grid
                gap-7
                lg:grid-cols-2
              "
            >

              {/* =====================================================
                  IEEE TEMPLATE
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
                }}
                transition={{
                  duration: 0.6,
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

                <div className="p-7 sm:p-9">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#E8F1FF]
                      text-[#075DB8]
                    "
                  >
                    <FileText size={27} />
                  </div>

                  <p
                    className="
                      mt-6
                      text-xs
                      font-bold
                      uppercase
                      tracking-[2px]
                      text-[#075DB8]
                    "
                  >
                    Author Resources
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-bold
                      text-[#172554]
                      sm:text-3xl
                    "
                  >
                    IEEE Conference Template
                  </h3>

                  <p
                    className="
                      mt-4
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                    "
                  >
                    Authors should prepare manuscripts using the official
                    IEEE Conference Template. Papers must comply with IEEE
                    formatting, plagiarism and publication guidelines before
                    submission.
                  </p>


                  {/* Template Links */}

                  <div className="mt-7 space-y-3">

                    {templateLinks.map((link) => (
                      <a
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          justify-between
                          gap-4
                          rounded-xl
                          border
                          border-[#D6E3F5]
                          bg-[#F8FBFF]
                          px-6
                          py-5
                          text-sm
                          font-bold
                          text-[#0056B3]
                          transition-colors
                          duration-300
                          hover:bg-[#E8F1FF]
                        "
                      >

                        <span>
                          {link.title}
                        </span>

                        <ExternalLink
                          size={17}
                          className="shrink-0"
                        />

                      </a>
                    ))}

                  </div>

                </div>

              </motion.div>


              {/* =====================================================
                  MICROSOFT CMT
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
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
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

                <div className="p-7 sm:p-9">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#E8F1FF]
                      text-[#075DB8]
                    "
                  >
                    <ArrowRight size={27} />
                  </div>

                  <p
                    className="
                      mt-6
                      text-xs
                      font-bold
                      uppercase
                      tracking-[2px]
                      text-[#075DB8]
                    "
                  >
                    Submission Portal
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-bold
                      text-[#172554]
                      sm:text-3xl
                    "
                  >
                    Microsoft CMT Submission
                  </h3>


                  <button
                    onClick={() => setShowCmtPopup(true)}
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-[#075DB8]
                      px-7
                      py-3.5
                      font-bold
                      text-white
                      transition-colors
                      duration-300
                      hover:bg-[#064F9C]
                    "
                  >
                    Open CMT Portal

                    <ArrowRight size={19} />

                  </button>

                </div>

              </motion.div>

            </div>

          </div>

        </section>


        {/* =========================================================
            CMT POPUP
        ========================================================= */}

        <AnimatePresence>

          {showCmtPopup && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="
                fixed
                inset-0
                z-[999]
                flex
                items-center
                justify-center
                bg-[#020817]/70
                p-5
                backdrop-blur-md
              "
              onClick={() => setShowCmtPopup(false)}
            >

              <motion.div
                initial={{
                  scale: 0.94,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.94,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                onClick={(e) => e.stopPropagation()}
                className="
                  relative
                  w-full
                  max-w-xl
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-[#DCE3EB]
                  border-t-4
                  border-t-[#075DB8]
                  bg-white
                "
              >

                <div className="p-7 sm:p-9">

                  {/* Close */}

                  <button
                    onClick={() => setShowCmtPopup(false)}
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F1F5F9]
                      text-[#64748B]
                      transition-colors
                      duration-300
                      hover:bg-[#E2E8F0]
                      hover:text-[#172554]
                    "
                  >
                    <X size={18} />
                  </button>


                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#E8F1FF]
                      text-[#075DB8]
                    "
                  >
                    <ArrowRight size={27} />
                  </div>


                  <p
                    className="
                      mt-6
                      text-xs
                      font-bold
                      uppercase
                      tracking-[2px]
                      text-[#075DB8]
                    "
                  >
                    Microsoft CMT
                  </p>

                  <h2
                    className="
                      mt-2
                      text-3xl
                      font-bold
                      text-[#172554]
                    "
                  >
                    Microsoft CMT Portal
                  </h2>


                  <p
                    className="
                      mt-5
                      text-lg
                      font-semibold
                      leading-8
                      text-[#334155]
                    "
                  >
                    Paper submission will be handled through the official
                    Microsoft Conference Management Toolkit (CMT). Authors
                    should prepare their manuscript using the IEEE format
                    before submission.
                  </p>


                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-4
                    "
                  >

                    {/* CMT */}

                    <button
                      onClick={() =>
                        window.open(
                          "https://cmt3.research.microsoft.com/CYCRAI2027",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        bg-[#075DB8]
                        px-7
                        py-3.5
                        font-bold
                        text-white
                        transition-colors
                        duration-300
                        hover:bg-[#064F9C]
                      "
                    >
                      Open CMT

                      <ExternalLink size={18} />

                    </button>


                    {/* Close */}

                    <button
                      onClick={() => setShowCmtPopup(false)}
                      className="
                        rounded-full
                        border
                        border-[#D6E3F5]
                        px-7
                        py-3.5
                        font-semibold
                        text-[#475569]
                        transition-colors
                        duration-300
                        hover:bg-[#F8FAFC]
                      "
                    >
                      Close
                    </button>

                  </div>

                </div>

              </motion.div>

            </motion.div>
          )}

        </AnimatePresence>

      </main>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </>
  );
}